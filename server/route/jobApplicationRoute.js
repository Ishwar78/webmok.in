const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const JobApplication = require('../module/JobApplication');

// Configure Multer storage for CV / Resume files
const uploadDir = path.join(__dirname, '../uploads/resumes');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `resume-${baseName}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB max
  fileFilter: (req, file, cb) => {
    // Allow documents and images
    const allowed = /pdf|doc|docx|rtf|txt|png|jpg|jpeg/i;
    const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
    if (allowed.test(ext) || allowed.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only document files (.pdf, .doc, .docx, .rtf, .txt) are accepted.'));
    }
  }
});

// POST submit job application with optional CV file
router.post('/apply', upload.single('cvFile'), async (req, res) => {
  try {
    const { name, email, phone, city, state, message, jobTitle, jobId } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required.' });
    }

    let cvUrl = '';
    let cvOriginalName = '';

    if (req.file) {
      cvUrl = `/uploads/resumes/${req.file.filename}`;
      cvOriginalName = req.file.originalname;
    }

    const application = new JobApplication({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city: city ? city.trim() : '',
      state: state ? state.trim() : '',
      message: message ? message.trim() : '',
      jobTitle: jobTitle ? jobTitle.trim() : 'General Application',
      jobId: jobId || '',
      cvUrl,
      cvOriginalName,
      status: 'Pending'
    });

    const saved = await application.save();
    console.log(`New job application received from ${saved.name} for ${saved.jobTitle}`);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our HR team will review your profile.',
      data: saved
    });
  } catch (error) {
    console.error('Error saving job application:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET all job applications for admin
router.get('/', async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT update status
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE job application
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await JobApplication.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    // Attempt to delete CV file from disk if exists
    if (deleted.cvUrl) {
      const filePath = path.join(__dirname, '..', deleted.cvUrl);
      if (fs.existsSync(filePath)) {
        try { fs.unlinkSync(filePath); } catch (e) {}
      }
    }

    res.json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

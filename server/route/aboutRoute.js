const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const About = require('../module/About');

// Ensure about uploads directory exists
const uploadDir = path.join(__dirname, '../uploads/about');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `about-${uniqueSuffix}-${cleanName}`);
  }
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|webp|gif|svg/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files (JPG, PNG, WEBP, GIF, SVG) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB
  fileFilter
});

// Helper to get or create About document
const getAboutDoc = async () => {
  let doc = await About.findOne();
  if (!doc) {
    doc = new About({});
    await doc.save();
  }
  return doc;
};

// GET /api/about
router.get('/', async (req, res) => {
  try {
    const doc = await getAboutDoc();
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error('Error getting About data:', err.message);
    res.status(500).json({ success: false, message: 'Server error loading About data' });
  }
});

// POST or PUT /api/about
router.post('/', async (req, res) => {
  try {
    const { bentoStats, corporateProfile, expertiseExecution, executiveGuidance } = req.body;
    let doc = await getAboutDoc();

    if (bentoStats) doc.bentoStats = bentoStats;
    if (corporateProfile) doc.corporateProfile = corporateProfile;
    if (expertiseExecution) doc.expertiseExecution = expertiseExecution;
    if (executiveGuidance) doc.executiveGuidance = executiveGuidance;

    await doc.save();
    res.json({ success: true, message: 'About Us content successfully updated in MongoDB!', data: doc });
  } catch (err) {
    console.error('Error updating About data:', err.message);
    res.status(500).json({ success: false, message: err.message || 'Failed to update About content' });
  }
});

// POST /api/about/upload (Image Upload)
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }
    const relativeUrl = `/uploads/about/${req.file.filename}`;
    res.json({
      success: true,
      message: 'Image uploaded successfully!',
      imageUrl: relativeUrl,
      filename: req.file.filename
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Image upload error' });
  }
});

// POST /api/about/reset
router.post('/reset', async (req, res) => {
  try {
    await About.deleteMany({});
    const newDoc = new About({});
    await newDoc.save();
    res.json({ success: true, message: 'About Us content reset to default values!', data: newDoc });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to reset About data' });
  }
});

module.exports = router;

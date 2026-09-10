const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const HeroSlide = require('../module/HeroSlide');

// Ensure hero-slides uploads directory exists
const uploadDir = path.join(__dirname, '../uploads/hero-slides');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${cleanName}`);
  }
});

// File filter allowing video and image files
const fileFilter = (req, file, cb) => {
  const allowedTypes = /mp4|webm|ogg|quicktime|x-matroska|avi|mov|m4v|jpg|jpeg|png|webp|gif/;
  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  const isAllowed = allowedTypes.test(extname) || mimetype.startsWith('video/') || mimetype.startsWith('image/');
  if (isAllowed) {
    cb(null, true);
  } else {
    cb(new Error('Only image (JPG, PNG, WebP) or video files (MP4, WebM, MOV) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 250 * 1024 * 1024 }, // 250MB
  fileFilter
});

// Seed default slide if collection is empty
const ensureDefaultSlide = async () => {
  const count = await HeroSlide.countDocuments();
  if (count === 0) {
    await HeroSlide.create({
      title: 'Default Hero Video',
      mediaType: 'video',
      mediaUrl: '/Home-Hero.mp4',
      originalName: 'Home-Hero.mp4',
      order: 0,
      isActive: true
    });
  }
};

// GET all slides
router.get('/', async (req, res) => {
  try {
    await ensureDefaultSlide();
    const slides = await HeroSlide.find().sort({ order: 1, createdAt: 1 });
    res.json({ success: true, count: slides.length, data: slides });
  } catch (err) {
    console.error('Error fetching hero slides:', err);
    res.status(500).json({ success: false, message: 'Server error fetching hero slides', error: err.message });
  }
});

// POST new slide by URL
router.post('/', async (req, res) => {
  try {
    const { title, mediaType, mediaUrl, order, isActive } = req.body;
    if (!mediaUrl || !mediaUrl.trim()) {
      return res.status(400).json({ success: false, message: 'mediaUrl is required' });
    }

    const type = mediaType || (mediaUrl.match(/\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i) ? 'video' : 'image');

    const newSlide = await HeroSlide.create({
      title: title || (type === 'video' ? 'Hero Video Slide' : 'Hero Image Slide'),
      mediaType: type,
      mediaUrl: mediaUrl.trim(),
      order: Number(order) || 0,
      isActive: isActive !== false
    });

    res.status(201).json({ success: true, message: 'Hero slide added successfully', data: newSlide });
  } catch (err) {
    console.error('Error adding hero slide:', err);
    res.status(500).json({ success: false, message: 'Server error adding hero slide', error: err.message });
  }
});

// POST upload image/video file
router.post('/upload', upload.single('mediaFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No media file provided' });
    }

    const isVideo = req.file.mimetype.startsWith('video/') || req.file.originalname.match(/\.(mp4|webm|mov|m4v|ogg)$/i);
    const mediaType = isVideo ? 'video' : 'image';
    const relativeUrl = `/uploads/hero-slides/${req.file.filename}`;

    const count = await HeroSlide.countDocuments();

    const slide = await HeroSlide.create({
      title: req.body.title || (isVideo ? 'Uploaded Hero Video' : 'Uploaded Hero Image'),
      mediaType,
      mediaUrl: relativeUrl,
      originalName: req.file.originalname,
      filename: req.file.filename,
      size: req.file.size,
      mimeType: req.file.mimetype,
      order: count,
      isActive: true
    });

    res.status(201).json({ success: true, message: 'Hero slide uploaded and created successfully', data: slide });
  } catch (err) {
    console.error('Error uploading hero slide:', err);
    res.status(500).json({ success: false, message: 'Server error uploading hero slide', error: err.message });
  }
});

// PUT update slide
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, mediaType, mediaUrl, order, isActive } = req.body;

    const slide = await HeroSlide.findById(id);
    if (!slide) {
      return res.status(404).json({ success: false, message: 'Slide not found' });
    }

    if (title !== undefined) slide.title = title;
    if (mediaType !== undefined) slide.mediaType = mediaType;
    if (mediaUrl !== undefined) slide.mediaUrl = mediaUrl;
    if (order !== undefined) slide.order = Number(order);
    if (isActive !== undefined) slide.isActive = Boolean(isActive);

    await slide.save();
    res.json({ success: true, message: 'Slide updated successfully', data: slide });
  } catch (err) {
    console.error('Error updating slide:', err);
    res.status(500).json({ success: false, message: 'Server error updating slide', error: err.message });
  }
});

// DELETE slide
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const slide = await HeroSlide.findById(id);
    if (!slide) {
      return res.status(404).json({ success: false, message: 'Slide not found' });
    }

    // If file was uploaded to server, delete it from disk
    if (slide.filename) {
      const diskPath = path.join(uploadDir, slide.filename);
      if (fs.existsSync(diskPath)) {
        try { fs.unlinkSync(diskPath); } catch (e) { console.warn('Could not remove file:', e.message); }
      }
    }

    await HeroSlide.findByIdAndDelete(id);
    res.json({ success: true, message: 'Hero slide deleted successfully' });
  } catch (err) {
    console.error('Error deleting hero slide:', err);
    res.status(500).json({ success: false, message: 'Server error deleting hero slide', error: err.message });
  }
});

module.exports = router;

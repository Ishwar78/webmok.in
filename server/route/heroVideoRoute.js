const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const HeroVideo = require('../module/HeroVideo');

// Ensure hero-video uploads directory exists
const uploadDir = path.join(__dirname, '../uploads/hero-video');
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
    cb(null, `${uniqueSuffix}-${cleanName}`);
  }
});

// File filter for video files
const fileFilter = (req, file, cb) => {
  const videoTypes = /mp4|webm|ogg|quicktime|x-matroska|avi|mov|m4v/;
  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  const isVideo = videoTypes.test(extname) || mimetype.startsWith('video/');

  if (isVideo) {
    cb(null, true);
  } else {
    cb(new Error('Only video files (MP4, WebM, MOV, AVI, M4V, OGG) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 250 * 1024 * 1024 }, // 250MB max
  fileFilter
});

// Helper to get or create single HeroVideo record
const getHeroVideoRecord = async () => {
  let doc = await HeroVideo.findOne();
  if (!doc) {
    doc = await HeroVideo.create({
      title: 'Home Hero Video',
      videoUrl: '/Home-Hero.mp4',
      originalName: 'Home-Hero.mp4',
      filename: '',
      size: 0,
      mimeType: 'video/mp4',
      isDefault: true
    });
  }
  return doc;
};

// =========================================================================
// 1. GET CURRENT HERO VIDEO
// =========================================================================
router.get('/', async (req, res) => {
  try {
    const heroVideo = await getHeroVideoRecord();
    res.json({
      success: true,
      data: heroVideo
    });
  } catch (error) {
    console.error('Error fetching hero video:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch hero video',
      error: error.message
    });
  }
});

// =========================================================================
// 2. UPLOAD HERO VIDEO (Multipart Form Data)
// =========================================================================
router.post('/upload', (req, res) => {
  upload.single('video')(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        success: false,
        message: `Upload error: ${err.message}`
      });
    } else if (err) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No video file uploaded'
      });
    }

    try {
      const doc = await getHeroVideoRecord();

      // If previous file exists and is not default, optionally delete it
      if (doc.filename && !doc.isDefault) {
        const oldPath = path.join(uploadDir, doc.filename);
        if (fs.existsSync(oldPath)) {
          try {
            fs.unlinkSync(oldPath);
          } catch (e) {
            console.warn('Could not remove previous video file:', e.message);
          }
        }
      }

      const relativeUrl = `/uploads/hero-video/${req.file.filename}`;
      doc.title = req.body.title || req.file.originalname;
      doc.videoUrl = relativeUrl;
      doc.originalName = req.file.originalname;
      doc.filename = req.file.filename;
      doc.size = req.file.size;
      doc.mimeType = req.file.mimetype;
      doc.isDefault = false;

      await doc.save();

      res.json({
        success: true,
        message: 'Hero video uploaded and updated successfully',
        data: doc
      });
    } catch (error) {
      console.error('Error saving uploaded hero video:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to save hero video',
        error: error.message
      });
    }
  });
});

// =========================================================================
// 3. SET VIDEO BY DIRECT URL / TITLE
// =========================================================================
router.post('/url', async (req, res) => {
  try {
    const { videoUrl, title } = req.body;
    if (!videoUrl) {
      return res.status(400).json({
        success: false,
        message: 'videoUrl is required'
      });
    }

    const doc = await getHeroVideoRecord();
    doc.videoUrl = videoUrl;
    if (title) doc.title = title;
    doc.isDefault = false;
    await doc.save();

    res.json({
      success: true,
      message: 'Hero video URL updated successfully',
      data: doc
    });
  } catch (error) {
    console.error('Error updating hero video URL:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update hero video URL',
      error: error.message
    });
  }
});

// =========================================================================
// 4. RESET TO DEFAULT VIDEO
// =========================================================================
router.post('/reset', async (req, res) => {
  try {
    const doc = await getHeroVideoRecord();

    // Delete custom uploaded file if exists
    if (doc.filename) {
      const oldPath = path.join(uploadDir, doc.filename);
      if (fs.existsSync(oldPath)) {
        try {
          fs.unlinkSync(oldPath);
        } catch (e) {
          console.warn('Could not delete old video file:', e.message);
        }
      }
    }

    doc.title = 'Home Hero Video';
    doc.videoUrl = '/Home-Hero.mp4';
    doc.originalName = 'Home-Hero.mp4';
    doc.filename = '';
    doc.size = 0;
    doc.mimeType = 'video/mp4';
    doc.isDefault = true;

    await doc.save();

    res.json({
      success: true,
      message: 'Hero video reset to default (/Home-Hero.mp4)',
      data: doc
    });
  } catch (error) {
    console.error('Error resetting hero video:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reset hero video',
      error: error.message
    });
  }
});

module.exports = router;

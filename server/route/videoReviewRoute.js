const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const VideoReview = require('../module/VideoReview');

// Multer storage for video files
const uploadDir = path.join(__dirname, '../uploads/video-reviews');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

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

const fileFilter = (req, file, cb) => {
  const videoExts = /mp4|webm|ogg|quicktime|x-matroska|avi|mov|m4v/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (videoExts.test(ext) || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only video files (MP4, WebM, MOV, AVI, M4V) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 250 * 1024 * 1024 }, // 250MB
  fileFilter
});

// Default seed video reviews
const defaultStudentVideos = [
  {
    studentName: 'Aman Verma',
    course: 'Advanced Digital Marketing with AI',
    videoUrl: '/hh2-CH6clGIc.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 1,
    isActive: true
  },
  {
    studentName: 'Deepak Sharma',
    course: 'Full-Stack Performance Marketing & SEO',
    videoUrl: '/hh3-CAsds3iE.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 2,
    isActive: true
  },
  {
    studentName: 'Rohan Malik',
    course: 'AI Content Strategy & Social Media Growth',
    videoUrl: '/hh4-a6dUAa-8.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 3,
    isActive: true
  },
  {
    studentName: 'Priya Saini',
    course: 'E-commerce Ads & Conversion Rate Mastery',
    videoUrl: '/TM0011-CnXlWYx0.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 4,
    isActive: true
  },
  {
    studentName: 'Sahil Hooda',
    course: 'Google Search Ads & Analytics Intelligence',
    videoUrl: '/TM0016-CLpL79Mu.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 5,
    isActive: true
  },
  {
    studentName: 'Nitin Kumar',
    course: 'Meta Performance Ads & Funnel Architecture',
    videoUrl: '/TM004-ypZUa7vp.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 6,
    isActive: true
  },
  {
    studentName: 'Anjali Tanwar',
    course: 'Lead Generation & Brand Positioning AI',
    videoUrl: '/WhatsApp Video 2026-07-01 at 5.54.13 PM-BCNnVdW3.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 7,
    isActive: true
  },
  {
    studentName: 'Vikas Dahiya',
    course: 'Corporate Digital Marketing & Web Strategy',
    videoUrl: '/Home-Hero.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 8,
    isActive: true
  }
];

const seedVideoReviewsIfEmpty = async () => {
  try {
    const count = await VideoReview.countDocuments();
    if (count === 0) {
      await VideoReview.insertMany(defaultStudentVideos);
      console.log('Seeded default video reviews in MongoDB');
    }
  } catch (err) {
    console.warn('VideoReview auto-seed note:', err.message);
  }
};
seedVideoReviewsIfEmpty();

// GET all video reviews
router.get('/', async (req, res) => {
  try {
    const { all } = req.query;
    const filter = all === 'true' ? {} : { isActive: true };
    let list = await VideoReview.find(filter).sort({ order: 1, createdAt: -1 });
    if (!list || list.length === 0) {
      list = defaultStudentVideos;
    }
    res.json({ success: true, data: list });
  } catch (err) {
    console.error('Error fetching video reviews:', err);
    res.json({ success: true, data: defaultStudentVideos });
  }
});

// GET single
router.get('/:id', async (req, res) => {
  try {
    const item = await VideoReview.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Video review not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST direct video file upload
router.post('/upload-video', upload.single('videoFile'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No video file provided' });
    }
    const videoUrl = `/uploads/video-reviews/${req.file.filename}`;
    res.json({ success: true, videoUrl, filename: req.file.filename });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create
router.post('/', upload.single('videoFile'), async (req, res) => {
  try {
    const { studentName, course, videoUrl, batch, tag, rating, order, isActive } = req.body;
    let finalVideoUrl = videoUrl || '';
    if (req.file) {
      finalVideoUrl = `/uploads/video-reviews/${req.file.filename}`;
    }

    if (!finalVideoUrl) {
      return res.status(400).json({ success: false, message: 'Please upload a video or provide a valid video URL' });
    }

    const doc = new VideoReview({
      studentName,
      course: course || 'Advanced Digital Marketing with AI',
      videoUrl: finalVideoUrl,
      batch: batch || '2025-26 Batch',
      tag: tag || 'WEB MOK - STORY',
      rating: Number(rating) || 5,
      order: Number(order) || 0,
      isActive: isActive !== undefined ? String(isActive) === 'true' : true
    });

    await doc.save();
    res.status(201).json({ success: true, data: doc, message: 'Video review created successfully!' });
  } catch (err) {
    console.error('Error creating video review:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update
router.put('/:id', upload.single('videoFile'), async (req, res) => {
  try {
    const { studentName, course, videoUrl, batch, tag, rating, order, isActive } = req.body;
    const updateFields = {};

    if (studentName !== undefined) updateFields.studentName = studentName;
    if (course !== undefined) updateFields.course = course;
    if (batch !== undefined) updateFields.batch = batch;
    if (tag !== undefined) updateFields.tag = tag;
    if (rating !== undefined) updateFields.rating = Number(rating);
    if (order !== undefined) updateFields.order = Number(order);
    if (isActive !== undefined) updateFields.isActive = String(isActive) === 'true';

    if (req.file) {
      updateFields.videoUrl = `/uploads/video-reviews/${req.file.filename}`;
    } else if (videoUrl !== undefined) {
      updateFields.videoUrl = videoUrl;
    }

    const updated = await VideoReview.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Video review not found' });
    }

    res.json({ success: true, data: updated, message: 'Video review updated successfully!' });
  } catch (err) {
    console.error('Error updating video review:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await VideoReview.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Video review not found' });
    res.json({ success: true, message: 'Video review deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const VideoShowcase = require('../module/VideoShowcase');

// Multer storage for video showcase (thumbnail + video files)
const uploadDir = path.join(__dirname, '../uploads/video-showcase');
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
  const allowedExts = /jpg|jpeg|png|webp|gif|svg|mp4|webm|ogg|quicktime|x-matroska|avi|mov|m4v/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExts.test(ext) || file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only media files (images or videos) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 250 * 1024 * 1024 }, // 250MB
  fileFilter
});

const uploadFields = upload.fields([
  { name: 'thumbnailFile', maxCount: 1 },
  { name: 'videoFile', maxCount: 1 }
]);

// Helper: Normalize YouTube URL into embed link
const formatYouTubeEmbed = (url) => {
  if (!url) return '';
  const trimmed = url.trim();

  // If already embed URL
  if (trimmed.includes('youtube.com/embed/')) return trimmed;

  // youtu.be/VIDEO_ID
  const youtuBeMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch && youtuBeMatch[1]) {
    return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
  }

  // youtube.com/watch?v=VIDEO_ID
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  // youtube.com/shorts/VIDEO_ID
  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  return trimmed;
};

// Category helper
const getCategoryName = (cat) => {
  switch (cat) {
    case 'corporate': return 'Corporate Films';
    case 'explainer': return '2D & Motion Graphics';
    case '3d': return '3D Product Demos';
    case 'reels': return 'Social Media Reels';
    default: return 'Featured Video';
  }
};

// Seed Defaults
const defaultVideoProjects = [
  {
    title: 'Roto Rudra Solar Tech Corporate Brand Film',
    category: 'corporate',
    categoryName: 'Corporate Films',
    client: 'Roto Rudra Solar Tech',
    duration: '2:45 min',
    views: '120K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'High-production cinematic corporate film documenting modern solar pump manufacturing, farmer testimonials, and renewable green energy.',
    order: 1,
    isActive: true
  },
  {
    title: 'Horizon Swift 2D Animated Explainer Video',
    category: 'explainer',
    categoryName: '2D & Motion Graphics',
    client: 'Horizon Pay Swift UK',
    duration: '1:30 min',
    views: '85K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'Engaging character animation and fluid kinetic typography explaining cross-border money transfer and multi-currency virtual accounts.',
    order: 2,
    isActive: true
  },
  {
    title: 'Precision Trimmer 3D CGI Product Launch',
    category: '3d',
    categoryName: '3D Product Demos',
    client: 'Ultimate Bro Grooming',
    duration: '0:45 min',
    views: '450K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'Hyper-realistic 3D CGI rotation showing titanium blade engineering, waterproof housing seals, and fast magnetic charging dock.',
    order: 3,
    isActive: true
  },
  {
    title: 'LuxeCart Fashion Trends Viral Reels Series',
    category: 'reels',
    categoryName: 'Social Media Reels',
    client: 'LuxeCart Essentials',
    duration: '0:30 min',
    views: '1.2M+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'Fast-paced rhythmic fashion reels featuring transition choreography, audio beat matching, and direct shop-the-look overlays.',
    order: 4,
    isActive: true
  },
  {
    title: 'MediCare Robotic Surgery Patient Story',
    category: 'corporate',
    categoryName: 'Corporate Films',
    client: 'MediCare Superspecialty',
    duration: '3:15 min',
    views: '65K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'Emotional documentary-style storytelling showcasing life-saving robotic knee replacement surgery and patient recovery milestones.',
    order: 5,
    isActive: true
  },
  {
    title: 'Edura Global Interactive LMS Walkthrough',
    category: 'explainer',
    categoryName: '2D & Motion Graphics',
    client: 'Edura Academy',
    duration: '2:10 min',
    views: '95K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'Sleek screen-recorded micro-interactions with stylized motion design showing seamless online classroom and mock exam features.',
    order: 6,
    isActive: true
  }
];

const seedVideoShowcaseIfEmpty = async () => {
  try {
    const count = await VideoShowcase.countDocuments();
    if (count === 0) {
      await VideoShowcase.insertMany(defaultVideoProjects);
      console.log('Seeded default video showcase projects in MongoDB');
    }
  } catch (err) {
    console.warn('VideoShowcase auto-seed note:', err.message);
  }
};
seedVideoShowcaseIfEmpty();

// GET all
router.get('/', async (req, res) => {
  try {
    const { all } = req.query;
    const filter = all === 'true' ? {} : { isActive: true };
    let list = await VideoShowcase.find(filter).sort({ order: 1, createdAt: -1 });
    if (!list || list.length === 0) {
      list = defaultVideoProjects;
    }
    res.json({ success: true, data: list });
  } catch (err) {
    console.error('Error fetching video showcase:', err);
    res.json({ success: true, data: defaultVideoProjects });
  }
});

// GET single
router.get('/:id', async (req, res) => {
  try {
    const item = await VideoShowcase.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Video project not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create
router.post('/', uploadFields, async (req, res) => {
  try {
    const {
      title,
      category,
      client,
      duration,
      views,
      thumbnail,
      videoUrl,
      videoType,
      description,
      order,
      isActive
    } = req.body;

    let finalThumbnail = thumbnail || '';
    if (req.files && req.files.thumbnailFile && req.files.thumbnailFile[0]) {
      finalThumbnail = `/uploads/video-showcase/${req.files.thumbnailFile[0].filename}`;
    }

    let finalVideoUrl = videoUrl || '';
    let finalVideoType = videoType || 'youtube';

    if (req.files && req.files.videoFile && req.files.videoFile[0]) {
      finalVideoUrl = `/uploads/video-showcase/${req.files.videoFile[0].filename}`;
      finalVideoType = 'upload';
    } else if (finalVideoUrl) {
      if (finalVideoUrl.includes('youtube.com') || finalVideoUrl.includes('youtu.be')) {
        finalVideoUrl = formatYouTubeEmbed(finalVideoUrl);
        finalVideoType = 'youtube';
      } else {
        finalVideoType = 'external';
      }
    }

    if (!finalVideoUrl) {
      return res.status(400).json({ success: false, message: 'Video file or video URL/link is required' });
    }

    const cat = category || 'corporate';
    const catName = getCategoryName(cat);

    const doc = new VideoShowcase({
      title,
      category: cat,
      categoryName: catName,
      client: client || '',
      duration: duration || '2:30 min',
      views: views || '100K+ Views',
      thumbnail: finalThumbnail || 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
      videoUrl: finalVideoUrl,
      videoType: finalVideoType,
      description: description || '',
      order: Number(order) || 0,
      isActive: isActive !== undefined ? String(isActive) === 'true' : true
    });

    await doc.save();
    res.status(201).json({ success: true, data: doc, message: 'Showcase video added successfully!' });
  } catch (err) {
    console.error('Error creating showcase video:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update
router.put('/:id', uploadFields, async (req, res) => {
  try {
    const {
      title,
      category,
      client,
      duration,
      views,
      thumbnail,
      videoUrl,
      videoType,
      description,
      order,
      isActive
    } = req.body;

    const updateFields = {};

    if (title !== undefined) updateFields.title = title;
    if (category !== undefined) {
      updateFields.category = category;
      updateFields.categoryName = getCategoryName(category);
    }
    if (client !== undefined) updateFields.client = client;
    if (duration !== undefined) updateFields.duration = duration;
    if (views !== undefined) updateFields.views = views;
    if (description !== undefined) updateFields.description = description;
    if (order !== undefined) updateFields.order = Number(order);
    if (isActive !== undefined) updateFields.isActive = String(isActive) === 'true';

    if (req.files && req.files.thumbnailFile && req.files.thumbnailFile[0]) {
      updateFields.thumbnail = `/uploads/video-showcase/${req.files.thumbnailFile[0].filename}`;
    } else if (thumbnail !== undefined) {
      updateFields.thumbnail = thumbnail;
    }

    if (req.files && req.files.videoFile && req.files.videoFile[0]) {
      updateFields.videoUrl = `/uploads/video-showcase/${req.files.videoFile[0].filename}`;
      updateFields.videoType = 'upload';
    } else if (videoUrl !== undefined) {
      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        updateFields.videoUrl = formatYouTubeEmbed(videoUrl);
        updateFields.videoType = 'youtube';
      } else {
        updateFields.videoUrl = videoUrl;
        updateFields.videoType = videoType || 'external';
      }
    }

    const updated = await VideoShowcase.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Video project not found' });
    }

    res.json({ success: true, data: updated, message: 'Showcase video updated successfully!' });
  } catch (err) {
    console.error('Error updating showcase video:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await VideoShowcase.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Video project not found' });
    res.json({ success: true, message: 'Video project deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

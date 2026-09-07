const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Outstanding = require('../module/Outstanding');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../uploads/outstanding');
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

// File filter for images and videos
const fileFilter = (req, file, cb) => {
  const imageTypes = /jpeg|jpg|png|webp|gif|svg\+xml|svg/;
  const videoTypes = /mp4|webm|ogg|quicktime|x-matroska|avi/;
  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  const isImage = imageTypes.test(extname) || mimetype.startsWith('image/');
  const isVideo = videoTypes.test(extname) || mimetype.startsWith('video/');

  if (isImage || isVideo) {
    cb(null, true);
  } else {
    cb(new Error('Only images (jpg, png, webp, gif, svg) and videos (mp4, webm, mov) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB max
  fileFilter
});

// Default initial tabs data
const defaultTabs = [
  {
    tabKey: 'analytics',
    tabNumber: '01',
    tabTitle: 'Real-Time Analytics',
    icon: 'FaChartLine',
    heading: 'Real-Time Analytics & BI',
    description: 'WebMok Pvt Ltd and team perform in-depth analysis on your business real-time status. We architect data dashboards and conversion analytics that eliminate ad waste and maximize customer lifetime value.',
    points: [
      {
        title: 'Super Responsive',
        text: 'Enthusiastic senior engineering team ready to accelerate your business goals with cutting-edge views and rapid technical execution.'
      },
      {
        title: 'High Security',
        text: 'We guarantee 100% data security, SSL encryption, and strict protection for your proprietary brand content across all digital channels.'
      },
      {
        title: 'Optimal Choice',
        text: 'Services engineered by WebMok consistently achieve the highest industry benchmarks for consumer satisfaction and sustained ROI.'
      }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: 'Active Growth Module',
    order: 1
  },
  {
    tabKey: 'ppc',
    tabNumber: '02',
    tabTitle: 'Pay-Per-Click',
    icon: 'FaBullhorn',
    heading: 'High-Intent Pay-Per-Click (PPC)',
    description: 'Supercharge your inbound pipeline with precision-engineered Google Search Ads, Performance Max, and remarketing funnels designed for maximum ROAS and minimized acquisition costs.',
    points: [
      {
        title: 'Targeted High-Intent Buyers',
        text: 'Capture prospects actively searching for your high-ticket offerings with exact keyword sculpting and negative match strategies.'
      },
      {
        title: 'A/B Tested High-Converting Copy',
        text: 'Compelling ad creatives, continuous conversion rate optimization, and dedicated frictionless landing page flows.'
      },
      {
        title: 'Transparent Budget Tracking',
        text: 'Real-time daily budget telemetry with verified cost-per-acquisition reporting and zero hidden markups.'
      }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: 'PPC Conversion Engine',
    order: 2
  },
  {
    tabKey: 'online',
    tabNumber: '03',
    tabTitle: 'Online Marketing',
    icon: 'FaLaptopCode',
    heading: 'Omnichannel Online Marketing',
    description: 'Comprehensive 360-degree digital roadmaps to position your brand as the definitive authority in your niche, outpace rivals, and establish perpetual lead funnels.',
    points: [
      {
        title: 'Data-Driven Positioning',
        text: 'Competitor gap analysis and custom brand messaging that directly speaks to high-value decision makers.'
      },
      {
        title: 'Unified Brand Cohesion',
        text: 'Synchronized visual presence across search engines, social platforms, email flows, and publisher networks.'
      },
      {
        title: 'Compounding Market Share',
        text: 'Continuous multi-channel visibility that builds long-term organic equity and sustainable revenue expansion.'
      }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: '360° Omnichannel Hub',
    order: 3
  },
  {
    tabKey: 'email',
    tabNumber: '04',
    tabTitle: 'Email Marketing',
    icon: 'FaEnvelope',
    heading: 'Email Marketing & Automation',
    description: 'Turn cold prospects into repeat, high-paying clients through behavioral email automation, hyper-personalized retention sequences, and conversion-focused newsletters.',
    points: [
      {
        title: 'Smart Segmentation Triggers',
        text: 'Dynamic audience segmentation based on buyer lifecycle stage, interaction history, and transactional intent.'
      },
      {
        title: 'High Inbox Deliverability',
        text: 'DKIM, SPF, and DMARC technical setup ensuring your communications land straight in the primary inbox.'
      },
      {
        title: 'Automated Recovery Funnels',
        text: 'Recover lost transactions and nurture inquiries into closed contracts on complete autopilot.'
      }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: 'Lifecycle Automation',
    order: 4
  },
  {
    tabKey: 'social',
    tabNumber: '05',
    tabTitle: 'Social Marketing',
    icon: 'FaUsers',
    heading: 'Viral Social Media Marketing',
    description: 'Build a passionate, loyal community around your brand with thumb-stopping social creative campaigns across Instagram, LinkedIn, YouTube, and Facebook.',
    points: [
      {
        title: 'High-Engagement Motion Assets',
        text: 'Captivating reels, carousel posts, infographics, and interactive storytelling engineered for virality.'
      },
      {
        title: 'Brand Reputation & Sentiment',
        text: 'Proactive community management, brand voice consistency, and positive sentiment cultivation.'
      },
      {
        title: 'Influencer & UGC Amplification',
        text: 'Partner with industry voices to establish immediate social proof and generate organic word of mouth.'
      }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: 'Social Virality Matrix',
    order: 5
  },
  {
    tabKey: 'digital',
    tabNumber: '06',
    tabTitle: 'Digital Marketing',
    icon: 'FaRocket',
    heading: 'Full Digital Transformation',
    description: 'Seamlessly blend modern React engineering, cloud microservices, high-ROI paid traffic, and organic SEO into a unified digital powerhouse that scales your enterprise.',
    points: [
      {
        title: 'Modern 2026 Tech Stack',
        text: 'Modern React architectures, ultrafast edge cloud deployments, headless CMS, and sub-second load times.'
      },
      {
        title: '360° Conversion Rate Optimization',
        text: 'Heatmap behavioral analysis, frictionless UX paths, and frictionless one-click lead capture flows.'
      },
      {
        title: 'Infinite Scalability',
        text: 'Cloud systems engineered to effortlessly handle hundreds of thousands of concurrent visitors without latency.'
      }
    ],
    mediaType: 'graph',
    mediaUrl: '',
    mediaBadgeText: 'Enterprise Scale Engine',
    order: 6
  }
];

// Helper to seed if empty
const ensureDefaultSeed = async () => {
  const count = await Outstanding.countDocuments();
  if (count === 0) {
    await Outstanding.insertMany(defaultTabs);
    console.log('✅ Default Outstanding tabs seeded in MongoDB');
  }
};

// 1. GET ALL TABS
router.get('/', async (req, res) => {
  try {
    await ensureDefaultSeed();
    const tabs = await Outstanding.find().sort({ order: 1 });
    res.json({ success: true, count: tabs.length, data: tabs });
  } catch (err) {
    console.error('Error fetching outstanding tabs:', err);
    res.status(500).json({ success: false, message: 'Server error fetching tabs', error: err.message });
  }
});

// 2. GET SINGLE TAB BY TABKEY
router.get('/:tabKey', async (req, res) => {
  try {
    const tab = await Outstanding.findOne({ tabKey: req.params.tabKey });
    if (!tab) {
      return res.status(404).json({ success: false, message: 'Tab not found' });
    }
    res.json({ success: true, data: tab });
  } catch (err) {
    console.error('Error fetching single tab:', err);
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// 3. FILE UPLOAD (IMAGE OR VIDEO)
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const isVideo = req.file.mimetype.startsWith('video/');
    const mediaType = isVideo ? 'video' : 'image';
    const relativeUrl = `/uploads/outstanding/${req.file.filename}`;

    res.json({
      success: true,
      message: `${mediaType === 'video' ? 'Video' : 'Image'} uploaded successfully`,
      mediaType,
      mediaUrl: relativeUrl,
      filename: req.file.filename,
      size: req.file.size
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, message: err.message || 'File upload failed' });
  }
});

// 4. UPDATE SINGLE TAB CONTENT & MEDIA
router.put('/:tabKey', async (req, res) => {
  try {
    const { tabKey } = req.params;
    const {
      tabTitle,
      heading,
      description,
      points,
      mediaType,
      mediaUrl,
      mediaPoster,
      mediaBadgeText
    } = req.body;

    let tab = await Outstanding.findOne({ tabKey });
    if (!tab) {
      return res.status(404).json({ success: false, message: `Tab '${tabKey}' not found` });
    }

    if (tabTitle !== undefined) tab.tabTitle = tabTitle;
    if (heading !== undefined) tab.heading = heading;
    if (description !== undefined) tab.description = description;
    if (points !== undefined && Array.isArray(points)) tab.points = points;
    if (mediaType !== undefined) tab.mediaType = mediaType;
    if (mediaUrl !== undefined) tab.mediaUrl = mediaUrl;
    if (mediaPoster !== undefined) tab.mediaPoster = mediaPoster;
    if (mediaBadgeText !== undefined) tab.mediaBadgeText = mediaBadgeText;

    await tab.save();

    res.json({
      success: true,
      message: `Tab '${tab.tabTitle}' updated successfully`,
      data: tab
    });
  } catch (err) {
    console.error('Error updating outstanding tab:', err);
    res.status(500).json({ success: false, message: 'Server error updating tab', error: err.message });
  }
});

// 5. RESET ALL TABS TO DEFAULT
router.post('/reset', async (req, res) => {
  try {
    await Outstanding.deleteMany({});
    const created = await Outstanding.insertMany(defaultTabs);
    res.json({
      success: true,
      message: 'All Outstanding tabs reset to default successfully',
      data: created
    });
  } catch (err) {
    console.error('Error resetting outstanding tabs:', err);
    res.status(500).json({ success: false, message: 'Server error resetting tabs', error: err.message });
  }
});

module.exports = router;

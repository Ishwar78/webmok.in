const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Portfolio = require('../module/Portfolio');

// Upload directory for portfolio images
const uploadDir = path.join(__dirname, '../uploads/portfolio');
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
  const allowed = /jpg|jpeg|png|webp|gif|svg/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.test(ext) || file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (JPG, PNG, WebP, SVG) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB
  fileFilter
});

// Default seed projects
const defaultProjects = [
  {
    title: 'EduTech Interactive Platform',
    slug: 'edutech-learning-platform',
    client: 'Apex Global Academy',
    category: 'web',
    categoryName: 'Web Development',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80',
    results: '+320% Student Enrollments',
    description: 'A cutting-edge LMS and interactive video course portal designed with sub-second page switching and secure Razorpay payment flows.',
    tag: 'LMS Portal',
    order: 1
  },
  {
    title: 'PaySwift Mobile Finance App',
    slug: 'fintech-crypto-wallet-app',
    client: 'PaySwift Fintech Ltd',
    category: 'app',
    categoryName: 'App Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&auto=format&fit=crop&q=80',
    results: '500K+ Active Installs',
    description: 'Cross-platform iOS and Android financial wallet offering instant UPI transfers, biometric authentication, and expense analytics.',
    tag: 'Fintech App',
    order: 2
  },
  {
    title: 'LuxeCart E-Commerce Brand',
    slug: 'luxury-fashion-ecommerce',
    client: 'Vogue Essentials',
    category: 'ecommerce',
    categoryName: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80',
    results: '₹1.8 Cr Monthly GMV',
    description: 'High-end designer fashion portal with visual lookbooks, instant variant swatches, abandoned cart recovery, and express checkout.',
    tag: 'E-Commerce',
    order: 3
  },
  {
    title: 'MediCare Healthcare Lead Funnel',
    slug: 'b2b-healthcare-seo-campaign',
    client: 'MediCare Multispecialty',
    category: 'seo',
    categoryName: 'SEO & PPC',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop&q=80',
    results: '1st Page Rank for 480+ Keywords',
    description: 'Comprehensive technical SEO audit and high-intent appointment booking PPC campaign that reduced cost-per-lead by 62%.',
    tag: 'Healthcare SEO',
    order: 4
  },
  {
    title: 'Skyline Real Estate Portal',
    slug: 'real-estate-crm-portal',
    client: 'Skyline Infrastructures',
    category: 'web',
    categoryName: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&auto=format&fit=crop&q=80',
    results: '4,200+ Verified Property Inquiries',
    description: 'Interactive map-based property search engine with virtual 360 walkthroughs and instant CRM WhatsApp lead distribution.',
    tag: 'Property Portal',
    order: 5
  },
  {
    title: 'FitPulse On-Demand Workout App',
    slug: 'fitness-tracker-mobile-app',
    client: 'PulseFit Technologies',
    category: 'app',
    categoryName: 'App Development',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=700&auto=format&fit=crop&q=80',
    results: '4.8 App Store Rating',
    description: 'Real-time workout coaching application with personalized calorie calculators, push notifications, and subscription tiers.',
    tag: 'Fitness App',
    order: 6
  }
];

const ensureDefaultPortfolio = async () => {
  const count = await Portfolio.countDocuments();
  if (count === 0) {
    await Portfolio.insertMany(defaultProjects);
  }
};

// GET all portfolio projects
router.get('/', async (req, res) => {
  try {
    await ensureDefaultPortfolio();
    const projects = await Portfolio.find().sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    console.error('Error fetching portfolio:', err);
    res.status(500).json({ success: false, message: 'Server error fetching portfolio', error: err.message });
  }
});

// POST new project
router.post('/', async (req, res) => {
  try {
    const { title, client, category, image, results, description, tag, order } = req.body;
    if (!title || !client) {
      return res.status(400).json({ success: false, message: 'Title and client are required' });
    }

    const catMap = {
      web: 'Web Development',
      app: 'App Development',
      ecommerce: 'E-Commerce',
      seo: 'SEO & PPC',
      branding: 'Graphic & Branding'
    };

    const catKey = category || 'web';
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const project = await Portfolio.create({
      title: title.trim(),
      slug: slug || ('project-' + Date.now()),
      client: client.trim(),
      category: catKey,
      categoryName: catMap[catKey] || 'Web Development',
      image: image || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80',
      results: results || '+250% Growth',
      description: description || '',
      tag: tag || 'Digital Project',
      order: Number(order) || 0
    });

    res.status(201).json({ success: true, message: 'Portfolio project created successfully', data: project });
  } catch (err) {
    console.error('Error creating portfolio project:', err);
    res.status(500).json({ success: false, message: 'Server error creating project', error: err.message });
  }
});

// POST upload project image
router.post('/upload', upload.single('imageFile'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }
    const relativeUrl = `/uploads/portfolio/${req.file.filename}`;
    res.json({ success: true, imageUrl: relativeUrl, filename: req.file.filename });
  } catch (err) {
    console.error('Error uploading portfolio image:', err);
    res.status(500).json({ success: false, message: 'Server error uploading image', error: err.message });
  }
});

// PUT update project
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, client, category, image, results, description, tag, order } = req.body;

    const project = await Portfolio.findById(id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    const catMap = {
      web: 'Web Development',
      app: 'App Development',
      ecommerce: 'E-Commerce',
      seo: 'SEO & PPC',
      branding: 'Graphic & Branding'
    };

    if (title) {
      project.title = title.trim();
      project.slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
    if (client) project.client = client.trim();
    if (category) {
      project.category = category;
      project.categoryName = catMap[category] || project.categoryName;
    }
    if (image) project.image = image;
    if (results !== undefined) project.results = results;
    if (description !== undefined) project.description = description;
    if (tag !== undefined) project.tag = tag;
    if (order !== undefined) project.order = Number(order);

    await project.save();
    res.json({ success: true, message: 'Project updated successfully', data: project });
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(500).json({ success: false, message: 'Server error updating project', error: err.message });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Portfolio.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(500).json({ success: false, message: 'Server error deleting project', error: err.message });
  }
});

module.exports = router;

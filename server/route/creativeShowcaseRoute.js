const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const CreativeShowcase = require('../module/CreativeShowcase');

// Multer storage for showcase images
const uploadDir = path.join(__dirname, '../uploads/creative-showcase');
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
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 },
  fileFilter
});

const getCategoryName = (cat) => {
  switch (cat) {
    case 'packaging': return 'Packaging & Print';
    case 'social': return 'Social Creatives';
    case 'branding': return 'Brand Identity';
    case 'uiux': return 'UI/UX & Web';
    case 'infographics': return 'Infographics & Collaterals';
    default: return 'Creative Project';
  }
};

const defaultItems = [
  {
    title: 'AgriMark Superfoods Pouch Packaging',
    category: 'packaging',
    categoryName: 'Packaging & Print',
    client: 'AgriMark Organics',
    deliverable: 'Matte Finish Standup Pouch & Label Design',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    description: 'Modern eco-friendly superfood pouch packaging with clean typography, custom ingredient illustrations, and QR traceability.',
    order: 1,
    isActive: true
  },
  {
    title: 'Roto Rudra Solar Pumping Catalog',
    category: 'packaging',
    categoryName: 'Packaging & Print',
    client: 'Roto Rudra Solar Tech',
    deliverable: '24-Page Technical Product Brochure & Spec Sheets',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    description: 'Industrial-grade technical brochure with exploded view diagrams, pumping flow rate curves, and B2B dealer specification sheets.',
    order: 2,
    isActive: true
  },
  {
    title: 'Precision Trimmer Social Campaign',
    category: 'social',
    categoryName: 'Social Creatives',
    client: 'Ultimate Bro Grooming',
    deliverable: 'Meta Ads & Instagram Carousel Design Series',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
    description: 'High-contrast bold lifestyle creatives featuring urban grooming, product highlights, and high-CTR headline typography.',
    order: 3,
    isActive: true
  },
  {
    title: 'Y-Cook Ready-to-Eat Promo Creatives',
    category: 'social',
    categoryName: 'Social Creatives',
    client: 'Y-Cook Food Tech',
    deliverable: 'Digital Display Banners & Swiggy/Zomato Ads',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80',
    description: 'Mouth-watering visual banners with vibrant contrast, food styling highlights, and instant discount CTA buttons.',
    order: 4,
    isActive: true
  },
  {
    title: 'Apex Global Brand Identity System',
    category: 'branding',
    categoryName: 'Brand Identity',
    client: 'Apex Global Logistics',
    deliverable: 'Corporate Logo, Typography & Full Brand Book',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    description: 'Complete brand visual identity guidelines, corporate stationary, fleet vehicle livery, and uniform branding.',
    order: 5,
    isActive: true
  },
  {
    title: 'LuxeCart Mobile-First Storefront UI/UX',
    category: 'uiux',
    categoryName: 'UI/UX & Web',
    client: 'LuxeCart Essentials',
    deliverable: 'Figma Prototyping & Responsive Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    description: 'Frictionless luxury shopping interface with sticky one-click add to cart, gesture-friendly product filters, and micro-animations.',
    order: 6,
    isActive: true
  },
  {
    title: 'MediCare Clinical Portal & App Interface',
    category: 'uiux',
    categoryName: 'UI/UX & Web',
    client: 'MediCare Superspecialty',
    deliverable: 'Patient Appointment & Health Records UI',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    description: 'Calm, accessible UI engineered for all age groups with real-time doctor availability calendars and instant tele-consultation.',
    order: 7,
    isActive: true
  },
  {
    title: 'Horizon Swift Cross-Border Flow Infographic',
    category: 'infographics',
    categoryName: 'Infographics & Collaterals',
    client: 'Horizon Pay Swift',
    deliverable: '3D Isometric Flow Charts & Investor Pitch Deck',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    description: 'Crisp isometric data visualizations illustrating complex blockchain remittance networks for high-level investor presentations.',
    order: 8,
    isActive: true
  }
];

const seedCreativeShowcaseIfEmpty = async () => {
  try {
    const count = await CreativeShowcase.countDocuments();
    if (count === 0) {
      await CreativeShowcase.insertMany(defaultItems);
      console.log('Seeded default creative showcase items in MongoDB');
    }
  } catch (err) {
    console.warn('CreativeShowcase auto-seed note:', err.message);
  }
};
seedCreativeShowcaseIfEmpty();

// GET all
router.get('/', async (req, res) => {
  try {
    const { all } = req.query;
    const filter = all === 'true' ? {} : { isActive: true };
    let list = await CreativeShowcase.find(filter).sort({ order: 1, createdAt: -1 });
    if (!list || list.length === 0) {
      list = defaultItems;
    }
    res.json({ success: true, data: list });
  } catch (err) {
    console.error('Error fetching creative showcase:', err);
    res.json({ success: true, data: defaultItems });
  }
});

// GET single
router.get('/:id', async (req, res) => {
  try {
    const item = await CreativeShowcase.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Standalone image upload
router.post('/upload-image', upload.single('imageFile'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }
    const imageUrl = `/uploads/creative-showcase/${req.file.filename}`;
    res.json({ success: true, imageUrl });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create
router.post('/', upload.single('imageFile'), async (req, res) => {
  try {
    const { title, category, client, deliverable, image, description, order, isActive } = req.body;
    let finalImage = image || '';
    if (req.file) {
      finalImage = `/uploads/creative-showcase/${req.file.filename}`;
    }

    if (!finalImage) {
      return res.status(400).json({ success: false, message: 'Showcase image is required' });
    }

    const cat = category || 'packaging';
    const catName = getCategoryName(cat);

    const doc = new CreativeShowcase({
      title,
      category: cat,
      categoryName: catName,
      client: client || '',
      deliverable: deliverable || '',
      image: finalImage,
      description: description || '',
      order: Number(order) || 0,
      isActive: isActive !== undefined ? String(isActive) === 'true' : true
    });

    await doc.save();
    res.status(201).json({ success: true, data: doc, message: 'Creative item added successfully!' });
  } catch (err) {
    console.error('Error creating creative showcase item:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update
router.put('/:id', upload.single('imageFile'), async (req, res) => {
  try {
    const { title, category, client, deliverable, image, description, order, isActive } = req.body;
    const updateFields = {};

    if (title !== undefined) updateFields.title = title;
    if (category !== undefined) {
      updateFields.category = category;
      updateFields.categoryName = getCategoryName(category);
    }
    if (client !== undefined) updateFields.client = client;
    if (deliverable !== undefined) updateFields.deliverable = deliverable;
    if (description !== undefined) updateFields.description = description;
    if (order !== undefined) updateFields.order = Number(order);
    if (isActive !== undefined) updateFields.isActive = String(isActive) === 'true';

    if (req.file) {
      updateFields.image = `/uploads/creative-showcase/${req.file.filename}`;
    } else if (image !== undefined) {
      updateFields.image = image;
    }

    const updated = await CreativeShowcase.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    res.json({ success: true, data: updated, message: 'Creative item updated successfully!' });
  } catch (err) {
    console.error('Error updating creative showcase:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await CreativeShowcase.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, message: 'Item deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

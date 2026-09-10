const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Testimonial = require('../module/Testimonial');

// Multer storage for testimonials
const uploadDir = path.join(__dirname, '../uploads/testimonials');
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
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter
});

// Category helper
const getCategoryName = (cat) => {
  switch (cat) {
    case 'web': return 'Web & eCommerce';
    case 'seo': return 'Search & SEO';
    case 'ppc': return 'Paid Ads & PPC';
    case 'brand': return 'Brand & Creative';
    default: return 'Client Review';
  }
};

// Seed Defaults
const defaultReviews = [
  {
    name: 'Rohan Malhotra',
    designation: 'Founder & CEO',
    company: 'UrbanStyle Fashion (LuxeCart)',
    category: 'web',
    categoryName: 'Web & eCommerce',
    rating: 5,
    date: '2 weeks ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    title: 'Remarkable experience with Webmok!',
    text: 'Webmok transformed our slow, lagging WordPress store into a blazing-fast React and WooCommerce setup. Our cart abandonments dropped by 34% in the first month alone! Their team works with utmost professionalism and deep technical expertise.',
    order: 1,
    isActive: true
  },
  {
    name: 'Dr. Sunita Rao',
    designation: 'Managing Director',
    company: 'MediCare Superspecialty Clinics',
    category: 'seo',
    categoryName: 'Search & SEO',
    rating: 5,
    date: '1 month ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    title: 'Our patient bookings multiplied threefold',
    text: 'Their local SEO and Google 3-Pack campaigns made us the #1 recommended multi-specialty clinic in West Delhi and Dwarka. From managing our web portal to orchestrating high-intent SEO, Webmok has consistently delivered outstanding results.',
    order: 2,
    isActive: true
  },
  {
    name: 'Alok Gupta',
    designation: 'Managing Partner',
    company: 'Apex Global Logistics Ltd',
    category: 'web',
    categoryName: 'Web & eCommerce',
    rating: 5,
    date: '3 weeks ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    title: 'Flawless enterprise portal execution',
    text: 'Handling over 50,000 monthly freight bookings requires rock-solid architecture. Webmok built an enterprise dispatch dashboard and client portal that has run with 99.99% uptime for the past 14 months without a single glitch.',
    order: 3,
    isActive: true
  },
  {
    name: 'Vikramaditya Chauhan',
    designation: 'Chief Marketing Officer',
    company: 'Roto Rudra Engineering',
    category: 'ppc',
    categoryName: 'Paid Ads & PPC',
    rating: 5,
    date: '1 month ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    title: 'Industrial B2B lead generation at scale',
    text: 'Their targeted Google Ads and LinkedIn funnel generated over 450 verified dealer distributor inquiries in Q2 alone. Cost per lead dropped by 42% compared to our previous agency. Highly analytical and proactive squad!',
    order: 4,
    isActive: true
  },
  {
    name: 'Pooja Kashyap',
    designation: 'Director of Brand Strategy',
    company: 'Bail Naturals Wellness',
    category: 'brand',
    categoryName: 'Brand & Creative',
    rating: 5,
    date: '2 months ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    title: 'Our packaging won shelf space in 80+ retail stores',
    text: 'Webmok created our complete brand identity, luxury pouch packaging design, and social launch collateral. Customers frequently compliment the aesthetic packaging. They truly understand consumer sensory psychology.',
    order: 5,
    isActive: true
  },
  {
    name: 'Marcus Vance',
    designation: 'VP of Technology',
    company: 'Horizon Swift Payments (UK)',
    category: 'web',
    categoryName: 'Web & eCommerce',
    rating: 5,
    date: '1 month ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
    title: 'Exceptional offshore engineering squad',
    text: 'Working from London, we needed an engineering partner in India that could execute clean, type-safe React code while adhering to strict UK FCA guidelines. Webmok met and exceeded every sprint deadline with zero technical debt.',
    order: 6,
    isActive: true
  },
  {
    name: 'Rajesh Singhal',
    designation: 'Managing Director',
    company: 'Skylight Infrastructures',
    category: 'ppc',
    categoryName: 'Paid Ads & PPC',
    rating: 5,
    date: '3 weeks ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    title: 'Turned Google Ads into our primary growth engine',
    text: 'Within 90 days, Webmok restructured our entire Google Ads account, eliminating negative keyword bleed and elevating our ROAS to 5.4X. We could not have scaled without them.',
    order: 7,
    isActive: true
  },
  {
    name: 'Neha Chawla',
    designation: 'Head of Growth',
    company: 'FinGrow Microfinance',
    category: 'seo',
    categoryName: 'Search & SEO',
    rating: 5,
    date: '1 month ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    title: 'Dominating first page rankings across India',
    text: 'From technical website optimization to programmatic content clustering, Webmok helped us capture the #1 position for over 120 competitive commercial keywords.',
    order: 8,
    isActive: true
  }
];

const seedTestimonialsIfEmpty = async () => {
  try {
    const count = await Testimonial.countDocuments();
    if (count === 0) {
      await Testimonial.insertMany(defaultReviews);
      console.log('Seeded default testimonials in MongoDB');
    }
  } catch (err) {
    console.warn('Testimonial auto-seed note:', err.message);
  }
};
seedTestimonialsIfEmpty();

// GET all testimonials
router.get('/', async (req, res) => {
  try {
    const { all } = req.query;
    const filter = all === 'true' ? {} : { isActive: true };
    let list = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });
    if (!list || list.length === 0) {
      list = defaultReviews;
    }
    res.json({ success: true, data: list });
  } catch (err) {
    console.error('Error fetching testimonials:', err);
    res.json({ success: true, data: defaultReviews });
  }
});

// GET single testimonial
router.get('/:id', async (req, res) => {
  try {
    const item = await Testimonial.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Standalone image upload
router.post('/upload-avatar', upload.single('avatar'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }
    const avatarUrl = `/uploads/testimonials/${req.file.filename}`;
    res.json({ success: true, avatarUrl });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create testimonial
router.post('/', upload.single('avatarFile'), async (req, res) => {
  try {
    const {
      name,
      designation,
      company,
      category,
      rating,
      date,
      platform,
      badge,
      avatar,
      title,
      text,
      order,
      isActive
    } = req.body;

    let finalAvatar = avatar || '';
    if (req.file) {
      finalAvatar = `/uploads/testimonials/${req.file.filename}`;
    }

    const cat = category || 'web';
    const catName = getCategoryName(cat);

    const doc = new Testimonial({
      name,
      designation: designation || '',
      company: company || '',
      category: cat,
      categoryName: catName,
      rating: Number(rating) || 5,
      date: date || 'Recently',
      platform: platform || 'Google Verified Review',
      badge: badge || '5.0 Star Verified',
      avatar: finalAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      title,
      text,
      order: Number(order) || 0,
      isActive: isActive !== undefined ? String(isActive) === 'true' : true
    });

    await doc.save();
    res.status(201).json({ success: true, data: doc, message: 'Testimonial added successfully!' });
  } catch (err) {
    console.error('Error creating testimonial:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update testimonial
router.put('/:id', upload.single('avatarFile'), async (req, res) => {
  try {
    const {
      name,
      designation,
      company,
      category,
      rating,
      date,
      platform,
      badge,
      avatar,
      title,
      text,
      order,
      isActive
    } = req.body;

    const updateFields = {};
    if (name !== undefined) updateFields.name = name;
    if (designation !== undefined) updateFields.designation = designation;
    if (company !== undefined) updateFields.company = company;
    if (category !== undefined) {
      updateFields.category = category;
      updateFields.categoryName = getCategoryName(category);
    }
    if (rating !== undefined) updateFields.rating = Number(rating);
    if (date !== undefined) updateFields.date = date;
    if (platform !== undefined) updateFields.platform = platform;
    if (badge !== undefined) updateFields.badge = badge;
    if (title !== undefined) updateFields.title = title;
    if (text !== undefined) updateFields.text = text;
    if (order !== undefined) updateFields.order = Number(order);
    if (isActive !== undefined) updateFields.isActive = String(isActive) === 'true';

    if (req.file) {
      updateFields.avatar = `/uploads/testimonials/${req.file.filename}`;
    } else if (avatar !== undefined) {
      updateFields.avatar = avatar;
    }

    const updated = await Testimonial.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.json({ success: true, data: updated, message: 'Testimonial updated successfully!' });
  } catch (err) {
    console.error('Error updating testimonial:', err);
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE testimonial
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true, message: 'Testimonial deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

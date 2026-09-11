const express = require('express');
const router = express.Router();
const Marquee = require('../module/Marquee');

// Default initial starter lines
const defaultMarqueeLines = [
  // Top Line Items
  { text: 'Ultra-Fast 0.8s Page Speed', position: 'top', icon: '⚡', badgeColor: 'cyan', order: 1, isActive: true },
  { text: '500+ Verified Commercial Launches', position: 'top', icon: '🚀', badgeColor: 'blue', order: 2, isActive: true },
  { text: '4.9★ Clutch & Google Verified Reviews', position: 'top', icon: '⭐', badgeColor: 'yellow', order: 3, isActive: true },
  { text: '10x Organic Traffic & Lead Surge', position: 'top', icon: '📈', badgeColor: 'orange', order: 4, isActive: true },
  { text: '100% Enterprise Cyber Security', position: 'top', icon: '🛡️', badgeColor: 'purple', order: 5, isActive: true },
  { text: 'Global Delivery Across 18+ Countries', position: 'top', icon: '🌐', badgeColor: 'green', order: 6, isActive: true },

  // Bottom Line Items
  { text: 'Custom React & Next.js Scalable Web Apps', position: 'bottom', icon: '💎', badgeColor: 'cyan', order: 1, isActive: true },
  { text: 'High-ROAS Google & Meta Performance Ads', position: 'bottom', icon: '🎯', badgeColor: 'orange', order: 2, isActive: true },
  { text: 'Page #1 Google Technical SEO & AEO', position: 'bottom', icon: '🔍', badgeColor: 'green', order: 3, isActive: true },
  { text: 'Native iOS & Android Mobile Engineering', position: 'bottom', icon: '📱', badgeColor: 'purple', order: 4, isActive: true },
  { text: 'Shopify & Headless High-Conversion Stores', position: 'bottom', icon: '🛒', badgeColor: 'blue', order: 5, isActive: true },
  { text: 'Dedicated Technical Account Director 24/7', position: 'bottom', icon: '🤝', badgeColor: 'yellow', order: 6, isActive: true },

  // Top Bar Alert Lines (Navbar)
  { text: "Hiring Alert: We're expanding! Join our global development team. Check open roles on Careers.", position: 'topbar', icon: '📢', badgeColor: 'cyan', order: 1, isActive: true },
  { text: "Exclusive Offer: Get a Free Comprehensive UI/UX & SEO Audit for Your Website Today!", position: 'topbar', icon: '🎁', badgeColor: 'orange', order: 2, isActive: true }
];

// Seed defaults if empty
const seedDefaultsIfEmpty = async () => {
  try {
    const count = await Marquee.countDocuments();
    if (count === 0) {
      await Marquee.insertMany(defaultMarqueeLines);
      console.log('Seeded default marquee lines');
    }
  } catch (err) {
    console.warn('Notice seeding marquee lines:', err.message);
  }
};
seedDefaultsIfEmpty();

// GET all marquee lines
router.get('/', async (req, res) => {
  try {
    const { all, position } = req.query;
    const filter = all === 'true' ? {} : { isActive: true };
    if (position) {
      filter.position = position;
    }
    let lines = await Marquee.find(filter).sort({ order: 1, createdAt: -1 });

    if (!lines || lines.length === 0) {
      lines = position ? defaultMarqueeLines.filter(l => l.position === position) : defaultMarqueeLines;
    }

    res.json({ success: true, data: lines });
  } catch (error) {
    console.error('Error fetching marquee lines:', error);
    res.json({ success: true, data: defaultMarqueeLines });
  }
});

// GET single marquee line
router.get('/:id', async (req, res) => {
  try {
    const line = await Marquee.findById(req.params.id);
    if (!line) {
      return res.status(404).json({ success: false, message: 'Marquee line not found' });
    }
    res.json({ success: true, data: line });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST create marquee line
router.post('/', async (req, res) => {
  try {
    const { text, position, icon, badgeColor, speed, order, isActive } = req.body;
    if (!text) {
      return res.status(400).json({ success: false, message: 'Text is required' });
    }

    const newLine = new Marquee({
      text,
      position: position || 'top',
      icon: icon || '⚡',
      badgeColor: badgeColor || 'cyan',
      speed: speed || 'normal',
      order: order !== undefined ? Number(order) : 0,
      isActive: isActive !== undefined ? isActive : true
    });

    const saved = await newLine.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT update marquee line
router.put('/:id', async (req, res) => {
  try {
    const updated = await Marquee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Marquee line not found' });
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE marquee line
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Marquee.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Marquee line not found' });
    }
    res.json({ success: true, message: 'Marquee line deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

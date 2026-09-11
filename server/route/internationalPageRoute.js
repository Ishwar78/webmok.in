const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const InternationalPage = require('../module/InternationalPage');

// Load default pages
let defaultPages = [];
try {
  const jsonPath = path.join(__dirname, '../data/defaultInternationalPages.json');
  if (fs.existsSync(jsonPath)) {
    defaultPages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  }
} catch (err) {
  console.warn('Could not load defaultInternationalPages.json:', err.message);
}

// Multer storage for international page images
const uploadDir = path.join(__dirname, '../uploads/international');
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
  const allowed = /jpeg|jpg|png|webp|svg|gif|avif/;
  const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
  const mime = file.mimetype;
  if (allowed.test(ext) || mime.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (JPG, PNG, WebP, SVG, AVIF) are allowed!'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB
  fileFilter
});

// Auto-seed helper
const seedInternationalPagesIfEmpty = async () => {
  try {
    const count = await InternationalPage.countDocuments();
    if (count === 0 && defaultPages.length > 0) {
      await InternationalPage.insertMany(defaultPages);
      console.log(`🌱 Seeded ${defaultPages.length} default international pages into MongoDB`);
    }
  } catch (err) {
    console.warn('International pages seed warning:', err.message);
  }
};

// =========================================================================
// 0. UPLOAD IMAGE (MULTER)
// =========================================================================
router.post('/upload-image', (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || 'Error uploading image'
      });
    }
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided'
      });
    }
    const imageUrl = `/uploads/international/${req.file.filename}`;
    res.json({
      success: true,
      imageUrl,
      filename: req.file.filename
    });
  });
});

// =========================================================================
// 1. GET ALL INTERNATIONAL PAGES
// =========================================================================
router.get('/', async (req, res) => {
  try {
    await seedInternationalPagesIfEmpty();
    const { status, search } = req.query;
    const filter = {};
    if (status && status !== 'all') {
      filter.status = status;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { country: { $regex: search, $options: 'i' } },
        { slug: { $regex: search, $options: 'i' } }
      ];
    }
    const pages = await InternationalPage.find(filter).sort({ order: 1, createdAt: 1 });
    res.json({
      success: true,
      count: pages.length,
      data: pages
    });
  } catch (error) {
    console.error('Error fetching international pages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch international pages',
      error: error.message
    });
  }
});

// =========================================================================
// 2. GET SINGLE PAGE BY SLUG OR ID
// =========================================================================
router.get('/:identifier', async (req, res) => {
  try {
    await seedInternationalPagesIfEmpty();
    const { identifier } = req.params;
    let query = {};
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      query = { _id: identifier };
    } else {
      query = { slug: identifier };
    }

    const page = await InternationalPage.findOne(query);
    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'International page not found'
      });
    }

    res.json({
      success: true,
      data: page,
      page: page
    });
  } catch (error) {
    console.error('Error fetching international page:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch international page',
      error: error.message
    });
  }
});

// =========================================================================
// 3. CREATE NEW INTERNATIONAL PAGE
// =========================================================================
router.post('/', async (req, res) => {
  try {
    const {
      name,
      slug,
      city,
      region,
      country,
      currency,
      currencySymbol,
      tagline,
      heroHighlight,
      heroItalic,
      leadDesc,
      bodyDesc,
      heroImage,
      stats,
      services,
      whyHireOutsideTitle,
      whyHireOutsideSubtitle,
      whyHireDesc1,
      whyHireDesc2,
      comparisonPoints,
      resultsTitle,
      resultsSubtitle,
      resultsStats,
      resultsImages,
      marketInsightsTitle,
      marketInsightsSubtitle,
      marketInsights,
      processSteps,
      industries,
      plans,
      testimonials,
      faqs,
      status,
      order
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Page name / title is required'
      });
    }

    const finalSlug = (slug || name)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const existing = await InternationalPage.findOne({ slug: finalSlug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `An international page with URL slug "${finalSlug}" already exists`
      });
    }

    const newPage = await InternationalPage.create({
      name,
      slug: finalSlug,
      city: city || name.split(' ')[0] || '',
      region: region || '',
      country: country || 'United States',
      currency: currency || 'USD',
      currencySymbol: currencySymbol || '$',
      tagline: tagline || `PREMIER ${name.toUpperCase()} · GLOBAL`,
      heroHighlight: heroHighlight || name,
      heroItalic: heroItalic || 'Accelerate High-Yield Growth with',
      leadDesc: leadDesc || 'Scale your business with high-performance digital marketing, SEO, and paid media.',
      bodyDesc: bodyDesc || 'Webmok delivers compound revenue growth, top Google rankings, and high-converting customer acquisition.',
      heroImage: heroImage || '',
      stats: Array.isArray(stats) ? stats : [],
      services: Array.isArray(services) ? services : [],
      whyHireOutsideTitle: whyHireOutsideTitle || 'Why Brands Partner with Webmok',
      whyHireOutsideSubtitle: whyHireOutsideSubtitle || 'HIGH VELOCITY · AGILE PRICING',
      whyHireDesc1: whyHireDesc1 || '',
      whyHireDesc2: whyHireDesc2 || '',
      comparisonPoints: Array.isArray(comparisonPoints) ? comparisonPoints : [],
      resultsTitle: resultsTitle || 'Performance Telemetry & Results',
      resultsSubtitle: resultsSubtitle || 'VERIFIABLE OUTCOMES',
      resultsStats: Array.isArray(resultsStats) ? resultsStats : [],
      resultsImages: Array.isArray(resultsImages) ? resultsImages : [],
      marketInsightsTitle: marketInsightsTitle || 'Regional Market Insights',
      marketInsightsSubtitle: marketInsightsSubtitle || 'LOCAL DYNAMICS',
      marketInsights: Array.isArray(marketInsights) ? marketInsights : [],
      processSteps: Array.isArray(processSteps) ? processSteps : [],
      industries: Array.isArray(industries) ? industries : [],
      plans: Array.isArray(plans) ? plans : [],
      testimonials: Array.isArray(testimonials) ? testimonials : [],
      faqs: Array.isArray(faqs) ? faqs : [],
      status: status || 'Active',
      order: Number(order) || 99
    });

    res.status(201).json({
      success: true,
      message: `International page "${newPage.name}" created successfully!`,
      data: newPage
    });
  } catch (error) {
    console.error('Error creating international page:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create international page',
      error: error.message
    });
  }
});

// =========================================================================
// 4. UPDATE INTERNATIONAL PAGE BY SLUG OR ID
// =========================================================================
router.put('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let query = {};
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      query = { _id: identifier };
    } else {
      query = { slug: identifier };
    }

    const updateData = { ...req.body };
    delete updateData._id;
    delete updateData.__v;
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const updated = await InternationalPage.findOneAndUpdate(
      query,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'International page not found to update'
      });
    }

    res.json({
      success: true,
      message: `Page "${updated.name}" updated successfully!`,
      data: updated,
      page: updated
    });
  } catch (error) {
    console.error('Error updating international page:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update international page',
      error: error.message
    });
  }
});

// =========================================================================
// 5. DELETE INTERNATIONAL PAGE
// =========================================================================
router.delete('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let deleted;
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      deleted = await InternationalPage.findByIdAndDelete(identifier);
    } else {
      deleted = await InternationalPage.findOneAndDelete({ slug: identifier });
    }

    if (!deleted) {
      return res.json({
        success: true,
        message: 'Page removed'
      });
    }

    res.json({
      success: true,
      message: `International page "${deleted.name}" deleted successfully!`
    });
  } catch (error) {
    console.error('Error deleting international page:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete international page',
      error: error.message
    });
  }
});

// =========================================================================
// 6. RESET TO ALL 15 DEFAULT INTERNATIONAL PAGES
// =========================================================================
router.post('/reset', async (req, res) => {
  try {
    await InternationalPage.deleteMany({});
    const inserted = await InternationalPage.insertMany(defaultPages);
    res.json({
      success: true,
      message: `Successfully reset all ${inserted.length} default international pages in MongoDB!`,
      data: inserted
    });
  } catch (error) {
    console.error('Error resetting international pages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reset international pages',
      error: error.message
    });
  }
});

module.exports = router;

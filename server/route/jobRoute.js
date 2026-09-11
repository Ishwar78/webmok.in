const express = require('express');
const router = express.Router();
const Job = require('../module/Job');

// Default starter jobs
const defaultJobs = [
  {
    title: 'Senior React / Frontend Developer',
    slug: 'senior-react-frontend-developer',
    department: 'Web Engineering',
    location: 'New Delhi / Hybrid',
    type: 'Full Time',
    experience: '3 - 5 Years Experience',
    salary: '₹6.0L - ₹10.0L PA',
    education: 'B.Tech / B.E. / BCA / MCA in Computer Science or Equivalent',
    shift: 'Day Shift (Mon - Fri, 9:30 AM - 6:30 PM)',
    category: 'Engineering & Technology',
    description: 'Looking for a passionate React.js engineer skilled with modern component architectures, state management, and high-speed UI development.',
    requirements: [
      '3+ years React.js & Modern JS ES6+',
      'Redux / Zustand state management & hooks',
      'REST APIs, WebSockets & GraphQL integration',
      'Responsive UI, Tailwind CSS & CSS animations',
      'Performance profiling & Core Web Vitals optimization'
    ],
    highlights: [
      'Architect and build mission-critical enterprise React SPAs and modern web portals.',
      'Collaborate with UI/UX designers to translate Figma prototypes into pixel-perfect components.',
      'Optimize front-end page speed to achieve sub-1-second load times and 90+ Lighthouse scores.',
      'Mentor junior front-end engineers and conduct code reviews.'
    ],
    benefits: [
      'Competitive salary with biannual performance appraisal',
      'Flexible hybrid working policy (WFH + Office options)',
      'Comprehensive health insurance for self and dependents',
      'Free gourmet coffee, healthy snacks, and catered lunches',
      'Annual learning stipend for certifications and tech courses'
    ],
    order: 1,
    isActive: true
  },
  {
    title: 'Lead SEO & Organic Growth Strategist',
    slug: 'lead-seo-organic-growth-strategist',
    department: 'Digital Marketing',
    location: 'Rohtak / New Delhi',
    type: 'Full Time',
    experience: '2 - 4 Years Experience',
    salary: '₹4.5L - ₹8.0L PA',
    education: 'Graduate / Post Graduate in Marketing, Media, or IT',
    shift: 'Day Shift (Mon - Fri, 9:30 AM - 6:30 PM)',
    category: 'Digital Marketing & Growth',
    description: 'Drive high-impact technical audits, link building campaigns, and organic ranking roadmaps for enterprise B2B and E-commerce clients.',
    requirements: [
      'Expertise in GA4, GSC, Ahrefs, and SEMrush',
      'Technical SEO, Schema markup & Core Web Vitals',
      'High-authority backlink outreach & PR strategies',
      'AEO & GEO search optimization for AI engines'
    ],
    highlights: [
      'Devise data-driven organic ranking roadmaps for top-tier Indian & global brands.',
      'Execute in-depth technical search audits, indexing remediation, and internal linking strategies.',
      'Monitor search algorithmic updates and lead generative search engine optimization (GEO).',
      'Deliver monthly executive ROI and organic conversion presentations to key stakeholders.'
    ],
    benefits: [
      'Direct revenue-share bonuses on high-performing client campaigns',
      'Dedicated subscriptions to enterprise SEO toolsets (Ahrefs, SEMrush, Screaming Frog)',
      'Paid health and medical benefits package',
      'Collaborative, high-energy agency culture'
    ],
    order: 2,
    isActive: true
  },
  {
    title: 'Performance Marketing (PPC) Specialist',
    slug: 'performance-marketing-ppc-specialist',
    department: 'Paid Media',
    location: 'Remote / Delhi NCR',
    type: 'Full Time',
    experience: '2 - 5 Years Experience',
    salary: '₹5.0L - ₹9.0L PA',
    education: 'Any Graduate / Google Ads & Meta Certified Preferred',
    shift: 'Day Shift (Mon - Fri, 9:30 AM - 6:30 PM)',
    category: 'Paid Advertising',
    description: 'Manage high-budget Google Search, Display, and Meta Ads accounts with deep expertise in conversion tracking and ROI optimization.',
    requirements: [
      'Google Ads Search & PMax certification',
      'Meta Ads Manager scaling & creative testing',
      'Server-side Conversion API & GA4 tracking',
      'CPA & ROAS performance scaling'
    ],
    highlights: [
      'Manage over ₹50L+ in monthly ad spend across Google, YouTube, Meta, and LinkedIn.',
      'Formulate high-converting ad copy and collaborate with design team on creative A/B testing.',
      'Configure precise full-funnel conversion tracking and server-side tracking (CAPI).',
      'Analyze bid strategies, audience exclusions, and negative keyword governance.'
    ],
    benefits: [
      'Performance incentives based on ROAS and client retention targets',
      'Access to premium creative and copywriting AI tooling',
      'Work from home flexibility with home-office equipment stipend',
      'Fast-track career advancement into Paid Media Team Lead'
    ],
    order: 3,
    isActive: true
  },
  {
    title: 'UI/UX Designer & Creative Motion Graphic Artist',
    slug: 'ui-ux-designer-motion-graphics',
    department: 'Creative Design',
    location: 'New Delhi Office',
    type: 'Full Time',
    experience: '2 - 4 Years Experience',
    salary: '₹4.0L - ₹7.0L PA',
    education: 'Degree / Diploma in Graphic Design, UI/UX, or Fine Arts',
    shift: 'Day Shift (Mon - Fri, 9:30 AM - 6:30 PM)',
    category: 'Design & Multimedia',
    description: 'Craft intuitive Figma wireframes, interactive web prototypes, brand logos, and viral promotional video edits.',
    requirements: [
      'Advanced Figma & FigJam design workflows',
      'Adobe Premiere Pro, After Effects, Illustrator & Photoshop',
      'Design system architecture & design tokens',
      'Conversion-driven UI design & micro-interactions'
    ],
    highlights: [
      'Design end-to-end user journeys, wireframes, and design systems in Figma.',
      'Produce cinematic motion graphics and reels for high-impact social media campaigns.',
      'Collaborate with developers to ensure 100% design fidelity upon implementation.',
      'Direct brand identity guidelines, typography palettes, and iconography packages.'
    ],
    benefits: [
      'Top-tier Apple M-series hardware workstation and 4K color-accurate displays',
      'Annual Behance / Dribbble pro subscriptions and Adobe Creative Cloud suite provided',
      'Creative freedom on prestigious domestic and international brand campaigns',
      'Weekly team design sprints and peer feedback workshops'
    ],
    order: 4,
    isActive: true
  }
];

// Seed defaults if empty
const seedDefaultsIfEmpty = async () => {
  try {
    const count = await Job.countDocuments();
    if (count === 0) {
      await Job.insertMany(defaultJobs);
      console.log('Seeded default jobs');
    }
  } catch (err) {
    console.warn('Notice seeding jobs:', err.message);
  }
};
seedDefaultsIfEmpty();

// GET all jobs
router.get('/', async (req, res) => {
  try {
    const { all } = req.query;
    const filter = all === 'true' ? {} : { isActive: true };
    let jobs = await Job.find(filter).sort({ order: 1, createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      jobs = defaultJobs;
    }

    res.json({ success: true, data: jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.json({ success: true, data: defaultJobs });
  }
});

// GET single job
router.get('/:id', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    let job = null;
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      job = await Job.findById(req.params.id);
    }
    if (!job) {
      job = await Job.findOne({ slug: req.params.id });
    }
    if (!job) {
      job = await Job.findOne({ title: new RegExp(`^${req.params.id.replace(/-/g, ' ')}$`, 'i') });
    }
    if (!job) {
      job = defaultJobs.find(j => j.slug === req.params.id || j.id === req.params.id);
    }
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    res.json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST create job
router.post('/', async (req, res) => {
  try {
    const {
      title,
      department,
      location,
      type,
      experience,
      salary,
      description,
      requirements,
      highlights,
      benefits,
      education,
      shift,
      category,
      isActive,
      order
    } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }

    const parseList = (val) => {
      if (Array.isArray(val)) return val.filter(Boolean);
      if (typeof val === 'string') return val.split('\n').map(s => s.trim()).filter(Boolean);
      return [];
    };

    const slug = req.body.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newJob = new Job({
      title,
      slug,
      department: department || 'Engineering',
      location: location || 'New Delhi / Hybrid',
      type: type || 'Full Time',
      experience: experience || '1 - 3 Years',
      salary: salary || 'Best in Industry',
      education: education || 'Bachelor / Master in relevant field',
      shift: shift || 'Day Shift (Mon - Fri)',
      category: category || department || 'IT & Digital Services',
      description: description || '',
      requirements: parseList(requirements),
      highlights: parseList(highlights),
      benefits: parseList(benefits),
      isActive: isActive !== undefined ? isActive : true,
      order: order !== undefined ? Number(order) : 0
    });

    const saved = await newJob.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT update job
router.put('/:id', async (req, res) => {
  try {
    const parseList = (val) => {
      if (Array.isArray(val)) return val.filter(Boolean);
      if (typeof val === 'string') return val.split('\n').map(s => s.trim()).filter(Boolean);
      return [];
    };

    const updateData = { ...req.body };
    if (updateData.requirements !== undefined) updateData.requirements = parseList(updateData.requirements);
    if (updateData.highlights !== undefined) updateData.highlights = parseList(updateData.highlights);
    if (updateData.benefits !== undefined) updateData.benefits = parseList(updateData.benefits);

    const updated = await Job.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE job
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    res.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

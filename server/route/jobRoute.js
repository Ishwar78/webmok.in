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
    description: 'Looking for a passionate React.js engineer skilled with modern component architectures, state management, and high-speed UI development.',
    requirements: ['3+ years React.js & Modern JS', 'Redux / Zustand state management', 'REST APIs & WebSockets', 'Responsive UI & CSS animations'],
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
    description: 'Drive high-impact technical audits, link building campaigns, and organic ranking roadmaps for enterprise B2B and E-commerce clients.',
    requirements: ['Expertise in GA4 & GSC', 'Technical SEO & Core Web Vitals', 'High-authority backlink outreach', 'AEO & GEO search optimization'],
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
    description: 'Manage high-budget Google Search, Display, and Meta Ads accounts with deep expertise in conversion tracking and ROI optimization.',
    requirements: ['Google Ads Search & PMax certification', 'Meta Ads Manager scaling', 'Server-side Conversion API', 'CPA & ROAS optimization'],
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
    description: 'Craft intuitive Figma wireframes, interactive web prototypes, brand logos, and viral promotional video edits.',
    requirements: ['Advanced Figma & FigJam workflows', 'Adobe Premiere & After Effects', 'Design system architecture', 'Conversion-driven UI design'],
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
    const job = await Job.findById(req.params.id);
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
    const { title, department, location, type, experience, salary, description, requirements, isActive, order } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }

    const slug = req.body.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newJob = new Job({
      title,
      slug,
      department: department || 'Engineering',
      location: location || 'New Delhi / Hybrid',
      type: type || 'Full Time',
      experience: experience || '1 - 3 Years',
      salary: salary || 'Best in Industry',
      description: description || '',
      requirements: Array.isArray(requirements) ? requirements : (requirements ? [requirements] : []),
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
    const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

const express = require('express');
const router = express.Router();
const ServiceInquiry = require('../module/ServiceInquiry');

const defaultServiceInquiries = [
  {
    name: 'Vikram Singhania',
    email: 'vikram@luxurycraft.in',
    phone: '+91 98112 34567',
    serviceName: 'E-Commerce Development',
    serviceCategory: 'E-Commerce',
    planName: 'Enterprise Custom Marketplace Plan',
    company: 'LuxuryCraft Home Decor',
    website: 'https://luxurycraft.in',
    budget: '₹2,50,000 - ₹5,000,000',
    message: 'Need a headless Shopify multi-vendor store with high speed and custom checkout flow.',
    pageUrl: '/services/ecommerce-development',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 3)
  },
  {
    name: 'Pooja Agarwal',
    email: 'growth@medicarehealth.com',
    phone: '+91 99201 88472',
    serviceName: 'Search Engine Optimization (SEO)',
    serviceCategory: 'SEO',
    planName: 'Growth Retainer (Unlimited Keywords)',
    company: 'MediCare Diagnostic Labs',
    website: 'https://medicarehealth.com',
    budget: '₹45,000 / month',
    message: 'We want to rank on page 1 for 40+ medical diagnostic keywords across Delhi NCR.',
    pageUrl: '/services/search-engine-optimization',
    status: 'proposal_sent',
    createdAt: new Date(Date.now() - 3600000 * 14)
  },
  {
    name: 'Rohan Deshmukh',
    email: 'rohan@fintechpay.co',
    phone: '+91 97654 32109',
    serviceName: 'Mobile App Development',
    serviceCategory: 'Mobile Apps',
    planName: 'Dedicated Android & iOS Squad',
    company: 'FinTechPay Systems',
    website: 'https://fintechpay.co',
    budget: '₹4,00,000+',
    message: 'Looking to build a native React Native fintech app with UPI auto-debit integration.',
    pageUrl: '/services/mobile-app-development',
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600000 * 28)
  },
  {
    name: 'Siddharth Roy',
    email: 'siddharth@edulearnplus.in',
    phone: '+91 98450 11223',
    serviceName: 'Performance Marketing (PPC)',
    serviceCategory: 'PPC & Ads',
    planName: 'Performance Growth Plan',
    company: 'EduLearn Plus',
    website: 'https://edulearnplus.in',
    budget: '₹1,00,000 ad spend / month',
    message: 'Need high-converting Google Search & Meta campaigns to lower our student lead CPA.',
    pageUrl: '/services/pay-per-click-advertising',
    status: 'converted',
    createdAt: new Date(Date.now() - 3600000 * 48)
  },
  {
    name: 'Ananya Sen',
    email: 'ananya@zenithinteriors.com',
    phone: '+91 98300 44556',
    serviceName: 'Full-Stack Web Development',
    serviceCategory: 'Web Development',
    planName: 'Custom Next.js & React Portal',
    company: 'Zenith Architecture & Interiors',
    website: 'https://zenithinteriors.com',
    budget: '₹1,50,000 - ₹3,00,000',
    message: 'Looking for an ultra-clean corporate portfolio with 3D interactions and fast loading speed.',
    pageUrl: '/services/web-design-development',
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600000 * 60)
  }
];

// Helper to normalize category from service name
const detectCategory = (serviceName = '') => {
  const lower = serviceName.toLowerCase();
  if (lower.includes('e-commerce') || lower.includes('ecommerce') || lower.includes('shopify') || lower.includes('marketplace')) return 'E-Commerce';
  if (lower.includes('seo') || lower.includes('search engine')) return 'SEO';
  if (lower.includes('app') || lower.includes('android') || lower.includes('ios')) return 'Mobile Apps';
  if (lower.includes('ppc') || lower.includes('google ads') || lower.includes('paid media')) return 'PPC & Ads';
  if (lower.includes('social media') || lower.includes('smo') || lower.includes('facebook') || lower.includes('instagram')) return 'Social Media';
  if (lower.includes('web') || lower.includes('wordpress') || lower.includes('landing page')) return 'Web Development';
  if (lower.includes('brand') || lower.includes('logo') || lower.includes('graphic') || lower.includes('video')) return 'Branding & Creative';
  return 'General Services';
};

// Seed defaults if collection is empty
const seedDefaultsIfEmpty = async () => {
  try {
    const count = await ServiceInquiry.countDocuments();
    if (count === 0) {
      await ServiceInquiry.insertMany(defaultServiceInquiries);
      console.log('Seeded default service inquiries');
    }
  } catch (err) {
    console.warn('Notice seeding service inquiries:', err.message);
  }
};
seedDefaultsIfEmpty();

// GET all service inquiries with multi-filter capability
router.get('/', async (req, res) => {
  try {
    const { service, category, status, search } = req.query;
    let query = {};

    if (service && service !== 'all') {
      query.serviceName = { $regex: new RegExp(service, 'i') };
    }

    if (category && category !== 'all') {
      query.serviceCategory = { $regex: new RegExp(category, 'i') };
    }

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { serviceName: { $regex: search, $options: 'i' } },
        { planName: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    let inquiries = await ServiceInquiry.find(query).sort({ createdAt: -1 });

    if (!inquiries || inquiries.length === 0) {
      if (!service && !category && !status && !search) {
        inquiries = defaultServiceInquiries;
      }
    }

    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error('Error fetching service inquiries:', error);
    res.status(500).json({ success: false, message: 'Server error fetching service inquiries', error: error.message });
  }
});

// POST create service inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, serviceName, planName, company, website, budget, message, pageUrl } = req.body;

    if (!name || !email || !phone || !serviceName) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone number, and service name are required.'
      });
    }

    const serviceCategory = req.body.serviceCategory || detectCategory(serviceName);

    const inquiry = new ServiceInquiry({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      serviceName: serviceName.trim(),
      serviceCategory: serviceCategory,
      planName: planName ? planName.trim() : 'Custom Strategy Proposal',
      company: company ? company.trim() : '',
      website: website ? website.trim() : '',
      budget: budget ? budget.trim() : '',
      message: message ? message.trim() : '',
      pageUrl: pageUrl || ''
    });

    const saved = await inquiry.save();
    res.status(201).json({
      success: true,
      message: 'Service inquiry submitted successfully',
      data: saved
    });
  } catch (error) {
    console.error('Error creating service inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error creating inquiry', error: error.message });
  }
});

// PUT update status or notes
router.put('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body;
    const updateData = {};
    if (status !== undefined) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const updated = await ServiceInquiry.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Service inquiry not found' });
    }

    res.json({ success: true, message: 'Inquiry updated successfully', data: updated });
  } catch (error) {
    console.error('Error updating service inquiry:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE inquiry
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ServiceInquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }
    res.json({ success: true, message: 'Service inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting service inquiry:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

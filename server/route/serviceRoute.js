const express = require('express');
const router = express.Router();
const Service = require('../module/Service');

const defaultServices = [
  {
    slug: 'web-designing-development-services-company',
    title: 'Web Design & Development',
    category: 'Web Development',
    icon: 'FaLaptopCode',
    metric: '0.8s Avg Speed',
    tag: 'Custom Web Apps',
    desc: 'Bespoke, blazing-fast, and responsive web applications built with modern frameworks to turn casual visitors into loyal paying customers.',
    tags: ['React.js', 'WordPress', 'Next.js', 'Custom UI/UX'],
    subFeatures: [
      'Custom UI/UX Design',
      'React & Next.js Apps',
      'WordPress & CMS',
      'Mobile-First Approach',
      'Speed Optimization',
      'Conversion-Focused Layouts'
    ],
    headline: 'Award-Winning UI/UX & Responsive Web Development',
    overview: 'Transform your brand perception with custom, interactive websites built on modern web architectures. We combine aesthetic UI designs with conversion-focused UX wireframes.',
    features: [
      'Bespoke visual identity and interactive UI components',
      'Cross-browser and 100% mobile-friendly responsive fluid grids',
      'Modern React & Next.js frontend architectures',
      'Search engine optimized semantic HTML5 structure',
      'Lead capture funnels and interactive contact modals',
      'Complete source code ownership and documentation'
    ],
    techStack: ['React.js', 'Next.js', 'HTML5/CSS3', 'JavaScript ES6+', 'Node.js', 'REST APIs'],
    timeline: '3 to 5 Weeks Delivery',
    faqs: [
      { q: 'Do you create custom designs or use standard templates?', a: 'We create 100% bespoke, custom UI designs tailored specifically to your brand aesthetics and market positioning.' },
      { q: 'Can you redesign our existing outdated website?', a: 'Absolutely. We preserve all your existing SEO URLs while giving your platform a modern, high-converting visual overhaul.' }
    ],
    status: 'Active',
    order: 1
  },
  {
    slug: 'application-development-services',
    title: 'Mobile App Development',
    category: 'App Development',
    icon: 'FaMobileAlt',
    metric: '99.9% Crash Free',
    tag: 'iOS & Android Apps',
    desc: 'Native and hybrid iOS & Android apps with frictionless interfaces, fluid gestures, real-time push notifications, and rock-solid backend APIs.',
    tags: ['Flutter', 'React Native', 'Android', 'iOS'],
    subFeatures: [
      'iOS & Android Apps',
      'Flutter & React Native',
      'App Store Optimization',
      'Push Notifications',
      'Offline-First Architecture',
      'Backend API Integration'
    ],
    headline: 'High-Performance Cross-Platform & Native Mobile Applications',
    overview: 'From initial prototype wireframes to Google Play and Apple App Store deployments, WebMok engineers fluid mobile applications that scale to millions of daily active users.',
    features: [
      'Native iOS (Swift) & Android (Kotlin) development',
      'Cross-platform Flutter & React Native applications',
      'Real-time WebSocket & Push Notification integrations',
      'In-App Purchases, Stripe, and UPI Payment Gateways',
      'App Store Optimization (ASO) for maximum search rank',
      'Crashlytics monitoring and post-launch maintenance'
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    timeline: '4 to 8 Weeks Delivery',
    faqs: [
      { q: 'Which framework is better: React Native or Flutter?', a: 'Both are fantastic. We recommend Flutter for fluid custom animations and React Native if you want deep integration with an existing React web ecosystem.' },
      { q: 'Do you assist with Google Play & App Store approval?', a: 'Yes, we handle the entire submission, review compliance, privacy policy requirements, and release process.' }
    ],
    status: 'Active',
    order: 2
  },
  {
    slug: 'seo-services-company',
    title: 'Search Engine Optimization',
    category: 'Digital Marketing',
    icon: 'FaSearch',
    metric: '#1 Page Ranks',
    tag: 'Organic Growth',
    desc: 'Dominate Google rankings and drive high-intent organic visitors with data-backed technical SEO, high-authority link building, and content strategy.',
    tags: ['Technical SEO', 'Keyword Intent', 'High DA Links', 'Local Maps'],
    subFeatures: [
      'Technical SEO Audit',
      'Keyword Research & Mapping',
      'On-Page Optimization',
      'High-DA Backlink Building',
      'Local SEO & Google Maps',
      'Monthly Ranking Reports'
    ],
    headline: 'Rank #1 on Google & Attract High-Intent Organic Buyers',
    overview: 'Drive sustainable, long-term inbound inquiries with our data-driven SEO strategies. From in-depth technical audits to competitor gap analysis and high-authority backlink outreach.',
    features: [
      'In-depth competitor keyword research and search intent mapping',
      'Technical SEO audit, schema markup, and Core Web Vitals fixes',
      'High-authority white-hat link building and digital PR',
      'Google Business Profile (Local SEO) map pack ranking',
      'Content optimization with topical authority clusters',
      'Bi-weekly transparent ranking and organic traffic reports'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4'],
    timeline: 'Ongoing Monthly Growth Retainer',
    faqs: [
      { q: 'How long before we see measurable SEO ranking improvements?', a: 'Typically, technical and on-page fixes yield noticeable ranking improvements within 60 to 90 days, with strong exponential traffic growth continuing over 6-12 months.' },
      { q: 'Do you follow Google-safe white-hat practices?', a: '100% yes. We strictly follow Google Search Essentials guidelines to protect your domain from penalties.' }
    ],
    status: 'Active',
    order: 3
  },
  {
    slug: 'ppc-services-company',
    title: 'PPC & Performance Ads',
    category: 'Digital Marketing',
    icon: 'FaChartLine',
    metric: '3.4x Avg ROAS',
    tag: 'Paid Advertising',
    desc: 'Generate immediate high-ticket leads with laser-targeted Google Search Ads, Display Campaigns, Meta Advertising, and conversion retargeting.',
    tags: ['Google Ads', 'Meta Ads', 'Remarketing', 'High ROAS'],
    subFeatures: [
      'Google Search Campaigns',
      'Meta & Instagram Ads',
      'Display Retargeting',
      'Performance Max',
      'Bid Strategy Optimization',
      'ROAS Tracking & Reporting'
    ],
    headline: 'Maximize ROAS with Laser-Targeted Paid Search & Social Ads',
    overview: 'Stop burning ad budget on low-converting clicks. Our certified PPC specialists build, optimize, and scale campaigns that drive qualified inbound calls and immediate transactions.',
    features: [
      'High-converting Google Search, Shopping & Performance Max ads',
      'A/B tested ad copy and dedicated landing page funnels',
      'Negative keyword sculpting to eliminate wasted spend',
      'Conversion tracking setup via Google Tag Manager and GA4',
      'Retargeting sequences across YouTube, Meta, and Display',
      'Weekly cost-per-lead optimization and transparent dashboards'
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'GA4', 'Looker Studio'],
    timeline: 'Immediate Launch within 3 to 5 Days',
    faqs: [
      { q: 'What daily ad budget is recommended to begin with?', a: 'We recommend starting with a minimum test budget of ₹1,000 to ₹3,000 per day depending on keyword competition in your industry.' },
      { q: 'How do you prevent click fraud and wasted budget?', a: 'We implement strict negative keyword sculpting, geo-fencing, IP exclusions, and automated bid rules to filter out bot clicks.' }
    ],
    status: 'Active',
    order: 4
  },
  {
    slug: 'e-commerce-development-services-company',
    title: 'E-Commerce Solutions',
    category: 'E-Commerce',
    icon: 'FaRocket',
    metric: '+48% Checkout Lift',
    tag: 'Online Stores',
    desc: 'Scalable e-commerce stores engineered for seamless transactions, frictionless one-click checkouts, secure payment gateways, and inventory control.',
    tags: ['Shopify', 'WooCommerce', 'Custom Stores', 'Stripe/UPI'],
    subFeatures: [
      'Shopify & WooCommerce',
      'Custom Store Development',
      'Payment Gateway Integration',
      'Product Catalog Management',
      'One-Click Checkout Flows',
      'Inventory & Order Systems'
    ],
    headline: 'High-Converting Headless & Custom E-Commerce Storefronts',
    overview: 'Build an omnichannel e-commerce empire with custom Shopify Plus, WooCommerce, and headless React architectures engineered for fast checkout speeds and high customer conversion rates.',
    features: [
      'Custom Shopify & WooCommerce theme engineering',
      'Headless commerce architecture with Next.js storefronts',
      'Multi-currency, tax, and automated shipping integrations',
      'Frictionless 1-click checkout & abandoned cart recovery',
      'ERP, warehouse, and CRM database synchronization',
      'Enterprise security, fraud prevention, and PCI compliance'
    ],
    techStack: ['Shopify Plus', 'WooCommerce', 'Next.js Commerce', 'Stripe', 'Razorpay', 'TailwindCSS'],
    timeline: '3 to 6 Weeks Delivery',
    faqs: [
      { q: 'Can you migrate our store from another platform without losing data?', a: 'Yes! We seamlessly migrate products, customers, order histories, and SEO redirects with zero downtime.' }
    ],
    status: 'Active',
    order: 5
  },
  {
    slug: 'social-media-marketing',
    title: 'Social & Brand Growth',
    category: 'Social Media',
    icon: 'FaBullhorn',
    metric: '10x Engagement',
    tag: 'Social Authority',
    desc: 'Elevate your online presence with strategic content calendars, interactive video graphics, targeted Facebook & Instagram ads, and community trust.',
    tags: ['Instagram', 'LinkedIn', 'Facebook', 'Creative Video'],
    subFeatures: [
      'Facebook & Instagram Ads',
      'LinkedIn B2B Campaigns',
      'Creative Reels & Graphics',
      'Content Calendar Strategy',
      'Community Management',
      'Influencer Partnerships'
    ],
    headline: 'Viral Creative Campaigns, Reels, & Paid Social Funnels',
    overview: 'Amplify your brand authority across Instagram, LinkedIn, YouTube, and Meta with thumb-stopping creative reels, interactive motion graphics, and high-converting paid social ad funnels.',
    features: [
      'Monthly viral content calendars and copywriting',
      'High-definition reels, motion graphics, and carousels',
      'Paid social ad funnels for lead generation and e-commerce sales',
      'Influencer outreach and collaborative PR campaigns',
      'Active community moderation and comment management',
      'In-depth monthly audience growth and sentiment telemetry'
    ],
    techStack: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'Canva Pro', 'Adobe After Effects', 'Figma'],
    timeline: 'Monthly Rolling Growth Plan',
    faqs: [
      { q: 'How many posts and reels are included per month?', a: 'Our standard packages range from 15 to 30 custom branded assets per month, including motion reels, static graphics, and story campaigns.' }
    ],
    status: 'Active',
    order: 6
  }
];

// Helper to seed services if empty
const seedServicesIfEmpty = async () => {
  const count = await Service.countDocuments();
  if (count === 0) {
    await Service.insertMany(defaultServices);
    console.log('🌱 Seeded 6 default core services into MongoDB');
  }
};

// =========================================================================
// 1. GET ALL SERVICES (Auto-seeds if empty)
// =========================================================================
router.get('/', async (req, res) => {
  try {
    await seedServicesIfEmpty();
    const services = await Service.find().sort({ order: 1, createdAt: 1 });
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: error.message
    });
  }
});

// =========================================================================
// 2. GET SINGLE SERVICE BY SLUG
// =========================================================================
router.get('/:slug', async (req, res) => {
  try {
    await seedServicesIfEmpty();
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service',
      error: error.message
    });
  }
});

// =========================================================================
// 3. CREATE NEW SERVICE
// =========================================================================
router.post('/', async (req, res) => {
  try {
    const {
      title,
      slug,
      category,
      icon,
      metric,
      tag,
      desc,
      tags,
      subFeatures,
      headline,
      overview,
      features,
      techStack,
      timeline,
      faqs,
      status,
      order
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Service title is required'
      });
    }

    const generatedSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const existing = await Service.findOne({ slug: generatedSlug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'A service with this URL slug already exists'
      });
    }

    const newService = await Service.create({
      title,
      slug: generatedSlug,
      category: category || 'Web Development',
      icon: icon || 'FaLaptopCode',
      metric: metric || 'Top Performance',
      tag: tag || 'Digital Solution',
      desc: desc || '',
      tags: Array.isArray(tags) ? tags : [],
      subFeatures: Array.isArray(subFeatures) ? subFeatures : [],
      headline: headline || `Professional ${title} by Web Mok`,
      overview: overview || desc || '',
      features: Array.isArray(features) ? features : [],
      techStack: Array.isArray(techStack) ? techStack : [],
      timeline: timeline || '2 to 4 Weeks Delivery',
      faqs: Array.isArray(faqs) ? faqs : [],
      status: status || 'Active',
      order: Number(order) || 99
    });

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: newService
    });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create service',
      error: error.message
    });
  }
});

// =========================================================================
// 4. UPDATE SERVICE BY ID OR SLUG
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

    const updatedService = await Service.findOneAndUpdate(
      query,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({
        success: false,
        message: 'Service not found to update'
      });
    }

    res.json({
      success: true,
      message: `Service "${updatedService.title}" updated successfully`,
      data: updatedService
    });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service',
      error: error.message
    });
  }
});

// =========================================================================
// 5. DELETE SERVICE (BY MONGO _ID OR SLUG)
// =========================================================================
router.delete('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let deleted;
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      deleted = await Service.findByIdAndDelete(identifier);
    } else {
      deleted = await Service.findOneAndDelete({ slug: identifier });
    }

    if (!deleted) {
      // If service wasn't found in DB (e.g. unseeded default), still return success so UI updates smoothly
      return res.json({
        success: true,
        message: 'Service removed successfully'
      });
    }

    res.json({
      success: true,
      message: `Service "${deleted.title || identifier}" deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete service',
      error: error.message
    });
  }
});

// =========================================================================
// 6. RESET TO DEFAULT SERVICES
// =========================================================================
router.post('/reset', async (req, res) => {
  try {
    await Service.deleteMany({});
    const inserted = await Service.insertMany(defaultServices);
    res.json({
      success: true,
      message: 'Services reset to default successfully',
      data: inserted
    });
  } catch (error) {
    console.error('Error resetting services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reset services',
      error: error.message
    });
  }
});

module.exports = router;

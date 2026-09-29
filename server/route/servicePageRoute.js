const express = require('express');
const router = express.Router();
const ServicePageContent = require('../module/ServicePageContent');

const defaultServices = [
  {
    "slug": "seo-services-company",
    "name": "SEO Services",
    "category": "SEO & Search",
    "heroTitle": "Best SEO Services in India & Delhi NCR",
    "rating": "4.8",
    "count": "250+"
  },
  {
    "slug": "ppc-services-company",
    "name": "PPC & Google Ads",
    "category": "Paid Advertising",
    "heroTitle": "High-ROAS PPC & Google Ads Agency",
    "rating": "4.9",
    "count": "180+"
  },
  {
    "slug": "lead-generation-social-media-marketing-services-company",
    "name": "Lead Generation Services",
    "category": "Lead Generation",
    "heroTitle": "B2B & B2C High-Intent Lead Generation Agency",
    "rating": "4.9",
    "count": "300+"
  },
  {
    "slug": "digital-marketing-services-company",
    "name": "Digital Marketing Services",
    "category": "Digital Marketing",
    "heroTitle": "Full-Funnel Data-Driven Digital Marketing Agency",
    "rating": "4.9",
    "count": "350+"
  },
  {
    "slug": "word-press-development-services-company",
    "name": "WordPress Development",
    "category": "Web & CMS",
    "heroTitle": "Custom High-Speed WordPress Engineering Services",
    "rating": "4.9",
    "count": "220+"
  },
  {
    "slug": "web-designing-development-services-company",
    "name": "Web Design & UI/UX",
    "category": "Web & CMS",
    "heroTitle": "Conversion-Focused Bespoke Web Design & Development",
    "rating": "4.9",
    "count": "400+"
  },
  {
    "slug": "e-commerce-website-design-development-services-company",
    "name": "E-Commerce Development",
    "category": "E-Commerce",
    "heroTitle": "High-Converting Scalable E-Commerce Platforms",
    "rating": "4.9",
    "count": "190+"
  },
  {
    "slug": "landing-page-development-services-company",
    "name": "Landing Page Development",
    "category": "Web & CMS",
    "heroTitle": "High-Velocity Conversion Landing Pages & Funnels",
    "rating": "4.9",
    "count": "160+"
  },
  {
    "slug": "website-development-and-design-services",
    "name": "Enterprise Web Development",
    "category": "Web & CMS",
    "heroTitle": "Robust Scalable Enterprise Web Architectures",
    "rating": "4.9",
    "count": "140+"
  },
  {
    "slug": "application-development-services",
    "name": "Mobile App Development",
    "category": "Mobile Apps",
    "heroTitle": "Next-Gen Cross-Platform Mobile App Engineering",
    "rating": "4.9",
    "count": "210+"
  },
  {
    "slug": "android-app-development",
    "name": "Android App Development",
    "category": "Mobile Apps",
    "heroTitle": "High-Performance Native Android Apps Built for Scale",
    "rating": "4.9",
    "count": "170+"
  },
  {
    "slug": "ios-app-development",
    "name": "iOS App Development",
    "category": "Mobile Apps",
    "heroTitle": "Bespoke Premium iOS & iPadOS Mobile Engineering",
    "rating": "4.9",
    "count": "150+"
  },
  {
    "slug": "shopify-woocommerce",
    "name": "Shopify & WooCommerce",
    "category": "E-Commerce",
    "heroTitle": "Turnkey Shopify & WooCommerce Store Architectures",
    "rating": "4.9",
    "count": "230+"
  },
  {
    "slug": "custom-marketplace",
    "name": "Custom Marketplace Dev",
    "category": "E-Commerce",
    "heroTitle": "Multi-Vendor Marketplace Platforms & Integrations",
    "rating": "4.9",
    "count": "110+"
  },
  {
    "slug": "content-marketing-services-company",
    "name": "Content Marketing",
    "category": "Digital Marketing",
    "heroTitle": "Authoritative Organic Content Marketing & SEO Copy",
    "rating": "4.8",
    "count": "195+"
  },
  {
    "slug": "social-media-marketing",
    "name": "Social Media Marketing",
    "category": "Social Media",
    "heroTitle": "High-Engagement Social Media Campaigns & Growth",
    "rating": "4.9",
    "count": "280+"
  },
  {
    "slug": "video-and-graphic-development-company",
    "name": "Video & Graphic Development",
    "category": "Creative & Video",
    "heroTitle": "Cinematic Video Production & High-Impact Graphics",
    "rating": "4.9",
    "count": "175+"
  },
  {
    "slug": "online-reputation-management-services-company",
    "name": "Online Reputation Management",
    "category": "Corporate Services",
    "heroTitle": "Corporate & Executive Online Reputation Management",
    "rating": "4.9",
    "count": "130+"
  },
  {
    "slug": "business-development-consulting",
    "name": "Business Consulting",
    "category": "Corporate Services",
    "heroTitle": "Strategic Digital Transformation & Growth Consulting",
    "rating": "4.9",
    "count": "115+"
  },
  {
    "slug": "data-science",
    "name": "Data Science & Analytics",
    "category": "Advanced Tech",
    "heroTitle": "Predictive Analytics & AI-Powered Data Engineering",
    "rating": "4.9",
    "count": "90+"
  },
  {
    "slug": "computer-training",
    "name": "Computer Training Academy",
    "category": "Education",
    "heroTitle": "Industry-Standard Full Stack & IT Skills Academy",
    "rating": "4.8",
    "count": "500+"
  },
  {
    "slug": "branding",
    "name": "Corporate Branding",
    "category": "Design & Creative",
    "heroTitle": "Strategic Brand Identity & Corporate Visual Systems",
    "rating": "4.9",
    "count": "240+"
  },
  {
    "slug": "facebook-marketing-services-company",
    "name": "Facebook & Meta Ads",
    "category": "Paid Advertising",
    "heroTitle": "High-ROAS Facebook, Instagram & Meta Performance Ads",
    "rating": "4.9",
    "count": "260+"
  },
  {
    "slug": "mobile-marketing-services-company",
    "name": "Mobile Marketing",
    "category": "Mobile Apps",
    "heroTitle": "App Store Optimization (ASO) & Mobile User Acquisition",
    "rating": "4.8",
    "count": "145+"
  },
  {
    "slug": "video-editing-services-company",
    "name": "Video Editing Services",
    "category": "Creative & Video",
    "heroTitle": "Studio-Grade Commercial Video Editing & Post-Production",
    "rating": "4.9",
    "count": "210+"
  },
  {
    "slug": "social-media-optimization-services-company",
    "name": "Social Media Optimization (SMO)",
    "category": "Social Media",
    "heroTitle": "Complete Organic Brand Authority & SMO Frameworks",
    "rating": "4.8",
    "count": "190+"
  },
  {
    "slug": "logo-design-services-company",
    "name": "Logo Design Services",
    "category": "Design & Creative",
    "heroTitle": "Distinctive Memorable Vector Brand Logo Design",
    "rating": "4.9",
    "count": "320+"
  },
  {
    "slug": "promotional-video-editing-services-company",
    "name": "Promotional Video Editing",
    "category": "Creative & Video",
    "heroTitle": "High-Conversion Promotional Ads & Product Video Reels",
    "rating": "4.9",
    "count": "165+"
  },
  {
    "slug": "social-media-graphic-design-services-company",
    "name": "Social Media Graphic Design",
    "category": "Design & Creative",
    "heroTitle": "Scroll-Stopping Social Media Graphics & Banners",
    "rating": "4.9",
    "count": "275+"
  }
];

// Seed default service page content if collection empty
const seedDefaultsIfEmpty = async () => {
  try {
    const count = await ServicePageContent.countDocuments();
    if (count === 0) {
      const records = defaultServices.map(item => ({
        serviceSlug: item.slug,
        serviceName: item.name,
        category: item.category,
        heroTitle: item.heroTitle,
        heroRatingScore: item.rating || '4.9',
        heroRatingReviewCount: item.count ? (item.count + ' client reviews') : '250+ client reviews',
        overviewTitle: 'Engineered for Digital Dominance',
        overviewParagraph1: 'Our expert team builds bespoke strategies tailored for scalable performance, maximum ROI, and verifiable business growth.',
        features: [
          { badge: '01', title: 'Strategic Architecture', desc: 'Custom roadmaps tailored directly to your commercial objectives.' },
          { badge: '02', title: 'Rapid Execution', desc: 'Agile sprints delivering tangible milestones with zero downtime.' },
          { badge: '03', title: 'Verifiable Metrics', desc: 'Complete transparent analytics directly from source conversion tracking.' }
        ],
        faqs: [
          { q: 'How does Webmok guarantee measurable results?', a: 'We establish baseline metrics before launching, provide live reporting dashboards, and deploy dedicated technical account leads.' },
          { q: 'What is the standard engagement timeline?', a: 'Most engagements deliver initial production milestones within 2 to 4 weeks depending on scope.' }
        ]
      }));
      await ServicePageContent.insertMany(records);
      console.log('Seeded 29 default ServicePageContent records successfully');
    }
  } catch (err) {
    console.warn('Notice seeding service page content:', err.message);
  }
};
seedDefaultsIfEmpty();

// GET all service pages
router.get('/', async (req, res) => {
  try {
    await seedDefaultsIfEmpty();
    const pages = await ServicePageContent.find().sort({ serviceName: 1 });
    res.json({ success: true, count: pages.length, data: pages });
  } catch (err) {
    console.error('Error fetching service pages:', err);
    res.status(500).json({ success: false, message: 'Server error fetching service pages', error: err.message });
  }
});

const SLUG_ALIASES = {
  'mobile-marketing': 'mobile-marketing-services-company',
  'e-commerce-development-services-company': 'e-commerce-website-design-development-services-company',
  'e-commerce-development': 'e-commerce-website-design-development-services-company',
  'social-media-graphic-design': 'social-media-graphic-design-services-company',
  'promotional-video': 'promotional-video-editing-services-company',
  'logo-design': 'logo-design-services-company',
  'social-media-optimization': 'social-media-optimization-services-company'
};

// GET single service page by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const resolvedSlug = SLUG_ALIASES[slug] || slug;
    let page = await ServicePageContent.findOne({
      $or: [{ serviceSlug: resolvedSlug }, { serviceSlug: slug }]
    });
    if (!page) {
      // Find matching template in default list
      const def = defaultServices.find(d => d.slug === resolvedSlug || d.slug === slug);
      if (def) {
        page = await ServicePageContent.create({
          serviceSlug: def.slug,
          serviceName: def.name,
          category: def.category,
          heroTitle: def.heroTitle,
          heroRatingScore: def.rating || '4.9',
          heroRatingReviewCount: def.count ? (def.count + ' client reviews') : '250+ client reviews',
          overviewTitle: 'Engineered for Digital Dominance',
          overviewParagraph1: 'Our expert team builds bespoke strategies tailored for scalable performance, maximum ROI, and verifiable business growth.',
          features: [
            { badge: '01', title: 'Strategic Architecture', desc: 'Custom roadmaps tailored directly to your commercial objectives.' },
            { badge: '02', title: 'Rapid Execution', desc: 'Agile sprints delivering tangible milestones with zero downtime.' }
          ],
          faqs: [
            { q: 'How does Webmok guarantee measurable results?', a: 'We establish baseline metrics before launching, provide live reporting dashboards, and deploy dedicated technical account leads.' }
          ]
        });
      } else {
        return res.status(404).json({ success: false, message: 'Service page not found' });
      }
    }
    res.json({ success: true, data: page });
  } catch (err) {
    console.error('Error fetching service page:', err);
    res.status(500).json({ success: false, message: 'Server error fetching service page', error: err.message });
  }
});

// PUT update service page content by slug
router.put('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const resolvedSlug = SLUG_ALIASES[slug] || slug;
    const updateData = req.body;

    const page = await ServicePageContent.findOneAndUpdate(
      { $or: [{ serviceSlug: resolvedSlug }, { serviceSlug: slug }] },
      { $set: updateData },
      { new: true, upsert: true, runValidators: true }
    );

    res.json({ success: true, message: 'Service page content updated successfully', data: page });
  } catch (err) {
    console.error('Error updating service page content:', err);
    res.status(500).json({ success: false, message: 'Server error updating service page content', error: err.message });
  }
});

module.exports = router;

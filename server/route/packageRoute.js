const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Package = require('../module/Package');

// Upload directory for package images
const uploadDir = path.join(__dirname, '../uploads/packages');
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

// Default seed packages covering all 18 primary packages
const defaultPackages = [
  {
    slug: 'seo-packages',
    name: 'SEO Packages',
    shortName: 'SEO',
    category: 'SEO',
    tagline: 'ALL-IN-ONE ORGANIC SEARCH ENGINE MARKETING INDIA · EST. 2018',
    heroTitleHighlight: 'Complete SEO Packages in India',
    leadDesc: 'Comprehensive, end-to-end SEO packages to rank #1 on Google and turn high-intent search traffic into customer revenue.',
    bodyDesc: 'WebMok provides 360-degree search engine optimization combining technical code audits, on-page optimization, content marketing, local search, and high-DA link building.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '98%', label: 'Client Retention Rate' },
      { num: '3.5x', label: 'Average Organic Traffic Growth' },
      { num: '1,200+', label: 'Websites Ranked on Page #1' },
      { num: '100%', label: 'Google Search Essentials Compliant' }
    ],
    plans: [
      {
        name: 'SEO Essential',
        badge: 'Small Business / Startups',
        inrPrice: '12,000',
        usdPrice: '199',
        period: '/ month',
        desc: 'Complete all-in-one SEO foundation for startups, local services, and growing websites.',
        features: [
          'Up to 15 Target Keywords',
          'On-Page Optimization of 10 Pages',
          'Technical Site Health & Error Fixes',
          '12 High-DA Contextual Backlinks / mo',
          'Google Search Console & GA4 Setup',
          'Monthly Ranking & Traffic Scorecard'
        ],
        popular: false
      },
      {
        name: 'SEO Accelerator',
        badge: 'Most Popular / Growth Brands',
        inrPrice: '22,000',
        usdPrice: '349',
        period: '/ month',
        desc: 'Aggressive organic growth engine designed to dominate high-competition commercial keywords.',
        features: [
          'Up to 35 Target Keywords',
          'On-Page Optimization of 25 Pages',
          'Core Web Vitals & Speed Optimization',
          '30 High-DA Editorial Backlinks / mo',
          'Topical Authority Blog Strategy (4 Articles)',
          'Competitor Backlink Intersect & Steal',
          'Bi-Weekly Strategy Reviews & Ranking Tracker'
        ],
        popular: true
      },
      {
        name: 'SEO Dominator',
        badge: 'Enterprise & High Volume',
        inrPrice: '45,000',
        usdPrice: '699',
        period: '/ month',
        desc: 'Total search dominance blueprint for large corporate portals, multi-location brands, and e-commerce leaders.',
        features: [
          'Up to 80 Target Keywords',
          'Comprehensive On-Page (Up to 60 Pages)',
          'Advanced Schema Markup & Structured Data',
          '60+ Tier-1 High Authority Editorial Backlinks',
          'Dedicated Senior SEO Strategist',
          'Weekly Live KPI Dashboard & Ranking Audits'
        ],
        popular: false
      }
    ],
    faqs: [
      { q: 'How long does it take to see tangible ranking improvements?', a: 'Typically within 45 to 90 days you will notice significant rank movement for target keywords and an increase in organic clicks and search impressions.' },
      { q: 'Are your SEO methodologies 100% Google-compliant and white-hat?', a: 'Yes, 100%. We strictly follow Google Search Essentials and Webmaster guidelines with manual outreach.' }
    ],
    status: 'Active',
    order: 1
  },
  {
    slug: 'local-seo-packages',
    name: 'Local SEO Packages',
    shortName: 'Local SEO',
    category: 'SEO',
    tagline: 'DOMINATE GOOGLE MAPS & LOCAL SEARCH PACKAGES',
    heroTitleHighlight: 'High-Converting Local SEO Packages',
    leadDesc: 'Capture high-intent local customers right in your service area with Google Maps 3-pack rankings, verified citations, and review signals.',
    bodyDesc: 'Local SEO ensures your business appears prominently when prospective clients in your city or neighborhood search for your products or emergency services.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '#1 Rank', label: 'In Google Maps 3-Pack' },
      { num: '+380%', label: 'Local Phone Calls & Directions' },
      { num: '100%', label: 'Verified Citation Audit' },
      { num: '4.9/5', label: 'Client Satisfaction Rating' }
    ],
    plans: [
      {
        name: 'Local Starter',
        badge: 'Single Location Store',
        inrPrice: '9,999',
        usdPrice: '149',
        period: '/ month',
        desc: 'Essential Google Business Profile (GBP) optimization and local map visibility for neighborhood businesses.',
        features: [
          'Google Business Profile Full Audit & Setup',
          'Up to 10 Local Geo Keywords',
          '25 High-Authority Local Citations',
          'Review Generation Playbook & QR Setup',
          'Monthly Local Ranking Report'
        ],
        popular: false
      },
      {
        name: 'Local Pro',
        badge: 'Multi-Area Coverage',
        inrPrice: '18,500',
        usdPrice: '280',
        period: '/ month',
        desc: 'Advanced local radius domination for multi-service regional businesses and clinics.',
        features: [
          'Up to 25 Geo-Targeted Keywords',
          'Google Maps 3-Pack Optimization',
          '60 Local Business Directory Submissions',
          'Geo-Tagged Image Metadata Optimization',
          'Local Schema Markup for Website',
          'Monthly Google Call & Direction Tracking'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'How does Local SEO help my physical storefront or service business?', a: 'Over 78% of local mobile searches result in an offline purchase. Local SEO puts your phone number and directions directly in front of nearby buyers.' }
    ],
    status: 'Active',
    order: 2
  },
  {
    slug: 'smm-packages',
    name: 'SMM Packages',
    shortName: 'SMM',
    category: 'Social Media',
    tagline: 'BRAND ENGAGEMENT & HIGH-OCTANE SOCIAL MEDIA PACKAGES',
    heroTitleHighlight: 'Social Media Marketing Packages',
    leadDesc: 'Scale your social footprint, amplify engagement, and convert followers into loyal buyers across Instagram, Facebook, LinkedIn, and YouTube.',
    bodyDesc: 'Turn social media into a reliable revenue driver with viral short-form video strategies, aesthetic feed graphics, community engagement, and paid campaign management.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '5.2M+', label: 'Organic Video Views Generated' },
      { num: '4.8x', label: 'Average Social ROAS' },
      { num: '100%', label: 'Custom Designed Graphics & Reels' },
      { num: '24/7', label: 'Community Monitoring' }
    ],
    plans: [
      {
        name: 'Social Launch',
        badge: 'Startups & Personal Brands',
        inrPrice: '14,000',
        usdPrice: '210',
        period: '/ month',
        desc: 'Consistent aesthetic presence across 2 core social platforms.',
        features: [
          '2 Platforms (Instagram & Facebook)',
          '12 High-Design Graphic Posts',
          '4 High-Engagement Reels / Shorts',
          'Targeted Hashtag Research & Captions',
          'Monthly Reach & Impressions Scorecard'
        ],
        popular: false
      },
      {
        name: 'Social Growth',
        badge: 'E-Commerce & Scaleups',
        inrPrice: '26,000',
        usdPrice: '390',
        period: '/ month',
        desc: 'Dynamic video-first social storytelling that builds community and drives inbound customer inquiries.',
        features: [
          '3 Platforms (Instagram, Facebook, LinkedIn)',
          '20 Custom Designed Posts & Carousels',
          '8 High-Resolution Viral Reels',
          'Active Comment & DM Engagement Assistance',
          'Monthly Creative Strategy Workshop'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Do you create original Reels and video edits for our brand?', a: 'Yes. Our creative team produces high-retention motion graphics, animated hooks, trending audio integration, and subtitle-captioned Reels.' }
    ],
    status: 'Active',
    order: 3
  },
  {
    slug: 'ppc-packages',
    name: 'PPC Packages',
    shortName: 'PPC',
    category: 'PPC',
    tagline: 'HIGH-ROAS GOOGLE ADS & META PERFORMANCE PACKAGES',
    heroTitleHighlight: 'High-Performance PPC Packages',
    leadDesc: 'Stop wasting budget on low-intent clicks. Scale profitable paid search and social campaigns engineered for maximal ROAS.',
    bodyDesc: 'Our certified performance marketers manage Google Search, Performance Max, Display, Meta Lead Ads, and YouTube Remarketing campaigns with surgical precision.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '₹12Cr+', label: 'Annual Ad Spend Managed' },
      { num: '4.6x', label: 'Average Blended ROAS' },
      { num: '-42%', label: 'Reduction in Cost Per Acquisition' },
      { num: '100%', label: 'Live Server-Side Conversion Tracking' }
    ],
    plans: [
      {
        name: 'PPC Starter',
        badge: 'Small Ad Budgets (Up to ₹50K)',
        inrPrice: '12,500',
        usdPrice: '190',
        period: '/ month',
        desc: 'Precision search ad setup and bidding management for focused local and niche inquiries.',
        features: [
          'Google Search Ads Management',
          'Negative Keyword Scrubbing',
          'Conversion Tracking & GTM Setup',
          'Ad Copywriting & A/B Headline Testing',
          'Weekly Bid & Quality Score Optimizations'
        ],
        popular: false
      },
      {
        name: 'Performance Scale',
        badge: 'High-Volume Lead Gen & E-Com',
        inrPrice: '24,000',
        usdPrice: '360',
        period: '/ month',
        desc: 'Full-funnel Google Performance Max, Search, and Meta Retargeting campaigns.',
        features: [
          'Google Search + PMax + Meta Ads',
          'Landing Page Conversion Rate Heuristics',
          'Advanced Dynamic Remarketing Funnels',
          'Server-Side API Tracking Setup',
          'Dedicated PPC Account Manager'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Is the ad spend included in the package fee?', a: 'No, package prices cover management, strategy, copywriting, tracking setup, and optimization. Ad budget is billed directly by Google or Meta to your corporate card.' }
    ],
    status: 'Active',
    order: 4
  },
  {
    slug: 'website-packages',
    name: 'Website Packages',
    shortName: 'Website',
    category: 'Web Development',
    tagline: 'LIGHTNING-FAST CUSTOM CODED CORPORATE & E-COMMERCE WEBSITES',
    heroTitleHighlight: 'Turnkey Website Packages',
    leadDesc: 'Launch a bespoke, mobile-first website engineered for speed, search rankings, and maximum lead generation.',
    bodyDesc: 'From modern corporate business portals to custom WordPress platforms and headless React web applications, our packages provide end-to-end design and engineering.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '<1.2s', label: 'Average Page Load Speed' },
      { num: '100%', label: 'Mobile & Tablet Responsive' },
      { num: '450+', label: 'Delivered Websites Worldwide' },
      { num: '0 Vendor Lock', label: '100% Full Source Code Ownership' }
    ],
    plans: [
      {
        name: 'Corporate Web',
        badge: 'Business & Professional Services',
        inrPrice: '18,000',
        usdPrice: '290',
        period: 'one-time',
        desc: 'Up to 5 custom-designed responsive pages with lead generation forms and WhatsApp triggers.',
        features: [
          '5 Custom UI/UX Designed Pages',
          '100% Mobile Fluid Responsive Layout',
          'Contact Modal & WhatsApp Floating Trigger',
          'Basic On-Page SEO & Meta Setup',
          'Free SSL & Domain Connection Assistance'
        ],
        popular: false
      },
      {
        name: 'Enterprise Web Portal',
        badge: 'Established Corporate Brands',
        inrPrice: '38,000',
        usdPrice: '590',
        period: 'one-time',
        desc: 'Up to 15 pages with custom interactive components, CMS integration, and sub-second load times.',
        features: [
          'Up to 15 Custom Designed Pages',
          'Self-Managed CMS Admin Panel',
          'Speed & Core Web Vitals Optimization',
          'Advanced Lead Capture Funnels',
          '1 Year Technical Support & Maintenance'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Will I own all the source code and design assets?', a: 'Yes. You receive 100% ownership of source code, domain assets, database files, and graphic designs.' }
    ],
    status: 'Active',
    order: 5
  },
  {
    slug: 'offpage-seo-packages',
    name: 'Off-Page SEO Packages',
    shortName: 'Off-Page SEO',
    category: 'SEO',
    tagline: 'HIGH-AUTHORITY BACKLINK OUTREACH & DIGITAL PR PACKAGES',
    heroTitleHighlight: 'Authority Link Building Packages',
    leadDesc: 'Acquire high Domain Authority (DA) contextual backlinks from verified industry blogs and news publications to accelerate search engine rank velocity.',
    bodyDesc: 'High-quality backlinks remain one of Google’s top ranking signals. We execute white-hat blogger outreach, niche guest posting, and digital PR.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: 'DA 40-80+', label: 'Verified Editorial Sites' },
      { num: '0 PBNs', label: '100% Clean White-Hat Outreach' },
      { num: '100%', label: 'Permanent Do-Follow Contextual Links' },
      { num: 'Live', label: 'Real-Time Link Report Sheets' }
    ],
    plans: [
      {
        name: 'Link Foundation',
        badge: 'Initial Authority Boost',
        inrPrice: '15,000',
        usdPrice: '220',
        period: '/ month',
        desc: 'Clean, foundational link acquisition to strengthen domain trust and indexation.',
        features: [
          '15 High-DA Do-Follow Backlinks',
          'Editorial Niche Guest Posts',
          'Infographic & Media Submissions',
          'Anchor Text Natural Distribution',
          'Detailed Live Backlink Report'
        ],
        popular: false
      },
      {
        name: 'High-Impact PR',
        badge: 'Competitive Niches',
        inrPrice: '28,000',
        usdPrice: '420',
        period: '/ month',
        desc: 'Premium digital PR and contextual authority links for high-volume commercial keywords.',
        features: [
          '35 High-DA (DA 50+) Editorial Links',
          'Premium Content Writing Included',
          'Broken Link Building Outreach',
          'Competitor Backlink Replication',
          'Monthly Anchor Text Ratio Audits'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Are these backlinks safe from Google penalties?', a: 'Yes. Every link is earned through manual contextual outreach on real, traffic-verified websites with zero automated link schemes or PBN networks.' }
    ],
    status: 'Active',
    order: 6
  },
  {
    slug: 'onpage-seo-packages',
    name: 'On-Page SEO Packages',
    shortName: 'On-Page SEO',
    category: 'SEO',
    tagline: 'INTERNAL STRUCTURE, CONTENT & SEMANTIC KEYWORD OPTIMIZATION',
    heroTitleHighlight: 'Technical & Content On-Page SEO Packages',
    leadDesc: 'Optimize internal page architecture, headings, semantic schema markup, and keyword density for maximum crawlability and rankings.',
    bodyDesc: 'Fix crawl errors, title tag cannibalization, missing meta descriptions, and image alt tags while optimizing text content for user search intent.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '95+', label: 'Google Lighthouse SEO Score' },
      { num: '100%', label: 'Schema Markup Validated' },
      { num: '<1s', label: 'Average Core Web Vitals Fixes' },
      { num: '0 Cannibalization', label: 'Strict Keyword Mapping' }
    ],
    plans: [
      {
        name: 'On-Page Essentials',
        badge: 'Up to 10 Pages',
        inrPrice: '10,000',
        usdPrice: '150',
        period: 'one-time',
        desc: 'Comprehensive meta and content alignment for your top 10 core service or product pages.',
        features: [
          'Title & Meta Description Optimization',
          'H1, H2, H3 Semantic Hierarchy Fixes',
          'Image Alt Tag & WebP Optimization',
          'Internal Linking Structure Plan',
          'Google Search Console Verification'
        ],
        popular: false
      },
      {
        name: 'Complete On-Page Overhaul',
        badge: 'Up to 30 Pages',
        inrPrice: '20,000',
        usdPrice: '300',
        period: 'one-time',
        desc: 'Total on-page restructuring with JSON-LD schema, breadcrumbs, and content gap additions.',
        features: [
          'Up to 30 Pages Full Optimization',
          'JSON-LD Structured Data Schema',
          'Canonical Tag & Duplicate Content Fixes',
          'URL Slug Optimization & 301 Redirect Plan',
          'Comprehensive Pre/Post Audit Report'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Will updating On-Page SEO affect existing live pages?', a: 'Only positively! We carefully preserve your URLs and live content while refining headings, meta tags, and structured data.' }
    ],
    status: 'Active',
    order: 7
  },
  {
    slug: 'technical-seo-packages',
    name: 'Technical SEO Packages',
    shortName: 'Technical SEO',
    category: 'SEO',
    tagline: 'CRAWLABILITY, CORE WEB VITALS & SERVER-LEVEL ARCHITECTURE',
    heroTitleHighlight: 'Technical SEO Audit & Fix Packages',
    leadDesc: 'Eliminate crawl budget waste, render-blocking JavaScript, slow server responses, and indexing bottlenecks.',
    bodyDesc: 'Google algorithms reward technically immaculate websites. We conduct deep log-file analysis, Core Web Vitals fixes, and site speed optimizations.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '100/100', label: 'Target PageSpeed Score' },
      { num: '0 Index Errors', label: 'In Google Search Console' },
      { num: 'SSL/HTTPS', label: 'Strict Security Hardening' },
      { num: 'XML Sitemap', label: 'Dynamic Real-Time Feeds' }
    ],
    plans: [
      {
        name: 'Technical Audit & Fix',
        badge: 'Critical Performance Fixes',
        inrPrice: '16,000',
        usdPrice: '240',
        period: 'one-time',
        desc: 'Fix indexing errors, robots.txt, XML sitemaps, and Core Web Vitals.',
        features: [
          'Full Deep Crawl (Screaming Frog / Semrush)',
          'Robots.txt & XML Sitemap Configuration',
          'Core Web Vitals (LCP, INP, CLS) Fixes',
          'Broken Links (404s) & Redirect Loop Fixes',
          'Server Response Time & Caching Optimization'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'How do Core Web Vitals impact our search rank?', a: 'Since Google’s Page Experience update, Core Web Vitals are a confirmed ranking factor. Sites loading in under 2.5s rank significantly higher.' }
    ],
    status: 'Active',
    order: 8
  },
  {
    slug: 'white-label-seo-packages',
    name: 'White Label SEO Packages',
    shortName: 'White Label SEO',
    category: 'SEO',
    tagline: 'FOR AGENCIES, RESELLERS & WEB STUDIOS WORLDWIDE',
    heroTitleHighlight: 'Agency White Label SEO Reseller Packages',
    leadDesc: 'Scale your marketing agency without hiring in-house staff. Deliver exceptional SEO results under your own agency branding.',
    bodyDesc: 'We handle 100% of the fulfillment — audits, on-page, backlinks, and reporting — while you maintain client communication under your brand.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '45+', label: 'Active Partner Agencies' },
      { num: '100% White Label', label: 'Unbranded or Custom Branded Reports' },
      { num: 'Bulk Discounts', label: 'Tiered Pricing for Agency Volume' },
      { num: 'NDA Protected', label: 'Complete Confidentiality Guaranteed' }
    ],
    plans: [
      {
        name: 'Agency Reseller Essential',
        badge: 'Up to 5 Clients',
        inrPrice: '10,500',
        usdPrice: '160',
        period: '/ client / month',
        desc: 'Complete fulfillment for standard client accounts.',
        features: [
          'White Label PDF & Live Dashboard Reports',
          '100% Fulfillment Under Your Agency Brand',
          'Monthly Strategy Slidedeck for Your Client Calls',
          'Dedicated Agency Account Manager',
          'Full NDA and Confidentiality Contract'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Will WebMok ever contact our clients directly?', a: 'Never. We operate strictly as your behind-the-scenes engineering team protected by legal NDAs.' }
    ],
    status: 'Active',
    order: 9
  },
  {
    slug: 'enterprise-seo-packages',
    name: 'Enterprise SEO Packages',
    shortName: 'Enterprise SEO',
    category: 'SEO',
    tagline: 'SCALABLE MULTI-LOCATION & MILLION-PAGE ENTERPRISE SEARCH DOMINANCE',
    heroTitleHighlight: 'Enterprise-Grade SEO Packages',
    leadDesc: 'Engineered for high-volume e-commerce brands, SaaS platforms, and enterprise corporations competing on high-difficulty national search terms.',
    bodyDesc: 'Enterprise search engine optimization requires custom scripting, programmatic SEO, log analysis, automated schema pipelines, and multi-department stakeholder coordination.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '10M+', label: 'Organic Monthly Impressions' },
      { num: 'Dedicated Team', label: 'Senior Technical & Content Leads' },
      { num: 'SLA Guaranteed', label: 'Enterprise Uptime & Response Standards' },
      { num: 'Custom Reporting', label: 'Automated BigQuery / Looker Dashboards' }
    ],
    plans: [
      {
        name: 'Enterprise Growth',
        badge: 'Large Scale Platforms',
        inrPrice: '55,000',
        usdPrice: '850',
        period: '/ month',
        desc: 'Full-spectrum technical, content, and digital PR dominance.',
        features: [
          'Unlimited Technical Audits & Jira Integration',
          'Programmatic SEO & Taxonomy Architecture',
          '80+ Tier-1 Editorial Links Per Month',
          'Custom Automated Looker Studio Dashboard',
          'Dedicated Senior Technical SEO Director'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Can you work directly with our in-house engineering and product teams?', a: 'Yes. Our senior technical leads integrate seamlessly into your GitHub, Jira, and Slack workflows.' }
    ],
    status: 'Active',
    order: 10
  },
  {
    slug: 'facebook-marketing-packages',
    name: 'Facebook Marketing Packages',
    shortName: 'Facebook Ads',
    category: 'Social Media',
    tagline: 'PREDICTABLE REVENUE & HIGH-CONVERTING META CAMPAIGNS',
    heroTitleHighlight: 'Facebook Marketing & Advertising Packages',
    leadDesc: 'Generate consistent inbound leads and profitable e-commerce sales with targeted Facebook ad funnels and creative testing.',
    bodyDesc: 'We manage full-funnel Facebook and Instagram campaigns from audience research and high-converting ad copy to dynamic catalog retargeting and creative testing.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '₹8Cr+', label: 'Meta Ad Spend Managed' },
      { num: '4.8x', label: 'Average E-Com ROAS' },
      { num: '15,000+', label: 'Monthly B2B Leads Delivered' },
      { num: 'A/B Testing', label: 'Continuous Creative Iteration' }
    ],
    plans: [
      {
        name: 'Meta Starter',
        badge: 'Lead Gen & Small Business',
        inrPrice: '12,500',
        usdPrice: '190',
        period: '/ month',
        desc: 'Targeted lead ads and retargeting funnels.',
        features: [
          'Meta Pixel & CAPI Server-Side Setup',
          'Instant Lead Form Campaigns',
          'Custom Lookalike & Retargeting Audiences',
          'Ad Creatives & Copywriting Included',
          'Weekly Performance Reports'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'How do you handle iOS privacy and tracking limitations?', a: 'We implement Meta Conversions API (CAPI) server-side tracking so 100% of conversion signals are captured accurately.' }
    ],
    status: 'Active',
    order: 11
  },
  {
    slug: 'instagram-marketing-packages',
    name: 'Instagram Marketing Packages',
    shortName: 'Instagram',
    category: 'Social Media',
    tagline: 'VISUAL STORYTELLING & VIRAL REELS ACCELERATOR',
    heroTitleHighlight: 'Instagram Marketing Packages',
    leadDesc: 'Build a visually magnetic Instagram presence that drives viral reach, saves, shares, and high-margin direct message inquiries.',
    bodyDesc: 'Comprehensive Instagram management including viral Reels production, aesthetic carousel designing, influencer seeding, and paid Instagram story ads.',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '3.8M+', label: 'Reels Views Achieved' },
      { num: '4.9/5', label: 'Visual Aesthetic Quality' },
      { num: '100%', label: 'Custom Branded Visuals' },
      { num: 'Daily', label: 'Story & Highlight Management' }
    ],
    plans: [
      {
        name: 'Insta Growth',
        badge: 'Visual Brands & Coaches',
        inrPrice: '15,000',
        usdPrice: '230',
        period: '/ month',
        desc: 'Reels-centric content calendar designed for organic reach.',
        features: [
          '15 High-Design Feed Posts',
          '8 Edited Viral Reels with Trending Audio',
          'Custom Highlight Covers & Bio Optimization',
          'Hashtag Stack & Community Engagement',
          'Monthly Reach & Follower Growth Report'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Can you work with our raw smartphone video footage?', a: 'Yes! You can share raw clips via Google Drive, and our video editing team will transform them into high-converting branded Reels.' }
    ],
    status: 'Active',
    order: 12
  },
  {
    slug: 'linkedin-marketing-packages',
    name: 'LinkedIn Marketing Packages',
    shortName: 'LinkedIn',
    category: 'Social Media',
    tagline: 'B2B INBOUND LEADS & FOUNDER PERSONAL BRANDING',
    heroTitleHighlight: 'B2B LinkedIn Marketing Packages',
    leadDesc: 'Connect directly with C-suite decision-makers, book B2B sales discovery calls, and establish your corporate thought leadership.',
    bodyDesc: 'Targeted LinkedIn content publishing, corporate company page growth, sponsored InMail campaigns, and executive personal branding.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '350+', label: 'B2B Demos Booked' },
      { num: '4.2x', label: 'Profile View Surge' },
      { num: '100%', label: 'Executive Thought Leadership Content' },
      { num: 'C-Suite', label: 'Targeted Decision Maker Outreach' }
    ],
    plans: [
      {
        name: 'LinkedIn Authority',
        badge: 'Founders & B2B Enterprises',
        inrPrice: '18,000',
        usdPrice: '275',
        period: '/ month',
        desc: 'Executive ghostwriting and company page scaling.',
        features: [
          '12 Executive Thought-Leadership Posts',
          '4 High-Fidelity Slide Carousels (PDF)',
          'Company Page Updates & Follower Acquisition',
          'Strategic Connection Outreach Strategy',
          'Monthly B2B Engagement Analytics'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Can you manage both personal founder profiles and company pages?', a: 'Yes, we optimize both for maximum synergy and organic algorithm distribution.' }
    ],
    status: 'Active',
    order: 13
  },
  {
    slug: 'youtube-marketing-packages',
    name: 'YouTube Marketing Packages',
    shortName: 'YouTube',
    category: 'Social Media',
    tagline: 'LONG-TERM VIDEO AUTHORITY & SEARCH RANKING',
    heroTitleHighlight: 'YouTube Growth & Video SEO Packages',
    leadDesc: 'Dominate the world’s second largest search engine with high-retention video edits, click-worthy thumbnail designs, and YouTube SEO.',
    bodyDesc: 'Full YouTube channel management including keyword-targeted video titles, chapters, CTR-optimized thumbnails, Shorts syndication, and end-screen funnels.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '12M+', label: 'Total YouTube Views' },
      { num: '8.4%', label: 'Average Thumbnail CTR' },
      { num: '100%', label: 'Video SEO & Chapter Timestamps' },
      { num: 'Full HD', label: 'Professional Motion Graphics' }
    ],
    plans: [
      {
        name: 'YouTube Channel Pro',
        badge: 'Creators & Corporate Channels',
        inrPrice: '20,000',
        usdPrice: '300',
        period: '/ month',
        desc: 'End-to-end channel optimization and thumbnail design.',
        features: [
          '4 Long-Form Video Optimizations & SEO',
          '4 Custom High-CTR Thumbnail Designs',
          '8 YouTube Shorts Edited & Syndicated',
          'Keyword-Rich Video Descriptions & Cards',
          'Monthly Retention & Subscriber Growth Scorecard'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'How important are custom thumbnails for YouTube ranking?', a: 'Click-through rate (CTR) is a critical ranking factor on YouTube. Our custom thumbnails consistently achieve 8-12% CTRs.' }
    ],
    status: 'Active',
    order: 14
  },
  {
    slug: 'orm-packages',
    name: 'Online Reputation Management Packages',
    shortName: 'ORM',
    category: 'Branding',
    tagline: 'PROTECT, RESTORE & ELEVATE YOUR BRAND REPUTATION',
    heroTitleHighlight: 'Online Reputation Management Packages',
    leadDesc: 'Suppress negative search results, manage customer review profiles, and project verified trust across Google, Glassdoor, and Trustpilot.',
    bodyDesc: 'Negative reviews and defamatory links can destroy prospective deals. Our ORM engineers bury negative search links and cultivate 5-star positive sentiment.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '94%', label: 'Suppression Rate of Negative Links' },
      { num: '4.9★', label: 'Average Target Google Rating' },
      { num: '100% NDA', label: 'Strict Discretion & Privacy' },
      { num: '24/7', label: 'Brand Sentiment Monitoring' }
    ],
    plans: [
      {
        name: 'Reputation Shield',
        badge: 'Corporate & Executive Protection',
        inrPrice: '25,000',
        usdPrice: '380',
        period: '/ month',
        desc: 'Negative result suppression and review amplification.',
        features: [
          'Page #1 Negative Search Result Suppression',
          'High-Authority Positive Asset Creation',
          'Google Business Review Cleanup Guidance',
          'Wikipedia & Digital PR Mentions',
          'Weekly Brand Sentiment Tracker'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Can negative search results on Google actually be removed or pushed down?', a: 'Yes. Through legal suppression and creating high-authority positive properties, we displace negative links past page 2 where 95% of users never look.' }
    ],
    status: 'Active',
    order: 15
  },
  {
    slug: 'logo-design-packages',
    name: 'Logo Design Packages',
    shortName: 'Logo Design',
    category: 'Branding',
    tagline: 'ICONIC CORPORATE VISUAL IDENTITY & BRAND GUIDELINES',
    heroTitleHighlight: 'Bespoke Logo & Brand Identity Packages',
    leadDesc: 'Make an indelible first impression with a handcrafted vector logo, corporate typography system, and complete brand style manual.',
    bodyDesc: 'Every logo is designed from original creative sketches by senior brand identity designers with complete vector source files (AI, EPS, SVG, PNG) and trademark ownership.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '100%', label: 'Original Vector Concepts' },
      { num: '3-5 Days', label: 'Initial Concepts Turnaround' },
      { num: 'Unlimited', label: 'Revisions on Selected Concept' },
      { num: 'Full Copyright', label: '100% Ownership Transferred' }
    ],
    plans: [
      {
        name: 'Corporate Identity Essentials',
        badge: 'Startups & New Businesses',
        inrPrice: '6,500',
        usdPrice: '99',
        period: 'one-time',
        desc: '3 original concepts with unlimited revisions and vector files.',
        features: [
          '3 Unique Custom Vector Concepts',
          'Unlimited Design Revisions',
          'High-Res PNG, JPEG, SVG, PDF Files',
          'Complete Vector AI & EPS Source Files',
          'Full Commercial Copyright Transfer'
        ],
        popular: false
      },
      {
        name: 'Complete Brand Manual',
        badge: 'Established Enterprises',
        inrPrice: '14,000',
        usdPrice: '210',
        period: 'one-time',
        desc: '6 concepts with stationery design and brand guide manual.',
        features: [
          '6 Distinct Creative Concepts',
          'Full Corporate Brand Style Guide (Colors & Typography)',
          'Business Card, Letterhead & Envelope Mockups',
          'Social Media Profile & Banner Kit',
          'Favicon & App Icon Formats'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'Do you use clip art or templates in your logo designs?', a: 'Never. Every design is drawn custom from scratch based on your company story and market positioning.' }
    ],
    status: 'Active',
    order: 16
  },
  {
    slug: 'smo-packages',
    name: 'SMO Packages',
    shortName: 'SMO',
    category: 'Social Media',
    tagline: 'SOCIAL MEDIA OPTIMIZATION & ORGANIC PROFILE VIRALITY',
    heroTitleHighlight: 'Social Media Optimization Packages',
    leadDesc: 'Optimize your social media profiles, bios, community groups, and posting cadence to maximize organic algorithm discoverability.',
    bodyDesc: 'Bridge the gap between search and social. We optimize profile metadata, highlight funnels, hashtag structures, and engagement algorithms.',
    image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '+240%', label: 'Organic Profile Visits' },
      { num: '100%', label: 'Keyword-Optimized Bios' },
      { num: 'Cross-Platform', label: 'Synchronized Brand Aesthetics' },
      { num: 'Daily', label: 'Engagement Heuristics' }
    ],
    plans: [
      {
        name: 'SMO Starter',
        badge: 'Profile Optimization',
        inrPrice: '8,500',
        usdPrice: '130',
        period: '/ month',
        desc: 'Complete audit and organic enhancement across core social handles.',
        features: [
          'Full Profile & Bio Keyword SEO',
          'Custom Header & Avatar Alignment',
          'Highlight Covers & Pinned Posts Setup',
          'Weekly Organic Interaction & Groups Outreach',
          'Monthly Profile Performance Tracker'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'What is the difference between SMO and SMM?', a: 'SMO focuses on optimizing your organic profiles and viral discovery; SMM includes paid campaigns, paid ad funnels, and sponsored promotions.' }
    ],
    status: 'Active',
    order: 17
  },
  {
    slug: 'website-maintenance-packages',
    name: 'Website Maintenance Packages',
    shortName: 'Maintenance',
    category: 'Maintenance',
    tagline: '24/7 SECURITY MONITORING, CLOUD BACKUPS & SPEED HEALTH',
    heroTitleHighlight: 'Website Maintenance & Care Packages',
    leadDesc: 'Keep your website secure, blazing fast, updated, and error-free with proactive 24/7 monitoring, daily cloud backups, and zero-day patch management.',
    bodyDesc: 'Never worry about malware, broken plugins, or database crashes. Our engineers provide continuous uptime monitoring, core updates, and rapid content changes.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop&q=80',
    stats: [
      { num: '99.9%', label: 'Uptime Guaranteed' },
      { num: '24/7', label: 'Real-Time Malware Scanning' },
      { num: 'Daily', label: 'Off-Site Automated Cloud Backups' },
      { num: '<2 Hrs', label: 'Emergency Incident Response Time' }
    ],
    plans: [
      {
        name: 'Essential Care',
        badge: 'Small Business Sites',
        inrPrice: '4,500',
        usdPrice: '70',
        period: '/ month',
        desc: 'Proactive maintenance, plugin updates, and off-site cloud backups.',
        features: [
          'Weekly WordPress / Core Updates',
          'Daily Automated Cloud Backups',
          '24/7 Uptime & Security Monitoring',
          'SSL Certificate Health Check',
          '1 Hour of Content Edits Included / mo'
        ],
        popular: false
      },
      {
        name: 'Enterprise Care',
        badge: 'Mission-Critical & E-Commerce',
        inrPrice: '11,500',
        usdPrice: '175',
        period: '/ month',
        desc: 'Advanced security hardening, Redis cache tuning, and dedicated emergency developer support.',
        features: [
          'Daily Plugin & Security Patching',
          'Real-Time Cloud Backups (Hourly for E-Com)',
          'Malware Removal Guarantee',
          'Database Query & Speed Optimization',
          '5 Hours of Custom Engineering Support / mo',
          'Priority WhatsApp & Phone Developer Hotline'
        ],
        popular: true
      }
    ],
    faqs: [
      { q: 'What happens if my site goes down or gets hacked?', a: 'Under our maintenance plans, our engineering team is alerted automatically within 60 seconds and initiates instant recovery from the latest verified clean backup.' }
    ],
    status: 'Active',
    order: 18
  }
];

// =========================================================================
// 1. GET ALL PACKAGES (AUTO-SEEDS DEFAULTS IF DATABASE IS EMPTY)
// =========================================================================
router.get('/', async (req, res) => {
  try {
    let packages = await Package.find().sort({ order: 1 });
    if (!packages || packages.length === 0) {
      // Auto seed default packages
      packages = await Package.insertMany(defaultPackages);
    }
    res.json({
      success: true,
      count: packages.length,
      data: packages
    });
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch packages',
      error: error.message
    });
  }
});

// =========================================================================
// 2. GET SINGLE PACKAGE BY ID OR SLUG
// =========================================================================
router.get('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let pkg;

    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      pkg = await Package.findById(identifier);
    }

    if (!pkg) {
      pkg = await Package.findOne({ slug: identifier });
    }

    if (!pkg) {
      // Fallback search in default seed
      const seedFound = defaultPackages.find(p => p.slug === identifier);
      if (seedFound) {
        return res.json({
          success: true,
          data: seedFound
        });
      }
      return res.status(404).json({
        success: false,
        message: 'Package not found'
      });
    }

    res.json({
      success: true,
      data: pkg
    });
  } catch (error) {
    console.error('Error fetching package:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch package',
      error: error.message
    });
  }
});

// =========================================================================
// 3. UPLOAD PACKAGE BANNER IMAGE (MULTER)
// =========================================================================
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload an image file'
      });
    }
    const relativePath = `/uploads/packages/${req.file.filename}`;
    res.json({
      success: true,
      message: 'Package image uploaded successfully',
      imageUrl: relativePath
    });
  } catch (error) {
    console.error('Error uploading package image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to upload package image',
      error: error.message
    });
  }
});

// =========================================================================
// 4. CREATE NEW PACKAGE
// =========================================================================
router.post('/', async (req, res) => {
  try {
    const { slug, name } = req.body;
    if (!slug || !name) {
      return res.status(400).json({
        success: false,
        message: 'Package name and slug are required'
      });
    }

    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const existing = await Package.findOne({ slug: cleanSlug });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `Package with slug "${cleanSlug}" already exists`
      });
    }

    const newPackage = new Package({
      ...req.body,
      slug: cleanSlug
    });

    const saved = await newPackage.save();
    res.status(201).json({
      success: true,
      message: `Package "${saved.name}" created successfully`,
      data: saved
    });
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create package',
      error: error.message
    });
  }
});

// =========================================================================
// 5. UPDATE PACKAGE (BY ID OR SLUG)
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

    let updated = await Package.findOneAndUpdate(
      query,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updated) {
      // If not yet in DB, insert it
      const seedFound = defaultPackages.find(p => p.slug === identifier) || {};
      const newPackage = new Package({
        ...seedFound,
        ...updateData,
        slug: updateData.slug || identifier
      });
      updated = await newPackage.save();
    }

    res.json({
      success: true,
      message: `Package "${updated.name}" updated successfully`,
      data: updated
    });
  } catch (error) {
    console.error('Error updating package:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update package',
      error: error.message
    });
  }
});

// =========================================================================
// 6. DELETE PACKAGE (BY ID OR SLUG)
// =========================================================================
router.delete('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let deleted;
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      deleted = await Package.findByIdAndDelete(identifier);
    } else {
      deleted = await Package.findOneAndDelete({ slug: identifier });
    }

    res.json({
      success: true,
      message: `Package "${(deleted && deleted.name) || identifier}" deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting package:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete package',
      error: error.message
    });
  }
});

// =========================================================================
// 7. RESET PACKAGES TO DEFAULT
// =========================================================================
router.post('/reset', async (req, res) => {
  try {
    await Package.deleteMany({});
    const inserted = await Package.insertMany(defaultPackages);
    res.json({
      success: true,
      message: 'Packages reset to system defaults successfully',
      data: inserted
    });
  } catch (error) {
    console.error('Error resetting packages:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reset packages',
      error: error.message
    });
  }
});

module.exports = router;

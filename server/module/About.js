const mongoose = require('mongoose');

const defaultStats = [
  { id: '1', num: '1500+', label: 'Projects Delivered', icon: 'FaTrophy' },
  { id: '2', num: '20+', label: 'Industry Sectors', icon: 'FaLayerGroup' },
  { id: '3', num: '75+', label: 'Professionals', icon: 'FaUsers' },
  { id: '4', num: '10+', label: 'Years of Experience', icon: 'FaBuilding' }
];

const defaultFastFacts = [
  { label: 'Incorporation Date', value: '16 June 2016' },
  { label: 'Corporate Headquarters', value: 'New Delhi, India' },
  { label: 'Branch Offices', value: 'Rohtak, Haryana' },
  { label: 'Client Geographic Scope', value: 'Pan-India & Global International Clients' },
  { label: 'Active Client Roster', value: '500+ Ongoing Partnerships' },
  { label: 'Completed Projects', value: '1500+ Digital Deployments' },
  { label: 'Assurance Policy', value: '100% Milestones or Full Consideration Refund' }
];

const defaultServices = [
  {
    id: 'web-design',
    icon: 'FaLaptopCode',
    title: 'Web Designing',
    desc: 'Crafting stunning, human-centric visual interfaces and frictionless user experiences tailored for high brand authority.',
    subFeatures: ['UI/UX Strategy & Wireframing', 'Responsive Mobile-First Design', 'Brand Identity & Style Guides', 'Figma / Adobe XD Prototyping', 'Landing Page & CRO Design', 'E-Commerce Storefront Design']
  },
  {
    id: 'web-dev',
    icon: 'FaCogs',
    title: 'Web Development',
    desc: 'Engineering robust, full-stack web software, React apps, and custom CMS platforms with sub-second page performance.',
    subFeatures: ['React / Next.js Applications', 'WordPress & Custom CMS', 'RESTful API Integration', 'Performance Optimization', 'Progressive Web Apps (PWA)', 'Database Architecture & Scaling']
  },
  {
    id: 'seo',
    icon: 'FaSearch',
    title: 'Search Engine Optimization',
    desc: '100% white-hat organic ranking strategies designed to dominate competitive keyword niches on Google search.',
    subFeatures: ['Technical SEO Audit & Fix', 'On-Page & Off-Page SEO', 'Local SEO & Google Maps', 'Backlink Authority Building', 'Keyword Research & Mapping', 'Monthly Ranking Reports']
  },
  {
    id: 'email-mkt',
    icon: 'FaEnvelopeOpenText',
    title: 'Email Marketing',
    desc: 'High-deliverability automated email funnels, behavioral trigger campaigns, and high-converting subscriber flows.',
    subFeatures: ['Drip Campaign Automation', 'Behavioral Trigger Emails', 'Subscriber List Management', 'A/B Split Testing', 'HTML Email Template Design', 'Deliverability & Open Rate Boost']
  },
  {
    id: 'content-mkt',
    icon: 'FaRegLightbulb',
    title: 'Content Marketing',
    desc: 'In-depth editorial articles, authority whitepapers, and compelling brand storytelling that drives qualified traffic.',
    subFeatures: ['SEO Blog Articles & Guides', 'Brand Storytelling & Copywriting', 'Authority Whitepapers', 'Infographic & Visual Content', 'YouTube Script Writing', 'Content Distribution Strategy']
  },
  {
    id: 'mobile-mkt',
    icon: 'FaMobileAlt',
    title: 'Mobile Marketing',
    desc: 'Targeted in-app marketing, device-optimized acquisition flows, and App Store Optimization (ASO) for native apps.',
    subFeatures: ['App Store Optimization (ASO)', 'Push Notification Campaigns', 'SMS & WhatsApp Marketing', 'In-App Advertising Strategy', 'Mobile-First Campaign Design', 'User Retention & Re-engagement']
  },
  {
    id: 'smm',
    icon: 'FaBullhorn',
    title: 'Social Media Marketing',
    desc: 'Viral creative campaigns, interactive motion graphics, and paid performance ad funnels on Meta, LinkedIn & Instagram.',
    subFeatures: ['Facebook & Instagram Ads', 'LinkedIn B2B Campaigns', 'Creative Reels & Motion Graphics', 'Influencer Collaboration Strategy', 'Paid Ad Funnel Optimization', 'Audience Targeting & Retargeting']
  },
  {
    id: 'smo',
    icon: 'FaShareAlt',
    title: 'Social Media Optimization',
    desc: 'Optimizing corporate profiles, amplifying brand authority, and cultivating vibrant, engaged customer communities.',
    subFeatures: ['Profile Setup & Branding', 'Content Calendar Planning', 'Organic Reach Amplification', 'Hashtag Strategy Research', 'Community Engagement Management', 'Social Analytics & Reporting']
  },
  {
    id: 'ppc',
    icon: 'FaAd',
    title: 'PPC & Google AdWords',
    desc: 'Precision laser-targeted Google Search Ads and Performance Max funnels designed to deliver maximum return on ad spend.',
    subFeatures: ['Google Search Ad Campaigns', 'Performance Max Campaigns', 'Display & Remarketing Ads', 'Shopping Ads for E-Commerce', 'Bid Strategy & Budget Optimization', 'Conversion Tracking & ROAS Analysis']
  }
];

const defaultLeaders = [
  {
    id: '1',
    name: 'Rahish Sangwan',
    role: 'Founder & Managing Director',
    bio: 'Over a decade of leadership in digital transformation, tech architecture, and scaling business development in NCR & North India.',
    image: '/Rahish Sir.png'
  },
  {
    id: '2',
    name: 'Simran Narang',
    role: 'Digital Marketing Head',
    bio: 'Full-stack engineering expert specializing in scalable React ecosystem, mobile application pipelines, and high-load web architectures.',
    image: '/simran1.png'
  },
  {
    id: '3',
    name: 'Deepak Suhag',
    role: 'Director of Performance Marketing',
    bio: 'Data-driven PPC and SEO strategist who has managed over ₹15+ Crore in profitable digital advertising spend across enterprise brands.',
    image: '/DeepakSir-1.png'
  }
];

const aboutSchema = new mongoose.Schema(
  {
    bentoStats: {
      tagline: { type: String, default: 'Our foundation for every project we deliver.' },
      accentWord: { type: String, default: 'Excellence.' },
      taglineDesc: { type: String, default: 'Since 2016, Webmok Pvt Ltd has consistently delivered measurable digital success to businesses across India and globally — backed by a team of seasoned experts and a proven track record.' },
      whyTitle: { type: String, default: 'Why Webmok?' },
      whyDesc1: { type: String, default: 'We are a premier IT and Digital Marketing company with offices in Delhi and Rohtak, serving 500+ active clients across India and abroad.' },
      whyDesc2: { type: String, default: 'Our team of 75+ specialists combines cutting-edge technology with deep domain expertise to engineer digital growth engines that outperform the competition.' },
      stats: {
        type: [
          {
            id: { type: String },
            num: { type: String },
            label: { type: String },
            icon: { type: String }
          }
        ],
        default: defaultStats
      }
    },
    corporateProfile: {
      subtitle: { type: String, default: 'Corporate Profile' },
      title: { type: String, default: 'Developing Any Kind of Business in Digital Form' },
      leadPara: { type: String, default: 'Webmok Pvt Ltd is a top-ranking IT service providing enterprise from India delivering comprehensive, end-to-end digital transformation solutions. Operating on a global level, we spearhead strategic projects for clients across India as well as overseas markets.' },
      bodyPara: { type: String, default: 'We have over 500+ active clients and have successfully delivered 1500+ projects across diverse sectors. We ensure to promote your business digitally and provide you 100% ranking on Google.' },
      guaranteeTitle: { type: String, default: '100% Earned Result & Money-Back Policy' },
      guaranteeText: { type: String, default: 'Webmok Pvt Ltd gives you a 100% guarantee for delivering earned results. If due to any unforeseen reason we are unable to deliver your project milestones, according to our transparent policy we will return your entire amount of consideration. We build healthy, fair client relationships, deliver every project on time, and disclose our complete execution process prior to agreement.' },
      fastFacts: {
        type: [
          {
            label: { type: String },
            value: { type: String }
          }
        ],
        default: defaultFastFacts
      }
    },
    expertiseExecution: {
      subtitle: { type: String, default: 'Expertise & Execution' },
      title: { type: String, default: 'Well-Qualified Staff & Complete Services Portfolio' },
      services: {
        type: [
          {
            id: { type: String },
            icon: { type: String },
            title: { type: String },
            desc: { type: String },
            subFeatures: { type: [String] }
          }
        ],
        default: defaultServices
      }
    },
    executiveGuidance: {
      subtitle: { type: String, default: 'Executive Guidance' },
      title: { type: String, default: 'Meet The Experts Guiding Your Brand' },
      leaders: {
        type: [
          {
            id: { type: String },
            name: { type: String },
            role: { type: String },
            bio: { type: String },
            image: { type: String }
          }
        ],
        default: defaultLeaders
      }
    },
    isDefault: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);

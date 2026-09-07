import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaStar,
  FaCheckCircle,
  FaRocket,
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaHeadset,
  FaRegLightbulb,
  FaProjectDiagram,
  FaAward,
  FaSmile,
  FaCheck,
  FaTimes,
  FaRegCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBolt,
  FaCode,
  FaLock,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaWhatsapp
} from 'react-icons/fa';
import './Home.css';

const Home = ({ onOpenCallMe, onOpenEnquiry }) => {
  const navigate = useNavigate();

  // Home Services Tab Panel state
  const [activeHomeService, setActiveHomeService] = useState(0);

  // Outstanding Interactive Section Tabs state
  const [activeTab, setActiveTab] = useState('analytics');

  // FAQ Accordion open index state for Home page
  const [homeFaqOpen, setHomeFaqOpen] = useState(0);

  // Contact form state in Home page
  const [homeFormData, setHomeFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development & Design Services',
    message: ''
  });
  const [homeFormSuccess, setHomeFormSuccess] = useState(false);

  // Portfolio active filter
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  // Testimonial Slider State
  const [testimonialActiveIdx, setTestimonialActiveIdx] = useState(0);
  const testimonialTimerRef = useRef(null);

  // Counter Animation State & Ref
  const [countersStarted, setCountersStarted] = useState(false);
  const [counterVals, setCounterVals] = useState({ proj: 0, clients: 0, services: 0, awards: 0 });
  const counterSectionRef = useRef(null);

  // Review Rating Animation State & Ref
  const [reviewsStarted, setReviewsStarted] = useState(false);
  const [reviewVals, setReviewVals] = useState({ gScore: '0.0', fbScore: '0.0', jdScore: '0.0', gCount: 0, fbCount: 0, jdCount: 0 });
  const reviewSectionRef = useRef(null);

  // Tab content data (Embedded directly, no external data.js)
  const tabContents = {
    analytics: {
      title: 'Real-Time Analytics & BI',
      desc: 'WebMok Pvt Ltd and team perform in-depth analysis on your business real-time status. We architect data dashboards and conversion analytics that eliminate ad waste and maximize customer lifetime value.',
      points: [
        {
          title: 'Super Responsive',
          text: 'Enthusiastic senior engineering team ready to accelerate your business goals with cutting-edge views and rapid technical execution.'
        },
        {
          title: 'High Security',
          text: 'We guarantee 100% data security, SSL encryption, and strict protection for your proprietary brand content across all digital channels.'
        },
        {
          title: 'Optimal Choice',
          text: 'Services engineered by WebMok consistently achieve the highest industry benchmarks for consumer satisfaction and sustained ROI.'
        }
      ]
    },
    ppc: {
      title: 'High-Intent Pay-Per-Click (PPC)',
      desc: 'Supercharge your inbound pipeline with precision-engineered Google Search Ads, Performance Max, and remarketing funnels designed for maximum ROAS and minimized acquisition costs.',
      points: [
        {
          title: 'Targeted High-Intent Buyers',
          text: 'Capture prospects actively searching for your high-ticket offerings with exact keyword sculpting and negative match strategies.'
        },
        {
          title: 'A/B Tested High-Converting Copy',
          text: 'Compelling ad creatives, continuous conversion rate optimization, and dedicated frictionless landing page flows.'
        },
        {
          title: 'Transparent Budget Tracking',
          text: 'Real-time daily budget telemetry with verified cost-per-acquisition reporting and zero hidden markups.'
        }
      ]
    },
    online: {
      title: 'Omnichannel Online Marketing',
      desc: 'Comprehensive 360-degree digital roadmaps to position your brand as the definitive authority in your niche, outpace rivals, and establish perpetual lead funnels.',
      points: [
        {
          title: 'Data-Driven Positioning',
          text: 'Competitor gap analysis and custom brand messaging that directly speaks to high-value decision makers.'
        },
        {
          title: 'Unified Brand Cohesion',
          text: 'Synchronized visual presence across search engines, social platforms, email flows, and publisher networks.'
        },
        {
          title: 'Compounding Market Share',
          text: 'Continuous multi-channel visibility that builds long-term organic equity and sustainable revenue expansion.'
        }
      ]
    },
    email: {
      title: 'Email Marketing & Automation',
      desc: 'Turn cold prospects into repeat, high-paying clients through behavioral email automation, hyper-personalized retention sequences, and conversion-focused newsletters.',
      points: [
        {
          title: 'Smart Segmentation Triggers',
          text: 'Dynamic audience segmentation based on buyer lifecycle stage, interaction history, and transactional intent.'
        },
        {
          title: 'High Inbox Deliverability',
          text: 'DKIM, SPF, and DMARC technical setup ensuring your communications land straight in the primary inbox.'
        },
        {
          title: 'Automated Recovery Funnels',
          text: 'Recover lost transactions and nurture inquiries into closed contracts on complete autopilot.'
        }
      ]
    },
    social: {
      title: 'Viral Social Media Marketing',
      desc: 'Build a passionate, loyal community around your brand with thumb-stopping social creative campaigns across Instagram, LinkedIn, YouTube, and Facebook.',
      points: [
        {
          title: 'High-Engagement Motion Assets',
          text: 'Captivating reels, carousel posts, infographics, and interactive storytelling engineered for virality.'
        },
        {
          title: 'Brand Reputation & Sentiment',
          text: 'Proactive community management, brand voice consistency, and positive sentiment cultivation.'
        },
        {
          title: 'Influencer & UGC Amplification',
          text: 'Partner with industry voices to establish immediate social proof and generate organic word of mouth.'
        }
      ]
    },
    digital: {
      title: 'Full Digital Transformation',
      desc: 'Seamlessly blend modern React engineering, cloud microservices, high-ROI paid traffic, and organic SEO into a unified digital powerhouse that scales your enterprise.',
      points: [
        {
          title: 'Modern 2026 Tech Stack',
          text: 'Modern React architectures, ultrafast edge cloud deployments, headless CMS, and sub-second load times.'
        },
        {
          title: '360° Conversion Rate Optimization',
          text: 'Heatmap behavioral analysis, frictionless UX paths, and frictionless one-click lead capture flows.'
        },
        {
          title: 'Infinite Scalability',
          text: 'Cloud systems engineered to effortlessly handle hundreds of thousands of concurrent visitors without latency.'
        }
      ]
    }
  };

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'FaLaptopCode': return <FaLaptopCode />;
      case 'FaMobileAlt': return <FaMobileAlt />;
      case 'FaSearch': return <FaSearch />;
      case 'FaChartLine': return <FaChartLine />;
      case 'FaRocket': return <FaRocket />;
      case 'FaBullhorn': return <FaBullhorn />;
      case 'FaCogs': return <FaCogs />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      default: return <FaLaptopCode />;
    }
  };

  // Default Core services list
  const defaultCoreServices = [
    {
      id: 'web-designing-development-services-company',
      title: 'Web Design & Development',
      icon: <FaLaptopCode />,
      desc: 'Bespoke, blazing-fast, and responsive web applications built with modern frameworks to turn casual visitors into loyal paying customers.',
      tags: ['React.js', 'WordPress', 'Next.js', 'Custom UI/UX'],
      metric: '0.8s Avg Speed',
      subFeatures: ['Custom UI/UX Design', 'React & Next.js Apps', 'WordPress & CMS', 'Mobile-First Approach', 'Speed Optimization', 'Conversion-Focused Layouts']
    },
    {
      id: 'application-development-services',
      title: 'Mobile App Development',
      icon: <FaMobileAlt />,
      desc: 'Native and hybrid iOS & Android apps with frictionless interfaces, fluid gestures, real-time push notifications, and rock-solid backend APIs.',
      tags: ['Flutter', 'React Native', 'Android', 'iOS'],
      metric: '99.9% Crash Free',
      subFeatures: ['iOS & Android Apps', 'Flutter & React Native', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture', 'Backend API Integration']
    },
    {
      id: 'seo-services-company',
      title: 'Search Engine Optimization',
      icon: <FaSearch />,
      desc: 'Dominate Google rankings and drive high-intent organic visitors with data-backed technical SEO, high-authority link building, and content strategy.',
      tags: ['Technical SEO', 'Keyword Intent', 'High DA Links', 'Local Maps'],
      metric: '#1 Page Ranks',
      subFeatures: ['Technical SEO Audit', 'Keyword Research & Mapping', 'On-Page Optimization', 'High-DA Backlink Building', 'Local SEO & Google Maps', 'Monthly Ranking Reports']
    },
    {
      id: 'ppc-services-company',
      title: 'PPC & Performance Ads',
      icon: <FaChartLine />,
      desc: 'Generate immediate high-ticket leads with laser-targeted Google Search Ads, Display Campaigns, Meta Advertising, and conversion retargeting.',
      tags: ['Google Ads', 'Meta Ads', 'Remarketing', 'High ROAS'],
      metric: '3.4x Avg ROAS',
      subFeatures: ['Google Search Campaigns', 'Meta & Instagram Ads', 'Display Retargeting', 'Performance Max', 'Bid Strategy Optimization', 'ROAS Tracking & Reporting']
    },
    {
      id: 'e-commerce-development-services-company',
      title: 'E-Commerce Solutions',
      icon: <FaRocket />,
      desc: 'Scalable e-commerce stores engineered for seamless transactions, frictionless one-click checkouts, secure payment gateways, and inventory control.',
      tags: ['Shopify', 'WooCommerce', 'Custom Stores', 'Stripe/UPI'],
      metric: '+48% Checkout Lift',
      subFeatures: ['Shopify & WooCommerce', 'Custom Store Development', 'Payment Gateway Integration', 'Product Catalog Management', 'One-Click Checkout Flows', 'Inventory & Order Systems']
    },
    {
      id: 'social-media-marketing',
      title: 'Social & Brand Growth',
      icon: <FaBullhorn />,
      desc: 'Elevate your online presence with strategic content calendars, interactive video graphics, targeted Facebook & Instagram ads, and community trust.',
      tags: ['Instagram', 'LinkedIn', 'Facebook', 'Creative Video'],
      metric: '10x Engagement',
      subFeatures: ['Facebook & Instagram Ads', 'LinkedIn B2B Campaigns', 'Creative Reels & Graphics', 'Content Calendar Strategy', 'Community Management', 'Influencer Partnerships']
    }
  ];

  // Dynamic services state (managed via Admin Dashboard & MongoDB)
  const [coreServices, setCoreServices] = useState(defaultCoreServices);



  // Portfolio items
  const portfolioProjects = [
    {
      id: 'edutech-learning-platform',
      title: 'EduTech Interactive Platform',
      category: 'web',
      categoryName: 'Web Development',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80',
      client: 'Apex Global Academy',
      results: '+320% Enrollments',
      tag: 'Full-Stack React'
    },
    {
      id: 'fintech-crypto-wallet-app',
      title: 'PaySwift Mobile Finance App',
      category: 'app',
      categoryName: 'App Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&auto=format&fit=crop&q=80',
      client: 'PaySwift Fintech Ltd',
      results: '500K+ Active Installs',
      tag: 'React Native & iOS'
    },
    {
      id: 'luxury-fashion-ecommerce',
      title: 'LuxeCart E-Commerce Brand',
      category: 'ecommerce',
      categoryName: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80',
      client: 'Vogue Essentials',
      results: '₹1.8 Cr Monthly GMV',
      tag: 'Headless Commerce'
    },
    {
      id: 'b2b-healthcare-seo-campaign',
      title: 'MediCare Healthcare Lead Funnel',
      category: 'seo',
      categoryName: 'SEO & PPC',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop&q=80',
      client: 'MediCare Multispecialty',
      results: '1st Page for 480+ Keywords',
      tag: 'Organic Growth'
    },
    {
      id: 'real-estate-crm-portal',
      title: 'Skyline Real Estate Portal',
      category: 'web',
      categoryName: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&auto=format&fit=crop&q=80',
      client: 'Skyline Infrastructures',
      results: '4,200+ Verified Leads',
      tag: 'Next.js & Cloud CRM'
    },
    {
      id: 'fitness-tracker-mobile-app',
      title: 'FitPulse On-Demand Fitness App',
      category: 'app',
      categoryName: 'App Development',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=700&auto=format&fit=crop&q=80',
      client: 'PulseFit Technologies',
      results: '4.8★ App Store Rating',
      tag: 'Flutter & HealthKit'
    }
  ];

  const filteredPortfolio = portfolioFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === portfolioFilter);

  // Latest blogs
  const latestBlogs = [
    {
      id: 'future-of-web-development-2026',
      title: 'Top Web Development Trends in 2026: Why Modern Frameworks Matter',
      date: 'August 28, 2026',
      author: 'Web Mok Tech Desk',
      excerpt: 'Discover how server components, AI integrations, and responsive micro-interactions are setting new standards for business web development.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
      category: 'Web Tech',
      readTime: '5 min read'
    },
    {
      id: 'seo-ranking-factors-guide',
      title: 'Mastering Search Engine Optimization: How to Outrank Big Brands Organically',
      date: 'August 19, 2026',
      author: 'SEO Strategy Lead',
      excerpt: 'A practical roadmap to conquering Google search rankings using user search intent, core web vitals, and topical authority frameworks.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      category: 'SEO Insights',
      readTime: '7 min read'
    },
    {
      id: 'ppc-lead-generation-secrets',
      title: 'How We Reduced Cost Per Lead by 58% Using Smart Google & Meta Ads',
      date: 'August 10, 2026',
      author: 'Performance Marketing Desk',
      excerpt: 'Deep dive into audience segmentation, conversion rate optimization, and A/B tested landing pages that turn ad spend into high ROI.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
      category: 'PPC & Ads',
      readTime: '6 min read'
    },
    {
      id: 'mobile-app-growth-strategies',
      title: 'Mobile App Architecture: Choosing Between React Native and Flutter',
      date: 'July 30, 2026',
      author: 'Mobile Lead Architect',
      excerpt: 'Evaluating performance, development speed, and ecosystem maturity when building modern enterprise cross-platform mobile apps.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
      category: 'App Strategy',
      readTime: '4 min read'
    }
  ];

  // Row 1 Testimonials (Sliding Left to Right / Continuous Marquee)
 const testimonialsRow1 = [
  {
    name: 'Aman Mathur',
    role: 'CTO, FinEdge Payments',
    service: 'Custom React & Node Architecture',
    avatar: '/DeepakSir-1.png',
    quote: 'Web Mok overhauled our entire payment dashboard in React. Page load dropped from 4.2s to 0.7s, and user drop-off during onboarding decreased by 42%. Exceptional senior engineering team!'
  },
  {
    name: 'Pooja Malhotra',
    role: 'Co-Founder, LuxeCart India',
    service: 'Headless E-Commerce & UX',
    avatar: '/dell.png',
    quote: 'Their headless Shopify store transformed our luxury apparel brand. We handled 55,000 concurrent visitors during festival sales with 0 downtime and saw a 65% bump in mobile checkouts.'
  },
  {
    name: 'David Richardson',
    role: 'Managing Director, Solaria UK',
    service: 'Corporate Portal & Global SEO',
    avatar: '/simran1.png',
    quote: 'Web Mok delivered our multi-regional clean-energy portal ahead of schedule. We now rank in top 3 Google positions for high-intent queries across the UK and Europe. Remarkable ROI.'
  },
  {
    name: 'Rohan Mehra',
    role: 'Founder, SkillVibe EdTech',
    service: 'Live Video Learning App',
    avatar: '/Rahish Sir.png',
    quote: 'Built our interactive video education platform with WebRTC and React Native. Over 120,000 students stream lessons seamlessly every single day without buffer lag. Top-class developers!'
  },
  {
    name: 'Ananya Singhania',
    role: 'Marketing Head, Zivo Healthcare',
    service: 'Performance Ads & Local SEO',
    avatar: '/DeepakSir-1.png',
    quote: 'Web Mok scaled our patient bookings by 320% while cutting our Google Ads cost-per-acquisition in half. Their weekly analytics reports and sprint transparency are unmatched.'
  },
  {
    name: 'Dr. Rajesh Iyer',
    role: 'Director, MediCare Multi-Speciality',
    service: 'Healthcare Web Portal',
    avatar: '/DeepakSir-1.png',
    quote: 'HIPAA-compliant, sub-second patient appointment booking engine. Web Mok delivered exactly what they committed with signed NDAs, clean code, and zero post-launch bugs.'
  }
];

  // Row 2 Testimonials (Sliding Right to Left / Opposite Direction)
  const testimonialsRow2 = [
  {
    name: 'Siddharth Nair',
    role: 'VP Operations, QuickLogistics',
    service: 'Fleet Telematics Web App',
    avatar: '/DeepakSir-1.png',
    quote: 'Web Mok engineered our real-time GPS fleet tracking system. The live mapping coordinates and analytics update seamlessly with zero browser lag. Flawless frontend performance!'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Digital, Baltic Cloud',
    service: 'B2B SaaS Portal & Branding',
    avatar: '/tcs.png',
    quote: 'The team revamped our B2B SaaS web interface with crisp 2026 aesthetics and lightning-fast micro-interactions. Our product demo requests jumped 2.8x within 30 days of launch.'
  },
  {
    name: 'Kavita Sharma',
    role: 'Director, PureAyur Organics',
    service: 'E-Commerce & Meta Ad Funnels',
    avatar: '/hcl.png',
    quote: 'From custom Shopify development to high-converting Instagram reels, Web Mok manages our entire digital revenue pipeline. Our monthly GMV scaled past ₹50 Lakhs effortlessly.'
  },
  {
    name: 'Vikramaditya Rao',
    role: 'Founder, UrbanEstate Realty',
    service: 'Real Estate CRM & Portal',
    avatar: '/red.png',
    quote: 'Dynamic property filters, 360-degree tour embeds, and an automated WhatsApp CRM lead capture system that produces 40+ high-ticket buyer inquiries daily.'
  },
  {
    name: 'Jessica Chen',
    role: 'Product Lead, NovaSphere USA',
    service: 'Cross-Platform Mobile App',
    avatar: '/DeepakSir-1.png',
    quote: 'The cross-platform app Web Mok built for our IoT hardware achieved a 4.9 rating on both App Store and Google Play. Flawless Bluetooth syncing and high battery efficiency.'
  },
  {
    name: 'Mohit Agarwal',
    role: 'CEO, Agarwal Wealth Advisory',
    service: 'Corporate Web Redesign & PPC',
    avatar: '/DeepakSir-1.png',
    quote: 'Web Mok transformed our legacy static site into a high-converting digital engine. Honest timelines, daily sprint updates, and top-tier React engineering standards throughout.'
  }
];

  // Home Page Top FAQs
  const homeFaqs = [
    {
      q: 'What digital engineering and marketing services does Web Mok provide?',
      a: 'Web Mok is a premier full-service technology agency. We provide bespoke Web Application Development (React.js, Next.js, Node), Native and Cross-Platform Mobile Apps (Flutter, React Native), Headless E-Commerce Solutions (Shopify, WooCommerce, Custom Stores), Search Engine Optimization (SEO), High-ROAS PPC Ad Campaigns (Google Ads, Meta), and UI/UX Digital Transformation.'
    },
    {
      q: 'What is the standard turnaround time for a website or mobile application?',
      a: 'Corporate websites and high-converting landing pages are typically deployed within 1 to 2 weeks. Comprehensive custom web applications, native mobile apps, and robust e-commerce architectures take 4 to 8 weeks, organized into transparent 1-week milestones with live staging demos.'
    },
    {
      q: 'Will my website or mobile app be blazing fast and Google Core Web Vitals compliant?',
      a: 'Yes, 100%. Every project is built from scratch with clean, semantic, modern code. We optimize assets, employ code splitting, implement modern caching, and achieve 90+ PageSpeed scores and sub-second load times across mobile, tablet, and desktop devices.'
    },
    {
      q: 'Do I retain 100% intellectual property (IP) and source code ownership?',
      a: 'Yes, unconditionally. Upon milestone completion, 100% full legal ownership of the source code, Git repositories, graphics, and database architecture is transferred to you. We execute strict Non-Disclosure Agreements (NDAs) prior to commencing any work.'
    },
    {
      q: 'Can we hire dedicated developers or digital marketers on a monthly basis?',
      a: 'Absolutely! We offer flexible dedicated team models (Full-Time or Part-Time Dedicated Squads). You can hire senior React engineers, mobile developers, or performance marketing strategists working exclusively on your roadmap with daily standup communication via Slack or WhatsApp.'
    },
    {
      q: 'How does the "Call Me in 28 Seconds" callback guarantee work?',
      a: 'Clicking the "Call Me in 28 Sec" button and submitting your phone number triggers our automated telephony bridge. Our senior technology consultant is connected to your phone in 28 seconds during business hours for immediate, personalized project consultation.'
    }
  ];

  const handleHomeFormSubmit = async (e) => {
    e.preventDefault();
    if (!homeFormData.name || !homeFormData.phone || !homeFormData.email) {
      alert('Please fill out your name, email, and phone number.');
      return;
    }
    try {
      await fetch('http://localhost:5005/api/inquiries/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: homeFormData.name,
          phone: homeFormData.phone,
          email: homeFormData.email,
          service: homeFormData.service,
          source: 'Home Instant Brief Form',
          notes: homeFormData.message || 'Brief submitted from Home Page Consultation box.'
        })
      });
    } catch (err) {
      console.warn('Backend server offline, lead queued locally:', err.message);
    }
    setHomeFormSuccess(true);
  };

  // Combined all testimonials for the new split-view slider
  const allTestimonials = [
    ...testimonialsRow1,
    ...testimonialsRow2
  ];

  // Prestigious client logos for the right-side logo grid
  const clientLogos = [
    { name: 'Condé Nast', bg: '#fdf0f0', logo: '/p2-fVN6Puc1.webp' },
    { name: 'Disney', bg: '#f0f4ff', logo: '/bank.png' },
    { name: 'ICICI Bank', bg: '#fff4f0', logo: '/dell.png' },
    { name: 'HP', bg: '#f0f8ff', logo: '/hcl.png' },
    { name: 'Gulf Oil', bg: '#fffbf0', logo: '/indigo.png' },
    { name: 'JSW', bg: '#f0f9ff', logo: '/multi.png' },
    { name: 'Apple Energy', bg: '#f8fff0', logo: '/red.png' },
    { name: 'Midtronics', bg: '#f0f0ff', logo: '/tcs.png' },
    { name: 'isobar', bg: '#fff0f8', logo: '/zomato.png' },
    { name: 'Instant Mudra', bg: '#f0fff4', logo: '/bank.png' },
    { name: 'ACL Digital', bg: '#f8f0ff', logo: '/dell.png' },
    { name: 'FindUrClass', bg: '#fff8f0', logo: '/hcl.png' },
    { name: 'SELEC', bg: '#f0f0ff', logo: '/indigo.png' },
    { name: 'Pixy', bg: '#fff0f0', logo: '/multi.png' },
    { name: 'ROOTS', bg: '#f0fff0', logo: '/red.png' },
    { name: 'DBT Infotech', bg: '#f0f8ff', logo: '/multi.png' },
    { name: 'Global Marine', bg: '#f0ffff', logo: '/tcs.png' },
    { name: 'iProspect', bg: '#f8f8ff', logo: '/zomato.png' },
    { name: 'Kamal Fincap', bg: '#fff0f8', logo: '/bank.png' },
    { name: 'Udya', bg: '#f0f4ff', logo: '/dell.png' },
  ];

  // Testimonial autoplay
  useEffect(() => {
    testimonialTimerRef.current = setInterval(() => {
      setTestimonialActiveIdx((prev) => (prev + 1) % allTestimonials.length);
    }, 4500);
    return () => clearInterval(testimonialTimerRef.current);
  }, [allTestimonials.length]);

  const goToTestimonial = (idx) => {
    clearInterval(testimonialTimerRef.current);
    setTestimonialActiveIdx(idx);
    testimonialTimerRef.current = setInterval(() => {
      setTestimonialActiveIdx((prev) => (prev + 1) % allTestimonials.length);
    }, 4500);
  };

  const prevTestimonial = () => goToTestimonial((testimonialActiveIdx - 1 + allTestimonials.length) % allTestimonials.length);
  const nextTestimonial = () => goToTestimonial((testimonialActiveIdx + 1) % allTestimonials.length);

  // Counter animation on scroll into view
  useEffect(() => {
    const targets = { proj: 950, clients: 850, services: 550, awards: 750 };
    const duration = 4000;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          const start = performance.now();
          const tick = (now) => {
            const elapsed = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - elapsed, 3); // Smooth cubic ease-out
            setCounterVals({
              proj: Math.round(targets.proj * ease),
              clients: Math.round(targets.clients * ease),
              services: Math.round(targets.services * ease),
              awards: Math.round(targets.awards * ease)
            });
            if (elapsed < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );
    if (counterSectionRef.current) observer.observe(counterSectionRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  // Review score animation on scroll into view
  useEffect(() => {
    const targets = { gScore: 4.9, fbScore: 4.8, jdScore: 4.9, gCount: 1925, fbCount: 106, jdCount: 78 };
    const duration = 6000;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reviewsStarted) {
          setReviewsStarted(true);
          const start = performance.now();
          const tick = (now) => {
            const elapsed = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - elapsed, 3);
            setReviewVals({
              gScore: (targets.gScore * ease).toFixed(1),
              fbScore: (targets.fbScore * ease).toFixed(1),
              jdScore: (targets.jdScore * ease).toFixed(1),
              gCount: Math.round(targets.gCount * ease),
              fbCount: Math.round(targets.fbCount * ease),
              jdCount: Math.round(targets.jdCount * ease)
            });
            if (elapsed < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );
    if (reviewSectionRef.current) observer.observe(reviewSectionRef.current);
    return () => observer.disconnect();
  }, [reviewsStarted]);

  // Dynamic Outstanding Tabs State from MongoDB API
  const [outstandingData, setOutstandingData] = useState(null);

  // Dynamic Hero Video State from MongoDB API
  const [heroVideoUrl, setHeroVideoUrl] = useState('/Home-Hero.mp4');

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const res = await fetch('http://localhost:5005/api/hero-video');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && json.data.videoUrl) {
            setHeroVideoUrl(json.data.videoUrl);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback hero video:', err.message);
      }
    };
    fetchHeroVideo();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('http://localhost:5005/api/services');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setCoreServices(
              json.data.map((item, idx) => ({
                id: item.slug || `service-${idx}`,
                title: item.title,
                icon: item.icon ? getServiceIcon(item.icon) : <FaLaptopCode />,
                desc: item.desc,
                tags: Array.isArray(item.tags) && item.tags.length > 0 ? item.tags : ['Web Tech', 'Enterprise'],
                metric: item.metric || '0.8s Avg Speed',
                subFeatures: Array.isArray(item.subFeatures) && item.subFeatures.length > 0
                  ? item.subFeatures
                  : ['Custom Strategy', 'Dedicated Support', 'Fast Delivery']
              }))
            );
          }
        }
      } catch (err) {
        console.warn('Backend offline, using static core services fallback:', err.message);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchOutstanding = async () => {
      try {
        const res = await fetch('http://localhost:5005/api/outstanding');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            const map = {};
            json.data.forEach((item) => {
              map[item.tabKey] = item;
            });
            setOutstandingData(map);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using static outstanding fallback:', err.message);
      }
    };
    fetchOutstanding();
  }, []);

  const getMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    return `http://localhost:5005${url.startsWith('/') ? '' : '/'}${url}`;
  };

  return (
    <div className="wm-home-root">
      {/* 1. HERO SECTION - NEW SIMPLE PREMIUM 2026 DESIGN */}
      <section className="wm-hero-section wm-hero-video-only">
        <video 
          key={heroVideoUrl}
          className="wm-hero-main-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={getMediaUrl(heroVideoUrl)} type="video/mp4" />
        </video>
      </section>

      {/* 1.5. ENTERPRISE INDUSTRIES STRIP (Inspired by Saminus & Dibull) */}
      <section className="wm-industries-strip">
        <div className="wm-industries-inner">
          <span className="wm-ind-badge">Enterprise Proven:</span>
          <div className="wm-ind-list">
            <span className="wm-ind-item"><FaBolt /> E-Commerce & Retail</span>
            <span className="wm-ind-dot">•</span>
            <span className="wm-ind-item"><FaShieldAlt /> FinTech & Banking</span>
            <span className="wm-ind-dot">•</span>
            <span className="wm-ind-item"><FaLaptopCode /> SaaS & Cloud Apps</span>
            <span className="wm-ind-dot">•</span>
            <span className="wm-ind-item"><FaRocket /> EdTech & E-Learning</span>
            <span className="wm-ind-dot">•</span>
            <span className="wm-ind-item"><FaUsers /> Healthcare & Diagnostics</span>
            <span className="wm-ind-dot">•</span>
            <span className="wm-ind-item"><FaAward /> Real Estate & PropTech</span>
          </div>
        </div>
      </section>

      {/* 2. OUTSTANDING REVIEWS — PREMIUM 1-ROW CARDS */}
      <section className="wm-reviews-section" ref={reviewSectionRef}>
        <div className="wm-reviews-container">
          <h2 className="wm-reviews-main-title">Outstanding Reviews</h2>

          <div className="wm-reviews-row">
            {/* Google Card */}
            <div className="wm-rcard wm-rcard-google">
              <div className="wm-rcard-glow"></div>
              <div className="wm-rcard-top">
                <div className="wm-rcard-brand-icon wm-g-icon">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                </div>
                <span className="wm-rcard-badge">REVIEWS</span>
              </div>
              <div className="wm-rcard-score-row">
                <span className="wm-rcard-score">{reviewVals.gScore}</span>
                <div className="wm-rcard-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <p className="wm-rcard-count">{reviewVals.gCount.toLocaleString()}+ Verified Reviews</p>
              <div className="wm-rcard-bar">
                <div className="wm-rcard-bar-fill" style={{ width: reviewsStarted ? '98%' : '0%' }}></div>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="wm-rcard wm-rcard-facebook">
              <div className="wm-rcard-glow"></div>
              <div className="wm-rcard-top">
                <div className="wm-rcard-brand-icon wm-fb-icon">facebook</div>
                <span className="wm-rcard-badge wm-badge-fb">RATING</span>
              </div>
              <div className="wm-rcard-score-row">
                <span className="wm-rcard-score">{reviewVals.fbScore}</span>
                <div className="wm-rcard-stars wm-stars-fb">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <p className="wm-rcard-count">{reviewVals.fbCount}+ Recommendation Votes</p>
              <div className="wm-rcard-bar">
                <div className="wm-rcard-bar-fill wm-bar-fb" style={{ width: reviewsStarted ? '96%' : '0%' }}></div>
              </div>
            </div>

            {/* Justdial Card */}
            <div className="wm-rcard wm-rcard-justdial">
              <div className="wm-rcard-glow"></div>
              <div className="wm-rcard-top">
                <div className="wm-rcard-brand-icon wm-jd-icon">
                  Just<span className="wm-jd-dial">dial</span>
                </div>
                <span className="wm-rcard-badge wm-badge-jd">VERIFIED</span>
              </div>
              <div className="wm-rcard-score-row">
                <span className="wm-rcard-score">{reviewVals.jdScore}</span>
                <div className="wm-rcard-stars wm-stars-jd">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <p className="wm-rcard-count">{reviewVals.jdCount}+ Verified User Ratings</p>
              <div className="wm-rcard-bar">
                <div className="wm-rcard-bar-fill wm-bar-jd" style={{ width: reviewsStarted ? '98%' : '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE — NEW PREMIUM ANIMATED DESIGN */}
      <section className="wm-services-section">
        <div className="wm-services-bg-mesh"></div>
        <div className="wm-section-container">
          <div className="wm-section-header wm-services-hdr">
            <span className="wm-subtitle wm-subtitle-light">What We Offer</span>
            <h2 className="wm-title wm-title-light">Engineered For Exponential Digital Growth</h2>
            <div className="wm-title-bar-center wm-bar-cyan"></div>
          </div>

          {/* TAB PANEL LAYOUT */}
          <div className="wm-hsvc-layout">
            {/* LEFT: Numbered Service Tabs */}
            <div className="wm-hsvc-left">
              <div className="wm-hsvc-scroll-wrap">
                {coreServices.map((service, idx) => (
                  <button
                    key={service.id}
                    className={`wm-hsvc-tab${activeHomeService === idx ? ' wm-hsvc-tab--active' : ''}`}
                    onClick={() => setActiveHomeService(idx)}
                  >
                    <span className="wm-hsvc-tab-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="wm-hsvc-tab-icon">{service.icon}</span>
                    <span className="wm-hsvc-tab-label">{service.title}</span>
                    <FaArrowRight className="wm-hsvc-tab-arrow" />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Dynamic Content Panel */}
            <div className="wm-hsvc-right">
              {(() => {
                const currentSvc = coreServices[activeHomeService] || coreServices[0];
                if (!currentSvc) return null;
                return (
                  <div className="wm-hsvc-panel" key={activeHomeService}>
                    {/* Panel Header */}
                    <div className="wm-hsvc-panel-header">
                      <div className="wm-hsvc-panel-iconbox">
                        {currentSvc.icon}
                      </div>
                      <div>
                        <span className="wm-hsvc-panel-num">{String((activeHomeService < coreServices.length ? activeHomeService : 0) + 1).padStart(2, '0')}</span>
                        <h3 className="wm-hsvc-panel-title">{currentSvc.title}</h3>
                      </div>
                      <span className="wm-hsvc-panel-metric">{currentSvc.metric}</span>
                    </div>

                    {/* Description */}
                    <p className="wm-hsvc-panel-desc">{currentSvc.desc}</p>

                    {/* Sub-Features Grid */}
                    <div className="wm-hsvc-features-grid">
                      {(currentSvc.subFeatures || []).map((feat, fi) => (
                        <div key={fi} className="wm-hsvc-feature-item">
                          <FaArrowRight className="wm-hsvc-feat-arrow" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="wm-hsvc-tags-row">
                      {(currentSvc.tags || []).map((tag, ti) => (
                        <span key={ti} className="wm-hsvc-tag">{tag}</span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="wm-hsvc-divider"></div>

                    {/* Action Buttons */}
                    <div className="wm-hsvc-action-btns">
                      <button className="wm-hsvc-act-btn wm-hsvc-act-call" onClick={onOpenCallMe}>
                        <FaPhoneAlt /> Call Now
                      </button>
                      <a
                        className="wm-hsvc-act-btn wm-hsvc-act-wa"
                        href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                      <button className="wm-hsvc-act-btn wm-hsvc-act-enq" onClick={onOpenEnquiry}>
                        Enquiry Now
                      </button>
                      <Link to={`/services/${currentSvc.id}`} className="wm-hsvc-act-btn wm-hsvc-act-explore">
                        Explore Service <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>



    

      {/* 5. WORK FLOW SECTION */}
      <section className="wm-workflow-section">
        <div className="wm-section-container">
          <div className="wm-section-header">
            <span className="wm-subtitle">How We Work</span>
            <h2 className="wm-title">Our 5-Step Proven Execution Blueprint</h2>
            <div className="wm-title-bar-center"></div>
          </div>

          <div className="wm-steps-grid">
            <div className="wm-step-card">
              <div className="wm-step-header-row">
                <div className="wm-step-num">01</div>
                <div className="wm-step-icon"><FaRegLightbulb /></div>
              </div>
              <h4>Discovery & Analysis</h4>
            </div>

            <div className="wm-step-card">
              <div className="wm-step-header-row">
                <div className="wm-step-num">02</div>
                <div className="wm-step-icon"><FaProjectDiagram /></div>
              </div>
              <h4>Strategy & Wireframing</h4>
            </div>

            <div className="wm-step-card">
              <div className="wm-step-header-row">
                <div className="wm-step-num">03</div>
                <div className="wm-step-icon"><FaLaptopCode /></div>
              </div>
              <h4>Design & Development</h4>
            </div>

            <div className="wm-step-card">
              <div className="wm-step-header-row">
                <div className="wm-step-num">04</div>
                <div className="wm-step-icon"><FaShieldAlt /></div>
              </div>
              <h4>Testing & QA Audits</h4>
            </div>

            <div className="wm-step-card">
              <div className="wm-step-header-row">
                <div className="wm-step-num">05</div>
                <div className="wm-step-icon"><FaRocket /></div>
              </div>
              <h4>Launch & Scale</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUTSTANDING INTERACTIVE TABBED SECTION (Matching Screenshot 5) */}
      <section className="wm-outstanding-section">
        <div className="wm-section-container">
          <div className="wm-outstanding-header">
            <h2 className="wm-outstanding-title">Outstanding</h2>
            <div className="wm-outstanding-bar"></div>
          </div>

          {/* Tab Navigation Buttons (Step-Card Style Boxes) */}
          <div className="wm-tab-buttons-container">
            <button
              className={`wm-tab-card-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <div className="wm-tab-card-top">
                <span className="wm-tab-card-num">01</span>
                <div className="wm-tab-card-icon"><FaChartLine /></div>
              </div>
              <span className="wm-tab-card-title">{(outstandingData && outstandingData['analytics']?.tabTitle) || 'Real-Time Analytics'}</span>
            </button>

            <button
              className={`wm-tab-card-btn ${activeTab === 'ppc' ? 'active' : ''}`}
              onClick={() => setActiveTab('ppc')}
            >
              <div className="wm-tab-card-top">
                <span className="wm-tab-card-num">02</span>
                <div className="wm-tab-card-icon"><FaBullhorn /></div>
              </div>
              <span className="wm-tab-card-title">{(outstandingData && outstandingData['ppc']?.tabTitle) || 'Pay-Per-Click'}</span>
            </button>

            <button
              className={`wm-tab-card-btn ${activeTab === 'online' ? 'active' : ''}`}
              onClick={() => setActiveTab('online')}
            >
              <div className="wm-tab-card-top">
                <span className="wm-tab-card-num">03</span>
                <div className="wm-tab-card-icon"><FaLaptopCode /></div>
              </div>
              <span className="wm-tab-card-title">{(outstandingData && outstandingData['online']?.tabTitle) || 'Online Marketing'}</span>
            </button>

            <button
              className={`wm-tab-card-btn ${activeTab === 'email' ? 'active' : ''}`}
              onClick={() => setActiveTab('email')}
            >
              <div className="wm-tab-card-top">
                <span className="wm-tab-card-num">04</span>
                <div className="wm-tab-card-icon"><FaEnvelope /></div>
              </div>
              <span className="wm-tab-card-title">{(outstandingData && outstandingData['email']?.tabTitle) || 'Email Marketing'}</span>
            </button>

            <button
              className={`wm-tab-card-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              <div className="wm-tab-card-top">
                <span className="wm-tab-card-num">05</span>
                <div className="wm-tab-card-icon"><FaUsers /></div>
              </div>
              <span className="wm-tab-card-title">{(outstandingData && outstandingData['social']?.tabTitle) || 'Social Marketing'}</span>
            </button>

            <button
              className={`wm-tab-card-btn ${activeTab === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveTab('digital')}
            >
              <div className="wm-tab-card-top">
                <span className="wm-tab-card-num">06</span>
                <div className="wm-tab-card-icon"><FaRocket /></div>
              </div>
              <span className="wm-tab-card-title">{(outstandingData && outstandingData['digital']?.tabTitle) || 'Digital Marketing'}</span>
            </button>
          </div>

          {/* Dynamic Tab Content Box */}
          {(() => {
            const currentTabContent = (outstandingData && outstandingData[activeTab]) ? {
              title: outstandingData[activeTab].heading || tabContents[activeTab].title,
              desc: outstandingData[activeTab].description || tabContents[activeTab].desc,
              points: (outstandingData[activeTab].points && outstandingData[activeTab].points.length > 0)
                ? outstandingData[activeTab].points
                : tabContents[activeTab].points,
              mediaType: outstandingData[activeTab].mediaType || 'graph',
              mediaUrl: outstandingData[activeTab].mediaUrl || '',
              badgeText: outstandingData[activeTab].mediaBadgeText || 'Active Growth Module'
            } : {
              title: tabContents[activeTab].title,
              desc: tabContents[activeTab].desc,
              points: tabContents[activeTab].points,
              mediaType: 'graph',
              mediaUrl: '',
              badgeText: 'Active Growth Module'
            };

            return (
              <div className="wm-tab-content-wrapper">
                <div className="wm-tab-left-col">
                  <h3 className="wm-tab-main-heading">{currentTabContent.title}</h3>
                  <p className="wm-tab-main-desc">{currentTabContent.desc}</p>

                  <div className="wm-tab-points-list">
                    {currentTabContent.points.map((point, index) => (
                      <div key={index} className="wm-tab-point-item">
                        <div className="wm-tab-check-circle">
                          <FaCheck />
                        </div>
                        <div className="wm-tab-point-details">
                          <h4 className="wm-tab-point-title">{point.title}</h4>
                          <p className="wm-tab-point-text">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="wm-tab-right-col">
                  <div className="wm-tab-illustration-container">
                    <div className="wm-tab-illustration-badge">
                      <span className="wm-pulsing-dot"></span> {currentTabContent.badgeText}
                    </div>

                    {/* Media Frame: Custom Image, Video, or Mock Graph */}
                    {currentTabContent.mediaType === 'image' && currentTabContent.mediaUrl ? (
                      <div className="wm-tab-media-frame">
                        <img
                          src={getMediaUrl(currentTabContent.mediaUrl)}
                          alt={currentTabContent.title}
                          className="wm-tab-uploaded-img"
                        />
                      </div>
                    ) : currentTabContent.mediaType === 'video' && currentTabContent.mediaUrl ? (
                      <div className="wm-tab-media-frame">
                        <video
                          src={getMediaUrl(currentTabContent.mediaUrl)}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          className="wm-tab-uploaded-video"
                        />
                      </div>
                    ) : (
                      <div className="wm-tab-vector-art">
                        <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="wm-tab-svg">
                          <rect x="20" y="20" width="460" height="340" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
                          <rect x="40" y="40" width="420" height="40" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                          <circle cx="60" cy="60" r="6" fill="#ff5e3a" />
                          <circle cx="80" cy="60" r="6" fill="#f59e0b" />
                          <circle cx="100" cy="60" r="6" fill="#10b981" />
                          <rect x="130" y="52" width="180" height="16" rx="4" fill="#f1f5f9"/>

                          {/* Charts & Cards */}
                          <rect x="40" y="100" width="260" height="150" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                          <path d="M60 210 L100 170 L140 190 L180 130 L220 150 L270 120" stroke="#0b4f8a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="270" cy="120" r="6" fill="#00a8cc" />

                          <rect x="320" y="100" width="140" height="150" rx="12" fill="#0b4f8a" />
                          <circle cx="390" cy="150" r="35" stroke="#ffffff" strokeWidth="8" strokeDasharray="140 60" />
                          <text x="390" y="155" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">92%</text>
                          <text x="390" y="220" textAnchor="middle" fill="#ffffff" fontSize="12">Conversion Lift</text>

                          {/* Bottom Stat bars */}
                          <rect x="40" y="270" width="420" height="70" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
                          <rect x="60" y="295" width="100" height="18" rx="4" fill="#ff5e3a" opacity="0.85"/>
                          <rect x="180" y="295" width="130" height="18" rx="4" fill="#00a8cc" opacity="0.85"/>
                          <rect x="330" y="295" width="110" height="18" rx="4" fill="#0d2f57" opacity="0.85"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 4 Counter Cards with animated counting */}
          <div className="wm-counter-cards-grid" ref={counterSectionRef}>
            <div className="wm-counter-card">
              <div className="wm-counter-icon-box wm-cicon-coral">
                <FaProjectDiagram />
              </div>
              <div className="wm-counter-data">
                <span className="wm-counter-val">
                  {counterVals.proj}<span className="wm-counter-plus">+</span>
                </span>
                <span className="wm-counter-label">Completed Projects</span>
              </div>
            </div>

            <div className="wm-counter-card">
              <div className="wm-counter-icon-box wm-cicon-orange">
                <FaSmile />
              </div>
              <div className="wm-counter-data">
                <span className="wm-counter-val">
                  {counterVals.clients}<span className="wm-counter-plus">+</span>
                </span>
                <span className="wm-counter-label">Happy Clients</span>
              </div>
            </div>

            <div className="wm-counter-card">
              <div className="wm-counter-icon-box wm-cicon-rose">
                <FaBullhorn />
              </div>
              <div className="wm-counter-data">
                <span className="wm-counter-val">
                  {counterVals.services}<span className="wm-counter-plus">+</span>
                </span>
                <span className="wm-counter-label">Multi Services</span>
              </div>
            </div>

            <div className="wm-counter-card">
              <div className="wm-counter-icon-box wm-cicon-gold">
                <FaAward />
              </div>
              <div className="wm-counter-data">
                <span className="wm-counter-val">
                  {counterVals.awards}<span className="wm-counter-plus">+</span>
                </span>
                <span className="wm-counter-label">Winning Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* 7.6. SPLIT TESTIMONIAL + CLIENT LOGOS SECTION */}
      <section className="wm-split-testi-section">
        <div className="wm-split-testi-inner">

          {/* LEFT PANEL — Testimonial Slider */}
          <div className="wm-split-left-panel">
            <div className="wm-split-testi-header">
              <span className="wm-subtitle" style={{color:'#00a8cc'}}>Client Reviews</span>
              <h2 className="wm-split-testi-title">What Clients Say</h2>
            </div>

            <div className="wm-split-slider-area">
              {/* Decorative person photo collage */}
              <div className="wm-split-photo-collage">
                <div className="wm-split-photo-main">
                  <img
                    src="/public/Rahish Sir.png"
                    alt="Client"
                  />
                </div>
                <div className="wm-split-photo-bubble wm-bubble-top">
                  <img
                    src={allTestimonials[(testimonialActiveIdx + 1) % allTestimonials.length].avatar}
                    alt="client"
                  />
                </div>
                <div className="wm-split-photo-bubble wm-bubble-bottom">
                  <img
                    src={allTestimonials[(testimonialActiveIdx + 2) % allTestimonials.length].avatar}
                    alt="client"
                  />
                </div>
                <div className="wm-split-quote-badge">
                  <FaQuoteLeft />
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="wm-split-testi-card">
                <div className="wm-split-quote-icon"><FaQuoteLeft /></div>
                <p className="wm-split-quote-text">
                  "{allTestimonials[testimonialActiveIdx].quote}"
                </p>
                <div className="wm-split-author-row">
                  <img
                    src={allTestimonials[testimonialActiveIdx].avatar}
                    alt={allTestimonials[testimonialActiveIdx].name}
                    className="wm-split-author-avatar"
                  />
                  <div className="wm-split-author-info">
                    <h4 className="wm-split-author-name">{allTestimonials[testimonialActiveIdx].name}</h4>
                    <span className="wm-split-author-role">{allTestimonials[testimonialActiveIdx].role}</span>
                  </div>
                  <div className="wm-split-stars">
                    {[...Array(5)].map((_, si) => <FaStar key={si} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="wm-split-dots">
              <button className="wm-split-arrow" onClick={prevTestimonial} aria-label="Previous">
                <FaChevronLeft />
              </button>
              {allTestimonials.map((_, i) => (
                <button
                  key={i}
                  className={`wm-split-dot${i === testimonialActiveIdx ? ' active' : ''}`}
                  onClick={() => goToTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
              <button className="wm-split-arrow" onClick={nextTestimonial} aria-label="Next">
                <FaChevronDown style={{transform:'rotate(-90deg)'}} />
              </button>
            </div>
          </div>

          {/* RIGHT PANEL — Prestigious Client Logos */}
          <div className="wm-split-right-panel">
            <div className="wm-split-logos-header">
              <span className="wm-split-logos-label">OUR PRESTIGIOUS CLIENTS</span>
            </div>
            {/* Vertical auto-scroll logo grid — two marquee strips side by side */}
            <div className="wm-split-logos-grid-wrapper">
              {/* Column A — scrolls up */}
              <div className="wm-split-logos-col">
                <div className="wm-split-logos-track wm-logos-track-up">
                  {[...clientLogos.slice(0, 10), ...clientLogos.slice(0, 10)].map((cl, idx) => (
                    <div key={`colA-${idx}`} className="wm-split-logo-cell" style={{background: cl.bg}}>
                      <img src={cl.logo} alt={cl.name} />
                      <span className="wm-split-logo-name">{cl.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Column B — scrolls down */}
              <div className="wm-split-logos-col">
                <div className="wm-split-logos-track wm-logos-track-down">
                  {[...clientLogos.slice(10), ...clientLogos.slice(0, 5), ...clientLogos.slice(10), ...clientLogos.slice(0, 5)].map((cl, idx) => (
                    <div key={`colB-${idx}`} className="wm-split-logo-cell" style={{background: cl.bg}}>
                      <img src={cl.logo} alt={cl.name} />
                      <span className="wm-split-logo-name">{cl.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Column C — scrolls up */}
              <div className="wm-split-logos-col">
                <div className="wm-split-logos-track wm-logos-track-up">
                  {[...clientLogos.slice(5, 15), ...clientLogos.slice(5, 15)].map((cl, idx) => (
                    <div key={`colC-${idx}`} className="wm-split-logo-cell" style={{background: cl.bg}}>
                      <img src={cl.logo} alt={cl.name} />
                      <span className="wm-split-logo-name">{cl.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Column D — scrolls down */}
              <div className="wm-split-logos-col">
                <div className="wm-split-logos-track wm-logos-track-down">
                  {[...clientLogos.slice(0, 8), ...clientLogos.slice(12), ...clientLogos.slice(0, 8), ...clientLogos.slice(12)].map((cl, idx) => (
                    <div key={`colD-${idx}`} className="wm-split-logo-cell" style={{background: cl.bg}}>
                      <img src={cl.logo} alt={cl.name} />
                      <span className="wm-split-logo-name">{cl.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Column E — scrolls up */}
              <div className="wm-split-logos-col">
                <div className="wm-split-logos-track wm-logos-track-up">
                  {[...clientLogos.slice(3, 13), ...clientLogos.slice(3, 13)].map((cl, idx) => (
                    <div key={`colE-${idx}`} className="wm-split-logo-cell" style={{background: cl.bg}}>
                      <img src={cl.logo} alt={cl.name} />
                      <span className="wm-split-logo-name">{cl.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

 {/* 7. PORTFOLIO SHOWCASE - ENTIRE CARD CLICKABLE! */}
      <section className="wm-portfolio-section">
        <div className="wm-section-container">
          <div className="wm-section-header">
            <span className="wm-subtitle">Featured Work</span>
            <h2 className="wm-title">Our Recent Success Stories</h2>
            <div className="wm-title-bar-center"></div>
          </div>

          {/* Filter Pills */}
          <div className="wm-port-filters">
            <button
              className={`wm-port-filter-btn ${portfolioFilter === 'all' ? 'active' : ''}`}
              onClick={() => setPortfolioFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`wm-port-filter-btn ${portfolioFilter === 'web' ? 'active' : ''}`}
              onClick={() => setPortfolioFilter('web')}
            >
              Web Development
            </button>
            <button
              className={`wm-port-filter-btn ${portfolioFilter === 'app' ? 'active' : ''}`}
              onClick={() => setPortfolioFilter('app')}
            >
              Mobile Apps
            </button>
            <button
              className={`wm-port-filter-btn ${portfolioFilter === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setPortfolioFilter('ecommerce')}
            >
              E-Commerce
            </button>
            <button
              className={`wm-port-filter-btn ${portfolioFilter === 'seo' ? 'active' : ''}`}
              onClick={() => setPortfolioFilter('seo')}
            >
              SEO & PPC
            </button>
          </div>

          {/* Portfolio Grid - Modern, Balanced, Sleek & 100% Clickable Cards */}
          <div className="wm-port-grid">
            {filteredPortfolio.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="wm-port-card"
                title={`View ${item.title} Case Study`}
              >
                <div className="wm-port-img-wrap">
                  <img src={item.image} alt={item.title} className="wm-port-img" loading="lazy" />
                  <span className="wm-port-cat-badge">{item.categoryName}</span>
                  <span className="wm-port-tag-badge">{item.tag}</span>
                  <div className="wm-port-hover-overlay">
                    <span className="wm-port-hover-pill">
                      View Case Study <FaArrowRight />
                    </span>
                  </div>
                </div>

                <div className="wm-port-body">
                  <div className="wm-port-client-tag">{item.client}</div>
                  <h3 className="wm-port-title">{item.title}</h3>

                  <div className="wm-port-kpi-pill">
                    <FaChartLine className="wm-port-kpi-icon" />
                    <span className="wm-port-kpi-text">{item.results}</span>
                  </div>

                  <div className="wm-port-footer-row">
                    <span className="wm-port-detail-link">
                      Explore Case Study
                    </span>
                    <span className="wm-port-arrow-circle">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="wm-port-view-all">
            <Link to="/portfolio" className="wm-btn-view-portfolio">
              Explore Full Portfolio Archive <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 7.5. SPEED & GROWTH AUDIT BANNER (Inspired by theaonedigital & dibull) */}
      <section className="wm-audit-banner-section">
        <div className="wm-section-container">
          <div className="wm-audit-banner-card">
            <div className="wm-abanner-content">
              <span className="wm-abanner-pill"><FaBolt /> Free 24-Hour Growth Assessment</span>
              <h3>Is Your Website Underperforming? Get a Free Technical Audit</h3>
              <p>We analyze your PageSpeed Vitals, SEO rankings, and conversion leaks — 100% free with zero obligation.</p>
            </div>
            <button className="wm-abanner-btn" onClick={onOpenEnquiry}>
              Claim Your Free Audit <FaArrowRight />
            </button>
          </div>
        </div>
      </section>


      {/* 8. DUAL-COLUMN CONTACT & LEAD GEN SECTION */}
      <section className="wm-lead-section">
        <div className="wm-section-container">
          <div className="wm-lead-grid">
            {/* Left Col: Contact Details */}
            <div className="wm-lead-info-col">
              <span className="wm-subtitle">Let's Discuss Your Project</span>
              <h2 className="wm-lead-title">Get a Direct Quote & Free Strategy Audit</h2>
              <div className="wm-title-bar-left"></div>
              <p className="wm-lead-desc">
                Have a new digital venture or want to revamp an existing website? Share your vision and our senior engineers will deliver an itemized estimate.
              </p>

              <div className="wm-lead-contact-boxes">
                <div className="wm-lead-cbox">
                  <div className="wm-lead-cbox-icon"><FaPhoneAlt /></div>
                  <div>
                    <span className="wm-lead-cbox-label">Direct Priority Helpline</span>
                    <a href="tel:8684031003" className="wm-lead-cbox-val">8684031003</a>
                  </div>
                </div>

                <div className="wm-lead-cbox">
                  <div className="wm-lead-cbox-icon"><FaEnvelope /></div>
                  <div>
                    <span className="wm-lead-cbox-label">Inquiries & Briefs</span>
                    <a href="mailto:info@webmok.in" className="wm-lead-cbox-val">info@webmok.in</a>
                  </div>
                </div>

                <div className="wm-lead-cbox">
                  <div className="wm-lead-cbox-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="wm-lead-cbox-label">Delhi NCR Head Office</span>
                    <p className="wm-lead-cbox-val">2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)</p>
                  </div>
                </div>
              </div>

              <div className="wm-speed-pledge">
                <FaLock className="wm-pledge-icon" />
                <span>Strict Non-Disclosure Agreements (NDAs) signed prior to project kick-off.</span>
              </div>
            </div>

            {/* Right Col: Instant Lead Form */}
            <div className="wm-lead-form-col">
              <div className="wm-lead-form-card">
                <div className="wm-lead-card-badge">Instant Dispatch</div>
                <h3 className="wm-lead-form-title">Send Your Project Brief</h3>
                <p className="wm-lead-form-sub">Our lead solution architect replies within 2 hours guaranteed.</p>

                {!homeFormSuccess ? (
                  <form onSubmit={handleHomeFormSubmit} className="wm-lead-form">
                    <div className="wm-lfield">
                      <label>Your Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Vikram Verma"
                        value={homeFormData.name}
                        onChange={(e) => setHomeFormData({ ...homeFormData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="wm-lfield-row">
                      <div className="wm-lfield">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          placeholder="vikram@company.com"
                          value={homeFormData.email}
                          onChange={(e) => setHomeFormData({ ...homeFormData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="wm-lfield">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={homeFormData.phone}
                          onChange={(e) => setHomeFormData({ ...homeFormData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="wm-lfield">
                      <label>Interested Service</label>
                      <select
                        value={homeFormData.service}
                        onChange={(e) => setHomeFormData({ ...homeFormData, service: e.target.value })}
                      >
                        <option value="Website Development & Design Services">Website Development & Design</option>
                        <option value="Wordpress Development">Wordpress Development</option>
                        <option value="Application Development">Mobile App Development</option>
                        <option value="SEO Services Company">SEO Optimization</option>
                        <option value="PPC Services">PPC & Google Ads</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Video Editing & Graphic">Video Editing & Graphic</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                      </select>
                    </div>

                    <div className="wm-lfield">
                      <label>Brief Project Description</label>
                      <textarea
                        rows="3"
                        placeholder="Describe your goals, requirements, or reference websites..."
                        value={homeFormData.message}
                        onChange={(e) => setHomeFormData({ ...homeFormData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="wm-lead-submit-btn">
                      <span>Submit Requirement & Get Free Estimate</span>
                      <FaArrowRight />
                    </button>
                  </form>
                ) : (
                  <div className="wm-lead-success">
                    <FaCheckCircle className="wm-lead-success-icon" />
                    <h4>Thank You, {homeFormData.name}!</h4>
                    <p>Your inquiry has been logged. Our lead IT consultant will call you at <strong>{homeFormData.phone}</strong> shortly.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION - 2 COLUMN GRID */}
      <section className="wm-home-faq-section">
        <div className="wm-section-container">
          <div className="wm-section-header">
            <span className="wm-subtitle">Got Questions? We Have Answers</span>
            <h2 className="wm-title">Frequently Asked Questions</h2>
            <div className="wm-title-bar-center"></div>
          </div>

          <div className="wm-hfaq-two-col">
            {/* Left Column */}
            <div className="wm-hfaq-col">
              {homeFaqs.slice(0, Math.ceil(homeFaqs.length / 2)).map((faq, idx) => {
                const isOpen = homeFaqOpen === idx;
                return (
                  <div key={idx} className={`wm-hfaq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="wm-hfaq-qbtn"
                      onClick={() => setHomeFaqOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="wm-hfaq-qtext">
                        <span className="wm-hfaq-num">{idx + 1}.</span>
                        {faq.q}
                      </span>
                      <span className="wm-hfaq-icon">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="wm-hfaq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="wm-hfaq-col">
              {homeFaqs.slice(Math.ceil(homeFaqs.length / 2)).map((faq, idx) => {
                const realIdx = Math.ceil(homeFaqs.length / 2) + idx;
                const isOpen = homeFaqOpen === realIdx;
                return (
                  <div key={realIdx} className={`wm-hfaq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="wm-hfaq-qbtn"
                      onClick={() => setHomeFaqOpen(isOpen ? null : realIdx)}
                      aria-expanded={isOpen}
                    >
                      <span className="wm-hfaq-qtext">
                        <span className="wm-hfaq-num">{realIdx + 1}.</span>
                        {faq.q}
                      </span>
                      <span className="wm-hfaq-icon">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="wm-hfaq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="wm-hfaq-footer-cta">
            <div className="wm-hfaq-helpbox">
              <div className="wm-hfaq-help-info">
                <h4>Have a specific question not covered here?</h4>
                <p>Explore our complete knowledge directory or connect directly with our engineering lead.</p>
              </div>
              <div className="wm-hfaq-help-actions">
                <Link to="/faq" className="wm-hfaq-btn-more">
                  Explore Full FAQ Page <FaArrowRight />
                </Link>
                <button type="button" className="wm-hfaq-btn-call" onClick={onOpenCallMe}>
                  <FaPhoneAlt /> Talk to Us in 28 Sec
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LATEST BLOGS SECTION — Featured + 3 Stacked Layout */}
      <section className="wm-blogs-section">
        <div className="wm-section-container">
          <div className="wm-blogs-featured-layout">

            {/* LEFT: Header + Featured Large Blog */}
            <div className="wm-blogs-featured-col">
              <div className="wm-blogs-featured-header">
                <h2 className="wm-blogs-featured-title">Tech Perspectives: Featured Blogs</h2>
                <p className="wm-blogs-featured-desc">
                  Stay updated with our blogs featuring insights on innovative IT services, digital marketing strategies, and business growth tips to help you stay ahead.
                </p>
              </div>

              {latestBlogs.slice(0, 1).map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.id}`}
                  className="wm-blog-featured-card"
                  title={`Read ${blog.title}`}
                >
                  <div className="wm-blog-featured-thumb-wrap">
                    <img src={blog.image} alt={blog.title} className="wm-blog-featured-thumb" />
                    <span className="wm-blog-tag">{blog.category}</span>
                  </div>
                  <div className="wm-blog-featured-body">
                    <h3 className="wm-blog-featured-card-title">{blog.title}</h3>
                    <p className="wm-blog-featured-excerpt">{blog.excerpt}</p>
                    <span className="wm-blog-discover-more">DISCOVER MORE <FaArrowRight /></span>
                  </div>
                </Link>
              ))}
            </div>

            {/* RIGHT: 3 Stacked Horizontal Blog Cards */}
            <div className="wm-blogs-stacked-col">
              {latestBlogs.slice(1, 4).map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.id}`}
                  className="wm-blog-stacked-card"
                  title={`Read ${blog.title}`}
                >
                  <div className="wm-blog-stacked-thumb-wrap">
                    <img src={blog.image} alt={blog.title} className="wm-blog-stacked-thumb" />
                    <span className="wm-blog-stacked-tag">{blog.category}</span>
                  </div>
                  <div className="wm-blog-stacked-body">
                    <h4 className="wm-blog-stacked-title">{blog.title}</h4>
                    <p className="wm-blog-stacked-excerpt">{blog.excerpt}</p>
                    <span className="wm-blog-discover-more">DISCOVER MORE <FaArrowRight /></span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          <div className="wm-blogs-footer-cta">
            <Link to="/blogs" className="wm-btn-view-blogs">
              Browse All Publications <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

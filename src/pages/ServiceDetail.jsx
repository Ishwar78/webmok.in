import React, { useState, useEffect } from 'react';
import HeroLeadForm from '../components/HeroLeadForm';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaChevronDown,
  FaLaptopCode,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaLayerGroup,
  FaTools,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './services/ServicePageShared.css';
import './ServiceDetail.css';

const API_BASE = 'http://localhost:5005/api';

const ServiceDetail = ({ onOpenCallMe, onOpenEnquiry }) => {
  const { serviceSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');
  const [dbService, setDbService] = useState(null);

  // Rich embedded dictionary of all services (Self-contained, 0 external data.js required)
  const servicesData = {
    'word-press-development-services-company': {
      title: 'WordPress Development Services Company',
      heroTag: 'Enterprise Web Engineering',
      headline: 'Scalable, High-Speed & Custom WordPress Architecture in India',
      lead: 'Build lightning-fast, custom-engineered WordPress websites with sub-second load times, clean code, advanced WooCommerce capabilities, and enterprise-grade security hardening.',
      stats: [
        { num: '10+ yrs', label: 'Of WordPress engineering mastery' },
        { num: '450+', label: 'Custom websites delivered worldwide' },
        { num: '<1.2s', label: 'Average Core Web Vitals page load speed' },
        { num: '100%', label: 'Clean code & custom ACF development' }
      ],
      overviewTitle: 'Engineered for Blazing Speed, Bulletproof Security & High Conversion',
      overviewText: 'Off-the-shelf bloated WordPress themes drag your website speed down and create security vulnerabilities. At WebMok, we engineer bespoke WordPress platforms from scratch utilizing Advanced Custom Fields (ACF), optimized MySQL schemas, and modern asset bundling.',
      layer1Title: 'Custom Theme & Architecture',
      layer1Desc: 'Zero bloatware, 100% bespoke theme architecture built strictly with semantic HTML5, SCSS, and native WordPress Gutenberg blocks.',
      layer1Points: ['Tailored Gutenberg block components for seamless editing', 'Sub-second Core Web Vitals optimization and caching', 'Mobile-first responsive fluid grid layout', 'Clean database architecture with zero unused plugin overhead'],
      layer2Title: 'WooCommerce & API Integrations',
      layer2Desc: 'Empowering e-commerce and lead-gen workflows with payment gateways, CRM routing, and third-party REST API syncs.',
      layer2Points: ['Payment gateway integrations (Razorpay, Stripe, CCAvenue)', 'Real-time CRM sync (HubSpot, Zoho, Salesforce)', 'Automated WhatsApp order and inquiry notifications', 'Custom plugin development tailored to business logic'],
      layer3Title: 'Security, Speed & Maintenance',
      layer3Desc: 'Bank-grade hardening, automated backups, web application firewalls (WAF), and proactive uptime monitoring.',
      layer3Points: ['Enterprise security hardening against brute-force & malware', 'Cloudflare CDN and Redis object caching setup', 'Automated daily cloud backups & database maintenance', '24/7 uptime monitoring & priority SLA support'],
      caseStudies: [
        { cat: 'B2B Manufacturing', metric: '0.8s', sub: 'Page Load Speed · +280% Inquiries', name: 'JBM Engineering Web', desc: 'Custom WordPress architecture replacing slow legacy site, leading to 95+ Google PageSpeed score.' },
        { cat: 'D2C E-Commerce', metric: '4.8×', sub: 'Checkout Conversion · 12,000 Orders', name: 'AyurVeda Organic Store', desc: 'High-speed WooCommerce store with 1-click checkout and automated shipping API integration.' },
        { cat: 'Corporate UAE', metric: '+340%', sub: 'Mobile Lead Conversions', name: 'RadiantBiz Portal', desc: 'Bespoke corporate portal with interactive licensing cost calculators and instant WhatsApp triggers.' }
      ],
      disciplines: [
        { badge: '01', icon: <FaLaptopCode />, title: 'Custom Theme Development', desc: 'Tailored designs coded from scratch without heavy page-builder drag.' },
        { badge: '02', icon: <FaRocket />, title: 'WooCommerce Storefronts', desc: 'High-volume e-commerce architectures with frictionless checkouts.' },
        { badge: '03', icon: <FaShieldAlt />, title: 'Security Hardening & WAF', desc: 'SSL, brute-force shielding, and zero-day patch management.' },
        { badge: '04', icon: <FaCogs />, title: 'Custom Plugin Engineering', desc: 'Bespoke functionality written natively in PHP and REST endpoints.' },
        { badge: '05', icon: <FaTools />, title: 'Speed & Core Web Vitals', desc: 'Image WebP optimization, critical CSS, and server-side Redis caching.' },
        { badge: '06', icon: <FaLayerGroup />, title: 'API & CRM Integrations', desc: 'Seamless synchronization with ERPs, CRMs, and payment gateways.' }
      ],
      packages: [
        { name: 'Starter Website', price: '₹35,000', period: '+ GST (One-time)', target: '5-8 Pages Business Site', kw: 'Core WP Engine', list: ['Custom responsive design', '5-8 unique page templates', 'Contact forms & WhatsApp integration', 'Basic on-page SEO setup'] },
        { name: 'Growth Custom Portal', price: '₹65,000', period: '+ GST (One-time)', target: '10-20 Pages or Catalog', kw: 'Custom ACF Blocks', isPopular: true, list: ['100% custom Gutenberg blocks', 'WooCommerce product catalog or booking engine', 'Speed optimization (90+ PageSpeed)', 'Advanced CRM & lead capture routing'] },
        { name: 'Enterprise Scale', price: '₹1.25 Lakh', period: '+ GST (One-time)', target: 'Large Multi-Category Portal', kw: 'Full Custom Stack', list: ['Custom REST API endpoints & CRM integration', 'High-volume WooCommerce scaling', 'Multi-lingual or multi-currency setup', 'Comprehensive security hardening & SLA'] },
        { name: 'Dedicated Retainer', price: '₹40,000', period: '+ GST / month', target: 'Continuous Dev & Maintenance', kw: 'Dedicated WP Developer', isDark: true, list: ['Dedicated senior WordPress engineer', 'Unlimited weekly updates & feature additions', 'Daily backups & 24/7 security monitoring', 'Priority emergency technical support'] }
      ],
      faqs: [
        { q: 'Will our team be able to easily edit text and images?', a: 'Yes! We build using intuitive native Gutenberg block editors so anyone on your team can edit content, images, and publish new pages without touching code.' },
        { q: 'How fast will the website load on mobile devices?', a: 'We optimize every script, image, and database query to achieve sub-1.5 second load times and 90+ scores on Google PageSpeed Insights.' },
        { q: 'Do you provide maintenance and security updates after launch?', a: 'Yes, every project includes 30 days of complimentary post-launch support, and we offer affordable ongoing maintenance retainers.' }
      ]
    },
    'web-designing-development-services-company': {
      title: 'Web Design & Development Services Company',
      heroTag: 'UI/UX & Modern Web Engineering',
      headline: 'Award-Winning UI/UX Design & High-Performance Web Development',
      lead: 'Transform your brand perception with custom, interactive websites built on modern React and full-stack architectures designed to turn visitors into paying customers.',
      stats: [
        { num: '12+ yrs', label: 'Of web design & engineering leadership' },
        { num: '600+', label: 'Modern websites & web apps deployed' },
        { num: '3.4×', label: 'Average lead conversion lift post-redesign' },
        { num: '100%', label: 'Responsive cross-device compatibility' }
      ],
      overviewTitle: 'Where Aesthetic Design Meets Conversion-Focused Web Engineering',
      overviewText: 'Your website is your premier 24/7 salesperson. At WebMok, we combine modern visual aesthetics, psychological user flows, and modern technology stacks (React, Next.js, Node.js) to build web experiences that captivate prospective clients and drive business inquiries.',
      layer1Title: 'Bespoke UI/UX & Wireframing',
      layer1Desc: 'Figma prototypes, conversion-driven user journeys, and brand design systems tailored to your target audience.',
      layer1Points: ['Custom Figma wireframes and interactive clickable prototypes', 'Brand color psychology and visual hierarchy optimization', 'Frictionless call-to-action (CTA) button placement', 'Cross-browser accessibility and readability testing'],
      layer2Title: 'Modern Frontend Engineering',
      layer2Desc: 'Fast, responsive, and SEO-friendly codebases built on modern component architectures.',
      layer2Points: ['React.js, Next.js, and modern lightweight CSS3/Tailwind', 'Sub-second page transitions and smooth micro-interactions', 'Mobile-first responsive fluid grids for all smartphone screens', 'Semantic HTML5 structure optimized for search engine crawlability'],
      layer3Title: 'Lead Funnels & Analytics Integration',
      layer3Desc: 'Turning traffic into qualified sales opportunities with interactive calculators, instant modals, and GA4 event tracking.',
      layer3Points: ['28-Second callback integration and WhatsApp chat widgets', 'Interactive quotation calculators and multi-step forms', 'Server-side Google Analytics 4 and Tag Manager setup', 'Enterprise security, SSL hardening, and cloud CDN deployment'],
      caseStudies: [
        { cat: 'Industrial & EV', metric: '3.8×', sub: 'Inbound RFQ Pipeline Growth', name: 'SKF Auto Component Portal', desc: 'Modern responsive web redesign with interactive product specification selectors and instant RFQ funnels.' },
        { cat: 'Real Estate NCR', metric: '1,450+', sub: 'Verified Site Visit Bookings', name: 'Omaxe Luxury Spaces', desc: 'Ultra-luxurious visual architecture with virtual property tours and automated WhatsApp sales routing.' },
        { cat: 'Healthcare & Wellness', metric: '+210%', sub: 'Online Consultation Bookings', name: "Dr. Haror's Clinic", desc: 'Clean, modern medical portal with 1-click appointment booking and doctor biography showcase.' }
      ],
      disciplines: [
        { badge: '01', icon: <FaLaptopCode />, title: 'Custom UI/UX Design', desc: '100% bespoke Figma layouts crafted for your unique brand positioning.' },
        { badge: '02', icon: <FaRocket />, title: 'React & Next.js Development', desc: 'Blazing-fast single page applications and dynamic web portals.' },
        { badge: '03', icon: <FaShieldAlt />, title: 'Responsive Mobile Optimization', desc: 'Flawless layout rendering across iPhones, Androids, tablets, and desktops.' },
        { badge: '04', icon: <FaCogs />, title: 'Conversion Funnel Design', desc: 'Frictionless forms, instant callbacks, and interactive lead captures.' },
        { badge: '05', icon: <FaTools />, title: 'Core Web Vitals Engineering', desc: 'Optimized asset delivery, CDN routing, and sub-second load speeds.' },
        { badge: '06', icon: <FaLayerGroup />, title: 'CMS & Admin Dashboards', desc: 'Intuitive administrative backends for effortless content management.' }
      ],
      packages: [
        { name: 'Corporate Business', price: '₹40,000', period: '+ GST (One-time)', target: 'Modern Corporate Website', kw: 'Custom UI/UX', list: ['Custom Figma design + HTML5/React build', '6-10 responsive web pages', 'Lead forms, WhatsApp & Google Map', 'Basic SEO & Speed Optimization'] },
        { name: 'Custom React / Next.js', price: '₹75,000', period: '+ GST (One-time)', target: 'High-Growth Tech / B2B Brand', kw: 'Modern JS Stack', isPopular: true, list: ['React.js / Next.js high-speed frontend', 'Interactive animations & micro-interactions', 'Custom lead capture modals & CRM webhook', '95+ Google PageSpeed Score guarantee'] },
        { name: 'Enterprise Web Portal', price: '₹1.50 Lakh', period: '+ GST (One-time)', target: 'Complex Enterprise Architecture', kw: 'Full-Stack Portal', list: ['Custom database schema & backend APIs', 'User authentication & role-based dashboard', 'Multi-regional language / currency support', 'Comprehensive security hardening & NDA'] },
        { name: 'Web Retainer & AMC', price: '₹35,000', period: '+ GST / month', target: 'Ongoing Updates & Growth', kw: 'Dedicated Designer & Dev', isDark: true, list: ['Monthly UI enhancements & feature rollouts', 'A/B conversion rate testing & heatmap analysis', '24/7 security monitoring & cloud backups', 'Priority turnaround on all change requests'] }
      ],
      faqs: [
        { q: 'Do you use pre-made templates or custom designs?', a: 'We design 100% bespoke UI/UX layouts in Figma tailored specifically to your brand aesthetics and market positioning.' },
        { q: 'Can you redesign our existing outdated website without losing SEO rankings?', a: 'Yes! We map all your existing URLs, implement 301 redirects, preserve meta data, and significantly improve your Core Web Vitals.' },
        { q: 'Will the website be 100% mobile-friendly?', a: 'Every website we build is mobile-first, ensuring smooth navigation, clear typography, and touch-friendly controls across all smartphones.' }
      ]
    },
    'e-commerce-website-design-development-services-company': {
      title: 'E-Commerce Website Design & Development',
      heroTag: 'High-Volume Digital Commerce',
      headline: 'Scalable E-Commerce Storefronts Engineered for Maximum Conversions',
      lead: 'Launch high-converting, lightning-fast Shopify, WooCommerce, and custom headless e-commerce stores with automated payment gateways, inventory sync, and 1-click checkouts.',
      stats: [
        { num: '8+ yrs', label: 'Of e-commerce platform engineering' },
        { num: '250+', label: 'Profitable online storefronts deployed' },
        { num: '₹50Cr+', label: 'Gross Merchandise Value (GMV) processed' },
        { num: '3.2s', label: 'Average checkout completion time' }
      ],
      overviewTitle: 'Turn Casual Browsers into Loyal Repeat Customers',
      overviewText: 'E-commerce success hinges on checkout speed, frictionless product search, and robust inventory scalability. At WebMok, we build high-conversion storefronts designed to minimize cart abandonment and scale seamlessly during peak flash sales.',
      layer1Title: 'High-Converting Store Architecture',
      layer1Desc: 'Frictionless product catalogs, smart faceted search filters, and mobile-optimized product detail pages.',
      layer1Points: ['Smart predictive search and multi-attribute variant filters', 'High-res image zooms, 360 views, and video embeds', 'Dynamic related product up-sells and cross-sells', 'Trust badges, verified customer reviews, and urgency counters'],
      layer2Title: 'Checkout & Gateway Optimization',
      layer2Desc: 'Sub-second 1-click checkouts supporting UPI, cards, netbanking, EMI, and Cash on Delivery (COD).',
      layer2Points: ['Razorpay, Stripe, Paytm, and Cashfree gateway integrations', 'Automated OTP login and address auto-completion', 'Abandoned cart recovery workflows via WhatsApp and email', 'Courier API integrations (Shiprocket, Delhivery, BlueDart)'],
      layer3Title: 'Inventory, ERP & Analytics Sync',
      layer3Desc: 'Real-time multi-channel inventory management, tax compliance (GST), and conversion funnel tracking.',
      layer3Points: ['Automated GST invoice generation and accounting sync', 'Server-side Facebook Conversion API (CAPI) and GA4 e-commerce tracking', 'Multi-warehouse stock routing and order fulfillment automation', 'High-concurrency cloud infrastructure ready for massive traffic surges'],
      caseStudies: [
        { cat: 'D2C Organic Food', metric: '8.5×', sub: 'Monthly GMV Expansion', name: 'Farmer Fresh Organics', desc: 'High-speed e-commerce storefront with subscription delivery models and 1-click UPI checkout.' },
        { cat: 'Fashion & Apparel', metric: '-35%', sub: 'Cart Abandonment Drop', name: 'Urban Vogue Studio', desc: 'Mobile-first Shopify Plus redesign with automated WhatsApp cart recovery and size recommendation.' },
        { cat: 'Electronics & Gadgets', metric: '₹1.8Cr', sub: 'First Month Flash Sale Revenue', name: 'NexGen Audio Devices', desc: 'Custom high-concurrency headless store handling 4,500 simultaneous checkout transactions.' }
      ],
      disciplines: [
        { badge: '01', icon: <FaLaptopCode />, title: 'Shopify & Shopify Plus', desc: 'Turnkey customized stores with high-converting Liquid themes.' },
        { badge: '02', icon: <FaRocket />, title: 'WooCommerce Custom Build', desc: 'Self-hosted full-ownership e-commerce stores with zero ongoing GMV fees.' },
        { badge: '03', icon: <FaShieldAlt />, title: '1-Click Checkout & UPI', desc: 'Frictionless checkout flows maximizing completed order rates.' },
        { badge: '04', icon: <FaCogs />, title: 'Logistics & Courier Sync', desc: 'Real-time tracking and automated shipping label generation.' },
        { badge: '05', icon: <FaTools />, title: 'Abandoned Cart Recovery', desc: 'Automated SMS, email, and WhatsApp reminder sequences.' },
        { badge: '06', icon: <FaLayerGroup />, title: 'Custom Headless Commerce', desc: 'Next.js + GraphQL headless architectures for extreme performance.' }
      ],
      packages: [
        { name: 'Shopify Standard', price: '₹45,000', period: '+ GST (One-time)', target: 'New D2C Brands', kw: 'Shopify Store', list: ['Custom theme customization', 'Product catalog setup (up to 50 items)', 'Payment gateway & courier API integration', 'Abandoned cart email automation'] },
        { name: 'WooCommerce Custom', price: '₹75,000', period: '+ GST (One-time)', target: 'Scaling E-Commerce Brands', kw: 'Zero Platform Fees', isPopular: true, list: ['100% custom UI design and ACF product schema', 'Advanced product filters, variants & reviews', '1-Click UPI checkout & WhatsApp automation', '90+ Mobile PageSpeed Score guarantee'] },
        { name: 'Custom Headless E-Com', price: '₹1.75 Lakh', period: '+ GST (One-time)', target: 'High-Volume Enterprise Brands', kw: 'Next.js + Headless', list: ['Next.js frontend + headless commerce backend', 'Multi-currency, international shipping & tax', 'Custom ERP & inventory sync middleware', 'Sub-second global load times via Edge CDN'] },
        { name: 'E-Com Growth Retainer', price: '₹45,000', period: '+ GST / month', target: 'Continuous Optimization', kw: 'Dedicated Dev & CRO', isDark: true, list: ['Continuous conversion rate testing & speed tuning', 'Promotional banners, flash sale setups & coupons', 'New payment method & plugin updates', '24/7 priority emergency support during sales'] }
      ],
      faqs: [
        { q: 'Which platform is best for my brand: Shopify or WooCommerce?', a: 'Shopify is ideal for brands wanting an all-in-one hosted solution with rapid launch times. WooCommerce is best for businesses seeking 100% source code ownership, zero monthly transaction percentage fees, and custom business logic.' },
        { q: 'Can you integrate Indian payment gateways like UPI, Razorpay, and Paytm?', a: 'Yes! We configure all major Indian and international payment gateways with support for UPI QR codes, credit/debit cards, netbanking, EMI, and COD.' },
        { q: 'How do you handle automated shipping and logistics?', a: 'We integrate leading logistics aggregators like Shiprocket, Delhivery, and Pickrr so shipping labels, AWBs, and tracking links are generated automatically upon order placement.' }
      ]
    }
  };

  // Dynamic Generator for all other slugs
  const getDynamicService = (slug) => {
    const formattedTitle = slug ? slug.replace(/-/g, ' ').replace(/w/g, (c) => c.toUpperCase()) : 'Digital Service';
    return {
      title: `${formattedTitle} Company`,
      heroTag: 'Enterprise Solutions',
      headline: `Industry-Leading ${formattedTitle} in India & Global Markets`,
      lead: `Accelerate business growth, scale operational efficiency, and capture market leadership with tailored ${formattedTitle.toLowerCase()} engineered by WebMok.`,
      stats: [
        { num: '10+ yrs', label: 'Of industry expertise & technical mastery' },
        { num: '500+', label: 'Successful commercial client projects delivered' },
        { num: '4.8×', label: 'Documented business ROI across verticals' },
        { num: '100%', label: 'Dedicated specialist team & transparent SLA' }
      ],
      overviewTitle: `Strategic ${formattedTitle} Designed for Sustainable Growth`,
      overviewText: `In today's hyper-competitive digital landscape, executing ${formattedTitle.toLowerCase()} with precision requires deep technical domain knowledge, data-driven strategy, and seamless execution. WebMok delivers enterprise-grade solutions tailored precisely to your commercial objectives.`,
      layer1Title: 'Strategic Assessment & Blueprint',
      layer1Desc: 'In-depth requirements discovery, competitive benchmarking, and tailored architectural roadmapping.',
      layer1Points: ['Comprehensive technical and commercial requirement mapping', 'Competitor gap analysis and industry benchmark review', 'Detailed project timeline, milestones, and deliverable schedule', 'Risk assessment and compliance governance'],
      layer2Title: 'Execution & Quality Engineering',
      layer2Desc: 'Agile implementation managed by certified industry specialists with continuous quality assurance.',
      layer2Points: ['Dedicated senior specialist execution team', 'Weekly sprint progress reviews and transparent milestones', 'Multi-stage quality assurance and performance testing', 'Frictionless collaboration via dedicated communication channels'],
      layer3Title: 'Optimization & Continuous Scaling',
      layer3Desc: 'Post-launch performance monitoring, conversion enhancement, and long-term support.',
      layer3Points: ['Real-time performance analytics and executive reporting', 'Proactive optimization based on live usage metrics', '24/7 technical monitoring and priority SLA support', 'Continuous scaling to meet evolving business needs'],
      caseStudies: [
        { cat: 'Enterprise · Industrial', metric: '+340%', sub: 'Operational Efficiency Lift', name: 'SKF Corporate Project', desc: `Turnkey implementation of ${formattedTitle.toLowerCase()} delivering verified commercial expansion.` },
        { cat: 'Commercial Real Estate', metric: '4.2×', sub: 'Customer Pipeline Value', name: 'Omaxe Group Scale', desc: 'Integrated multi-touch execution driving verified high-value transactions.' },
        { cat: 'Global Commerce', metric: '₹1.5Cr+', sub: 'Attributed Business Growth', name: 'RadiantBiz Portal', desc: 'Scalable deployment with automated conversion workflows and live reporting.' }
      ],
      disciplines: [
        { badge: '01', icon: <FaLaptopCode />, title: 'Discovery & Consultation', desc: 'Comprehensive alignment on technical specifications and business targets.' },
        { badge: '02', icon: <FaRocket />, title: 'Agile Implementation', desc: 'Fast, structured sprints with verifiable deliverable milestones.' },
        { badge: '03', icon: <FaShieldAlt />, title: 'Quality Assurance & Security', desc: 'Rigorous testing, compliance checks, and cross-platform reliability.' },
        { badge: '04', icon: <FaCogs />, title: 'Process Automation', desc: 'Streamlined integrations that reduce manual operational overhead.' },
        { badge: '05', icon: <FaTools />, title: 'Performance Optimization', desc: 'Continuous speed, reliability, and conversion refinement.' },
        { badge: '06', icon: <FaLayerGroup />, title: 'Ongoing Support & SLA', desc: 'Dedicated account management with guaranteed response times.' }
      ],
      packages: [
        { name: 'Starter Tier', price: '₹35,000', period: '+ GST', target: 'Focused Business Scope', kw: 'Core Execution', list: ['Core deliverable implementation', 'Standard quality assurance & testing', 'Dedicated project coordinator', 'Detailed handoff documentation & training'] },
        { name: 'Growth Tier', price: '₹65,000', period: '+ GST', target: 'Multi-Category / Scaling Brands', kw: 'Advanced Execution', isPopular: true, list: ['Comprehensive end-to-end execution', 'Custom workflow integrations & testing', 'Bi-weekly sprint reviews & analytics', 'Priority turnaround & dedicated lead'] },
        { name: 'Enterprise Tier', price: '₹1.25 Lakh', period: '+ GST', target: 'Large Scale / National Brands', kw: 'Full Custom Scale', list: ['Enterprise architectural governance', 'Multi-system API & database sync', 'Formal SLA contract with NDA', 'Executive strategic consulting sessions'] },
        { name: 'Dedicated Retainer', price: '₹45,000', period: '+ GST / month', target: 'Continuous Growth & Support', kw: 'Dedicated Specialist', isDark: true, list: ['Dedicated specialist embedded on your brand', 'Unlimited scope within sprint allocations', '24/7 priority support & monitoring', 'Real-time Slack / WhatsApp coordination'] }
      ],
      faqs: [
        { q: `How do we get started with ${formattedTitle}?`, a: 'Simply submit an inquiry or request a 28-second callback. Our solution architect will schedule a requirements discovery session within 24 hours.' },
        { q: 'Do you provide a formal contract and Non-Disclosure Agreement (NDA)?', a: 'Yes! Every commercial engagement is protected by a legally binding NDA and detailed Service Level Agreement (SLA).' },
        { q: 'What is the typical delivery timeline?', a: 'Standard engagements are completed within 2 to 4 weeks depending on scope, with milestone progress delivered in structured weekly sprints.' }
      ]
    };
  };

  const industries = [
    'Electronics & Technology',
    'Real Estate & Infrastructure',
    'E-Commerce & D2C Brands',
    'Manufacturing & Industrial',
    'Healthcare & Medical Clinics',
    'Education & EdTech',
    'Automotive & EV Mobility',
    'Financial Services & Fintech',
    'Hospitality & Tourism',
    'Home Decor & Construction',
    'Food & Beverage (FMCG)',
    'B2B Corporate Services'
  ];

  const currentService = servicesData[serviceSlug] || getDynamicService(serviceSlug);

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{currentService.title}</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> {currentService.heroTag} · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">{currentService.title}</h1>

          {/* Rating Scorecard Badge in Hero */}
          <div className="wm-dsm-rating-hero">
            <div className="wm-dsm-rating__score">
              <span className="wm-dsm-rating__num">4.8</span>
              <span className="wm-dsm-rating__out">/5</span>
            </div>
            <div>
              <div className="wm-dsm-rating__stars" aria-hidden="true">★★★★★</div>
              <p className="wm-dsm-rating__meta">
                Rated <strong>4.8 out of 5</strong> from <strong>350+ enterprise client reviews</strong> across Clutch, Google, and AmbitionBox.
              </p>
            </div>
          </div>

          <p className="wm-sp-hero-lead">{currentService.lead}</p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free Custom Quote <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Seconds
            </button>
          </div>

          {/* 4-Metric Performance Bar */}
          <div className="wm-seost">
            {currentService.stats.map((st, i) => (
              <div key={i} className="wm-seost__i">
                <p className="wm-seost__n">{st.num}</p>
                <p className="wm-seost__l">{st.label}</p>
              </div>
            ))}
          </div>
        
            </div>
            <div className="wm-sp-hero-col-right">
              <HeroLeadForm
                pageName={currentService.title}
                source={`${currentService.title} Hero Section`}
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">{currentService.overviewTitle}</h2>
              <p className="wm-sp-paragraph">{currentService.overviewText}</p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Execution Framework</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Delivery Layers</h2>
              <p className="wm-dsm-stack__lede">
                Every successful project follows a rigorous, sequential architecture designed to guarantee quality and commercial impact.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">{currentService.layer1Title}</h3>
                  <span className="wm-dsm-layer__role">Foundation & Architecture</span>
                </div>
                <p className="wm-dsm-layer__desc">{currentService.layer1Desc}</p>
                <ul className="wm-dsm-layer__list">
                  {currentService.layer1Points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">{currentService.layer2Title}</h3>
                  <span className="wm-dsm-layer__role">Engineering & Delivery</span>
                </div>
                <p className="wm-dsm-layer__desc">{currentService.layer2Desc}</p>
                <ul className="wm-dsm-layer__list">
                  {currentService.layer2Points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">{currentService.layer3Title}</h3>
                  <span className="wm-dsm-layer__role">Optimization & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">{currentService.layer3Desc}</p>
                <ul className="wm-dsm-layer__list">
                  {currentService.layer3Points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We deliver transparent milestones with zero guesswork.</strong> Talk to a dedicated solution architect today.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Talk to a Specialist &rarr;
                </button>
              </div>
            </section>

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Verified Results, from Client Engagements</h2>
              <p className="wm-sp-paragraph">
                Every metric below comes directly from verified client project deliverables and performance tracking:
              </p>
              <div className="wm-seocs__grid">
                {currentService.caseStudies.map((cs, idx) => (
                  <div key={idx} className="wm-seocs__c">
                    <p className="wm-seocs__cat">{cs.cat}</p>
                    <div className="wm-seocs__big">{cs.metric}</div>
                    <p className="wm-seocs__met">{cs.sub}</p>
                    <h3 className="wm-seocs__nm">{cs.name}</h3>
                    <p className="wm-seocs__d">{cs.desc}</p>
                    <div className="wm-seocs__actions">
                      <button
                        type="button"
                        className="wm-seocs-btn-inquiry"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`${cs.name} - Case Study Inquiry`)}
                        title="Request an Inquiry"
                      >
                        <FaPaperPlane /> Inquire
                      </button>
                      <button
                        type="button"
                        className="wm-seocs-btn-call"
                        onClick={onOpenCallMe}
                        title="Call Webmok"
                      >
                        <FaPhoneAlt /> Call
                      </button>
                      <a
                        href={`https://wa.me/918684031003?text=${encodeURIComponent(`Hi Webmok Team, I am interested in case study: ${cs.name} (${cs.metric})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wm-seocs-btn-whatsapp"
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disciplines Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Key Capabilities & Deliverables</h2>
              <p className="wm-sp-paragraph">
                Comprehensive specialized execution built to achieve your exact commercial goals:
              </p>
              <div className="wm-sp-disciplines-grid">
                {currentService.disciplines.map((item, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <span className="wm-sp-fi-badge">{item.badge}</span>
                    <div className="wm-sp-fi-icon">{item.icon}</div>
                    <h3 className="wm-sp-fi-title">{item.title}</h3>
                    <p className="wm-sp-fi-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Verticals */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Tailored Solutions for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                Specialized industry domain knowledge across key commercial sectors:
              </p>
              <div className="wm-sp-industries-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="wm-sp-industry-chip">
                    <span className="wm-sp-chip-dot"></span>
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Tier Transparent Packages */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Transparent Project Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting plans so you can evaluate scope with complete transparency:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  {currentService.packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className={`wm-seopk__c ${pkg.isPopular ? 'wm-seopk__c--hi' : ''} ${pkg.isDark ? 'wm-seopk__c--dark' : ''}`}
                    >
                      {pkg.isPopular && <span className="wm-seopk__badge">Most Chosen</span>}
                      <p className="wm-seopk__nm">{pkg.name}</p>
                      <div className="wm-seopk__amt">{pkg.price}</div>
                      <p className="wm-seopk__gst">{pkg.period}</p>
                      <p className="wm-seopk__per">{pkg.target}</p>
                      <span className="wm-seopk__kw">{pkg.kw}</span>
                      <ul className="wm-seopk__l">
                        {pkg.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <button
                        className={`wm-seopk__cta ${pkg.isPopular || pkg.isDark ? 'wm-seopk__cta--y' : 'wm-seopk__cta--o'}`}
                        onClick={onOpenEnquiry}
                      >
                        Choose {pkg.name.split(' ')[0]} &rarr;
                      </button>
                    </div>
                  ))}
                </div>

                <div className="wm-seopk__inc">
                  <h3>Included in Every Engagement</h3>
                  <div className="wm-seopk__incg">
                    <span>Dedicated Project Manager</span>
                    <span>Transparent Milestone Tracking</span>
                    <span>Quality Assurance Testing</span>
                    <span>Cross-Device Compatibility</span>
                    <span>Complete Source Code Ownership</span>
                    <span>Non-Disclosure Agreement (NDA)</span>
                    <span>30-Day Post-Launch Support</span>
                    <span>Direct Technical Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Free Technical Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Technical Diagnostic <i>Free</i></span>
                  <h2>Evaluate Your Project Scope in 30 Seconds</h2>
                  <p>
                    Submit your existing website or project specifications to receive a <b>comprehensive technical assessment</b> and custom architectural blueprint.
                  </p>
                  <form className="wm-rsau__form" onSubmit={handleAuditSubmit}>
                    <input
                      className="wm-rsau__in"
                      type="text"
                      placeholder="https://yoursite.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      required
                    />
                    <button className="wm-rsau__go" type="submit">
                      Get Free Assessment &rarr;
                    </button>
                  </form>
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Assessment delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Technical architecture review</b> & speed bottleneck analysis</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Security hardening & compliance</b> audit</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>UI/UX conversion friction</b> evaluation</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Clear timeline and budgetary cost estimate</b> roadmap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <div className="wm-sp-faq-list">
                {currentService.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`wm-sp-faq-item ${openFaq === idx ? 'open' : ''}`}
                  >
                    <div
                      className="wm-sp-faq-q"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    >
                      <span>
                        <span className="wm-sp-faq-badge">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        {faq.q}
                      </span>
                      <FaChevronDown className="wm-sp-faq-chevron" />
                    </div>
                    {openFaq === idx && <p className="wm-sp-faq-a">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

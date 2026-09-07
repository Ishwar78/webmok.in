import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaHeadset,
  FaQuestionCircle,
  FaLaptopCode,
  FaChevronDown,
  FaPhoneAlt
} from 'react-icons/fa';
import './ServiceDetail.css';

const API_BASE = 'http://localhost:5005/api';

const ServiceDetail = ({ onOpenCallMe, onOpenEnquiry }) => {
  const { serviceSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const [dbService, setDbService] = useState(null);

  // Embedded dictionary of fallback services (No external data.js required)
  const servicesData = {
    'word-press-development-services-company': {
      title: 'Wordpress Development Services',
      tag: 'Web Engineering',
      headline: 'Scalable, High-Speed & Custom WordPress Solutions in India',
      overview: 'Web Mok provides end-to-end WordPress web development, custom theme architectures, WooCommerce enterprise stores, and custom plugin integrations optimized for sub-second load times and top Google ranking.',
      features: [
        'Custom Theme Development with zero bloatware',
        'WooCommerce Store Setup with automated payment gateways',
        'Mobile-First Responsive Design for all modern smartphones',
        'Sub-second Core Web Vitals optimization and caching',
        'Bank-grade SSL and security hardening against malware',
        'Seamless CRM, WhatsApp, and API integrations'
      ],
      techStack: ['WordPress 6.x', 'PHP 8.2', 'MySQL', 'Tailwind/CSS3', 'WooCommerce', 'Redis'],
      timeline: '2 to 4 Weeks Delivery',
      faqs: [
        { q: 'Will my WordPress website be easy for my team to manage?', a: 'Yes! We build using intuitive drag-and-drop block editors so your team can effortlessly edit text, images, and add new blog posts without touching a line of code.' },
        { q: 'How fast will the WordPress website load?', a: 'We optimize every script, image, and query to ensure 90+ Google PageSpeed scores with typical desktop load times under 1.2 seconds.' }
      ]
    },
    'web-designing-development-services-company': {
      title: 'Web Design & Development Services',
      tag: 'Custom Web Apps',
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
      ]
    },
    'seo-services-company': {
      title: 'Search Engine Optimization (SEO) Services',
      tag: 'Organic Growth',
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
      ]
    },
    'ppc-services-company': {
      title: 'PPC & Google Ads Management',
      tag: 'Performance Marketing',
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
        { q: 'What daily ad budget is recommended to begin with?', a: 'We recommend starting with a minimum test budget of ₹1,000 to ₹3,000 per day depending on keyword competition in your industry.' }
      ]
    }
  };

  // Fetch dynamic service from backend API
  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceSlug) return;
      try {
        const res = await fetch(`${API_BASE}/services/${serviceSlug}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setDbService(json.data);
          }
        }
      } catch (err) {
        console.warn('Backend offline, using fallback service details:', err.message);
      }
    };
    fetchServiceData();
  }, [serviceSlug]);

  // Fallback dynamic generator for any service slug from the mega-menu
  const fallbackService = servicesData[serviceSlug] || {
    title: serviceSlug ? serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Digital Service',
    tag: 'Enterprise IT Solutions',
    headline: `Professional ${serviceSlug ? serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Services'} by Web Mok`,
    overview: `Web Mok Pvt. Ltd. delivers industry-leading ${serviceSlug ? serviceSlug.replace(/-/g, ' ') : 'digital'} solutions designed to accelerate corporate growth, improve customer acquisition, and scale technical infrastructure.`,
    features: [
      'Tailored corporate strategy and custom technical blueprint',
      'End-to-end execution managed by certified industry specialists',
      'Quality assurance, compliance checks, and cross-platform reliability',
      'Dedicated project manager with weekly progress synchronization',
      'Transparent milestone billing and verifiable deliverables',
      '24/7 post-deployment maintenance and customer support'
    ],
    techStack: ['Modern Frameworks', 'Cloud Infrastructure', 'API Integrations', 'Analytics & Reporting'],
    timeline: '2 to 6 Weeks Delivery',
    faqs: [
      { q: 'How do we get started with this service?', a: 'Simply submit an enquiry or request a 28-second callback. Our solution architect will schedule an initial requirements discovery call within 24 hours.' },
      { q: 'Do you provide a formal SLA and contract?', a: 'Yes, every engagement is backed by a legally binding Non-Disclosure Agreement (NDA) and detailed Service Level Agreement (SLA).' }
    ]
  };

  const currentService = dbService ? {
    title: dbService.title || fallbackService.title,
    tag: dbService.tag || dbService.category || fallbackService.tag,
    headline: dbService.headline || fallbackService.headline,
    overview: dbService.overview || dbService.desc || fallbackService.overview,
    features: Array.isArray(dbService.features) && dbService.features.length > 0 ? dbService.features : fallbackService.features,
    techStack: Array.isArray(dbService.techStack) && dbService.techStack.length > 0 ? dbService.techStack : fallbackService.techStack,
    timeline: dbService.timeline || fallbackService.timeline,
    faqs: Array.isArray(dbService.faqs) && dbService.faqs.length > 0 ? dbService.faqs : fallbackService.faqs
  } : fallbackService;

  return (
    <div className="wm-sdetail-root">
      {/* Hero Header */}
      <section className="wm-sdetail-hero">
        <div className="wm-sdetail-container">
          <div className="wm-sdetail-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{currentService.title}</span>
          </div>
          <span className="wm-sdetail-tag">{currentService.tag}</span>
          <h1 className="wm-sdetail-title">{currentService.title}</h1>
          <p className="wm-sdetail-headline">{currentService.headline}</p>
          <div className="wm-sdetail-hero-btns">
            <button className="wm-sd-btn-primary" onClick={onOpenEnquiry}>
              Get Free Custom Quote <FaArrowRight />
            </button>
            <button className="wm-sd-btn-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Sec
            </button>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="wm-sdetail-body-section">
        <div className="wm-sdetail-container wm-sdetail-layout">
          {/* Main Column */}
          <div className="wm-sdetail-main-col">
            <div className="wm-sdetail-card">
              <h2 className="wm-sdetail-block-title">Service Overview</h2>
              <p className="wm-sdetail-overview-text">{currentService.overview}</p>
            </div>

            <div className="wm-sdetail-card">
              <h2 className="wm-sdetail-block-title">Key Capabilities & Deliverables</h2>
              <div className="wm-sdetail-features-grid">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="wm-sdetail-feat-item">
                    <FaCheckCircle className="wm-sdetail-feat-chk" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="wm-sdetail-card">
              <h2 className="wm-sdetail-block-title">Technologies & Tooling</h2>
              <div className="wm-sdetail-tech-chips">
                {currentService.techStack.map((tech, idx) => (
                  <span key={idx} className="wm-tech-chip">{tech}</span>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="wm-sdetail-card">
              <h2 className="wm-sdetail-block-title">Frequently Asked Questions</h2>
              <div className="wm-sdetail-faq-list">
                {currentService.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`wm-sdetail-faq-item ${openFaq === idx ? 'open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    <div className="wm-sdetail-faq-q">
                      <span>{faq.q}</span>
                      <FaChevronDown className="wm-faq-chevron" />
                    </div>
                    {openFaq === idx && <div className="wm-sdetail-faq-a">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="wm-sdetail-sidebar">
            <div className="wm-sdetail-side-card wm-side-cta">
              <h3>Ready to Launch?</h3>
              <p>Discuss your project specifications with our lead solution architect.</p>
              <div className="wm-side-meta-row">
                <span>Estimated Timeline:</span>
                <strong>{currentService.timeline}</strong>
              </div>
              <button className="wm-side-cta-btn" onClick={onOpenEnquiry}>
                Start Project Now
              </button>
            </div>

            <div className="wm-sdetail-side-card">
              <h4>Why Web Mok?</h4>
              <ul className="wm-side-benefits">
                <li><FaShieldAlt className="wm-sicon" /> 100% Bug-Free Guarantee</li>
                <li><FaRocket className="wm-sicon" /> Blazing Fast Delivery</li>
                <li><FaHeadset className="wm-sicon" /> 24/7 Priority Tech Support</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

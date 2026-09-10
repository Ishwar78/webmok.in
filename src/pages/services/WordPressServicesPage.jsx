import React, { useState } from 'react';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaChevronDown,
  FaCheckCircle,
  FaLayerGroup,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaLaptopCode,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaBullhorn,
  FaTools,
  FaGlobe,
  FaShoppingBag,
  FaVideo,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './WordPressServicesPage.css';

const WordPressServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "Of WordPress engineering mastery"
  },
  {
    "num": "450+",
    "label": "Custom websites delivered worldwide"
  },
  {
    "num": "<1.2s",
    "label": "Average Core Web Vitals page load speed"
  },
  {
    "num": "100%",
    "label": "Clean code & custom ACF development"
  }
];

  const caseStudies = [
  {
    "cat": "B2B Manufacturing",
    "metric": "0.8s",
    "sub": "Page Load Speed · +280% Inquiries",
    "name": "JBM Engineering Web",
    "desc": "Custom WordPress architecture replacing slow legacy site, leading to 95+ Google PageSpeed score."
  },
  {
    "cat": "D2C E-Commerce",
    "metric": "4.8×",
    "sub": "Checkout Conversion · 12,000 Orders",
    "name": "AyurVeda Organic Store",
    "desc": "High-speed WooCommerce store with 1-click checkout and automated shipping API integration."
  },
  {
    "cat": "Corporate UAE",
    "metric": "+340%",
    "sub": "Mobile Lead Conversions",
    "name": "RadiantBiz Portal",
    "desc": "Bespoke corporate portal with interactive licensing cost calculators and instant WhatsApp triggers."
  },
  {
    "cat": "Healthcare & Hospital",
    "metric": "98%",
    "sub": "PageSpeed Score · 2,400 Bookings",
    "name": "Metro Healthcare Group",
    "desc": "Custom medical appointment booking portal integrated with hospital management software."
  },
  {
    "cat": "Real Estate NCR",
    "metric": "3.2×",
    "sub": "Brochure Download Rate",
    "name": "Grandview Realty Portal",
    "desc": "High-end interactive property showcase with dynamic floor-plan filters and instant lead routing."
  },
  {
    "cat": "EdTech Academy",
    "metric": "15,000+",
    "sub": "Active Student Registrations",
    "name": "CareerPro Learning LMS",
    "desc": "Scalable LearnDash WordPress LMS portal with automated quiz grading and payment gateways."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "Custom Theme Development",
      desc: "Tailored designs coded from scratch without heavy page-builder drag."
    },
    {
      badge: '02',
      icon: <FaRocket />,
      title: "WooCommerce Storefronts",
      desc: "High-volume e-commerce architectures with frictionless checkouts."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Security Hardening & WAF",
      desc: "SSL, brute-force shielding, and zero-day patch management."
    },
    {
      badge: '04',
      icon: <FaCogs />,
      title: "Custom Plugin Engineering",
      desc: "Bespoke functionality written natively in PHP and REST endpoints."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "Speed & Core Web Vitals",
      desc: "Image WebP optimization, critical CSS, and server-side Redis caching."
    },
    {
      badge: '06',
      icon: <FaLayerGroup />,
      title: "API & CRM Integrations",
      desc: "Seamless synchronization with ERPs, CRMs, and payment gateways."
    }
  ];

  const industries = [
  "Electronics & Technology",
  "Real Estate & Infrastructure",
  "E-Commerce & D2C Brands",
  "Manufacturing & Industrial",
  "Healthcare & Medical Clinics",
  "Education, Coaching & EdTech",
  "Automotive & EV Mobility",
  "Financial Services & Fintech",
  "Hospitality & Tourism",
  "Home Decor & Construction",
  "Food & Beverage (FMCG)",
  "B2B Corporate Services"
];

  const faqs = [
  {
    "q": "Will our team be able to easily edit text and images?",
    "a": "Yes! We build using intuitive native Gutenberg block editors so anyone on your team can edit content, images, and publish new pages without touching code."
  },
  {
    "q": "How fast will the website load on mobile devices?",
    "a": "We optimize every script, image, and database query to achieve sub-1.5 second load times and 90+ scores on Google PageSpeed Insights."
  },
  {
    "q": "Do you provide maintenance and security updates after launch?",
    "a": "Yes, every project includes 30 days of complimentary post-launch support, and we offer affordable ongoing maintenance retainers."
  },
  {
    "q": "Can you migrate our existing site without losing SEO rankings?",
    "a": "Yes! We preserve all URL structures, meta tags, and 301 redirects to safeguard your existing Google rankings and traffic."
  },
  {
    "q": "Is the website optimized for mobile phones and tablets?",
    "a": "100% yes. Every design is built mobile-first and tested rigorously across iOS and Android devices."
  },
  {
    "q": "Who owns the source code and design files after completion?",
    "a": "You maintain 100% ownership of all source code, design files, database assets, and licenses with zero vendor lock-in."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root wordpressservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>WordPress Development</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Enterprise Web Engineering · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Custom <span>WordPress Development</span> Company
          </h1>
          <p className="wm-sp-hero-lead">
            Build lightning-fast, custom-engineered WordPress websites with sub-second load times, clean code, advanced WooCommerce capabilities, and enterprise-grade security hardening.
          </p>
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
            {stats.map((st, i) => (
              <div key={i} className="wm-seost__i">
                <p className="wm-seost__n">{st.num}</p>
                <p className="wm-seost__l">{st.label}</p>
              </div>
            ))}
          </div>
        
            </div>
            <div className="wm-sp-hero-col-right">
              <HeroLeadForm
                pageName="WordPress Development"
                source="WordPress Development Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rating Scorecard Badge */}
      <div className="wm-dsm-rating-wrap">
        <div className="wm-sp-container">
          <div className="wm-dsm-rating">
            <div className="wm-dsm-rating__score">
              <span className="wm-dsm-rating__num">4.9</span>
              <span className="wm-dsm-rating__out">/5</span>
            </div>
            <div>
              <div className="wm-dsm-rating__stars" aria-hidden="true">★★★★★</div>
              <p className="wm-dsm-rating__meta">
                Rated <strong>4.9 out of 5</strong> from <strong>350+ verified client reviews</strong> across Clutch, Google, AmbitionBox, and G2.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Engineered for Blazing Speed, Bulletproof Security & High Conversion</h2>
              <p className="wm-sp-paragraph">
                Off-the-shelf bloated WordPress themes drag your website speed down and create security vulnerabilities. At WebMok, we engineer bespoke WordPress platforms from scratch utilizing Advanced Custom Fields (ACF), optimized MySQL schemas, and modern asset bundling.
              </p>
              <p className="wm-sp-paragraph">
                Whether you need a multi-lingual corporate portal, a high-volume WooCommerce storefront, or headless WordPress powering a React frontend, our senior engineers deliver clean, modular code that scales effortlessly.
              </p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Execution Framework</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Delivery Layers</h2>
              <p className="wm-dsm-stack__lede">
                Sustainable digital excellence requires a robust architectural foundation, followed by agile engineering and continuous conversion optimization.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Custom Theme & Architecture</h3>
                  <span className="wm-dsm-layer__role">Zero Bloatware & ACF Blocks</span>
                </div>
                <p className="wm-dsm-layer__desc">Bespoke theme architecture built strictly with semantic HTML5, modern SCSS, and native WordPress Gutenberg block components.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Tailored Gutenberg block components for seamless non-technical editing</li>
                  <li>Sub-second Core Web Vitals optimization and database caching</li>
                  <li>Mobile-first responsive fluid grid layout for all device viewports</li>
                  <li>Clean database architecture with zero unused plugin overhead</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">WooCommerce & API Integrations</h3>
                  <span className="wm-dsm-layer__role">High-Volume Transactions & CRM</span>
                </div>
                <p className="wm-dsm-layer__desc">Empowering e-commerce and lead-gen workflows with payment gateways, CRM routing, and third-party REST API syncs.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Payment gateway integrations (Razorpay, Stripe, CCAvenue, Paytm)</li>
                  <li>Real-time CRM sync (HubSpot, Zoho, Salesforce, LeadSquared)</li>
                  <li>Automated WhatsApp order notifications and cart recovery flows</li>
                  <li>Custom plugin development tailored to proprietary business logic</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Security, Speed & Maintenance</h3>
                  <span className="wm-dsm-layer__role">Bank-Grade Hardening & CDN</span>
                </div>
                <p className="wm-dsm-layer__desc">Bank-grade security shielding, automated backups, web application firewalls (WAF), and proactive uptime monitoring.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Enterprise security hardening against brute-force & zero-day exploits</li>
                  <li>Cloudflare CDN, server-side Redis caching & WebP image pipeline</li>
                  <li>Automated daily cloud backups & scheduled database indexing</li>
                  <li>24/7 uptime monitoring & priority SLA technical support</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
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
                Every figure below represents documented performance lifts and commercial deliverables from active client engagements:
              </p>
              <div className="wm-seocs__grid">
                {caseStudies.map((cs, idx) => (
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
              <h2 className="wm-sp-card-title">Comprehensive Capabilities & Deliverables</h2>
              <p className="wm-sp-paragraph">
                Our specialized team provides end-to-end execution tailored precisely to your commercial objectives:
              </p>
              <div className="wm-sp-disciplines-grid">
                {disciplines.map((item, idx) => (
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
              <h2 className="wm-sp-card-title">Solutions for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                WebMok formulates tailored execution frameworks optimized for distinct commercial sectors:
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
                  
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Starter Website</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">5-8 Pages Business Site</p>
                    <span className="wm-seopk__kw">Core WP Engine</span>
                    <ul className="wm-seopk__l">
                      <li>Custom responsive design</li>
                      <li>5-8 unique page templates</li>
                      <li>Contact forms & WhatsApp integration</li>
                      <li>Basic on-page SEO setup</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Starter &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Growth Custom Portal</p>
                    <div className="wm-seopk__amt">₹65,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">10-20 Pages or Catalog</p>
                    <span className="wm-seopk__kw">Custom ACF Blocks</span>
                    <ul className="wm-seopk__l">
                      <li>100% custom Gutenberg blocks</li>
                      <li>WooCommerce product catalog or booking engine</li>
                      <li>Speed optimization (90+ PageSpeed)</li>
                      <li>Advanced CRM & lead capture routing</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Growth &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Scale</p>
                    <div className="wm-seopk__amt">₹1.25 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Large Multi-Category Portal</p>
                    <span className="wm-seopk__kw">Full Custom Stack</span>
                    <ul className="wm-seopk__l">
                      <li>Custom REST API endpoints & CRM integration</li>
                      <li>High-volume WooCommerce scaling</li>
                      <li>Multi-lingual or multi-currency setup</li>
                      <li>Comprehensive security hardening & SLA</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Dedicated Retainer</p>
                    <div className="wm-seopk__amt">₹40,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Dev & Maintenance</p>
                    <span className="wm-seopk__kw">Dedicated WP Developer</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated senior WordPress engineer</li>
                      <li>Unlimited weekly updates & feature additions</li>
                      <li>Daily backups & 24/7 security monitoring</li>
                      <li>Priority emergency technical support</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Dedicated &rarr;
                    </button>
                  </div>
                </div>

                <div className="wm-seopk__inc">
                  <h3>Included in Every Plan</h3>
                  <div className="wm-seopk__incg">
                    <span>Dedicated Project Manager</span>
                    <span>Direct WhatsApp & Slack Channel</span>
                    <span>Transparent Sprint Tracking</span>
                    <span>Quality Assurance & Testing</span>
                    <span>Complete Source Code Ownership</span>
                    <span>Non-Disclosure Agreement (NDA)</span>
                    <span>30-Day Post-Launch Support</span>
                    <span>Direct Solution Architect Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>See What Is Dragging Your WordPress Site Down</h2>
                  <p>
                    Submit your WordPress website URL to evaluate plugin bloat, database query bottlenecks, Core Web Vitals, and security vulnerabilities.
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
                      Get Free Analysis &rarr;
                    </button>
                  </form>
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Core Web Vitals & Speed</b> — Evaluation of Largest Contentful Paint (LCP) and Cumulative Layout Shift</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Plugin & Security Audit</b> — Identification of vulnerable scripts, outdated plugins, and slow queries</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Mobile UX & Conversion</b> — Analysis of mobile checkout friction and lead form completion rates</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Actionable 48-Hour Roadmap</b> — Step-by-step technical remediation plan to reach 90+ PageSpeed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <div className="wm-sp-faq-list">
                {faqs.map((faq, idx) => (
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

export default WordPressServicesPage;

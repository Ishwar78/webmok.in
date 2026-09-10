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
import './MarketplaceServicesPage.css';

const MarketplaceServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Of multi-vendor platform engineering"
  },
  {
    "num": "80+",
    "label": "Custom marketplaces built & scaled"
  },
  {
    "num": "₹100Cr+",
    "label": "Gross transaction value processed"
  },
  {
    "num": "100%",
    "label": "Automated vendor commission payouts"
  }
];

  const caseStudies = [
  {
    "cat": "B2B Wholesale Marketplace",
    "metric": "₹42Cr",
    "sub": "Annual GMV · 450 Verified Vendors",
    "name": "IndiaTradeHub B2B",
    "desc": "Custom B2B manufacturing marketplace with RFQ bidding, bulk discount tiers, and automated GST billing."
  },
  {
    "cat": "Hyperlocal Grocery Network",
    "metric": "18,000",
    "sub": "Daily Deliveries Across Delhi NCR",
    "name": "NeighbourCart Quick-Com",
    "desc": "Hyperlocal vendor dispatch system connecting 180 neighborhood stores with 20-minute delivery routing."
  },
  {
    "cat": "Rental Marketplace",
    "metric": "4.8×",
    "sub": "Booking Growth in 6 Months",
    "name": "EquipRent Heavy Machinery",
    "desc": "Equipment rental marketplace with security deposit escrow and digital lease agreements."
  },
  {
    "cat": "Fashion Designer Marketplace",
    "metric": "250+",
    "sub": "Independent Fashion Boutiques",
    "name": "CoutureCollective India",
    "desc": "Luxury multi-vendor fashion portal with custom commission tiers and automated payouts."
  },
  {
    "cat": "Home Services Marketplace",
    "metric": "85,000+",
    "sub": "Completed Service Jobs",
    "name": "ServicePro Urban App",
    "desc": "On-demand service booking platform with real-time technician GPS tracking and instant reviews."
  },
  {
    "cat": "Medical Equipment Exchange",
    "metric": "₹18Cr",
    "sub": "Verified Hospital Machinery Traded",
    "name": "MedVendor B2B Portal",
    "desc": "Regulated medical equipment marketplace with certified technician inspection reports."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaShoppingBag />,
      title: "Multi-Vendor Storefronts",
      desc: "Single unified shopping cart supporting products from multiple independent vendors."
    },
    {
      badge: '02',
      icon: <FaLaptopCode />,
      title: "Vendor Management Portals",
      desc: "Dedicated vendor interfaces for product listing, order management, and earnings."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Automated Split Payments",
      desc: "Instant commission deduction and automated vendor payouts via Razorpay Route."
    },
    {
      badge: '04',
      icon: <FaTools />,
      title: "Hyperlocal Geofenced Routing",
      desc: "Pinpoint GPS matching delivering products from the closest vendor warehouse."
    },
    {
      badge: '05',
      icon: <FaCogs />,
      title: "Multi-Vendor Logistics Sync",
      desc: "Automated courier pickup assignments across independent seller locations."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "Operator Business Intelligence",
      desc: "Comprehensive financial reporting, GMV metrics, and vendor performance rankings."
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
    "q": "How do split payments and commissions work on the marketplace?",
    "a": "When a customer checks out, the payment gateway automatically routes your platform commission to your account and splits the balance directly into the vendor verified bank account."
  },
  {
    "q": "Can a customer purchase items from multiple vendors in a single checkout?",
    "a": "Yes! We engineer a unified cart system that allows buyers to checkout items from multiple vendors in one transaction, automatically splitting orders and shipping labels."
  },
  {
    "q": "Can vendors manage their own products, pricing, and orders?",
    "a": "Yes. Each vendor receives access to a secure, branded vendor portal where they can upload catalogs, adjust prices, print shipping labels, and track payouts."
  },
  {
    "q": "How do you handle returns and customer refunds?",
    "a": "We build an automated return workflow where refunds reverse the payout from the vendor balance before releasing funds back to the customer."
  },
  {
    "q": "What technology stack do you use for high-scale marketplaces?",
    "a": "We build with React.js / Next.js frontends, Node.js or Go microservices, PostgreSQL / MongoDB databases, and Redis caching."
  },
  {
    "q": "Who owns the marketplace intellectual property and code?",
    "a": "You maintain 100% full legal ownership of the source code, databases, design files, and architecture with zero ongoing royalty fees."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root marketplaceservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Custom Marketplace</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Multi-Vendor E-Commerce Platforms · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Custom <span>Marketplace Development</span> Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Build high-scale multi-vendor marketplaces like Amazon, Airbnb, and Urban Company with automated vendor commission splits, escrow payments, and dedicated vendor portals.
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
                pageName="Custom Marketplace"
                source="Custom Marketplace Hero Section"
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
              <h2 className="wm-sp-card-title">Architecting the Next-Generation Multi-Sided Platforms</h2>
              <p className="wm-sp-paragraph">
                Multi-vendor marketplaces have complex multi-sided dynamics: onboarding independent sellers, managing split payments, tracking individual vendor inventory, and calculating dynamic platform commissions.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we build high-concurrency custom marketplaces powered by modern React frontend architectures, scalable Node.js microservices, and automated payment split gateways (Razorpay Route, Stripe Connect).
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
                  <h3 className="wm-dsm-layer__name">Multi-Role Architecture & Portals</h3>
                  <span className="wm-dsm-layer__role">Buyer, Vendor & Super-Admin</span>
                </div>
                <p className="wm-dsm-layer__desc">Three distinct tailored portal interfaces ensuring frictionless interactions for buyers, vendors, and marketplace operators.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Buyer Storefront with multi-vendor cart and unified checkout</li>
                  <li>Vendor Self-Service Portal for catalog, inventory & order dispatch</li>
                  <li>Super-Admin Central Dashboard for commission and payout control</li>
                  <li>Vendor KYC verification and automated onboarding workflows</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Split Payments & Escrow Payouts</h3>
                  <span className="wm-dsm-layer__role">Automated Commission Engine</span>
                </div>
                <p className="wm-dsm-layer__desc">Automatic splitting of order funds between platform commission and vendor bank accounts.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Stripe Connect & Razorpay Route automated payout splits</li>
                  <li>Escrow holding periods until delivery confirmation and return window expires</li>
                  <li>Multi-vendor tax calculation, GST invoicing & TDS compliance</li>
                  <li>Automated vendor payout statements and financial reporting</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Real-Time Inventory & Geofencing</h3>
                  <span className="wm-dsm-layer__role">Hyperlocal Delivery & Scaling</span>
                </div>
                <p className="wm-dsm-layer__desc">High-concurrency infrastructure handling real-time multi-warehouse stock reservation and localized vendor matching.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Real-time inventory locks preventing out-of-stock orders</li>
                  <li>Geofenced vendor discovery matching buyers with closest local sellers</li>
                  <li>Integrated multi-vendor courier aggregation and return routing</li>
                  <li>Auto-scaling cloud infrastructure ready for massive flash sales</li>
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
                    
                    <p className="wm-seopk__nm">Core Marketplace MVP</p>
                    <div className="wm-seopk__amt">₹1.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Early-Stage Multi-Vendor Models</p>
                    <span className="wm-seopk__kw">Core Marketplace</span>
                    <ul className="wm-seopk__l">
                      <li>Buyer storefront + Vendor portal + Admin dashboard</li>
                      <li>Razorpay Route / Stripe Connect automated payouts</li>
                      <li>Product catalog & vendor order fulfillment</li>
                      <li>Standard QA testing & deployment</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Core &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Commercial Scale Platform</p>
                    <div className="wm-seopk__amt">₹2.85 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">High-Growth Regional Marketplaces</p>
                    <span className="wm-seopk__kw">Full Custom Stack</span>
                    <ul className="wm-seopk__l">
                      <li>Hyperlocal geofencing & distance-based vendor search</li>
                      <li>Multi-tier commission rules & escrow payout buffers</li>
                      <li>Real-time WebSocket notifications & order tracking</li>
                      <li>Comprehensive load testing up to 5,000 concurrent users</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Commercial &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Multi-Sided Network</p>
                    <div className="wm-seopk__amt">₹4.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Large Scale / National Networks</p>
                    <span className="wm-seopk__kw">Full Enterprise Ecosystem</span>
                    <ul className="wm-seopk__l">
                      <li>Buyer Web/App + Vendor Web/App + Admin ERP Suite</li>
                      <li>Custom RFQ bidding & wholesale credit terms engine</li>
                      <li>Automated GST TDS compliance & multi-warehouse inventory</li>
                      <li>Dedicated project manager and priority 24/7 SLA</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Marketplace DevOps Retainer</p>
                    <div className="wm-seopk__amt">₹50,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Optimization</p>
                    <span className="wm-seopk__kw">Dedicated Platform Squad</span>
                    <ul className="wm-seopk__l">
                      <li>Continuous feature updates & vendor portal enhancements</li>
                      <li>Database indexing & payment gateway reconciliation</li>
                      <li>Cloud server auto-scaling & 24/7 uptime monitoring</li>
                      <li>Priority technical support for vendor operations</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Marketplace &rarr;
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
                  <h2>Request a Marketplace Architecture Consultation</h2>
                  <p>
                    Connect with our Enterprise Marketplace Architect to review vendor onboarding workflows, commission structures, and database concurrency requirements.
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
                    <span><b>Platform Architecture Review</b> — Evaluation of single vs multi-database multi-tenancy models</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Payment Escrow & Compliance</b> — Verification of Indian banking, RBI escrow, and marketplace TDS guidelines</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Vendor Logistics Feasibility</b> — Strategies for multi-vendor pickup, consolidated delivery, and return routing</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Milestone Execution Roadmap</b> — Phased development plan from MVP launch to national scaling</span>
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

export default MarketplaceServicesPage;

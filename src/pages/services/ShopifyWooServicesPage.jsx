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
import './ShopifyWooServicesPage.css';

const ShopifyWooServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Of Shopify & WooCommerce expertise"
  },
  {
    "num": "300+",
    "label": "Profitable online storefronts launched"
  },
  {
    "num": "₹35Cr+",
    "label": "Gross sales processed annually"
  },
  {
    "num": "<1.5s",
    "label": "Average mobile storefront load time"
  }
];

  const caseStudies = [
  {
    "cat": "Fashion & Apparel",
    "metric": "5.2×",
    "sub": "Monthly Revenue Growth",
    "name": "UrbanAttire D2C",
    "desc": "Shopify 2.0 custom theme redesign with dynamic size recommendation quiz and 1-click checkout."
  },
  {
    "cat": "Organic Foods & Honey",
    "metric": "₹85 Lakh",
    "sub": "Festival Sale Revenue in 7 Days",
    "name": "NaturePure Organics",
    "desc": "High-speed WooCommerce store handling 12,000 flash sale orders with zero checkout failure."
  },
  {
    "cat": "Luxury Cosmetics",
    "metric": "-42%",
    "sub": "Cart Abandonment Drop",
    "name": "BellaRosa Beauty Store",
    "desc": "Automated WhatsApp abandoned cart reminder sequences with personalized discount codes."
  },
  {
    "cat": "Electronics & Audio",
    "metric": "3.4×",
    "sub": "Average Order Value Lift",
    "name": "AudioPro Sound Store",
    "desc": "Smart bundle-and-save product accessories up-sells integrated directly into product pages."
  },
  {
    "cat": "Home Decor Studio",
    "metric": "+280%",
    "sub": "Mobile Conversion Rate",
    "name": "LuxeLiving Furnishings",
    "desc": "Mobile-first Shopify redesign with 360-degree product image rotators and instant WhatsApp ordering."
  },
  {
    "cat": "Footwear Brand",
    "metric": "25,000+",
    "sub": "Orders Processed in Month 1",
    "name": "StridePro Footwear",
    "desc": "Custom Shopify Plus store with automated Shiprocket logistics and real-time SMS dispatch alerts."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaShoppingBag />,
      title: "Custom Shopify 2.0 Themes",
      desc: "100% custom Liquid themes built for extreme speed and flexible section editing."
    },
    {
      badge: '02',
      icon: <FaLaptopCode />,
      title: "WooCommerce Custom Build",
      desc: "Full-ownership e-commerce stores with zero ongoing percentage transaction fees."
    },
    {
      badge: '03',
      icon: <FaRocket />,
      title: "1-Click Checkout & UPI",
      desc: "Frictionless checkouts supporting Razorpay, Cashfree, Paytm, and Stripe."
    },
    {
      badge: '04',
      icon: <FaCogs />,
      title: "Logistics & Courier Sync",
      desc: "Automated AWB generation, shipping labels, and real-time tracking sync."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "WhatsApp Cart Recovery",
      desc: "Automated abandoned cart workflows recovering lost customer revenue."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "E-Commerce Analytics & CAPI",
      desc: "Server-side conversion tracking for accurate ROAS attribution."
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
    "q": "Should I choose Shopify or WooCommerce for my online store?",
    "a": "Shopify is ideal for fast launch and hassle-free cloud hosting. WooCommerce is best if you want 100% source code ownership, zero monthly transaction percentage fees, and custom business logic."
  },
  {
    "q": "Can you migrate our products and customer data from our old website?",
    "a": "Yes! We seamlessly migrate all product catalogs, customer history, order records, and maintain SEO URL redirects."
  },
  {
    "q": "Which payment gateways can you integrate?",
    "a": "We configure Razorpay, Paytm, Cashfree, CCAvenue, Stripe, and direct UPI intent gateways with zero hassle."
  },
  {
    "q": "How is automated shipping and tracking managed?",
    "a": "We integrate logistics aggregators like Shiprocket, Delhivery, and Pickrr so shipping labels, AWBs, and tracking links generate automatically."
  },
  {
    "q": "Can we edit banners, discounts, and products without coding?",
    "a": "100% yes. We build intuitive drag-and-drop section editors so anyone on your team can launch sales in minutes."
  },
  {
    "q": "Do you help recover abandoned shopping carts?",
    "a": "Yes! We set up automated WhatsApp and email reminder sequences that recover up to 25% of abandoned carts."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root shopifywooservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Shopify & WooCommerce</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> D2C Commerce Specialists · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Expert <span>Shopify & WooCommerce</span> Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Build high-converting, high-speed Shopify and WooCommerce storefronts with custom Liquid themes, 1-click checkouts, and seamless payment and courier integrations.
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
                pageName="Shopify & WooCommerce"
                source="Shopify & WooCommerce Hero Section"
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
              <h2 className="wm-sp-card-title">Maximize Average Order Value & Eliminate Cart Abandonment</h2>
              <p className="wm-sp-paragraph">
                Choosing the right e-commerce platform and optimizing its checkout architecture is the single most critical decision for a digital retail brand. Slow load times, complicated checkouts, and failed payment gateways cost retailers millions in lost sales.
              </p>
              <p className="wm-sp-paragraph">
                WebMok engineers bespoke Shopify Plus and WooCommerce stores featuring customized product builders, 1-click UPI payments, automated shipping label generation, and automated WhatsApp cart recovery.
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
                  <h3 className="wm-dsm-layer__name">Custom Theme Engineering</h3>
                  <span className="wm-dsm-layer__role">Liquid & ACF Block Architecture</span>
                </div>
                <p className="wm-dsm-layer__desc">Bespoke storefront design coded from scratch with zero template bloat for maximum mobile speed.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Custom Shopify Liquid and WooCommerce theme code</li>
                  <li>Sub-second product detail page (PDP) load speeds</li>
                  <li>Mobile-first responsive thumb-friendly navigation</li>
                  <li>Brand-aligned typography, colors, and visual micro-interactions</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Checkout & Gateway Acceleration</h3>
                  <span className="wm-dsm-layer__role">1-Click UPI, COD & Cart Upsells</span>
                </div>
                <p className="wm-dsm-layer__desc">Frictionless checkout workflows configured for maximum transaction completion rates.</p>
                <ul className="wm-dsm-layer__list">
                  <li>1-Click checkout supporting UPI, cards, netbanking & EMI</li>
                  <li>Automated OTP login and PIN code deliverability checker</li>
                  <li>Pre-purchase and post-purchase one-click upsells</li>
                  <li>Automated Cash on Delivery (COD) verification via OTP</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Logistics & Automated Recovery</h3>
                  <span className="wm-dsm-layer__role">Shiprocket & WhatsApp Automation</span>
                </div>
                <p className="wm-dsm-layer__desc">Turnkey courier synchronization and automated multi-channel abandoned cart recovery sequences.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Seamless API sync with Shiprocket, Delhivery, and BlueDart</li>
                  <li>Automated WhatsApp cart abandonment recovery with discount triggers</li>
                  <li>Real-time multi-channel inventory and order status tracking</li>
                  <li>GA4 e-commerce purchase tracking and Facebook CAPI server sync</li>
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
                    
                    <p className="wm-seopk__nm">Shopify Starter</p>
                    <div className="wm-seopk__amt">₹40,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">New D2C Store Launches</p>
                    <span className="wm-seopk__kw">Shopify Store</span>
                    <ul className="wm-seopk__l">
                      <li>Custom Shopify 2.0 theme setup</li>
                      <li>Up to 50 products catalog configuration</li>
                      <li>Payment gateway & courier API integration</li>
                      <li>Basic abandoned cart email sequence</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Shopify &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">WooCommerce Custom</p>
                    <div className="wm-seopk__amt">₹70,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Scaling Brand Ownership</p>
                    <span className="wm-seopk__kw">Zero Platform Fees</span>
                    <ul className="wm-seopk__l">
                      <li>100% custom UI design & ACF product schema</li>
                      <li>Advanced product filters, bundles & reviews</li>
                      <li>1-Click UPI checkout & WhatsApp automation</li>
                      <li>90+ Mobile Google PageSpeed guarantee</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose WooCommerce &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Shopify Plus / Scale</p>
                    <div className="wm-seopk__amt">₹1.35 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">High-Volume Enterprise Retail</p>
                    <span className="wm-seopk__kw">Shopify Plus Custom</span>
                    <ul className="wm-seopk__l">
                      <li>Custom Liquid sections & app extensions</li>
                      <li>Multi-currency, international tax & logistics</li>
                      <li>Custom ERP & inventory sync middleware</li>
                      <li>30-Day continuous CRO conversion tuning</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Shopify &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Store AMC & Growth Retainer</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Optimization</p>
                    <span className="wm-seopk__kw">Dedicated E-Com Dev</span>
                    <ul className="wm-seopk__l">
                      <li>Continuous conversion rate testing & speed tuning</li>
                      <li>Promotional banners, flash sale setups & coupons</li>
                      <li>New payment methods & plugin updates</li>
                      <li>24/7 priority emergency support during sales</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Store &rarr;
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
                  <h2>Audit Your Store for Conversion & Checkout Leaks</h2>
                  <p>
                    Submit your store URL to receive a comprehensive 25-point e-commerce audit examining mobile speed, cart friction, and payment drop-offs.
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
                    <span><b>Mobile Checkout Speed</b> — Evaluate product page and cart loading times on real mobile networks</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Payment Gateway Friction</b> — Inspect OTP verification, UPI flow, and payment failure rates</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>App & Script Bloat</b> — Identify unused third-party plugins dragging your site speed down</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Revenue Scaling Action Plan</b> — Prioritized recommendations to boost AOV and decrease cart abandonment</span>
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

export default ShopifyWooServicesPage;

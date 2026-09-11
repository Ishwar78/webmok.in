import React, { useState } from 'react';
import DiagnosticLeadForm from '../../components/DiagnosticLeadForm';
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
import './EcommerceServicesPage.css';

const EcommerceServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Of e-commerce platform engineering"
  },
  {
    "num": "250+",
    "label": "Profitable online storefronts deployed"
  },
  {
    "num": "₹50Cr+",
    "label": "Gross Merchandise Value (GMV) processed"
  },
  {
    "num": "3.2s",
    "label": "Average checkout completion time"
  }
];

  const caseStudies = [
  {
    "cat": "D2C Organic Food",
    "metric": "8.5×",
    "sub": "Monthly GMV Expansion",
    "name": "Farmer Fresh Organics",
    "desc": "High-speed e-commerce storefront with subscription delivery models and 1-click UPI checkout."
  },
  {
    "cat": "Fashion & Apparel",
    "metric": "-35%",
    "sub": "Cart Abandonment Drop",
    "name": "Urban Vogue Studio",
    "desc": "Mobile-first Shopify Plus redesign with automated WhatsApp cart recovery and size recommendation."
  },
  {
    "cat": "Electronics & Gadgets",
    "metric": "₹1.8Cr",
    "sub": "First Month Flash Sale Revenue",
    "name": "NexGen Audio Devices",
    "desc": "Custom high-concurrency headless store handling 4,500 simultaneous checkout transactions."
  },
  {
    "cat": "Beauty & Cosmetics",
    "metric": "4.2×",
    "sub": "Average Order Value Lift",
    "name": "GlowSkin Organics",
    "desc": "Dynamic bundle-and-save builder and customized shade finder quiz integration."
  },
  {
    "cat": "Luxury Jewelry",
    "metric": "+260%",
    "sub": "International Export Sales",
    "name": "Aura Jewels Mumbai",
    "desc": "Multi-currency and automated duties/taxes calculation for US and Dubai shoppers."
  },
  {
    "cat": "Industrial Supplies",
    "metric": "₹3.4Cr",
    "sub": "B2B Bulk Wholesale Orders",
    "name": "ToolMaster Industrial",
    "desc": "B2B wholesale portal with customer-tiered pricing, bulk CSV ordering, and GST invoicing."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "Shopify & Shopify Plus",
      desc: "Turnkey customized stores with high-converting Liquid themes."
    },
    {
      badge: '02',
      icon: <FaRocket />,
      title: "WooCommerce Custom Build",
      desc: "Self-hosted full-ownership e-commerce stores with zero ongoing GMV fees."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "1-Click Checkout & UPI",
      desc: "Frictionless checkout flows maximizing completed order rates."
    },
    {
      badge: '04',
      icon: <FaCogs />,
      title: "Logistics & Courier Sync",
      desc: "Real-time tracking and automated shipping label generation."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "Abandoned Cart Recovery",
      desc: "Automated SMS, email, and WhatsApp reminder sequences."
    },
    {
      badge: '06',
      icon: <FaLayerGroup />,
      title: "Custom Headless Commerce",
      desc: "Next.js + GraphQL headless architectures for extreme performance."
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
    "q": "Which platform is best for my brand: Shopify or WooCommerce?",
    "a": "Shopify is ideal for brands wanting an all-in-one hosted solution with rapid launch times. WooCommerce is best for businesses seeking 100% source code ownership, zero monthly transaction percentage fees, and custom business logic."
  },
  {
    "q": "Can you integrate Indian payment gateways like UPI, Razorpay, and Paytm?",
    "a": "Yes! We configure all major Indian and international payment gateways with support for UPI QR codes, credit/debit cards, netbanking, EMI, and COD."
  },
  {
    "q": "How do you handle automated shipping and logistics?",
    "a": "We integrate leading logistics aggregators like Shiprocket, Delhivery, and Pickrr so shipping labels, AWBs, and tracking links are generated automatically upon order placement."
  },
  {
    "q": "Will our e-commerce store handle sudden traffic surges during sales?",
    "a": "Yes. We architect storefronts with CDN edge caching, optimized database queries, and scalable cloud servers to easily handle thousands of concurrent transactions."
  },
  {
    "q": "Do you set up abandoned cart recovery workflows?",
    "a": "Yes! We implement automated multi-channel sequences across WhatsApp, SMS, and email to recover up to 25% of lost cart abandonments."
  },
  {
    "q": "Can we upload and update products ourselves?",
    "a": "Absolutely. You receive access to an intuitive admin dashboard where adding new products, updating prices, and managing discounts takes less than 60 seconds."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root ecommerceservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>E-Commerce Development</span>
          </div>
         
          <h1 className="wm-sp-hero-title">
            Scalable <span>E-Commerce Website</span> Development Agency
          </h1>

          {/* Rating Scorecard Badge in Hero */}
          <div className="wm-dsm-rating-hero">
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

          
          {/* <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free Custom Quote <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Seconds
            </button>
          </div> */}

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
                pageName="E-Commerce Development"
                source="E-Commerce Development Hero Section"
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
              <h2 className="wm-sp-card-title">Turn Casual Browsers into Loyal Repeat Customers</h2>
              <p className="wm-sp-paragraph">
                E-commerce success hinges on checkout speed, frictionless product search, and robust inventory scalability. At WebMok, we build high-conversion storefronts designed to minimize cart abandonment and scale seamlessly during peak flash sales.
              </p>
              <p className="wm-sp-paragraph">
                From custom Shopify Liquid theme architectures to enterprise WooCommerce and modern Next.js headless storefronts, we engineer commerce experiences that maximize average order value (AOV) and lifetime value (LTV).
              </p>
            </div>

           

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
                    
                    <p className="wm-seopk__nm">Shopify Standard</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">New D2C Brands</p>
                    <span className="wm-seopk__kw">Shopify Store</span>
                    <ul className="wm-seopk__l">
                      <li>Custom theme customization</li>
                      <li>Product catalog setup (up to 50 items)</li>
                      <li>Payment gateway & courier API integration</li>
                      <li>Abandoned cart email automation</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('E-Commerce Website Development', 'Shopify Standard')}
                    >
                      Choose Shopify &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">WooCommerce Custom</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Scaling E-Commerce Brands</p>
                    <span className="wm-seopk__kw">Zero Platform Fees</span>
                    <ul className="wm-seopk__l">
                      <li>100% custom UI design and ACF product schema</li>
                      <li>Advanced product filters, variants & reviews</li>
                      <li>1-Click UPI checkout & WhatsApp automation</li>
                      <li>90+ Mobile PageSpeed Score guarantee</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('E-Commerce Website Development', 'WooCommerce Custom')}
                    >
                      Choose WooCommerce &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Custom Headless E-Com</p>
                    <div className="wm-seopk__amt">₹1.75 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">High-Volume Enterprise Brands</p>
                    <span className="wm-seopk__kw">Next.js + Headless</span>
                    <ul className="wm-seopk__l">
                      <li>Next.js frontend + headless commerce backend</li>
                      <li>Multi-currency, international shipping & tax</li>
                      <li>Custom ERP & inventory sync middleware</li>
                      <li>Sub-second global load times via Edge CDN</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('E-Commerce Website Development', 'Custom Headless E-Com')}
                    >
                      Choose Custom &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">E-Com Growth Retainer</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Optimization</p>
                    <span className="wm-seopk__kw">Dedicated Dev & CRO</span>
                    <ul className="wm-seopk__l">
                      <li>Continuous conversion rate testing & speed tuning</li>
                      <li>Promotional banners, flash sale setups & coupons</li>
                      <li>New payment method & plugin updates</li>
                      <li>24/7 priority emergency support during sales</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('E-Commerce Website Development', 'E-Com Growth Retainer')}
                    >
                      Choose E-Com &rarr;
                    </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <span>Free</span></span>
                  <h2>Audit Your Online Storefront for Cart Abandonment</h2>
                  <p>
                    Submit your store URL to evaluate mobile checkout speed, cart friction, payment drop-offs, and product SEO rankings.
                  </p>
                  <DiagnosticLeadForm serviceName="E-Commerce Development" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Checkout Funnel Friction</b> — Pinpoint step-by-step drop-offs in customer checkout flows</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Mobile Page Speed & Caching</b> — Evaluate product detail page loading times on 4G/5G mobile networks</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Payment & Courier Health</b> — Check gateway success rates and automated logistics tracking status</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>AOV Scaling Action Plan</b> — Prioritized recommendations for cross-sells, bundles, and trust badges</span>
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

export default EcommerceServicesPage;

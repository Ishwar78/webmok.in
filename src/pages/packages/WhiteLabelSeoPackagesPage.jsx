import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaWhatsapp,
  FaAward,
  FaGoogle,
  FaChevronRight,
  FaHeadset,
  FaClock,
  FaLaptopCode,
  FaCheckCircle
} from 'react-icons/fa';
import HeroLeadForm from '../../components/HeroLeadForm';
import usePackageData from '../../hooks/usePackageData';
import '../../components/HeroTwoColShared.css';
import './WhiteLabelSeoPackagesPage.css';

const WhiteLabelSeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "White Label SEO Packages",
    tagline: "100% UNBRANDED RESELLER SEO FOR AGENCIES INDIA · EST. 2018",
    heroTitleHighlight: "White Label SEO Packages in India",
    shortName: "White Label SEO",
    leadDesc: "Are you a digital agency, web design studio, or freelance consultant looking to resell high-margin SEO services under your own brand?",
    bodyDesc: "WebMok acts as your silent execution engine. We provide 100% white-label SEO execution, branded client reports with your logo, dedicated account managers, and predictable wholesale pricing.",
    stats: [
  {
    "num": "100%",
    "label": "Unbranded & NDA Protected"
  },
  {
    "num": "70%+",
    "label": "Agency Profit Margins"
  },
  {
    "num": "120+",
    "label": "Agencies Powered Globally"
  },
  {
    "num": "24/7",
    "label": "Dedicated Account Support"
  }
],
    plans: [
  {
    "name": "Reseller Starter",
    "badge": "1 to 3 Clients",
    "inrPrice": "8,500",
    "usdPrice": "135",
    "period": "/ client / mo",
    "desc": "Affordable wholesale SEO fulfillment for growing digital agencies and freelancers.",
    "features": [
      "Full On-Page & Technical Execution",
      "15 Target Keywords per Client",
      "10 Quality Contextual Backlinks / mo",
      "Custom Branded PDF Reports with Your Logo",
      "Client Audit Decks for Your Sales Pitches",
      "Email & Slack Partner Support"
    ]
  },
  {
    "name": "Reseller Growth",
    "badge": "Most Popular",
    "inrPrice": "15,000",
    "usdPrice": "239",
    "period": "/ client / mo",
    "desc": "Comprehensive agency fulfillment for medium-to-large business client retainers.",
    "highlight": true,
    "features": [
      "Complete On-Page, Schema & Technical Fixes",
      "30 Target High-Intent Keywords",
      "20 High-DA Editorial Backlinks / mo",
      "White-Label Live Looker Studio Dashboards",
      "Competitor Gap & Pitch Decks Provided",
      "Dedicated Agency Account Director"
    ]
  },
  {
    "name": "Agency Scale Partner",
    "badge": "10+ Client Accounts",
    "inrPrice": "28,000",
    "usdPrice": "449",
    "period": "/ client / mo",
    "desc": "Enterprise wholesale solution for large digital agencies managing high-tier accounts.",
    "features": [
      "Full Enterprise & E-Commerce Capabilities",
      "60+ Keywords & Multi-Location Scaling",
      "35+ Tier-1 Editorial & Digital PR Links",
      "Custom SLA Guarantees & Priority Turnaround",
      "Volume Partner Rebates & Dedicated Pod"
    ]
  }
],
    faqs: [
  {
    "q": "Will Webmok ever communicate directly with our clients?",
    "a": "Never. We operate 100% as an anonymous backend fulfillment team under a legally binding Non-Disclosure Agreement (NDA)."
  },
  {
    "q": "Can we put our own branding and logo on the monthly reports?",
    "a": "Yes! All monthly performance reports, keyword spreadsheets, and pitch decks are delivered completely unbranded with your agency logo and colors."
  },
  {
    "q": "Is there a minimum client commitment to get wholesale rates?",
    "a": "No, you can start with just 1 client and scale your account volume at your own pace."
  }
]
  };
  const pageData = usePackageData('white-label-seo-packages', defaultPageData);

  return (
    <div className="wm-pkg-page-root">
            {/* 1. HERO SECTION (2-COLUMN MODERN DESIGN WITH COMMON LEAD FORM) */}
      <section className="wm-hero-shared-section">
        <div className="wm-hero-shared-container">
          <div className="wm-hero-two-col">
            {/* Left Column: Content & 4-Metric Performance Bar */}
            <div className="wm-hero-col-left">
              <div className="wm-hero-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span>{pageData.name}</span>
              </div>

              <span className="wm-hero-pill">
                <FaAward /> {pageData.tagline}
              </span>

              <h1 className="wm-hero-title">
                Make Your Business Stand Out Using <span className="wm-hero-title-highlight">{pageData.heroTitleHighlight || pageData.name}</span>
              </h1>

              <p className="wm-hero-lead">
                {pageData.leadDesc}
              </p>
              {pageData.image && (
                <div style={{ borderRadius: '10px', overflow: 'hidden', margin: '14px 0 18px 0', border: '1px solid rgba(0, 210, 255, 0.25)', maxWidth: '540px' }}>
                  <img src={pageData.image} alt={pageData.name} style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              )}

              <div className="wm-hero-cta-group">
                <button
                  type="button"
                  className="wm-hero-cta-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Custom Quote`)}
                >
                  Get Free Custom Quote <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="wm-hero-cta-secondary"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Call Me in 28 Seconds
                </button>
              </div>

              {/* 4-Metric Performance Bar (Embedded in Hero) */}
              <div className="wm-hero-stats-grid">
                {(pageData.stats || []).map((st, i) => (
                  <div key={i} className="wm-hstat-card">
                    <p className="wm-hstat-num">{st.num}</p>
                    <p className="wm-hstat-label">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Reusable Hero Lead Form */}
            <div className="wm-hero-col-right">
              <HeroLeadForm
                pageName={pageData.name}
                source={`${pageData.name} Hero Section`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="opseo-intro-section">
        <div className="opseo-container">
          <div className="opseo-intro-grid">
            <div className="opseo-intro-left">
              <span className="opseo-tag">AGENCY RESELLER SEO PARTNERSHIP</span>
              <h2 className="opseo-main-title">
                Best White Label SEO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies partners with digital marketing agencies across the USA, UK, Canada, Australia, and India to deliver reliable, high-yield SEO services under their brand name. Expand your agency revenue without hiring expensive in-house SEO teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="opseo-numbers-section">
        <div className="opseo-numbers-bg"></div>
        <div className="opseo-numbers-overlay"></div>
        <div className="opseo-numbers-container">
          <div className="opseo-numbers-heading">
            <span className="opseo-numbers-subtitle">RESELLER SCALE</span>
            <h2>
              Agency Reseller Growth,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">120+</div>
              <div className="opseo-stat-line"></div>
              <p>Global Agency Partners</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">1,400+</div>
              <div className="opseo-stat-line"></div>
              <p>Client Accounts Managed</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">70%</div>
              <div className="opseo-stat-line"></div>
              <p>Average Agency Markup Margin</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Strict Mutual NDA Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">RESELLER SUITE</span>
              <h2 className="opseo-include-title">
                What Do White Label SEO
                <span>Packages Include?</span>
              </h2>
              <p>Our white-label SEO packages cover the entire fulfillment lifecycle: initial audit decks, on-page optimization, technical fixes, high-DA link building, and monthly PDF/Looker Studio reports branded with your agency logo.</p>
              <p>Your clients never know Webmok exists—we operate entirely behind the scenes under your brand identity.</p>

              <div className="opseo-feature-list">
                <div key="100% Unbranded White-Label Client Reports" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  100% Unbranded White-Label Client Reports
                </div>
                <div key="Your Agency Logo & Custom Color Theme" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Your Agency Logo & Custom Color Theme
                </div>
                <div key="Complete On-Page & Technical Fulfillment" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Complete On-Page & Technical Fulfillment
                </div>
                <div key="High-DA Manual Backlink Outreach Included" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-DA Manual Backlink Outreach Included
                </div>
                <div key="Wholesale Reseller Pricing with 60-75% Margins" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Wholesale Reseller Pricing with 60-75% Margins
                </div>
                <div key="Dedicated Agency Partner Manager" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Dedicated Agency Partner Manager
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="White Label SEO Packages" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="opseo-importance-section">
        <div className="opseo-container">
          <div className="opseo-importance-box">
            <div className="opseo-importance-glow glow-one"></div>
            <div className="opseo-importance-glow glow-two"></div>

            <h2 className="opseo-importance-title">
              Importance of 
              <span>White Label SEO Partnerships</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Hiring full-time SEO strategists, link builders, and copywriters in-house carries heavy payroll overhead, training friction, and management complexity. White-label SEO allows you to sell high-ticket monthly retainers and scale instantly.</p>
              <p>You focus 100% on client acquisition, relationship management, and sales, while our battle-tested execution team delivers verified ranking results on time every month.</p>
            </div>

            <div className="opseo-importance-btn-wrap">
              <a href="#pricing-plans" className="opseo-importance-btn">
                <span>Explore Packages</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="opseo-why-section">
        <div className="opseo-container">
          <div className="opseo-why-grid">
            <div className="opseo-why-content">
              <span className="opseo-why-tag">WHY WEBMOK</span>
              <h2 className="opseo-why-title">
                Why Agencies Choose
Webmok for
                <span>  White Label</span>
                <br />
                <span>SEO Reselling</span>
              </h2>

              <div className="opseo-why-text">
                <p>We sign comprehensive Non-Disclosure Agreements (NDAs) ensuring complete confidentiality. We never contact your clients directly and respect your agency relationships unconditionally.</p>
                <p>Our scalable team of 50+ SEO professionals, developers, and writers handles accounts from local SMBs to high-volume e-commerce catalogs with consistent quality standards.</p>
              </div>
            </div>

            <div className="opseo-why-image">
              <div className="opseo-why-image-bg"></div>
              <img src="/onpage3.avif" alt="Why Choose Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. TIERED PRICING PLANS SECTION */}
      <section className="wm-pkg-pricing-section" id="pricing-plans">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Transparent Pricing</span>
            <h2 className="wm-pkg-sec-title">Flexible Monthly {pageData.shortName} Plans with Zero Lock-In</h2>
            <div className="wm-pkg-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-pkg-currency-toggle">
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR (India)
              </button>
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD (Global)
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className={`wm-pkg-cards-grid wm-grid-${pageData.plans.length}`}>
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-pkg-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-pkg-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-pkg-card-top">
                    {plan.badge && <span className="wm-pkg-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-pkg-card-name">{plan.name}</h3>
                    <p className="wm-pkg-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-pkg-card-pricing">
                    <div className="wm-pkg-price-row">
                      <span className="wm-pkg-price-val">{displayPrice}</span>
                      <span className="wm-pkg-price-period">{plan.period || '/ month'}</span>
                    </div>
                  </div>

                  <div className="wm-pkg-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-pkg-card-action">
                    <button
                      type="button"
                      className="wm-pkg-select-btn"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${plan.name}`)}
                    >
                      Choose Plan <FaArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BENEFITS SECTION */}
      <section className="opseo-benefits-section">
        <div className="opseo-container">
          <div className="opseo-benefits-grid">
            <div className="opseo-benefits-content">
              <span className="opseo-benefits-tag">PARTNERSHIP BENEFITS</span>
              <h2 className="opseo-benefits-title">
                Benefits of White Label
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>White label SEO provides recurring monthly revenue, eliminates staffing headaches, and allows your agency to offer comprehensive 360-degree digital services immediately.</p>
                <p>Predictable wholesale package tiers let you package and price services for maximum profitability.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Earn 60% to 75% Net Profit Margins" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Earn 60% to 75% Net Profit Margins</span>
                </div>
                <div key="Scale From 5 to 50+ Clients Overnight" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Scale From 5 to 50+ Clients Overnight</span>
                </div>
                <div key="Custom Branded Client Reports & Dashboards" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Custom Branded Client Reports & Dashboards</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="White Label SEO Packages" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHY PARTNER WITH WEBMOK */}
      <section className="wm-pkg-why-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Why Partner With Us</span>
            <h2 className="wm-pkg-sec-title">The WebMok Advantage in {pageData.shortName} Execution</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-why-grid">
            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaShieldAlt /></div>
              <h4>100% Proven Methodology</h4>
              <p>Zero shortcuts. We strictly execute high-grade, sustainable methods that protect and scale your brand equity.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaRocket /></div>
              <h4>Full Telemetry Reporting</h4>
              <p>Transparent bi-weekly and monthly dashboards tracking your key conversions, leads, and direct ROI.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaHeadset /></div>
              <h4>Dedicated Account Squad</h4>
              <p>Work directly with dedicated senior strategists, copywriters, and engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-pkg-faqs-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-pkg-sec-title">Common Queries About {pageData.shortName} Packages</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-pkg-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-pkg-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-pkg-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-pkg-bottom-banner">
        <div className="wm-pkg-container">
          <div className="wm-pkg-banner-inner">
            <div className="wm-pkg-banner-text">
              <h2>Ready to Accelerate Growth with Our {pageData.shortName} Packages?</h2>
              <p>Schedule a quick 1-on-1 strategy call with our senior specialists today. Get a customized campaign blueprint tailored to your targets.</p>
            </div>
            <div className="wm-pkg-banner-btns">
              <button
                type="button"
                className="wm-pkg-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-pkg-bbtn-quote"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Bottom Banner Inquiry`)}
              >
                Get Custom Quote <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelSeoPackagesPage;

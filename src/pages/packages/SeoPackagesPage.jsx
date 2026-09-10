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
import './SeoPackagesPage.css';

const SeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "SEO Packages",
    tagline: "ALL-IN-ONE ORGANIC SEARCH ENGINE MARKETING INDIA · EST. 2018",
    heroTitleHighlight: "Complete SEO Packages in India",
    shortName: "SEO",
    leadDesc: "Are you searching for comprehensive, end-to-end SEO packages to rank #1 on Google and turn search intent into customer revenue?",
    bodyDesc: "WebMok provides 360-degree search engine optimization combining technical code audits, on-page optimization, content marketing, local search, and high-DA link building into a unified growth engine.",
    stats: [
  {
    "num": "98%",
    "label": "Client Retention Rate"
  },
  {
    "num": "3.5x",
    "label": "Average Organic Traffic Growth"
  },
  {
    "num": "1,200+",
    "label": "Websites Ranked on Page #1"
  },
  {
    "num": "100%",
    "label": "Google Search Essentials Compliant"
  }
],
    plans: [
  {
    "name": "SEO Essential",
    "badge": "Small Business / Startups",
    "inrPrice": "12,000",
    "usdPrice": "199",
    "period": "/ month",
    "desc": "Complete all-in-one SEO foundation for startups, local services, and growing websites.",
    "features": [
      "Up to 15 Target Keywords",
      "On-Page Optimization of 10 Pages",
      "Technical Site Health & Error Fixes",
      "12 High-DA Contextual Backlinks / mo",
      "Google Search Console & GA4 Setup",
      "Monthly Ranking & Traffic Scorecard"
    ]
  },
  {
    "name": "SEO Accelerator",
    "badge": "Most Popular",
    "inrPrice": "22,500",
    "usdPrice": "369",
    "period": "/ month",
    "desc": "Aggressive organic growth campaign for expanding companies and competitive niches.",
    "highlight": true,
    "features": [
      "Up to 35 Target Commercial Keywords",
      "On-Page Optimization of 25 Pages",
      "Schema.org JSON-LD Structured Data",
      "25 High-DA Contextual Backlinks / mo",
      "2 Content Marketing Articles Included",
      "Google Maps & Local Search Sync",
      "Dedicated Senior SEO Specialist"
    ]
  },
  {
    "name": "SEO Dominator Enterprise",
    "badge": "High-Volume / National",
    "inrPrice": "42,000",
    "usdPrice": "669",
    "period": "/ month",
    "desc": "Full-scale market domination for national brands, multi-location companies, and e-commerce stores.",
    "features": [
      "Up to 75+ Target Commercial Keywords",
      "Unlimited Page Optimization & Catalog Siloing",
      "Full Core Web Vitals Code Optimization",
      "45+ Tier-1 Editorial & Digital PR Backlinks",
      "4 High-Intent SEO Articles / mo",
      "Bi-Weekly Zoom Strategy Consultations"
    ]
  }
],
    faqs: [
  {
    "q": "How soon can we expect to see ranking improvements?",
    "a": "Most clients observe noticeable ranking and traffic improvements within 60 to 90 days as technical fixes index and backlink authority compounds."
  },
  {
    "q": "Are there any hidden costs or long-term contracts?",
    "a": "Zero hidden fees and zero mandatory lock-in. Our packages operate on flexible month-to-month retainers."
  },
  {
    "q": "Do you provide keyword research or do we provide the keywords?",
    "a": "We conduct full competitor keyword gap research to identify high-intent, profitable search terms, and we align with your specific target list."
  }
]
  };

  const pageData = usePackageData('seo-packages', defaultPageData);

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
              <span className="opseo-tag">ALL-IN-ONE SEARCH OPTIMIZATION</span>
              <h2 className="opseo-main-title">
                Complete SEO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies combines technical mastery, persuasive copywriting, and ethical high-DA digital PR into all-inclusive SEO packages designed to deliver compounding organic traffic, phone calls, and customer transactions.
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
            <span className="opseo-numbers-subtitle">SEARCH DOMINANCE</span>
            <h2>
              Proven SEO Performance,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">1,200+</div>
              <div className="opseo-stat-line"></div>
              <p>Successful SEO Campaigns</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">85K+</div>
              <div className="opseo-stat-line"></div>
              <p>Keywords on Google Page 1</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">98%</div>
              <div className="opseo-stat-line"></div>
              <p>Client Satisfaction Rate</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">7+ Yrs</div>
              <div className="opseo-stat-line"></div>
              <p>Continuous Industry Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">COMPLETE SEO INCLUSIONS</span>
              <h2 className="opseo-include-title">
                What Do Complete SEO
                <span>Packages Include?</span>
              </h2>
              <p>Our complete SEO packages combine all four vital pillars of modern search optimization: technical site health, keyword content architecture, on-page schema, and high-authority link building.</p>
              <p>You get an all-inclusive squad of technical developers, copywriters, and link builders working in unison to scale your organic revenue.</p>

              <div className="opseo-feature-list">
                <div key="Technical Health & Speed Audits" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Technical Health & Speed Audits
                </div>
                <div key="Comprehensive Keyword Mapping & Research" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Comprehensive Keyword Mapping & Research
                </div>
                <div key="On-Page Content & Meta Tag Optimizations" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  On-Page Content & Meta Tag Optimizations
                </div>
                <div key="High-DA White-Hat Link Building" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-DA White-Hat Link Building
                </div>
                <div key="Google Business Profile & Local Search Sync" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Google Business Profile & Local Search Sync
                </div>
                <div key="Bi-Weekly Transparent Ranking Reports" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Bi-Weekly Transparent Ranking Reports
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="SEO Packages" />
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
              <span>Complete SEO Services</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Google rankings are won by websites that execute across code, content, and external authority simultaneously. Focusing on only one aspect leaves critical gaps that competitors will exploit to outrank you.</p>
              <p>A comprehensive, unified SEO strategy ensures every part of your digital presence works together to capture high-intent buyers at the exact moment they search for your solutions.</p>
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
                Why Choose
Webmok for
                <span>  Complete All-in-One</span>
                <br />
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Webmok is recognized as a top-rated SEO and digital growth agency in India. We combine data-driven keyword research with bespoke execution customized to your industry economics.</p>
                <p>We offer zero lock-in month-to-month retainers because our compounding results, transparent dashboards, and dedicated account support speak for themselves.</p>
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
              <span className="opseo-benefits-tag">ORGANIC ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Complete
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>All-in-one SEO packages drive continuous, compounding organic visitors with zero per-click advertising costs, creating durable long-term brand equity.</p>
                <p>Rankings on primary and long-tail commercial queries establish your business as the definitive leader in your marketplace.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Page #1 Google Ranks for Core Keywords" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Page #1 Google Ranks for Core Keywords</span>
                </div>
                <div key="Zero Paid Ad Spend Reliance" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Zero Paid Ad Spend Reliance</span>
                </div>
                <div key="Compounding Inbound Customer Inquiries" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Compounding Inbound Customer Inquiries</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="SEO Packages" />
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

export default SeoPackagesPage;

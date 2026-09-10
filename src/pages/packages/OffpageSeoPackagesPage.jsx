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
import './OffpageSeoPackagesPage.css';

const OffpageSeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Off-Page SEO Packages",
    tagline: "HIGH-DA BACKLINKS, DIGITAL PR & LINK BUILDING INDIA · EST. 2018",
    heroTitleHighlight: "Off-Page SEO Packages in India",
    shortName: "Off-Page SEO",
    leadDesc: "Are you looking for authoritative, white-hat backlinks and digital PR outreach to propel your domain authority to page #1?",
    bodyDesc: "WebMok secures high-DA editorial links, guest publication placements, contextual niche citations, and brand mentions on verified, high-traffic publisher domains that drive unstoppable ranking power.",
    stats: [
  {
    "num": "100%",
    "label": "Manual White-Hat Outreach"
  },
  {
    "num": "DA 50+",
    "label": "Average Backlink Quality"
  },
  {
    "num": "0",
    "label": "Spam or PBN Links"
  },
  {
    "num": "3.8x",
    "label": "Organic Domain Authority Lift"
  }
],
    plans: [
  {
    "name": "Authority Booster",
    "badge": "Starter Link Tier",
    "inrPrice": "14,000",
    "usdPrice": "219",
    "period": "/ month",
    "desc": "Essential link building campaign for growing businesses and local brands.",
    "features": [
      "10 High-DA (40-60+) Contextual Backlinks",
      "100% Manual Editorial Outreach",
      "Custom In-Content Guest Articles Included",
      "Anchor Text Diversity Management",
      "Do-Follow Quality Guaranteed",
      "Monthly Live Backlink Verification Sheet"
    ]
  },
  {
    "name": "Authority Dominator",
    "badge": "Most Popular",
    "inrPrice": "26,000",
    "usdPrice": "399",
    "period": "/ month",
    "desc": "Aggressive link building strategy for competitive niches and national brands.",
    "highlight": true,
    "features": [
      "22 High-DA (50-80+) Premium Backlinks",
      "Digital PR & Industry Publisher Placements",
      "Competitor Link Intersect Acquisition",
      "High-Traffic Editorial Contextual Anchors",
      "Tier-2 Supporting Link Amplification",
      "Dedicated Link Strategist Support"
    ]
  },
  {
    "name": "Enterprise Apex Links",
    "badge": "High-Competition / Global",
    "inrPrice": "48,000",
    "usdPrice": "749",
    "period": "/ month",
    "desc": "Elite tier-1 media placements and digital PR outreach for industry market leaders.",
    "features": [
      "45+ Tier-1 Media & High-Traffic Backlinks",
      "Top-Tier News & Authority Magazine Placements",
      "Unlinked Brand Mention Conversion",
      "Infographic & Resource Link Outreach",
      "Custom Anchor Text Sculpting & Link Detox"
    ]
  }
],
    faqs: [
  {
    "q": "Are all backlinks do-follow and permanent?",
    "a": "Yes! We focus on securing high-quality, permanent in-content do-follow backlinks on indexed, real-traffic websites."
  },
  {
    "q": "How do you ensure links are 100% penalty-safe?",
    "a": "We strictly prohibit PBNs, automated spam, or link wheels. Every single link is placed manually through genuine content collaboration with real domain owners."
  },
  {
    "q": "Do you provide a report of all links built?",
    "a": "Yes, you receive a transparent live Google Spreadsheet containing the exact URLs, DA/DR metrics, anchor texts, and live verification status."
  }
]
  };
  const pageData = usePackageData('offpage-seo-packages', defaultPageData);

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
              <span className="opseo-tag">HIGH-AUTHORITY LINK BUILDING</span>
              <h2 className="opseo-main-title">
                Best Off-Page SEO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies builds clean, powerful, and Google-compliant backlink profiles for forward-thinking brands. We leverage manual digital PR, editorial outreach, and niche contextual placements to outrank high-competition competitors safely.
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
            <span className="opseo-numbers-subtitle">AUTHORITY BUILDERS</span>
            <h2>
              Off-Page Link Authority,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">45K+</div>
              <div className="opseo-stat-line"></div>
              <p>High-DA Links Built</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Manual Editorial Placements</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">800+</div>
              <div className="opseo-stat-line"></div>
              <p>Active Media & Publisher Relationships</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">0</div>
              <div className="opseo-stat-line"></div>
              <p>Google Penalties In History</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">LINK BUILDING SUITE</span>
              <h2 className="opseo-include-title">
                What Do Off-Page SEO
                <span>Packages Include?</span>
              </h2>
              <p>Our off-page SEO packages include manual digital PR outreach, high-DA guest posting, broken link replacement, resource page inclusions, and branded media mentions.</p>
              <p>We strictly avoid private blog networks (PBNs), automated link farms, or spam directories, ensuring your backlink equity remains permanently safe from algorithmic penalties.</p>

              <div className="opseo-feature-list">
                <div key="Manual High-DA (50-80+) Guest Post Placements" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Manual High-DA (50-80+) Guest Post Placements
                </div>
                <div key="Contextual In-Content Editorial Backlinks" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Contextual In-Content Editorial Backlinks
                </div>
                <div key="Competitor Backlink Gap Analysis" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Competitor Backlink Gap Analysis
                </div>
                <div key="Brand Mention & Digital PR Outreach" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Brand Mention & Digital PR Outreach
                </div>
                <div key="Anchor Text Diversity & Risk Balancing" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Anchor Text Diversity & Risk Balancing
                </div>
                <div key="Live Google Sheets Link Tracking Report" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Live Google Sheets Link Tracking Report
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Off-Page SEO Packages" />
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
              <span>Off-Page SEO & Backlinks</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Google’s PageRank algorithm still treats high-quality backlinks as the primary vote of confidence on the web. Without strong external domain authority, even beautifully optimized on-page content will struggle to outrank established competitors.</p>
              <p>High-authority contextual backlinks elevate your entire domain authority, allowing all your commercial and informational pages to rank faster and stay at the top longer.</p>
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
                Why Webmok
Technologies for
                <span>  White-Hat Link</span>
                <br />
                <span>Building Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Webmok maintains an exclusive network of verified publisher relationships, journalists, and authoritative industry bloggers across technology, health, finance, e-commerce, and B2B sectors.</p>
                <p>Every placement features custom-written, native editorial copy produced by in-house content creators that provides genuine value to readers while passing high SEO link equity.</p>
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
              <span className="opseo-benefits-tag">AUTHORITY IMPACT</span>
              <h2 className="opseo-benefits-title">
                Benefits of Off-Page
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Off-page link building builds permanent organic domain trust, drives referral traffic from active publisher audiences, and unlocks top rankings for high-competition keywords.</p>
                <p>A diversified anchor text and backlink profile protects your business against algorithmic updates.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Skyrocket Domain Authority (DA/DR)" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Skyrocket Domain Authority (DA/DR)</span>
                </div>
                <div key="Outrank High-Competition Competitors" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Outrank High-Competition Competitors</span>
                </div>
                <div key="100% Google Penalty-Safe White-Hat Placements" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>100% Google Penalty-Safe White-Hat Placements</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Off-Page SEO Packages" />
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

export default OffpageSeoPackagesPage;

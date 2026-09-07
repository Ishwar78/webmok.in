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
import './LogoDesignPackagesPage.css';

const LogoDesignPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Logo Design & Branding Packages",
    tagline: "VECTOR LOGOS, BRAND GUIDELINES & CORPORATE IDENTITY INDIA · EST. 2018",
    heroTitleHighlight: "Logo Design & Branding Packages in India",
    shortName: "Logo Design",
    leadDesc: "Are you looking for a memorable, timeless, and vector-perfect logo design that defines your corporate brand identity?",
    bodyDesc: "WebMok crafts bespoke logo concepts, full brand typography guidelines, color palettes, and print-ready stationery designed by senior visual identity specialists.",
    stats: [
  {
    "num": "100%",
    "label": "Original Bespoke Concepts"
  },
  {
    "num": "100%",
    "label": "Vector & Source File Rights"
  },
  {
    "num": "850+",
    "label": "Brand Identities Crafted"
  },
  {
    "num": "48 hrs",
    "label": "Initial Concept Delivery"
  }
],
    plans: [
  {
    "name": "Startup Logo",
    "badge": "Essential Brand Mark",
    "inrPrice": "5,000",
    "usdPrice": "79",
    "period": "/ one-time",
    "desc": "Clean, professional logo design for startups, freelancers, and small businesses.",
    "features": [
      "3 Unique Logo Design Concepts",
      "Unlimited Revisions on Chosen Concept",
      "High-Resolution Vector Files (AI, EPS, SVG, PNG)",
      "Transparent Background Files",
      "48-Hour Initial Turnaround",
      "Full Copyright Ownership"
    ]
  },
  {
    "name": "Corporate Identity Kit",
    "badge": "Most Popular",
    "inrPrice": "10,500",
    "usdPrice": "169",
    "period": "/ one-time",
    "desc": "Complete branding package with logo, stationery, and social media profile assets.",
    "highlight": true,
    "features": [
      "6 Unique Logo Design Concepts",
      "Unlimited Design Revisions",
      "Full Master Vector Source Files (AI, EPS, SVG, PDF)",
      "Business Card & Letterhead Stationery Design",
      "Social Media Kit (Avatar & Banner Assets)",
      "Brand Typography & Color Guide PDF"
    ]
  },
  {
    "name": "Full Brand Guidelines Suite",
    "badge": "Enterprise Brand Identity",
    "inrPrice": "18,500",
    "usdPrice": "289",
    "period": "/ one-time",
    "desc": "Comprehensive visual identity system and 25-page brand style guide for enterprise leaders.",
    "features": [
      "10 Bespoke Creative Concepts & 3D Mockups",
      "Complete 25-Page Brand Guidelines Manual",
      "Full Stationery & Corporate Merchandise Suite",
      "Social Media Pack for All 5 Major Networks",
      "Email Signature & Presentation Deck Template",
      "Direct Consultation with Senior Creative Director"
    ]
  }
],
    faqs: [
  {
    "q": "Will I own the complete copyright and source files of the logo?",
    "a": "Yes! Upon final approval, 100% intellectual property rights and all master vector files (AI, EPS, SVG, PNG, PDF) are transferred to you."
  },
  {
    "q": "What if I want adjustments after seeing the initial concepts?",
    "a": "We offer unlimited revisions on your selected concept until you are 100% satisfied with the shape, colors, and typography."
  },
  {
    "q": "How fast will I receive the initial concepts?",
    "a": "Initial creative concepts are delivered within 48 hours of completing the design brief."
  }
]
  };

  return (
    <div className="wm-pkg-page-root">
      {/* 1. HERO SECTION (DUAL TYPOGRAPHY & TRUST CARDS) */}
      <section className="wm-pkg-hero-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-hero-grid">
            {/* Left Column: Heading, Copy, & Buttons */}
            <div className="wm-pkg-hero-left">
              <span className="wm-pkg-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-pkg-hero-title-dual">
                <span className="wm-hero-italic-orange">Make Your Business Stand Out Using</span>
                <span className="wm-hero-bold-dark">{pageData.heroTitleHighlight}</span>
              </h1>

              <p className="wm-pkg-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-pkg-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-pkg-hero-btns-row">
                <button
                  type="button"
                  className="wm-pkg-btn-case-study"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Audit / Case Study`)}
                >
                  {pageData.shortName} Case Study <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-pkg-btn-packages-outline">
                  {pageData.shortName} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Credibility / Review Cards Stack */}
            <div className="wm-pkg-hero-right-trust">
              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>#1 Growth Agency</h4>
                  <p>Clutch · India 2025</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-clutch">C</div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>On Upwork</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-upwork">up</div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>4.9 / 5</h4>
                  <p>
                    Google Reviews · 130+{' '}
                    <span className="wm-pkg-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-google-stars">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Certified Agency</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-google-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-pkg-stats-strip">
        <div className="wm-pkg-container">
          <div className="wm-pkg-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-pkg-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="opseo-intro-section">
        <div className="opseo-container">
          <div className="opseo-intro-grid">
            <div className="opseo-intro-left">
              <span className="opseo-tag">BESPOKE VISUAL IDENTITY & BRANDING</span>
              <h2 className="opseo-main-title">
                Best Logo Design
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies creates distinctive, high-recall logo designs and corporate visual identity systems. From minimalist modern emblems to luxury typography, we build logos that anchor your brand authority across digital and print media.
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
            <span className="opseo-numbers-subtitle">BRANDING SUCCESS</span>
            <h2>
              Logo Design Impact,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">850+</div>
              <div className="opseo-stat-line"></div>
              <p>Logos Designed</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Copyright & Vector Handover</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">48 hrs</div>
              <div className="opseo-stat-line"></div>
              <p>Fast Initial Concept Turnaround</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">99%</div>
              <div className="opseo-stat-line"></div>
              <p>Client Approval Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">LOGO DESIGN SUITE</span>
              <h2 className="opseo-include-title">
                What Do Logo Design
                <span>Packages Include?</span>
              </h2>
              <p>Our logo design packages provide multiple unique creative concepts, unlimited revisions, high-resolution vector files (AI, EPS, SVG, PNG, PDF), social media avatar kits, and comprehensive brand guideline manuals.</p>
              <p>You receive 100% legal ownership and trademark-ready vector files.</p>

              <div className="opseo-feature-list">
                <div key="Multiple Unique Creative Logo Concepts" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Multiple Unique Creative Logo Concepts
                </div>
                <div key="Unlimited Iterations & Color Variations" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Unlimited Iterations & Color Variations
                </div>
                <div key="Full Vector Master Files (AI, EPS, SVG, PDF, PNG)" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Full Vector Master Files (AI, EPS, SVG, PDF, PNG)
                </div>
                <div key="Social Media Kit (Profile & Banner Avatars)" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Social Media Kit (Profile & Banner Avatars)
                </div>
                <div key="Business Card & Letterhead Stationery Design" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Business Card & Letterhead Stationery Design
                </div>
                <div key="Brand Typography & Color Code Guidelines Manual" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Brand Typography & Color Code Guidelines Manual
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Logo Design & Branding Packages" />
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
              Importance of a 
              <span>Distinctive Brand Logo</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Your logo is the single most recognizable visual element of your business. It creates the first impression in milliseconds and builds lasting recognition in customers’ minds across all touchpoints.</p>
              <p>A professionally designed vector logo elevates brand perception, justifies premium pricing, and differentiates your offerings from generic competitors.</p>
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
                <span>  Distinctive Corporate</span>
                <br />
                <span>Logo Design Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We don’t use generic clipart or AI generators. Our senior graphic designers sketch original, thoughtful concepts rooted in brand psychology, balance, and modern design principles.</p>
                <p>We ensure your logo scales flawlessly from a 16px favicon on a smartphone screen to massive billboard signage without losing clarity.</p>
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
              <span className="opseo-benefits-tag">IDENTITY ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Logo Design
                <span>Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Logo design packages provide a timeless visual mark, full trademark-ready source files, and complete brand consistency across all marketing channels.</p>
                <p>Comprehensive brand manuals ensure your marketing team uses correct typography and color palettes everywhere.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Timeless, Memorable Brand Recognition" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Timeless, Memorable Brand Recognition</span>
                </div>
                <div key="100% Vector Source Files & Trademark Ready" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>100% Vector Source Files & Trademark Ready</span>
                </div>
                <div key="Complete Social Media & Print Stationery Kit" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Complete Social Media & Print Stationery Kit</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Logo Design & Branding Packages" />
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

export default LogoDesignPackagesPage;

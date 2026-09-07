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
import './LocalSeoPackagesPage.css';

const LocalSeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Local SEO Packages",
    tagline: "LOCAL GOOGLE MAPS & CITATION SEO INDIA · EST. 2018",
    heroTitleHighlight: "Local SEO Packages in India",
    shortName: "Local SEO",
    leadDesc: "Are you looking to dominate local Google 3-Pack rankings and capture high-intent buyers in your city?",
    bodyDesc: "WebMok specializes in Google Business Profile (GBP) optimization, geo-targeted keyword landing pages, local citation building, and review generation that turns nearby searches into walk-ins and phone calls.",
    stats: [
  {
    "num": "300%",
    "label": "Local Map 3-Pack Growth"
  },
  {
    "num": "10M+",
    "label": "Local Search Impressions"
  },
  {
    "num": "850+",
    "label": "Local Businesses Ranked"
  },
  {
    "num": "100%",
    "label": "NAP Consistency Score"
  }
],
    plans: [
  {
    "name": "Local Starter",
    "badge": "1 Location / Store",
    "inrPrice": "10,000",
    "usdPrice": "159",
    "period": "/ month",
    "desc": "Ideal for single-location clinics, retail shops, and local service providers.",
    "features": [
      "1 Google Business Profile (GBP) Optimization",
      "25 Local Citations & Directory Submissions",
      "10 Target Local Keywords",
      "Google Maps Pin & Radius Optimization",
      "NAP Consistency & Duplicate Cleanup",
      "Monthly Local Ranking Report"
    ]
  },
  {
    "name": "Local Growth",
    "badge": "Most Popular",
    "inrPrice": "18,500",
    "usdPrice": "299",
    "period": "/ month",
    "desc": "Comprehensive multi-radius local ranking campaign with localized content and reviews.",
    "highlight": true,
    "features": [
      "Up to 2 Locations / Multi-Area Target",
      "60 High-Authority Local Citations",
      "25 Target Local & Geo-Modifier Keywords",
      "Local Schema (JSON-LD) Implementation",
      "Google Business Posts (4 / month)",
      "Review Generation Funnel & Responses",
      "Dedicated Local Account Specialist"
    ]
  },
  {
    "name": "Enterprise Multi-City",
    "badge": "Multi-Location / Franchise",
    "inrPrice": "35,000",
    "usdPrice": "549",
    "period": "/ month",
    "desc": "Full-scale local enterprise dominance across multiple cities and regional franchise branches.",
    "features": [
      "5+ Locations / Franchise Management",
      "120+ Niche & Geo Citations per Location",
      "Geo-Targeted City Landing Pages Optimization",
      "Competitor Proximity Grid Telemetry",
      "Automated Reputation & Review Dashboard",
      "Priority Weekly Strategy Consultations"
    ]
  }
],
    faqs: [
  {
    "q": "How long does it take to rank in Google Maps 3-Pack?",
    "a": "Local SEO improvements are usually noticeable within 30 to 60 days as citations are indexed, category optimizations are applied, and positive review velocity increases."
  },
  {
    "q": "What is NAP consistency and why is it important?",
    "a": "NAP stands for Name, Address, and Phone number. Search engines require exact match consistency across all web directories to verify your location authenticity."
  },
  {
    "q": "Can you help if our Google Business Profile was suspended?",
    "a": "Yes! We assist with GBP reinstatement appeals, policy compliance audits, and business verification processes."
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
              <span className="opseo-tag">AFFORDABLE LOCAL SEO PACKAGES</span>
              <h2 className="opseo-main-title">
                Best Local SEO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies delivers hyper-targeted Local SEO services engineered to position your store, clinic, or regional agency at the top of Google Maps and local search results. We optimize your local presence so nearby customers find you before your competitors.
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
            <span className="opseo-numbers-subtitle">WHY CHOOSE US</span>
            <h2>
              Local SEO Authority,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">850+</div>
              <div className="opseo-stat-line"></div>
              <p>Local Businesses Scaled</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">2,500+</div>
              <div className="opseo-stat-line"></div>
              <p>GBP Profiles Optimized</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">120K+</div>
              <div className="opseo-stat-line"></div>
              <p>Calls & Directions Generated</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">98%</div>
              <div className="opseo-stat-line"></div>
              <p>Top 3-Pack Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">LOCAL PACKAGES INCLUDE</span>
              <h2 className="opseo-include-title">
                What Do Local SEO
                <span>Packages Include?</span>
              </h2>
              <p>Our local SEO packages provide complete end-to-end optimization of your Google Business Profile, local keyword mapping, high-authority citation directories, and localized review strategies.</p>
              <p>We ensure 100% NAP (Name, Address, Phone) consistency across 100+ top Indian and global business directories to build bulletproof local trust signals.</p>

              <div className="opseo-feature-list">
                <div key="GBP Profile Setup & Verification" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  GBP Profile Setup & Verification
                </div>
                <div key="Geo-Targeted Keyword Research" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Geo-Targeted Keyword Research
                </div>
                <div key="100+ Local Citations & Directory Listings" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  100+ Local Citations & Directory Listings
                </div>
                <div key="Google Maps 3-Pack Optimization" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Google Maps 3-Pack Optimization
                </div>
                <div key="Customer Review Generation Strategy" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Customer Review Generation Strategy
                </div>
                <div key="Local Schema & NAP Consistency Audits" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Local Schema & NAP Consistency Audits
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Local SEO Packages" />
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
              <span>Local SEO for Businesses</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Over 46% of all Google searches have local intent. If your business is not ranking in the top 3 Google Map results when customers search for products or services near them, you are losing high-intent walk-ins and direct phone calls to competitors every single day.</p>
              <p>Local SEO delivers the highest conversion rates in digital marketing because users searching locally are actively ready to visit a location or make a booking immediately. Investing in structured local SEO secures your local market dominance.</p>
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
                <span>  Local Maps</span>
                <br />
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Webmok Technologies is a premier local SEO company with proven experience ranking businesses in Delhi NCR, Mumbai, Bangalore, and international markets. We combine advanced Google Maps grid tracking with ethical white-hat citation outreach.</p>
                <p>Our team performs multi-point competitor proximity audits, category optimizations, and geo-tagged image uploads to ensure your Google Business Profile outranks every competing listing in your immediate radius.</p>
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
              <span className="opseo-benefits-tag">PROVEN ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Local
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Local SEO packages provide a predictable, sustainable stream of inbound phone calls, WhatsApp inquiries, and physical footfall without paying for expensive pay-per-click ad clicks.</p>
                <p>Achieving top positions on Google Maps creates enduring community brand authority that compounds month after month.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Dominate Google 3-Pack Rankings" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Dominate Google 3-Pack Rankings</span>
                </div>
                <div key="Massive Surge in Phone Calls & Directions" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Massive Surge in Phone Calls & Directions</span>
                </div>
                <div key="High-Trust Review Social Proof" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>High-Trust Review Social Proof</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Local SEO Packages" />
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

export default LocalSeoPackagesPage;

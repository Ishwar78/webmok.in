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
import './EnterpriseSeoPackagesPage.css';

const EnterpriseSeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Enterprise SEO Packages",
    tagline: "ENTERPRISE SEO & LARGE CATALOG ARCHITECTURE INDIA · EST. 2018",
    heroTitleHighlight: "Enterprise SEO Packages in India",
    shortName: "Enterprise SEO",
    leadDesc: "Are you managing a high-scale portal, SaaS platform, or multi-national corporation requiring enterprise-grade organic growth?",
    bodyDesc: "WebMok engineers comprehensive programmatic SEO frameworks, multi-million page indexation strategies, faceted navigation controls, and custom digital PR designed for market leaders.",
    stats: [
  {
    "num": "500K+",
    "label": "Pages Successfully Indexed"
  },
  {
    "num": "4.2x",
    "label": "Organic Traffic Multiplier"
  },
  {
    "num": "100%",
    "label": "Server Log & Crawl Optimization"
  },
  {
    "num": "99.9%",
    "label": "Core Web Vitals Compliance"
  }
],
    plans: [
  {
    "name": "Enterprise Corporate",
    "badge": "Up to 500 Pages",
    "inrPrice": "38,000",
    "usdPrice": "599",
    "period": "/ month",
    "desc": "Advanced technical and content optimization for mid-to-large corporate websites.",
    "features": [
      "Full Technical Architecture & Log Analysis",
      "500+ Target Keywords Mapped",
      "Core Web Vitals Remediation",
      "15 High-Authority Editorial Backlinks / mo",
      "Schema & Entity Semantic Graph Setup",
      "Bi-Weekly Strategy Sync & Reporting"
    ]
  },
  {
    "name": "Enterprise Scale",
    "badge": "Most Popular",
    "inrPrice": "65,000",
    "usdPrice": "999",
    "period": "/ month",
    "desc": "Full-spectrum programmatic and digital PR strategy for large platforms and SaaS leaders.",
    "highlight": true,
    "features": [
      "Unlimited Pages & Catalog Architecture",
      "1,500+ Target Commercial Keywords",
      "Programmatic Topic Cluster Formulations",
      "30 Tier-1 Editorial & Digital PR Placements",
      "International Multi-Region & Hreflang",
      "Dedicated Solution Director & Slack Channel"
    ]
  },
  {
    "name": "Enterprise Global Apex",
    "badge": "Global / Multi-National",
    "inrPrice": "1,10,000",
    "usdPrice": "1,699",
    "period": "/ month",
    "desc": "Bespoke global dominance retainer for market leaders and high-volume e-commerce empires.",
    "features": [
      "Multi-Country Global Search Strategy",
      "Custom API & BigQuery Telemetry Dashboards",
      "50+ Premium Tier-1 Media Links / mo",
      "Dedicated Senior SEO Lead & 2 Full-Stack Engineers",
      "Executive Board Presentations & Custom SLAs"
    ]
  }
],
    faqs: [
  {
    "q": "How does Enterprise SEO differ from regular SEO packages?",
    "a": "Enterprise SEO deals with large-scale websites (thousands of URLs), requiring specialized log file analysis, crawl budget management, programmatic architectures, and direct integration with product engineering teams."
  },
  {
    "q": "Can you work alongside our in-house development team?",
    "a": "Yes! We create detailed Jira tickets, GitHub PRs, and technical specifications that fit directly into your existing sprint cycles."
  },
  {
    "q": "Do you offer custom NDAs and SLAs for enterprises?",
    "a": "Yes, all enterprise engagements are protected under mutual NDAs with strict SLA deliverables and uptime guarantees."
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
              <span className="opseo-tag">ENTERPRISE ORGANIC SCALING</span>
              <h2 className="opseo-main-title">
                Best Enterprise SEO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies empowers high-traffic portals, national corporations, and multinational brands to capture dominant market share across tens of thousands of competitive commercial keywords through deep technical engineering and programmatic content strategies.
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
            <span className="opseo-numbers-subtitle">PROVEN TRACK RECORD</span>
            <h2>
              Enterprise Search Scale,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">150+</div>
              <div className="opseo-stat-line"></div>
              <p>Enterprise Brands Scaled</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">500K+</div>
              <div className="opseo-stat-line"></div>
              <p>High-Intent Keywords Ranked</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">100M+</div>
              <div className="opseo-stat-line"></div>
              <p>Quarterly Organic Traffic</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>White-Hat Google Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">ENTERPRISE SUITE</span>
              <h2 className="opseo-include-title">
                What Do Enterprise SEO
                <span>Packages Include?</span>
              </h2>
              <p>Enterprise SEO packages include server log file analysis, programmatic URL structure optimization, faceted search indexing controls, dynamic XML sitemaps, and advanced Core Web Vitals remediation.</p>
              <p>We provide dedicated senior technical architects, digital PR strategists, and custom Looker Studio dashboards integrated with your corporate tech stack.</p>

              <div className="opseo-feature-list">
                <div key="Server Log Analysis & Crawl Budget Optimization" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Server Log Analysis & Crawl Budget Optimization
                </div>
                <div key="Faceted Navigation & Programmatic SEO" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Faceted Navigation & Programmatic SEO
                </div>
                <div key="Entity & Semantic Vector Search Indexing" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Entity & Semantic Vector Search Indexing
                </div>
                <div key="High-Tier Digital PR & Tier-1 Editorial Links" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-Tier Digital PR & Tier-1 Editorial Links
                </div>
                <div key="International Hreflang & Multi-Region Setup" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  International Hreflang & Multi-Region Setup
                </div>
                <div key="Dedicated Senior Solution Director" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Dedicated Senior Solution Director
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Enterprise SEO Packages" />
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
              <span>Enterprise SEO</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Large enterprise websites face unique architectural challenges such as crawl budget waste, index bloat, internal duplicate silos, and complex JavaScript rendering issues that standard SEO agencies cannot handle.</p>
              <p>By implementing enterprise-grade search engineering, your organization converts millions of potential queries into compounding organic pipeline revenue without relying on volatile ad spend.</p>
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
                <span>  Enterprise Scale</span>
                <br />
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Webmok brings years of senior engineering leadership in full-stack React, Next.js, Node.js, and cloud systems. We collaborate directly with your in-house engineering and product teams to execute recommendations seamlessly.</p>
                <p>We use enterprise crawlers, BigQuery telemetry, and custom automation scripts to manage tens of thousands of URLs with surgical precision.</p>
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
              <span className="opseo-benefits-tag">ENTERPRISE IMPACT</span>
              <h2 className="opseo-benefits-title">
                Benefits of Enterprise
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Enterprise SEO packages unlock massive economies of scale, establishing your domain as an unassailable industry authority across primary, secondary, and long-tail transactional searches.</p>
                <p>Continuous organic dominance insulates your organization from rising pay-per-click acquisition costs.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Maximize Crawl Efficiency & Page Indexation" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Maximize Crawl Efficiency & Page Indexation</span>
                </div>
                <div key="Dominate High-Value Commercial Keyword Queries" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Dominate High-Value Commercial Keyword Queries</span>
                </div>
                <div key="Dedicated Enterprise Squad & Custom SLAs" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Dedicated Enterprise Squad & Custom SLAs</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Enterprise SEO Packages" />
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

export default EnterpriseSeoPackagesPage;

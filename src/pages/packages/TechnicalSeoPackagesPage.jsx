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
import './TechnicalSeoPackagesPage.css';

const TechnicalSeoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Technical SEO Packages",
    tagline: "CORE WEB VITALS, CRAWLABILITY & SCHEMA INDIA · EST. 2018",
    heroTitleHighlight: "Technical SEO Packages in India",
    shortName: "Technical SEO",
    leadDesc: "Is your website suffering from crawl errors, slow page speed, indexation drops, or JavaScript rendering issues?",
    bodyDesc: "WebMok provides deep technical code audits, server response optimization, Core Web Vitals fixes, canonical architecture, and structured data implementation that turns code into ranking power.",
    stats: [
  {
    "num": "95+",
    "label": "Google PageSpeed Score"
  },
  {
    "num": "0.4s",
    "label": "Average Server Response Time"
  },
  {
    "num": "100%",
    "label": "Schema Validation Rate"
  },
  {
    "num": "0",
    "label": "Unresolved Crawl Errors"
  }
],
    plans: [
  {
    "name": "Technical Audit & Fix",
    "badge": "One-Time / Starter",
    "inrPrice": "12,000",
    "usdPrice": "189",
    "period": "/ one-time",
    "desc": "Complete technical audit and code repair for websites under 50 pages.",
    "features": [
      "Full 150-Point Technical Crawl Audit",
      "Core Web Vitals Optimization",
      "Robots.txt & XML Sitemap Setup",
      "Redirect Chains & 404 Error Fixes",
      "Schema.org JSON-LD Basics (Organization, WebSite)",
      "Before/After Performance Scorecard"
    ]
  },
  {
    "name": "Technical Pro Retainer",
    "badge": "Most Popular",
    "inrPrice": "22,000",
    "usdPrice": "349",
    "period": "/ month",
    "desc": "Continuous technical monitoring, schema enrichment, and ongoing speed optimization.",
    "highlight": true,
    "features": [
      "Ongoing Crawl & Log File Monitoring",
      "Advanced Schema (Product, Article, FAQ, Local)",
      "JavaScript & Single Page App (SPA) SEO",
      "Faceted Navigation & Canonical Rules",
      "Internal PageRank Siloing & Link Sculpting",
      "Dedicated Technical SEO Engineer"
    ]
  },
  {
    "name": "Enterprise Tech Architecture",
    "badge": "High-Volume Systems",
    "inrPrice": "42,000",
    "usdPrice": "649",
    "period": "/ month",
    "desc": "Bespoke technical architecture for custom web apps, multi-language portals, and high-SKU stores.",
    "features": [
      "Custom Edge Server & CDN Caching Rules",
      "Headless React / Next.js SSR SEO Setup",
      "Multi-Lingual Hreflang & Sub-Domain Architecture",
      "Automated Daily Health & Indexation Monitoring",
      "Direct GitHub / Gitlab Code Commits"
    ]
  }
],
    faqs: [
  {
    "q": "Will Technical SEO fix our low Google PageSpeed score?",
    "a": "Yes! We optimize image payloads, minify critical CSS/JS, remove render-blocking resources, and configure server caching to push PageSpeed scores into the 90+ green zone."
  },
  {
    "q": "Do you implement the technical code changes directly?",
    "a": "Yes, with your permission, our developers directly implement the code, schema, and server changes on your staging or production environments."
  },
  {
    "q": "How does Schema markup help our search visibility?",
    "a": "Schema structured data helps Google display rich snippets (stars, pricing, FAQs, sitelinks) directly in search results, dramatically increasing your organic click-through rate."
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
              <span className="opseo-tag">DEEP CODE & ARCHITECTURE SEO</span>
              <h2 className="opseo-main-title">
                Best Technical SEO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies specializes in solving complex code-level search issues, eliminating server bottlenecks, fixing Core Web Vitals, and implementing advanced JSON-LD structured schemas to ensure Google indexes and ranks your content flawlessly.
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
            <span className="opseo-numbers-subtitle">TECHNICAL EXCELLENCE</span>
            <h2>
              Technical SEO Precision,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">650+</div>
              <div className="opseo-stat-line"></div>
              <p>Technical Audits Executed</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">95+</div>
              <div className="opseo-stat-line"></div>
              <p>Avg Mobile PageSpeed Score</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Crawl Error Resolution Rate</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">500K+</div>
              <div className="opseo-stat-line"></div>
              <p>Lines of Clean Schema Deployed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">TECHNICAL SUITE</span>
              <h2 className="opseo-include-title">
                What Do Technical SEO
                <span>Packages Include?</span>
              </h2>
              <p>Our technical SEO packages inspect every layer of your website architecture: HTTP status codes, canonical loops, robots.txt directives, XML sitemaps, JavaScript hydration, and mobile rendering.</p>
              <p>We don’t just deliver audit PDFs—our senior engineers implement the actual code and server fixes directly for your platform.</p>

              <div className="opseo-feature-list">
                <div key="Full 150-Point Technical Code Audit" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Full 150-Point Technical Code Audit
                </div>
                <div key="Core Web Vitals (LCP, FID/INP, CLS) Fixes" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Core Web Vitals (LCP, FID/INP, CLS) Fixes
                </div>
                <div key="Schema.org JSON-LD Structured Data Integration" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Schema.org JSON-LD Structured Data Integration
                </div>
                <div key="Robots.txt & XML Sitemap Optimization" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Robots.txt & XML Sitemap Optimization
                </div>
                <div key="Canonicalization & Redirect Chain Cleanup" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Canonicalization & Redirect Chain Cleanup
                </div>
                <div key="JavaScript Rendering & Hydration Audits" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  JavaScript Rendering & Hydration Audits
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Technical SEO Packages" />
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
              <span>Technical SEO</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Even the most remarkable content will never rank if search engine crawlers encounter 500 server errors, slow rendering bottlenecks, or conflicting canonical tags. Technical SEO is the foundational bedrock upon which all organic rankings rely.</p>
              <p>Resolving technical deficiencies frequently produces immediate, dramatic jumps in rankings and traffic without changing a single word of on-page text.</p>
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
                <span>  Code & Technical</span>
                <br />
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Unlike agencies that only run automated scanner reports, Webmok is a full-stack engineering firm with senior React, Node, and PHP engineers who write clean, compliant code.</p>
                <p>We verify all technical fixes using Google Search Console URL Inspection API, Screaming Frog custom extractions, and real-user Core Web Vitals telemetry.</p>
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
              <span className="opseo-benefits-tag">CORE ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Technical
                <span>SEO Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Technical SEO packages eliminate indexation barriers, accelerate page loading speeds, and help search engines accurately interpret your rich snippets and entity schema.</p>
                <p>Faster loading websites achieve significantly higher user dwell times and e-commerce checkout conversion rates.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Sub-Second Load Times & 90+ PageSpeed" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Sub-Second Load Times & 90+ PageSpeed</span>
                </div>
                <div key="Flawless Google Bot Crawl & Indexation" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Flawless Google Bot Crawl & Indexation</span>
                </div>
                <div key="Rich Snippets & Enhanced SERP Badges" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Rich Snippets & Enhanced SERP Badges</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Technical SEO Packages" />
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

export default TechnicalSeoPackagesPage;

import React, { useState } from 'react';
import {
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaAward,
  FaGoogle,
  FaChevronRight,
  FaHeadset,
  FaClock
} from 'react-icons/fa';
import './SouthAfricaDigitalMarketingPage.css';

const SouthAfricaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "South Africa Digital Marketing Agency",
    city: "South Africa",
    region: "South Africa (Johannesburg, Cape Town, Durban)",
    tagline: "PREMIER SOUTH AFRICA GROWTH AGENCY · JHB & CAPE TOWN",
    heroHighlight: "South Africa Digital Marketing & SEO Agency",
    leadDesc: "Scale your South African business nationwide with high-impact SEO, precision Google Ads, and conversion-optimized web architecture.",
    bodyDesc: "Covering Johannesburg, Cape Town, Durban, Pretoria, and nationwide—Webmok delivers performance-driven digital marketing that captures South African search intent and scales revenue.",
    stats: [
  {
    "num": "390%",
    "label": "Average South Africa Traffic Growth"
  },
  {
    "num": "5.4x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "50+",
    "label": "South African Brands Scaled"
  },
  {
    "num": "100%",
    "label": "POPIA Compliant"
  }
],
    plans: [
  {
    "name": "South Africa Starter",
    "badge": "Local City Focus",
    "usdPrice": "699",
    "inrPrice": "54,999",
    "desc": "Ideal for local South African service businesses, clinics, and professional practices looking to dominate their local metro.",
    "features": [
      "Up to 20 High-Intent South African Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local South African Citations & Directory Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "South Africa Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,349",
    "inrPrice": "1,09,999",
    "desc": "Comprehensive multi-city campaign combining national SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Keywords Across Major SA Metros",
      "Google Search Ads (PPC) Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Articles/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "South Africa Enterprise Pro",
    "badge": "National Dominance",
    "usdPrice": "2,699",
    "inrPrice": "2,19,999",
    "desc": "Full-scale market dominance for established South African national brands, corporate firms, and e-commerce stores.",
    "features": [
      "Nationwide Keyword Takeover (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke Web Redesign & High-Converting Funnels",
      "Authoritative South African PR Backlinks & Outreach",
      "Dedicated Account Squad & Daily Slack Access",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How fast can our South African business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Are your digital campaigns compliant with South Africa’s POPIA legislation?",
    "a": "Yes, 100% compliant. All tracking, lead generation forms, and data handling strictly adhere to the Protection of Personal Information Act (POPIA)."
  },
  {
    "q": "How do you coordinate with South African clients in SAST (UTC+2)?",
    "a": "Our team is aligned with South African Standard Time (SAST), ensuring real-time communication and seamless strategy meetings."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our South African digital marketing packages are month-to-month."
  }
]
  };

  return (
    <div className="wm-intl-southafrica-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-southafrica-hero-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-hero-grid">
            <div className="wm-intl-southafrica-hero-left">
              <span className="wm-intl-southafrica-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-southafrica-hero-title-dual">
                <span className="wm-intl-southafrica-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-southafrica-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-southafrica-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-southafrica-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-southafrica-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-southafrica-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-southafrica-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-southafrica-hero-right-trust">
              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-clutch">C</div>
              </div>

              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-upwork">up</div>
              </div>

              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-southafrica-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-southafrica-stats-strip">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-southafrica-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-southafrica-intro-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-intro-grid">
            <div className="wm-intl-southafrica-intro-left">
              <span className="wm-intl-southafrica-intro-tag">NATIONWIDE GROWTH SPECIALISTS</span>
              <h2 className="wm-intl-southafrica-intro-title">
                High-Impact Digital Marketing for 
                <span>South African Business</span>
              </h2>
            </div>
            <div className="wm-intl-southafrica-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Webmok Technologies is a trusted digital partner helping South African companies expand market share across Gauteng, Western Cape, and KwaZulu-Natal. We combine technical SEO, Google Ads precision, and high-converting web engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-southafrica-numbers-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-numbers-heading">
            <span className="wm-intl-southafrica-numbers-subtitle">SOUTH AFRICA METRICS</span>
            <h2>
              Proven Track Record Across 
              <span>South Africa</span>
            </h2>
          </div>

          <div className="wm-intl-southafrica-numstats-grid">
            <div key="0" className="wm-intl-southafrica-numstat-item">
              <div className="wm-intl-southafrica-numstat-number">{"50+"}</div>
              <div className="wm-intl-southafrica-numstat-line"></div>
              <p>{"South African Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-southafrica-numstat-item">
              <div className="wm-intl-southafrica-numstat-number">{"R15M+"}</div>
              <div className="wm-intl-southafrica-numstat-line"></div>
              <p>{"Client Value Generated"}</p>
            </div>
            <div key="2" className="wm-intl-southafrica-numstat-item">
              <div className="wm-intl-southafrica-numstat-number">{"99.2%"}</div>
              <div className="wm-intl-southafrica-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-southafrica-numstat-item">
              <div className="wm-intl-southafrica-numstat-number">{"24/7"}</div>
              <div className="wm-intl-southafrica-numstat-line"></div>
              <p>{"SAST Timezone Aligned"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-southafrica-include-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-include-grid">
            <div className="wm-intl-southafrica-include-content">
              <span className="wm-intl-southafrica-include-tag">FULL-STACK SUITE</span>
              <h2 className="wm-intl-southafrica-include-title">
                What Our South Africa Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We deliver comprehensive South African SEO, Google Local 3-Pack Maps optimization across major cities, high-intent Google and Meta ads, and conversion-focused web architecture.</p>
              <p>You get a single reliable partner driving sales calls, form leads, and e-commerce revenue across South Africa.</p>

              <div className="wm-intl-southafrica-feature-list">
                <div key="National & Regional South Africa SEO (Johannesburg, Cape Town, Durban)" className="wm-intl-southafrica-feature-item">
                  <span className="chk">✓</span>
                  <span>{"National & Regional South Africa SEO (Johannesburg, Cape Town, Durban)"}</span>
                </div>
                <div key="High-Intent Google Search & Display Ad Management" className="wm-intl-southafrica-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Intent Google Search & Display Ad Management"}</span>
                </div>
                <div key="Targeted Social Media Ads (Meta, LinkedIn & TikTok)" className="wm-intl-southafrica-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Targeted Social Media Ads (Meta, LinkedIn & TikTok)"}</span>
                </div>
                <div key="High-Speed Mobile-First Website Design & Conversion Optimization" className="wm-intl-southafrica-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Mobile-First Website Design & Conversion Optimization"}</span>
                </div>
                <div key="South African Local Citations & Business Directory Submissions" className="wm-intl-southafrica-feature-item">
                  <span className="chk">✓</span>
                  <span>{"South African Local Citations & Business Directory Submissions"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & POPIA-Compliant Tracking" className="wm-intl-southafrica-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & POPIA-Compliant Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-southafrica-include-image">
              <img src="/onpage2.avif" alt="South Africa Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-southafrica-importance-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-importance-box">
            <h2 className="wm-intl-southafrica-importance-title">
              Why Digital Dominance Matters in 
              <span>South Africa</span>
            </h2>

            <div className="wm-intl-southafrica-importance-content">
              <p>South African consumers and businesses increasingly rely on mobile search to find products and services. Ranking at the top of Google is the most reliable way to secure high-intent inbound demand.</p>
              <p>Without aggressive technical SEO and targeted customer acquisition funnels, competing brands capture your high-value market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-southafrica-why-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-why-grid">
            <div className="wm-intl-southafrica-why-content">
              <span className="wm-intl-southafrica-why-tag">THE WEBMOK DIFFERENCE</span>
              <h2 className="wm-intl-southafrica-why-title">
                Engineered for South Africa. 
                <span className="s1"> Proven Performance.</span>{' '}
                <span className="s2">Compounding ROI.</span>
              </h2>

              <div className="wm-intl-southafrica-why-text">
                <p>We don’t believe in cookie-cutter marketing. Every South African campaign is custom engineered around your industry unit economics, competitor vulnerabilities, and local search intent.</p>
                <p>With transparent monthly reporting and zero mandatory lock-in, we keep our focus 100% on your revenue growth.</p>
              </div>
            </div>

            <div className="wm-intl-southafrica-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-southafrica-pricing-section" id="pricing-plans">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-header">
            <span className="wm-intl-southafrica-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-southafrica-sec-title">Flexible South Africa Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-southafrica-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-southafrica-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-southafrica-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-southafrica-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-southafrica-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-southafrica-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-southafrica-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-southafrica-card-top">
                    {plan.badge && <span className="wm-intl-southafrica-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-southafrica-card-name">{plan.name}</h3>
                    <p className="wm-intl-southafrica-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-southafrica-card-pricing">
                    <div className="wm-intl-southafrica-price-row">
                      <span className="wm-intl-southafrica-price-val">{displayPrice}</span>
                      <span className="wm-intl-southafrica-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-southafrica-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-southafrica-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-southafrica-card-action">
                    <button
                      type="button"
                      className="wm-intl-southafrica-select-btn"
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
      <section className="wm-intl-southafrica-benefits-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-benefits-grid">
            <div className="wm-intl-southafrica-benefits-content">
              <span className="wm-intl-southafrica-benefits-tag">PROVEN OUTCOMES</span>
              <h2 className="wm-intl-southafrica-benefits-title">
                Transforming South African Businesses into 
                <span>Market Leaders</span>
              </h2>

              <div className="wm-intl-southafrica-benefits-text">
                <p>Our tailored South African digital marketing campaigns produce compounding organic rankings that lower your customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified sales calls and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-southafrica-benefits-points">
                <div key="Top Google 3-Pack Rankings Across Johannesburg, Cape Town & Durban" className="wm-intl-southafrica-benefit-point">
                  <span className="wm-intl-southafrica-benefit-icon">✓</span>
                  <span>{"Top Google 3-Pack Rankings Across Johannesburg, Cape Town & Durban"}</span>
                </div>
                <div key="Average 35%+ Reduction in Cost Per Inbound Lead" className="wm-intl-southafrica-benefit-point">
                  <span className="wm-intl-southafrica-benefit-icon">✓</span>
                  <span>{"Average 35%+ Reduction in Cost Per Inbound Lead"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-southafrica-benefit-point">
                  <span className="wm-intl-southafrica-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-southafrica-benefit-point">
                  <span className="wm-intl-southafrica-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-southafrica-benefits-image">
              <img src="/onpagebenifts.jpg" alt="South Africa Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-southafrica-advantage-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-header">
            <span className="wm-intl-southafrica-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-southafrica-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-southafrica-sec-bar"></div>
          </div>

          <div className="wm-intl-southafrica-advantage-grid">
            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-southafrica-faqs-section">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-header">
            <span className="wm-intl-southafrica-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-southafrica-sec-title">Common Queries About Our South Africa Growth Packages</h2>
            <div className="wm-intl-southafrica-sec-bar"></div>
          </div>

          <div className="wm-intl-southafrica-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-southafrica-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-southafrica-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-southafrica-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-southafrica-bottom-banner">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-banner-inner">
            <div className="wm-intl-southafrica-banner-text">
              <h2>Ready to Accelerate Growth in South Africa?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-southafrica-banner-btns">
              <button
                type="button"
                className="wm-intl-southafrica-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-southafrica-bbtn-quote"
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

export default SouthAfricaDigitalMarketingPage;

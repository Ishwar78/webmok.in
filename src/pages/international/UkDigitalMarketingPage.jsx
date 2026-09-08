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
import './UkDigitalMarketingPage.css';

const UkDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('GBP');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "UK Digital Marketing Agency",
    city: "United Kingdom",
    region: "UK Nationwide (England, Scotland, Wales, NI)",
    tagline: "NATIONWIDE DIGITAL MARKETING AGENCY · UK",
    heroHighlight: "UK Digital Marketing & SEO Agency",
    leadDesc: "Scale your UK business nationwide with high-authority technical SEO, precision Google Ads, and conversion-focused digital architecture.",
    bodyDesc: "Covering London, Manchester, Birmingham, Leeds, Edinburgh, Glasgow, and Bristol—Webmok helps UK companies outperform competitors and capture British search intent.",
    stats: [
  {
    "num": "420%",
    "label": "Average UK Client Traffic Lift"
  },
  {
    "num": "5.6x",
    "label": "Average ROAS on UK Google Ads"
  },
  {
    "num": "95+",
    "label": "UK Clients Scaled"
  },
  {
    "num": "100%",
    "label": "UK GDPR & DPA 2018 Compliant"
  }
],
    plans: [
  {
    "name": "UK Regional Growth",
    "badge": "City / Region Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local UK service providers, clinics, law firms, and boutique stores looking to dominate their local city.",
    "features": [
      "Up to 20 High-Intent UK Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local UK Citations & Yell Directory Submissions",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "UK National Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,549",
    "inrPrice": "1,24,999",
    "desc": "Comprehensive multi-city campaign combining national UK SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Keywords Across Major UK Metros",
      "Google Search Ads (PPC) Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Articles/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "UK Enterprise Monopoly",
    "badge": "National Dominance",
    "usdPrice": "3,099",
    "inrPrice": "2,49,999",
    "desc": "Full-scale market dominance for established UK national brands, corporate firms, and fast-growing e-commerce stores.",
    "features": [
      "Nationwide Keyword Takeover (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke Web Redesign & High-Converting Funnels",
      "Authoritative UK PR Backlinks & Media Placements",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How fast can our UK business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Are your digital campaigns compliant with UK GDPR and DPA 2018?",
    "a": "Yes, 100% compliant. All analytics, lead capture mechanisms, and tracking strictly adhere to UK GDPR and Data Protection Act 2018 regulations."
  },
  {
    "q": "How do you coordinate with UK businesses during British working hours (GMT/BST)?",
    "a": "Our dedicated UK team is fully aligned with UK business hours, ensuring seamless live communication and strategy syncs."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our UK digital marketing packages are month-to-month."
  }
]
  };

  return (
    <div className="wm-intl-unitedkingdom-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-unitedkingdom-hero-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-hero-grid">
            <div className="wm-intl-unitedkingdom-hero-left">
              <span className="wm-intl-unitedkingdom-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-unitedkingdom-hero-title-dual">
                <span className="wm-intl-unitedkingdom-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-unitedkingdom-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-unitedkingdom-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-unitedkingdom-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-unitedkingdom-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-unitedkingdom-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-unitedkingdom-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-unitedkingdom-hero-right-trust">
              <div className="wm-intl-unitedkingdom-trust-card">
                <div className="wm-intl-unitedkingdom-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-unitedkingdom-tcard-badge wm-intl-unitedkingdom-badge-clutch">C</div>
              </div>

              <div className="wm-intl-unitedkingdom-trust-card">
                <div className="wm-intl-unitedkingdom-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-unitedkingdom-tcard-badge wm-intl-unitedkingdom-badge-upwork">up</div>
              </div>

              <div className="wm-intl-unitedkingdom-trust-card">
                <div className="wm-intl-unitedkingdom-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-unitedkingdom-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-unitedkingdom-tcard-badge wm-intl-unitedkingdom-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-unitedkingdom-trust-card">
                <div className="wm-intl-unitedkingdom-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-unitedkingdom-tcard-badge wm-intl-unitedkingdom-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-unitedkingdom-stats-strip">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-unitedkingdom-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-unitedkingdom-intro-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-intro-grid">
            <div className="wm-intl-unitedkingdom-intro-left">
              <span className="wm-intl-unitedkingdom-intro-tag">NATIONWIDE UK GROWTH</span>
              <h2 className="wm-intl-unitedkingdom-intro-title">
                High-Performance Digital Marketing for 
                <span>UK Businesses</span>
              </h2>
            </div>
            <div className="wm-intl-unitedkingdom-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Webmok Technologies is a trusted digital partner helping UK brands capture high-intent commercial search traffic and scale revenue. We combine technical SEO, precision PPC, and bespoke web engineering tailored for the British consumer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-unitedkingdom-numbers-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-numbers-heading">
            <span className="wm-intl-unitedkingdom-numbers-subtitle">UK MARKET METRICS</span>
            <h2>
              Measurable Outcomes Across the 
              <span>United Kingdom</span>
            </h2>
          </div>

          <div className="wm-intl-unitedkingdom-numstats-grid">
            <div key="0" className="wm-intl-unitedkingdom-numstat-item">
              <div className="wm-intl-unitedkingdom-numstat-number">{"95+"}</div>
              <div className="wm-intl-unitedkingdom-numstat-line"></div>
              <p>{"UK Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-unitedkingdom-numstat-item">
              <div className="wm-intl-unitedkingdom-numstat-number">{"£19M+"}</div>
              <div className="wm-intl-unitedkingdom-numstat-line"></div>
              <p>{"Generated Client Value"}</p>
            </div>
            <div key="2" className="wm-intl-unitedkingdom-numstat-item">
              <div className="wm-intl-unitedkingdom-numstat-number">{"99.3%"}</div>
              <div className="wm-intl-unitedkingdom-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-unitedkingdom-numstat-item">
              <div className="wm-intl-unitedkingdom-numstat-number">{"24/7"}</div>
              <div className="wm-intl-unitedkingdom-numstat-line"></div>
              <p>{"GMT/BST Timezone Support"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-unitedkingdom-include-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-include-grid">
            <div className="wm-intl-unitedkingdom-include-content">
              <span className="wm-intl-unitedkingdom-include-tag">FULL UK SUITE</span>
              <h2 className="wm-intl-unitedkingdom-include-title">
                What Our UK Digital Marketing 
                <span>Packages Include</span>
              </h2>
              <p>We deliver nationwide UK SEO, Google Local 3-Pack Maps optimization across British cities, high-intent Google Ads and Meta campaigns, and conversion-focused web architecture.</p>
              <p>You get a single reliable partner driving sales calls, form leads, and e-commerce revenue across the UK.</p>

              <div className="wm-intl-unitedkingdom-feature-list">
                <div key="Nationwide & Regional UK SEO (London, Manchester, Midlands, Scotland)" className="wm-intl-unitedkingdom-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Nationwide & Regional UK SEO (London, Manchester, Midlands, Scotland)"}</span>
                </div>
                <div key="Google Local Services Ads (LSA) & High-Intent Search Ads" className="wm-intl-unitedkingdom-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Google Local Services Ads (LSA) & High-Intent Search Ads"}</span>
                </div>
                <div key="UK Geo-Targeted Social Media Ads (Meta, LinkedIn & TikTok)" className="wm-intl-unitedkingdom-feature-item">
                  <span className="chk">✓</span>
                  <span>{"UK Geo-Targeted Social Media Ads (Meta, LinkedIn & TikTok)"}</span>
                </div>
                <div key="High-Speed Mobile-First Website Design & Conversion Optimization" className="wm-intl-unitedkingdom-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Mobile-First Website Design & Conversion Optimization"}</span>
                </div>
                <div key="UK Business Directory Citations & High-DA Backlink Outreach" className="wm-intl-unitedkingdom-feature-item">
                  <span className="chk">✓</span>
                  <span>{"UK Business Directory Citations & High-DA Backlink Outreach"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-unitedkingdom-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-unitedkingdom-include-image">
              <img src="/onpage1.avif" alt="UK Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-unitedkingdom-importance-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-importance-box">
            <h2 className="wm-intl-unitedkingdom-importance-title">
              Why Digital Dominance is Essential for 
              <span>UK Brands</span>
            </h2>

            <div className="wm-intl-unitedkingdom-importance-content">
              <p>The UK has one of the world’s most digital-first economies, with over 90% of consumers researching purchases online. Standing out in competitive British sectors requires search precision.</p>
              <p>Without aggressive technical SEO and targeted customer acquisition funnels, local and national competitors will capture your market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-unitedkingdom-why-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-why-grid">
            <div className="wm-intl-unitedkingdom-why-content">
              <span className="wm-intl-unitedkingdom-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-unitedkingdom-why-title">
                Engineered for the UK. 
                <span className="s1"> Proven Performance.</span>{' '}
                <span className="s2">Compounding ROI.</span>
              </h2>

              <div className="wm-intl-unitedkingdom-why-text">
                <p>We don’t believe in cookie-cutter marketing. Every UK campaign is custom engineered around your sector unit economics, competitor vulnerabilities, and British search intent.</p>
                <p>With transparent monthly reporting and zero mandatory lock-in, we keep our focus 100% on your revenue growth.</p>
              </div>
            </div>

            <div className="wm-intl-unitedkingdom-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-unitedkingdom-pricing-section" id="pricing-plans">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-sec-header">
            <span className="wm-intl-unitedkingdom-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-unitedkingdom-sec-title">Flexible United Kingdom Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-unitedkingdom-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-unitedkingdom-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-unitedkingdom-curr-btn ${currency === 'GBP' ? 'active' : ''}`}
                onClick={() => setCurrency('GBP')}
              >
                £ GBP
              </button>
              <button
                type="button"
                className={`wm-intl-unitedkingdom-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-unitedkingdom-curr-btn ${currency === 'EUR' ? 'active' : ''}`}
                onClick={() => setCurrency('EUR')}
              >
                € EUR
              </button>
              <button
                type="button"
                className={`wm-intl-unitedkingdom-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-unitedkingdom-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-unitedkingdom-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-unitedkingdom-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-unitedkingdom-card-top">
                    {plan.badge && <span className="wm-intl-unitedkingdom-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-unitedkingdom-card-name">{plan.name}</h3>
                    <p className="wm-intl-unitedkingdom-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-unitedkingdom-card-pricing">
                    <div className="wm-intl-unitedkingdom-price-row">
                      <span className="wm-intl-unitedkingdom-price-val">{displayPrice}</span>
                      <span className="wm-intl-unitedkingdom-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-unitedkingdom-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-unitedkingdom-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-unitedkingdom-card-action">
                    <button
                      type="button"
                      className="wm-intl-unitedkingdom-select-btn"
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
      <section className="wm-intl-unitedkingdom-benefits-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-benefits-grid">
            <div className="wm-intl-unitedkingdom-benefits-content">
              <span className="wm-intl-unitedkingdom-benefits-tag">PROVEN OUTCOMES</span>
              <h2 className="wm-intl-unitedkingdom-benefits-title">
                Transforming UK Businesses into 
                <span>Category Leaders</span>
              </h2>

              <div className="wm-intl-unitedkingdom-benefits-text">
                <p>Our tailored UK digital marketing campaigns produce compounding organic rankings that lower your customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified sales calls and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-unitedkingdom-benefits-points">
                <div key="Top Google 3-Pack Rankings Across Key UK Metros" className="wm-intl-unitedkingdom-benefit-point">
                  <span className="wm-intl-unitedkingdom-benefit-icon">✓</span>
                  <span>{"Top Google 3-Pack Rankings Across Key UK Metros"}</span>
                </div>
                <div key="Average 36%+ Reduction in Cost Per Qualified Inbound Lead" className="wm-intl-unitedkingdom-benefit-point">
                  <span className="wm-intl-unitedkingdom-benefit-icon">✓</span>
                  <span>{"Average 36%+ Reduction in Cost Per Qualified Inbound Lead"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-unitedkingdom-benefit-point">
                  <span className="wm-intl-unitedkingdom-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-unitedkingdom-benefit-point">
                  <span className="wm-intl-unitedkingdom-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-unitedkingdom-benefits-image">
              <img src="/onpagebenifts.jpg" alt="UK Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-unitedkingdom-advantage-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-sec-header">
            <span className="wm-intl-unitedkingdom-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-unitedkingdom-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-unitedkingdom-sec-bar"></div>
          </div>

          <div className="wm-intl-unitedkingdom-advantage-grid">
            <div className="wm-intl-unitedkingdom-advantage-card">
              <div className="wm-intl-unitedkingdom-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-unitedkingdom-advantage-card">
              <div className="wm-intl-unitedkingdom-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-unitedkingdom-advantage-card">
              <div className="wm-intl-unitedkingdom-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-unitedkingdom-advantage-card">
              <div className="wm-intl-unitedkingdom-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-unitedkingdom-faqs-section">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-sec-header">
            <span className="wm-intl-unitedkingdom-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-unitedkingdom-sec-title">Common Queries About Our United Kingdom Growth Packages</h2>
            <div className="wm-intl-unitedkingdom-sec-bar"></div>
          </div>

          <div className="wm-intl-unitedkingdom-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-unitedkingdom-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-unitedkingdom-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-unitedkingdom-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-unitedkingdom-bottom-banner">
        <div className="wm-intl-unitedkingdom-container">
          <div className="wm-intl-unitedkingdom-banner-inner">
            <div className="wm-intl-unitedkingdom-banner-text">
              <h2>Ready to Accelerate Growth in United Kingdom?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-unitedkingdom-banner-btns">
              <button
                type="button"
                className="wm-intl-unitedkingdom-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-unitedkingdom-bbtn-quote"
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

export default UkDigitalMarketingPage;

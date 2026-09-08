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
import './LondonDigitalMarketingPage.css';

const LondonDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('GBP');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "London Digital Marketing Agency",
    city: "London",
    region: "Greater London & The City, UK",
    tagline: "PREMIER GREATER LONDON GROWTH AGENCY · LONDON, UK",
    heroHighlight: "London Digital Marketing & SEO Agency",
    leadDesc: "Outrank Mayfair, Canary Wharf, Shoreditch, and City of London competitors with high-authority technical SEO, precision PPC, and luxury web engineering.",
    bodyDesc: "In one of the most competitive financial and commercial capitals in the world, Webmok builds bulletproof organic ranking engines and high-ROAS paid funnels that capture elite London commercial intent.",
    stats: [
  {
    "num": "480%",
    "label": "Average London Client Traffic Surge"
  },
  {
    "num": "6.1x",
    "label": "Average ROAS on London Paid Media"
  },
  {
    "num": "70+",
    "label": "London Brands Scaled"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    plans: [
  {
    "name": "London Starter",
    "badge": "Local London",
    "usdPrice": "899",
    "inrPrice": "72,999",
    "desc": "Perfect for boutique London service providers, clinics, law firms, and boutique practices looking to rank #1 locally.",
    "features": [
      "Up to 20 High-Intent London Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local Citations & London Directory Submissions",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "London Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,699",
    "inrPrice": "1,39,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 50 Keywords (Greater London & UK Nationwide)",
      "Google Search Ads (PPC) Management",
      "Multi-Borough Landing Page Architecture",
      "High-Authority Content Marketing (6 Articles/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "London Enterprise Pro",
    "badge": "Capital Dominance",
    "usdPrice": "3,299",
    "inrPrice": "2,69,999",
    "desc": "Full-scale market dominance for established London enterprises, financial firms, and fast-growing tech powerhouses.",
    "features": [
      "Unlimited Keywords & Regional/National/Global Footprint",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom Web Redesign & High-Converting Funnels",
      "Authoritative British PR Backlinks & Media Placements",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How fast can our London business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Can you target specific London boroughs (e.g. Westminster, Camden, Kensington, City of London)?",
    "a": "Yes! We create dedicated multi-location SEO architectures tailored to each specific borough and high-value London postal code."
  },
  {
    "q": "Do you manage Google Ads and LinkedIn advertising for London B2B & corporate firms?",
    "a": "Yes, our team handles end-to-end paid search and B2B LinkedIn campaigns with daily bid optimization, negative keyword filtering, and A/B testing."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our London digital marketing packages are month-to-month."
  }
]
  };

  return (
    <div className="wm-intl-london-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-london-hero-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-hero-grid">
            <div className="wm-intl-london-hero-left">
              <span className="wm-intl-london-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-london-hero-title-dual">
                <span className="wm-intl-london-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-london-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-london-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-london-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-london-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-london-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-london-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-london-hero-right-trust">
              <div className="wm-intl-london-trust-card">
                <div className="wm-intl-london-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-london-tcard-badge wm-intl-london-badge-clutch">C</div>
              </div>

              <div className="wm-intl-london-trust-card">
                <div className="wm-intl-london-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-london-tcard-badge wm-intl-london-badge-upwork">up</div>
              </div>

              <div className="wm-intl-london-trust-card">
                <div className="wm-intl-london-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-london-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-london-tcard-badge wm-intl-london-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-london-trust-card">
                <div className="wm-intl-london-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-london-tcard-badge wm-intl-london-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-london-stats-strip">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-london-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-london-intro-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-intro-grid">
            <div className="wm-intl-london-intro-left">
              <span className="wm-intl-london-intro-tag">GREATER LONDON SPECIALISTS</span>
              <h2 className="wm-intl-london-intro-title">
                High-Impact Digital Growth for 
                <span>London Enterprises</span>
              </h2>
            </div>
            <div className="wm-intl-london-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> London demands an uncompromising standard of digital execution. Webmok equips London businesses with the technical SEO precision, Google Ads agility, and conversion-optimized web assets required to dominate the capital’s marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-london-numbers-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-numbers-heading">
            <span className="wm-intl-london-numbers-subtitle">LONDON MARKET TELEMETRY</span>
            <h2>
              Proven Track Record Across 
              <span>Greater London</span>
            </h2>
          </div>

          <div className="wm-intl-london-numstats-grid">
            <div key="0" className="wm-intl-london-numstat-item">
              <div className="wm-intl-london-numstat-number">{"70+"}</div>
              <div className="wm-intl-london-numstat-line"></div>
              <p>{"London Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-london-numstat-item">
              <div className="wm-intl-london-numstat-number">{"£22M+"}</div>
              <div className="wm-intl-london-numstat-line"></div>
              <p>{"Tracked Pipeline Value"}</p>
            </div>
            <div key="2" className="wm-intl-london-numstat-item">
              <div className="wm-intl-london-numstat-number">{"99.5%"}</div>
              <div className="wm-intl-london-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-london-numstat-item">
              <div className="wm-intl-london-numstat-number">{"< 28s"}</div>
              <div className="wm-intl-london-numstat-line"></div>
              <p>{"Direct Response Time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-london-include-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-include-grid">
            <div className="wm-intl-london-include-content">
              <span className="wm-intl-london-include-tag">ELITE LONDON SUITE</span>
              <h2 className="wm-intl-london-include-title">
                What Our London Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We combine hyper-local London Google Maps ranking, high-intent Google Search and LinkedIn Ads, technical SEO fixes, and high-speed web engineering.</p>
              <p>You get an elite digital squad focused strictly on driving qualified inbound leads and corporate pipeline.</p>

              <div className="wm-intl-london-feature-list">
                <div key="Hyper-Local London & Multi-Borough SEO (Central London, City, Canary Wharf, West End)" className="wm-intl-london-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Hyper-Local London & Multi-Borough SEO (Central London, City, Canary Wharf, West End)"}</span>
                </div>
                <div key="High-Intent Google Search & LinkedIn ABM Paid Campaigns" className="wm-intl-london-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Intent Google Search & LinkedIn ABM Paid Campaigns"}</span>
                </div>
                <div key="Targeted Social Media Ad Campaigns (Meta, TikTok & YouTube)" className="wm-intl-london-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Targeted Social Media Ad Campaigns (Meta, TikTok & YouTube)"}</span>
                </div>
                <div key="High-Speed Conversion Landing Page Development" className="wm-intl-london-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Conversion Landing Page Development"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-london-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
                <div key="Dedicated GMT/BST Timezone Senior Account Director" className="wm-intl-london-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dedicated GMT/BST Timezone Senior Account Director"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-london-include-image">
              <img src="/onpage2.avif" alt="London Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-london-importance-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-importance-box">
            <h2 className="wm-intl-london-importance-title">
              Why Digital Dominance is Essential in 
              <span>London</span>
            </h2>

            <div className="wm-intl-london-importance-content">
              <p>Greater London is home to nearly 10 million consumers and the highest concentration of high-net-worth buyers in Europe. Second-page rankings yield zero return.</p>
              <p>Without aggressive search optimization and high-converting ad funnels, competing London firms capture your high-value market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-london-why-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-why-grid">
            <div className="wm-intl-london-why-content">
              <span className="wm-intl-london-why-tag">THE WEBMOK DIFFERENCE</span>
              <h2 className="wm-intl-london-why-title">
                Engineered for London. 
                <span className="s1"> Elite Precision.</span>{' '}
                <span className="s2">Compounding Revenue.</span>
              </h2>

              <div className="wm-intl-london-why-text">
                <p>We don’t believe in generic marketing templates. Every London campaign is engineered around your specific sector economics, competitor gaps, and localized search intent.</p>
                <p>With transparent monthly reporting and zero mandatory lock-in, we keep our focus 100% on your bottom-line growth.</p>
              </div>
            </div>

            <div className="wm-intl-london-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-london-pricing-section" id="pricing-plans">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-header">
            <span className="wm-intl-london-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-london-sec-title">Flexible London Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-london-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-london-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-london-curr-btn ${currency === 'GBP' ? 'active' : ''}`}
                onClick={() => setCurrency('GBP')}
              >
                £ GBP
              </button>
              <button
                type="button"
                className={`wm-intl-london-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-london-curr-btn ${currency === 'EUR' ? 'active' : ''}`}
                onClick={() => setCurrency('EUR')}
              >
                € EUR
              </button>
              <button
                type="button"
                className={`wm-intl-london-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-london-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-london-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-london-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-london-card-top">
                    {plan.badge && <span className="wm-intl-london-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-london-card-name">{plan.name}</h3>
                    <p className="wm-intl-london-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-london-card-pricing">
                    <div className="wm-intl-london-price-row">
                      <span className="wm-intl-london-price-val">{displayPrice}</span>
                      <span className="wm-intl-london-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-london-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-london-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-london-card-action">
                    <button
                      type="button"
                      className="wm-intl-london-select-btn"
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
      <section className="wm-intl-london-benefits-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-benefits-grid">
            <div className="wm-intl-london-benefits-content">
              <span className="wm-intl-london-benefits-tag">MEASURABLE OUTCOMES</span>
              <h2 className="wm-intl-london-benefits-title">
                Transforming London Businesses into 
                <span>Industry Leaders</span>
              </h2>

              <div className="wm-intl-london-benefits-text">
                <p>Our tailored London digital marketing campaigns produce compounding organic rankings that lower your customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified corporate calls and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-london-benefits-points">
                <div key="Top 3 Google Maps Rankings Across Central London & Boroughs" className="wm-intl-london-benefit-point">
                  <span className="wm-intl-london-benefit-icon">✓</span>
                  <span>{"Top 3 Google Maps Rankings Across Central London & Boroughs"}</span>
                </div>
                <div key="Average 38%+ Reduction in Cost Per Inbound Lead" className="wm-intl-london-benefit-point">
                  <span className="wm-intl-london-benefit-icon">✓</span>
                  <span>{"Average 38%+ Reduction in Cost Per Inbound Lead"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-london-benefit-point">
                  <span className="wm-intl-london-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-london-benefit-point">
                  <span className="wm-intl-london-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-london-benefits-image">
              <img src="/onpagebenifts.jpg" alt="London Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-london-advantage-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-header">
            <span className="wm-intl-london-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-london-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-london-sec-bar"></div>
          </div>

          <div className="wm-intl-london-advantage-grid">
            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-london-faqs-section">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-header">
            <span className="wm-intl-london-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-london-sec-title">Common Queries About Our London Growth Packages</h2>
            <div className="wm-intl-london-sec-bar"></div>
          </div>

          <div className="wm-intl-london-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-london-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-london-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-london-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-london-bottom-banner">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-banner-inner">
            <div className="wm-intl-london-banner-text">
              <h2>Ready to Accelerate Growth in London?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-london-banner-btns">
              <button
                type="button"
                className="wm-intl-london-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-london-bbtn-quote"
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

export default LondonDigitalMarketingPage;

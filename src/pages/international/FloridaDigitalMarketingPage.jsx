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
import './FloridaDigitalMarketingPage.css';

const FloridaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Florida Digital Marketing Agency",
    city: "Florida",
    region: "Florida Statewide, USA",
    tagline: "STATEWIDE DIGITAL GROWTH AGENCY · FLORIDA, USA",
    heroHighlight: "Florida Digital Marketing Services",
    leadDesc: "Dominate the Sunshine State with statewide SEO, precision paid ads, and high-conversion web development tailored for Florida’s booming economy.",
    bodyDesc: "Covering Orlando, Tampa, Jacksonville, Fort Lauderdale, Naples, and Palm Beach—Webmok helps Florida companies build dominant digital pipelines and scale revenue.",
    stats: [
  {
    "num": "380%",
    "label": "Average Florida Traffic Growth"
  },
  {
    "num": "6.2x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "120+",
    "label": "Florida Campaigns Delivered"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    plans: [
  {
    "name": "Florida Growth Core",
    "badge": "Local Footprint",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Ideal for local businesses targeting a single Florida metro area with focused SEO and Google Maps optimization.",
    "features": [
      "Up to 25 Target Florida Keywords",
      "Full Google Business Profile Geo-Optimization",
      "Local Citations Across Florida Directories",
      "Technical SEO Fixes & Core Web Vitals Tuning",
      "Monthly Telemetry & Ranking Progress Report"
    ]
  },
  {
    "name": "Florida Multi-City Scale",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Engineered for businesses expanding across 2-4 Florida cities with combined SEO and Google Ads management.",
    "features": [
      "Up to 50 Multi-City Florida Keywords",
      "Google Ads (PPC) Campaign Setup & Bid Optimization",
      "Multi-Location Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Strategy Consultation"
    ]
  },
  {
    "name": "Florida Dominance",
    "badge": "Statewide Leader",
    "usdPrice": "3,199",
    "inrPrice": "2,59,999",
    "desc": "Statewide market takeover for enterprises, regional healthcare networks, law firms, and multi-location franchises.",
    "features": [
      "Statewide Keyword Takeover (100+ Keywords)",
      "Full-Funnel Omni-Channel Ads (Google, Meta, YouTube)",
      "Bespoke High-Converting Web Portal / CMS Development",
      "Tier-1 Press Release & Media Placements",
      "Dedicated Senior Account Director & Daily Slack Access",
      "Custom CRM Integration & Lead Attribution"
    ]
  }
],
    faqs: [
  {
    "q": "Can Webmok help our business rank in multiple Florida cities (e.g. Miami, Orlando, Tampa)?",
    "a": "Yes! We build scalable multi-location SEO architectures with dedicated city landing pages, localized schema markup, and regional Google Business Profiles to rank across multiple Florida territories."
  },
  {
    "q": "What types of Florida businesses do you specialize in?",
    "a": "We have proven track records in legal practices, healthcare clinics, home services, real estate development, hospitality, B2B SaaS, and e-commerce across Florida."
  },
  {
    "q": "How do you handle Florida Google Ads management?",
    "a": "We conduct deep negative-keyword filtering, geo-fenced radius targeting, and day-parting optimizations to ensure your ad spend only captures ready-to-buy Florida consumers."
  },
  {
    "q": "What is the onboarding timeline?",
    "a": "We can complete full onboarding, account audits, tracking setup, and campaign launch within 5 business days."
  }
]
  };

  return (
    <div className="wm-intl-florida-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-florida-hero-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-hero-grid">
            <div className="wm-intl-florida-hero-left">
              <span className="wm-intl-florida-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-florida-hero-title-dual">
                <span className="wm-intl-florida-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-florida-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-florida-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-florida-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-florida-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-florida-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-florida-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-florida-hero-right-trust">
              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-clutch">C</div>
              </div>

              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-upwork">up</div>
              </div>

              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-florida-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-florida-stats-strip">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-florida-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-florida-intro-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-intro-grid">
            <div className="wm-intl-florida-intro-left">
              <span className="wm-intl-florida-intro-tag">STATEWIDE PENETRATION</span>
              <h2 className="wm-intl-florida-intro-title">
                Digital Marketing Designed for 
                <span>Florida Enterprise</span>
              </h2>
            </div>
            <div className="wm-intl-florida-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> From tourism and real estate to healthcare, legal, and financial services, Webmok provides Florida businesses with an unfair digital advantage through high-velocity SEO and precision customer acquisition funnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-florida-numbers-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-numbers-heading">
            <span className="wm-intl-florida-numbers-subtitle">STATEWIDE METRICS</span>
            <h2>
              Measurable Impact Across 
              <span>Florida Markets</span>
            </h2>
          </div>

          <div className="wm-intl-florida-numstats-grid">
            <div key="0" className="wm-intl-florida-numstat-item">
              <div className="wm-intl-florida-numstat-number">{"120+"}</div>
              <div className="wm-intl-florida-numstat-line"></div>
              <p>{"Florida Clients Served"}</p>
            </div>
            <div key="1" className="wm-intl-florida-numstat-item">
              <div className="wm-intl-florida-numstat-number">{"$24M+"}</div>
              <div className="wm-intl-florida-numstat-line"></div>
              <p>{"Tracked Pipeline Value"}</p>
            </div>
            <div key="2" className="wm-intl-florida-numstat-item">
              <div className="wm-intl-florida-numstat-number">{"99.1%"}</div>
              <div className="wm-intl-florida-numstat-line"></div>
              <p>{"Client Satisfaction"}</p>
            </div>
            <div key="3" className="wm-intl-florida-numstat-item">
              <div className="wm-intl-florida-numstat-number">{"24/7"}</div>
              <div className="wm-intl-florida-numstat-line"></div>
              <p>{"Real-Time Monitoring"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-florida-include-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-include-grid">
            <div className="wm-intl-florida-include-content">
              <span className="wm-intl-florida-include-tag">CAPABILITY MATRIX</span>
              <h2 className="wm-intl-florida-include-title">
                What Our Florida Digital Marketing 
                <span>Packages Include</span>
              </h2>
              <p>We deliver comprehensive multi-city SEO targeting Orlando, Tampa, Jacksonville, and South Florida, alongside Google LSA ads, Facebook/Instagram campaigns, and speed-optimized websites.</p>
              <p>You get a single accountable partner driving leads, calls, and sales across the entire state.</p>

              <div className="wm-intl-florida-feature-list">
                <div key="Multi-Location Florida SEO & Google Maps Architecture" className="wm-intl-florida-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Multi-Location Florida SEO & Google Maps Architecture"}</span>
                </div>
                <div key="Geo-Targeted Google Search, Display & Performance Max Ads" className="wm-intl-florida-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Geo-Targeted Google Search, Display & Performance Max Ads"}</span>
                </div>
                <div key="Florida Commercial & Residential Lead Generation Funnels" className="wm-intl-florida-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Florida Commercial & Residential Lead Generation Funnels"}</span>
                </div>
                <div key="High-Speed Mobile-First Website Design & CRO" className="wm-intl-florida-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Mobile-First Website Design & CRO"}</span>
                </div>
                <div key="Reputation Management & Review Generation Automation" className="wm-intl-florida-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Reputation Management & Review Generation Automation"}</span>
                </div>
                <div key="Bi-Weekly Strategic KPI Reviews & Transparent Dashboard" className="wm-intl-florida-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Bi-Weekly Strategic KPI Reviews & Transparent Dashboard"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-florida-include-image">
              <img src="/onpage2.avif" alt="Florida Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-florida-importance-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-importance-box">
            <h2 className="wm-intl-florida-importance-title">
              The Strategic Imperative for 
              <span>Florida Brands</span>
            </h2>

            <div className="wm-intl-florida-importance-content">
              <p>Florida has become the epicenter of US population and business migration. With intense competition in every major metro, generic marketing yields zero return.</p>
              <p>Winning in Florida requires surgical local search optimization, localized content that speaks to regional demographics, and rapid conversion optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-florida-why-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-why-grid">
            <div className="wm-intl-florida-why-content">
              <span className="wm-intl-florida-why-tag">WHY WEBMOK</span>
              <h2 className="wm-intl-florida-why-title">
                Performance Driven. 
                <span className="s1"> Zero Excuses.</span>{' '}
                <span className="s2">Proven Scalability.</span>
              </h2>

              <div className="wm-intl-florida-why-text">
                <p>We combine data science with creative storytelling to capture high-intent buyers exactly when they are searching for your services across Florida.</p>
                <p>Our team monitors your ad bids, search positions, and conversion funnels daily to maximize every dollar invested.</p>
              </div>
            </div>

            <div className="wm-intl-florida-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-florida-pricing-section" id="pricing-plans">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-header">
            <span className="wm-intl-florida-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-florida-sec-title">Flexible Florida Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-florida-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-florida-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-florida-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-florida-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-florida-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-florida-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-florida-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-florida-card-top">
                    {plan.badge && <span className="wm-intl-florida-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-florida-card-name">{plan.name}</h3>
                    <p className="wm-intl-florida-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-florida-card-pricing">
                    <div className="wm-intl-florida-price-row">
                      <span className="wm-intl-florida-price-val">{displayPrice}</span>
                      <span className="wm-intl-florida-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-florida-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-florida-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-florida-card-action">
                    <button
                      type="button"
                      className="wm-intl-florida-select-btn"
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
      <section className="wm-intl-florida-benefits-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-benefits-grid">
            <div className="wm-intl-florida-benefits-content">
              <span className="wm-intl-florida-benefits-tag">MEASURABLE ADVANTAGE</span>
              <h2 className="wm-intl-florida-benefits-title">
                Generating Consistent Revenue Across 
                <span>Florida Metros</span>
              </h2>

              <div className="wm-intl-florida-benefits-text">
                <p>Our Florida digital marketing campaigns turn your web presence into an automated customer acquisition engine that works 24/7.</p>
                <p>We scale what converts and ruthlessly eliminate ad waste.</p>
              </div>

              <div className="wm-intl-florida-benefits-points">
                <div key="Top Rankings in Multiple Florida Metro Searches" className="wm-intl-florida-benefit-point">
                  <span className="wm-intl-florida-benefit-icon">✓</span>
                  <span>{"Top Rankings in Multiple Florida Metro Searches"}</span>
                </div>
                <div key="Higher Quality Inbound Phone Calls & Form Submissions" className="wm-intl-florida-benefit-point">
                  <span className="wm-intl-florida-benefit-icon">✓</span>
                  <span>{"Higher Quality Inbound Phone Calls & Form Submissions"}</span>
                </div>
                <div key="Predictable Cost Per Lead and Scalable Customer Acquisition" className="wm-intl-florida-benefit-point">
                  <span className="wm-intl-florida-benefit-icon">✓</span>
                  <span>{"Predictable Cost Per Lead and Scalable Customer Acquisition"}</span>
                </div>
                <div key="End-to-End Analytics with Full Revenue Clarity" className="wm-intl-florida-benefit-point">
                  <span className="wm-intl-florida-benefit-icon">✓</span>
                  <span>{"End-to-End Analytics with Full Revenue Clarity"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-florida-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Florida Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-florida-advantage-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-header">
            <span className="wm-intl-florida-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-florida-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-florida-sec-bar"></div>
          </div>

          <div className="wm-intl-florida-advantage-grid">
            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-florida-faqs-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-header">
            <span className="wm-intl-florida-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-florida-sec-title">Common Queries About Our Florida Growth Packages</h2>
            <div className="wm-intl-florida-sec-bar"></div>
          </div>

          <div className="wm-intl-florida-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-florida-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-florida-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-florida-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-florida-bottom-banner">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-banner-inner">
            <div className="wm-intl-florida-banner-text">
              <h2>Ready to Accelerate Growth in Florida?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-florida-banner-btns">
              <button
                type="button"
                className="wm-intl-florida-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-florida-bbtn-quote"
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

export default FloridaDigitalMarketingPage;

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
import './AustraliaDigitalMarketingPage.css';

const AustraliaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('AUD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Australia Digital Marketing Agency",
    city: "Australia",
    region: "Australia Nationwide (NSW, VIC, QLD, WA, SA)",
    tagline: "NATIONWIDE DIGITAL MARKETING AGENCY · AUSTRALIA",
    heroHighlight: "Australia Digital Marketing & SEO Agency",
    leadDesc: "Scale your Australian business nationwide with high-authority technical SEO, precision Google Ads, and conversion-focused digital architecture.",
    bodyDesc: "Covering Sydney, Melbourne, Brisbane, Perth, Adelaide, and the Gold Coast—Webmok helps Australian companies outperform competitors and capture Aussie search intent.",
    stats: [
  {
    "num": "440%",
    "label": "Average Australia Traffic Surge"
  },
  {
    "num": "5.9x",
    "label": "Average ROAS on Australian Paid Media"
  },
  {
    "num": "85+",
    "label": "Australian Brands Scaled"
  },
  {
    "num": "100%",
    "label": "Privacy Act 1988 Compliant"
  }
],
    plans: [
  {
    "name": "Australia Regional Growth",
    "badge": "City Focus",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Ideal for local Australian service providers, clinics, law firms, and boutique stores looking to dominate their local city.",
    "features": [
      "Up to 20 High-Intent Australian Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local Australian Citations & TrueLocal Submissions",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Australia National Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Comprehensive multi-city campaign combining national Australian SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Keywords Across Major Australian Metros",
      "Google Search Ads (PPC) Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Articles/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "Australia Enterprise Monopoly",
    "badge": "National Dominance",
    "usdPrice": "3,199",
    "inrPrice": "2,59,999",
    "desc": "Full-scale market dominance for established Australian national brands, corporate firms, and fast-growing e-commerce stores.",
    "features": [
      "Nationwide Keyword Takeover (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke Web Redesign & High-Converting Funnels",
      "Authoritative Australian PR Backlinks & Media Placements",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How fast can our Australian business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Are your digital campaigns compliant with Australia’s Privacy Act 1988?",
    "a": "Yes, 100% compliant. All analytics, lead capture mechanisms, and tracking strictly adhere to Australian Privacy Principles (APPs)."
  },
  {
    "q": "How do you coordinate with Australian businesses during AEST/AWST working hours?",
    "a": "Our dedicated Australian team is fully aligned with Australian business hours, ensuring seamless live communication and strategy meetings."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Australian digital marketing packages are month-to-month."
  }
]
  };

  return (
    <div className="wm-intl-australia-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-australia-hero-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-hero-grid">
            <div className="wm-intl-australia-hero-left">
              <span className="wm-intl-australia-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-australia-hero-title-dual">
                <span className="wm-intl-australia-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-australia-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-australia-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-australia-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-australia-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-australia-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-australia-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-australia-hero-right-trust">
              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-clutch">C</div>
              </div>

              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-upwork">up</div>
              </div>

              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-australia-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-australia-stats-strip">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-australia-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-australia-intro-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-intro-grid">
            <div className="wm-intl-australia-intro-left">
              <span className="wm-intl-australia-intro-tag">NATIONWIDE AUSTRALIAN GROWTH</span>
              <h2 className="wm-intl-australia-intro-title">
                High-Performance Digital Marketing for 
                <span>Australian Business</span>
              </h2>
            </div>
            <div className="wm-intl-australia-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Webmok Technologies is a trusted digital partner helping Australian brands capture high-intent commercial search traffic and scale revenue. We combine technical SEO, precision PPC, and bespoke web engineering tailored for the Australian market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-australia-numbers-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-numbers-heading">
            <span className="wm-intl-australia-numbers-subtitle">AUSTRALIA MARKET METRICS</span>
            <h2>
              Measurable Outcomes Across 
              <span>Australia</span>
            </h2>
          </div>

          <div className="wm-intl-australia-numstats-grid">
            <div key="0" className="wm-intl-australia-numstat-item">
              <div className="wm-intl-australia-numstat-number">{"85+"}</div>
              <div className="wm-intl-australia-numstat-line"></div>
              <p>{"Australian Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-australia-numstat-item">
              <div className="wm-intl-australia-numstat-number">{"A$24M+"}</div>
              <div className="wm-intl-australia-numstat-line"></div>
              <p>{"Generated Client Value"}</p>
            </div>
            <div key="2" className="wm-intl-australia-numstat-item">
              <div className="wm-intl-australia-numstat-number">{"99.4%"}</div>
              <div className="wm-intl-australia-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-australia-numstat-item">
              <div className="wm-intl-australia-numstat-number">{"24/7"}</div>
              <div className="wm-intl-australia-numstat-line"></div>
              <p>{"AEST/AWST Timezone Support"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-australia-include-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-include-grid">
            <div className="wm-intl-australia-include-content">
              <span className="wm-intl-australia-include-tag">FULL AUSTRALIA SUITE</span>
              <h2 className="wm-intl-australia-include-title">
                What Our Australia Digital Marketing 
                <span>Packages Include</span>
              </h2>
              <p>We deliver nationwide Australian SEO, Google Local 3-Pack Maps optimization across Australian cities, high-intent Google Ads and Meta campaigns, and conversion-focused web architecture.</p>
              <p>You get a single reliable partner driving sales calls, form leads, and e-commerce revenue across Australia.</p>

              <div className="wm-intl-australia-feature-list">
                <div key="Nationwide & Regional Australian SEO (Sydney, Melbourne, Brisbane, Perth)" className="wm-intl-australia-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Nationwide & Regional Australian SEO (Sydney, Melbourne, Brisbane, Perth)"}</span>
                </div>
                <div key="Google Local Services Ads & High-Intent Search Ads" className="wm-intl-australia-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Google Local Services Ads & High-Intent Search Ads"}</span>
                </div>
                <div key="Australia Geo-Targeted Social Media Ads (Meta, LinkedIn & TikTok)" className="wm-intl-australia-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Australia Geo-Targeted Social Media Ads (Meta, LinkedIn & TikTok)"}</span>
                </div>
                <div key="High-Speed Mobile-First Website Design & Conversion Optimization" className="wm-intl-australia-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Mobile-First Website Design & Conversion Optimization"}</span>
                </div>
                <div key="Australian Business Directory Citations & High-DA Backlinks" className="wm-intl-australia-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Australian Business Directory Citations & High-DA Backlinks"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-australia-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-australia-include-image">
              <img src="/onpage1.avif" alt="Australia Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-australia-importance-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-importance-box">
            <h2 className="wm-intl-australia-importance-title">
              Why Digital Dominance is Essential for 
              <span>Australian Brands</span>
            </h2>

            <div className="wm-intl-australia-importance-content">
              <p>Australia is a tech-savvy, high-spending economy where over 92% of commercial purchasing decisions begin with an online search. Standing out requires search precision.</p>
              <p>Without aggressive technical SEO and targeted customer acquisition funnels, competitors will capture your high-value market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-australia-why-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-why-grid">
            <div className="wm-intl-australia-why-content">
              <span className="wm-intl-australia-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-australia-why-title">
                Engineered for Australia. 
                <span className="s1"> Proven Performance.</span>{' '}
                <span className="s2">Compounding ROI.</span>
              </h2>

              <div className="wm-intl-australia-why-text">
                <p>We don’t believe in cookie-cutter marketing. Every Australian campaign is custom engineered around your sector unit economics, competitor vulnerabilities, and Aussie search intent.</p>
                <p>With transparent monthly reporting and zero mandatory lock-in, we keep our focus 100% on your revenue growth.</p>
              </div>
            </div>

            <div className="wm-intl-australia-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-australia-pricing-section" id="pricing-plans">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-header">
            <span className="wm-intl-australia-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-australia-sec-title">Flexible Australia Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-australia-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-australia-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-australia-curr-btn ${currency === 'AUD' ? 'active' : ''}`}
                onClick={() => setCurrency('AUD')}
              >
                A$ AUD
              </button>
              <button
                type="button"
                className={`wm-intl-australia-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-australia-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-australia-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-australia-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-australia-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-australia-card-top">
                    {plan.badge && <span className="wm-intl-australia-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-australia-card-name">{plan.name}</h3>
                    <p className="wm-intl-australia-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-australia-card-pricing">
                    <div className="wm-intl-australia-price-row">
                      <span className="wm-intl-australia-price-val">{displayPrice}</span>
                      <span className="wm-intl-australia-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-australia-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-australia-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-australia-card-action">
                    <button
                      type="button"
                      className="wm-intl-australia-select-btn"
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
      <section className="wm-intl-australia-benefits-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-benefits-grid">
            <div className="wm-intl-australia-benefits-content">
              <span className="wm-intl-australia-benefits-tag">PROVEN OUTCOMES</span>
              <h2 className="wm-intl-australia-benefits-title">
                Transforming Australian Businesses into 
                <span>Category Leaders</span>
              </h2>

              <div className="wm-intl-australia-benefits-text">
                <p>Our tailored Australian digital marketing campaigns produce compounding organic rankings that lower your customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified sales calls and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-australia-benefits-points">
                <div key="Top Google 3-Pack Rankings Across Sydney, Melbourne, Brisbane & Perth" className="wm-intl-australia-benefit-point">
                  <span className="wm-intl-australia-benefit-icon">✓</span>
                  <span>{"Top Google 3-Pack Rankings Across Sydney, Melbourne, Brisbane & Perth"}</span>
                </div>
                <div key="Average 37%+ Reduction in Cost Per Qualified Inbound Lead" className="wm-intl-australia-benefit-point">
                  <span className="wm-intl-australia-benefit-icon">✓</span>
                  <span>{"Average 37%+ Reduction in Cost Per Qualified Inbound Lead"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-australia-benefit-point">
                  <span className="wm-intl-australia-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-australia-benefit-point">
                  <span className="wm-intl-australia-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-australia-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Australia Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-australia-advantage-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-header">
            <span className="wm-intl-australia-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-australia-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-australia-sec-bar"></div>
          </div>

          <div className="wm-intl-australia-advantage-grid">
            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-australia-faqs-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-header">
            <span className="wm-intl-australia-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-australia-sec-title">Common Queries About Our Australia Growth Packages</h2>
            <div className="wm-intl-australia-sec-bar"></div>
          </div>

          <div className="wm-intl-australia-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-australia-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-australia-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-australia-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-australia-bottom-banner">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-banner-inner">
            <div className="wm-intl-australia-banner-text">
              <h2>Ready to Accelerate Growth in Australia?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-australia-banner-btns">
              <button
                type="button"
                className="wm-intl-australia-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-australia-bbtn-quote"
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

export default AustraliaDigitalMarketingPage;

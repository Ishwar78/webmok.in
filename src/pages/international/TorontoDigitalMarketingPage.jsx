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
import './TorontoDigitalMarketingPage.css';

const TorontoDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('CAD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Toronto Digital Marketing Agency",
    city: "Toronto",
    region: "Greater Toronto Area (GTA), Ontario, Canada",
    tagline: "PREMIER GTA GROWTH AGENCY · TORONTO, CANADA",
    heroHighlight: "Toronto Digital Marketing & SEO Agency",
    leadDesc: "Dominate the Greater Toronto Area with high-velocity SEO, Google Ads, and conversion-focused web architecture built for Canada’s economic engine.",
    bodyDesc: "From Bay Street financial services and Downtown tech startups to Mississauga commerce, Vaughan retail, and Markham tech corridors—Webmok scales Toronto brands.",
    stats: [
  {
    "num": "430%",
    "label": "Average GTA Traffic Growth"
  },
  {
    "num": "5.7x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "65+",
    "label": "Toronto & GTA Clients"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    plans: [
  {
    "name": "Toronto Starter",
    "badge": "Local GTA",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Perfect for local Toronto service providers, clinics, law firms, and boutique stores looking to rank #1 locally.",
    "features": [
      "Up to 20 High-Intent Toronto Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local Citations & GTA Directory Submissions",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Toronto Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Keywords (GTA & Ontario Statewide)",
      "Google Search Ads (PPC) Management",
      "Multi-Location Landing Page Architecture",
      "High-Authority Content Marketing (6 Articles/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "Toronto Enterprise Pro",
    "badge": "GTA Dominance",
    "usdPrice": "3,199",
    "inrPrice": "2,59,999",
    "desc": "Full-scale market dominance for established Toronto enterprises, corporate firms, and fast-growing tech startups.",
    "features": [
      "Unlimited Keywords & Regional/National Footprint",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom Web Redesign & High-Converting Funnels",
      "Authoritative Canadian PR Backlinks & Outreach",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How fast can our Toronto business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Can you target specific GTA municipalities (e.g. Mississauga, Markham, Vaughan, Brampton)?",
    "a": "Yes! We create dedicated multi-location SEO architectures tailored to each specific municipality and neighborhood across the GTA."
  },
  {
    "q": "Do you manage Google Ads and social media advertising for Toronto companies?",
    "a": "Yes, our team handles end-to-end paid search and paid social campaigns with daily bid optimization, negative keyword filtering, and A/B testing."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Toronto digital marketing packages are month-to-month."
  }
]
  };

  return (
    <div className="wm-intl-toronto-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-toronto-hero-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-hero-grid">
            <div className="wm-intl-toronto-hero-left">
              <span className="wm-intl-toronto-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-toronto-hero-title-dual">
                <span className="wm-intl-toronto-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-toronto-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-toronto-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-toronto-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-toronto-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-toronto-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-toronto-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-toronto-hero-right-trust">
              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-clutch">C</div>
              </div>

              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-upwork">up</div>
              </div>

              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-toronto-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-toronto-stats-strip">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-toronto-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-toronto-intro-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-intro-grid">
            <div className="wm-intl-toronto-intro-left">
              <span className="wm-intl-toronto-intro-tag">GTA MARKET SPECIALISTS</span>
              <h2 className="wm-intl-toronto-intro-title">
                High-Impact Digital Growth for 
                <span>Toronto Enterprises</span>
              </h2>
            </div>
            <div className="wm-intl-toronto-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Toronto is Canada’s commercial epicenter. Webmok equips Toronto businesses with the technical SEO precision, Google Ads agility, and conversion-optimized web assets required to dominate the GTA marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-toronto-numbers-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-numbers-heading">
            <span className="wm-intl-toronto-numbers-subtitle">GTA TELEMETRY</span>
            <h2>
              Proven Track Record Across the 
              <span>Greater Toronto Area</span>
            </h2>
          </div>

          <div className="wm-intl-toronto-numstats-grid">
            <div key="0" className="wm-intl-toronto-numstat-item">
              <div className="wm-intl-toronto-numstat-number">{"65+"}</div>
              <div className="wm-intl-toronto-numstat-line"></div>
              <p>{"Toronto Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-toronto-numstat-item">
              <div className="wm-intl-toronto-numstat-number">{"C$16M+"}</div>
              <div className="wm-intl-toronto-numstat-line"></div>
              <p>{"Tracked Pipeline Revenue"}</p>
            </div>
            <div key="2" className="wm-intl-toronto-numstat-item">
              <div className="wm-intl-toronto-numstat-number">{"99.4%"}</div>
              <div className="wm-intl-toronto-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-toronto-numstat-item">
              <div className="wm-intl-toronto-numstat-number">{"< 28s"}</div>
              <div className="wm-intl-toronto-numstat-line"></div>
              <p>{"Direct Response Time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-toronto-include-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-include-grid">
            <div className="wm-intl-toronto-include-content">
              <span className="wm-intl-toronto-include-tag">FULL GTA SUITE</span>
              <h2 className="wm-intl-toronto-include-title">
                What Our Toronto Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We combine hyper-local GTA Google Maps ranking, high-intent Google Search and Meta Ads, technical SEO fixes, and high-speed web engineering.</p>
              <p>You get a dedicated digital squad focused strictly on driving qualified inbound leads and revenue.</p>

              <div className="wm-intl-toronto-feature-list">
                <div key="Hyper-Local GTA & Multi-Borough SEO (Downtown, North York, Mississauga, etc.)" className="wm-intl-toronto-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Hyper-Local GTA & Multi-Borough SEO (Downtown, North York, Mississauga, etc.)"}</span>
                </div>
                <div key="High-Intent Google Search & Local Services Ads (LSA)" className="wm-intl-toronto-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Intent Google Search & Local Services Ads (LSA)"}</span>
                </div>
                <div key="Targeted Social Media Ad Campaigns (Meta, LinkedIn & TikTok)" className="wm-intl-toronto-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Targeted Social Media Ad Campaigns (Meta, LinkedIn & TikTok)"}</span>
                </div>
                <div key="High-Speed Conversion Landing Page Development" className="wm-intl-toronto-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Conversion Landing Page Development"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-toronto-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
                <div key="Dedicated EST Timezone Senior Account Director" className="wm-intl-toronto-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dedicated EST Timezone Senior Account Director"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-toronto-include-image">
              <img src="/onpage2.avif" alt="Toronto Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-toronto-importance-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-importance-box">
            <h2 className="wm-intl-toronto-importance-title">
              Why Digital Dominance is Essential in 
              <span>Toronto</span>
            </h2>

            <div className="wm-intl-toronto-importance-content">
              <p>The Greater Toronto Area is home to over 6 million consumers and thousands of competitive businesses. Capturing top Google rankings and high-intent paid traffic is the fastest path to market leadership.</p>
              <p>Without aggressive search optimization, local GTA competitors will capture your highest-value customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-toronto-why-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-why-grid">
            <div className="wm-intl-toronto-why-content">
              <span className="wm-intl-toronto-why-tag">THE WEBMOK DIFFERENCE</span>
              <h2 className="wm-intl-toronto-why-title">
                Engineered for Toronto. 
                <span className="s1"> Proven Speed.</span>{' '}
                <span className="s2">Compounding Revenue.</span>
              </h2>

              <div className="wm-intl-toronto-why-text">
                <p>We don’t believe in generic marketing templates. Every Toronto campaign is engineered around your specific sector economics, competitor gaps, and localized search intent.</p>
                <p>With transparent monthly reporting and zero mandatory lock-in, we keep our focus 100% on your bottom-line growth.</p>
              </div>
            </div>

            <div className="wm-intl-toronto-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-toronto-pricing-section" id="pricing-plans">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-header">
            <span className="wm-intl-toronto-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-toronto-sec-title">Flexible Toronto Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-toronto-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-toronto-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-toronto-curr-btn ${currency === 'CAD' ? 'active' : ''}`}
                onClick={() => setCurrency('CAD')}
              >
                C$ CAD
              </button>
              <button
                type="button"
                className={`wm-intl-toronto-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-toronto-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-toronto-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-toronto-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-toronto-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-toronto-card-top">
                    {plan.badge && <span className="wm-intl-toronto-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-toronto-card-name">{plan.name}</h3>
                    <p className="wm-intl-toronto-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-toronto-card-pricing">
                    <div className="wm-intl-toronto-price-row">
                      <span className="wm-intl-toronto-price-val">{displayPrice}</span>
                      <span className="wm-intl-toronto-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-toronto-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-toronto-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-toronto-card-action">
                    <button
                      type="button"
                      className="wm-intl-toronto-select-btn"
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
      <section className="wm-intl-toronto-benefits-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-benefits-grid">
            <div className="wm-intl-toronto-benefits-content">
              <span className="wm-intl-toronto-benefits-tag">MEASURABLE OUTCOMES</span>
              <h2 className="wm-intl-toronto-benefits-title">
                Transforming Toronto Businesses into 
                <span>Industry Leaders</span>
              </h2>

              <div className="wm-intl-toronto-benefits-text">
                <p>Our tailored Toronto digital marketing campaigns produce compounding organic rankings that lower your customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified sales calls and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-toronto-benefits-points">
                <div key="Top 3 Google Maps Rankings Across the Greater Toronto Area" className="wm-intl-toronto-benefit-point">
                  <span className="wm-intl-toronto-benefit-icon">✓</span>
                  <span>{"Top 3 Google Maps Rankings Across the Greater Toronto Area"}</span>
                </div>
                <div key="Average 35%+ Reduction in Cost Per Inbound Lead" className="wm-intl-toronto-benefit-point">
                  <span className="wm-intl-toronto-benefit-icon">✓</span>
                  <span>{"Average 35%+ Reduction in Cost Per Inbound Lead"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-toronto-benefit-point">
                  <span className="wm-intl-toronto-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-toronto-benefit-point">
                  <span className="wm-intl-toronto-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-toronto-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Toronto Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-toronto-advantage-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-header">
            <span className="wm-intl-toronto-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-toronto-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-toronto-sec-bar"></div>
          </div>

          <div className="wm-intl-toronto-advantage-grid">
            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-toronto-faqs-section">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-header">
            <span className="wm-intl-toronto-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-toronto-sec-title">Common Queries About Our Toronto Growth Packages</h2>
            <div className="wm-intl-toronto-sec-bar"></div>
          </div>

          <div className="wm-intl-toronto-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-toronto-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-toronto-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-toronto-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-toronto-bottom-banner">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-banner-inner">
            <div className="wm-intl-toronto-banner-text">
              <h2>Ready to Accelerate Growth in Toronto?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-toronto-banner-btns">
              <button
                type="button"
                className="wm-intl-toronto-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-toronto-bbtn-quote"
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

export default TorontoDigitalMarketingPage;

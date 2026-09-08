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
import './MelbourneDigitalMarketingPage.css';

const MelbourneDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('AUD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Melbourne Digital Marketing Agency",
    city: "Melbourne",
    region: "Victoria (VIC), Australia",
    tagline: "PREMIER MELBOURNE GROWTH AGENCY · VICTORIA, AUSTRALIA",
    heroHighlight: "Melbourne Digital Marketing & SEO Agency",
    leadDesc: "Scale your Melbourne brand with creative social campaigns, precision Google Ads, and aggressive technical SEO built for Victoria’s culture and commercial capital.",
    bodyDesc: "From Melbourne CBD and Southbank corporate powerhouses to Richmond creative hubs, Docklands commerce, and St Kilda retail—Webmok engineers explosive digital growth.",
    stats: [
  {
    "num": "450%",
    "label": "Average Melbourne Client Traffic Surge"
  },
  {
    "num": "5.8x",
    "label": "Average ROAS on Melbourne Paid Media"
  },
  {
    "num": "60+",
    "label": "Melbourne Brands Scaled"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    plans: [
  {
    "name": "Melbourne Starter",
    "badge": "Local Melbourne",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Perfect for local Melbourne service providers, clinics, law firms, and boutique practices looking to rank #1 locally.",
    "features": [
      "Up to 20 High-Intent Melbourne Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local Citations & Melbourne Directory Submissions",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Melbourne Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 50 Keywords (Greater Melbourne & Victoria Wide)",
      "Google Search Ads (PPC) Management",
      "Multi-Suburb Landing Page Architecture",
      "High-Authority Content Marketing (6 Articles/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "Melbourne Enterprise Pro",
    "badge": "Victorian Dominance",
    "usdPrice": "3,199",
    "inrPrice": "2,59,999",
    "desc": "Full-scale market dominance for established Melbourne enterprises, corporate firms, and fast-growing tech powerhouses.",
    "features": [
      "Unlimited Keywords & Regional/National Footprint",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom Web Redesign & High-Converting Funnels",
      "Authoritative Australian PR Backlinks & Media Placements",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How fast can our Melbourne business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Can you target specific Melbourne suburbs (e.g. South Yarra, Richmond, Fitzroy, Brighton)?",
    "a": "Yes! We create dedicated multi-location SEO architectures tailored to each specific suburb and high-value Victorian territory."
  },
  {
    "q": "Do you manage Google Ads and Meta advertising for Melbourne brands?",
    "a": "Yes, our team handles end-to-end paid search and paid social campaigns with daily bid optimization, negative keyword filtering, and A/B testing."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Melbourne digital marketing packages are month-to-month."
  }
]
  };

  return (
    <div className="wm-intl-melbourne-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-melbourne-hero-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-hero-grid">
            <div className="wm-intl-melbourne-hero-left">
              <span className="wm-intl-melbourne-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-melbourne-hero-title-dual">
                <span className="wm-intl-melbourne-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-melbourne-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-melbourne-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-melbourne-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-melbourne-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-melbourne-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-melbourne-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-melbourne-hero-right-trust">
              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-clutch">C</div>
              </div>

              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-upwork">up</div>
              </div>

              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-melbourne-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-melbourne-stats-strip">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-melbourne-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-melbourne-intro-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-intro-grid">
            <div className="wm-intl-melbourne-intro-left">
              <span className="wm-intl-melbourne-intro-tag">MELBOURNE MARKET SPECIALISTS</span>
              <h2 className="wm-intl-melbourne-intro-title">
                High-Impact Digital Growth for 
                <span>Melbourne Enterprises</span>
              </h2>
            </div>
            <div className="wm-intl-melbourne-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Melbourne is Australia’s cultural and creative capital. Webmok equips Melbourne businesses with the technical SEO precision, Google Ads agility, and conversion-optimized web assets required to dominate the Victorian marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-melbourne-numbers-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-numbers-heading">
            <span className="wm-intl-melbourne-numbers-subtitle">MELBOURNE MARKET TELEMETRY</span>
            <h2>
              Proven Track Record Across 
              <span>Greater Melbourne</span>
            </h2>
          </div>

          <div className="wm-intl-melbourne-numstats-grid">
            <div key="0" className="wm-intl-melbourne-numstat-item">
              <div className="wm-intl-melbourne-numstat-number">{"60+"}</div>
              <div className="wm-intl-melbourne-numstat-line"></div>
              <p>{"Melbourne Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-melbourne-numstat-item">
              <div className="wm-intl-melbourne-numstat-number">{"A$18M+"}</div>
              <div className="wm-intl-melbourne-numstat-line"></div>
              <p>{"Tracked Pipeline Value"}</p>
            </div>
            <div key="2" className="wm-intl-melbourne-numstat-item">
              <div className="wm-intl-melbourne-numstat-number">{"99.5%"}</div>
              <div className="wm-intl-melbourne-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-melbourne-numstat-item">
              <div className="wm-intl-melbourne-numstat-number">{"< 28s"}</div>
              <div className="wm-intl-melbourne-numstat-line"></div>
              <p>{"Direct Response Time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-melbourne-include-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-include-grid">
            <div className="wm-intl-melbourne-include-content">
              <span className="wm-intl-melbourne-include-tag">FULL MELBOURNE SUITE</span>
              <h2 className="wm-intl-melbourne-include-title">
                What Our Melbourne Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We combine hyper-local Melbourne Google Maps ranking, high-intent Google Search and Meta Ads, technical SEO fixes, and high-speed web engineering.</p>
              <p>You get a dedicated digital squad focused strictly on driving qualified inbound leads and corporate revenue.</p>

              <div className="wm-intl-melbourne-feature-list">
                <div key="Hyper-Local Melbourne & Suburb SEO (CBD, South Yarra, Richmond, Carlton, Docklands)" className="wm-intl-melbourne-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Hyper-Local Melbourne & Suburb SEO (CBD, South Yarra, Richmond, Carlton, Docklands)"}</span>
                </div>
                <div key="High-Intent Google Search & Performance Max Paid Campaigns" className="wm-intl-melbourne-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Intent Google Search & Performance Max Paid Campaigns"}</span>
                </div>
                <div key="Targeted Social Media Ad Campaigns (Meta, TikTok & LinkedIn)" className="wm-intl-melbourne-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Targeted Social Media Ad Campaigns (Meta, TikTok & LinkedIn)"}</span>
                </div>
                <div key="High-Speed Conversion Landing Page Development" className="wm-intl-melbourne-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Conversion Landing Page Development"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-melbourne-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
                <div key="Dedicated AEST Timezone Senior Account Director" className="wm-intl-melbourne-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dedicated AEST Timezone Senior Account Director"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-melbourne-include-image">
              <img src="/onpage2.avif" alt="Melbourne Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-melbourne-importance-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-importance-box">
            <h2 className="wm-intl-melbourne-importance-title">
              Why Digital Dominance is Essential in 
              <span>Melbourne</span>
            </h2>

            <div className="wm-intl-melbourne-importance-content">
              <p>Greater Melbourne is home to over 5 million discerning consumers and thousands of competitive businesses. Capturing top Google rankings and high-intent paid traffic is the fastest path to market leadership.</p>
              <p>Without aggressive search optimization and high-converting ad funnels, competing Melbourne firms capture your high-value market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-melbourne-why-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-why-grid">
            <div className="wm-intl-melbourne-why-content">
              <span className="wm-intl-melbourne-why-tag">THE WEBMOK DIFFERENCE</span>
              <h2 className="wm-intl-melbourne-why-title">
                Engineered for Melbourne. 
                <span className="s1"> Creative Precision.</span>{' '}
                <span className="s2">Compounding Revenue.</span>
              </h2>

              <div className="wm-intl-melbourne-why-text">
                <p>We don’t believe in generic marketing templates. Every Melbourne campaign is engineered around your specific sector economics, competitor gaps, and localized search intent.</p>
                <p>With transparent monthly reporting and zero mandatory lock-in, we keep our focus 100% on your bottom-line growth.</p>
              </div>
            </div>

            <div className="wm-intl-melbourne-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-melbourne-pricing-section" id="pricing-plans">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-header">
            <span className="wm-intl-melbourne-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-melbourne-sec-title">Flexible Melbourne Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-melbourne-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-melbourne-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-melbourne-curr-btn ${currency === 'AUD' ? 'active' : ''}`}
                onClick={() => setCurrency('AUD')}
              >
                A$ AUD
              </button>
              <button
                type="button"
                className={`wm-intl-melbourne-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-melbourne-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-melbourne-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-melbourne-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-melbourne-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-melbourne-card-top">
                    {plan.badge && <span className="wm-intl-melbourne-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-melbourne-card-name">{plan.name}</h3>
                    <p className="wm-intl-melbourne-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-melbourne-card-pricing">
                    <div className="wm-intl-melbourne-price-row">
                      <span className="wm-intl-melbourne-price-val">{displayPrice}</span>
                      <span className="wm-intl-melbourne-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-melbourne-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-melbourne-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-melbourne-card-action">
                    <button
                      type="button"
                      className="wm-intl-melbourne-select-btn"
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
      <section className="wm-intl-melbourne-benefits-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-benefits-grid">
            <div className="wm-intl-melbourne-benefits-content">
              <span className="wm-intl-melbourne-benefits-tag">MEASURABLE OUTCOMES</span>
              <h2 className="wm-intl-melbourne-benefits-title">
                Transforming Melbourne Businesses into 
                <span>Industry Leaders</span>
              </h2>

              <div className="wm-intl-melbourne-benefits-text">
                <p>Our tailored Melbourne digital marketing campaigns produce compounding organic rankings that lower your customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified corporate calls and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-melbourne-benefits-points">
                <div key="Top 3 Google Maps Rankings Across Greater Melbourne Suburbs" className="wm-intl-melbourne-benefit-point">
                  <span className="wm-intl-melbourne-benefit-icon">✓</span>
                  <span>{"Top 3 Google Maps Rankings Across Greater Melbourne Suburbs"}</span>
                </div>
                <div key="Average 37%+ Reduction in Cost Per Inbound Lead" className="wm-intl-melbourne-benefit-point">
                  <span className="wm-intl-melbourne-benefit-icon">✓</span>
                  <span>{"Average 37%+ Reduction in Cost Per Inbound Lead"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-melbourne-benefit-point">
                  <span className="wm-intl-melbourne-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-melbourne-benefit-point">
                  <span className="wm-intl-melbourne-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-melbourne-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Melbourne Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-melbourne-advantage-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-header">
            <span className="wm-intl-melbourne-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-melbourne-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-melbourne-sec-bar"></div>
          </div>

          <div className="wm-intl-melbourne-advantage-grid">
            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-melbourne-faqs-section">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-header">
            <span className="wm-intl-melbourne-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-melbourne-sec-title">Common Queries About Our Melbourne Growth Packages</h2>
            <div className="wm-intl-melbourne-sec-bar"></div>
          </div>

          <div className="wm-intl-melbourne-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-melbourne-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-melbourne-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-melbourne-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-melbourne-bottom-banner">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-banner-inner">
            <div className="wm-intl-melbourne-banner-text">
              <h2>Ready to Accelerate Growth in Melbourne?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-melbourne-banner-btns">
              <button
                type="button"
                className="wm-intl-melbourne-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-melbourne-bbtn-quote"
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

export default MelbourneDigitalMarketingPage;

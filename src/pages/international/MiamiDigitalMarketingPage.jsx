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
import './MiamiDigitalMarketingPage.css';

const MiamiDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Miami Digital Marketing Agency",
    city: "Miami",
    region: "Florida, USA",
    tagline: "PREMIER MIAMI DIGITAL MARKETING & SEO · FLORIDA, USA",
    heroHighlight: "Miami Digital Marketing & SEO Agency",
    leadDesc: "Scale your Miami business with performance-driven SEO, Google Ads, and custom conversion funnels designed to dominate South Florida’s hyper-competitive market.",
    bodyDesc: "From Brickell finance firms and Wynwood creative studios to South Beach hospitality and Coral Gables commerce, Webmok delivers measurable growth, local search supremacy, and maximum ROAS.",
    stats: [
  {
    "num": "420%",
    "label": "Average Miami Client Traffic Lift"
  },
  {
    "num": "5.8x",
    "label": "Average Return on Ad Spend (ROAS)"
  },
  {
    "num": "#1",
    "label": "Google Maps & Organic Rank Speed"
  },
  {
    "num": "24/7",
    "label": "US Timezone Support & Strategy"
  }
],
    plans: [
  {
    "name": "Miami Starter Scale",
    "badge": "Local Growth",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Perfect for local Miami service providers, clinics, law practices, and boutique stores looking to rank #1 locally.",
    "features": [
      "Up to 20 High-Intent Miami Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local Citation Building & NAP Consistency",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Miami Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Keywords (Local & Regional Florida)",
      "Complete Technical & Mobile Speed Audit",
      "Google Search Ads (PPC) Management ($3k spend)",
      "Bi-Lingual Content Creation (8 Articles/mo)",
      "Full Competitor Conquesting Strategy",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "Miami Enterprise Pro",
    "badge": "Enterprise Domination",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale omni-channel dominance for established brands, franchise networks, and rapid-growth SaaS startups.",
    "features": [
      "Unlimited Target Keywords & Geo-Locations",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom High-Converting Web Design / Landing Pages",
      "Authoritative PR Backlinks & Outreach",
      "Dedicated Account Squad & Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "Why should a Miami business choose Webmok over local agencies charging $5k+/mo?",
    "a": "Webmok delivers senior-level agency execution at an agile, value-driven price point. You get dedicated US-timezone account managers, bilingual capabilities, and technical engineers who focus strictly on measurable pipeline revenue rather than vanity metrics."
  },
  {
    "q": "How fast can our Miami business expect to see Google ranking improvements?",
    "a": "Local Google Maps optimizations and high-intent PPC campaigns yield calls within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days as authority compounds."
  },
  {
    "q": "Do you offer bilingual English and Spanish marketing campaigns for South Florida?",
    "a": "Yes, absolutely! Over 70% of Miami-Dade county engages in bilingual search. We craft tailored ad copy, localized keywords, and landing pages in both English and Spanish to maximize market penetration."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Miami digital marketing packages are month-to-month. We retain our clients because of relentless performance and compounding ROI."
  }
]
  };

  return (
    <div className="wm-intl-miami-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-miami-hero-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-hero-grid">
            <div className="wm-intl-miami-hero-left">
              <span className="wm-intl-miami-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-miami-hero-title-dual">
                <span className="wm-intl-miami-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-miami-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-miami-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-miami-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-miami-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-miami-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-miami-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-miami-hero-right-trust">
              <div className="wm-intl-miami-trust-card">
                <div className="wm-intl-miami-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-miami-tcard-badge wm-intl-miami-badge-clutch">C</div>
              </div>

              <div className="wm-intl-miami-trust-card">
                <div className="wm-intl-miami-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-miami-tcard-badge wm-intl-miami-badge-upwork">up</div>
              </div>

              <div className="wm-intl-miami-trust-card">
                <div className="wm-intl-miami-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-miami-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-miami-tcard-badge wm-intl-miami-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-miami-trust-card">
                <div className="wm-intl-miami-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-miami-tcard-badge wm-intl-miami-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-miami-stats-strip">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-miami-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-miami-intro-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-intro-grid">
            <div className="wm-intl-miami-intro-left">
              <span className="wm-intl-miami-intro-tag">SOUTH FLORIDA GROWTH SPECIALISTS</span>
              <h2 className="wm-intl-miami-intro-title">
                High-Impact Digital Growth for 
                <span>Miami Businesses</span>
              </h2>
            </div>
            <div className="wm-intl-miami-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Webmok Technologies is a globally recognized digital partner helping Miami brands capture local demand and scale internationally. We combine deep bilingual market insights, technical SEO, precision PPC, and bespoke web architecture to deliver compound revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-miami-numbers-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-numbers-heading">
            <span className="wm-intl-miami-numbers-subtitle">MIAMI MARKET TELEMETRY</span>
            <h2>
              Proven Track Record Across 
              <span>South Florida</span>
            </h2>
          </div>

          <div className="wm-intl-miami-numstats-grid">
            <div key="0" className="wm-intl-miami-numstat-item">
              <div className="wm-intl-miami-numstat-number">{"85+"}</div>
              <div className="wm-intl-miami-numstat-line"></div>
              <p>{"Miami Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-miami-numstat-item">
              <div className="wm-intl-miami-numstat-number">{"$18M+"}</div>
              <div className="wm-intl-miami-numstat-line"></div>
              <p>{"Client Revenue Generated"}</p>
            </div>
            <div key="2" className="wm-intl-miami-numstat-item">
              <div className="wm-intl-miami-numstat-number">{"99.4%"}</div>
              <div className="wm-intl-miami-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-miami-numstat-item">
              <div className="wm-intl-miami-numstat-number">{"Under 28s"}</div>
              <div className="wm-intl-miami-numstat-line"></div>
              <p>{"Direct Response Time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-miami-include-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-include-grid">
            <div className="wm-intl-miami-include-content">
              <span className="wm-intl-miami-include-tag">FULL-STACK SUITE</span>
              <h2 className="wm-intl-miami-include-title">
                Comprehensive Digital Solutions in 
                <span>Miami, FL</span>
              </h2>
              <p>Our Miami digital marketing packages encompass hyper-local Google Maps ranking, Spanish/English bilingual campaigns, high-converting PPC funnels, and enterprise UX web development.</p>
              <p>Whether you need B2B pipeline acceleration or retail foot-traffic expansion, our dedicated Miami squad executes end-to-end campaigns with zero fluff.</p>

              <div className="wm-intl-miami-feature-list">
                <div key="Bilingual Local SEO (English & Spanish Optimization)" className="wm-intl-miami-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Bilingual Local SEO (English & Spanish Optimization)"}</span>
                </div>
                <div key="Google Local Services Ads (LSA) & High-Intent PPC" className="wm-intl-miami-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Google Local Services Ads (LSA) & High-Intent PPC"}</span>
                </div>
                <div key="South Florida Geo-Fenced Social Ads (Meta & TikTok)" className="wm-intl-miami-feature-item">
                  <span className="chk">✓</span>
                  <span>{"South Florida Geo-Fenced Social Ads (Meta & TikTok)"}</span>
                </div>
                <div key="Conversion-Optimized Landing Page Design" className="wm-intl-miami-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Conversion-Optimized Landing Page Design"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-miami-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
                <div key="Dedicated US East-Coast Timezone Account Director" className="wm-intl-miami-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dedicated US East-Coast Timezone Account Director"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-miami-include-image">
              <img src="/onpage1.avif" alt="Miami Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-miami-importance-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-importance-box">
            <h2 className="wm-intl-miami-importance-title">
              Why Digital Dominance Matters in 
              <span>Miami</span>
            </h2>

            <div className="wm-intl-miami-importance-content">
              <p>Miami is now one of the fastest-growing tech and business hubs in the Americas. With hundreds of new companies moving to South Florida each month, organic visibility on Google and surgical ad targeting are required to outpace competitors.</p>
              <p>Without aggressive technical SEO and optimized customer acquisition funnels, local competitors will capture your market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-miami-why-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-why-grid">
            <div className="wm-intl-miami-why-content">
              <span className="wm-intl-miami-why-tag">THE WEBMOK DIFFERENCE</span>
              <h2 className="wm-intl-miami-why-title">
                Engineered for Miami Market 
                <span className="s1"> Supremacy</span>{' '}
                <span className="s2">& Scalable ROI</span>
              </h2>

              <div className="wm-intl-miami-why-text">
                <p>We don’t believe in cookie-cutter strategies. Every Miami campaign is custom engineered around your industry unit economics, competitor vulnerabilities, and high-converting search intent.</p>
                <p>With transparent weekly reporting, zero long-term lock-in, and senior digital architects on call, you get Fortune-500 execution at mid-market agility.</p>
              </div>
            </div>

            <div className="wm-intl-miami-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-miami-pricing-section" id="pricing-plans">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-header">
            <span className="wm-intl-miami-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-miami-sec-title">Flexible Miami Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-miami-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-miami-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-miami-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-miami-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-miami-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-miami-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-miami-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-miami-card-top">
                    {plan.badge && <span className="wm-intl-miami-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-miami-card-name">{plan.name}</h3>
                    <p className="wm-intl-miami-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-miami-card-pricing">
                    <div className="wm-intl-miami-price-row">
                      <span className="wm-intl-miami-price-val">{displayPrice}</span>
                      <span className="wm-intl-miami-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-miami-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-miami-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-miami-card-action">
                    <button
                      type="button"
                      className="wm-intl-miami-select-btn"
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
      <section className="wm-intl-miami-benefits-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-benefits-grid">
            <div className="wm-intl-miami-benefits-content">
              <span className="wm-intl-miami-benefits-tag">PROVEN OUTCOMES</span>
              <h2 className="wm-intl-miami-benefits-title">
                Transforming Miami Brands into 
                <span>Category Leaders</span>
              </h2>

              <div className="wm-intl-miami-benefits-text">
                <p>Our tailored Miami digital marketing campaigns produce sustainable, compounding organic rankings that lower your blended customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified sales calls, form leads, and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-miami-benefits-points">
                <div key="Top 3 Google Maps 3-Pack Rankings in Miami Metro" className="wm-intl-miami-benefit-point">
                  <span className="wm-intl-miami-benefit-icon">✓</span>
                  <span>{"Top 3 Google Maps 3-Pack Rankings in Miami Metro"}</span>
                </div>
                <div key="Average 38% Reduction in Cost Per Lead (CPL)" className="wm-intl-miami-benefit-point">
                  <span className="wm-intl-miami-benefit-icon">✓</span>
                  <span>{"Average 38% Reduction in Cost Per Lead (CPL)"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion" className="wm-intl-miami-benefit-point">
                  <span className="wm-intl-miami-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-miami-benefit-point">
                  <span className="wm-intl-miami-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-miami-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Miami Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-miami-advantage-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-header">
            <span className="wm-intl-miami-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-miami-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-miami-sec-bar"></div>
          </div>

          <div className="wm-intl-miami-advantage-grid">
            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-miami-faqs-section">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-header">
            <span className="wm-intl-miami-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-miami-sec-title">Common Queries About Our Miami Growth Packages</h2>
            <div className="wm-intl-miami-sec-bar"></div>
          </div>

          <div className="wm-intl-miami-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-miami-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-miami-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-miami-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-miami-bottom-banner">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-banner-inner">
            <div className="wm-intl-miami-banner-text">
              <h2>Ready to Accelerate Growth in Miami?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-miami-banner-btns">
              <button
                type="button"
                className="wm-intl-miami-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-miami-bbtn-quote"
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

export default MiamiDigitalMarketingPage;

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
import './DubaiDigitalMarketingPage.css';

const DubaiDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('AED');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Dubai Digital Marketing Agency",
    city: "Dubai",
    region: "United Arab Emirates (UAE & GCC)",
    tagline: "PREMIER UAE & GCC GROWTH AGENCY · DUBAI, UAE",
    heroHighlight: "Dubai Digital Marketing & SEO Agency",
    leadDesc: "Scale your brand across Dubai and the UAE with luxury-grade web architecture, bilingual Arabic/English SEO, and high-ROAS performance marketing.",
    bodyDesc: "From Downtown Dubai and DIFC financial powerhouses to Dubai Marina luxury brands, Business Bay commerce, and GCC-wide enterprises—Webmok engineers exponential digital growth.",
    stats: [
  {
    "num": "520%",
    "label": "Average Dubai Client Traffic Lift"
  },
  {
    "num": "6.4x",
    "label": "Average ROAS on UAE Paid Media"
  },
  {
    "num": "85+",
    "label": "Dubai & UAE Brands Scaled"
  },
  {
    "num": "100%",
    "label": "Bilingual English & Arabic"
  }
],
    plans: [
  {
    "name": "Dubai Starter Scale",
    "badge": "Local Growth",
    "usdPrice": "899",
    "inrPrice": "72,999",
    "desc": "Perfect for local Dubai service providers, clinics, luxury practices, and boutique stores looking to rank #1 locally.",
    "features": [
      "Up to 20 High-Intent Dubai Keywords",
      "Google Business Profile (Maps) Optimization",
      "Local UAE Citation Building & Directory Consistency",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Dubai Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,699",
    "inrPrice": "1,39,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 50 Keywords (Dubai, Abu Dhabi & UAE Wide)",
      "Complete Technical & Mobile Speed Audit",
      "Google Search & Social Ads Management",
      "Bilingual Content Creation (Arabic & English, 8 Articles/mo)",
      "Full Competitor Conquesting Strategy",
      "Bi-Weekly Live Strategy Calls"
    ]
  },
  {
    "name": "Dubai Enterprise Pro",
    "badge": "GCC Domination",
    "usdPrice": "3,299",
    "inrPrice": "2,69,999",
    "desc": "Full-scale omni-channel dominance for established UAE brands, luxury real estate developers, and GCC enterprises.",
    "features": [
      "Unlimited Target Keywords & GCC-Wide Expansion",
      "Omni-Channel PPC (Google, Meta, Snapchat, TikTok, LinkedIn)",
      "Custom High-Converting Web Design / Landing Pages",
      "Authoritative Middle East PR Backlinks & Outreach",
      "Dedicated Account Squad & WhatsApp/Slack Access",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "Do you offer bilingual Arabic and English digital marketing campaigns for Dubai?",
    "a": "Yes, absolutely! We craft tailored ad copy, localized keywords, and landing pages in both Arabic and English to maximize reach across both local and expatriate demographics in the UAE."
  },
  {
    "q": "How fast can our Dubai business expect to see Google ranking improvements?",
    "a": "Local Google Maps optimizations and high-intent PPC campaigns yield calls and WhatsApp leads within 14 to 30 days. Broad organic SEO keywords typically achieve major page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Do you specialize in real estate and luxury brand lead generation in Dubai?",
    "a": "Yes, we have deep experience running high-ROAS lead generation campaigns for Dubai real estate brokers, developers, luxury automotive, healthcare, and hospitality businesses."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Dubai digital marketing packages operate on flexible month-to-month terms."
  }
]
  };

  return (
    <div className="wm-intl-dubai-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-dubai-hero-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-hero-grid">
            <div className="wm-intl-dubai-hero-left">
              <span className="wm-intl-dubai-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-dubai-hero-title-dual">
                <span className="wm-intl-dubai-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-dubai-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-dubai-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-dubai-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-dubai-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-dubai-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-dubai-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-dubai-hero-right-trust">
              <div className="wm-intl-dubai-trust-card">
                <div className="wm-intl-dubai-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-dubai-tcard-badge wm-intl-dubai-badge-clutch">C</div>
              </div>

              <div className="wm-intl-dubai-trust-card">
                <div className="wm-intl-dubai-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-dubai-tcard-badge wm-intl-dubai-badge-upwork">up</div>
              </div>

              <div className="wm-intl-dubai-trust-card">
                <div className="wm-intl-dubai-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-dubai-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-dubai-tcard-badge wm-intl-dubai-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-dubai-trust-card">
                <div className="wm-intl-dubai-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-dubai-tcard-badge wm-intl-dubai-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-dubai-stats-strip">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-dubai-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-dubai-intro-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-intro-grid">
            <div className="wm-intl-dubai-intro-left">
              <span className="wm-intl-dubai-intro-tag">UAE & GCC GROWTH SPECIALISTS</span>
              <h2 className="wm-intl-dubai-intro-title">
                High-Impact Digital Growth for 
                <span>Dubai Businesses</span>
              </h2>
            </div>
            <div className="wm-intl-dubai-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Dubai is the luxury and commercial capital of the Middle East. Webmok combines deep bilingual market insights (Arabic and English), technical SEO, precision Google/Meta ads, and bespoke web architecture to deliver compound revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-dubai-numbers-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-numbers-heading">
            <span className="wm-intl-dubai-numbers-subtitle">DUBAI MARKET TELEMETRY</span>
            <h2>
              Proven Track Record Across 
              <span>Dubai & UAE</span>
            </h2>
          </div>

          <div className="wm-intl-dubai-numstats-grid">
            <div key="0" className="wm-intl-dubai-numstat-item">
              <div className="wm-intl-dubai-numstat-number">{"85+"}</div>
              <div className="wm-intl-dubai-numstat-line"></div>
              <p>{"Dubai Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-dubai-numstat-item">
              <div className="wm-intl-dubai-numstat-number">{"AED 65M+"}</div>
              <div className="wm-intl-dubai-numstat-line"></div>
              <p>{"Client Revenue Generated"}</p>
            </div>
            <div key="2" className="wm-intl-dubai-numstat-item">
              <div className="wm-intl-dubai-numstat-number">{"99.6%"}</div>
              <div className="wm-intl-dubai-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-dubai-numstat-item">
              <div className="wm-intl-dubai-numstat-number">{"< 28s"}</div>
              <div className="wm-intl-dubai-numstat-line"></div>
              <p>{"Direct Response Time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-dubai-include-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-include-grid">
            <div className="wm-intl-dubai-include-content">
              <span className="wm-intl-dubai-include-tag">FULL DUBAI SUITE</span>
              <h2 className="wm-intl-dubai-include-title">
                Comprehensive Digital Solutions in 
                <span>Dubai, UAE</span>
              </h2>
              <p>Our Dubai digital marketing packages encompass hyper-local Google Maps ranking, Arabic/English bilingual campaigns, high-converting PPC funnels, and enterprise UX web development.</p>
              <p>Whether you need real estate lead generation, luxury retail foot-traffic expansion, or B2B pipeline acceleration, our dedicated Dubai squad executes end-to-end campaigns with zero fluff.</p>

              <div className="wm-intl-dubai-feature-list">
                <div key="Bilingual Local SEO (Arabic & English Keyword Optimization)" className="wm-intl-dubai-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Bilingual Local SEO (Arabic & English Keyword Optimization)"}</span>
                </div>
                <div key="Google Search & High-Intent Performance Max Ads" className="wm-intl-dubai-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Google Search & High-Intent Performance Max Ads"}</span>
                </div>
                <div key="Dubai & GCC Geo-Fenced Social Ads (Instagram, Snapchat & TikTok)" className="wm-intl-dubai-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dubai & GCC Geo-Fenced Social Ads (Instagram, Snapchat & TikTok)"}</span>
                </div>
                <div key="Luxury Conversion-Optimized Landing Page Design" className="wm-intl-dubai-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Luxury Conversion-Optimized Landing Page Design"}</span>
                </div>
                <div key="Real-Time Telemetry Dashboard & Revenue Attribution" className="wm-intl-dubai-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Telemetry Dashboard & Revenue Attribution"}</span>
                </div>
                <div key="Dedicated UAE (GST/UTC+4) Timezone Account Director" className="wm-intl-dubai-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dedicated UAE (GST/UTC+4) Timezone Account Director"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-dubai-include-image">
              <img src="/onpage1.avif" alt="Dubai Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-dubai-importance-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-importance-box">
            <h2 className="wm-intl-dubai-importance-title">
              Why Digital Dominance Matters in 
              <span>Dubai</span>
            </h2>

            <div className="wm-intl-dubai-importance-content">
              <p>Dubai is one of the fastest-growing global business and luxury destinations. With thousands of new companies launching annually, organic visibility on Google and surgical ad targeting are required to outpace competitors.</p>
              <p>Without aggressive technical SEO and optimized customer acquisition funnels, local competitors will capture your high-value market share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-dubai-why-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-why-grid">
            <div className="wm-intl-dubai-why-content">
              <span className="wm-intl-dubai-why-tag">THE WEBMOK DIFFERENCE</span>
              <h2 className="wm-intl-dubai-why-title">
                Engineered for Dubai Market 
                <span className="s1"> Supremacy</span>{' '}
                <span className="s2">& Scalable ROI</span>
              </h2>

              <div className="wm-intl-dubai-why-text">
                <p>We don’t believe in cookie-cutter strategies. Every Dubai campaign is custom engineered around your industry unit economics, competitor vulnerabilities, and high-converting search intent.</p>
                <p>With transparent weekly reporting, zero long-term lock-in, and senior digital architects on call, you get elite execution at unmatched value.</p>
              </div>
            </div>

            <div className="wm-intl-dubai-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-dubai-pricing-section" id="pricing-plans">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-header">
            <span className="wm-intl-dubai-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-dubai-sec-title">Flexible Dubai Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-dubai-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-dubai-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-dubai-curr-btn ${currency === 'AED' ? 'active' : ''}`}
                onClick={() => setCurrency('AED')}
              >
                AED AED
              </button>
              <button
                type="button"
                className={`wm-intl-dubai-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-dubai-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-dubai-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-dubai-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-dubai-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-dubai-card-top">
                    {plan.badge && <span className="wm-intl-dubai-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-dubai-card-name">{plan.name}</h3>
                    <p className="wm-intl-dubai-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-dubai-card-pricing">
                    <div className="wm-intl-dubai-price-row">
                      <span className="wm-intl-dubai-price-val">{displayPrice}</span>
                      <span className="wm-intl-dubai-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-dubai-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-dubai-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-dubai-card-action">
                    <button
                      type="button"
                      className="wm-intl-dubai-select-btn"
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
      <section className="wm-intl-dubai-benefits-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-benefits-grid">
            <div className="wm-intl-dubai-benefits-content">
              <span className="wm-intl-dubai-benefits-tag">PROVEN OUTCOMES</span>
              <h2 className="wm-intl-dubai-benefits-title">
                Transforming Dubai Brands into 
                <span>Market Leaders</span>
              </h2>

              <div className="wm-intl-dubai-benefits-text">
                <p>Our tailored Dubai digital marketing campaigns produce sustainable, compounding organic rankings that lower your blended customer acquisition costs over time.</p>
                <p>We build digital assets that continuously funnel qualified sales calls, WhatsApp inquiries, and transactions into your pipeline.</p>
              </div>

              <div className="wm-intl-dubai-benefits-points">
                <div key="Top 3 Google Maps 3-Pack Rankings in Dubai & UAE" className="wm-intl-dubai-benefit-point">
                  <span className="wm-intl-dubai-benefit-icon">✓</span>
                  <span>{"Top 3 Google Maps 3-Pack Rankings in Dubai & UAE"}</span>
                </div>
                <div key="Average 40% Reduction in Cost Per Lead (CPL)" className="wm-intl-dubai-benefit-point">
                  <span className="wm-intl-dubai-benefit-icon">✓</span>
                  <span>{"Average 40% Reduction in Cost Per Lead (CPL)"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Expansion in English & Arabic" className="wm-intl-dubai-benefit-point">
                  <span className="wm-intl-dubai-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Expansion in English & Arabic"}</span>
                </div>
                <div key="Transparent Telemetry with Real-Time Revenue Tracking" className="wm-intl-dubai-benefit-point">
                  <span className="wm-intl-dubai-benefit-icon">✓</span>
                  <span>{"Transparent Telemetry with Real-Time Revenue Tracking"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-dubai-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Dubai Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-dubai-advantage-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-header">
            <span className="wm-intl-dubai-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-dubai-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-dubai-sec-bar"></div>
          </div>

          <div className="wm-intl-dubai-advantage-grid">
            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-dubai-faqs-section">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-header">
            <span className="wm-intl-dubai-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-dubai-sec-title">Common Queries About Our Dubai Growth Packages</h2>
            <div className="wm-intl-dubai-sec-bar"></div>
          </div>

          <div className="wm-intl-dubai-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-dubai-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-dubai-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-dubai-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-dubai-bottom-banner">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-banner-inner">
            <div className="wm-intl-dubai-banner-text">
              <h2>Ready to Accelerate Growth in Dubai?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-dubai-banner-btns">
              <button
                type="button"
                className="wm-intl-dubai-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-dubai-bbtn-quote"
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

export default DubaiDigitalMarketingPage;

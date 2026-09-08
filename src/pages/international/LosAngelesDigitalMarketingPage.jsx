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
import './LosAngelesDigitalMarketingPage.css';

const LosAngelesDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Los Angeles Digital Marketing Agency",
    city: "Los Angeles",
    region: "California, USA",
    tagline: "PREMIER LOS ANGELES GROWTH AGENCY · CALIFORNIA, USA",
    heroHighlight: "Los Angeles Digital Marketing & SEO",
    leadDesc: "Scale your LA brand with viral social campaigns, precision Google Ads, and aggressive SEO built for Southern California’s trendsetting market.",
    bodyDesc: "From Silicon Beach tech startups and Beverly Hills luxury brands to DTLA commerce and Santa Monica direct-to-consumer powerhouses—Webmok engineers explosive digital growth.",
    stats: [
  {
    "num": "440%",
    "label": "Average LA Client Revenue Lift"
  },
  {
    "num": "5.9x",
    "label": "Average ROAS on Paid Social"
  },
  {
    "num": "75+",
    "label": "LA & SoCal Brands Scaled"
  },
  {
    "num": "100%",
    "label": "Data-Driven Attribution"
  }
],
    plans: [
  {
    "name": "LA Starter Growth",
    "badge": "Local Traction",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Ideal for local LA service businesses, clinics, and boutique shops seeking dominant local search visibility.",
    "features": [
      "Up to 20 High-Intent LA Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Citations & LA Business Listings",
      "Core On-Page SEO & Content Fixes",
      "Monthly Executive Performance Report"
    ]
  },
  {
    "name": "LA Market Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,649",
    "inrPrice": "1,34,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads, and Meta advertising for rapid customer growth.",
    "features": [
      "Up to 50 SoCal & LA Keywords",
      "Google Ads & Meta Ads Management ($4k spend)",
      "High-Converting Landing Page Optimization",
      "Strategic Content Creation (6 High-Impact Articles/mo)",
      "Competitor Backlink & Ad Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "LA Enterprise Powerhouse",
    "badge": "Category Leader",
    "usdPrice": "3,299",
    "inrPrice": "2,69,999",
    "desc": "Full-scale market dominance for direct-to-consumer brands, venture-funded startups, and regional powerhouses.",
    "features": [
      "Unlimited Keywords & Multi-Channel Campaigns",
      "Omni-Channel PPC (Google, Meta, TikTok, LinkedIn)",
      "Bespoke Web App / E-Commerce Redesign",
      "High-Tier Digital PR & Media Outreach",
      "Dedicated Senior Account Lead & Daily Slack Channel",
      "Advanced Revenue Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "How does Webmok coordinate with LA businesses in the Pacific Timezone (PST)?",
    "a": "We operate with dedicated US Pacific Timezone squads. Your account manager and strategy calls are fully aligned with LA business hours."
  },
  {
    "q": "Do you manage e-commerce marketing for direct-to-consumer (DTC) brands in LA?",
    "a": "Yes! We specialize in Shopify, WooCommerce, and custom headless e-commerce stores, driving revenue through targeted Google Shopping, Meta ads, and technical e-commerce SEO."
  },
  {
    "q": "How do you prevent ad budget waste on Google and Meta in Los Angeles?",
    "a": "We implement hyper-granular zip-code targeting, negative keyword sculpting, algorithmic bid adjustments, and daily ROAS telemetry tracking to ensure zero wasted spend."
  },
  {
    "q": "What is the contract term?",
    "a": "All our Los Angeles digital marketing packages operate on flexible month-to-month terms with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-losangeles-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-losangeles-hero-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-hero-grid">
            <div className="wm-intl-losangeles-hero-left">
              <span className="wm-intl-losangeles-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-losangeles-hero-title-dual">
                <span className="wm-intl-losangeles-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-losangeles-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-losangeles-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-losangeles-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-losangeles-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-losangeles-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-losangeles-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-losangeles-hero-right-trust">
              <div className="wm-intl-losangeles-trust-card">
                <div className="wm-intl-losangeles-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-losangeles-tcard-badge wm-intl-losangeles-badge-clutch">C</div>
              </div>

              <div className="wm-intl-losangeles-trust-card">
                <div className="wm-intl-losangeles-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-losangeles-tcard-badge wm-intl-losangeles-badge-upwork">up</div>
              </div>

              <div className="wm-intl-losangeles-trust-card">
                <div className="wm-intl-losangeles-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-losangeles-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-losangeles-tcard-badge wm-intl-losangeles-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-losangeles-trust-card">
                <div className="wm-intl-losangeles-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-losangeles-tcard-badge wm-intl-losangeles-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-losangeles-stats-strip">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-losangeles-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-losangeles-intro-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-intro-grid">
            <div className="wm-intl-losangeles-intro-left">
              <span className="wm-intl-losangeles-intro-tag">SOUTHERN CALIFORNIA SPECIALISTS</span>
              <h2 className="wm-intl-losangeles-intro-title">
                High-Velocity Marketing for 
                <span>Los Angeles Brands</span>
              </h2>
            </div>
            <div className="wm-intl-losangeles-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> In the entertainment and lifestyle capital of the world, brand aesthetics must meet ruthless technical performance. Webmok delivers high-converting digital marketing that turns LA impressions into paying customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-losangeles-numbers-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-numbers-heading">
            <span className="wm-intl-losangeles-numbers-subtitle">LA PERFORMANCE TELEMETRY</span>
            <h2>
              Proven Impact Across 
              <span>Los Angeles County</span>
            </h2>
          </div>

          <div className="wm-intl-losangeles-numstats-grid">
            <div key="0" className="wm-intl-losangeles-numstat-item">
              <div className="wm-intl-losangeles-numstat-number">{"75+"}</div>
              <div className="wm-intl-losangeles-numstat-line"></div>
              <p>{"LA Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-losangeles-numstat-item">
              <div className="wm-intl-losangeles-numstat-number">{"$21M+"}</div>
              <div className="wm-intl-losangeles-numstat-line"></div>
              <p>{"Tracked Client Revenue"}</p>
            </div>
            <div key="2" className="wm-intl-losangeles-numstat-item">
              <div className="wm-intl-losangeles-numstat-number">{"99.3%"}</div>
              <div className="wm-intl-losangeles-numstat-line"></div>
              <p>{"Client Satisfaction"}</p>
            </div>
            <div key="3" className="wm-intl-losangeles-numstat-item">
              <div className="wm-intl-losangeles-numstat-number">{"24/7"}</div>
              <div className="wm-intl-losangeles-numstat-line"></div>
              <p>{"PST Timezone Support"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-losangeles-include-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-include-grid">
            <div className="wm-intl-losangeles-include-content">
              <span className="wm-intl-losangeles-include-tag">FULL-SPECTRUM MARKETING</span>
              <h2 className="wm-intl-losangeles-include-title">
                What Our Los Angeles Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We combine high-performance Google search and Meta/TikTok ad campaigns with localized LA SEO, influencer integration, and lightning-fast web engineering.</p>
              <p>You get an agile, results-obsessed team dedicated to scaling your customer acquisition efficiently.</p>

              <div className="wm-intl-losangeles-feature-list">
                <div key="Hyper-Targeted LA & SoCal Local SEO and Google Maps 3-Pack" className="wm-intl-losangeles-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Hyper-Targeted LA & SoCal Local SEO and Google Maps 3-Pack"}</span>
                </div>
                <div key="High-ROAS Paid Social (Meta, TikTok, Pinterest & YouTube Ads)" className="wm-intl-losangeles-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-ROAS Paid Social (Meta, TikTok, Pinterest & YouTube Ads)"}</span>
                </div>
                <div key="Precision Google Search & Performance Max Funnels" className="wm-intl-losangeles-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Precision Google Search & Performance Max Funnels"}</span>
                </div>
                <div key="High-Converting Landing Page Design & A/B Experimentation" className="wm-intl-losangeles-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Converting Landing Page Design & A/B Experimentation"}</span>
                </div>
                <div key="Influencer Marketing & Brand Content Amplification" className="wm-intl-losangeles-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Influencer Marketing & Brand Content Amplification"}</span>
                </div>
                <div key="Real-Time Revenue Telemetry & Multi-Touch Attribution" className="wm-intl-losangeles-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Revenue Telemetry & Multi-Touch Attribution"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-losangeles-include-image">
              <img src="/onpage2.avif" alt="Los Angeles Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-losangeles-importance-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-importance-box">
            <h2 className="wm-intl-losangeles-importance-title">
              The Necessity of Digital Excellence in 
              <span>Los Angeles</span>
            </h2>

            <div className="wm-intl-losangeles-importance-content">
              <p>Los Angeles is home to some of the world’s most sophisticated consumers and aggressive brands. Standard marketing campaigns get lost in the noise.</p>
              <p>To win in LA, you need thumb-stopping creative backed by surgical audience targeting and bulletproof technical SEO infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-losangeles-why-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-why-grid">
            <div className="wm-intl-losangeles-why-content">
              <span className="wm-intl-losangeles-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-losangeles-why-title">
                Creative Velocity. 
                <span className="s1"> Technical Precision.</span>{' '}
                <span className="s2">Rapid Scale.</span>
              </h2>

              <div className="wm-intl-losangeles-why-text">
                <p>We unite world-class technical engineers, data analysts, and creative strategists to construct acquisition channels that out-convert competitors.</p>
                <p>Our transparent, month-to-month contracts keep us accountable to one metric: your profitable revenue growth.</p>
              </div>
            </div>

            <div className="wm-intl-losangeles-why-image">
              <img src="/onpage3.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-losangeles-pricing-section" id="pricing-plans">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-header">
            <span className="wm-intl-losangeles-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-losangeles-sec-title">Flexible Los Angeles Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-losangeles-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-losangeles-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-losangeles-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-losangeles-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-losangeles-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-losangeles-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-losangeles-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-losangeles-card-top">
                    {plan.badge && <span className="wm-intl-losangeles-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-losangeles-card-name">{plan.name}</h3>
                    <p className="wm-intl-losangeles-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-losangeles-card-pricing">
                    <div className="wm-intl-losangeles-price-row">
                      <span className="wm-intl-losangeles-price-val">{displayPrice}</span>
                      <span className="wm-intl-losangeles-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-losangeles-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-losangeles-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-losangeles-card-action">
                    <button
                      type="button"
                      className="wm-intl-losangeles-select-btn"
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
      <section className="wm-intl-losangeles-benefits-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-benefits-grid">
            <div className="wm-intl-losangeles-benefits-content">
              <span className="wm-intl-losangeles-benefits-tag">MEASURABLE OUTCOMES</span>
              <h2 className="wm-intl-losangeles-benefits-title">
                Driving Real Business Value for 
                <span>Los Angeles Brands</span>
              </h2>

              <div className="wm-intl-losangeles-benefits-text">
                <p>Our digital marketing strategies turn LA traffic into loyal customers and repeat revenue.</p>
                <p>We build durable digital assets that lower your blended customer acquisition costs month after month.</p>
              </div>

              <div className="wm-intl-losangeles-benefits-points">
                <div key="Top Google 3-Pack Rankings Across LA Neighborhoods" className="wm-intl-losangeles-benefit-point">
                  <span className="wm-intl-losangeles-benefit-icon">✓</span>
                  <span>{"Top Google 3-Pack Rankings Across LA Neighborhoods"}</span>
                </div>
                <div key="Consistent 4x to 8x Return on Ad Spend (ROAS)" className="wm-intl-losangeles-benefit-point">
                  <span className="wm-intl-losangeles-benefit-icon">✓</span>
                  <span>{"Consistent 4x to 8x Return on Ad Spend (ROAS)"}</span>
                </div>
                <div key="Substantial Organic Keyword Footprint Growth" className="wm-intl-losangeles-benefit-point">
                  <span className="wm-intl-losangeles-benefit-icon">✓</span>
                  <span>{"Substantial Organic Keyword Footprint Growth"}</span>
                </div>
                <div key="Full Pipeline Clarity with Zero Ambiguity" className="wm-intl-losangeles-benefit-point">
                  <span className="wm-intl-losangeles-benefit-icon">✓</span>
                  <span>{"Full Pipeline Clarity with Zero Ambiguity"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-losangeles-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Los Angeles Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-losangeles-advantage-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-header">
            <span className="wm-intl-losangeles-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-losangeles-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-losangeles-sec-bar"></div>
          </div>

          <div className="wm-intl-losangeles-advantage-grid">
            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-losangeles-faqs-section">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-header">
            <span className="wm-intl-losangeles-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-losangeles-sec-title">Common Queries About Our Los Angeles Growth Packages</h2>
            <div className="wm-intl-losangeles-sec-bar"></div>
          </div>

          <div className="wm-intl-losangeles-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-losangeles-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-losangeles-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-losangeles-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-losangeles-bottom-banner">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-banner-inner">
            <div className="wm-intl-losangeles-banner-text">
              <h2>Ready to Accelerate Growth in Los Angeles?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-losangeles-banner-btns">
              <button
                type="button"
                className="wm-intl-losangeles-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-losangeles-bbtn-quote"
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

export default LosAngelesDigitalMarketingPage;

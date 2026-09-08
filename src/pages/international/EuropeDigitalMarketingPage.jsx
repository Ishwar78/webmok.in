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
import './EuropeDigitalMarketingPage.css';

const EuropeDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('EUR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Europe Digital Marketing Agency",
    city: "Europe",
    region: "European Union & Pan-Europe",
    tagline: "PAN-EUROPEAN DIGITAL GROWTH AGENCY · EUROPE & EU",
    heroHighlight: "Europe Digital Marketing & SEO Agency",
    leadDesc: "Expand across European markets with multilingual SEO, GDPR-compliant paid acquisition, and cross-border digital growth strategies.",
    bodyDesc: "Serving Germany, France, Netherlands, Nordics, Spain, Italy, and across the EU—Webmok engineers scalable, cross-border digital campaigns that capture European market demand.",
    stats: [
  {
    "num": "450%",
    "label": "Average Pan-Europe Traffic Surge"
  },
  {
    "num": "5.8x",
    "label": "Average ROAS on EU Paid Media"
  },
  {
    "num": "100%",
    "label": "Strict GDPR & ePrivacy Compliance"
  },
  {
    "num": "12+",
    "label": "European Languages Supported"
  }
],
    plans: [
  {
    "name": "Europe Single Market",
    "badge": "Target Country",
    "usdPrice": "899",
    "inrPrice": "72,999",
    "desc": "Ideal for businesses focusing on dominating a single European country (e.g. Germany, France, or Netherlands).",
    "features": [
      "Up to 25 Target Keywords in Local Language",
      "Local Country Domain & Hreflang Setup",
      "Full On-Page & Schema SEO Optimization",
      "GDPR-Compliant Analytics & Consent Tuning",
      "Monthly Executive Performance Report"
    ]
  },
  {
    "name": "Pan-Europe Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,799",
    "inrPrice": "1,49,999",
    "desc": "Multi-country expansion across 2-4 European territories with combined multilingual SEO and Google Ads management.",
    "features": [
      "Up to 60 Keywords Across Multiple EU Markets",
      "Google Ads (PPC) Management in Target Languages",
      "Multi-Country Landing Page Architecture",
      "High-Authority European Content Hubs (8 Posts/mo)",
      "Competitor Backlink Interception across EU",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "Europe Enterprise Monopoly",
    "badge": "EU Dominance",
    "usdPrice": "3,499",
    "inrPrice": "2,89,999",
    "desc": "Full-scale market dominance for European brands, multinational corporations, and cross-border e-commerce powerhouses.",
    "features": [
      "Pan-European Keyword Domination (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn across Europe)",
      "Bespoke Multilingual Web Platform / Headless CMS",
      "Tier-1 European Media & PR Backlink Placements",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Country Revenue Attribution"
    ]
  }
],
    faqs: [
  {
    "q": "How do you handle multiple European languages in SEO?",
    "a": "We implement accurate hreflang tag architectures, localized keyword mapping, and native translations for key markets (German, French, Spanish, Italian, Dutch, etc.)."
  },
  {
    "q": "Are all your European marketing campaigns 100% GDPR compliant?",
    "a": "Yes, absolutely. We configure compliant cookie consent managers (OneTrust, Cookiebot), cookieless analytics tracking, and strict data privacy protocols."
  },
  {
    "q": "How do you coordinate with European clients in CET/GMT time zones?",
    "a": "Our dedicated European team works directly within European business hours (GMT/CET) to provide live communication and strategy syncs."
  },
  {
    "q": "What are the contract terms?",
    "a": "All our European digital marketing packages are month-to-month with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-europe-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-europe-hero-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-hero-grid">
            <div className="wm-intl-europe-hero-left">
              <span className="wm-intl-europe-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-europe-hero-title-dual">
                <span className="wm-intl-europe-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-europe-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-europe-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-europe-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-europe-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-europe-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-europe-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-europe-hero-right-trust">
              <div className="wm-intl-europe-trust-card">
                <div className="wm-intl-europe-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-europe-tcard-badge wm-intl-europe-badge-clutch">C</div>
              </div>

              <div className="wm-intl-europe-trust-card">
                <div className="wm-intl-europe-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-europe-tcard-badge wm-intl-europe-badge-upwork">up</div>
              </div>

              <div className="wm-intl-europe-trust-card">
                <div className="wm-intl-europe-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-europe-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-europe-tcard-badge wm-intl-europe-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-europe-trust-card">
                <div className="wm-intl-europe-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-europe-tcard-badge wm-intl-europe-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-europe-stats-strip">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-europe-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-europe-intro-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-intro-grid">
            <div className="wm-intl-europe-intro-left">
              <span className="wm-intl-europe-intro-tag">CROSS-BORDER EU EXPANSION</span>
              <h2 className="wm-intl-europe-intro-title">
                Multilingual Digital Marketing for 
                <span>European Enterprise</span>
              </h2>
            </div>
            <div className="wm-intl-europe-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Navigating Europe’s diverse languages, cultural nuances, and strict privacy laws requires specialized expertise. Webmok provides European businesses with high-performance multilingual SEO, precision paid media, and conversion-optimized digital frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-europe-numbers-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-numbers-heading">
            <span className="wm-intl-europe-numbers-subtitle">EUROPE MARKET TELEMETRY</span>
            <h2>
              Proven Outcomes Across 
              <span>European Markets</span>
            </h2>
          </div>

          <div className="wm-intl-europe-numstats-grid">
            <div key="0" className="wm-intl-europe-numstat-item">
              <div className="wm-intl-europe-numstat-number">{"110+"}</div>
              <div className="wm-intl-europe-numstat-line"></div>
              <p>{"European Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-europe-numstat-item">
              <div className="wm-intl-europe-numstat-number">{"€26M+"}</div>
              <div className="wm-intl-europe-numstat-line"></div>
              <p>{"Generated Client Revenue"}</p>
            </div>
            <div key="2" className="wm-intl-europe-numstat-item">
              <div className="wm-intl-europe-numstat-number">{"99.5%"}</div>
              <div className="wm-intl-europe-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-europe-numstat-item">
              <div className="wm-intl-europe-numstat-number">{"24/7"}</div>
              <div className="wm-intl-europe-numstat-line"></div>
              <p>{"CET/GMT Timezone Support"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-europe-include-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-include-grid">
            <div className="wm-intl-europe-include-content">
              <span className="wm-intl-europe-include-tag">PAN-EU CAPABILITIES</span>
              <h2 className="wm-intl-europe-include-title">
                What Our Europe Digital Marketing 
                <span>Packages Include</span>
              </h2>
              <p>We deliver multilingual international SEO (hreflang architecture), localized Google Search & Meta Ads across key EU territories, GDPR-compliant tracking, and high-speed web engineering.</p>
              <p>You get a single strategic partner driving cross-border customer acquisition throughout Europe.</p>

              <div className="wm-intl-europe-feature-list">
                <div key="Multilingual Pan-European SEO & Hreflang Configuration" className="wm-intl-europe-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Multilingual Pan-European SEO & Hreflang Configuration"}</span>
                </div>
                <div key="Geo-Targeted Google Search, Shopping & Meta Ads across EU" className="wm-intl-europe-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Geo-Targeted Google Search, Shopping & Meta Ads across EU"}</span>
                </div>
                <div key="Full GDPR, ePrivacy & Cookie Consent Architecture" className="wm-intl-europe-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Full GDPR, ePrivacy & Cookie Consent Architecture"}</span>
                </div>
                <div key="Localized Content Marketing & Native Translation Review" className="wm-intl-europe-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Localized Content Marketing & Native Translation Review"}</span>
                </div>
                <div key="Conversion Rate Optimization (CRO) for European Buyer Journeys" className="wm-intl-europe-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Conversion Rate Optimization (CRO) for European Buyer Journeys"}</span>
                </div>
                <div key="Real-Time Multi-Currency Revenue Telemetry Dashboard" className="wm-intl-europe-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Real-Time Multi-Currency Revenue Telemetry Dashboard"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-europe-include-image">
              <img src="/onpage1.avif" alt="Europe Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-europe-importance-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-importance-box">
            <h2 className="wm-intl-europe-importance-title">
              Why Cross-Border Marketing in 
              <span>Europe Demands Precision</span>
            </h2>

            <div className="wm-intl-europe-importance-content">
              <p>Europe is a massive digital single market with over 450 million consumers, but every nation has distinct search habits, preferred payment methods, and language requirements.</p>
              <p>Winning in Europe requires native localization, technical hreflang precision, and strict adherence to European data privacy laws.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-europe-why-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-why-grid">
            <div className="wm-intl-europe-why-content">
              <span className="wm-intl-europe-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-europe-why-title">
                Built for Europe. 
                <span className="s1"> GDPR Compliant.</span>{' '}
                <span className="s2">Scalable Growth.</span>
              </h2>

              <div className="wm-intl-europe-why-text">
                <p>We engineer multi-territory digital funnels that respect local cultural nuances while maintaining centralized reporting and agile execution.</p>
                <p>With transparent monthly reporting and zero long-term lock-in, we keep your customer acquisition costs efficient across all EU borders.</p>
              </div>
            </div>

            <div className="wm-intl-europe-why-image">
              <img src="/onpage2.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-europe-pricing-section" id="pricing-plans">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-header">
            <span className="wm-intl-europe-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-europe-sec-title">Flexible Europe Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-europe-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-europe-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-europe-curr-btn ${currency === 'EUR' ? 'active' : ''}`}
                onClick={() => setCurrency('EUR')}
              >
                € EUR
              </button>
              <button
                type="button"
                className={`wm-intl-europe-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-europe-curr-btn ${currency === 'GBP' ? 'active' : ''}`}
                onClick={() => setCurrency('GBP')}
              >
                £ GBP
              </button>
              <button
                type="button"
                className={`wm-intl-europe-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-europe-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-europe-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-europe-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-europe-card-top">
                    {plan.badge && <span className="wm-intl-europe-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-europe-card-name">{plan.name}</h3>
                    <p className="wm-intl-europe-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-europe-card-pricing">
                    <div className="wm-intl-europe-price-row">
                      <span className="wm-intl-europe-price-val">{displayPrice}</span>
                      <span className="wm-intl-europe-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-europe-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-europe-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-europe-card-action">
                    <button
                      type="button"
                      className="wm-intl-europe-select-btn"
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
      <section className="wm-intl-europe-benefits-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-benefits-grid">
            <div className="wm-intl-europe-benefits-content">
              <span className="wm-intl-europe-benefits-tag">PROVEN VALUE</span>
              <h2 className="wm-intl-europe-benefits-title">
                Unlocking Cross-Border Growth Across 
                <span>European Markets</span>
              </h2>

              <div className="wm-intl-europe-benefits-text">
                <p>Our European digital marketing campaigns turn multi-country search traffic into predictable revenue streams.</p>
                <p>We build durable digital assets that lower your blended customer acquisition costs across the European continent.</p>
              </div>

              <div className="wm-intl-europe-benefits-points">
                <div key="Top Google Rankings in Major European Economies" className="wm-intl-europe-benefit-point">
                  <span className="wm-intl-europe-benefit-icon">✓</span>
                  <span>{"Top Google Rankings in Major European Economies"}</span>
                </div>
                <div key="Full Compliance with GDPR and European Privacy Frameworks" className="wm-intl-europe-benefit-point">
                  <span className="wm-intl-europe-benefit-icon">✓</span>
                  <span>{"Full Compliance with GDPR and European Privacy Frameworks"}</span>
                </div>
                <div key="Consistent 4x to 7x Return on Cross-Border Ad Spend" className="wm-intl-europe-benefit-point">
                  <span className="wm-intl-europe-benefit-icon">✓</span>
                  <span>{"Consistent 4x to 7x Return on Cross-Border Ad Spend"}</span>
                </div>
                <div key="Centralized Multi-Currency Analytics Dashboard" className="wm-intl-europe-benefit-point">
                  <span className="wm-intl-europe-benefit-icon">✓</span>
                  <span>{"Centralized Multi-Currency Analytics Dashboard"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-europe-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Europe Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-europe-advantage-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-header">
            <span className="wm-intl-europe-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-europe-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-europe-sec-bar"></div>
          </div>

          <div className="wm-intl-europe-advantage-grid">
            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-europe-faqs-section">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-header">
            <span className="wm-intl-europe-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-europe-sec-title">Common Queries About Our Europe Growth Packages</h2>
            <div className="wm-intl-europe-sec-bar"></div>
          </div>

          <div className="wm-intl-europe-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-europe-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-europe-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-europe-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-europe-bottom-banner">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-banner-inner">
            <div className="wm-intl-europe-banner-text">
              <h2>Ready to Accelerate Growth in Europe?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-europe-banner-btns">
              <button
                type="button"
                className="wm-intl-europe-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-europe-bbtn-quote"
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

export default EuropeDigitalMarketingPage;

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
import './OttawaDigitalMarketingPage.css';

const OttawaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('CAD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Ottawa Digital Marketing Agency",
    city: "Ottawa",
    region: "National Capital Region, Ontario, Canada",
    tagline: "CAPITAL REGION GROWTH AGENCY · OTTAWA, CANADA",
    heroHighlight: "Ottawa Digital Marketing & SEO Services",
    leadDesc: "Scale your Ottawa business with high-precision SEO, Google Ads, and government/B2B-ready web architecture in Canada’s National Capital Region.",
    bodyDesc: "Serving downtown Ottawa, Kanata tech corridor, Nepean, Orleans, and Gatineau—Webmok helps professional services, tech companies, and local businesses win high-intent Canadian searchers.",
    stats: [
  {
    "num": "370%",
    "label": "Average Ottawa Traffic Growth"
  },
  {
    "num": "5.2x",
    "label": "Average ROAS on Paid Ads"
  },
  {
    "num": "45+",
    "label": "Ottawa Clients Scaled"
  },
  {
    "num": "100%",
    "label": "Bilingual Strategy Ready"
  }
],
    plans: [
  {
    "name": "Ottawa Starter",
    "badge": "Local Focus",
    "usdPrice": "749",
    "inrPrice": "59,999",
    "desc": "Ideal for local Ottawa service providers, clinics, and professional practices seeking local Google Maps dominance.",
    "features": [
      "Up to 20 High-Intent Ottawa Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Citations Across Ottawa Directories",
      "On-Page Technical SEO & Schema Markup",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Ottawa Growth Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,399",
    "inrPrice": "1,14,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and high-converting landing pages.",
    "features": [
      "Up to 40 Ottawa & Regional Keywords",
      "Google Search Ads (PPC) Management",
      "Bilingual Content Hub Creation (6 Posts/mo)",
      "Technical Speed & Mobile Optimization",
      "Competitor Backlink Interception",
      "Bi-Weekly Strategy Sessions"
    ]
  },
  {
    "name": "Ottawa Enterprise Dominance",
    "badge": "Market Leader",
    "usdPrice": "2,799",
    "inrPrice": "2,29,999",
    "desc": "Full-scale market dominance for Kanata tech companies, regional corporate firms, and national organizations.",
    "features": [
      "Unlimited Target Keywords & National Footprint",
      "Omni-Channel PPC (Google, LinkedIn, Meta)",
      "Bespoke Web Design & Interactive Funnels",
      "High-Tier Canadian Media Placements",
      "Dedicated Account Squad & Daily Slack Access",
      "Custom Multi-Touch Lead Attribution"
    ]
  }
],
    faqs: [
  {
    "q": "Do you offer bilingual English and French digital marketing for the Ottawa-Gatineau region?",
    "a": "Yes! We craft bilingual keyword strategies, ad copy, and landing pages to ensure full reach across both English and French speaking demographics in the National Capital Region."
  },
  {
    "q": "Can Webmok help Kanata B2B technology companies with lead generation?",
    "a": "Yes, we have specialized experience in B2B SaaS and technology marketing, utilizing high-intent Google Ads and LinkedIn campaigns to drive qualified enterprise demo requests."
  },
  {
    "q": "How do you report campaign performance?",
    "a": "You get 24/7 access to our live telemetry dashboard tracking keyword rankings, organic traffic, ad spend efficiency, and inbound form/call leads."
  },
  {
    "q": "Is there a long-term contract requirement?",
    "a": "No, all our Ottawa digital marketing services operate on flexible month-to-month agreements."
  }
]
  };

  return (
    <div className="wm-intl-ottawa-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-ottawa-hero-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-hero-grid">
            <div className="wm-intl-ottawa-hero-left">
              <span className="wm-intl-ottawa-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-ottawa-hero-title-dual">
                <span className="wm-intl-ottawa-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-ottawa-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-ottawa-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-ottawa-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-ottawa-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-ottawa-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-ottawa-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-ottawa-hero-right-trust">
              <div className="wm-intl-ottawa-trust-card">
                <div className="wm-intl-ottawa-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-ottawa-tcard-badge wm-intl-ottawa-badge-clutch">C</div>
              </div>

              <div className="wm-intl-ottawa-trust-card">
                <div className="wm-intl-ottawa-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-ottawa-tcard-badge wm-intl-ottawa-badge-upwork">up</div>
              </div>

              <div className="wm-intl-ottawa-trust-card">
                <div className="wm-intl-ottawa-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-ottawa-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-ottawa-tcard-badge wm-intl-ottawa-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-ottawa-trust-card">
                <div className="wm-intl-ottawa-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-ottawa-tcard-badge wm-intl-ottawa-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-ottawa-stats-strip">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-ottawa-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-ottawa-intro-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-intro-grid">
            <div className="wm-intl-ottawa-intro-left">
              <span className="wm-intl-ottawa-intro-tag">NATIONAL CAPITAL SPECIALISTS</span>
              <h2 className="wm-intl-ottawa-intro-title">
                Strategic Digital Marketing in 
                <span>Ottawa, ON</span>
              </h2>
            </div>
            <div className="wm-intl-ottawa-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Ottawa presents a unique blend of government, tech innovation (Kanata North), and thriving local commerce. Webmok delivers tailored digital campaigns that establish commanding search presence and generate qualified inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-ottawa-numbers-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-numbers-heading">
            <span className="wm-intl-ottawa-numbers-subtitle">OTTAWA TELEMETRY</span>
            <h2>
              Proven Performance Across 
              <span>the Capital Region</span>
            </h2>
          </div>

          <div className="wm-intl-ottawa-numstats-grid">
            <div key="0" className="wm-intl-ottawa-numstat-item">
              <div className="wm-intl-ottawa-numstat-number">{"45+"}</div>
              <div className="wm-intl-ottawa-numstat-line"></div>
              <p>{"Ottawa Brands Scaled"}</p>
            </div>
            <div key="1" className="wm-intl-ottawa-numstat-item">
              <div className="wm-intl-ottawa-numstat-number">{"C$11M+"}</div>
              <div className="wm-intl-ottawa-numstat-line"></div>
              <p>{"Tracked Client Value"}</p>
            </div>
            <div key="2" className="wm-intl-ottawa-numstat-item">
              <div className="wm-intl-ottawa-numstat-number">{"99.1%"}</div>
              <div className="wm-intl-ottawa-numstat-line"></div>
              <p>{"Client Satisfaction"}</p>
            </div>
            <div key="3" className="wm-intl-ottawa-numstat-item">
              <div className="wm-intl-ottawa-numstat-number">{"24/7"}</div>
              <div className="wm-intl-ottawa-numstat-line"></div>
              <p>{"EST Timezone Support"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-ottawa-include-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-include-grid">
            <div className="wm-intl-ottawa-include-content">
              <span className="wm-intl-ottawa-include-tag">COMPREHENSIVE SUITE</span>
              <h2 className="wm-intl-ottawa-include-title">
                What Our Ottawa Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We deliver local Ottawa & Kanata SEO, Google Search Ads, bilingual English/French optimization, conversion-optimized landing pages, and ongoing performance analytics.</p>
              <p>You get a single reliable partner dedicated to scaling your inbound pipeline.</p>

              <div className="wm-intl-ottawa-feature-list">
                <div key="Ottawa & Kanata Geo-Targeted SEO and Google Maps 3-Pack" className="wm-intl-ottawa-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Ottawa & Kanata Geo-Targeted SEO and Google Maps 3-Pack"}</span>
                </div>
                <div key="High-Intent Google Search Ads & Remarketing Funnels" className="wm-intl-ottawa-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Intent Google Search Ads & Remarketing Funnels"}</span>
                </div>
                <div key="Bilingual English & French Content Optimization" className="wm-intl-ottawa-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Bilingual English & French Content Optimization"}</span>
                </div>
                <div key="High-Speed Mobile-First Website Design & CRO" className="wm-intl-ottawa-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Speed Mobile-First Website Design & CRO"}</span>
                </div>
                <div key="Local Ottawa Citations & Business Directory Submissions" className="wm-intl-ottawa-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Local Ottawa Citations & Business Directory Submissions"}</span>
                </div>
                <div key="Bi-Weekly Strategic KPI Reviews & Transparent Dashboard" className="wm-intl-ottawa-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Bi-Weekly Strategic KPI Reviews & Transparent Dashboard"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-ottawa-include-image">
              <img src="/onpage1.avif" alt="Ottawa Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-ottawa-importance-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-importance-box">
            <h2 className="wm-intl-ottawa-importance-title">
              Why Digital Marketing Matters in 
              <span>Ottawa</span>
            </h2>

            <div className="wm-intl-ottawa-importance-content">
              <p>With high household incomes and intense competition in tech, legal, real estate, and healthcare, Ottawa buyers search online before making any commercial decision.</p>
              <p>A dominant organic search ranking and targeted PPC ads guarantee you capture high-intent inquiries before competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-ottawa-why-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-why-grid">
            <div className="wm-intl-ottawa-why-content">
              <span className="wm-intl-ottawa-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-ottawa-why-title">
                Precision Execution. 
                <span className="s1"> Clean Strategy.</span>{' '}
                <span className="s2">Proven Scalability.</span>
              </h2>

              <div className="wm-intl-ottawa-why-text">
                <p>We combine rigorous keyword intelligence with localized content that resonates with Ottawa and Gatineau decision-makers.</p>
                <p>Our transparent, month-to-month contracts keep us focused on delivering measurable pipeline results.</p>
              </div>
            </div>

            <div className="wm-intl-ottawa-why-image">
              <img src="/onpage2.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-ottawa-pricing-section" id="pricing-plans">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-header">
            <span className="wm-intl-ottawa-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-ottawa-sec-title">Flexible Ottawa Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-ottawa-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-ottawa-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-ottawa-curr-btn ${currency === 'CAD' ? 'active' : ''}`}
                onClick={() => setCurrency('CAD')}
              >
                C$ CAD
              </button>
              <button
                type="button"
                className={`wm-intl-ottawa-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-ottawa-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-ottawa-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-ottawa-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-ottawa-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-ottawa-card-top">
                    {plan.badge && <span className="wm-intl-ottawa-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-ottawa-card-name">{plan.name}</h3>
                    <p className="wm-intl-ottawa-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-ottawa-card-pricing">
                    <div className="wm-intl-ottawa-price-row">
                      <span className="wm-intl-ottawa-price-val">{displayPrice}</span>
                      <span className="wm-intl-ottawa-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-ottawa-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-ottawa-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-ottawa-card-action">
                    <button
                      type="button"
                      className="wm-intl-ottawa-select-btn"
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
      <section className="wm-intl-ottawa-benefits-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-benefits-grid">
            <div className="wm-intl-ottawa-benefits-content">
              <span className="wm-intl-ottawa-benefits-tag">PROVEN OUTCOMES</span>
              <h2 className="wm-intl-ottawa-benefits-title">
                Transforming Ottawa Businesses into 
                <span>Market Leaders</span>
              </h2>

              <div className="wm-intl-ottawa-benefits-text">
                <p>Our customized Ottawa digital marketing campaigns build enduring search visibility that lowers your customer acquisition costs over time.</p>
                <p>We turn high-intent searches into paying clients and repeat business.</p>
              </div>

              <div className="wm-intl-ottawa-benefits-points">
                <div key="Top Google 3-Pack Rankings in Ottawa & Kanata" className="wm-intl-ottawa-benefit-point">
                  <span className="wm-intl-ottawa-benefit-icon">✓</span>
                  <span>{"Top Google 3-Pack Rankings in Ottawa & Kanata"}</span>
                </div>
                <div key="Consistent Inflow of High-Quality Inbound Leads" className="wm-intl-ottawa-benefit-point">
                  <span className="wm-intl-ottawa-benefit-icon">✓</span>
                  <span>{"Consistent Inflow of High-Quality Inbound Leads"}</span>
                </div>
                <div key="Predictable Cost Per Lead and Scalable Customer Acquisition" className="wm-intl-ottawa-benefit-point">
                  <span className="wm-intl-ottawa-benefit-icon">✓</span>
                  <span>{"Predictable Cost Per Lead and Scalable Customer Acquisition"}</span>
                </div>
                <div key="Full Pipeline Clarity with Real-Time Revenue Telemetry" className="wm-intl-ottawa-benefit-point">
                  <span className="wm-intl-ottawa-benefit-icon">✓</span>
                  <span>{"Full Pipeline Clarity with Real-Time Revenue Telemetry"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-ottawa-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Ottawa Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-ottawa-advantage-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-header">
            <span className="wm-intl-ottawa-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-ottawa-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-ottawa-sec-bar"></div>
          </div>

          <div className="wm-intl-ottawa-advantage-grid">
            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-ottawa-faqs-section">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-header">
            <span className="wm-intl-ottawa-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-ottawa-sec-title">Common Queries About Our Ottawa Growth Packages</h2>
            <div className="wm-intl-ottawa-sec-bar"></div>
          </div>

          <div className="wm-intl-ottawa-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-ottawa-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-ottawa-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-ottawa-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-ottawa-bottom-banner">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-banner-inner">
            <div className="wm-intl-ottawa-banner-text">
              <h2>Ready to Accelerate Growth in Ottawa?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-ottawa-banner-btns">
              <button
                type="button"
                className="wm-intl-ottawa-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-ottawa-bbtn-quote"
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

export default OttawaDigitalMarketingPage;

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
import './SanFranciscoDigitalMarketingPage.css';

const SanFranciscoDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "San Francisco Digital Marketing Agency",
    city: "San Francisco",
    region: "Bay Area & Silicon Valley, CA, USA",
    tagline: "BAY AREA & SILICON VALLEY GROWTH SQUAD · SF, USA",
    heroHighlight: "San Francisco Digital Marketing Agency",
    leadDesc: "Fuel your Silicon Valley startup or Bay Area enterprise with high-velocity B2B lead generation, technical SaaS SEO, and precision paid acquisition.",
    bodyDesc: "From SOMA and FiDi tech firms to South Bay enterprises and East Bay innovators—Webmok engineers scalable, data-backed digital engines that accelerate ARR and pipeline value.",
    stats: [
  {
    "num": "510%",
    "label": "Average B2B Pipeline Growth"
  },
  {
    "num": "4.8x",
    "label": "CAC to LTV Efficiency Ratio"
  },
  {
    "num": "80+",
    "label": "Bay Area Tech & B2B Clients"
  },
  {
    "num": "100%",
    "label": "Data-Backed Execution"
  }
],
    plans: [
  {
    "name": "SF Seed / Local Growth",
    "badge": "Early Stage",
    "usdPrice": "949",
    "inrPrice": "74,999",
    "desc": "Ideal for early-stage startups and local SF service providers building initial organic traction and localized Google visibility.",
    "features": [
      "Up to 25 High-Intent Bay Area Keywords",
      "Google Business Profile & Local SF Citations",
      "Core Technical SEO & Schema Markup",
      "On-Page Optimization & 4 Quality Blog Hubs",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "SF Scale-Up B2B",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,799",
    "inrPrice": "1,49,999",
    "desc": "Aggressive multi-channel demand gen for Series A/B SaaS startups and established Bay Area mid-market companies.",
    "features": [
      "Up to 55 B2B & Commercial Keywords",
      "Google Search Ads & LinkedIn PPC Management",
      "High-Converting Landing Page Creation & CRO",
      "Technical Core Web Vitals & Speed Optimization",
      "8 High-Authority B2B Industry Backlinks/mo",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "SF Silicon Valley Monopoly",
    "badge": "Enterprise Dominance",
    "usdPrice": "3,499",
    "inrPrice": "2,89,999",
    "desc": "Full-scale omni-channel growth engine for growth-stage tech firms, enterprise platforms, and market leaders.",
    "features": [
      "Unlimited Target Keywords & Global Search Footprint",
      "Omni-Channel PPC (Google, LinkedIn, Meta, YouTube)",
      "Bespoke Web Portal / Headless CMS Redesign",
      "Tier-1 Tech Editorial PR & Media Placements",
      "Dedicated Senior Account Lead & Daily Slack Channel",
      "HubSpot/Salesforce Revenue Attribution Integration"
    ]
  }
],
    faqs: [
  {
    "q": "Do you specialize in B2B SaaS and technology companies in San Francisco?",
    "a": "Yes! Over 60% of our Bay Area client roster consists of B2B software, fintech, AI platforms, and technology service companies requiring specialized technical content and ABM funnels."
  },
  {
    "q": "How do you integrate with our CRM (HubSpot or Salesforce)?",
    "a": "We configure custom UTM tracking, webhook triggers, and conversion goals to pass enriched lead data directly into HubSpot, Salesforce, or Marketo for full-funnel attribution."
  },
  {
    "q": "Can you coordinate with our internal marketing and engineering teams?",
    "a": "Absolutely. We plug directly into your Slack, Jira, or ClickUp workflows, functioning as a seamless extension of your in-house growth squad."
  },
  {
    "q": "What are the contract terms?",
    "a": "Flexible month-to-month contracts with zero lock-in. You stay because we deliver measurable pipeline growth."
  }
]
  };

  return (
    <div className="wm-intl-sanfrancisco-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-sanfrancisco-hero-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-hero-grid">
            <div className="wm-intl-sanfrancisco-hero-left">
              <span className="wm-intl-sanfrancisco-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-sanfrancisco-hero-title-dual">
                <span className="wm-intl-sanfrancisco-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-sanfrancisco-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-sanfrancisco-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-sanfrancisco-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-sanfrancisco-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-sanfrancisco-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-sanfrancisco-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-sanfrancisco-hero-right-trust">
              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-clutch">C</div>
              </div>

              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-upwork">up</div>
              </div>

              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-sanfrancisco-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-sanfrancisco-stats-strip">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-sanfrancisco-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-sanfrancisco-intro-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-intro-grid">
            <div className="wm-intl-sanfrancisco-intro-left">
              <span className="wm-intl-sanfrancisco-intro-tag">SILICON VALLEY GROWTH ARCHITECTURE</span>
              <h2 className="wm-intl-sanfrancisco-intro-title">
                Engineering Scalable Demand in 
                <span>San Francisco</span>
              </h2>
            </div>
            <div className="wm-intl-sanfrancisco-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> San Francisco and the Bay Area demand sophisticated, engineering-driven marketing. Webmok integrates technical search architecture, high-intent LinkedIn & Google B2B funnels, and conversion optimization to drive qualified demos and closed deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-sanfrancisco-numbers-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-numbers-heading">
            <span className="wm-intl-sanfrancisco-numbers-subtitle">BAY AREA TELEMETRY</span>
            <h2>
              Proven Metrics Across 
              <span>Silicon Valley</span>
            </h2>
          </div>

          <div className="wm-intl-sanfrancisco-numstats-grid">
            <div key="0" className="wm-intl-sanfrancisco-numstat-item">
              <div className="wm-intl-sanfrancisco-numstat-number">{"80+"}</div>
              <div className="wm-intl-sanfrancisco-numstat-line"></div>
              <p>{"SF Startups & Enterprises"}</p>
            </div>
            <div key="1" className="wm-intl-sanfrancisco-numstat-item">
              <div className="wm-intl-sanfrancisco-numstat-number">{"$28M+"}</div>
              <div className="wm-intl-sanfrancisco-numstat-line"></div>
              <p>{"Tracked Pipeline ARR"}</p>
            </div>
            <div key="2" className="wm-intl-sanfrancisco-numstat-item">
              <div className="wm-intl-sanfrancisco-numstat-number">{"99.5%"}</div>
              <div className="wm-intl-sanfrancisco-numstat-line"></div>
              <p>{"Client Retention"}</p>
            </div>
            <div key="3" className="wm-intl-sanfrancisco-numstat-item">
              <div className="wm-intl-sanfrancisco-numstat-number">{"< 28s"}</div>
              <div className="wm-intl-sanfrancisco-numstat-line"></div>
              <p>{"Engineer Response Time"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-sanfrancisco-include-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-include-grid">
            <div className="wm-intl-sanfrancisco-include-content">
              <span className="wm-intl-sanfrancisco-include-tag">B2B & TECH CAPABILITIES</span>
              <h2 className="wm-intl-sanfrancisco-include-title">
                What Our San Francisco Digital 
                <span>Marketing Packages Include</span>
              </h2>
              <p>We deliver full-funnel SaaS & B2B SEO, precision account-based marketing (ABM), Google Search & LinkedIn PPC ads, and high-performance Webflow/React web development.</p>
              <p>You get a senior digital squad that speaks your product language and optimizes for qualified pipeline rather than vanity clicks.</p>

              <div className="wm-intl-sanfrancisco-feature-list">
                <div key="B2B & SaaS Topical Authority & Technical SEO Architecture" className="wm-intl-sanfrancisco-feature-item">
                  <span className="chk">✓</span>
                  <span>{"B2B & SaaS Topical Authority & Technical SEO Architecture"}</span>
                </div>
                <div key="High-Intent Google Ads & LinkedIn ABM Paid Campaigns" className="wm-intl-sanfrancisco-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Intent Google Ads & LinkedIn ABM Paid Campaigns"}</span>
                </div>
                <div key="Product-Led Growth (PLG) Content & Comparison Hubs" className="wm-intl-sanfrancisco-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Product-Led Growth (PLG) Content & Comparison Hubs"}</span>
                </div>
                <div key="High-Converting Landing Page Design & CRO Frameworks" className="wm-intl-sanfrancisco-feature-item">
                  <span className="chk">✓</span>
                  <span>{"High-Converting Landing Page Design & CRO Frameworks"}</span>
                </div>
                <div key="CRM Integration (HubSpot, Salesforce) & Lead Scoring" className="wm-intl-sanfrancisco-feature-item">
                  <span className="chk">✓</span>
                  <span>{"CRM Integration (HubSpot, Salesforce) & Lead Scoring"}</span>
                </div>
                <div key="Dedicated US Pacific Timezone Growth Strategist" className="wm-intl-sanfrancisco-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Dedicated US Pacific Timezone Growth Strategist"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-sanfrancisco-include-image">
              <img src="/onpage1.avif" alt="San Francisco Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-sanfrancisco-importance-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-importance-box">
            <h2 className="wm-intl-sanfrancisco-importance-title">
              Why San Francisco Companies Demand 
              <span>Scientific Marketing</span>
            </h2>

            <div className="wm-intl-sanfrancisco-importance-content">
              <p>In the tech capital of the world, buyer attention is fiercely contested. Generic marketing agencies that don’t understand B2B sales cycles burn cash with zero pipeline to show.</p>
              <p>Success requires technical search superiority, high-intent targeting, and clear multi-touch attribution that connects clicks directly to closed ARR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-sanfrancisco-why-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-why-grid">
            <div className="wm-intl-sanfrancisco-why-content">
              <span className="wm-intl-sanfrancisco-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-sanfrancisco-why-title">
                Data-Driven. 
                <span className="s1"> Pipeline Focused.</span>{' '}
                <span className="s2">Rapid Velocity.</span>
              </h2>

              <div className="wm-intl-sanfrancisco-why-text">
                <p>We approach marketing like software engineering—running disciplined sprints, testing hypotheses, and scaling channels with proven unit economics.</p>
                <p>With transparent bi-weekly telemetry and zero long-term lock-in, we keep our focus 100% on driving your revenue.</p>
              </div>
            </div>

            <div className="wm-intl-sanfrancisco-why-image">
              <img src="/onpage2.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-sanfrancisco-pricing-section" id="pricing-plans">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-header">
            <span className="wm-intl-sanfrancisco-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-sanfrancisco-sec-title">Flexible San Francisco Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-sanfrancisco-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-sanfrancisco-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-sanfrancisco-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-sanfrancisco-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-sanfrancisco-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-sanfrancisco-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-sanfrancisco-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-sanfrancisco-card-top">
                    {plan.badge && <span className="wm-intl-sanfrancisco-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-sanfrancisco-card-name">{plan.name}</h3>
                    <p className="wm-intl-sanfrancisco-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-sanfrancisco-card-pricing">
                    <div className="wm-intl-sanfrancisco-price-row">
                      <span className="wm-intl-sanfrancisco-price-val">{displayPrice}</span>
                      <span className="wm-intl-sanfrancisco-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-sanfrancisco-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-sanfrancisco-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-sanfrancisco-card-action">
                    <button
                      type="button"
                      className="wm-intl-sanfrancisco-select-btn"
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
      <section className="wm-intl-sanfrancisco-benefits-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-benefits-grid">
            <div className="wm-intl-sanfrancisco-benefits-content">
              <span className="wm-intl-sanfrancisco-benefits-tag">PROVEN VALUE</span>
              <h2 className="wm-intl-sanfrancisco-benefits-title">
                Accelerating ARR and Pipeline for 
                <span>Bay Area Innovators</span>
              </h2>

              <div className="wm-intl-sanfrancisco-benefits-text">
                <p>Our San Francisco marketing campaigns create predictable, compounding pipeline that reduces dependency on outbound sales.</p>
                <p>We turn high-intent organic and paid searchers into qualified demo requests and enterprise customers.</p>
              </div>

              <div className="wm-intl-sanfrancisco-benefits-points">
                <div key="Page #1 Dominance for High-Value Commercial & B2B Search Terms" className="wm-intl-sanfrancisco-benefit-point">
                  <span className="wm-intl-sanfrancisco-benefit-icon">✓</span>
                  <span>{"Page #1 Dominance for High-Value Commercial & B2B Search Terms"}</span>
                </div>
                <div key="Consistent 35%+ Reduction in Blended Cost Per Acquisition (CPA)" className="wm-intl-sanfrancisco-benefit-point">
                  <span className="wm-intl-sanfrancisco-benefit-icon">✓</span>
                  <span>{"Consistent 35%+ Reduction in Blended Cost Per Acquisition (CPA)"}</span>
                </div>
                <div key="High-Authority Domain Equity Recognized Across Tech Industry" className="wm-intl-sanfrancisco-benefit-point">
                  <span className="wm-intl-sanfrancisco-benefit-icon">✓</span>
                  <span>{"High-Authority Domain Equity Recognized Across Tech Industry"}</span>
                </div>
                <div key="Full Pipeline Attribution Directly Connected to Your CRM" className="wm-intl-sanfrancisco-benefit-point">
                  <span className="wm-intl-sanfrancisco-benefit-icon">✓</span>
                  <span>{"Full Pipeline Attribution Directly Connected to Your CRM"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-sanfrancisco-benefits-image">
              <img src="/onpagebenifts.jpg" alt="San Francisco Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-sanfrancisco-advantage-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-header">
            <span className="wm-intl-sanfrancisco-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-sanfrancisco-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-sanfrancisco-sec-bar"></div>
          </div>

          <div className="wm-intl-sanfrancisco-advantage-grid">
            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-sanfrancisco-faqs-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-header">
            <span className="wm-intl-sanfrancisco-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-sanfrancisco-sec-title">Common Queries About Our San Francisco Growth Packages</h2>
            <div className="wm-intl-sanfrancisco-sec-bar"></div>
          </div>

          <div className="wm-intl-sanfrancisco-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-sanfrancisco-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-sanfrancisco-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-sanfrancisco-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-sanfrancisco-bottom-banner">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-banner-inner">
            <div className="wm-intl-sanfrancisco-banner-text">
              <h2>Ready to Accelerate Growth in San Francisco?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-sanfrancisco-banner-btns">
              <button
                type="button"
                className="wm-intl-sanfrancisco-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-sanfrancisco-bbtn-quote"
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

export default SanFranciscoDigitalMarketingPage;

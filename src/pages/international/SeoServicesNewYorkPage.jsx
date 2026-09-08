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
import './SeoServicesNewYorkPage.css';

const SeoServicesNewYorkPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "SEO Services in New York",
    city: "New York",
    region: "New York City, NY, USA",
    tagline: "ELITE NEW YORK SEO AGENCY · NYC, USA",
    heroHighlight: "Top SEO Services in New York",
    leadDesc: "Outrank Wall Street, Midtown, and Manhattan competitors with high-authority technical SEO, bespoke link acquisition, and data-backed search strategies.",
    bodyDesc: "In the world’s most competitive business capital, second-page rankings don’t exist. Webmok builds bulletproof organic ranking engines that capture high-ticket NYC commercial intent.",
    stats: [
  {
    "num": "490%",
    "label": "Average NYC Organic Traffic Surge"
  },
  {
    "num": "#1 Rank",
    "label": "In Ultra-Competitive NYC Niches"
  },
  {
    "num": "90+ DA",
    "label": "Editorial Tier-1 Backlink Network"
  },
  {
    "num": "100%",
    "label": "Strict White-Hat Google Compliance"
  }
],
    plans: [
  {
    "name": "NYC Growth SEO",
    "badge": "Market Contender",
    "usdPrice": "999",
    "inrPrice": "79,999",
    "desc": "Built for NYC boutique firms, specialized practices, and startups looking to break into page 1 for key local terms.",
    "features": [
      "Up to 25 Competitive NYC Keywords",
      "Full Google Business Profile NYC Optimization",
      "Comprehensive On-Page & Schema Markup",
      "4 High-Authority Outreach Backlinks/mo",
      "Monthly Transparent ROI Dashboard"
    ]
  },
  {
    "name": "NYC Market Leader",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,899",
    "inrPrice": "1,54,999",
    "desc": "Aggressive organic conquesting for mid-market New York firms fighting for high-value transactional search volume.",
    "features": [
      "Up to 60 High-Difficulty NYC Keywords",
      "Comprehensive Technical SEO & Core Web Vitals Fixes",
      "10 Premium Tier-1 Editorial Backlinks/mo",
      "Topical Authority Content Hub Creation (8 Posts/mo)",
      "Competitor Backlink Interception & Gap Analysis",
      "Bi-Weekly Strategy Sessions with Senior Lead"
    ]
  },
  {
    "name": "NYC Enterprise Monopoly",
    "badge": "Unstoppable Authority",
    "usdPrice": "3,499",
    "inrPrice": "2,89,999",
    "desc": "Uncompromising organic domination for established NYC enterprises, national brands, and venture-backed companies.",
    "features": [
      "Unlimited High-Volume Keywords & National Expansion",
      "Full-Scale Digital PR Campaigns & Major News Placements",
      "Custom Interactive Content & Conversion Assets",
      "Dedicated NYC Squad (SEO Lead, Tech Dev, PR Strategist)",
      "Direct Slack Channel Access & Weekly Telemetry",
      "Multi-Touch Attribution & Custom CRM Pipelines"
    ]
  }
],
    faqs: [
  {
    "q": "How difficult is it to rank on Google in New York City?",
    "a": "NYC is the most competitive search market globally. It requires flawless technical SEO, dense topical authority, and high-tier editorial backlinks. We have repeatedly ranked clients #1 across high-stakes NYC sectors."
  },
  {
    "q": "How does Webmok acquire backlinks for New York campaigns?",
    "a": "We strictly execute manual digital PR outreach to high-authority publications, industry journals, and regional business news outlets (DA 60-90+). Zero private blog networks (PBNs) or spam."
  },
  {
    "q": "Can you handle local NYC 3-pack maps and national organic SEO together?",
    "a": "Yes! We create dual-funnel SEO architectures that capture both local NYC foot/phone inquiries and nationwide organic search volume."
  },
  {
    "q": "What reporting do we receive each month?",
    "a": "You receive live 24/7 access to our real-time telemetry dashboard showing keyword movements, organic traffic growth, backlink additions, and direct conversions."
  }
]
  };

  return (
    <div className="wm-intl-newyork-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-newyork-hero-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-hero-grid">
            <div className="wm-intl-newyork-hero-left">
              <span className="wm-intl-newyork-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-newyork-hero-title-dual">
                <span className="wm-intl-newyork-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-newyork-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-newyork-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-newyork-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-newyork-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-newyork-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-newyork-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-newyork-hero-right-trust">
              <div className="wm-intl-newyork-trust-card">
                <div className="wm-intl-newyork-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-newyork-tcard-badge wm-intl-newyork-badge-clutch">C</div>
              </div>

              <div className="wm-intl-newyork-trust-card">
                <div className="wm-intl-newyork-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-newyork-tcard-badge wm-intl-newyork-badge-upwork">up</div>
              </div>

              <div className="wm-intl-newyork-trust-card">
                <div className="wm-intl-newyork-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-newyork-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-newyork-tcard-badge wm-intl-newyork-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-newyork-trust-card">
                <div className="wm-intl-newyork-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-newyork-tcard-badge wm-intl-newyork-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-newyork-stats-strip">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-newyork-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-newyork-intro-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-intro-grid">
            <div className="wm-intl-newyork-intro-left">
              <span className="wm-intl-newyork-intro-tag">MANHATTAN & TRI-STATE SEO</span>
              <h2 className="wm-intl-newyork-intro-title">
                Enterprise-Grade SEO for 
                <span>New York Powerhouses</span>
              </h2>
            </div>
            <div className="wm-intl-newyork-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> New York City demands an uncompromising standard of SEO execution. Webmok engineers custom organic search frameworks that navigate high competition, secure dominant market share, and drive multi-million dollar pipeline value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-newyork-numbers-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-numbers-heading">
            <span className="wm-intl-newyork-numbers-subtitle">NYC MARKET DOMINANCE</span>
            <h2>
              Unrivaled Organic Results in 
              <span>New York City</span>
            </h2>
          </div>

          <div className="wm-intl-newyork-numstats-grid">
            <div key="0" className="wm-intl-newyork-numstat-item">
              <div className="wm-intl-newyork-numstat-number">{"95+"}</div>
              <div className="wm-intl-newyork-numstat-line"></div>
              <p>{"NYC Enterprises Ranked"}</p>
            </div>
            <div key="1" className="wm-intl-newyork-numstat-item">
              <div className="wm-intl-newyork-numstat-number">{"$32M+"}</div>
              <div className="wm-intl-newyork-numstat-line"></div>
              <p>{"Organic Revenue Pipeline"}</p>
            </div>
            <div key="2" className="wm-intl-newyork-numstat-item">
              <div className="wm-intl-newyork-numstat-number">{"99.6%"}</div>
              <div className="wm-intl-newyork-numstat-line"></div>
              <p>{"Keyword Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-newyork-numstat-item">
              <div className="wm-intl-newyork-numstat-number">{"Top 1%"}</div>
              <div className="wm-intl-newyork-numstat-line"></div>
              <p>{"Technical SEO Performance"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-newyork-include-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-include-grid">
            <div className="wm-intl-newyork-include-content">
              <span className="wm-intl-newyork-include-tag">ELITE DELIVERABLES</span>
              <h2 className="wm-intl-newyork-include-title">
                What Our New York SEO 
                <span>Campaigns Deliver</span>
              </h2>
              <p>Our NYC SEO strategy combines exhaustive entity-based keyword research, enterprise log analysis, deep Core Web Vitals remediation, and authoritative digital PR link building.</p>
              <p>We turn your website into the definitive organic authority in Manhattan, Brooklyn, Queens, Long Island, and national markets.</p>

              <div className="wm-intl-newyork-feature-list">
                <div key="NYC High-Intent Commercial Keyword Conquesting" className="wm-intl-newyork-feature-item">
                  <span className="chk">✓</span>
                  <span>{"NYC High-Intent Commercial Keyword Conquesting"}</span>
                </div>
                <div key="Advanced Technical SEO & Server Architecture Audits" className="wm-intl-newyork-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Advanced Technical SEO & Server Architecture Audits"}</span>
                </div>
                <div key="Tier-1 Digital PR & Authoritative Editorial Backlinks" className="wm-intl-newyork-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Tier-1 Digital PR & Authoritative Editorial Backlinks"}</span>
                </div>
                <div key="Semantic Search, Topical Authority & Entity Optimization" className="wm-intl-newyork-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Semantic Search, Topical Authority & Entity Optimization"}</span>
                </div>
                <div key="Local NYC 3-Pack Maps Dominance & Schema Markup" className="wm-intl-newyork-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Local NYC 3-Pack Maps Dominance & Schema Markup"}</span>
                </div>
                <div key="C-Suite Executive Dashboards & Conversion Attribution" className="wm-intl-newyork-feature-item">
                  <span className="chk">✓</span>
                  <span>{"C-Suite Executive Dashboards & Conversion Attribution"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-newyork-include-image">
              <img src="/onpage1.avif" alt="SEO Services in New York" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-newyork-importance-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-importance-box">
            <h2 className="wm-intl-newyork-importance-title">
              Why New York Businesses Require 
              <span>World-Class SEO</span>
            </h2>

            <div className="wm-intl-newyork-importance-content">
              <p>A single high-intent search in NYC (e.g. corporate law, commercial real estate, luxury retail, B2B SaaS) can be worth tens of thousands of dollars in lifetime customer value.</p>
              <p>Relying solely on expensive PPC in New York bleeds budgets. Organic dominance establishes compounding trust and gives you an enduring competitive moat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-newyork-why-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-why-grid">
            <div className="wm-intl-newyork-why-content">
              <span className="wm-intl-newyork-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-newyork-why-title">
                Aggressive Execution. 
                <span className="s1"> Clean Code.</span>{' '}
                <span className="s2">Unstoppable Rankings.</span>
              </h2>

              <div className="wm-intl-newyork-why-text">
                <p>We don’t use generic automated tools. Our senior search strategists reverse-engineer the top 3 ranking competitors in your NYC niche and out-execute them across every ranking factor.</p>
                <p>From Google algorithm resilience to conversion-focused content, we ensure your New York search traffic translates directly into bottom-line revenue.</p>
              </div>
            </div>

            <div className="wm-intl-newyork-why-image">
              <img src="/onpage2.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-newyork-pricing-section" id="pricing-plans">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-header">
            <span className="wm-intl-newyork-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-newyork-sec-title">Flexible New York Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-newyork-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-newyork-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-newyork-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-newyork-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-newyork-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-newyork-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-newyork-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-newyork-card-top">
                    {plan.badge && <span className="wm-intl-newyork-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-newyork-card-name">{plan.name}</h3>
                    <p className="wm-intl-newyork-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-newyork-card-pricing">
                    <div className="wm-intl-newyork-price-row">
                      <span className="wm-intl-newyork-price-val">{displayPrice}</span>
                      <span className="wm-intl-newyork-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-newyork-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-newyork-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-newyork-card-action">
                    <button
                      type="button"
                      className="wm-intl-newyork-select-btn"
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
      <section className="wm-intl-newyork-benefits-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-benefits-grid">
            <div className="wm-intl-newyork-benefits-content">
              <span className="wm-intl-newyork-benefits-tag">BOTTOM-LINE IMPACT</span>
              <h2 className="wm-intl-newyork-benefits-title">
                Organic Supremacy in the 
                <span>Capital of Commerce</span>
              </h2>

              <div className="wm-intl-newyork-benefits-text">
                <p>Ranking #1 in New York changes everything. Our clients experience exponential increases in qualified RFP requests, executive inquiries, and consumer sales.</p>
                <p>We deliver organic dominance that withstands every Google core algorithm update.</p>
              </div>

              <div className="wm-intl-newyork-benefits-points">
                <div key="Consistent Top 3 Rankings in Ultra-Competitive NYC Niches" className="wm-intl-newyork-benefit-point">
                  <span className="wm-intl-newyork-benefit-icon">✓</span>
                  <span>{"Consistent Top 3 Rankings in Ultra-Competitive NYC Niches"}</span>
                </div>
                <div key="Drastic Reduction in Paid Customer Acquisition Costs" className="wm-intl-newyork-benefit-point">
                  <span className="wm-intl-newyork-benefit-icon">✓</span>
                  <span>{"Drastic Reduction in Paid Customer Acquisition Costs"}</span>
                </div>
                <div key="High-Authority Domain Equity That Compounds Over Time" className="wm-intl-newyork-benefit-point">
                  <span className="wm-intl-newyork-benefit-icon">✓</span>
                  <span>{"High-Authority Domain Equity That Compounds Over Time"}</span>
                </div>
                <div key="Full Revenue & Lead Attribution with Zero Vanity Metrics" className="wm-intl-newyork-benefit-point">
                  <span className="wm-intl-newyork-benefit-icon">✓</span>
                  <span>{"Full Revenue & Lead Attribution with Zero Vanity Metrics"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-newyork-benefits-image">
              <img src="/onpagebenifts.jpg" alt="SEO Services in New York" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-newyork-advantage-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-header">
            <span className="wm-intl-newyork-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-newyork-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-newyork-sec-bar"></div>
          </div>

          <div className="wm-intl-newyork-advantage-grid">
            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-newyork-faqs-section">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-header">
            <span className="wm-intl-newyork-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-newyork-sec-title">Common Queries About Our New York Growth Packages</h2>
            <div className="wm-intl-newyork-sec-bar"></div>
          </div>

          <div className="wm-intl-newyork-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-newyork-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-newyork-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-newyork-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-newyork-bottom-banner">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-banner-inner">
            <div className="wm-intl-newyork-banner-text">
              <h2>Ready to Accelerate Growth in New York?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-newyork-banner-btns">
              <button
                type="button"
                className="wm-intl-newyork-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-newyork-bbtn-quote"
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

export default SeoServicesNewYorkPage;

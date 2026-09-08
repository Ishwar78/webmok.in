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
import './CanadaDigitalMarketingPage.css';

const CanadaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('CAD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Canada Digital Marketing Agency",
    city: "Canada",
    region: "Canada Nationwide",
    tagline: "NATIONAL DIGITAL MARKETING AGENCY · CANADA",
    heroHighlight: "Canada Digital Marketing & SEO Agency",
    leadDesc: "Scale your Canadian business nationwide with bilingual SEO, Google Ads, and custom conversion funnels engineered for the Canadian market.",
    bodyDesc: "Covering Ontario, British Columbia, Alberta, Quebec, and beyond—Webmok delivers compliant, high-performing digital marketing that captures Canadian search intent.",
    stats: [
  {
    "num": "390%",
    "label": "Average Canada Traffic Lift"
  },
  {
    "num": "5.5x",
    "label": "Average ROAS on Google Ads"
  },
  {
    "num": "90+",
    "label": "Canadian Brands Scaled"
  },
  {
    "num": "100%",
    "label": "PIPEDA & CASL Compliant"
  }
],
    plans: [
  {
    "name": "Canada Growth Core",
    "badge": "City Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Canadian service businesses targeting a specific city market like Toronto, Vancouver, or Calgary.",
    "features": [
      "Up to 20 High-Intent Canadian Keywords",
      "Google Business Profile Geo-Optimization",
      "Canadian Local Citations & YellowPages Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report"
    ]
  },
  {
    "name": "Canada Multi-Province",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-city campaign combining national SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-Province Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "Canada National Monopoly",
    "badge": "National Dominance",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale nationwide market takeover for Canadian national brands, franchise networks, and enterprise e-commerce.",
    "features": [
      "Coast-to-Coast Keyword Domination (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bilingual English/French Optimization Available",
      "Tier-1 Canadian Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    faqs: [
  {
    "q": "Do you support bilingual marketing campaigns in French for Quebec?",
    "a": "Yes! We create specialized French-language SEO strategies and localized Google Ads campaigns tailored for Montreal and Quebec markets."
  },
  {
    "q": "Are your digital campaigns compliant with Canadian privacy laws (PIPEDA and CASL)?",
    "a": "100% fully compliant. We ensure all tracking, lead capture forms, email marketing, and analytics strictly follow PIPEDA and CASL standards."
  },
  {
    "q": "How does Webmok coordinate across Canadian time zones (EST, CST, MST, PST)?",
    "a": "Our squad is structured to provide seamless coordination across all Canadian business hours from Vancouver (PST) to Halifax (AST)."
  },
  {
    "q": "Are there long-term contracts?",
    "a": "No, all our Canadian digital marketing plans are month-to-month. You stay because of compounding results."
  }
]
  };

  return (
    <div className="wm-intl-canada-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-canada-hero-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-hero-grid">
            <div className="wm-intl-canada-hero-left">
              <span className="wm-intl-canada-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-canada-hero-title-dual">
                <span className="wm-intl-canada-hero-italic-gold">Accelerate Market Dominance with</span>
                <span className="wm-intl-canada-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-canada-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-canada-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-canada-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-canada-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Audit`)}
                >
                  Get Free Strategy Audit <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-canada-btn-outline">
                  View {pageData.city} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-canada-hero-right-trust">
              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-clutch">C</div>
              </div>

              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Agency</p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-upwork">up</div>
              </div>

              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-canada-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-intl-canada-stats-strip">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-canada-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="wm-intl-canada-intro-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-intro-grid">
            <div className="wm-intl-canada-intro-left">
              <span className="wm-intl-canada-intro-tag">COAST-TO-COAST GROWTH</span>
              <h2 className="wm-intl-canada-intro-title">
                Digital Marketing Built for 
                <span>Canadian Enterprises</span>
              </h2>
            </div>
            <div className="wm-intl-canada-intro-right">
              <p>
                <span>Webmok Technologies is a premier global digital partner</span> Webmok Technologies is a trusted digital partner helping Canadian brands expand market share across all 10 provinces. We combine national SEO, local Google Maps optimization, precision paid media, and bilingual capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="wm-intl-canada-numbers-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-numbers-heading">
            <span className="wm-intl-canada-numbers-subtitle">CANADA MARKET METRICS</span>
            <h2>
              Measurable Outcomes Across 
              <span>Canada</span>
            </h2>
          </div>

          <div className="wm-intl-canada-numstats-grid">
            <div key="0" className="wm-intl-canada-numstat-item">
              <div className="wm-intl-canada-numstat-number">{"90+"}</div>
              <div className="wm-intl-canada-numstat-line"></div>
              <p>{"Canadian Clients Served"}</p>
            </div>
            <div key="1" className="wm-intl-canada-numstat-item">
              <div className="wm-intl-canada-numstat-number">{"C$22M+"}</div>
              <div className="wm-intl-canada-numstat-line"></div>
              <p>{"Generated Client Value"}</p>
            </div>
            <div key="2" className="wm-intl-canada-numstat-item">
              <div className="wm-intl-canada-numstat-number">{"99.2%"}</div>
              <div className="wm-intl-canada-numstat-line"></div>
              <p>{"Client Retention Rate"}</p>
            </div>
            <div key="3" className="wm-intl-canada-numstat-item">
              <div className="wm-intl-canada-numstat-number">{"24/7"}</div>
              <div className="wm-intl-canada-numstat-line"></div>
              <p>{"Timezone Aligned Support"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / CAPABILITIES SECTION */}
      <section className="wm-intl-canada-include-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-include-grid">
            <div className="wm-intl-canada-include-content">
              <span className="wm-intl-canada-include-tag">FULL CAPABILITIES</span>
              <h2 className="wm-intl-canada-include-title">
                What Our Canada Digital Marketing 
                <span>Packages Include</span>
              </h2>
              <p>We deliver comprehensive Canadian SEO (English and French), high-intent Google Search and Local Services Ads, Facebook/Instagram paid funnels, and speed-optimized websites.</p>
              <p>You get a single high-performing partner driving revenue across Canada.</p>

              <div className="wm-intl-canada-feature-list">
                <div key="National & Provincial Canada SEO Architecture" className="wm-intl-canada-feature-item">
                  <span className="chk">✓</span>
                  <span>{"National & Provincial Canada SEO Architecture"}</span>
                </div>
                <div key="Google Local 3-Pack Maps Optimization across Canadian Cities" className="wm-intl-canada-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Google Local 3-Pack Maps Optimization across Canadian Cities"}</span>
                </div>
                <div key="Geo-Targeted Google Search, Shopping & Performance Max Ads" className="wm-intl-canada-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Geo-Targeted Google Search, Shopping & Performance Max Ads"}</span>
                </div>
                <div key="Bilingual English & French Optimization for Quebec Markets" className="wm-intl-canada-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Bilingual English & French Optimization for Quebec Markets"}</span>
                </div>
                <div key="Speed-Optimized Web Design & Conversion Rate Optimization" className="wm-intl-canada-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Speed-Optimized Web Design & Conversion Rate Optimization"}</span>
                </div>
                <div key="Full PIPEDA/CASL Compliance & Revenue Telemetry Dashboard" className="wm-intl-canada-feature-item">
                  <span className="chk">✓</span>
                  <span>{"Full PIPEDA/CASL Compliance & Revenue Telemetry Dashboard"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-canada-include-image">
              <img src="/onpage1.avif" alt="Canada Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="wm-intl-canada-importance-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-importance-box">
            <h2 className="wm-intl-canada-importance-title">
              Why Digital Marketing is Essential in 
              <span>Canada Today</span>
            </h2>

            <div className="wm-intl-canada-importance-content">
              <p>Canadian consumers and businesses conduct over 88% of buying research online. With major tech hubs in Toronto, Vancouver, Montreal, and Calgary, standing out requires surgical search precision.</p>
              <p>Without aggressive technical SEO and localized ad targeting, competing brands capture your high-intent prospects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="wm-intl-canada-why-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-why-grid">
            <div className="wm-intl-canada-why-content">
              <span className="wm-intl-canada-why-tag">THE WEBMOK ADVANTAGE</span>
              <h2 className="wm-intl-canada-why-title">
                Tailored for Canada. 
                <span className="s1"> Zero Wasted Spend.</span>{' '}
                <span className="s2">Compounding ROI.</span>
              </h2>

              <div className="wm-intl-canada-why-text">
                <p>We understand Canadian consumer behavior, provincial nuances, and specific geo-targeting tactics that prevent wasted ad spend in low-density territories.</p>
                <p>With transparent monthly reporting and zero long-term lock-in, we keep your acquisition costs low and ROI high.</p>
              </div>
            </div>

            <div className="wm-intl-canada-why-image">
              <img src="/onpage2.avif" alt="Why Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS SECTION */}
      <section className="wm-intl-canada-pricing-section" id="pricing-plans">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-header">
            <span className="wm-intl-canada-sec-subtitle">Transparent Monthly Plans</span>
            <h2 className="wm-intl-canada-sec-title">Flexible Canada Growth Packages with Zero Lock-In</h2>
            <div className="wm-intl-canada-sec-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-canada-currency-toggle">
              
              <button
                type="button"
                className={`wm-intl-canada-curr-btn ${currency === 'CAD' ? 'active' : ''}`}
                onClick={() => setCurrency('CAD')}
              >
                C$ CAD
              </button>
              <button
                type="button"
                className={`wm-intl-canada-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
              <button
                type="button"
                className={`wm-intl-canada-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-canada-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-canada-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-canada-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-canada-card-top">
                    {plan.badge && <span className="wm-intl-canada-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-canada-card-name">{plan.name}</h3>
                    <p className="wm-intl-canada-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-canada-card-pricing">
                    <div className="wm-intl-canada-price-row">
                      <span className="wm-intl-canada-price-val">{displayPrice}</span>
                      <span className="wm-intl-canada-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-canada-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-canada-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-canada-card-action">
                    <button
                      type="button"
                      className="wm-intl-canada-select-btn"
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
      <section className="wm-intl-canada-benefits-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-benefits-grid">
            <div className="wm-intl-canada-benefits-content">
              <span className="wm-intl-canada-benefits-tag">PROVEN ADVANTAGE</span>
              <h2 className="wm-intl-canada-benefits-title">
                Accelerating Market Share for 
                <span>Canadian Businesses</span>
              </h2>

              <div className="wm-intl-canada-benefits-text">
                <p>Our Canadian digital marketing campaigns build permanent organic visibility that lowers your customer acquisition costs year after year.</p>
                <p>We turn high-intent Canadian searches into verified sales calls and revenue.</p>
              </div>

              <div className="wm-intl-canada-benefits-points">
                <div key="Top Google 3-Pack Rankings in Major Canadian Metros" className="wm-intl-canada-benefit-point">
                  <span className="wm-intl-canada-benefit-icon">✓</span>
                  <span>{"Top Google 3-Pack Rankings in Major Canadian Metros"}</span>
                </div>
                <div key="Substantial Reduction in Cost Per Qualified Lead" className="wm-intl-canada-benefit-point">
                  <span className="wm-intl-canada-benefit-icon">✓</span>
                  <span>{"Substantial Reduction in Cost Per Qualified Lead"}</span>
                </div>
                <div key="Strong Domain Authority Respected by Canadian Searchers" className="wm-intl-canada-benefit-point">
                  <span className="wm-intl-canada-benefit-icon">✓</span>
                  <span>{"Strong Domain Authority Respected by Canadian Searchers"}</span>
                </div>
                <div key="Clear Telemetry with Full Transparent Revenue Attribution" className="wm-intl-canada-benefit-point">
                  <span className="wm-intl-canada-benefit-icon">✓</span>
                  <span>{"Clear Telemetry with Full Transparent Revenue Attribution"}</span>
                </div>
              </div>
            </div>

            <div className="wm-intl-canada-benefits-image">
              <img src="/onpagebenifts.jpg" alt="Canada Digital Marketing Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADVANTAGE SECTION */}
      <section className="wm-intl-canada-advantage-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-header">
            <span className="wm-intl-canada-sec-subtitle">Why Partner With Us</span>
            <h2 className="wm-intl-canada-sec-title">The WebMok Advantage in Global Digital Execution</h2>
            <div className="wm-intl-canada-sec-bar"></div>
          </div>

          <div className="wm-intl-canada-advantage-grid">
            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaShieldAlt /></div>
              <h4>100% Proven Method</h4>
              <p>Strict white-hat execution that protects your brand equity and produces compounding organic growth.</p>
            </div>

            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaRocket /></div>
              <h4>Full Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-intl-canada-faqs-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-header">
            <span className="wm-intl-canada-sec-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-intl-canada-sec-title">Common Queries About Our Canada Growth Packages</h2>
            <div className="wm-intl-canada-sec-bar"></div>
          </div>

          <div className="wm-intl-canada-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-canada-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-canada-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-canada-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-canada-bottom-banner">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-banner-inner">
            <div className="wm-intl-canada-banner-text">
              <h2>Ready to Accelerate Growth in Canada?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-canada-banner-btns">
              <button
                type="button"
                className="wm-intl-canada-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-canada-bbtn-quote"
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

export default CanadaDigitalMarketingPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaPhoneAlt,
  FaPaperPlane,
  FaArrowRight,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaWhatsapp,
  FaAward,
  FaGoogle,
  FaChevronRight,
  FaHeadset,
  FaClock,
  FaLaptopCode,
  FaCheckCircle
} from 'react-icons/fa';
import './FacebookMarketingPackagesPage.css';

const FacebookMarketingPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Facebook Marketing Packages",
    tagline: "HIGH-ROAS META ADS & CONVERSION RETARGETING INDIA · EST. 2018",
    heroTitleHighlight: "Facebook Marketing Packages in India",
    shortName: "Facebook Marketing",
    leadDesc: "Are you looking to scale your revenue with profitable Facebook & Meta ad funnels, laser-targeted lookalike audiences, and high-converting creative ads?",
    bodyDesc: "WebMok designs, tests, and scales high-performance Facebook ad campaigns that generate qualified inbound leads and e-commerce sales while lowering your cost-per-acquisition.",
    stats: [
  {
    "num": "3.8x",
    "label": "Average ROAS on Ad Spend"
  },
  {
    "num": "₹5Cr+",
    "label": "Profitable Ad Spend Managed"
  },
  {
    "num": "-42%",
    "label": "Average Cost Per Lead Reduction"
  },
  {
    "num": "100%",
    "label": "Meta Conversions API (CAPI) Setup"
  }
],
    plans: [
  {
    "name": "Meta Starter",
    "badge": "Monthly Ad Spend Up to ₹50K",
    "inrPrice": "12,000",
    "usdPrice": "189",
    "period": "/ month",
    "desc": "Ideal for local businesses, clinics, and startups looking for steady inbound leads.",
    "features": [
      "Meta Pixel & Basic Event Tracking Setup",
      "2 Campaign Funnels (Lead Gen / Traffic)",
      "4 Custom Ad Creatives & Copy Variations",
      "Lookalike & Interest Audience Targeting",
      "Weekly Ad Spend & Bid Optimization",
      "Monthly Performance Dashboard"
    ]
  },
  {
    "name": "Meta Pro Growth",
    "badge": "Most Popular",
    "inrPrice": "24,000",
    "usdPrice": "389",
    "period": "/ month",
    "desc": "Full-funnel scale for e-commerce brands and high-ticket service companies.",
    "highlight": true,
    "features": [
      "Full Meta Conversions API (CAPI) Setup",
      "Full-Funnel Strategy (TOFU, MOFU, BOFU)",
      "10 Custom Video & Graphic Ad Creatives / mo",
      "Dynamic Product Ads (Catalog Retargeting)",
      "Landing Page Conversion Rate Recommendations",
      "Bi-Weekly Zoom Review & Dedicated Ad Buyer"
    ]
  },
  {
    "name": "Meta Enterprise Scale",
    "badge": "High Ad Spend (₹2L+ / mo)",
    "inrPrice": "45,000",
    "usdPrice": "699",
    "period": "/ month",
    "desc": "Aggressive multi-campaign scaling for established national brands and fast-scaling D2C stores.",
    "features": [
      "Multi-Account Scaling & Ad Budget Allocation",
      "20+ Custom High-Converting Video Ads & Creatives",
      "Omnichannel Retargeting across Facebook & Instagram",
      "Real-Time Looker Studio Telemetry Dashboard",
      "Dedicated Senior Media Buyer & Rapid Creative Iteration"
    ]
  }
],
    faqs: [
  {
    "q": "Is the ad spend budget included in the package price?",
    "a": "No, the package price covers our professional campaign management, creative design, copywriting, and optimization services. Your ad budget is paid directly to Meta via your billing settings."
  },
  {
    "q": "What daily ad budget is recommended to start with?",
    "a": "We recommend starting with a minimum test budget of ₹1,000 to ₹3,000 per day to allow the Meta algorithm sufficient conversion data to optimize effectively."
  },
  {
    "q": "How do you handle iOS 14+ tracking drops?",
    "a": "We install Meta Conversions API (CAPI) via server-side gateway to send 100% of purchase and lead events directly from your server to Meta, restoring full attribution accuracy."
  }
]
  };

  return (
    <div className="wm-pkg-page-root">
      {/* 1. HERO SECTION (DUAL TYPOGRAPHY & TRUST CARDS) */}
      <section className="wm-pkg-hero-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-hero-grid">
            {/* Left Column: Heading, Copy, & Buttons */}
            <div className="wm-pkg-hero-left">
              <span className="wm-pkg-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-pkg-hero-title-dual">
                <span className="wm-hero-italic-orange">Make Your Business Stand Out Using</span>
                <span className="wm-hero-bold-dark">{pageData.heroTitleHighlight}</span>
              </h1>

              <p className="wm-pkg-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-pkg-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-pkg-hero-btns-row">
                <button
                  type="button"
                  className="wm-pkg-btn-case-study"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Audit / Case Study`)}
                >
                  {pageData.shortName} Case Study <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-pkg-btn-packages-outline">
                  {pageData.shortName} Packages <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Credibility / Review Cards Stack */}
            <div className="wm-pkg-hero-right-trust">
              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>#1 Growth Agency</h4>
                  <p>Clutch · India 2025</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-clutch">C</div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>On Upwork</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-upwork">up</div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>4.9 / 5</h4>
                  <p>
                    Google Reviews · 130+{' '}
                    <span className="wm-pkg-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-google-stars">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-pkg-trust-card">
                <div className="wm-pkg-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Certified Agency</p>
                </div>
                <div className="wm-pkg-tcard-icon-badge wm-badge-google-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-pkg-stats-strip">
        <div className="wm-pkg-container">
          <div className="wm-pkg-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-pkg-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="opseo-intro-section">
        <div className="opseo-container">
          <div className="opseo-intro-grid">
            <div className="opseo-intro-left">
              <span className="opseo-tag">HIGH-PERFORMANCE META ADVERTISING</span>
              <h2 className="opseo-main-title">
                Best Facebook Marketing
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies builds profitable Facebook and Meta advertising campaigns tailored for high-ticket service businesses, real estate, clinics, and e-commerce stores. We eliminate wasted ad spend through rigorous A/B creative testing and advanced audience sculpting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKED BY NUMBERS SECTION */}
      <section className="opseo-numbers-section">
        <div className="opseo-numbers-bg"></div>
        <div className="opseo-numbers-overlay"></div>
        <div className="opseo-numbers-container">
          <div className="opseo-numbers-heading">
            <span className="opseo-numbers-subtitle">PROVEN AD PERFORMANCE</span>
            <h2>
              Facebook Ad Scaling,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">300+</div>
              <div className="opseo-stat-line"></div>
              <p>Meta Ad Accounts Scaled</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">3.8x</div>
              <div className="opseo-stat-line"></div>
              <p>Average Return on Ad Spend (ROAS)</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">500K+</div>
              <div className="opseo-stat-line"></div>
              <p>Qualified Inbound Leads Generated</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>CAPI & Server-Side Tracking Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">FACEBOOK SUITE</span>
              <h2 className="opseo-include-title">
                What Do Facebook Marketing
                <span>Packages Include?</span>
              </h2>
              <p>Our Facebook marketing packages cover end-to-end campaign management: audience research, pixel and server-side Conversions API (CAPI) setup, high-converting ad copy, visual creative design, and continuous bid optimization.</p>
              <p>We build full-funnel architectures with cold prospect targeting, warm middle-of-funnel consideration, and high-urgency remarketing.</p>

              <div className="opseo-feature-list">
                <div key="Custom Ad Creative Design & Motion Video Ads" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Custom Ad Creative Design & Motion Video Ads
                </div>
                <div key="Meta Pixel & Conversions API (CAPI) Setup" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Meta Pixel & Conversions API (CAPI) Setup
                </div>
                <div key="Cold, Lookalike & Custom Audience Structuring" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Cold, Lookalike & Custom Audience Structuring
                </div>
                <div key="Persuasive Direct-Response Ad Copywriting" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Persuasive Direct-Response Ad Copywriting
                </div>
                <div key="Dynamic Product Ads (DPA) for E-Commerce" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Dynamic Product Ads (DPA) for E-Commerce
                </div>
                <div key="Weekly Cost-per-Lead & ROAS Optimization Dashboards" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Weekly Cost-per-Lead & ROAS Optimization Dashboards
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Facebook Marketing Packages" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPORTANCE SECTION */}
      <section className="opseo-importance-section">
        <div className="opseo-container">
          <div className="opseo-importance-box">
            <div className="opseo-importance-glow glow-one"></div>
            <div className="opseo-importance-glow glow-two"></div>

            <h2 className="opseo-importance-title">
              Importance of 
              <span>Facebook & Meta Ads</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Meta possesses one of the world’s most powerful behavioral recommendation algorithms. With over 3 billion active users across Facebook and Instagram, precision-targeted ads allow you to reach exact buyer personas based on demographics, interests, and spending behavior.</p>
              <p>A professionally managed Facebook ad funnel turns predictable ad spend into profitable revenue, scaling customer acquisition on demand.</p>
            </div>

            <div className="opseo-importance-btn-wrap">
              <a href="#pricing-plans" className="opseo-importance-btn">
                <span>Explore Packages</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY WEBMOK SECTION */}
      <section className="opseo-why-section">
        <div className="opseo-container">
          <div className="opseo-why-grid">
            <div className="opseo-why-content">
              <span className="opseo-why-tag">WHY WEBMOK</span>
              <h2 className="opseo-why-title">
                Why Webmok
Technologies for
                <span>  High-ROAS Facebook</span>
                <br />
                <span>Marketing Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We are certified Meta advertising specialists who focus on bottom-line business metrics (Cost Per Lead, ROAS, and Customer Lifetime Value) rather than superficial vanity likes.</p>
                <p>We implement server-side tracking (Meta CAPI) to bypass iOS 14+ tracking limitations, ensuring your ad algorithms receive 100% of conversion signals for maximum machine learning efficiency.</p>
              </div>
            </div>

            <div className="opseo-why-image">
              <div className="opseo-why-image-bg"></div>
              <img src="/onpage3.avif" alt="Why Choose Webmok" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. TIERED PRICING PLANS SECTION */}
      <section className="wm-pkg-pricing-section" id="pricing-plans">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Transparent Pricing</span>
            <h2 className="wm-pkg-sec-title">Flexible Monthly {pageData.shortName} Plans with Zero Lock-In</h2>
            <div className="wm-pkg-bar"></div>

            {/* Currency Switcher */}
            <div className="wm-pkg-currency-toggle">
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR (India)
              </button>
              <button
                type="button"
                className={`wm-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD (Global)
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className={`wm-pkg-cards-grid wm-grid-${pageData.plans.length}`}>
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-pkg-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-pkg-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-pkg-card-top">
                    {plan.badge && <span className="wm-pkg-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-pkg-card-name">{plan.name}</h3>
                    <p className="wm-pkg-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-pkg-card-pricing">
                    <div className="wm-pkg-price-row">
                      <span className="wm-pkg-price-val">{displayPrice}</span>
                      <span className="wm-pkg-price-period">{plan.period || '/ month'}</span>
                    </div>
                  </div>

                  <div className="wm-pkg-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-pkg-card-action">
                    <button
                      type="button"
                      className="wm-pkg-select-btn"
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
      <section className="opseo-benefits-section">
        <div className="opseo-container">
          <div className="opseo-benefits-grid">
            <div className="opseo-benefits-content">
              <span className="opseo-benefits-tag">REVENUE ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Facebook
                <span>Marketing Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Facebook marketing packages generate immediate high-volume leads, reactivate lost website visitors through retargeting, and scale sales predictably.</p>
                <p>A/B tested ad copy and creatives ensure your cost-per-acquisition steadily decreases over time.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Instant Flow of Qualified Customer Leads" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Instant Flow of Qualified Customer Leads</span>
                </div>
                <div key="3x to 5x Return on Ad Spend (ROAS)" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>3x to 5x Return on Ad Spend (ROAS)</span>
                </div>
                <div key="Bypass iOS Tracking Drops with Meta CAPI" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Bypass iOS Tracking Drops with Meta CAPI</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Facebook Marketing Packages" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHY PARTNER WITH WEBMOK */}
      <section className="wm-pkg-why-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Why Partner With Us</span>
            <h2 className="wm-pkg-sec-title">The WebMok Advantage in {pageData.shortName} Execution</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-why-grid">
            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaShieldAlt /></div>
              <h4>100% Proven Methodology</h4>
              <p>Zero shortcuts. We strictly execute high-grade, sustainable methods that protect and scale your brand equity.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaRocket /></div>
              <h4>Full Telemetry Reporting</h4>
              <p>Transparent bi-weekly and monthly dashboards tracking your key conversions, leads, and direct ROI.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaHeadset /></div>
              <h4>Dedicated Account Squad</h4>
              <p>Work directly with dedicated senior strategists, copywriters, and engineers with direct phone & WhatsApp support.</p>
            </div>

            <div className="wm-pkg-why-card">
              <div className="wm-pkg-wicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS ACCORDION */}
      <section className="wm-pkg-faqs-section">
        <div className="wm-pkg-container">
          <div className="wm-pkg-sec-header">
            <span className="wm-pkg-subtitle">Frequently Asked Questions</span>
            <h2 className="wm-pkg-sec-title">Common Queries About {pageData.shortName} Packages</h2>
            <div className="wm-pkg-bar"></div>
          </div>

          <div className="wm-pkg-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-pkg-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-pkg-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-pkg-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CONVERSION BANNER */}
      <section className="wm-pkg-bottom-banner">
        <div className="wm-pkg-container">
          <div className="wm-pkg-banner-inner">
            <div className="wm-pkg-banner-text">
              <h2>Ready to Accelerate Growth with Our {pageData.shortName} Packages?</h2>
              <p>Schedule a quick 1-on-1 strategy call with our senior specialists today. Get a customized campaign blueprint tailored to your targets.</p>
            </div>
            <div className="wm-pkg-banner-btns">
              <button
                type="button"
                className="wm-pkg-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-pkg-bbtn-quote"
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

export default FacebookMarketingPackagesPage;

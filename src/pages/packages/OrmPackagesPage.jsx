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
import './OrmPackagesPage.css';

const OrmPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Online Reputation Management (ORM) Packages",
    tagline: "NEGATIVE SERP SUPPRESSION, REVIEW BOOSTING & BRAND PROTECTION INDIA · EST. 2018",
    heroTitleHighlight: "Online Reputation Management (ORM) Packages",
    shortName: "ORM",
    leadDesc: "Are you looking to suppress negative Google search results, eliminate false reviews, and protect your executive and brand reputation?",
    bodyDesc: "WebMok specializes in strategic Online Reputation Management: de-ranking defamatory links, promoting positive PR assets to page #1, generating authentic 5-star customer reviews, and monitoring brand mentions 24/7.",
    stats: [
  {
    "num": "95%+",
    "label": "Negative Suppression Success"
  },
  {
    "num": "4.8★",
    "label": "Average Client Review Rating"
  },
  {
    "num": "200+",
    "label": "Brand Reputations Repaired"
  },
  {
    "num": "100%",
    "label": "Strict Confidentiality & NDA"
  }
],
    plans: [
  {
    "name": "Review Repair & Boost",
    "badge": "Small Business / Clinics",
    "inrPrice": "16,000",
    "usdPrice": "249",
    "period": "/ month",
    "desc": "Review generation funnels and negative review response management for local businesses.",
    "features": [
      "Google Business & Review Platform Audit",
      "Automated 5-Star Review Generation Funnel",
      "Review Moderation & Professional Response Copywriting",
      "Negative Review Dispute Assistance",
      "Basic Brand Mention Web Monitoring",
      "Monthly Reputation Scorecard"
    ]
  },
  {
    "name": "SERP Suppression Pro",
    "badge": "Most Popular",
    "inrPrice": "32,000",
    "usdPrice": "499",
    "period": "/ month",
    "desc": "Aggressive suppression of 1-3 negative Google search links and positive PR asset creation.",
    "highlight": true,
    "features": [
      "De-Ranking Strategy for 1-3 Negative SERP Links",
      "5 High-DA Positive Digital PR Articles / mo",
      "10 Tier-1 Web Profile Assets Created & Ranked",
      "Review Generation Funnels & Multi-Platform Sync",
      "24/7 Real-Time Brand Mention Alerting",
      "Dedicated ORM Campaign Strategist"
    ]
  },
  {
    "name": "Enterprise Executive Defense",
    "badge": "High-Profile / Corporate",
    "inrPrice": "60,000",
    "usdPrice": "949",
    "period": "/ month",
    "desc": "Full-scale reputation repair and executive crisis defense for corporations and public figures.",
    "features": [
      "Multi-Keyword & Name Negative Result Suppression",
      "12+ Tier-1 Authority Media Placements / mo",
      "Wikipedia & Knowledge Panel Optimization",
      "Legal Outreach & Defamatory Content Removal Requests",
      "Direct 24/7 Access to Senior Crisis PR Director",
      "Signed Strict Mutual Non-Disclosure Agreement (NDA)"
    ]
  }
],
    faqs: [
  {
    "q": "Can negative search results really be pushed off page #1 of Google?",
    "a": "Yes! By creating and ranking 10 to 15 high-authority positive web assets (PR articles, interviews, verified profiles, videos), we push negative links onto page 2 and 3 where less than 1% of searchers ever click."
  },
  {
    "q": "Is our engagement kept confidential?",
    "a": "100% absolutely. We operate under strict mutual Non-Disclosure Agreements (NDAs). We never disclose our clients or case studies publicly."
  },
  {
    "q": "How long does an ORM suppression campaign take?",
    "a": "Most ORM campaigns show measurable suppression results within 60 to 90 days, with complete page #1 clearing achieved over 4 to 6 months depending on the authority of the negative links."
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
              <span className="opseo-tag">BRAND PROTECTION & SERP CLEANUP</span>
              <h2 className="opseo-main-title">
                Best ORM
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies protects corporate brands, executives, and public figures against defamatory search results, negative consumer reviews, and damaging press. We flood page #1 with positive, authoritative digital assets to push negative results into obscurity.
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
            <span className="opseo-numbers-subtitle">REPUTATION DEFENSE</span>
            <h2>
              ORM Suppression Power,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">200+</div>
              <div className="opseo-stat-line"></div>
              <p>Reputation Cases Resolved</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">95%</div>
              <div className="opseo-stat-line"></div>
              <p>Page 1 Suppression Success Rate</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">50K+</div>
              <div className="opseo-stat-line"></div>
              <p>Authentic 5-Star Reviews Generated</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Strict Mutual Non-Disclosure</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">ORM SUITE</span>
              <h2 className="opseo-include-title">
                What Do ORM
                <span>Packages Include?</span>
              </h2>
              <p>Our ORM packages combine positive asset creation, high-authority digital PR, Google review acceleration funnels, negative SERP link suppression, and 24/7 web sentiment monitoring.</p>
              <p>We build an unshakeable wall of positive search results that shields your brand from defamation.</p>

              <div className="opseo-feature-list">
                <div key="Negative Google Search Result De-Ranking & Suppression" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Negative Google Search Result De-Ranking & Suppression
                </div>
                <div key="Google Business Profile & Trustpilot 5-Star Review Funnels" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Google Business Profile & Trustpilot 5-Star Review Funnels
                </div>
                <div key="High-Tier Digital PR & Positive Media Placements" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-Tier Digital PR & Positive Media Placements
                </div>
                <div key="Social Profile & Web Asset Authority Creation" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Social Profile & Web Asset Authority Creation
                </div>
                <div key="24/7 Brand Mention & Sentiment Web Monitoring" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  24/7 Brand Mention & Sentiment Web Monitoring
                </div>
                <div key="Weekly SERP Position & Reputation Health Reports" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Weekly SERP Position & Reputation Health Reports
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Online Reputation Management (ORM) Packages" />
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
              <span>Online Reputation Management</span>
            </h2>

            <div className="opseo-importance-content">
              <p>A single negative search result or 1-star review on Google can cost your business up to 22% of potential revenue. Over 90% of consumers read reviews before making a purchase, and executive background checks always begin on Google.</p>
              <p>Proactive reputation management protects your brand valuation, restores customer trust, and secures your hard-earned corporate credibility.</p>
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
                <span>  Strategic Brand &</span>
                <br />
                <span>ORM Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We handle every ORM engagement with absolute discretion, signed mutual NDAs, and surgical precision. Our technical and PR specialists use proven legal and algorithmic methods to suppress harmful content.</p>
                <p>We create high-authority publisher profiles, verified executive interviews, and customer review workflows that permanently dominate page #1.</p>
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
              <span className="opseo-benefits-tag">PROTECTION ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of ORM
                <span>Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>ORM packages eliminate customer doubt, suppress damaging search results, and build an overwhelming positive review presence across Google, Trustpilot, and Glassdoor.</p>
                <p>Restore executive credibility and protect commercial deal flow.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Push Negative Results Off Page #1 of Google" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Push Negative Results Off Page #1 of Google</span>
                </div>
                <div key="Surge in Authentic 5-Star Customer Reviews" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Surge in Authentic 5-Star Customer Reviews</span>
                </div>
                <div key="100% Confidential Brand Reputation Shield" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>100% Confidential Brand Reputation Shield</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Online Reputation Management (ORM) Packages" />
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

export default OrmPackagesPage;

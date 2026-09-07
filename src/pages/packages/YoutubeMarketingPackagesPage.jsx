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
import './YoutubeMarketingPackagesPage.css';

const YoutubeMarketingPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "YouTube Marketing Packages",
    tagline: "YOUTUBE SEO, VIDEO ADS & SUBSCRIBER GROWTH INDIA · EST. 2018",
    heroTitleHighlight: "YouTube Marketing Packages in India",
    shortName: "YouTube Marketing",
    leadDesc: "Are you looking to scale your YouTube channel subscribers, rank videos on YouTube & Google search, and run high-converting YouTube video ads?",
    bodyDesc: "WebMok provides 360-degree YouTube growth services: YouTube video SEO keyword mapping, high-CTR thumbnail design, YouTube Shorts production, and precision Google Video ad campaigns.",
    stats: [
  {
    "num": "30M+",
    "label": "YouTube Video Views"
  },
  {
    "num": "150K+",
    "label": "Subscribers Generated"
  },
  {
    "num": "85%+",
    "label": "Average Watch-Time Retention"
  },
  {
    "num": "#1 Ranks",
    "label": "YouTube & Google Video Search"
  }
],
    plans: [
  {
    "name": "YouTube Channel SEO",
    "badge": "Organic Optimization",
    "inrPrice": "12,000",
    "usdPrice": "189",
    "period": "/ month",
    "desc": "Essential video SEO and thumbnail design for creators and growing business channels.",
    "features": [
      "SEO Metadata for up to 8 Videos (Titles, Tags, Chapters)",
      "8 High-CTR Custom Thumbnails Design",
      "Channel Art, Banner & Playlist Optimization",
      "End Screens & Interactive Info Cards",
      "YouTube Search Keyword Mapping",
      "Monthly Watch-Time & Ranking Report"
    ]
  },
  {
    "name": "YouTube Growth & Shorts",
    "badge": "Most Popular",
    "inrPrice": "22,000",
    "usdPrice": "349",
    "period": "/ month",
    "desc": "Comprehensive channel optimization + YouTube Shorts editing with motion graphics.",
    "highlight": true,
    "features": [
      "Full Video SEO for up to 16 Videos / mo",
      "16 High-CTR Custom Thumbnails",
      "8 YouTube Shorts Editing (Subtitles & Hooks)",
      "Google Ads YouTube Video Setup (Up to ₹20K spend)",
      "Community Tab Posts & Subscriber Polling",
      "Dedicated Video SEO Strategist"
    ]
  },
  {
    "name": "YouTube Enterprise Power",
    "badge": "Full Channel Production",
    "inrPrice": "42,000",
    "usdPrice": "669",
    "period": "/ month",
    "desc": "Full-scale YouTube channel management, daily shorts, and high-budget video advertising.",
    "features": [
      "Unlimited Video Metadata & Schema SEO",
      "Full Thumbnail A/B Testing Variations",
      "16 Viral YouTube Shorts Produced / mo",
      "Scaled Google Video Ads Management (Skippable & Bumper)",
      "Competitor Channel Intelligence & Topic Ideas",
      "Bi-Weekly Zoom Strategy Calls"
    ]
  }
],
    faqs: [
  {
    "q": "How does YouTube SEO help our videos get more views?",
    "a": "YouTube SEO ensures your video titles, descriptions, chapters, and tags contain the exact phrases users search for, helping your video appear in search results and suggested video recommendations."
  },
  {
    "q": "Why are custom thumbnails so important on YouTube?",
    "a": "Thumbnails directly determine your Click-Through Rate (CTR). High-contrast, emotive thumbnails can double or triple your organic view count instantly."
  },
  {
    "q": "Can you edit raw video footage into YouTube Shorts?",
    "a": "Yes! You send us your long-form videos or podcasts, and our editors extract the most engaging moments, adding dynamic animated captions and sound effects."
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
              <span className="opseo-tag">YOUTUBE SEO & VIDEO ADVERTISING</span>
              <h2 className="opseo-main-title">
                Best YouTube Marketing
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies empowers corporate brands, educators, podcasters, and consumer products to dominate the world’s second-largest search engine. We optimize video metadata, design click-worthy thumbnails, and scale targeted YouTube video ads.
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
            <span className="opseo-numbers-subtitle">YOUTUBE SCALE</span>
            <h2>
              YouTube Video Reach,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">200+</div>
              <div className="opseo-stat-line"></div>
              <p>Channels Managed & Scaled</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">30M+</div>
              <div className="opseo-stat-line"></div>
              <p>Organic & Paid Video Views</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">150K+</div>
              <div className="opseo-stat-line"></div>
              <p>Real Subscribers Gained</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">92%</div>
              <div className="opseo-stat-line"></div>
              <p>Top 5 Video Ranking Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">YOUTUBE SUITE</span>
              <h2 className="opseo-include-title">
                What Do YouTube Marketing
                <span>Packages Include?</span>
              </h2>
              <p>Our YouTube marketing packages include video title keyword research, description SEO, tags and chapter formulation, custom high-CTR thumbnail creation, end-screen and card setup, and YouTube Shorts editing.</p>
              <p>We also manage Google Ads Video campaigns (skippable in-stream, in-feed, and bumper ads) to drive targeted views and conversions.</p>

              <div className="opseo-feature-list">
                <div key="YouTube Video Keyword SEO & Tag Optimization" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  YouTube Video Keyword SEO & Tag Optimization
                </div>
                <div key="High-CTR Custom Thumbnail Graphic Design" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-CTR Custom Thumbnail Graphic Design
                </div>
                <div key="YouTube Shorts Video Editing with Subtitles" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  YouTube Shorts Video Editing with Subtitles
                </div>
                <div key="Channel Branding (Banners, Watermarks, Playlists)" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Channel Branding (Banners, Watermarks, Playlists)
                </div>
                <div key="Google Ads YouTube Video Campaigns (Skippable & In-Feed)" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Google Ads YouTube Video Campaigns (Skippable & In-Feed)
                </div>
                <div key="Monthly Watch-Time & Subscriber Growth Telemetry" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Monthly Watch-Time & Subscriber Growth Telemetry
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="YouTube Marketing Packages" />
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
              <span>YouTube Video Marketing</span>
            </h2>

            <div className="opseo-importance-content">
              <p>YouTube is the 2nd largest search engine in the world, with over 2.5 billion monthly active users. Video builds deeper emotional resonance and authority than any other digital format, and videos rank directly on Google search result pages.</p>
              <p>A well-optimized YouTube channel creates compounding evergreen organic traffic that continues generating leads for years after publication.</p>
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
                <span>  YouTube Video SEO</span>
                <br />
                <span>& Marketing Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We understand the YouTube recommendation algorithm: Click-Through Rate (CTR) and Average Percentage Viewed (APV). We craft thumbnails and video hooks designed to trigger YouTube browse and suggested video promotion.</p>
                <p>Our certified Google Video Ads media buyers ensure your paid campaigns reach high-intent viewers at the lowest possible Cost Per View (CPV).</p>
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
              <span className="opseo-benefits-tag">VIDEO ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of YouTube
                <span>Marketing Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>YouTube marketing packages build massive long-term subscriber loyalty, establish undisputed industry authority, and drive evergreen referral traffic to your sales funnel.</p>
                <p>Ranked videos provide perpetual brand visibility on both YouTube and Google search results.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Rank Videos on YouTube & Google Search" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Rank Videos on YouTube & Google Search</span>
                </div>
                <div key="Surge in Real Channel Subscribers & Views" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Surge in Real Channel Subscribers & Views</span>
                </div>
                <div key="Targeted Customers Through Video Ads" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Targeted Customers Through Video Ads</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="YouTube Marketing Packages" />
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

export default YoutubeMarketingPackagesPage;

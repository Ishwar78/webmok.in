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
import './InstagramMarketingPackagesPage.css';

const InstagramMarketingPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Instagram Marketing Packages",
    tagline: "REELS, INFLUENCER ADS & AESTHETIC COMMERCE INDIA · EST. 2018",
    heroTitleHighlight: "Instagram Marketing Packages in India",
    shortName: "Instagram Marketing",
    leadDesc: "Are you looking to capture high-engagement audiences and scale sales through high-aesthetic Instagram reels, story funnels, and targeted ads?",
    bodyDesc: "WebMok delivers high-aesthetic Instagram marketing campaigns combining viral short-form video reels, influencer partnerships, carousel storytelling, and profitable Instagram Shopping ad funnels.",
    stats: [
  {
    "num": "10x",
    "label": "Engagement Rate Lift"
  },
  {
    "num": "25M+",
    "label": "Reels Video Views Generated"
  },
  {
    "num": "320+",
    "label": "Instagram Profiles Scaled"
  },
  {
    "num": "100%",
    "label": "Custom Branded Visual Quality"
  }
],
    plans: [
  {
    "name": "Insta Starter",
    "badge": "Small Brands / Influencers",
    "inrPrice": "12,500",
    "usdPrice": "199",
    "period": "/ month",
    "desc": "Essential aesthetic presence with weekly reels and branded grid curation.",
    "features": [
      "12 Custom Branded Carousel & Static Posts",
      "6 High-Definition Video Reels with Audio Trends",
      "Daily Story Strategy (15 stories / mo)",
      "Bio & Highlight Cover Aesthetic Overhaul",
      "Hashtag & Keyword SEO Mapping",
      "Monthly Growth & Engagement Analytics"
    ]
  },
  {
    "name": "Insta Growth & Ads",
    "badge": "Most Popular",
    "inrPrice": "22,000",
    "usdPrice": "359",
    "period": "/ month",
    "desc": "Complete organic reels strategy integrated with targeted Instagram Story and Feed ad campaigns.",
    "highlight": true,
    "features": [
      "20 Custom Branded Grid Assets & Carousels",
      "12 Viral Video Reels & Trending Motion Shorts",
      "Daily Story Funnels & Interactive Polls",
      "Instagram Story & Feed Ad Campaign Management",
      "DM Lead Generation Funnels & Automated Replies",
      "Dedicated Social Media Manager"
    ]
  },
  {
    "name": "Insta Luxury Dominance",
    "badge": "Enterprise & D2C Brands",
    "inrPrice": "38,000",
    "usdPrice": "599",
    "period": "/ month",
    "desc": "High-velocity daily reels production, micro-influencer campaigns, and scaled ad funnels.",
    "features": [
      "30 Custom Premium Grid & Carousel Assets",
      "20 High-Production Video Reels & Shorts",
      "Influencer Gifting & Collaboration Outreach",
      "Omnichannel Retargeting across Instagram & Meta",
      "Instagram Shopping Catalog Sync & Tagging",
      "Bi-Weekly Content Planning & Strategy Calls"
    ]
  }
],
    faqs: [
  {
    "q": "How do you create video reels for our brand?",
    "a": "You can provide raw footage or product videos, which our editors transform into high-energy reels with subtitles, motion graphics, and trending audio, or we create full motion typography assets from scratch."
  },
  {
    "q": "Can Instagram ads help generate B2B leads or only e-commerce?",
    "a": "Instagram is highly effective for both! B2B decision makers browse Instagram daily, and our lead-generation forms capture verified corporate emails and phone numbers."
  },
  {
    "q": "Do you help set up Instagram Shopping and product tags?",
    "a": "Yes! We configure your Meta Commerce Manager and Instagram Shop to enable 1-click in-app product tagging."
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
              <span className="opseo-tag">VIRAL REELS & INSTAGRAM ADS</span>
              <h2 className="opseo-main-title">
                Best Instagram Marketing
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies crafts visually stunning Instagram marketing campaigns designed for luxury brands, fashion, healthcare, real estate, hospitality, and modern D2C products. We combine organic viral reels with profitable Instagram Story and Feed ad campaigns.
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
            <span className="opseo-numbers-subtitle">INSTAGRAM IMPACT</span>
            <h2>
              Instagram Brand Growth,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">320+</div>
              <div className="opseo-stat-line"></div>
              <p>Instagram Accounts Scaled</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">25M+</div>
              <div className="opseo-stat-line"></div>
              <p>Reels & Story Views</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">8K+</div>
              <div className="opseo-stat-line"></div>
              <p>High-Converting Ad Creatives</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">4.2x</div>
              <div className="opseo-stat-line"></div>
              <p>Average ROAS on Instagram Ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">INSTAGRAM SUITE</span>
              <h2 className="opseo-include-title">
                What Do Instagram Marketing
                <span>Packages Include?</span>
              </h2>
              <p>Our Instagram marketing packages include viral video reels production, carousel graphic sets, interactive story campaigns, targeted Instagram Feed & Story ads, and strategic influencer outreach.</p>
              <p>We handle everything from audio trend research and motion typography to direct-response caption copywriting.</p>

              <div className="opseo-feature-list">
                <div key="High-Definition Video Reels with Trending Audio" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-Definition Video Reels with Trending Audio
                </div>
                <div key="Aesthetic Carousel & Grid Post Design" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Aesthetic Carousel & Grid Post Design
                </div>
                <div key="Instagram Story Funnels & Highlight Curation" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Instagram Story Funnels & Highlight Curation
                </div>
                <div key="Instagram Feed, Story & Explore Ad Campaigns" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Instagram Feed, Story & Explore Ad Campaigns
                </div>
                <div key="Influencer Outreach & UGC Collaboration Strategy" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Influencer Outreach & UGC Collaboration Strategy
                </div>
                <div key="Monthly Follower Growth & Conversion Telemetry" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Monthly Follower Growth & Conversion Telemetry
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Instagram Marketing Packages" />
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
              <span>Instagram Marketing</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Instagram is the world’s leading visual commerce platform. Over 70% of shoppers use Instagram for product discovery, and short-form video reels generate up to 300% more organic engagement than traditional static images.</p>
              <p>An aesthetically curated Instagram profile combined with targeted Story and Reels ads creates an irresistible brand identity that commands premium pricing.</p>
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
                <span>  High-Aesthetic Instagram</span>
                <br />
                <span>Marketing Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We understand the nuances of Instagram visual culture. Our designers and video editors create magazine-grade assets tailored for mobile screens that stand out in crowded feeds.</p>
                <p>We combine organic visual storytelling with high-ROAS paid Instagram ad funnels to deliver both brand prestige and measurable sales pipeline revenue.</p>
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
              <span className="opseo-benefits-tag">BRAND ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of Instagram
                <span>Marketing Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Instagram marketing packages drive rapid follower growth, boost organic video virality, and turn casual scrollers into loyal repeat customers.</p>
                <p>Consistent visual branding establishes your company as a modern, high-tier authority in your niche.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Skyrocket Video Views & Organic Virality" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Skyrocket Video Views & Organic Virality</span>
                </div>
                <div key="Targeted Inbound DMs & E-Commerce Checkouts" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Targeted Inbound DMs & E-Commerce Checkouts</span>
                </div>
                <div key="Elevate Brand Aesthetic & Customer Trust" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Elevate Brand Aesthetic & Customer Trust</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Instagram Marketing Packages" />
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

export default InstagramMarketingPackagesPage;

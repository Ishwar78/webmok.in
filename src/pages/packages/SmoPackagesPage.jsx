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
import HeroLeadForm from '../../components/HeroLeadForm';
import usePackageData from '../../hooks/usePackageData';
import '../../components/HeroTwoColShared.css';
import './SmoPackagesPage.css';

const SmoPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Social Media Optimization (SMO) Packages",
    tagline: "PROFILE AUDITS, BIO FUNNELS & SOCIAL ASSET OPTIMIZATION INDIA · EST. 2018",
    heroTitleHighlight: "SMO Packages in India",
    shortName: "SMO",
    leadDesc: "Are you looking to optimize your social media profiles, bio links, highlights, and channel architecture for maximum conversion?",
    bodyDesc: "WebMok audits and transforms your social profiles across Instagram, LinkedIn, YouTube, and Facebook into high-converting conversion funnels that turn visitors into followers and leads.",
    stats: [
  {
    "num": "100%",
    "label": "Optimized Social Profiles"
  },
  {
    "num": "3.2x",
    "label": "Bio Link CTR Lift"
  },
  {
    "num": "350+",
    "label": "Channels Fully Optimized"
  },
  {
    "num": "100%",
    "label": "Brand Visual Consistency"
  }
],
    plans: [
  {
    "name": "SMO Essential Setup",
    "badge": "One-Time / Starter",
    "inrPrice": "8,000",
    "usdPrice": "129",
    "period": "/ one-time",
    "desc": "Complete profile revamp and asset overhaul across 2 core social platforms.",
    "features": [
      "Complete Audit of 2 Social Channels",
      "Keyword-Optimized Bio & Tagline Copywriting",
      "Custom Channel Banners & Avatar Framing",
      "8 Branded Instagram Story Highlight Covers",
      "Tracked Linktree / Bio-Link Funnel Setup",
      "Social SEO Keyword Alignment"
    ]
  },
  {
    "name": "SMO Professional Suite",
    "badge": "Most Popular",
    "inrPrice": "14,500",
    "usdPrice": "229",
    "period": "/ one-time",
    "desc": "Comprehensive multi-platform optimization across Instagram, LinkedIn, Facebook, and YouTube.",
    "highlight": true,
    "features": [
      "Complete Overhaul of 4 Social Channels",
      "Custom YouTube Channel Art & Watermarks",
      "LinkedIn Company Page & Showcase Setup",
      "Interactive Link-in-Bio Landing Page Design",
      "15 Story Highlight Covers & Structured Folders",
      "Social Discovery Keyword Tagging Strategy"
    ]
  },
  {
    "name": "SMO Enterprise Retainer",
    "badge": "Continuous Optimization",
    "inrPrice": "20,000",
    "usdPrice": "319",
    "period": "/ month",
    "desc": "Ongoing social profile optimization, banner refreshes for seasonal campaigns, and link tracking.",
    "features": [
      "Continuous Monthly Profile & Banner Updates",
      "Seasonal Campaign Banner Refreshes (2/mo)",
      "YouTube Video SEO & End-Screen Optimization",
      "Bio-Link Conversion Funnel A/B Testing",
      "Cross-Platform Community Badge Setup",
      "Monthly Social Profile Traffic & Click Telemetry"
    ]
  }
],
    faqs: [
  {
    "q": "How is SMO different from SMM?",
    "a": "SMO focuses on optimizing the permanent architecture of your social profiles (bios, banners, highlight covers, search keywords, and links), whereas SMM focuses on ongoing daily content posting, reels, and engagement."
  },
  {
    "q": "Will SMO help our profiles rank in Instagram & YouTube search?",
    "a": "Yes! By embedding relevant high-volume search keywords in your display name, username, bio, and channel tags, your profiles rank higher when users search within those apps."
  },
  {
    "q": "Do you provide the banner graphic design files?",
    "a": "Yes! We deliver all finalized high-resolution graphics as well as layered source files if requested."
  }
]
  };
  const pageData = usePackageData('smo-packages', defaultPageData);

  return (
    <div className="wm-pkg-page-root">
            {/* 1. HERO SECTION (2-COLUMN MODERN DESIGN WITH COMMON LEAD FORM) */}
      <section className="wm-hero-shared-section">
        <div className="wm-hero-shared-container">
          <div className="wm-hero-two-col">
            {/* Left Column: Content & 4-Metric Performance Bar */}
            <div className="wm-hero-col-left">
              <div className="wm-hero-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span>{pageData.name}</span>
              </div>

              <span className="wm-hero-pill">
                <FaAward /> {pageData.tagline}
              </span>

              <h1 className="wm-hero-title">
                Make Your Business Stand Out Using <span className="wm-hero-title-highlight">{pageData.heroTitleHighlight || pageData.name}</span>
              </h1>

              <p className="wm-hero-lead">
                {pageData.leadDesc}
              </p>
              {pageData.image && (
                <div style={{ borderRadius: '10px', overflow: 'hidden', margin: '14px 0 18px 0', border: '1px solid rgba(0, 210, 255, 0.25)', maxWidth: '540px' }}>
                  <img src={pageData.image} alt={pageData.name} style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', display: 'block' }} />
                </div>
              )}

              <div className="wm-hero-cta-group">
                <button
                  type="button"
                  className="wm-hero-cta-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Custom Quote`)}
                >
                  Get Free Custom Quote <FaArrowRight />
                </button>
                <button
                  type="button"
                  className="wm-hero-cta-secondary"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Call Me in 28 Seconds
                </button>
              </div>

              {/* 4-Metric Performance Bar (Embedded in Hero) */}
              <div className="wm-hero-stats-grid">
                {(pageData.stats || []).map((st, i) => (
                  <div key={i} className="wm-hstat-card">
                    <p className="wm-hstat-num">{st.num}</p>
                    <p className="wm-hstat-label">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Reusable Hero Lead Form */}
            <div className="wm-hero-col-right">
              <HeroLeadForm
                pageName={pageData.name}
                source={`${pageData.name} Hero Section`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="opseo-intro-section">
        <div className="opseo-container">
          <div className="opseo-intro-grid">
            <div className="opseo-intro-left">
              <span className="opseo-tag">SOCIAL PROFILE & FUNNEL OPTIMIZATION</span>
              <h2 className="opseo-main-title">
                Best SMO
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies delivers specialized Social Media Optimization (SMO) services that transform static social profiles into active lead generation channels. We fine-tune bios, highlight covers, channel art, social SEO keywords, and link-in-bio funnels.
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
            <span className="opseo-numbers-subtitle">PROFILE OPTIMIZATION</span>
            <h2>
              SMO Conversion Power,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">350+</div>
              <div className="opseo-stat-line"></div>
              <p>Social Channels Optimized</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">3.2x</div>
              <div className="opseo-stat-line"></div>
              <p>Average Bio Click-Through Lift</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Cross-Platform Cohesion</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">5K+</div>
              <div className="opseo-stat-line"></div>
              <p>Custom Social Banners Designed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">SMO SUITE</span>
              <h2 className="opseo-include-title">
                What Do SMO
                <span>Packages Include?</span>
              </h2>
              <p>Our SMO packages include deep social profile audits, username consistency, keyword-rich bio optimization, custom channel banners, Instagram story highlight covers, and tracked link-in-bio landing pages.</p>
              <p>We ensure your brand looks prestigious and trustworthy the second someone lands on any of your social handles.</p>

              <div className="opseo-feature-list">
                <div key="Profile Audit & Search Keyword Bio Optimization" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Profile Audit & Search Keyword Bio Optimization
                </div>
                <div key="Custom Channel Banners & Cover Graphics" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Custom Channel Banners & Cover Graphics
                </div>
                <div key="Instagram Story Highlight Covers & Categories" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Instagram Story Highlight Covers & Categories
                </div>
                <div key="Tracked Link-in-Bio Landing Page Setup" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Tracked Link-in-Bio Landing Page Setup
                </div>
                <div key="YouTube Channel Branding & Playlists" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  YouTube Channel Branding & Playlists
                </div>
                <div key="Cross-Platform Social Handle Consistency" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Cross-Platform Social Handle Consistency
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Social Media Optimization (SMO) Packages" />
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
              <span>Social Media Optimization</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Your social profile header and bio are your digital business card. An unoptimized profile with outdated banners or confusing bio links loses up to 70% of potential profile visitors who would have otherwise clicked your website or initiated contact.</p>
              <p>SMO applies search engine optimization principles to social networks, helping your profiles rank at the top of Instagram, LinkedIn, and YouTube internal search bars for your target industry keywords.</p>
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
                <span>  Social Profile &</span>
                <br />
                <span>SMO Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>Webmok combines aesthetic visual branding with conversion rate optimization. We design pixel-perfect banners and structure bio copy that compels visitors to take action immediately.</p>
                <p>We track every bio link click and referral visit using UTM parameters and custom analytics so you know exactly which social channel drives revenue.</p>
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
              <span className="opseo-benefits-tag">CONVERSION ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of SMO
                <span>Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>SMO packages increase profile-to-website click-through rates, improve brand perception, and optimize your social handles for discovery in internal search engines.</p>
                <p>A unified visual presence across all platforms establishes instant enterprise credibility.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Maximize Bio-to-Website Conversion Clicks" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Maximize Bio-to-Website Conversion Clicks</span>
                </div>
                <div key="Rank in Social Search Engine Bars" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Rank in Social Search Engine Bars</span>
                </div>
                <div key="Flawless Aesthetic Brand Consistency" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Flawless Aesthetic Brand Consistency</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Social Media Optimization (SMO) Packages" />
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

export default SmoPackagesPage;

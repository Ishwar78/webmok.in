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
import './SmmPackagesPage.css';

const SmmPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Social Media Marketing (SMM) Packages",
    tagline: "CREATIVE REELS, CAROUSELS & SOCIAL BRANDING INDIA · EST. 2018",
    heroTitleHighlight: "SMM Packages in India",
    shortName: "SMM",
    leadDesc: "Are you looking to build a passionate, loyal community and turn followers into paying customers across Instagram, Facebook, and LinkedIn?",
    bodyDesc: "WebMok creates thumb-stopping viral motion graphics, high-definition reels, interactive carousel designs, and organic social growth campaigns that give your brand unmistakable digital authority.",
    stats: [
  {
    "num": "10x",
    "label": "Average Engagement Lift"
  },
  {
    "num": "50M+",
    "label": "Organic Video Views"
  },
  {
    "num": "450+",
    "label": "Brands Scaled on Social"
  },
  {
    "num": "100%",
    "label": "Custom Branded Visuals"
  }
],
    plans: [
  {
    "name": "SMM Starter",
    "badge": "1 to 2 Platforms",
    "inrPrice": "11,000",
    "usdPrice": "179",
    "period": "/ month",
    "desc": "Essential social branding for small businesses, creators, and local brands.",
    "features": [
      "12 Custom Branded Static & Carousel Posts",
      "4 Trending Video Reels (15-30s)",
      "Content Calendar & Copywriting",
      "Hashtag & Caption Optimization",
      "Instagram & Facebook Publishing",
      "Monthly Engagement Report"
    ]
  },
  {
    "name": "SMM Growth",
    "badge": "Most Popular",
    "inrPrice": "19,500",
    "usdPrice": "319",
    "period": "/ month",
    "desc": "Comprehensive multi-platform growth engine with high-frequency reels and community management.",
    "highlight": true,
    "features": [
      "20 Custom Branded Graphics & Carousels",
      "8 High-Definition Video Reels & Shorts",
      "Instagram, Facebook & LinkedIn Setup",
      "Community Moderation & Story Updates",
      "Influencer Collaboration Strategy",
      "Dedicated Social Media Manager"
    ]
  },
  {
    "name": "SMM Enterprise Viral",
    "badge": "Omnichannel Dominance",
    "inrPrice": "36,000",
    "usdPrice": "579",
    "period": "/ month",
    "desc": "High-velocity daily content creation for consumer brands, influencers, and corporate leaders.",
    "features": [
      "30 Custom Premium Posts & Carousels",
      "15 Viral Motion Reels & YouTube Shorts",
      "Instagram, LinkedIn, YouTube, Meta & X",
      "Active Daily Story & Poll Campaigns",
      "Brand Reputation & Sentiment Tracking",
      "Bi-Weekly Content Planning & Strategy Calls"
    ]
  }
],
    faqs: [
  {
    "q": "Which social platforms do you support in your SMM packages?",
    "a": "We manage and scale Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and Pinterest depending on your target audience."
  },
  {
    "q": "Do we need to shoot our own video footage?",
    "a": "You can provide raw video clips or product photos, or our team can utilize high-grade stock assets, AI animations, and motion typography to create stunning reels."
  },
  {
    "q": "Do we get to approve the posts before they go live?",
    "a": "Yes! We share a monthly visual content calendar in advance for your team’s review and feedback before scheduling any posts."
  }
]
  };
  const pageData = usePackageData('smm-packages', defaultPageData);

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
              <span className="opseo-tag">ORGANIC SOCIAL BRAND EXPANSION</span>
              <h2 className="opseo-main-title">
                Best Social Media
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies crafts bespoke social media marketing packages designed to elevate your brand voice, captivate your audience, and build real community trust across Instagram, Facebook, LinkedIn, YouTube, and Pinterest.
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
            <span className="opseo-numbers-subtitle">SOCIAL IMPACT</span>
            <h2>
              Social Engagement Growth,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">450+</div>
              <div className="opseo-stat-line"></div>
              <p>Brands Scaled Socially</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">50M+</div>
              <div className="opseo-stat-line"></div>
              <p>Organic Video Impressions</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">12K+</div>
              <div className="opseo-stat-line"></div>
              <p>Custom Motion Creatives Built</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">99%</div>
              <div className="opseo-stat-line"></div>
              <p>On-Time Content Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">SMM SUITE</span>
              <h2 className="opseo-include-title">
                What Do Social Media
                <span>Packages Include?</span>
              </h2>
              <p>Our SMM packages cover the complete social production lifecycle: monthly content calendars, high-end graphic design, video editing for Instagram Reels, persuasive caption copywriting, and hashtag strategy.</p>
              <p>We provide active community management, comment responses, and detailed monthly engagement telemetry.</p>

              <div className="opseo-feature-list">
                <div key="Custom HD Graphic Posts & Carousels" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Custom HD Graphic Posts & Carousels
                </div>
                <div key="Trending Video Reels & Motion Graphics" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Trending Video Reels & Motion Graphics
                </div>
                <div key="Monthly Strategic Content Calendars" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Monthly Strategic Content Calendars
                </div>
                <div key="Hashtag & Audience Reach Optimization" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Hashtag & Audience Reach Optimization
                </div>
                <div key="Community Moderation & Comment Management" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Community Moderation & Comment Management
                </div>
                <div key="Monthly Analytics & Audience Growth Reports" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Monthly Analytics & Audience Growth Reports
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="Social Media Marketing (SMM) Packages" />
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
              <span>Social Media Marketing</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Over 80% of modern consumers research a brand’s Instagram and LinkedIn profiles before deciding to make a purchase or sign a contract. An active, visually stunning social presence creates instant credibility and social proof.</p>
              <p>Consistent, engaging organic content keeps your brand top-of-mind, nurturing followers into loyal repeat buyers and organic brand advocates.</p>
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
                <span>  Creative Social</span>
                <br />
                <span>Media Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>We don’t use generic templates. Our in-house motion designers, illustrators, and copywriters create bespoke visual assets tailored to your exact brand guidelines and aesthetic tone.</p>
                <p>We understand modern algorithm trends, sound design, and retention hooks that maximize organic reach across Meta and LinkedIn.</p>
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
              <span className="opseo-benefits-tag">ENGAGEMENT ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of SMM
                <span>Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>Social media packages build genuine brand loyalty, drive organic referral visits to your website, and create high-converting social proof that amplifies all your marketing efforts.</p>
                <p>High-quality motion reels and carousels expand your organic reach to thousands of new prospects daily.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Build Unmistakable Brand Authority" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Build Unmistakable Brand Authority</span>
                </div>
                <div key="Viral Reach Through Reels & Short Video" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Viral Reach Through Reels & Short Video</span>
                </div>
                <div key="Engage & Retain High-Value Customers" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Engage & Retain High-Value Customers</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="Social Media Marketing (SMM) Packages" />
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

export default SmmPackagesPage;

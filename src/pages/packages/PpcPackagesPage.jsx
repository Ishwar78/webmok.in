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
import './PpcPackagesPage.css';

const PpcPackagesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('INR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "PPC Packages",
    tagline: "GOOGLE SEARCH, PERFORMANCE MAX & ROAS ADVERTISING INDIA · EST. 2018",
    heroTitleHighlight: "Google Ads & PPC Packages in India",
    shortName: "PPC",
    leadDesc: "Are you looking to generate immediate high-ticket leads and maximize ROAS with certified Google Ads and Pay-Per-Click specialists?",
    bodyDesc: "WebMok engineers laser-targeted Google Search Ads, Shopping funnels, Performance Max campaigns, and display retargeting designed to eliminate wasted spend and drive immediate pipeline revenue.",
    stats: [
  {
    "num": "3.4x",
    "label": "Average ROAS on Google Ads"
  },
  {
    "num": "₹10Cr+",
    "label": "Google Ad Spend Managed"
  },
  {
    "num": "-52%",
    "label": "Average Cost Per Acquisition"
  },
  {
    "num": "100%",
    "label": "Certified Google Partner Agency"
  }
],
    plans: [
  {
    "name": "PPC Starter",
    "badge": "Monthly Spend Up to ₹40K",
    "inrPrice": "10,000",
    "usdPrice": "159",
    "period": "/ month",
    "desc": "Ideal for local clinics, contractors, and startups needing immediate search leads.",
    "features": [
      "Up to 2 Google Search Ad Campaigns",
      "Negative Keyword Sculpting & Match Types",
      "Ad Copywriting (3 Variations per Ad Group)",
      "Google Tag Manager Conversion Tracking",
      "Weekly Bid Adjustments & Search Term Audits",
      "Monthly Performance Telemetry Report"
    ]
  },
  {
    "name": "PPC Pro Growth",
    "badge": "Most Popular",
    "inrPrice": "20,000",
    "usdPrice": "319",
    "period": "/ month",
    "desc": "Full Google Search, Performance Max, and remarketing funnel for high growth.",
    "highlight": true,
    "features": [
      "Search Ads + Performance Max + Display Remarketing",
      "Comprehensive Single Keyword Ad Groups (SKAG)",
      "Landing Page Conversion Rate Recommendations",
      "Call Tracking & Dynamic Call Extensions",
      "Continuous A/B Ad Copy Experiments",
      "Dedicated Certified Google Ads Manager"
    ]
  },
  {
    "name": "PPC Enterprise Scale",
    "badge": "High Spend (₹1.5L+ / mo)",
    "inrPrice": "38,000",
    "usdPrice": "599",
    "period": "/ month",
    "desc": "High-volume scaling for national e-commerce, real estate, and enterprise B2B brands.",
    "features": [
      "Google Shopping & Smart Bidding Scaling",
      "Competitor Keyword Conquesting Strategies",
      "Custom Looker Studio Real-Time Dashboard",
      "Multi-Location Geo-Fenced Bid Adjustments",
      "Bi-Weekly Zoom Optimization Consultations"
    ]
  }
],
    faqs: [
  {
    "q": "Is our advertising budget included in the management fee?",
    "a": "No, your ad budget is billed directly by Google Ads to your payment card. Our package covers the strategic management, copywriting, tracking, and optimization."
  },
  {
    "q": "How quickly will we start receiving leads from Google Ads?",
    "a": "Search ads go live immediately once approved by Google (usually within 24 hours), meaning you can start receiving calls and inquiries on day one."
  },
  {
    "q": "How do you prevent competitor or bot clicks from wasting budget?",
    "a": "We implement strict IP exclusions, negative keyword filters, geo-radius fencing, and automated click fraud protection rules."
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
<section className="ppc-packages-section">
  <div className="ppc-bg-shape ppc-shape-1"></div>
  <div className="ppc-bg-shape ppc-shape-2"></div>

  <div className="ppc-container">
    
    {/* Left Content */}
    <div className="ppc-content">
      <span className="ppc-subtitle">
        GET MORE CLICKS, LEADS & SALES WITH RIGHT PPC PLANS
      </span>

      <h2 className="ppc-title">
        Affordable PPC <br />
        Management <span>Packages and Pricing Plans</span>
      </h2>

      <p className="ppc-description">
        If you are new in the online market, getting your first lead can
        take time. With the right PPC strategy, you can achieve faster
        results and connect with customers who are actively searching for
        your products and services.
      </p>

      <p className="ppc-description">
        Our experienced PPC specialists create data-driven campaigns that
        help businesses generate quality leads, increase conversions and
        maximize return on investment.
      </p>

      <div className="ppc-points">
        <div>
          <span className="ppc-check">✓</span>
          <span>Google Ads Certified Experts</span>
        </div>

        <div>
          <span className="ppc-check">✓</span>
          <span>Customized PPC Strategies</span>
        </div>

        <div>
          <span className="ppc-check">✓</span>
          <span>Maximum ROI & Quality Leads</span>
        </div>
      </div>

      <button className="ppc-btn">
        Explore PPC Plans
        <span>→</span>
      </button>
    </div>


    {/* Right Cards */}
    <div className="ppc-services-grid">

      <div className="ppc-service-card">
        <div className="ppc-icon">⌕</div>
        <h3>Search Ads</h3>
        <p>
          Reach high-intent customers actively searching for your
          products and services.
        </p>
        <div className="ppc-card-arrow">→</div>
      </div>


      <div className="ppc-service-card">
        <div className="ppc-icon">▣</div>
        <h3>Display Ads</h3>
        <p>
          Build strong brand awareness across premium websites and
          digital platforms.
        </p>
        <div className="ppc-card-arrow">→</div>
      </div>


      <div className="ppc-service-card">
        <div className="ppc-icon">▶</div>
        <h3>Video Ads</h3>
        <p>
          Engage your audience with creative and powerful video
          advertising campaigns.
        </p>
        <div className="ppc-card-arrow">→</div>
      </div>


      <div className="ppc-service-card">
        <div className="ppc-icon">🛍</div>
        <h3>Shopping Ads</h3>
        <p>
          Showcase your products directly to customers ready
          to make a purchase.
        </p>
        <div className="ppc-card-arrow">→</div>
      </div>


      <div className="ppc-service-card">
        <div className="ppc-icon">▯</div>
        <h3>App Promotion</h3>
        <p>
          Increase app installs and reach the right mobile
          audience effectively.
        </p>
        <div className="ppc-card-arrow">→</div>
      </div>


      <div className="ppc-service-card">
        <div className="ppc-icon">◉</div>
        <h3>Remarketing</h3>
        <p>
          Reconnect with previous visitors and turn them
          into valuable customers.
        </p>
        <div className="ppc-card-arrow">→</div>
      </div>

    </div>

  </div>
</section>


<section className="ppc-results-section">
  <div className="ppc-results-glow ppc-glow-one"></div>
  <div className="ppc-results-glow ppc-glow-two"></div>

  <div className="ppc-results-container">

    {/* Left Content */}
    <div className="ppc-results-left">
      <span className="ppc-results-tag">
        QUICK RESULTS & BETTER ROI WITH RIGHT PPC PACKAGES
      </span>

      <h2 className="ppc-results-title">
        Quick Results & Better
        <br />
        ROI <span>With Our Best In Class</span>
        <br />
        <span>PPC Packages</span>
      </h2>

      <p className="ppc-results-text">
        RankON Technologies offers affordable yet effective PPC marketing
        packages for businesses of all sizes. Our team of Google Ads experts
        continually monitors the results your ads are achieving and takes the
        necessary actions during PPC ad optimization to increase ROI.
      </p>

      <p className="ppc-results-text">
        When you partner with RankON Technologies for Google Ads services, you
        get a top-quality PPC strategy designed to help you outperform your
        competitors and achieve better results.
      </p>

      <div className="ppc-results-stats">
        <div className="ppc-mini-stat">
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>

        <div className="ppc-mini-stat">
          <strong>24/7</strong>
          <span>Campaign Monitoring</span>
        </div>
      </div>
    </div>

    {/* Right Content */}
    <div className="ppc-results-right">
      <div className="ppc-content-card">

        <div className="ppc-card-top">
          <span className="ppc-card-dot"></span>
          <span className="ppc-card-dot"></span>
          <span className="ppc-card-dot"></span>

          <span className="ppc-card-label">PPC PERFORMANCE</span>
        </div>

        <div className="ppc-card-content">
          <div className="ppc-icon-box">
            <span>↗</span>
          </div>

          <h3>Get Results Faster With PPC</h3>

          <p>
            Pay-per-click advertising is one of the fastest ways to generate
            quality leads and grow your business online.
          </p>

          <p>
            When you start running targeted ads on Google, your business gets
            in front of potential customers at the right time. PPC provides
            measurable results and allows you to optimize campaigns for better
            performance.
          </p>

          <div className="ppc-progress-area">
            <div className="ppc-progress-head">
              <span>Campaign Growth</span>
              <strong>92%</strong>
            </div>

            <div className="ppc-progress-bar">
              <span></span>
            </div>
          </div>

          <button className="ppc-results-btn">
            Request Proposal
            <span>↗</span>
          </button>
        </div>
      </div>

      <div className="ppc-floating-card ppc-float-one">
        <span>↑</span>
        <div>
          <strong>High ROI</strong>
          <small>Optimized Campaigns</small>
        </div>
      </div>

      <div className="ppc-floating-card ppc-float-two">
        <span>✓</span>
        <div>
          <strong>More Leads</strong>
          <small>Better Conversion</small>
        </div>
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
            <span className="opseo-numbers-subtitle">PAID AD EXCELLENCE</span>
            <h2>
              PPC Campaign Results,
              <span> Backed by Numbers</span>
            </h2>
          </div>

          <div className="opseo-stats-grid">
            <div key="0" className="opseo-stat-item">
              <div className="opseo-stat-number">400+</div>
              <div className="opseo-stat-line"></div>
              <p>Google Ad Accounts Scaled</p>
            </div>
            <div key="1" className="opseo-stat-item">
              <div className="opseo-stat-number">3.4x</div>
              <div className="opseo-stat-line"></div>
              <p>Average Return on Ad Spend</p>
            </div>
            <div key="2" className="opseo-stat-item">
              <div className="opseo-stat-number">750K+</div>
              <div className="opseo-stat-line"></div>
              <p>High-Intent Inbound Leads</p>
            </div>
            <div key="3" className="opseo-stat-item">
              <div className="opseo-stat-number">100%</div>
              <div className="opseo-stat-line"></div>
              <p>Google Partner Certified</p>
            </div>
          </div>
        </div>
      </section>
    {/* 3. INTRO SECTION */}
      <section className="opseo-intro-section">
        <div className="opseo-container">
          <div className="opseo-intro-grid">
            <div className="opseo-intro-left">
              <span className="opseo-tag">PRECISION PAID SEARCH ADVERTISING</span>
              <h2 className="opseo-main-title">
                Best PPC & Google Ads
                <span>Packages in India</span>
              </h2>
            </div>
            <div className="opseo-intro-right">
              <p>
                <span>Webmok Technologies is a trusted digital partner</span> Webmok Technologies builds high-intent Google Ads campaigns that connect your business with buyers actively searching for your solutions. We use exact negative keyword sculpting, conversion rate optimized landing pages, and smart bid strategies to maximize your ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="ppc-invest-section">
  <div className="ppc-invest-container">

    {/* Top Content */}
    <div className="ppc-invest-top">
      <div className="ppc-invest-heading">
        <span className="ppc-invest-tag">
          WHY INVEST IN PAY PER CLICK ADVERTISING?
        </span>

        <h2>
          Why Should You
          <span> Invest in</span>
          <br />
          PPC Packages?
        </h2>
      </div>

      <div className="ppc-invest-intro">
        <p>
          Prior to knowing the Google Ads Pricing Models it is essential to
          know about its benefits of advertising on Google in India.
        </p>

        <div className="ppc-intro-line"></div>

        <p className="ppc-intro-small">
          Discover how PPC advertising helps businesses gain more control,
          reach the right audience and achieve measurable growth.
        </p>
      </div>
    </div>


    {/* Benefits Grid */}
    <div className="ppc-benefits-grid">

      <div className="ppc-benefit-card">
        <div className="ppc-card-number">01</div>

        <div className="ppc-card-icon">
          <i className="fas fa-wallet"></i>
        </div>

        <h3>Budget Control</h3>

        <p>
          There is absolutely no minimum investment required to create a
          Google Ads account or run a Google Ads campaign. When you start
          advertising on Google, you have full control over your budget as
          you can increase and decrease your ad spend according to your PPC
          budget.
        </p>

        <div className="ppc-card-glow"></div>
      </div>


      <div className="ppc-benefit-card">
        <div className="ppc-card-number">02</div>

        <div className="ppc-card-icon">
          <i className="fas fa-chart-line"></i>
        </div>

        <h3>Scalability</h3>

        <p>
          You can either scale up or scale down on the basis of the
          performance of your Google Ads Marketing campaign. You can scale
          ads, control the cost inflows and maximize the results of your
          best performing ad campaigns.
        </p>

        <div className="ppc-card-glow"></div>
      </div>


      <div className="ppc-benefit-card">
        <div className="ppc-card-number">03</div>

        <div className="ppc-card-icon">
          <i className="fas fa-chart-pie"></i>
        </div>

        <h3>Analytics</h3>

        <p>
          You can thoroughly analyse the success of your Google Ads campaign
          with the help of analytic tools. You can also determine the number
          of clicks on your Google ads, about the users that clicked on your
          ads and much more.
        </p>

        <div className="ppc-card-glow"></div>
      </div>


      <div className="ppc-benefit-card">
        <div className="ppc-card-number">04</div>

        <div className="ppc-card-icon">
          <i className="fas fa-bullseye"></i>
        </div>

        <h3>Intent</h3>

        <p>
          Audience with an intent is likely to search on Google. Therefore,
          it provides a platform that gets you connected directly to the
          target audience through Google ads marketing in India.
        </p>

        <div className="ppc-card-glow"></div>
      </div>

    </div>


    {/* Bottom CTA */}
    <div className="ppc-invest-cta">
      <div className="ppc-cta-orbit orbit-one"></div>
      <div className="ppc-cta-orbit orbit-two"></div>

      <button className="ppc-invest-button">
        <span>Start Your PPC Campaign</span>
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>

  </div>
</section>




      {/* 5. INCLUSION / DELIVERABLES SECTION */}
      <section className="opseo-include-section">
        <div className="opseo-container">
          <div className="opseo-include-grid">
            <div className="opseo-include-content">
              <span className="opseo-include-tag">PPC SUITE</span>
              <h2 className="opseo-include-title">
                What Do Google Ads PPC
                <span>Packages Include?</span>
              </h2>
              <p>Our PPC packages cover complete campaign setup and management: high-intent keyword research, negative keyword sculpting, persuasive ad copywriting, responsive search ads, and conversion tracking via GTM and GA4.</p>
              <p>We actively monitor daily search query reports to prevent wasted clicks and optimize your cost-per-lead.</p>

              <div className="opseo-feature-list">
                <div key="Google Search & Performance Max Campaign Setup" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Google Search & Performance Max Campaign Setup
                </div>
                <div key="High-Intent Keyword Sculpting & Negative Match Lists" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  High-Intent Keyword Sculpting & Negative Match Lists
                </div>
                <div key="Ad Copywriting & Responsive Search Ads (RSA)" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Ad Copywriting & Responsive Search Ads (RSA)
                </div>
                <div key="Google Tag Manager (GTM) & GA4 Conversion Tracking" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Google Tag Manager (GTM) & GA4 Conversion Tracking
                </div>
                <div key="Call Tracking & Dynamic Number Insertion" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Call Tracking & Dynamic Number Insertion
                </div>
                <div key="Weekly Bid Optimization & Transparent Spend Telemetry" className="opseo-feature-item">
                  <span className="opseo-check">✓</span>
                  Weekly Bid Optimization & Transparent Spend Telemetry
                </div>
              </div>
            </div>

            <div className="opseo-include-image">
              <div className="opseo-image-glow"></div>
              <img src="/onpage1.avif" alt="PPC Packages" />
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
              <span>Google Ads & PPC Management</span>
            </h2>

            <div className="opseo-importance-content">
              <p>Google Search Ads place your business at the very top of page #1 within hours of launch. Unlike organic channels that take time to mature, PPC captures immediate demand from customers who are searching with explicit purchasing intent.</p>
              <p>Professional PPC management prevents costly beginner mistakes, ensuring every single rupee of your advertising budget is directed toward converting prospects.</p>
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
                <span>  High-ROAS Google Ads</span>
                <br />
                <span>& PPC Packages</span>
              </h2>

              <div className="opseo-why-text">
                <p>As an official Google Partner agency, Webmok adheres to rigorous campaign architecture standards, continuous Quality Score optimization, and conversion-first bidding strategies.</p>
                <p>We don’t just drive clicks—we optimize landing page conversion funnels to ensure visitors convert into paying customers at the highest possible percentage.</p>
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
              <span className="opseo-benefits-tag">PPC ADVANTAGES</span>
              <h2 className="opseo-benefits-title">
                Benefits of PPC
                <span>Packages</span>
              </h2>

              <div className="opseo-benefits-text">
                <p>PPC packages deliver instantaneous inbound phone calls and leads, full transparency on customer acquisition cost, and total control over daily budgets.</p>
                <p>Target exact commercial keywords and geographic radii to dominate your market on demand.</p>
              </div>

              <div className="opseo-benefits-points">
                <div key="Instant Top Page #1 Google Visibility" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Instant Top Page #1 Google Visibility</span>
                </div>
                <div key="Predictable Cost-Per-Lead Economics" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Predictable Cost-Per-Lead Economics</span>
                </div>
                <div key="Scalable Inbound Customer Acquisition" className="opseo-benefit-point">
                  <span className="opseo-benefit-icon">✓</span>
                  <span>Scalable Inbound Customer Acquisition</span>
                </div>
              </div>
            </div>

            <div className="opseo-benefits-image">
              <div className="opseo-benefits-circle circle-one"></div>
              <div className="opseo-benefits-circle circle-two"></div>
              <img src="/onpagebenifts.jpg" alt="PPC Packages" />
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

export default PpcPackagesPage;

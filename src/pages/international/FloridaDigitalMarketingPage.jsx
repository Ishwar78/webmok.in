import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  FaClock,
  FaSearch,
  FaBullhorn,
  FaShareAlt,
  FaPenNib,
  FaLaptopCode,
  FaVideo,
  FaChartLine,
  FaBuilding,
  FaUserMd,
  FaShoppingCart,
  FaUtensils,
  FaBriefcase,
  FaCompass,
  FaRegLightbulb,
  FaProjectDiagram
} from 'react-icons/fa';
import HeroLeadForm from '../../components/HeroLeadForm';
import '../../components/HeroTwoColShared.css';
import './FloridaDigitalMarketingPage.css';

const FloridaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Florida Digital Marketing Agency",
    city: "Florida",
    region: "Florida Statewide, USA",
    tagline: "STATEWIDE DIGITAL GROWTH AGENCY · FLORIDA, USA",
    heroHighlight: "Florida Digital Marketing Services",
    heroItalic: "Dominate Statewide Markets with",
    leadDesc: "Scale across Orlando, Tampa, Jacksonville, Fort Lauderdale, Naples, and Miami with high-velocity statewide SEO, precision paid ads, and high-conversion web development.",
    bodyDesc: "We help Florida enterprises build dominant digital pipelines, rank #1 across multiple metro territories, and capture high-intent commercial buyers throughout the Sunshine State.",
    stats: [
  {
    "num": "390%",
    "label": "Average Florida Traffic Growth"
  },
  {
    "num": "6.2x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "120+",
    "label": "Florida Campaigns Delivered"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Multi-City Florida SEO",
    "desc": "Scalable multi-location SEO architecture targeting Orlando, Tampa, Jacksonville, and South Florida with localized schema markup and city landing pages."
  },
  {
    "icon": "FaBullhorn",
    "title": "Precision Paid Acquisition",
    "desc": "High-converting Google Search, Performance Max, and Local Services Ads optimized for Florida commercial and residential buying cycles."
  },
  {
    "icon": "FaShareAlt",
    "title": "Geo-Fenced Social Advertising",
    "desc": "Surgical demographic and radius-targeted Meta, TikTok, and LinkedIn campaigns that engage Florida consumers and business decision-makers."
  },
  {
    "icon": "FaPenNib",
    "title": "Authority Content Marketing",
    "desc": "Industry-leading blog hubs, Florida case studies, and editorial PR placements that build unbeatable organic domain equity."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Speed Web Architecture",
    "desc": "Lightning-fast, mobile-optimized web portals designed to convert Florida traffic into phone calls, quote submissions, and revenue."
  },
  {
    "icon": "FaVideo",
    "title": "Visual Media & Creative Ads",
    "desc": "High-impact video ads, brand creative, and animation assets tailored for Florida’s dynamic lifestyle and commercial sectors."
  }
],
    whyHireOutsideTitle: "Why Florida Enterprises Partner with Webmok",
    whyHireOutsideSubtitle: "ELITE EXECUTION · MEASURABLE REVENUE",
    whyHireDesc1: "Florida’s booming economy has created intense competition in every major metro area. Traditional marketing tactics that rely on vanity metrics burn budgets with zero pipeline accountability.",
    whyHireDesc2: "Webmok delivers a modern engineering approach to growth—combining technical search superiority with conversion-focused paid acquisition and transparent bi-weekly telemetry.",
    comparisonPoints: [
  {
    "feature": "Multi-City Scalability",
    "local": "Limited to Single Metro",
    "webmok": "Turnkey Multi-City Florida Architecture"
  },
  {
    "feature": "Pricing Transparency",
    "local": "$10,000+ Bloated Retainers",
    "webmok": "Value-Driven Month-to-Month Packages"
  },
  {
    "feature": "Accountability & Data",
    "local": "Monthly PDF Vanity Reports",
    "webmok": "24/7 Live Telemetry & Direct CRM Sync"
  },
  {
    "feature": "Engineering Speed",
    "local": "3-4 Week Turnaround",
    "webmok": "48-72 Hour Sprint Turnaround"
  },
  {
    "feature": "Contract Lock-In",
    "local": "12-Month Rigid Contracts",
    "webmok": "100% Flexible Month-to-Month"
  }
],
    resultsTitle: "Statewide Performance Telemetry",
    resultsSubtitle: "PROVEN FLORIDA OUTCOMES",
    resultsStats: [
  {
    "metric": "120+",
    "label": "Florida Enterprise Clients Scaled"
  },
  {
    "metric": "$24M+",
    "label": "Tracked Pipeline Value Generated"
  },
  {
    "metric": "99.1%",
    "label": "Statewide Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "Real-Time Telemetry Dashboard Access"
  }
],
    marketInsightsTitle: "What We Know About Marketing Across Florida",
    marketInsightsSubtitle: "REGIONAL DYNAMICS",
    marketInsights: [
  {
    "title": "Rapid Population Growth Drives Search Volume",
    "desc": "Over 1,000 people move to Florida daily. Capturing new resident search volume requires active local citations and keyword conquesting."
  },
  {
    "title": "Distinct Regional Sub-Markets",
    "desc": "Orlando focuses heavily on hospitality and healthcare, Tampa on finance and tech, while South Florida demands bilingual commercial funnels."
  },
  {
    "title": "Seasonal Demand Surges",
    "desc": "Tourism and snowbird season create distinct winter peaks. We dynamically scale ad budgets and content schedules around annual buying patterns."
  },
  {
    "title": "High Mobile Search Dependency",
    "desc": "Over 82% of Florida consumer inquiries occur via smartphones. We build instant click-to-call mobile funnels with zero load latency."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Statewide Market Audit",
    "desc": "Mapping keyword volumes across all Florida metros and pinpointing competitor weaknesses."
  },
  {
    "num": "02",
    "title": "Multi-Location Blueprint",
    "desc": "Structuring dedicated city landing pages, localized schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Full-Funnel Campaign Launch",
    "desc": "Deploying high-intent search ads, organic content hubs, and localized Meta retargeting."
  },
  {
    "num": "04",
    "title": "Telemetry Optimization & Scale",
    "desc": "Continuous bid adjustments, landing page A/B tests, and monthly revenue scaling reviews."
  }
],
    industries: [
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Development",
    "desc": "High-intent residential and commercial lead funnels across Florida’s booming property markets."
  },
  {
    "icon": "FaUserMd",
    "name": "Healthcare & Specialized Clinics",
    "desc": "Dominating patient acquisition for dental, orthopedic, plastic surgery, and medical centers."
  },
  {
    "icon": "FaCompass",
    "name": "Legal & Personal Injury",
    "desc": "Capturing high-ticket legal inquiries with aggressive Google Ads and organic SEO supremacy."
  },
  {
    "icon": "FaUtensils",
    "name": "Tourism & Hospitality",
    "desc": "Maximizing direct bookings and foot traffic across Florida resorts and attractions."
  },
  {
    "icon": "FaBriefcase",
    "name": "B2B Services & Logistics",
    "desc": "Driving qualified RFP submissions and corporate sales for Florida enterprise suppliers."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Retail & Multi-Location Brands",
    "desc": "Omni-channel local store traffic and e-commerce customer acquisition across all 67 counties."
  }
],
    plans: [
  {
    "name": "Florida Growth Core",
    "badge": "Single Metro",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Ideal for local Florida businesses establishing dominant visibility in a single city metro area.",
    "features": [
      "Up to 25 Target Florida Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Directory & Citation Building",
      "Technical Core Web Vitals Optimization",
      "Monthly Telemetry & Progress Report",
      "Dedicated Florida Account Director"
    ]
  },
  {
    "name": "Florida Multi-City Scale",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Engineered for brands expanding across 2-4 Florida cities with combined SEO and Google Ads management.",
    "features": [
      "Up to 50 Multi-City Florida Keywords",
      "Google Ads (PPC) Setup & Bid Optimization",
      "Multi-Location Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Strategic Consultation"
    ]
  },
  {
    "name": "Florida Statewide Dominance",
    "badge": "Statewide Leader",
    "usdPrice": "3,199",
    "inrPrice": "2,59,999",
    "desc": "Statewide market takeover for multi-location networks, healthcare groups, and enterprise brands.",
    "features": [
      "Statewide Keyword Takeover (100+ Keywords)",
      "Full-Funnel Omni-Channel Ads (Google, Meta, YouTube)",
      "Custom High-Converting Web Portal Development",
      "Tier-1 Press Release & Media Placements",
      "Dedicated Senior Account Squad & Slack Access",
      "Custom CRM Integration & Multi-Touch Attribution"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our legal practice across Tampa and Orlando. We saw a 320% surge in qualified case inquiries within four months.",
    "author": "Marcus B.",
    "role": "Senior Partner",
    "company": "Florida Statewide Legal Group",
    "rating": 5
  },
  {
    "quote": "The multi-location SEO architecture they built put our clinics on page 1 in 5 different Florida cities simultaneously.",
    "author": "Dr. Sarah K.",
    "role": "Chief Medical Officer",
    "company": "Sunshine State Health Network",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Can Webmok help our brand rank in multiple Florida cities at the same time?",
    "a": "Yes! We engineer scalable multi-location SEO architectures with dedicated city landing pages, localized schema markup, and regional Google Business Profiles to rank across multiple Florida markets."
  },
  {
    "q": "How do you structure Florida Google Ads campaigns to prevent wasted spend?",
    "a": "We use hyper-granular radius targeting, negative keyword sculpting, automated bid rules, and day-parting to ensure your ad spend only captures high-intent Florida searchers."
  },
  {
    "q": "What industries do you specialize in across Florida?",
    "a": "We have deep experience in real estate development, legal practices, healthcare clinics, tourism/hospitality, B2B logistics, and direct-to-consumer commerce."
  },
  {
    "q": "What is the onboarding timeline for new Florida campaigns?",
    "a": "We complete comprehensive audits, tracking setup, competitor gap analysis, and campaign deployment within 5 business days."
  }
]
  };

  return (
    <div className="wm-intl-florida-page-root">
            {/* 1. HERO SECTION (2-COLUMN MODERN DESIGN WITH COMMON LEAD FORM) */}
      <section className="wm-hero-shared-section" id="overview">
        <div className="wm-hero-shared-container">
          <div className="wm-hero-two-col">
            {/* Left Column: Content & 4-Metric Performance Bar */}
            <div className="wm-hero-col-left">
              <div className="wm-hero-breadcrumb">
                <Link to="/">Home</Link> / <span>International</span> / <span>{pageData.city || pageData.name}</span>
              </div>

              <span className="wm-hero-pill">
                <FaAward /> {pageData.tagline}
              </span>

              <h1 className="wm-hero-title">
                {pageData.heroItalic ? `${pageData.heroItalic} ` : 'Accelerate High-Yield Growth with '}
                <span className="wm-hero-title-highlight">{pageData.heroHighlight || pageData.name}</span>
              </h1>

              <p className="wm-hero-lead">
                {pageData.leadDesc}
              </p>

              <div className="wm-hero-cta-group">
                <button
                  type="button"
                  className="wm-hero-cta-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Custom Strategy Proposal`)}
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

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-florida-inpage-nav">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-inpage-nav-inner">
            <a href="#overview" className="wm-intl-florida-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-florida-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-florida-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-florida-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-florida-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-florida-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-florida-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-florida-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-florida-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-florida-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-florida-services-section" id="services">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-florida-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-florida-service-card">
                <div className="wm-intl-florida-svc-card-glow"></div>
                <div className="wm-intl-florida-svc-card-top">
                  <div className="wm-intl-florida-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-florida-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-florida-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-florida-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-florida-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-florida-whyoutside-section" id="why-us">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-whyoutside-grid">
            <div className="wm-intl-florida-whyoutside-text">
              <span className="wm-intl-florida-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-florida-compare-table">
              <div className="wm-intl-florida-compare-row wm-intl-florida-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-florida-compare-row">
                  <div className="wm-intl-florida-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-florida-compare-local">{cp.local}</div>
                  <div className="wm-intl-florida-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-florida-results-section" id="results">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-florida-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-florida-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-florida-market-section" id="market-dynamics">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-florida-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-florida-market-card">
                <div className="wm-intl-florida-market-card-glow"></div>
                <div className="wm-intl-florida-market-card-hdr">
                  <div className="wm-intl-florida-market-badge-wrap">
                    <span className="wm-intl-florida-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-florida-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-florida-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-florida-process-section" id="process">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-florida-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-florida-process-card">
                <div className="wm-intl-florida-proc-card-glow"></div>
                <div className="wm-intl-florida-proc-header-row">
                  <span className="wm-intl-florida-proc-num">0{i + 1}</span>
                  <div className="wm-intl-florida-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-florida-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-florida-industries-section" id="industries">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-florida-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-florida-industry-card">
                <div className="wm-intl-florida-ind-card-top">
                  <div className="wm-intl-florida-ind-icon">
                    {ind.icon === 'FaBuilding' && <FaBuilding />}
                    {ind.icon === 'FaUserMd' && <FaUserMd />}
                    {ind.icon === 'FaBriefcase' && <FaBriefcase />}
                    {ind.icon === 'FaUtensils' && <FaUtensils />}
                    {ind.icon === 'FaShoppingCart' && <FaShoppingCart />}
                    {ind.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {ind.icon === 'FaCompass' && <FaCompass />}
                    {ind.icon === 'FaShieldAlt' && <FaShieldAlt />}
                    {ind.icon === 'FaChartLine' && <FaChartLine />}
                  </div>
                  <span className="wm-intl-florida-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-florida-pricing-section" id="pricing-plans">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-florida-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-florida-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-florida-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-florida-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-florida-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-florida-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-florida-card-top">
                    {plan.badge && <span className="wm-intl-florida-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-florida-card-name">{plan.name}</h3>
                    <p className="wm-intl-florida-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-florida-card-pricing">
                    <div className="wm-intl-florida-price-row">
                      <span className="wm-intl-florida-price-val">{displayPrice}</span>
                      <span className="wm-intl-florida-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-florida-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-florida-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-florida-card-action">
                    <button
                      type="button"
                      className="wm-intl-florida-select-btn"
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

      {/* 11. TESTIMONIALS */}
      <section className="wm-intl-florida-testimonials-section" id="testimonials">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-florida-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-florida-testimonial-card">
                <div className="wm-intl-florida-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-florida-t-quote">"{t.quote}"</p>
                <div className="wm-intl-florida-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-florida-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-florida-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-advantage-grid">
            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-adv-glow"></div>
              <div className="wm-intl-florida-adv-top">
                <div className="wm-intl-florida-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-florida-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-florida-adv-check-row">
                <FaCheck className="wm-intl-florida-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-adv-glow"></div>
              <div className="wm-intl-florida-adv-top">
                <div className="wm-intl-florida-aicon"><FaRocket /></div>
                <span className="wm-intl-florida-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-florida-adv-check-row">
                <FaCheck className="wm-intl-florida-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-adv-glow"></div>
              <div className="wm-intl-florida-adv-top">
                <div className="wm-intl-florida-aicon"><FaHeadset /></div>
                <span className="wm-intl-florida-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-florida-adv-check-row">
                <FaCheck className="wm-intl-florida-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-adv-glow"></div>
              <div className="wm-intl-florida-adv-top">
                <div className="wm-intl-florida-aicon"><FaClock /></div>
                <span className="wm-intl-florida-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-florida-adv-check-row">
                <FaCheck className="wm-intl-florida-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-florida-faqs-section" id="faqs">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-florida-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-florida-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-florida-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-florida-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-florida-bottom-banner">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-banner-inner">
            <div className="wm-intl-florida-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-florida-banner-btns">
              <button
                type="button"
                className="wm-intl-florida-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-florida-bbtn-quote"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Bottom Banner Inquiry`)}
              >
                Get Free Custom Proposal <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloridaDigitalMarketingPage;

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
import './SouthAfricaDigitalMarketingPage.css';

const SouthAfricaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "South Africa Digital Marketing Agency",
    city: "South Africa",
    region: "South Africa Nationwide (Johannesburg, Cape Town, Durban)",
    tagline: "PREMIER SOUTH AFRICA DIGITAL AGENCY · JHB & CAPE TOWN",
    heroHighlight: "South Africa Digital Marketing Agency",
    heroItalic: "Accelerate High-ROI Growth Across SA with",
    leadDesc: "Scale your South African business nationwide with performance-driven SEO, precision Google Ads, and custom conversion funnels built for Johannesburg, Cape Town, and Durban.",
    bodyDesc: "We help South African enterprises build dominant digital pipelines, rank #1 on Google, and capture high-intent commercial buyers throughout the country.",
    stats: [
  {
    "num": "410%",
    "label": "Average SA Traffic Surge"
  },
  {
    "num": "5.8x",
    "label": "Average ROAS on Paid Ads"
  },
  {
    "num": "60+",
    "label": "SA Brands Scaled"
  },
  {
    "num": "100%",
    "label": "POPIA Compliant"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "South Africa National & Local SEO",
    "desc": "Dominating Google.co.za rankings across Johannesburg, Cape Town, Pretoria, and Durban with technical search optimization and local citation networks."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads (PPC)",
    "desc": "Precision search funnels, Performance Max campaigns, and Google Shopping optimization designed for high conversion volume and zero wasted spend."
  },
  {
    "icon": "FaShareAlt",
    "title": "Paid Social Advertising (Meta & TikTok)",
    "desc": "Hyper-targeted Meta and TikTok ad campaigns optimized for South African demographics and mobile consumer behavior."
  },
  {
    "icon": "FaPenNib",
    "title": "Topical Authority Content & PR",
    "desc": "High-value localized content hubs, South African business citations, and editorial PR placements that build unbeatable domain equity."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Speed Web Architecture",
    "desc": "Fast, mobile-first web platforms built for speed, exceptional user experience, Core Web Vitals excellence, and maximum conversion rates."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & Creative Production",
    "desc": "Studio-grade video ads, lifestyle storytelling, and brand creative tailored for the South African marketplace."
  }
],
    whyHireOutsideTitle: "The South African Growth Advantage with Webmok",
    whyHireOutsideSubtitle: "GLOBAL EXPERTISE · LOCAL VALUE",
    whyHireDesc1: "South African agencies often operate with limited technical infrastructure, charging high fees while relying on outdated search tactics.",
    whyHireDesc2: "Webmok delivers Fortune-500 technical execution, SAST timezone alignment, and rapid sprint cycles at a high-ROI, value-driven investment model.",
    comparisonPoints: [
  {
    "feature": "Technical Search Rigor",
    "local": "Basic On-Page Checklists",
    "webmok": "Deep Entity, Schema & Core Web Vitals Engineering"
  },
  {
    "feature": "POPIA Compliance",
    "local": "Basic Privacy Disclaimers",
    "webmok": "Strict POPIA Data Protection Compliance"
  },
  {
    "feature": "Pricing Transparency",
    "local": "High Retainers with Hidden Costs",
    "webmok": "Value-Driven Month-to-Month Packages"
  },
  {
    "feature": "Sprint Speed",
    "local": "Slow Multi-Week Cycles",
    "webmok": "48-72 Hour High-Velocity Sprints"
  },
  {
    "feature": "Telemetry & Attribution",
    "local": "Vanity Impressions & Clicks",
    "webmok": "Direct Revenue, Lead Quality & ROAS Attribution"
  }
],
    resultsTitle: "South Africa Performance Telemetry",
    resultsSubtitle: "VERIFIABLE OUTCOMES",
    resultsStats: [
  {
    "metric": "60+",
    "label": "South African Brands Scaled"
  },
  {
    "metric": "$14M+",
    "label": "Tracked Pipeline Value Generated"
  },
  {
    "metric": "99.2%",
    "label": "SA Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "SAST Timezone Direct Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing in South Africa",
    marketInsightsSubtitle: "SOUTH AFRICAN DYNAMICS",
    marketInsights: [
  {
    "title": "Mobile-First Internet Usage",
    "desc": "Over 80% of South African internet browsing occurs on mobile devices. Fast-loading pages and low data consumption are critical."
  },
  {
    "title": "Regional Economic Hubs",
    "desc": "Johannesburg drives commercial and financial services; Cape Town leads in tech, tourism, and creative industries; Durban in logistics and retail."
  },
  {
    "title": "POPIA Data Privacy Adherence",
    "desc": "Marketing funnels must comply with South Africa’s Protection of Personal Information Act (POPIA). We build compliant opt-in systems."
  },
  {
    "title": "High Search Intent on Google.co.za",
    "desc": "Capturing local searchers requires localized ccTLD optimization, South African directory citations, and localized schema markup."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "South African Search Audit",
    "desc": "Analyzing search intent and competitor positioning across JHB, Cape Town, and Durban."
  },
  {
    "num": "02",
    "title": "Hyper-Local Search Architecture",
    "desc": "Building multi-city landing pages, localized schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Execution",
    "desc": "Deploying high-intent Google Ads, local SEO optimizations, and targeted social campaigns."
  },
  {
    "num": "04",
    "title": "CRO & Revenue Telemetry",
    "desc": "Optimizing conversion funnels, tracking pipeline ROI, and scaling market share."
  }
],
    industries: [
  {
    "icon": "FaBriefcase",
    "name": "Financial & Corporate Services",
    "desc": "Capturing corporate clients, wealth management leads, and B2B finance contracts in JHB."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Property Development",
    "desc": "Dominating buyer acquisition for luxury homes and commercial properties in Cape Town and Gauteng."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Healthcare & Specialized Clinics",
    "desc": "Patient acquisition for dental, medical, and specialized healthcare practices."
  },
  {
    "icon": "FaShoppingCart",
    "name": "E-Commerce & Retail Brands",
    "desc": "Scaling Shopify and custom storefronts with profitable Google Shopping and Meta ads."
  },
  {
    "icon": "FaUtensils",
    "name": "Tourism & Safari Hospitality",
    "desc": "Driving international tourist bookings and luxury travel experiences."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Tech Startups & B2B SaaS",
    "desc": "Driving ARR growth and user signups in Cape Town’s Silicon Cape innovation hub."
  }
],
    plans: [
  {
    "name": "South Africa Growth Core",
    "badge": "City Focus",
    "usdPrice": "749",
    "inrPrice": "59,999",
    "desc": "Ideal for local South African businesses establishing dominant Google.co.za search visibility.",
    "features": [
      "Up to 20 High-Intent SA Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Citations & Directory Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated SAST Account Lead"
    ]
  },
  {
    "name": "South Africa Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,399",
    "inrPrice": "1,09,999",
    "desc": "Comprehensive multi-city campaign combining national SA SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-City SA Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "South Africa Enterprise Monopoly",
    "badge": "National Dominance",
    "usdPrice": "2,699",
    "inrPrice": "2,19,999",
    "desc": "Full-scale nationwide market takeover for South African national brands, franchise networks, and enterprise e-commerce.",
    "features": [
      "SA Nationwide Keyword Domination (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom High-Converting Web Redesign",
      "Tier-1 SA Media PR & Editorial Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our Cape Town tourism and hospitality brand globally. International bookings increased by 220% in our first season.",
    "author": "Johan V.",
    "role": "Managing Director",
    "company": "Cape Luxury Travel & Safari Group",
    "rating": 5
  },
  {
    "quote": "Their SEO and Google Ads team put our financial advisory firm at the top of Google.co.za across all major commercial terms.",
    "author": "Thabo M.",
    "role": "Director of Marketing",
    "company": "Johannesburg Wealth Advisory",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a South African business choose Webmok over local agencies?",
    "a": "Webmok delivers world-class technical engineering and growth marketing with dedicated SAST-timezone alignment, giving you an unfair digital advantage at a high-ROI price point."
  },
  {
    "q": "How fast can our South African business expect to see Google ranking improvements?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate leads within 14 to 30 days. Broad organic SEO keywords achieve page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Are your marketing practices compliant with POPIA?",
    "a": "Yes, 100%. All tracking, lead forms, and data handling are strictly architected to comply with South Africa’s Protection of Personal Information Act (POPIA)."
  },
  {
    "q": "What is the contract term?",
    "a": "All our South African digital marketing packages operate on flexible month-to-month agreements with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-southafrica-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-southafrica-hero-section" id="overview">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-hero-grid">
            <div className="wm-intl-southafrica-hero-left">
              <span className="wm-intl-southafrica-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-southafrica-hero-title-dual">
                <span className="wm-intl-southafrica-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-southafrica-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-southafrica-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-southafrica-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-southafrica-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-southafrica-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-southafrica-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-southafrica-hero-right-trust">
              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-clutch">C</div>
              </div>

              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-upwork">up</div>
              </div>

              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-southafrica-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-southafrica-trust-card">
                <div className="wm-intl-southafrica-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-southafrica-tcard-badge wm-intl-southafrica-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-southafrica-inpage-nav">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-inpage-nav-inner">
            <a href="#overview" className="wm-intl-southafrica-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-southafrica-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-southafrica-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-southafrica-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-southafrica-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-southafrica-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-southafrica-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-southafrica-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-southafrica-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-southafrica-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-southafrica-stats-strip">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-southafrica-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-southafrica-services-section" id="services">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-southafrica-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-southafrica-service-card">
                <div className="wm-intl-southafrica-svc-card-glow"></div>
                <div className="wm-intl-southafrica-svc-card-top">
                  <div className="wm-intl-southafrica-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-southafrica-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-southafrica-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-southafrica-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-southafrica-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-southafrica-whyoutside-section" id="why-us">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-whyoutside-grid">
            <div className="wm-intl-southafrica-whyoutside-text">
              <span className="wm-intl-southafrica-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-southafrica-compare-table">
              <div className="wm-intl-southafrica-compare-row wm-intl-southafrica-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-southafrica-compare-row">
                  <div className="wm-intl-southafrica-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-southafrica-compare-local">{cp.local}</div>
                  <div className="wm-intl-southafrica-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-southafrica-results-section" id="results">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-southafrica-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-southafrica-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-southafrica-market-section" id="market-dynamics">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-southafrica-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-southafrica-market-card">
                <div className="wm-intl-southafrica-market-card-glow"></div>
                <div className="wm-intl-southafrica-market-card-hdr">
                  <div className="wm-intl-southafrica-market-badge-wrap">
                    <span className="wm-intl-southafrica-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-southafrica-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-southafrica-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-southafrica-process-section" id="process">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-southafrica-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-southafrica-process-card">
                <div className="wm-intl-southafrica-proc-card-glow"></div>
                <div className="wm-intl-southafrica-proc-header-row">
                  <span className="wm-intl-southafrica-proc-num">0{i + 1}</span>
                  <div className="wm-intl-southafrica-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-southafrica-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-southafrica-industries-section" id="industries">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-southafrica-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-southafrica-industry-card">
                <div className="wm-intl-southafrica-ind-card-top">
                  <div className="wm-intl-southafrica-ind-icon">
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
                  <span className="wm-intl-southafrica-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-southafrica-pricing-section" id="pricing-plans">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-southafrica-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-southafrica-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-southafrica-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-southafrica-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-southafrica-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-southafrica-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-southafrica-card-top">
                    {plan.badge && <span className="wm-intl-southafrica-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-southafrica-card-name">{plan.name}</h3>
                    <p className="wm-intl-southafrica-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-southafrica-card-pricing">
                    <div className="wm-intl-southafrica-price-row">
                      <span className="wm-intl-southafrica-price-val">{displayPrice}</span>
                      <span className="wm-intl-southafrica-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-southafrica-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-southafrica-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-southafrica-card-action">
                    <button
                      type="button"
                      className="wm-intl-southafrica-select-btn"
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
      <section className="wm-intl-southafrica-testimonials-section" id="testimonials">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-southafrica-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-southafrica-testimonial-card">
                <div className="wm-intl-southafrica-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-southafrica-t-quote">"{t.quote}"</p>
                <div className="wm-intl-southafrica-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-southafrica-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-southafrica-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-advantage-grid">
            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-adv-glow"></div>
              <div className="wm-intl-southafrica-adv-top">
                <div className="wm-intl-southafrica-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-southafrica-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-southafrica-adv-check-row">
                <FaCheck className="wm-intl-southafrica-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-adv-glow"></div>
              <div className="wm-intl-southafrica-adv-top">
                <div className="wm-intl-southafrica-aicon"><FaRocket /></div>
                <span className="wm-intl-southafrica-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-southafrica-adv-check-row">
                <FaCheck className="wm-intl-southafrica-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-adv-glow"></div>
              <div className="wm-intl-southafrica-adv-top">
                <div className="wm-intl-southafrica-aicon"><FaHeadset /></div>
                <span className="wm-intl-southafrica-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-southafrica-adv-check-row">
                <FaCheck className="wm-intl-southafrica-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-southafrica-advantage-card">
              <div className="wm-intl-southafrica-adv-glow"></div>
              <div className="wm-intl-southafrica-adv-top">
                <div className="wm-intl-southafrica-aicon"><FaClock /></div>
                <span className="wm-intl-southafrica-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-southafrica-adv-check-row">
                <FaCheck className="wm-intl-southafrica-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-southafrica-faqs-section" id="faqs">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-sec-heading-center">
            <span className="wm-intl-southafrica-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-southafrica-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-southafrica-sec-bar-center"></div>
          </div>

          <div className="wm-intl-southafrica-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-southafrica-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-southafrica-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-southafrica-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-southafrica-bottom-banner">
        <div className="wm-intl-southafrica-container">
          <div className="wm-intl-southafrica-banner-inner">
            <div className="wm-intl-southafrica-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-southafrica-banner-btns">
              <button
                type="button"
                className="wm-intl-southafrica-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-southafrica-bbtn-quote"
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

export default SouthAfricaDigitalMarketingPage;

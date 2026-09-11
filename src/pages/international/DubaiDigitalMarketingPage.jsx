import { useInternationalPageData, formatInternationalPrice } from '../../hooks/useInternationalPageData';
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
import './DubaiDigitalMarketingPage.css';

const DubaiDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('AED');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Digital Marketing Agency in Dubai, UAE",
    city: "Dubai",
    region: "Dubai & United Arab Emirates (UAE)",
    tagline: "PREMIER DUBAI DIGITAL MARKETING AGENCY · UAE",
    heroHighlight: "Dubai Digital Marketing Agency",
    heroItalic: "Accelerate High-Yield UAE Growth with",
    leadDesc: "Scale your UAE business with high-precision bilingual SEO, Google Ads, Meta/TikTok campaigns, and luxury conversion funnels built for Dubai’s dynamic commercial economy.",
    bodyDesc: "From Downtown Dubai and DIFC financial hubs to Business Bay, Marina, and Free-Zone enterprises—Webmok engineers dominant digital growth across the Emirates.",
    stats: [
  {
    "num": "480%",
    "label": "Average Dubai Traffic Surge"
  },
  {
    "num": "6.4x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "95+",
    "label": "UAE Brands Scaled"
  },
  {
    "num": "100%",
    "label": "Bilingual Arabic & English"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Bilingual Dubai SEO & Google Maps",
    "desc": "Dominating organic search across English and Arabic queries in Dubai, Abu Dhabi, and Sharjah with localized entity SEO and Google 3-Pack rankings."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads & Performance Max",
    "desc": "Precision search funnels, YouTube ads, and Performance Max campaigns optimized to capture high-net-worth UAE buyers and corporate decision-makers."
  },
  {
    "icon": "FaShareAlt",
    "title": "Social Media & TikTok / Meta Campaigns",
    "desc": "High-impact visual creative, Arabic/English social ad scaling, and influencer integration built for the UAE’s ultra-high social engagement rates."
  },
  {
    "icon": "FaPenNib",
    "title": "Digital PR & Middle East Content Hubs",
    "desc": "Authoritative content marketing and digital PR placements in leading Gulf publications (Gulf News, Khaleej Times, Arabian Business)."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Luxury Web Design",
    "desc": "Speed-optimized, mobile-first websites built for luxury aesthetic standards, multi-currency transactions, and frictionless lead conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & 3D Visuals",
    "desc": "Studio-grade video production, drone footage, and luxury lifestyle animations tailored for the UAE’s premium marketplace."
  }
],
    whyHireOutsideTitle: "Why UAE Brands Partner with Webmok",
    whyHireOutsideSubtitle: "DUBAI VELOCITY · AGILE PRICING",
    whyHireDesc1: "Dubai agencies in Business Bay and Media City charge astronomical fees (AED 25,000–60,000/mo) driven by massive local overhead, while operating with slow turnaround times.",
    whyHireDesc2: "Webmok delivers Fortune-500 technical execution, Gulf timezone alignment, native bilingual capability, and rapid sprint cycles at a transparent, high-ROI investment model.",
    comparisonPoints: [
  {
    "feature": "Bilingual English/Arabic",
    "local": "Often Extra Translation Cost",
    "webmok": "Native Dual-Language Funnels Included"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "AED 25,000 – AED 60,000 / month",
    "webmok": "From AED 2,930 – AED 11,000 / month (3x-5x ROI)"
  },
  {
    "feature": "Contract Terms",
    "local": "Mandatory 1-Year Lock-In",
    "webmok": "100% Flexible Month-to-Month"
  },
  {
    "feature": "Sprint Speed",
    "local": "Slow 2-3 Week Approvals",
    "webmok": "48-72 Hour High-Velocity Sprints"
  },
  {
    "feature": "Telemetry & Attribution",
    "local": "Vanity Impressions & Reach",
    "webmok": "Direct Revenue, Lead Quality & ROAS Attribution"
  }
],
    resultsTitle: "Dubai & UAE Performance Telemetry",
    resultsSubtitle: "VERIFIABLE UAE RESULTS",
    resultsStats: [
  {
    "metric": "95+",
    "label": "UAE Brands Scaled to Page 1"
  },
  {
    "metric": "AED 38M+",
    "label": "Tracked Client Revenue Generated"
  },
  {
    "metric": "99.5%",
    "label": "UAE Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "GST (Gulf Standard Time) Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing in the UAE",
    marketInsightsSubtitle: "MIDDLE EAST DYNAMICS",
    marketInsights: [
  {
    "title": "Search Happens in Two Languages, Unevenly",
    "desc": "High-intent B2B and luxury real estate searches happen predominantly in English, while consumer, government, and regional commerce heavily utilize Arabic."
  },
  {
    "title": "Free-Zone Business Setup Cycles",
    "desc": "Over 40% of commercial inquiries in Dubai relate to free-zone company setup, corporate banking, and residency. We build specialized B2B funnels."
  },
  {
    "title": "The Annual Calendar Moves the Market",
    "desc": "Ramadan, Eid, Gitex, and the Dubai Shopping Festival dramatically shift consumer search behavior. We dynamically scale campaigns around seasonal peaks."
  },
  {
    "title": "High Dependency on WhatsApp Conversions",
    "desc": "Over 85% of Dubai leads prefer immediate communication via WhatsApp. We integrate direct WhatsApp conversion triggers into every landing page."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Gulf Market & Keyword Audit",
    "desc": "Analyzing English and Arabic search volume, competitor ad strategies, and free-zone commercial funnels."
  },
  {
    "num": "02",
    "title": "Bilingual Architecture Blueprint",
    "desc": "Setting up dual-language landing pages, schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Execution Sprints",
    "desc": "Deploying high-intent Google Search ads, Meta/TikTok social funnels, and digital PR outreach."
  },
  {
    "num": "04",
    "title": "CRO & Revenue Attribution",
    "desc": "Optimizing WhatsApp lead flows, tracking ROAS, and scaling revenue across the Emirates."
  }
],
    industries: [
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Luxury Property",
    "desc": "Capturing international luxury property investors and off-plan buyers across Dubai."
  },
  {
    "icon": "FaBriefcase",
    "name": "Corporate Services & Free-Zone Setup",
    "desc": "Generating high-value business setup leads, banking inquiries, and corporate retainers."
  },
  {
    "icon": "FaUserMd",
    "name": "Aesthetic Medicine & Wellness Clinics",
    "desc": "Patient acquisition for cosmetic surgery, dental clinics, and wellness centers in Dubai."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Luxury E-Commerce & Retail",
    "desc": "Scaling Shopify and custom storefronts with profitable Google Shopping and TikTok ads."
  },
  {
    "icon": "FaUtensils",
    "name": "Hospitality, Dining & Nightlife",
    "desc": "Driving reservations and viral buzz for premier Dubai dining and luxury venues."
  },
  {
    "icon": "FaLaptopCode",
    "name": "FinTech, Web3 & Tech Startups",
    "desc": "Accelerating user acquisition and venture growth in the DIFC innovation hub."
  }
],
    plans: [
  {
    "name": "Dubai Starter Scale",
    "badge": "Local Traction",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Dubai service providers, clinics, and boutique firms seeking dominant Google Maps and search visibility.",
    "features": [
      "Up to 20 High-Intent Dubai Keywords",
      "Google Business Profile Dubai Optimization",
      "Local UAE Citations & Directory Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated Gulf Timezone Account Lead"
    ]
  },
  {
    "name": "Dubai Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and bilingual content marketing.",
    "features": [
      "Up to 50 UAE & Gulf Keywords",
      "Google Ads & Meta Ads Management ($4k spend)",
      "Bilingual English/Arabic Landing Pages",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategic Consultation"
    ]
  },
  {
    "name": "Dubai Enterprise Monopoly",
    "badge": "Category Leader",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale market dominance for real estate developers, free-zone corporate networks, and enterprise brands.",
    "features": [
      "UAE & GCC Regional Keyword Domination",
      "Omni-Channel PPC (Google, Meta, TikTok, LinkedIn)",
      "Custom High-Converting Web Redesign",
      "Tier-1 Middle East Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Direct WhatsApp Conversion & CRM Integration"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok transformed our real estate lead generation in Dubai. We closed over AED 14M in luxury property sales within 5 months of launching our Google and Meta ad funnels.",
    "author": "Tariq A.",
    "role": "Managing Partner",
    "company": "Dubai Luxury Real Estate Brokerage",
    "rating": 5
  },
  {
    "quote": "Their bilingual English and Arabic campaigns generated a 320% surge in business setup inquiries for our free-zone consultancy.",
    "author": "Zaid K.",
    "role": "CEO",
    "company": "UAE Corporate Services Group",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a Dubai business choose Webmok over local agencies charging AED 40,000+/mo?",
    "a": "Webmok delivers senior-level agency execution at an agile, value-driven investment without bloated local overhead. You work directly with dedicated Gulf-timezone directors focused on measurable revenue."
  },
  {
    "q": "Do you offer bilingual English and Arabic digital marketing campaigns?",
    "a": "Yes! We craft complete dual-language campaigns with native Arabic and English copy, localized search keywords, and high-converting landing pages."
  },
  {
    "q": "How do you integrate WhatsApp lead capture for Dubai campaigns?",
    "a": "We configure click-to-WhatsApp automated triggers, direct ad extensions, and CRM webhooks so your sales team connects with prospects within seconds."
  },
  {
    "q": "What is the contract term?",
    "a": "All our Dubai digital marketing packages operate on flexible month-to-month agreements with zero lock-in."
  }
]
  };

  const { pageData: dynamicPageData } = useInternationalPageData('dubai-digital-marketing', defaultPageData);
  const pageData = dynamicPageData || defaultPageData;

  return (
    <div className="wm-intl-dubai-page-root">
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
      <nav className="wm-intl-dubai-inpage-nav">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-inpage-nav-inner">
            <a href="#overview" className="wm-intl-dubai-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-dubai-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-dubai-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-dubai-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-dubai-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-dubai-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-dubai-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-dubai-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-dubai-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-dubai-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-dubai-services-section" id="services">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-dubai-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-dubai-service-card">
                <div className="wm-intl-dubai-svc-card-glow"></div>
                <div className="wm-intl-dubai-svc-card-top">
                  <div className="wm-intl-dubai-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-dubai-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-dubai-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-dubai-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-dubai-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-dubai-whyoutside-section" id="why-us">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-whyoutside-grid">
            <div className="wm-intl-dubai-whyoutside-text">
              <span className="wm-intl-dubai-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-dubai-compare-table">
              <div className="wm-intl-dubai-compare-row wm-intl-dubai-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-dubai-compare-row">
                  <div className="wm-intl-dubai-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-dubai-compare-local">{cp.local}</div>
                  <div className="wm-intl-dubai-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-dubai-results-section" id="results">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-dubai-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-dubai-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-dubai-market-section" id="market-dynamics">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-dubai-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-dubai-market-card">
                <div className="wm-intl-dubai-market-card-glow"></div>
                <div className="wm-intl-dubai-market-card-hdr">
                  <div className="wm-intl-dubai-market-badge-wrap">
                    <span className="wm-intl-dubai-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-dubai-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-dubai-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-dubai-process-section" id="process">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-dubai-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-dubai-process-card">
                <div className="wm-intl-dubai-proc-card-glow"></div>
                <div className="wm-intl-dubai-proc-header-row">
                  <span className="wm-intl-dubai-proc-num">0{i + 1}</span>
                  <div className="wm-intl-dubai-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-dubai-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-dubai-industries-section" id="industries">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-dubai-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-dubai-industry-card">
                <div className="wm-intl-dubai-ind-card-top">
                  <div className="wm-intl-dubai-ind-icon">
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
                  <span className="wm-intl-dubai-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-dubai-pricing-section" id="pricing-plans">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-dubai-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-dubai-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"AED","symbol":"AED ","rate":3.67},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-dubai-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-dubai-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = formatInternationalPrice(plan, currency, pageData);
              return (
                <div key={i} className={`wm-intl-dubai-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-dubai-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-dubai-card-top">
                    {plan.badge && <span className="wm-intl-dubai-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-dubai-card-name">{plan.name}</h3>
                    <p className="wm-intl-dubai-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-dubai-card-pricing">
                    <div className="wm-intl-dubai-price-row">
                      <span className="wm-intl-dubai-price-val">{displayPrice}</span>
                      <span className="wm-intl-dubai-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-dubai-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-dubai-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-dubai-card-action">
                    <button
                      type="button"
                      className="wm-intl-dubai-select-btn"
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
      <section className="wm-intl-dubai-testimonials-section" id="testimonials">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-dubai-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-dubai-testimonial-card">
                <div className="wm-intl-dubai-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-dubai-t-quote">"{t.quote}"</p>
                <div className="wm-intl-dubai-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-dubai-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-dubai-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-advantage-grid">
            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-dubai-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaRocket /></div>
                <span className="wm-intl-dubai-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaHeadset /></div>
                <span className="wm-intl-dubai-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-dubai-advantage-card">
              <div className="wm-intl-dubai-adv-glow"></div>
              <div className="wm-intl-dubai-adv-top">
                <div className="wm-intl-dubai-aicon"><FaClock /></div>
                <span className="wm-intl-dubai-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-dubai-adv-check-row">
                <FaCheck className="wm-intl-dubai-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-dubai-faqs-section" id="faqs">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-sec-heading-center">
            <span className="wm-intl-dubai-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-dubai-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-dubai-sec-bar-center"></div>
          </div>

          <div className="wm-intl-dubai-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-dubai-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-dubai-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-dubai-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-dubai-bottom-banner">
        <div className="wm-intl-dubai-container">
          <div className="wm-intl-dubai-banner-inner">
            <div className="wm-intl-dubai-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-dubai-banner-btns">
              <button
                type="button"
                className="wm-intl-dubai-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-dubai-bbtn-quote"
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

export default DubaiDigitalMarketingPage;

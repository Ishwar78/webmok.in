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
import './EuropeDigitalMarketingPage.css';

const EuropeDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('EUR');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Europe Digital Marketing Agency",
    city: "Europe",
    region: "European Union & Continental Europe",
    tagline: "CONTINENTAL EUROPEAN DIGITAL AGENCY · EU",
    heroHighlight: "Europe Digital Marketing Agency",
    heroItalic: "Accelerate Pan-European Market Expansion with",
    leadDesc: "Scale across Germany, France, Netherlands, Nordics, and Spain with GDPR-compliant multi-lingual SEO, precision Google Ads, and high-conversion web development.",
    bodyDesc: "We help European enterprises build dominant cross-border digital pipelines, rank on page 1 across multiple language markets, and scale revenue across the EU single market.",
    stats: [
  {
    "num": "410%",
    "label": "Average EU Client Traffic Growth"
  },
  {
    "num": "5.6x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "85+",
    "label": "Pan-European Brands Scaled"
  },
  {
    "num": "100%",
    "label": "GDPR & ePrivacy Compliant"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Multi-Lingual Pan-European SEO",
    "desc": "Targeted keyword dominance across English, German, French, Dutch, and Spanish search engines with hreflang international SEO architecture."
  },
  {
    "icon": "FaBullhorn",
    "title": "Precision Google Ads & Shopping",
    "desc": "Cross-border PPC funnels, Performance Max campaigns, and localized shopping ads optimized for EU consumer purchasing behaviors."
  },
  {
    "icon": "FaShareAlt",
    "title": "Pan-European Social Ads (Meta & LinkedIn)",
    "desc": "B2B LinkedIn ABM funnels and localized Meta/TikTok ad campaigns engaging buyers across major European business centers."
  },
  {
    "icon": "FaPenNib",
    "title": "Multi-Language Content & Digital PR",
    "desc": "Native-speaker content hubs and authoritative digital PR outreach earning high-DA backlinks from leading European media outlets."
  },
  {
    "icon": "FaLaptopCode",
    "title": "GDPR-Compliant Web Engineering",
    "desc": "Lightning-fast, mobile-first web platforms built with server-side cookie consent, zero tracking leaks, and sub-second load speeds."
  },
  {
    "icon": "FaVideo",
    "title": "Visual Storytelling & Video Ads",
    "desc": "Studio-grade video production and commercial creative assets crafted for Europe’s diverse cultural and aesthetic standards."
  }
],
    whyHireOutsideTitle: "The Cross-Border European Advantage with Webmok",
    whyHireOutsideSubtitle: "CONTINENTAL SCALE · STRICT COMPLIANCE",
    whyHireDesc1: "European agencies in London, Berlin, or Paris charge €10,000–€25,000/month while struggling to deliver agile multi-lingual execution outside their domestic market.",
    whyHireDesc2: "Webmok provides true pan-European multi-lingual capability, CET timezone alignment, and transparent month-to-month contracts at a high-ROI price point.",
    comparisonPoints: [
  {
    "feature": "Multi-Language Capability",
    "local": "Single Language Domestic Focus",
    "webmok": "Turnkey Multi-Lingual EU Architecture (Hreflang)"
  },
  {
    "feature": "GDPR & Privacy Architecture",
    "local": "Basic Cookie Banners",
    "webmok": "Full Server-Side Privacy & Cookie Compliance"
  },
  {
    "feature": "Monthly Investment",
    "local": "€10,000 – €25,000 / month",
    "webmok": "From €740 – €2,760 / month (High ROI)"
  },
  {
    "feature": "Sprint Turnaround",
    "local": "Slow 3-4 Week Cycles",
    "webmok": "48-72 Hour Agile Sprint Cycles"
  },
  {
    "feature": "Contract Commitment",
    "local": "12-Month Mandatory Lock-In",
    "webmok": "100% Flexible Month-to-Month"
  }
],
    resultsTitle: "European Performance Telemetry",
    resultsSubtitle: "VERIFIABLE PAN-EUROPEAN RESULTS",
    resultsStats: [
  {
    "metric": "85+",
    "label": "Pan-European Brands Scaled"
  },
  {
    "metric": "€19M+",
    "label": "Tracked Client Revenue Generated"
  },
  {
    "metric": "99.3%",
    "label": "EU Client Retention Rate"
  },
  {
    "metric": "24/7",
    "label": "CET Timezone Strategic Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing in Europe",
    marketInsightsSubtitle: "EU MARKET DYNAMICS",
    marketInsights: [
  {
    "title": "Hreflang & Multi-Region Technical SEO",
    "desc": "Ranking across Germany (.de), France (.fr), Netherlands (.nl), and Spain (.es) requires flawless hreflang XML tags and ccTLD structure."
  },
  {
    "title": "Strict GDPR & Cookie Consent Enforcements",
    "desc": "European privacy authorities enforce strict tracking consent. We build server-side GTM architectures that maintain accurate conversion attribution."
  },
  {
    "title": "Localized Cultural Tone & Payment Gateways",
    "desc": "German buyers prefer invoice payments and technical proof; Dutch buyers prefer iDEAL; French buyers demand native linguistic elegance."
  },
  {
    "title": "Cross-Border B2B Procurement",
    "desc": "European enterprise software and industrial sales require multi-currency pricing, VAT transparency, and comprehensive product comparison assets."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Cross-Border Market Audit",
    "desc": "Analyzing search volume and competitor penetration across Germany, UK, France, and Nordics."
  },
  {
    "num": "02",
    "title": "Multi-Lingual Architecture",
    "desc": "Configuring hreflang tags, localized subdirectories, and GDPR-compliant tracking."
  },
  {
    "num": "03",
    "title": "Pan-European Sprints",
    "desc": "Deploying multi-lingual Google Ads, local search optimization, and LinkedIn B2B funnels."
  },
  {
    "num": "04",
    "title": "Attribution & Country Scaling",
    "desc": "Tracking conversion rates per country, optimizing ROAS, and expanding into new EU territories."
  }
],
    industries: [
  {
    "icon": "FaLaptopCode",
    "name": "B2B SaaS & Tech Startups",
    "desc": "Accelerating pan-European software demo signups and cross-border enterprise ARR."
  },
  {
    "icon": "FaBriefcase",
    "name": "Industrial, Manufacturing & Engineering",
    "desc": "Capturing high-value B2B procurement contracts and distributor inquiries across the EU."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Cross-Border E-Commerce",
    "desc": "Scaling Shopify and custom multilingual webshops with localized checkout flows."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Luxury Tourism",
    "desc": "Capturing international luxury property buyers and holiday resort bookings."
  },
  {
    "icon": "FaUserMd",
    "name": "HealthTech & Medical Devices",
    "desc": "Navigating European regulatory compliance to drive clinical adoption."
  },
  {
    "icon": "FaCompass",
    "name": "Corporate Advisory & Finance",
    "desc": "Establishing thought leadership for European M&A, legal, and financial consultancies."
  }
],
    plans: [
  {
    "name": "Europe Starter Scale",
    "badge": "Single Country Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for European businesses targeting a single domestic language market like Germany, France, or Netherlands.",
    "features": [
      "Up to 25 Target Language Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Citations & Directory Synchronization",
      "Technical Core Web Vitals & GDPR Audit",
      "Monthly Executive ROI & Revenue Report",
      "Dedicated CET Timezone Account Lead"
    ]
  },
  {
    "name": "Pan-European Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Comprehensive multi-country campaign combining multi-lingual SEO, Google Ads, and conversion rate optimization.",
    "features": [
      "Up to 55 Multi-Country European Keywords",
      "Multi-Lingual Google Ads (PPC) Management",
      "Cross-Border Hreflang SEO Architecture",
      "Native Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategic Consultation"
    ]
  },
  {
    "name": "Europe Enterprise Monopoly",
    "badge": "Continental Leader",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale pan-European market takeover for multi-national brands, tech platforms, and enterprise e-commerce.",
    "features": [
      "Continental Keyword Takeover (100+ Keywords)",
      "Full-Funnel Omni-Channel Ads (Google, Meta, LinkedIn)",
      "Custom High-Converting Multi-Lingual Web App",
      "Tier-1 European Media PR & Backlinks",
      "Dedicated Senior Account Squad & Daily Slack Channel",
      "Server-Side Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our SaaS platform across Germany, France, and the UK simultaneously. Our monthly demo requests tripled within four months.",
    "author": "Henrik V.",
    "role": "Chief Commercial Officer",
    "company": "European Cloud Security Platform",
    "rating": 5
  },
  {
    "quote": "Their multi-lingual SEO architecture and GDPR-compliant tracking gave us an unfair digital advantage across the EU market.",
    "author": "Sophie B.",
    "role": "VP of Marketing",
    "company": "Amsterdam FinTech Group",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "How does Webmok ensure 100% GDPR compliance for European campaigns?",
    "a": "We build server-side tracking, cookie-less telemetry, and explicit consent banners that comply fully with GDPR, ePrivacy, and regional European data laws."
  },
  {
    "q": "Can you handle multi-lingual SEO across German, French, Dutch, and Spanish?",
    "a": "Yes! We configure proper hreflang tags, localized keyword clusters, and native-speaker content hubs to rank across multiple European language domains."
  },
  {
    "q": "How do you coordinate with European clients in the CET timezone?",
    "a": "We operate with dedicated CET-aligned account directors. All strategy calls and daily communications are aligned with European business hours."
  },
  {
    "q": "What is the contract term?",
    "a": "All our European digital marketing packages are flexible month-to-month agreements with zero mandatory lock-ins."
  }
]
  };

  return (
    <div className="wm-intl-europe-page-root">
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
      <nav className="wm-intl-europe-inpage-nav">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-inpage-nav-inner">
            <a href="#overview" className="wm-intl-europe-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-europe-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-europe-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-europe-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-europe-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-europe-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-europe-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-europe-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-europe-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-europe-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-europe-services-section" id="services">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-europe-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-europe-service-card">
                <div className="wm-intl-europe-svc-card-glow"></div>
                <div className="wm-intl-europe-svc-card-top">
                  <div className="wm-intl-europe-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-europe-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-europe-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-europe-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-europe-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-europe-whyoutside-section" id="why-us">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-whyoutside-grid">
            <div className="wm-intl-europe-whyoutside-text">
              <span className="wm-intl-europe-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-europe-compare-table">
              <div className="wm-intl-europe-compare-row wm-intl-europe-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-europe-compare-row">
                  <div className="wm-intl-europe-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-europe-compare-local">{cp.local}</div>
                  <div className="wm-intl-europe-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-europe-results-section" id="results">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-europe-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-europe-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-europe-market-section" id="market-dynamics">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-europe-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-europe-market-card">
                <div className="wm-intl-europe-market-card-glow"></div>
                <div className="wm-intl-europe-market-card-hdr">
                  <div className="wm-intl-europe-market-badge-wrap">
                    <span className="wm-intl-europe-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-europe-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-europe-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-europe-process-section" id="process">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-europe-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-europe-process-card">
                <div className="wm-intl-europe-proc-card-glow"></div>
                <div className="wm-intl-europe-proc-header-row">
                  <span className="wm-intl-europe-proc-num">0{i + 1}</span>
                  <div className="wm-intl-europe-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-europe-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-europe-industries-section" id="industries">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-europe-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-europe-industry-card">
                <div className="wm-intl-europe-ind-card-top">
                  <div className="wm-intl-europe-ind-icon">
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
                  <span className="wm-intl-europe-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-europe-pricing-section" id="pricing-plans">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-europe-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-europe-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-europe-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"EUR","symbol":"€","rate":0.92},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-europe-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-europe-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-europe-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-europe-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-europe-card-top">
                    {plan.badge && <span className="wm-intl-europe-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-europe-card-name">{plan.name}</h3>
                    <p className="wm-intl-europe-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-europe-card-pricing">
                    <div className="wm-intl-europe-price-row">
                      <span className="wm-intl-europe-price-val">{displayPrice}</span>
                      <span className="wm-intl-europe-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-europe-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-europe-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-europe-card-action">
                    <button
                      type="button"
                      className="wm-intl-europe-select-btn"
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
      <section className="wm-intl-europe-testimonials-section" id="testimonials">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-europe-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-europe-testimonial-card">
                <div className="wm-intl-europe-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-europe-t-quote">"{t.quote}"</p>
                <div className="wm-intl-europe-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-europe-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-europe-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-advantage-grid">
            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-adv-glow"></div>
              <div className="wm-intl-europe-adv-top">
                <div className="wm-intl-europe-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-europe-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-europe-adv-check-row">
                <FaCheck className="wm-intl-europe-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-adv-glow"></div>
              <div className="wm-intl-europe-adv-top">
                <div className="wm-intl-europe-aicon"><FaRocket /></div>
                <span className="wm-intl-europe-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-europe-adv-check-row">
                <FaCheck className="wm-intl-europe-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-adv-glow"></div>
              <div className="wm-intl-europe-adv-top">
                <div className="wm-intl-europe-aicon"><FaHeadset /></div>
                <span className="wm-intl-europe-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-europe-adv-check-row">
                <FaCheck className="wm-intl-europe-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-europe-advantage-card">
              <div className="wm-intl-europe-adv-glow"></div>
              <div className="wm-intl-europe-adv-top">
                <div className="wm-intl-europe-aicon"><FaClock /></div>
                <span className="wm-intl-europe-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-europe-adv-check-row">
                <FaCheck className="wm-intl-europe-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-europe-faqs-section" id="faqs">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-sec-heading-center">
            <span className="wm-intl-europe-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-europe-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-europe-sec-bar-center"></div>
          </div>

          <div className="wm-intl-europe-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-europe-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-europe-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-europe-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-europe-bottom-banner">
        <div className="wm-intl-europe-container">
          <div className="wm-intl-europe-banner-inner">
            <div className="wm-intl-europe-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-europe-banner-btns">
              <button
                type="button"
                className="wm-intl-europe-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-europe-bbtn-quote"
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

export default EuropeDigitalMarketingPage;

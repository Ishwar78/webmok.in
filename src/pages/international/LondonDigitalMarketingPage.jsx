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
import './LondonDigitalMarketingPage.css';

const LondonDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('GBP');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "London Digital Marketing Agency",
    city: "London",
    region: "Greater London & City of London, UK",
    tagline: "PREMIER LONDON DIGITAL MARKETING AGENCY · UK",
    heroHighlight: "London Digital Marketing & SEO Agency",
    heroItalic: "Dominate the Capital of Commerce with",
    leadDesc: "Scale your London brand with elite technical SEO, precision Google Ads, and bespoke conversion funnels built for the UK’s most competitive commercial landscape.",
    bodyDesc: "From the City of London and Canary Wharf finance to Soho creative studios, Mayfair luxury, and Shoreditch tech innovators—Webmok engineers dominant digital growth.",
    stats: [
  {
    "num": "460%",
    "label": "Average London Traffic Growth"
  },
  {
    "num": "6.1x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "70+",
    "label": "London Brands Scaled"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "London Local & Enterprise SEO",
    "desc": "Dominating Google Maps 3-Pack and organic rankings across Central London, Canary Wharf, West End, and Greater London boroughs."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads (PPC)",
    "desc": "Precision search funnels, Performance Max campaigns, and Local Services Ads designed to capture high-value London commercial intent."
  },
  {
    "icon": "FaShareAlt",
    "title": "Targeted Paid Social (Meta & LinkedIn)",
    "desc": "B2B LinkedIn campaigns targeting City decision-makers and high-converting Meta ads engaging London consumers."
  },
  {
    "icon": "FaPenNib",
    "title": "Topical Authority Content & PR",
    "desc": "Authoritative content hubs, London business citations, and editorial PR outreach establishing market leadership."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Web Architecture",
    "desc": "Speed-optimized React, Webflow, and WordPress websites built for sub-second load times and maximum lead conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & Creative Production",
    "desc": "Studio-grade commercial video ads, brand storytelling, and social reels tailored for the Greater London market."
  }
],
    whyHireOutsideTitle: "Why London Brands Choose Webmok",
    whyHireOutsideSubtitle: "THE LONDON ADVANTAGE",
    whyHireDesc1: "London agencies in Mayfair and Shoreditch carry massive central London overhead, charging £10,000–£25,000/month while treating mid-market accounts as secondary priorities.",
    whyHireDesc2: "Webmok provides dedicated senior growth engineers, GMT timezone alignment, and rapid sprint cycles at a high-ROI, value-driven investment.",
    comparisonPoints: [
  {
    "feature": "Senior Account Attention",
    "local": "Junior Account Managers",
    "webmok": "Dedicated Senior Growth Directors"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "£10,000 – £25,000 / month",
    "webmok": "From £630 – £2,370 / month"
  },
  {
    "feature": "Contract Commitment",
    "local": "Mandatory 6-12 Months",
    "webmok": "100% Flexible Month-to-Month"
  },
  {
    "feature": "Turnaround Speed",
    "local": "2-3 Weeks per Sprint",
    "webmok": "48-72 Hours Agile Sprints"
  },
  {
    "feature": "Reporting Telemetry",
    "local": "Generic PDF Monthly Summaries",
    "webmok": "Live 24/7 Real-Time Revenue Dashboards"
  }
],
    resultsTitle: "London Performance Telemetry",
    resultsSubtitle: "VERIFIABLE RESULTS",
    resultsStats: [
  {
    "metric": "70+",
    "label": "London Brands Scaled to Page 1"
  },
  {
    "metric": "£18M+",
    "label": "Tracked Pipeline Revenue Generated"
  },
  {
    "metric": "99.5%",
    "label": "London Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "GMT Timezone Direct Support"
  }
],
    marketInsightsTitle: "What We Know About Selling in London",
    marketInsightsSubtitle: "LONDON DYNAMICS",
    marketInsights: [
  {
    "title": "Intense Local Search Competition",
    "desc": "London is Europe’s most competitive digital landscape. Ranking on Google Maps requires precise micro-citations across London boroughs."
  },
  {
    "title": "Diverse Demographic Micro-Markets",
    "desc": "Marketing across West End, City of London, and Shoreditch requires culturally aware, tailored messaging and segmentation."
  },
  {
    "title": "B2B Procurement Cycles in the City & Canary Wharf",
    "desc": "City corporate buyers conduct extensive digital due diligence. Dense topical authority and case study proof are essential to close deals."
  },
  {
    "title": "Mobile-First Inbound Call Conversion",
    "desc": "Over 80% of local London service searches happen on mobile devices. We build instant click-to-call mobile landing pages with zero friction."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "London Market & Competitor Audit",
    "desc": "Analyzing search intent and competitor positioning across Central London and key commercial hubs."
  },
  {
    "num": "02",
    "title": "Hyper-Local Search Architecture",
    "desc": "Building multi-borough landing pages, localized schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Sprint Deployment",
    "desc": "Launching high-intent Google Ads, local SEO optimizations, and targeted social campaigns."
  },
  {
    "num": "04",
    "title": "CRO & Revenue Attribution",
    "desc": "Optimizing conversion funnels, tracking pipeline ROI, and scaling market share."
  }
],
    industries: [
  {
    "icon": "FaBriefcase",
    "name": "Financial & Corporate Services",
    "desc": "Capturing corporate clients, wealth management leads, and B2B finance contracts in the City."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Luxury Property",
    "desc": "Dominating buyer acquisition for luxury homes and prime commercial properties in London."
  },
  {
    "icon": "FaUserMd",
    "name": "Harley Street Medical Clinics",
    "desc": "Patient acquisition for cosmetic surgery, dental clinics, and wellness centers across London."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Tech Startups & B2B SaaS",
    "desc": "Driving ARR growth and user signups in London’s Silicon Roundabout."
  },
  {
    "icon": "FaCompass",
    "name": "Legal & Professional Practices",
    "desc": "Generating high-value litigation cases and corporate advisory retainers."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Luxury Retail & E-Commerce",
    "desc": "Driving store foot traffic and e-commerce revenue across Greater London."
  }
],
    plans: [
  {
    "name": "London Growth Core",
    "badge": "Borough Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local London businesses establishing dominant Google Maps and search visibility.",
    "features": [
      "Up to 20 High-Intent London Keywords",
      "Google Business Profile London Optimization",
      "Local Citations & Yell Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated GMT Account Director"
    ]
  },
  {
    "name": "London Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-Borough London Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-Borough Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "London Enterprise Monopoly",
    "badge": "Category Leader",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale market dominance for London enterprises, multi-location franchises, and high-growth brands.",
    "features": [
      "London & Nationwide Keyword Domination",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke High-Converting Web Redesign",
      "Tier-1 UK Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok put our commercial firm at the top of Google for competitive London search terms. Our qualified deal pipeline grew by 260%.",
    "author": "Edward B.",
    "role": "Partner",
    "company": "Central London Corporate Advisory",
    "rating": 5
  },
  {
    "quote": "Our Harley Street clinic now ranks in the top 3 on Google Maps across all high-ticket treatment keywords.",
    "author": "Dr. Claire M.",
    "role": "Clinical Director",
    "company": "Harley Street Medical Group",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a London business choose Webmok over local Mayfair agencies?",
    "a": "Webmok delivers senior-level agency execution without bloated London real estate overhead. You work directly with dedicated GMT-timezone directors focused on measurable pipeline revenue."
  },
  {
    "q": "How fast can our London business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate leads within 14 to 30 days. Broad organic SEO keywords achieve page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Can you target multiple London boroughs (e.g. Westminster, Camden, City, Islington)?",
    "a": "Yes! We build dedicated multi-location SEO architectures tailored to each specific borough and commercial district across London."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our London digital marketing packages are flexible month-to-month agreements."
  }
]
  };

  return (
    <div className="wm-intl-london-page-root">
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
      <nav className="wm-intl-london-inpage-nav">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-inpage-nav-inner">
            <a href="#overview" className="wm-intl-london-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-london-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-london-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-london-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-london-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-london-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-london-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-london-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-london-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-london-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-london-services-section" id="services">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-london-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-london-service-card">
                <div className="wm-intl-london-svc-card-glow"></div>
                <div className="wm-intl-london-svc-card-top">
                  <div className="wm-intl-london-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-london-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-london-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-london-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-london-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-london-whyoutside-section" id="why-us">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-whyoutside-grid">
            <div className="wm-intl-london-whyoutside-text">
              <span className="wm-intl-london-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-london-compare-table">
              <div className="wm-intl-london-compare-row wm-intl-london-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-london-compare-row">
                  <div className="wm-intl-london-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-london-compare-local">{cp.local}</div>
                  <div className="wm-intl-london-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-london-results-section" id="results">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-london-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-london-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-london-market-section" id="market-dynamics">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-london-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-london-market-card">
                <div className="wm-intl-london-market-card-glow"></div>
                <div className="wm-intl-london-market-card-hdr">
                  <div className="wm-intl-london-market-badge-wrap">
                    <span className="wm-intl-london-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-london-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-london-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-london-process-section" id="process">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-london-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-london-process-card">
                <div className="wm-intl-london-proc-card-glow"></div>
                <div className="wm-intl-london-proc-header-row">
                  <span className="wm-intl-london-proc-num">0{i + 1}</span>
                  <div className="wm-intl-london-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-london-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-london-industries-section" id="industries">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-london-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-london-industry-card">
                <div className="wm-intl-london-ind-card-top">
                  <div className="wm-intl-london-ind-icon">
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
                  <span className="wm-intl-london-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-london-pricing-section" id="pricing-plans">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-london-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-london-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-london-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"GBP","symbol":"£","rate":0.79},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-london-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-london-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-london-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-london-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-london-card-top">
                    {plan.badge && <span className="wm-intl-london-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-london-card-name">{plan.name}</h3>
                    <p className="wm-intl-london-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-london-card-pricing">
                    <div className="wm-intl-london-price-row">
                      <span className="wm-intl-london-price-val">{displayPrice}</span>
                      <span className="wm-intl-london-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-london-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-london-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-london-card-action">
                    <button
                      type="button"
                      className="wm-intl-london-select-btn"
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
      <section className="wm-intl-london-testimonials-section" id="testimonials">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-london-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-london-testimonial-card">
                <div className="wm-intl-london-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-london-t-quote">"{t.quote}"</p>
                <div className="wm-intl-london-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-london-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-london-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-advantage-grid">
            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-adv-glow"></div>
              <div className="wm-intl-london-adv-top">
                <div className="wm-intl-london-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-london-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-london-adv-check-row">
                <FaCheck className="wm-intl-london-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-adv-glow"></div>
              <div className="wm-intl-london-adv-top">
                <div className="wm-intl-london-aicon"><FaRocket /></div>
                <span className="wm-intl-london-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-london-adv-check-row">
                <FaCheck className="wm-intl-london-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-adv-glow"></div>
              <div className="wm-intl-london-adv-top">
                <div className="wm-intl-london-aicon"><FaHeadset /></div>
                <span className="wm-intl-london-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-london-adv-check-row">
                <FaCheck className="wm-intl-london-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-london-advantage-card">
              <div className="wm-intl-london-adv-glow"></div>
              <div className="wm-intl-london-adv-top">
                <div className="wm-intl-london-aicon"><FaClock /></div>
                <span className="wm-intl-london-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-london-adv-check-row">
                <FaCheck className="wm-intl-london-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-london-faqs-section" id="faqs">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-sec-heading-center">
            <span className="wm-intl-london-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-london-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-london-sec-bar-center"></div>
          </div>

          <div className="wm-intl-london-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-london-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-london-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-london-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-london-bottom-banner">
        <div className="wm-intl-london-container">
          <div className="wm-intl-london-banner-inner">
            <div className="wm-intl-london-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-london-banner-btns">
              <button
                type="button"
                className="wm-intl-london-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-london-bbtn-quote"
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

export default LondonDigitalMarketingPage;

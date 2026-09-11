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
import './MiamiDigitalMarketingPage.css';

const MiamiDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultPageData = {
    name: "Miami Digital Marketing Agency",
    city: "Miami",
    region: "Florida, USA",
    tagline: "PREMIER MIAMI DIGITAL MARKETING & SEO · FLORIDA, USA",
    heroHighlight: "Miami Digital Marketing & SEO Agency",
    heroItalic: "Accelerate High-Yield Growth with",
    leadDesc: "Scale your South Florida business with performance-driven SEO, hyper-local Google Ads, and custom conversion funnels engineered for Miami’s hyper-competitive bilingual market.",
    bodyDesc: "From Brickell finance powerhouses and Wynwood creative agencies to Coral Gables commerce and South Beach hospitality—Webmok delivers compound revenue growth, top Google rankings, and high-converting customer acquisition.",
    stats: [
  {
    "num": "430%",
    "label": "Average Miami Traffic Surge"
  },
  {
    "num": "5.8x",
    "label": "Average Return on Ad Spend (ROAS)"
  },
  {
    "num": "#1 Rank",
    "label": "In High-Intent Local Searches"
  },
  {
    "num": "24/7",
    "label": "US East Coast Timezone Support"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Miami Local & Enterprise SEO",
    "desc": "Dominate Google Maps 3-Pack and organic search across Miami-Dade, Broward, and Palm Beach counties with technical SEO, bilingual keyword targeting, and authoritative digital PR."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads & PPC",
    "desc": "Precision search, Google Local Services Ads (LSA), and Performance Max funnels designed to capture ready-to-buy South Florida buyers while strictly eliminating ad spend waste."
  },
  {
    "icon": "FaShareAlt",
    "title": "Bilingual Paid Social Media",
    "desc": "Hyper-targeted Meta, TikTok, and Instagram ad campaigns optimized for Miami’s unique English and Spanish demographic landscape with high-impact visual storytelling."
  },
  {
    "icon": "FaPenNib",
    "title": "Topical Authority Content & PR",
    "desc": "Establish undisputed industry leadership with high-value localized content hubs, white-hat link acquisition from regional Florida news, and high-converting editorial assets."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Web Engineering",
    "desc": "Fast, mobile-first React and WordPress web architectures built for speed, exceptional user experience, Core Web Vitals excellence, and maximum conversion rates."
  },
  {
    "icon": "FaVideo",
    "title": "Creative Video & Brand Production",
    "desc": "Studio-grade video production, short-form reels, and commercial creative assets that capture attention in Miami’s vibrant, visually driven market."
  }
],
    whyHireOutsideTitle: "Why Miami Brands Are Hiring Outside Miami",
    whyHireOutsideSubtitle: "THE VALUE & PERFORMANCE DISRUPTION",
    whyHireDesc1: "Miami has experienced a massive influx of tech and enterprise capital, causing local agencies to inflate retainer fees to $8,000–$15,000/month while delegating work to junior staff.",
    whyHireDesc2: "Webmok provides Fortune-500 technical execution, dedicated US-timezone account directors, and agile engineering sprints at a transparent, high-ROI investment model.",
    comparisonPoints: [
  {
    "feature": "Senior Growth Engineers on Call",
    "local": "Junior Account Coordinators",
    "webmok": "Senior Growth Directors & Lead Techs"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "$8,000 – $15,000 / month",
    "webmok": "From $799 – $2,999 / month (3x-5x ROI)"
  },
  {
    "feature": "Contract Commitment",
    "local": "Mandatory 6-12 Month Lock-In",
    "webmok": "Month-to-Month (Performance Retained)"
  },
  {
    "feature": "Bilingual Execution",
    "local": "Basic Translation Tools",
    "webmok": "Native English & Spanish Market Strategy"
  },
  {
    "feature": "Reporting & Telemetry",
    "local": "Vague Monthly Vanity Reports",
    "webmok": "24/7 Live Telemetry & Revenue Attribution"
  }
],
    resultsTitle: "Results We Show in Client Analytics",
    resultsSubtitle: "VERIFIABLE PERFORMANCE TELEMETRY",
    resultsStats: [
  {
    "metric": "+420%",
    "label": "Average Organic Traffic Lift across Miami Clients"
  },
  {
    "metric": "5.8x",
    "label": "Average Blended ROAS across Meta & Google Ads"
  },
  {
    "metric": "-38%",
    "label": "Reduction in Cost Per Inbound Lead (CPL)"
  },
  {
    "metric": "$18M+",
    "label": "Tracked Client Revenue Pipeline Generated"
  }
],
    marketInsightsTitle: "What We Know About Selling in Miami",
    marketInsightsSubtitle: "LOCAL MARKET TELEMETRY",
    marketInsights: [
  {
    "title": "Bilingual Search Intent is Mandatory",
    "desc": "Over 68% of Miami-Dade searches exhibit bilingual Spanish-English query patterns. We build dual-language ranking engines that capture both markets seamlessly."
  },
  {
    "title": "Hyper-Localized Micro-Territories",
    "desc": "Commercial behavior in Brickell differs completely from Doral, Coral Gables, or Wynwood. We build geo-targeted landing funnels specific to each neighborhood."
  },
  {
    "title": "Rapid Market Influx Demands Authority",
    "desc": "With hundreds of new companies moving to South Florida monthly, organic search equity and Google Maps superiority are required to maintain category leadership."
  },
  {
    "title": "Mobile-First Conversions Drive 78% of Leads",
    "desc": "South Florida buyers overwhelmingly browse on mobile. We engineer sub-second page load speeds and friction-free click-to-call conversions."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Deep Market & Competitor Audit",
    "desc": "Exhaustive analysis of your Miami competitors, keyword vulnerabilities, and funnel conversion leaks."
  },
  {
    "num": "02",
    "title": "Bespoke Blueprint & Architecture",
    "desc": "Engineering your multi-channel acquisition roadmap with target commercial search terms and high-intent PPC funnels."
  },
  {
    "num": "03",
    "title": "Omni-Channel Execution Sprints",
    "desc": "Deploying high-velocity SEO optimizations, ad creatives, localized landing pages, and editorial PR placements."
  },
  {
    "num": "04",
    "title": "Continuous CRO & Compound Scale",
    "desc": "Daily bid optimizations, heat-map user analysis, and real-time revenue telemetry to maximize customer lifetime value."
  }
],
    industries: [
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Luxury Property",
    "desc": "Capturing domestic and international luxury buyers in Brickell, Sunny Isles, and Palm Beach."
  },
  {
    "icon": "FaUserMd",
    "name": "Healthcare & Aesthetic Clinics",
    "desc": "Dominating local Google Maps for cosmetic surgery, dental practices, and wellness centers."
  },
  {
    "icon": "FaBriefcase",
    "name": "B2B Tech & Financial Services",
    "desc": "Accelerating enterprise pipeline for FinTech, venture funds, and corporate law firms."
  },
  {
    "icon": "FaUtensils",
    "name": "Hospitality & Luxury Dining",
    "desc": "Driving high-ticket bookings and foot traffic across South Beach and Wynwood hotspots."
  },
  {
    "icon": "FaShoppingCart",
    "name": "E-Commerce & DTC Brands",
    "desc": "Scaling Shopify and custom storefronts with profitable Google Shopping and TikTok ads."
  },
  {
    "icon": "FaCompass",
    "name": "Legal & Professional Services",
    "desc": "Generating high-value litigation cases and corporate client retainers on page 1 of Google."
  }
],
    plans: [
  {
    "name": "Miami Starter Scale",
    "badge": "Local Traction",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Miami businesses, clinics, and professional practices aiming to capture top Google Maps 3-Pack rankings.",
    "features": [
      "Up to 20 High-Intent Miami Keywords",
      "Google Business Profile (Maps) Domination",
      "Local Citations & Directory Synchronization",
      "On-Page Optimization & Core Web Vitals Fixes",
      "Monthly Executive ROI & Revenue Dashboard",
      "Dedicated US East Coast Account Manager"
    ]
  },
  {
    "name": "Miami Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and bilingual content marketing.",
    "features": [
      "Up to 50 Multi-City Florida Keywords",
      "Google Search Ads (PPC) Management ($4k spend)",
      "Bilingual Content Hubs (8 High-Impact Posts/mo)",
      "Competitor Backlink Interception & PR Outreach",
      "Conversion-Optimized Landing Page Design",
      "Bi-Weekly Live Strategic Telemetry Review"
    ]
  },
  {
    "name": "Miami Enterprise Monopoly",
    "badge": "Category Leader",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale omni-channel dominance for established brands, franchise networks, and rapid-growth SaaS firms.",
    "features": [
      "Unlimited High-Volume Target Keywords",
      "Full-Funnel Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke Web App / High-Converting Portal Redesign",
      "Tier-1 Press Release & Media Placements",
      "Dedicated Senior Account Squad & Slack Channel",
      "Custom CRM Integration & Multi-Touch Attribution"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok transformed our South Florida lead pipeline. We went from page 4 to #1 on Google Maps in Brickell, reducing our cost per acquisition by 45%.",
    "author": "Carlos M.",
    "role": "Managing Director",
    "company": "Miami Commercial Real Estate Group",
    "rating": 5
  },
  {
    "quote": "Their bilingual campaign execution is unmatched. We captured over $1.8M in new customer revenue within 6 months of launching our Google Ads and SEO sprints.",
    "author": "Elena S.",
    "role": "VP of Marketing",
    "company": "South Florida Aesthetic & Wellness",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a Miami business choose Webmok over local agencies charging $8,000+/mo?",
    "a": "Webmok provides senior-level engineering and growth execution at an agile, value-driven investment level. You work with dedicated US-timezone directors who focus strictly on measurable pipeline revenue and closed deals rather than vanity impressions."
  },
  {
    "q": "How fast can our Miami business expect to see Google ranking improvements?",
    "a": "Local Google Maps 3-Pack optimizations and high-intent PPC campaigns begin funneling leads within 14 to 30 days. Broad organic SEO keywords achieve major page #1 breakthroughs in 60 to 90 days as domain equity compounds."
  },
  {
    "q": "Do you offer bilingual English and Spanish marketing campaigns for South Florida?",
    "a": "Yes, absolutely. Over 68% of Miami-Dade engages in bilingual search behavior. We craft tailored ad copy, localized keywords, and landing page funnels in both English and Spanish to maximize market penetration."
  },
  {
    "q": "How do you handle Google Ads and paid media budget waste?",
    "a": "We implement hyper-granular zip-code targeting, aggressive negative keyword sculpting, automated bid strategies, and day-parting to ensure your ad spend only captures ready-to-buy consumers."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Miami digital marketing packages operate on flexible month-to-month agreements. We retain our clients through compounding performance and measurable ROI."
  }
]
  };

  const { pageData: dynamicPageData } = useInternationalPageData('miami-digital-marketing', defaultPageData);
  const pageData = dynamicPageData || defaultPageData;

  return (
    <div className="wm-intl-miami-page-root">
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
      <nav className="wm-intl-miami-inpage-nav">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-inpage-nav-inner">
            <a href="#overview" className="wm-intl-miami-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-miami-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-miami-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-miami-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-miami-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-miami-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-miami-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-miami-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-miami-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-miami-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-miami-services-section" id="services">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-miami-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-miami-service-card">
                <div className="wm-intl-miami-svc-card-glow"></div>
                <div className="wm-intl-miami-svc-card-top">
                  <div className="wm-intl-miami-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-miami-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-miami-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-miami-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-miami-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-miami-whyoutside-section" id="why-us">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-whyoutside-grid">
            <div className="wm-intl-miami-whyoutside-text">
              <span className="wm-intl-miami-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-miami-compare-table">
              <div className="wm-intl-miami-compare-row wm-intl-miami-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-miami-compare-row">
                  <div className="wm-intl-miami-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-miami-compare-local">{cp.local}</div>
                  <div className="wm-intl-miami-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-miami-results-section" id="results">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-miami-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-miami-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-miami-market-section" id="market-dynamics">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-miami-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-miami-market-card">
                <div className="wm-intl-miami-market-card-glow"></div>
                <div className="wm-intl-miami-market-card-hdr">
                  <div className="wm-intl-miami-market-badge-wrap">
                    <span className="wm-intl-miami-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-miami-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-miami-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-miami-process-section" id="process">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-miami-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-miami-process-card">
                <div className="wm-intl-miami-proc-card-glow"></div>
                <div className="wm-intl-miami-proc-header-row">
                  <span className="wm-intl-miami-proc-num">0{i + 1}</span>
                  <div className="wm-intl-miami-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-miami-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-miami-industries-section" id="industries">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-miami-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-miami-industry-card">
                <div className="wm-intl-miami-ind-card-top">
                  <div className="wm-intl-miami-ind-icon">
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
                  <span className="wm-intl-miami-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-miami-pricing-section" id="pricing-plans">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-miami-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-miami-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-miami-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-miami-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-miami-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = formatInternationalPrice(plan, currency, pageData);
              return (
                <div key={i} className={`wm-intl-miami-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-miami-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-miami-card-top">
                    {plan.badge && <span className="wm-intl-miami-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-miami-card-name">{plan.name}</h3>
                    <p className="wm-intl-miami-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-miami-card-pricing">
                    <div className="wm-intl-miami-price-row">
                      <span className="wm-intl-miami-price-val">{displayPrice}</span>
                      <span className="wm-intl-miami-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-miami-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-miami-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-miami-card-action">
                    <button
                      type="button"
                      className="wm-intl-miami-select-btn"
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
      <section className="wm-intl-miami-testimonials-section" id="testimonials">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-miami-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-miami-testimonial-card">
                <div className="wm-intl-miami-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-miami-t-quote">"{t.quote}"</p>
                <div className="wm-intl-miami-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-miami-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-miami-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-advantage-grid">
            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-adv-glow"></div>
              <div className="wm-intl-miami-adv-top">
                <div className="wm-intl-miami-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-miami-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-miami-adv-check-row">
                <FaCheck className="wm-intl-miami-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-adv-glow"></div>
              <div className="wm-intl-miami-adv-top">
                <div className="wm-intl-miami-aicon"><FaRocket /></div>
                <span className="wm-intl-miami-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-miami-adv-check-row">
                <FaCheck className="wm-intl-miami-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-adv-glow"></div>
              <div className="wm-intl-miami-adv-top">
                <div className="wm-intl-miami-aicon"><FaHeadset /></div>
                <span className="wm-intl-miami-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-miami-adv-check-row">
                <FaCheck className="wm-intl-miami-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-miami-advantage-card">
              <div className="wm-intl-miami-adv-glow"></div>
              <div className="wm-intl-miami-adv-top">
                <div className="wm-intl-miami-aicon"><FaClock /></div>
                <span className="wm-intl-miami-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-miami-adv-check-row">
                <FaCheck className="wm-intl-miami-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-miami-faqs-section" id="faqs">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-sec-heading-center">
            <span className="wm-intl-miami-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-miami-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-miami-sec-bar-center"></div>
          </div>

          <div className="wm-intl-miami-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-miami-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-miami-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-miami-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-miami-bottom-banner">
        <div className="wm-intl-miami-container">
          <div className="wm-intl-miami-banner-inner">
            <div className="wm-intl-miami-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-miami-banner-btns">
              <button
                type="button"
                className="wm-intl-miami-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-miami-bbtn-quote"
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

export default MiamiDigitalMarketingPage;

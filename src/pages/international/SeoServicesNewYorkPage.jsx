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
import './SeoServicesNewYorkPage.css';

const SeoServicesNewYorkPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "SEO Services in New York",
    city: "New York",
    region: "New York City, NY, USA",
    tagline: "ELITE NEW YORK SEO AGENCY · NYC, USA",
    heroHighlight: "Top SEO Services in New York",
    heroItalic: "Dominate Page #1 in Manhattan with",
    leadDesc: "Outrank Wall Street, Midtown, and Manhattan competitors with high-authority technical SEO, bespoke link acquisition, and data-backed organic search strategies.",
    bodyDesc: "In the world’s most competitive business capital, second-page rankings don’t exist. Webmok builds bulletproof organic ranking engines that capture high-ticket NYC commercial intent.",
    stats: [
  {
    "num": "490%",
    "label": "Average NYC Organic Surge"
  },
  {
    "num": "#1 Rank",
    "label": "In Ultra-Competitive NYC Niches"
  },
  {
    "num": "90+ DA",
    "label": "Editorial Backlink Network"
  },
  {
    "num": "100%",
    "label": "Strict White-Hat Google Compliance"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Enterprise & NYC Technical SEO",
    "desc": "Advanced site architecture audits, server log file analysis, Core Web Vitals remediation, and JavaScript rendering optimization for complex enterprise domains."
  },
  {
    "icon": "FaPenNib",
    "title": "Topical Authority & Semantic Content",
    "desc": "Entity-based content hubs that establish definitive topical supremacy across competitive financial, legal, medical, and technology keywords."
  },
  {
    "icon": "FaBullhorn",
    "title": "Tier-1 Digital PR & High-DA Backlinks",
    "desc": "Manual outreach to major publications (Forbes, Bloomberg, Reuters, Industry Journals) acquiring authoritative editorial backlinks that drive unstoppable rankings."
  },
  {
    "icon": "FaCompass",
    "title": "Manhattan & Borough Local 3-Pack",
    "desc": "Hyper-local optimization capturing high-intent searchers across Manhattan, Brooklyn, Queens, and the Tri-State area on Google Maps."
  },
  {
    "icon": "FaLaptopCode",
    "title": "Conversion Rate Optimization (CRO)",
    "desc": "Turning expensive NYC search traffic into high-value executive demo requests, phone consultations, and qualified pipeline."
  },
  {
    "icon": "FaChartLine",
    "title": "Executive Telemetry & Attribution",
    "desc": "Real-time dashboards connecting organic keyword positions directly to pipeline revenue, customer lifetime value, and CAC reduction."
  }
],
    whyHireOutsideTitle: "The New York SEO Advantage with Webmok",
    whyHireOutsideSubtitle: "UNRIVALED TECHNICAL PRECISION",
    whyHireDesc1: "Madison Avenue and Manhattan agencies routinely charge $12,000–$25,000/month for SEO retainers while outsourcing technical execution to automated tools.",
    whyHireDesc2: "Webmok provides senior technical SEO architects, manual digital PR specialists, and direct Slack communication at an agile, value-driven price point.",
    comparisonPoints: [
  {
    "feature": "Link Acquisition Method",
    "local": "Generic Syndication / PBNs",
    "webmok": "100% Editorial Tier-1 Digital PR (DA 60-90+)"
  },
  {
    "feature": "Technical Depth",
    "local": "Automated Audit Checklists",
    "webmok": "Deep Server Log, Schema & Code Audits"
  },
  {
    "feature": "Monthly Investment",
    "local": "$12,000 – $25,000 / month",
    "webmok": "From $999 – $3,499 / month"
  },
  {
    "feature": "Algorithm Resilience",
    "local": "Vulnerable to Core Updates",
    "webmok": "Zero-Penalty White-Hat Authority Architecture"
  },
  {
    "feature": "Executive Reporting",
    "local": "Vague PDF Ranking Reports",
    "webmok": "Live 24/7 Revenue Telemetry Dashboard"
  }
],
    resultsTitle: "Unrivaled Organic Results in NYC",
    resultsSubtitle: "MEASURABLE PIPELINE IMPACT",
    resultsStats: [
  {
    "metric": "95+",
    "label": "NYC Enterprise Brands Ranked #1"
  },
  {
    "metric": "$32M+",
    "label": "Organic Revenue Pipeline Generated"
  },
  {
    "metric": "99.6%",
    "label": "Keyword Position Retention Rate"
  },
  {
    "metric": "Top 1%",
    "label": "Technical SEO Performance Score"
  }
],
    marketInsightsTitle: "Why Organic Dominance Matters in NYC",
    marketInsightsSubtitle: "MANHATTAN SEARCH DYNAMICS",
    marketInsights: [
  {
    "title": "Ultra-High Cost Per Click in Paid Search",
    "desc": "NYC legal and financial search terms regularly exceed $150+ per click on Google Ads. Dominating organic search creates an enduring, cost-free customer acquisition moat."
  },
  {
    "title": "High-Ticket Executive Buyer Behavior",
    "desc": "C-Suite executives and luxury consumers conduct thorough organic research. Ranking #1 establishes category trust that cannot be bought with ads."
  },
  {
    "title": "Hyper-Competitive Local Search Grid",
    "desc": "Ranking on Google Maps in Midtown versus FiDi requires localized geo-signals, micro-citations, and borough-specific schema markup."
  },
  {
    "title": "Google Algorithm Core Resilience",
    "desc": "Google frequently tests new AI Overviews and algorithm updates in US Tier-1 markets. We build dense entity authority that thrives across every update."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Exhaustive Reverse Engineering",
    "desc": "Analyzing the top 3 ranking domains in your NYC niche to map exact content depth and backlink velocity requirements."
  },
  {
    "num": "02",
    "title": "Technical & Architecture Overhaul",
    "desc": "Eliminating render-blocking assets, fixing crawl depth issues, and implementing advanced JSON-LD schema."
  },
  {
    "num": "03",
    "title": "Topical Authority & Digital PR Sprints",
    "desc": "Publishing comprehensive topic clusters and executing manual outreach to high-DA editorial news outlets."
  },
  {
    "num": "04",
    "title": "Revenue Attribution & Expansion",
    "desc": "Tracking conversion goals, ranking retention, and scaling keyword targets nationwide."
  }
],
    industries: [
  {
    "icon": "FaBriefcase",
    "name": "Corporate Law & Legal Practices",
    "desc": "Dominating commercial litigation, M&A, and high-stakes personal injury search queries in NYC."
  },
  {
    "icon": "FaBuilding",
    "name": "Commercial Real Estate & Finance",
    "desc": "Capturing institutional investors, property developers, and asset managers across Manhattan."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Healthcare & Specialists",
    "desc": "Ranking #1 for luxury medical practices, concierge doctors, and surgical centers."
  },
  {
    "icon": "FaLaptopCode",
    "name": "FinTech, SaaS & Tech Ventures",
    "desc": "Driving organic B2B product demo signups and ARR growth in Silicon Alley."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Luxury Goods & Premium Retail",
    "desc": "Capturing high-net-worth consumers searching for bespoke and luxury retail products."
  },
  {
    "icon": "FaCompass",
    "name": "Consulting & Executive Advisory",
    "desc": "Establishing authority for management consulting, headhunting, and financial advisory firms."
  }
],
    plans: [
  {
    "name": "NYC Growth SEO",
    "badge": "Local Contender",
    "usdPrice": "999",
    "inrPrice": "79,999",
    "desc": "Built for NYC boutique firms, specialized practices, and startups looking to break onto page 1 for competitive terms.",
    "features": [
      "Up to 25 Competitive NYC Keywords",
      "Google Business Profile NYC Optimization",
      "Comprehensive On-Page & Schema Markup",
      "4 High-Authority Outreach Backlinks/mo",
      "Core Web Vitals & Speed Optimization",
      "Monthly Transparent ROI Dashboard"
    ]
  },
  {
    "name": "NYC Market Leader",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,899",
    "inrPrice": "1,54,999",
    "desc": "Aggressive organic conquesting for mid-market New York firms fighting for high-value transactional search volume.",
    "features": [
      "Up to 60 High-Difficulty NYC Keywords",
      "Deep Technical SEO & Core Web Vitals Fixes",
      "10 Premium Tier-1 Editorial Backlinks/mo",
      "Topical Authority Content Hubs (8 Posts/mo)",
      "Competitor Backlink Interception & Gap Analysis",
      "Bi-Weekly Strategy Sessions with Senior Lead"
    ]
  },
  {
    "name": "NYC Enterprise Monopoly",
    "badge": "Unstoppable Authority",
    "usdPrice": "3,499",
    "inrPrice": "2,89,999",
    "desc": "Uncompromising organic domination for established NYC enterprises, national brands, and venture-backed firms.",
    "features": [
      "Unlimited Keywords & National Expansion",
      "Full-Scale Digital PR Campaigns & News Placements",
      "Custom Interactive Content & Conversion Assets",
      "Dedicated NYC Squad (SEO Lead, Tech Dev, PR Strategist)",
      "Direct Slack Channel Access & Weekly Telemetry",
      "Multi-Touch Attribution & Custom CRM Pipelines"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok took our Manhattan corporate law firm to #1 for our most valuable transactional keywords. Our inbound qualified lead volume tripled in 90 days.",
    "author": "Jonathan D.",
    "role": "Senior Partner",
    "company": "NYC Commercial Litigation Firm",
    "rating": 5
  },
  {
    "quote": "Their digital PR team landed editorial placements in Tier-1 finance publications that established our domain as the definitive authority.",
    "author": "Rachel W.",
    "role": "Chief Marketing Officer",
    "company": "Wall Street FinTech Platform",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "How difficult is it to rank on Google in New York City?",
    "a": "NYC is the most competitive search market globally. It requires flawless technical SEO, dense topical authority, and high-tier editorial backlinks. We have repeatedly ranked clients #1 across high-stakes NYC sectors."
  },
  {
    "q": "How does Webmok acquire backlinks for New York campaigns?",
    "a": "We strictly execute manual digital PR outreach to high-authority publications, industry journals, and regional business news outlets (DA 60-90+). Zero private blog networks (PBNs) or spam."
  },
  {
    "q": "Can you handle local NYC 3-pack maps and national organic SEO together?",
    "a": "Yes! We create dual-funnel SEO architectures that capture both local NYC foot/phone inquiries and nationwide organic search volume."
  },
  {
    "q": "What reporting do we receive each month?",
    "a": "You receive live 24/7 access to our real-time telemetry dashboard showing keyword movements, organic traffic growth, backlink additions, and direct conversions."
  }
]
  };

  return (
    <div className="wm-intl-newyork-page-root">
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
      <nav className="wm-intl-newyork-inpage-nav">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-inpage-nav-inner">
            <a href="#overview" className="wm-intl-newyork-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-newyork-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-newyork-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-newyork-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-newyork-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-newyork-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-newyork-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-newyork-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-newyork-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-newyork-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-newyork-services-section" id="services">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-newyork-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-newyork-service-card">
                <div className="wm-intl-newyork-svc-card-glow"></div>
                <div className="wm-intl-newyork-svc-card-top">
                  <div className="wm-intl-newyork-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-newyork-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-newyork-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-newyork-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-newyork-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-newyork-whyoutside-section" id="why-us">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-whyoutside-grid">
            <div className="wm-intl-newyork-whyoutside-text">
              <span className="wm-intl-newyork-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-newyork-compare-table">
              <div className="wm-intl-newyork-compare-row wm-intl-newyork-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-newyork-compare-row">
                  <div className="wm-intl-newyork-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-newyork-compare-local">{cp.local}</div>
                  <div className="wm-intl-newyork-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-newyork-results-section" id="results">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-newyork-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-newyork-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-newyork-market-section" id="market-dynamics">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-newyork-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-newyork-market-card">
                <div className="wm-intl-newyork-market-card-glow"></div>
                <div className="wm-intl-newyork-market-card-hdr">
                  <div className="wm-intl-newyork-market-badge-wrap">
                    <span className="wm-intl-newyork-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-newyork-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-newyork-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-newyork-process-section" id="process">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-newyork-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-newyork-process-card">
                <div className="wm-intl-newyork-proc-card-glow"></div>
                <div className="wm-intl-newyork-proc-header-row">
                  <span className="wm-intl-newyork-proc-num">0{i + 1}</span>
                  <div className="wm-intl-newyork-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-newyork-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-newyork-industries-section" id="industries">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-newyork-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-newyork-industry-card">
                <div className="wm-intl-newyork-ind-card-top">
                  <div className="wm-intl-newyork-ind-icon">
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
                  <span className="wm-intl-newyork-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-newyork-pricing-section" id="pricing-plans">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-newyork-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-newyork-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-newyork-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-newyork-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-newyork-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-newyork-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-newyork-card-top">
                    {plan.badge && <span className="wm-intl-newyork-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-newyork-card-name">{plan.name}</h3>
                    <p className="wm-intl-newyork-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-newyork-card-pricing">
                    <div className="wm-intl-newyork-price-row">
                      <span className="wm-intl-newyork-price-val">{displayPrice}</span>
                      <span className="wm-intl-newyork-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-newyork-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-newyork-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-newyork-card-action">
                    <button
                      type="button"
                      className="wm-intl-newyork-select-btn"
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
      <section className="wm-intl-newyork-testimonials-section" id="testimonials">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-newyork-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-newyork-testimonial-card">
                <div className="wm-intl-newyork-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-newyork-t-quote">"{t.quote}"</p>
                <div className="wm-intl-newyork-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-newyork-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-newyork-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-advantage-grid">
            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-adv-glow"></div>
              <div className="wm-intl-newyork-adv-top">
                <div className="wm-intl-newyork-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-newyork-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-newyork-adv-check-row">
                <FaCheck className="wm-intl-newyork-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-adv-glow"></div>
              <div className="wm-intl-newyork-adv-top">
                <div className="wm-intl-newyork-aicon"><FaRocket /></div>
                <span className="wm-intl-newyork-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-newyork-adv-check-row">
                <FaCheck className="wm-intl-newyork-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-adv-glow"></div>
              <div className="wm-intl-newyork-adv-top">
                <div className="wm-intl-newyork-aicon"><FaHeadset /></div>
                <span className="wm-intl-newyork-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-newyork-adv-check-row">
                <FaCheck className="wm-intl-newyork-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-newyork-advantage-card">
              <div className="wm-intl-newyork-adv-glow"></div>
              <div className="wm-intl-newyork-adv-top">
                <div className="wm-intl-newyork-aicon"><FaClock /></div>
                <span className="wm-intl-newyork-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-newyork-adv-check-row">
                <FaCheck className="wm-intl-newyork-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-newyork-faqs-section" id="faqs">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-sec-heading-center">
            <span className="wm-intl-newyork-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-newyork-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-newyork-sec-bar-center"></div>
          </div>

          <div className="wm-intl-newyork-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-newyork-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-newyork-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-newyork-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-newyork-bottom-banner">
        <div className="wm-intl-newyork-container">
          <div className="wm-intl-newyork-banner-inner">
            <div className="wm-intl-newyork-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-newyork-banner-btns">
              <button
                type="button"
                className="wm-intl-newyork-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-newyork-bbtn-quote"
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

export default SeoServicesNewYorkPage;

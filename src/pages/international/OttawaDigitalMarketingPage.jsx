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
import './OttawaDigitalMarketingPage.css';

const OttawaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('CAD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Ottawa Digital Marketing Agency",
    city: "Ottawa",
    region: "National Capital Region, Ontario/Quebec, Canada",
    tagline: "CAPITAL REGION GROWTH AGENCY · OTTAWA, CANADA",
    heroHighlight: "Ottawa Digital Marketing & SEO Agency",
    heroItalic: "Dominate the National Capital Region with",
    leadDesc: "Scale your Ottawa business with high-precision B2B SEO, government contractor marketing, bilingual funnels, and high-conversion web development.",
    bodyDesc: "From Kanata tech corridor innovators and Downtown corporate firms to Gatineau bilingual commerce and Barrhaven services—Webmok delivers compound digital growth.",
    stats: [
  {
    "num": "380%",
    "label": "Average Ottawa Traffic Growth"
  },
  {
    "num": "5.4x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "50+",
    "label": "Ottawa & Kanata Clients"
  },
  {
    "num": "100%",
    "label": "Bilingual & Compliance Ready"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Ottawa Local & Kanata Tech SEO",
    "desc": "Dominating search results across Downtown Ottawa, Kanata North, Nepean, Orleans, and Gatineau with localized technical search strategies."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-Intent Google Ads & PPC",
    "desc": "Precision search ads, Performance Max funnels, and local service campaigns capturing high-intent government, corporate, and consumer buyers."
  },
  {
    "icon": "FaShareAlt",
    "title": "B2B LinkedIn & Social Advertising",
    "desc": "Targeting government procurement directors, tech executives, and commercial decision-makers across the National Capital Region."
  },
  {
    "icon": "FaPenNib",
    "title": "Bilingual Content & Authority PR",
    "desc": "English and French content hubs and media placements establishing thought leadership in Canada’s capital."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Web Development",
    "desc": "Bilingual, accessible (AODA/WCAG), speed-optimized web architectures built for maximum trust and seamless conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Corporate Video & Media Production",
    "desc": "High-caliber commercial video assets, corporate case studies, and brand animations designed for enterprise engagement."
  }
],
    whyHireOutsideTitle: "Why Ottawa Brands Partner with Webmok",
    whyHireOutsideSubtitle: "CAPITAL VALUE & PRECISION",
    whyHireDesc1: "Ottawa agencies often focus heavily on slow government contracting, resulting in conservative marketing that lacks the agility and aggressiveness needed for commercial growth.",
    whyHireDesc2: "Webmok delivers high-velocity growth marketing, technical search superiority, and transparent performance telemetry tailored for Ottawa’s tech and professional ecosystem.",
    comparisonPoints: [
  {
    "feature": "Agile Sprint Velocity",
    "local": "Slow Traditional Cycles",
    "webmok": "48-Hour High-Velocity Growth Sprints"
  },
  {
    "feature": "Bilingual Execution",
    "local": "Extra Translation Add-Ons",
    "webmok": "Full English/French Capability Included"
  },
  {
    "feature": "Pricing Transparency",
    "local": "C$7,500 – C$14,000 / month",
    "webmok": "From C$1,080 – C$3,980 / month"
  },
  {
    "feature": "Accessibility Compliance",
    "local": "Basic AODA Disclaimers",
    "webmok": "Full WCAG/AODA Accessibility Compliance"
  },
  {
    "feature": "Contract Terms",
    "local": "Rigid Annual Commitments",
    "webmok": "Flexible Month-to-Month Agreements"
  }
],
    resultsTitle: "Ottawa Performance Telemetry",
    resultsSubtitle: "PROVEN CAPITAL OUTCOMES",
    resultsStats: [
  {
    "metric": "50+",
    "label": "Ottawa Brands Scaled Successfully"
  },
  {
    "metric": "C$12M+",
    "label": "Tracked Pipeline Value Generated"
  },
  {
    "metric": "99.1%",
    "label": "Capital Region Client Satisfaction"
  },
  {
    "metric": "24/7",
    "label": "EST Timezone Dedicated Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing in Ottawa",
    marketInsightsSubtitle: "NATIONAL CAPITAL DYNAMICS",
    marketInsights: [
  {
    "title": "Bilingual English/French Requirement",
    "desc": "Serving the Ottawa-Gatineau region requires seamless bilingual navigation, search indexing, and customer communication."
  },
  {
    "title": "Kanata Tech Corridor Innovation",
    "desc": "Kanata is home to over 540 tech companies. B2B software and hardware marketing requires deep technical copy and ABM targeting."
  },
  {
    "title": "High Average Household Income",
    "desc": "Ottawa boasts one of Canada’s highest median incomes. Premium positioning and trust signals significantly improve conversion rates."
  },
  {
    "title": "AODA/WCAG Accessibility Standards",
    "desc": "Ontario businesses must adhere to strict web accessibility standards. We build clean, accessible markup that ranks higher on Google."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Capital Market & SEO Audit",
    "desc": "Evaluating bilingual search volumes, competitor gaps, and technical accessibility."
  },
  {
    "num": "02",
    "title": "Bilingual Funnel Architecture",
    "desc": "Setting up dual-language landing pages, schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Execution",
    "desc": "Deploying high-intent Google Search ads, B2B content hubs, and LinkedIn campaigns."
  },
  {
    "num": "04",
    "title": "CRO & Revenue Telemetry",
    "desc": "Tracking conversion volume, optimizing lead quality, and scaling market share."
  }
],
    industries: [
  {
    "icon": "FaLaptopCode",
    "name": "Kanata Tech & SaaS Innovators",
    "desc": "Driving B2B pipeline, product demos, and ARR growth for Ottawa tech firms."
  },
  {
    "icon": "FaBriefcase",
    "name": "Government Contractors & Consultants",
    "desc": "Positioning defense, IT, and management consulting firms for major RFPs."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Development",
    "desc": "Capturing buyers across Ottawa, Kanata, Orleans, and the Outaouais region."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Medical & Healthcare",
    "desc": "Patient acquisition for dental, medical, and specialized healthcare practices."
  },
  {
    "icon": "FaCompass",
    "name": "Legal & Accounting Practices",
    "desc": "Generating corporate clients and high-value advisory retainers."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Local Commercial & Retail",
    "desc": "Driving store foot traffic and e-commerce sales across the National Capital Region."
  }
],
    plans: [
  {
    "name": "Ottawa Growth Core",
    "badge": "Local Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Ottawa service providers and professional practices looking to capture top Google visibility.",
    "features": [
      "Up to 20 High-Intent Ottawa Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Citations & YellowPages Canada",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated EST Account Director"
    ]
  },
  {
    "name": "Ottawa Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and bilingual content marketing.",
    "features": [
      "Up to 45 Capital Region Keywords",
      "Google Ads (PPC) Campaign Management",
      "Bilingual English/French Landing Pages",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Strategic Live Consultation"
    ]
  },
  {
    "name": "Ottawa Enterprise Monopoly",
    "badge": "Category Leader",
    "usdPrice": "2,899",
    "inrPrice": "2,39,999",
    "desc": "Full-scale market dominance for tech enterprises, government suppliers, and regional networks.",
    "features": [
      "Capital Region & Nationwide Keyword Domination",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom High-Converting Web Redesign",
      "Tier-1 Canadian Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom CRM Integration & Lead Attribution"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok built a bilingual search engine that positioned our IT consultancy at the top of Google for federal contractor keywords.",
    "author": "Jean-Luc D.",
    "role": "Managing Director",
    "company": "Ottawa Enterprise IT Solutions",
    "rating": 5
  },
  {
    "quote": "Our Kanata SaaS platform saw a 310% increase in qualified demo requests within 4 months of launching our Google Ads and SEO sprints.",
    "author": "Karen W.",
    "role": "VP of Marketing",
    "company": "Kanata Cloud Tech Platform",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Can Webmok build bilingual marketing campaigns for Ottawa and Gatineau?",
    "a": "Yes! We craft complete dual-language funnels in English and French, ensuring compliance with federal standards and Quebec language regulations."
  },
  {
    "q": "How do you target Kanata technology and B2B buyers?",
    "a": "We use Account-Based Marketing (ABM) on LinkedIn and high-intent commercial Google Search ads to reach C-suite and technical decision-makers directly."
  },
  {
    "q": "Are your websites compliant with AODA and WCAG accessibility standards?",
    "a": "Yes, 100%. We ensure all web assets meet Ontario AODA and WCAG 2.1 AA accessibility guidelines."
  },
  {
    "q": "What is the contract term?",
    "a": "All our Ottawa digital marketing packages operate on flexible month-to-month agreements with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-ottawa-page-root">
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
      <nav className="wm-intl-ottawa-inpage-nav">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-inpage-nav-inner">
            <a href="#overview" className="wm-intl-ottawa-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-ottawa-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-ottawa-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-ottawa-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-ottawa-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-ottawa-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-ottawa-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-ottawa-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-ottawa-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-ottawa-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-ottawa-services-section" id="services">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-ottawa-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-ottawa-service-card">
                <div className="wm-intl-ottawa-svc-card-glow"></div>
                <div className="wm-intl-ottawa-svc-card-top">
                  <div className="wm-intl-ottawa-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-ottawa-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-ottawa-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-ottawa-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-ottawa-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-ottawa-whyoutside-section" id="why-us">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-whyoutside-grid">
            <div className="wm-intl-ottawa-whyoutside-text">
              <span className="wm-intl-ottawa-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-ottawa-compare-table">
              <div className="wm-intl-ottawa-compare-row wm-intl-ottawa-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-ottawa-compare-row">
                  <div className="wm-intl-ottawa-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-ottawa-compare-local">{cp.local}</div>
                  <div className="wm-intl-ottawa-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-ottawa-results-section" id="results">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-ottawa-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-ottawa-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-ottawa-market-section" id="market-dynamics">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-ottawa-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-ottawa-market-card">
                <div className="wm-intl-ottawa-market-card-glow"></div>
                <div className="wm-intl-ottawa-market-card-hdr">
                  <div className="wm-intl-ottawa-market-badge-wrap">
                    <span className="wm-intl-ottawa-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-ottawa-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-ottawa-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-ottawa-process-section" id="process">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-ottawa-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-ottawa-process-card">
                <div className="wm-intl-ottawa-proc-card-glow"></div>
                <div className="wm-intl-ottawa-proc-header-row">
                  <span className="wm-intl-ottawa-proc-num">0{i + 1}</span>
                  <div className="wm-intl-ottawa-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-ottawa-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-ottawa-industries-section" id="industries">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-ottawa-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-ottawa-industry-card">
                <div className="wm-intl-ottawa-ind-card-top">
                  <div className="wm-intl-ottawa-ind-icon">
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
                  <span className="wm-intl-ottawa-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-ottawa-pricing-section" id="pricing-plans">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-ottawa-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-ottawa-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"CAD","symbol":"C$","rate":1.36},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-ottawa-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-ottawa-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-ottawa-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-ottawa-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-ottawa-card-top">
                    {plan.badge && <span className="wm-intl-ottawa-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-ottawa-card-name">{plan.name}</h3>
                    <p className="wm-intl-ottawa-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-ottawa-card-pricing">
                    <div className="wm-intl-ottawa-price-row">
                      <span className="wm-intl-ottawa-price-val">{displayPrice}</span>
                      <span className="wm-intl-ottawa-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-ottawa-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-ottawa-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-ottawa-card-action">
                    <button
                      type="button"
                      className="wm-intl-ottawa-select-btn"
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
      <section className="wm-intl-ottawa-testimonials-section" id="testimonials">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-ottawa-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-ottawa-testimonial-card">
                <div className="wm-intl-ottawa-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-ottawa-t-quote">"{t.quote}"</p>
                <div className="wm-intl-ottawa-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-ottawa-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-ottawa-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-advantage-grid">
            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-adv-glow"></div>
              <div className="wm-intl-ottawa-adv-top">
                <div className="wm-intl-ottawa-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-ottawa-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-ottawa-adv-check-row">
                <FaCheck className="wm-intl-ottawa-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-adv-glow"></div>
              <div className="wm-intl-ottawa-adv-top">
                <div className="wm-intl-ottawa-aicon"><FaRocket /></div>
                <span className="wm-intl-ottawa-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-ottawa-adv-check-row">
                <FaCheck className="wm-intl-ottawa-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-adv-glow"></div>
              <div className="wm-intl-ottawa-adv-top">
                <div className="wm-intl-ottawa-aicon"><FaHeadset /></div>
                <span className="wm-intl-ottawa-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-ottawa-adv-check-row">
                <FaCheck className="wm-intl-ottawa-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-ottawa-advantage-card">
              <div className="wm-intl-ottawa-adv-glow"></div>
              <div className="wm-intl-ottawa-adv-top">
                <div className="wm-intl-ottawa-aicon"><FaClock /></div>
                <span className="wm-intl-ottawa-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-ottawa-adv-check-row">
                <FaCheck className="wm-intl-ottawa-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-ottawa-faqs-section" id="faqs">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-sec-heading-center">
            <span className="wm-intl-ottawa-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-ottawa-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-ottawa-sec-bar-center"></div>
          </div>

          <div className="wm-intl-ottawa-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-ottawa-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-ottawa-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-ottawa-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-ottawa-bottom-banner">
        <div className="wm-intl-ottawa-container">
          <div className="wm-intl-ottawa-banner-inner">
            <div className="wm-intl-ottawa-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-ottawa-banner-btns">
              <button
                type="button"
                className="wm-intl-ottawa-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-ottawa-bbtn-quote"
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

export default OttawaDigitalMarketingPage;

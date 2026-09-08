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
import './TorontoDigitalMarketingPage.css';

const TorontoDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('CAD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Toronto Digital Marketing Agency",
    city: "Toronto",
    region: "Greater Toronto Area (GTA), Ontario, Canada",
    tagline: "PREMIER GTA GROWTH AGENCY · TORONTO, CANADA",
    heroHighlight: "Toronto Digital Marketing & SEO Agency",
    heroItalic: "Accelerate GTA Market Dominance with",
    leadDesc: "Dominate the Greater Toronto Area with high-velocity SEO, precision Google Ads, and conversion-focused web architecture built for Canada’s economic engine.",
    bodyDesc: "From Bay Street financial services and Downtown tech startups to Mississauga commerce, Vaughan retail, and Markham tech corridors—Webmok scales Toronto brands.",
    stats: [
  {
    "num": "430%",
    "label": "Average GTA Traffic Growth"
  },
  {
    "num": "5.7x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "65+",
    "label": "Toronto & GTA Clients"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Toronto & GTA Local SEO",
    "desc": "Dominating Google Maps 3-Pack and organic rankings across Downtown Toronto, North York, Mississauga, Markham, and Vaughan."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-Intent Google Ads (PPC)",
    "desc": "Precision search funnels, Performance Max campaigns, and Local Services Ads designed to capture high-value Toronto commercial intent."
  },
  {
    "icon": "FaShareAlt",
    "title": "Targeted Paid Social (Meta & LinkedIn)",
    "desc": "B2B LinkedIn campaigns targeting Bay Street decision-makers and high-converting Meta ads engaging GTA consumers."
  },
  {
    "icon": "FaPenNib",
    "title": "Topical Authority Content & PR",
    "desc": "Authoritative content hubs, Toronto business citations, and editorial PR outreach establishing market leadership."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Web Architecture",
    "desc": "Speed-optimized React, Webflow, and WordPress websites built for sub-second load times and maximum lead conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & Creative Production",
    "desc": "Studio-grade commercial video ads, brand storytelling, and social reels tailored for the Greater Toronto market."
  }
],
    whyHireOutsideTitle: "Why Toronto Brands Choose Webmok",
    whyHireOutsideSubtitle: "THE GTA ADVANTAGE",
    whyHireDesc1: "Toronto agencies on King West and Bay Street carry massive downtown overhead, charging C$8,000–C$18,000/month while treating mid-market accounts as secondary priorities.",
    whyHireDesc2: "Webmok provides dedicated senior growth engineers, EST timezone alignment, and rapid sprint cycles at a high-ROI, value-driven investment.",
    comparisonPoints: [
  {
    "feature": "Senior Account Attention",
    "local": "Junior Account Managers",
    "webmok": "Dedicated Senior Growth Directors"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "C$8,000 – C$18,000 / month",
    "webmok": "From C$1,080 – C$4,080 / month"
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
    resultsTitle: "GTA Performance Telemetry",
    resultsSubtitle: "VERIFIABLE RESULTS",
    resultsStats: [
  {
    "metric": "65+",
    "label": "GTA Brands Scaled to Page 1"
  },
  {
    "metric": "C$16M+",
    "label": "Tracked Pipeline Revenue Generated"
  },
  {
    "metric": "99.4%",
    "label": "Toronto Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "EST Timezone Direct Support"
  }
],
    marketInsightsTitle: "What We Know About Selling in the GTA",
    marketInsightsSubtitle: "TORONTO DYNAMICS",
    marketInsights: [
  {
    "title": "Intense Local Search Competition",
    "desc": "Toronto is Canada’s most competitive digital landscape. Ranking on Google Maps requires precise micro-citations across GTA municipalities."
  },
  {
    "title": "Diverse Demographic Micro-Markets",
    "desc": "Marketing across York Region, Peel Region, and Downtown Toronto requires culturally aware, tailored messaging and segmentation."
  },
  {
    "title": "B2B Procurement Cycles in the Financial District",
    "desc": "Bay Street corporate buyers conduct extensive digital due diligence. Dense topical authority and case study proof are essential to close deals."
  },
  {
    "title": "Mobile-First Inbound Call Conversion",
    "desc": "Over 80% of local Toronto service searches happen on mobile devices. We build instant click-to-call mobile landing pages with zero friction."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "GTA Market & Competitor Audit",
    "desc": "Analyzing search intent and competitor positioning across Toronto, Mississauga, and Markham."
  },
  {
    "num": "02",
    "title": "Hyper-Local Search Architecture",
    "desc": "Building multi-municipality landing pages, localized schema markup, and Google Business Profiles."
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
    "desc": "Capturing corporate clients, wealth management leads, and B2B finance contracts."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Condo Development",
    "desc": "Dominating buyer acquisition for pre-construction condos and luxury homes in the GTA."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Medical & Dental Clinics",
    "desc": "Patient acquisition for cosmetic surgery, dental clinics, and wellness centers across Toronto."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Tech Startups & B2B SaaS",
    "desc": "Driving ARR growth and user signups in the Toronto-Waterloo innovation corridor."
  },
  {
    "icon": "FaCompass",
    "name": "Legal & Professional Practices",
    "desc": "Generating high-value litigation cases and corporate advisory retainers."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Retail & Multi-Location Chains",
    "desc": "Driving store foot traffic and e-commerce revenue across the Greater Toronto Area."
  }
],
    plans: [
  {
    "name": "Toronto Growth Core",
    "badge": "Local Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Toronto and GTA businesses establishing dominant Google Maps and search visibility.",
    "features": [
      "Up to 20 High-Intent Toronto Keywords",
      "Google Business Profile GTA Optimization",
      "Local Citations & YellowPages Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated EST Account Director"
    ]
  },
  {
    "name": "Toronto Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-City GTA Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-Municipality Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "Toronto Enterprise Monopoly",
    "badge": "Category Leader",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale market dominance for GTA enterprises, multi-location franchises, and high-growth brands.",
    "features": [
      "GTA & Nationwide Keyword Domination",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke High-Converting Web Redesign",
      "Tier-1 Canadian Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok put our commercial brokerage at the top of Google for competitive Toronto search terms. Our qualified deal pipeline grew by 240%.",
    "author": "Alexander K.",
    "role": "Principal Broker",
    "company": "Toronto Commercial Realty Group",
    "rating": 5
  },
  {
    "quote": "Their PPC and SEO team reduced our cost per qualified demo by 40% while doubling our monthly inbound lead volume.",
    "author": "Natalie S.",
    "role": "VP of Marketing",
    "company": "Toronto B2B FinTech Platform",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a Toronto business choose Webmok over local downtown agencies?",
    "a": "Webmok delivers senior-level agency execution at an agile, value-driven price point without bloated downtown overhead. You work directly with dedicated EST-timezone directors focused on measurable pipeline revenue."
  },
  {
    "q": "How fast can our Toronto business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate leads within 14 to 30 days. Broad organic SEO keywords achieve page #1 breakthroughs in 60 to 90 days as domain equity compounds."
  },
  {
    "q": "Can you target multiple GTA municipalities (e.g. Mississauga, Markham, Vaughan, Oakville)?",
    "a": "Yes! We build dedicated multi-location SEO architectures tailored to each specific municipality and commercial district across the GTA."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Toronto digital marketing packages are flexible month-to-month agreements."
  }
]
  };

  return (
    <div className="wm-intl-toronto-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-toronto-hero-section" id="overview">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-hero-grid">
            <div className="wm-intl-toronto-hero-left">
              <span className="wm-intl-toronto-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-toronto-hero-title-dual">
                <span className="wm-intl-toronto-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-toronto-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-toronto-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-toronto-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-toronto-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-toronto-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-toronto-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-toronto-hero-right-trust">
              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-clutch">C</div>
              </div>

              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-upwork">up</div>
              </div>

              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-toronto-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-toronto-trust-card">
                <div className="wm-intl-toronto-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-toronto-tcard-badge wm-intl-toronto-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-toronto-inpage-nav">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-inpage-nav-inner">
            <a href="#overview" className="wm-intl-toronto-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-toronto-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-toronto-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-toronto-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-toronto-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-toronto-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-toronto-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-toronto-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-toronto-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-toronto-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-toronto-stats-strip">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-toronto-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-toronto-services-section" id="services">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-toronto-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-toronto-service-card">
                <div className="wm-intl-toronto-svc-card-glow"></div>
                <div className="wm-intl-toronto-svc-card-top">
                  <div className="wm-intl-toronto-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-toronto-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-toronto-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-toronto-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-toronto-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-toronto-whyoutside-section" id="why-us">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-whyoutside-grid">
            <div className="wm-intl-toronto-whyoutside-text">
              <span className="wm-intl-toronto-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-toronto-compare-table">
              <div className="wm-intl-toronto-compare-row wm-intl-toronto-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-toronto-compare-row">
                  <div className="wm-intl-toronto-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-toronto-compare-local">{cp.local}</div>
                  <div className="wm-intl-toronto-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-toronto-results-section" id="results">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-toronto-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-toronto-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-toronto-market-section" id="market-dynamics">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-toronto-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-toronto-market-card">
                <div className="wm-intl-toronto-market-card-glow"></div>
                <div className="wm-intl-toronto-market-card-hdr">
                  <div className="wm-intl-toronto-market-badge-wrap">
                    <span className="wm-intl-toronto-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-toronto-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-toronto-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-toronto-process-section" id="process">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-toronto-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-toronto-process-card">
                <div className="wm-intl-toronto-proc-card-glow"></div>
                <div className="wm-intl-toronto-proc-header-row">
                  <span className="wm-intl-toronto-proc-num">0{i + 1}</span>
                  <div className="wm-intl-toronto-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-toronto-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-toronto-industries-section" id="industries">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-toronto-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-toronto-industry-card">
                <div className="wm-intl-toronto-ind-card-top">
                  <div className="wm-intl-toronto-ind-icon">
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
                  <span className="wm-intl-toronto-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-toronto-pricing-section" id="pricing-plans">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-toronto-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-toronto-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"CAD","symbol":"C$","rate":1.36},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-toronto-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-toronto-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-toronto-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-toronto-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-toronto-card-top">
                    {plan.badge && <span className="wm-intl-toronto-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-toronto-card-name">{plan.name}</h3>
                    <p className="wm-intl-toronto-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-toronto-card-pricing">
                    <div className="wm-intl-toronto-price-row">
                      <span className="wm-intl-toronto-price-val">{displayPrice}</span>
                      <span className="wm-intl-toronto-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-toronto-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-toronto-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-toronto-card-action">
                    <button
                      type="button"
                      className="wm-intl-toronto-select-btn"
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
      <section className="wm-intl-toronto-testimonials-section" id="testimonials">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-toronto-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-toronto-testimonial-card">
                <div className="wm-intl-toronto-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-toronto-t-quote">"{t.quote}"</p>
                <div className="wm-intl-toronto-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-toronto-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-toronto-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-advantage-grid">
            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-adv-glow"></div>
              <div className="wm-intl-toronto-adv-top">
                <div className="wm-intl-toronto-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-toronto-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-toronto-adv-check-row">
                <FaCheck className="wm-intl-toronto-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-adv-glow"></div>
              <div className="wm-intl-toronto-adv-top">
                <div className="wm-intl-toronto-aicon"><FaRocket /></div>
                <span className="wm-intl-toronto-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-toronto-adv-check-row">
                <FaCheck className="wm-intl-toronto-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-adv-glow"></div>
              <div className="wm-intl-toronto-adv-top">
                <div className="wm-intl-toronto-aicon"><FaHeadset /></div>
                <span className="wm-intl-toronto-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-toronto-adv-check-row">
                <FaCheck className="wm-intl-toronto-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-toronto-advantage-card">
              <div className="wm-intl-toronto-adv-glow"></div>
              <div className="wm-intl-toronto-adv-top">
                <div className="wm-intl-toronto-aicon"><FaClock /></div>
                <span className="wm-intl-toronto-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-toronto-adv-check-row">
                <FaCheck className="wm-intl-toronto-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-toronto-faqs-section" id="faqs">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-sec-heading-center">
            <span className="wm-intl-toronto-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-toronto-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-toronto-sec-bar-center"></div>
          </div>

          <div className="wm-intl-toronto-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-toronto-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-toronto-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-toronto-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-toronto-bottom-banner">
        <div className="wm-intl-toronto-container">
          <div className="wm-intl-toronto-banner-inner">
            <div className="wm-intl-toronto-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-toronto-banner-btns">
              <button
                type="button"
                className="wm-intl-toronto-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-toronto-bbtn-quote"
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

export default TorontoDigitalMarketingPage;

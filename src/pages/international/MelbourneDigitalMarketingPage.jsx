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
import './MelbourneDigitalMarketingPage.css';

const MelbourneDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('AUD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Melbourne Digital Marketing Agency",
    city: "Melbourne",
    region: "Melbourne & Victoria, Australia",
    tagline: "PREMIER MELBOURNE DIGITAL AGENCY · VICTORIA, AUSTRALIA",
    heroHighlight: "Melbourne Digital Marketing & SEO Agency",
    heroItalic: "Accelerate Victorian Market Dominance with",
    leadDesc: "Scale your Melbourne business with high-velocity local SEO, precision Google Ads, and conversion-focused web architecture built for Australia’s cultural and commercial capital.",
    bodyDesc: "From Melbourne CBD finance and South Yarra retail to Richmond creative agencies, Fitzroy innovators, and Docklands commerce—Webmok scales Victorian brands.",
    stats: [
  {
    "num": "440%",
    "label": "Average Melbourne Traffic Growth"
  },
  {
    "num": "6.0x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "65+",
    "label": "Melbourne Brands Scaled"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Melbourne Local & Victorian SEO",
    "desc": "Dominating Google Maps 3-Pack and organic rankings across Melbourne CBD, South Yarra, Richmond, St Kilda, and Eastern Suburbs."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads (PPC)",
    "desc": "Precision search funnels, Performance Max campaigns, and Local Services Ads designed to capture high-value Melbourne commercial intent."
  },
  {
    "icon": "FaShareAlt",
    "title": "Targeted Paid Social (Meta & TikTok)",
    "desc": "High-impact creative production, UGC integration, and algorithmic ad scaling across TikTok, Instagram, and LinkedIn."
  },
  {
    "icon": "FaPenNib",
    "title": "Topical Authority Content & PR",
    "desc": "Authoritative content hubs, Melbourne business citations, and editorial PR outreach establishing market leadership."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Web Architecture",
    "desc": "Speed-optimized React, Webflow, and WordPress websites built for sub-second load times, Core Web Vitals, and frictionless conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & Creative Media",
    "desc": "Studio-grade video production and commercial creative assets crafted specifically for Melbourne consumer and corporate audiences."
  }
],
    whyHireOutsideTitle: "Why Melbourne Brands Choose Webmok",
    whyHireOutsideSubtitle: "THE MELBOURNE ADVANTAGE",
    whyHireDesc1: "Melbourne agencies on Collins Street and Southbank carry massive CBD overhead, charging A$9,000–A$20,000/month while treating mid-market accounts as secondary priorities.",
    whyHireDesc2: "Webmok provides dedicated senior growth engineers, AEST timezone alignment, and rapid sprint cycles at a high-ROI, value-driven investment.",
    comparisonPoints: [
  {
    "feature": "Senior Account Attention",
    "local": "Junior Account Managers",
    "webmok": "Dedicated Senior Growth Directors"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "A$9,000 – A$20,000 / month",
    "webmok": "From A$1,200 – A$4,560 / month"
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
    resultsTitle: "Melbourne Performance Telemetry",
    resultsSubtitle: "VERIFIABLE RESULTS",
    resultsStats: [
  {
    "metric": "65+",
    "label": "Melbourne Brands Scaled to Page 1"
  },
  {
    "metric": "A$17M+",
    "label": "Tracked Pipeline Revenue Generated"
  },
  {
    "metric": "99.5%",
    "label": "Melbourne Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "AEST Timezone Direct Support"
  }
],
    marketInsightsTitle: "What We Know About Selling in Melbourne",
    marketInsightsSubtitle: "MELBOURNE DYNAMICS",
    marketInsights: [
  {
    "title": "Design & Brand Authenticity Standards",
    "desc": "Melbourne consumers value design sophistication and authenticity. Clean, modern web aesthetics significantly improve conversion rates."
  },
  {
    "title": "Suburb-Specific Search Signals",
    "desc": "Ranking on Google Maps in South Yarra versus Fitzroy or Brighton requires localized geo-citations and suburb-level schema markup."
  },
  {
    "title": "Thriving Retail & Hospitality Hub",
    "desc": "Melbourne is Australia’s culinary and boutique retail capital. We build high-converting e-commerce and local foot-traffic funnels."
  },
  {
    "title": "Mobile-First Inbound Call Conversion",
    "desc": "Over 80% of local Melbourne service searches happen on mobile devices. We build instant click-to-call mobile landing pages with zero friction."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Melbourne Market & Competitor Audit",
    "desc": "Analyzing search intent and competitor positioning across Melbourne CBD and suburban hubs."
  },
  {
    "num": "02",
    "title": "Hyper-Local Search Architecture",
    "desc": "Building multi-suburb landing pages, localized schema markup, and Google Business Profiles."
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
    "name": "Financial & Professional Services",
    "desc": "Capturing corporate clients, wealth management leads, and legal retainers in Melbourne CBD."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Property Development",
    "desc": "Dominating buyer acquisition for luxury homes and residential developments in Victoria."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Medical & Dental Clinics",
    "desc": "Patient acquisition for cosmetic surgery, dental clinics, and wellness centers across Melbourne."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Boutique Fashion & E-Commerce",
    "desc": "Scaling Shopify and custom storefronts with profitable Google Shopping and TikTok ads."
  },
  {
    "icon": "FaUtensils",
    "name": "Hospitality, Cafes & Fine Dining",
    "desc": "Driving reservations and viral buzz for premier Melbourne culinary establishments."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Tech Startups & B2B SaaS",
    "desc": "Driving ARR growth and user signups in Melbourne’s growing technology ecosystem."
  }
],
    plans: [
  {
    "name": "Melbourne Growth Core",
    "badge": "Suburb Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Melbourne businesses establishing dominant Google Maps and search visibility.",
    "features": [
      "Up to 20 High-Intent Melbourne Keywords",
      "Google Business Profile Melbourne Optimization",
      "Local Citations & TrueLocal Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated AEST Account Director"
    ]
  },
  {
    "name": "Melbourne Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-Suburb Melbourne Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-Suburb Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "Melbourne Enterprise Monopoly",
    "badge": "Category Leader",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale market dominance for Melbourne enterprises, multi-location franchises, and high-growth brands.",
    "features": [
      "Melbourne & Victorian Keyword Domination",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bespoke High-Converting Web Redesign",
      "Tier-1 Australian Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok put our commercial firm at the top of Google for competitive Melbourne search terms. Our qualified deal pipeline grew by 270%.",
    "author": "Liam C.",
    "role": "Director",
    "company": "Melbourne Commercial Advisory Group",
    "rating": 5
  },
  {
    "quote": "Our medical practice in South Yarra now ranks in the top 3 on Google Maps across all primary treatment keywords.",
    "author": "Dr. Rebecca H.",
    "role": "Medical Director",
    "company": "South Yarra Health Center",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a Melbourne business choose Webmok over local Collins Street agencies?",
    "a": "Webmok delivers senior-level agency execution without bloated Melbourne CBD overhead. You work directly with dedicated AEST-timezone directors focused on measurable pipeline revenue."
  },
  {
    "q": "How fast can our Melbourne business expect to rank on page 1 of Google?",
    "a": "Google Maps optimizations and high-intent PPC campaigns generate leads within 14 to 30 days. Broad organic SEO keywords achieve page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Can you target specific Melbourne suburbs (e.g. South Yarra, Richmond, Fitzroy, Brighton)?",
    "a": "Yes! We build dedicated multi-location SEO architectures tailored to each specific suburb and high-value Victorian territory."
  },
  {
    "q": "Are there any long-term contract lock-ins?",
    "a": "Zero mandatory lock-in. All our Melbourne digital marketing packages operate on flexible month-to-month agreements."
  }
]
  };

  return (
    <div className="wm-intl-melbourne-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-melbourne-hero-section" id="overview">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-hero-grid">
            <div className="wm-intl-melbourne-hero-left">
              <span className="wm-intl-melbourne-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-melbourne-hero-title-dual">
                <span className="wm-intl-melbourne-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-melbourne-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-melbourne-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-melbourne-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-melbourne-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-melbourne-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-melbourne-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-melbourne-hero-right-trust">
              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-clutch">C</div>
              </div>

              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-upwork">up</div>
              </div>

              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-melbourne-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-melbourne-trust-card">
                <div className="wm-intl-melbourne-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-melbourne-tcard-badge wm-intl-melbourne-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-melbourne-inpage-nav">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-inpage-nav-inner">
            <a href="#overview" className="wm-intl-melbourne-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-melbourne-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-melbourne-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-melbourne-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-melbourne-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-melbourne-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-melbourne-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-melbourne-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-melbourne-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-melbourne-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-melbourne-stats-strip">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-melbourne-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-melbourne-services-section" id="services">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-melbourne-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-melbourne-service-card">
                <div className="wm-intl-melbourne-svc-card-glow"></div>
                <div className="wm-intl-melbourne-svc-card-top">
                  <div className="wm-intl-melbourne-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-melbourne-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-melbourne-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-melbourne-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-melbourne-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-melbourne-whyoutside-section" id="why-us">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-whyoutside-grid">
            <div className="wm-intl-melbourne-whyoutside-text">
              <span className="wm-intl-melbourne-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-melbourne-compare-table">
              <div className="wm-intl-melbourne-compare-row wm-intl-melbourne-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-melbourne-compare-row">
                  <div className="wm-intl-melbourne-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-melbourne-compare-local">{cp.local}</div>
                  <div className="wm-intl-melbourne-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-melbourne-results-section" id="results">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-melbourne-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-melbourne-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-melbourne-market-section" id="market-dynamics">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-melbourne-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-melbourne-market-card">
                <div className="wm-intl-melbourne-market-card-glow"></div>
                <div className="wm-intl-melbourne-market-card-hdr">
                  <div className="wm-intl-melbourne-market-badge-wrap">
                    <span className="wm-intl-melbourne-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-melbourne-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-melbourne-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-melbourne-process-section" id="process">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-melbourne-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-melbourne-process-card">
                <div className="wm-intl-melbourne-proc-card-glow"></div>
                <div className="wm-intl-melbourne-proc-header-row">
                  <span className="wm-intl-melbourne-proc-num">0{i + 1}</span>
                  <div className="wm-intl-melbourne-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-melbourne-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-melbourne-industries-section" id="industries">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-melbourne-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-melbourne-industry-card">
                <div className="wm-intl-melbourne-ind-card-top">
                  <div className="wm-intl-melbourne-ind-icon">
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
                  <span className="wm-intl-melbourne-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-melbourne-pricing-section" id="pricing-plans">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-melbourne-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-melbourne-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"AUD","symbol":"A$","rate":1.52},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-melbourne-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-melbourne-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-melbourne-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-melbourne-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-melbourne-card-top">
                    {plan.badge && <span className="wm-intl-melbourne-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-melbourne-card-name">{plan.name}</h3>
                    <p className="wm-intl-melbourne-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-melbourne-card-pricing">
                    <div className="wm-intl-melbourne-price-row">
                      <span className="wm-intl-melbourne-price-val">{displayPrice}</span>
                      <span className="wm-intl-melbourne-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-melbourne-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-melbourne-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-melbourne-card-action">
                    <button
                      type="button"
                      className="wm-intl-melbourne-select-btn"
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
      <section className="wm-intl-melbourne-testimonials-section" id="testimonials">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-melbourne-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-melbourne-testimonial-card">
                <div className="wm-intl-melbourne-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-melbourne-t-quote">"{t.quote}"</p>
                <div className="wm-intl-melbourne-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-melbourne-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-melbourne-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-advantage-grid">
            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-adv-glow"></div>
              <div className="wm-intl-melbourne-adv-top">
                <div className="wm-intl-melbourne-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-melbourne-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-melbourne-adv-check-row">
                <FaCheck className="wm-intl-melbourne-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-adv-glow"></div>
              <div className="wm-intl-melbourne-adv-top">
                <div className="wm-intl-melbourne-aicon"><FaRocket /></div>
                <span className="wm-intl-melbourne-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-melbourne-adv-check-row">
                <FaCheck className="wm-intl-melbourne-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-adv-glow"></div>
              <div className="wm-intl-melbourne-adv-top">
                <div className="wm-intl-melbourne-aicon"><FaHeadset /></div>
                <span className="wm-intl-melbourne-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-melbourne-adv-check-row">
                <FaCheck className="wm-intl-melbourne-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-melbourne-advantage-card">
              <div className="wm-intl-melbourne-adv-glow"></div>
              <div className="wm-intl-melbourne-adv-top">
                <div className="wm-intl-melbourne-aicon"><FaClock /></div>
                <span className="wm-intl-melbourne-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-melbourne-adv-check-row">
                <FaCheck className="wm-intl-melbourne-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-melbourne-faqs-section" id="faqs">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-sec-heading-center">
            <span className="wm-intl-melbourne-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-melbourne-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-melbourne-sec-bar-center"></div>
          </div>

          <div className="wm-intl-melbourne-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-melbourne-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-melbourne-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-melbourne-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-melbourne-bottom-banner">
        <div className="wm-intl-melbourne-container">
          <div className="wm-intl-melbourne-banner-inner">
            <div className="wm-intl-melbourne-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-melbourne-banner-btns">
              <button
                type="button"
                className="wm-intl-melbourne-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-melbourne-bbtn-quote"
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

export default MelbourneDigitalMarketingPage;

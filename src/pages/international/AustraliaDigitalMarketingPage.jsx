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
  FaCompass
} from 'react-icons/fa';
import './AustraliaDigitalMarketingPage.css';

const AustraliaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('AUD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Australia Digital Marketing Agency",
    city: "Australia",
    region: "Australia Nationwide",
    tagline: "NATIONAL DIGITAL MARKETING AGENCY · AUSTRALIA",
    heroHighlight: "Australia Digital Marketing & SEO Agency",
    heroItalic: "Accelerate Nationwide Australian Growth with",
    leadDesc: "Scale across Sydney, Melbourne, Brisbane, Perth, and Adelaide with high-velocity Australian SEO, precision Google Ads, and high-conversion web development.",
    bodyDesc: "We help Australian businesses build dominant digital pipelines, rank #1 on Google.com.au, and capture high-intent commercial buyers throughout the country.",
    stats: [
  {
    "num": "430%",
    "label": "Average Australia Traffic Growth"
  },
  {
    "num": "5.8x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "100+",
    "label": "Australian Brands Scaled"
  },
  {
    "num": "100%",
    "label": "Privacy Act 1988 Compliant"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Australian National & State SEO",
    "desc": "Dominating Google.com.au search results across NSW, Victoria, Queensland, and WA with technical SEO and Australian citation networks."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads (PPC)",
    "desc": "Precision search funnels, Performance Max campaigns, and Google Shopping optimization designed for Australian consumer purchasing habits."
  },
  {
    "icon": "FaShareAlt",
    "title": "Paid Social Advertising (Meta & TikTok)",
    "desc": "Hyper-targeted Meta, TikTok, and LinkedIn campaigns engaging Australian consumers and business decision-makers."
  },
  {
    "icon": "FaPenNib",
    "title": "Australian Digital PR & Content",
    "desc": "Building national authority with localized content hubs, Australian business citations, and editorial outreach to prominent Australian media."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Speed Web Architecture",
    "desc": "Speed-optimized, mobile-first websites built for sub-second load times, Core Web Vitals excellence, and maximum conversion rates."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & Creative Production",
    "desc": "Studio-grade video ads, lifestyle storytelling, and commercial creative assets crafted specifically for Australian audiences."
  }
],
    whyHireOutsideTitle: "The Australian Growth Advantage with Webmok",
    whyHireOutsideSubtitle: "SYDNEY & MELBOURNE QUALITY · AGILE VALUE",
    whyHireDesc1: "Australian agencies in Sydney and Melbourne carry massive CBD overhead, charging A$9,000–A$22,000/month while operating with slow turnaround times and rigid long-term contracts.",
    whyHireDesc2: "Webmok provides dedicated senior growth engineers, AEST timezone alignment, and rapid sprint cycles at a high-ROI, value-driven investment.",
    comparisonPoints: [
  {
    "feature": "Senior Account Attention",
    "local": "Junior Account Managers",
    "webmok": "Dedicated Senior Growth Directors"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "A$9,000 – A$22,000 / month",
    "webmok": "From A$1,200 – A$4,560 / month (High ROI)"
  },
  {
    "feature": "Contract Commitment",
    "local": "Mandatory 6-12 Month Lock-In",
    "webmok": "100% Flexible Month-to-Month"
  },
  {
    "feature": "Sprint Turnaround",
    "local": "Slow 2-3 Week Cycles",
    "webmok": "48-72 Hour Agile Sprint Cycles"
  },
  {
    "feature": "Data & Telemetry",
    "local": "Generic PDF Monthly Summaries",
    "webmok": "Live 24/7 Real-Time Revenue Dashboards"
  }
],
    resultsTitle: "Australian Performance Telemetry",
    resultsSubtitle: "VERIFIABLE AUSTRALIAN RESULTS",
    resultsStats: [
  {
    "metric": "100+",
    "label": "Australian Brands Scaled to Page 1"
  },
  {
    "metric": "A$26M+",
    "label": "Tracked Pipeline Revenue Generated"
  },
  {
    "metric": "99.4%",
    "label": "Australian Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "AEST Timezone Strategic Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing in Australia",
    marketInsightsSubtitle: "AUSTRALIAN DYNAMICS",
    marketInsights: [
  {
    "title": "High Smartphone & Mobile Search Adoption",
    "desc": "Over 78% of Australian consumer searches happen on mobile devices. Fast click-to-call mobile landing pages convert 45% higher."
  },
  {
    "title": "Distinct State & City Demographics",
    "desc": "Sydney leads in financial services, Melbourne in retail/culture, Brisbane in lifestyle/property, and Perth in resources and engineering."
  },
  {
    "title": "Strict Australian Privacy Principles (APP)",
    "desc": "We implement compliant opt-in systems and privacy architectures adhering to the Privacy Act 1988 and Spam Act 2003."
  },
  {
    "title": "High Search Intent on Google.com.au",
    "desc": "Capturing Australian searchers requires localized .com.au domain signals, Australian directory citations, and localized schema markup."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Australian Search & Market Audit",
    "desc": "Analyzing search volume and competitor penetration across Sydney, Melbourne, and Brisbane."
  },
  {
    "num": "02",
    "title": "National Search Architecture",
    "desc": "Configuring multi-state landing pages, Australian schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Campaign Launch",
    "desc": "Deploying high-intent Google Ads, Australian digital PR outreach, and targeted social campaigns."
  },
  {
    "num": "04",
    "title": "CRO & Revenue Attribution",
    "desc": "Optimizing conversion funnels, tracking pipeline ROI, and scaling Australian market share."
  }
],
    industries: [
  {
    "icon": "FaBriefcase",
    "name": "Financial, Mining & Corporate Services",
    "desc": "Capturing corporate clients, institutional investors, and B2B engineering contracts."
  },
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Property Development",
    "desc": "Dominating buyer acquisition for luxury homes and commercial developments across Australia."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Medical & Healthcare",
    "desc": "Patient acquisition for dental, medical, and specialized healthcare practices."
  },
  {
    "icon": "FaShoppingCart",
    "name": "E-Commerce & National Retail",
    "desc": "Scaling Shopify and custom storefronts with profitable Google Shopping and Meta ads."
  },
  {
    "icon": "FaUtensils",
    "name": "Tourism & Hospitality",
    "desc": "Driving domestic and international tourist bookings across premier Australian destinations."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Tech Startups & B2B SaaS",
    "desc": "Driving ARR growth and corporate demo requests across Sydney and Melbourne tech hubs."
  }
],
    plans: [
  {
    "name": "Australia Growth Core",
    "badge": "City Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Australian businesses establishing dominant visibility in a specific capital city market.",
    "features": [
      "Up to 20 High-Intent Australian Keywords",
      "Google Business Profile Geo-Optimization",
      "Australian Citations & TrueLocal Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated AEST Account Director"
    ]
  },
  {
    "name": "Australia Multi-State",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-city campaign combining national Australian SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-State Australian Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "Australia National Monopoly",
    "badge": "National Dominance",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale nationwide market takeover for Australian national brands, franchise networks, and enterprise e-commerce.",
    "features": [
      "Australia Nationwide Keyword Domination (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom High-Converting Web Redesign",
      "Tier-1 Australian Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our commercial property firm across Sydney and Melbourne. Our inbound qualified lead volume grew by 280%.",
    "author": "Lachlan T.",
    "role": "Managing Partner",
    "company": "Australian National Property Group",
    "rating": 5
  },
  {
    "quote": "Their SEO and Google Ads team put our e-commerce store at the top of Google.com.au for our primary product lines.",
    "author": "Mitchell K.",
    "role": "Head of Growth",
    "company": "Australian Lifestyle Retail Brand",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should an Australian business choose Webmok over local Sydney/Melbourne agencies?",
    "a": "Webmok delivers senior-level agency execution without bloated Australian CBD overhead. You work directly with dedicated AEST-timezone directors focused on measurable pipeline revenue."
  },
  {
    "q": "How fast can our Australian business expect to see Google ranking improvements?",
    "a": "Local Google Maps optimizations and high-intent PPC campaigns generate leads within 14 to 30 days. Broad organic SEO keywords achieve page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Are your marketing practices compliant with the Privacy Act 1988?",
    "a": "Yes, 100%. All tracking, lead forms, and data handling are strictly architected to comply with Australian Privacy Principles (APPs) and the Spam Act 2003."
  },
  {
    "q": "What is the contract term?",
    "a": "All our Australian digital marketing packages operate on flexible month-to-month agreements with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-australia-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-australia-hero-section" id="overview">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-hero-grid">
            <div className="wm-intl-australia-hero-left">
              <span className="wm-intl-australia-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-australia-hero-title-dual">
                <span className="wm-intl-australia-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-australia-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-australia-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-australia-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-australia-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-australia-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-australia-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-australia-hero-right-trust">
              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-clutch">C</div>
              </div>

              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-upwork">up</div>
              </div>

              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-australia-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-australia-trust-card">
                <div className="wm-intl-australia-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-australia-tcard-badge wm-intl-australia-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-australia-inpage-nav">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-inpage-nav-inner">
            <a href="#overview" className="wm-intl-australia-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-australia-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-australia-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-australia-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-australia-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-australia-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-australia-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-australia-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-australia-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-australia-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-australia-stats-strip">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-australia-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-australia-services-section" id="services">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-australia-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-australia-service-card">
                <div className="wm-intl-australia-svc-icon">
                  {svc.icon === 'FaSearch' && <FaSearch />}
                  {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                  {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                  {svc.icon === 'FaPenNib' && <FaPenNib />}
                  {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                  {svc.icon === 'FaVideo' && <FaVideo />}
                  {svc.icon === 'FaChartLine' && <FaChartLine />}
                  {svc.icon === 'FaCompass' && <FaCompass />}
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-australia-whyoutside-section" id="why-us">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-whyoutside-grid">
            <div className="wm-intl-australia-whyoutside-text">
              <span className="wm-intl-australia-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-australia-compare-table">
              <div className="wm-intl-australia-compare-row wm-intl-australia-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-australia-compare-row">
                  <div className="wm-intl-australia-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-australia-compare-local">{cp.local}</div>
                  <div className="wm-intl-australia-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-australia-results-section" id="results">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-australia-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-australia-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS */}
      <section className="wm-intl-australia-market-section" id="market-dynamics">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-australia-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-australia-market-card">
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS */}
      <section className="wm-intl-australia-process-section" id="process">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-australia-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-australia-process-card">
                <span className="wm-intl-australia-proc-num">STEP {ps.num}</span>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-australia-industries-section" id="industries">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-australia-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-australia-industry-card">
                <div className="wm-intl-australia-ind-icon">
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
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-australia-pricing-section" id="pricing-plans">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-australia-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-australia-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-australia-currency-toggle">
              {[{"code":"AUD","symbol":"A$","rate":1.52},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-australia-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-australia-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-australia-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-australia-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-australia-card-top">
                    {plan.badge && <span className="wm-intl-australia-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-australia-card-name">{plan.name}</h3>
                    <p className="wm-intl-australia-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-australia-card-pricing">
                    <div className="wm-intl-australia-price-row">
                      <span className="wm-intl-australia-price-val">{displayPrice}</span>
                      <span className="wm-intl-australia-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-australia-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-australia-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-australia-card-action">
                    <button
                      type="button"
                      className="wm-intl-australia-select-btn"
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
      <section className="wm-intl-australia-testimonials-section" id="testimonials">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-australia-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-australia-testimonial-card">
                <div className="wm-intl-australia-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-australia-t-quote">"{t.quote}"</p>
                <div className="wm-intl-australia-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US */}
      <section className="wm-intl-australia-advantage-section">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-australia-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-advantage-grid">
            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaShieldAlt /></div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
            </div>

            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaRocket /></div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
            </div>

            <div className="wm-intl-australia-advantage-card">
              <div className="wm-intl-australia-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-australia-faqs-section" id="faqs">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-sec-heading-center">
            <span className="wm-intl-australia-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-australia-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-australia-sec-bar-center"></div>
          </div>

          <div className="wm-intl-australia-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-australia-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-australia-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-australia-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-australia-bottom-banner">
        <div className="wm-intl-australia-container">
          <div className="wm-intl-australia-banner-inner">
            <div className="wm-intl-australia-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-australia-banner-btns">
              <button
                type="button"
                className="wm-intl-australia-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-australia-bbtn-quote"
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

export default AustraliaDigitalMarketingPage;

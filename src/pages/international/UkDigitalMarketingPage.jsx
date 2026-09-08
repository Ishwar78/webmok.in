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
import './UkDigitalMarketingPage.css';

const UkDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('GBP');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "UK Digital Marketing Agency",
    city: "UK",
    region: "United Kingdom Nationwide",
    tagline: "FULL-SERVICE UK DIGITAL MARKETING AGENCY · LONDON & UK",
    heroHighlight: "UK Digital Marketing & SEO Agency",
    heroItalic: "Accelerate Nationwide UK Revenue with",
    leadDesc: "Scale across London, Manchester, Birmingham, Leeds, and Edinburgh with high-velocity UK SEO, precision Google Ads, and high-conversion web development.",
    bodyDesc: "We help British businesses build dominant digital pipelines, rank #1 across competitive search queries, and capture high-intent commercial buyers throughout the United Kingdom.",
    stats: [
  {
    "num": "420%",
    "label": "Average UK Traffic Growth"
  },
  {
    "num": "5.9x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "110+",
    "label": "UK Brands Scaled Successfully"
  },
  {
    "num": "100%",
    "label": "UK GDPR & ICO Compliant"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "UK National & Regional SEO",
    "desc": "Capturing dominant search volume across London, Manchester, the Midlands, and Scotland with technical SEO and British citation networks."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads (PPC)",
    "desc": "Precision search funnels, Performance Max campaigns, and Google Shopping optimization designed for high UK commercial conversion."
  },
  {
    "icon": "FaShareAlt",
    "title": "Targeted Paid Social (Meta & TikTok)",
    "desc": "High-impact creative production, UGC integration, and algorithmic ad scaling across TikTok, Instagram, and LinkedIn."
  },
  {
    "icon": "FaPenNib",
    "title": "British Digital PR & Content",
    "desc": "Manual digital PR campaigns earning authoritative editorial backlinks from major UK news outlets (BBC, Guardian, Telegraph, City A.M.)."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Speed Web Architecture",
    "desc": "Speed-optimized React, Webflow, and WordPress websites built for sub-second load times, Core Web Vitals, and frictionless conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video & Creative Media",
    "desc": "Studio-grade video production and commercial creative assets crafted specifically for British consumer and corporate audiences."
  }
],
    whyHireOutsideTitle: "The British Growth Advantage with Webmok",
    whyHireOutsideSubtitle: "LONDON QUALITY · AGILE VALUE",
    whyHireDesc1: "London and UK agencies routinely charge £8,000–£20,000/month driven by high overhead in Soho and Mayfair, frequently delegating execution to junior account handlers.",
    whyHireDesc2: "Webmok provides dedicated senior growth directors, GMT timezone alignment, and rapid sprint cycles at a high-ROI, value-driven investment.",
    comparisonPoints: [
  {
    "feature": "Senior Account Attention",
    "local": "Junior Account Coordinators",
    "webmok": "Dedicated Senior Growth Directors"
  },
  {
    "feature": "Monthly Retainer Cost",
    "local": "£8,000 – £20,000 / month",
    "webmok": "From £630 – £2,370 / month (High ROI)"
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
    "local": "Basic Monthly PDF Summaries",
    "webmok": "Live 24/7 Real-Time Revenue Dashboards"
  }
],
    resultsTitle: "UK Performance Telemetry",
    resultsSubtitle: "VERIFIABLE BRITISH RESULTS",
    resultsStats: [
  {
    "metric": "110+",
    "label": "UK Brands Scaled to Page 1"
  },
  {
    "metric": "£21M+",
    "label": "Tracked Pipeline Revenue Generated"
  },
  {
    "metric": "99.4%",
    "label": "UK Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "GMT Timezone Strategic Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing in the UK",
    marketInsightsSubtitle: "BRITISH DYNAMICS",
    marketInsights: [
  {
    "title": "High Mobile Shopping Penetration",
    "desc": "Over 72% of UK e-commerce purchases happen on smartphones. Fast checkout, Apple Pay integration, and zero load latency are mandatory."
  },
  {
    "title": "Editorial PR Drives Search Authority",
    "desc": "Google UK places immense weight on legitimate British editorial links. We execute manual PR outreach to leading national newspapers."
  },
  {
    "title": "Regional Buying Nuances",
    "desc": "Consumer tone in London differs significantly from the North of England or Scotland. We calibrate ad copy to match regional vernacular."
  },
  {
    "title": "Strict ICO & UK GDPR Compliance",
    "desc": "We implement server-side cookie consent and strict data privacy protocols compliant with the UK Information Commissioner’s Office (ICO)."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "UK Market & SEO Audit",
    "desc": "Analyzing commercial search volume and competitor penetration across London and regional UK hubs."
  },
  {
    "num": "02",
    "title": "National Search Blueprint",
    "desc": "Configuring localized city landing pages, British schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Campaign Launch",
    "desc": "Deploying high-intent Google Ads, UK digital PR outreach, and targeted social campaigns."
  },
  {
    "num": "04",
    "title": "CRO & Revenue Attribution",
    "desc": "Optimizing conversion funnels, tracking pipeline ROI, and scaling UK market share."
  }
],
    industries: [
  {
    "icon": "FaBriefcase",
    "name": "FinTech, Banking & Legal",
    "desc": "Dominating search for wealth management, corporate law, and innovative UK FinTech."
  },
  {
    "icon": "FaShoppingCart",
    "name": "E-Commerce & British Brands",
    "desc": "Scaling Shopify and custom storefronts with profitable Google Shopping and TikTok ads."
  },
  {
    "icon": "FaBuilding",
    "name": "Property & Estate Agents",
    "desc": "Capturing residential buyers and commercial tenants across London and prime UK cities."
  },
  {
    "icon": "FaUserMd",
    "name": "Private Healthcare & Aesthetics",
    "desc": "Patient acquisition for Harley Street clinics, private dental, and wellness centers."
  },
  {
    "icon": "FaLaptopCode",
    "name": "B2B SaaS & Tech Startups",
    "desc": "Driving ARR growth and corporate demo requests in London’s Silicon Roundabout."
  },
  {
    "icon": "FaUtensils",
    "name": "Hospitality & Luxury Dining",
    "desc": "Promoting premier British hotels, Michelin-starred dining, and luxury travel."
  }
],
    plans: [
  {
    "name": "UK Growth Core",
    "badge": "City Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local UK businesses establishing dominant visibility in a regional market like Manchester or Birmingham.",
    "features": [
      "Up to 20 High-Intent UK Keywords",
      "Google Business Profile Geo-Optimization",
      "UK Local Citations & Yell.com Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated GMT Account Director"
    ]
  },
  {
    "name": "UK Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-city campaign combining national UK SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-City UK Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "UK National Monopoly",
    "badge": "National Dominance",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale nationwide market takeover for British national brands, franchise networks, and enterprise e-commerce.",
    "features": [
      "UK Nationwide Keyword Domination (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Custom High-Converting Web Redesign",
      "Tier-1 UK Media PR & Editorial Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok took our UK e-commerce brand to page 1 for our top search terms, driving a 380% revenue lift in our first 6 months.",
    "author": "James H.",
    "role": "Managing Director",
    "company": "British Outdoor Apparel Brand",
    "rating": 5
  },
  {
    "quote": "Their digital PR team secured editorial features in major UK news outlets that transformed our organic domain authority.",
    "author": "Oliver W.",
    "role": "Head of Growth",
    "company": "London B2B SaaS Platform",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Why should a UK business choose Webmok over local London agencies?",
    "a": "Webmok delivers senior-level agency execution without bloated London real estate overhead. You work directly with dedicated GMT-timezone directors focused on measurable pipeline revenue."
  },
  {
    "q": "How fast can our UK business expect to see Google ranking improvements?",
    "a": "Local Google Maps optimizations and high-intent PPC campaigns generate leads within 14 to 30 days. Broad organic SEO keywords achieve page #1 breakthroughs in 60 to 90 days."
  },
  {
    "q": "Are your marketing practices compliant with UK GDPR and the ICO?",
    "a": "Yes, 100%. All tracking, lead forms, and data handling are strictly architected to comply with UK GDPR and ICO guidelines."
  },
  {
    "q": "What is the contract term?",
    "a": "All our UK digital marketing packages operate on flexible month-to-month agreements with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-uk-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-uk-hero-section" id="overview">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-hero-grid">
            <div className="wm-intl-uk-hero-left">
              <span className="wm-intl-uk-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-uk-hero-title-dual">
                <span className="wm-intl-uk-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-uk-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-uk-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-uk-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-uk-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-uk-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-uk-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-uk-hero-right-trust">
              <div className="wm-intl-uk-trust-card">
                <div className="wm-intl-uk-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-uk-tcard-badge wm-intl-uk-badge-clutch">C</div>
              </div>

              <div className="wm-intl-uk-trust-card">
                <div className="wm-intl-uk-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-uk-tcard-badge wm-intl-uk-badge-upwork">up</div>
              </div>

              <div className="wm-intl-uk-trust-card">
                <div className="wm-intl-uk-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-uk-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-uk-tcard-badge wm-intl-uk-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-uk-trust-card">
                <div className="wm-intl-uk-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-uk-tcard-badge wm-intl-uk-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-uk-inpage-nav">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-inpage-nav-inner">
            <a href="#overview" className="wm-intl-uk-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-uk-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-uk-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-uk-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-uk-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-uk-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-uk-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-uk-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-uk-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-uk-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-uk-stats-strip">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-uk-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-uk-services-section" id="services">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-uk-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-uk-service-card">
                <div className="wm-intl-uk-svc-icon">
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
      <section className="wm-intl-uk-whyoutside-section" id="why-us">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-whyoutside-grid">
            <div className="wm-intl-uk-whyoutside-text">
              <span className="wm-intl-uk-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-uk-compare-table">
              <div className="wm-intl-uk-compare-row wm-intl-uk-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-uk-compare-row">
                  <div className="wm-intl-uk-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-uk-compare-local">{cp.local}</div>
                  <div className="wm-intl-uk-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-uk-results-section" id="results">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-uk-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-uk-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS */}
      <section className="wm-intl-uk-market-section" id="market-dynamics">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-uk-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-uk-market-card">
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS */}
      <section className="wm-intl-uk-process-section" id="process">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-uk-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-uk-process-card">
                <span className="wm-intl-uk-proc-num">STEP {ps.num}</span>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-uk-industries-section" id="industries">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-uk-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-uk-industry-card">
                <div className="wm-intl-uk-ind-icon">
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
      <section className="wm-intl-uk-pricing-section" id="pricing-plans">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-uk-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-uk-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-uk-currency-toggle">
              {[{"code":"GBP","symbol":"£","rate":0.79},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-uk-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-uk-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-uk-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-uk-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-uk-card-top">
                    {plan.badge && <span className="wm-intl-uk-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-uk-card-name">{plan.name}</h3>
                    <p className="wm-intl-uk-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-uk-card-pricing">
                    <div className="wm-intl-uk-price-row">
                      <span className="wm-intl-uk-price-val">{displayPrice}</span>
                      <span className="wm-intl-uk-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-uk-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-uk-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-uk-card-action">
                    <button
                      type="button"
                      className="wm-intl-uk-select-btn"
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
      <section className="wm-intl-uk-testimonials-section" id="testimonials">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-uk-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-uk-testimonial-card">
                <div className="wm-intl-uk-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-uk-t-quote">"{t.quote}"</p>
                <div className="wm-intl-uk-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US */}
      <section className="wm-intl-uk-advantage-section">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-uk-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-advantage-grid">
            <div className="wm-intl-uk-advantage-card">
              <div className="wm-intl-uk-aicon"><FaShieldAlt /></div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
            </div>

            <div className="wm-intl-uk-advantage-card">
              <div className="wm-intl-uk-aicon"><FaRocket /></div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-uk-advantage-card">
              <div className="wm-intl-uk-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
            </div>

            <div className="wm-intl-uk-advantage-card">
              <div className="wm-intl-uk-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-uk-faqs-section" id="faqs">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-sec-heading-center">
            <span className="wm-intl-uk-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-uk-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-uk-sec-bar-center"></div>
          </div>

          <div className="wm-intl-uk-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-uk-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-uk-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-uk-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-uk-bottom-banner">
        <div className="wm-intl-uk-container">
          <div className="wm-intl-uk-banner-inner">
            <div className="wm-intl-uk-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-uk-banner-btns">
              <button
                type="button"
                className="wm-intl-uk-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-uk-bbtn-quote"
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

export default UkDigitalMarketingPage;

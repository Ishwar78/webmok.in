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
import './FloridaDigitalMarketingPage.css';

const FloridaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Florida Digital Marketing Agency",
    city: "Florida",
    region: "Florida Statewide, USA",
    tagline: "STATEWIDE DIGITAL GROWTH AGENCY · FLORIDA, USA",
    heroHighlight: "Florida Digital Marketing Services",
    heroItalic: "Dominate Statewide Markets with",
    leadDesc: "Scale across Orlando, Tampa, Jacksonville, Fort Lauderdale, Naples, and Miami with high-velocity statewide SEO, precision paid ads, and high-conversion web development.",
    bodyDesc: "We help Florida enterprises build dominant digital pipelines, rank #1 across multiple metro territories, and capture high-intent commercial buyers throughout the Sunshine State.",
    stats: [
  {
    "num": "390%",
    "label": "Average Florida Traffic Growth"
  },
  {
    "num": "6.2x",
    "label": "Average ROAS on Paid Media"
  },
  {
    "num": "120+",
    "label": "Florida Campaigns Delivered"
  },
  {
    "num": "100%",
    "label": "White-Hat SEO Execution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "Multi-City Florida SEO",
    "desc": "Scalable multi-location SEO architecture targeting Orlando, Tampa, Jacksonville, and South Florida with localized schema markup and city landing pages."
  },
  {
    "icon": "FaBullhorn",
    "title": "Precision Paid Acquisition",
    "desc": "High-converting Google Search, Performance Max, and Local Services Ads optimized for Florida commercial and residential buying cycles."
  },
  {
    "icon": "FaShareAlt",
    "title": "Geo-Fenced Social Advertising",
    "desc": "Surgical demographic and radius-targeted Meta, TikTok, and LinkedIn campaigns that engage Florida consumers and business decision-makers."
  },
  {
    "icon": "FaPenNib",
    "title": "Authority Content Marketing",
    "desc": "Industry-leading blog hubs, Florida case studies, and editorial PR placements that build unbeatable organic domain equity."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Speed Web Architecture",
    "desc": "Lightning-fast, mobile-optimized web portals designed to convert Florida traffic into phone calls, quote submissions, and revenue."
  },
  {
    "icon": "FaVideo",
    "title": "Visual Media & Creative Ads",
    "desc": "High-impact video ads, brand creative, and animation assets tailored for Florida’s dynamic lifestyle and commercial sectors."
  }
],
    whyHireOutsideTitle: "Why Florida Enterprises Partner with Webmok",
    whyHireOutsideSubtitle: "ELITE EXECUTION · MEASURABLE REVENUE",
    whyHireDesc1: "Florida’s booming economy has created intense competition in every major metro area. Traditional marketing tactics that rely on vanity metrics burn budgets with zero pipeline accountability.",
    whyHireDesc2: "Webmok delivers a modern engineering approach to growth—combining technical search superiority with conversion-focused paid acquisition and transparent bi-weekly telemetry.",
    comparisonPoints: [
  {
    "feature": "Multi-City Scalability",
    "local": "Limited to Single Metro",
    "webmok": "Turnkey Multi-City Florida Architecture"
  },
  {
    "feature": "Pricing Transparency",
    "local": "$10,000+ Bloated Retainers",
    "webmok": "Value-Driven Month-to-Month Packages"
  },
  {
    "feature": "Accountability & Data",
    "local": "Monthly PDF Vanity Reports",
    "webmok": "24/7 Live Telemetry & Direct CRM Sync"
  },
  {
    "feature": "Engineering Speed",
    "local": "3-4 Week Turnaround",
    "webmok": "48-72 Hour Sprint Turnaround"
  },
  {
    "feature": "Contract Lock-In",
    "local": "12-Month Rigid Contracts",
    "webmok": "100% Flexible Month-to-Month"
  }
],
    resultsTitle: "Statewide Performance Telemetry",
    resultsSubtitle: "PROVEN FLORIDA OUTCOMES",
    resultsStats: [
  {
    "metric": "120+",
    "label": "Florida Enterprise Clients Scaled"
  },
  {
    "metric": "$24M+",
    "label": "Tracked Pipeline Value Generated"
  },
  {
    "metric": "99.1%",
    "label": "Statewide Client Satisfaction Rate"
  },
  {
    "metric": "24/7",
    "label": "Real-Time Telemetry Dashboard Access"
  }
],
    marketInsightsTitle: "What We Know About Marketing Across Florida",
    marketInsightsSubtitle: "REGIONAL DYNAMICS",
    marketInsights: [
  {
    "title": "Rapid Population Growth Drives Search Volume",
    "desc": "Over 1,000 people move to Florida daily. Capturing new resident search volume requires active local citations and keyword conquesting."
  },
  {
    "title": "Distinct Regional Sub-Markets",
    "desc": "Orlando focuses heavily on hospitality and healthcare, Tampa on finance and tech, while South Florida demands bilingual commercial funnels."
  },
  {
    "title": "Seasonal Demand Surges",
    "desc": "Tourism and snowbird season create distinct winter peaks. We dynamically scale ad budgets and content schedules around annual buying patterns."
  },
  {
    "title": "High Mobile Search Dependency",
    "desc": "Over 82% of Florida consumer inquiries occur via smartphones. We build instant click-to-call mobile funnels with zero load latency."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Statewide Market Audit",
    "desc": "Mapping keyword volumes across all Florida metros and pinpointing competitor weaknesses."
  },
  {
    "num": "02",
    "title": "Multi-Location Blueprint",
    "desc": "Structuring dedicated city landing pages, localized schema markup, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Full-Funnel Campaign Launch",
    "desc": "Deploying high-intent search ads, organic content hubs, and localized Meta retargeting."
  },
  {
    "num": "04",
    "title": "Telemetry Optimization & Scale",
    "desc": "Continuous bid adjustments, landing page A/B tests, and monthly revenue scaling reviews."
  }
],
    industries: [
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Development",
    "desc": "High-intent residential and commercial lead funnels across Florida’s booming property markets."
  },
  {
    "icon": "FaUserMd",
    "name": "Healthcare & Specialized Clinics",
    "desc": "Dominating patient acquisition for dental, orthopedic, plastic surgery, and medical centers."
  },
  {
    "icon": "FaCompass",
    "name": "Legal & Personal Injury",
    "desc": "Capturing high-ticket legal inquiries with aggressive Google Ads and organic SEO supremacy."
  },
  {
    "icon": "FaUtensils",
    "name": "Tourism & Hospitality",
    "desc": "Maximizing direct bookings and foot traffic across Florida resorts and attractions."
  },
  {
    "icon": "FaBriefcase",
    "name": "B2B Services & Logistics",
    "desc": "Driving qualified RFP submissions and corporate sales for Florida enterprise suppliers."
  },
  {
    "icon": "FaShoppingCart",
    "name": "Retail & Multi-Location Brands",
    "desc": "Omni-channel local store traffic and e-commerce customer acquisition across all 67 counties."
  }
],
    plans: [
  {
    "name": "Florida Growth Core",
    "badge": "Single Metro",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Ideal for local Florida businesses establishing dominant visibility in a single city metro area.",
    "features": [
      "Up to 25 Target Florida Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Directory & Citation Building",
      "Technical Core Web Vitals Optimization",
      "Monthly Telemetry & Progress Report",
      "Dedicated Florida Account Director"
    ]
  },
  {
    "name": "Florida Multi-City Scale",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,599",
    "inrPrice": "1,29,999",
    "desc": "Engineered for brands expanding across 2-4 Florida cities with combined SEO and Google Ads management.",
    "features": [
      "Up to 50 Multi-City Florida Keywords",
      "Google Ads (PPC) Setup & Bid Optimization",
      "Multi-Location Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Strategic Consultation"
    ]
  },
  {
    "name": "Florida Statewide Dominance",
    "badge": "Statewide Leader",
    "usdPrice": "3,199",
    "inrPrice": "2,59,999",
    "desc": "Statewide market takeover for multi-location networks, healthcare groups, and enterprise brands.",
    "features": [
      "Statewide Keyword Takeover (100+ Keywords)",
      "Full-Funnel Omni-Channel Ads (Google, Meta, YouTube)",
      "Custom High-Converting Web Portal Development",
      "Tier-1 Press Release & Media Placements",
      "Dedicated Senior Account Squad & Slack Access",
      "Custom CRM Integration & Multi-Touch Attribution"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our legal practice across Tampa and Orlando. We saw a 320% surge in qualified case inquiries within four months.",
    "author": "Marcus B.",
    "role": "Senior Partner",
    "company": "Florida Statewide Legal Group",
    "rating": 5
  },
  {
    "quote": "The multi-location SEO architecture they built put our clinics on page 1 in 5 different Florida cities simultaneously.",
    "author": "Dr. Sarah K.",
    "role": "Chief Medical Officer",
    "company": "Sunshine State Health Network",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Can Webmok help our brand rank in multiple Florida cities at the same time?",
    "a": "Yes! We engineer scalable multi-location SEO architectures with dedicated city landing pages, localized schema markup, and regional Google Business Profiles to rank across multiple Florida markets."
  },
  {
    "q": "How do you structure Florida Google Ads campaigns to prevent wasted spend?",
    "a": "We use hyper-granular radius targeting, negative keyword sculpting, automated bid rules, and day-parting to ensure your ad spend only captures high-intent Florida searchers."
  },
  {
    "q": "What industries do you specialize in across Florida?",
    "a": "We have deep experience in real estate development, legal practices, healthcare clinics, tourism/hospitality, B2B logistics, and direct-to-consumer commerce."
  },
  {
    "q": "What is the onboarding timeline for new Florida campaigns?",
    "a": "We complete comprehensive audits, tracking setup, competitor gap analysis, and campaign deployment within 5 business days."
  }
]
  };

  return (
    <div className="wm-intl-florida-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-florida-hero-section" id="overview">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-hero-grid">
            <div className="wm-intl-florida-hero-left">
              <span className="wm-intl-florida-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-florida-hero-title-dual">
                <span className="wm-intl-florida-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-florida-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-florida-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-florida-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-florida-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-florida-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-florida-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-florida-hero-right-trust">
              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-clutch">C</div>
              </div>

              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-upwork">up</div>
              </div>

              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-florida-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-florida-trust-card">
                <div className="wm-intl-florida-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-florida-tcard-badge wm-intl-florida-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-florida-inpage-nav">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-inpage-nav-inner">
            <a href="#overview" className="wm-intl-florida-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-florida-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-florida-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-florida-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-florida-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-florida-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-florida-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-florida-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-florida-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-florida-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-florida-stats-strip">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-florida-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-florida-services-section" id="services">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-florida-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-florida-service-card">
                <div className="wm-intl-florida-svc-icon">
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
      <section className="wm-intl-florida-whyoutside-section" id="why-us">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-whyoutside-grid">
            <div className="wm-intl-florida-whyoutside-text">
              <span className="wm-intl-florida-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-florida-compare-table">
              <div className="wm-intl-florida-compare-row wm-intl-florida-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-florida-compare-row">
                  <div className="wm-intl-florida-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-florida-compare-local">{cp.local}</div>
                  <div className="wm-intl-florida-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-florida-results-section" id="results">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-florida-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-florida-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS */}
      <section className="wm-intl-florida-market-section" id="market-dynamics">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-florida-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-florida-market-card">
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS */}
      <section className="wm-intl-florida-process-section" id="process">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-florida-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-florida-process-card">
                <span className="wm-intl-florida-proc-num">STEP {ps.num}</span>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-florida-industries-section" id="industries">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-florida-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-florida-industry-card">
                <div className="wm-intl-florida-ind-icon">
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
      <section className="wm-intl-florida-pricing-section" id="pricing-plans">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-florida-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-florida-currency-toggle">
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-florida-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-florida-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-florida-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-florida-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-florida-card-top">
                    {plan.badge && <span className="wm-intl-florida-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-florida-card-name">{plan.name}</h3>
                    <p className="wm-intl-florida-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-florida-card-pricing">
                    <div className="wm-intl-florida-price-row">
                      <span className="wm-intl-florida-price-val">{displayPrice}</span>
                      <span className="wm-intl-florida-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-florida-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-florida-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-florida-card-action">
                    <button
                      type="button"
                      className="wm-intl-florida-select-btn"
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
      <section className="wm-intl-florida-testimonials-section" id="testimonials">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-florida-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-florida-testimonial-card">
                <div className="wm-intl-florida-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-florida-t-quote">"{t.quote}"</p>
                <div className="wm-intl-florida-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US */}
      <section className="wm-intl-florida-advantage-section">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-florida-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-advantage-grid">
            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaShieldAlt /></div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaRocket /></div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
            </div>

            <div className="wm-intl-florida-advantage-card">
              <div className="wm-intl-florida-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-florida-faqs-section" id="faqs">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-sec-heading-center">
            <span className="wm-intl-florida-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-florida-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-florida-sec-bar-center"></div>
          </div>

          <div className="wm-intl-florida-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-florida-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-florida-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-florida-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-florida-bottom-banner">
        <div className="wm-intl-florida-container">
          <div className="wm-intl-florida-banner-inner">
            <div className="wm-intl-florida-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-florida-banner-btns">
              <button
                type="button"
                className="wm-intl-florida-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-florida-bbtn-quote"
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

export default FloridaDigitalMarketingPage;

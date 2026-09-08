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
import './SanFranciscoDigitalMarketingPage.css';

const SanFranciscoDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "San Francisco Digital Marketing Agency",
    city: "San Francisco",
    region: "Bay Area & Silicon Valley, CA, USA",
    tagline: "BAY AREA & SILICON VALLEY GROWTH SQUAD · SF, USA",
    heroHighlight: "San Francisco Digital Marketing Agency",
    heroItalic: "Accelerate B2B Pipeline & ARR with",
    leadDesc: "Fuel your Silicon Valley startup or Bay Area enterprise with high-velocity B2B lead generation, technical SaaS SEO, and precision paid acquisition.",
    bodyDesc: "From SOMA and FiDi tech firms to South Bay enterprises and East Bay innovators—Webmok engineers scalable, data-backed digital engines that accelerate ARR and pipeline value.",
    stats: [
  {
    "num": "510%",
    "label": "Average B2B Pipeline Growth"
  },
  {
    "num": "4.8x",
    "label": "CAC to LTV Efficiency Ratio"
  },
  {
    "num": "80+",
    "label": "Bay Area Tech & B2B Clients"
  },
  {
    "num": "100%",
    "label": "Data-Backed Execution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "B2B SaaS & Enterprise SEO",
    "desc": "Topical authority architecture, product-led SEO hubs, programmatic landing pages, and technical optimizations engineered for enterprise search volume."
  },
  {
    "icon": "FaBullhorn",
    "title": "LinkedIn & Google Search Ads (PPC)",
    "desc": "Account-Based Marketing (ABM) funnels, high-intent commercial Google Search ads, and retargeting that drives qualified demo requests."
  },
  {
    "icon": "FaPenNib",
    "title": "Product-Led Content & Whitepapers",
    "desc": "In-depth comparison guides, technical whitepapers, and industry benchmarks that position your platform as the category standard."
  },
  {
    "icon": "FaLaptopCode",
    "title": "High-Converting Webflow & React Dev",
    "desc": "Modern, high-velocity SaaS marketing websites and interactive demo landing pages engineered for optimal conversion rates."
  },
  {
    "icon": "FaChartLine",
    "title": "CRM & Multi-Touch Attribution",
    "desc": "Seamless HubSpot, Salesforce, and Segment integrations mapping every click directly to pipeline stage and closed ARR."
  },
  {
    "icon": "FaShareAlt",
    "title": "Developer Marketing & Brand PR",
    "desc": "Technical digital PR, GitHub community amplification, and tech publication editorial placements that drive organic developer adoption."
  }
],
    whyHireOutsideTitle: "Engineering-Driven Marketing for the Bay Area",
    whyHireOutsideSubtitle: "SILICON VALLEY PRECISION",
    whyHireDesc1: "Bay Area agencies charge exorbitant retainers ($15k–$30k/mo) driven by local commercial real estate and overhead, delivering generic marketing that fails in technical B2B sectors.",
    whyHireDesc2: "Webmok approaches growth marketing like software engineering—running agile sprints, instrumenting full-funnel attribution, and scaling pipeline with provable unit economics.",
    comparisonPoints: [
  {
    "feature": "Methodology",
    "local": "Generalist Marketing Agency",
    "webmok": "Engineering-Driven B2B & SaaS Growth Squad"
  },
  {
    "feature": "Attribution Depth",
    "local": "Basic Google Analytics Clicks",
    "webmok": "Full CRM Revenue Attribution (HubSpot/Salesforce)"
  },
  {
    "feature": "Cost Efficiency",
    "local": "$15,000 – $30,000 / month",
    "webmok": "From $949 – $3,499 / month (Compound ARR Lift)"
  },
  {
    "feature": "Sprint Speed",
    "local": "Bi-Monthly Reviews",
    "webmok": "Agile Weekly Telemetry & Daily Slack Access"
  },
  {
    "feature": "Contract Terms",
    "local": "1-Year Strict Lock-In",
    "webmok": "Flexible Month-to-Month Agreements"
  }
],
    resultsTitle: "Bay Area Performance Telemetry",
    resultsSubtitle: "VERIFIABLE B2B RESULTS",
    resultsStats: [
  {
    "metric": "80+",
    "label": "SF Tech Startups & Enterprises Scaled"
  },
  {
    "metric": "$28M+",
    "label": "Tracked Pipeline ARR Generated"
  },
  {
    "metric": "99.5%",
    "label": "Client Retention Rate"
  },
  {
    "metric": "Under 28s",
    "label": "Engineer Response Time"
  }
],
    marketInsightsTitle: "What We Know About Selling to B2B Tech in SF",
    marketInsightsSubtitle: "SILICON VALLEY DYNAMICS",
    marketInsights: [
  {
    "title": "High-Intent Commercial Searches Win Deals",
    "desc": "Enterprise buyers search for specific product comparison terms (e.g. \"X vs Y\" or \"Best enterprise solution for Z\"). We build dominant comparison hubs."
  },
  {
    "title": "CAC Payback Period is the Ultimate Metric",
    "desc": "We optimize every paid campaign around CAC payback velocity and pipeline quality rather than cheap, unqualified top-of-funnel clicks."
  },
  {
    "title": "Multi-Stakeholder Buying Committees",
    "desc": "B2B software purchases require approval from Engineering, Security, and Finance. We craft tailored content assets for each stakeholder persona."
  },
  {
    "title": "Speed to Lead Conversion",
    "desc": "Demo requests that are contacted within 5 minutes convert 8x higher. We build automated webhook integrations directly into your sales team’s Slack."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Product & ICP Deep Dive",
    "desc": "Understanding your Ideal Customer Profile (ICP), ACV economics, and competitor positioning."
  },
  {
    "num": "02",
    "title": "Technical Demand Gen Architecture",
    "desc": "Building high-intent B2B search funnels, comparison hubs, and LinkedIn ABM audiences."
  },
  {
    "num": "03",
    "title": "Omni-Channel Sprint Deployment",
    "desc": "Launching targeted PPC, programmatic SEO hubs, and CRM attribution pipelines."
  },
  {
    "num": "04",
    "title": "Pipeline Optimization & ARR Scale",
    "desc": "A/B testing demo landing pages, optimizing lead scoring, and compounding pipeline ARR."
  }
],
    industries: [
  {
    "icon": "FaLaptopCode",
    "name": "B2B SaaS & Cloud Platforms",
    "desc": "Accelerating product demos, free-trial conversions, and enterprise contract ARR."
  },
  {
    "icon": "FaShieldAlt",
    "name": "Cybersecurity & Infrastructure",
    "desc": "Establishing category authority and capturing high-intent technical enterprise buyers."
  },
  {
    "icon": "FaChartLine",
    "name": "FinTech & Blockchain Platforms",
    "desc": "Driving compliance-ready user acquisition and institutional investor interest."
  },
  {
    "icon": "FaUserMd",
    "name": "HealthTech & BioTech Ventures",
    "desc": "Connecting innovative clinical platforms with hospital networks and research labs."
  },
  {
    "icon": "FaBriefcase",
    "name": "Venture Capital & Advisory",
    "desc": "Amplifying portfolio brand value, deal flow discovery, and founder recruitment."
  },
  {
    "icon": "FaBuilding",
    "name": "Commercial Real Estate Tech (PropTech)",
    "desc": "Scaling corporate tenant acquisition and commercial property software adoption."
  }
],
    plans: [
  {
    "name": "SF Seed / Local Growth",
    "badge": "Early Stage",
    "usdPrice": "949",
    "inrPrice": "74,999",
    "desc": "Ideal for early-stage startups and local SF service providers building initial organic traction and localized Google visibility.",
    "features": [
      "Up to 25 High-Intent Bay Area Keywords",
      "Google Business Profile & Local SF Citations",
      "Core Technical SEO & Schema Markup",
      "On-Page Optimization & 4 Quality Blog Hubs",
      "Monthly Executive ROI Report",
      "Dedicated US PST Growth Strategist"
    ]
  },
  {
    "name": "SF Scale-Up B2B",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,799",
    "inrPrice": "1,49,999",
    "desc": "Aggressive multi-channel demand gen for Series A/B SaaS startups and established Bay Area mid-market companies.",
    "features": [
      "Up to 55 B2B & Commercial Keywords",
      "Google Search Ads & LinkedIn PPC Management",
      "High-Converting Landing Page Creation & CRO",
      "Technical Core Web Vitals & Speed Optimization",
      "8 High-Authority B2B Industry Backlinks/mo",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "SF Silicon Valley Monopoly",
    "badge": "Enterprise Dominance",
    "usdPrice": "3,499",
    "inrPrice": "2,89,999",
    "desc": "Full-scale omni-channel growth engine for growth-stage tech firms, enterprise platforms, and market leaders.",
    "features": [
      "Unlimited Target Keywords & Global Search Footprint",
      "Omni-Channel PPC (Google, LinkedIn, Meta, YouTube)",
      "Bespoke Web Portal / Headless CMS Redesign",
      "Tier-1 Tech Editorial PR & Media Placements",
      "Dedicated Senior Account Lead & Daily Slack Channel",
      "HubSpot/Salesforce Revenue Attribution Integration"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our Series A SaaS pipeline by 340% within 5 months. Their understanding of B2B search intent and HubSpot attribution is unmatched.",
    "author": "David L.",
    "role": "VP of Growth",
    "company": "San Francisco AI Workflow Platform",
    "rating": 5
  },
  {
    "quote": "They operate like an internal growth squad. Weekly sprints, zero fluff, and direct pipeline ARR delivered every month.",
    "author": "Sarah M.",
    "role": "Head of Demand Generation",
    "company": "Bay Area CyberTech Platform",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Do you specialize in B2B SaaS and technology companies in San Francisco?",
    "a": "Yes! Over 60% of our Bay Area client roster consists of B2B software, fintech, AI platforms, and technology service companies requiring specialized technical content and ABM funnels."
  },
  {
    "q": "How do you integrate with our CRM (HubSpot or Salesforce)?",
    "a": "We configure custom UTM tracking, webhook triggers, and conversion goals to pass enriched lead data directly into HubSpot, Salesforce, or Marketo for full-funnel attribution."
  },
  {
    "q": "Can you coordinate with our internal marketing and engineering teams?",
    "a": "Absolutely. We plug directly into your Slack, Jira, or ClickUp workflows, functioning as a seamless extension of your in-house growth squad."
  },
  {
    "q": "What are the contract terms?",
    "a": "Flexible month-to-month contracts with zero lock-in. You stay because we deliver measurable pipeline growth."
  }
]
  };

  return (
    <div className="wm-intl-sanfrancisco-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-sanfrancisco-hero-section" id="overview">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-hero-grid">
            <div className="wm-intl-sanfrancisco-hero-left">
              <span className="wm-intl-sanfrancisco-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-sanfrancisco-hero-title-dual">
                <span className="wm-intl-sanfrancisco-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-sanfrancisco-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-sanfrancisco-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-sanfrancisco-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-sanfrancisco-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-sanfrancisco-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-sanfrancisco-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-sanfrancisco-hero-right-trust">
              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-clutch">C</div>
              </div>

              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-upwork">up</div>
              </div>

              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-sanfrancisco-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-sanfrancisco-trust-card">
                <div className="wm-intl-sanfrancisco-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-sanfrancisco-tcard-badge wm-intl-sanfrancisco-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-sanfrancisco-inpage-nav">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-inpage-nav-inner">
            <a href="#overview" className="wm-intl-sanfrancisco-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-sanfrancisco-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-sanfrancisco-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-sanfrancisco-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-sanfrancisco-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-sanfrancisco-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-sanfrancisco-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-sanfrancisco-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-sanfrancisco-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-sanfrancisco-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-sanfrancisco-stats-strip">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-sanfrancisco-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-sanfrancisco-services-section" id="services">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-sanfrancisco-service-card">
                <div className="wm-intl-sanfrancisco-svc-icon">
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
      <section className="wm-intl-sanfrancisco-whyoutside-section" id="why-us">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-whyoutside-grid">
            <div className="wm-intl-sanfrancisco-whyoutside-text">
              <span className="wm-intl-sanfrancisco-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-sanfrancisco-compare-table">
              <div className="wm-intl-sanfrancisco-compare-row wm-intl-sanfrancisco-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-sanfrancisco-compare-row">
                  <div className="wm-intl-sanfrancisco-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-sanfrancisco-compare-local">{cp.local}</div>
                  <div className="wm-intl-sanfrancisco-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-sanfrancisco-results-section" id="results">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-sanfrancisco-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS */}
      <section className="wm-intl-sanfrancisco-market-section" id="market-dynamics">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-sanfrancisco-market-card">
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS */}
      <section className="wm-intl-sanfrancisco-process-section" id="process">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-sanfrancisco-process-card">
                <span className="wm-intl-sanfrancisco-proc-num">STEP {ps.num}</span>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-sanfrancisco-industries-section" id="industries">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-sanfrancisco-industry-card">
                <div className="wm-intl-sanfrancisco-ind-icon">
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
      <section className="wm-intl-sanfrancisco-pricing-section" id="pricing-plans">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-sanfrancisco-currency-toggle">
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-sanfrancisco-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-sanfrancisco-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-sanfrancisco-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-sanfrancisco-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-sanfrancisco-card-top">
                    {plan.badge && <span className="wm-intl-sanfrancisco-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-sanfrancisco-card-name">{plan.name}</h3>
                    <p className="wm-intl-sanfrancisco-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-sanfrancisco-card-pricing">
                    <div className="wm-intl-sanfrancisco-price-row">
                      <span className="wm-intl-sanfrancisco-price-val">{displayPrice}</span>
                      <span className="wm-intl-sanfrancisco-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-sanfrancisco-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-sanfrancisco-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-sanfrancisco-card-action">
                    <button
                      type="button"
                      className="wm-intl-sanfrancisco-select-btn"
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
      <section className="wm-intl-sanfrancisco-testimonials-section" id="testimonials">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-sanfrancisco-testimonial-card">
                <div className="wm-intl-sanfrancisco-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-sanfrancisco-t-quote">"{t.quote}"</p>
                <div className="wm-intl-sanfrancisco-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US */}
      <section className="wm-intl-sanfrancisco-advantage-section">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-advantage-grid">
            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaShieldAlt /></div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
            </div>

            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaRocket /></div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
            </div>

            <div className="wm-intl-sanfrancisco-advantage-card">
              <div className="wm-intl-sanfrancisco-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-sanfrancisco-faqs-section" id="faqs">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-sec-heading-center">
            <span className="wm-intl-sanfrancisco-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-sanfrancisco-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-sanfrancisco-sec-bar-center"></div>
          </div>

          <div className="wm-intl-sanfrancisco-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-sanfrancisco-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-sanfrancisco-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-sanfrancisco-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-sanfrancisco-bottom-banner">
        <div className="wm-intl-sanfrancisco-container">
          <div className="wm-intl-sanfrancisco-banner-inner">
            <div className="wm-intl-sanfrancisco-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-sanfrancisco-banner-btns">
              <button
                type="button"
                className="wm-intl-sanfrancisco-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-sanfrancisco-bbtn-quote"
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

export default SanFranciscoDigitalMarketingPage;

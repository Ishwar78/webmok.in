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
import './CanadaDigitalMarketingPage.css';

const CanadaDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('CAD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Canada Digital Marketing Agency",
    city: "Canada",
    region: "Canada Nationwide",
    tagline: "NATIONAL DIGITAL MARKETING AGENCY · CANADA",
    heroHighlight: "Canada Digital Marketing & SEO Agency",
    heroItalic: "Accelerate Nationwide Canadian Revenue with",
    leadDesc: "Scale your Canadian business nationwide with bilingual SEO, Google Ads, and custom conversion funnels engineered for the Canadian market.",
    bodyDesc: "Covering Ontario, British Columbia, Alberta, Quebec, and beyond—Webmok delivers compliant, high-performing digital marketing that captures Canadian search intent.",
    stats: [
  {
    "num": "390%",
    "label": "Average Canada Traffic Lift"
  },
  {
    "num": "5.5x",
    "label": "Average ROAS on Google Ads"
  },
  {
    "num": "90+",
    "label": "Canadian Brands Scaled"
  },
  {
    "num": "100%",
    "label": "PIPEDA & CASL Compliant"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "National & Provincial Canada SEO",
    "desc": "Dominating organic search across all 10 provinces with bilingual keyword optimization (English/French) and local Google 3-Pack authority."
  },
  {
    "icon": "FaBullhorn",
    "title": "Canadian Google Ads (PPC)",
    "desc": "High-intent search, Shopping, and Local Services Ads optimized for Canadian consumer purchasing habits and provincial taxation nuances."
  },
  {
    "icon": "FaShareAlt",
    "title": "Paid Social & Community Ads",
    "desc": "Meta, TikTok, and LinkedIn funnels targeted specifically to major Canadian metropolitan centers (GTA, Vancouver Metro, Montreal, Calgary)."
  },
  {
    "icon": "FaPenNib",
    "title": "Canadian Editorial PR & Content",
    "desc": "Building national authority with localized content hubs, Canadian business citations, and editorial outreach to prominent Canadian media."
  },
  {
    "icon": "FaLaptopCode",
    "title": "PIPEDA-Compliant Web Engineering",
    "desc": "Speed-optimized, accessible websites fully compliant with PIPEDA, CASL anti-spam laws, and bilingual language requirements."
  },
  {
    "icon": "FaVideo",
    "title": "Creative Video & Brand Assets",
    "desc": "High-production visual storytelling and commercial video ads that resonate with Canadian cultural values and regional markets."
  }
],
    whyHireOutsideTitle: "The Canadian Growth Advantage with Webmok",
    whyHireOutsideSubtitle: "COAST-TO-COAST VALUE",
    whyHireDesc1: "Canadian agencies in Toronto and Vancouver charge steep retainer fees while operating with slow turnaround times and rigid long-term contracts.",
    whyHireDesc2: "Webmok delivers senior-level digital marketing execution, bilingual capabilities, and timezone-aligned support at a high-ROI price point.",
    comparisonPoints: [
  {
    "feature": "National Coverage",
    "local": "Often City-Specific Only",
    "webmok": "Full 10-Province Search & Media Scaling"
  },
  {
    "feature": "Bilingual Execution",
    "local": "Additional Expensive Translation Fees",
    "webmok": "Native English & French Funnels Included"
  },
  {
    "feature": "Monthly Investment",
    "local": "C$7,000 – C$15,000 / month",
    "webmok": "From C$1,080 – C$4,080 / month"
  },
  {
    "feature": "Compliance",
    "local": "Basic Privacy Disclaimers",
    "webmok": "Strict PIPEDA & CASL Privacy Compliance"
  },
  {
    "feature": "Contracts",
    "local": "6-12 Month Mandatory Lock-In",
    "webmok": "Flexible Month-to-Month Agreements"
  }
],
    resultsTitle: "Canadian Performance Telemetry",
    resultsSubtitle: "VERIFIABLE NATIONAL RESULTS",
    resultsStats: [
  {
    "metric": "90+",
    "label": "Canadian Brands Scaled Coast-to-Coast"
  },
  {
    "metric": "C$22M+",
    "label": "Client Revenue Pipeline Generated"
  },
  {
    "metric": "99.2%",
    "label": "Canadian Client Retention Rate"
  },
  {
    "metric": "24/7",
    "label": "Timezone-Aligned Strategic Support"
  }
],
    marketInsightsTitle: "What We Know About Marketing Across Canada",
    marketInsightsSubtitle: "CANADIAN DYNAMICS",
    marketInsights: [
  {
    "title": "Geographic Density Clustering",
    "desc": "Over 70% of Canada’s population lives within 100km of the US border. We focus ad spend on dense urban corridors to maximize ROI."
  },
  {
    "title": "Bilingual Language Regulations in Quebec",
    "desc": "Marketing in Quebec requires strict French language adherence and cultural localization. We build tailored francophone landing pages."
  },
  {
    "title": "High Mobile & Cross-Border Commerce",
    "desc": "Canadians conduct extensive online comparison research before buying. Clear shipping terms and transparent Canadian pricing convert 40% better."
  },
  {
    "title": "Strict CASL Anti-Spam Compliance",
    "desc": "Canadian anti-spam laws carry strict penalties. We engineer compliant opt-in lead funnels and automated double-opt-in workflows."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "National Search & Geo Audit",
    "desc": "Analyzing search intent and competitor positioning across Ontario, BC, Alberta, and Quebec."
  },
  {
    "num": "02",
    "title": "Bilingual Architecture Blueprint",
    "desc": "Setting up multi-province landing pages, provincial schema, and Google Business Profiles."
  },
  {
    "num": "03",
    "title": "Omni-Channel Campaign Launch",
    "desc": "Deploying high-intent Google Ads, localized social funnels, and Canadian content hubs."
  },
  {
    "num": "04",
    "title": "Attribution & National Scaling",
    "desc": "Tracking conversion volume per province, optimizing ad bids, and scaling revenue."
  }
],
    industries: [
  {
    "icon": "FaBuilding",
    "name": "Real Estate & Development",
    "desc": "Capturing buyers and investors across Toronto, Vancouver, Calgary, and Montreal."
  },
  {
    "icon": "FaBriefcase",
    "name": "B2B & Professional Services",
    "desc": "Generating corporate client inquiries for accounting, legal, and engineering firms."
  },
  {
    "icon": "FaUserMd",
    "name": "Healthcare & Specialized Clinics",
    "desc": "Patient acquisition for private dental, physiotherapy, and medical specialists."
  },
  {
    "icon": "FaShoppingCart",
    "name": "E-Commerce & National Retail",
    "desc": "Scaling Shopify Canada and direct-to-consumer nationwide sales channels."
  },
  {
    "icon": "FaUtensils",
    "name": "Hospitality & Tourism",
    "desc": "Promoting premier Canadian resort destinations, dining, and travel experiences."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Canadian Tech Startups & SaaS",
    "desc": "Driving user acquisition in the Toronto-Waterloo tech corridor and Vancouver hub."
  }
],
    plans: [
  {
    "name": "Canada Growth Core",
    "badge": "City Focus",
    "usdPrice": "799",
    "inrPrice": "64,999",
    "desc": "Ideal for local Canadian service businesses targeting a specific city market like Toronto, Vancouver, or Calgary.",
    "features": [
      "Up to 20 High-Intent Canadian Keywords",
      "Google Business Profile Geo-Optimization",
      "Canadian Local Citations & YellowPages Listings",
      "On-Page SEO & Content Tuning (4 Pages/mo)",
      "Monthly Executive ROI Report",
      "Dedicated Canadian Account Director"
    ]
  },
  {
    "name": "Canada Multi-Province",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,499",
    "inrPrice": "1,19,999",
    "desc": "Comprehensive multi-city campaign combining national SEO, Google Ads management, and conversion rate optimization.",
    "features": [
      "Up to 45 Multi-Province Keywords",
      "Google Ads (PPC) Campaign Management",
      "Multi-City Landing Page Architecture",
      "High-Authority Content Marketing (6 Posts/mo)",
      "Competitor Backlink Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "Canada National Monopoly",
    "badge": "National Dominance",
    "usdPrice": "2,999",
    "inrPrice": "2,44,999",
    "desc": "Full-scale nationwide market takeover for Canadian national brands, franchise networks, and enterprise e-commerce.",
    "features": [
      "Coast-to-Coast Keyword Domination (100+ Keywords)",
      "Omni-Channel PPC (Google, Meta, LinkedIn)",
      "Bilingual English/French Optimization Available",
      "Tier-1 Canadian Media PR & Backlinks",
      "Dedicated Account Squad & Daily Slack Channel",
      "Custom Multi-Touch Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok expanded our Canadian legal practice nationwide. We now generate inbound corporate inquiries from Ontario, Alberta, and BC daily.",
    "author": "Robert P.",
    "role": "Managing Partner",
    "company": "Canadian National Commercial Law",
    "rating": 5
  },
  {
    "quote": "Their bilingual campaign execution opened up the Quebec market for our e-commerce brand, boosting our overall Canadian revenue by 180%.",
    "author": "Marc L.",
    "role": "Director of Growth",
    "company": "Montreal Retail Brand",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "Can Webmok handle bilingual marketing campaigns in both English and French?",
    "a": "Yes! We create culturally resonant, native French content and landing pages for Quebec alongside national English campaigns across the other provinces."
  },
  {
    "q": "Are your marketing practices compliant with PIPEDA and CASL?",
    "a": "Yes, 100%. All tracking, lead forms, and automated communications are strictly architected to adhere to Canadian privacy and anti-spam legislation."
  },
  {
    "q": "How do you coordinate with Canadian timezones (EST to PST)?",
    "a": "We have dedicated account squads covering Eastern (Toronto), Central (Calgary), and Pacific (Vancouver) business hours."
  },
  {
    "q": "What is the contract term?",
    "a": "All our Canadian digital marketing packages are flexible month-to-month agreements with zero mandatory lock-ins."
  }
]
  };

  return (
    <div className="wm-intl-canada-page-root">
      {/* 1. HERO SECTION */}
      <section className="wm-intl-canada-hero-section" id="overview">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-hero-grid">
            <div className="wm-intl-canada-hero-left">
              <span className="wm-intl-canada-hero-est-tag">{pageData.tagline}</span>

              <h1 className="wm-intl-canada-hero-title-dual">
                <span className="wm-intl-canada-hero-italic-gold">{pageData.heroItalic}</span>
                <span className="wm-intl-canada-hero-bold-white">{pageData.heroHighlight}</span>
              </h1>

              <p className="wm-intl-canada-hero-lead-desc">{pageData.leadDesc}</p>
              <p className="wm-intl-canada-hero-body-desc">{pageData.bodyDesc}</p>

              <div className="wm-intl-canada-hero-btns-row">
                <button
                  type="button"
                  className="wm-intl-canada-btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - Free Strategy Proposal`)}
                >
                  Get Free Digital Proposal <FaPaperPlane />
                </button>
                <a href="#pricing-plans" className="wm-intl-canada-btn-outline">
                  View {pageData.city} Rates <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Right Column: Credibility Stack */}
            <div className="wm-intl-canada-hero-right-trust">
              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>#1 Global Growth Agency</h4>
                  <p>Clutch Leader · 2025/2026</p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-clutch">C</div>
              </div>

              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>Top-Rated Plus</h4>
                  <p>Upwork Top 1% Verified Agency</p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-upwork">up</div>
              </div>

              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>4.9 / 5.0 Rating</h4>
                  <p>
                    Google Verified · 140+{' '}
                    <span className="wm-intl-canada-tcard-stars">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                  </p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-google">
                  <FaGoogle />
                </div>
              </div>

              <div className="wm-intl-canada-trust-card">
                <div className="wm-intl-canada-tcard-info">
                  <h4>Google Partner</h4>
                  <p>Premier Certified Agency</p>
                </div>
                <div className="wm-intl-canada-tcard-badge wm-intl-canada-badge-partner">
                  <FaAward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SUB-NAV */}
      <nav className="wm-intl-canada-inpage-nav">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-inpage-nav-inner">
            <a href="#overview" className="wm-intl-canada-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-canada-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-canada-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-canada-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-canada-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-canada-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-canada-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-canada-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-canada-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-canada-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      {/* 3. STATS STRIP */}
      <section className="wm-intl-canada-stats-strip">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-stats-grid">
            {pageData.stats.map((st, i) => (
              <div key={i} className="wm-intl-canada-stat-card">
                <strong>{st.num}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-canada-services-section" id="services">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-canada-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-canada-service-card">
                <div className="wm-intl-canada-svc-icon">
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
      <section className="wm-intl-canada-whyoutside-section" id="why-us">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-whyoutside-grid">
            <div className="wm-intl-canada-whyoutside-text">
              <span className="wm-intl-canada-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-canada-compare-table">
              <div className="wm-intl-canada-compare-row wm-intl-canada-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-canada-compare-row">
                  <div className="wm-intl-canada-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-canada-compare-local">{cp.local}</div>
                  <div className="wm-intl-canada-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-canada-results-section" id="results">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-canada-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-canada-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS */}
      <section className="wm-intl-canada-market-section" id="market-dynamics">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-canada-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-canada-market-card">
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS */}
      <section className="wm-intl-canada-process-section" id="process">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-canada-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-canada-process-card">
                <span className="wm-intl-canada-proc-num">STEP {ps.num}</span>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-canada-industries-section" id="industries">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-canada-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-canada-industry-card">
                <div className="wm-intl-canada-ind-icon">
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
      <section className="wm-intl-canada-pricing-section" id="pricing-plans">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-canada-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-canada-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-canada-currency-toggle">
              {[{"code":"CAD","symbol":"C$","rate":1.36},{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-canada-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-canada-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-canada-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-canada-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-canada-card-top">
                    {plan.badge && <span className="wm-intl-canada-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-canada-card-name">{plan.name}</h3>
                    <p className="wm-intl-canada-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-canada-card-pricing">
                    <div className="wm-intl-canada-price-row">
                      <span className="wm-intl-canada-price-val">{displayPrice}</span>
                      <span className="wm-intl-canada-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-canada-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-canada-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-canada-card-action">
                    <button
                      type="button"
                      className="wm-intl-canada-select-btn"
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
      <section className="wm-intl-canada-testimonials-section" id="testimonials">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-canada-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-canada-testimonial-card">
                <div className="wm-intl-canada-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-canada-t-quote">"{t.quote}"</p>
                <div className="wm-intl-canada-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US */}
      <section className="wm-intl-canada-advantage-section">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-canada-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-advantage-grid">
            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaShieldAlt /></div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
            </div>

            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaRocket /></div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
            </div>

            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaHeadset /></div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
            </div>

            <div className="wm-intl-canada-advantage-card">
              <div className="wm-intl-canada-aicon"><FaClock /></div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-canada-faqs-section" id="faqs">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-sec-heading-center">
            <span className="wm-intl-canada-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-canada-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-canada-sec-bar-center"></div>
          </div>

          <div className="wm-intl-canada-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-canada-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-canada-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-canada-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-canada-bottom-banner">
        <div className="wm-intl-canada-container">
          <div className="wm-intl-canada-banner-inner">
            <div className="wm-intl-canada-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-canada-banner-btns">
              <button
                type="button"
                className="wm-intl-canada-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-canada-bbtn-quote"
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

export default CanadaDigitalMarketingPage;

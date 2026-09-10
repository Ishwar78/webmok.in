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
import './LosAngelesDigitalMarketingPage.css';

const LosAngelesDigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageData = {
    name: "Los Angeles Digital Marketing Agency",
    city: "Los Angeles",
    region: "California, USA",
    tagline: "PREMIER LOS ANGELES GROWTH AGENCY · CALIFORNIA, USA",
    heroHighlight: "Los Angeles Digital Marketing & SEO",
    heroItalic: "Ignite Explosive Brand Growth with",
    leadDesc: "Scale your LA brand with viral paid social campaigns, precision Google Ads, and aggressive SEO built for Southern California’s trendsetting market.",
    bodyDesc: "From Silicon Beach tech startups and Beverly Hills luxury brands to DTLA commerce and Santa Monica direct-to-consumer powerhouses—Webmok engineers explosive digital growth.",
    stats: [
  {
    "num": "440%",
    "label": "Average LA Client Revenue Lift"
  },
  {
    "num": "5.9x",
    "label": "Average ROAS on Paid Social"
  },
  {
    "num": "75+",
    "label": "LA & SoCal Brands Scaled"
  },
  {
    "num": "100%",
    "label": "Data-Driven Attribution"
  }
],
    services: [
  {
    "icon": "FaSearch",
    "title": "LA Local SEO & Google Maps",
    "desc": "Capturing high-intent local searchers across West LA, Beverly Hills, DTLA, Pasadena, and the San Fernando Valley."
  },
  {
    "icon": "FaBullhorn",
    "title": "High-ROAS Google Ads & Shopping",
    "desc": "Precision search funnels, Performance Max campaigns, and Google Shopping optimization designed for high conversion volume."
  },
  {
    "icon": "FaShareAlt",
    "title": "Viral Paid Social (Meta & TikTok)",
    "desc": "High-impact creative production, UGC integration, and algorithmic ad scaling across TikTok, Instagram, and YouTube."
  },
  {
    "icon": "FaPenNib",
    "title": "Influencer & Brand Amplification",
    "desc": "Connecting your brand with targeted creator networks to drive authentic engagement, viral reach, and qualified sales."
  },
  {
    "icon": "FaLaptopCode",
    "title": "E-Commerce & High-Converting UX",
    "desc": "Speed-optimized Shopify, Webflow, and custom headless e-commerce platforms engineered for maximum checkout conversion."
  },
  {
    "icon": "FaVideo",
    "title": "Commercial Video Production",
    "desc": "Studio-grade video ads, lifestyle storytelling, and brand creative tailored for Southern California’s visual aesthetic."
  }
],
    whyHireOutsideTitle: "Why LA Brands Partner with Webmok",
    whyHireOutsideSubtitle: "CREATIVE VELOCITY · TECHNICAL RIGOR",
    whyHireDesc1: "Los Angeles agencies frequently charge astronomical retainer rates for aesthetic fluff with zero accountability for pipeline revenue or blended customer acquisition cost (CAC).",
    whyHireDesc2: "Webmok combines world-class creative velocity with mathematical media buying and technical SEO infrastructure to deliver compound revenue growth.",
    comparisonPoints: [
  {
    "feature": "Execution Speed",
    "local": "Slow Multi-Week Bureaucracy",
    "webmok": "Rapid 48-Hour Creative & Technical Sprints"
  },
  {
    "feature": "Attribution & Analytics",
    "local": "Vanity Metrics (Likes/Views)",
    "webmok": "Direct ROAS, LTV & Pipeline Revenue Attribution"
  },
  {
    "feature": "Monthly Investment",
    "local": "$10,000 – $20,000 / month",
    "webmok": "From $849 – $3,299 / month (High ROI)"
  },
  {
    "feature": "Contract Terms",
    "local": "Rigid Long-Term Lock-Ins",
    "webmok": "Flexible Month-to-Month Agreements"
  },
  {
    "feature": "Timezone Alignment",
    "local": "PST Standard",
    "webmok": "Dedicated US Pacific Timezone Account Squad"
  }
],
    resultsTitle: "LA Performance Telemetry",
    resultsSubtitle: "VERIFIABLE METRICS",
    resultsStats: [
  {
    "metric": "75+",
    "label": "LA Brands Scaled Successfully"
  },
  {
    "metric": "$21M+",
    "label": "Tracked Client Revenue Generated"
  },
  {
    "metric": "99.3%",
    "label": "Client Satisfaction & Retention"
  },
  {
    "metric": "24/7",
    "label": "Dedicated PST Support on Call"
  }
],
    marketInsightsTitle: "What We Know About Marketing in Los Angeles",
    marketInsightsSubtitle: "SOCAL DYNAMICS",
    marketInsights: [
  {
    "title": "Aesthetic Standard is Non-Negotiable",
    "desc": "LA consumers have the highest visual standard in the world. Poor design kills conversion instantly; premium aesthetics build immediate trust."
  },
  {
    "title": "Creator & Social-First Discovery",
    "desc": "Over 74% of consumer brand discovery in SoCal starts on Instagram and TikTok. We engineer social ad funnels that feed organic search demand."
  },
  {
    "title": "Hyper-Fragmented Neighborhoods",
    "desc": "Marketing to Santa Monica requires a different tone and geo-targeting than Pasadena or Downtown LA. We tailor funnels per district."
  },
  {
    "title": "DTC E-Commerce Saturation",
    "desc": "With thousands of competing DTC brands, unit economics and retention modeling are required to scale profitably beyond iOS privacy changes."
  }
],
    processSteps: [
  {
    "num": "01",
    "title": "Brand & Funnel Audit",
    "desc": "Auditing ad accounts, creative performance, conversion rates, and competitor vulnerabilities."
  },
  {
    "num": "02",
    "title": "Creative & Search Architecture",
    "desc": "Crafting high-converting ad angles, technical SEO fixes, and mobile-first landing pages."
  },
  {
    "num": "03",
    "title": "Velocity Media Scaling",
    "desc": "Deploying high-ROAS Google and Meta ad campaigns with automated bid optimization."
  },
  {
    "num": "04",
    "title": "Compound Growth Optimization",
    "desc": "Weekly creative iterations, email/SMS retention funnels, and real-time revenue telemetry."
  }
],
    industries: [
  {
    "icon": "FaShoppingCart",
    "name": "Direct-to-Consumer (DTC) Brands",
    "desc": "Scaling Shopify and custom e-commerce revenue with multi-channel ads and SEO."
  },
  {
    "icon": "FaLaptopCode",
    "name": "Silicon Beach Tech Startups",
    "desc": "Accelerating product signups, user acquisition, and venture-backed ARR growth."
  },
  {
    "icon": "FaBuilding",
    "name": "Luxury Real Estate & Architects",
    "desc": "Capturing ultra-high-net-worth buyers in Beverly Hills, Bel Air, and Malibu."
  },
  {
    "icon": "FaUserMd",
    "name": "Aesthetic Medicine & Wellness",
    "desc": "Dominating local search and social ads for plastic surgery, medspas, and clinics."
  },
  {
    "icon": "FaUtensils",
    "name": "Hospitality, Dining & Nightlife",
    "desc": "Driving reservations and viral buzz for premier LA culinary and entertainment venues."
  },
  {
    "icon": "FaCompass",
    "name": "Entertainment & Creative Agencies",
    "desc": "Building authoritative web platforms and digital PR for creative production companies."
  }
],
    plans: [
  {
    "name": "LA Starter Growth",
    "badge": "Local Traction",
    "usdPrice": "849",
    "inrPrice": "69,999",
    "desc": "Ideal for local LA service businesses, clinics, and boutique shops seeking dominant local search visibility.",
    "features": [
      "Up to 20 High-Intent LA Keywords",
      "Google Business Profile Geo-Optimization",
      "Local Citations & LA Business Listings",
      "Core On-Page SEO & Content Fixes",
      "Monthly Executive Performance Report",
      "Dedicated US PST Account Lead"
    ]
  },
  {
    "name": "LA Market Accelerator",
    "badge": "Most Popular",
    "highlight": true,
    "usdPrice": "1,649",
    "inrPrice": "1,34,999",
    "desc": "Comprehensive multi-channel expansion combining SEO, Google Ads, and Meta advertising for rapid customer growth.",
    "features": [
      "Up to 50 SoCal & LA Keywords",
      "Google Ads & Meta Ads Management ($4k spend)",
      "High-Converting Landing Page Optimization",
      "Strategic Content Creation (6 High-Impact Articles/mo)",
      "Competitor Backlink & Ad Interception",
      "Bi-Weekly Live Strategy Sessions"
    ]
  },
  {
    "name": "LA Enterprise Powerhouse",
    "badge": "Category Leader",
    "usdPrice": "3,299",
    "inrPrice": "2,69,999",
    "desc": "Full-scale market dominance for direct-to-consumer brands, venture-funded startups, and regional powerhouses.",
    "features": [
      "Unlimited Keywords & Multi-Channel Campaigns",
      "Omni-Channel PPC (Google, Meta, TikTok, LinkedIn)",
      "Bespoke Web App / E-Commerce Redesign",
      "High-Tier Digital PR & Media Outreach",
      "Dedicated Senior Account Lead & Daily Slack Channel",
      "Advanced Revenue Attribution Modeling"
    ]
  }
],
    testimonials: [
  {
    "quote": "Webmok scaled our DTC beauty brand from $40k/mo to over $280k/mo in profitable revenue within seven months.",
    "author": "Chloe T.",
    "role": "Founder & CEO",
    "company": "SoCal Organic Beauty Co.",
    "rating": 5
  },
  {
    "quote": "Our medical spa in Beverly Hills now ranks in the top 3 on Google Maps across all high-ticket treatment keywords.",
    "author": "Dr. Michael A.",
    "role": "Medical Director",
    "company": "Beverly Hills Aesthetic Center",
    "rating": 5
  }
],
    faqs: [
  {
    "q": "How does Webmok coordinate with LA businesses in the Pacific Timezone (PST)?",
    "a": "We operate with dedicated US Pacific Timezone squads. Your account manager and strategy calls are fully aligned with LA business hours."
  },
  {
    "q": "Do you manage e-commerce marketing for direct-to-consumer (DTC) brands in LA?",
    "a": "Yes! We specialize in Shopify, WooCommerce, and custom headless e-commerce stores, driving revenue through targeted Google Shopping, Meta ads, and technical e-commerce SEO."
  },
  {
    "q": "How do you prevent ad budget waste on Google and Meta in Los Angeles?",
    "a": "We implement hyper-granular zip-code targeting, negative keyword sculpting, algorithmic bid adjustments, and daily ROAS telemetry tracking to ensure zero wasted spend."
  },
  {
    "q": "What is the contract term?",
    "a": "All our Los Angeles digital marketing packages operate on flexible month-to-month terms with zero lock-in."
  }
]
  };

  return (
    <div className="wm-intl-losangeles-page-root">
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
      <nav className="wm-intl-losangeles-inpage-nav">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-inpage-nav-inner">
            <a href="#overview" className="wm-intl-losangeles-inpage-nav-link">Overview</a>
            <a href="#services" className="wm-intl-losangeles-inpage-nav-link">Services</a>
            <a href="#why-us" className="wm-intl-losangeles-inpage-nav-link">Why Choose Us</a>
            <a href="#results" className="wm-intl-losangeles-inpage-nav-link">Live Telemetry</a>
            <a href="#market-dynamics" className="wm-intl-losangeles-inpage-nav-link">Market Insights</a>
            <a href="#process" className="wm-intl-losangeles-inpage-nav-link">Our Approach</a>
            <a href="#industries" className="wm-intl-losangeles-inpage-nav-link">Industries</a>
            <a href="#pricing-plans" className="wm-intl-losangeles-inpage-nav-link">Published Rates</a>
            <a href="#testimonials" className="wm-intl-losangeles-inpage-nav-link">Client Reviews</a>
            <a href="#faqs" className="wm-intl-losangeles-inpage-nav-link">FAQs</a>
          </div>
        </div>
      </nav>

      

      {/* 4. SERVICES SUITE */}
      <section className="wm-intl-losangeles-services-section" id="services">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">COMPREHENSIVE CAPABILITIES</span>
            <h2 className="wm-intl-losangeles-sec-h2">
              Our {pageData.city} <span>Digital Marketing Services</span>
            </h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-services-grid">
            {pageData.services.map((svc, i) => (
              <div key={i} className="wm-intl-losangeles-service-card">
                <div className="wm-intl-losangeles-svc-card-glow"></div>
                <div className="wm-intl-losangeles-svc-card-top">
                  <div className="wm-intl-losangeles-svc-icon">
                    {svc.icon === 'FaSearch' && <FaSearch />}
                    {svc.icon === 'FaBullhorn' && <FaBullhorn />}
                    {svc.icon === 'FaShareAlt' && <FaShareAlt />}
                    {svc.icon === 'FaPenNib' && <FaPenNib />}
                    {svc.icon === 'FaLaptopCode' && <FaLaptopCode />}
                    {svc.icon === 'FaVideo' && <FaVideo />}
                    {svc.icon === 'FaChartLine' && <FaChartLine />}
                    {svc.icon === 'FaCompass' && <FaCompass />}
                  </div>
                  <span className="wm-intl-losangeles-svc-num">0{i + 1}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="wm-intl-losangeles-svc-card-footer">
                  <button
                    type="button"
                    className="wm-intl-losangeles-svc-card-btn"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${pageData.name} - ${svc.title}`)}
                  >
                    <span>Explore Solution</span>
                    <FaArrowRight className="wm-intl-losangeles-svc-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY HIRE OUTSIDE */}
      <section className="wm-intl-losangeles-whyoutside-section" id="why-us">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-whyoutside-grid">
            <div className="wm-intl-losangeles-whyoutside-text">
              <span className="wm-intl-losangeles-sec-badge">{pageData.whyHireOutsideSubtitle}</span>
              <h2>{pageData.whyHireOutsideTitle}</h2>
              <p>{pageData.whyHireDesc1}</p>
              <p>{pageData.whyHireDesc2}</p>
            </div>

            <div className="wm-intl-losangeles-compare-table">
              <div className="wm-intl-losangeles-compare-row wm-intl-losangeles-compare-hdr">
                <div>Deliverable / Metric</div>
                <div>Typical Local Agency</div>
                <div>Webmok Advantage</div>
              </div>
              {pageData.comparisonPoints.map((cp, idx) => (
                <div key={idx} className="wm-intl-losangeles-compare-row">
                  <div className="wm-intl-losangeles-compare-feat">{cp.feature}</div>
                  <div className="wm-intl-losangeles-compare-local">{cp.local}</div>
                  <div className="wm-intl-losangeles-compare-wm">{cp.webmok}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS TELEMETRY */}
      <section className="wm-intl-losangeles-results-section" id="results">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">{pageData.resultsSubtitle}</span>
            <h2 className="wm-intl-losangeles-sec-h2">{pageData.resultsTitle}</h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-results-grid">
            {pageData.resultsStats.map((rs, i) => (
              <div key={i} className="wm-intl-losangeles-result-card">
                <strong>{rs.metric}</strong>
                <p>{rs.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MARKET DYNAMICS (WHAT WE KNOW ABOUT MARKETING) */}
      <section className="wm-intl-losangeles-market-section" id="market-dynamics">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">{pageData.marketInsightsSubtitle}</span>
            <h2 className="wm-intl-losangeles-sec-h2">{pageData.marketInsightsTitle}</h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-market-grid">
            {pageData.marketInsights.map((mi, i) => (
              <div key={i} className="wm-intl-losangeles-market-card">
                <div className="wm-intl-losangeles-market-card-glow"></div>
                <div className="wm-intl-losangeles-market-card-hdr">
                  <div className="wm-intl-losangeles-market-badge-wrap">
                    <span className="wm-intl-losangeles-market-badge">MARKET DYNAMICS</span>
                    <span className="wm-intl-losangeles-market-num">0{i + 1}</span>
                  </div>
                  <div className="wm-intl-losangeles-market-pulse-dot"></div>
                </div>
                <h4>{mi.title}</h4>
                <p>{mi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 4-STEP PROCESS (HOW WE WORK FLOATING CARDS) */}
      <section className="wm-intl-losangeles-process-section" id="process">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">OUR PROCESS & APPROACH</span>
            <h2 className="wm-intl-losangeles-sec-h2">
              Our 4-Step <span>Agile Growth Framework</span>
            </h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-process-grid">
            {pageData.processSteps.map((ps, i) => (
              <div key={i} className="wm-intl-losangeles-process-card">
                <div className="wm-intl-losangeles-proc-card-glow"></div>
                <div className="wm-intl-losangeles-proc-header-row">
                  <span className="wm-intl-losangeles-proc-num">0{i + 1}</span>
                  <div className="wm-intl-losangeles-proc-icon">
                    {i === 0 && <FaRegLightbulb />}
                    {i === 1 && <FaProjectDiagram />}
                    {i === 2 && <FaLaptopCode />}
                    {i === 3 && <FaRocket />}
                  </div>
                </div>
                <h4>{ps.title}</h4>
                <p>{ps.desc}</p>
                <div className="wm-intl-losangeles-proc-step-tag">Phase 0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="wm-intl-losangeles-industries-section" id="industries">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">WHO WE WORK WITH</span>
            <h2 className="wm-intl-losangeles-sec-h2">
              Specialized Industry <span>Growth Solutions</span>
            </h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-industries-grid">
            {pageData.industries.map((ind, i) => (
              <div key={i} className="wm-intl-losangeles-industry-card">
                <div className="wm-intl-losangeles-ind-card-top">
                  <div className="wm-intl-losangeles-ind-icon">
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
                  <span className="wm-intl-losangeles-ind-tag">VERTICAL 0{i + 1}</span>
                </div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING PLANS */}
      <section className="wm-intl-losangeles-pricing-section" id="pricing-plans">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">PUBLISHED RATES · ZERO LOCK-IN</span>
            <h2 className="wm-intl-losangeles-sec-h2">
              Transparent {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>

            {/* Currency Switcher */}
            <div className="wm-intl-losangeles-currency-toggle" style={{ marginTop: '24px' }}>
              {[{"code":"USD","symbol":"$","rate":1},{"code":"INR","symbol":"₹","rate":83}].map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`wm-intl-losangeles-curr-btn ${currency === c.code ? 'active' : ''}`}
                  onClick={() => setCurrency(c.code)}
                >
                  {c.symbol} {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="wm-intl-losangeles-cards-grid">
            {pageData.plans.map((plan, i) => {
              const displayPrice = currency === 'INR' ? `₹${plan.inrPrice}` : currency === 'EUR' ? `€${Math.round(plan.usdPrice * 0.92)}` : currency === 'GBP' ? `£${Math.round(plan.usdPrice * 0.79)}` : currency === 'AED' ? `AED ${Math.round(plan.usdPrice * 3.67)}` : currency === 'AUD' ? `A$${Math.round(plan.usdPrice * 1.52)}` : currency === 'CAD' ? `C$${Math.round(plan.usdPrice * 1.36)}` : `$${plan.usdPrice}`;
              return (
                <div key={i} className={`wm-intl-losangeles-card ${plan.highlight ? 'popular' : ''}`}>
                  {plan.highlight && (
                    <div className="wm-intl-losangeles-popular-tag">MOST POPULAR</div>
                  )}

                  <div className="wm-intl-losangeles-card-top">
                    {plan.badge && <span className="wm-intl-losangeles-plan-badge">{plan.badge}</span>}
                    <h3 className="wm-intl-losangeles-card-name">{plan.name}</h3>
                    <p className="wm-intl-losangeles-card-desc">{plan.desc}</p>
                  </div>

                  <div className="wm-intl-losangeles-card-pricing">
                    <div className="wm-intl-losangeles-price-row">
                      <span className="wm-intl-losangeles-price-val">{displayPrice}</span>
                      <span className="wm-intl-losangeles-price-period">/ month</span>
                    </div>
                  </div>

                  <div className="wm-intl-losangeles-card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {plan.features.map((feat, fi) => (
                        <li key={fi}>
                          <FaCheck className="wm-intl-losangeles-feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wm-intl-losangeles-card-action">
                    <button
                      type="button"
                      className="wm-intl-losangeles-select-btn"
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
      <section className="wm-intl-losangeles-testimonials-section" id="testimonials">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="wm-intl-losangeles-sec-h2">
              What {pageData.city} <span>Leaders Say About Webmok</span>
            </h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-testimonials-grid">
            {pageData.testimonials.map((t, idx) => (
              <div key={idx} className="wm-intl-losangeles-testimonial-card">
                <div className="wm-intl-losangeles-t-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="wm-intl-losangeles-t-quote">"{t.quote}"</p>
                <div className="wm-intl-losangeles-t-author">
                  <h5>{t.author}</h5>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OPERATIONAL GUARANTEES / WHY US (CLEAN WHITE) */}
      <section className="wm-intl-losangeles-advantage-section" id="why-us-guarantees">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">WHY CHOOSE WEBMOK</span>
            <h2 className="wm-intl-losangeles-sec-h2">The Webmok Operational Guarantees</h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-advantage-grid">
            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-adv-glow"></div>
              <div className="wm-intl-losangeles-adv-top">
                <div className="wm-intl-losangeles-aicon"><FaShieldAlt /></div>
                <span className="wm-intl-losangeles-adv-badge">STANDARDS</span>
              </div>
              <h4>100% White-Hat Proven Methods</h4>
              <p>Strict algorithm compliance protecting your brand equity while compounding organic search traffic.</p>
              <div className="wm-intl-losangeles-adv-check-row">
                <FaCheck className="wm-intl-losangeles-adv-check" /> <span>Google Webmaster Certified</span>
              </div>
            </div>

            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-adv-glow"></div>
              <div className="wm-intl-losangeles-adv-top">
                <div className="wm-intl-losangeles-aicon"><FaRocket /></div>
                <span className="wm-intl-losangeles-adv-badge">TELEMETRY</span>
              </div>
              <h4>Real-Time Telemetry Dashboards</h4>
              <p>Live 24/7 access to your custom performance analytics, keyword rankings, and direct ROI attribution.</p>
              <div className="wm-intl-losangeles-adv-check-row">
                <FaCheck className="wm-intl-losangeles-adv-check" /> <span>24/7 Live BI Access</span>
              </div>
            </div>

            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-adv-glow"></div>
              <div className="wm-intl-losangeles-adv-top">
                <div className="wm-intl-losangeles-aicon"><FaHeadset /></div>
                <span className="wm-intl-losangeles-adv-badge">DEDICATED</span>
              </div>
              <h4>Dedicated Senior Squad</h4>
              <p>Work directly with dedicated senior strategists and technical growth engineers on call.</p>
              <div className="wm-intl-losangeles-adv-check-row">
                <FaCheck className="wm-intl-losangeles-adv-check" /> <span>Direct Senior Access</span>
              </div>
            </div>

            <div className="wm-intl-losangeles-advantage-card">
              <div className="wm-intl-losangeles-adv-glow"></div>
              <div className="wm-intl-losangeles-adv-top">
                <div className="wm-intl-losangeles-aicon"><FaClock /></div>
                <span className="wm-intl-losangeles-adv-badge">FLEXIBILITY</span>
              </div>
              <h4>Zero Mandatory Lock-In</h4>
              <p>Flexible month-to-month contracts. You continue because you see compounding results and profitable pipeline.</p>
              <div className="wm-intl-losangeles-adv-check-row">
                <FaCheck className="wm-intl-losangeles-adv-check" /> <span>Month-to-Month Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. REGIONAL FAQS */}
      <section className="wm-intl-losangeles-faqs-section" id="faqs">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-sec-heading-center">
            <span className="wm-intl-losangeles-sec-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wm-intl-losangeles-sec-h2">
              Common Queries About Our {pageData.city} <span>Growth Packages</span>
            </h2>
            <div className="wm-intl-losangeles-sec-bar-center"></div>
          </div>

          <div className="wm-intl-losangeles-faqs-wrap">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className={`wm-intl-losangeles-faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="wm-intl-losangeles-faq-q"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="wm-intl-losangeles-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BOTTOM CONVERSION BANNER */}
      <section className="wm-intl-losangeles-bottom-banner">
        <div className="wm-intl-losangeles-container">
          <div className="wm-intl-losangeles-banner-inner">
            <div className="wm-intl-losangeles-banner-text">
              <h2>Ready to Accelerate Revenue in {pageData.city}?</h2>
              <p>Schedule a quick 1-on-1 strategy consultation with our senior digital directors today.</p>
            </div>
            <div className="wm-intl-losangeles-banner-btns">
              <button
                type="button"
                className="wm-intl-losangeles-bbtn-call"
                onClick={onOpenCallMe}
              >
                <FaPhoneAlt /> Call in 28 Sec
              </button>
              <button
                type="button"
                className="wm-intl-losangeles-bbtn-quote"
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

export default LosAngelesDigitalMarketingPage;

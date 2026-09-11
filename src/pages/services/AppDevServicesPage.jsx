import React, { useState } from 'react';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaAward,
  FaChevronDown,
  FaCheckCircle,
  FaLayerGroup,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaLaptopCode,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaBullhorn,
  FaTools,
  FaGlobe,
  FaShoppingBag,
  FaVideo,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './AppDevServicesPage.css';

const AppDevServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "9+ yrs",
    "label": "Of native & cross-platform app engineering"
  },
  {
    "num": "200+",
    "label": "Apps published on App Store & Play Store"
  },
  {
    "num": "4.8★",
    "label": "Average client app rating across app stores"
  },
  {
    "num": "5M+",
    "label": "Total active app downloads processed"
  }
];

  const caseStudies = [
  {
    "cat": "D2C E-Commerce App",
    "metric": "4.9★",
    "sub": "250k+ Downloads · 4.2x Repeat Orders",
    "name": "FreshGrocer Mobile App",
    "desc": "Blazing fast grocery delivery app with 15-minute slot booking and live GPS rider tracking."
  },
  {
    "cat": "Healthcare & Telemedicine",
    "metric": "120k+",
    "sub": "Doctor Consultations Completed",
    "name": "DocPulse Health App",
    "desc": "Secure video consultation app with automated prescription generation and medicine delivery."
  },
  {
    "cat": "Fintech & Wallet",
    "metric": "₹85Cr",
    "sub": "Secure UPI Transactions",
    "name": "PaySwift Digital Wallet",
    "desc": "Bank-grade encrypted mobile payment app with instant QR scanning and bill payments."
  },
  {
    "cat": "EdTech Learning",
    "metric": "45,000+",
    "sub": "Daily Active Students",
    "name": "StudySmart Mobile Academy",
    "desc": "Interactive video learning app with offline lecture downloads and quiz leaderboards."
  },
  {
    "cat": "Real Estate App",
    "metric": "3.4×",
    "sub": "Property Inquiry Lift",
    "name": "HomeFinder NCR Mobile",
    "desc": "Geo-located property search app with interactive map pins and 1-click WhatsApp agent chat."
  },
  {
    "cat": "On-Demand Logistics",
    "metric": "85,000",
    "sub": "Monthly Fleet Deliveries",
    "name": "QuickTruck Logistics App",
    "desc": "Driver and customer dual app ecosystem with automated fare calculation and live telemetry."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaMobileAlt />,
      title: "React Native & Flutter Apps",
      desc: "Single codebase powering both iOS and Android with native performance."
    },
    {
      badge: '02',
      icon: <FaLaptopCode />,
      title: "Native iOS (Swift & SwiftUI)",
      desc: "Optimized specifically for iPhone, iPad, and Apple Watch ecosystems."
    },
    {
      badge: '03',
      icon: <FaRocket />,
      title: "Native Android (Kotlin)",
      desc: "Engineered for seamless compatibility across thousands of Android device models."
    },
    {
      badge: '04',
      icon: <FaCogs />,
      title: "Real-Time Backend & Cloud APIs",
      desc: "Node.js and Firebase backends handling instant messaging and data sync."
    },
    {
      badge: '05',
      icon: <FaShieldAlt />,
      title: "Payment Gateways & Biometrics",
      desc: "Razorpay, Stripe, Apple Pay, Google Pay, and FaceID authentication."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "App Store Optimization (ASO)",
      desc: "Keyword positioning to rank in the top search results of app stores."
    }
  ];

  const industries = [
  "Electronics & Technology",
  "Real Estate & Infrastructure",
  "E-Commerce & D2C Brands",
  "Manufacturing & Industrial",
  "Healthcare & Medical Clinics",
  "Education, Coaching & EdTech",
  "Automotive & EV Mobility",
  "Financial Services & Fintech",
  "Hospitality & Tourism",
  "Home Decor & Construction",
  "Food & Beverage (FMCG)",
  "B2B Corporate Services"
];

  const faqs = [
  {
    "q": "Should we build native apps or use cross-platform Flutter/React Native?",
    "a": "For most commercial apps, Flutter and React Native provide 95% native performance while saving 40% in development time and cost by sharing code across iOS and Android."
  },
  {
    "q": "Do you assist with publishing on Google Play Store and Apple App Store?",
    "a": "Yes! We manage the complete submission process, guideline compliance, screenshots, privacy policies, and guarantee store approval."
  },
  {
    "q": "How do you handle ongoing Android and iOS operating system updates?",
    "a": "We provide ongoing maintenance retainers ensuring your app is updated whenever Apple releases new iOS versions or Google rolls out Android updates."
  },
  {
    "q": "Can the app function without an active internet connection?",
    "a": "Yes! We engineer offline-first architectures using local SQLite/Realm databases that sync automatically once internet connectivity returns."
  },
  {
    "q": "Who owns the intellectual property and app code?",
    "a": "You maintain 100% complete ownership of all mobile source code, backend APIs, design files, and developer accounts."
  },
  {
    "q": "How long does it take to develop a complete mobile app?",
    "a": "Standard MVP mobile apps are delivered in 6 to 8 weeks. Complex on-demand platforms typically require 10 to 14 weeks."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root appdevservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Mobile App Development</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> iOS, Android & Cross-Platform · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Mobile <span>App Development</span> Company in India
          </h1>
         
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free Custom Quote <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Seconds
            </button>
          </div>

          {/* 4-Metric Performance Bar */}
          <div className="wm-seost">
            {stats.map((st, i) => (
              <div key={i} className="wm-seost__i">
                <p className="wm-seost__n">{st.num}</p>
                <p className="wm-seost__l">{st.label}</p>
              </div>
            ))}
          </div>
        
            </div>
            <div className="wm-sp-hero-col-right">
              <HeroLeadForm
                pageName="Mobile App Development"
                source="Mobile App Development Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rating Scorecard Badge */}
      <div className="wm-dsm-rating-wrap">
        <div className="wm-sp-container">
          <div className="wm-dsm-rating">
            <div className="wm-dsm-rating__score">
              <span className="wm-dsm-rating__num">4.9</span>
              <span className="wm-dsm-rating__out">/5</span>
            </div>
            <div>
              <div className="wm-dsm-rating__stars" aria-hidden="true">★★★★★</div>
              <p className="wm-dsm-rating__meta">
                Rated <strong>4.9 out of 5</strong> from <strong>350+ verified client reviews</strong> across Clutch, Google, AmbitionBox, and G2.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Engaging Mobile Experiences Engineered for Maximum User Retention</h2>
              <p className="wm-sp-paragraph">
                Over 75% of digital media consumption occurs within mobile apps. Building a successful mobile product demands flawless performance, intuitive gesture navigation, instant push notifications, and offline data sync.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we build native Swift (iOS), Kotlin (Android), and high-efficiency Flutter/React Native mobile applications that achieve rapid user adoption and 5-star app store ratings.
              </p>
            </div>

           

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Verified Results, from Client Engagements</h2>
              <p className="wm-sp-paragraph">
                Every figure below represents documented performance lifts and commercial deliverables from active client engagements:
              </p>
              <div className="wm-seocs__grid">
                {caseStudies.map((cs, idx) => (
                  <div key={idx} className="wm-seocs__c">
                    <p className="wm-seocs__cat">{cs.cat}</p>
                    <div className="wm-seocs__big">{cs.metric}</div>
                    <p className="wm-seocs__met">{cs.sub}</p>
                    <h3 className="wm-seocs__nm">{cs.name}</h3>
                    <p className="wm-seocs__d">{cs.desc}</p>
                    <div className="wm-seocs__actions">
                      <button
                        type="button"
                        className="wm-seocs-btn-inquiry"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`${cs.name} - Case Study Inquiry`)}
                        title="Request an Inquiry"
                      >
                        <FaPaperPlane /> Inquire
                      </button>
                      <button
                        type="button"
                        className="wm-seocs-btn-call"
                        onClick={onOpenCallMe}
                        title="Call Webmok"
                      >
                        <FaPhoneAlt /> Call
                      </button>
                      <a
                        href={`https://wa.me/918684031003?text=${encodeURIComponent(`Hi Webmok Team, I am interested in case study: ${cs.name} (${cs.metric})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wm-seocs-btn-whatsapp"
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disciplines Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive Capabilities & Deliverables</h2>
              <p className="wm-sp-paragraph">
                Our specialized team provides end-to-end execution tailored precisely to your commercial objectives:
              </p>
              <div className="wm-sp-disciplines-grid">
                {disciplines.map((item, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <span className="wm-sp-fi-badge">{item.badge}</span>
                    <div className="wm-sp-fi-icon">{item.icon}</div>
                    <h3 className="wm-sp-fi-title">{item.title}</h3>
                    <p className="wm-sp-fi-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Verticals */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Solutions for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                WebMok formulates tailored execution frameworks optimized for distinct commercial sectors:
              </p>
              <div className="wm-sp-industries-grid">
                {industries.map((ind, idx) => (
                  <div key={idx} className="wm-sp-industry-chip">
                    <span className="wm-sp-chip-dot"></span>
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Tier Transparent Packages */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Transparent Project Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting plans so you can evaluate scope with complete transparency:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">MVP Cross-Platform App</p>
                    <div className="wm-seopk__amt">₹95,000</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Early-Stage Startups & Core Apps</p>
                    <span className="wm-seopk__kw">Flutter / React Native</span>
                    <ul className="wm-seopk__l">
                      <li>iOS and Android single-codebase build</li>
                      <li>User authentication & profile management</li>
                      <li>Core business feature workflow</li>
                      <li>App Store and Play Store launch support</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose MVP &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Commercial Scale App</p>
                    <div className="wm-seopk__amt">₹1.85 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Scaling Consumer / B2B Brands</p>
                    <span className="wm-seopk__kw">Full Feature Suite</span>
                    <ul className="wm-seopk__l">
                      <li>Custom UI/UX with fluid micro-interactions</li>
                      <li>Payment gateway & push notification engine</li>
                      <li>Real-time database sync & admin web portal</li>
                      <li>Comprehensive QA testing across 25+ real devices</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Commercial &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Mobile Ecosystem</p>
                    <div className="wm-seopk__amt">₹3.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">On-Demand / High-Volume Platforms</p>
                    <span className="wm-seopk__kw">Dual App Ecosystem</span>
                    <ul className="wm-seopk__l">
                      <li>Customer App + Driver/Vendor App + Admin Web Suite</li>
                      <li>Live GPS tracking, real-time chat & WebSockets</li>
                      <li>Advanced security encryption & offline mode</li>
                      <li>Dedicated project manager and priority SLA</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">App Maintenance & Updates</p>
                    <div className="wm-seopk__amt">₹40,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Feature Releases</p>
                    <span className="wm-seopk__kw">Dedicated Mobile Engineer</span>
                    <ul className="wm-seopk__l">
                      <li>Monthly OS compatibility updates (iOS & Android)</li>
                      <li>Bug fixes, speed profiling & library patches</li>
                      <li>App Store compliance monitoring</li>
                      <li>Priority emergency technical support</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose App &rarr;
                    </button>
                  </div>
                </div>

                {/* <div className="wm-seopk__inc">
                  <h3>Included in Every Plan</h3>
                  <div className="wm-seopk__incg">
                    <span>Dedicated Project Manager</span>
                    <span>Direct WhatsApp & Slack Channel</span>
                    <span>Transparent Sprint Tracking</span>
                    <span>Quality Assurance & Testing</span>
                    <span>Complete Source Code Ownership</span>
                    <span>Non-Disclosure Agreement (NDA)</span>
                    <span>30-Day Post-Launch Support</span>
                    <span>Direct Solution Architect Access</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>Request a Free Mobile App Feasibility & Cost Estimate</h2>
                  <p>
                    Share your mobile app concept to receive a comprehensive technical feasibility analysis, recommended technology stack, and accurate timeline roadmap.
                  </p>
                  <form className="wm-rsau__form" onSubmit={handleAuditSubmit}>
                    <input
                      className="wm-rsau__in"
                      type="text"
                      placeholder="https://yoursite.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      required
                    />
                    <button className="wm-rsau__go" type="submit">
                      Get Free Analysis &rarr;
                    </button>
                  </form>
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Tech Stack Recommendation</b> — Comparison between Native vs Flutter vs React Native for your budget</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Feature Complexity Breakdown</b> — Detailed evaluation of third-party APIs, hardware needs, and backend scope</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>App Store Guidelines Check</b> — Verification against Apple and Google submission and privacy policies</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Milestone Delivery Roadmap</b> — Week-by-week development schedule and budget breakdown</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <div className="wm-sp-faq-list">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`wm-sp-faq-item ${openFaq === idx ? 'open' : ''}`}
                  >
                    <div
                      className="wm-sp-faq-q"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    >
                      <span>
                        <span className="wm-sp-faq-badge">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        {faq.q}
                      </span>
                      <FaChevronDown className="wm-sp-faq-chevron" />
                    </div>
                    {openFaq === idx && <p className="wm-sp-faq-a">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevServicesPage;

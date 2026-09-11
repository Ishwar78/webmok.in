import React, { useState } from 'react';
import DiagnosticLeadForm from '../../components/DiagnosticLeadForm';
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
import './IosAppServicesPage.css';

const IosAppServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Of dedicated Apple iOS engineering"
  },
  {
    "num": "150+",
    "label": "Apps approved on Apple App Store"
  },
  {
    "num": "4.9★",
    "label": "Average App Store rating across releases"
  },
  {
    "num": "100%",
    "label": "App Store review guidelines pass rate"
  }
];

  const caseStudies = [
  {
    "cat": "Luxury Real Estate",
    "metric": "4.9★",
    "sub": "Featured on App Store · 35k HNIs",
    "name": "Prestige Estates iOS",
    "desc": "Ultra-luxurious property showcase app with 3D AR room staging and instant private broker messaging."
  },
  {
    "cat": "Fintech & Wealth",
    "metric": "₹140Cr",
    "sub": "Investments Managed Securely",
    "name": "Aura Wealth iOS App",
    "desc": "High-security portfolio tracking app with FaceID authentication and real-time stock ticker widgets."
  },
  {
    "cat": "Health & Fitness",
    "metric": "80,000+",
    "sub": "Apple Watch Workout Syncs",
    "name": "PulseFit Pro iOS",
    "desc": "HealthKit integrated workout coach app with Live Activity timers on the Lock Screen."
  },
  {
    "cat": "E-Commerce Fashion",
    "metric": "3.8×",
    "sub": "Average Order Value Lift",
    "name": "Maison Luxe Boutique",
    "desc": "High-speed fashion shopping app with Apple Pay 1-touch checkout and size AR fitting."
  },
  {
    "cat": "Executive Productivity",
    "metric": "98%",
    "sub": "Daily Active Retention",
    "name": "TaskFlow Executive",
    "desc": "Interactive iPad and Mac Catalyst productivity tool with Apple Pencil handwriting recognition."
  },
  {
    "cat": "Social Discovery",
    "metric": "250k+",
    "sub": "Verified iOS Downloads",
    "name": "ConnectClub Elite",
    "desc": "Exclusive community app with high-speed video reels and real-time private audio rooms."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaMobileAlt />,
      title: "Native Swift & SwiftUI",
      desc: "Cutting-edge Apple technologies delivering fluid, modern interface components."
    },
    {
      badge: '02',
      icon: <FaShieldAlt />,
      title: "Apple Pay & In-App Purchases",
      desc: "StoreKit 2 auto-renewing subscriptions and frictionless Apple Pay checkouts."
    },
    {
      badge: '03',
      icon: <FaRocket />,
      title: "Dynamic Island & Widgets",
      desc: "Real-time Live Activities keeping users engaged right from the Lock Screen."
    },
    {
      badge: '04',
      icon: <FaTools />,
      title: "HealthKit & Core ML",
      desc: "Integration with Apple Watch sensors, camera machine learning, and CoreBluetooth."
    },
    {
      badge: '05',
      icon: <FaLaptopCode />,
      title: "iPad & Mac Catalyst",
      desc: "Seamlessly expanding your iPhone app across iPads and Apple Silicon Macs."
    },
    {
      badge: '06',
      icon: <FaSearch />,
      title: "App Store Optimization (ASO)",
      desc: "High-ranking keyword targeting to dominate Apple App Store organic searches."
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
    "q": "Do you guarantee approval on the Apple App Store?",
    "a": "Yes! We strictly follow Apple App Review Guidelines and provide a 100% approval guarantee on the Apple App Store."
  },
  {
    "q": "Will the app work on both iPhones and iPads?",
    "a": "Yes. We build universal applications that adapt dynamically to both iPhone and iPad screen dimensions with custom split-view layouts."
  },
  {
    "q": "Can you implement Apple Pay and In-App Subscriptions?",
    "a": "Yes! We integrate Apple Pay for physical products and StoreKit 2 for digital content, auto-renewing subscriptions, and consumables."
  },
  {
    "q": "How do you test the app before public release?",
    "a": "We distribute internal and external beta builds via Apple TestFlight, allowing your team to test features on real devices prior to store release."
  },
  {
    "q": "Who owns the Apple developer account and code?",
    "a": "You maintain full ownership of your Apple Developer account, source code repository, and all intellectual property."
  },
  {
    "q": "How long does a custom iOS app take to build?",
    "a": "Standard iOS apps are completed in 6 to 8 weeks. Complex multi-device platforms require 10 to 12 weeks."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root iosappservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>iOS App Development</span>
          </div>
          
          <h1 className="wm-sp-hero-title">
            Premium <span>iOS App</span> Development Agency
          </h1>

          {/* Rating Scorecard Badge in Hero */}
          <div className="wm-dsm-rating-hero">
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
                pageName="iOS App Development"
                source="iOS App Development Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* 2. Main Body Section */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Crafted for Apple Lovers: Elegance, Fluidity & Uncompromising Security</h2>
              <p className="wm-sp-paragraph">
                Apple users demand impeccable craftsmanship, fluid haptic feedback, dark mode fidelity, and airtight user privacy. Developing for iOS requires deep mastery of Swift, SwiftUI, Combine, and Apple frameworks.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our Apple-certified engineers build luxury, consumer, and B2B iOS apps that leverage the full power of Apple Silicon, Core ML, FaceID, and Apple Pay.
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
                    
                    <p className="wm-seopk__nm">Core iPhone App</p>
                    <div className="wm-seopk__amt">₹85,000</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Utility & Early-Stage Products</p>
                    <span className="wm-seopk__kw">SwiftUI iPhone App</span>
                    <ul className="wm-seopk__l">
                      <li>Native Swift & SwiftUI iOS application</li>
                      <li>Clean Apple Human Interface design</li>
                      <li>User account & FaceID authentication</li>
                      <li>App Store submission & approval guarantee</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('iOS App Development', 'Core iPhone App')}
                    >
                      Choose Core &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Full Commercial App</p>
                    <div className="wm-seopk__amt">₹1.65 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Scaling Consumer & D2C Brands</p>
                    <span className="wm-seopk__kw">In-App Purchases</span>
                    <ul className="wm-seopk__l">
                      <li>In-App Purchases & Apple Pay integration</li>
                      <li>Lock Screen widgets & Live Activities</li>
                      <li>Push notifications via Apple Push Notification service (APNs)</li>
                      <li>TestFlight beta rollout & analytics tracking</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('iOS App Development', 'Full Commercial App')}
                    >
                      Choose Full &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Apple Ecosystem</p>
                    <div className="wm-seopk__amt">₹3.20 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">High-Value Enterprise Brands</p>
                    <span className="wm-seopk__kw">iPhone + iPad + Watch</span>
                    <ul className="wm-seopk__l">
                      <li>Universal iOS + iPadOS + WatchOS integration</li>
                      <li>Custom cloud API backend with WebSockets</li>
                      <li>Advanced end-to-end security encryption</li>
                      <li>Dedicated project manager and priority Apple SLA</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('iOS App Development', 'Enterprise Apple Ecosystem')}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">iOS Maintenance & Updates</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous OS Evolution</p>
                    <span className="wm-seopk__kw">Dedicated iOS Engineer</span>
                    <ul className="wm-seopk__l">
                      <li>Annual major iOS update compatibility patches</li>
                      <li>App Store privacy policy compliance</li>
                      <li>Continuous performance tuning & bug resolution</li>
                      <li>Priority emergency technical support</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('iOS App Development', 'iOS Maintenance & Updates')}
                    >
                      Choose iOS &rarr;
                    </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <span>Free</span></span>
                  <h2>Request a Free iOS App Architecture Consultation</h2>
                  <p>
                    Connect with our Senior Apple Architect to review your iOS app concept, Apple guideline compliance, and feature roadmap.
                  </p>
                  <DiagnosticLeadForm serviceName="iOS App Development" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Apple Guidelines Feasibility</b> — Pre-screen features against App Store Section 4 and 5 review guidelines</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>UI/UX Human Interface Review</b> — Evaluate gestures, typography, and dark mode alignment with Apple aesthetics</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Swift & Hardware Scope</b> — Determine optimal implementation for FaceID, Apple Pay, and offline caching</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Guaranteed Approval Roadmap</b> — Milestone-based delivery timeline with 100% App Store approval commitment</span>
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

export default IosAppServicesPage;

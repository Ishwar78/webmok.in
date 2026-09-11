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
import './AndroidAppServicesPage.css';

const AndroidAppServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "9+ yrs",
    "label": "Of specialized Android engineering"
  },
  {
    "num": "180+",
    "label": "Android apps published on Play Store"
  },
  {
    "num": "4.9★",
    "label": "Average rating on Google Play Store"
  },
  {
    "num": "100%",
    "label": "Google Play Store approval record"
  }
];

  const caseStudies = [
  {
    "cat": "On-Demand Delivery",
    "metric": "4.8★",
    "sub": "500k+ Installs · 99.8% Crash-Free",
    "name": "Zippy Express Rider App",
    "desc": "Lightweight Android app for delivery agents with offline order dispatch and turn-by-turn navigation."
  },
  {
    "cat": "Fintech & Lending",
    "metric": "₹45Cr",
    "sub": "Instant Micro-Loans Disbursed",
    "name": "QuickCash Android App",
    "desc": "Secure Aadhaar e-Sign, camera KYC document capture, and bank-grade encryption."
  },
  {
    "cat": "AgriTech & Rural",
    "metric": "80,000+",
    "sub": "Farmers Using Offline Mode",
    "name": "KisanVikas Advisory App",
    "desc": "Multi-lingual voice search and localized weather advisory functioning in low 2G/3G connectivity."
  },
  {
    "cat": "Healthcare App",
    "metric": "15,000",
    "sub": "Daily Telemedicine Consultations",
    "name": "HealthCare Plus Android",
    "desc": "Low-latency WebRTC video calling and digital prescription storage."
  },
  {
    "cat": "EdTech Academy",
    "metric": "3.8×",
    "sub": "Daily Lecture Completion Rate",
    "name": "ExamPrep Live Android",
    "desc": "DRM-protected video player with offline download capabilities and dynamic quiz timers."
  },
  {
    "cat": "Logistics Fleet",
    "metric": "-35%",
    "sub": "Fuel Wastage via GPS Routing",
    "name": "FleetTrack Mobile IoT",
    "desc": "Background telemetry syncing vehicle OBD sensor data to central cloud servers."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaMobileAlt />,
      title: "Native Kotlin Development",
      desc: "Clean, modern code utilizing official Google Android Jetpack libraries."
    },
    {
      badge: '02',
      icon: <FaRocket />,
      title: "Jetpack Compose UI",
      desc: "Declarative, reactive UI development with zero layout lag."
    },
    {
      badge: '03',
      icon: <FaTools />,
      title: "Offline-First SQLite / Room",
      desc: "Complete local functionality with automated background cloud synchronization."
    },
    {
      badge: '04',
      icon: <FaShieldAlt />,
      title: "UPI & Payment Gateway Sync",
      desc: "Seamless 1-tap Google Pay, PhonePe, and Paytm intent checkouts."
    },
    {
      badge: '05',
      icon: <FaSearch />,
      title: "Play Store Optimization (ASO)",
      desc: "Organic keyword placement to capture high-intent Play Store searches."
    },
    {
      badge: '06',
      icon: <FaCogs />,
      title: "Background Services & IoT",
      desc: "Optimized foreground services for continuous GPS and Bluetooth sync."
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
    "q": "Which Android versions do your applications support?",
    "a": "We build for modern Android versions (Android 10 through Android 15), covering 98%+ of all active global Android devices."
  },
  {
    "q": "Do you handle the complete Google Play Store submission process?",
    "a": "Yes! We configure developer accounts, prepare high-resolution store graphics, write store descriptions, and guarantee app approval."
  },
  {
    "q": "Can you integrate UPI payment gateways like PhonePe and Google Pay?",
    "a": "Yes! We configure deep UPI intent flows allowing users to pay with a single tap through their installed UPI apps."
  },
  {
    "q": "How do you ensure the app works across different phone manufacturers?",
    "a": "We test across real physical devices from Samsung, Xiaomi, OnePlus, Vivo, Oppo, and Realme to guarantee zero layout glitches."
  },
  {
    "q": "Who owns the Android source code after launch?",
    "a": "You maintain 100% full intellectual property and Git repository ownership with complete build documentation."
  },
  {
    "q": "What is the typical timeframe to build a native Android app?",
    "a": "Standard native Android applications are delivered in 5 to 7 weeks from design approval."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root androidappservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Android App Development</span>
          </div>
          
          <h1 className="wm-sp-hero-title">
            Native <span>Android App</span> Development Agency
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
                pageName="Android App Development"
                source="Android App Development Hero Section"
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
              <h2 className="wm-sp-card-title">Engineered for India & Global Android Ecosystems</h2>
              <p className="wm-sp-paragraph">
                With over 85% of mobile users in India using Android devices, designing for diverse screen resolutions, processor speeds, and offline network connectivity is critical for commercial success.
              </p>
              <p className="wm-sp-paragraph">
                Our certified Android engineers build clean Jetpack Compose and Kotlin applications with sub-second launch times, minimal battery impact, and seamless Google Pay / UPI integration.
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
                    
                    <p className="wm-seopk__nm">Starter Android App</p>
                    <div className="wm-seopk__amt">₹65,000</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Core Utility / Service Apps</p>
                    <span className="wm-seopk__kw">Native Kotlin App</span>
                    <ul className="wm-seopk__l">
                      <li>Native Kotlin Android application</li>
                      <li>Clean UI with Material Design 3</li>
                      <li>User authentication & profile setup</li>
                      <li>Play Store submission & approval support</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Android App Development', 'Starter Android App')}
                    >
                      Choose Starter &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Commercial Scale App</p>
                    <div className="wm-seopk__amt">₹1.25 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">High-Growth Consumer Startups</p>
                    <span className="wm-seopk__kw">Full Feature Stack</span>
                    <ul className="wm-seopk__l">
                      <li>Real-time push notifications & in-app chat</li>
                      <li>Payment gateway & UPI intent flow</li>
                      <li>Offline caching & automated sync</li>
                      <li>Firebase analytics & crash monitoring</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Android App Development', 'Commercial Scale App')}
                    >
                      Choose Commercial &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Android Suite</p>
                    <div className="wm-seopk__amt">₹2.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">On-Demand & Enterprise Brands</p>
                    <span className="wm-seopk__kw">High Concurrency</span>
                    <ul className="wm-seopk__l">
                      <li>Complex hardware integrations (GPS, Bluetooth, Camera)</li>
                      <li>Custom REST / WebSocket backend synchronization</li>
                      <li>Automated CI/CD Play Store deployment pipeline</li>
                      <li>Dedicated project manager and SLA contract</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Android App Development', 'Enterprise Android Suite')}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Android Support & Retainer</p>
                    <div className="wm-seopk__amt">₹30,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Updates</p>
                    <span className="wm-seopk__kw">Dedicated Kotlin Dev</span>
                    <ul className="wm-seopk__l">
                      <li>New Android OS version compatibility updates</li>
                      <li>Continuous bug fixes & performance profiling</li>
                      <li>Play Console compliance monitoring</li>
                      <li>Priority emergency technical support</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Android App Development', 'Android Support & Retainer')}
                    >
                      Choose Android &rarr;
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
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <span>Free</span></span>
                  <h2>Request a Free Android Technical Feasibility Review</h2>
                  <p>
                    Share your Android app requirements to receive an expert architectural review, device compatibility analysis, and delivery schedule.
                  </p>
                  <DiagnosticLeadForm serviceName="Android App Development" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Device Compatibility Audit</b> — Evaluation across low-end, mid-range, and flagship Android chipsets</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Battery & Memory Profiling</b> — Strategies to minimize background battery drain and RAM footprint</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Play Console Policy Check</b> — Verification against Google Play target API and user data policies</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Accurate Cost & Timeline</b> — Detailed development milestone breakdown and transparent estimate</span>
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

export default AndroidAppServicesPage;

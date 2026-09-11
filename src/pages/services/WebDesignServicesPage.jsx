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
import './WebDesignServicesPage.css';

const WebDesignServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "12+ yrs",
    "label": "Of web design & engineering leadership"
  },
  {
    "num": "600+",
    "label": "Modern websites & web apps deployed"
  },
  {
    "num": "3.4×",
    "label": "Average lead conversion lift post-redesign"
  },
  {
    "num": "100%",
    "label": "Responsive cross-device compatibility"
  }
];

  const caseStudies = [
  {
    "cat": "Industrial & EV",
    "metric": "3.8×",
    "sub": "Inbound RFQ Pipeline Growth",
    "name": "SKF Auto Component Portal",
    "desc": "Modern responsive web redesign with interactive product specification selectors and instant RFQ funnels."
  },
  {
    "cat": "Real Estate NCR",
    "metric": "1,450+",
    "sub": "Verified Site Visit Bookings",
    "name": "Omaxe Luxury Spaces",
    "desc": "Ultra-luxurious visual architecture with virtual property tours and automated WhatsApp sales routing."
  },
  {
    "cat": "Healthcare & Wellness",
    "metric": "+210%",
    "sub": "Online Consultation Bookings",
    "name": "Dr. Haror's Clinic",
    "desc": "Clean, modern medical portal with 1-click appointment booking and doctor biography showcase."
  },
  {
    "cat": "Fintech Portal",
    "metric": "4.2×",
    "sub": "Sign-up Conversion Lift",
    "name": "PaySprint Gateway",
    "desc": "Sleek dark-mode developer documentation and interactive API sandbox interface."
  },
  {
    "cat": "Architecture Studio",
    "metric": "+380%",
    "sub": "Portfolio Engagement Time",
    "name": "Studio Vertigo Interiors",
    "desc": "High-fashion editorial layout featuring full-bleed photography and smooth kinetic typography."
  },
  {
    "cat": "B2B Logistics",
    "metric": "-42%",
    "sub": "Customer Support Tickets",
    "name": "TransGlobal Freight",
    "desc": "Interactive tracking portal with instant automated quotation calculators."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "Custom UI/UX Design",
      desc: "100% bespoke Figma layouts crafted for your unique brand positioning."
    },
    {
      badge: '02',
      icon: <FaRocket />,
      title: "React & Next.js Development",
      desc: "Blazing-fast single page applications and dynamic web portals."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Responsive Mobile Optimization",
      desc: "Flawless layout rendering across iPhones, Androids, tablets, and desktops."
    },
    {
      badge: '04',
      icon: <FaCogs />,
      title: "Conversion Funnel Design",
      desc: "Frictionless forms, instant callbacks, and interactive lead captures."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "Core Web Vitals Engineering",
      desc: "Optimized asset delivery, CDN routing, and sub-second load speeds."
    },
    {
      badge: '06',
      icon: <FaLayerGroup />,
      title: "CMS & Admin Dashboards",
      desc: "Intuitive administrative backends for effortless content management."
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
    "q": "Do you use pre-made templates or custom designs?",
    "a": "We design 100% bespoke UI/UX layouts in Figma tailored specifically to your brand aesthetics and market positioning."
  },
  {
    "q": "Can you redesign our existing outdated website without losing SEO rankings?",
    "a": "Yes! We map all your existing URLs, implement 301 redirects, preserve meta data, and significantly improve your Core Web Vitals."
  },
  {
    "q": "Will the website be 100% mobile-friendly?",
    "a": "Every website we build is mobile-first, ensuring smooth navigation, clear typography, and touch-friendly controls across all smartphones."
  },
  {
    "q": "What modern technology stacks do you specialize in?",
    "a": "We specialize in React.js, Next.js, Node.js, HTML5/CSS3, Tailwind CSS, WordPress, and GraphQL APIs."
  },
  {
    "q": "How long does a standard custom website project take?",
    "a": "Standard corporate sites are delivered in 3 to 4 weeks. Complex enterprise web portals typically take 5 to 8 weeks."
  },
  {
    "q": "Do you provide ongoing technical support after go-live?",
    "a": "Yes! All projects include 30 days of post-launch warranty, and we provide continuous Annual Maintenance Contracts (AMC)."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root webdesignservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Web Design & Development</span>
          </div>
         
          <h1 className="wm-sp-hero-title">
            Award-Winning <span>Web Design & Development</span> Agency
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
                pageName="Web Design & Development"
                source="Web Design & Development Hero Section"
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
              <h2 className="wm-sp-card-title">Where Aesthetic Design Meets Conversion-Focused Web Engineering</h2>
              <p className="wm-sp-paragraph">
                Your website is your premier 24/7 salesperson. At WebMok, we combine modern visual aesthetics, psychological user flows, and modern technology stacks (React, Next.js, Node.js) to build web experiences that captivate prospective clients and drive business inquiries.
              </p>
              <p className="wm-sp-paragraph">
                Every website we deliver is engineered for sub-second speeds, frictionless navigation, search engine indexation, and flawless mobile responsiveness across all devices.
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
                    
                    <p className="wm-seopk__nm">Corporate Business</p>
                    <div className="wm-seopk__amt">₹40,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Modern Corporate Website</p>
                    <span className="wm-seopk__kw">Custom UI/UX</span>
                    <ul className="wm-seopk__l">
                      <li>Custom Figma design + HTML5/React build</li>
                      <li>6-10 responsive web pages</li>
                      <li>Lead forms, WhatsApp & Google Map</li>
                      <li>Basic SEO & Speed Optimization</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Web Design & Development', 'Corporate Business')}
                    >
                      Choose Corporate &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Custom React / Next.js</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">High-Growth Tech / B2B Brand</p>
                    <span className="wm-seopk__kw">Modern JS Stack</span>
                    <ul className="wm-seopk__l">
                      <li>React.js / Next.js high-speed frontend</li>
                      <li>Interactive animations & micro-interactions</li>
                      <li>Custom lead capture modals & CRM webhook</li>
                      <li>95+ Google PageSpeed Score guarantee</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Web Design & Development', 'Custom React / Next.js')}
                    >
                      Choose Custom &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Web Portal</p>
                    <div className="wm-seopk__amt">₹1.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Complex Enterprise Architecture</p>
                    <span className="wm-seopk__kw">Full-Stack Portal</span>
                    <ul className="wm-seopk__l">
                      <li>Custom database schema & backend APIs</li>
                      <li>User authentication & role-based dashboard</li>
                      <li>Multi-regional language / currency support</li>
                      <li>Comprehensive security hardening & NDA</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Web Design & Development', 'Enterprise Web Portal')}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Web Retainer & AMC</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Ongoing Updates & Growth</p>
                    <span className="wm-seopk__kw">Dedicated Designer & Dev</span>
                    <ul className="wm-seopk__l">
                      <li>Monthly UI enhancements & feature rollouts</li>
                      <li>A/B conversion rate testing & heatmap analysis</li>
                      <li>24/7 security monitoring & cloud backups</li>
                      <li>Priority turnaround on all change requests</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Web Design & Development', 'Web Retainer & AMC')}
                    >
                      Choose Web &rarr;
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
                  <h2>Evaluate Your Website Design & Conversion Bottlenecks</h2>
                  <p>
                    Submit your existing website URL to receive an expert visual and UX audit reviewing mobile layout friction, navigation barriers, and speed.
                  </p>
                  <DiagnosticLeadForm serviceName="Web Design & Development" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>UI/UX Visual Hierarchy</b> — Analysis of brand aesthetics, typography scale, and call-to-action prominence</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Mobile Layout & Usability</b> — Testing viewport responsiveness, touch targets, and layout shift</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Conversion Funnel Review</b> — Diagnostic of contact form abandonment and friction points</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Modernization Blueprint</b> — Actionable wireframe suggestions to increase inbound customer inquiries</span>
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

export default WebDesignServicesPage;

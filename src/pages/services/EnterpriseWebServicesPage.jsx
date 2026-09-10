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
import './EnterpriseWebServicesPage.css';

const EnterpriseWebServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "12+ yrs",
    "label": "Of enterprise IT architecture delivery"
  },
  {
    "num": "300+",
    "label": "Enterprise web systems engineered"
  },
  {
    "num": "99.99%",
    "label": "Guaranteed platform uptime & SLA"
  },
  {
    "num": "100%",
    "label": "Bank-grade cybersecurity standards"
  }
];

  const caseStudies = [
  {
    "cat": "Industrial Automation",
    "metric": "99.99%",
    "sub": "Uptime Across 4 Global Plants",
    "name": "JBM Enterprise Portal",
    "desc": "Secure B2B supply-chain collaboration portal connecting 120 tier-1 OEM vendors."
  },
  {
    "cat": "Healthcare Network",
    "metric": "180k+",
    "sub": "Patient Records Managed Securely",
    "name": "MedLife Hospitals Delhi",
    "desc": "HIPAA-compliant diagnostic reporting and teleconsultation web application."
  },
  {
    "cat": "Financial Services",
    "metric": "₹120Cr",
    "sub": "Monthly Loan Applications Processed",
    "name": "CapitalGrow Fintech",
    "desc": "Automated credit appraisal portal with Aadhaar e-KYC and CIBIL API integration."
  },
  {
    "cat": "Real Estate Enterprise",
    "metric": "42,000+",
    "sub": "Tenant & Owner Accounts",
    "name": "Omaxe Resident Portal",
    "desc": "Integrated facility management and maintenance billing web application."
  },
  {
    "cat": "Government / Public Sector",
    "metric": "2.5M+",
    "sub": "Citizen Requests Handled",
    "name": "State Skill Development Portal",
    "desc": "High-concurrency online scholarship examination and certificate verification portal."
  },
  {
    "cat": "Logistics Enterprise",
    "metric": "-48%",
    "sub": "Turnaround Time for Consignments",
    "name": "Apex Cargo Freight Network",
    "desc": "Real-time GPS fleet tracking and automated customs document generation portal."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "Custom B2B & Customer Portals",
      desc: "Intuitive portals for client onboarding, order tracking, and billing."
    },
    {
      badge: '02',
      icon: <FaCogs />,
      title: "ERP & CRM Custom Integration",
      desc: "Bridging legacy corporate systems with modern web applications."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Cybersecurity & VAPT Hardening",
      desc: "Protecting enterprise assets against unauthorized intrusion and breaches."
    },
    {
      badge: '04',
      icon: <FaRocket />,
      title: "Cloud DevOps & AWS / Azure",
      desc: "Auto-scaling cloud infrastructure built on AWS, Azure, or Google Cloud."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "Microservices & REST / GraphQL",
      desc: "Clean, modular APIs powering distributed corporate workflows."
    },
    {
      badge: '06',
      icon: <FaUsers />,
      title: "Dedicated Dedicated Engineering Teams",
      desc: "Full-time senior software developers embedded into your organization."
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
    "q": "Can you integrate our web portal with our existing ERP or SAP system?",
    "a": "Yes! We have extensive experience integrating with SAP, Oracle, Microsoft Dynamics, Salesforce, and custom legacy databases."
  },
  {
    "q": "Where are your engineering teams located?",
    "a": "Our primary software engineering hubs are located in New Delhi and Rohtak, Haryana, with senior architects available for on-site meetings."
  },
  {
    "q": "Do you sign non-disclosure agreements (NDA) prior to discussion?",
    "a": "Yes, we execute formal Non-Disclosure Agreements (NDA) before any proprietary technical details or requirements are shared."
  },
  {
    "q": "What cloud platforms do you deploy enterprise software to?",
    "a": "We architect and deploy across Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and private on-premise clusters."
  },
  {
    "q": "Who owns intellectual property and source code?",
    "a": "You maintain 100% ownership of all intellectual property, source code repositories, and documentation upon project completion."
  },
  {
    "q": "What ongoing maintenance and SLA support options exist?",
    "a": "We provide comprehensive 24/7 SLA contracts with guaranteed 30-minute response times for mission-critical enterprise platforms."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root enterprisewebservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Enterprise Web Portals</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Large-Scale Web Engineering · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Enterprise <span>Web Development</span> in Delhi & Rohtak
          </h1>
          <p className="wm-sp-hero-lead">
            Architect resilient, secure, and scalable enterprise web software, customer portals, and internal management platforms engineered by WebMok.
          </p>
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
                pageName="Enterprise Web Portals"
                source="Enterprise Web Portals Hero Section"
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
              <h2 className="wm-sp-card-title">Custom Web Portals Engineered for Mission-Critical Business Operations</h2>
              <p className="wm-sp-paragraph">
                Enterprise businesses cannot rely on generic website builders. Complex organizations require customized role-based access control (RBAC), multi-tenant database architectures, and seamless ERP/CRM integrations.
              </p>
              <p className="wm-sp-paragraph">
                WebMok provides full-cycle enterprise web engineering from Delhi and Rohtak, serving premier brands across India, North America, UAE, and Europe with dedicated technical governance.
              </p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Execution Framework</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Delivery Layers</h2>
              <p className="wm-dsm-stack__lede">
                Sustainable digital excellence requires a robust architectural foundation, followed by agile engineering and continuous conversion optimization.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">System Architecture & Data Modeling</h3>
                  <span className="wm-dsm-layer__role">Scalable Microservices & Schemas</span>
                </div>
                <p className="wm-dsm-layer__desc">Robust software architectures designed for high concurrency, multi-database synchronization, and strict data privacy compliance.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Microservices and modular component architectures</li>
                  <li>Relational and NoSQL database modeling (PostgreSQL, MongoDB)</li>
                  <li>Role-based access control (RBAC) and Single Sign-On (SSO)</li>
                  <li>Comprehensive API documentation and OpenAPI schemas</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Agile Full-Stack Engineering</h3>
                  <span className="wm-dsm-layer__role">React, Node.js & Cloud DevOps</span>
                </div>
                <p className="wm-dsm-layer__desc">Rapid sprint cycles managed by senior full-stack software engineers and DevOps architects.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Modern React.js, Next.js, and TypeScript frontend codebases</li>
                  <li>High-throughput Node.js, Express, or Python backend services</li>
                  <li>Docker containerization and Kubernetes orchestration</li>
                  <li>Continuous Integration / Continuous Deployment (CI/CD) pipelines</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Security Hardening & Enterprise SLA</h3>
                  <span className="wm-dsm-layer__role">VAPT Testing & 24/7 Monitoring</span>
                </div>
                <p className="wm-dsm-layer__desc">Rigorous penetration testing, compliance checks, and round-the-clock infrastructure monitoring.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
                  <li>OWASP Top 10 security mitigation and SSL encryption</li>
                  <li>24/7 server health telemetry and automated failover recovery</li>
                  <li>Dedicated technical account manager and formal SLA contract</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Talk to a Specialist &rarr;
                </button>
              </div>
            </section>

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
                    
                    <p className="wm-seopk__nm">Core Enterprise Portal</p>
                    <div className="wm-seopk__amt">₹95,000</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Growing Corporate Organization</p>
                    <span className="wm-seopk__kw">Custom Web Portal</span>
                    <ul className="wm-seopk__l">
                      <li>Custom role-based user management (RBAC)</li>
                      <li>Secure database schema & REST API backend</li>
                      <li>Admin dashboard with analytics & reporting</li>
                      <li>Standard security audit & SSL deployment</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Core &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Advanced Scalable Portal</p>
                    <div className="wm-seopk__amt">₹1.75 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">High-Volume Enterprise Systems</p>
                    <span className="wm-seopk__kw">Microservices Ready</span>
                    <ul className="wm-seopk__l">
                      <li>Multi-tenant architecture with custom workflows</li>
                      <li>ERP/CRM integration (SAP, Salesforce, Zoho)</li>
                      <li>Auto-scaling AWS cloud server setup</li>
                      <li>Comprehensive penetration testing & documentation</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Advanced &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Full-Scale Enterprise Platform</p>
                    <div className="wm-seopk__amt">₹3.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Mission-Critical Digital Ecosystems</p>
                    <span className="wm-seopk__kw">Full Custom Scale</span>
                    <ul className="wm-seopk__l">
                      <li>End-to-end bespoke software architecture</li>
                      <li>Mobile app API synchronization & real-time sockets</li>
                      <li>High-concurrency load testing & disaster recovery</li>
                      <li>Formal SLA contract with 99.99% uptime guarantee</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Full-Scale &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Enterprise Retainer & SLA</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous DevOps & Engineering</p>
                    <span className="wm-seopk__kw">Dedicated Squad</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated senior engineer + DevOps lead</li>
                      <li>Continuous feature development & updates</li>
                      <li>24/7 emergency incident response</li>
                      <li>Monthly security scans & performance reports</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                </div>

                <div className="wm-seopk__inc">
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
                </div>
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>Request an Enterprise Architecture Review</h2>
                  <p>
                    Consult with our Principal Solution Architect to review your existing software infrastructure, database bottlenecks, and scalability roadmap.
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
                    <span><b>System Scalability Diagnostic</b> — Evaluate server concurrency limits and database indexing efficiency</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Security & Compliance Review</b> — Inspect authentication models, data encryption, and vulnerability exposures</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>API & Integration Mapping</b> — Analyze data flow between existing ERP, CRM, and customer endpoints</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Architectural Modernization Plan</b> — Detailed technical specification and milestone execution timeline</span>
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

export default EnterpriseWebServicesPage;

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
import './BusinessConsultingPage.css';

const BusinessConsultingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "12+ yrs",
    "label": "Of enterprise growth advisory"
  },
  {
    "num": "250+",
    "label": "Corporate clients advised across India & UAE"
  },
  {
    "num": "3.6×",
    "label": "Average revenue expansion multiplier"
  },
  {
    "num": "100%",
    "label": "Confidential executive governance"
  }
];

  const caseStudies = [
  {
    "cat": "Industrial Manufacturing",
    "metric": "₹24Cr",
    "sub": "New Export Orders Closed",
    "name": "JBM Engineering Auto Export",
    "desc": "Overhauled B2B export sales strategy and implemented international lead generation pipelines."
  },
  {
    "cat": "Corporate UAE",
    "metric": "11×",
    "sub": "Inbound HNI Licensing Inquiries",
    "name": "RadiantBiz Dubai",
    "desc": "Complete business development restructuring with automated 28-second callback integration."
  },
  {
    "cat": "Luxury Real Estate",
    "metric": "₹95Cr",
    "sub": "Commercial Real Estate Deals",
    "name": "Omaxe Corporate Spaces",
    "desc": "High-ticket institutional investor acquisition playbook and private investment showcase."
  },
  {
    "cat": "Healthcare Network",
    "metric": "+180%",
    "sub": "Operating Margin Expansion",
    "name": "MedLife Clinics Group",
    "desc": "Standardized patient acquisition and automated appointment rescheduling reducing no-shows by 60%."
  },
  {
    "cat": "B2B SaaS Startup",
    "metric": "4.2×",
    "sub": "Annual Recurring Revenue (ARR)",
    "name": "CloudScale Technologies",
    "desc": "Pricing tier restructuring and outbound enterprise sales playbook targeting mid-market CFOs."
  },
  {
    "cat": "Retail & Distribution",
    "metric": "-32%",
    "sub": "Customer Acquisition Cost (CAC)",
    "name": "FarmerFresh FMCG",
    "desc": "Consolidated omnichannel wholesale distribution network across 18 tier-2 Indian cities."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaChartLine />,
      title: "Revenue Growth & GTM Strategy",
      desc: "Designing predictable customer acquisition engines that compound monthly."
    },
    {
      badge: '02',
      icon: <FaCogs />,
      title: "Digital Transformation Consulting",
      desc: "Modernizing legacy operations with high-efficiency cloud platforms."
    },
    {
      badge: '03',
      icon: <FaUsers />,
      title: "Sales Pipeline & SDR Playbooks",
      desc: "Equipping your sales force with high-conversion scripts and BANT qualification."
    },
    {
      badge: '04',
      icon: <FaShieldAlt />,
      title: "Unit Economics & Pricing Strategy",
      desc: "Restructuring margins, packages, and retainer tiers to maximize lifetime value."
    },
    {
      badge: '05',
      icon: <FaTools />,
      title: "CRM & Automation Architecture",
      desc: "Eliminating sales friction with real-time lead routing and tracking."
    },
    {
      badge: '06',
      icon: <FaAward />,
      title: "Executive Advisory Board Retainer",
      desc: "Senior strategic leadership embedded into your executive committee."
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
    "q": "What types of businesses do you typically consult for?",
    "a": "We consult for B2B industrial enterprises, technology and SaaS startups, healthcare groups, real estate developers, professional service firms, and consumer D2C brands."
  },
  {
    "q": "Is the business consulting engagement confidential?",
    "a": "100% yes. All strategic consulting engagements are protected by comprehensive Non-Disclosure Agreements (NDA)."
  },
  {
    "q": "How does WebMok differ from traditional management consulting firms?",
    "a": "Unlike traditional firms that deliver theoretical PowerPoint slides, WebMok actively designs and deploys the technical websites, CRM workflows, and digital marketing engines required to execute the strategy."
  },
  {
    "q": "How quickly can we see financial results from consulting?",
    "a": "Operational quick-wins (pricing fixes, lead-leakage remediation) typically impact revenue within 30 to 45 days. Major GTM overhauls compound over 3 to 6 months."
  },
  {
    "q": "Can you assist with training our internal sales and marketing team?",
    "a": "Yes! Our packages include hands-on executive workshops, SDR training modules, and objection-handling roleplay sessions."
  },
  {
    "q": "Who will be leading the consulting engagement?",
    "a": "Your engagement is led directly by our Senior Managing Director and Principal Solution Architects with over a decade of hands-on corporate turnaround experience."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root businessconsultingpage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Business Consulting</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Strategic Growth & Scaling · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Strategic <span>Business Development</span> Consulting
          </h1>
          <p className="wm-sp-hero-lead">
            Unlock scalable revenue expansion, streamline digital operational workflows, and expand market share with battle-tested advisory services engineered by WebMok.
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
                pageName="Business Consulting"
                source="Business Consulting Hero Section"
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
              <h2 className="wm-sp-card-title">Translate Market Ambition into Systematic, Predictable Revenue</h2>
              <p className="wm-sp-paragraph">
                Many promising businesses plateau because their sales processes, digital technology infrastructure, and marketing channels operate in chaotic silos. Scaling to 8 and 9-figure annual revenues requires structured go-to-market systems.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our principal management consultants work shoulder-to-shoulder with founders, managing directors, and executive leadership to diagnose operational friction, overhaul customer acquisition funnels, and build defensible commercial moats.
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
                    
                    <p className="wm-seopk__nm">Strategic Growth Audit</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Diagnostic Assessment</p>
                    <span className="wm-seopk__kw">Comprehensive Review</span>
                    <ul className="wm-seopk__l">
                      <li>Deep diagnostic of existing sales & marketing funnels</li>
                      <li>Unit economics & pricing architecture critique</li>
                      <li>Competitor gap analysis & TAM evaluation</li>
                      <li>Actionable 90-day growth roadmap presentation</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Strategic &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">GTM Overhaul Sprint</p>
                    <div className="wm-seopk__amt">₹85,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Rapid Transformation</p>
                    <span className="wm-seopk__kw">Complete GTM Playbook</span>
                    <ul className="wm-seopk__l">
                      <li>Turnkey B2B sales playbook & SDR qualification scripts</li>
                      <li>CRM pipeline setup & automated lead routing workflows</li>
                      <li>Pricing restructuring & high-ticket proposal templates</li>
                      <li>4 executive workshops with senior sales leadership</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose GTM &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Advisory Retainer</p>
                    <div className="wm-seopk__amt">₹1.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Ongoing Executive Partnership</p>
                    <span className="wm-seopk__kw">Dedicated Strategic Lead</span>
                    <ul className="wm-seopk__l">
                      <li>Bi-weekly executive steering committee sessions</li>
                      <li>Continuous sales pipeline tracking & conversion optimization</li>
                      <li>Direct access to Principal Solution Consultant on Slack/Call</li>
                      <li>Monthly board-level revenue and EBITDA governance reports</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Turnkey Commercial Advisory</p>
                    <div className="wm-seopk__amt">₹2.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Fast-Track Scaling Brands</p>
                    <span className="wm-seopk__kw">Embedded GTM Squad</span>
                    <ul className="wm-seopk__l">
                      <li>Complete outsourced business development oversight</li>
                      <li>Sales hiring, training & commission structure design</li>
                      <li>Full alignment between marketing spend and sales revenue</li>
                      <li>Formal SLA contract with guaranteed growth milestones</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Turnkey &rarr;
                    </button>
                  </div>
                </div>

                
                </div>
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>Request a Confidential Business Growth Diagnostic</h2>
                  <p>
                    Connect directly with our Principal Consultant to review your revenue bottlenecks, customer acquisition costs, and market expansion opportunities.
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
                    <span><b>CAC vs LTV Unit Economics Audit</b> — Evaluate whether marketing spend is generating healthy return on capital</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Sales Pipeline Velocity Analysis</b> — Identify deal stall points and sales qualification drop-offs</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Market Differentiation Review</b> — Analyze competitive moats and high-ticket positioning opportunities</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Scalable Growth Blueprint</b> — Clear strategic roadmap outlining the highest-ROI initiatives for next quarter</span>
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

export default BusinessConsultingPage;

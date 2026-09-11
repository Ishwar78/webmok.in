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
import './LandingPageServicesPage.css';

const LandingPageServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Of specialized landing page optimization"
  },
  {
    "num": "500+",
    "label": "High-converting landing pages launched"
  },
  {
    "num": "32%",
    "label": "Average documented conversion rate achieved"
  },
  {
    "num": "<1.0s",
    "label": "Ultra-fast mobile load speed on 4G/5G"
  }
];

  const caseStudies = [
  {
    "cat": "Real Estate NCR",
    "metric": "4.8×",
    "sub": "Lead Volume Increase · 850 Site Visits",
    "name": "Omaxe Luxury Towers",
    "desc": "Single-property luxury landing page with virtual walkthroughs and instant WhatsApp brochure downloads."
  },
  {
    "cat": "EdTech Academy",
    "metric": "38%",
    "sub": "Webinar Sign-up Rate · 4,200 Leads",
    "name": "SkillNext Institute",
    "desc": "Urgency-driven registration landing page with dynamic countdown timer and 1-click OTP confirmation."
  },
  {
    "cat": "Healthcare & IVF",
    "metric": "-54%",
    "sub": "Cost Per Consultation Booking",
    "name": "Aura Fertility Clinic",
    "desc": "Compassionate, trust-focused medical landing page featuring verified doctor credentials and instant booking."
  },
  {
    "cat": "B2B SaaS",
    "metric": "520+",
    "sub": "Software Demo Requests",
    "name": "InvoiceQuick ERP",
    "desc": "Interactive ROI calculator landing page showing instant annual cost savings."
  },
  {
    "cat": "Corporate UAE",
    "metric": "+310%",
    "sub": "WhatsApp Inbound Inquiries",
    "name": "RadiantBiz Setup",
    "desc": "Localized Dubai business setup cost estimation landing page with automated instant callback."
  },
  {
    "cat": "Home Renovation",
    "metric": "6.2×",
    "sub": "Qualified Estimate Requests",
    "name": "UrbanDesign Studio",
    "desc": "Interactive 3-step quotation quiz funnel capturing room dimensions and budget."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "PPC Google Ads Landing Pages",
      desc: "Tailored specifically to match search intent and achieve 10/10 quality scores."
    },
    {
      badge: '02',
      icon: <FaBullhorn />,
      title: "Meta & Instagram Lead Funnels",
      desc: "Mobile-first visual storytelling designed for rapid scroll-stopping conversions."
    },
    {
      badge: '03',
      icon: <FaRocket />,
      title: "Interactive Quiz & Calculator Funnels",
      desc: "Multi-step engaging quizzes that pre-qualify buyer intent and budget."
    },
    {
      badge: '04',
      icon: <FaTools />,
      title: "A/B Split Testing & CRO",
      desc: "Continuous testing of headlines, hero layouts, and conversion buttons."
    },
    {
      badge: '05',
      icon: <FaShieldAlt />,
      title: "CRM & WhatsApp Automation",
      desc: "Immediate automated routing of leads to sales teams in under 28 seconds."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "Server-Side Analytics & Heatmaps",
      desc: "Complete tracking of scroll depth, drop-off points, and conversion events."
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
    "q": "How fast can a custom landing page be designed and launched?",
    "a": "Standard high-converting landing pages are designed, coded, and live within 3 to 5 business days."
  },
  {
    "q": "Will the landing page work seamlessly with our Google Ads and Meta Ads?",
    "a": "100% yes. We configure Google Tag Manager, GA4 events, and Facebook CAPI so every conversion is tracked accurately."
  },
  {
    "q": "Can leads be sent immediately to our sales team WhatsApp or CRM?",
    "a": "Yes! We configure instant WhatsApp lead alerts and webhooks connecting directly into HubSpot, Salesforce, Zoho, or LeadSquared."
  },
  {
    "q": "Do you write the marketing copy or do we need to provide it?",
    "a": "Our turnkey service includes conversion-tested headline, body, and micro-copy crafted by our senior copywriters."
  },
  {
    "q": "Will the page load fast on mobile devices with 4G/5G?",
    "a": "Yes. We guarantee 90+ mobile Google PageSpeed scores with typical load times under 1 second."
  },
  {
    "q": "Can we integrate custom calculators or multi-step quizzes?",
    "a": "Yes, we specialize in building interactive pricing calculators, loan estimate tools, and multi-step qualification quizzes."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root landingpageservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Landing Page Development</span>
          </div>
          
          <h1 className="wm-sp-hero-title">
            High-Converting <span>Landing Page</span> Development Agency
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
                pageName="Landing Page Development"
                source="Landing Page Development Hero Section"
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
              <h2 className="wm-sp-card-title">Stop Sending Expensive Paid Clicks to Slow, Low-Converting Pages</h2>
              <p className="wm-sp-paragraph">
                The biggest reason PPC and social ad campaigns fail is because prospective buyers land on generic, cluttered homepages. A dedicated landing page strips away navigational distraction, focuses user attention on a single compelling offer, and triggers immediate action.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we build sub-second landing pages with psychological wireframes, trust badges, urgency triggers, and 1-click WhatsApp and call capture funnels.
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
                    
                    <p className="wm-seopk__nm">Single High-Converting Page</p>
                    <div className="wm-seopk__amt">₹20,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">PPC or Social Ad Campaigns</p>
                    <span className="wm-seopk__kw">Single Purpose Page</span>
                    <ul className="wm-seopk__l">
                      <li>Custom mobile-first UI design</li>
                      <li>High-converting persuasive copywriting</li>
                      <li>1-Click WhatsApp & Call triggers</li>
                      <li>Google Ads conversion tracking setup</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Landing Page Development', 'Single High-Converting Page')}
                    >
                      Choose Single &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Lead Funnel + A/B Test</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Scaling Paid Campaigns</p>
                    <span className="wm-seopk__kw">A/B Variant Included</span>
                    <ul className="wm-seopk__l">
                      <li>Primary page + Variant B for split testing</li>
                      <li>Interactive multi-step inquiry quiz</li>
                      <li>Direct CRM & webhook routing</li>
                      <li>Sub-second speed optimization (95+ PageSpeed)</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Landing Page Development', 'Lead Funnel + A/B Test')}
                    >
                      Choose Lead &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Funnel Suite</p>
                    <div className="wm-seopk__amt">₹60,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Multi-Product / National Brands</p>
                    <span className="wm-seopk__kw">3 Dedicated Landing Pages</span>
                    <ul className="wm-seopk__l">
                      <li>3 custom segmented landing pages</li>
                      <li>Dynamic text replacement for keyword matching</li>
                      <li>Comprehensive Hotjar heatmaps & GA4 setup</li>
                      <li>30-Day continuous CRO conversion tuning</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Landing Page Development', 'Enterprise Funnel Suite')}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Monthly CRO Retainer</p>
                    <div className="wm-seopk__amt">₹25,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Funnel Scaling</p>
                    <span className="wm-seopk__kw">Dedicated CRO Specialist</span>
                    <ul className="wm-seopk__l">
                      <li>Weekly A/B test iterations & new creatives</li>
                      <li>Heatmap & drop-off analysis</li>
                      <li>Copy adjustments based on ad performance</li>
                      <li>Priority support & real-time changes</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Landing Page Development', 'Monthly CRO Retainer')}
                    >
                      Choose Monthly &rarr;
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
                  <h2>Audit Your Existing Landing Page Conversion Rate</h2>
                  <p>
                    Submit your landing page URL to get a comprehensive 20-point conversion diagnostic highlighting mobile friction, load lag, and CTA drop-offs.
                  </p>
                  <DiagnosticLeadForm serviceName="Landing Page Development" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Headline & Value Clarity</b> — Evaluate whether visitors understand your core offer within 3 seconds</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Mobile Speed & Script Lag</b> — Measure First Contentful Paint and JavaScript execution time</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Form Friction & Usability</b> — Identify redundant form fields causing visitor drop-off</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>CRO Lift Recommendations</b> — Prioritized design and copywriting changes to 2x conversion rate</span>
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

export default LandingPageServicesPage;

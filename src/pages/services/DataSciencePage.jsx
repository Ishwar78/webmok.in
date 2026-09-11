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
import './DataSciencePage.css';

const DataSciencePage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Of enterprise data science engineering"
  },
  {
    "num": "150+",
    "label": "Predictive ML models deployed in production"
  },
  {
    "num": "99.4%",
    "label": "Model prediction accuracy achieved"
  },
  {
    "num": "100%",
    "label": "Secure cloud data pipeline architecture"
  }
];

  const caseStudies = [
  {
    "cat": "D2C E-Commerce Brand",
    "metric": "₹14Cr",
    "sub": "Saved in Overstocked Inventory",
    "name": "TrendyWear Retail",
    "desc": "Predictive demand forecasting ML model reducing inventory holding costs by 38% across 4 regional warehouses."
  },
  {
    "cat": "Fintech & Lending",
    "metric": "-46%",
    "sub": "Loan Default Rate Reduction",
    "name": "CreditSmart NBFC",
    "desc": "Alternative data credit-scoring algorithm analyzing 150+ behavioral variables for instant loan approvals."
  },
  {
    "cat": "Industrial Manufacturing",
    "metric": "94%",
    "sub": "Predictive Maintenance Accuracy",
    "name": "SKF Machine Telemetry",
    "desc": "IoT sensor anomaly detection model predicting industrial bearing wear 14 days prior to breakdown."
  },
  {
    "cat": "EdTech Platform",
    "metric": "3.2×",
    "sub": "Student Course Completion Lift",
    "name": "LearnFast Global",
    "desc": "Personalized AI learning recommendation engine boosting active platform engagement."
  },
  {
    "cat": "Logistics Fleet",
    "metric": "-18%",
    "sub": "Fleet Fuel Expenditure",
    "name": "Apex Haulage Logistics",
    "desc": "Machine learning route optimization factoring live traffic patterns and vehicle payload weights."
  },
  {
    "cat": "Healthcare Diagnostics",
    "metric": "99.2%",
    "sub": "Diagnostic Report Pre-Screening",
    "name": "PathoAI Diagnostic Labs",
    "desc": "Computer vision model pre-screening blood pathology slides for laboratory technicians."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaChartLine />,
      title: "Predictive Analytics & Forecasting",
      desc: "Anticipating customer demand, revenue trajectory, and market fluctuations."
    },
    {
      badge: '02',
      icon: <FaCogs />,
      title: "Automated ETL Data Pipelines",
      desc: "Clean, reliable pipelines collecting and standardizing data across all business tools."
    },
    {
      badge: '03',
      icon: <FaLaptopCode />,
      title: "Customer Churn & LTV Modeling",
      desc: "Identifying at-risk customers early to deploy targeted retention offers."
    },
    {
      badge: '04',
      icon: <FaRocket />,
      title: "Executive BI & PowerBI Dashboards",
      desc: "C-Suite dashboards providing real-time operational visibility."
    },
    {
      badge: '05',
      icon: <FaShieldAlt />,
      title: "Fraud & Anomaly Detection",
      desc: "Real-time scoring algorithms stopping unauthorized transactions instantly."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "Machine Learning Model Ops (MLOps)",
      desc: "Continuous model monitoring, retraining, and API deployment in the cloud."
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
    "q": "What data sources can you connect into a centralized dashboard?",
    "a": "We connect Google Analytics 4, Google Ads, Meta Ads, Shopify, WooCommerce, HubSpot, Salesforce, PostgreSQL, MySQL, Stripe, Razorpay, and custom REST APIs."
  },
  {
    "q": "Do we need massive big data before we can use data science?",
    "a": "No! Even businesses with moderate transaction volumes benefit immensely from centralized BI dashboards, customer segmentation, and automated cohort analysis."
  },
  {
    "q": "Which cloud platforms and tools do your data engineers use?",
    "a": "We build with Python, Pandas, Scikit-Learn, PyTorch, Google BigQuery, Snowflake, AWS Redshift, Apache Airflow, Looker Studio, and PowerBI."
  },
  {
    "q": "How do you guarantee user data privacy and security?",
    "a": "We enforce bank-grade AES-256 encryption at rest and in transit, implement role-based access control, and strictly adhere to GDPR, DPDP Act, and ISO 27001 data governance."
  },
  {
    "q": "Who owns the custom trained machine learning models?",
    "a": "You maintain 100% full legal ownership of all training datasets, model weights, code scripts, and intellectual property."
  },
  {
    "q": "How long does it take to deploy a custom predictive ML model?",
    "a": "Standard predictive models and BI pipelines are deployed into production within 4 to 6 weeks."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root datasciencepage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Data Science</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Big Data & Machine Learning · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Enterprise <span>Data Science & AI</span> Analytics Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Transform unstructured business data into actionable commercial foresight with predictive machine learning models, automated ETL pipelines, and executive Looker Studio BI dashboards.
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
                pageName="Data Science"
                source="Data Science Hero Section"
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
              <h2 className="wm-sp-card-title">Turn Complex Corporate Data into Defensible Competitive Advantage</h2>
              <p className="wm-sp-paragraph">
                Modern enterprises collect massive volumes of transaction logs, customer touchpoints, and operational data. Without intelligent data pipelines and predictive modeling, this data remains an expensive, unmonetized cost center.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our data scientists and ML engineers build robust ETL data warehouses, customer churn prediction algorithms, dynamic pricing models, and real-time business intelligence dashboards that drive profitable decision making.
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
                    
                    <p className="wm-seopk__nm">Executive BI Dashboard</p>
                    <div className="wm-seopk__amt">₹40,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Data Visualization & Reporting</p>
                    <span className="wm-seopk__kw">Looker / PowerBI</span>
                    <ul className="wm-seopk__l">
                      <li>Integration of GA4, Google Ads, Meta Ads & CRM data</li>
                      <li>Custom executive Looker Studio / PowerBI dashboard</li>
                      <li>Key revenue, CAC, ROAS & conversion metrics tracking</li>
                      <li>Automated weekly email PDF reports for leadership</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Executive &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Data Pipeline & Warehouse</p>
                    <div className="wm-seopk__amt">₹85,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Consolidated Data Architecture</p>
                    <span className="wm-seopk__kw">Cloud Data Warehouse</span>
                    <ul className="wm-seopk__l">
                      <li>Automated ETL pipeline connecting up to 5 data sources</li>
                      <li>Centralized Google BigQuery / Snowflake data warehouse setup</li>
                      <li>Normalized SQL schemas & automated data cleaning scripts</li>
                      <li>Full data architecture documentation & training session</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Data &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Predictive ML Model Suite</p>
                    <div className="wm-seopk__amt">₹1.60 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (Starting)</p>
                    <p className="wm-seopk__per">Advanced Predictive Capability</p>
                    <span className="wm-seopk__kw">Custom Machine Learning</span>
                    <ul className="wm-seopk__l">
                      <li>Custom trained ML model (Churn, Demand, or Pricing)</li>
                      <li>Model evaluation, hyperparameter tuning & validation</li>
                      <li>REST API deployment for real-time application inference</li>
                      <li>30-Day continuous model accuracy monitoring and tuning</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Predictive &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Data Science Retainer</p>
                    <div className="wm-seopk__amt">₹55,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Ongoing Data Science Team</p>
                    <span className="wm-seopk__kw">Dedicated Data Scientist</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated senior Data Scientist & Data Engineer</li>
                      <li>Continuous dashboard updates & new feature engineering</li>
                      <li>Monthly predictive model retraining & drift mitigation</li>
                      <li>Ad-hoc data analysis requests & executive consultations</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Data &rarr;
                    </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>Request a Free Corporate Data & Analytics Assessment</h2>
                  <p>
                    Connect with our Principal Data Scientist to evaluate your existing data stack, pipeline bottlenecks, and machine learning opportunities.
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
                    <span><b>Data Stack & Silo Diagnostic</b> — Evaluate where valuable corporate data is trapped across departmental tools</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Pipeline Reliability Review</b> — Analyze data latency, pipeline failure rates, and cleaning redundancies</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Machine Learning ROI Scope</b> — Identify the highest-impact commercial use cases for predictive models</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Modern Data Architecture Plan</b> — Step-by-step roadmap to build a scalable, cloud-native data ecosystem</span>
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

export default DataSciencePage;

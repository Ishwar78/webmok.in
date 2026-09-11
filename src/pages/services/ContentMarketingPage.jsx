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
import './ContentMarketingPage.css';

const ContentMarketingPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "Of enterprise content marketing leadership"
  },
  {
    "num": "10M+",
    "label": "Organic readers generated across verticals"
  },
  {
    "num": "4.8×",
    "label": "Average lift in organic keyword rankings"
  },
  {
    "num": "100%",
    "label": "Human-researched, zero-plagiarism content"
  }
];

  const caseStudies = [
  {
    "cat": "Industrial Manufacturing",
    "metric": "+640%",
    "sub": "Organic Inbound Leads in 9 Months",
    "name": "SKF Industrial Gear Solutions",
    "desc": "18 comprehensive engineering guide pillars ranking #1 for industrial bearing replacement queries."
  },
  {
    "cat": "B2B Enterprise SaaS",
    "metric": "180,000",
    "sub": "Monthly Organic Blog Visitors",
    "name": "CloudERP Solutions",
    "desc": "Topical authority hub on cloud financial compliance generating 450+ product demo signups monthly."
  },
  {
    "cat": "Healthcare & Wellness",
    "metric": "12×",
    "sub": "Organic Traffic Multiplier",
    "name": "Aura Derma Clinic",
    "desc": "Doctor-reviewed medical condition articles capturing high-intent local dermatology patients."
  },
  {
    "cat": "Corporate Law & Advisory",
    "metric": "₹1.8Cr",
    "sub": "Attributed Retainer Deals",
    "name": "Vanguard Legal Partners",
    "desc": "Thought-leadership whitepapers on FDI regulations downloaded by 1,200 corporate directors."
  },
  {
    "cat": "Real Estate Investment",
    "metric": "4.2×",
    "sub": "High-Net-Worth Investor Leads",
    "name": "Omaxe Luxury Insights",
    "desc": "In-depth NCR real estate appreciation reports driving verified luxury apartment consultations."
  },
  {
    "cat": "EdTech Academy",
    "metric": "45,000+",
    "sub": "Organic Course Enrollments",
    "name": "NextGen Tech Institute",
    "desc": "Comprehensive coding tutorials ranking on top of Google for Python and React development."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaLaptopCode />,
      title: "SEO Blog Writing & Pillar Pages",
      desc: "Exhaustive, deeply researched guides engineered to rank on page 1 of Google."
    },
    {
      badge: '02',
      icon: <FaRocket />,
      title: "Topical Authority Clusters",
      desc: "Interlinked content hubs signaling unmistakable subject-matter expertise to algorithms."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Whitepapers & E-Books",
      desc: "Premium gated research assets capturing verified C-Suite email and phone leads."
    },
    {
      badge: '04',
      icon: <FaTools />,
      title: "Website Commercial Copywriting",
      desc: "Conversion-focused homepage, service page, and landing page copy that sells."
    },
    {
      badge: '05',
      icon: <FaBullhorn />,
      title: "LinkedIn Thought Leadership",
      desc: "Executive ghostwriting establishing founders as recognized voices in their niche."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "Content Performance Telemetry",
      desc: "Tracking organic impression share, time-on-page, and lead attribution in GA4."
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
    "q": "Do you use AI tools to generate content?",
    "a": "No. All our content is researched, written, fact-checked, and edited by seasoned human writers with real domain expertise. We use software solely for data research and semantic keyword mapping."
  },
  {
    "q": "How do you ensure the content ranks on Google?",
    "a": "We combine exhaustive keyword intent mapping, semantic schema markup, deep topical clustering, and natural internal linking that satisfies both Google algorithms and human readers."
  },
  {
    "q": "Can you match our brand tone of voice?",
    "a": "Yes! We conduct an initial brand messaging discovery session to define your brand tone, vocabulary, target persona, and editorial guidelines."
  },
  {
    "q": "How long before we see measurable traffic growth from content marketing?",
    "a": "New content typically begins ranking within 45 to 60 days. Organic traffic compounds exponentially between months 3 to 9 as topical authority builds."
  },
  {
    "q": "Who owns the copyright to the articles produced?",
    "a": "You maintain 100% full commercial copyright and ownership of all articles, graphics, and whitepapers upon publication."
  },
  {
    "q": "Can you write content for technical or niche B2B industries?",
    "a": "Yes! Our team has specialized writers with backgrounds in engineering, software development, healthcare, finance, legal, and industrial manufacturing."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root contentmarketingpage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Content Marketing</span>
          </div>
          
          <h1 className="wm-sp-hero-title">
            Strategic <span>Content Marketing</span> Agency
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
                pageName="Content Marketing"
                source="Content Marketing Hero Section"
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
              <h2 className="wm-sp-card-title">Content that Ranks on Google & Compels High-Intent Action</h2>
              <p className="wm-sp-paragraph">
                Generic, AI-spun content fails to rank on modern Google and fails to build buyer trust. Google helpful content updates and AI search engines prioritize deep domain authority, primary research, and transparent expertise.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our seasoned team of industry journalists, technical researchers, and conversion copywriters formulate comprehensive topical authority clusters that capture buyers across the entire consideration funnel.
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
                    
                    <p className="wm-seopk__nm">Starter Authority</p>
                    <div className="wm-seopk__amt">₹30,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Consistent Organic Traffic Growth</p>
                    <span className="wm-seopk__kw">4 In-Depth Articles</span>
                    <ul className="wm-seopk__l">
                      <li>4 long-form authoritative articles (1,500+ words each)</li>
                      <li>Complete keyword research & semantic optimization</li>
                      <li>Custom royalty-free images & infographic graphics</li>
                      <li>Monthly organic traffic & ranking reports</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Content Marketing', 'Starter Authority')}
                    >
                      Choose Starter &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Growth Content Engine</p>
                    <div className="wm-seopk__amt">₹55,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Aggressive Search Dominance</p>
                    <span className="wm-seopk__kw">8 Articles + 1 Pillar</span>
                    <ul className="wm-seopk__l">
                      <li>8 in-depth articles + 1 comprehensive pillar hub</li>
                      <li>Internal link topical cluster architecture</li>
                      <li>Repurposing into 8 LinkedIn social carousel posts</li>
                      <li>Bi-weekly content strategy calls & GA4 conversion tracking</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Content Marketing', 'Growth Content Engine')}
                    >
                      Choose Growth &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Thought Leadership</p>
                    <div className="wm-seopk__amt">₹95,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">High-Ticket B2B & National Brands</p>
                    <span className="wm-seopk__kw">16 Articles + Whitepaper</span>
                    <ul className="wm-seopk__l">
                      <li>16 high-authority articles + 1 quarterly gated whitepaper</li>
                      <li>Executive LinkedIn ghostwriting for founder profiles</li>
                      <li>Digital PR outreach and media pitch syndication</li>
                      <li>Dedicated senior editorial strategist & copy lead</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Content Marketing', 'Enterprise Thought Leadership')}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Turnkey Website Copywriting</p>
                    <div className="wm-seopk__amt">₹40,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">New Website / Redesign Projects</p>
                    <span className="wm-seopk__kw">Up to 10 Web Pages</span>
                    <ul className="wm-seopk__l">
                      <li>Complete brand messaging guide & value proposition</li>
                      <li>Copywriting for up to 10 core pages (Home, About, Services)</li>
                      <li>Micro-copy, CTA buttons, and FAQ optimization</li>
                      <li>Two rounds of comprehensive stakeholder revisions</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Content Marketing', 'Turnkey Website Copywriting')}
                    >
                      Choose Turnkey &rarr;
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
                  <h2>Request a Free Content & Topical Authority Audit</h2>
                  <p>
                    Submit your website URL to receive an expert editorial audit revealing keyword content gaps, thin content risks, and opportunities to 3x organic impressions.
                  </p>
                  <DiagnosticLeadForm serviceName="Content Marketing" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Topical Coverage Gap Analysis</b> — Identify high-intent keywords your competitors rank for that you lack</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Helpful Content Guidelines Check</b> — Inspect content against Google latest E-E-A-T search quality rater guidelines</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Internal Link Structure Review</b> — Ensure link equity flows cleanly from informational blogs to commercial pages</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>90-Day Editorial Calendar</b> — Prioritized schedule of high-impact articles designed for maximum ROI</span>
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

export default ContentMarketingPage;

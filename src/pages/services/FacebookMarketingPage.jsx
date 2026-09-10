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
import './FacebookMarketingPage.css';

const FacebookMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "9+ yrs",
    "label": "Of certified Meta advertising mastery"
  },
  {
    "num": "₹12 Cr+",
    "label": "Profitable ad spend managed on Meta platforms"
  },
  {
    "num": "4.6×",
    "label": "Average documented Return on Ad Spend (ROAS)"
  },
  {
    "num": "100%",
    "label": "Server-side CAPI tracking & zero attribution loss"
  }
];

  const caseStudies = [
  {
    "cat": "D2C Apparel Brand",
    "metric": "6.4×",
    "sub": "Blended Meta ROAS · 18,500 Orders",
    "name": "UrbanAttire Clothing",
    "desc": "Advantage+ shopping campaign combined with influencer video reels scaling monthly revenue from ₹8L to ₹52L."
  },
  {
    "cat": "Real Estate Luxury NCR",
    "metric": "-44%",
    "sub": "Cost Per Qualified Site Visit Lead",
    "name": "Omaxe Luxury Penthouse",
    "desc": "Hyper-targeted geo-fenced Instagram carousel ads driving verified high-net-worth investor inquiries."
  },
  {
    "cat": "Health & Supplements",
    "metric": "₹1.2Cr",
    "sub": "Revenue Generated in 90 Days",
    "name": "VitaPure Nutraceuticals",
    "desc": "Educational founder-story video ads paired with 1-click bundle discount landing pages."
  },
  {
    "cat": "Home Decor & Furniture",
    "metric": "4.8×",
    "sub": "ROAS · 3,400 Furniture Sets Sold",
    "name": "LuxeLiving Furnishings",
    "desc": "Dynamic product catalog ads retargeting abandoned cart visitors with limited-time coupons."
  },
  {
    "cat": "EdTech Certification",
    "metric": "14,000+",
    "sub": "Webinar Registrations at ₹18 CPL",
    "name": "CareerPro Learning Institute",
    "desc": "High-converting Meta instant lead forms with automated WhatsApp reminder integration."
  },
  {
    "cat": "Cosmetics & Beauty",
    "metric": "5.2×",
    "sub": "First-Time Customer Acquisition ROAS",
    "name": "GlowSkin Organic Care",
    "desc": "UGC video review mashups showcasing real product application and 48-hour delivery."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaBullhorn />,
      title: "Meta Advantage+ Scaling",
      desc: "Leveraging Meta AI machine learning to find the lowest-cost buyer conversions."
    },
    {
      badge: '02',
      icon: <FaVideo />,
      title: "Direct-Response Video Ads",
      desc: "Reels and video ads scripted and edited specifically to trigger immediate purchases."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Server-Side CAPI Tracking",
      desc: "Recovering lost iOS14+ tracking data with direct server-to-server event sync."
    },
    {
      badge: '04',
      icon: <FaUsers />,
      title: "Dynamic Retargeting Funnels",
      desc: "Re-engaging warm visitors across Facebook and Instagram feeds until conversion."
    },
    {
      badge: '05',
      icon: <FaRocket />,
      title: "Instant Lead Form Funnels",
      desc: "Zero-friction lead generation forms auto-filling user contact details."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "Creative Fatigue Management",
      desc: "Continuous testing of new visual angles and copy hooks to maintain high ROAS."
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
    "q": "How much ad budget should we start with for Facebook and Meta Ads?",
    "a": "We recommend starting with a minimum test ad budget of ₹1,000 to ₹3,000 per day. Once profitable ROAS is established, budgets can be scaled systematically."
  },
  {
    "q": "Do you create the video reels and ad graphics?",
    "a": "Yes! Our turnkey service includes scriptwriting, video editing, graphic design, and copywriting tailored for direct-response conversions."
  },
  {
    "q": "How do you fix tracking losses from Apple iOS privacy updates?",
    "a": "We implement server-side Meta Conversions API (CAPI) through Google Tag Manager, sending conversion events directly from the server to Meta with a 9.0+ Event Match Quality score."
  },
  {
    "q": "Will we have direct access and ownership of our ad account?",
    "a": "100% yes. You maintain complete administrative ownership of your Meta Business Manager and ad accounts. All billing is direct and transparent."
  },
  {
    "q": "How fast can our Meta ad campaign go live?",
    "a": "After our initial onboarding and strategy alignment, we design creatives, write copy, set up tracking, and launch within 3 to 5 business days."
  },
  {
    "q": "How do you prevent ad fatigue when campaigns run for a long time?",
    "a": "We implement an active creative testing pipeline, introducing 2 to 4 fresh visual hooks, video edits, and copy angles every week to maintain high click-through rates."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root facebookmarketingpage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Facebook Marketing</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Meta Certified Partner Agency · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            High-ROAS <span>Facebook & Meta Ads</span> Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Scale your revenue with high-converting Meta and Facebook advertising campaigns featuring thumb-stopping video reels, AI lookalike audiences, and server-side Conversion API tracking.
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
                pageName="Facebook Marketing"
                source="Facebook Marketing Hero Section"
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
              <h2 className="wm-sp-card-title">Stop Burning Budget on Unprofitable Boosted Posts</h2>
              <p className="wm-sp-paragraph">
                Clicking the "Boost Post" button on Facebook or Instagram burns marketing capital with zero attribution. Profitable scaling on modern Meta requires full-funnel campaign architectures, creative fatigue management, and algorithmic broad targeting.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our Meta-certified media buyers combine psychological direct-response video creatives with server-side Conversions API (CAPI) to consistently acquire customers at the lowest cost-per-acquisition (CPA).
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
                  <h3 className="wm-dsm-layer__name">Creative Engine & Hook Psychology</h3>
                  <span className="wm-dsm-layer__role">Reels, Carousels & Static Hooks</span>
                </div>
                <p className="wm-dsm-layer__desc">High-production direct-response ad creative engineered to stop the scroll in the first 3 seconds.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Direct-response video reels with dynamic captions and hooks</li>
                  <li>Interactive product catalog carousels showcasing top sellers</li>
                  <li>A/B tested primary text copy addressing specific customer pain points</li>
                  <li>Custom thumbnail testing maximizing initial click-through rates</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Campaign Architecture & Bidding</h3>
                  <span className="wm-dsm-layer__role">Advantage+ & Audience Sculpting</span>
                </div>
                <p className="wm-dsm-layer__desc">Advanced campaign segmentation utilizing Meta Advantage+ Shopping and granular custom audiences.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Advantage+ Shopping Campaigns (ASC) for automated scaling</li>
                  <li>Custom audience retargeting for website visitors and video viewers</li>
                  <li>High-affinity Lookalike audiences (1% to 5% value tiers)</li>
                  <li>Exclusion lists preventing wasted spend on existing recent purchasers</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Server-Side CAPI & Full-Funnel Attribution</h3>
                  <span className="wm-dsm-layer__role">Data Resilience & Triple Whale/GA4</span>
                </div>
                <p className="wm-dsm-layer__desc">Bypassing iOS privacy restrictions with server-side Facebook Conversions API (CAPI) for 100% accurate tracking.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Meta Conversions API (CAPI) via server-side Google Tag Manager</li>
                  <li>Advanced offline event synchronization for phone and WhatsApp orders</li>
                  <li>Live Looker Studio dashboards reporting real-time blended ROAS</li>
                  <li>Weekly creative sprint refreshes preventing ad performance fatigue</li>
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
                    
                    <p className="wm-seopk__nm">Starter Meta Ads Plan</p>
                    <div className="wm-seopk__amt">₹25,000</div>
                    <p className="wm-seopk__gst">+ GST / mo (Up to ₹1L ad spend)</p>
                    <p className="wm-seopk__per">Local Leads & Emerging D2C</p>
                    <span className="wm-seopk__kw">Meta Lead / Traffic</span>
                    <ul className="wm-seopk__l">
                      <li>Campaign setup & audience targeting</li>
                      <li>4 custom ad creatives (Static & Carousel)</li>
                      <li>Meta Pixel & conversion tracking setup</li>
                      <li>Weekly optimization & performance report</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Starter &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Growth Performance Suite</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST / mo (Up to ₹3L ad spend)</p>
                    <p className="wm-seopk__per">Scaling E-Commerce & B2B Leads</p>
                    <span className="wm-seopk__kw">Reels + CAPI Included</span>
                    <ul className="wm-seopk__l">
                      <li>Advantage+ Shopping & full-funnel retargeting</li>
                      <li>8 custom direct-response creatives + 4 video reels</li>
                      <li>Server-side Meta Conversions API (CAPI) setup</li>
                      <li>Bi-weekly strategy call & Looker Studio dashboard</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Growth &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Scale Retainer</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST / mo (Up to ₹8L ad spend)</p>
                    <p className="wm-seopk__per">High-Volume National Brands</p>
                    <span className="wm-seopk__kw">Omnichannel Meta Scale</span>
                    <ul className="wm-seopk__l">
                      <li>Unlimited creative testing & video variations</li>
                      <li>Custom offline event and CRM lead scoring sync</li>
                      <li>Dedicated Senior Media Buyer + Motion Designer</li>
                      <li>Weekly sprint reviews & ad creative refresh cycles</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Dedicated Performance Squad</p>
                    <div className="wm-seopk__amt">₹1.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / mo (Large Ad Spend)</p>
                    <p className="wm-seopk__per">Enterprise Spend Scale</p>
                    <span className="wm-seopk__kw">Dedicated Media Buying Team</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated Senior Media Buyer + Copywriter + Video Editor</li>
                      <li>Continuous daily budget scaling across Facebook & Instagram</li>
                      <li>Real-time Slack channel collaboration & daily pacing reports</li>
                      <li>Advanced attribution modeling & multi-touch analytics</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Dedicated &rarr;
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
                  <h2>Request a Free Meta Ads Account Audit</h2>
                  <p>
                    Connect your Facebook Ad Account to receive an actionable 25-point audit uncovering budget leaks, creative fatigue, and attribution errors.
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
                    <span><b>Audience Overlap & Waste Audit</b> — Identify campaigns competing against each other and driving up cost-per-click</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Pixel & CAPI Health Check</b> — Verify Event Quality Match scores and fix missing server-side purchase signals</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Creative Fatigue Diagnostic</b> — Analyze frequency caps and identify ad creatives needing immediate replacement</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Actionable ROAS Scaling Roadmap</b> — Step-by-step strategy to profitably 2x ad spend without diminishing returns</span>
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

export default FacebookMarketingPage;

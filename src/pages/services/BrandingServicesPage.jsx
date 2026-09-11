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
import './BrandingServicesPage.css';

const BrandingServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "12+ yrs",
    "label": "Of strategic corporate brand building"
  },
  {
    "num": "350+",
    "label": "Corporate brand identities architected"
  },
  {
    "num": "4.8×",
    "label": "Average perceived brand valuation lift"
  },
  {
    "num": "100%",
    "label": "Trademark-ready vector brand systems"
  }
];

  const caseStudies = [
  {
    "cat": "Luxury Paint & Coating",
    "metric": "4.8×",
    "sub": "Perceived Brand Value Lift",
    "name": "Sirca Paints Italy",
    "desc": "Complete brand repositioning establishing European heritage and luxury craftsmanship across Indian architectural markets."
  },
  {
    "cat": "Real Estate Developer",
    "metric": "₹120Cr",
    "sub": "Sales Driven on Brand Launch Weekend",
    "name": "The Sovereign Residences",
    "desc": "Bespoke luxury branding suite including metallic foil brochures, project logo, and high-end signage."
  },
  {
    "cat": "Organic D2C Food",
    "metric": "3.4×",
    "sub": "Shelf-Space Retail Acceptance Rate",
    "name": "FarmerFresh Organic",
    "desc": "Earthy, trust-focused brand identity and sustainable packaging design adopted by 400+ supermarkets."
  },
  {
    "cat": "Fintech Corporate",
    "metric": "100%",
    "sub": "Trademark Approval in India & UAE",
    "name": "PaySprint Gateway",
    "desc": "High-tech geometric logo mark, dark-mode design system, and developer brand guidelines."
  },
  {
    "cat": "Hospitality Boutique",
    "metric": "+240%",
    "sub": "Direct Website Bookings",
    "name": "Aura Haven Resorts",
    "desc": "Serene visual brand identity with custom hand-drawn typography and luxury guest amenity packaging."
  },
  {
    "cat": "Industrial Automation",
    "metric": "18",
    "sub": "Global Distributor Signups",
    "name": "Vanguard Motion Systems",
    "desc": "Authoritative German-engineered visual aesthetic for B2B industrial robotics exporter."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaAward />,
      title: "Brand Strategy & Positioning",
      desc: "Uncovering your unique market differentiator and core customer promise."
    },
    {
      badge: '02',
      icon: <FaLaptopCode />,
      title: "Logo Design & Visual Marks",
      desc: "Timeless, trademark-ready logos crafted for digital and physical surfaces."
    },
    {
      badge: '03',
      icon: <FaTools />,
      title: "Comprehensive Brand Books",
      desc: "Exhaustive rulebooks ensuring brand consistency across all global agencies."
    },
    {
      badge: '04',
      icon: <FaShoppingBag />,
      title: "Packaging & Label Architecture",
      desc: "Shelf-stopping box, bottle, and pouch designs that captivate retail buyers."
    },
    {
      badge: '05',
      icon: <FaUsers />,
      title: "Corporate Stationery Suites",
      desc: "Visiting cards, letterheads, envelopes, and official company profiles."
    },
    {
      badge: '06',
      icon: <FaRocket />,
      title: "Digital Brand Design Tokens",
      desc: "Design system components ready for web, mobile apps, and ad campaigns."
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
    "q": "What is included in a complete Brand Guidelines Manual?",
    "a": "Our comprehensive Brand Book includes logo usage rules, minimum clear space, color codes (HEX, RGB, CMYK, Pantone), typography rules, imagery style, iconography, and incorrect usage examples."
  },
  {
    "q": "Do you ensure our logo is eligible for trademark registration?",
    "a": "Yes! We conduct preliminary trademark searches on the IP India registry to ensure our designs are unique and trademark-ready."
  },
  {
    "q": "What vector master files do you deliver upon completion?",
    "a": "You receive full master source files in AI, EPS, SVG, PDF, along with high-res transparent PNGs and web-optimized JPGs."
  },
  {
    "q": "How long does a full corporate branding project take?",
    "a": "A standard branding project takes 3 to 4 weeks, with clear concept review presentations at each milestone."
  },
  {
    "q": "Can you help redesign an outdated existing logo without losing brand recognition?",
    "a": "Yes! We specialize in brand refreshes that modernize your visual aesthetics while preserving the recognizable equity your customers know and trust."
  },
  {
    "q": "Who owns the intellectual property and copyrights?",
    "a": "You receive 100% full commercial copyright, trademark rights, and intellectual property ownership over all delivered design files."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root brandingservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Corporate Branding</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Brand Architecture & Positioning · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Strategic <span>Corporate Branding</span> Agency
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

          <p className="wm-sp-hero-lead">
            Build an iconic, unforgettable brand identity that commands premium market pricing, inspires customer loyalty, and establishes definitive category leadership.
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
                pageName="Corporate Branding"
                source="Corporate Branding Hero Section"
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
              <h2 className="wm-sp-card-title">Move Beyond Being a Commodity: Become a Category-Defining Brand</h2>
              <p className="wm-sp-paragraph">
                In hyper-competitive markets, features and pricing can be easily copied by competitors. The only permanent moat is a powerful brand that evokes positive emotion, signals premium trust, and makes buying decisions effortless.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, we architect complete brand identity systems from the ground up: core positioning strategy, brand naming, trademark-ready visual identity, packaging, and corporate messaging playbooks.
              </p>
            </div>

            {/* 3-Layer Sequential Strategy Framework */}
            {/* <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Execution Framework</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Delivery Layers</h2>
              <p className="wm-dsm-stack__lede">
                Sustainable digital excellence requires a robust architectural foundation, followed by agile engineering and continuous conversion optimization.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Brand Discovery & Positioning Strategy</h3>
                  <span className="wm-dsm-layer__role">Archetype, Voice & Value Proposition</span>
                </div>
                <p className="wm-dsm-layer__desc">Defining what your brand stands for, your target customer persona, and your unique category positioning.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Market competitor positioning and whitespace discovery</li>
                  <li>Brand archetype definition and personality framework</li>
                  <li>Core value proposition, mission, and brand manifesto</li>
                  <li>Audience empathy mapping and emotional purchase drivers</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Visual Identity & System Architecture</h3>
                  <span className="wm-dsm-layer__role">Logo, Typography & Design Tokens</span>
                </div>
                <p className="wm-dsm-layer__desc">Crafting the visual marks, typography scales, and color systems that embody your brand strategy.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Custom vector logo marks, monograms, and responsive logo variations</li>
                  <li>Color psychology palettes: primary, secondary, and functional tints</li>
                  <li>Typography hierarchy and licensing recommendations</li>
                  <li>Brand graphic elements: bespoke patterns, iconography, and textures</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Brand Guidelines & Multi-Surface Rollout</h3>
                  <span className="wm-dsm-layer__role">40-Page Brand Book & Collateral</span>
                </div>
                <p className="wm-dsm-layer__desc">Codifying rules in an exhaustive Brand Book and applying design across all physical and digital touchpoints.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Comprehensive 40+ page corporate Brand Guidelines Manual</li>
                  <li>Physical collateral: luxury visiting cards, stationery, and packaging</li>
                  <li>Digital assets: social media design systems and presentation decks</li>
                  <li>Brand launch roadmap and employee brand immersion guides</li>
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
            </section> */}

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
                    
                    <p className="wm-seopk__nm">Core Brand Starter</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Early-Stage Startups & Ventures</p>
                    <span className="wm-seopk__kw">Visual Identity Essentials</span>
                    <ul className="wm-seopk__l">
                      <li>3 unique logo concepts + unlimited revisions</li>
                      <li>Primary & secondary color palette definitions</li>
                      <li>Typography hierarchy recommendations</li>
                      <li>Visiting card, letterhead & envelope artwork</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Corporate Branding & Identity', 'Core Brand Starter')}
                    >
                      Choose Core &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Complete Corporate Brand Suite</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Scaling Commercial Businesses</p>
                    <span className="wm-seopk__kw">Full Brand Architecture</span>
                    <ul className="wm-seopk__l">
                      <li>Comprehensive Brand Strategy & Positioning document</li>
                      <li>Complete logo system with sub-marks & favicons</li>
                      <li>35-Page master Brand Guidelines Manual (PDF)</li>
                      <li>Social media kit (Headers, Profile DP, 6 Post Templates)</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Corporate Branding & Identity', 'Complete Corporate Brand Suite')}
                    >
                      Choose Complete &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Global Rebranding</p>
                    <div className="wm-seopk__amt">₹1.50 Lakh</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">Established Enterprises & Groups</p>
                    <span className="wm-seopk__kw">Turnkey Rebranding</span>
                    <ul className="wm-seopk__l">
                      <li>Complete brand architecture & category positioning strategy</li>
                      <li>Physical packaging, luxury product boxes & signage guidelines</li>
                      <li>Full website UI design system tokens & corporate pitch deck</li>
                      <li>Dedicated Brand Strategy Director & stakeholder workshops</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Corporate Branding & Identity', 'Enterprise Global Rebranding')}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Monthly Brand Governance</p>
                    <div className="wm-seopk__amt">₹30,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Continuous Brand Supervision</p>
                    <span className="wm-seopk__kw">Brand Guardian Retainer</span>
                    <ul className="wm-seopk__l">
                      <li>Review and approval of all internal and external marketing collateral</li>
                      <li>Creation of new brand marketing templates and event materials</li>
                      <li>Trademark monitoring and brand consistency compliance</li>
                      <li>Priority creative support for executive presentations</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Corporate Branding & Identity', 'Monthly Brand Governance')}
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
                  <h2>Request a Free Brand Perception & Visual Audit</h2>
                  <p>
                    Submit your existing logo and marketing assets to receive an expert brand audit evaluating visual consistency, category differentiation, and brand equity.
                  </p>
                  <DiagnosticLeadForm serviceName="Corporate Branding" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Actionable analysis delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your Assessment Includes</p>
                  
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Visual Distinctiveness Review</b> — Evaluate whether your logo and visual identity stands apart from competitors</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Brand Consistency Diagnostic</b> — Inspect cross-channel asset usage across website, social, and print collateral</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Trademark & Scalability Check</b> — Analyze vector scalability from 16px mobile icons to billboard sizes</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Brand Elevation Blueprint</b> — Actionable recommendations to command premium pricing and customer loyalty</span>
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

export default BrandingServicesPage;

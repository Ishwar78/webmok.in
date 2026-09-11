import React, { useState } from 'react';
import DiagnosticLeadForm from '../../components/DiagnosticLeadForm';
import HeroLeadForm from '../../components/HeroLeadForm';
import { Link } from 'react-router-dom';
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
import './LogoDesignServicesPage.css';

const LogoDesignServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "12+ yrs",
    "label": "Of brand identity & typographic mastery"
  },
  {
    "num": "1,500+",
    "label": "Original logos crafted worldwide"
  },
  {
    "num": "100%",
    "label": "Vector precision & trademark-ready delivery"
  },
  {
    "num": "100%",
    "label": "Complete commercial copyright ownership"
  }
];

  const caseStudies = [
  {
    "cat": "FinTech Neo-Bank",
    "metric": "$14M",
    "sub": "Series-A Funding Secured Post-Rebrand",
    "name": "Veloce Financial Technologies",
    "desc": "Modern minimalist geometric monogram conveying security, velocity, and institutional trust."
  },
  {
    "cat": "Luxury Real Estate",
    "metric": "₹120 Cr",
    "sub": "Ultra-Luxury Penthouse Developments",
    "name": "Elysian Bay Living",
    "desc": "Custom serif typography paired with an architectural crest finished in metallic champagne gold."
  },
  {
    "cat": "Organic Gourmet Foods",
    "metric": "1,200+",
    "sub": "Retail Supermarket Shelves Nationwide",
    "name": "Harvest & Hive Provisions",
    "desc": "Hand-crafted artisan badge mark optimized for packaging, jars, and kraft-paper boxes."
  },
  {
    "cat": "Cloud Security Platform",
    "metric": "350%",
    "sub": "Increase in Demo Requests",
    "name": "AegisShield Cyber",
    "desc": "Sleek cybernetic emblem incorporating continuous infinity loops and shield geometry."
  },
  {
    "cat": "Healthcare & Diagnostics",
    "metric": "80+",
    "sub": "Diagnostic Centers Rebranded",
    "name": "AuraScan Pathology",
    "desc": "Clean, approachable medical cross mark utilizing calming cyan and deep indigo tones."
  },
  {
    "cat": "Boutique Hospitality",
    "metric": "98.4%",
    "sub": "Guest Brand Favorability Score",
    "name": "The Grand Heritage Palace",
    "desc": "Classic imperial crest reimagined for modern smartphone screens and luxury hotel stationery."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaAward />,
      title: "Wordmarks & Custom Typography",
      desc: "Bespoke typographic logotypes crafted from custom-drawn letterforms."
    },
    {
      badge: '02',
      icon: <FaLaptopCode />,
      title: "Geometric & Abstract Marks",
      desc: "Mathematical marks symbolizing complex company values in pure geometry."
    },
    {
      badge: '03',
      icon: <FaShieldAlt />,
      title: "Crests, Badges & Emblems",
      desc: "Prestigious legacy seals combining typography, shields, and date marks."
    },
    {
      badge: '04',
      icon: <FaGlobe />,
      title: "Brand Style Guidelines",
      desc: "Detailed manuals specifying typography rules, color codes, and usage."
    },
    {
      badge: '05',
      icon: <FaShoppingBag />,
      title: "Packaging & Merchandise Mockups",
      desc: "Photorealistic 3D visual previews on boxes, apparel, and office signage."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "Trademark-Ready Asset Kits",
      desc: "High-resolution vector assets (AI, EPS, SVG, PDF, transparent PNGs)."
    }
  ];

  const industries = [
  "FinTech, Banking & Crypto",
  "Real Estate & Construction",
  "D2C & Retail Packaging",
  "Hospitality, Cafes & Dining",
  "Healthcare, Pharma & Biotech",
  "Legal & Financial Services",
  "Tech Startups & SaaS Platforms",
  "Education & Institutes",
  "Automotive & Engineering"
];

  const pricing = [
  {
    "name": "Starter Identity Pack",
    "amount": "₹15,000",
    "gst": "+ GST / one-time",
    "per": "Startups & Emerging Businesses",
    "kw": "3 Unique Design Concepts",
    "features": [
      "3 original custom logo design concepts",
      "Up to 3 rounds of design revisions",
      "Full vector source files (AI, EPS, SVG, PDF, PNG)",
      "High-resolution print and web versions",
      "100% full commercial copyright ownership"
    ]
  },
  {
    "name": "Professional Brand Suite",
    "badge": "Most Chosen",
    "amount": "₹32,000",
    "gst": "+ GST / one-time",
    "per": "Growing Companies & Rebrands",
    "kw": "5 Concepts + Brand Manual",
    "features": [
      "5 distinct conceptual logo directions",
      "Unlimited design revision iterations",
      "Comprehensive 15-page Brand Style Guide",
      "Business card, letterhead & envelope stationery designs",
      "Social media profile avatars and banner templates",
      "Favicons and mobile app icon formats"
    ],
    "highlight": true
  },
  {
    "name": "Enterprise Brand Architecture",
    "amount": "₹65,000",
    "gst": "+ GST / one-time",
    "per": "Corporates, Funded Startups & Global Firms",
    "kw": "Complete 360° Brand System",
    "features": [
      "Unlimited design concepts by Senior Art Directors",
      "Comprehensive 35-page Master Brand Guidelines",
      "Full corporate stationery and presentation deck template",
      "Packaging and 3D signage application mockups",
      "Trademark registration advisory documentation",
      "Dedicated Brand Director & priority 72h delivery"
    ]
  },
  {
    "name": "Custom Identity Studio",
    "amount": "Custom",
    "gst": "Bespoke Quote",
    "per": "Global Conglomerates & Luxury Houses",
    "kw": "Full Custom Brand Creation",
    "features": [
      "Bespoke proprietary custom font family creation",
      "Global international trademark clearance screening",
      "Physical luxury packaging prototypes",
      "On-site brand unveiling presentation"
    ],
    "isDark": true
  }
];

  const faqs = [
  {
    "q": "Do I own the full copyright to the logo you design for me?",
    "a": "Yes, 100%. Upon completion and final payment, all intellectual property and commercial copyright rights are legally transferred to you. You are free to trademark the logo in India or globally."
  },
  {
    "q": "What formats will I receive when the design is complete?",
    "a": "You will receive an organized ZIP package containing vector master files (Adobe Illustrator .AI, Scalable Vector Graphics .SVG, Encapsulated PostScript .EPS, and print-ready .PDF) along with transparent high-resolution PNGs and JPGs for instant web and digital use."
  },
  {
    "q": "What happens if I do not like the initial logo concepts?",
    "a": "We conduct a thorough discovery process before designing to prevent misalignments. In the rare event you are not fully satisfied with the first round, our team reviews your specific feedback and presents completely new alternative directions."
  },
  {
    "q": "Can you redesign or modernize our existing company logo?",
    "a": "Yes! We frequently handle brand modernization and logo refreshes where we preserve the recognized heritage and equity of your existing logo while upgrading its typography, geometry, and scalability for modern digital screens."
  }
];

  return (
    <div className="logodesignservicespage-root wm-sp-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
              <div className="wm-sp-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Logo Design</span>
              </div>
              
              <h1 className="wm-sp-hero-title">
                Distinctive Brand Identity & <span>Logo Design</span> Company
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
                pageName="Logo Design & Brand Identity"
                source="Logo Design Hero Section"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* 2. THREE-COLUMN ARCHITECTURE / STRATEGY */}
      <div className="wm-sp-body">
        <div className="wm-sp-container">
          <div className="wm-sp-main-col">
            
            {/* Overview & Execution Stack */}
            <section className="wm-dsm-stack">
              <div className="wm-dsm-stack__head">
                <span className="wm-dsm-badge">Bespoke Brand Identity</span>
                <h2 className="wm-dsm-stack__title">Engineered for Timeless Brand Recognition & Instant Trust</h2>
                <p className="wm-dsm-stack__sub">Your logo is the foundation of your company’s public identity. A generic, clip-art logo damages consumer trust before your sales team ever speaks a word. At WebMok, our identity designers craft custom vector brand marks anchored in market psychology, color theory, and typographic balance that look equally stunning on a 16px favicon or a 50-foot billboard.</p>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Discovery, Moodboarding & Conceptual Sketches</h3>
                  <span className="wm-dsm-layer__role">Foundation & Structure</span>
                </div>
                <p className="wm-dsm-layer__desc">We decode your brand values, target demographic, and industry competitive landscape before sketching original visual metaphors.</p>
                <ul className="wm-dsm-layer__list">
                  <li>In-depth questionnaire analyzing company vision and target audience</li>
                  <li>Competitor visual audit ensuring 100% unique brand differentiation</li>
                  <li>Hand-drawn pencil concepting exploring dozens of typographic forms</li>
                  <li>Curated moodboards exploring color emotional psychology</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Vector Craftsmanship & Golden Ratio Geometry</h3>
                  <span className="wm-dsm-layer__role">Execution & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">Transforming selected sketches into mathematically balanced vector artwork using Adobe Illustrator and precision geometric grids.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Golden ratio geometric circle and grid alignment</li>
                  <li>Custom typographic kerning and bespoke letterform alterations</li>
                  <li>Monochrome black-and-white testing ensuring high contrast legibility</li>
                  <li>Scalability testing across digital screens, apparel, and print media</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Brand Identity Guidelines & Universal Asset Kits</h3>
                  <span className="wm-dsm-layer__role">Optimization & Performance</span>
                </div>
                <p className="wm-dsm-layer__desc">Delivering comprehensive asset packages ready for immediate use across print, digital, mobile, and merchandise.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Comprehensive Brand Style Guide (color hex/Pantone, typography rules)</li>
                  <li>Clear space guidelines, minimum size rules, and incorrect usage warnings</li>
                  <li>Master source files in all vector and raster formats (AI, EPS, SVG, PDF, PNG)</li>
                  <li>Ready-to-use social media profile kits and email signature assets</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Logo Design & Brand Identity', plan.name)}>
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
                        onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Logo Design & Brand Identity', plan.name)}
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
                  {pricing.map((plan, i) => (
                    <div
                      key={i}
                      className={`wm-seopk__c ${plan.highlight ? 'wm-seopk__c--hi' : ''} ${plan.isDark ? 'wm-seopk__c--dark' : ''}`}
                    >
                      {plan.badge && <span className="wm-seopk__badge">{plan.badge}</span>}
                      <p className="wm-seopk__nm">{plan.name}</p>
                      <div className="wm-seopk__amt">{plan.amount}</div>
                      <p className="wm-seopk__gst">{plan.gst}</p>
                      <p className="wm-seopk__per">{plan.per}</p>
                      <span className="wm-seopk__kw">{plan.kw}</span>
                      <ul className="wm-seopk__l">
                        {plan.features.map((feat, fi) => (
                          <li key={fi}>{feat}</li>
                        ))}
                      </ul>
                      <button
                        className={`wm-seopk__cta ${plan.highlight ? 'wm-seopk__cta--f' : 'wm-seopk__cta--o'}`}
                        onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Logo Design & Brand Identity', plan.name)}
                      >
                        Choose {plan.name.split(' ')[0]} &rarr;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Instant Free Audit Tool Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__pill">Fast Commercial Audit</span>
                  <h3 className="wm-rsau__h3">
                    Analyze Your Current Digital & Marketing Health
                  </h3>
                  <p className="wm-rsau__p">
                    Enter your website or social profile URL. Receive a comprehensive, manual assessment from our senior solutions architect in under 2 hours.
                  </p>
                </div>
                <DiagnosticLeadForm serviceName="Logo Design" />
                  <span className="wm-rsau__sub">
                    100% Free · No Credit Card Required · Strictly Confidential
                  </span>
              </div>
            </div>

            {/* 7. Comprehensive FAQ Section */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <p className="wm-sp-paragraph">
                Essential details regarding execution deliverables, timelines, and commercial models:
              </p>
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

            {/* 8. Bottom CTA Box */}
            <div className="wm-sp-card wm-sp-bottom-cta">
              <h2>Ready to Accelerate Your Commercial Growth?</h2>
              <p>
                Schedule an exploratory briefing with our solution architects. We formulate transparent project proposals within 24 hours.
              </p>
              <div className="wm-sp-bottom-btns">
                <button
                  type="button"
                  className="wm-sp-btn-primary"
                  onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Logo Design & Brand Identity', plan.name)}
                >
                  Request Itemized Proposal &rarr;
                </button>
                <button
                  type="button"
                  className="wm-sp-btn-outline"
                  onClick={onOpenCallMe}
                >
                  <FaPhoneAlt /> Call Me in 28 Seconds
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignServicesPage;

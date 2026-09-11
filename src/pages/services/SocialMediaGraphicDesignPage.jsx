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
import './SocialMediaGraphicDesignPage.css';

const SocialMediaGraphicDesignPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "9+ yrs",
    "label": "Of creative visual direction & graphic mastery"
  },
  {
    "num": "15,000+",
    "label": "Social media creatives & carousels designed"
  },
  {
    "num": "3.4×",
    "label": "Average CTR lift on performance ad creatives"
  },
  {
    "num": "24-48h",
    "label": "Lightning-fast delivery turnaround times"
  }
];

  const caseStudies = [
  {
    "cat": "D2C Cosmetics Brand",
    "metric": "+340%",
    "sub": "Organic Instagram Post Shares",
    "name": "GlowAura Skincare",
    "desc": "Aesthetic pastel carousel decks dissecting skincare ingredients that became viral reference guides."
  },
  {
    "cat": "Real Estate Investment Fund",
    "metric": "₹24 Cr",
    "sub": "Inbound Pipeline via LinkedIn Carousels",
    "name": "CapStone Realty Partners",
    "desc": "High-authority dark-mode PDF carousels breaking down commercial property yields and tax benefits."
  },
  {
    "cat": "Health Supplement D2C",
    "metric": "4.2x",
    "sub": "ROAS Lift on Meta Ad Creatives",
    "name": "PureVitality Nutrition",
    "desc": "Bold comparison graphics and clinical proof creatives reducing customer acquisition cost by 48%."
  },
  {
    "cat": "EdTech Learning Platform",
    "metric": "45,000",
    "sub": "Webinar Registrations from Ad Graphics",
    "name": "CodeMasters Academy",
    "desc": "High-contrast cybernetic graphics illustrating salary benchmarks and tech stack career paths."
  },
  {
    "cat": "Gourmet Restaurant Chain",
    "metric": "18,000+",
    "sub": "Menu Promo Saves and Shares",
    "name": "The Urban Truffle",
    "desc": "Mouthwatering food photography color grading paired with elegant bespoke typography."
  },
  {
    "cat": "FinTech Personal Finance",
    "metric": "2.8M",
    "sub": "Monthly Organic Impressions",
    "name": "PennyWise Wealth",
    "desc": "Minimalist bite-sized financial infographics driving massive bookmark and share virality."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaShoppingBag />,
      title: "Seamless Swipeable Carousels",
      desc: "Continuous panorama multi-slide decks with magnetic visual flow."
    },
    {
      badge: '02',
      icon: <FaBullhorn />,
      title: "High-CTR Performance Ad Banners",
      desc: "Direct-response Meta, Google, and LinkedIn ad creatives engineered to convert."
    },
    {
      badge: '03',
      icon: <FaChartLine />,
      title: "Infographics & Educational Decks",
      desc: "Data-driven visual charts, workflow diagrams, and industry cheat sheets."
    },
    {
      badge: '04',
      icon: <FaAward />,
      title: "Story & Reel Cover Design",
      desc: "Click-worthy video thumbnails, story templates, and highlight icons."
    },
    {
      badge: '05',
      icon: <FaLaptopCode />,
      title: "Product Feature Breakdowns",
      desc: "Photorealistic compositing, spec callouts, and benefit-driven collages."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "Festival & Seasonal Campaigns",
      desc: "Festive branding, promotional sale graphics, and event countdown teasers."
    }
  ];

  const industries = [
  "D2C & Consumer Brands",
  "Fashion, Apparel & Luxury",
  "FinTech & Personal Finance",
  "Healthcare, Wellness & Fitness",
  "Real Estate & Interior Design",
  "Restaurants, Cafes & FMCG",
  "EdTech, Coaches & Academies",
  "B2B SaaS & Tech Startups",
  "Digital Marketing Agencies"
];

  const pricing = [
  {
    "name": "Starter Creative Pack",
    "amount": "₹22,000",
    "gst": "+ GST / month",
    "per": "Emerging Brands & Creators",
    "kw": "15 High-Impact Creatives / mo",
    "features": [
      "15 custom designed static posts or story graphics",
      "Concept ideation and visual copy polishing",
      "Fast 48-hour turnarounds per creative batch",
      "Formats optimized for Instagram, Facebook, and LinkedIn",
      "Up to 2 revision iterations included"
    ]
  },
  {
    "name": "Growth Studio Suite",
    "badge": "Most Chosen",
    "amount": "₹42,000",
    "gst": "+ GST / month",
    "per": "High-Growth Brands & Ad Campaigns",
    "kw": "30 Creatives + Carousels",
    "features": [
      "30 custom graphics including multi-slide carousels",
      "5 High-CTR performance ad banner variations",
      "Story highlight icons and branded template kit",
      "Priority 24-hour turnaround on urgent requests",
      "Dedicated Senior Graphic Designer & Art Director"
    ],
    "highlight": true
  },
  {
    "name": "Enterprise Visual Retainer",
    "amount": "₹75,000",
    "gst": "+ GST / month",
    "per": "Heavy Ad Spenders & Omnichannel Brands",
    "kw": "Unlimited Creative Requests",
    "features": [
      "60+ custom design assets per month (carousels, ads, banners)",
      "A/B creative testing packs for Facebook & Google Ads",
      "Complete Photoshop (.PSD) and Illustrator (.AI) source files",
      "Print merchandise, brochure, and banner design included",
      "Dedicated Slack channel with creative director"
    ]
  },
  {
    "name": "Custom Agency White-Label",
    "amount": "Custom",
    "gst": "Dedicated Squad",
    "per": "Marketing Agencies & Global Corporates",
    "kw": "Dedicated Remote Design Team",
    "features": [
      "Dedicated full-time squad of graphic artists and illustrators",
      "100% white-label delivery directly to your clients",
      "Same-day rush turnarounds for social trends",
      "Monthly brand style strategy consultations"
    ],
    "isDark": true
  }
];

  const faqs = [
  {
    "q": "Do you write the copy or text for the social media graphics?",
    "a": "Yes! You can either provide your own draft bullet points, or our team can write punchy, engaging headlines, body text, and calls-to-action tailored to each visual."
  },
  {
    "q": "Do we get the editable Photoshop or Illustrator source files?",
    "a": "Yes, on our Growth and Enterprise packages, we deliver full layered Adobe Photoshop (.PSD) and Adobe Illustrator (.AI) source files upon project completion."
  },
  {
    "q": "How fast can you deliver an urgent graphic request?",
    "a": "Our standard turnaround is 24 to 48 hours. For clients on our Growth and Enterprise retainers, we provide rush same-day turnaround for trending topics, breaking announcements, or flash sales."
  },
  {
    "q": "Can you match our existing brand guidelines and color palette?",
    "a": "Absolutely. We request your logo files, brand style guide, preferred fonts, and color hex codes during onboarding to ensure 100% brand consistency across all delivered graphics."
  }
];

  return (
    <div className="socialmediagraphicdesignpage-root wm-sp-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
              <div className="wm-sp-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Social Media Graphic Design</span>
              </div>
              
              <h1 className="wm-sp-hero-title">
                High-Converting <span>Social Media Graphic Design</span> Agency
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
                pageName="Social Media Graphic Design"
                source="Social Media Graphic Design Hero Section"
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
                <span className="wm-dsm-badge">High-Impact Visual Studio</span>
                <h2 className="wm-dsm-stack__title">Engineered for Viral Shareability & High Click-Through Rates</h2>
                <p className="wm-dsm-stack__sub">Social media feeds move at breakneck speed. If your graphics look like cheap Canva templates, users scroll past without a second thought. WebMok’s graphic design studio combines high-fashion aesthetic typography, photorealistic compositing, visual hierarchy psychology, and brand consistency to make your brand instantly recognizable in crowded feeds.</p>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Brand Aesthetic Blueprint & Creative Direction</h3>
                  <span className="wm-dsm-layer__role">Foundation & Structure</span>
                </div>
                <p className="wm-dsm-layer__desc">We formulate a cohesive visual identity system tailored specifically to your target demographic and social platforms.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Curating bespoke color schemes, typographic pairings, and grid layouts</li>
                  <li>Establishing recognizable brand visual patterns that build instant recall</li>
                  <li>Competitor visual analysis identifying aesthetic gaps to dominate</li>
                  <li>Developing reusable multi-slide master carousel and post templates</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Carousel Decks, Infographics & Static Visuals</h3>
                  <span className="wm-dsm-layer__role">Execution & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">Designing value-packed, high-retention multi-slide carousels and infographics that trigger high bookmark and share ratios.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Seamless swipeable panoramic carousels with continuous visual flow</li>
                  <li>Data-dense corporate infographics and step-by-step educational guides</li>
                  <li>High-resolution product feature breakdown banners and lifestyle collages</li>
                  <li>Customer testimonial cards and social proof trust badges</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Performance Ad Banners & High-CTR Iterations</h3>
                  <span className="wm-dsm-layer__role">Optimization & Performance</span>
                </div>
                <p className="wm-dsm-layer__desc">Engineering commercial ad creatives for Meta, Google Display, and LinkedIn ads that lower cost-per-click and maximize conversions.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Direct-response ad creative testing (problem-solution, before-after hooks)</li>
                  <li>Multiple headline and CTA button color split-test variations</li>
                  <li>Seasonal festival promotions, flash sale badges, and discount graphics</li>
                  <li>Delivery of layered Photoshop (.PSD) and Illustrator (.AI) source files</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Social Media Graphic Design', plan.name)}>
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
                        onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Social Media Graphic Design', plan.name)}
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
                        onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Social Media Graphic Design', plan.name)}
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
                <DiagnosticLeadForm serviceName="Social Media Graphic Design" />
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
                  onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Social Media Graphic Design', plan.name)}
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

export default SocialMediaGraphicDesignPage;

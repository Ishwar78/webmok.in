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
import './SocialMediaMarketingPage.css';

const SocialMediaMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "Of social growth & creative studio mastery"
  },
  {
    "num": "25M+",
    "label": "Video views delivered across reels & shorts"
  },
  {
    "num": "5.2×",
    "label": "Average documented social campaign ROAS"
  },
  {
    "num": "100%",
    "label": "Turnkey creative design & copywriting"
  }
];

  const caseStudies = [
  {
    "cat": "Home Decor & Coating",
    "metric": "45,000+",
    "sub": "Organic Community Members · 5.2x ROAS",
    "name": "Sirca Paints Italy",
    "desc": "Omnichannel campaign combining architect video reels, contractor contests, and localized Meta lead ads."
  },
  {
    "cat": "Fashion & Apparel",
    "metric": "3.8M",
    "sub": "Viral Reel Views in 30 Days",
    "name": "Zoya Ethnic Studio",
    "desc": "Influencer lookbook collaboration driving 2,400 direct Instagram DM orders in first week."
  },
  {
    "cat": "B2B Corporate Law",
    "metric": "+420%",
    "sub": "LinkedIn Inbound Inquiries",
    "name": "Aura Corporate Advisory",
    "desc": "Executive ghostwriting and educational carousels reaching 120,000 C-Suite professionals monthly."
  },
  {
    "cat": "Healthcare & Dermatology",
    "metric": "340+",
    "sub": "Monthly Clinic Walk-ins",
    "name": "GlowClinic Delhi",
    "desc": "Before-and-after video reels and localized geo-targeted Meta ads with instant WhatsApp booking."
  },
  {
    "cat": "EdTech Platform",
    "metric": "18,500",
    "sub": "Webinar Registrations via Reels",
    "name": "SkillNext Institute",
    "desc": "Engaging micro-tutorials on Instagram and YouTube Shorts with automated 1-click DM signup links."
  },
  {
    "cat": "Fine Dining & Hospitality",
    "metric": "+190%",
    "sub": "Weekend Table Reservations",
    "name": "The Olive Terrace Cafe",
    "desc": "Cinematic food reels and targeted local radius promotions during peak dining hours."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaVideo />,
      title: "Viral Reels & Short-Form Video",
      desc: "High-production vertical video edited for maximum algorithmic distribution."
    },
    {
      badge: '02',
      icon: <FaBullhorn />,
      title: "Meta & Instagram Paid Advertising",
      desc: "Laser-focused paid ads driving direct sales and lead inquiries at low CPA."
    },
    {
      badge: '03',
      icon: <FaLaptopCode />,
      title: "LinkedIn B2B Thought Leadership",
      desc: "Strategic positioning for corporate executives, founders, and B2B brands."
    },
    {
      badge: '04',
      icon: <FaUsers />,
      title: "Community Management & DMs",
      desc: "Active comment moderation and automated direct message sales qualification."
    },
    {
      badge: '05',
      icon: <FaAward />,
      title: "Influencer Collaborations",
      desc: "Partnering with vetted micro and macro influencers for credible social proof."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "Social Analytics & Attribution",
      desc: "Tracking follower growth, engagement rates, and closed customer revenue."
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
    "q": "Do you shoot the videos or do we provide footage?",
    "a": "We offer flexible options: our video team can visit your location in Delhi NCR for scheduled monthly video shoots, or you can send us raw footage which our studio edits with professional sound, effects, and color grading."
  },
  {
    "q": "How many times per week should our brand post on social media?",
    "a": "For optimal algorithmic growth, we recommend 4 to 5 high-quality posts per week, combining reels, carousels, and interactive stories."
  },
  {
    "q": "Can you run paid ads alongside organic social posting?",
    "a": "Yes! We run integrated campaigns where organic reels with high engagement are promoted as paid ads to maximize return on ad spend."
  },
  {
    "q": "Do you manage comments and direct messages (DMs)?",
    "a": "Yes! We configure automated DM responders via ManyChat to capture inquiries instantly, and our team monitors comments daily."
  },
  {
    "q": "What industries do you have proven social media results in?",
    "a": "We have executed successful campaigns across fashion, cosmetics, real estate, healthcare, hospitality, education, and B2B industrial services."
  },
  {
    "q": "How do you measure the success of social media marketing?",
    "a": "We measure true business metrics: qualified lead inquiries, website clicks, video completion rates, cost per acquisition (CPA), and attributed revenue."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root socialmediamarketingpage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Social Media Marketing</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Creative Studio & Paid Social · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            Strategic <span>Social Media Marketing</span> Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Build an engaged, loyal community and drive predictable sales with thumb-stopping creative reels, influencer collaborations, and high-ROAS paid social ads on Instagram, LinkedIn, and Meta.
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
                pageName="Social Media Marketing"
                source="Social Media Marketing Hero Section"
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
              <h2 className="wm-sp-card-title">Turn Passive Social Scrollers into Passionate Brand Advocates</h2>
              <p className="wm-sp-paragraph">
                Posting random product images with generic hashtags produces zero business impact. Winning in modern social algorithms requires cinematic short-form video, thumb-stopping visual hooks, community conversation, and precise retargeting funnels.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our in-house creative studio produces viral Reels, high-production carousels, and paid social campaigns tailored specifically for Instagram, LinkedIn, YouTube, and Facebook.
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
                    
                    <p className="wm-seopk__nm">Starter Social Presence</p>
                    <div className="wm-seopk__amt">₹25,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Local & Emerging Brands</p>
                    <span className="wm-seopk__kw">12 Creative Posts / mo</span>
                    <ul className="wm-seopk__l">
                      <li>12 high-quality graphic posts & carousels</li>
                      <li>Caption copywriting & strategic hashtag research</li>
                      <li>Profile optimization (Bio, Highlights & Links)</li>
                      <li>Monthly reach & engagement report</li>
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
                    <p className="wm-seopk__nm">Growth Social + Reels</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">High-Growth Consumer & D2C Brands</p>
                    <span className="wm-seopk__kw">8 Graphics + 6 Reels</span>
                    <ul className="wm-seopk__l">
                      <li>8 custom graphic posts + 6 cinematic video reels</li>
                      <li>Paid ad campaign management (up to ₹50k ad budget)</li>
                      <li>Automated ManyChat DM lead capture flow</li>
                      <li>Bi-weekly content strategy calls & Looker Studio dashboard</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Growth &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Enterprise Social Dominance</p>
                    <div className="wm-seopk__amt">₹80,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">National Brands & Omnichannel Scale</p>
                    <span className="wm-seopk__kw">15 Graphics + 12 Reels</span>
                    <ul className="wm-seopk__l">
                      <li>15 graphic posts + 12 professionally edited reels</li>
                      <li>Multi-channel management (Instagram, LinkedIn, YouTube)</li>
                      <li>Influencer outreach & collaboration coordination</li>
                      <li>Dedicated creative art director & video editor</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Enterprise &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">LinkedIn Executive Suite</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">B2B Founders & C-Suite</p>
                    <span className="wm-seopk__kw">Founder Brand Building</span>
                    <ul className="wm-seopk__l">
                      <li>12 executive LinkedIn thought-leadership posts</li>
                      <li>Custom PDF carousel decks & Infographics</li>
                      <li>Profile audit & networking outreach sequence</li>
                      <li>Monthly network growth & lead attribution report</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose LinkedIn &rarr;
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
                  <h2>Request a Free Social Media & Creative Audit</h2>
                  <p>
                    Submit your social media handles to receive an in-depth audit evaluating your visual consistency, engagement rate vs competitors, and conversion leaks.
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
                    <span><b>Visual Aesthetics & Grid Audit</b> — Evaluate typography consistency, color balance, and brand cohesion</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Engagement Rate vs Benchmark</b> — Analyze true audience engagement against top industry competitors</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Reel Pacing & Hook Analysis</b> — Identify why current video content is not achieving viral reach</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>30-Day Creative Content Plan</b> — Actionable creative concepts, hooks, and campaign angles tailored to your brand</span>
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

export default SocialMediaMarketingPage;

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
import './VideoGraphicServicesPage.css';

const VideoGraphicServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "Of commercial design & video editing"
  },
  {
    "num": "1,500+",
    "label": "Commercial video assets produced"
  },
  {
    "num": "100%",
    "label": "High-definition 4K rendering & grading"
  },
  {
    "num": "24-48h",
    "label": "Fast turnaround on design sprints"
  }
];

  const caseStudies = [
  {
    "cat": "Luxury Paint Brand",
    "metric": "10M+",
    "sub": "Views on TV & YouTube Commercials",
    "name": "Sirca Paints Italy",
    "desc": "Cinematic corporate brand film and 3D product renders broadcasted across television and digital networks."
  },
  {
    "cat": "Real Estate Developer",
    "metric": "₹180Cr",
    "sub": "Sales Driven via Project Walkthrough Video",
    "name": "Omaxe Skywalk Suites",
    "desc": "High-end 3D architectural animation and cinematic drone walkthrough video."
  },
  {
    "cat": "D2C Consumer Electronics",
    "metric": "6.4×",
    "sub": "Ad Click-Through Rate (CTR)",
    "name": "SoundMax Wireless Earbuds",
    "desc": "Exploded 3D product feature video highlighting noise cancellation and water resistance."
  },
  {
    "cat": "Industrial Machinery",
    "metric": "120+",
    "sub": "Enterprise RFQ Inquiries at Trade Expo",
    "name": "Apex CNC Technologies",
    "desc": "Exhibition LED video wall animation and luxury metallic print product catalog."
  },
  {
    "cat": "EdTech Academy",
    "metric": "+320%",
    "sub": "Course Page Video Completion Rate",
    "name": "CodeMasters Pro Learning",
    "desc": "Engaging animated 2D explainer video breaking down complex software engineering concepts."
  },
  {
    "cat": "Fintech Startup",
    "metric": "$2.5M",
    "sub": "Seed Capital Raised via Pitch Deck",
    "name": "FlowPay Payments",
    "desc": "Bespoke investor pitch deck with custom vector iconography and financial data visualization."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaVideo />,
      title: "Commercial Video Editing",
      desc: "High-production editing for TVCs, YouTube ads, reels, and corporate films."
    },
    {
      badge: '02',
      icon: <FaLaptopCode />,
      title: "Brand Identity & Logo Design",
      desc: "Distinct vector logos, brand books, and corporate design systems."
    },
    {
      badge: '03',
      icon: <FaRocket />,
      title: "2D & 3D Motion Graphics",
      desc: "Dynamic animations in After Effects and Blender bringing concepts to life."
    },
    {
      badge: '04',
      icon: <FaTools />,
      title: "Packaging & Print Design",
      desc: "Luxury product boxes, pouches, brochures, and trade show graphics."
    },
    {
      badge: '05',
      icon: <FaBullhorn />,
      title: "Social Media Ad Creatives",
      desc: "High-converting static carousels, display banners, and promotional artwork."
    },
    {
      badge: '06',
      icon: <FaChartLine />,
      title: "Investor Pitch Decks",
      desc: "Persuasive executive presentations designed to secure venture funding."
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
    "q": "What software do your designers and editors use?",
    "a": "We utilize industry-standard professional tools including Adobe Creative Cloud (Premiere Pro, After Effects, Photoshop, Illustrator), Figma, DaVinci Resolve Studio, and Blender 3D."
  },
  {
    "q": "What is your typical turnaround time for graphic design and video edits?",
    "a": "Standard graphic design requests are delivered within 24 to 48 hours. Video edits typically take 48 to 72 hours depending on complexity."
  },
  {
    "q": "Do you provide the raw editable project files?",
    "a": "Yes! Upon completion and approval, you receive full access to all master source files (.AI, .PSD, .PRPROJ, .AEP, .FIG) with zero restrictions."
  },
  {
    "q": "Can you shoot live video footage on-site?",
    "a": "Yes! We have professional cinematography crews in Delhi NCR equipped with 4K cinema cameras, lighting kits, and drone equipment for corporate shoots."
  },
  {
    "q": "How do you handle revisions if we want changes?",
    "a": "All our packages include multiple revision rounds. We collaborate through intuitive video timestamp review tools to ensure feedback is implemented quickly."
  },
  {
    "q": "Who holds the commercial copyright to the produced designs?",
    "a": "You maintain 100% full commercial copyright, trademark rights, and intellectual property ownership over all delivered assets."
  }
];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root videographicservicespage-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Video & Graphic Design</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> Creative Studio Production · #Wise Solutions
          </span>
          <h1 className="wm-sp-hero-title">
            High-Impact <span>Video & Graphic Design</span> Studio
          </h1>
          <p className="wm-sp-hero-lead">
            Elevate your brand with award-winning visual identity, motion graphics, commercial 3D renders, and cinematic video editing engineered to capture customer attention.
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
                pageName="Video & Graphic Design"
                source="Video & Graphic Design Hero Section"
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
              <h2 className="wm-sp-card-title">Visual Assets That Command Attention & Drive Commercial Sales</h2>
              <p className="wm-sp-paragraph">
                In a digital world crowded with average visuals, extraordinary creative design is the ultimate unfair advantage. A poorly designed graphic damages brand credibility, while high-caliber visual craft commands premium pricing and buyer trust.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok Creative Studio, our senior graphic designers, motion artists, and post-production editors deliver commercial-grade marketing collateral, packaging designs, corporate pitch decks, and commercial video advertisements.
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
                    
                    <p className="wm-seopk__nm">Monthly Graphic Design Sprint</p>
                    <div className="wm-seopk__amt">₹25,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Active Marketing Teams</p>
                    <span className="wm-seopk__kw">Dedicated Graphic Designer</span>
                    <ul className="wm-seopk__l">
                      <li>20 custom graphic designs per month</li>
                      <li>Social media posts, banners & email graphics</li>
                      <li>24-48 hour turnaround per design task</li>
                      <li>Full source files (Figma, AI, PSD) included</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Monthly &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c wm-seopk__c--hi ">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Video Editing Studio Retainer</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Content Creators & E-Commerce</p>
                    <span className="wm-seopk__kw">Dedicated Video Editor</span>
                    <ul className="wm-seopk__l">
                      <li>12 professionally edited videos / reels per month</li>
                      <li>Sound design, color grading & kinetic subtitles</li>
                      <li>Motion graphic overlays and intro/outro animations</li>
                      <li>Two rounds of revisions per video asset</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--y"
                      onClick={onOpenEnquiry}
                    >
                      Choose Video &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  ">
                    
                    <p className="wm-seopk__nm">Full Creative Studio Suite</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST / month</p>
                    <p className="wm-seopk__per">Fast-Growing Enterprises</p>
                    <span className="wm-seopk__kw">Designer + Video Editor</span>
                    <ul className="wm-seopk__l">
                      <li>Unlimited graphic design requests (1 active at a time)</li>
                      <li>16 cinematic video edits / reels per month</li>
                      <li>3D product mockups & investor pitch deck design</li>
                      <li>Dedicated Creative Director & priority delivery</li>
                    </ul>
                    <button
                      className="wm-seopk__cta wm-seopk__cta--o"
                      onClick={onOpenEnquiry}
                    >
                      Choose Full &rarr;
                    </button>
                  </div>
                  <div className="wm-seopk__c  wm-seopk__c--dark">
                    
                    <p className="wm-seopk__nm">Turnkey Brand Identity Package</p>
                    <div className="wm-seopk__amt">₹35,000</div>
                    <p className="wm-seopk__gst">+ GST (One-time)</p>
                    <p className="wm-seopk__per">New Brands & Rebranding</p>
                    <span className="wm-seopk__kw">Complete Brand System</span>
                    <ul className="wm-seopk__l">
                      <li>3 unique logo design concepts + unlimited revisions</li>
                      <li>Comprehensive 30-page Brand Style Guide</li>
                      <li>Full corporate stationery (Visiting cards, letterheads)</li>
                      <li>Complete vector master files & commercial copyright</li>
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

            {/* Instant Free Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">Diagnostic Engine <i>Free</i></span>
                  <h2>Request a Free Brand Visual & Video Creative Review</h2>
                  <p>
                    Upload your current brand assets or marketing videos to receive an expert critique on visual hierarchy, engagement retention, and brand consistency.
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
                    <span><b>Brand Consistency Diagnostic</b> — Evaluate color palette, typography balance, and logo application across channels</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Video Pacing & Retention Check</b> — Analyze first 3-second hook, audio balance, and subtitle readability</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Ad Creative Conversion Audit</b> — Identify visual barriers dampening click-through rates on paid ad creative</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Creative Style Concept Board</b> — Moodboard with recommended aesthetic enhancements for your next campaign</span>
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

export default VideoGraphicServicesPage;

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
import './VideoEditingServicesPage.css';

const VideoEditingServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "9+ yrs",
    "label": "Of professional post-production mastery"
  },
  {
    "num": "1,500+",
    "label": "Commercial & digital videos edited"
  },
  {
    "num": "100M+",
    "label": "Organic views generated across YouTube & Reels"
  },
  {
    "num": "4K & 8K",
    "label": "Color-calibrated cinema workflow"
  }
];

  const caseStudies = [
  {
    "cat": "D2C Beverage Brand",
    "metric": "12.8M",
    "sub": "Views on Instagram Reels Campaign",
    "name": "WildBerry Sparkling Soda",
    "desc": "Fast-paced kinetic product edits with sound design that drove 42,000 website visits in the first 14 days."
  },
  {
    "cat": "YouTube Tech Creator",
    "metric": "+82%",
    "sub": "Average View Duration (Retention Lift)",
    "name": "TechPulse Studio (850k Subs)",
    "desc": "Redesigned editing format with dynamic B-roll pop-ins and sound design increasing YouTube algorithm impressions by 3.4x."
  },
  {
    "cat": "Luxury Real Estate",
    "metric": "₹48 Cr",
    "sub": "Villas Sold via Cinematic Video Walkthroughs",
    "name": "Palm Residences Goa",
    "desc": "4K drone footage color graded to golden-hour perfection with orchestral audio composition."
  },
  {
    "cat": "Corporate Enterprise",
    "metric": "100%",
    "sub": "Executive Townhall Video Engagement",
    "name": "NexGen Logistics Worldwide",
    "desc": "Turnkey multi-camera CEO keynote edit with lower thirds and localized multi-language subtitles."
  },
  {
    "cat": "EdTech Masterclass",
    "metric": "45+",
    "sub": "Modules Delivered with Zero Retakes",
    "name": "CodeCraft Academy",
    "desc": "Screen recording cleanups, code highlight callouts, and clean studio lighting color correction."
  },
  {
    "cat": "E-Commerce Meta Ad Creative",
    "metric": "5.6x",
    "sub": "ROAS on Performance Ad Creative",
    "name": "UrbanGrip Ergonomics",
    "desc": "Problem-solution hook testing with 8 split-tested variations yielding lowest CPA in company history."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaVideo />,
      title: "YouTube & Long-Form Video",
      desc: "Retention-focused YouTube editing with custom B-roll, hooks, and chapters."
    },
    {
      badge: '02',
      icon: <FaMobileAlt />,
      title: "Viral Reels, Shorts & TikToks",
      desc: "Kinetic captions, sound effects, meme cuts, and trending audio integration."
    },
    {
      badge: '03',
      icon: <FaAward />,
      title: "Commercials & Promo Films",
      desc: "High-end cinema editing for television, digital billboards, and brand commercials."
    },
    {
      badge: '04',
      icon: <FaCogs />,
      title: "Cinematic Color Grading",
      desc: "Precision color balancing, skin tone recovery, and custom film-look LUTs."
    },
    {
      badge: '05',
      icon: <FaLaptopCode />,
      title: "Motion Graphics & Titles",
      desc: "2D/3D kinetic typography, animated logos, lower thirds, and UI callouts."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "Sound Design & Audio Mastering",
      desc: "Pristine dialogue isolation, atmospheric Foley, impacts, and loudness normalization."
    }
  ];

  const industries = [
  "YouTube Creators & Influencers",
  "D2C & E-Commerce Brands",
  "Real Estate & Architecture",
  "Corporate & B2B Enterprises",
  "Fitness, Health & Wellness",
  "Hospitality & Tourism",
  "EdTech & Course Creators",
  "Music Artists & Event Promoters",
  "Advertising & Creative Agencies"
];

  const pricing = [
  {
    "name": "Short-Form Content Pack",
    "amount": "₹28,000",
    "gst": "+ GST / month",
    "per": "Reels, Shorts & TikTok Creators",
    "kw": "12 Viral Vertical Videos / mo",
    "features": [
      "Up to 12 edited vertical Reels/Shorts (up to 60s each)",
      "Kinetic dynamic captions and emojis",
      "Sound design and trending background music",
      "Fast 48-hour turnarounds per video",
      "Up to 2 revision rounds included"
    ]
  },
  {
    "name": "YouTube Growth Studio",
    "badge": "Most Chosen",
    "amount": "₹55,000",
    "gst": "+ GST / month",
    "per": "Consistent YouTube Channels & Brands",
    "kw": "4 Long-Form + 8 Shorts / mo",
    "features": [
      "4 Long-form YouTube videos (up to 15 mins)",
      "8 Cut-down vertical Shorts / Reels",
      "Custom YouTube thumbnail designs included",
      "Multi-camera color grading & sound mastering",
      "Dedicated video editor & project manager"
    ],
    "highlight": true
  },
  {
    "name": "Brand Commercial & Promo",
    "amount": "₹95,000",
    "gst": "+ GST / month",
    "per": "High-Production Corporate & Ad Campaigns",
    "kw": "Broadcast-Grade Production",
    "features": [
      "High-end 4K commercial or corporate brand film",
      "Custom After Effects 3D motion graphics & VFX",
      "Professional voiceover synchronization and mastering",
      "Aspect ratio variations (16:9, 9:16, 1:1, 4:5)",
      "Cinema-grade color grading in DaVinci Resolve"
    ]
  },
  {
    "name": "Enterprise Studio Retainer",
    "amount": "Custom",
    "gst": "Dedicated Team",
    "per": "High-Volume Agencies & Global Brands",
    "kw": "Unlimited Dedicated Video Desk",
    "features": [
      "Dedicated team of full-time editors & animators",
      "High-speed NAS cloud workflow for 8K footage",
      "Same-day priority turnaround capabilities",
      "White-label delivery for creative agencies"
    ],
    "isDark": true
  }
];

  const faqs = [
  {
    "q": "How do I share raw video footage with your team?",
    "a": "We provide dedicated, secure high-speed cloud upload folders (Google Drive Enterprise, Dropbox, or Frame.io). You can simply drag and drop your raw files, B-roll, voiceover, and brand assets."
  },
  {
    "q": "What video editing software does WebMok use?",
    "a": "Our editors work primarily in Adobe Premiere Pro, DaVinci Resolve Studio (for advanced color grading and Fairlight audio), and Adobe After Effects (for complex motion graphics and visual effects)."
  },
  {
    "q": "Can you add subtitles and animated kinetic captions to my videos?",
    "a": "Yes! We create modern kinetic, word-by-word animated captions with custom brand fonts, vibrant highlighted keywords, and integrated emojis similar to top viral creators (Alex Hormozi style, clean minimal, or corporate subtitles)."
  },
  {
    "q": "What is the standard turnaround time for a video edit?",
    "a": "Short-form Reels and Shorts are typically delivered within 24 to 48 hours. Long-form YouTube videos and corporate projects take between 3 to 5 business days for the first cut. Rush same-day delivery is also available upon request."
  }
];

  return (
    <div className="videoeditingservicespage-root wm-sp-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
              <div className="wm-sp-breadcrumb">
                <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Video Editing</span>
              </div>
             
              <h1 className="wm-sp-hero-title">
                High-Impact <span>Video Editing</span> & Post-Production Studio
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
                pageName="Commercial Video Editing"
                source="Video Editing Hero Section"
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
                <span className="wm-dsm-badge">Studio Post-Production</span>
                <h2 className="wm-dsm-stack__title">Engineered for Viral Viewer Retention & Cinema-Grade Polish</h2>
                <p className="wm-dsm-stack__sub">Video content dictates modern digital consumer attention. A poor edit with sluggish pacing, amateur color balance, or muddy audio immediately destroys viewer trust. WebMok operates a dedicated post-production studio utilizing DaVinci Resolve Studio, Adobe Premiere Pro, and After Effects to deliver tight narrative pacing, kinetic captions, cinematic color grading, and broadcast-grade sound design.</p>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Storyboarding, Rough Cut & Narrative Pacing</h3>
                  <span className="wm-dsm-layer__role">Foundation & Structure</span>
                </div>
                <p className="wm-dsm-layer__desc">We dissect your raw footage, isolate the most compelling visual moments, and construct a rhythmic narrative structure built for viewer retention.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Multi-camera footage synchronization and audio dialogue alignment</li>
                  <li>Pacing hooks in the first 3 seconds designed to halt scroll fatigue</li>
                  <li>Jump cut precision and B-roll integration for dynamic energy</li>
                  <li>Seamless multi-angle switching and narrative continuity</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Color Grading, VFX & Motion Graphics</h3>
                  <span className="wm-dsm-layer__role">Execution & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">Elevating your visual aesthetic with custom LUTs, color matching across cameras, kinetic animated typography, and seamless visual effects.</p>
                <ul className="wm-dsm-layer__list">
                  <li>DaVinci Resolve color grading (Log, RAW, Rec.709, HDR workflows)</li>
                  <li>Custom After Effects 2D/3D title cards, lower thirds, and callout graphics</li>
                  <li>Green screen chroma keying, object removal, and cleanups</li>
                  <li>Trendy kinetic typography and animated emojis for Reels and Shorts</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Sound Design, Mastering & Multi-Format Delivery</h3>
                  <span className="wm-dsm-layer__role">Optimization & Performance</span>
                </div>
                <p className="wm-dsm-layer__desc">Immersive sound design that makes videos feel cinematic, balanced, and compliant with broadcast and social media audio loudness standards.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Dialogue denoising, vocal clarity EQ, and multiband compression</li>
                  <li>Curated royalty-free cinematic music licensing matching brand tone</li>
                  <li>SFX sound design (whooshes, risers, impacts, foley layers)</li>
                  <li>Export presets optimized for YouTube, Instagram, TikTok, and broadcast</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Video Editing & Production', plan.name)}>
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
                        onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Video Editing & Production', plan.name)}
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
                        onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Video Editing & Production', plan.name)}
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
                <DiagnosticLeadForm serviceName="Video Editing" />
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
                  onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('Video Editing & Production', plan.name)}
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

export default VideoEditingServicesPage;

import React, { useState } from 'react';
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
import './PromotionalVideoServicesPage.css';

const PromotionalVideoServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "Commercial directing & video production"
  },
  {
    "num": "450+",
    "label": "High-impact promo videos delivered"
  },
  {
    "num": "65M+",
    "label": "Paid ad impressions driven via promo videos"
  },
  {
    "num": "4K Cinema",
    "label": "Broadcast-grade cinematic production"
  }
];

  const caseStudies = [
  {
    "cat": "Electric Mobility (EV)",
    "metric": "18,400+",
    "sub": "Pre-Orders Booked in 48 Hours",
    "name": "VoltSpeed Electric Scooters",
    "desc": "High-octane launch promo video combining drone speed runs, macro battery close-ups, and kinetic typography."
  },
  {
    "cat": "Luxury Watchmaking",
    "metric": "4.2M",
    "sub": "Organic Video Views on Instagram",
    "name": "Chronos Heritage Horology",
    "desc": "Cinematic macro video showcasing micro-mechanics, sapphire crystal reflections, and master craftsmanship."
  },
  {
    "cat": "B2B Enterprise SaaS",
    "metric": "280%",
    "sub": "Lift in Enterprise Demo Bookings",
    "name": "OmniCore Cloud ERP",
    "desc": "Futuristic 3D animated explainer promo illustrating complex global data workflows in simple, striking visual metaphors."
  },
  {
    "cat": "Beverage Brand Launch",
    "metric": "₹3.8 Cr",
    "sub": "First-Quarter Retail Sell-Through",
    "name": "Zest Botanical Energy",
    "desc": "Vibrant high-speed liquid cinematography and energetic sound design deployed across Meta Ads and cinema screens."
  },
  {
    "cat": "Residential Real Estate",
    "metric": "100%",
    "sub": "Tower Phase-1 Sold Out in 3 Weeks",
    "name": "Sobha Marina Residences",
    "desc": "Lifestyle brand film capturing panoramic sea views, architecture, and luxury amenities."
  },
  {
    "cat": "Fitness Tech Wearable",
    "metric": "6.8x",
    "sub": "ROAS on TikTok & Reels Ads",
    "name": "PulseGrip Smart Ring",
    "desc": "Punchy 30-second problem-solution hook video showcasing sleep tracking and biometric sensors in daily life."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaVideo />,
      title: "Product Launch Promos",
      desc: "Macro product lighting, 3D feature explodes, and cinematic reveals."
    },
    {
      badge: '02',
      icon: <FaBullhorn />,
      title: "Commercials & TV Ads",
      desc: "Full broadcast-quality commercial production for TV and digital platforms."
    },
    {
      badge: '03',
      icon: <FaRocket />,
      title: "Corporate Brand Manifestos",
      desc: "Inspiring documentary-style films capturing company mission and culture."
    },
    {
      badge: '04',
      icon: <FaLaptopCode />,
      title: "Animated Explainer Promos",
      desc: "2D/3D motion graphic promos breaking down complex SaaS or services."
    },
    {
      badge: '05',
      icon: <FaMobileAlt />,
      title: "Social Paid Ad Promos",
      desc: "High-energy 15s/30s promos engineered for maximum CTR on Instagram & YouTube."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "Event Trailers & Showreels",
      desc: "High-impact conference teasers, awards recaps, and company sizzle reels."
    }
  ];

  const industries = [
  "Consumer Electronics & Hardware",
  "Automotive & EV Mobility",
  "Real Estate Developers",
  "Fashion, Luxury & Jewelry",
  "Food, Beverage & FMCG",
  "FinTech & Enterprise Software",
  "Healthcare & Medical Devices",
  "Sports & Fitness Equipment",
  "Media, Gaming & Entertainment"
];

  const pricing = [
  {
    "name": "Promo Kickstarter",
    "amount": "₹35,000",
    "gst": "+ GST / video",
    "per": "Startups & Emerging Products",
    "kw": "Single High-Impact Promo",
    "features": [
      "Up to 60-second edited promotional video",
      "Professional scriptwriting and creative storyboard",
      "Curated 4K commercial stock footage + client assets",
      "Licensed dynamic background music and sound effects",
      "Full HD (1080p) export in 16:9 and 9:16 vertical format"
    ]
  },
  {
    "name": "High-Impact Commercial",
    "badge": "Most Chosen",
    "amount": "₹68,000",
    "gst": "+ GST / video",
    "per": "Mid-Market Brands & Product Launches",
    "kw": "4K Cinema Polish & Voiceover",
    "features": [
      "Up to 90-second premium commercial video",
      "Professional native human voiceover (US/UK/Indian accents)",
      "Custom 2D/3D animated motion graphics & title cards",
      "Cinema-grade color grading and sound design mastering",
      "3 cut-down versions (15s, 30s, 60s) for ad split-testing",
      "Full 4K UHD delivery in all social aspect ratios"
    ],
    "highlight": true
  },
  {
    "name": "Enterprise Multi-Cut Campaign",
    "amount": "₹1,25,000",
    "gst": "+ GST / campaign",
    "per": "Flagship Launches & Global Campaigns",
    "kw": "Complete 360° Ad Campaign Suite",
    "features": [
      "Full brand commercial + 5 dedicated ad cut-downs",
      "Custom 3D product modeling and photorealistic animations",
      "Multi-language subtitle and voiceover localization",
      "Dedicated Creative Director and priority 5-day turnaround",
      "Broadcast-ready ProRes 422 master deliverables"
    ]
  },
  {
    "name": "Custom Live Production",
    "amount": "Custom",
    "gst": "Tailored Production",
    "per": "On-Location Camera Crew Shoots",
    "kw": "Full On-Set Cinema Production",
    "features": [
      "Full on-location cinema crew (Director, DP, Gaffer, Sound)",
      "High-end cinema camera packages (RED / ARRI / Sony FX9)",
      "Actors, location rentals, studio sets, and wardrobe styling",
      "Aerial cinema drone videography"
    ],
    "isDark": true
  }
];

  const faqs = [
  {
    "q": "Can you create a promo video if we don’t have our own footage?",
    "a": "Yes! Over 60% of our commercial promo videos are crafted using our multi-million dollar library of licensed 4K cinema footage, combined with your product photos, logos, custom 3D motion graphics, and professional voiceover."
  },
  {
    "q": "Do you provide professional voiceover artists for promo videos?",
    "a": "Yes. We partner with over 150 professional voiceover artists across multiple languages, accents (American, British, Australian, neutral Indian, Hindi, etc.), and tones (corporate, high-energy, cinematic, conversational)."
  },
  {
    "q": "What aspect ratios will we receive for paid ad campaigns?",
    "a": "We deliver all commercial assets in 16:9 (YouTube, website hero, TV), 9:16 (Instagram Reels, TikTok, YouTube Shorts), 1:1 square (Instagram feed), and 4:5 (Facebook/Instagram mobile feed)."
  },
  {
    "q": "How long does the entire production process take?",
    "a": "Asset-based and stock-commercial promo videos are delivered within 4 to 7 business days. On-location shoot productions typically take 2 to 3 weeks including pre-production, filming, and post-production color grading."
  }
];

  return (
    <div className="promotionalvideoservicespage-root wm-sp-root">
      {/* 1. HERO SECTION WITH COMMON LEAD FORM */}
      <HeroLeadForm
        badge="Commercial Video Studio"
        title="High-Impact Promotional Video Production & Commercial Editing"
        subtitle="Drive commercial sales, build brand prestige, and captivate your audience with cinematic promotional videos. From high-converting product showcases and TVCs to event showreels and brand manifestos."
        stats={stats}
      />

      {/* 2. THREE-COLUMN ARCHITECTURE / STRATEGY */}
      <div className="wm-sp-body">
        <div className="wm-sp-container">
          <div className="wm-sp-main-col">
            
            {/* Overview & Execution Stack */}
            <section className="wm-dsm-stack">
              <div className="wm-dsm-stack__head">
                <span className="wm-dsm-badge">Commercial Video Studio</span>
                <h2 className="wm-dsm-stack__title">Engineered to Convert Cold Viewers into Paying Customers</h2>
                <p className="wm-dsm-stack__sub">A high-impact promotional video does what static images and text never can: it creates an emotional bond in seconds. Whether launching a groundbreaking physical product, introducing a disruptive software platform, or producing a brand manifesto, WebMok combines Hollywood-caliber cinematography, punchy commercial scriptwriting, dynamic motion graphics, and sound design to create promos that drive measurable ROI.</p>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Scriptwriting, Visual Storyboarding & Concept Design</h3>
                  <span className="wm-dsm-layer__role">Foundation & Structure</span>
                </div>
                <p className="wm-dsm-layer__desc">We craft compelling narrative hooks and visual storyboards designed to keep viewers engaged from the first second through the final call-to-action.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Psychological hook development tailored to your target audience</li>
                  <li>Comprehensive scene-by-scene storyboard visualization</li>
                  <li>Professional scriptwriting with conversational, high-converting copy</li>
                  <li>Talent scouting, voiceover auditioning, and location scouting</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">4K Cinematography, Studio Lighting & Asset Assembly</h3>
                  <span className="wm-dsm-layer__role">Execution & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">Capturing razor-sharp footage with cinema cameras, gimbal movements, and calibrated lighting, or combining premium licensed footage with product 3D assets.</p>
                <ul className="wm-dsm-layer__list">
                  <li>4K/6K cinema camera filming (Sony FX / RED / ARRI workflows)</li>
                  <li>High-speed macro product cinematography and slow-motion capture</li>
                  <li>Curated 4K licensed commercial footage and 3D device integration</li>
                  <li>Professional multi-point studio lighting and sound recording</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">High-Energy Post-Production, VFX & CTA Optimization</h3>
                  <span className="wm-dsm-layer__role">Optimization & Performance</span>
                </div>
                <p className="wm-dsm-layer__desc">Polishing footage with kinetic editing, custom 3D product animations, cinematic sound design, and conversion-focused call-to-action cards.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Pacing synchronized to custom-composed dynamic background score</li>
                  <li>Custom 3D product explodes, feature callouts, and animated UI overlays</li>
                  <li>Hollywood sound design (cinematic drops, swooshes, sub-bass impacts)</li>
                  <li>Multi-aspect ratio exports (16:9 for YouTube/TV, 9:16 for Reels, 1:1 for Meta)</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={() => onOpenEnquiry && onOpenEnquiry('Promotional Video Production & Editing Services Company - Scope Consultation')}>
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
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`Promotional Video Production & Editing Services Company - ${plan.name} Plan`)}
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
                <div className="wm-rsau__form">
                  <div className="wm-rsau__box">
                    <input
                      type="text"
                      className="wm-rsau__inp"
                      placeholder="https://yourbrand.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                    />
                    <button
                      className="wm-rsau__btn"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(`Audit Request for: ${auditUrl || 'Company Website'}`)}
                    >
                      Analyze Now &rarr;
                    </button>
                  </div>
                  <span className="wm-rsau__sub">
                    100% Free · No Credit Card Required · Strictly Confidential
                  </span>
                </div>
              </div>
            </div>

            {/* 7. Comprehensive FAQ Section */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Frequently Asked Questions</h2>
              <p className="wm-sp-paragraph">
                Essential details regarding execution deliverables, timelines, and commercial models:
              </p>
              <div className="wm-faq-accordion-list">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`wm-faq-item ${openFaq === idx ? 'wm-faq-item--active' : ''}`}
                  >
                    <button
                      type="button"
                      className="wm-faq-btn"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <FaChevronDown className="wm-faq-chevron" />
                    </button>
                    {openFaq === idx && (
                      <div className="wm-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
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
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Promotional Video Production & Editing Services Company - Proposal Request')}
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

export default PromotionalVideoServicesPage;

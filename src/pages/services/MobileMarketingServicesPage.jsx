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
import './MobileMarketingServicesPage.css';

const MobileMarketingServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "8+ yrs",
    "label": "In mobile app growth & user acquisition"
  },
  {
    "num": "50M+",
    "label": "App downloads driven across iOS & Play Store"
  },
  {
    "num": "4.8×",
    "label": "Average documented return on mobile ad spend"
  },
  {
    "num": "100%",
    "label": "Attribution tracked via AppsFlyer & Adjust"
  }
];

  const caseStudies = [
  {
    "cat": "FinTech & Neobanking",
    "metric": "2.4M+",
    "sub": "Verified KYC Installs · ₹18 CPI",
    "name": "PaySwift Digital Wallet",
    "desc": "ASO keyword restructuring combined with localized Google UAC campaigns reducing customer acquisition cost by 62%."
  },
  {
    "cat": "Quick Commerce Grocery",
    "metric": "850,000",
    "sub": "First-Time App Orders in 90 Days",
    "name": "FreshSprint Hyperlocal",
    "desc": "Hyper-targeted radius Meta App Ads and localized Apple Search Ads capturing urban grocery shoppers during peak morning hours."
  },
  {
    "cat": "HealthTech & Telemedicine",
    "metric": "+320%",
    "sub": "Doctor Consultation Bookings",
    "name": "PulseHealth Telecare",
    "desc": "Omnichannel mobile funnel with custom deferred deep links and automated WhatsApp reminder triggers."
  },
  {
    "cat": "EdTech & Test Preparation",
    "metric": "1.1M",
    "sub": "Organic App Store Page Views",
    "name": "AceMock Exam Prep",
    "desc": "Top 3 rankings for 48 high-volume competitive exam keywords across Google Play Store India."
  },
  {
    "cat": "D2C Fashion E-Commerce",
    "metric": "6.4x",
    "sub": "ROAS on Apple Search Ads",
    "name": "VogueThreads App",
    "desc": "Targeted brand defense and category conquesting campaigns driving high-basket-value iOS repeat shoppers."
  },
  {
    "cat": "Fitness & Wellness",
    "metric": "44.8%",
    "sub": "Day-30 User Retention Lift",
    "name": "ZenFit Home Workouts",
    "desc": "Gamified push notification sequences and automated in-app milestone rewards preventing drop-offs."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaMobileAlt />,
      title: "App Store Optimization (ASO)",
      desc: "Organic ranking architecture, localized metadata, and screenshot A/B testing."
    },
    {
      badge: '02',
      icon: <FaSearch />,
      title: "Apple Search Ads (ASA)",
      desc: "High-intent search keyword bidding, competitor conquesting, and brand defense."
    },
    {
      badge: '03',
      icon: <FaBullhorn />,
      title: "Google App Campaigns (UAC)",
      desc: "Algorithmic machine-learning install campaigns across Search, YouTube, and Play."
    },
    {
      badge: '04',
      icon: <FaRocket />,
      title: "Push & Lifecycle Automation",
      desc: "Segmented push notifications, in-app messaging, and automated re-engagement."
    },
    {
      badge: '05',
      icon: <FaChartLine />,
      title: "Mobile Attribution & Analytics",
      desc: "Certified setup for AppsFlyer, Adjust, Branch, Singular, and Firebase."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "In-App Conversion Rate Optimization (CRO)",
      desc: "Onboarding funnel auditing, paywall design, and frictionless checkout optimization."
    }
  ];

  const industries = [
  "FinTech & Neobanks",
  "Quick Commerce & Grocery",
  "HealthTech & Fitness",
  "EdTech & Learning",
  "Travel & Ride-Hailing",
  "Gaming & Entertainment",
  "Real Estate Portals",
  "D2C Mobile Brands",
  "Social & Community Apps"
];

  const pricing = [
  {
    "name": "Starter App Visibility",
    "amount": "₹35,000",
    "gst": "+ GST / month",
    "per": "Emerging & Single-Platform Apps",
    "kw": "Full Store Listing Optimization",
    "features": [
      "Full Google Play or iOS App Store audit",
      "Keyword research for 30 high-intent app keywords",
      "Optimized App Title, Subtitle, and Description",
      "Designed screenshot set (up to 5 screens)",
      "Monthly ranking and keyword movement report"
    ]
  },
  {
    "name": "Scale User Acquisition",
    "badge": "Most Chosen",
    "amount": "₹65,000",
    "gst": "+ GST / month",
    "per": "Dual-Platform Growth Stage Apps",
    "kw": "ASO + Paid Ad Management",
    "features": [
      "Complete ASO for both iOS App Store and Google Play",
      "Apple Search Ads (ASA) & Google UAC management",
      "Designed screenshot sets + promo video script",
      "Custom push notification onboarding sequence setup",
      "Bi-weekly attribution & CPI optimization sprints"
    ],
    "highlight": true
  },
  {
    "name": "Enterprise Mobile Growth",
    "amount": "₹1,20,000",
    "gst": "+ GST / month",
    "per": "High-Volume Enterprise & Funded Apps",
    "kw": "Omnichannel Scale & Retention",
    "features": [
      "Full-funnel organic ASO + ASA + Google UAC + Meta",
      "Deep-linking and custom attribution architecture",
      "Automated lifecycle push, SMS, and WhatsApp funnels",
      "Continuous creative refreshes (reels, video ads, screenshots)",
      "Dedicated Mobile Growth Director & weekly strategy calls"
    ]
  },
  {
    "name": "Custom Mobile Retainer",
    "amount": "Custom",
    "gst": "Tailored Scope",
    "per": "Global & Multi-Region Applications",
    "kw": "Enterprise Multi-Country Scale",
    "features": [
      "Multi-country app store localization (10+ languages)",
      "Dedicated performance creative production studio",
      "Custom cohort analysis & predictive LTV modeling",
      "24/7 attribution monitoring & SLA support"
    ],
    "isDark": true
  }
];

  const faqs = [
  {
    "q": "What is the difference between ASO and paid mobile app marketing?",
    "a": "App Store Optimization (ASO) is the mobile equivalent of SEO. It optimizes your app listing metadata, keywords, visuals, and ratings to drive free organic downloads from Apple App Store and Google Play search results. Paid mobile marketing uses Apple Search Ads (ASA), Google Universal App Campaigns (UAC), and Meta ads to buy installs at a predictable Cost Per Install (CPI). At WebMok, we integrate both for compound growth."
  },
  {
    "q": "How quickly can we see improvements in app store rankings?",
    "a": "ASO metadata updates (title, subtitle, keywords) typically index within 7–14 days. Conversion rate lifts from improved screenshots and icons take effect immediately upon approval. Noticeable organic download growth typically accelerates within 4 to 8 weeks as algorithmic velocity signals compound."
  },
  {
    "q": "Which mobile measurement partners (MMPs) do you support?",
    "a": "We have certified integration specialists for all major Mobile Measurement Partners including AppsFlyer, Adjust, Branch Metrics, Singular, and Google Firebase. We set up raw event postbacks, SKAdNetwork measurement for iOS 14.5+, and deep link routing."
  },
  {
    "q": "Do you design the app screenshots and video previews?",
    "a": "Yes! Our in-house creative design team creates high-converting, rendered 3D device mockups, localized typography banners, and engaging app preview videos strictly following Apple and Google App Store design specifications."
  }
];

  return (
    <div className="mobilemarketingservicespage-root wm-sp-root">
      {/* 1. HERO SECTION WITH COMMON LEAD FORM */}
      <HeroLeadForm
        badge="App Growth & Mobile Acquisition"
        title="High-Converting Mobile App Marketing & Growth Agency in India"
        subtitle="Scale app downloads, reduce Cost Per Install (CPI), and accelerate active daily user retention with data-driven App Store Optimization (ASO), Apple Search Ads, and Google Universal App Campaigns."
        stats={stats}
      />

      {/* 2. THREE-COLUMN ARCHITECTURE / STRATEGY */}
      <div className="wm-sp-body">
        <div className="wm-sp-container">
          <div className="wm-sp-main-col">
            
            {/* Overview & Execution Stack */}
            <section className="wm-dsm-stack">
              <div className="wm-dsm-stack__head">
                <span className="wm-dsm-badge">App Growth & Mobile Acquisition</span>
                <h2 className="wm-dsm-stack__title">Engineered for Organic App Store Dominance & Low-Cost Installs</h2>
                <p className="wm-dsm-stack__sub">With over 5 million apps competing across Apple App Store and Google Play Store, discovery requires more than generic advertising. WebMok builds data-backed mobile marketing funnels integrating algorithmic App Store Optimization (ASO), paid Apple Search Ads (ASA), Google App Campaigns (UAC), and automated in-app push notification retention workflows.</p>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">App Store Optimization (ASO) Architecture</h3>
                  <span className="wm-dsm-layer__role">Foundation & Structure</span>
                </div>
                <p className="wm-dsm-layer__desc">Maximizing organic visibility on Google Play and Apple App Store through continuous keyword indexation, visual conversion assets, and localization.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Keyword discovery targeting high-intent commercial app searches</li>
                  <li>High-CTR app icon design, screenshots, and preview video optimization</li>
                  <li>App title, subtitle, and long description algorithmic keyword indexing</li>
                  <li>Continuous A/B testing of store listings using Google Play Experiments</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Paid User Acquisition & ASA / UAC Campaigns</h3>
                  <span className="wm-dsm-layer__role">Execution & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">Running hyper-targeted performance ad campaigns across Apple Search Ads, Google App Campaigns, and Meta Mobile App Install ads.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Apple Search Ads (ASA) keyword bidding & competitor conquesting</li>
                  <li>Google Universal App Campaigns (UAC) targeting in-app purchases (tCPA)</li>
                  <li>Meta & TikTok Mobile App Install campaigns with dynamic creative testing</li>
                  <li>Deep linking and deferred deep linking setup for frictionless onboarding</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">In-App Retention, Push Automation & LTV Growth</h3>
                  <span className="wm-dsm-layer__role">Optimization & Performance</span>
                </div>
                <p className="wm-dsm-layer__desc">Turning one-time installers into loyal power users and paying customers through personalized lifecycle marketing and push notifications.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Automated push notification funnels for Day-1, Day-7, and Day-30 retention</li>
                  <li>In-app messaging and user onboarding walkthrough optimization</li>
                  <li>Mobile attribution instrumentation (AppsFlyer, Adjust, Branch, Firebase)</li>
                  <li>Churn prediction modeling and win-back promotional campaigns</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Marketing Services Company - Scope Consultation')}>
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
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`Mobile Marketing Services Company - ${plan.name} Plan`)}
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
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Mobile Marketing Services Company - Proposal Request')}
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

export default MobileMarketingServicesPage;

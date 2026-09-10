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
import './SocialMediaOptimizationPage.css';

const SocialMediaOptimizationPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
  {
    "num": "10+ yrs",
    "label": "In organic social media optimization & branding"
  },
  {
    "num": "500+",
    "label": "Corporate & personal profiles optimized"
  },
  {
    "num": "380%",
    "label": "Average organic profile impression lift"
  },
  {
    "num": "100%",
    "label": "White-hat algorithmic growth strategies"
  }
];

  const caseStudies = [
  {
    "cat": "Corporate Law Firm",
    "metric": "+480%",
    "sub": "LinkedIn Executive Profile Inquiries",
    "name": "Veritas Chambers LLP",
    "desc": "Complete overhaul of partner profiles, banner designs, and thought-leadership document carousels."
  },
  {
    "cat": "Cosmetic Dermatology Clinic",
    "metric": "14,200",
    "sub": "Organic Profile Visits per Month",
    "name": "DermaGlow Institute",
    "desc": "ASO and SMO bio optimization with direct WhatsApp booking button increasing appointment requests by 190%."
  },
  {
    "cat": "Luxury Architectural Studio",
    "metric": "32,000+",
    "sub": "Content Saves & Bookmarks",
    "name": "Arcon Design Collective",
    "desc": "Aesthetic grid restructuring and high-intent architectural hashtag taxonomies across Instagram and Pinterest."
  },
  {
    "cat": "B2B SaaS Automation",
    "metric": "65,000",
    "sub": "Monthly Organic Impressions",
    "name": "SyncFlow Solutions",
    "desc": "Founder personal branding optimization with automated newsletter signup hooks in bio."
  },
  {
    "cat": "Hospitality Resort & Spa",
    "metric": "3.2x",
    "sub": "Organic Direct Booking Inquiries",
    "name": "The Tamarind Valley Coorg",
    "desc": "Location tag optimization, verified Google/Meta assets integration, and seasonal highlight storytelling."
  },
  {
    "cat": "Organic Skincare Brand",
    "metric": "+260%",
    "sub": "Instagram Search Discovery Impressions",
    "name": "NaturaPure Botanicals",
    "desc": "Alt-text indexing, keyword-rich bio copy, and clean ingredient carousel pillars."
  }
];

  const disciplines = [
    {
      badge: '01',
      icon: <FaUsers />,
      title: "Profile SEO & Bio CRO",
      desc: "Keyword indexing in names, bio hook formulation, and trackable link trees."
    },
    {
      badge: '02',
      icon: <FaSearch />,
      title: "Hashtag Taxonomy Engineering",
      desc: "Tiered hashtag sets categorized by volume, competition, and relevancy."
    },
    {
      badge: '03',
      icon: <FaGlobe />,
      title: "Cross-Channel Synchronization",
      desc: "Cohesive brand presence across Instagram, LinkedIn, YouTube, and Facebook."
    },
    {
      badge: '04',
      icon: <FaRocket />,
      title: "Visual Feed Aesthetic Curation",
      desc: "Grid layout strategy, story highlight icons, and professional banner design."
    },
    {
      badge: '05',
      icon: <FaChartLine />,
      title: "Algorithmic Engagement Strategy",
      desc: "Save-to-share optimization formulas maximizing organic platform reach."
    },
    {
      badge: '06',
      icon: <FaTools />,
      title: "Social Listening & Reputation Audit",
      desc: "Brand mention tracking, review response strategies, and trust signal building."
    }
  ];

  const industries = [
  "B2B Corporate & Consulting",
  "Doctors, Dentists & Clinics",
  "Lawyers & Legal Advisory",
  "Real Estate & Interior Design",
  "Luxury Lifestyle & Fashion",
  "Hotels, Resorts & Restaurants",
  "Coaches & Digital Creators",
  "FinTech & Wealth Advisory",
  "E-Commerce Brands"
];

  const pricing = [
  {
    "name": "Essential SMO Setup",
    "amount": "₹20,000",
    "gst": "+ GST / one-time",
    "per": "Single Brand or Executive Profile",
    "kw": "Complete Profile Overhaul",
    "features": [
      "Full audit of existing profiles (up to 2 platforms)",
      "Keyword-optimized bio, username, and title revamp",
      "Custom designed banner + 5 highlight covers",
      "10 custom-researched hashtag clusters",
      "Actionable organic posting recommendations roadmap"
    ]
  },
  {
    "name": "Growth SMO Retainer",
    "badge": "Most Chosen",
    "amount": "₹38,000",
    "gst": "+ GST / month",
    "per": "Active Brands Seeking Compound Reach",
    "kw": "Monthly Optimization & Growth",
    "features": [
      "Management & optimization across 3 platforms",
      "Continuous hashtag testing & metadata optimization",
      "Monthly story highlight refreshes & banner updates",
      "Alt-text tagging and search engine indexation",
      "Monthly organic health & profile visitor report"
    ],
    "highlight": true
  },
  {
    "name": "Enterprise Omnichannel SMO",
    "amount": "₹65,000",
    "gst": "+ GST / month",
    "per": "Corporate Brands & Multi-Location Firms",
    "kw": "Omnichannel Reputation & Reach",
    "features": [
      "Complete optimization for 5 social channels",
      "Executive personal branding for up to 3 founders",
      "Proactive community management & relationship building",
      "Competitor reverse-engineering and keyword tracking",
      "Dedicated Social Media Strategist & weekly updates"
    ]
  },
  {
    "name": "Custom Corporate SMO",
    "amount": "Custom",
    "gst": "Enterprise Scope",
    "per": "Conglomerates & Global Multi-Brands",
    "kw": "Bespoke Brand Defense & Authority",
    "features": [
      "Enterprise brand asset protection & verification assistance",
      "Global multi-language social asset optimization",
      "Custom API social listening integration",
      "Executive crisis management and reputation defense"
    ],
    "isDark": true
  }
];

  const faqs = [
  {
    "q": "What is the main difference between SMO and SMM?",
    "a": "Social Media Optimization (SMO) focuses on improving the structure, metadata, search discoverability, and organic aesthetic of your social channels (similar to technical SEO for your website). Social Media Marketing (SMM), on the other hand, involves active daily content publishing and paid ad campaigns. Great SMO ensures that when your marketing attracts visitors, your profile looks world-class and converts them."
  },
  {
    "q": "Can Social Media Optimization help my Google search rankings?",
    "a": "Yes! Google frequently indexes social profiles (especially LinkedIn company pages, YouTube channels, and verified Instagram accounts) on the first page of search results for brand name queries. Optimized profiles protect your brand narrative and push negative search results off Page 1."
  },
  {
    "q": "How do you determine the best hashtags for our industry?",
    "a": "We use proprietary software to analyze hashtag search velocity, post competition density, and related semantic clusters. We build low-competition, medium-volume, and high-authority tiers so your posts rank in recent and top discovery tabs without getting buried."
  },
  {
    "q": "Do you optimize personal profiles for founders and executives?",
    "a": "Yes! Founder and CEO personal branding is one of our key specialties. We optimize LinkedIn personal profiles, Twitter/X accounts, and Instagram pages to position leaders as verified industry authorities."
  }
];

  return (
    <div className="socialmediaoptimizationpage-root wm-sp-root">
      {/* 1. HERO SECTION WITH COMMON LEAD FORM */}
      <HeroLeadForm
        badge="Organic Social Architecture"
        title="Data-Driven Social Media Optimization (SMO) Agency in India"
        subtitle="Transform social profiles into high-trust brand assets. We optimize your profiles, hashtag taxonomies, bio conversion funnels, and organic engagement algorithms across Instagram, LinkedIn, Facebook, and YouTube."
        stats={stats}
      />

      {/* 2. THREE-COLUMN ARCHITECTURE / STRATEGY */}
      <div className="wm-sp-body">
        <div className="wm-sp-container">
          <div className="wm-sp-main-col">
            
            {/* Overview & Execution Stack */}
            <section className="wm-dsm-stack">
              <div className="wm-dsm-stack__head">
                <span className="wm-dsm-badge">Organic Social Architecture</span>
                <h2 className="wm-dsm-stack__title">Engineered to Maximize Organic Discovery & Profile Conversion</h2>
                <p className="wm-dsm-stack__sub">Paid ads only work as long as you spend money. Social Media Optimization (SMO) builds permanent, compounding organic authority. When potential clients search for your services on Instagram, LinkedIn, or Google, your optimized social profiles should dominate the results, convey immediate credibility, and effortlessly convert casual visitors into qualified inquiries.</p>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Profile Architecture, Bio CRO & Visual Consistency</h3>
                  <span className="wm-dsm-layer__role">Foundation & Structure</span>
                </div>
                <p className="wm-dsm-layer__desc">Aligning your usernames, display names, bios, call-to-action buttons, and highlight covers for immediate authority and clear search indexing.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Keyword-optimized usernames and profile titles for social search SEO</li>
                  <li>Compelling value-proposition bios with trackable conversion links</li>
                  <li>Custom branded highlight covers, banners, and pinned post curation</li>
                  <li>Verification badge guidance and brand trust signal integration</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Content Categorization, Hashtags & Semantic Tags</h3>
                  <span className="wm-dsm-layer__role">Execution & Scale</span>
                </div>
                <p className="wm-dsm-layer__desc">Structuring content pillars, high-yield hashtag clusters, and metadata tags so platform algorithms recommend your posts to relevant audiences.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Proprietary hashtag clustering avoiding banned and oversaturated tags</li>
                  <li>Topic tagging and Alt-text image descriptions for visual search discovery</li>
                  <li>Optimal posting schedule calibration based on active audience analytics</li>
                  <li>Carousel content structure engineered for high bookmark and share ratios</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Community Engagement Loops & Cross-Channel Synergy</h3>
                  <span className="wm-dsm-layer__role">Optimization & Performance</span>
                </div>
                <p className="wm-dsm-layer__desc">Establishing active relationship loops with industry peers, influencers, and prospects to signal authentic algorithmic vitality.</p>
                <ul className="wm-dsm-layer__list">
                  <li>Strategic comment engagement on top industry accounts and creators</li>
                  <li>Cross-linking social assets with your website, blog, and email signature</li>
                  <li>Interactive community story polls, Q&As, and engagement prompts</li>
                  <li>Monthly social health scorecards measuring organic reach, saves, and shares</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure tangible business milestones and conversion lift.</strong> Review weekly sprint progress with your dedicated technical solution architect.
                </p>
                <button type="button" onClick={() => onOpenEnquiry && onOpenEnquiry('Social Media Optimization (SMO) Services Company - Scope Consultation')}>
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
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`Social Media Optimization (SMO) Services Company - ${plan.name} Plan`)}
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
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Social Media Optimization (SMO) Services Company - Proposal Request')}
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

export default SocialMediaOptimizationPage;

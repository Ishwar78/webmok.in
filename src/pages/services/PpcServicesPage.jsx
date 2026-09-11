import React, { useState } from 'react';
import DiagnosticLeadForm from '../../components/DiagnosticLeadForm';
import HeroLeadForm from '../../components/HeroLeadForm';
import {
  Link } from 'react-router-dom';
import {
  FaSearchDollar,
  FaImage,
  FaShareAlt,
  FaShoppingBag,
  FaSyncAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaCertificate,
  FaChevronDown,
  FaRocket,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import './PpcServicesPage.css';

const PpcServicesPage = ({ onOpenCallMe, onOpenEnquiry, onOpenServiceInquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [auditUrl, setAuditUrl] = useState('');

  const stats = [
    { num: '10+ yrs', label: 'Of certified Google & Meta ad management' },
    { num: '₹15 Cr+', label: 'Profitable ad spend managed across verticals' },
    { num: '4.2×', label: 'Average documented Return on Ad Spend (ROAS)' },
    { num: '100%', label: 'Transparent client dashboard & server-side tracking' }
  ];

  const caseStudies = [
    {
      cat: 'B2B · Industrial',
      metric: '+380%',
      sub: 'ROAS improvement · ₹12.4L new pipeline',
      name: 'SKF Industrial Solutions',
      desc: 'Precision Google Search ad campaign restructuring that eliminated 48% wasted negative spend while doubling qualified B2B RFQs.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Real Estate · NCR',
      metric: '-42%',
      sub: 'Cost-per-Lead reduction · 1,240 site visits',
      name: 'Omaxe Real Estate',
      desc: 'Hyper-targeted geo-fenced Meta & Google Ads campaigns driving high-intent luxury apartment buyers and overseas NRI investors.',
      link: '/clients/case-studies'
    },
    {
      cat: 'E-Commerce & Retail',
      metric: '8.5×',
      sub: 'Google Shopping ROAS · 18,200 orders',
      name: 'Farmer Fresh Brands',
      desc: 'Performance Max and dynamic product listing ads scaling e-commerce transactions across tier-1 and tier-2 Indian cities.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Home Decor & Coating',
      metric: '+210%',
      sub: 'inbound contractor inquiries · 5.2× ROAS',
      name: 'Sirca Paints Italy',
      desc: 'Multi-channel YouTube video and search advertising capturing architectural specifiers and premium homeowners.',
      link: '/clients/case-studies'
    },
    {
      cat: 'International · UAE',
      metric: '+315%',
      sub: 'qualified WhatsApp leads · Dubai market',
      name: 'RadiantBiz Dubai',
      desc: 'Ultra-competitive commercial Google search ads optimized with automated 28-second callback lead funnels.',
      link: '/clients/case-studies'
    },
    {
      cat: 'Healthcare & Clinics',
      metric: '+190%',
      sub: 'verified doctor appointments booked',
      name: "Dr. Haror's Clinic",
      desc: 'Location-based Google Search ads and Instagram reels lead generation with zero spam form fills.',
      link: '/clients/case-studies'
    }
  ];

  const ppcDisciplines = [
    {
      badge: '01',
      icon: <FaSearchDollar />,
      title: 'Google Search & AdWords Ads',
      desc: 'Capture users at the exact moment of high buying intent. We build granular single-keyword ad groups with negative keyword sculpting for lowest cost-per-click.'
    },
    {
      badge: '02',
      icon: <FaRocket />,
      title: 'Google Performance Max (PMax)',
      desc: 'Automated AI-driven multi-channel campaigns running across Search, YouTube, Maps, Gmail, and Discover to unlock incremental revenue.'
    },
    {
      badge: '03',
      icon: <FaShareAlt />,
      title: 'Meta & Instagram Paid Advertising',
      desc: 'Target laser-focused demographic, interest, and lookalike audiences with thumb-stopping video reels, carousel ads, and instant lead forms.'
    },
    {
      badge: '04',
      icon: <FaShoppingBag />,
      title: 'Google Shopping & Merchant Center',
      desc: 'Optimized eCommerce product feeds, bidding matrices, and merchant promotions designed to maximize cart value and product visibility.'
    },
    {
      badge: '05',
      icon: <FaImage />,
      title: 'Google Display Network & YouTube Video',
      desc: 'Massive brand recall and contextual visual placements across millions of premier partner websites, apps, and video placements.'
    },
    {
      badge: '06',
      icon: <FaSyncAlt />,
      title: 'Dynamic Multi-Channel Remarketing',
      desc: 'Re-engage undecided website visitors and abandoned cart prospects across social and search networks until conversion takes place.'
    }
  ];

  const industries = [
    'Real Estate & Luxury Housing',
    'E-Commerce & D2C Brands',
    'B2B Manufacturing & Industrial',
    'Healthcare, Hospitals & Clinics',
    'Education, Coaching & EdTech',
    'Financial Services & Fintech',
    'Automotive & EV Dealerships',
    'Hospitality, Travel & Resorts',
    'Home Decor & Construction',
    'Professional Legal & Consulting',
    'Electronics & Gadgets',
    'Food & Beverage (FMCG)'
  ];

  const faqs = [
    {
      q: 'How does PPC advertising work?',
      a: 'Pay-Per-Click (PPC) allows your business to appear at the very top of Google and social feeds instantly. You only pay when an interested user clicks on your advertisement. Our certified specialists optimize your quality scores, ad copy, and landing pages to minimize your cost per acquisition (CPA).'
    },
    {
      q: 'What daily ad budget is recommended to begin with?',
      a: 'We recommend starting with a minimum test budget of ₹1,000 to ₹3,000 per day depending on keyword competition in your industry. Once positive ROAS is proven, budgets can be scaled profitably without diminishing returns.'
    },
    {
      q: 'How fast can our ad campaign go live?',
      a: 'After our initial briefing and account audit, we architect your complete keyword matrix, write conversion-tested ad copy, set up GA4/GTM server-side tracking, and launch within 3 to 5 business days.'
    },
    {
      q: 'How do you prevent wasted ad budget on junk clicks?',
      a: 'We implement rigorous negative keyword lists, disable poor-performing display placements, apply geo-fencing, and monitor search terms daily to ensure zero budget is wasted on irrelevant searches.'
    },
    {
      q: 'Do you design custom high-converting landing pages?',
      a: 'Yes! Every high-performing PPC campaign is paired with custom, ultra-fast mobile landing pages featuring clear value propositions, trust badges, and 1-click WhatsApp or call triggers.'
    },
    {
      q: 'Will we have complete ownership of our Google Ads account?',
      a: '100% yes. You maintain complete administrative ownership of your Google Ads and Meta accounts. All billing is direct and transparent.'
    }
  ];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      onOpenEnquiry();
    }
  };

  return (
    <div className="wm-sp-root">
      {/* 1. Hero Section */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-hero-two-col">
            <div className="wm-sp-hero-col-left">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>PPC Services</span>
          </div>
          
          <h1 className="wm-sp-hero-title">
            PPC & <span>Google Ads</span> Management Agency
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
                Rated <strong>4.9 out of 5</strong> from <strong>300+ performance client reviews</strong> across Clutch, Google, AmbitionBox, and G2.
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
                pageName="PPC Services"
                source="PPC Services Hero Section"
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
              <h2 className="wm-sp-card-title">Eliminate Wasted Ad Spend with Scientific PPC Architecture</h2>
              <p className="wm-sp-paragraph">
                Most businesses waste 40% to 60% of their digital advertising budgets on broad-match keyword queries, bot clicks, non-converting display placements, and poorly targeted geographic zones.
              </p>
              <p className="wm-sp-paragraph">
                At WebMok, our Google-certified performance marketers engineer mathematically sound ad accounts. By pairing high-intent search queries with laser-focused landing pages, negative keyword sculpting, and conversion-rate optimization (CRO), we turn your ad budget into a predictable customer acquisition machine.
              </p>
            </div>

            {/* 3-Layer Sequential Paid Strategy Framework */}
            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Performance Architecture</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Paid Acquisition Layers</h2>
              <p className="wm-dsm-stack__lede">
                High-converting paid advertising isn't just about bidding on keywords — it requires full-funnel synchronization from search intent to closed sale.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">High-Intent Capture</h3>
                  <span className="wm-dsm-layer__role">Google Search & Exact Match Bidding</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Capturing users with immediate commercial purchase intent through granular Single Keyword Ad Groups (SKAGs) and negative keyword sculpting.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Granular campaign segmentation: Brand vs Non-Brand vs Competitor</li>
                  <li>Extensive negative keyword lists updated weekly to stop junk clicks</li>
                  <li>Responsive Search Ads (RSAs) optimized with 15 headlines & 4 descriptions</li>
                  <li>Server-side conversion tracking via Google Tag Manager and GA4</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">Audience Remarketing</h3>
                  <span className="wm-dsm-layer__role">Multi-Touch Retargeting & Video Discovery</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Re-engaging website visitors and intent audiences across YouTube, Meta, and Google Display Network to accelerate pipeline velocity.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Dynamic product remarketing for e-commerce cart abandoners</li>
                  <li>Video action campaigns on YouTube targeting in-market shoppers</li>
                  <li>Meta custom audiences and high-affinity lookalike modeling</li>
                  <li>Multi-device frequency capping to maintain brand goodwill</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Conversion Rate CRO</h3>
                  <span className="wm-dsm-layer__role">Landing Page Speed & Offer Engineering</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Maximizing landing page conversion rates so every rupee spent on paid traffic yields maximum qualified leads and sales transactions.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Sub-second mobile landing page load speeds with zero layout shifts</li>
                  <li>Frictionless 1-click WhatsApp, click-to-call, and instant lead modals</li>
                  <li>A/B split testing of headlines, social proof badges, and CTAs</li>
                  <li>CRM integration and automated lead routing to sales teams</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>We measure real ROAS and Cost Per Lead (CPL).</strong> You get live Looker Studio dashboards linked directly to your advertising accounts.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Talk to a PPC Specialist &rarr;
                </button>
              </div>
            </section>

            {/* Client Analytics & Case Studies Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">PPC Results, from Client Analytics</h2>
              <p className="wm-sp-paragraph">
                Every figure below comes directly from verified Google Ads, Meta Ads Manager, and GA4 revenue reports:
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

            {/* Comprehensive PPC Channels Grid */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive PPC & Paid Media Channels</h2>
              <p className="wm-sp-paragraph">
                We manage multi-channel paid acquisition to capture prospective customers across every relevant touchpoint:
              </p>
              <div className="wm-sp-disciplines-grid">
                {ppcDisciplines.map((item, idx) => (
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
              <h2 className="wm-sp-card-title">PPC Solutions for Specific Industry Verticals</h2>
              <p className="wm-sp-paragraph">
                We run tailored performance marketing frameworks for distinct commercial and B2B sectors:
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
              <h2 className="wm-sp-card-title">PPC Management Transparent Packages</h2>
              <p className="wm-sp-paragraph">
                Published starting management plans so you can size the scope with complete transparency:
              </p>
              <div className="wm-seopk">
                <div className="wm-seopk__grid">
                  {/* Starter */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Starter Ads Plan</p>
                    <div className="wm-seopk__amt">₹25,000</div>
                    <p className="wm-seopk__gst">+ GST / mo (Up to ₹1L ad spend)</p>
                    <p className="wm-seopk__per">Best for local businesses or single campaign</p>
                    <span className="wm-seopk__kw">Google Search Ads</span>
                    <ul className="wm-seopk__l">
                      <li>Google Search & Call campaigns setup</li>
                      <li>Keyword research & negative keyword list</li>
                      <li>Conversion tracking via GTM & GA4</li>
                      <li>Weekly bid adjustments & search term review</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('PPC & Google Ads', 'Starter Ads Plan')}>
                      Choose Starter &rarr;
                    </button>
                  </div>

                  {/* Growth */}
                  <div className="wm-seopk__c wm-seopk__c--hi">
                    <span className="wm-seopk__badge">Most Chosen</span>
                    <p className="wm-seopk__nm">Growth Ads Plan</p>
                    <div className="wm-seopk__amt">₹45,000</div>
                    <p className="wm-seopk__gst">+ GST / mo (Up to ₹3L ad spend)</p>
                    <p className="wm-seopk__per">Best for scaling leads or e-commerce orders</p>
                    <span className="wm-seopk__kw">Google + Meta Ads</span>
                    <ul className="wm-seopk__l">
                      <li>Google Search + Performance Max + Meta Ads</li>
                      <li>Custom high-converting landing page included</li>
                      <li>Audience remarketing & dynamic catalog ads</li>
                      <li>Bi-weekly strategy call & Looker Studio dashboard</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('PPC & Google Ads', 'Growth Ads Plan')}>
                      Choose Growth &rarr;
                    </button>
                  </div>

                  {/* Scale */}
                  <div className="wm-seopk__c">
                    <p className="wm-seopk__nm">Scale Plan</p>
                    <div className="wm-seopk__amt">₹75,000</div>
                    <p className="wm-seopk__gst">+ GST / mo (Up to ₹8L ad spend)</p>
                    <p className="wm-seopk__per">Best for multi-channel national brands</p>
                    <span className="wm-seopk__kw">Full-Funnel Paid Media</span>
                    <ul className="wm-seopk__l">
                      <li>Google, Meta, YouTube & LinkedIn campaigns</li>
                      <li>Multi-variant A/B landing page CRO testing</li>
                      <li>Server-side CAPI tracking & offline conversion sync</li>
                      <li>Weekly sprint reviews & creative asset refreshes</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--o" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('PPC & Google Ads', 'Scale Plan')}>
                      Choose Scale &rarr;
                    </button>
                  </div>

                  {/* Dedicated Specialist */}
                  <div className="wm-seopk__c wm-seopk__c--dark">
                    <p className="wm-seopk__nm">Dedicated PPC Retainer</p>
                    <div className="wm-seopk__amt">₹1.5 Lakh</div>
                    <p className="wm-seopk__gst">+ GST / mo (Large / Enterprise Spend)</p>
                    <p className="wm-seopk__per">For enterprise brands scaling high volume</p>
                    <span className="wm-seopk__kw">Dedicated Performance Team</span>
                    <ul className="wm-seopk__l">
                      <li>Dedicated Senior Media Buyer + Copywriter + Designer</li>
                      <li>Unlimited ad spend scaling across all channels</li>
                      <li>Real-time Slack channel support & daily pacing</li>
                      <li>Custom CRM lead scoring & attribution modeling</li>
                    </ul>
                    <button className="wm-seopk__cta wm-seopk__cta--y" onClick={() => (onOpenServiceInquiry || onOpenEnquiry)('PPC & Google Ads', 'Dedicated PPC Retainer')}>
                      Hire Dedicated Team &rarr;
                    </button>
                  </div>
                </div>

                <div className="wm-seopk__inc">
                  <h3>Included in Every PPC Plan</h3>
                  <div className="wm-seopk__incg">
                    <span>Server-side GA4 & GTM tracking</span>
                    <span>Negative keyword sculpting</span>
                    <span>Ad copywriting & testing</span>
                    <span>Geo-fencing & device bid adjustments</span>
                    <span>Conversion rate landing page advice</span>
                    <span>Real-time Looker Studio dashboard</span>
                    <span>Direct account access & transparency</span>
                    <span>Dedicated account manager</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Free PPC Audit Banner */}
            <div className="wm-rsau">
              <div className="wm-rsau__grid">
                <div>
                  <span className="wm-rsau__eyebrow">PPC Audit Engine <span>Free</span></span>
                  <h2>Uncover Wasted Ad Spend in 30 Seconds</h2>
                  <p>
                    Submit your website or ad account details to receive an actionable <b>25-point PPC audit</b> highlighting wasted search terms, quality score bottlenecks, and CPA reduction opportunities.
                  </p>
                  <DiagnosticLeadForm serviceName="PPC Services" />
                  <p style={{ fontSize: '13px', color: '#8e8a7e', margin: 0 }}>
                    100% Free · No credit card required · Audit delivered within 24 hours.
                  </p>
                </div>
                <div className="wm-rsau__panel">
                  <p className="wm-rsau__pt">What Your PPC Audit Includes</p>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Negative keyword gap analysis</b> to eliminate junk clicks</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Quality Score review</b> to lower your cost-per-click (CPC)</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Landing page speed & CRO check</b> for conversion leakage</span>
                  </div>
                  <div className="wm-rsau__row">
                    <span className="wm-rsau__tick">✓</span>
                    <span><b>Actionable ROAS growth roadmap</b> prioritized by revenue impact</span>
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

export default PpcServicesPage;

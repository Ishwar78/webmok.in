import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearchDollar,
  FaImage,
  FaShareAlt,
  FaShoppingBag,
  FaMobileAlt,
  FaSyncAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaCertificate,
  FaChevronDown,
  FaRocket
} from 'react-icons/fa';
import ServiceSidebarForm from '../../components/ServiceSidebarForm';
import './ServicePageShared.css';

const PpcServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
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
      name: 'Dr. Haror\'s Clinic',
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
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>PPC Services</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaCertificate /> Google Premier Partner Agency · #Performance First
          </span>
          <h1 className="wm-sp-hero-title">
            PPC & <span>Google Ads</span> Management Agency
          </h1>
          <p className="wm-sp-hero-lead">
            Maximize your Return on Ad Spend (ROAS) and generate predictable, high-intent inbound customer calls with data-backed paid search, shopping, and social ad campaigns managed by WebMok.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Launch Profitable Campaign <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call Me in 28 Seconds
            </button>
          </div>
          <div className="wm-seost">
            {stats.map((st, i) => (
              <div key={i} className="wm-seost__i">
                <p className="wm-seost__n">{st.num}</p>
                <p className="wm-seost__l">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                Rated <strong>4.9 out of 5</strong> from <strong>200+ active performance advertisers</strong> across India, UAE, and North America.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          <div className="wm-sp-main-col">
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Instant Commercial Visibility & Precision Customer Acquisition</h2>
              <p className="wm-sp-paragraph">
                Stop burning marketing budget on low-converting clicks. Pay-Per-Click (PPC) and Google AdWords management allows you to capture buyers at the exact psychological moment they are searching for solutions.
              </p>
              <p className="wm-sp-paragraph">
                At <strong>WebMok</strong>, we treat ad spend as an investment portfolio. Every campaign is engineered with server-side GA4 tracking, rigorous negative keyword sculpting, A/B tested ad copy, and high-velocity landing pages designed to maximize your profit margin.
              </p>
            </div>

            <section className="wm-dsm-stack">
              <span className="wm-dsm-stack__eyebrow">Our Methodology</span>
              <h2 className="wm-dsm-stack__title">Three Sequential Layers of Paid Acquisition</h2>
              <p className="wm-dsm-stack__lede">
                High-converting PPC requires an end-to-end performance engine where keyword intent, creative funnels, and automated bid sculpting work in complete harmony.
              </p>

              <div className="wm-dsm-layer wm-dsm-layer--1">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 01</span>
                  <h3 className="wm-dsm-layer__name">Intent & Keyword Architecture</h3>
                  <span className="wm-dsm-layer__role">The Foundation</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Filtering out tire-kickers and low-intent searches. We isolate high-intent commercial keywords and enforce strict negative keyword sculpting.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Granular Single-Theme Ad Groups (STAG) structure</li>
                  <li>Extensive negative keyword sculpting to stop wasted spend</li>
                  <li>Server-side conversion tracking setup via GTM and GA4</li>
                  <li>Competitor CPC gap analysis and strategic bid ceilings</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--2">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 02</span>
                  <h3 className="wm-dsm-layer__name">A/B Creative & Landing Funnels</h3>
                  <span className="wm-dsm-layer__role">Conversion Rate Optimization</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Ad clicks are useless without conversion. We design high-speed landing pages engineered strictly to convert visitors into phone calls and lead forms.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Bespoke responsive landing pages with sub-second loading</li>
                  <li>Multi-variant A/B copy testing for maximum CTR</li>
                  <li>1-click WhatsApp, click-to-call & CRM lead integrations</li>
                  <li>Quality Score optimization to pay less per click than competitors</li>
                </ul>
              </div>

              <div className="wm-dsm-layer wm-dsm-layer--3">
                <div className="wm-dsm-layer__head">
                  <span className="wm-dsm-layer__num">LAYER 03</span>
                  <h3 className="wm-dsm-layer__name">Omnichannel Retargeting & Smart Scaling</h3>
                  <span className="wm-dsm-layer__role">Revenue Maximization</span>
                </div>
                <p className="wm-dsm-layer__desc">
                  Re-engaging visitors across Meta, YouTube, and Display while using automated smart bidding to scale profitable ad groups.
                </p>
                <ul className="wm-dsm-layer__list">
                  <li>Dynamic multi-channel remarketing sequences</li>
                  <li>Target CPA (tCPA) and Target ROAS (tROAS) machine learning models</li>
                  <li>Lookalike audience modeling from verified buyer CRM lists</li>
                  <li>Bi-weekly live performance dashboards and ROI reviews</li>
                </ul>
              </div>

              <div className="wm-dsm-stack__foot">
                <p>
                  <strong>Ready to eliminate wasted ad budget?</strong> Get a comprehensive audit of your current Google Ads account.
                </p>
                <button type="button" onClick={onOpenEnquiry}>
                  Request Free PPC Audit &rarr;
                </button>
              </div>
            </section>

            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">PPC Results, from Client Analytics</h2>
              <p className="wm-sp-paragraph">
                Every metric below comes directly from verified Google Ads, Meta Ads Manager, and GA4 transaction reports:
              </p>
              <div className="wm-seocs__grid">
                {caseStudies.map((cs, idx) => (
                  <div key={idx} className="wm-seocs__c">
                    <p className="wm-seocs__cat">{cs.cat}</p>
                    <div className="wm-seocs__big">{cs.metric}</div>
                    <p className="wm-seocs__met">{cs.sub}</p>
                    <h3 className="wm-seocs__nm">{cs.name}</h3>
                    <p className="wm-seocs__d">{cs.desc}</p>
                    <Link to="/clients/case-studies" className="wm-seocs__go">
                      Read Case Study &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive PPC & Paid Media Channels</h2>
              <p className="wm-sp-paragraph">
                We manage multi-channel paid acquisition to capture prospective customers across every relevant touchpoint:
              </p>
              <div className="wm-sp-disciplines-grid">
                {ppcDisciplines.map((item, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
            </div>

            {/* 6 Step Deliverables */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">What Our PPC Management Includes</h2>
              <p className="wm-sp-paragraph">
                Being dedicated PPC specialists, WebMok delivers an end-to-end performance marketing ecosystem:
              </p>
              <div className="wm-sp-benefit-list">
                {ppcDeliverables.map((item, idx) => (
                  <div key={idx} className="wm-sp-benefit-item">
                    <FaCheckCircle className="wm-sp-bi-icon" />
                    <div className="wm-sp-bi-content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Banner */}
            <div className="wm-sp-callout-banner">
              <div className="wm-sp-cb-content">
                <h3>Google Certified PPC Management & Millions in Ad Budgets Handled</h3>
                <p>
                  We have successfully managed multi-million rupee ad accounts across Noida, Gurgaon, Chandigarh, and Delhi NCR with verified ROAS growth.
                </p>
              </div>
              <button className="wm-sp-cb-btn" onClick={onOpenEnquiry}>
                Start Your Ads
              </button>
            </div>

            {/* Zero Risk Tracking */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Transparent Tracking & Zero Budget Wastage</h2>
              <p className="wm-sp-paragraph">
                There is zero guesswork when partnering with WebMok. You get access to live conversion tracking dashboards, cost-per-lead reports, and transparent budget allocation. Whether you need local leads in Delhi NCR or national eCommerce scaling, our PPC specialists ensure every single rupee spent works towards generating qualified business revenue.
              </p>
            </div>
          </div>

          {/* Sticky Sidebar Lead Capture Form */}
          <div className="wm-sp-sidebar-col">
            <ServiceSidebarForm
              serviceName="PPC Services Company"
              source="PPC Service Page Form"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PpcServicesPage;

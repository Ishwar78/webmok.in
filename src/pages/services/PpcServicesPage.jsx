import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBullseye,
  FaSearchDollar,
  FaImage,
  FaShareAlt,
  FaShoppingBag,
  FaMobileAlt,
  FaSyncAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaCertificate,
  FaChartLine
} from 'react-icons/fa';
import ServiceSidebarForm from '../../components/ServiceSidebarForm';
import './ServicePageShared.css';

const PpcServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const adChannels = [
    {
      icon: <FaSearchDollar />,
      title: 'Search Advertising',
      desc: 'One of the most effective results-providing advertising methods. When a user searches for keywords related to your business, your website appears prominently at the very top of Google.'
    },
    {
      icon: <FaImage />,
      title: 'Display Advertising',
      desc: 'Brings enormous branding power by reaching your targeted audience across millions of partner sites with engaging banners, video snippets, and responsive graphic placements.'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Advertising',
      desc: 'WebMok helps you increase engagement and optimize ad spend across Meta, Instagram, LinkedIn, and YouTube, driving targeted leads and elevating brand authority.'
    },
    {
      icon: <FaShoppingBag />,
      title: 'Google Shopping Advertising',
      desc: 'Product listing ads are the backbone of eCommerce sales. We optimize your Google Merchant Center product feed to maximize ROAS and boost repeat purchases.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Advertising',
      desc: 'A cost-effective strategy to connect with mobile audiences on smartphones and apps. Our specialists analyze user behavior to ensure maximum conversion efficiency.'
    },
    {
      icon: <FaSyncAlt />,
      title: 'Remarketing & Retargeting',
      desc: 'One of the smartest techniques to convert undecided prospects into paying customers by re-engaging visitors who have already shown interest in your products or services.'
    }
  ];

  const ppcDeliverables = [
    { num: '01', title: 'Ad Campaign Architecture & Set Up', text: 'Custom campaign structure with segmented ad groups, negative keyword sculpting, and conversion tracking.' },
    { num: '02', title: 'High-Converting Landing Page Design', text: 'Fast-loading, UX-optimized landing pages designed strictly to convert ad clicks into telephone calls and form fills.' },
    { num: '03', title: 'Paid Search Scheme Implementation', text: 'Strategic bidding rules, ad copy A/B variations, and automated smart-bidding for lowest acquisition costs.' },
    { num: '04', title: 'Aggressive Cost-Per-Click (CPC) Reduction', text: 'Improving Quality Scores (CTR, relevance, landing page experience) to pay significantly less per click than competitors.' },
    { num: '05', title: 'Enhanced Paid Inbound Traffic', text: 'Filtering out junk clicks to bring qualified, high-intent buyers ready to make purchasing decisions.' },
    { num: '06', title: 'Dynamic Multi-Channel Retargeting', text: 'Re-engaging website visitors across YouTube, Display, and Social media until conversion takes place.' }
  ];

  return (
    <div className="wm-sp-root">
      {/* Hero Header */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>PPC Services Company</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaCertificate /> Google Certified Partner
          </span>
          <h1 className="wm-sp-hero-title">PPC Services Company</h1>
          <p className="wm-sp-hero-lead">
            Pay-Per-Click (PPC) and Google AdWords management agency in Delhi and Rohtak, Haryana. Boost your sales, generate instant qualified traffic, and maximize your return on ad spend (ROAS).
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Launch Campaign Now <FaArrowRight />
            </button>
            <button className="wm-sp-cta-secondary" onClick={onOpenCallMe}>
              <FaPhoneAlt /> Call in 28 Seconds
            </button>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="wm-sp-body">
        <div className="wm-sp-container wm-sp-layout">
          {/* Main Column */}
          <div className="wm-sp-main-col">
            {/* Overview Card */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Instant Visibility & Sales with Best PPC Management</h2>
              <p className="wm-sp-paragraph">
                PPC is the fastest method to gain direct visibility for your business on every search engine by reaching your exact audience through paid advertising. Our certified experts monitor your geo-targeted audience and high-valuable commercial keywords to deliver instant results and provide high-ROI customer acquisition at affordable costs.
              </p>
              <p className="wm-sp-paragraph">
                <strong>WebMok Pvt Ltd</strong> is a Google Certified PPC / AdWords Management Company in Delhi and Rohtak, Haryana. AdWords brings the most rapid results through paid advertising strategies and high ROI. We target your buyers on the basis of behavior, demographics, interest, geographic location, and high search intent.
              </p>
            </div>

            {/* 6 Ad Channels */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Diverse Paid Advertising Formats</h2>
              <p className="wm-sp-paragraph">
                We design and manage performance marketing across multiple ad platforms tailored to your business model:
              </p>
              <div className="wm-sp-grid-2">
                {adChannels.map((ch, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <div className="wm-sp-fi-icon">{ch.icon}</div>
                    <h3 className="wm-sp-fi-title">{ch.title}</h3>
                    <p className="wm-sp-fi-desc">{ch.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits in Delhi NCR */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Benefits Of Pay Per Click Services in Delhi, Gurgaon & Rohtak</h2>
              <p className="wm-sp-paragraph">
                Ever since Google introduced Google AdWords, online marketing revolutionized forever. Pay-per-click advertising has become the premier engine driving customer acquisition worldwide. The great benefit of PPC services with WebMok is that you only pay when an interested prospect actually clicks and visits your landing page.
              </p>
              <p className="wm-sp-paragraph">
                PPC provides immediate predictability to evaluate the cost-effectiveness and profitability of your marketing spend. Clicks estimate direct customer interest. You bid on high-conversion keywords and acquire maximum impressions. Our Rohtak and Delhi teams deliver superior ROI via continuous bid monitoring and keyword negative-matching.
              </p>
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

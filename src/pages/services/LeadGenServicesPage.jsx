import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserCheck,
  FaCalendarCheck,
  FaBolt,
  FaUsers,
  FaRedoAlt,
  FaHeart,
  FaBriefcase,
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaBullhorn,
  FaRocket,
  FaHandshake
} from 'react-icons/fa';
import ServiceSidebarForm from '../../components/ServiceSidebarForm';
import './ServicePageShared.css';

const LeadGenServicesPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const leadGenServices = [
    {
      icon: <FaUserCheck />,
      title: 'Lead Qualification',
      desc: 'Filtering and scoring incoming prospects according to your Ideal Customer Profile (ICP), budget, timeline, and decision-maker authority.'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Appointment Setting',
      desc: 'Booking verified calendar discovery calls and product demos directly with qualified C-level executives and key stakeholders.'
    },
    {
      icon: <FaBolt />,
      title: 'Rapid Inbound Lead Response',
      desc: 'Instant lead engagement workflows via automated WhatsApp, SMS, and email follow-up within minutes of inquiry submission.'
    },
    {
      icon: <FaUsers />,
      title: 'Hyper-Targeted Lead Lists',
      desc: 'Precision data sourcing of high-intent B2B accounts, verified phone numbers, and direct work emails tailored to your industry niche.'
    },
    {
      icon: <FaRedoAlt />,
      title: 'Dead Lead Revival',
      desc: 'Re-engaging stalled prospects and dormant CRM opportunities with persuasive omnichannel re-activation sequences.'
    },
    {
      icon: <FaHeart />,
      title: 'Lead Nurturing Sequences',
      desc: 'Drip campaigns and educational value content that guides cold leads seamlessly down your sales pipeline until purchase readiness.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Trade Show & Event Lead Generation',
      desc: 'Pre-event outreach, on-ground capture, and rapid post-event follow-up to maximize your exhibition ROI.'
    }
  ];

  const valuePillars = [
    {
      title: 'Specialized B2B & B2C Expertise',
      text: 'Our team has executed high-velocity social media marketing and B2B demand generation across diverse industry verticals.'
    },
    {
      title: 'Tailored Multichannel Approaches',
      text: 'We never believe in generic templates. Our lead generation funnels are custom-engineered for the specific challenges of your sector.'
    },
    {
      title: 'Value for Money Services',
      text: 'Attain aggressive pipeline expansion and customer acquisition goals without burning through excessive capital.'
    },
    {
      title: 'Data-Supported Performance Tracking',
      text: 'Continuous metrics monitoring, live CRM integration, and transparent reporting ensure every marketing rupee spent yields measurable returns.'
    }
  ];

  return (
    <div className="wm-sp-root">
      {/* Hero Header */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Lead Generation</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaBullhorn /> High-Converting B2B & B2C Funnels
          </span>
          <h1 className="wm-sp-hero-title">Lead Generation Services Company in Delhi NCR & Haryana</h1>
          <p className="wm-sp-hero-lead">
            Accelerate your sales pipeline with multi-channel B2B lead generation, appointment setting, and targeted social media marketing engineered by WebMok Pvt Ltd.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Qualified Leads Now <FaArrowRight />
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
              <h2 className="wm-sp-card-title">Transform Your Sales Pipeline with High-Intent Buyers</h2>
              <p className="wm-sp-paragraph">
                Your company’s ability to reach new heights in your industry multiplies with a multi-faceted lead generation approach offered by <strong>WebMok Pvt Ltd</strong> in Delhi NCR, Rohtak, and Haryana. You get top-tier sales funnels to drive your business forward with custom campaigns.
              </p>
              <p className="wm-sp-paragraph">
                To help you scale faster, our B2B lead generation solutions incorporate proven methodologies across Delhi, Gurgaon, Mumbai, and Chandigarh. We partner with your team on the foundation of reliability, transparency, and continuous communication to fuel predictable corporate revenue growth.
              </p>
              <p className="wm-sp-paragraph">
                As social media marketing is one of the most potent drivers we invoke, we formulate promotional campaigns targeted precisely at high-net-worth buyers. This ensures great quality lead generation that actually converts into paying clients.
              </p>
            </div>

            {/* What We Do */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">What We Do: Accelerated Sales Opportunities</h2>
              <p className="wm-sp-paragraph">
                Our focus is on your customer acquisition while your focus stays on managing your core business operations. Making your company an authority in your industry is our mission. You will discover how a successful partnership with our multi-channel B2B lead generation agency elevates your enterprise.
              </p>
              <p className="wm-sp-paragraph">
                Our innovative lead generation solutions fill the missing gaps within your recent sales campaigns. We unleash custom strategies including appointment setting, cold pipeline nurturing, and demand generation working hand-in-hand with your sales team.
              </p>
            </div>

            {/* Our Lead Gen Services Include */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Our Lead Generation Services Include</h2>
              <p className="wm-sp-paragraph">
                From initial prospect identification to booked meetings on your calendar, we provide an end-to-end sales engine:
              </p>
              <div className="wm-sp-grid-2">
                {leadGenServices.map((srv, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <div className="wm-sp-fi-icon">{srv.icon}</div>
                    <h3 className="wm-sp-fi-title">{srv.title}</h3>
                    <p className="wm-sp-fi-desc">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Web Mok */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Why Choose Lead Generation & SMM from WebMok Pvt Ltd?</h2>
              <p className="wm-sp-paragraph">
                Virtually every business seeking rapid expansion or more inbound leads considerably benefits from our proven methodologies:
              </p>
              <div className="wm-sp-benefit-list">
                {valuePillars.map((item, idx) => (
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

            {/* Receive the Attention You Deserve */}
            <div className="wm-sp-callout-banner">
              <div className="wm-sp-cb-content">
                <h3>Receive The Market Attention Your Brand Deserves</h3>
                <p>
                  We place all required groundwork, integrating the latest automation tools into your sales processes so you consistently outshine competitors.
                </p>
              </div>
              <button className="wm-sp-cb-btn" onClick={onOpenEnquiry}>
                Book Consultation
              </button>
            </div>
          </div>

          {/* Sticky Sidebar Lead Capture Form */}
          <div className="wm-sp-sidebar-col">
            <ServiceSidebarForm
              serviceName="Lead Generation Services"
              source="Lead Generation Service Page Form"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGenServicesPage;

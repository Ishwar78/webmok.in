import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGlobe,
  FaSearch,
  FaShareAlt,
  FaPenNib,
  FaMousePointer,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaAward,
  FaComments
} from 'react-icons/fa';
import ServiceSidebarForm from '../../components/ServiceSidebarForm';
import './ServicePageShared.css';

const DigitalMarketingPage = ({ onOpenCallMe, onOpenEnquiry }) => {
  const coreServices = [
    {
      icon: <FaSearch />,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Improve your website’s ranking on Google and major search engines, making it effortless for high-intent potential customers to discover your brand organically.'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Marketing (SMM)',
      desc: 'Engage actively with your target demographics on Facebook, Instagram, LinkedIn, and YouTube to build lasting brand loyalty and drive high-volume traffic.'
    },
    {
      icon: <FaPenNib />,
      title: 'Content Marketing & Strategy',
      desc: 'Create compelling, informative, and authoritative content that resonates with your audience, answers customer problems, and establishes market authority.'
    },
    {
      icon: <FaMousePointer />,
      title: 'Pay-Per-Click Advertising (PPC)',
      desc: 'Get immediate commercial visibility through laser-targeted paid search and display ads that convert incoming clicks into loyal buying customers.'
    }
  ];

  const advantagePillars = [
    {
      title: 'Data-Driven Decision Making',
      text: 'Every tactical campaign decision is backed by thorough competitor analytics and industry search behavior, maximizing your return on marketing investment (ROI).'
    },
    {
      title: 'Real-Time Trend Optimization',
      text: 'Our team stays updated with algorithmic shifts and emerging ad tech, continuously adapting strategies in real-time to keep you ahead of competitors.'
    },
    {
      title: 'Absolute Transparency & Communication',
      text: 'With bi-weekly updates and transparent analytical dashboards, you always have complete visibility over where your investment is moving.'
    },
    {
      title: 'Tailored for Rohtak, Delhi & Global Markets',
      text: 'Whether you need hyper-local footfall in Delhi NCR or multinational reach across foreign markets, our solutions scale smoothly with your ambitions.'
    }
  ];

  return (
    <div className="wm-sp-root">
      {/* Hero Header */}
      <section className="wm-sp-hero">
        <div className="wm-sp-container">
          <div className="wm-sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Digital Marketing</span>
          </div>
          <span className="wm-sp-hero-pill">
            <FaAward /> 360° Digital Growth Agency
          </span>
          <h1 className="wm-sp-hero-title">Digital Marketing Services in Delhi & Rohtak</h1>
          <p className="wm-sp-hero-lead">
            Webmok Pvt Ltd is your premier destination for exceptional digital marketing services in Rohtak and Delhi. Elevate your brand presence, engage audiences, and scale your online revenue.
          </p>
          <div className="wm-sp-hero-cta-group">
            <button className="wm-sp-cta-primary" onClick={onOpenEnquiry}>
              Get Free Growth Strategy <FaArrowRight />
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
              <h2 className="wm-sp-card-title">Premier Digital Marketing Agency in Delhi & Rohtak</h2>
              <p className="wm-sp-paragraph">
                In today's fast-paced digital landscape, having a robust online presence is essential for businesses looking to thrive. At <strong>Webmok Pvt Ltd</strong>, we understand the unique challenges companies face across different regions, and we tailor our strategies to meet your specific industry requirements.
              </p>
              <p className="wm-sp-paragraph">
                Our team of seasoned experts employs the latest techniques in search engine optimization (SEO), social media marketing, content creation, and pay-per-click (PPC) advertising. By leveraging these strategies, we help you reach your target audience effectively, drive qualified traffic to your website, and increase bottom-line conversions.
              </p>
              <p className="wm-sp-paragraph">
                Choosing Webmok means partnering with a dedicated growth team that prioritizes your commercial success. We offer transparent reporting, ensuring you are always informed about campaign performance. Our customer-centric approach means we listen closely to your milestones and work collaboratively to achieve them.
              </p>
            </div>

            {/* Why Choose Webmok & Core Services */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Comprehensive Suite of Digital Marketing Services</h2>
              <p className="wm-sp-paragraph">
                At Webmok, we understand that every business is unique. That is why we offer customized solutions that fit your specific needs, whether you are an agile startup or an established enterprise:
              </p>
              <div className="wm-sp-grid-2">
                {coreServices.map((srv, idx) => (
                  <div key={idx} className="wm-sp-feature-item">
                    <div className="wm-sp-fi-icon">{srv.icon}</div>
                    <h3 className="wm-sp-fi-title">{srv.title}</h3>
                    <p className="wm-sp-fi-desc">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Benefits of Our Services */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">The Benefits of Our Digital Marketing Solutions</h2>
              <p className="wm-sp-paragraph">
                Opting for digital marketing services in Rohtak and Delhi with Webmok offers measurable commercial advantages:
              </p>
              <div className="wm-sp-benefit-list">
                {advantagePillars.map((item, idx) => (
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

            {/* Callout Banner */}
            <div className="wm-sp-callout-banner">
              <div className="wm-sp-cb-content">
                <h3>Elevate Your Brand’s Online Presence Today</h3>
                <p>
                  Join hundreds of successful businesses across Delhi NCR and Haryana that scale their inbound leads with Webmok Pvt Ltd.
                </p>
              </div>
              <button className="wm-sp-cb-btn" onClick={onOpenEnquiry}>
                Start Today
              </button>
            </div>

            {/* Join Us Today */}
            <div className="wm-sp-card">
              <h2 className="wm-sp-card-title">Partner with a Team Committed to Your Growth</h2>
              <p className="wm-sp-paragraph">
                By choosing Webmok Pvt Ltd, you are not just selecting a service provider; you are partnering with a team that is deeply committed to your growth and success. Our mission is to help you navigate the complexities of digital marketing and achieve your business goals.
              </p>
              <p className="wm-sp-paragraph">
                Don’t miss out on the opportunity to elevate your brand’s online presence. Join us today for unparalleled digital marketing services in Rohtak and digital marketing services in Delhi. Contact us now to get started!
              </p>
            </div>
          </div>

          {/* Sticky Sidebar Lead Capture Form */}
          <div className="wm-sp-sidebar-col">
            <ServiceSidebarForm
              serviceName="Digital Marketing Services"
              source="Digital Marketing Service Page Form"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;

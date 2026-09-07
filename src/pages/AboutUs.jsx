import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaPhoneAlt,
  FaLaptopCode,
  FaSearch,
  FaEnvelopeOpenText,
  FaBullhorn,
  FaMobileAlt,
  FaAd,
  FaShareAlt,
  FaRegLightbulb,
  FaClock,
  FaHeadset,
  FaUndoAlt,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaCogs,
  FaBoxes,
  FaIndustry,
  FaStoreAlt,
  FaBalanceScale,
  FaArrowRight,
  FaWhatsapp,
  FaTrophy,
  FaLayerGroup,
  FaBuilding
} from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeService, setActiveService] = useState(0);
  // Leadership Team (Preserved)
  const leadershipTeam = [
    {
      name: 'Rahish Sangwan',
      role: 'Founder & Managing Director',
      bio: 'Over a decade of leadership in digital transformation, tech architecture, and scaling business development in NCR & North India.',
      image: '/Rahish Sir.png'
    },
    {
      name: 'Simran Narang',
      role: 'Digital Marketing Head',
      bio: 'Full-stack engineering expert specializing in scalable React ecosystem, mobile application pipelines, and high-load web architectures.',
      image: '/simran1.png'
    },
    {
      name: 'Deepak Suhag',
      role: 'Director of Performance Marketing',
      bio: 'Data-driven PPC and SEO strategist who has managed over ₹15+ Crore in profitable digital advertising spend across enterprise brands.',
      image: '/DeepakSir-1.png'
    }
  ];

  // 4 Supported Business Types
  const businessTypes = [
    {
      icon: <FaHandshake />,
      title: 'Services Providing Business',
      desc: 'Architecting high-conversion lead engines, automated appointment scheduling, and CRM integrations for consultancies, healthcare, educational institutions, and professional agencies.'
    },
    {
      icon: <FaStoreAlt />,
      title: 'Merchandising Business',
      desc: 'Empowering retail shops, multi-brand outlets, wholesalers, and product distributors with dynamic digital catalogs, local search visibility, and localized footfall campaigns.'
    },
    {
      icon: <FaIndustry />,
      title: 'Manufacturing Business',
      desc: 'Positioning industrial factories, OEM suppliers, and B2B exporters on the top of Google Search to acquire high-value commercial buyers and bulk procurement contracts.'
    },
    {
      icon: <FaBoxes />,
      title: 'Hybrid Business',
      desc: 'Delivering unified omnichannel digital infrastructure that seamlessly bridges physical retail counters with modern headless e-commerce storefronts and mobile apps.'
    }
  ];

  // 9 Core Qualified Services
  const coreServices = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Designing',
      desc: 'Crafting stunning, human-centric visual interfaces and frictionless user experiences tailored for high brand authority.',
      subFeatures: ['UI/UX Strategy & Wireframing', 'Responsive Mobile-First Design', 'Brand Identity & Style Guides', 'Figma / Adobe XD Prototyping', 'Landing Page & CRO Design', 'E-Commerce Storefront Design']
    },
    {
      icon: <FaCogs />,
      title: 'Web Development',
      desc: 'Engineering robust, full-stack web software, React apps, and custom CMS platforms with sub-second page performance.',
      subFeatures: ['React / Next.js Applications', 'WordPress & Custom CMS', 'RESTful API Integration', 'Performance Optimization', 'Progressive Web Apps (PWA)', 'Database Architecture & Scaling']
    },
    {
      icon: <FaSearch />,
      title: 'Search Engine Optimization',
      desc: '100% white-hat organic ranking strategies designed to dominate competitive keyword niches on Google search.',
      subFeatures: ['Technical SEO Audit & Fix', 'On-Page & Off-Page SEO', 'Local SEO & Google Maps', 'Backlink Authority Building', 'Keyword Research & Mapping', 'Monthly Ranking Reports']
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: 'Email Marketing',
      desc: 'High-deliverability automated email funnels, behavioral trigger campaigns, and high-converting subscriber flows.',
      subFeatures: ['Drip Campaign Automation', 'Behavioral Trigger Emails', 'Subscriber List Management', 'A/B Split Testing', 'HTML Email Template Design', 'Deliverability & Open Rate Boost']
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Content Marketing',
      desc: 'In-depth editorial articles, authority whitepapers, and compelling brand storytelling that drives qualified traffic.',
      subFeatures: ['SEO Blog Articles & Guides', 'Brand Storytelling & Copywriting', 'Authority Whitepapers', 'Infographic & Visual Content', 'YouTube Script Writing', 'Content Distribution Strategy']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Marketing',
      desc: 'Targeted in-app marketing, device-optimized acquisition flows, and App Store Optimization (ASO) for native apps.',
      subFeatures: ['App Store Optimization (ASO)', 'Push Notification Campaigns', 'SMS & WhatsApp Marketing', 'In-App Advertising Strategy', 'Mobile-First Campaign Design', 'User Retention & Re-engagement']
    },
    {
      icon: <FaBullhorn />,
      title: 'Social Media Marketing',
      desc: 'Viral creative campaigns, interactive motion graphics, and paid performance ad funnels on Meta, LinkedIn & Instagram.',
      subFeatures: ['Facebook & Instagram Ads', 'LinkedIn B2B Campaigns', 'Creative Reels & Motion Graphics', 'Influencer Collaboration Strategy', 'Paid Ad Funnel Optimization', 'Audience Targeting & Retargeting']
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Optimization',
      desc: 'Optimizing corporate profiles, amplifying brand authority, and cultivating vibrant, engaged customer communities.',
      subFeatures: ['Profile Setup & Branding', 'Content Calendar Planning', 'Organic Reach Amplification', 'Hashtag Strategy Research', 'Community Engagement Management', 'Social Analytics & Reporting']
    },
    {
      icon: <FaAd />,
      title: 'PPC & Google AdWords',
      desc: 'Precision laser-targeted Google Search Ads and Performance Max funnels designed to deliver maximum return on ad spend.',
      subFeatures: ['Google Search Ad Campaigns', 'Performance Max Campaigns', 'Display & Remarketing Ads', 'Shopping Ads for E-Commerce', 'Bid Strategy & Budget Optimization', 'Conversion Tracking & ROAS Analysis']
    }
  ];


  // 5 Values and Philosophies
  const valuesList = [
    {
      title: 'Positive & Ethical Relationships',
      desc: 'We cultivate positive, honest, and long-term ethical partnerships with every single client we serve.'
    },
    {
      title: 'Hard Work, Integrity & Trust',
      desc: 'We believe unreservedly in hard work, moral integrity, mutual trust, and shared commercial success.'
    },
    {
      title: 'Teamwork & Total Transparency',
      desc: 'We work as an integrated squad and maintain absolute, transparent communication with our users.'
    },
    {
      title: '100% Earned Result in Short Period',
      desc: 'We engineer high-efficiency sprints to deliver 100% verified, measurable results in accelerated timeframes.'
    },
    {
      title: 'Result-Oriented Execution',
      desc: 'We are fiercely outcome-focused, optimizing every technical action to yield superior business ROI.'
    }
  ];

  // 13 Reasons to Hire Us
  const whyHireReasons = [
    {
      icon: <FaAward />,
      title: 'Easily Affordable & High-Caliber',
      desc: 'We are easily affordable and exceptionally qualified to engineer a prosperous, sustainable future for your business.'
    },
    {
      icon: <FaRocket />,
      title: 'Rapid 100% Result Delivery',
      desc: 'We complete your project sprints and deliver 100% earned results in short, time-critical development cycles.'
    },
    {
      icon: <FaChartLine />,
      title: 'Regular Updates & Transparent Reports',
      desc: 'We provide routine weekly progress updates, transparent analytical reports, and live KPI telemetry.'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Dedicated Client Support',
      desc: 'Our senior technical engineers and account managers provide responsive 24*7 support whenever you need us.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Deep Requirement Understanding',
      desc: 'We deeply analyze your business necessity, user persona, and competitive moat before commencing development.'
    },
    {
      icon: <FaHandshake />,
      title: 'Proactive Collaborative Dialogue',
      desc: 'We conduct timely, consultative discussions about any new feature, strategic update, or market shift you require.'
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Unique & High-Impact Ideas',
      desc: 'We introduce innovative, proprietary architectural concepts and creative angles tailored directly to your niche.'
    },
    {
      icon: <FaBoxes />,
      title: 'Proven Experience Across All Verticals',
      desc: 'We possess deep hands-on expertise in developing, marketing, and scaling every kind of commercial business format.'
    },
    {
      icon: <FaClock />,
      title: 'On-Time & Premature Deliveries',
      desc: 'We take pride in delivering milestone deliverables prematurely, ensuring complete peace of mind and satisfaction.'
    },
    {
      icon: <FaUndoAlt />,
      title: '100% Money-Back Refund Guarantee',
      desc: 'If for any reason our company cannot deliver your project milestones by the agreed due date, we refund your amount of consideration.'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Upfront Honesty & Domain Boundaries',
      desc: 'If we ever identify a task beyond our specialization, we clearly and transparently decline upfront before taking your funds.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Unyielding Project Commitment',
      desc: 'Once we take on your assignment and sign the agreement, our team will complete it flawlessly no matter what.'
    },
    {
      icon: <FaUsers />,
      title: 'Supportive, Healthy & Ethical Culture',
      desc: 'Our enterprise is fundamentally founded on transparency, mutual respect, and a supportive, client-first mindset.'
    }
  ];

  // 8 Why Choose Us Pillars (Matching uploaded image concept in WebMok theme)
  const whyChooseUsList = [
    {
      icon: <FaLaptopCode />,
      title: 'Talented App/Web Developers',
      bg: '#f0f7ff',
      iconColor: '#0b4f8a'
    },
    {
      icon: <FaUsers />,
      title: 'Specialized Workforce',
      bg: '#e6f9f0',
      iconColor: '#10b981'
    },
    {
      icon: <FaClock />,
      title: 'Timely Delivery',
      bg: '#fff8e6',
      iconColor: '#f59e0b'
    },
    {
      icon: <FaHandshake />,
      title: 'Affordable Pricing',
      bg: '#edf5ff',
      iconColor: '#00a8cc'
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Expert Advice',
      bg: '#fff6e6',
      iconColor: '#ef4444'
    },
    {
      icon: <FaHeadset />,
      title: 'Valuable Customer Support',
      bg: '#ffeef0',
      iconColor: '#ec4899'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Finest Quality Service',
      bg: '#e6fcf5',
      iconColor: '#059669'
    },
    {
      icon: <FaCheckCircle />,
      title: 'A Trusted & Reliable Solution',
      bg: '#f5eefb',
      iconColor: '#8b5cf6'
    }
  ];

  return (
    <div className="wm-about-root">
      {/* 1. HERO BANNER */}
      <section className="wm-about-hero">
        <div className="wm-about-ambient-glow"></div>
        <div className="wm-about-container">
          <span className="wm-about-tag">Know About Webmok Private Limited</span>
          <h1 className="wm-about-hero-title">
            Empowering Global Businesses with <span className="wm-gradient-cyan">Next-Gen Digital Solutions</span>
          </h1>
          <p className="wm-about-hero-desc">
            Webmok Pvt Ltd is a premier global IT services and digital marketing company established on <strong>16 June 2016</strong>. With our headquarters in <strong>Delhi</strong> and branch offices in <strong>Rohtak</strong>, we rank among India's top companies transforming businesses across India and around the world.
          </p>

          <div className="wm-about-hero-badges">
            <div className="wm-ab-badge">
              <FaCalendarAlt className="wm-ab-icon" />
              <span>Established 16 June 2016</span>
            </div>
            <div className="wm-ab-badge">
              <FaGlobeAmericas className="wm-ab-icon" />
              <span>Global Footprint: India & Abroad</span>
            </div>
            <div className="wm-ab-badge">
              <FaShieldAlt className="wm-ab-icon" />
              <span>100% Earned Result Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 BENTO STATS SECTION */}
      <section className="wm-about-bento-section">
        <div className="wm-about-container">
          <div className="wm-about-bento-grid">
            {/* Left: Tagline Column */}
            <div className="wm-bento-tagline-col">
              <span className="wm-bento-accent-word">Excellence.</span>
              <h2 className="wm-bento-tagline">Our foundation for every project we deliver.</h2>
              <p className="wm-bento-tagline-desc">
                Since 2016, Webmok Pvt Ltd has consistently delivered measurable digital success to businesses across India and globally — backed by a team of seasoned experts and a proven track record.
              </p>
              <div className="wm-bento-tagline-bar"></div>
            </div>

            {/* Center-Top: Projects Delivered */}
            <div className="wm-bento-stat-card wm-bento-card-1">
              <div className="wm-bento-card-overlay"></div>
              <div className="wm-bento-stat-content">
                <span className="wm-bento-stat-num">1500<span className="wm-bento-plus">+</span></span>
                <span className="wm-bento-stat-label">Projects Delivered</span>
              </div>
              <div className="wm-bento-stat-icon"><FaTrophy /></div>
            </div>

            {/* Center-Bottom: Industry Sectors */}
            <div className="wm-bento-stat-card wm-bento-card-2">
              <div className="wm-bento-card-overlay"></div>
              <div className="wm-bento-stat-content">
                <span className="wm-bento-stat-num">20<span className="wm-bento-plus">+</span></span>
                <span className="wm-bento-stat-label">Industry Sectors</span>
              </div>
              <div className="wm-bento-stat-icon"><FaLayerGroup /></div>
            </div>

            {/* Right-Top: Professionals */}
            <div className="wm-bento-stat-card wm-bento-card-3">
              <div className="wm-bento-card-overlay"></div>
              <div className="wm-bento-stat-content">
                <span className="wm-bento-stat-num">75<span className="wm-bento-plus">+</span></span>
                <span className="wm-bento-stat-label">Professionals</span>
              </div>
              <div className="wm-bento-stat-icon"><FaUsers /></div>
            </div>

            {/* Right-Bottom: Years of Experience */}
            <div className="wm-bento-stat-card wm-bento-card-4">
              <div className="wm-bento-card-overlay"></div>
              <div className="wm-bento-stat-content">
                <span className="wm-bento-stat-num">10<span className="wm-bento-plus">+</span></span>
                <span className="wm-bento-stat-label">Years of Experience</span>
              </div>
              <div className="wm-bento-stat-icon"><FaBuilding /></div>
            </div>

            {/* Far Right: Description Column */}
            <div className="wm-bento-desc-col">
              <span className="wm-about-sub" style={{ marginBottom: '14px', display: 'block' }}>Why Webmok?</span>
              <p className="wm-bento-desc-para">
                We are a premier IT and Digital Marketing company with offices in <strong>Delhi</strong> and <strong>Rohtak</strong>, serving <strong>500+ active clients</strong> across India and abroad.
              </p>
              <p className="wm-bento-desc-para">
                Our team of 75+ specialists combines cutting-edge technology with deep domain expertise to engineer digital growth engines that outperform the competition.
              </p>
              <Link to="/contact" className="wm-bento-cta-link">
                Get Free Consultation <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}

      {/* <section className="wm-about-stats-strip">
        <div className="wm-about-container">
          <div className="wm-about-stats-grid">
            <div className="wm-astat-card">
              <strong>500+</strong>
              <span>Active Current Clients</span>
            </div>
            <div className="wm-astat-card">
              <strong>1500+</strong>
              <span>Delivered Client Projects</span>
            </div>
            <div className="wm-astat-card">
              <strong>100%</strong>
              <span>Google Ranking & Result Guarantee</span>
            </div>
            <div className="wm-astat-card">
              <strong>2016</strong>
              <span>Year of Establishment (June 16)</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* 3. DETAILED COMPANY OVERVIEW */}
      <section className="wm-about-profile-section">
        <div className="wm-about-container">
          <div className="wm-about-profile-grid">
            <div className="wm-about-profile-left">
              <span className="wm-about-sub">Corporate Profile</span>
              <h2 className="wm-about-sec-title">Developing Any Kind of Business in Digital Form</h2>
              <div className="wm-about-bar"></div>

              <p className="wm-profile-lead-para">
                Webmok Pvt Ltd is a top-ranking IT service providing enterprise from India delivering comprehensive, end-to-end digital transformation solutions. Operating on a global level, we spearhead strategic projects for clients across India as well as overseas markets.
              </p>

              <p className="wm-profile-para">
                We have over <strong>500+ active clients</strong> and have successfully delivered <strong>1500+ projects</strong> across diverse sectors. We ensure to promote your business digitally and provide you <strong>100% ranking on Google</strong>.
              </p>

              <div className="wm-guarantee-box">
                <div className="wm-guarantee-icon-box">
                  <FaShieldAlt />
                </div>
                <div className="wm-guarantee-content">
                  <h4>100% Earned Result & Money-Back Policy</h4>
                  <p>
                    Webmok Pvt Ltd gives you a 100% guarantee for delivering earned results. If due to any unforeseen reason we are unable to deliver your project milestones, according to our transparent policy we will return your entire amount of consideration. We build healthy, fair client relationships, deliver every project on time, and disclose our complete execution process prior to agreement.
                  </p>
                </div>
              </div>
            </div>

            <div className="wm-about-profile-right">
              <div className="wm-profile-highlight-card">
                <div className="wm-ph-badge">Fast Facts</div>
                <h3>Webmok Pvt Ltd at a Glance</h3>
                <ul className="wm-ph-list">
                  <li>
                    <strong>Incorporation Date:</strong>
                    <span>16 June 2016</span>
                  </li>
                  <li>
                    <strong>Corporate Headquarters:</strong>
                    <span>New Delhi, India</span>
                  </li>
                  <li>
                    <strong>Branch Offices:</strong>
                    <span>Rohtak, Haryana</span>
                  </li>
                  <li>
                    <strong>Client Geographic Scope:</strong>
                    <span>Pan-India & Global International Clients</span>
                  </li>
                  <li>
                    <strong>Active Client Roster:</strong>
                    <span>500+ Ongoing Partnerships</span>
                  </li>
                  <li>
                    <strong>Completed Projects:</strong>
                    <span>1500+ Digital Deployments</span>
                  </li>
                  <li>
                    <strong>Assurance Policy:</strong>
                    <span>100% Milestones or Full Consideration Refund</span>
                  </li>
                </ul>

                <div className="wm-ph-cta">
                  <button type="button" className="wm-abtn-profile-call" onClick={onOpenCallMe}>
                    <FaPhoneAlt /> Connect in 28 Seconds
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 NEW SECTION: WHY CHOOSE US? (8 Feature Grid) */}
      <section className="wm-about-whychoose-section">
        <div className="wm-about-container">
          <div className="wm-about-section-header">
            <span className="wm-about-sub">Our Signature Value</span>
            <h2 className="wm-about-sec-title">Why Choose Us?</h2>
            <div className="wm-about-bar"></div>
          </div>

          <div className="wm-whychoose-grid">
            {whyChooseUsList.map((item, idx) => (
              <div key={idx} className="wm-whychoose-card">
                <div className="wm-step-header-row">
                  <div className="wm-step-num">0{idx + 1}</div>
                  <div className="wm-step-icon">{item.icon}</div>
                </div>
                <h3 className="wm-whychoose-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUSINESSES WE SUPPORT */}

      <section className="wm-about-btypes-section">
        <div className="wm-about-container">
          <div className="wm-about-section-header">
            <span className="wm-about-sub">Multi-Sector Support</span>
            <h2 className="wm-about-sec-title">We Support Every Kind of Business Model</h2>
            <div className="wm-about-bar"></div>
          </div>

          <div className="wm-btypes-grid">
            {businessTypes.map((b, idx) => (
              <div key={idx} className="wm-btype-card">
                <div className="wm-step-header-row">
                  <div className="wm-step-num">0{idx + 1}</div>
                  <div className="wm-step-icon">{b.icon}</div>
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALIFIED STAFF & COMPREHENSIVE SERVICES — TAB PANEL LAYOUT */}
      <section className="wm-about-services-section">
        <div className="wm-about-container">
          <div className="wm-about-section-header">
            <span className="wm-about-sub">Expertise &amp; Execution</span>
            <h2 className="wm-about-sec-title">Well-Qualified Staff &amp; Complete Services Portfolio</h2>
            <div className="wm-about-bar"></div>
          </div>

          <div className="wm-svctab-layout">
            {/* LEFT: Service Tab Buttons */}
            <div className="wm-svctab-left">
              <div className="wm-svctab-scroll-wrap">
                {coreServices.map((svc, i) => (
                  <button
                    key={i}
                    className={`wm-svctab-btn${activeService === i ? ' wm-svctab-btn--active' : ''}`}
                    onClick={() => setActiveService(i)}
                  >
                    <span className="wm-svctab-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="wm-svctab-icon">{svc.icon}</span>
                    <span className="wm-svctab-label">{svc.title}</span>
                    <FaArrowRight className="wm-svctab-arrow" />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Dynamic Content Panel */}
            <div className="wm-svctab-right">
              <div className="wm-svctab-panel" key={activeService}>
                {/* Panel Header */}
                <div className="wm-svctab-panel-header">
                  <div className="wm-svctab-panel-iconbox">
                    {coreServices[activeService].icon}
                  </div>
                  <div>
                    <span className="wm-svctab-panel-num">{String(activeService + 1).padStart(2, '0')}</span>
                    <h3 className="wm-svctab-panel-title">{coreServices[activeService].title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="wm-svctab-panel-desc">{coreServices[activeService].desc}</p>

                {/* Sub-Features Grid */}
                <div className="wm-svctab-features-grid">
                  {coreServices[activeService].subFeatures.map((feat, fi) => (
                    <div key={fi} className="wm-svctab-feature-item">
                      <FaArrowRight className="wm-svctab-feature-arrow" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="wm-svctab-divider"></div>

                {/* Action Buttons */}
                <div className="wm-svctab-action-btns">
                  <button className="wm-svctab-act-btn wm-svctab-act-call" onClick={onOpenCallMe}>
                    <FaPhoneAlt /> Call Now
                  </button>
                  <a
                    className="wm-svctab-act-btn wm-svctab-act-wa"
                    href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <button className="wm-svctab-act-btn wm-svctab-act-enq" onClick={onOpenEnquiry}>
                    <FaEnvelopeOpenText /> Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 6. VALUES AND PHILOSOPHIES */}
      <section className="wm-about-values-section">
        <div className="wm-about-container">
          <div className="wm-about-section-header">
            <span className="wm-about-sub">Our Core DNA</span>
            <h2 className="wm-about-sec-title">Webmok Values and Philosophies</h2>
            <div className="wm-about-bar"></div>
          </div>

          <div className="wm-values-grid">
            {valuesList.map((val, idx) => (
              <div key={idx} className="wm-value-card">
                <div className="wm-step-header-row">
                  <div className="wm-step-num">0{idx + 1}</div>
                  <div className="wm-step-icon"><FaAward /></div>
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 8. LEADERSHIP TEAM (PRESERVED) */}
      <section className="wm-leadership-section">
        <div className="wm-about-container">
          <div className="wm-about-section-header">
            <span className="wm-about-sub">Executive Guidance</span>
            <h2 className="wm-about-sec-title">Meet The Experts Guiding Your Brand</h2>
            <div className="wm-about-bar"></div>
            
          </div>

          <div className="wm-team-grid">
            {leadershipTeam.map((leader, i) => (
              <div key={i} className="wm-team-card">
                <div className="wm-team-img-wrap">
                  <img src={leader.image} alt={leader.name} className="wm-team-img" />
                </div>
                <div className="wm-team-body">
                  <h4>{leader.name}</h4>
                  <span className="wm-team-role">{leader.role}</span>
                  <p className="wm-team-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION STRIP */}
      <section className="wm-about-cta">
        <div className="wm-about-container">
          <div className="wm-about-cta-inner">
            <div className="wm-acta-text">
              <h2>Ready to Transform Your Business with Webmok?</h2>
              <p>
                Experience India's top-ranking IT & Digital Marketing consultancy. Connect with our solution architect today.
              </p>
            </div>
            <div className="wm-about-cta-btns">
              <button className="wm-abtn-primary" onClick={onOpenEnquiry}>
                Start Project Discussion <FaArrowRight style={{ marginLeft: '6px' }} />
              </button>
              <button className="wm-abtn-secondary" onClick={onOpenCallMe}>
                <FaPhoneAlt /> Call Me in 28 Seconds
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

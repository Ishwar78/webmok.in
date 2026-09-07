import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUserTie,
  FaTags,
  FaPhoneAlt
} from 'react-icons/fa';
import './PortfolioDetail.css';

const PortfolioDetail = ({ onOpenCallMe, onOpenEnquiry }) => {
  const { projectId } = useParams();

  // Embedded dictionary of projects (No external data.js required)
  const projectsData = {
    'edutech-learning-platform': {
      title: 'EduTech Interactive Platform',
      client: 'Apex Global Academy',
      year: '2026',
      serviceCategory: 'Web Development & Custom LMS',
      results: '+320% Student Enrollments in 90 Days',
      bannerImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&auto=format&fit=crop&q=80',
      overview: 'Apex Global Academy required a resilient, fast, and scalable digital learning ecosystem to migrate away from slow legacy software. Web Mok designed an interactive React and Node platform supporting live lectures, quiz modules, certificate issuance, and automated payments.',
      challenges: [
        'High concurrency during peak exam and registration windows causing database lockups',
        'Complex course progress sync across desktop, tablet, and smartphone devices',
        'Need for friction-free INR payment gateway integration with zero drop-offs'
      ],
      solutions: [
        'Built a modern React frontend paired with microservices backend hosted on AWS',
        'Implemented distributed Redis caching reducing server response times to under 120ms',
        'Seamless Razorpay and Paytm multi-gateway smart failover checkout'
      ],
      deliverables: [
        'Responsive Course Portal',
        'Tutor Dashboard & Gradebook',
        'Student Progression Engine',
        'Automated Invoice & Certificate Generation'
      ]
    },
    'fintech-crypto-wallet-app': {
      title: 'PaySwift Mobile Finance App',
      client: 'PaySwift Fintech Ltd',
      year: '2026',
      serviceCategory: 'Mobile App Engineering (iOS & Android)',
      results: '500K+ Active Installs & 4.8 Rating',
      bannerImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
      overview: 'PaySwift wanted to build India’s simplest daily payments and wallet app for millennials and small merchants, with frictionless biometric login, instant bank transfers, and automated bill payments.',
      challenges: [
        'Stringent RBI compliance, data encryption, and PCI-DSS requirements',
        'Sub-second transaction reconciliation and instant push notification delivery'
      ],
      solutions: [
        'Engineered cross-platform React Native app with biometric encryption and secure tokenization',
        'Asynchronous transaction processing handling 5,000 requests/sec with zero latency'
      ],
      deliverables: [
        'iOS and Android Native-Performance Builds',
        'Merchant QR Scanner & Settlement Engine',
        'Fraud Detection & Push Alerting Service'
      ]
    }
  };

  const project = projectsData[projectId] || {
    title: projectId ? projectId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Project Case Study',
    client: 'Enterprise Client',
    year: '2026',
    serviceCategory: 'Digital Transformation & Development',
    results: 'Substantial Revenue Expansion & ROI',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    overview: 'This project represents a full-funnel digital transformation journey executed by Web Mok Pvt. Ltd., incorporating cutting-edge design, modern code architectures, and high-converting marketing mechanisms.',
    challenges: [
      'Overcoming legacy bottlenecks and outdated user experience',
      'Need for mobile-first speed and frictionless conversion funnels'
    ],
    solutions: [
      'Complete end-to-end design and engineering sprint',
      'Continuous deployment pipeline with rigorous QA testing'
    ],
    deliverables: [
      'Full Responsive Digital Platform',
      'Custom Analytics & Attribution Dashboard',
      'Complete Source Code & Maintenance Guide'
    ]
  };

  return (
    <div className="wm-pdetail-root">
      {/* Hero */}
      <section className="wm-pdetail-hero">
        <div className="wm-pdetail-container">
          <Link to="/portfolio" className="wm-pdetail-back">
            <FaArrowLeft /> Back to All Case Studies
          </Link>
          <span className="wm-pdetail-cat">{project.serviceCategory}</span>
          <h1 className="wm-pdetail-title">{project.title}</h1>

          <div className="wm-pdetail-meta-bar">
            <div className="wm-pmeta-item">
              <FaUserTie className="wm-pmeta-icon" />
              <div>
                <span>Client</span>
                <strong>{project.client}</strong>
              </div>
            </div>
            <div className="wm-pmeta-item">
              <FaCalendarAlt className="wm-pmeta-icon" />
              <div>
                <span>Year</span>
                <strong>{project.year}</strong>
              </div>
            </div>
            <div className="wm-pmeta-item">
              <FaTags className="wm-pmeta-icon" />
              <div>
                <span>Impact</span>
                <strong className="wm-text-impact">{project.results}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="wm-pdetail-banner-sec">
        <div className="wm-pdetail-container">
          <img src={project.bannerImage} alt={project.title} className="wm-pdetail-banner-img" />
        </div>
      </div>

      {/* Main Content */}
      <section className="wm-pdetail-content-sec">
        <div className="wm-pdetail-container wm-pdetail-grid">
          <div className="wm-pdetail-main">
            <div className="wm-pdetail-card">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
            </div>

            <div className="wm-pdetail-card">
              <h2>Challenges Addressed</h2>
              <ul className="wm-pdetail-list">
                {project.challenges.map((c, i) => (
                  <li key={i}><FaCheckCircle className="wm-picon-warn" /> {c}</li>
                ))}
              </ul>
            </div>

            <div className="wm-pdetail-card">
              <h2>Engineered Solutions</h2>
              <ul className="wm-pdetail-list">
                {project.solutions.map((s, i) => (
                  <li key={i}><FaCheckCircle className="wm-picon-chk" /> {s}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="wm-pdetail-side">
            <div className="wm-pdetail-side-card">
              <h3>Key Deliverables</h3>
              <ul className="wm-pdetail-deliv">
                {project.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="wm-pdetail-side-card wm-pside-cta">
              <h3>Achieve Similar Results</h3>
              <p>Let our technical architects build a scalable solution for your company.</p>
              <button className="wm-pbtn-enquiry" onClick={onOpenEnquiry}>
                Request Proposal
              </button>
              <button className="wm-pbtn-callme" onClick={onOpenCallMe}>
                <FaPhoneAlt /> Call Me in 28 Sec
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;

import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import './Career.css';

const Career = ({ onOpenEnquiry }) => {
  const jobs = [
    {
      title: 'Senior React / Frontend Developer',
      location: 'New Delhi / Hybrid',
      type: 'Full Time',
      exp: '3 - 5 Years Experience',
      desc: 'Looking for a passionate React.js engineer skilled with modern component architectures, state management, and high-speed UI development.'
    },
    {
      title: 'Lead SEO & Organic Growth Strategist',
      location: 'Rohtak / New Delhi',
      type: 'Full Time',
      exp: '2 - 4 Years Experience',
      desc: 'Drive high-impact technical audits, link building campaigns, and organic ranking roadmaps for enterprise B2B and E-commerce clients.'
    },
    {
      title: 'Performance Marketing (PPC) Specialist',
      location: 'Remote / Delhi NCR',
      type: 'Full Time',
      exp: '2 - 5 Years Experience',
      desc: 'Manage high-budget Google Search, Display, and Meta Ads accounts with deep expertise in conversion tracking and ROI optimization.'
    },
    {
      title: 'UI/UX Designer & Creative Motion Graphic Artist',
      location: 'New Delhi Office',
      type: 'Full Time',
      exp: '2 - 4 Years Experience',
      desc: 'Craft intuitive Figma wireframes, interactive web prototypes, brand logos, and viral promotional video edits.'
    }
  ];

  return (
    <div className="wm-career-root">
      <section className="wm-career-hero">
        <div className="wm-career-container">
          <span className="wm-career-tag">Join Our Mission</span>
          <h1 className="wm-career-title">Build the Future of Digital With Web Mok</h1>
          <p className="wm-career-desc">
            We are always scouting for curious engineers, creative designers, and data-driven digital marketers who love solving complex digital challenges.
          </p>
        </div>
      </section>

      <section className="wm-career-body">
        <div className="wm-career-container">
          <div className="wm-career-header">
            <h2>Current Open Positions</h2>
            <p>Join a fast-moving, high-growth digital team based in Delhi NCR and Rohtak.</p>
          </div>

          <div className="wm-career-list">
            {jobs.map((job, idx) => (
              <div key={idx} className="wm-job-card">
                <div className="wm-job-main">
                  <h3>{job.title}</h3>
                  <div className="wm-job-meta">
                    <span><FaMapMarkerAlt /> {job.location}</span>
                    <span><FaClock /> {job.type}</span>
                    <span><FaBriefcase /> {job.exp}</span>
                  </div>
                  <p className="wm-job-desc">{job.desc}</p>
                </div>
                <div className="wm-job-action">
                  <a href="mailto:info@webmok.in?subject=Application%20for%20Job" className="wm-job-apply-btn">
                    Apply via Email
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="wm-career-perks-box">
            <h3>Why You Will Love Working With Web Mok</h3>
            <div className="wm-perks-grid">
              <div className="wm-perk-item">
                <FaCheckCircle className="wm-perk-icon" />
                <span>Competitive salary packages and quarterly performance bonuses</span>
              </div>
              <div className="wm-perk-item">
                <FaCheckCircle className="wm-perk-icon" />
                <span>Collaborative team environment with continuous learning and tech stack freedom</span>
              </div>
              <div className="wm-perk-item">
                <FaCheckCircle className="wm-perk-icon" />
                <span>Opportunities to lead mission-critical projects for national and global clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

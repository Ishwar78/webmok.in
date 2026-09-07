import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCogs,
  FaBlog,
  FaClipboardList,
  FaEnvelopeOpenText,
  FaBriefcase,
  FaPhoneAlt,
  FaSignOutAlt,
  FaHome,
  FaLayerGroup,
  FaVideo
} from 'react-icons/fa';
import './AdminSidebar.css';

const AdminSidebar = ({ activeTab, setActiveTab, onLogout, enquiryCount = 6, contactCount = 4 }) => {
  return (
    <aside className="wm-admin-sidebar">
      <div className="wm-admin-sidebar-brand">
        <div className="wm-admin-badge">Admin Panel</div>
        <h3 className="wm-admin-brand-title">Web Mok</h3>
        <p className="wm-admin-brand-sub">Management & CRM Suite</p>
      </div>

      <nav className="wm-admin-nav">
        <button
          className={`wm-admin-nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <FaTachometerAlt className="wm-admin-btn-icon" />
          <span>Dashboard Overview</span>
        </button>

        {/* <div className="wm-admin-nav-group-label">INQUIRIES & LEADS</div> */}

        {/* 1 Single Inquiries Button (Opens Inquiries Hub with internal sub-tabs) */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'inquiries' || activeTab === 'enquiry-now' || activeTab === 'contact-queries' ? 'active' : ''}`}
          onClick={() => setActiveTab('inquiries')}
          title="Client Inquiries Hub (Enquiry Now Leads & Contact Form Messages)"
        >
          <FaClipboardList className="wm-admin-btn-icon" />
          <span>Inquiries</span>
          <span className="wm-nav-pill-badge wm-pill-blue">{enquiryCount + contactCount}</span>
        </button>

        {/* <div className="wm-admin-nav-group-label">CONTENT & CMS</div> */}

        {/* Dedicated Blog Management Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'blogs' ? 'active' : ''}`}
          onClick={() => setActiveTab('blogs')}
          title="Publish and Manage Blog Articles"
        >
          <FaBlog className="wm-admin-btn-icon" />
          <span>Manage Blogs</span>
          <span className="wm-nav-pill-badge wm-pill-purple">CMS</span>
        </button>

        {/* Dedicated Outstanding Section Button (Home Page Tabs & Media) */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'outstanding' ? 'active' : ''}`}
          onClick={() => setActiveTab('outstanding')}
          title="Manage Home Page Outstanding Section Content, Images & Videos Tab-Wise"
        >
          <FaLayerGroup className="wm-admin-btn-icon" />
          <span>Outstanding</span>
          <span className="wm-nav-pill-badge wm-pill-blue">Home</span>
        </button>

        {/* Dedicated Hero Video Button (Home Page Hero Section Video Upload) */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'hero-video' ? 'active' : ''}`}
          onClick={() => setActiveTab('hero-video')}
          title="Upload and Manage Home Page Hero Video"
        >
          <FaVideo className="wm-admin-btn-icon" />
          <span>Hero Video</span>
          <span className="wm-nav-pill-badge wm-pill-purple">Hero</span>
        </button>

        {/* Dedicated Contact Info Settings Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'contact-info' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact-info')}
          title="Update Contact Page Phone, Email, Office Address, and Working Hours in MongoDB"
        >
          <FaPhoneAlt className="wm-admin-btn-icon" />
          <span>Contact Info Settings</span>
        </button>

        {/* <div className="wm-admin-nav-group-label">SERVICES & PORTFOLIO</div> */}

        <button
          className={`wm-admin-nav-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <FaCogs className="wm-admin-btn-icon" />
          <span>Manage Services</span>
        </button>

        <button
          className={`wm-admin-nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          <FaBriefcase className="wm-admin-btn-icon" />
          <span>Manage Portfolio</span>
        </button>
      </nav>

      <div className="wm-admin-sidebar-footer">
        <Link to="/" className="wm-admin-footer-btn wm-admin-live-site">
          <FaHome /> Visit Public Site
        </Link>
        <button className="wm-admin-footer-btn wm-admin-logout" onClick={onLogout}>
          <FaSignOutAlt /> Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

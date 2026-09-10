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
  FaVideo,
  FaInfoCircle,
  FaBoxOpen,
  FaStar,
  FaPalette,
  FaFilm
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

        {/* Dedicated About Us Page CMS Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
          title="Manage About Us Page Content (Hero Bento, Corporate Profile, Expertise & Execution, Executive Guidance)"
        >
          <FaInfoCircle className="wm-admin-btn-icon" />
          <span>Manage About Us</span>
          <span className="wm-nav-pill-badge wm-pill-blue">CMS</span>
        </button>

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
          title="Upload and Manage Home Page Hero Images & Videos (Slider)"
        >
          <FaVideo className="wm-admin-btn-icon" />
          <span>Hero Slider / Video</span>
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

        {/* Dedicated Package Management Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'packages' ? 'active' : ''}`}
          onClick={() => setActiveTab('packages')}
          title="Manage Package Pages, Custom Pricing Tiers & Image Uploads"
        >
          <FaBoxOpen className="wm-admin-btn-icon" />
          <span>Manage Packages</span>
          <span className="wm-nav-pill-badge wm-pill-blue">CMS</span>
        </button>

        {/* Dedicated Testimonials Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
          onClick={() => setActiveTab('testimonials')}
          title="Add, Update, and Manage Client Testimonials & Google Reviews"
        >
          <FaStar className="wm-admin-btn-icon" />
          <span>Testimonials</span>
          <span className="wm-nav-pill-badge wm-pill-purple">Reviews</span>
        </button>

        {/* Dedicated Video Reviews Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'video-reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('video-reviews')}
          title="Upload and Manage Student & Client Video Reviews"
        >
          <FaVideo className="wm-admin-btn-icon" />
          <span>Video Reviews</span>
          <span className="wm-nav-pill-badge wm-pill-blue">Videos</span>
        </button>

        {/* Dedicated Creative Showcase Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'creative-showcase' ? 'active' : ''}`}
          onClick={() => setActiveTab('creative-showcase')}
          title="Upload Packaging, Social Creatives, Branding & UI/UX Showcase Artworks"
        >
          <FaPalette className="wm-admin-btn-icon" />
          <span>Creative Showcase</span>
          <span className="wm-nav-pill-badge wm-pill-purple">Designs</span>
        </button>

        {/* Dedicated Video Showcase Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'video-showcase' ? 'active' : ''}`}
          onClick={() => setActiveTab('video-showcase')}
          title="Upload Showcase Films, CGI Renders & YouTube Commercial Links"
        >
          <FaFilm className="wm-admin-btn-icon" />
          <span>Video Showcase</span>
          <span className="wm-nav-pill-badge wm-pill-blue">Films</span>
        </button>

        <button
          className={`wm-admin-nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          <FaBriefcase className="wm-admin-btn-icon" />
          <span>Manage Portfolio</span>
        </button>

        {/* Dedicated Job Vacancies Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
          title="Create, Edit, and Manage Public Job Vacancies"
        >
          <FaBriefcase className="wm-admin-btn-icon" />
          <span>Manage Jobs</span>
          <span className="wm-nav-pill-badge wm-pill-blue">Career</span>
        </button>

        {/* Dedicated Job Candidate Inquiries Button */}
        <button
          className={`wm-admin-nav-btn ${activeTab === 'job-inquiries' ? 'active' : ''}`}
          onClick={() => setActiveTab('job-inquiries')}
          title="Review Candidate Applications and Download Uploaded CVs"
        >
          <FaClipboardList className="wm-admin-btn-icon" />
          <span>Job Inquiries</span>
          <span className="wm-nav-pill-badge wm-pill-purple">Leads</span>
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

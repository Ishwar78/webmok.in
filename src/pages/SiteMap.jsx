import React from 'react';
import { Link } from 'react-router-dom';
import { FaSitemap, FaLink } from 'react-icons/fa';
import './SiteMap.css';

const SiteMap = () => {
  return (
    <div className="wm-sitemap-root">
      <section className="wm-sitemap-hero">
        <div className="wm-sitemap-container">
          <span className="wm-sitemap-tag">Navigation Index</span>
          <h1 className="wm-sitemap-title">HTML Site Map</h1>
          <p className="wm-sitemap-desc">
            Complete index of all public web pages, service capabilities, portfolio case studies, and corporate policies across Webmok.in.
          </p>
        </div>
      </section>

      <section className="wm-sitemap-body">
        <div className="wm-sitemap-container">
          <div className="wm-sitemap-grid">
            <div className="wm-sitemap-block">
              <h3>Core Navigation</h3>
              <ul>
                <li><Link to="/"><FaLink /> Home</Link></li>
                <li><Link to="/about-us"><FaLink /> About Us</Link></li>
                <li><Link to="/services"><FaLink /> All Services Directory</Link></li>
                <li><Link to="/portfolio"><FaLink /> Portfolio & Case Studies</Link></li>
                <li><Link to="/blogs"><FaLink /> Blogs & Knowledge Articles</Link></li>
                <li><Link to="/contact-us"><FaLink /> Contact Us</Link></li>
              </ul>
            </div>

            <div className="wm-sitemap-block">
              <h3>Web & App Development</h3>
              <ul>
                <li><Link to="/services/word-press-development-services-company"><FaLink /> WordPress Development</Link></li>
                <li><Link to="/services/web-designing-development-services-company"><FaLink /> Web Design & Development</Link></li>
                <li><Link to="/services/e-commerce-development-services-company"><FaLink /> E-Commerce Store Development</Link></li>
                <li><Link to="/services/landing-page-development-services-company"><FaLink /> Landing Page Development</Link></li>
                <li><Link to="/services/website-design-development-rohtak-delhi"><FaLink /> Website Development Services</Link></li>
                <li><Link to="/services/application-development-services"><FaLink /> Custom Application Development</Link></li>
              </ul>
            </div>

            <div className="wm-sitemap-block">
              <h3>Digital Marketing & SEO</h3>
              <ul>
                <li><Link to="/services/seo-services-company"><FaLink /> SEO Services Company</Link></li>
                <li><Link to="/services/ppc-services-company"><FaLink /> PPC & Google Ads Services</Link></li>
                <li><Link to="/services/content-marketing-services-company"><FaLink /> Content Marketing</Link></li>
                <li><Link to="/services/social-media-marketing"><FaLink /> Social Media Marketing</Link></li>
                <li><Link to="/services/mobile-marketing-services-company"><FaLink /> Mobile Marketing</Link></li>
                <li><Link to="/services/video-editing"><FaLink /> Video Editing</Link></li>
                <li><Link to="/hire-seo-expert"><FaLink /> Hire SEO Expert</Link></li>
              </ul>
            </div>

            <div className="wm-sitemap-block">
              <h3>Corporate, Legal & Resources</h3>
              <ul>
                <li><Link to="/testimonials"><FaLink /> Client Testimonials</Link></li>
                <li><Link to="/career"><FaLink /> Careers at Web Mok</Link></li>
                <li><Link to="/offers"><FaLink /> Offers & Bundled Discounts</Link></li>
                <li><Link to="/payment"><FaLink /> Payment Gateway & Wire Transfer</Link></li>
                <li><Link to="/refund-policy"><FaLink /> Refund Policy</Link></li>
                <li><Link to="/terms-and-conditions"><FaLink /> Terms and Conditions</Link></li>
                <li><Link to="/privacy-policy"><FaLink /> Privacy Policy</Link></li>
                <li><Link to="/admin/login"><FaLink /> Admin Portal</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteMap;

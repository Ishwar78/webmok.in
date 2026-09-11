
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';

import './Footer.css';


const Footer = () => {

  const [showScrollTop, setShowScrollTop] = useState(false);


  const [contactInfo, setContactInfo] = useState(() => {

    const saved = localStorage.getItem(
      'webmok_contact_info'
    );

    if (saved) {

      try {

        return JSON.parse(saved);

      } catch (e) {}

    }

    return {

      phonePrimary: '8684031003',

      emailPrimary: 'info@webmok.in',

      address:
        '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',

      workingHours:
        'Mon - Sat: 9:30 AM - 7:00 PM'

    };

  });


  /* =========================
     USE EFFECT
  ========================= */

  useEffect(() => {

    const checkScroll = () => {

      setShowScrollTop(
        window.scrollY > 300
      );

    };


    window.addEventListener(
      'scroll',
      checkScroll
    );


    const updateContactInfo = () => {

      const saved = localStorage.getItem(
        'webmok_contact_info'
      );


      if (saved) {

        try {

          setContactInfo(
            JSON.parse(saved)
          );

        } catch (e) {}

      }

    };


    window.addEventListener(
      'webmok_contact_updated',
      updateContactInfo
    );


    return () => {

      window.removeEventListener(
        'scroll',
        checkScroll
      );


      window.removeEventListener(
        'webmok_contact_updated',
        updateContactInfo
      );

    };

  }, []);


  /* =========================
     SCROLL TOP
  ========================= */

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  };


  return (

    <footer className="wm-footer-root">


      <div className="wm-footer-container">


        <div className="wm-footer-grid">


          {/* =========================
              COL 1 - BRAND
          ========================= */}

          <div className="wm-footer-col wm-fcol-brand">


            {/* LOGO */}

            <Link
              to="/"
              className="wm-footer-logo"
            >

              <img
                src="/logo.png"
                alt="Webmok Logo"
                className="wm-footer-logo-image"
              />

            </Link>


            {/* DESCRIPTION */}

            <p className="wm-footer-description">

              Webmok Pvt. Ltd. is a leading digital marketing and
              web development company dedicated to helping businesses
              grow online with innovative digital solutions.

            </p>


            {/* FOLLOW */}

            <div className="wm-footer-social-title">

              Follow Us

            </div>


            {/* SOCIAL ICONS */}

            <div className="wm-footer-social-links">


              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >

                <FaFacebookF />

              </a>


              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >

                <FaTwitter />

              </a>


              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >

                <FaLinkedinIn />

              </a>


              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >

                <FaYoutube />

              </a>


              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >

                <FaInstagram />

              </a>


            </div>


          </div>



          {/* =========================
              ABOUT + RESOURCES
          ========================= */}

          <div className="wm-footer-links-wrapper">


            {/* =========================
                ABOUT COMPANY
            ========================= */}

            <div className="wm-footer-col">


              <h4 className="wm-footer-heading">

                ABOUT COMPANY

              </h4>


              <div className="wm-footer-heading-line"></div>


              <ul className="wm-footer-links">


                <li>

                  <Link to="/testimonials">

                    Testimonials

                  </Link>

                </li>


                <li>

                  <Link to="/portfolio">

                    Portfolio

                  </Link>

                </li>


                <li>

                  <Link to="/refund-policy">

                    Refund Policy

                  </Link>

                </li>


                <li>

                  <Link to="/terms-and-conditions">

                    Terms & Conditions

                  </Link>

                </li>


                <li>

                  <Link to="/privacy-policy">

                    Privacy Policy

                  </Link>

                </li>


                <li>

                  <Link to="/branding">

                    Branding

                  </Link>

                </li>


                <li>

                  <Link to="/about-us">

                    About Web Mok Team

                  </Link>

                </li>


              </ul>


            </div>



            {/* =========================
                RESOURCES
            ========================= */}

            <div className="wm-footer-col">


              <h4 className="wm-footer-heading">

                RESOURCES

              </h4>


              <div className="wm-footer-heading-line"></div>


              <ul className="wm-footer-links">


                <li>

                  <Link to="/blogs">

                    Blog

                  </Link>

                </li>


                <li>

                  <Link to="/faq">

                    Frequently Asked Questions (FAQ)

                  </Link>

                </li>


                <li>

                  <Link to="/site-map">

                    Site Map

                  </Link>

                </li>


                <li>

                  <Link to="/career">

                    Career

                  </Link>

                </li>


                <li>

                  <Link to="/offers">

                    Offer & Discount

                  </Link>

                </li>


                <li>

                  <Link to="/hire-seo-expert">

                    Hire Seo Expert

                  </Link>

                </li>


                <li>

                  <Link to="/services/business-development-consulting">

                    Business Development Consulting

                  </Link>

                </li>


              </ul>


            </div>


          </div>



          {/* =========================
              COL 4 - OFFICE ADDRESS
          ========================= */}

          <div className="wm-footer-col wm-footer-office">


            <h4 className="wm-footer-heading">

              OFFICE ADDRESS

            </h4>


            <div className="wm-footer-heading-line"></div>


            <div className="wm-footer-contact-items">


              {/* PHONE */}

              <div className="wm-fcontact-item">


                <FaPhoneAlt
                  className="wm-fcontact-icon"
                />


                <a
                  href={`tel:${contactInfo.phonePrimary}`}
                  className="wm-fcontact-text"
                >

                  {contactInfo.phonePrimary}

                </a>


              </div>



              {/* EMAIL */}

              <div className="wm-fcontact-item">


                <FaEnvelope
                  className="wm-fcontact-icon"
                />


                <a
                  href={`mailto:${contactInfo.emailPrimary}`}
                  className="wm-fcontact-text"
                >

                  {contactInfo.emailPrimary}

                </a>


              </div>



              {/* ADDRESS */}

              <div className="wm-fcontact-item wm-fcontact-address">


                <FaMapMarkerAlt
                  className="wm-fcontact-icon"
                />


                <span className="wm-fcontact-text">

                  {contactInfo.address}

                </span>


              </div>


            </div>



            {/* WORKING HOURS */}

            <div className="wm-footer-hours-box">


              <span className="wm-hours-title">

                Working Hours

              </span>


              <p>

                {contactInfo.workingHours ||
                  'Mon - Sat: 9:30 AM - 7:00 PM'}

              </p>


              <p>

                Sunday: Technical Support On Call

              </p>


            </div>


          </div>


        </div>


      </div>



      {/* =========================
          COPYRIGHT BAR
      ========================= */}

      <div className="wm-footer-bottom">


        <div className="wm-bottom-container">


          <p className="wm-copyright-text">

            © Copyright @2021 Webmok Pvt. Ltd.
            All Rights Reserved

          </p>


        </div>


      </div>



      {/* =========================
          FLOATING WHATSAPP
      ========================= */}

      <a
        href="https://wa.me/918684031003?text=Hi%20Web%20Mok,%20I%20am%20interested%20in%20your%20services"
        className="wm-floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >

        <FaWhatsapp />

      </a>



      {/* =========================
          SCROLL TOP
      ========================= */}

      {showScrollTop && (

        <button
          className="wm-scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >

          <FaArrowUp />

        </button>

      )}


    </footer>

  );

};


export default Footer;


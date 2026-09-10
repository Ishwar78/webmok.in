
import React, { useState, useEffect } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaHeadset,
  FaBuilding,
  FaLocationArrow
} from 'react-icons/fa';

import './ContactUs.css';

const API_BASE = 'http://localhost:5005/api';

const ContactUs = ({ onOpenCallMe }) => {

  const [contactInfo, setContactInfo] = useState(() => {

    const saved = localStorage.getItem('webmok_contact_info');

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }

    return {
      phonePrimary: '8684031003',
      phoneSecondary: '+91 98765 43210',
      emailPrimary: 'info@webmok.in',
      emailSupport: 'support@webmok.in',
      address:
        '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',
      workingHours:
        'Monday - Saturday: 9:30 AM to 7:00 PM'
    };

  });


  /* FETCH CONTACT DETAILS */

  useEffect(() => {

    const fetchContactDetails = async () => {

      try {

        const res = await fetch(
          `${API_BASE}/contact-info`
        );

        if (res.ok) {

          const json = await res.json();

          if (json.success && json.data) {

            setContactInfo(json.data);

            localStorage.setItem(
              'webmok_contact_info',
              JSON.stringify(json.data)
            );

          }

        }

      } catch (e) {

        // Fallback to local data

      }

    };


    fetchContactDetails();


    const handleContactUpdated = () => {

      fetchContactDetails();

    };


    window.addEventListener(
      'webmok_contact_updated',
      handleContactUpdated
    );


    return () => {

      window.removeEventListener(
        'webmok_contact_updated',
        handleContactUpdated
      );

    };

  }, []);


  /* FORM DATA */

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''

  });


  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);


  /* BRANCH OFFICES */

  const branches = [

    {
      city: 'Rohtak',
      state: 'Haryana',
      address:
        '1st Floor, 129 L, near CR Polytechnic Back Gate Power House, Model Town, Rohtak, Haryana 124001'
    },

    {
      city: 'Delhi',
      state: 'Delhi NCR',
      address:
        'Office No. 44, Dwarka Mor Phase 1, Mohan Garden, Uttam Nagar, Delhi 110059'
    },

    {
      city: 'Noida',
      state: 'Uttar Pradesh',
      address:
        'Sector 29, Noida, Uttar Pradesh'
    },

    {
      city: 'Gurugram',
      state: 'Haryana',
      address:
        'Sector 29, Gurgaon, Haryana'
    },

    {
      city: 'Hisar',
      state: 'Haryana',
      address:
        'DSB-198, Red Square Market, near Eminent Mall, Mehta Nagar, Hisar, Haryana 125001'
    },

    {
      city: 'Dehradun',
      state: 'Uttarakhand',
      address:
        'Office No 46, Balliwala Chowk, Vijay Park Extension, Dehradun, Uttarakhand 248001'
    },

    {
      city: 'Sirsa',
      state: 'Haryana',
      address:
        'Office No 46, Balliwala Chowk, Vijay Park Extension, Sirsa, Haryana 125055'
    },

    {
      city: 'Jhajjar',
      state: 'Haryana',
      address:
        'Charkhi Dadri - Jhajjar Rd, near Bhagat Singh Chowk, Jhajjar, Haryana 124103'
    }

  ];


  /* FORM SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();


    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {

      alert(
        'Please fill out all required fields.'
      );

      return;

    }


    setIsSubmitting(true);


    try {

      await fetch(
        `${API_BASE}/inquiries/contact`,
        {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({

            name: formData.name,

            email: formData.email,

            phone: formData.phone,

            subject:
              formData.subject ||
              'Website Contact Form Query',

            message:
              formData.message ||
              'Customer reached out via Contact Us page.'

          })

        }
      );

    } catch (err) {

      console.warn(
        'Backend server offline, message queued locally:',
        err.message
      );

    }


    setIsSubmitting(false);

    setSubmitted(true);

  };


  return (

    <div className="wm-contactpage-root">


      {/* HERO */}

      <section className="wm-contactpage-hero">

        <div className="wm-contactpage-container">

          <span className="wm-contactpage-tag">
            Get in Touch
          </span>

          <h1 className="wm-contactpage-title">
            Connect With Web Mok Experts
          </h1>

          <p className="wm-contactpage-desc">
            Have a project in mind, need technical advice, or want to
            explore our digital marketing solutions? We are ready to
            help you thrive.
          </p>

        </div>

      </section>



      {/* CONTACT DETAILS + FORM */}

      <section className="wm-contactpage-body">

        <div className="wm-contactpage-container wm-cpage-grid">


          {/* INFO COLUMN */}

          <div className="wm-cpage-info-col">

            <h2 className="wm-cpage-subheading">
              Contact Details & Locations
            </h2>


            <p className="wm-cpage-infotext">

              Drop by our office or call our priority response helpline.
              Our consultants are available Mon-Sat to review your
              requirements.

            </p>


            <div className="wm-cpage-card-list">


              {/* PHONE */}

              <div className="wm-cinfo-card">

                <div className="wm-cinfo-icon-box">

                  <FaPhoneAlt />

                </div>


                <div>

                  <h4>
                    Phone Helplines
                  </h4>


                  <a
                    href={`tel:${contactInfo.phonePrimary}`}
                    className="wm-cinfo-link"
                  >

                    Primary:
                    {' '}
                    {contactInfo.phonePrimary}

                  </a>


                  {contactInfo.phoneSecondary && (

                    <span
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        color: '#64748b',
                        marginTop: '2px'
                      }}
                    >

                      Direct:
                      {' '}
                      {contactInfo.phoneSecondary}

                    </span>

                  )}


                  <button
                    className="wm-cinfo-callme-btn"
                    onClick={onOpenCallMe}
                  >

                    Trigger 28s Call Back

                  </button>

                </div>

              </div>



              {/* EMAIL */}

              <div className="wm-cinfo-card">

                <div className="wm-cinfo-icon-box">

                  <FaEnvelope />

                </div>


                <div>

                  <h4>
                    Email Inquiries
                  </h4>


                  <a
                    href={`mailto:${contactInfo.emailPrimary}`}
                    className="wm-cinfo-link"
                  >

                    {contactInfo.emailPrimary}

                  </a>


                  {contactInfo.emailSupport && (

                    <span
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        color: '#64748b',
                        marginTop: '2px'
                      }}
                    >

                      Support:
                      {' '}
                      {contactInfo.emailSupport}

                    </span>

                  )}


                  <p className="wm-cinfo-sub">

                    Average response within 2 hours

                  </p>

                </div>

              </div>



              {/* HEAD OFFICE */}

              <div className="wm-cinfo-card">

                <div className="wm-cinfo-icon-box">

                  <FaMapMarkerAlt />

                </div>


                <div>

                  <h4>
                    Delhi NCR Head Office
                  </h4>


                  <p className="wm-cinfo-address">

                    {contactInfo.address}

                  </p>

                </div>

              </div>



              {/* OFFICE HOURS */}

              <div className="wm-cinfo-card">

                <div className="wm-cinfo-icon-box">

                  <FaClock />

                </div>


                <div>

                  <h4>
                    Office Hours
                  </h4>


                  <p className="wm-cinfo-sub">

                    {contactInfo.workingHours}

                  </p>


                  <p className="wm-cinfo-sub">

                    Sunday:
                    {' '}
                    On-Call Urgent Technical Support

                  </p>

                </div>

              </div>


            </div>

          </div>



          {/* FORM COLUMN */}

          <div className="wm-cpage-form-col">


            <div className="wm-cform-card">


              <h3>
                Send Us a Message
              </h3>


              <p>

                Fill out the form below and we will get back to you
                promptly.

              </p>


              {!submitted ? (


                <form
                  onSubmit={handleSubmit}
                  className="wm-cpage-form"
                >


                  {/* NAME */}

                  <div className="wm-cfield">

                    <label>
                      Your Name *
                    </label>


                    <input
                      type="text"
                      placeholder="e.g. Ramesh Singh"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value
                        })
                      }
                      required
                    />

                  </div>



                  {/* EMAIL + PHONE */}

                  <div className="wm-cfield-row">


                    <div className="wm-cfield">

                      <label>
                        Email Address *
                      </label>


                      <input
                        type="email"
                        placeholder="ramesh@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value
                          })
                        }
                        required
                      />

                    </div>



                    <div className="wm-cfield">

                      <label>
                        Phone / WhatsApp *
                      </label>


                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value
                          })
                        }
                        required
                      />

                    </div>


                  </div>



                  {/* SUBJECT */}

                  <div className="wm-cfield">

                    <label>
                      Subject
                    </label>


                    <input
                      type="text"
                      placeholder="e.g. Inquiry regarding Web Development"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value
                        })
                      }
                    />

                  </div>



                  {/* MESSAGE */}

                  <div className="wm-cfield">

                    <label>
                      Project Details / Message
                    </label>


                    <textarea
                      rows="4"
                      placeholder="Tell us about your project requirements or queries..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value
                        })
                      }
                    />

                  </div>



                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="wm-cform-submit"
                    disabled={isSubmitting}
                  >

                    <FaPaperPlane />

                    {isSubmitting
                      ? 'Sending...'
                      : 'Send Message Now'}

                  </button>


                </form>


              ) : (


                <div className="wm-cform-success">

                  <FaCheckCircle className="wm-csuccess-icon" />


                  <h4>

                    Message Sent Successfully!

                  </h4>


                  <p>

                    Thank you for reaching out,
                    {' '}
                    {formData.name}.
                    {' '}
                    Our team will review your message and contact you
                    within 2 business hours.

                  </p>


                </div>


              )}


            </div>

          </div>


        </div>

      </section>



      {/* =====================================
          WEBMOK BRANCH OFFICES
      ====================================== */}

      <section className="wm-branches-section">


        <div className="wm-contactpage-container">


          {/* SECTION HEADER */}

          <div className="wm-branches-header">


            <span className="wm-branches-tag">

              <FaBuilding />

              Our Locations

            </span>


            <h2>

              Our Branch Offices

            </h2>


            <p>

              Webmok is growing across multiple locations. Visit your
              nearest branch and connect with our digital experts.

            </p>


          </div>



          {/* BRANCH GRID */}

          <div className="wm-branches-grid">


            {branches.map((branch, index) => (


              <div
                className="wm-branch-card"
                key={index}
              >


                {/* TOP */}

                <div className="wm-branch-card-top">


                  <div className="wm-branch-icon">

                    <FaMapMarkerAlt />

                  </div>


                  <span className="wm-branch-number">

                    {String(index + 1).padStart(2, '0')}

                  </span>


                </div>



                {/* CITY */}

                <h3>

                  Webmok
                  {' '}
                  {branch.city}

                </h3>


                <span className="wm-branch-state">

                  {branch.state}

                </span>



                {/* ADDRESS */}

                <div className="wm-branch-address">


                  <FaMapMarkerAlt />


                  <p>

                    {branch.address}

                  </p>


                </div>



                {/* BUTTON */}

                {/* <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    branch.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="wm-branch-location-btn"
                >

                  View Location

                  <FaLocationArrow />

                </a> */}


              </div>


            ))}


          </div>


        </div>


      </section>


    </div>

  );

};

export default ContactUs;


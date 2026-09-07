import React from 'react';
import {
  FaAward,
  FaChartLine,
  FaBullseye,
  FaTrophy,
  FaUsers,
  FaUserTie,
  FaSearch,
  FaGlobeAmericas,
  FaDesktop,
  FaMoneyBillWave,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

import './WhyChooseUsPage.css';

const WhyChooseUsPage = ({ onOpenEnquiry, onOpenCallMe }) => {

  const features = [
    {
      icon: <FaAward />,
      title: '14+ Years of Experience in SEO',
      text: 'Proven experience helping businesses improve their online visibility and organic growth.'
    },
    {
      icon: <FaTrophy />,
      title: 'Award-Winning & Top-Ranked SEO Agency',
      text: 'Recognized for delivering quality strategies and measurable digital marketing results.'
    },
    {
      icon: <FaChartLine />,
      title: '1,000+ SEO Projects Completed',
      text: 'Successfully delivered SEO campaigns for businesses across multiple industries.'
    },
    {
      icon: <FaBullseye />,
      title: '98% Job Success Score',
      text: 'Focused on quality work, client satisfaction and long-term business partnerships.'
    },
    {
      icon: <FaAward />,
      title: 'Top Rated Plus Professionals',
      text: 'Experienced professionals delivering reliable and performance-driven SEO solutions.'
    },
    {
      icon: <FaUsers />,
      title: 'Experienced Team of 25+ SEO Professionals',
      text: 'A dedicated team of specialists working together to grow your digital presence.'
    },
    {
      icon: <FaUserTie />,
      title: 'Dedicated Project Managers',
      text: 'Get a dedicated point of contact for smooth communication and project updates.'
    },
    {
      icon: <FaSearch />,
      title: 'Advanced SEO Tools & Data-Driven Execution',
      text: 'We use modern tools, research and analytics to build smarter SEO strategies.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'White-Hat SEO & Full Transparency',
      text: 'Ethical SEO practices with clear reporting and complete campaign transparency.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Worldwide Client Experience',
      text: 'Helping businesses across different markets build stronger online visibility.'
    },
    {
      icon: <FaDesktop />,
      title: 'Competitor SEO & KPI Monitoring',
      text: 'Track competitors and important performance metrics to improve your strategy.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Affordable, Competitive & ROI-Focused Pricing',
      text: 'Flexible SEO solutions designed to deliver maximum value for your investment.'
    }
  ];


  return (

    <main className="wm-why-page">


      {/* =========================================
          HERO SECTION
      ========================================== */}

      <section className="wm-why-hero">

        <div className="wm-why-hero-shape shape-one"></div>
        <div className="wm-why-hero-shape shape-two"></div>

        <div className="wm-why-container">

          <div className="wm-why-hero-grid">


            {/* LEFT */}

            <div className="wm-why-hero-content">

              <div className="wm-why-badge">
                <span></span>
                WHY CHOOSE WEB MOK
              </div>


              <h1>
                Why Businesses
                <span> Choose Web Mok </span>
                for SEO Success
              </h1>


              <p>
                We combine strategy, technology and data-driven SEO
                solutions to help businesses increase visibility,
                attract quality traffic and achieve sustainable growth.
              </p>


              <div className="wm-why-hero-buttons">

                <button
                  className="wm-why-primary-btn"
                  onClick={() =>
                    onOpenEnquiry &&
                    onOpenEnquiry('SEO Consultation')
                  }
                >
                  Get Free Consultation

                  <FaArrowRight />

                </button>


                <button
                  className="wm-why-secondary-btn"
                  onClick={onOpenCallMe}
                >
                  Talk to an Expert
                </button>

              </div>


              {/* TRUST */}

              <div className="wm-why-trust-row">

                <div>
                  <strong>14+</strong>
                  <span>Years Experience</span>
                </div>


                <div>
                  <strong>1000+</strong>
                  <span>Projects Completed</span>
                </div>


                <div>
                  <strong>98%</strong>
                  <span>Success Score</span>
                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="wm-why-hero-visual">

              <div className="wm-why-dashboard">


                <div className="wm-dashboard-top">

                  <span className="wm-dot red"></span>
                  <span className="wm-dot yellow"></span>
                  <span className="wm-dot green"></span>

                  <span className="wm-dashboard-title">
                    SEO PERFORMANCE
                  </span>

                </div>


                <div className="wm-dashboard-body">


                  <div className="wm-performance-cards">

                    <div className="wm-performance-card">

                      <div className="wm-performance-icon">
                        <FaChartLine />
                      </div>

                      <div>
                        <span>Organic Growth</span>
                        <strong>+184%</strong>
                      </div>

                    </div>


                    <div className="wm-performance-card">

                      <div className="wm-performance-icon green">
                        <FaBullseye />
                      </div>

                      <div>
                        <span>SEO Score</span>
                        <strong>98/100</strong>
                      </div>

                    </div>

                  </div>


                  {/* GRAPH */}

                  <div className="wm-growth-chart">

                    <div className="wm-chart-header">

                      <span>Growth Overview</span>

                      <strong>Last 12 Months</strong>

                    </div>


                    <div className="wm-chart-bars">

                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  </div>


                  {/* BOTTOM */}

                  <div className="wm-dashboard-bottom">

                    <div>

                      <span>Traffic</span>

                      <strong>42.8K</strong>

                    </div>


                    <div>

                      <span>Keywords</span>

                      <strong>2,450</strong>

                    </div>


                    <div>

                      <span>Conversions</span>

                      <strong>+68%</strong>

                    </div>

                  </div>

                </div>

              </div>


              {/* FLOATING CARD */}

              <div className="wm-floating-result-card">

                <div className="wm-floating-check">
                  <FaCheckCircle />
                </div>

                <div>

                  <strong>SEO Optimized</strong>

                  <span>Performance Improved</span>

                </div>

              </div>


              <div className="wm-floating-score">

                <span>SEO</span>

                <strong>98</strong>

              </div>

            </div>


          </div>

        </div>

      </section>



      {/* =========================================
          FEATURES SECTION
      ========================================== */}

      <section className="wm-why-features">

        <div className="wm-why-container">


          {/* HEADING */}

          <div className="wm-why-section-heading">

            <span>
              OUR ADVANTAGES
            </span>

            <h2>
              Why Web Mok is Built for
              <em> SEO Success</em>
            </h2>

            <p>
              Everything you need from a modern SEO and digital
              growth partner — strategy, experience, technology
              and measurable results.
            </p>

          </div>


          {/* GRID */}

          <div className="wm-why-features-grid">

            {features.map((feature, index) => (

              <article
                className="wm-why-feature-card"
                key={index}
              >

                <div className="wm-why-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>


                <div className="wm-why-feature-icon">
                  {feature.icon}
                </div>


                <h3>
                  {feature.title}
                </h3>


                <p>
                  {feature.text}
                </p>


                <div className="wm-why-card-line"></div>

              </article>

            ))}

          </div>


          {/* BOTTOM CTA */}

          <div className="wm-why-bottom-cta">

            <div>

              <span>
                READY TO GROW?
              </span>

              <h2>
                Let's Build Your SEO Success Story
              </h2>

              <p>
                Get a personalized SEO strategy designed around
                your business goals.
              </p>

            </div>


            <button
              onClick={() =>
                onOpenEnquiry &&
                onOpenEnquiry('SEO Growth Strategy')
              }
            >
              Start Your Growth Journey

              <FaArrowRight />

            </button>

          </div>


        </div>

      </section>


    </main>

  );

};

export default WhyChooseUsPage;
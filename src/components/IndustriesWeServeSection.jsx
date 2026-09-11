import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import './IndustriesWeServeSection.css';

const IndustriesWeServeSection = ({ onOpenEnquiry, isStandalone = false }) => {
  const [activeIndustryId, setActiveIndustryId] = useState('fitness');

  const activeIndustry = industriesData.find((i) => i.id === activeIndustryId) || industriesData[0];

  return (
    <section className={`wm-industries-section ${isStandalone ? 'wm-industries-standalone' : ''}`} id="industries-we-serve">
      <div className="wm-industries-container">
        {/* Section Header matching Image 3/4 */}
        <div className="wm-industries-header">
          <h2 className="wm-industries-title">
            <span className="wm-industries-orange">Industries</span> We Serve
          </h2>
          {/* <p className="wm-industries-subtitle">
            We serve and work with a wide range of industries. Over the years, we at Webmok have expanded our work profile, taking in various different businesses and helping them to scale up in this dynamic digital world.
          </p> */}
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="wm-industries-layout">
          {/* Left Column: Vertical Industry Tabs List */}
          <div className="wm-industries-sidebar">
            <ul className="wm-industries-nav-list" role="tablist">
              {industriesData.map((item) => {
                const isActive = item.id === activeIndustryId;
                return (
                  <li key={item.id} className="wm-industries-nav-item">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`wm-industries-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveIndustryId(item.id)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Display Card for Selected Industry */}
          <div className="wm-industries-display-col">
            <div key={activeIndustry.id} className={`wm-industries-card wm-ind-card-${activeIndustry.id} wm-industries-card-anim`}>
              <div className="wm-industries-card-content">
                <h3 className="wm-industries-card-title">{activeIndustry.name}</h3>
                <p className="wm-industries-card-desc">{activeIndustry.desc}</p>

                <ul className="wm-industries-points-list">
                  {activeIndustry.points.map((point, pIdx) => (
                    <li key={pIdx} className="wm-industries-point-item">
                      <span className="wm-industries-diamond">◆</span>
                      <span className="wm-industries-point-text">{point}</span>
                    </li>
                  ))}
                </ul>

                {onOpenEnquiry && (
                  <button
                    type="button"
                    className="wm-industries-inquire-btn"
                    onClick={() => onOpenEnquiry(`Inquiry for ${activeIndustry.title} Solutions`)}
                  >
                    Discuss {activeIndustry.name} Project →
                  </button>
                )}
              </div>

              {/* Bottom Right Illustration / Themed Icon */}
              <div className="wm-industries-icon-watermark" aria-hidden="true">
                {activeIndustry.icon}
              </div>
            </div>

            {/* Bottom Subtle Bar (as seen in reference screenshot) */}
            <div className="wm-industries-bottom-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServeSection;

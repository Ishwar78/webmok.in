import React, { useState, useEffect } from 'react';
import {
  FaPlay,
  FaPhoneAlt,
  FaTimes,
  FaGraduationCap,
  FaStar,
  FaAward,
  FaCheckCircle,
  FaPaperPlane
} from 'react-icons/fa';
import './VideoReviews.css';
import { resolveMediaUrl } from '../../utils/mediaUrl';

const studentVideos = [
  {
    id: 'vid-1',
    studentName: 'Aman Verma',
    course: 'Advanced Digital Marketing with AI',
    videoUrl: '/hh2-CH6clGIc.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-2',
    studentName: 'Deepak Sharma',
    course: 'Full-Stack Performance Marketing & SEO',
    videoUrl: '/hh3-CAsds3iE.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-3',
    studentName: 'Rohan Malik',
    course: 'AI Content Strategy & Social Media Growth',
    videoUrl: '/hh4-a6dUAa-8.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-4',
    studentName: 'Priya Saini',
    course: 'E-commerce Ads & Conversion Rate Mastery',
    videoUrl: '/TM0011-CnXlWYx0.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-5',
    studentName: 'Sahil Hooda',
    course: 'Google Search Ads & Analytics Intelligence',
    videoUrl: '/TM0016-CLpL79Mu.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-6',
    studentName: 'Nitin Kumar',
    course: 'Meta Performance Ads & Funnel Architecture',
    videoUrl: '/TM004-ypZUa7vp.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-7',
    studentName: 'Anjali Tanwar',
    course: 'Lead Generation & Brand Positioning AI',
    videoUrl: '/WhatsApp Video 2026-07-01 at 5.54.13 PM-BCNnVdW3.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  },
  {
    id: 'vid-8',
    studentName: 'Vikas Dahiya',
    course: 'Corporate Digital Marketing & Web Strategy',
    videoUrl: '/Home-Hero.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5
  }
];

const VideoReviews = ({ onOpenEnquiry }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState(studentVideos);

  useEffect(() => {
    fetch('http://localhost:5005/api/video-reviews')
      .then(res => res.json())
      .then(json => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setVideos(json.data);
        }
      })
      .catch(err => {
        console.warn('Notice: Video reviews live API offline, using defaults:', err.message);
      });
  }, []);

  const handleOpenVideo = (video) => {
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="wm-vr-page-root">
      {/* Hero Header */}
      <section className="wm-vr-hero">
        <div className="wm-vr-container">
          <span className="wm-vr-badge-pill">
            <FaGraduationCap /> Real Student Success Stories
          </span>
          <h1 className="wm-vr-title">
            Student Video Reviews &amp; Testimonials
          </h1>
          <p className="wm-vr-subtitle">
            Hear directly from our ambitious learners and career changers who mastered Advanced Digital Marketing with AI at Web Mok. Real stories, verified placement journeys, and authentic feedback.
          </p>
          <div className="wm-vr-stats-bar">
            <div className="wm-vr-stat-item">
              <span className="wm-vr-stat-num">500+</span>
              <span className="wm-vr-stat-lbl">Trained Learners</span>
            </div>
            <div className="wm-vr-stat-divider" />
            <div className="wm-vr-stat-item">
              <span className="wm-vr-stat-num">98.4%</span>
              <span className="wm-vr-stat-lbl">Career Placement</span>
            </div>
            <div className="wm-vr-stat-divider" />
            <div className="wm-vr-stat-item">
              <span className="wm-vr-stat-num">4.9 / 5</span>
              <span className="wm-vr-stat-lbl">Verified Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Card Video Reviews Grid (Matching User Reference media_1788951235872.jpg) */}
      <section className="wm-vr-grid-section">
        <div className="wm-vr-container">
          <div className="wm-vr-cards-grid">
            {videos.map((item, idx) => (
              <div
                key={item._id || item.id || idx}
                className="wm-vr-card"
                onClick={() => handleOpenVideo(item)}
              >
                {/* Background Video Frame / Preview */}
                <div className="wm-vr-video-wrapper">
                  <video
                    src={resolveMediaUrl(item.videoUrl)}
                    preload="metadata"
                    muted
                    playsInline
                    className="wm-vr-bg-video"
                  />
                  <div className="wm-vr-card-overlay" />
                </div>

                {/* Top Bar Header */}
                <div className="wm-vr-card-topbar">
                  <span className="wm-vr-top-tag">{item.tag}</span>
                  <div className="wm-vr-top-brand">
                    <span className="wm-vr-brand-text">Web Mok</span>
                    <small className="wm-vr-brand-sub">Development Marketing Agency</small>
                  </div>
                </div>

                {/* Center Action: Student Testimonial Badge & Play Button */}
                <div className="wm-vr-center-action">
                  <div className="wm-vr-student-pill">
                    Student Testimonial
                  </div>
                  <button
                    type="button"
                    className="wm-vr-play-circle"
                    aria-label="Play video review"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenVideo(item);
                    }}
                  >
                    <FaPlay className="wm-vr-play-icon" />
                  </button>
                </div>

                {/* Lower Dark Info Banner */}
                <div className="wm-vr-lower-banner">
                  <span className="wm-vr-lb-line1">Advanced Digital Marketing</span>
                  <span className="wm-vr-lb-line2">With Ai Training Company</span>
                  <a
                    href="tel:8684031003"
                    className="wm-vr-lb-call"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaPhoneAlt className="wm-vr-phone-icon" /> Call Now - 8684031003
                  </a>
                </div>

                {/* Bottom Footer Info */}
                <div className="wm-vr-card-footer">
                  <div className="wm-vr-footer-left">
                    <strong className="wm-vr-footer-title">Student Review</strong>
                    <span className="wm-vr-footer-sub">Web Mok · Experience</span>
                  </div>
                  <div className="wm-vr-footer-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="wm-vr-star" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Enrollment CTA Section */}
      <section className="wm-vr-cta-section">
        <div className="wm-vr-container">
          <div className="wm-vr-cta-box">
            <div className="wm-vr-cta-text">
              <h2>Ready to Fast-Track Your Career in Digital Marketing & AI?</h2>
              <p>
                Get live interactive training from industry veterans with 100% placement support, real client projects, and recognized industry certifications.
              </p>
            </div>
            <div className="wm-vr-cta-actions">
              <a href="tel:8684031003" className="wm-vr-btn-call">
                <FaPhoneAlt /> Call 8684031003
              </a>
              <button
                type="button"
                className="wm-vr-btn-enquiry"
                onClick={onOpenEnquiry}
              >
                Enroll For Free Demo Class
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Playback Modal */}
      {activeVideo && (
        <div className="wm-vr-modal-overlay" onClick={handleCloseVideo}>
          <div className="wm-vr-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="wm-vr-modal-header">
              <div>
                <span className="wm-vr-modal-tag">{activeVideo.tag}</span>
                <h3>{activeVideo.studentName} · Student Review</h3>
                <p>{activeVideo.course}</p>
              </div>
              <button
                type="button"
                className="wm-vr-modal-close"
                onClick={handleCloseVideo}
                aria-label="Close video"
              >
                <FaTimes />
              </button>
            </div>
            <div className="wm-vr-modal-player">
              <video
                src={resolveMediaUrl(activeVideo.videoUrl)}
                controls
                autoPlay
                playsInline
                className="wm-vr-full-video"
              />
            </div>
            <div className="wm-vr-modal-footer">
              <div className="wm-vr-mf-info">
                <span><FaCheckCircle style={{ color: '#10b981', marginRight: '6px' }} /> Verified Student of Web Mok</span>
                <span style={{ color: '#64748b' }}>• {activeVideo.batch}</span>
              </div>
              <a href="tel:8684031003" className="wm-vr-mf-call">
                <FaPhoneAlt /> Talk to Counselor
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReviews;

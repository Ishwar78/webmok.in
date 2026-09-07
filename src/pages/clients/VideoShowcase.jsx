import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPlay,
  FaTimes,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaVideo,
  FaFilm,
  FaCube,
  FaBroadcastTower,
  FaEye,
  FaClock,
  FaLightbulb,
  FaPenNib,
  FaVolumeUp,
  FaCheckCircle
} from 'react-icons/fa';
import './VideoShowcase.css';

const VideoShowcase = ({ onOpenCallMe, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  // Video data declared directly inside this page
  const videoProjects = [
    {
      id: 'roto-solar-corporate-film',
      title: 'Roto Rudra Solar Tech Corporate Brand Film',
      category: 'corporate',
      categoryName: 'Corporate Films',
      client: 'Roto Rudra Solar Tech',
      duration: '2:45 min',
      views: '120K+ Views',
      thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Clean preview embed
      description: 'High-production cinematic corporate film documenting modern solar pump manufacturing, farmer testimonials, and renewable green energy.'
    },
    {
      id: 'horizon-fintech-explainer',
      title: 'Horizon Swift 2D Animated Explainer Video',
      category: 'explainer',
      categoryName: '2D & Motion Graphics',
      client: 'Horizon Pay Swift UK',
      duration: '1:30 min',
      views: '85K+ Views',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Engaging character animation and fluid kinetic typography explaining cross-border money transfer and multi-currency virtual accounts.'
    },
    {
      id: 'grooming-product-3d-render',
      title: 'Precision Trimmer 3D CGI Product Launch',
      category: '3d',
      categoryName: '3D Product Demos',
      client: 'Ultimate Bro Grooming',
      duration: '0:45 min',
      views: '450K+ Views',
      thumbnail: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Hyper-realistic 3D CGI rotation showing titanium blade engineering, waterproof housing seals, and fast magnetic charging dock.'
    },
    {
      id: 'luxecart-instagram-reels-series',
      title: 'LuxeCart Fashion Trends Viral Reels Series',
      category: 'reels',
      categoryName: 'Social Media Reels',
      client: 'LuxeCart Essentials',
      duration: '0:30 min',
      views: '1.2M+ Views',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Fast-paced rhythmic fashion reels featuring transition choreography, audio beat matching, and direct shop-the-look overlays.'
    },
    {
      id: 'medicare-patient-journey-film',
      title: 'MediCare Robotic Surgery Patient Story',
      category: 'corporate',
      categoryName: 'Corporate Films',
      client: 'MediCare Superspecialty',
      duration: '3:15 min',
      views: '65K+ Views',
      thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Emotional documentary-style storytelling showcasing life-saving robotic knee replacement surgery and patient recovery milestones.'
    },
    {
      id: 'edura-platform-walkthrough',
      title: 'Edura Global Interactive LMS Walkthrough',
      category: 'explainer',
      categoryName: '2D & Motion Graphics',
      client: 'Edura Academy',
      duration: '2:10 min',
      views: '95K+ Views',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Sleek screen-recorded micro-interactions with stylized motion design showing seamless online classroom and mock exam features.'
    }
  ];

  // Video Reels for Dual-Column Up/Down Auto-Scrolling Marquee (Image 3 style)
  const videoMarqueeCol1 = [
    {
      id: 'vm-1',
      title: 'Roto Rudra Corporate Film',
      tag: 'Corporate Film',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'vm-2',
      title: 'Bon Vie 3D CGI Can Explosion',
      tag: '3D CGI Animation',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'vm-3',
      title: 'Horizon Swift 2D Explainer',
      tag: 'Motion Graphics',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'vm-4',
      title: 'UrbanStyle Monsoon Reels',
      tag: 'Social Reels',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80'
    }
  ];

  const videoMarqueeCol2 = [
    {
      id: 'vm-5',
      title: 'Skylight Virtual Walkthrough',
      tag: '3D Architecture',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'vm-6',
      title: 'MediCare Robotic Surgery',
      tag: 'Documentary',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'vm-7',
      title: 'Edura LMS Walkthrough',
      tag: 'Product Explainer',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80'
    },
    {
      id: 'vm-8',
      title: 'Vega Grooming Campaign Reel',
      tag: 'Broadcast Commercial',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=80'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'corporate', label: 'Corporate Films' },
    { id: 'explainer', label: '2D Motion & Explainers' },
    { id: '3d', label: '3D CGI Product Renders' },
    { id: 'reels', label: 'Social Reels & Shorts' }
  ];

  const filteredVideos = activeCategory === 'all'
    ? videoProjects
    : videoProjects.filter(v => v.category === activeCategory);

  return (
    <div className="wm-video-page-root">
      {/* 1. CINEMATIC HERO SECTION (MATCHING IMAGE 3) */}
      <section className="wm-video-hero">
        <div className="wm-video-hero-glow"></div>
        <div className="wm-video-container">
          <div className="wm-vhero-grid">
            <div className="wm-vhero-left">
              <div className="wm-vhero-topbadge">
                <span className="wm-vhero-pill">
                  <FaVideo /> Video Production &amp; Motion Studio
                </span>
              </div>

              <h1 className="wm-vhero-title">
                Cinematic Video Production &amp; <span className="wm-vgradient-cyan">Motion Design</span>
              </h1>

              <p className="wm-vhero-desc">
                We produce broadcast-quality corporate brand films, high-converting 3D CGI product animations, 2D motion graphic explainers, and viral social reels that capture attention and drive revenue.
              </p>

              <div className="wm-vhero-actions">
                <button className="wm-vhero-btn-primary" onClick={onOpenEnquiry}>
                  Request Video Scope <FaArrowRight />
                </button>
                <button className="wm-vhero-btn-call" onClick={onOpenCallMe}>
                  <FaPhoneAlt /> Call in 28 Sec
                </button>
              </div>
            </div>

            {/* Right Column: 3D Angled Vertical Dual-Column Marquee */}
            <div className="wm-video-hero-right">
              <div className="wm-vhero-marquee-perspective">
                {/* Column 1: Scrolls UP */}
                <div className="wm-vmarquee-col wm-col-scroll-up">
                  <div className="wm-vmarquee-track-up">
                    {[...videoMarqueeCol1, ...videoMarqueeCol1].map((item, idx) => (
                      <div key={`v1-${item.id}-${idx}`} className="wm-vmarquee-card">
                        <img src={item.image} alt={item.title} className="wm-vmcard-img" />
                        <div className="wm-vmcard-overlay">
                          <span className="wm-vmcard-tag">{item.tag}</span>
                          <h4 className="wm-vmcard-title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Scrolls DOWN */}
                <div className="wm-vmarquee-col wm-col-scroll-down">
                  <div className="wm-vmarquee-track-down">
                    {[...videoMarqueeCol2, ...videoMarqueeCol2].map((item, idx) => (
                      <div key={`v2-${item.id}-${idx}`} className="wm-vmarquee-card">
                        <img src={item.image} alt={item.title} className="wm-vmcard-img" />
                        <div className="wm-vmcard-overlay">
                          <span className="wm-vmcard-tag">{item.tag}</span>
                          <h4 className="wm-vmcard-title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edge Gradient Fades */}
              <div className="wm-vhero-top-fade"></div>
              <div className="wm-vhero-bottom-fade"></div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Strip */}
        <div className="wm-vhero-bottom-strip">
          <div className="wm-video-container wm-vstrip-flex">
            <div className="wm-vstrip-links">
              <Link to="/our-clients" className="wm-vstrip-link">Clients</Link>
              <span className="wm-vstrip-sep">|</span>
              <Link to="/video-showcase" className="wm-vstrip-link active">Video Showcase</Link>
              <span className="wm-vstrip-sep">|</span>
              <a
                href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20Video%20Production%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="wm-vstrip-link wm-vstrip-wa"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>

            <div className="wm-vstrip-badge">
              <span>Award-Winning Video Production Studio</span>
              <span className="wm-vstrip-sep">|</span>
              <span className="wm-vstrip-stars">
                Google 500+ ★★★★★
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="wm-video-stats-sec">
        <div className="wm-video-container">
          <div className="wm-vstats-grid">
            <div className="wm-vstat-box">
              <strong>350+</strong>
              <span>Brand Videos Produced</span>
            </div>
            <div className="wm-vstat-box">
              <strong>25M+</strong>
              <span>Combined Video Views</span>
            </div>
            <div className="wm-vstat-box">
              <strong>4K / 8K</strong>
              <span>Ultra-HD Master Quality</span>
            </div>
            <div className="wm-vstat-box">
              <strong>100%</strong>
              <span>Custom Voiceover &amp; Sound</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIDEO PORTFOLIO & CATEGORY TABS */}
      <section className="wm-vportfolio-sec">
        <div className="wm-video-container">
          <div className="wm-vport-hdr">
            <span className="wm-vport-sub">Showcase Gallery</span>
            <h2 className="wm-vport-title">Featured Films, CGI Renders &amp; Explainers</h2>
            <div className="wm-vport-bar"></div>
            <p className="wm-vport-desc">
              Explore our diverse video productions engineered for brands across industrial manufacturing, healthcare, fintech, and consumer lifestyle.
            </p>

            {/* Filter Tabs */}
            <div className="wm-vport-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`wm-vtab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="wm-vgrid">
            {filteredVideos.map(video => (
              <div key={video.id} className="wm-vcard">
                <div className="wm-vcard-thumb-wrap" onClick={() => setActiveVideo(video)}>
                  <img src={video.thumbnail} alt={video.title} className="wm-vcard-thumb" />
                  <div className="wm-vcard-play-btn">
                    <FaPlay />
                  </div>
                  <span className="wm-vcard-cat-badge">{video.categoryName}</span>
                  <div className="wm-vcard-meta-bar">
                    <span><FaClock /> {video.duration}</span>
                    <span><FaEye /> {video.views}</span>
                  </div>
                </div>

                <div className="wm-vcard-body">
                  <span className="wm-vcard-client">{video.client}</span>
                  <h3 className="wm-vcard-title">{video.title}</h3>
                  <p className="wm-vcard-desc">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION PROCESS SPRINTS */}
      <section className="wm-vprocess-sec">
        <div className="wm-video-container">
          <div className="wm-vport-hdr">
            <span className="wm-vport-sub" style={{ color: '#00d4ff' }}>Production Workflow</span>
            <h2 className="wm-vport-title" style={{ color: '#ffffff' }}>Our 5-Stage Video Production Blueprint</h2>
            <div className="wm-vport-bar"></div>
          </div>

          <div className="wm-vprocess-grid">
            <div className="wm-vpstep-card">
              <div className="wm-vpstep-icon"><FaLightbulb /></div>
              <span className="wm-vpstep-num">01</span>
              <h4>Concept &amp; Scriptwriting</h4>
              <p>We craft engaging storytelling hooks, persuasive voiceover scripts, and scene-by-scene timing beats.</p>
            </div>

            <div className="wm-vpstep-card">
              <div className="wm-vpstep-icon"><FaPenNib /></div>
              <span className="wm-vpstep-num">02</span>
              <h4>Storyboarding &amp; Style Frames</h4>
              <p>Visual scene sketches, vector color palettes, and cinematic camera angle framing approved prior to shoot.</p>
            </div>

            <div className="wm-vpstep-card">
              <div className="wm-vpstep-icon"><FaFilm /></div>
              <span className="wm-vpstep-num">03</span>
              <h4>Filming &amp; 3D Animation</h4>
              <p>High-end 4K RED/Sony cinema cameras, drone aerials, or Maya/Blender 3D physics simulations.</p>
            </div>

            <div className="wm-vpstep-card">
              <div className="wm-vpstep-icon"><FaVolumeUp /></div>
              <span className="wm-vpstep-num">04</span>
              <h4>Voiceover &amp; Sound Engineering</h4>
              <p>Studio-recorded native voiceover artists, original sound effects (SFX), and licensed orchestral music tracks.</p>
            </div>

            <div className="wm-vpstep-card">
              <div className="wm-vpstep-icon"><FaCheckCircle /></div>
              <span className="wm-vpstep-num">05</span>
              <h4>Color Grading &amp; Delivery</h4>
              <p>Davinci Resolve color grading, multi-aspect ratio renders for YouTube (16:9), Instagram (9:16), and TV broadcast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX VIDEO PLAYER MODAL */}
      {activeVideo && (
        <div className="wm-vmodal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="wm-vmodal-box" onClick={e => e.stopPropagation()}>
            <button className="wm-vmodal-close" onClick={() => setActiveVideo(null)}>
              <FaTimes />
            </button>
            <div className="wm-vmodal-video-wrap">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="wm-vmodal-details">
              <h3>{activeVideo.title}</h3>
              <p><strong>Client:</strong> {activeVideo.client} | <strong>Category:</strong> {activeVideo.categoryName}</p>
              <p>{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* 6. BOTTOM CTA STRIP */}
      <section className="wm-vcta-sec">
        <div className="wm-video-container">
          <div className="wm-vcta-inner">
            <div>
              <h2>Ready to Bring Your Brand Story to Life?</h2>
              <p>Get an itemized video script and production timeline within 24 hours.</p>
            </div>
            <div className="wm-vcta-actions">
              <button className="wm-vcta-btn-primary" onClick={onOpenEnquiry}>
                Start Video Project <FaArrowRight />
              </button>
              <button className="wm-vcta-btn-call" onClick={onOpenCallMe}>
                <FaPhoneAlt /> Call Me in 28 Sec
              </button>
              <a
                href="https://wa.me/918684031003?text=Hi%20Webmok%20Team,%20I%20am%20interested%20in%20Video%20Production%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="wm-vcta-btn-wa"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;

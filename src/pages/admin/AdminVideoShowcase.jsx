import React, { useState, useEffect, useRef } from 'react';
import {
  FaFilm,
  FaPlay,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSave,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaUpload,
  FaYoutube,
  FaClock,
  FaEye,
  FaSearch
} from 'react-icons/fa';
import './AdminVideoShowcase.css';
import { resolveMediaUrl, handleImageError } from '../../utils/mediaUrl';

const API_BASE = 'http://localhost:5005/api';

const categories = [
  { id: 'corporate', name: 'Corporate Films' },
  { id: 'explainer', name: '2D & Motion Graphics' },
  { id: '3d', name: '3D Product Demos' },
  { id: 'reels', name: 'Social Media Reels' }
];

const defaultSeedProjects = [
  {
    title: 'Roto Rudra Solar Tech Corporate Brand Film',
    category: 'corporate',
    categoryName: 'Corporate Films',
    client: 'Roto Rudra Solar Tech',
    duration: '2:45 min',
    views: '120K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'High-production cinematic corporate film documenting modern solar pump manufacturing, farmer testimonials, and renewable green energy.',
    order: 1,
    isActive: true
  },
  {
    title: 'Horizon Swift 2D Animated Explainer Video',
    category: 'explainer',
    categoryName: '2D & Motion Graphics',
    client: 'Horizon Pay Swift UK',
    duration: '1:30 min',
    views: '85K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    description: 'Engaging character animation and fluid kinetic typography explaining cross-border money transfer and multi-currency virtual accounts.',
    order: 2,
    isActive: true
  }
];

const AdminVideoShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [videoMode, setVideoMode] = useState('youtube'); // 'youtube' | 'upload'
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const thumbInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const initialForm = {
    title: '',
    category: 'corporate',
    categoryName: 'Corporate Films',
    client: '',
    duration: '2:30 min',
    views: '100K+ Views',
    thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '',
    order: 1,
    isActive: true
  };

  const [formData, setFormData] = useState(initialForm);

  const triggerFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/video-showcase?all=true`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setProjects(json.data);
          return;
        }
      }
      setProjects(defaultSeedProjects);
    } catch (err) {
      console.warn('Backend video showcase offline, using defaults:', err.message);
      setProjects(defaultSeedProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      ...initialForm,
      order: projects.length + 1
    });
    setVideoMode('youtube');
    setThumbnailPreview('');
    setThumbnailFile(null);
    setVideoFile(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item._id || item.id);
    setFormData({
      title: item.title || '',
      category: item.category || 'corporate',
      categoryName: item.categoryName || 'Corporate Films',
      client: item.client || '',
      duration: item.duration || '2:30 min',
      views: item.views || '100K+ Views',
      thumbnail: item.thumbnail || '',
      videoUrl: item.videoUrl || '',
      description: item.description || '',
      order: item.order || 0,
      isActive: item.isActive !== undefined ? item.isActive : true
    });
    setVideoMode(item.videoType === 'upload' ? 'upload' : 'youtube');
    setThumbnailPreview(item.thumbnail || '');
    setThumbnailFile(null);
    setVideoFile(null);
    setIsModalOpen(true);
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    const found = categories.find(c => c.id === cat);
    setFormData({
      ...formData,
      category: cat,
      categoryName: found ? found.name : 'Featured Video'
    });
  };

  const handleThumbFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  // If YouTube link entered, auto-detect video ID and populate thumbnail if empty
  const handleYoutubeUrlChange = (url) => {
    setFormData(prev => ({ ...prev, videoUrl: url }));
    // Try extract YouTube ID
    const match = url.match(/(?:youtu\.be\/|watch\?v=|embed\/|shorts\/)([a-zA-Z0-9_-]+)/);
    if (match && match[1] && (!thumbnailPreview || thumbnailPreview.includes('unsplash'))) {
      const ytThumb = `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
      setThumbnailPreview(ytThumb);
      setFormData(prev => ({ ...prev, thumbnail: ytThumb }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      triggerFeedback('error', 'Video title is required!');
      return;
    }

    if (videoMode === 'upload' && !videoFile && !formData.videoUrl.trim()) {
      triggerFeedback('error', 'Please upload a video file!');
      return;
    }

    if (videoMode === 'youtube' && !formData.videoUrl.trim()) {
      triggerFeedback('error', 'Please enter a YouTube link or video URL!');
      return;
    }

    try {
      setSaving(true);
      const postData = new FormData();
      postData.append('title', formData.title);
      postData.append('category', formData.category);
      postData.append('categoryName', formData.categoryName);
      postData.append('client', formData.client);
      postData.append('duration', formData.duration);
      postData.append('views', formData.views);
      postData.append('description', formData.description);
      postData.append('order', formData.order);
      postData.append('isActive', formData.isActive);
      postData.append('videoType', videoMode);

      if (thumbnailFile) {
        postData.append('thumbnailFile', thumbnailFile);
      } else {
        postData.append('thumbnail', formData.thumbnail);
      }

      if (videoMode === 'upload' && videoFile) {
        postData.append('videoFile', videoFile);
      } else {
        postData.append('videoUrl', formData.videoUrl);
      }

      const url = editingId
        ? `${API_BASE}/video-showcase/${editingId}`
        : `${API_BASE}/video-showcase`;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: postData
      });

      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', editingId ? 'Showcase video updated successfully!' : 'Showcase video published successfully!');
        setIsModalOpen(false);
        fetchProjects();
      } else {
        triggerFeedback('error', json.message || 'Operation failed');
      }
    } catch (err) {
      console.error('Error saving video project:', err);
      triggerFeedback('error', 'Network error or upload failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete video "${title}"?`)) return;

    try {
      const res = await fetch(`${API_BASE}/video-showcase/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', 'Showcase video removed successfully!');
        setProjects(prev => prev.filter(p => (p._id || p.id) !== id));
      } else {
        triggerFeedback('error', json.message || 'Failed to delete');
      }
    } catch (err) {
      console.error('Error deleting:', err);
      triggerFeedback('error', 'Failed to delete video');
    }
  };

  const filteredProjects = projects.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const q = search.toLowerCase();
    return matchesCat && (!search ||
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.client && p.client.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)));
  });

  return (
    <div className="wm-adm-vshow-root">
      {/* Header */}
      <div className="wm-adm-header-row">
        <div>
          <span className="wm-adm-badge">FILMS, 3D ANIMATION &amp; SHOWREEL CMS</span>
          <h1 className="wm-adm-title">Video Showcase &amp; Commercials CMS</h1>
          <p className="wm-adm-subtitle">
            Upload commercial video productions, YouTube showreels, and CGI product demos featured on the public Video Showcase page.
          </p>
        </div>
        <button className="wm-adm-btn-primary" onClick={handleOpenAdd}>
          <FaPlus /> Add Showcase Video
        </button>
      </div>

      {/* Feedback Banner */}
      {feedback.message && (
        <div className={`wm-adm-feedback ${feedback.type}`}>
          {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Stats Ribbon */}
      <div className="wm-adm-stats-grid">
        <div className="wm-adm-stat-box">
          <strong>{projects.length}</strong>
          <span>Total Films</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>2.5M+</strong>
          <span>Aggregated Views</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>{projects.filter(p => p.isActive !== false).length}</strong>
          <span>Live on Site</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>4K RED / CGI</strong>
          <span>Production Standard</span>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="wm-adm-controls-bar">
        <div className="wm-adm-tabs">
          <button
            type="button"
            className={`wm-adm-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Productions ({projects.length})
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              type="button"
              className={`wm-adm-tab ${activeCategory === c.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.name} ({projects.filter(p => p.category === c.id).length})
            </button>
          ))}
        </div>

        <div className="wm-adm-search-wrap">
          <FaSearch className="wm-adm-search-icon" />
          <input
            type="text"
            placeholder="Search films by title or client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="wm-adm-search-input"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="wm-adm-loading-state">
          <FaSpinner className="wm-spinner-icon" />
          <p>Loading video showcase...</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="wm-adm-empty-state">
          <FaFilm className="wm-adm-empty-icon" />
          <h3>No Showcase Videos Found</h3>
          <p>Click "Add Showcase Video" to add your first commercial or reel.</p>
        </div>
      ) : (
        <div className="wm-adm-vshow-grid">
          {filteredProjects.map((item) => {
            const id = item._id || item.id;
            return (
              <div key={id} className={`wm-adm-vshow-card ${item.isActive === false ? 'inactive' : ''}`}>
                <div className="wm-adm-vshow-thumb-wrap">
                  <img
                    src={resolveMediaUrl(item.thumbnail)}
                    alt={item.title}
                    className="wm-adm-vshow-thumb"
                    onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80')}
                  />
                  <span className="wm-adm-vshow-badge">{item.categoryName}</span>
                  <div className="wm-adm-vshow-meta-bar">
                    <span><FaClock /> {item.duration}</span>
                    <span><FaEye /> {item.views}</span>
                  </div>
                </div>

                <div className="wm-adm-vshow-body">
                  <span className="wm-adm-vshow-client">{item.client || 'Featured Video'}</span>
                  <h3 className="wm-adm-vshow-title">{item.title}</h3>
                  <p className="wm-adm-vshow-desc">{item.description}</p>
                  <small className="wm-adm-vshow-type">
                    Source: {item.videoType === 'upload' ? 'Direct File Upload' : 'YouTube / Embed Link'}
                  </small>
                </div>

                <div className="wm-adm-rcard-actions">
                  <button
                    className="wm-adm-btn-edit"
                    onClick={() => handleOpenEdit(item)}
                    title="Edit Film"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="wm-adm-btn-delete"
                    onClick={() => handleDelete(id, item.title)}
                    title="Delete Film"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="wm-adm-modal-overlay" onClick={() => !saving && setIsModalOpen(false)}>
          <div className="wm-adm-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="wm-adm-modal-header">
              <h3>{editingId ? 'Edit Showcase Video' : 'Add Showcase Video'}</h3>
              <button
                className="wm-adm-modal-close"
                onClick={() => setIsModalOpen(false)}
                disabled={saving}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="wm-adm-form">
              <div className="wm-adm-form-group">
                <label>Video Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Roto Rudra Solar Tech Corporate Brand Film"
                />
              </div>

              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={handleCategoryChange}
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="wm-adm-form-group">
                  <label>Client Name</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    placeholder="e.g. Roto Rudra Solar Tech"
                  />
                </div>
              </div>

              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g. 2:45 min"
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Views Count</label>
                  <input
                    type="text"
                    value={formData.views}
                    onChange={(e) => setFormData({ ...formData, views: e.target.value })}
                    placeholder="e.g. 120K+ Views"
                  />
                </div>
              </div>

              {/* Video Source Switch */}
              <div className="wm-adm-form-group">
                <label>Video Delivery Source</label>
                <div className="wm-adm-source-switch">
                  <button
                    type="button"
                    className={`wm-adm-src-btn ${videoMode === 'youtube' ? 'active' : ''}`}
                    onClick={() => setVideoMode('youtube')}
                  >
                    <FaYoutube /> YouTube / Embed URL
                  </button>
                  <button
                    type="button"
                    className={`wm-adm-src-btn ${videoMode === 'upload' ? 'active' : ''}`}
                    onClick={() => setVideoMode('upload')}
                  >
                    <FaUpload /> Direct MP4 Video File Upload
                  </button>
                </div>
              </div>

              {videoMode === 'youtube' ? (
                <div className="wm-adm-form-group">
                  <label>YouTube / Video Link *</label>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=... or youtu.be/..."
                    value={formData.videoUrl}
                    onChange={(e) => handleYoutubeUrlChange(e.target.value)}
                  />
                  <small style={{ color: '#64748b' }}>
                    Paste regular YouTube video or Short link — system will automatically convert it into an embed frame.
                  </small>
                </div>
              ) : (
                <div className="wm-adm-form-group">
                  <label>Upload MP4 Video File *</label>
                  <div className="wm-adm-upload-box">
                    <button
                      type="button"
                      className="wm-adm-btn-upload"
                      onClick={() => videoInputRef.current && videoInputRef.current.click()}
                    >
                      <FaUpload /> Choose Video File
                    </button>
                    {videoFile && <span style={{ fontSize: '0.82rem', color: '#10b981' }}>{videoFile.name}</span>}
                    <input
                      ref={videoInputRef}
                      type="file"
                      accept="video/*"
                      style={{ display: 'none' }}
                      onChange={handleVideoFileChange}
                    />
                  </div>
                </div>
              )}

              {/* Custom Thumbnail */}
              <div className="wm-adm-form-group">
                <label>Video Poster Thumbnail</label>
                <div className="wm-adm-upload-box">
                  {thumbnailPreview ? (
                    <img
                      src={resolveMediaUrl(thumbnailPreview)}
                      alt="Thumb"
                      style={{ width: '80px', height: '50px', objectFit: 'cover', borderRadius: '6px' }}
                      onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80')}
                    />
                  ) : (
                    <div style={{ width: '80px', height: '50px', background: '#1e293b', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaFilm style={{ color: '#64748b' }} />
                    </div>
                  )}
                  <div className="wm-adm-upload-info">
                    <button
                      type="button"
                      className="wm-adm-btn-upload"
                      onClick={() => thumbInputRef.current && thumbInputRef.current.click()}
                    >
                      <FaUpload /> Upload Custom Thumbnail
                    </button>
                    <input
                      ref={thumbInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleThumbFileChange}
                    />
                    <small>Or enter image URL:</small>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={formData.thumbnail}
                      onChange={(e) => {
                        setFormData({ ...formData, thumbnail: e.target.value });
                        setThumbnailPreview(e.target.value);
                      }}
                      className="wm-adm-url-input"
                    />
                  </div>
                </div>
              </div>

              <div className="wm-adm-form-group">
                <label>Project Description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Cinematography techniques, camera gear, and story..."
                />
              </div>

              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Status</label>
                  <select
                    value={formData.isActive ? 'true' : 'false'}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'true' })}
                  >
                    <option value="true">Active (Live)</option>
                    <option value="false">Hidden</option>
                  </select>
                </div>
              </div>

              <div className="wm-adm-modal-actions">
                <button
                  type="button"
                  className="wm-adm-btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button type="submit" className="wm-adm-btn-save" disabled={saving}>
                  {saving ? (
                    <>
                      <FaSpinner className="wm-spinner-icon" /> Saving Video...
                    </>
                  ) : (
                    <>
                      <FaSave /> {editingId ? 'Update Video' : 'Publish Video'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVideoShowcase;

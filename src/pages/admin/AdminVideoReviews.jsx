import React, { useState, useEffect, useRef } from 'react';
import {
  FaVideo,
  FaPlay,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSave,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaUpload,
  FaSearch,
  FaStar,
  FaGraduationCap
} from 'react-icons/fa';
import './AdminVideoReviews.css';
import { resolveMediaUrl } from '../../utils/mediaUrl';

const API_BASE = 'http://localhost:5005/api';

const defaultSeedVideos = [
  {
    studentName: 'Aman Verma',
    course: 'Advanced Digital Marketing with AI',
    videoUrl: '/hh2-CH6clGIc.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 1,
    isActive: true
  },
  {
    studentName: 'Deepak Sharma',
    course: 'Full-Stack Performance Marketing & SEO',
    videoUrl: '/hh3-CAsds3iE.mp4',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 2,
    isActive: true
  }
];

const AdminVideoReviews = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState('');
  const fileInputRef = useRef(null);

  const initialForm = {
    studentName: '',
    course: 'Advanced Digital Marketing with AI',
    videoUrl: '',
    batch: '2025-26 Batch',
    tag: 'WEB MOK - STORY',
    rating: 5,
    order: 1,
    isActive: true
  };

  const [formData, setFormData] = useState(initialForm);

  const triggerFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
  };

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/video-reviews?all=true`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setVideos(json.data);
          return;
        }
      }
      setVideos(defaultSeedVideos);
    } catch (err) {
      console.warn('Backend video reviews offline, using defaults:', err.message);
      setVideos(defaultSeedVideos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      ...initialForm,
      order: videos.length + 1
    });
    setVideoPreview('');
    setVideoFile(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item._id || item.id);
    setFormData({
      studentName: item.studentName || '',
      course: item.course || '',
      videoUrl: item.videoUrl || '',
      batch: item.batch || '2025-26 Batch',
      tag: item.tag || 'WEB MOK - STORY',
      rating: item.rating || 5,
      order: item.order || 0,
      isActive: item.isActive !== undefined ? item.isActive : true
    });
    setVideoPreview(item.videoUrl || '');
    setVideoFile(null);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentName.trim()) {
      triggerFeedback('error', 'Student or client name is required!');
      return;
    }

    if (!videoFile && !formData.videoUrl.trim()) {
      triggerFeedback('error', 'Please upload an MP4 video or provide a video URL!');
      return;
    }

    try {
      setSaving(true);
      const postData = new FormData();
      postData.append('studentName', formData.studentName);
      postData.append('course', formData.course);
      postData.append('batch', formData.batch);
      postData.append('tag', formData.tag);
      postData.append('rating', formData.rating);
      postData.append('order', formData.order);
      postData.append('isActive', formData.isActive);

      if (videoFile) {
        postData.append('videoFile', videoFile);
      } else {
        postData.append('videoUrl', formData.videoUrl);
      }

      const url = editingId
        ? `${API_BASE}/video-reviews/${editingId}`
        : `${API_BASE}/video-reviews`;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: postData
      });

      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', editingId ? 'Video review updated successfully!' : 'Video review uploaded successfully!');
        setIsModalOpen(false);
        fetchVideos();
      } else {
        triggerFeedback('error', json.message || 'Operation failed');
      }
    } catch (err) {
      console.error('Error saving video review:', err);
      triggerFeedback('error', 'Network error while uploading video');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete video review for "${name}"?`)) return;

    try {
      const res = await fetch(`${API_BASE}/video-reviews/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', 'Video review removed successfully!');
        setVideos(prev => prev.filter(v => (v._id || v.id) !== id));
      } else {
        triggerFeedback('error', json.message || 'Failed to delete');
      }
    } catch (err) {
      console.error('Error deleting:', err);
      triggerFeedback('error', 'Failed to delete video review');
    }
  };

  const filteredVideos = videos.filter(v => {
    const q = search.toLowerCase();
    return !search ||
      (v.studentName && v.studentName.toLowerCase().includes(q)) ||
      (v.course && v.course.toLowerCase().includes(q)) ||
      (v.batch && v.batch.toLowerCase().includes(q));
  });

  return (
    <div className="wm-adm-vrev-root">
      {/* Top Header */}
      <div className="wm-adm-header-row">
        <div>
          <span className="wm-adm-badge">STUDENT &amp; CLIENT SUCCESS STORIES</span>
          <h1 className="wm-adm-title">Video Reviews &amp; Testimonials CMS</h1>
          <p className="wm-adm-subtitle">
            Upload MP4 video files or video URLs for client and student testimonials featured on the public Video Reviews page.
          </p>
        </div>
        <button className="wm-adm-btn-primary" onClick={handleOpenAdd}>
          <FaPlus /> Upload New Video Review
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
          <strong>{videos.length}</strong>
          <span>Total Videos</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>98.4%</strong>
          <span>Placement Rate</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>{videos.filter(v => v.isActive !== false).length}</strong>
          <span>Live on Site</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>5.0 / 5.0</strong>
          <span>Student Rating</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="wm-adm-controls-bar">
        <div className="wm-adm-search-wrap" style={{ width: '100%', maxWidth: '380px' }}>
          <FaSearch className="wm-adm-search-icon" />
          <input
            type="text"
            placeholder="Search by student, course, or batch..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="wm-adm-search-input"
          />
        </div>
      </div>

      {/* Videos Grid */}
      {loading ? (
        <div className="wm-adm-loading-state">
          <FaSpinner className="wm-spinner-icon" />
          <p>Loading video reviews...</p>
        </div>
      ) : filteredVideos.length === 0 ? (
        <div className="wm-adm-empty-state">
          <FaVideo className="wm-adm-empty-icon" />
          <h3>No Video Reviews Found</h3>
          <p>No video reviews in database. Click "Upload New Video Review" to add one.</p>
        </div>
      ) : (
        <div className="wm-adm-vrev-grid">
          {filteredVideos.map((item) => {
            const id = item._id || item.id;
            return (
              <div key={id} className={`wm-adm-vrev-card ${item.isActive === false ? 'inactive' : ''}`}>
                <div className="wm-adm-vrev-player-wrap">
                  <video
                    src={resolveMediaUrl(item.videoUrl)}
                    controls
                    preload="metadata"
                    className="wm-adm-vrev-player"
                  />
                  <span className="wm-adm-vrev-pill">{item.tag || 'WEB MOK - STORY'}</span>
                </div>

                <div className="wm-adm-vrev-body">
                  <div className="wm-adm-stars" style={{ marginBottom: '6px' }}>
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="wm-adm-gold-star" />
                    ))}
                  </div>
                  <h3 className="wm-adm-vrev-name">{item.studentName}</h3>
                  <p className="wm-adm-vrev-course">{item.course}</p>
                  <small className="wm-adm-vrev-batch">{item.batch}</small>
                </div>

                <div className="wm-adm-rcard-actions">
                  <button
                    className="wm-adm-btn-edit"
                    onClick={() => handleOpenEdit(item)}
                    title="Edit Details"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="wm-adm-btn-delete"
                    onClick={() => handleDelete(id, item.studentName)}
                    title="Delete Video"
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
              <h3>{editingId ? 'Edit Video Review' : 'Upload New Video Review'}</h3>
              <button
                className="wm-adm-modal-close"
                onClick={() => setIsModalOpen(false)}
                disabled={saving}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="wm-adm-form">
              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Student / Client Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aman Verma"
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Batch / Session</label>
                  <input
                    type="text"
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    placeholder="e.g. 2025-26 Batch"
                  />
                </div>
              </div>

              <div className="wm-adm-form-group">
                <label>Course / Program Completed</label>
                <input
                  type="text"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  placeholder="e.g. Advanced Digital Marketing with AI"
                />
              </div>

              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Tag / Badge</label>
                  <input
                    type="text"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    placeholder="e.g. WEB MOK - STORY"
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Rating (Stars)</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                  </select>
                </div>
              </div>

              {/* Video Upload or URL */}
              <div className="wm-adm-form-group">
                <label>Video File (MP4/WebM Upload or URL) *</label>
                <div className="wm-adm-upload-box" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  {videoPreview && (
                    <div style={{ width: '100%', maxHeight: '200px', overflow: 'hidden', borderRadius: '8px', background: '#000' }}>
                      <video src={resolveMediaUrl(videoPreview)} controls style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '100%' }}>
                    <button
                      type="button"
                      className="wm-adm-btn-upload"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <FaUpload /> Choose Video File
                    </button>
                    {videoFile && <span style={{ fontSize: '0.8rem', color: '#10b981' }}>{videoFile.name}</span>}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </div>
                  <small style={{ color: '#64748b' }}>Or enter direct video URL / path:</small>
                  <input
                    type="text"
                    placeholder="/hh2-CH6clGIc.mp4 or https://..."
                    value={formData.videoUrl}
                    onChange={(e) => {
                      setFormData({ ...formData, videoUrl: e.target.value });
                      setVideoPreview(e.target.value);
                    }}
                    className="wm-adm-url-input"
                  />
                </div>
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
                    <option value="true">Active (Visible)</option>
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
                      <FaSpinner className="wm-spinner-icon" /> Uploading Video...
                    </>
                  ) : (
                    <>
                      <FaSave /> {editingId ? 'Update Video' : 'Save Video Review'}
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

export default AdminVideoReviews;

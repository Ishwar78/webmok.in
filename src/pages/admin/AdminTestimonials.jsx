import React, { useState, useEffect, useRef } from 'react';
import {
  FaStar,
  FaQuoteLeft,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSave,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaUpload,
  FaImage,
  FaSearch,
  FaFilter,
  FaExternalLinkAlt
} from 'react-icons/fa';
import './AdminTestimonials.css';
import { resolveMediaUrl, handleImageError } from '../../utils/mediaUrl';

const API_BASE = 'http://localhost:5005/api';

const defaultSeedReviews = [
  {
    name: 'Rohan Malhotra',
    designation: 'Founder & CEO',
    company: 'UrbanStyle Fashion (LuxeCart)',
    category: 'web',
    categoryName: 'Web & eCommerce',
    rating: 5,
    date: '2 weeks ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    title: 'Remarkable experience with Webmok!',
    text: 'Webmok transformed our slow, lagging WordPress store into a blazing-fast React and WooCommerce setup. Our cart abandonments dropped by 34% in the first month alone! Their team works with utmost professionalism and deep technical expertise.',
    order: 1,
    isActive: true
  },
  {
    name: 'Dr. Sunita Rao',
    designation: 'Managing Director',
    company: 'MediCare Superspecialty Clinics',
    category: 'seo',
    categoryName: 'Search & SEO',
    rating: 5,
    date: '1 month ago',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    title: 'Our patient bookings multiplied threefold',
    text: 'Their local SEO and Google 3-Pack campaigns made us the #1 recommended multi-specialty clinic in West Delhi and Dwarka. From managing our web portal to orchestrating high-intent SEO, Webmok has consistently delivered outstanding results.',
    order: 2,
    isActive: true
  }
];

const categoryOptions = [
  { id: 'web', name: 'Web & eCommerce' },
  { id: 'seo', name: 'Search & SEO' },
  { id: 'ppc', name: 'Paid Ads & PPC' },
  { id: 'brand', name: 'Brand & Creative' }
];

const AdminTestimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  const fileInputRef = useRef(null);

  const initialFormState = {
    name: '',
    designation: '',
    company: '',
    category: 'web',
    categoryName: 'Web & eCommerce',
    rating: 5,
    date: 'Recently',
    platform: 'Google Verified Review',
    badge: '5.0 Star Verified',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    title: '',
    text: '',
    order: 1,
    isActive: true
  };

  const [formData, setFormData] = useState(initialFormState);

  const triggerFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
  };

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/testimonials?all=true`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setReviews(json.data);
          return;
        }
      }
      setReviews(defaultSeedReviews);
    } catch (err) {
      console.warn('Backend testimonials offline, using defaults:', err.message);
      setReviews(defaultSeedReviews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      ...initialFormState,
      order: reviews.length + 1
    });
    setAvatarPreview('');
    setAvatarFile(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item._id || item.id);
    setFormData({
      name: item.name || '',
      designation: item.designation || '',
      company: item.company || '',
      category: item.category || 'web',
      categoryName: item.categoryName || 'Web & eCommerce',
      rating: item.rating || 5,
      date: item.date || 'Recently',
      platform: item.platform || 'Google Verified Review',
      badge: item.badge || '5.0 Star Verified',
      avatar: item.avatar || '',
      title: item.title || '',
      text: item.text || '',
      order: item.order || 0,
      isActive: item.isActive !== undefined ? item.isActive : true
    });
    setAvatarPreview(item.avatar || '');
    setAvatarFile(null);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    const selected = categoryOptions.find(c => c.id === cat);
    setFormData({
      ...formData,
      category: cat,
      categoryName: selected ? selected.name : 'Client Review'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.title.trim() || !formData.text.trim()) {
      triggerFeedback('error', 'Name, Review Title, and Review Text are required!');
      return;
    }

    try {
      setSaving(true);
      const postData = new FormData();
      postData.append('name', formData.name);
      postData.append('designation', formData.designation);
      postData.append('company', formData.company);
      postData.append('category', formData.category);
      postData.append('categoryName', formData.categoryName);
      postData.append('rating', formData.rating);
      postData.append('date', formData.date);
      postData.append('platform', formData.platform);
      postData.append('badge', formData.badge);
      postData.append('title', formData.title);
      postData.append('text', formData.text);
      postData.append('order', formData.order);
      postData.append('isActive', formData.isActive);

      if (avatarFile) {
        postData.append('avatarFile', avatarFile);
      } else {
        postData.append('avatar', formData.avatar);
      }

      const url = editingId
        ? `${API_BASE}/testimonials/${editingId}`
        : `${API_BASE}/testimonials`;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: postData
      });

      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', editingId ? 'Testimonial updated successfully!' : 'New testimonial added successfully!');
        setIsModalOpen(false);
        fetchReviews();
      } else {
        triggerFeedback('error', json.message || 'Operation failed');
      }
    } catch (err) {
      console.error('Error saving testimonial:', err);
      triggerFeedback('error', 'Network error or backend offline');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete review from "${name}"?`)) return;

    try {
      const res = await fetch(`${API_BASE}/testimonials/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', 'Testimonial deleted successfully!');
        setReviews(prev => prev.filter(item => (item._id || item.id) !== id));
      } else {
        triggerFeedback('error', json.message || 'Failed to delete');
      }
    } catch (err) {
      console.error('Error deleting:', err);
      triggerFeedback('error', 'Failed to delete testimonial');
    }
  };

  const filteredReviews = reviews.filter(rev => {
    const matchesCat = activeFilter === 'all' || rev.category === activeFilter;
    const q = search.toLowerCase();
    const matchesSearch = !search ||
      (rev.name && rev.name.toLowerCase().includes(q)) ||
      (rev.company && rev.company.toLowerCase().includes(q)) ||
      (rev.title && rev.title.toLowerCase().includes(q)) ||
      (rev.text && rev.text.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="wm-adm-testimonials-root">
      {/* Top Header */}
      <div className="wm-adm-header-row">
        <div>
          <span className="wm-adm-badge">CLIENTS &amp; REPUTATION CMS</span>
          <h1 className="wm-adm-title">Client Testimonials &amp; Google Reviews</h1>
          <p className="wm-adm-subtitle">
            Manage verified client testimonials, ratings, photos, and company endorsements displayed on the public Testimonials page.
          </p>
        </div>
        <button className="wm-adm-btn-primary" onClick={handleOpenAdd}>
          <FaPlus /> Add New Testimonial
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
          <strong>{reviews.length}</strong>
          <span>Total Reviews</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>{reviews.filter(r => r.rating === 5).length}</strong>
          <span>5-Star Ratings</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>{reviews.filter(r => r.isActive !== false).length}</strong>
          <span>Live on Website</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>5.0 / 5.0</strong>
          <span>Avg Google Score</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="wm-adm-controls-bar">
        <div className="wm-adm-tabs">
          <button
            type="button"
            className={`wm-adm-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Categories ({reviews.length})
          </button>
          {categoryOptions.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`wm-adm-tab ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.name} ({reviews.filter(r => r.category === cat.id).length})
            </button>
          ))}
        </div>

        <div className="wm-adm-search-wrap">
          <FaSearch className="wm-adm-search-icon" />
          <input
            type="text"
            placeholder="Search by client, brand, or quote..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="wm-adm-search-input"
          />
        </div>
      </div>

      {/* Reviews Cards Grid */}
      {loading ? (
        <div className="wm-adm-loading-state">
          <FaSpinner className="wm-spinner-icon" />
          <p>Loading testimonials from database...</p>
        </div>
      ) : filteredReviews.length === 0 ? (
        <div className="wm-adm-empty-state">
          <FaQuoteLeft className="wm-adm-empty-icon" />
          <h3>No Testimonials Found</h3>
          <p>No reviews match your filter or search query. Click "Add New Testimonial" to create one.</p>
        </div>
      ) : (
        <div className="wm-adm-reviews-grid">
          {filteredReviews.map((item) => {
            const id = item._id || item.id;
            return (
              <div key={id} className={`wm-adm-review-card ${item.isActive === false ? 'inactive' : ''}`}>
                <div className="wm-adm-rcard-top">
                  <div className="wm-adm-stars">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="wm-adm-gold-star" />
                    ))}
                  </div>
                  <span className="wm-adm-tag-badge">{item.categoryName || item.category}</span>
                </div>

                <h3 className="wm-adm-rcard-title">"{item.title}"</h3>
                <p className="wm-adm-rcard-text">{item.text}</p>

                <div className="wm-adm-rcard-author">
                  <img
                    src={resolveMediaUrl(item.avatar)}
                    alt={item.name}
                    className="wm-adm-rcard-avatar"
                    onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80')}
                  />
                  <div className="wm-adm-rcard-info">
                    <h4>{item.name}</h4>
                    <span>{item.designation} {item.company ? `· ${item.company}` : ''}</span>
                    <small>{item.platform} • {item.date}</small>
                  </div>
                </div>

                <div className="wm-adm-rcard-actions">
                  <button
                    className="wm-adm-btn-edit"
                    onClick={() => handleOpenEdit(item)}
                    title="Edit Review"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="wm-adm-btn-delete"
                    onClick={() => handleDelete(id, item.name)}
                    title="Delete Review"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add / Edit Testimonial Modal */}
      {isModalOpen && (
        <div className="wm-adm-modal-overlay" onClick={() => !saving && setIsModalOpen(false)}>
          <div className="wm-adm-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="wm-adm-modal-header">
              <h3>{editingId ? 'Edit Client Testimonial' : 'Add New Client Testimonial'}</h3>
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
                  <label>Client / Reviewer Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohan Malhotra"
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Founder & CEO"
                  />
                </div>
              </div>

              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Company / Brand Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. LuxeCart Essentials"
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Service Category</label>
                  <select
                    value={formData.category}
                    onChange={handleCategoryChange}
                  >
                    {categoryOptions.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="wm-adm-form-row three-col">
                <div className="wm-adm-form-group">
                  <label>Rating (Stars)</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                    <option value={3}>⭐⭐⭐ 3 Stars</option>
                  </select>
                </div>
                <div className="wm-adm-form-group">
                  <label>Review Platform</label>
                  <input
                    type="text"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    placeholder="e.g. Google Verified Review"
                  />
                </div>
                <div className="wm-adm-form-group">
                  <label>Review Date / Age</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. 2 weeks ago"
                  />
                </div>
              </div>

              <div className="wm-adm-form-group">
                <label>Review Headline / Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Remarkable experience with Webmok!"
                />
              </div>

              <div className="wm-adm-form-group">
                <label>Full Review Endorsement *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  placeholder="Share detailed client feedback..."
                />
              </div>

              {/* Avatar Upload */}
              <div className="wm-adm-form-group">
                <label>Client Photo / Avatar</label>
                <div className="wm-adm-upload-box">
                  {avatarPreview ? (
                    <img
                      src={resolveMediaUrl(avatarPreview)}
                      alt="Avatar Preview"
                      className="wm-adm-preview-avatar"
                      onError={(e) => handleImageError(e, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80')}
                    />
                  ) : (
                    <div className="wm-adm-avatar-placeholder">
                      <FaImage />
                    </div>
                  )}
                  <div className="wm-adm-upload-info">
                    <button
                      type="button"
                      className="wm-adm-btn-upload"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <FaUpload /> Select Image File
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <small>Or enter online image URL below:</small>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={formData.avatar}
                      onChange={(e) => {
                        setFormData({ ...formData, avatar: e.target.value });
                        setAvatarPreview(e.target.value);
                      }}
                      className="wm-adm-url-input"
                    />
                  </div>
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
                    <option value="false">Hidden (Draft)</option>
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
                      <FaSpinner className="wm-spinner-icon" /> Saving...
                    </>
                  ) : (
                    <>
                      <FaSave /> {editingId ? 'Update Testimonial' : 'Save Testimonial'}
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

export default AdminTestimonials;

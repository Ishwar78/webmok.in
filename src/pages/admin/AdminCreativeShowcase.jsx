import React, { useState, useEffect, useRef } from 'react';
import {
  FaPalette,
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
  FaEye
} from 'react-icons/fa';
import './AdminCreativeShowcase.css';
import { resolveMediaUrl, handleImageError } from '../../utils/mediaUrl';

const API_BASE = 'http://localhost:5005/api';

const categories = [
  { id: 'packaging', name: 'Packaging & Print' },
  { id: 'social', name: 'Social Creatives' },
  { id: 'branding', name: 'Brand Identity' },
  { id: 'uiux', name: 'UI/UX & Web' },
  { id: 'infographics', name: 'Infographics & Collaterals' }
];

const defaultSeedItems = [
  {
    title: 'AgriMark Superfoods Pouch Packaging',
    category: 'packaging',
    categoryName: 'Packaging & Print',
    client: 'AgriMark Organics',
    deliverable: 'Matte Finish Standup Pouch & Label Design',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    description: 'Modern eco-friendly superfood pouch packaging with clean typography, custom ingredient illustrations, and QR traceability.',
    order: 1,
    isActive: true
  },
  {
    title: 'Precision Trimmer Social Campaign',
    category: 'social',
    categoryName: 'Social Creatives',
    client: 'Ultimate Bro Grooming',
    deliverable: 'Meta Ads & Instagram Carousel Design Series',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
    description: 'High-contrast bold lifestyle creatives featuring urban grooming, product highlights, and high-CTR headline typography.',
    order: 2,
    isActive: true
  }
];

const AdminCreativeShowcase = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  const initialForm = {
    title: '',
    category: 'packaging',
    categoryName: 'Packaging & Print',
    client: '',
    deliverable: '',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    description: '',
    order: 1,
    isActive: true
  };

  const [formData, setFormData] = useState(initialForm);

  const triggerFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/creative-showcase?all=true`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setItems(json.data);
          return;
        }
      }
      setItems(defaultSeedItems);
    } catch (err) {
      console.warn('Backend creative showcase offline, using defaults:', err.message);
      setItems(defaultSeedItems);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      ...initialForm,
      order: items.length + 1
    });
    setImagePreview('');
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item._id || item.id);
    setFormData({
      title: item.title || '',
      category: item.category || 'packaging',
      categoryName: item.categoryName || 'Packaging & Print',
      client: item.client || '',
      deliverable: item.deliverable || '',
      image: item.image || '',
      description: item.description || '',
      order: item.order || 0,
      isActive: item.isActive !== undefined ? item.isActive : true
    });
    setImagePreview(item.image || '');
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    const found = categories.find(c => c.id === cat);
    setFormData({
      ...formData,
      category: cat,
      categoryName: found ? found.name : 'Creative Project'
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      triggerFeedback('error', 'Project Title is required!');
      return;
    }
    if (!imageFile && !formData.image.trim()) {
      triggerFeedback('error', 'Showcase image is required!');
      return;
    }

    try {
      setSaving(true);
      const postData = new FormData();
      postData.append('title', formData.title);
      postData.append('category', formData.category);
      postData.append('categoryName', formData.categoryName);
      postData.append('client', formData.client);
      postData.append('deliverable', formData.deliverable);
      postData.append('description', formData.description);
      postData.append('order', formData.order);
      postData.append('isActive', formData.isActive);

      if (imageFile) {
        postData.append('imageFile', imageFile);
      } else {
        postData.append('image', formData.image);
      }

      const url = editingId
        ? `${API_BASE}/creative-showcase/${editingId}`
        : `${API_BASE}/creative-showcase`;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: postData
      });

      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', editingId ? 'Creative item updated successfully!' : 'Creative item published successfully!');
        setIsModalOpen(false);
        fetchItems();
      } else {
        triggerFeedback('error', json.message || 'Operation failed');
      }
    } catch (err) {
      console.error('Error saving:', err);
      triggerFeedback('error', 'Network error or backend offline');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`${API_BASE}/creative-showcase/${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        triggerFeedback('success', 'Creative item deleted successfully!');
        setItems(prev => prev.filter(item => (item._id || item.id) !== id));
      } else {
        triggerFeedback('error', json.message || 'Failed to delete');
      }
    } catch (err) {
      console.error('Error deleting:', err);
      triggerFeedback('error', 'Failed to delete creative item');
    }
  };

  const filteredItems = items.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch = !search ||
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.client && item.client.toLowerCase().includes(q)) ||
      (item.deliverable && item.deliverable.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="wm-adm-creative-root">
      {/* Top Header */}
      <div className="wm-adm-header-row">
        <div>
          <span className="wm-adm-badge">PORTFOLIO &amp; BRAND DESIGN CMS</span>
          <h1 className="wm-adm-title">Creative Showcase &amp; Design Gallery</h1>
          <p className="wm-adm-subtitle">
            Upload packaging designs, social ad creatives, brand books, and UI/UX mockups displayed on the public Creative Showcase page.
          </p>
        </div>
        <button className="wm-adm-btn-primary" onClick={handleOpenAdd}>
          <FaPlus /> Add Creative Artwork
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
          <strong>{items.length}</strong>
          <span>Total Designs</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>{categories.length}</strong>
          <span>Design Disciplines</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>{items.filter(i => i.isActive !== false).length}</strong>
          <span>Active on Site</span>
        </div>
        <div className="wm-adm-stat-box">
          <strong>100%</strong>
          <span>Vector &amp; High-Res</span>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="wm-adm-controls-bar">
        <div className="wm-adm-tabs">
          <button
            type="button"
            className={`wm-adm-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Disciplines ({items.length})
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              type="button"
              className={`wm-adm-tab ${activeCategory === c.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.name} ({items.filter(i => i.category === c.id).length})
            </button>
          ))}
        </div>

        <div className="wm-adm-search-wrap">
          <FaSearch className="wm-adm-search-icon" />
          <input
            type="text"
            placeholder="Search by title, client, or deliverable..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="wm-adm-search-input"
          />
        </div>
      </div>

      {/* Gallery Grid */}
      {loading ? (
        <div className="wm-adm-loading-state">
          <FaSpinner className="wm-spinner-icon" />
          <p>Loading creative showcase...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="wm-adm-empty-state">
          <FaPalette className="wm-adm-empty-icon" />
          <h3>No Artworks Found</h3>
          <p>No creative items match your criteria. Click "Add Creative Artwork" to upload one.</p>
        </div>
      ) : (
        <div className="wm-adm-creative-grid">
          {filteredItems.map((item) => {
            const id = item._id || item.id;
            return (
              <div key={id} className={`wm-adm-creative-card ${item.isActive === false ? 'inactive' : ''}`}>
                <div className="wm-adm-ccard-img-wrap">
                  <img
                    src={resolveMediaUrl(item.image)}
                    alt={item.title}
                    className="wm-adm-ccard-img"
                    onError={(e) => handleImageError(e)}
                  />
                  <span className="wm-adm-ccard-badge">{item.categoryName}</span>
                </div>

                <div className="wm-adm-ccard-body">
                  <span className="wm-adm-ccard-client">{item.client || 'Web Mok Creative'}</span>
                  <h3 className="wm-adm-ccard-title">{item.title}</h3>
                  <p className="wm-adm-ccard-deliv">{item.deliverable}</p>
                </div>

                <div className="wm-adm-rcard-actions">
                  <button
                    className="wm-adm-btn-edit"
                    onClick={() => handleOpenEdit(item)}
                    title="Edit Item"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="wm-adm-btn-delete"
                    onClick={() => handleDelete(id, item.title)}
                    title="Delete Artwork"
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
              <h3>{editingId ? 'Edit Creative Artwork' : 'Add Creative Artwork'}</h3>
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
                <label>Project Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. AgriMark Superfoods Pouch Packaging"
                />
              </div>

              <div className="wm-adm-form-row two-col">
                <div className="wm-adm-form-group">
                  <label>Design Discipline / Category</label>
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
                    placeholder="e.g. AgriMark Organics"
                  />
                </div>
              </div>

              <div className="wm-adm-form-group">
                <label>Deliverable Specification</label>
                <input
                  type="text"
                  value={formData.deliverable}
                  onChange={(e) => setFormData({ ...formData, deliverable: e.target.value })}
                  placeholder="e.g. Matte Finish Standup Pouch & Label Design"
                />
              </div>

              <div className="wm-adm-form-group">
                <label>Artwork Description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Design rationale, color palette, or typography notes..."
                />
              </div>

              {/* Artwork Image Upload */}
              <div className="wm-adm-form-group">
                <label>Artwork Image (PNG/JPG/WebP) *</label>
                <div className="wm-adm-upload-box">
                  {imagePreview ? (
                    <img
                      src={resolveMediaUrl(imagePreview)}
                      alt="Preview"
                      style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                      onError={(e) => handleImageError(e)}
                    />
                  ) : (
                    <div style={{ width: '80px', height: '60px', background: '#1e293b', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaImage style={{ color: '#64748b', fontSize: '1.5rem' }} />
                    </div>
                  )}
                  <div className="wm-adm-upload-info">
                    <button
                      type="button"
                      className="wm-adm-btn-upload"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <FaUpload /> Upload Image File
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <small>Or enter high-res image URL:</small>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={formData.image}
                      onChange={(e) => {
                        setFormData({ ...formData, image: e.target.value });
                        setImagePreview(e.target.value);
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
                    <option value="true">Active (Published)</option>
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
                      <FaSpinner className="wm-spinner-icon" /> Saving Artwork...
                    </>
                  ) : (
                    <>
                      <FaSave /> {editingId ? 'Update Artwork' : 'Publish Artwork'}
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

export default AdminCreativeShowcase;

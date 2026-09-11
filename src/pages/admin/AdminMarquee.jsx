import React, { useState, useEffect } from 'react';
import {
  FaStream,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimes,
  FaArrowUp,
  FaArrowDown,
  FaSearch,
  FaToggleOn,
  FaToggleOff,
  FaBolt,
  FaRocket,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaHandsHelping,
  FaBullhorn
} from 'react-icons/fa';
import './AdminMarquee.css';

const API_BASE = 'http://localhost:5005/api';
const LOCAL_STORAGE_KEY = 'webmok_admin_marquee';

export const defaultMarqueeLines = [
  // Top Line Items
  { id: 'mq-1', text: 'Ultra-Fast 0.8s Page Speed', position: 'top', icon: '⚡', badgeColor: 'cyan', order: 1, isActive: true },
  { id: 'mq-2', text: '500+ Verified Commercial Launches', position: 'top', icon: '🚀', badgeColor: 'blue', order: 2, isActive: true },
  { id: 'mq-3', text: '4.9★ Clutch & Google Verified Reviews', position: 'top', icon: '⭐', badgeColor: 'yellow', order: 3, isActive: true },
  { id: 'mq-4', text: '10x Organic Traffic & Lead Surge', position: 'top', icon: '📈', badgeColor: 'orange', order: 4, isActive: true },
  { id: 'mq-5', text: '100% Enterprise Cyber Security', position: 'top', icon: '🛡️', badgeColor: 'purple', order: 5, isActive: true },
  { id: 'mq-6', text: 'Global Delivery Across 18+ Countries', position: 'top', icon: '🌐', badgeColor: 'green', order: 6, isActive: true },

  // Bottom Line Items
  { id: 'mq-7', text: 'Custom React & Next.js Scalable Web Apps', position: 'bottom', icon: '💎', badgeColor: 'cyan', order: 1, isActive: true },
  { id: 'mq-8', text: 'High-ROAS Google & Meta Performance Ads', position: 'bottom', icon: '🎯', badgeColor: 'orange', order: 2, isActive: true },
  { id: 'mq-9', text: 'Page #1 Google Technical SEO & AEO', position: 'bottom', icon: '🔍', badgeColor: 'green', order: 3, isActive: true },
  { id: 'mq-10', text: 'Native iOS & Android Mobile Engineering', position: 'bottom', icon: '📱', badgeColor: 'purple', order: 4, isActive: true },
  { id: 'mq-11', text: 'Shopify & Headless High-Conversion Stores', position: 'bottom', icon: '🛒', badgeColor: 'blue', order: 5, isActive: true },
  { id: 'mq-12', text: 'Dedicated Technical Account Director 24/7', position: 'bottom', icon: '🤝', badgeColor: 'yellow', order: 6, isActive: true },

  // Top Bar Alert Lines (Navbar)
  { id: 'mq-tb-1', text: "Hiring Alert: We're expanding! Join our global development team. Check open roles on Careers.", position: 'topbar', icon: '📢', badgeColor: 'cyan', order: 1, isActive: true },
  { id: 'mq-tb-2', text: "Exclusive Offer: Get a Free Comprehensive UI/UX & SEO Audit for Your Website Today!", position: 'topbar', icon: '🎁', badgeColor: 'orange', order: 2, isActive: true }
];

const AdminMarquee = () => {
  const [lines, setLines] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading marquee lines from localStorage:', e);
    }
    return defaultMarqueeLines;
  });

  const [loading, setLoading] = useState(false);
  const [filterPos, setFilterPos] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLineId, setEditingLineId] = useState(null);
  const [formData, setFormData] = useState({
    text: '',
    position: 'top',
    icon: '⚡',
    badgeColor: 'cyan',
    order: 1,
    isActive: true
  });

  const saveToLocal = (newLines) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLines));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  };

  const fetchLines = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/marquee?all=true`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setLines(json.data);
          saveToLocal(json.data);
        }
      }
    } catch (err) {
      console.warn('Backend offline, using cached marquee lines:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLines();
  }, []);

  const handleOpenAdd = (defaultPos = 'top') => {
    setEditingLineId(null);
    setFormData({
      text: '',
      position: defaultPos,
      icon: defaultPos === 'topbar' ? '📣' : (defaultPos === 'top' ? '⚡' : '💎'),
      badgeColor: defaultPos === 'topbar' ? 'yellow' : (defaultPos === 'top' ? 'cyan' : 'orange'),
      order: lines.filter(l => l.position === defaultPos).length + 1,
      isActive: true
    });
    setIsModalOpen(true);
    setFeedback(null);
  };

  const handleOpenEdit = (line) => {
    setEditingLineId(line._id || line.id);
    setFormData({
      text: line.text || '',
      position: line.position || 'top',
      icon: line.icon || '⚡',
      badgeColor: line.badgeColor || 'cyan',
      order: line.order || 1,
      isActive: line.isActive !== undefined ? line.isActive : true
    });
    setIsModalOpen(true);
    setFeedback(null);
  };

  const handleSaveLine = async (e) => {
    e.preventDefault();
    if (!formData.text.trim()) {
      alert('Please enter the marquee line content');
      return;
    }

    try {
      if (editingLineId) {
        // Try PUT to backend
        try {
          await fetch(`${API_BASE}/marquee/${editingLineId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
        } catch (netErr) {
          console.warn('API sync failed, continuing locally:', netErr);
        }

        const updated = lines.map(l =>
          (l._id || l.id) === editingLineId ? { ...l, ...formData } : l
        );
        setLines(updated);
        saveToLocal(updated);
        setFeedback({ type: 'success', message: 'Marquee line updated successfully!' });
      } else {
        const tempId = `mq-${Date.now()}`;
        const newEntry = { ...formData, id: tempId, _id: tempId };

        // Try POST to backend
        try {
          const res = await fetch(`${API_BASE}/marquee`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          const json = await res.json();
          if (res.ok && json.success && json.data) {
            newEntry._id = json.data._id;
            newEntry.id = json.data._id;
          }
        } catch (netErr) {
          console.warn('API sync failed, continuing locally:', netErr);
        }

        const updated = [...lines, newEntry];
        setLines(updated);
        saveToLocal(updated);
        setFeedback({ type: 'success', message: 'New marquee line added successfully!' });
      }
      setIsModalOpen(false);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const handleDeleteLine = async (id) => {
    if (!window.confirm('Are you sure you want to delete this marquee line?')) return;
    try {
      try {
        await fetch(`${API_BASE}/marquee/${id}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('API delete error, deleting locally:', e);
      }
      const updated = lines.filter(l => (l._id || l.id) !== id);
      setLines(updated);
      saveToLocal(updated);
      setFeedback({ type: 'success', message: 'Marquee line deleted successfully!' });
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const handleToggleActive = async (line) => {
    const id = line._id || line.id;
    const nextState = !line.isActive;
    try {
      try {
        await fetch(`${API_BASE}/marquee/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isActive: nextState })
        });
      } catch (e) {
        console.warn('API toggle error, updating locally:', e);
      }
      const updated = lines.map(l => ((l._id || l.id) === id ? { ...l, isActive: nextState } : l));
      setLines(updated);
      saveToLocal(updated);
    } catch (err) {
      console.warn('Toggle status error:', err.message);
    }
  };

  const handleResetDefaults = () => {
    if (!window.confirm('Reset all marquee lines to high-converting default presets?')) return;
    setLines(defaultMarqueeLines);
    saveToLocal(defaultMarqueeLines);
    setFeedback({ type: 'success', message: 'Marquee lines reset to default presets!' });
    setTimeout(() => setFeedback(null), 4000);
  };

  const filteredLines = lines.filter(l => {
    const matchPos = filterPos === 'all' || l.position === filterPos;
    const matchSearch = l.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchPos && matchSearch;
  });

  const topLinesCount = lines.filter(l => l.position === 'top' && l.isActive).length;
  const bottomLinesCount = lines.filter(l => l.position === 'bottom' && l.isActive).length;
  const topbarLinesCount = lines.filter(l => l.position === 'topbar' && l.isActive).length;

  return (
    <div className="wm-amq-root">
      {/* 1. Header Banner */}
      <div className="wm-amq-header">
        <div>
          <h2><FaStream /> Manage Marquee & Top Bar Alert Lines</h2>
          <p>Add, edit, or remove live streaming lines running in the Top Navbar Alert Bar and "What We Offer" section.</p>
        </div>
        <div className="wm-amq-actions-top">
          <button type="button" className="wm-amq-btn-reset" onClick={handleResetDefaults}>
            Reset Defaults
          </button>
          <button type="button" className="wm-amq-btn-add wm-btn-add-topbar" onClick={() => handleOpenAdd('topbar')}>
            <FaBullhorn /> Add Top Bar Line
          </button>
          <button type="button" className="wm-amq-btn-add" onClick={() => handleOpenAdd('top')}>
            <FaPlus /> Add What We Offer Line
          </button>
        </div>
      </div>

      {/* 2. Feedback Notification */}
      {feedback && (
        <div className={`wm-amq-feedback ${feedback.type === 'success' ? 'wm-feed-success' : 'wm-feed-error'}`}>
          {feedback.type === 'success' ? <FaCheckCircle /> : <FaTimes />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* 3. KPI Statistics Cards */}
      <div className="wm-amq-kpis">
        <div className="wm-amq-kpi-card" onClick={() => setFilterPos('all')}>
          <div className="wm-amq-kpi-info">
            <h4>Total Lines</h4>
            <span>{lines.length}</span>
          </div>
          <div className="wm-amq-kpi-icon"><FaStream /></div>
        </div>

        <div className="wm-amq-kpi-card wm-kpi-topbar" onClick={() => setFilterPos('topbar')}>
          <div className="wm-amq-kpi-info">
            <h4>Top Bar Alerts (Active)</h4>
            <span>{topbarLinesCount}</span>
          </div>
          <div className="wm-amq-kpi-icon"><FaBullhorn /></div>
        </div>

        <div className="wm-amq-kpi-card wm-kpi-top" onClick={() => setFilterPos('top')}>
          <div className="wm-amq-kpi-info">
            <h4>Top Stream (Active)</h4>
            <span>{topLinesCount}</span>
          </div>
          <div className="wm-amq-kpi-icon"><FaArrowUp /></div>
        </div>

        <div className="wm-amq-kpi-card wm-kpi-bottom" onClick={() => setFilterPos('bottom')}>
          <div className="wm-amq-kpi-info">
            <h4>Bottom Stream (Active)</h4>
            <span>{bottomLinesCount}</span>
          </div>
          <div className="wm-amq-kpi-icon"><FaArrowDown /></div>
        </div>
      </div>

      {/* 4. Controls Row: Position Filter & Search */}
      <div className="wm-amq-controls">
        <div className="wm-amq-filter-tabs">
          <button
            type="button"
            className={`wm-amq-ftab ${filterPos === 'all' ? 'active' : ''}`}
            onClick={() => setFilterPos('all')}
          >
            All Lines ({lines.length})
          </button>
          <button
            type="button"
            className={`wm-amq-ftab ${filterPos === 'topbar' ? 'active' : ''}`}
            onClick={() => setFilterPos('topbar')}
          >
            <FaBullhorn /> Top Bar ({lines.filter(l => l.position === 'topbar').length})
          </button>
          <button
            type="button"
            className={`wm-amq-ftab ${filterPos === 'top' ? 'active' : ''}`}
            onClick={() => setFilterPos('top')}
          >
            <FaArrowUp /> Top Stream ({lines.filter(l => l.position === 'top').length})
          </button>
          <button
            type="button"
            className={`wm-amq-ftab ${filterPos === 'bottom' ? 'active' : ''}`}
            onClick={() => setFilterPos('bottom')}
          >
            <FaArrowDown /> Bottom Stream ({lines.filter(l => l.position === 'bottom').length})
          </button>
        </div>

        <div className="wm-amq-search-box">
          <FaSearch className="wm-amq-search-icon" />
          <input
            type="text"
            placeholder="Search marquee lines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 5. Live Marquee Lines Table / Grid */}
      <div className="wm-amq-grid">
        {filteredLines.map((line, idx) => (
          <div
            key={line._id || line.id || idx}
            className={`wm-amq-card ${!line.isActive ? 'wm-amq-card--inactive' : ''}`}
          >
            <div className="wm-amq-card-head">
              <span className={`wm-amq-pos-badge ${line.position === 'topbar' ? 'wm-pos-topbar' : (line.position === 'top' ? 'wm-pos-top' : 'wm-pos-bottom')}`}>
                {line.position === 'topbar' ? '📢 Top Bar Alert' : (line.position === 'top' ? '↑ Top Stream' : '↓ Bottom Stream')}
              </span>
              <div className="wm-amq-head-right">
                <span className="wm-amq-order-badge">#{line.order}</span>
                <button
                  type="button"
                  className="wm-amq-btn-toggle"
                  onClick={() => handleToggleActive(line)}
                  title={line.isActive ? 'Click to Disable' : 'Click to Enable'}
                >
                  {line.isActive ? (
                    <FaToggleOn className="wm-toggle-active" />
                  ) : (
                    <FaToggleOff className="wm-toggle-inactive" />
                  )}
                </button>
              </div>
            </div>

            <div className="wm-amq-card-body">
              <div className={`wm-amq-icon-box wm-color-${line.badgeColor || 'cyan'}`}>
                <span>{line.icon || '⚡'}</span>
              </div>
              <p className="wm-amq-line-text">{line.text}</p>
            </div>

            <div className="wm-amq-card-footer">
              <span className="wm-amq-color-tag">Color: {line.badgeColor || 'cyan'}</span>
              <div className="wm-amq-card-actions">
                <button
                  type="button"
                  className="wm-amq-btn-edit"
                  onClick={() => handleOpenEdit(line)}
                  title="Edit Line"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  type="button"
                  className="wm-amq-btn-delete"
                  onClick={() => handleDeleteLine(line._id || line.id)}
                  title="Delete Line"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredLines.length === 0 && (
          <div className="wm-amq-empty">
            <FaStream className="wm-amq-empty-icon" />
            <h3>No Marquee Lines Found</h3>
            <p>Click "Add Marquee Line" above to create your first streaming line for the Home Page!</p>
          </div>
        )}
      </div>

      {/* 6. Modal: Add / Edit Marquee Line */}
      {isModalOpen && (
        <div className="wm-amq-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="wm-amq-modal" onClick={(e) => e.stopPropagation()}>
            <div className="wm-amq-modal-header">
              <h3>{editingLineId ? 'Edit Marquee Line' : 'Add New Marquee Line'}</h3>
              <button
                type="button"
                className="wm-amq-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSaveLine} className="wm-amq-form">
              <div className="wm-amq-form-group">
                <label>Marquee Line Content / Text *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ultra-Fast 0.8s Page Speed"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                />
              </div>

              <div className="wm-amq-form-row">
                <div className="wm-amq-form-group">
                  <label>Stream Position *</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    <option value="top">Top Line (Stream 1 - What We Offer)</option>
                    <option value="bottom">Bottom Line (Stream 2 - What We Offer)</option>
                    <option value="topbar">Top Bar (Navbar Alert Banner)</option>
                  </select>
                </div>

                <div className="wm-amq-form-group">
                  <label>Icon / Emoji</label>
                  <input
                    type="text"
                    placeholder="e.g. ⚡, 🚀, ⭐, 💎, 📱"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  />
                </div>
              </div>

              <div className="wm-amq-form-row">
                <div className="wm-amq-form-group">
                  <label>Color Accent Theme</label>
                  <select
                    value={formData.badgeColor}
                    onChange={(e) => setFormData({ ...formData, badgeColor: e.target.value })}
                  >
                    <option value="cyan">Neon Cyan (Tech)</option>
                    <option value="blue">Electric Blue (Corporate)</option>
                    <option value="orange">Vibrant Orange (Growth)</option>
                    <option value="purple">Royal Purple (Design)</option>
                    <option value="green">Emerald Green (Success)</option>
                    <option value="yellow">Warm Yellow (Reviews)</option>
                  </select>
                </div>

                <div className="wm-amq-form-group">
                  <label>Display Sequence / Order</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="wm-amq-form-group wm-amq-checkbox-group">
                <label className="wm-amq-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  />
                  <span>Active & Visible on Public Home Page</span>
                </label>
              </div>

              <div className="wm-amq-modal-actions">
                <button
                  type="button"
                  className="wm-amq-btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="wm-amq-btn-submit">
                  {editingLineId ? 'Save Changes' : 'Add Line to Marquee'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMarquee;

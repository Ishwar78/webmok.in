import React, { useState } from 'react';

const API_BASE = 'http://localhost:5005/api';

const DiagnosticLeadForm = ({ serviceName, buttonText = 'Get Free Analysis →' }) => {
  const [contactInput, setContactInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = contactInput.trim();
    if (!val) return;

    setLoading(true);

    const leadData = {
      phoneOrEmail: val,
      serviceName: serviceName || 'Service Diagnostic',
      pageUrl: typeof window !== 'undefined' ? window.location.pathname : '',
      notes: `Direct Diagnostic Engine Submission on ${serviceName || 'Service'}`
    };

    // Save locally first so lead is never lost
    try {
      const existing = JSON.parse(localStorage.getItem('webmok_diagnostic_leads') || '[]');
      const newLead = {
        _id: `diag-${Date.now()}`,
        id: `diag-${Date.now()}`,
        ...leadData,
        status: 'new',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('webmok_diagnostic_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }

    // Post to backend API
    try {
      await fetch(`${API_BASE}/diagnostic-leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (netErr) {
      console.warn('API sync failed, continuing locally:', netErr);
    }

    setLoading(false);
    setSubmitted(true);
    setContactInput('');
  };

  return (
    <div className="wm-rsau__form-container">
      <form className="wm-rsau__form" onSubmit={handleSubmit}>
        <input
          className="wm-rsau__in"
          type="text"
          placeholder="Enter your Mobile Number or Email..."
          value={contactInput}
          onChange={(e) => setContactInput(e.target.value)}
          required
          disabled={loading || submitted}
        />
        <button className="wm-rsau__go" type="submit" disabled={loading || submitted}>
          {loading ? 'Submitting...' : submitted ? '✓ Submitted' : buttonText}
        </button>
      </form>

      {submitted && (
        <div className="wm-rsau__success-msg">
          <span>✓ Audit Request Received! Our specialist will send your free diagnostic report shortly.</span>
        </div>
      )}
    </div>
  );
};

export default DiagnosticLeadForm;

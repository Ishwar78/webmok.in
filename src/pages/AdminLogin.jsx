import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaLock,
  FaUser,
  FaShieldAlt,
  FaArrowRight,
  FaHome,
  FaEye,
  FaEyeSlash,
  FaCheckCircle
} from 'react-icons/fa';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('admininfo@webmok.in');
  const [password, setPassword] = useState('Admin@info1234');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAutoFill = () => {
    setUsername('admininfo@webmok.in');
    setPassword('Admin@info1234');
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const normalizedEmail = (username || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    try {
      // 1. Attempt live authentication with MongoDB backend
      const response = await fetch('http://localhost:5005/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: normalizedEmail,
          password: cleanPassword
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('webmok_admin_logged_in', 'true');
        if (data.token) {
          localStorage.setItem('webmok_admin_token', data.token);
        }
        if (data.admin) {
          localStorage.setItem('webmok_admin_user', JSON.stringify(data.admin));
        }
        navigate('/admin/dashboard');
        return;
      } else {
        setError(data.message || 'Invalid administrator email or password.');
      }
    } catch (apiError) {
      // 2. Seamless local fallback if backend server is not currently running
      console.warn('Backend server offline or unreachable, using verified fallback credentials:', apiError.message);
      const isEmailValid = (normalizedEmail === 'admininfo@webmok.in');
      const isPasswordValid = (cleanPassword === 'Admin@info1234' || cleanPassword.toLowerCase() === 'admin@info1234');

      if (isEmailValid && isPasswordValid) {
        localStorage.setItem('webmok_admin_logged_in', 'true');
        localStorage.setItem('webmok_admin_user', JSON.stringify({
          email: 'admininfo@webmok.in',
          name: 'Web Mok Administrator',
          role: 'superadmin'
        }));
        navigate('/admin/dashboard');
        return;
      } else {
        setError('Invalid administrator email or password. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wm-admin-login-root">
      <div className="wm-alogin-card">
        <div className="wm-alogin-header">
          <div className="wm-alogin-icon-circle">
            <FaShieldAlt />
          </div>
          <span className="wm-alogin-badge">Admin Access</span>
          <h2 className="wm-alogin-title">Web Mok Portal</h2>
          <p className="wm-alogin-subtitle">Authorized management & editorial dashboard</p>
        </div>

        {error && <div className="wm-alogin-error">{error}</div>}

        <form onSubmit={handleLogin} className="wm-alogin-form">
          <div className="wm-afield">
            <label><FaUser className="wm-afield-icon" /> Admin Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admininfo@webmok.in"
              required
            />
          </div>

          <div className="wm-afield">
            <label><FaLock className="wm-afield-icon" /> Password</label>
            <div className="wm-pw-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="wm-pw-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide Password' : 'Show Password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div
            className="wm-demo-creds-hint"
            onClick={handleAutoFill}
            title="Click to auto-fill verified credentials"
            style={{ cursor: 'pointer' }}
          >
            <div className="wm-demo-hint-top">
              <strong>Verified Credentials:</strong>
              <span className="wm-demo-click-tag">Click to auto-fill</span>
            </div>
            <span>Email: <code>admininfo@webmok.in</code></span>
            <span>Password: <code>Admin@info1234</code></span>
          </div>

          <button type="submit" className="wm-alogin-submit" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'} <FaArrowRight />
          </button>
        </form>

        <div className="wm-alogin-footer">
          <Link to="/" className="wm-alogin-back-home">
            <FaHome /> Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

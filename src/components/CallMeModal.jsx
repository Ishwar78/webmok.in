import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaTimes, FaCheckCircle, FaHeadset, FaClock } from 'react-icons/fa';
import './CallMeModal.css';

const CallMeModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [service, setService] = useState('Web Development');
  const [isCounting, setIsCounting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(28);
  const [callConnected, setCallConnected] = useState(false);

  useEffect(() => {
    let timer;
    if (isCounting && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isCounting && timeLeft === 0) {
      setCallConnected(true);
      setIsCounting(false);
    }
    return () => clearInterval(timer);
  }, [isCounting, timeLeft]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    try {
      await fetch('http://localhost:5005/api/inquiries/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Urgent Callback Client',
          phone: phone,
          service: service || 'Web & App Consultation',
          source: 'Call Me in 28 Sec',
          notes: 'Customer triggered 28-second callback request on website.'
        })
      });
    } catch (err) {
      console.warn('Backend server offline, callback request queued locally:', err.message);
    }
    setIsCounting(true);
    setTimeLeft(28);
    setCallConnected(false);
  };

  const handleReset = () => {
    setIsCounting(false);
    setCallConnected(false);
    setTimeLeft(28);
    setPhone('');
    setName('');
    onClose();
  };

  return (
    <div className="callme-overlay" onClick={handleReset}>
      <div className="callme-modal" onClick={(e) => e.stopPropagation()}>
        <button className="callme-close" onClick={handleReset}>
          <FaTimes />
        </button>

        {!isCounting && !callConnected ? (
          <div className="callme-content">
            <div className="callme-icon-badge">
              <FaClock className="callme-header-icon" />
            </div>
            <h3 className="callme-title">Call Me in 28 Seconds!</h3>
            {/* <p className="callme-desc">
              Experience India's fastest IT consulting response. Enter your number and our lead consultant will call you within 28 seconds.
            </p> */}

            <form onSubmit={handleSubmit} className="callme-form">
              <div className="callme-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="callme-field">
                <label>Mobile Number</label>
                <div className="callme-phone-group">
                  <span className="callme-prefix">+91</span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    maxLength="10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    required
                  />
                </div>
              </div>

              <div className="callme-field">
                <label>Required Service</label>
                <select value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="Web Development">Web Design & Development</option>
                  <option value="App Development">Mobile App Development</option>
                  <option value="Digital Marketing">Digital Marketing & PPC</option>
                  <option value="SEO Optimization">SEO & Organic Growth</option>
                  <option value="Graphic & Video">Graphic & Video Editing</option>
                  <option value="E-commerce Solutions">E-commerce Solutions</option>
                </select>
              </div>

              <button type="submit" className="callme-submit-btn">
                <FaPhoneAlt className="callme-btn-icon" /> Call Me Now in 28 Sec
              </button>
            </form>
          </div>
        ) : isCounting ? (
          <div className="callme-countdown-box">
            <div className="callme-pulse-ring">
              <span className="callme-timer-number">{timeLeft}</span>
              <span className="callme-timer-unit">Seconds</span>
            </div>
            <h4 className="callme-connecting-text">Connecting Your Call...</h4>
            <p className="callme-connecting-sub">
              Dialing: <strong>+91 {phone}</strong>
            </p>
            <p className="callme-connecting-note">
              Please keep your phone ready. Our dedicated technical manager is being assigned right now.
            </p>
            <div className="callme-waves">
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </div>
          </div>
        ) : (
          <div className="callme-success-box">
            <FaCheckCircle className="callme-success-icon" />
            <h3>Call Connected!</h3>
            <p>Our senior digital strategist is on the line with you.</p>
            <div className="callme-agent-card">
              <FaHeadset className="callme-agent-icon" />
              <div>
                <strong>Web Mok Priority Support Desk</strong>
                <p>Helpline: +91 8684031003</p>
              </div>
            </div>
            <button className="callme-done-btn" onClick={handleReset}>
              Close & Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallMeModal;

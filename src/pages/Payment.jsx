import React, { useState } from 'react';
import { FaLock, FaCreditCard, FaUniversity, FaQrcode, FaCheckCircle, FaRupeeSign, FaGlobe } from 'react-icons/fa';
import './Payment.css';

const Payment = () => {
  const [activeGateway, setActiveGateway] = useState('inr');
  const [amount, setAmount] = useState('25000');
  const [invoiceNo, setInvoiceNo] = useState('');
  const [clientName, setClientName] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    if (!clientName || !amount) {
      alert('Please provide client name and payment amount.');
      return;
    }
    setPaymentSuccess(true);
  };

  return (
    <div className="wm-payment-root">
      <section className="wm-payment-hero">
        <div className="wm-payment-container">
          <span className="wm-payment-tag">Secure Financial Gateway</span>
          <h1 className="wm-payment-title">Web Mok Official Payment Portal</h1>
          <p className="wm-payment-desc">
            Convenient, PCI-DSS compliant online payment channels for Webmok Pvt. Ltd. project milestones and retainer invoices.
          </p>
        </div>
      </section>

      <section className="wm-payment-body">
        <div className="wm-payment-container wm-payment-grid">
          {/* Payment Form Box */}
          <div className="wm-payment-form-card">
            <div className="wm-pg-tabs">
              <button
                className={`wm-pg-tab ${activeGateway === 'inr' ? 'active' : ''}`}
                onClick={() => setActiveGateway('inr')}
              >
                <FaRupeeSign /> INR Payment Link (UPI / Cards / NetBanking)
              </button>
              <button
                className={`wm-pg-tab ${activeGateway === 'intl' ? 'active' : ''}`}
                onClick={() => setActiveGateway('intl')}
              >
                <FaGlobe /> International Wire / SWIFT
              </button>
            </div>

            {activeGateway === 'inr' ? (
              !paymentSuccess ? (
                <form onSubmit={handlePay} className="wm-pform">
                  <div className="wm-pfield">
                    <label>Client / Company Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech Solutions"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="wm-pfield-row">
                    <div className="wm-pfield">
                      <label>Invoice Number (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. WM-2026-089"
                        value={invoiceNo}
                        onChange={(e) => setInvoiceNo(e.target.value)}
                      />
                    </div>
                    <div className="wm-pfield">
                      <label>Payable Amount (₹ INR) *</label>
                      <input
                        type="number"
                        placeholder="25000"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="wm-payment-methods-strip">
                    <span className="wm-pmethod-badge"><FaQrcode /> Instant UPI QR</span>
                    <span className="wm-pmethod-badge"><FaCreditCard /> Debit / Credit Card</span>
                    <span className="wm-pmethod-badge"><FaUniversity /> Net Banking (50+ Banks)</span>
                  </div>

                  <button type="submit" className="wm-pform-btn">
                    <FaLock /> Proceed to Razorpay Secure Gateway
                  </button>
                </form>
              ) : (
                <div className="wm-pay-success">
                  <FaCheckCircle className="wm-pay-chk" />
                  <h3>Payment Gateway Initialized</h3>
                  <p>Client: <strong>{clientName}</strong> | Amount: <strong>₹{amount}</strong></p>
                  <p className="wm-pay-notice">
                    Redirecting to 256-bit encrypted Razorpay Checkout. Please keep your UPI PIN or OTP ready.
                  </p>
                  <button className="wm-pay-reset" onClick={() => setPaymentSuccess(false)}>
                    Process Another Transaction
                  </button>
                </div>
              )
            ) : (
              <div className="wm-intl-details">
                <h3>International Wire / Swift Transfer Instructions</h3>
                <p>For cross-border clients located outside India, please use the following institutional banking credentials:</p>
                <div className="wm-bank-box">
                  <div className="wm-bank-row"><span>Beneficiary:</span> <strong>Webmok Pvt. Ltd.</strong></div>
                  <div className="wm-bank-row"><span>Bank Name:</span> <strong>HDFC Bank Ltd.</strong></div>
                  <div className="wm-bank-row"><span>Branch:</span> <strong>Dwarka Sector 12, New Delhi, India</strong></div>
                  <div className="wm-bank-row"><span>Account Type:</span> <strong>Current Commercial Account</strong></div>
                  <div className="wm-bank-row"><span>SWIFT / BIC Code:</span> <strong>HDFCINBBXXX</strong></div>
                  <div className="wm-bank-row"><span>IFSC Code:</span> <strong>HDFC0001234</strong></div>
                </div>
                <p className="wm-intl-note">
                  Please email the transaction reference receipt to <strong>info@webmok.in</strong> for immediate reconciliation and project initiation.
                </p>
              </div>
            )}
          </div>

          {/* Security & Verification Sidebar */}
          <aside className="wm-payment-side">
            <div className="wm-payment-side-card">
              <FaLock className="wm-pside-lock" />
              <h4>256-Bit Bank-Grade Encryption</h4>
              <p>All card numbers, net banking tokens, and UPI mandates are processed via RBI-authorized payment gateways with zero credential retention.</p>
            </div>

            <div className="wm-payment-side-card">
              <h4>Need an Official Tax Invoice?</h4>
              <p>GST invoices with formal input credit are automatically dispatched to your registered email upon payment confirmation.</p>
              <div className="wm-pside-contact">
                <span>Billing Inquiries:</span>
                <strong>info@webmok.in</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Payment;

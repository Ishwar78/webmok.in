import React from 'react';
import { FaTag, FaCheck, FaPhoneAlt } from 'react-icons/fa';
import './OfferDiscount.css';

const OfferDiscount = ({ onOpenCallMe, onOpenEnquiry }) => {
  const offers = [
    {
      title: 'Startup Launch Bundle',
      discount: '25% FLAT OFF',
      validity: 'Limited Time Seasonal Offer',
      price: '₹29,999',
      originalPrice: '₹40,000',
      features: [
        '5-Page Custom Responsive Website',
        'Free 1-Year Domain & High-Speed Cloud Hosting',
        'Business Email Setup (up to 5 inboxes)',
        'Basic On-Page SEO & Google Search Console Setup',
        'WhatsApp Live Chat Integration'
      ]
    },
    {
      title: 'E-Commerce Growth Accelerator',
      discount: '30% FLAT OFF',
      validity: 'Exclusive for New Brands',
      price: '₹59,999',
      originalPrice: '₹85,000',
      popular: true,
      features: [
        'Complete Shopify or WooCommerce Online Store',
        'Payment Gateway Integration (Razorpay, Stripe, UPI)',
        'Up to 100 Products Uploaded & Configured',
        'Abandoned Cart Automated Email Sequences',
        '1 Month Free Technical Maintenance'
      ]
    },
    {
      title: 'Total Digital Marketing Suite',
      discount: '₹15,000 OFF',
      validity: 'Quarterly Retainer Package',
      price: '₹35,000 / mo',
      originalPrice: '₹50,000 / mo',
      features: [
        'Complete Technical SEO & Keyword Optimization',
        'Google Ads & Meta Ads Management',
        '16 Custom Social Media Creatives & 4 Reels/mo',
        'Local SEO & Google Business Profile Ranking',
        'Dedicated Campaign Manager & Weekly Reports'
      ]
    }
  ];

  return (
    <div className="wm-offers-root">
      <section className="wm-offers-hero">
        <div className="wm-offers-container">
          <span className="wm-offers-tag">Special Promotions</span>
          <h1 className="wm-offers-title">Exclusive Offers & Package Discounts</h1>
          <p className="wm-offers-desc">
            Scale your digital infrastructure with premium engineering and marketing packages at competitive, bundled promotional rates.
          </p>
        </div>
      </section>

      <section className="wm-offers-body">
        <div className="wm-offers-container">
          <div className="wm-offers-grid">
            {offers.map((offer, idx) => (
              <div key={idx} className={`wm-offer-card ${offer.popular ? 'popular' : ''}`}>
                {offer.popular && <span className="wm-offer-badge">Most Popular</span>}
                <div className="wm-offer-head">
                  <span className="wm-discount-pill"><FaTag /> {offer.discount}</span>
                  <h3>{offer.title}</h3>
                  <span className="wm-validity">{offer.validity}</span>
                </div>

                <div className="wm-offer-pricing">
                  <span className="wm-current-price">{offer.price}</span>
                  <span className="wm-orig-price">{offer.originalPrice}</span>
                </div>

                <ul className="wm-offer-features">
                  {offer.features.map((f, i) => (
                    <li key={i}><FaCheck className="wm-ochk" /> {f}</li>
                  ))}
                </ul>

                <button className="wm-offer-btn" onClick={onOpenEnquiry}>
                  Claim This Special Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferDiscount;

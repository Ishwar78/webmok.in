const mongoose = require('mongoose');

const servicePageContentSchema = new mongoose.Schema(
  {
    serviceSlug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    serviceName: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'General'
    },
    // 1. Hero Section
    heroTitle: {
      type: String,
      default: ''
    },
    heroHighlight: {
      type: String,
      default: ''
    },
    heroSubtitle: {
      type: String,
      default: ''
    },
    heroRatingScore: {
      type: String,
      default: '4.9'
    },
    heroRatingReviewCount: {
      type: String,
      default: '250+ client reviews'
    },
    heroRatingText: {
      type: String,
      default: 'Rated 4.9 out of 5 across Clutch, Google, and verified platforms.'
    },

    // 2. Overview Section
    overviewTitle: {
      type: String,
      default: ''
    },
    overviewParagraph1: {
      type: String,
      default: ''
    },
    overviewParagraph2: {
      type: String,
      default: ''
    },

    // 3. Offerings / Features
    features: [
      {
        badge: { type: String, default: '' },
        title: { type: String, default: '' },
        desc: { type: String, default: '' },
        icon: { type: String, default: '' }
      }
    ],

    // 4. Frequently Asked Questions (FAQs)
    faqs: [
      {
        q: { type: String, required: true },
        a: { type: String, required: true }
      }
    ],

    // 5. Status & Meta
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('ServicePageContent', servicePageContentSchema);

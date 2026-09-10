const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Client / Reviewer name is required'],
      trim: true
    },
    designation: {
      type: String,
      default: '',
      trim: true
    },
    company: {
      type: String,
      default: '',
      trim: true
    },
    category: {
      type: String,
      enum: ['web', 'seo', 'ppc', 'brand', 'all'],
      default: 'web'
    },
    categoryName: {
      type: String,
      default: 'Web & eCommerce'
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5
    },
    date: {
      type: String,
      default: 'Recently'
    },
    platform: {
      type: String,
      default: 'Google Verified Review'
    },
    badge: {
      type: String,
      default: '5.0 Star Verified'
    },
    avatar: {
      type: String,
      default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    title: {
      type: String,
      required: [true, 'Review headline/title is required'],
      trim: true
    },
    text: {
      type: String,
      required: [true, 'Review text is required'],
      trim: true
    },
    order: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);

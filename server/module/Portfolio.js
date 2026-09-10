const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      default: ''
    },
    client: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['web', 'app', 'ecommerce', 'seo', 'branding'],
      default: 'web'
    },
    categoryName: {
      type: String,
      default: 'Web Development'
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&auto=format&fit=crop&q=80'
    },
    results: {
      type: String,
      default: '+300% Growth'
    },
    description: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'Digital Solution'
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);

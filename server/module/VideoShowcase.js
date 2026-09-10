const mongoose = require('mongoose');

const videoShowcaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Video showcase title is required'],
      trim: true
    },
    category: {
      type: String,
      enum: ['corporate', 'explainer', '3d', 'reels', 'all'],
      default: 'corporate'
    },
    categoryName: {
      type: String,
      default: 'Corporate Films'
    },
    client: {
      type: String,
      default: '',
      trim: true
    },
    duration: {
      type: String,
      default: '2:30 min',
      trim: true
    },
    views: {
      type: String,
      default: '100K+ Views',
      trim: true
    },
    thumbnail: {
      type: String,
      default: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80',
      trim: true
    },
    videoUrl: {
      type: String,
      required: [true, 'Video URL or embed link is required'],
      trim: true
    },
    videoType: {
      type: String,
      enum: ['youtube', 'upload', 'external'],
      default: 'youtube'
    },
    description: {
      type: String,
      default: '',
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

module.exports = mongoose.model('VideoShowcase', videoShowcaseSchema);

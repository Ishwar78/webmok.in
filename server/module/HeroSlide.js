const mongoose = require('mongoose');

const heroSlideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'Hero Slide'
    },
    badge: {
      type: String,
      default: ''
    },
    heading: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    primaryBtnText: {
      type: String,
      default: ''
    },
    primaryBtnLink: {
      type: String,
      default: ''
    },
    secondaryBtnText: {
      type: String,
      default: ''
    },
    secondaryBtnLink: {
      type: String,
      default: ''
    },
    mediaType: {
      type: String,
      enum: ['video', 'image'],
      default: 'video'
    },
    mediaUrl: {
      type: String,
      required: true,
      default: '/Home-Hero.mp4'
    },
    originalName: {
      type: String,
      default: ''
    },
    filename: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 0
    },
    mimeType: {
      type: String,
      default: ''
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
  {
    timestamps: true
  }
);

module.exports = mongoose.model('HeroSlide', heroSlideSchema);

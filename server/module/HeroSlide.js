const mongoose = require('mongoose');

const heroSlideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'Hero Slide'
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

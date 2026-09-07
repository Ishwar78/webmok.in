const mongoose = require('mongoose');

const heroVideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'Home Hero Video'
    },
    videoUrl: {
      type: String,
      default: '/Home-Hero.mp4'
    },
    originalName: {
      type: String,
      default: 'Home-Hero.mp4'
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
      default: 'video/mp4'
    },
    isDefault: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('HeroVideo', heroVideoSchema);

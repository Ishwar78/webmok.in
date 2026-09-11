const mongoose = require('mongoose');

const MarqueeSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true
    },
    position: {
      type: String,
      enum: ['top', 'bottom', 'topbar'],
      default: 'top',
      trim: true
    },
    icon: {
      type: String,
      default: '⚡',
      trim: true
    },
    badgeColor: {
      type: String,
      default: 'cyan',
      trim: true
    },
    speed: {
      type: String,
      default: 'normal',
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
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Marquee', MarqueeSchema);

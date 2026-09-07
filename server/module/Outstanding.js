const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  { _id: false }
);

const outstandingSchema = new mongoose.Schema(
  {
    tabKey: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    tabNumber: {
      type: String,
      required: true,
      default: '01'
    },
    tabTitle: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'FaChartLine'
    },
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    points: [pointSchema],
    mediaType: {
      type: String,
      enum: ['graph', 'image', 'video'],
      default: 'graph'
    },
    mediaUrl: {
      type: String,
      default: ''
    },
    mediaPoster: {
      type: String,
      default: ''
    },
    mediaBadgeText: {
      type: String,
      default: 'Active Growth Module'
    },
    order: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Outstanding', outstandingSchema);

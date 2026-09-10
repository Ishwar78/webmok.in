const mongoose = require('mongoose');

const creativeShowcaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Showcase title is required'],
      trim: true
    },
    category: {
      type: String,
      enum: ['packaging', 'social', 'branding', 'uiux', 'infographics', 'all'],
      default: 'packaging'
    },
    categoryName: {
      type: String,
      default: 'Packaging & Print'
    },
    client: {
      type: String,
      default: '',
      trim: true
    },
    deliverable: {
      type: String,
      default: '',
      trim: true
    },
    image: {
      type: String,
      required: [true, 'Showcase image is required'],
      trim: true
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

module.exports = mongoose.model('CreativeShowcase', creativeShowcaseSchema);

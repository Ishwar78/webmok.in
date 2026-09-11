const mongoose = require('mongoose');

const ServiceInquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    serviceName: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true
    },
    serviceCategory: {
      type: String,
      trim: true,
      default: 'General'
    },
    planName: {
      type: String,
      trim: true,
      default: 'Custom / Standard Plan'
    },
    company: {
      type: String,
      trim: true,
      default: ''
    },
    website: {
      type: String,
      trim: true,
      default: ''
    },
    budget: {
      type: String,
      trim: true,
      default: ''
    },
    message: {
      type: String,
      trim: true,
      default: ''
    },
    pageUrl: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'proposal_sent', 'converted', 'archived'],
      default: 'new'
    },
    notes: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ServiceInquiry', ServiceInquirySchema);

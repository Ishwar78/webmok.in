const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      default: ''
    },
    service: {
      type: String,
      default: 'Website Development & Design Services'
    },
    budget: {
      type: String,
      default: 'Flexible'
    },
    timeline: {
      type: String,
      default: 'Standard / 2-3 Weeks'
    },
    source: {
      type: String,
      default: 'Enquiry Now Modal'
    },
    notes: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['New', 'Callback Connected', 'In Discussion', 'Proposal Sent', 'Closed / Won'],
      default: 'New'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Enquiry', enquirySchema);

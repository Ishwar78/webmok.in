const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    subject: {
      type: String,
      trim: true,
      default: 'General Inquiry'
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ['New', 'In Review', 'Replied', 'Closed'],
      default: 'New'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('ContactMessage', contactMessageSchema);

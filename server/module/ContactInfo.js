const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema(
  {
    phonePrimary: {
      type: String,
      required: true,
      default: '8684031003'
    },
    phoneSecondary: {
      type: String,
      default: '+91 98765 43210'
    },
    emailPrimary: {
      type: String,
      required: true,
      default: 'info@webmok.in'
    },
    emailSupport: {
      type: String,
      default: 'support@webmok.in'
    },
    address: {
      type: String,
      required: true,
      default: '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)'
    },
    workingHours: {
      type: String,
      required: true,
      default: 'Monday - Saturday: 9:30 AM to 7:00 PM (Sunday Closed)'
    },
    whatsapp: {
      type: String,
      default: '8684031003'
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

module.exports = mongoose.model('ContactInfo', contactInfoSchema);

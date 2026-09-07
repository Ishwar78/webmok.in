const express = require('express');
const router = express.Router();
const ContactInfo = require('../module/ContactInfo');

const defaultDetails = {
  phonePrimary: '8684031003',
  phoneSecondary: '+91 98765 43210',
  emailPrimary: 'info@webmok.in',
  emailSupport: 'support@webmok.in',
  address: '2nd Floor, 130 B Sewak Park Dwarka Mor Opp. Metro P.No- 783 New Delhi (110059)',
  workingHours: 'Monday - Saturday: 9:30 AM to 7:00 PM (Sunday Closed)',
  whatsapp: '8684031003'
};

// GET current contact information
router.get('/', async (req, res) => {
  try {
    let info = await ContactInfo.findOne({ isDefault: true });
    if (!info) {
      info = await ContactInfo.findOne();
    }
    if (!info) {
      // Auto seed default record
      info = new ContactInfo(defaultDetails);
      await info.save();
    }
    res.json({
      success: true,
      data: info
    });
  } catch (error) {
    console.error('Error fetching contact info:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error fetching contact info',
      fallback: defaultDetails
    });
  }
});

// POST or PUT update contact information
router.post('/', async (req, res) => {
  try {
    const {
      phonePrimary,
      phoneSecondary,
      emailPrimary,
      emailSupport,
      address,
      workingHours,
      whatsapp
    } = req.body;

    if (!phonePrimary || !emailPrimary || !address) {
      return res.status(400).json({
        success: false,
        message: 'Primary Phone, Primary Email, and Address are required.'
      });
    }

    let info = await ContactInfo.findOne({ isDefault: true });
    if (!info) {
      info = await ContactInfo.findOne();
    }

    if (info) {
      info.phonePrimary = phonePrimary.trim();
      info.phoneSecondary = phoneSecondary ? phoneSecondary.trim() : '';
      info.emailPrimary = emailPrimary.trim().toLowerCase();
      info.emailSupport = emailSupport ? emailSupport.trim().toLowerCase() : '';
      info.address = address.trim();
      info.workingHours = workingHours ? workingHours.trim() : 'Monday - Saturday: 9:30 AM to 7:00 PM';
      info.whatsapp = whatsapp ? whatsapp.trim() : phonePrimary.trim();
      info.isDefault = true;
      await info.save();
    } else {
      info = new ContactInfo({
        phonePrimary: phonePrimary.trim(),
        phoneSecondary: phoneSecondary ? phoneSecondary.trim() : '',
        emailPrimary: emailPrimary.trim().toLowerCase(),
        emailSupport: emailSupport ? emailSupport.trim().toLowerCase() : '',
        address: address.trim(),
        workingHours: workingHours ? workingHours.trim() : 'Monday - Saturday: 9:30 AM to 7:00 PM',
        whatsapp: whatsapp ? whatsapp.trim() : phonePrimary.trim(),
        isDefault: true
      });
      await info.save();
    }

    console.log('✅ Contact info updated in MongoDB successfully!');
    res.json({
      success: true,
      message: 'Contact details updated and saved in database successfully!',
      data: info
    });
  } catch (error) {
    console.error('Error updating contact info:', error.message);
    res.status(500).json({ success: false, message: 'Server error updating contact info' });
  }
});

// PUT reset to default
router.put('/reset', async (req, res) => {
  try {
    let info = await ContactInfo.findOne({ isDefault: true });
    if (!info) info = await ContactInfo.findOne();

    if (info) {
      Object.assign(info, defaultDetails);
      await info.save();
    } else {
      info = new ContactInfo(defaultDetails);
      await info.save();
    }

    res.json({
      success: true,
      message: 'Contact information reset to original defaults.',
      data: info
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error resetting contact info' });
  }
});

module.exports = router;

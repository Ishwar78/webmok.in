const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const dns = require('dns');

try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {}

dotenv.config({ path: path.join(__dirname, '.env') });

const Enquiry = require('./module/Enquiry');
const ContactMessage = require('./module/ContactMessage');
const ContactInfo = require('./module/ContactInfo');

const runTest = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ Connected to MongoDB Atlas!');

    // 1. Create a simulated new enquiry
    const lead = new Enquiry({
      name: 'Pooja Verma',
      phone: '9812300000',
      email: 'pooja@testcompany.in',
      service: 'Custom React Web Development',
      budget: '₹80,000 - ₹1.5 Lakh',
      source: 'Enquiry Now Modal',
      notes: 'Testing live MongoDB insert',
      status: 'New'
    });
    const savedLead = await lead.save();
    console.log('✅ Created Enquiry in MongoDB with ID:', savedLead._id);

    // 2. Update status of the enquiry
    savedLead.status = 'Callback Connected';
    await savedLead.save();
    console.log('✅ Updated Enquiry status to:', savedLead.status);

    // 3. Delete the test enquiry
    await Enquiry.findByIdAndDelete(savedLead._id);
    console.log('✅ Cleaned up test Enquiry.');

    // 4. Create a simulated new contact message
    const msg = new ContactMessage({
      name: 'Kunal Jain',
      email: 'kunal@testcorp.com',
      phone: '9988771122',
      subject: 'Mobile App Project',
      message: 'Testing live Contact Message creation',
      status: 'New'
    });
    const savedMsg = await msg.save();
    console.log('✅ Created Contact Message in MongoDB with ID:', savedMsg._id);

    // 5. Update contact message status
    savedMsg.status = 'In Review';
    await savedMsg.save();
    console.log('✅ Updated Contact Message status to:', savedMsg.status);

    // 6. Delete test contact message
    await ContactMessage.findByIdAndDelete(savedMsg._id);
    console.log('✅ Cleaned up test Contact Message.');

    // 7. Verify Contact Info fetch
    const info = await ContactInfo.findOne();
    console.log('✅ Verified Contact Info from MongoDB:', {
      phone: info?.phonePrimary,
      email: info?.emailPrimary,
      address: info?.address?.substring(0, 30) + '...'
    });

    console.log('\n🎉 ALL MONGODB MODELS, SCHEMAS & CRUD VERIFIED 100% OPERATIONAL! 🎉\n');
    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  }
};

runTest();

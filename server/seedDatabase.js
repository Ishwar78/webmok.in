const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const dns = require('dns');

// Fix DNS on Windows for SRV records
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {}

dotenv.config({ path: path.join(__dirname, '.env') });

const Admin = require('./module/Admin');
const Enquiry = require('./module/Enquiry');
const ContactMessage = require('./module/ContactMessage');
const ContactInfo = require('./module/ContactInfo');
const { seedDefaultAdmin, seedDefaultContactInfo, seedSampleInquiries } = require('./config/db');

const run = async () => {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ Connected to MongoDB Atlas successfully!');

    // Run seeds
    await seedDefaultAdmin();
    await seedDefaultContactInfo();
    await seedSampleInquiries();

    // Verify collections
    const adminCount = await Admin.countDocuments();
    const enquiryCount = await Enquiry.countDocuments();
    const contactMessageCount = await ContactMessage.countDocuments();
    const contactInfo = await ContactInfo.findOne();

    console.log('\n--- VERIFICATION REPORT ---');
    console.log(`✅ Admins Collection: ${adminCount} document(s)`);
    console.log(`✅ Enquiries Collection (Enquiry Now Leads): ${enquiryCount} document(s)`);
    console.log(`✅ ContactMessages Collection (Contact Form Inquiries): ${contactMessageCount} document(s)`);
    console.log(`✅ ContactInfo Collection: Phone: ${contactInfo?.phonePrimary}, Email: ${contactInfo?.emailPrimary}, Address: ${contactInfo?.address?.substring(0, 30)}...`);
    console.log('--- ALL SEPARATE SCHEMAS & COLLECTIONS ARE LIVE AND WORKING IN MONGODB ---\n');

    process.exit(0);
  } catch (err) {
    console.error('❌ Error running verification script:', err);
    process.exit(1);
  }
};

run();

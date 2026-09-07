const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcryptjs');
const dns = require('dns');

// Set reliable public DNS servers to resolve MongoDB Atlas SRV records on Windows
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {
  // fallback to system default if restricted
}

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const Admin = require('./module/Admin');

const seed = async () => {
  try {
    const mongoUri = process.env.MONGODB_URL;
    if (!mongoUri) {
      throw new Error('MONGODB_URL is missing in .env file!');
    }

    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB Cluster successfully!');

    const adminEmail = 'admininfo@webmok.in';
    const adminPasswordPlain = 'Admin@info1234';

    let admin = await Admin.findOne({ email: adminEmail.toLowerCase() });

    if (!admin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(adminPasswordPlain, salt);

      admin = new Admin({
        name: 'Web Mok Administrator',
        email: adminEmail.toLowerCase(),
        password: hashedPassword,
        role: 'superadmin',
        isActive: true
      });

      await admin.save();
      console.log('====================================================');
      console.log('🎉 SUCCESS: Admin account created in MongoDB database!');
      console.log(`   Admin ID / Email : ${adminEmail}`);
      console.log(`   Admin Password   : ${adminPasswordPlain}`);
      console.log(`   Database         : webmok`);
      console.log('====================================================');
    } else {
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(adminPasswordPlain, salt);
      admin.isActive = true;
      await admin.save();
      console.log('====================================================');
      console.log('🔄 SUCCESS: Existing Admin password updated in MongoDB!');
      console.log(`   Admin ID / Email : ${adminEmail}`);
      console.log(`   Admin Password   : ${adminPasswordPlain}`);
      console.log(`   Database         : webmok`);
      console.log('====================================================');
    }

    await mongoose.disconnect();
    console.log('🔌 Disconnected cleanly. Done!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeder Error:', error);
    process.exit(1);
  }
};

seed();

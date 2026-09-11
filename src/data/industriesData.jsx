import React from 'react';
import {
  FaUniversity,
  FaHeartbeat,
  FaGraduationCap,
  FaIndustry,
  FaPlaneDeparture,
  FaBuilding,
  FaShoppingCart,
  FaFilm,
  FaTrophy,
  FaDumbbell,
  FaFutbol,
  FaUtensils,
  FaComments,
  FaBriefcase
} from 'react-icons/fa';

export const industriesData = [
  {
    id: 'finance',
    name: 'Finance',
    title: 'Finance & FinTech',
    desc: 'We engineer secure, high-compliance financial technology platforms, banking portals, and investment tools that empower users with seamless digital transactions and real-time portfolio analytics.',
    points: [
      'Digital banking & wallet solutions',
      'Investment & wealth management apps',
      'Real-time portfolio tracking & analytics',
      'Regulated KYC & secure payment gateways'
    ],
    icon: <FaUniversity />
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    title: 'Healthcare & MedTech',
    desc: 'Delivering HIPAA-compliant medical software, patient management ecosystems, and telemedicine solutions that streamline clinic workflows and elevate quality of patient care.',
    points: [
      'Telemedicine & virtual consultation apps',
      'Clinic & hospital management systems',
      'Electronic Health Records (EHR) integrations',
      'Patient appointment & prescription portals'
    ],
    icon: <FaHeartbeat />
  },
  {
    id: 'education',
    name: 'Education',
    title: 'Education & E-Learning',
    desc: 'Transforming modern education through interactive LMS platforms, student engagement dashboards, and virtual classroom technologies for schools, universities, and EdTech ventures.',
    points: [
      'Custom Learning Management Systems (LMS)',
      'Interactive live video classrooms',
      'Student progress & quiz assessment engines',
      'Multi-tier course subscription portals'
    ],
    icon: <FaGraduationCap />
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    title: 'Manufacturing & Industrial',
    desc: 'Optimizing supply chain visibility, automated inventory control, and factory telemetry with custom IoT-enabled industrial software and enterprise management portals.',
    points: [
      'Supply chain tracking & logistics systems',
      'Automated ERP & warehouse inventory tools',
      'Equipment telemetry & predictive monitoring',
      'Vendor management & procurement workflows'
    ],
    icon: <FaIndustry />
  },
  {
    id: 'travel',
    name: 'Travel',
    title: 'Travel & Hospitality',
    desc: 'Building immersive travel booking engines, hotel reservation portals, and customized itinerary management systems that deliver unforgettable guest experiences worldwide.',
    points: [
      'Flight, hotel & car rental booking engines',
      'Dynamic itinerary builders & tour planners',
      'Multi-currency global payment integrations',
      'Real-time GPS navigation & travel alerts'
    ],
    icon: <FaPlaneDeparture />
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    title: 'Real Estate & Property Tech',
    desc: 'Empowering developers, brokerages, and property managers with 3D virtual tour listings, CRM lead automation, and luxury property marketplace conversion funnels.',
    points: [
      'Luxury property marketplace portals',
      'Virtual 360° tour & floorplan integration',
      'Agent lead routing & MLS / IDX data sync',
      'Tenant rent collection & lease management'
    ],
    icon: <FaBuilding />
  },
  {
    id: 'ecommerce',
    name: 'eCommerce',
    title: 'eCommerce & Retail',
    desc: 'Architecting high-converting digital storefronts, multi-vendor marketplaces, and omnichannel retail platforms engineered for lightning-fast speeds and maximized sales revenue.',
    points: [
      'Custom Shopify & headless storefronts',
      'Multi-vendor marketplace platforms',
      'AI-driven personalized product recommendations',
      'Automated cart recovery & loyalty programs'
    ],
    icon: <FaShoppingCart />
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    title: 'Entertainment & Media Streaming',
    desc: 'Engineering scalable OTT streaming platforms, digital asset distribution pipelines, and event ticketing web applications built for massive concurrent audiences.',
    points: [
      'On-demand video & audio streaming portals',
      'Event ticketing & seat reservation systems',
      'DRM-protected content management systems',
      'Social community interaction & voting feeds'
    ],
    icon: <FaFilm />
  },
  {
    id: 'fantasy-sports',
    name: 'Fantasy Sports',
    title: 'Fantasy Sports & Gaming',
    desc: 'Developing real-time high-throughput fantasy sports platforms, live tournament drafting systems, and interactive leaderboards compliant with regulatory standards.',
    points: [
      'Live score tracking & real-time draft rooms',
      'Tournament creation & contest leaderboards',
      'Multi-sport support (Cricket, Football, NBA)',
      'Secure instant withdrawal & wallet gateways'
    ],
    icon: <FaTrophy />
  },
  {
    id: 'fitness',
    name: 'Fitness',
    title: 'Fitness',
    desc: 'We also create fitness web and mobile apps that help users track their workouts, set goals, and help them stay motivated. Our applications support personal trainers and gyms in managing client progress.',
    points: [
      'Fitness tracking appsqwertyuiopoiuygfdsa',
      'Workout planning systemsqwertyuiopkjhgfdsaqwerty',
      'Nutrition and diet trackingqwertyuiopasdfghjkl',
      'Gym management solutionsqwertyuiopasdfghjkl',
       'Fitness tracking apps qwertyuioplkjhgfdsa',
      'Workout planning systemsasdfghjklpoiuytrewq',
      'Nutrition and diet trackingqwertyuiopasdfghjkl',
      'Gym management solutionsqwertyuiopasdfghjk'
    ],
    icon: <FaDumbbell />
  },
  {
    id: 'sports',
    name: 'Sports',
    title: 'Sports',
    desc: 'Webmok is your mobile app development agency. We create digital platforms for sports organisations, teams, and enthusiasts, from live match tracking to fan engagement apps, to level up the amazing sports experience.',
    points: [
      'Sports event apps',
      'Real-time score tracking',
      'Fan engagement features',
      'Team management tools'
    ],
    icon: <FaFutbol />
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    title: 'Food Delivery & Restaurants',
    desc: 'Powering restaurant chains and cloud kitchens with automated order-dispatch systems, real-time rider tracking, and seamless customer ordering apps.',
    points: [
      'Real-time GPS delivery tracking & routing',
      'Multi-outlet digital menu & POS management',
      'Contactless ordering & QR payment tables',
      'Automated discount coupons & push loyalty'
    ],
    icon: <FaUtensils />
  },
  {
    id: 'social-networking',
    name: 'Social Networking',
    title: 'Social Networking & Community',
    desc: 'Creating vibrant community networks, peer-to-peer messaging platforms, and creator-economy portals with high-retention feeds and rich media sharing.',
    points: [
      'Real-time chat, video calling & feed updates',
      'Audio/video post sharing & stories',
      'Creator monetization & digital tipping',
      'Privacy controls & AI content moderation'
    ],
    icon: <FaComments />
  },
  {
    id: 'freelancing-platform',
    name: 'Freelancing Platform',
    title: 'Freelancing & Gig Economy',
    desc: 'Developing two-sided marketplace platforms connecting enterprises with skilled specialists through milestone escrow, portfolio vetting, and contract invoicing.',
    points: [
      'Milestone-based smart escrow payments',
      'Automated proposal bidding & talent vetting',
      'Time tracking & workspace project boards',
      'Multi-currency invoicing & tax compliance'
    ],
    icon: <FaBriefcase />
  }
];

export default industriesData;

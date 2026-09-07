import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallMeModal from './components/CallMeModal';
import EnquiryModal from './components/EnquiryModal';

// Public Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import SeoServicesPage from './pages/services/SeoServicesPage';
import PpcServicesPage from './pages/services/PpcServicesPage';
import LeadGenServicesPage from './pages/services/LeadGenServicesPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
// Dedicated Package Pages (Each with independent component & CSS)
import SeoPackagesPage from './pages/packages/SeoPackagesPage';
import LocalSeoPackagesPage from './pages/packages/LocalSeoPackagesPage';
import OffpageSeoPackagesPage from './pages/packages/OffpageSeoPackagesPage';
import OnpageSeoPackagesPage from './pages/packages/OnpageSeoPackagesPage';
import TechnicalSeoPackagesPage from './pages/packages/TechnicalSeoPackagesPage';
import WhiteLabelSeoPackagesPage from './pages/packages/WhiteLabelSeoPackagesPage';
import EnterpriseSeoPackagesPage from './pages/packages/EnterpriseSeoPackagesPage';

import SmmPackagesPage from './pages/packages/SmmPackagesPage';
import FacebookMarketingPackagesPage from './pages/packages/FacebookMarketingPackagesPage';
import InstagramMarketingPackagesPage from './pages/packages/InstagramMarketingPackagesPage';
import LinkedinMarketingPackagesPage from './pages/packages/LinkedinMarketingPackagesPage';
import YoutubeMarketingPackagesPage from './pages/packages/YoutubeMarketingPackagesPage';

import PpcPackagesPage from './pages/packages/PpcPackagesPage';
import OrmPackagesPage from './pages/packages/OrmPackagesPage';
import LogoDesignPackagesPage from './pages/packages/LogoDesignPackagesPage';
import SmoPackagesPage from './pages/packages/SmoPackagesPage';
import WebsiteMaintenancePackagesPage from './pages/packages/WebsiteMaintenancePackagesPage';
import WebsitePackagesPage from './pages/packages/WebsitePackagesPage';
import PackageDetailPage from './pages/packages/PackageDetailPage';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/clients/Testimonials';
import OurClients from './pages/clients/OurClients';
import CreativeShowcase from './pages/clients/CreativeShowcase';
import VideoShowcase from './pages/clients/VideoShowcase';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Career from './pages/Career';
import OfferDiscount from './pages/OfferDiscount';
import HireSeoExpert from './pages/HireSeoExpert';
import Payment from './pages/Payment';
import SiteMap from './pages/SiteMap';
import FAQ from './pages/FAQ';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Eager Page Stylesheets
import './pages/clients/Testimonials.css';
import './pages/clients/OurClients.css';
import './pages/clients/CreativeShowcase.css';
import './pages/clients/VideoShowcase.css';

// Eager Package Stylesheets
import './pages/packages/SeoPackagesPage.css';
import './pages/packages/LocalSeoPackagesPage.css';
import './pages/packages/OffpageSeoPackagesPage.css';
import './pages/packages/OnpageSeoPackagesPage.css';
import './pages/packages/TechnicalSeoPackagesPage.css';
import './pages/packages/WhiteLabelSeoPackagesPage.css';
import './pages/packages/EnterpriseSeoPackagesPage.css';
import './pages/packages/SmmPackagesPage.css';
import './pages/packages/FacebookMarketingPackagesPage.css';
import './pages/packages/InstagramMarketingPackagesPage.css';
import './pages/packages/LinkedinMarketingPackagesPage.css';
import './pages/packages/YoutubeMarketingPackagesPage.css';
import './pages/packages/PpcPackagesPage.css';
import './pages/packages/OrmPackagesPage.css';
import './pages/packages/LogoDesignPackagesPage.css';
import './pages/packages/SmoPackagesPage.css';
import './pages/packages/WebsiteMaintenancePackagesPage.css';
import './pages/packages/WebsitePackagesPage.css';




// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  const [isCallMeOpen, setIsCallMeOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const location = useLocation();

  // Check if current route is an admin page
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="wm-app-wrapper">
      <ScrollToTop />

      {/* Public Navbar (Hidden on Admin portal for clean workspace view) */}
      {!isAdminRoute && (
        <Navbar
          onOpenCallMe={() => setIsCallMeOpen(true)}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}

      {/* Main Page Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUs
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/seo-services-company"
          element={
            <SeoServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/ppc-services-company"
          element={
            <PpcServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/lead-generation-social-media-marketing-services-company"
          element={
            <LeadGenServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/digital-marketing"
          element={
            <DigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/:serviceSlug"
          element={
            <ServiceDetail
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        {/* Dedicated SEO Packages */}
        <Route
          path="/packages/seo-packages"
          element={
            <SeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/local-seo-packages"
          element={
            <LocalSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/offpage-seo-packages"
          element={
            <OffpageSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/onpage-seo-packages"
          element={
            <OnpageSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/technical-seo-packages"
          element={
            <TechnicalSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/white-label-seo-packages"
          element={
            <WhiteLabelSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/enterprise-seo-packages"
          element={
            <EnterpriseSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* Dedicated SMM Packages */}
        <Route
          path="/packages/smm-packages"
          element={
            <SmmPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/facebook-marketing-packages"
          element={
            <FacebookMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/instagram-marketing-packages"
          element={
            <InstagramMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/linkedin-marketing-packages"
          element={
            <LinkedinMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/youtube-marketing-packages"
          element={
            <YoutubeMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* Dedicated Marketing & Design Packages */}
        <Route
          path="/packages/ppc-packages"
          element={
            <PpcPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/orm-packages"
          element={
            <OrmPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/logo-design-packages"
          element={
            <LogoDesignPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/smo-packages"
          element={
            <SmoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/website-maintenance-packages"
          element={
            <WebsiteMaintenancePackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/packages/website-packages"
          element={
            <WebsitePackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* Dynamic Fallback */}
        <Route
          path="/packages/:packageSlug"
          element={
            <PackageDetailPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/portfolio/:projectId"
          element={
            <PortfolioDetail
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/blogs/:blogId"
          element={
            <BlogDetail
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/contact-us"
          element={
            <ContactUs onOpenCallMe={() => setIsCallMeOpen(true)} />
          }
        />
        <Route
          path="/testimonials"
          element={
            <Testimonials
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/our-clients"
          element={
            <OurClients
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/clients"
          element={
            <OurClients
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/creative-showcase"
          element={
            <CreativeShowcase
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/video-showcase"
          element={
            <VideoShowcase
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/career"
          element={
            <Career onOpenEnquiry={() => setIsEnquiryOpen(true)} />
          }
        />
        <Route
          path="/offers"
          element={
            <OfferDiscount
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/hire-seo-expert"
          element={
            <HireSeoExpert
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/site-map" element={<SiteMap />} />
        <Route
          path="/faq"
          element={
            <FAQ
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* Admin Management Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Catch-all fallback */}
        <Route
          path="*"
          element={
            <Home
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
      </Routes>

      {/* Public Footer */}
      {!isAdminRoute && <Footer />}

      {/* Interactive Global Modals */}
      <CallMeModal
        isOpen={isCallMeOpen}
        onClose={() => setIsCallMeOpen(false)}
      />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

export default App;

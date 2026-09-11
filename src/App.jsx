import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallMeModal from './components/CallMeModal';
import EnquiryModal from './components/EnquiryModal';
import MobileBottomBar from './components/MobileBottomBar';

// Public Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
// Dedicated 23 Service Pages (Each with independent component, embedded content & CSS)
import SeoServicesPage from './pages/services/SeoServicesPage';
import PpcServicesPage from './pages/services/PpcServicesPage';
import LeadGenServicesPage from './pages/services/LeadGenServicesPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import WordPressServicesPage from './pages/services/WordPressServicesPage';
import WebDesignServicesPage from './pages/services/WebDesignServicesPage';
import EcommerceServicesPage from './pages/services/EcommerceServicesPage';
import LandingPageServicesPage from './pages/services/LandingPageServicesPage';
import EnterpriseWebServicesPage from './pages/services/EnterpriseWebServicesPage';
import AppDevServicesPage from './pages/services/AppDevServicesPage';
import AndroidAppServicesPage from './pages/services/AndroidAppServicesPage';
import IosAppServicesPage from './pages/services/IosAppServicesPage';
import ShopifyWooServicesPage from './pages/services/ShopifyWooServicesPage';
import MarketplaceServicesPage from './pages/services/MarketplaceServicesPage';
import ContentMarketingPage from './pages/services/ContentMarketingPage';
import SocialMediaMarketingPage from './pages/services/SocialMediaMarketingPage';
import VideoGraphicServicesPage from './pages/services/VideoGraphicServicesPage';
import OrmServicesPage from './pages/services/OrmServicesPage';
import BusinessConsultingPage from './pages/services/BusinessConsultingPage';
import DataSciencePage from './pages/services/DataSciencePage';
import ComputerTrainingPage from './pages/services/ComputerTrainingPage';
import BrandingServicesPage from './pages/services/BrandingServicesPage';
import FacebookMarketingPage from './pages/services/FacebookMarketingPage';
import MobileMarketingServicesPage from './pages/services/MobileMarketingServicesPage';
import VideoEditingServicesPage from './pages/services/VideoEditingServicesPage';
import SocialMediaOptimizationPage from './pages/services/SocialMediaOptimizationPage';
import LogoDesignServicesPage from './pages/services/LogoDesignServicesPage';
import PromotionalVideoServicesPage from './pages/services/PromotionalVideoServicesPage';
import SocialMediaGraphicDesignPage from './pages/services/SocialMediaGraphicDesignPage';
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

// Dedicated 15 International Geo-Targeted Pages (Each with independent component & CSS)
import MiamiDigitalMarketingPage from './pages/international/MiamiDigitalMarketingPage';
import FloridaDigitalMarketingPage from './pages/international/FloridaDigitalMarketingPage';
import SeoServicesNewYorkPage from './pages/international/SeoServicesNewYorkPage';
import LosAngelesDigitalMarketingPage from './pages/international/LosAngelesDigitalMarketingPage';
import SanFranciscoDigitalMarketingPage from './pages/international/SanFranciscoDigitalMarketingPage';
import CanadaDigitalMarketingPage from './pages/international/CanadaDigitalMarketingPage';
import TorontoDigitalMarketingPage from './pages/international/TorontoDigitalMarketingPage';
import OttawaDigitalMarketingPage from './pages/international/OttawaDigitalMarketingPage';
import EuropeDigitalMarketingPage from './pages/international/EuropeDigitalMarketingPage';
import UkDigitalMarketingPage from './pages/international/UkDigitalMarketingPage';
import LondonDigitalMarketingPage from './pages/international/LondonDigitalMarketingPage';
import DubaiDigitalMarketingPage from './pages/international/DubaiDigitalMarketingPage';
import SouthAfricaDigitalMarketingPage from './pages/international/SouthAfricaDigitalMarketingPage';
import AustraliaDigitalMarketingPage from './pages/international/AustraliaDigitalMarketingPage';
import MelbourneDigitalMarketingPage from './pages/international/MelbourneDigitalMarketingPage';
import InternationalDynamicPage from './pages/international/InternationalDynamicPage';

import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/clients/Testimonials';
import OurClients from './pages/clients/OurClients';
import CreativeShowcase from './pages/clients/CreativeShowcase';
import VideoShowcase from './pages/clients/VideoShowcase';
import VideoReviews from './pages/clients/VideoReviews';
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
import './pages/clients/VideoReviews.css';

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

// Eager International Stylesheets
import './pages/international/MiamiDigitalMarketingPage.css';
import './pages/international/FloridaDigitalMarketingPage.css';
import './pages/international/SeoServicesNewYorkPage.css';
import './pages/international/LosAngelesDigitalMarketingPage.css';
import './pages/international/SanFranciscoDigitalMarketingPage.css';
import './pages/international/CanadaDigitalMarketingPage.css';
import './pages/international/TorontoDigitalMarketingPage.css';
import './pages/international/OttawaDigitalMarketingPage.css';
import './pages/international/EuropeDigitalMarketingPage.css';
import './pages/international/UkDigitalMarketingPage.css';
import './pages/international/LondonDigitalMarketingPage.css';
import './pages/international/DubaiDigitalMarketingPage.css';
import './pages/international/SouthAfricaDigitalMarketingPage.css';
import './pages/international/AustraliaDigitalMarketingPage.css';
import './pages/international/MelbourneDigitalMarketingPage.css';





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
        {/* =========================================================================
            DIRECT ROOT-LEVEL SERVICE ROUTES (No /services/ prefix required)
           ========================================================================= */}
        <Route
          path="/seo-services-company"
          element={
            <SeoServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/ppc-services-company"
          element={
            <PpcServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/lead-generation-social-media-marketing-services-company"
          element={
            <LeadGenServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/digital-marketing"
          element={
            <DigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/digital-marketing-services-company"
          element={
            <DigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/mobile-marketing-services-company"
          element={
            <MobileMarketingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/mobile-marketing"
          element={
            <MobileMarketingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/word-press-development-services-company"
          element={
            <WordPressServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/web-designing-development-services-company"
          element={
            <WebDesignServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/e-commerce-website-design-development-services-company"
          element={
            <EcommerceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/e-commerce-development"
          element={
            <EcommerceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/e-commerce-development-services-company"
          element={
            <EcommerceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/landing-page-development-services-company"
          element={
            <LandingPageServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/website-design-development-rohtak-delhi"
          element={
            <EnterpriseWebServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/application-development"
          element={
            <AppDevServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/mobile-app-development-services-company"
          element={
            <AppDevServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/application-development-services"
          element={
            <AppDevServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/android-app-development"
          element={
            <AndroidAppServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/ios-app-development"
          element={
            <IosAppServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/shopify-woocommerce"
          element={
            <ShopifyWooServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/custom-marketplace"
          element={
            <MarketplaceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/content-marketing-services-company"
          element={
            <ContentMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/social-media-marketing"
          element={
            <SocialMediaMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/video-and-graphic-development-company"
          element={
            <VideoGraphicServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/video-editing"
          element={
            <VideoEditingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/video-editing-services-company"
          element={
            <VideoEditingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/social-media-graphic-design-services-company"
          element={
            <SocialMediaGraphicDesignPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/social-media-graphic-design"
          element={
            <SocialMediaGraphicDesignPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/promotional-video-editing-services-company"
          element={
            <PromotionalVideoServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/promotional-video"
          element={
            <PromotionalVideoServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/online-reputation-management-services-company"
          element={
            <OrmServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/business-development-consulting"
          element={
            <BusinessConsultingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/data-science"
          element={
            <DataSciencePage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/computer-training"
          element={
            <ComputerTrainingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/branding"
          element={
            <BrandingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/logo-design-services-company"
          element={
            <LogoDesignServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/logo-design"
          element={
            <LogoDesignServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/social-media-optimization-services-company"
          element={
            <SocialMediaOptimizationPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/social-media-optimization"
          element={
            <SocialMediaOptimizationPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/facebook-marketing"
          element={
            <FacebookMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/facebook-marketing-services-company"
          element={
            <FacebookMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/website-development-and-design-services"
          element={
            <EnterpriseWebServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* Dedicated 23 Individual Service Pages */}
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
          path="/services/digital-marketing-services-company"
          element={
            <DigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/mobile-marketing-services-company"
          element={
            <MobileMarketingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/mobile-marketing"
          element={
            <MobileMarketingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/word-press-development-services-company"
          element={
            <WordPressServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/web-designing-development-services-company"
          element={
            <WebDesignServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/e-commerce-website-design-development-services-company"
          element={
            <EcommerceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/e-commerce-development"
          element={
            <EcommerceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/e-commerce-development-services-company"
          element={
            <EcommerceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/landing-page-development-services-company"
          element={
            <LandingPageServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/website-design-development-rohtak-delhi"
          element={
            <EnterpriseWebServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/website-development-and-design-services"
          element={
            <EnterpriseWebServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/application-development"
          element={
            <AppDevServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/mobile-app-development-services-company"
          element={
            <AppDevServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/application-development-services"
          element={
            <AppDevServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/android-app-development"
          element={
            <AndroidAppServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/ios-app-development"
          element={
            <IosAppServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/shopify-woocommerce"
          element={
            <ShopifyWooServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/custom-marketplace"
          element={
            <MarketplaceServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/content-marketing-services-company"
          element={
            <ContentMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/social-media-marketing"
          element={
            <SocialMediaMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/video-and-graphic-development-company"
          element={
            <VideoGraphicServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/video-editing"
          element={
            <VideoEditingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/video-editing-services-company"
          element={
            <VideoEditingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/social-media-graphic-design-services-company"
          element={
            <SocialMediaGraphicDesignPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/social-media-graphic-design"
          element={
            <SocialMediaGraphicDesignPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/promotional-video-editing-services-company"
          element={
            <PromotionalVideoServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/promotional-video"
          element={
            <PromotionalVideoServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/online-reputation-management-services-company"
          element={
            <OrmServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/business-development-consulting"
          element={
            <BusinessConsultingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/data-science"
          element={
            <DataSciencePage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/computer-training"
          element={
            <ComputerTrainingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/branding"
          element={
            <BrandingServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/logo-design-services-company"
          element={
            <LogoDesignServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/logo-design"
          element={
            <LogoDesignServicesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/social-media-optimization-services-company"
          element={
            <SocialMediaOptimizationPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/social-media-optimization"
          element={
            <SocialMediaOptimizationPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/facebook-marketing"
          element={
            <FacebookMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/services/facebook-marketing-services-company"
          element={
            <FacebookMarketingPage
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
        {/* =========================================================================
            DIRECT ROOT-LEVEL PACKAGE ROUTES (No /packages/ prefix required)
           ========================================================================= */}
        <Route
          path="/seo-packages"
          element={
            <SeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/local-seo-packages"
          element={
            <LocalSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/offpage-seo-packages"
          element={
            <OffpageSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/onpage-seo-packages"
          element={
            <OnpageSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/technical-seo-packages"
          element={
            <TechnicalSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/white-label-seo-packages"
          element={
            <WhiteLabelSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/enterprise-seo-packages"
          element={
            <EnterpriseSeoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/smm-packages"
          element={
            <SmmPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/facebook-marketing-packages"
          element={
            <FacebookMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/instagram-marketing-packages"
          element={
            <InstagramMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/linkedin-marketing-packages"
          element={
            <LinkedinMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/youtube-marketing-packages"
          element={
            <YoutubeMarketingPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/ppc-packages"
          element={
            <PpcPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/orm-packages"
          element={
            <OrmPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/logo-design-packages"
          element={
            <LogoDesignPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/smo-packages"
          element={
            <SmoPackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/website-maintenance-packages"
          element={
            <WebsiteMaintenancePackagesPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/website-packages"
          element={
            <WebsitePackagesPage
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

        {/* Direct International Geo-Targeted Routes (Domain Root Slugs) */}
        <Route
          path="/miami-digital-marketing"
          element={
            <MiamiDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/florida-digital-marketing"
          element={
            <FloridaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/seo-services-new-york"
          element={
            <SeoServicesNewYorkPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/los-angeles-digital-marketing"
          element={
            <LosAngelesDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/san-francisco-digital-marketing"
          element={
            <SanFranciscoDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/canada-digital-marketing"
          element={
            <CanadaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/toronto-digital-marketing"
          element={
            <TorontoDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/ottawa-digital-marketing"
          element={
            <OttawaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/europe-digital-marketing"
          element={
            <EuropeDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/uk-digital-marketing"
          element={
            <UkDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/london-digital-marketing"
          element={
            <LondonDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/dubai-digital-marketing"
          element={
            <DubaiDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/south-africa-digital-marketing"
          element={
            <SouthAfricaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/australia-digital-marketing"
          element={
            <AustraliaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/melbourne-digital-marketing"
          element={
            <MelbourneDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* 15 Dedicated International Geo-Targeted Routes (Legacy /international/ Prefix) */}
        <Route
          path="/international/miami-digital-marketing"
          element={
            <MiamiDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/florida-digital-marketing"
          element={
            <FloridaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/seo-services-new-york"
          element={
            <SeoServicesNewYorkPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/los-angeles-digital-marketing"
          element={
            <LosAngelesDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/san-francisco-digital-marketing"
          element={
            <SanFranciscoDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/canada-digital-marketing"
          element={
            <CanadaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/toronto-digital-marketing"
          element={
            <TorontoDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/ottawa-digital-marketing"
          element={
            <OttawaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/europe-digital-marketing"
          element={
            <EuropeDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/uk-digital-marketing"
          element={
            <UkDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/london-digital-marketing"
          element={
            <LondonDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/dubai-digital-marketing"
          element={
            <DubaiDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/south-africa-digital-marketing"
          element={
            <SouthAfricaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/australia-digital-marketing"
          element={
            <AustraliaDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/international/melbourne-digital-marketing"
          element={
            <MelbourneDigitalMarketingPage
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

        {/* Dynamic Fallback for Any Custom / Newly Added International Geo Pages */}
        <Route
          path="/international/:slug"
          element={
            <InternationalDynamicPage
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
        <Route
          path="/video-reviews"
          element={
            <VideoReviews
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />
        <Route
          path="/video-testimonials"
          element={
            <VideoReviews
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

        {/* Direct Root-Level Blog Articles Route (e.g. /:blogId) */}
        <Route
          path="/:blogId"
          element={
            <BlogDetail
              onOpenCallMe={() => setIsCallMeOpen(true)}
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
            />
          }
        />

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

      {/* Mobile Sticky Quick-Action Bar (Home, Call, WhatsApp, Inquiry) */}
      {!isAdminRoute && (
        <MobileBottomBar
          onOpenCallMe={() => setIsCallMeOpen(true)}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}

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

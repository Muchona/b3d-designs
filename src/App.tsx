import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ServicesGrid from './components/ServicesGrid.tsx';
import InteractiveLab from './components/InteractiveLab.tsx';
import ExteriorVisualization from './components/ExteriorVisualization.tsx';
import Packages from './components/Packages.tsx';
import TwoDDrafting from './components/TwoDDrafting.tsx';
import ThreeDModeling from './components/ThreeDModeling.tsx';
import InteriorVisualization from './components/InteriorVisualization.tsx';
import AugmentedReality from './components/AugmentedReality.tsx';
import PlanningPermission from './components/PlanningPermission.tsx';
import VirtualReality from './components/VirtualReality.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import Terms from './components/Terms.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import StructuredData from './components/StructuredData.tsx';
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from './utils/structuredData.ts';
import useSEO from './hooks/useSEO.ts';

function Home() {
  useSEO({
    title: 'B3D Designs | 3D Architectural Visualization — Ireland, UK & Worldwide',
    description:
      'Premium 3D architectural visualization, VR walkthroughs & interior design rendering. Photorealistic exterior renders, planning permission visuals, and immersive virtual reality. Serving Ireland, UK & worldwide.',
    keywords:
      '3D architectural visualization, photorealistic renders, VR walkthroughs, interior design rendering, planning permission visuals, Dublin Ireland, exterior visualization, virtual reality architecture',
    ogType: 'website',
  });

  return (
    <>
      <Hero />
      <ServicesGrid />
      <Packages />
      <InteractiveLab />
    </>
  );
}

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-blue-600 selection:text-white">
      {/* Global Structured Data — always present */}
      <StructuredData
        data={[
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          getWebSiteSchema(),
        ]}
      />

      <ScrollToTop />

      {/* Semantic: Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/exterior-visualization" element={<ExteriorVisualization />} />
          <Route path="/services/2d-drafting" element={<TwoDDrafting />} />
          <Route path="/services/3d-modeling" element={<ThreeDModeling />} />
          <Route path="/services/interior-visualization" element={<InteriorVisualization />} />
          <Route path="/services/augmented-reality" element={<AugmentedReality />} />

          <Route path="/services/planning-permission" element={<PlanningPermission />} />
          <Route path="/services/virtual-reality" element={<VirtualReality />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gallery" element={<Navigate to="/#services" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

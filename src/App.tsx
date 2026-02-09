import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ServicesGrid from './components/ServicesGrid.tsx';
import InteractiveLab from './components/InteractiveLab.tsx';
import ExteriorVisualization from './components/ExteriorVisualization.tsx';
import InteriorDesign from './components/InteriorDesign.tsx';
import PlanningPermission from './components/PlanningPermission.tsx';
import VirtualReality from './components/VirtualReality.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import Terms from './components/Terms.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <InteractiveLab />
    </>
  );
}

function App() {
  return (
    <main className="font-sans antialiased text-gray-900 selection:bg-bureau-blue selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/exterior-visualization" element={<ExteriorVisualization />} />
        <Route path="/services/interior-design" element={<InteriorDesign />} />
        <Route path="/services/planning-permission" element={<PlanningPermission />} />
        <Route path="/services/virtual-reality" element={<VirtualReality />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gallery" element={<Navigate to="/#services" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App

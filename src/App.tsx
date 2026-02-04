import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import InteractiveLab from './components/InteractiveLab';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App

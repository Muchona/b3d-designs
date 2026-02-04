
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';

export default function Hero() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-deep-space">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

            {/* Content Left-Aligned (Reference Style) */}
            <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24 max-w-7xl mx-auto pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="max-w-3xl pointer-events-auto"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-blue-600"></div>
                        <span className="text-gray-300 font-sans tracking-[0.2em] text-sm uppercase font-bold">
                            Architecture & Development
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-display font-medium text-white leading-[1.1] mb-8">
                        Bringing Your <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Vision to Life.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-xl leading-relaxed">
                        We specialize in high-end 3D visualization, immersive VR/AR experiences, and digital marketing solutions for the built environment.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <Link to="/gallery" className="px-8 py-4 bg-blue-600 text-center text-white font-bold tracking-widest uppercase text-xs hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-900/20">
                            Our Gallery
                        </Link>
                        <button
                            onClick={() => setIsEnquiryOpen(true)}
                            className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Make an Enquiry
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
            </motion.div>

            {/* Modal */}
            <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
        </section>
    );
}

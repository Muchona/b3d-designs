import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnquiryModal from './EnquiryModal.tsx';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Dynamically import all images from the scrollytelling folder
const images = import.meta.glob('../assets/scrollytelling/*.jpg', { eager: true, query: '?url', import: 'default' });
// Sort images by filename to ensure correct sequence
const scrollyImages = Object.entries(images)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, url]) => url as string);

export default function Hero() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        // Preload images to ensure smooth animation
        let loadedCount = 0;
        const totalImages = scrollyImages.length;

        if (totalImages === 0) return;

        scrollyImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
        });
    }, []);

    useEffect(() => {
        if (!heroRef.current || !imagesLoaded || scrollyImages.length === 0) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=300%", // Extra scroll depth for a cinematic feel
                    scrub: 0.5, // Smoother scrubbing
                    pin: true,
                    anticipatePin: 1
                }
            });

            const imgs = gsap.utils.toArray(".scrolly-frame");

            // Animation logic: Layered Fade
            imgs.forEach((img, i) => {
                if (i === 0) {
                    gsap.set(img as any, { opacity: 1 });
                } else {
                    // Current image fades IN over the previous one
                    // Previous image stays solid until current one is mostly opaque
                    tl.to(img as any, {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power1.inOut"
                    }, i - 0.2); // Overlap slightly with previous step
                }

                // Continuous zoom effect
                tl.to(img as any, {
                    scale: 1.08,
                    duration: 1.2,
                    ease: "none"
                }, i);
            });

            // Final state: dim the last frame slightly to keep text readable as user continues scrolling
            tl.to(".scrolly-container", {
                filter: "brightness(0.6)",
                duration: 0.5
            });

        }, heroRef);

        return () => ctx.revert();
    }, [imagesLoaded]);

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Scrollytelling Background Layer */}
            <div className="absolute inset-0 z-0 scrolly-container">
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Loading Cinema...</span>
                        </div>
                    </div>
                )}
                {scrollyImages.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Architectural Frame ${i}`}
                        className="scrolly-frame absolute inset-0 w-full h-full object-cover opacity-0 transition-transform duration-1000"
                        style={{
                            zIndex: i,
                            // Performance/Quality hints
                            imageRendering: 'auto'
                        }}
                    />
                ))}
            </div>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />

            {/* Content Left-Aligned */}
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
                        Precision, passion, and performance. We transform concepts into ultra-realistic digital realities that drive value and inspire trust.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <Link to="/#services" className="px-8 py-4 bg-blue-600 text-center text-white font-bold tracking-widest uppercase text-xs hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-900/20">
                            Our Services
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

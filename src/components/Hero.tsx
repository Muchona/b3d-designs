import { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
    .map(([, url]) => url as string);

export default function Hero() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imageObjects = useRef<HTMLImageElement[]>([]);

    // 1. Preload Images into Memory
    useEffect(() => {
        let isMounted = true;
        let loadedCount = 0;
        const totalImages = scrollyImages.length;

        if (totalImages === 0) {
            setImagesLoaded(true);
            return;
        }

        const loadedImages: HTMLImageElement[] = [];

        scrollyImages.forEach((src, index) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                if (!isMounted) return;
                loadedCount++;
                if (loadedCount === totalImages) {
                    imageObjects.current = loadedImages;
                    setImagesLoaded(true);
                }
            };
            // Maintain order
            loadedImages[index] = img;
        });

        return () => {
            isMounted = false;
        };
    }, []);

    // 2. Setup Canvas & Animation
    useLayoutEffect(() => {
        if (!imagesLoaded || !canvasRef.current || imageObjects.current.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Initial render helper
        const renderFrame = (index: number) => {
            const img = imageObjects.current[index];
            if (!img) return;

            // Cover logic (contain/cover emulation for canvas)
            const w = canvas.width;
            const h = canvas.height;
            const imgW = img.naturalWidth;
            const imgH = img.naturalHeight;
            const aspect = w / h;
            const imgAspect = imgW / imgH;

            let drawW, drawH, drawX, drawY;

            if (imgAspect > aspect) {
                // Image is wider than canvas
                drawH = h;
                drawW = h * imgAspect;
                drawX = (w - drawW) / 2;
                drawY = 0;
            } else {
                // Image is taller than canvas
                drawW = w;
                drawH = w / imgAspect;
                drawX = 0;
                drawY = (h - drawH) / 2;
            }

            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(img, drawX, drawY, drawW, drawH);
        };

        // Resize handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-render current frame if needed (simplification: render first frame or current generic)
            // Ideally we tracked the current frame index, but GSAP controls that.
            // GSAP will re-render on scroll update anyway.
        };

        // Set initial size
        handleResize();
        window.addEventListener('resize', handleResize);

        // GSAP Context
        const gsapCtx = gsap.context(() => {
            const frames = { current: 0 };

            // Initial draw
            renderFrame(0);

            // Timeline
            gsap.to(frames, {
                current: imageObjects.current.length - 1,
                snap: "current", // Snap to integer frames
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=500%", // Longer scroll for smoother playback
                    scrub: 0.1, // Very responsive scrub
                    pin: true,
                    // onUpdate: (self) => renderFrame(Math.round(frames.current)) // Managed by tween update
                },
                onUpdate: () => {
                    renderFrame(Math.round(frames.current));
                }
            });
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            gsapCtx.revert();
        };
    }, [imagesLoaded]);

    return (
        <section ref={containerRef} className="relative bg-black w-full overflow-hidden h-screen">
            {/* 1. Canvas Layer (The "Video") */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover z-0 block"
            />

            {/* 2. Loading State */}
            {!imagesLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Loading Experience...</span>
                    </div>
                </div>
            )}

            {/* 3. Gradient Overlay (Cinematic look) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

            {/* 4. Content */}
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

            {/* 5. Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
                onClick={() => window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'smooth' })}
            >
                <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
            </motion.div>

            {/* Modal */}
            <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
        </section>
    );
}

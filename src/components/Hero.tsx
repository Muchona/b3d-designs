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
                    // Draw first frame immediately
                    renderFrame(0);
                }
            };
            // Maintain order
            loadedImages[index] = img;
        });

        return () => {
            isMounted = false;
        };
    }, []);


    // 2. Rendering Function
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = imageObjects.current[index];

        if (canvas && ctx && img) {
            // Draw image to fill canvas (cover style)
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }
    };

    // 3. Animation Logic
    useLayoutEffect(() => {
        if (!imagesLoaded) return;

        const ctx = gsap.context(() => {
            const totalFrames = scrollyImages.length - 1;
            const airpods = { frame: 0 };

            gsap.to(airpods, {
                frame: totalFrames,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                },
                onUpdate: () => renderFrame(airpods.frame)
            });
        }, containerRef);

        return () => ctx.revert();
    }, [imagesLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                if (imagesLoaded) renderFrame(0);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded]);

    return (
        <>
            <section ref={containerRef} className="relative h-[800vh] bg-black">
                {/* Fixed Canvas Container */}
                <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover transition-opacity duration-1000"
                        style={{ opacity: imagesLoaded ? 1 : 0 }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Non-scrolling Overlay Content (if needed) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="z-10"
                        >
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 uppercase tracking-[0.2em] leading-tight">
                                Design <br /> Beyond <br /> Limits
                            </h1>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">Scroll to explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-bureau-blue to-transparent" />
                    </motion.div>
                </div>

                {/* Floating Content Blocks that scroll over the canvas */}
                <div className="relative z-20 container mx-auto px-6 pointer-events-none">
                    {/* First Block - Dublin Based */}
                    <div className="h-screen flex items-center justify-start py-20 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-20%" }}
                            className="max-w-xl bg-black/40 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-2xl pointer-events-auto"
                        >
                            <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4 block">Dublin Based</span>
                            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                                High Performance <br /> Design Engineering
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Specializing in 3D architecture, interior design, and immersive VR experiences.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-white text-sm uppercase tracking-widest gap-4 group">
                                <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
                                Our Story
                            </Link>
                        </motion.div>
                    </div>

                    {/* Second Block - Center Image View */}
                    <div className="h-[200vh]" /> {/* Gap */}

                    {/* Third Block - Interactive 3D */}
                    <div className="h-screen flex items-center justify-end py-20 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-20%" }}
                            className="max-w-xl bg-black/40 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-2xl pointer-events-auto"
                        >
                            <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4 block">Architecture</span>
                            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                                Immersive <br /> Living Spaces
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10">
                                We transform architectural concepts into high-fidelity visual narratives.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setIsEnquiryOpen(true)}
                                    className="bg-bureau-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
                                >
                                    Get a Quote
                                </button>
                                <Link
                                    to="/exterior"
                                    className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                                >
                                    View Projects
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="h-[200vh]" /> {/* Gap to finish scroll */}
                </div>
            </section>

            <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
        </>
    );
}

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Dynamically import all images from the Fintan folder
const images = import.meta.glob('../assets/Fintan/*.jpeg', { eager: true, as: 'url' });
const galleryImages = Object.values(images);

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="py-24 bg-white relative min-h-screen">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 leading-tight">
                        Selected <br />
                        <span className="text-gray-400">Projects.</span>
                    </h2>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {galleryImages.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImage(imgSrc)}
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-100"
                        >
                            <img
                                src={imgSrc}
                                alt={`Gallery Project ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-display font-bold tracking-widest uppercase text-sm border border-white/30 px-4 py-2 backdrop-blur-sm">View Fullscreen</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

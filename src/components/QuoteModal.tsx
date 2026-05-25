import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white w-full max-w-lg p-8 rounded-sm shadow-2xl z-10 border border-gray-100"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 uppercase tracking-wider">
                            Start Your Project
                        </h3>
                        
                        <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                            <p>
                                Do you have a sketch/plans you can't visualise? Send us your plans and select a package you would like to go with.
                            </p>
                            <p>
                                If you have something unique just give us a call and we would be more than happy to talk you through the packages we have to offer.
                            </p>
                            <p>
                                We are more than happy to talk you through some design options and tailor the design package to your needs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/packages"
                                onClick={onClose}
                                className="flex-1 px-6 py-3 bg-blue-600 text-white text-center text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-blue-700 transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
                            >
                                View Packages
                            </Link>
                            <Link
                                to="/contact"
                                onClick={onClose}
                                className="flex-1 px-6 py-3 bg-gray-100 text-gray-900 text-center text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-transform hover:-translate-y-0.5"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

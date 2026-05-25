import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function InteriorVisualization() {
    useSEO({
        title: 'Interior Visualization | B3D Designs',
        description: 'Photorealistic interior design rendering and visualization services.',
    });

    return (
        <section className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold uppercase tracking-wider text-gray-900 mb-6"
                    >
                        Interior <span className="text-blue-600">Visualization</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Experience your interiors before they are built. Our photorealistic renders capture light, texture, and atmosphere perfectly.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full h-[500px] bg-gray-100 rounded-sm mb-16 flex items-center justify-center border border-gray-200"
                >
                    <p className="text-gray-400 font-bold uppercase tracking-widest">[ Portfolio Image Placeholder ]</p>
                </motion.div>

                <div className="text-center">
                    <Link to="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-blue-700 transition-colors shadow-lg">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}

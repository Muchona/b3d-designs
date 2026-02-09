import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = import.meta.glob('../assets/Fintan/*.jpeg', { eager: true, query: '?url', import: 'default' });
const projectImages = Object.values(images) as string[];

export default function ExteriorVisualization() {
    return (
        <section className="bg-white min-h-screen">
            {/* Service Hero */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Exterior Visualization"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">Architectural Excellence</span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">3D Exterior <br />Visualization</h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
                    <div>
                        <h2 className="text-3xl font-display font-medium text-gray-900 mb-8 leading-tight">
                            Elevating architectural design through <span className="text-gray-400 italic">photorealistic precision.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed font-sans">
                            <p>
                                At B3D Designs, we specialize in creating ultra-realistic 3D exterior visualizations that bring your architectural concepts to life. Whether for planning permission, investor pitches, or marketing brochures, our high-fidelity renders provide the clarity and impact required for high-end developments.
                            </p>
                            <p>
                                We meticulously craft every detail—from materials and textures to lighting and landscaping—ensuring your vision is communicated with absolute honesty and beauty.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 bg-gray-50 p-12 rounded-2xl">
                        {[
                            { label: "Planning Permission", value: "Council Approved" },
                            { label: "Marketing", value: "High Fidelity" },
                            { label: "Lighting", value: "Natural & Night" },
                            { label: "Landscaping", value: "Dynamic Integration" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</h4>
                                <p className="text-gray-900 font-medium">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Showcase */}
                <div className="mb-24">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-12 flex items-center gap-4">
                        <span className="h-[2px] w-8 bg-blue-600"></span>
                        Selected Exterior Projects
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {projectImages.slice(0, 8).map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg group"
                            >
                                <img
                                    src={src}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={`Exterior Project ${i}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="bg-blue-600 p-12 md:p-24 rounded-3xl text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                    <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 relative z-10">Ready to visualize your next project?</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-white text-blue-600 font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all relative z-10 shadow-2xl">
                        Start a Conversation
                    </Link>
                </div>
            </div>
        </section>
    );
}

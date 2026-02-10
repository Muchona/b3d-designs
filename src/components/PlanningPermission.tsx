import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = import.meta.glob('../assets/planning permission/*.jpeg', { eager: true, query: '?url', import: 'default' });
const projectImages = Object.values(images) as string[];

export default function PlanningPermission() {
    return (
        <section className="bg-white min-h-screen">
            {/* Service Hero */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Planning Permission"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">Regulatory Precision</span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Planning <br />Permission</h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
                    <div>
                        <h2 className="text-3xl font-display font-medium text-gray-900 mb-8 leading-tight">
                            Navigating complexity to <span className="text-gray-400 italic">secure your approval.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed font-sans">
                            <p>
                                Securing planning permission requires more than just good design; it requires technical precision and adherence to rigorous local council regulations. At B3D Designs, we provide the detailed 2D and 3D outputs necessary to win approval for even the most complex projects.
                            </p>
                            <p>
                                From site analysis to detailed floor plans and environmental impact visualizations, our team ensures your submission is professional, comprehensive, and undeniable.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 bg-gray-50 p-12 rounded-2xl">
                        {[
                            { label: "Compliance", value: "Irish Council Standards" },
                            { label: "Technical Data", value: "DWG & PDF Output" },
                            { label: "Turnaround", value: "Rapid Iteration" },
                            { label: "Success Rate", value: "High Approval" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</h4>
                                <p className="text-gray-900 font-medium">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* technical Showcase */}
                <div className="mb-24">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-12 flex items-center gap-4">
                        <span className="h-[2px] w-8 bg-blue-600"></span>
                        Technical Portfoio
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
                                    alt={`Technical Project ${i}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="bg-[#1A1A1A] p-12 md:p-24 rounded-3xl text-center text-white relative overflow-hidden text-balance">
                    <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 relative z-10">Don’t leave your project to chance.</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all relative z-10 shadow-2xl">
                        Start the Process
                    </Link>
                </div>
            </div>
        </section>
    );
}

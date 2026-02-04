import { motion } from 'framer-motion';

const services = [
    {
        title: "3D Exterior Visualization",
        desc: "Photorealistic rendering for planning permission and marketing brochures.",
        icon: "EXT",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Interior Design",
        desc: "Immersive kitchen and living space visualizations with accurate lighting.",
        icon: "INT",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Planning Permission",
        desc: "Technical 2D/3D output adhering to local council regulations.",
        icon: "PLN",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
    },
    {
        title: "Virtual Reality",
        desc: "Full scale 1:1 walkthroughs for developers and high-end clients.",
        icon: "VR",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2678&auto=format&fit=crop"
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-off-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 leading-tight">
                        Engineering <br />
                        <span className="text-gray-400">Visual Perfection.</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="group relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono text-xs text-bureau-blue bg-white/10 backdrop-blur-md px-2 py-1 rounded-sm border border-white/10">{service.icon}</span>
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            <span className="text-white text-xs">↗</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

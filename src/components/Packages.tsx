import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Packages() {

    const packages = [
        {
            name: "Silver",
            price: "Essential",
            description: "Perfect for foundational visualization needs.",
            features: [
                "2D drafting",
                "3D Modeling",
                "Exterior Visualisation",
                "Interior Visualisation"
            ],
            color: "text-gray-400",
            bg: "bg-gray-50",
            border: "border-gray-200"
        },
        {
            name: "Gold",
            price: "Professional",
            description: "Advanced visualization with immersive walkthroughs.",
            features: [
                "2D drafting",
                "3D Modeling",
                "Exterior Visualisation",
                "Interior Visualisation",
                "3D Walkthrough"
            ],
            color: "text-yellow-500",
            bg: "bg-yellow-50/50",
            border: "border-yellow-200",
            popular: true
        },
        {
            name: "Platinum",
            price: "Premium",
            description: "The complete suite for ultimate project realization.",
            features: [
                "2D drafting",
                "3D Modeling",
                "Exterior Visualisation",
                "Interior Visualisation",
                "Augmented Reality",
                "Virtual Reality",
                "3D Walkthrough",
                "Planning Permission"
            ],
            color: "text-slate-800",
            bg: "bg-slate-50",
            border: "border-slate-200"
        }
    ];

    return (
        <section id="packages" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider text-gray-900 mb-6"
                    >
                        Our <span className="text-blue-600">Packages</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Whether you need basic 2D drafts or a fully immersive VR experience, we have a package tailored to your vision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`relative flex flex-col p-8 rounded-sm border ${pkg.border} ${pkg.bg} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            
                            <h3 className={`text-2xl font-display font-bold uppercase tracking-widest mb-2 ${pkg.color}`}>
                                {pkg.name}
                            </h3>
                            <div className="text-gray-900 font-bold text-lg mb-4 uppercase tracking-wider">
                                {pkg.price}
                            </div>
                            <p className="text-gray-600 text-sm mb-8 h-10">
                                {pkg.description}
                            </p>

                            <ul className="flex-1 space-y-4 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="relative group overflow-hidden rounded-sm p-[2px] w-full mt-auto">
                                <span className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${pkg.popular ? 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_50%,transparent_100%)]' : 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#2563eb_50%,transparent_100%)]'}`} />
                                <Link 
                                    to={`/contact?package=${pkg.name.toLowerCase()}`}
                                    className={`relative block w-full py-4 text-center text-[10px] font-bold uppercase tracking-widest transition-colors rounded-[2px] ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
                                >
                                    Choose {pkg.name}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

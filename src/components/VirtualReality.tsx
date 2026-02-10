import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Images removed as we are now focusing purely on the 3D Showroom

export default function VirtualReality() {
    return (
        <section className="bg-white min-h-screen">
            {/* Service Hero */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2678&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Virtual Reality"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">The Future of Experience</span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Virtual <br />Reality</h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
                    <div>
                        <h2 className="text-3xl font-display font-medium text-gray-900 mb-8 leading-tight">
                            Full-scale immersion for <span className="text-gray-400 italic">visionary developers.</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed font-sans">
                            <p>
                                Virtual Reality (VR) is the ultimate tool for spatial understanding. We provide full-scale 1:1 VR walkthroughs that allow you and your clients to walk through a property before a single stone is laid.
                            </p>
                            <p>
                                Our VR solutions are designed for developers, interior designers, and high-end architects who want to eliminate doubt and provide an unforgettable "wow" factor to their stakeholders.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 bg-gray-50 p-12 rounded-2xl">
                        {[
                            { label: "Format", value: "Oculus & WebXR" },
                            { label: "Interaction", value: "Fluid & Seamless" },
                            { label: "Resolution", value: "4K Stereoscopic" },
                            { label: "Scale", value: "1:1 Accuracy" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</h4>
                                <p className="text-gray-900 font-medium">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interactive 3D Showcase */}
                <div className="mb-24">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center gap-4">
                        <span className="h-[2px] w-8 bg-blue-600"></span>
                        Interactive 3D Showroom
                    </h3>
                    <div className="w-full aspect-square md:aspect-video h-[80vh] relative overflow-hidden bg-gray-900 group rounded-2xl shadow-2xl border border-gray-200 mb-8">
                        <iframe
                            title="WORK"
                            className="w-full h-full border-0"
                            allowFullScreen
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking="true"
                            execution-while-out-of-viewport="true"
                            execution-while-not-rendered="true"
                            web-share="true"
                            src="https://sketchfab.com/playlists/embed?collection=3d7dd21b84df4389a4b7ac6540610178&autostart=1"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg pointer-events-none shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1">Interactive Showcase</p>
                            <p className="text-xs font-medium text-gray-900">Drag to rotate • Scroll to zoom</p>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-12 md:p-24 rounded-3xl text-center text-white relative overflow-hidden">
                    <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 relative z-10">Experience the future today.</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-white text-blue-700 font-bold uppercase tracking-widest text-xs hover:shadow-2xl transition-all relative z-10">
                        Book a VR Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}

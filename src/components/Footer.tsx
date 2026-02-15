import { Link } from 'react-router-dom';
import OnyxBadge from './OnyxBadge';

export default function Footer() {
    return (
        <footer className="bg-[#0B0F19] text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-20">

                    {/* Brand */}
                    <div className="max-w-xs text-center md:text-left mx-auto md:mx-0 mb-8 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="B3D Designs"
                                className="h-16 w-auto object-contain"
                            />
                            <div className="font-display font-medium text-xl uppercase tracking-wider text-white">
                                B3D <span className="font-bold">Design</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-[11px] leading-relaxed uppercase tracking-widest text-balance">
                            2D CAD drawings, high-quality 3D Renders and Virtual Reality walk-throughs for AEC, interior Design, manufacturing and landscaping Industries
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-6 text-center md:text-left w-full md:w-auto items-center md:items-start mb-12 md:mb-0">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4 md:hidden">Company</h4>
                        <Link to="/about" className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">About Us</Link>
                        <Link to="/services/exterior-visualization" className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Exterior Visualization</Link>
                        <Link to="/services/interior-design" className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Interior Design</Link>
                        <Link to="/services/planning-permission" className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Planning Permission</Link>
                        <Link to="/services/virtual-reality" className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Virtual Reality</Link>
                        <Link to="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">Contact us</Link>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-auto text-center md:text-right flex flex-col items-center md:items-end">
                        <h3 className="font-bold text-lg mb-8">Subscribe to our newsletters</h3>
                        <form className="flex flex-col sm:flex-row gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white text-gray-900 px-5 py-4 w-full sm:w-64 focus:outline-none rounded-sm sm:rounded-r-none sm:rounded-l-sm placeholder-gray-500 text-sm"
                            />
                            <button className="bg-blue-600 text-white px-8 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-colors rounded-sm sm:rounded-l-none sm:rounded-r-sm border border-blue-600 w-full sm:w-auto">
                                Subscribe
                            </button>
                        </form>

                        <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto mt-12">
                            {/* Social Icons */}
                            <div className="flex gap-6">
                                {/* Instagram */}
                                <a href="https://www.instagram.com/b3ddesign/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10.5 3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/fintan-blacklock-3d-designer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                </a>
                            </div>

                            {/* The Onyx Badge */}
                            <OnyxBadge />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
                    <div className="text-gray-500 text-xs flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center">
                        <div className="flex gap-4">
                            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <span>/</span>
                            <Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
                        </div>
                        <span className="hidden md:inline text-gray-600">|</span>
                        <span>© B3D Design 2026</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

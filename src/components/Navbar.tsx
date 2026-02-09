import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Hero scrollytelling uses 300% extra height (400vh total)
            // Navbar should turn white only after scrollytelling is complete
            const threshold = window.innerHeight * 3.5;
            setScrolled(window.scrollY > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scrolling on route change
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    // Toggle scroll lock when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
    };

    const services = [
        { name: 'Exterior Visualization', path: '/services/exterior-visualization' },
        { name: 'Interior Design', path: '/services/interior-design' },
        { name: 'Planning Permission', path: '/services/planning-permission' },
        { name: 'Virtual Reality', path: '/services/virtual-reality' },
    ];

    // Reference Style: Clean white background on scroll, transparent on hero
    // Font: Inter/Outfit for technical feel
    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }} className="flex items-center gap-3 group cursor-pointer relative z-50">
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="B3D Designs"
                            className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className={`font-display font-medium text-lg uppercase tracking-wider ${scrolled || location.pathname !== '/' || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}>
                            B3D <span className="font-bold">Design</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">
                        <li key="Home">
                            <Link to="/" className={`text-xs font-bold tracking-widest hover:text-blue-600 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}>
                                HOME
                            </Link>
                        </li>
                        <li
                            key="Services"
                            className="relative group"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <Link
                                to="/#services"
                                onClick={(e) => {
                                    if (location.pathname === '/') {
                                        e.preventDefault();
                                        const element = document.getElementById('services');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center gap-1.5 ${scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}>
                                Services
                                <svg className={`w-3 h-3 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                <div className="bg-white rounded-lg shadow-2xl border border-gray-100 py-4 min-w-[240px] overflow-hidden">
                                    {services.map((service) => (
                                        <Link
                                            key={service.path}
                                            to={service.path}
                                            className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                                            onClick={() => setServicesDropdownOpen(false)}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li key="About">
                            <Link to="/about" className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}>
                                About
                            </Link>
                        </li>
                        <li key="Contact">
                            <Link to="/contact" className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors ${scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-6">
                        <Link to="/contact" className="hidden md:block px-6 py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-blue-700 transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20">
                            Get a Quote
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden cursor-pointer group relative z-50 p-2"
                            aria-label="Toggle Menu"
                        >
                            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-gray-900' : scrolled || location.pathname !== '/' ? 'bg-gray-900' : 'bg-white'}`}></div>
                            <div className={`w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 bg-gray-900' : scrolled || location.pathname !== '/' ? 'bg-gray-900' : 'bg-white'}`}></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center min-h-screen py-20 px-6 overflow-y-auto">
                    <div className="flex flex-col items-center gap-8 w-full max-w-xs">
                        <Link to="/" onClick={closeMenu} className="text-2xl font-display font-bold text-gray-900 hover:text-blue-600 transition-colors">HOME</Link>

                        <div className="w-full">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-4">Our Services</p>
                            <div className="flex flex-col gap-4">
                                {services.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        onClick={closeMenu}
                                        className="text-lg font-display font-medium text-gray-700 hover:text-blue-600 transition-colors text-center"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link to="/about" onClick={closeMenu} className="text-2xl font-display font-bold text-gray-900 hover:text-blue-600 transition-colors">ABOUT</Link>
                        <Link to="/contact" onClick={closeMenu} className="text-2xl font-display font-bold text-gray-900 hover:text-blue-600 transition-colors">CONTACT</Link>

                        <div className="mt-8 w-full">
                            <Link to="/contact" onClick={closeMenu} className="block w-full text-center px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-blue-700 transition-colors shadow-lg">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

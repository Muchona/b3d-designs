import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import StructuredData from './StructuredData';
import { getBreadcrumbSchema } from '../utils/structuredData';

export default function Contact() {
    useSEO({
        title: 'Contact B3D Designs | Get a Free Quote — Dublin, Ireland',
        description: 'Get in touch with B3D Designs for 3D architectural visualization, VR walkthroughs, and planning permission visuals. Based in Dun Laoghaire, Dublin, Ireland. Free project consultations.',
        keywords: 'contact B3D Designs, architectural visualization quote, 3D design Dublin, VR walkthrough quote Ireland, free consultation architectural rendering',
    });

    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();
    const [selectedPackage, setSelectedPackage] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pkg = params.get('package');
        if (pkg) {
            const capitalized = pkg.charAt(0).toUpperCase() + pkg.slice(1);
            if (['Silver', 'Gold', 'Platinum'].includes(capitalized)) {
                setSelectedPackage(capitalized);
            }
        }
    }, [location]);

    // Handle drag events
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // Handle drop event
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // Add new files to existing state
            setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
        }
    };

    // Handle manual file selection
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => [...prev, ...Array.from(e.target.files || [])]);
        }
    };

    const triggerFileSelect = () => {
        inputRef.current?.click();
    };

    return (
        <section className="bg-white min-h-screen pt-28 pb-16">
            <StructuredData data={[
                getBreadcrumbSchema([
                    { name: 'Home', url: 'https://b3ddesigns.ie/' },
                    { name: 'Contact', url: 'https://b3ddesigns.ie/contact' },
                ]),
            ]} />
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-none uppercase mb-4">
                        Let's Create <br />
                        <span className="text-blue-600">Great Things</span> <br />
                        Together
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <form action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data" className="space-y-6">
                            {/* Web3Forms Access Key */}
                            <input type="hidden" name="access_key" value="bf344976-db35-4bb5-959a-875a8541a078" />
                            <input type="hidden" name="subject" value="New Contact Request from B3D Designs Website" />
                            
                            {/* Package Selection */}
                            <div className="group relative">
                                <select 
                                    name="Interested Package"
                                    value={selectedPackage}
                                    onChange={(e) => setSelectedPackage(e.target.value)}
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-gray-900 font-light appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select a Package (Optional)</option>
                                    <option value="Silver">Silver Package</option>
                                    <option value="Gold">Gold Package</option>
                                    <option value="Platinum">Platinum Package</option>
                                    <option value="Custom">Custom / Other</option>
                                </select>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="group">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name *"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* Email */}
                            <div className="group">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email *"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* Phone */}
                            <div className="group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* Message */}
                            <div className="group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light resize-none"
                                />
                            </div>

                            {/* File Upload (Functional) */}
                            <div
                                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer group relative ${dragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={triggerFileSelect}
                            >
                                <input
                                    ref={inputRef}
                                    type="file"
                                    name="attachment"
                                    multiple
                                    className="hidden"
                                    onChange={handleChange}
                                />

                                <div className="text-gray-400 mb-2 group-hover:text-blue-600 transition-colors pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </div>

                                {files.length > 0 ? (
                                    <div className="pointer-events-none">
                                        <p className="text-blue-600 font-medium text-sm">{files.length} file(s) selected</p>
                                        <div className="text-xs text-gray-500 mt-1 truncate max-w-[200px] mx-auto">
                                            {files.map(f => f.name).join(', ')}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="pointer-events-none">
                                        <p className="text-gray-600 font-medium text-sm">Drag & Drop Files Here</p>
                                        <p className="text-gray-400 text-xs mt-1">or <span className="text-blue-600 underline">Browse Files</span></p>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="bg-blue-600 text-white px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-blue-700 transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/30 text-sm rounded-sm w-full md:w-auto">
                                Send us an email
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="bg-gray-100 p-8 rounded-sm h-full flex flex-col">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-300 pb-3">Worldwide Office</h3>

                            <div className="mb-0 flex-grow">
                                <h2 className="text-4xl font-display font-bold text-gray-900 mb-1">Scotstown</h2>
                                <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-4 text-sm">Co Monaghan, Ireland</h4>

                                <address className="not-italic text-gray-600 text-base leading-relaxed space-y-1 font-medium">
                                    <p>Phone: <a href="tel:0851854029" className="hover:text-blue-600 transition-colors">085 185 4029</a></p>
                                    <p>Email: <a href="mailto:b3ddesigns@outlook.ie" className="hover:text-blue-600 transition-colors">b3ddesigns@outlook.ie</a></p>
                                    <p>Scotstown, Co Monaghan</p>
                                </address>
                            </div>

                            {/* Map */}
                            <div className="mt-8 rounded-lg overflow-hidden shadow-sm border border-gray-200 h-56 relative bg-gray-200">
                                <iframe 
                                    src="https://maps.google.com/maps?q=Scotstown,+Co+Monaghan,+Ireland&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps Location of Scotstown, Co Monaghan"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

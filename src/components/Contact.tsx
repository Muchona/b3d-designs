import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

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
                        <form className="space-y-6">
                            {/* Name */}
                            <div className="group">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* Email */}
                            <div className="group">
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* CC */}
                            <div className="group">
                                <input
                                    type="text"
                                    placeholder="CC (separate by comma)"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* Phone */}
                            <div className="group">
                                <input
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-600 font-light"
                                />
                            </div>

                            {/* Message */}
                            <div className="group">
                                <textarea
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
                            <button className="bg-blue-600 text-white px-8 py-3.5 font-bold uppercase tracking-widest hover:bg-blue-700 transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/30 text-sm rounded-sm w-full md:w-auto">
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
                                <h2 className="text-4xl font-display font-bold text-gray-900 mb-1">Dublin</h2>
                                <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-4 text-sm">Ireland</h4>

                                <address className="not-italic text-gray-600 text-base leading-relaxed space-y-1 font-medium">
                                    <p>Unit 1, Adelphi House</p>
                                    <p>George's Street Upper</p>
                                    <p>Dun Laoghaire, Co Dublin</p>
                                    <p>Ireland, A96 DX47</p>
                                </address>
                            </div>

                            {/* Map - Adjusted height to balance */}
                            <div className="mt-8 rounded-lg overflow-hidden shadow-sm border border-gray-200 h-56 relative bg-gray-200 group cursor-pointer hover:shadow-md transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                                    alt="Map Location"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm text-[10px] font-bold uppercase tracking-widest text-gray-900">
                                        View on Google Maps
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-10px] text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

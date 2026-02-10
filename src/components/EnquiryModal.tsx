import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
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

    return createPortal(
        <AnimatePresence mode="wait">
            {isOpen && (
                <div key="modal-portal-root">
                    {/* Backdrop */}
                    <motion.div
                        key="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal-content"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative pointer-events-auto flex flex-col">

                            {/* Header */}
                            <div className="p-8 pb-4 flex justify-between items-start border-b border-gray-100">
                                <div>
                                    <h2 className="text-3xl font-display font-bold text-gray-900 uppercase">Make an Enquiry</h2>
                                    <p className="text-gray-500 mt-2 text-sm">Tell us about your project</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-8 pt-6 space-y-6">
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="group">
                                            <input
                                                type="text"
                                                placeholder="Name *"
                                                className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-500 font-light"
                                            />
                                        </div>
                                        <div className="group">
                                            <input
                                                type="email"
                                                placeholder="Email *"
                                                className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-500 font-light"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-500 font-light"
                                        />
                                    </div>

                                    <div className="group">
                                        <textarea
                                            placeholder="Project Details / Message *"
                                            rows={4}
                                            className="w-full border-b border-gray-300 py-3 text-base focus:outline-none focus:border-blue-600 transition-colors bg-transparent placeholder-gray-500 font-light resize-none"
                                        />
                                    </div>

                                    {/* File Upload */}
                                    <div
                                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer group relative ${dragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}
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
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
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
                                                <p className="text-gray-600 font-medium text-sm">Drag & Drop files</p>
                                                <p className="text-gray-400 text-xs mt-1">or <span className="text-blue-600 underline">Browse</span></p>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {/* Footer / Actions */}
                            <div className="p-8 pt-0 mt-auto">
                                <button className="w-full bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg text-sm rounded-sm">
                                    Send Enquiry
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}

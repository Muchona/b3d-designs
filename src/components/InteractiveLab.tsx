export default function InteractiveLab() {
    return (
        <section id="lab" className="h-auto md:h-screen w-full bg-gray-50 relative flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-24">
            {/* 3D Canvas Area - Refined and Scaled Down */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative overflow-hidden bg-gray-900 group rounded-2xl shadow-2xl border border-gray-200">
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

                {/* Instructional Overlay */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg pointer-events-none shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1">Interactive Showcase</p>
                    <p className="text-xs font-medium text-gray-900">Drag to rotate • Scroll to zoom</p>
                </div>
            </div>

            {/* Sidebar Info */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4">Interactive Blueprint</span>
                <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">Virtual <br />Exploration.</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                    Experience the space before the first brick is laid. Our real-time rendering technology allows for complete immersion into the architectural vision.
                </p>

                <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 py-3">
                        <span className="text-xs font-bold uppercase text-gray-400">Total Area</span>
                        <span className="text-sm font-mono text-gray-900">2,450 sq ft</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-3">
                        <span className="text-xs font-bold uppercase text-gray-400">Orientation</span>
                        <span className="text-sm font-mono text-gray-900">South-West</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 py-3">
                        <span className="text-xs font-bold uppercase text-gray-400">Est. Build</span>
                        <span className="text-sm font-mono text-gray-900">12 Months</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

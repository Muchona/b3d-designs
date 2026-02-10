import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const cultureValues = [
    {
        title: "Communication",
        text: "It’s the foundation of our high-performing team. It reduces stress and uncertainty, helps resolve challenges early, and keeps workflows seamless, allowing us to continue innovating. We value open, clear communication where everyone feels safe to speak up, without pressure or judgment.",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Collaboration",
        text: "Collaboration goes hand in hand with communication. It’s about working closely, within and across internal and external teams, to solve problems, share expertise, and reach project goals. We step in and support one another because great work is never done alone.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Responsibility",
        text: "We believe responsibility means taking ownership of our work, our time, and the impact we have on our clients’ projects. It’s about meeting expectations, holding ourselves accountable, and contributing to team success through consistency, reliability, and care.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" // Meeting scene with good lighting
    },
    {
        title: "Respect",
        text: "It means listening actively, valuing different perspectives, and treating colleagues and clients with integrity and professionalism. This fosters trust and helps build strong, long-lasting relationships within our teams and with those we work with.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
    }
];

interface CultureItemProps {
    item: typeof cultureValues[0];
    index: number;
    scrollYProgress: MotionValue<number>;
}

function CultureBackgroundItem({ item, index, scrollYProgress }: CultureItemProps) {
    const rangeStart = index * 0.25;
    const rangeEnd = rangeStart + 0.25;
    const opacity = useTransform(scrollYProgress,
        [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
        [0, 1, 1, 0]
    );

    return (
        <motion.div
            key={`bg-${index}`}
            style={{ opacity }}
            className="absolute inset-0"
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                style={{ opacity: 0.5 }}
            />
            <div className="absolute inset-0 bg-black/60" />
        </motion.div>
    );
}

function CultureCard({ item, index, scrollYProgress }: CultureItemProps) {
    const rangeStart = index * 0.25;
    const rangeEnd = rangeStart + 0.25;

    const opacity = useTransform(scrollYProgress,
        [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
        [0, 1, 1, 0]
    );
    const y = useTransform(scrollYProgress,
        [rangeStart, rangeStart + 0.1, rangeEnd],
        [50, 0, -50]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute inset-0 flex items-center justify-center p-6 md:p-20 pointer-events-none"
        >
            <div className="max-w-xl pointer-events-auto">
                <span className="block font-mono text-6xl md:text-8xl text-white/10 font-bold mb-[-2rem] md:mb-[-3rem] select-none">
                    0{index + 1}
                </span>

                <div className="relative ml-4 md:ml-8">
                    <h3 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight leading-none drop-shadow-md">
                        {item.title}
                    </h3>
                    <div className="h-1 w-24 bg-bureau-blue mb-8"></div>
                    <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-light drop-shadow-sm">
                        {item.text}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section className="bg-white min-h-screen">
            {/* Header / Hero */}
            <div className="pt-32 pb-20 container mx-auto px-6 md:px-12">
                <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
                <h1 className="text-4xl md:text-7xl font-display font-medium text-gray-900 leading-tight mb-8">
                    We are <br />
                    <span className="text-gray-400">Collaborative Creators.</span>
                </h1>
                <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
                    Established and based in Dublin, our journey has taken us across borders, giving us the privilege of collaborating on a wide range of projects in various countries.
                    We take immense pride in our diverse international team, which embodies our global perspective and expertise.
                </p>
            </div>

            {/* Sets Us Apart Section */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Title Column */}
                        <div className="lg:col-span-3">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 sticky top-32 leading-tight">
                                What Sets <br /> Us Apart?
                            </h2>
                        </div>

                        {/* Bento Grid */}
                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card: Team */}
                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[320px]">
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Team</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Partnering with B3D means working with high-performing, proactive teams, supported by our in-house project managers, that guarantees efficiency and consistency in every project.
                                </p>
                            </div>

                            {/* Image 1 */}
                            <div className="rounded-2xl overflow-hidden min-h-[320px]">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                                    alt="Modern Office Architecture"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Card: Time */}
                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[320px]">
                                <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Time</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We give valuable time back to our clients by delivering quality solutions, through our proactive approach, seamless collaboration and unique organisational structure.
                                </p>
                            </div>

                            {/* Image 2 */}
                            <div className="rounded-2xl overflow-hidden min-h-[320px]">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                    alt="Urban Design"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Wide Item - Spans 2 cols on tablet+ */}
                            <div className="md:col-span-2 rounded-2xl overflow-hidden h-[300px]">
                                <img
                                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                                    alt="Landscape Architecture"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Card: Trust */}
                            <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Trust</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Our solutions give clients and design teams the confidence to present their vision, secure in the knowledge that the visual representation matches their ambition.
                                    </p>
                                </div>
                                <div className="flex-1 h-64 w-full rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                                        alt="Construction Detail"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Culture Section */}
            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row bg-[#0B0F19] text-white">

                    {/* Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                        {cultureValues.map((item, index) => (
                            <CultureBackgroundItem
                                key={`bg-${index}`}
                                item={item}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
                        {/* Left Panel - Static Title */}
                        <div className="w-full md:w-1/3 p-6 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black/20 backdrop-blur-sm shrink-0 h-auto md:h-full z-20">
                            <div className="mb-4 md:mb-8">
                                <span className="text-bureau-blue font-mono text-xs tracking-widest uppercase mb-2 md:mb-4 block">Our Culture</span>
                                <div className="h-px w-12 bg-white/20"></div>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-display font-bold leading-tight text-white mb-4 md:mb-6">
                                The pillars <br /> of our <br /> success.
                            </h2>
                            <p className="text-gray-400 text-xs md:text-sm max-w-xs leading-relaxed">
                                Core values that define how we work, collaborate, and deliver excellence.
                            </p>
                        </div>

                        {/* Right Panel - Scrolling Cards */}
                        <div className="w-full md:w-2/3 relative flex-1 flex items-center justify-center p-6 md:p-20 overflow-hidden z-10">
                            {cultureValues.map((item, index) => (
                                <CultureCard
                                    key={index}
                                    item={item}
                                    index={index}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer / Contact Cue */}
            <div className="py-32 bg-off-white text-center">
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Ready to work with us?</h3>
                <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                    Get in Touch
                </Link>
            </div>
        </section>
    );
}

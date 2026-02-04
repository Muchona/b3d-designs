import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <section className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 uppercase">Privacy Policy</h1>

                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">Last updated: February 2026</p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">1. Information Collection</h3>
                        <p className="mb-6">
                            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us.
                            The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">2. Use of Information</h3>
                        <p className="mb-6">
                            We use the information we collect to provide, maintain, and improve our services, including to:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                                <li>Respond to your comments, questions, and requests.</li>
                                <li>Communicate with you about products, services, offers, and events offered by B3D Design.</li>
                            </ul>
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">3. Cookies</h3>
                        <p className="mb-6">
                            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">4. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@b3ddesign.com" className="text-blue-600 hover:underline">info@b3ddesign.com</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

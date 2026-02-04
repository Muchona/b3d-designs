import { motion } from 'framer-motion';

export default function Terms() {
    return (
        <section className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 uppercase">Terms & Conditions</h1>

                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">Last updated: February 2026</p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">1. Agreement to Terms</h3>
                        <p className="mb-6">
                            By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws.
                            If you disagree with any of these terms, you are prohibited from accessing this site.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">2. Intellectual Property</h3>
                        <p className="mb-6">
                            The Service and its original content, features, and functionality are and will remain the exclusive property of B3D Design and its licensors.
                            The Service is protected by copyright, trademark, and other laws of both the Ireland and foreign countries.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">3. Limitation of Liability</h3>
                        <p className="mb-6">
                            In no event shall B3D Design, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                            including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">4. Governing Law</h3>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of Ireland, without regard to its conflict of law provisions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

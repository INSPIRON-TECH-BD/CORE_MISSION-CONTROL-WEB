/**
 * INSPIRON TECH - Institutional Terms of Service
 * Required for Meta App Review approval.
 */

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#010409] text-gray-300 py-20 px-6 font-sans">
            <div className="max-w-3xl mx-auto border border-white/10 p-10 rounded-2xl bg-[#0d1117] shadow-2xl">
                <h1 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                    Terms of <span className="text-aqua">Service</span>
                </h1>
                <p className="mb-8 text-aqua font-bold uppercase text-xs tracking-widest">
                    INSPIRON TECH // Institutional Standard v1.0
                </p>

                <div className="space-y-6 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white font-bold uppercase text-sm mb-2">1. Acceptance of Terms</h2>
                        <p>By engaging with the INSPIRON TECH WhatsApp nodes or implementing our Manager.io automation solutions, you agree to comply with these Institutional Standards.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold uppercase text-sm mb-2">2. Service Description</h2>
                        <p>INSPIRON TECH provides technical B2B automation, focusing on agricultural ERP systems, lead qualification via WhatsApp Business API, and accounting integration services.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold uppercase text-sm mb-2">3. WhatsApp Messaging</h2>
                        <p>Users opting into our automation flow will receive transactional messages, lead qualification prompts, and "Institutional Handshake" template messages. Messaging frequency is based on user engagement.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold uppercase text-sm mb-2">4. User Responsibilities</h2>
                        <p>Users are responsible for providing accurate lead data during the "Technical Audit" phase. Unauthorized use of our API nodes for spam or malicious activities will result in immediate "Handshake Termination".</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold uppercase text-sm mb-2">5. Data Governance</h2>
                        <p>Use of our services is subject to our <a href="/privacy" className="text-aqua underline hover:text-white transition-colors">Privacy Governance</a> policy. We do not sell user data to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold uppercase text-sm mb-2">6. Limitation of Liability</h2>
                        <p>INSPIRON TECH shall not be liable for any indirect or consequential losses resulting from software implementation or API service interruptions.</p>
                    </section>

                    <p className="pt-6 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Institutional Controller: MD ABU HASAN | Effective Dec 10, 2025
                    </p>
                </div>
            </div>
        </main>
    );
}

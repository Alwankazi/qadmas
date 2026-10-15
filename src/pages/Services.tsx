import { useState } from 'react';
import { Plus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import FUIBentoGridDark from '../components/ui/bento-grid-dark';

const faqs = [
  {
    q: 'Do you build custom software or use pre-made templates?',
    a: 'We build production software from the ground up using React, Next.js, and Node/Python so you have 100% control over the codebase and scalability.'
  },
  {
    q: 'How do milestone payments work?',
    a: 'We work on transparent fixed-price milestones. Typically: 30% upon architecture signoff, 40% after testing working staging builds, and 30% upon production deployment. You never pay for unseen work.'
  },
  {
    q: 'Who owns the code and intellectual property?',
    a: 'You do. From Day 1, all Git repositories, infrastructure scripts, and databases belong entirely to your company. We never hold client code hostage or charge arbitrary licensing fees.'
  },
  {
    q: 'What happens if a server crashes in the middle of the night?',
    a: 'Our 24/7 SLA monitoring tracks uptime around the clock with automated alerts. If a critical incident occurs, our on-call engineers address it immediately within our guaranteed < 15 minute response window.'
  },
  {
    q: 'Can we expand and add new features as our business grows?',
    a: 'Yes. All our codebases are built modularly using strict architectural patterns and clear documentation. You can have our team continue sprint cycles or transition the project to your in-house team effortlessly.'
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-6 max-w-[1200px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/50 before:via-white before:to-sky-50/50 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-6 max-w-[900px] mx-auto">
          Engineering capabilities built for <br />
          <span className="text-apple-blue font-serif-accent font-normal italic">
            production reliability
          </span>
        </h1>

        <p className="font-apple text-[17px] text-slate leading-relaxed max-w-[660px] mx-auto">
          We don&apos;t bill by the hour or sell vague consulting slide decks. We architect, build, and deploy production-ready software systems with clear milestone deliverables.
        </p>
      </section>

      {/* Services Bento Grid Section */}
      <FUIBentoGridDark onSelectService={handleOpenQuote} />

      {/* Transparent FAQ Section */}
      <section className="py-24 max-w-[960px] mx-auto px-6 border-t border-slate-200/80">
        <div className="text-center mb-16">
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04]">
            Straight answers about <br className="hidden sm:inline" />
            <span className="text-apple-blue font-serif-accent font-normal italic">how we build?</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-apple text-[17px] font-medium text-ink hover:text-apple-blue transition-colors"
                >
                  <span>{faq.q}</span>
                  <Plus
                    size={18}
                    className={`text-slate shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45 text-apple-blue' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 font-apple text-[14px] text-slate leading-relaxed border-t border-slate-200/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={selectedService}
      />

      <Footer />
    </div>
  );
}

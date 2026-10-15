import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handleGetPricing = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: 'Bespoke Enterprise',
      price: '2,500 QR',
      period: '/ month',
      desc: 'Fully tailored software architecture built around your exact company processes.',
      features: [
        '100% custom software engineering',
        'Unlimited seats & branch licenses',
        'Custom CRM / Mobile apps',
        'Complete Git source code ownership',
        'Dedicated lead engineer & 15m SLA',
        'On-premise or custom cloud setup',
      ],
      packageName: 'Enterprise Package (2,500 QR / mo)',
      popular: false,
    },
  ];

  return (
    <>
      <section id="pricing" className="w-full bg-gallery-white border-t border-slate-200/80">
        <div className="py-24 max-w-[1200px] mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <h2 className="text-display font-medium text-ink tracking-tight leading-[1.04] mb-4">
            Predictable pricing in <br className="hidden sm:inline" />
            <span className="text-apple-blue font-serif-accent font-normal italic">Qatari Riyal (QR)</span>
          </h2>
          <p className="font-apple text-[16px] text-slate leading-relaxed">
            No surprise billing or hidden upgrade gates. Commission a dedicated engineering team for your custom software project.
          </p>
        </div>

        {/* Engineering Pricing */}
        <div className="grid grid-cols-1 max-w-xl mx-auto gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 bg-white ${
                plan.popular
                  ? 'border-2 border-apple-blue shadow-xl -translate-y-1'
                  : 'border border-slate-200/80 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-apple-blue text-white font-apple text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                  <Sparkles size={12} />
                  <span>Most popular in GCC</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-apple text-[20px] font-semibold text-ink mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-apple text-[40px] font-bold text-ink tracking-tight">
                      {plan.price}
                    </span>
                    <span className="font-apple text-[14px] text-slate">
                      {plan.period}
                    </span>
                  </div>
                  <p className="font-apple text-[14px] text-slate mt-3 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200/80">
                  <div className="font-apple text-[12px] text-slate font-medium">
                    Included capabilities:
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-[13px] text-ink font-apple">
                      <div className="w-4 h-4 rounded-full bg-apple-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-apple-blue" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200/80">
                <button
                  onClick={() => handleGetPricing(plan.packageName)}
                  className={`w-full ${
                    plan.popular
                      ? 'btn-slide-pill justify-center text-center'
                      : 'btn-slide-ghost justify-center text-center'
                  } group`}
                >
                  <span className="relative z-10 transition-all duration-500">
                    Select Plan
                  </span>
                  <span className="arrow-circle">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService={selectedPackage}
      />
    </>
  );
}

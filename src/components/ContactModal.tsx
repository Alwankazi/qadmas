import { useState, useRef, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, ShieldCheck, CheckCircle2, ChevronDown, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

interface ServiceOptionItem {
  name: string;
  badge: string;
}

const SERVICE_OPTIONS: ServiceOptionItem[] = [
  { name: 'Wantik-X CRM', badge: 'Core' },
  { name: 'Website Development', badge: 'Engineering' },
  { name: 'Mobile Application Development', badge: 'Engineering' },
  { name: 'Digital Marketing', badge: 'Growth' },
  { name: 'Bespoke Enterprise (2,500 QR / mo)', badge: 'Enterprise' },
];

export default function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [selectedService, setSelectedService] = useState(
    defaultService || 'Wantik-X CRM'
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setDetails('');
      onClose();
    }, 2800);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-4 py-6 overflow-y-auto">
          {/* Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Compact Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[460px] bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl text-ink font-apple my-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-ink transition-colors flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Close dialog"
            >
              <X size={15} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-3 font-apple"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 mx-auto flex items-center justify-center shadow-xs">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-ink tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="text-[13px] text-slate max-w-xs mx-auto mt-1 leading-relaxed">
                    Thank you{name ? `, ${name}` : ''}. A senior engineer will review your project and reply within 24 hours.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919022568492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-apple-blue hover:text-sky-700 font-medium"
                  >
                    <MessageSquare size={13} />
                    <span>Need immediate response? WhatsApp us</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-5">
                {/* Header */}
                <div className="pr-6 space-y-1">
                  <h2 className="text-[21px] font-semibold text-ink tracking-tight font-apple">
                    Start an{' '}
                    <span className="text-apple-blue font-serif-accent font-normal italic">
                      Engineering Sprint
                    </span>
                  </h2>
                  <p className="text-[13px] text-slate leading-relaxed">
                    Direct access to systems architects. Receive scoping and estimates within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-3.5" onSubmit={handleSubmit}>
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[12px] text-slate-700 font-medium">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tariq Al-Mansoor"
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-[13.5px] text-ink placeholder:text-slate-400 focus:bg-white focus:border-apple-blue focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[12px] text-slate-700 font-medium">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tariq@company.com"
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-[13.5px] text-ink placeholder:text-slate-400 focus:bg-white focus:border-apple-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Custom Apple-styled Dropdown */}
                  <div className="space-y-1 relative" ref={dropdownRef}>
                    <label className="block text-[12px] text-slate-700 font-medium">
                      Project Type or Service
                    </label>

                    {/* Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between gap-2.5 bg-slate-50 border rounded-xl px-3 py-2 text-[13.5px] text-ink transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-apple-blue/20 ${
                        isDropdownOpen
                          ? 'border-apple-blue bg-white shadow-xs'
                          : 'border-slate-200/80 hover:border-slate-300'
                      }`}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-apple-blue shrink-0" />
                        <span className="truncate text-ink font-normal">{selectedService}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {SERVICE_OPTIONS.find((s) => s.name === selectedService)?.badge && (
                          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10.5px] font-medium text-slate-600 bg-slate-200/70 rounded-md">
                            {SERVICE_OPTIONS.find((s) => s.name === selectedService)?.badge}
                          </span>
                        )}
                        <ChevronDown
                          size={14}
                          className={`text-slate-400 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-apple-blue' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Floating Dropdown Menu Popover */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 right-0 z-50 mt-1 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl p-1.5 max-h-[220px] overflow-y-auto space-y-0.5 focus:outline-none"
                          role="listbox"
                        >
                          {SERVICE_OPTIONS.map((svc) => {
                            const isSelected = selectedService === svc.name;
                            return (
                              <button
                                key={svc.name}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setSelectedService(svc.name);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-[13px] text-left transition-colors cursor-pointer group ${
                                  isSelected
                                    ? 'bg-slate-100 text-apple-blue font-medium'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-ink'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                      isSelected
                                        ? 'bg-apple-blue'
                                        : 'bg-transparent group-hover:bg-slate-300'
                                    }`}
                                  />
                                  <span className="truncate">{svc.name}</span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span
                                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${
                                      isSelected
                                        ? 'bg-apple-blue/15 text-apple-blue'
                                        : 'bg-slate-100 text-slate-500'
                                    }`}
                                  >
                                    {svc.badge}
                                  </span>
                                  {isSelected && (
                                    <Check size={13} className="text-apple-blue shrink-0" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1">
                    <label className="block text-[12px] text-slate-700 font-medium">
                      Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 90225 68492"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-[13.5px] text-ink placeholder:text-slate-400 focus:bg-white focus:border-apple-blue focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1">
                    <label className="block text-[12px] text-slate-700 font-medium">
                      Brief Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="What are you looking to build or optimize?"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-[13.5px] text-ink placeholder:text-slate-400 focus:bg-white focus:border-apple-blue focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full btn-slide-pill justify-center text-center cursor-pointer group py-2.5"
                    >
                      <span className="relative z-10 transition-all duration-500 font-medium text-[13.5px]">
                        Submit Requirements
                      </span>
                      <span className="arrow-circle">
                        <Send size={13} />
                      </span>
                    </button>
                  </div>
                </form>

                {/* Compact Bottom Trust Line */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11.5px] text-slate">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-apple-blue" />
                    <span>NDA &amp; IP Protected</span>
                  </div>

                  <a
                    href="https://wa.me/919022568492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate hover:text-apple-blue transition-colors font-medium"
                  >
                    <MessageSquare size={12} className="text-apple-blue" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

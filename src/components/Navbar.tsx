import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const navLinks = [
  { label: 'Services', href: '/services',
    children: [
      { label: 'Wantik-X CRM', href: 'https://wantikx.com/', desc: 'Automated billing, inventory & WhatsApp AI agents' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Targeted campaigns, SEO, paid ads & growth analytics' },
      { label: 'Website Development', href: '/services', desc: 'React, Next.js & sub-second corporate web platforms' },
      { label: 'Mobile Application Development', href: '/services', desc: 'Native-feel iOS & Android apps with offline sync' },
    ]
  },
  { label: 'Products', href: '/products',
    children: [
      { label: 'Wantik-X CRM', href: 'https://wantikx.com/', desc: 'Automated customer pipelines & lead dispatch' },
      { label: 'Sila Vendor System', href: '/products/sila', desc: 'Procurement, supplier invoices & inventory tracking' },
    ]
  },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div
          className={`relative mt-3.5 flex w-full items-center justify-between rounded-full py-2 transition-all duration-300 ${
            scrolled
              ? 'max-w-4xl border border-hairline-silver bg-studio-mist/95 px-3.5 backdrop-blur-xl shadow-lg shadow-slate-900/5'
              : 'max-w-6xl border border-transparent bg-transparent px-4'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center pl-2 shrink-0 group">
            <img
              src="/full-logo-dark.png?v=2"
              alt="Qadmas Technologies"
              className="h-7 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Centered Desktop Nav */}
          <nav 
            className="hidden items-center gap-1 md:flex md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-gallery-white/80 p-1 rounded-full border border-hairline-silver/60 z-10" 
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const linkClass = `relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 flex items-center gap-1 ${
                active
                  ? 'bg-white text-ink shadow-xs'
                  : 'text-slate hover:text-ink hover:bg-white/70'
              }`;

              if (link.children) {
                return (
                  <div key={link.label} className="group relative">
                    <Link to={link.href} className={linkClass}>
                      <span>{link.label}</span>
                      <ChevronDown size={13} className="opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="w-80 rounded-2xl border border-hairline-silver bg-studio-mist/95 p-2 shadow-2xl backdrop-blur-xl">
                        {link.children.map((child) => {
                          const isExternal = child.href.startsWith('http');
                          const content = (
                            <>
                              <div className="text-[13px] font-medium text-ink group-hover/item:text-apple-blue flex items-center justify-between">
                                <span>{child.label}</span>
                                <ArrowUpRight size={13} className="opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-apple-blue" />
                              </div>
                              <div className="text-[11px] text-slate mt-0.5 leading-snug">
                                {child.desc}
                              </div>
                            </>
                          );

                          return isExternal ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-xl p-2.5 transition-colors hover:bg-gallery-white group/item"
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block rounded-xl p-2.5 transition-colors hover:bg-gallery-white group/item"
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.label} to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden items-center gap-3 md:flex z-20">
            <Link
              to="/contact"
              className={`text-[13px] font-medium text-slate hover:text-ink transition-all duration-300 px-2 py-1.5 whitespace-nowrap overflow-hidden ${
                scrolled
                  ? 'opacity-0 max-w-0 p-0 pointer-events-none -mr-3 scale-95'
                  : 'opacity-100 max-w-[140px] scale-100 hidden lg:inline-block'
              }`}
            >
              Direct Support
            </Link>

            <Link
              to="/contact"
              className="btn-slide-pill-sm group shrink-0 inline-flex items-center cursor-pointer"
              aria-label="Get in Touch"
            >
              <span className="relative z-10 transition-all duration-400">
                Get in Touch
              </span>
              <span className="arrow-circle">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-silver bg-studio-mist text-ink md:hidden"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-gallery-white/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col justify-center px-8 py-16 space-y-6">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-geist text-2xl font-semibold tracking-tight text-ink hover:text-apple-blue transition-colors"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-hairline-silver space-y-3">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-dark w-full py-3.5 text-center justify-center mt-2 flex items-center gap-2 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

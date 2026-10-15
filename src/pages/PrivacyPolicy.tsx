import { Lock, FileText, ChevronRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'commitment',
      title: '1. Commitment to Client Confidentiality',
      content: `At Qadmas Technologies, we architect mission-critical software, and high-velocity web platforms for enterprises across Qatar, the UAE, and India. We recognize that our clients entrust us with sensitive commercial data, proprietary business workflows, and intellectual property. This Privacy Policy details our unwavering commitment to protecting your information and explains how data is handled across all our digital touchpoints and client engagements.`
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: `We collect only the information strictly necessary to provide senior software engineering services, consult on technical architectures, and deliver production platforms:`,
      bullets: [
        'Commercial & Contact Details: Corporate email addresses, business phone numbers, organization names, and designated contact representatives submitted via consultation forms.',
        'Project Specifications & Technical Requirements: Architecture scoping notes, workflow diagrams, and technical briefs shared during project scoping and sprint planning.',
        'Technical & Telemetry Data: IP addresses, browser types, device fingerprints, and anonymized performance telemetry collected when interacting with our corporate web applications to ensure sub-second response times and DDoS resilience.',
        'Client Communications: Records of correspondence, consultation notes, and technical discussions conducted through our official communication channels.'
      ]
    },
    {
      id: 'data-protection',
      title: '3. Data Security & Cryptographic Protection',
      content: `We implement defense-in-depth architectural standards across every phase of system design and hosting:`,
      bullets: [
        'End-to-End Encryption: All data in transit is protected using TLS 1.3 encryption, and data at rest is secured via AES-256 cryptographic standards.',
        'Network Isolation & Virtual Private Clouds: Production client environments, staging databases, and internal repositories are isolated within strictly segmented VPCs with role-based identity and access management (IAM).',
        'Zero-Trust Access Control: Access to production keys, deployment pipelines, and database snapshots requires multi-factor authentication (MFA) and biometric identity verification for authorized senior personnel only.',
        'Regular Penetration & Vulnerability Testing: Continuous automated dependency audits and code scanning are conducted to mitigate vulnerabilities prior to production release.'
      ]
    },
    {
      id: 'data-use',
      title: '4. How We Use Collected Information',
      content: `Collected information is utilized solely for legitimate commercial and engineering purposes, including:`,
      bullets: [
        'Delivering, configuring, and supporting bespoke software platforms and subscription packages.',
        'Executing contractual agreements, Statements of Work (SOW), and non-disclosure obligations.',
        'Providing 24/7 technical monitoring, infrastructure triage, and emergency engineer dispatch.',
        'Processing commercial invoices, subscription billings, and ledger reconciliation.',
        'Complying with regional statutory, tax, and commercial regulations across Qatar, the UAE, and India.'
      ]
    },
    {
      id: 'ip-isolation',
      title: '5. Client IP & Database Isolation',
      content: `Unlike conventional multi-tenant software-as-a-service providers, Qadmas Technologies guarantees strict architectural separation:`,
      bullets: [
        'No Cross-Client Telemetry Sharing: Your operational data, customer lists, and financial logs are never pooled, ingested, or used to train public machine learning models.',
        'Full Database Sovereignty: Bespoke client databases are hosted on dedicated schema partitions or isolated server instances according to client security preference.',
        'Source Code Ownership: Upon final payment milestone settlement, 100% of custom application code and database schema definitions belong exclusively to the client.'
      ]
    },
    {
      id: 'cross-border',
      title: '6. Regional Operations & Cross-Border Data Flows',
      content: `Qadmas Technologies operates engineering hubs across Qatar, the UAE, and India. Where project execution requires technical collaboration between our cross-border engineering teams, data transfers are governed by binding corporate non-disclosure agreements, standard contractual clauses, and strict access logging compliant with applicable regional data protection regulations.`
    },
    {
      id: 'cookies',
      title: '7. Cookies & Session Storage',
      content: `Our web platforms use essential cookies and session storage mechanisms strictly required for navigation, security authentication, and remembering your interface preferences. We do not employ third-party behavioral advertising trackers, data brokers, or invasive tracking scripts.`
    },
    {
      id: 'data-rights',
      title: '8. Data Subject Rights & Retention',
      content: `In accordance with applicable regional data protection laws, clients and individual users maintain the following rights:`,
      bullets: [
        'Right to Access: Request a complete copy of personal and company contact data retained in our systems.',
        'Right to Rectification: Request immediate correction of inaccurate or incomplete corporate records.',
        'Right to Erasure: Request permanent deletion of contact information upon termination of commercial engagements, subject to mandatory tax retention periods.',
        'Right to Portability: Request structured export of account metadata in standard machine-readable formats.'
      ]
    },
    {
      id: 'contact',
      title: '9. Contact Our Data Governance Team',
      content: `If you have inquiries, audit requests, or concerns regarding this Privacy Policy or our operational security practices, please contact our engineering governance team directly:`
    }
  ];

  return (
    <div className="bg-gallery-white min-h-screen font-apple text-ink selection:bg-apple-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-6 max-w-[1000px] mx-auto text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-100/40 before:via-white before:to-sky-50/40 before:rounded-full before:top-20 before:blur-3xl before:-z-10">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-[13px] text-slate mb-6">
          <Link to="/" className="hover:text-apple-blue transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-ink font-medium">Privacy Policy</span>
        </div>

        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-5">
          Privacy Policy &amp;{' '}
          <span className="text-apple-blue font-serif-accent font-normal italic">
            Data Governance.
          </span>
        </h1>

        <p className="font-apple text-[16px] sm:text-[18px] text-slate leading-relaxed max-w-[700px] mx-auto mb-4">
          How Qadmas Technologies secures client confidentiality, project intelligence, and proprietary software data across Qatar, the UAE, and India.
        </p>

        <div className="text-[13px] text-slate/80 font-medium">
          Last Updated: September 2026 · Version 2.2
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 max-w-[900px] mx-auto px-6">
        <div className="space-y-12">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-10 shadow-xs hover:shadow-sm transition-all"
            >
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-ink tracking-tight mb-4 flex items-center gap-2.5">
                <Lock size={18} className="text-apple-blue shrink-0" />
                <span>{section.title}</span>
              </h2>

              <p className="text-[15px] text-slate leading-relaxed font-apple">
                {section.content}
              </p>

              {section.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-[14.5px] text-slate font-apple">
                      <span className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.id === 'contact' && (
                <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:info@qadmastechnologies.com"
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-ink hover:text-apple-blue transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-apple-blue shadow-2xs">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate uppercase tracking-wider font-semibold">Email Governance</div>
                      <div className="text-[13px] font-medium text-ink group-hover:text-apple-blue transition-colors">
                        info@qadmastechnologies.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919022568492"
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-ink hover:text-apple-blue transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-apple-blue shadow-2xs">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate uppercase tracking-wider font-semibold">Direct Legal Line</div>
                      <div className="text-[13px] font-medium text-ink group-hover:text-apple-blue transition-colors">
                        +91 90225 68492
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Link to Terms */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-apple-blue shadow-2xs">
              <FileText size={18} />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-ink">Review Our Terms &amp; Conditions</div>
              <div className="text-[12px] text-slate">Read our full master service agreement, IP ownership, and SLA standards.</div>
            </div>
          </div>
          <Link
            to="/terms-and-conditions"
            className="px-5 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-[13px] font-medium text-ink shadow-2xs transition-colors shrink-0"
          >
            View Terms &amp; Conditions
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { FileText, CheckCircle2, ChevronRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  const sections = [
    {
      id: 'agreement',
      title: '1. Master Services Agreement & Scope',
      content: `These Terms and Conditions constitute a legally binding agreement between Qadmas Technologies ("Studio", "we", "us", or "our") and the client entity ("Client", "you") commissioning custom software engineering, web platforms, mobile applications, or subscription packages. By executing a Statement of Work (SOW), subscribing to a pre-packaged tier, or paying an engineering sprint retainer, you agree to be bound by these terms across all regional jurisdictions in Qatar, the UAE, and India.`
    },
    {
      id: 'code-ownership',
      title: '2. 100% Source Code & Intellectual Property Ownership',
      content: `We operate on a strict transparent ownership philosophy for all bespoke engineering engagements:`,
      bullets: [
        'Full IP Transfer: Upon full and final settlement of all agreed project milestones or invoices, 100% of custom source code, application architectures, database schemas, and proprietary user interface designs are assigned exclusively to the Client.',
        'Zero Vendor Lock-In: Clients receive complete Git repositories, environment configurations, container Dockerfiles, and deployment documentation. You are never restricted from hosting on your own cloud infrastructure or self-managing post-launch.',
        'Pre-Existing Frameworks: General-purpose libraries, open-source dependencies (e.g., React, Next.js, FastAPI, PostgreSQL), and studio utility abstractions remain subject to their respective open-source licenses, with a perpetual, royalty-free license granted to the Client.'
      ]
    },
    {
      id: 'services-sow',
      title: '3. Engineering Sprints & Statements of Work',
      content: `Custom development projects are governed by detailed Statements of Work specifying feature deliverables, architecture milestones, acceptance criteria, and delivery timelines:`,
      bullets: [
        'Iterative Agile Sprints: Development proceeds in structured 2-week sprints with transparent staging reviews and continuous integration demos.',
        'Scope Revisions: Any material changes to feature scope, database architectures, or third-party integrations outside the initial SOW are scoped separately via mutual Change Orders.',
        'Acceptance Period: The Client has 14 calendar days upon milestone handover to review, test, and submit defects against agreed criteria before final milestone sign-off.'
      ]
    },
    {
      id: 'payments',
      title: '4. Commercial Terms, Billing & Retainers',
      content: `Our commercial engagements are structured transparently with zero hidden licensing markups:`,
      bullets: [
        'Sprint Milestones: Custom projects are billed on structured milestone schedules (e.g., deposit, design sign-off, staging deployment, final production release) as specified in your proposal.',
        'Subscription Platforms: Pre-packaged software tiers (including Wantik-X and Sila Vendor System) are billed monthly or annually in advance in Qatari Riyal (QAR) or equivalent local currencies (AED / INR).',
        'Taxes & Compliance: Invoices comply with commercial billing and applicable regional tax frameworks across Qatar, the UAE, and India.',
        'Late Payments: Accounts overdue by more than 30 calendar days may be subject to suspension of active staging environments or support SLAs until settled.'
      ]
    },
    {
      id: 'sla',
      title: '5. Service Level Agreements (SLA) & Uptime',
      content: `For clients subscribed to our managed cloud, DevOps maintenance, or enterprise retainers:`,
      bullets: [
        '99.9% Uptime Commitment: We architect cloud infrastructure with redundant clustering and automated failover to guarantee enterprise availability.',
        'Rapid Response Protocol: Critical production incidents (Severity 1) receive a guaranteed senior engineering response within 15 to 30 minutes 24/7.',
        'Continuous Backups: Automated multi-region database snapshots are executed daily and encrypted offsite with sub-hour recovery time objectives (RTO).'
      ]
    },
    {
      id: 'confidentiality',
      title: '6. Mutual Confidentiality & Non-Disclosure (NDA)',
      content: `Both parties agree that all technical specifications, business logic, customer records, database contents, pricing schedules, and proprietary trade secrets disclosed during engagement are strictly confidential. Neither party shall disclose such proprietary information to any third party without express written consent, enduring indefinitely beyond project completion.`
    },
    {
      id: 'warranties',
      title: '7. Warranties & Limitation of Liability',
      content: `Qadmas Technologies warrants that custom software developed will perform substantially in accordance with agreed specifications upon delivery:`,
      bullets: [
        '30-Day Defect Warranty: Following production deployment, we provide a 30-day bug warranty to remediate any deviations from approved specifications at zero additional charge.',
        'Limitation of Liability: In no event shall either party be liable for indirect, incidental, punitive, or consequential damages. Our aggregate liability arising under any SOW shall not exceed the total fees paid by Client under that specific SOW in the 12 months preceding the claim.',
        'Third-Party Services: We are not responsible for outages or rate-limit changes caused by external third-party services (e.g., payment gateways, WhatsApp Business APIs, cloud providers).'
      ]
    },
    {
      id: 'termination',
      title: '8. Termination & Offboarding Protocol',
      content: `Either party may terminate an active SOW with 30 days written notice. In the event of termination, the Client shall be invoiced for engineering hours and milestones completed up to the termination date. Upon receipt of payment, Qadmas Technologies will transfer all current code repositories, assets, and database schemas with complete documentation.`
    },
    {
      id: 'governing-law',
      title: '9. Governing Law & Dispute Resolution',
      content: `These terms and any disputes arising under them shall be governed by and construed in accordance with the commercial laws of the jurisdiction in which the contracting Qadmas Technologies entity operates (Qatar, the UAE, or India). Disputes shall be resolved amicably through senior executive consultation, or failing that, through binding commercial arbitration in accordance with regional arbitration rules.`
    },
    {
      id: 'contact',
      title: '10. Legal & Contract Inquiries',
      content: `For questions regarding these Terms, master service agreements, or enterprise NDA execution, reach out to our legal and commercial team:`
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
          <span className="text-ink font-medium">Terms &amp; Conditions</span>
        </div>

        <h1 className="text-display font-medium text-ink tracking-tight leading-[1.05] mb-5">
          Terms &amp;{' '}
          <span className="text-apple-blue font-serif-accent font-normal italic">
            Conditions.
          </span>
        </h1>

        <p className="font-apple text-[16px] sm:text-[18px] text-slate leading-relaxed max-w-[700px] mx-auto mb-4">
          Commercial terms, 100% code ownership guarantees, service level agreements, and engagement standards across Qatar, the UAE, and India.
        </p>

        <div className="text-[13px] text-slate/80 font-medium">
          Effective Date: September 2026 · Master Service Terms v2.4
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
                <CheckCircle2 size={18} className="text-apple-blue shrink-0" />
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
                      <div className="text-[11px] text-slate uppercase tracking-wider font-semibold">Contract &amp; SOW Desk</div>
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
                      <div className="text-[11px] text-slate uppercase tracking-wider font-semibold">Direct Commercial Line</div>
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

        {/* Quick Link to Privacy Policy */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-apple-blue shadow-2xs">
              <FileText size={18} />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-ink">Looking for our Data Privacy Policy?</div>
              <div className="text-[12px] text-slate">Read our full data protection protocols, cryptographic controls, and retention standards.</div>
            </div>
          </div>
          <Link
            to="/privacy-policy"
            className="px-5 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-[13px] font-medium text-ink shadow-2xs transition-colors shrink-0"
          >
            View Privacy Policy
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, CheckCircle, FileText, DollarSign, AlertCircle, Star, Users, Shield } from 'lucide-react'

const serviceData: Record<string, any> = {
  'study-visa': {
    icon: '🎓',
    title: 'Canada Study Visa Assistance',
    tagline: 'Study at world-class Canadian institutions with confidence.',
    overview: 'Canada is one of the world\'s top destinations for international students. A Canadian study permit allows foreign nationals to study at Designated Learning Institutions (DLIs) across the country. The process requires careful preparation — from acceptance letters to financial proof and purpose statements.',
    whoQualifies: [
      'Accepted by a Designated Learning Institution (DLI)',
      'Proof of financial support for tuition and living expenses',
      'Valid passport from your country of citizenship',
      'No criminal record',
      'Pass medical examination (if required)',
      'Demonstrate intent to leave Canada after study completion',
    ],
    documents: [
      'Valid passport (6+ months validity)',
      'DLI Acceptance Letter',
      'Proof of Funds (bank statements, scholarship letters)',
      'Academic transcripts and certificates',
      'Language test results (IELTS/TOEFL)',
      'Statement of Purpose / Study Plan',
      'Photographs (passport size)',
      'Medical examination (if required)',
      'Police clearance certificate',
    ],
    timeline: '8 – 12 weeks (standard)',
    govFee: 'CAD $150 (Study Permit application fee)',
    serviceFee: 'From $799 CAD',
    faqs: [
      { q: 'Can I work while studying in Canada?', a: 'Yes! Full-time international students at DLIs are eligible to work up to 24 hours per week off-campus during academic sessions, and full-time during scheduled breaks.' },
      { q: 'Can I bring my family?', a: 'Yes. Spouses and dependent children may be eligible for open work permits and study permits, respectively.' },
      { q: 'What happens after graduation?', a: 'You may be eligible for a Post-Graduation Work Permit (PGWP) for up to 3 years, and eventually use Canadian work experience to apply for permanent residence.' },
    ],
  },
  'express-entry': {
    icon: '⚡',
    title: 'Express Entry Guidance',
    tagline: 'Fast-track your permanent residence application.',
    overview: 'Express Entry is Canada\'s flagship immigration system for skilled workers. It manages applications for three federal economic immigration programs: Federal Skilled Worker Program (FSWP), Federal Skilled Trades Program (FSTP), and Canadian Experience Class (CEC). Candidates are ranked by Comprehensive Ranking System (CRS) score and top-ranked candidates receive Invitations to Apply (ITAs) for permanent residence.',
    whoQualifies: [
      'Skilled work experience (1+ year in NOC 0, A, or B)',
      'Language proficiency (IELTS/CELPIP minimum CLB 7)',
      'Educational credentials (ECA for foreign education)',
      'CRS score competitive enough for invitation',
    ],
    documents: [
      'Valid passport',
      'Language test results (IELTS/CELPIP/TEF)',
      'Educational Credential Assessment (ECA)',
      'Work experience reference letters',
      'Proof of funds',
      'Police clearances',
      'Medical examination results',
    ],
    timeline: 'Express Entry profile: 1-2 weeks | ITA to PR: 6 months',
    govFee: 'CAD $1,365 (primary applicant) + $1,365 (spouse)',
    serviceFee: 'From $1,299 CAD',
    faqs: [
      { q: 'What is a good CRS score?', a: 'CRS cutoff scores fluctuate with each draw. Recent draws have ranged from 470-550. Provincial nominations add 600 points, virtually guaranteeing an ITA.' },
      { q: 'How can I increase my CRS score?', a: 'Improve language scores, get a provincial nomination, get a valid job offer, complete additional education, or gain more Canadian work experience.' },
    ],
  },
}

const defaultService = {
  icon: '📋',
  title: 'Immigration Service',
  tagline: 'Professional immigration assistance for Canada.',
  overview: 'Our team of licensed immigration consultants provides comprehensive assistance for this immigration pathway. We handle every aspect of your application from initial assessment to final submission, ensuring accuracy and maximizing your chances of success.',
  whoQualifies: ['Meet the eligibility criteria for this program', 'Have the required documentation', 'Meet financial requirements', 'Have a clean immigration history'],
  documents: ['Valid passport', 'Application forms', 'Supporting documents', 'Photographs', 'Financial proof'],
  timeline: 'Varies by application type',
  govFee: 'Varies',
  serviceFee: 'Contact us for pricing',
  faqs: [{ q: 'How do I get started?', a: 'Book a consultation and our experts will guide you through the entire process.' }],
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceData[params.slug] || defaultService
  return {
    title: service.title,
    description: service.overview.substring(0, 160),
  }
}

export function generateStaticParams() {
  return [
    { slug: 'study-visa' }, { slug: 'visitor-visa' }, { slug: 'work-permit' },
    { slug: 'permanent-residence' }, { slug: 'express-entry' }, { slug: 'pnp' },
    { slug: 'family-sponsorship' }, { slug: 'trv' }, { slug: 'visitor-record' },
    { slug: 'restoration' }, { slug: 'lmia' }, { slug: 'proof-of-funds' },
    { slug: 'salary-package' }, { slug: 'loe' }, { slug: 'document-review' },
    { slug: 'interview-prep' }, { slug: 'refusal-review' }, { slug: 'travel-docs' },
    { slug: 'business-immigration' }, { slug: 'other' },
  ]
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug] || { ...defaultService, title: params.slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-bg grid-pattern py-28 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue" style={{ width: '600px', height: '400px', top: '-100px', right: '0', opacity: 0.2 }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/services" className="text-slate-400 hover:text-gold-500 text-sm transition-colors">Services</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 text-sm">{service.title}</span>
          </div>
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="section-title mb-4">{service.title}</h1>
          <p className="section-subtitle mb-8">{service.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/booking" className="btn-primary">Book Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/booking?type=apply" className="btn-secondary">Apply Now <FileText className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="glass-card p-8">
                <h2 className="font-display font-bold text-xl text-white mb-4">Service Overview</h2>
                <p className="text-slate-300 leading-relaxed">{service.overview}</p>
              </div>

              {/* Who Qualifies */}
              <div className="glass-card p-8">
                <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2"><Users className="w-5 h-5 text-gold-500" /> Who Qualifies</h2>
                <ul className="space-y-3">
                  {service.whoQualifies.map((q: string) => (
                    <li key={q} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="glass-card p-8">
                <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2"><FileText className="w-5 h-5 text-gold-500" /> Required Documents</h2>
                <ul className="space-y-2">
                  {service.documents.map((d: string) => (
                    <li key={d} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="glass-card p-8">
                  <h2 className="font-display font-bold text-xl text-white mb-5">Frequently Asked Questions</h2>
                  <div className="space-y-5">
                    {service.faqs.map((faq: any) => (
                      <div key={faq.q}>
                        <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-white mb-5">Service Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-xs mb-1">Processing Time</div>
                      <div className="text-white font-medium text-sm">{service.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-xs mb-1">Government Fee</div>
                      <div className="text-white font-medium text-sm">{service.govFee}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-400 text-xs mb-1">Our Service Fee</div>
                      <div className="text-gold-500 font-bold">{service.serviceFee}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 text-center">
                <Shield className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">RCIC Licensed</h3>
                <p className="text-slate-400 text-xs mb-5">Your application is handled by fully licensed, regulated consultants.</p>
                <Link href="/booking" className="btn-primary w-full justify-center">
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/booking?type=apply" className="btn-secondary w-full justify-center mt-3">
                  Apply Now
                </Link>
              </div>

              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-semibold">Important Notice</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">Government fees are subject to change without notice. Always verify current fees on the official IRCC website before submitting your application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

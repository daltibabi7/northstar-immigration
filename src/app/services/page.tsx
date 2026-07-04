import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, ChevronRight, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immigration Services',
  description: 'Comprehensive Canada immigration services — study visa, work permit, express entry, permanent residence, family sponsorship, and more.',
}

const allServices = [
  {
    category: 'Visas & Permits',
    items: [
      { icon: '🎓', title: 'Canada Study Visa', slug: 'study-visa', desc: 'Full assistance for student visa applications to Canadian colleges and universities.', time: '8–12 weeks', fee: 'From $799', popular: true },
      { icon: '✈️', title: 'Visitor Visa (TRV)', slug: 'visitor-visa', desc: 'Tourism, family visits, or business travel to Canada.', time: '2–8 weeks', fee: 'From $399' },
      { icon: '💼', title: 'Work Permit', slug: 'work-permit', desc: 'Open and employer-specific work permits for Canadian employment.', time: '4–16 weeks', fee: 'From $699', popular: true },
      { icon: '📋', title: 'Temporary Resident Visa', slug: 'trv', desc: 'TRV applications for short-term stays in Canada.', time: '2–6 weeks', fee: 'From $399' },
      { icon: '🔄', title: 'Visitor Record Extension', slug: 'visitor-record', desc: 'Extend your authorized stay in Canada.', time: '2–4 weeks', fee: 'From $299' },
      { icon: '⚠️', title: 'Restoration of Status', slug: 'restoration', desc: 'Restore your legal immigration status in Canada.', time: '4–8 weeks', fee: 'From $899' },
    ]
  },
  {
    category: 'Permanent Residence',
    items: [
      { icon: '🏠', title: 'Permanent Residence', slug: 'permanent-residence', desc: 'Navigate your pathway to Canadian permanent residency.', time: '12–24 months', fee: 'From $1,499', popular: true },
      { icon: '⚡', title: 'Express Entry', slug: 'express-entry', desc: 'Canada\'s flagship skilled worker immigration program.', time: '6 months', fee: 'From $1,299', popular: true },
      { icon: '🏛️', title: 'Provincial Nominee (PNP)', slug: 'pnp', desc: 'Province-specific immigration streams for targeted pathways.', time: '8–18 months', fee: 'From $1,499' },
      { icon: '👨👩👧', title: 'Family Sponsorship', slug: 'family-sponsorship', desc: 'Sponsor your spouse, parents, or children to Canada.', time: '12–24 months', fee: 'From $999' },
    ]
  },
  {
    category: 'Work & Business',
    items: [
      { icon: '📊', title: 'LMIA Support', slug: 'lmia', desc: 'Labour Market Impact Assessment for Canadian employers.', time: '2–5 months', fee: 'From $1,999' },
      { icon: '🏢', title: 'Business Immigration', slug: 'business-immigration', desc: 'Entrepreneur, investor, and start-up visa programs.', time: 'Varies', fee: 'From $2,499' },
      { icon: '💰', title: 'Proof of Funds Package', slug: 'proof-of-funds', desc: 'Professional preparation of financial documentation.', time: '1–2 weeks', fee: 'From $299' },
      { icon: '💵', title: 'Salary Package', slug: 'salary-package', desc: 'Employment offer and salary documentation support.', time: '1–2 weeks', fee: 'From $249' },
    ]
  },
  {
    category: 'Document Services',
    items: [
      { icon: '📝', title: 'Letter of Explanation (LOE)', slug: 'loe', desc: 'Professionally crafted explanatory letters for your application.', time: '3–5 days', fee: 'From $199' },
      { icon: '🔍', title: 'Document Review', slug: 'document-review', desc: 'Expert review of all immigration documents before submission.', time: '2–3 days', fee: 'From $149' },
      { icon: '🎤', title: 'Interview Preparation', slug: 'interview-prep', desc: 'Mock interviews and coaching for visa officer meetings.', time: '1–2 sessions', fee: 'From $249' },
      { icon: '❌', title: 'Visa Refusal Review', slug: 'refusal-review', desc: 'Analyze refusals and build a stronger reapplication.', time: '1–2 weeks', fee: 'From $499' },
      { icon: '🗺️', title: 'Travel Documentation', slug: 'travel-docs', desc: 'Travel document assistance including travel history letters.', time: '3–5 days', fee: 'From $199' },
      { icon: '🌍', title: 'Other Immigration Services', slug: 'other', desc: 'Custom immigration assistance for unique situations.', time: 'Varies', fee: 'Contact Us' },
    ]
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-bg grid-pattern py-28 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue" style={{ width: '600px', height: '400px', top: '-100px', right: '0', opacity: 0.25 }} />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="badge mb-6"><Star className="w-3 h-3 fill-current" /> Our Services</div>
            <h1 className="section-title mb-4">Comprehensive Immigration<br /><span className="text-gradient-gold">Services for Canada</span></h1>
            <p className="section-subtitle">From your first consultation to your Canadian landing card — we handle every step of every immigration pathway.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {allServices.map(({ category, items }) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display font-bold text-2xl text-white">{category}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(({ icon, title, slug, desc, time, fee, popular }) => (
                  <Link key={slug} href={`/services/${slug}`} className="glass-card p-6 group cursor-pointer block relative">
                    {popular && (
                      <div className="absolute -top-3 left-5">
                        <span className="badge text-[10px]"><Star className="w-2.5 h-2.5 fill-current" /> Popular</span>
                      </div>
                    )}
                    <div className="text-3xl mb-4">{icon}</div>
                    <h3 className="font-semibold text-white text-base mb-2 group-hover:text-gold-400 transition-colors">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/8">
                      <div className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" />{time}</div>
                      <div className="text-gold-500 text-sm font-semibold">{fee}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="glass-card p-10 text-center">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Not Sure Which Service You Need?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Book a free assessment and our experts will identify the best immigration pathway for your unique situation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/booking" className="btn-primary">Book Free Assessment <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="btn-secondary">Speak to an Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

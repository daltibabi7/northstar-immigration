'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Search, ArrowRight, MessageCircle } from 'lucide-react'

const categories = [
  {
    name: 'General',
    faqs: [
      { q: 'What is NorthStar Immigration?', a: 'NorthStar Immigration is a licensed Canadian immigration consulting firm based in Toronto, Ontario. We are members of the College of Immigration and Citizenship Consultants (CICC) and have been helping clients immigrate to Canada since 2012.' },
      { q: 'Are your consultants licensed?', a: 'Yes. All our consultants are Regulated Canadian Immigration Consultants (RCICs), fully licensed and in good standing with the CICC. Our license numbers are available upon request.' },
      { q: 'How do I get started?', a: 'Simply book a consultation through our website. You can choose a 15-minute, 30-minute, or 60-minute session. During the consultation, we will assess your eligibility and recommend the best immigration pathway.' },
      { q: 'Do you offer virtual consultations?', a: 'Yes! We offer virtual consultations via Zoom or Google Meet, as well as phone and in-person consultations for clients in the Toronto area.' },
    ]
  },
  {
    name: 'Applications',
    faqs: [
      { q: 'How long does the immigration process take?', a: 'Processing times vary by program: Express Entry PR (6 months), Study Visa (8–12 weeks), Visitor Visa (2–8 weeks), Work Permit (4–16 weeks), Family Sponsorship (12–24 months). We will give you a precise timeline based on your case.' },
      { q: 'What is the difference between Express Entry and PNP?', a: 'Express Entry is a federal points-based system for skilled workers. PNP (Provincial Nominee Program) allows provinces to nominate individuals for PR who meet their specific economic needs. Many applicants use both — a provincial nomination adds 600 CRS points to your Express Entry profile.' },
      { q: 'Can you help if my visa was refused?', a: 'Absolutely. We specialize in refusal reviews and reapplications. We analyze every refusal reason, address each concern thoroughly, and build a significantly stronger application. Our refusal-to-approval conversion rate is very high.' },
      { q: 'Do I need to be in Canada to apply?', a: 'No. Most immigration applications can be submitted from outside Canada. We serve clients globally and handle all applications online.' },
    ]
  },
  {
    name: 'Fees & Payment',
    faqs: [
      { q: 'What are your consultation fees?', a: '15 minutes: $75 | 30 minutes: $150 | 45 minutes: $200 | 60 minutes: $250 | Premium Consultation: $500 | Emergency Consultation: $400 | Virtual: $150 | Phone: $120. Government filing fees are additional.' },
      { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, debit cards, Interac e-Transfer, bank transfer, PayPal, Stripe, Paystack, and Flutterwave. All payments are processed securely.' },
      { q: 'Are there hidden fees?', a: 'Absolutely not. We provide a complete fee breakdown before you commit to any service. Our pricing is fully transparent — what you see is what you pay. Government filing fees are separate and disclosed upfront.' },
      { q: 'Do you offer payment plans?', a: 'Yes, for larger service packages we offer flexible payment plans. Contact us to discuss options suitable for your budget.' },
    ]
  },
  {
    name: 'Documents',
    faqs: [
      { q: 'What documents do I need?', a: 'Required documents vary by program. Generally: valid passport, educational credentials (with ECA if applicable), work experience letters, bank statements (proof of funds), police clearances, and health examinations. We provide a personalized checklist after your assessment.' },
      { q: 'Do my documents need to be translated?', a: 'Yes. All documents not in English or French must be accompanied by a certified translation. We can recommend trusted certified translators.' },
      { q: 'How do I upload documents to my case file?', a: 'After registering, you can securely upload all documents through your Client Portal. You can also email them to your dedicated case manager.' },
      { q: 'How long do you keep my documents?', a: 'We retain client documents securely for 7 years in compliance with CICC guidelines and Canadian privacy laws (PIPEDA). You can request deletion at any time per GDPR/PIPEDA.' },
    ]
  },
]

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const filtered = categories.map(cat => ({
    ...cat,
    faqs: cat.faqs.filter(f =>
      search === '' ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.faqs.length > 0)

  return (
    <div className="pt-20">
      <section className="hero-bg grid-pattern py-28 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue" style={{ width: '500px', height: '400px', top: '-150px', left: '-100px', opacity: 0.25 }} />
        <div className="section-container relative z-10 text-center">
          <div className="badge mb-6 mx-auto w-fit">Frequently Asked Questions</div>
          <h1 className="section-title mb-4">Everything You Need to <span className="text-gradient-gold">Know</span></h1>
          <p className="section-subtitle mx-auto mb-10">Find answers to common questions about Canadian immigration and our services.</p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              className="input-premium pl-12"
              placeholder="Search questions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`portal-sidebar-item w-full text-left ${activeCategory === cat.name && search === '' ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* FAQs */}
            <div className="lg:col-span-3 space-y-10">
              {filtered.map(cat => (
                <div key={cat.name}>
                  <h2 className="font-display font-semibold text-xl text-white mb-5">{cat.name}</h2>
                  <div className="space-y-3">
                    {cat.faqs.map((faq, i) => {
                      const key = `${cat.name}-${i}`
                      return (
                        <div key={key} className={`faq-item ${openIndex === key ? 'open' : ''}`}>
                          <div className="faq-question" onClick={() => setOpenIndex(openIndex === key ? null : key)}>
                            <span>{faq.q}</span>
                            <ChevronDown className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${openIndex === key ? 'rotate-180' : ''}`} />
                          </div>
                          <div className={`faq-answer ${openIndex === key ? 'open' : ''}`}>{faq.a}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="glass-card p-10 text-center">
                  <p className="text-slate-400">No results found for "{search}"</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-10 text-center mt-16">
            <MessageCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-white mb-3">Still Have Questions?</h3>
            <p className="text-slate-400 mb-8">Our immigration experts are ready to answer your specific questions.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/booking" className="btn-primary">Book a Consultation <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (647) 555-1234', sub: 'Mon – Fri, 9AM – 6PM EST', href: 'tel:+16475551234' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+1 (647) 555-1234', sub: 'Quick response within 1 hour', href: 'https://wa.me/16475551234' },
  { icon: Mail, label: 'Email', value: 'info@northstarimmigration.ca', sub: '24/7 email support', href: 'mailto:info@northstarimmigration.ca' },
  { icon: MapPin, label: 'Office', value: '123 Bay Street, Suite 400', sub: 'Toronto, Ontario M5V 3A8', href: '#map' },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM EST' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM EST' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Emergency Consultations', time: '24/7 Available' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-bg grid-pattern py-28 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue" style={{ width: '500px', height: '400px', top: '-150px', right: '-100px', opacity: 0.25 }} />
        <div className="section-container relative z-10 text-center">
          <div className="badge mb-6 mx-auto w-fit"><Mail className="w-3 h-3" /> Get in Touch</div>
          <h1 className="section-title mb-4">We Are Here to <span className="text-gradient-gold">Help You</span></h1>
          <p className="section-subtitle mx-auto">Have a question about your immigration options? Reach out and our experts will get back to you promptly.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
                <a key={label} href={href} className="glass-card p-6 flex items-start gap-4 group cursor-pointer block">
                  <div className="service-icon-wrap flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">{label}</div>
                    <div className="font-semibold text-white group-hover:text-gold-400 transition-colors">{value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="service-icon-wrap">
                    <Clock className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-slate-400">{day}</span>
                      <span className="text-white font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/6 hover:bg-gold-500/20 border border-white/8 hover:border-gold-500/30 flex items-center justify-center transition-all">
                      <Icon className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400">We will get back to you within 24 hours. Check your email for a confirmation.</p>
                    <button onClick={() => setSent(false)} className="btn-secondary mt-8">Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-2xl text-white mb-2">Send Us a Message</h2>
                    <p className="text-slate-400 text-sm mb-8">Fill out the form below and we will respond within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="label-premium">Full Name *</label>
                          <input required className="input-premium" placeholder="John Smith" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                        </div>
                        <div>
                          <label className="label-premium">Email Address *</label>
                          <input required type="email" className="input-premium" placeholder="john@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="label-premium">Phone Number</label>
                          <input className="input-premium" placeholder="+1 (416) 555-0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                        </div>
                        <div>
                          <label className="label-premium">Service Needed</label>
                          <select className="input-premium" value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                            <option value="">Select a service...</option>
                            <option>Study Visa</option>
                            <option>Work Permit</option>
                            <option>Permanent Residence</option>
                            <option>Express Entry</option>
                            <option>Family Sponsorship</option>
                            <option>Visitor Visa</option>
                            <option>Business Immigration</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="label-premium">Message *</label>
                        <textarea required rows={5} className="input-premium resize-none" placeholder="Tell us about your immigration needs..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div id="map" className="mt-12 glass-card overflow-hidden" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4696895!2d-79.3837!3d43.6468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2b9ea851ab%3A0x70e77f5df5c67b4e!2sBay%20Street%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

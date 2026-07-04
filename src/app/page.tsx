'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Shield, Activity, ChevronRight, CheckCircle2, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* 
        ========================================
        HERO SECTION - LIGHT TECH REDESIGN 
        ========================================
      */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden hero-gradient">
        <div className="section-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }} // waits for preloader
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <span className="flex w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">New Express Entry Updates</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6">
                Global mobility, <br />
                <span className="text-gradient-primary">engineered.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-500 font-normal max-w-xl mb-10 leading-relaxed">
                The modern infrastructure for Canadian immigration. We combine elite legal strategy with world-class technology to streamline your transition to Canada.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/booking" className="btn-primary w-full sm:w-auto">
                  Start Application <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link href="/services" className="btn-secondary w-full sm:w-auto">
                  Explore Pathways
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-gray-400 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                      <Star className="w-3 h-3 text-gray-300" />
                    </div>
                  ))}
                </div>
                <span>Trusted by 5,000+ global talents</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
            <Image
              src="/images/tech_globe_3d_1783138968336.png"
              alt="Global Network"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        BENTO BOX SERVICES
        ========================================
      */}
      <section className="section-padding bg-gray-50 relative z-10 border-t border-gray-100">
        <div className="section-container">
          <div className="mb-16">
            <span className="section-label">Immigration Infrastructure</span>
            <h2 className="section-title mb-6">Designed for scale <br/> and success.</h2>
            <p className="section-subtitle">
              Whether you are an individual navigating Express Entry, or an enterprise relocating talent, our platform handles the complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 tech-card p-10 bg-gradient-to-br from-white to-blue-50/30">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Economic Pathways</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Data-driven approach to Express Entry and Provincial Nominee Programs. We optimize your CRS score dynamically.
                  </p>
                  <Link href="/services/express-entry" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                <div className="relative h-48 md:h-full w-full rounded-xl overflow-hidden bg-white shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center">
                  <Image 
                    src="/images/tech_bento_cards_1783138977497.png" 
                    alt="UI Cards" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="tech-card p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Family Sponsorship</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Secure, encrypted document handling and meticulous application compilation for spousal and family reunification.
                </p>
              </div>
              <Link href="/services/family-sponsorship" className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700">
                Explore <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="tech-card relative overflow-hidden group">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/tech_flight_3d_1783151594314.png" 
                  alt="Business Travel" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-3">Global Mobility</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Intra-company transfers and start-up visas for global founders.
                </p>
                <Link href="/services/business-immigration" className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-200">
                  View <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Feature 4 - Wide */}
            <div className="md:col-span-2 tech-card p-10 relative overflow-hidden bg-gray-900 text-white">
              <div className="absolute inset-0 opacity-20">
                <Image 
                  src="/images/tech_success_abstract_1783138993982.png" 
                  alt="Abstract" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold mb-4">The Client Portal</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Track your application status in real-time, securely upload sensitive documents, and communicate directly with your dedicated legal team.
                </p>
                <Link href="/portal/login" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                  Access Portal
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        TRUST & METRICS
        ========================================
      */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance meets velocity.</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We've stripped away the archaic processes of traditional immigration law firms. By leveraging secure automation and our elite RCIC consultants, we deliver faster results with zero compromises on compliance.
              </p>
              <ul className="space-y-4">
                {['Bank-grade 256-bit encryption', 'Regulated by CICC', 'Automated timeline tracking', 'Dedicated case manager'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl tech-card border-none bg-white hidden md:block">
                <Image 
                  src="/images/tech_visa_success_1783151605988.png"
                  alt="Visa Success VIP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Uptime & Availability', value: '99.9%' },
                  { label: 'Approval Rate', value: '98.5%' },
                  { label: 'Global Clients', value: '5k+' },
                  { label: 'Avg. Response Time', value: '< 2h' },
                ].map((stat, i) => (
                  <div key={i} className="tech-card p-6 text-center bg-gray-50">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="section-container relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to launch?</h2>
          <p className="text-xl text-gray-400 mb-10 font-normal">
            Join thousands of successful immigrants who chose the modern standard. Book a consultation to map your strategy.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/booking" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-[#FCFCFD] text-[#09090B] pt-24">
      
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        
        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          <span className="section-label justify-center mb-6">About NorthStar</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Redefining <br /> <span className="text-gradient-primary">global mobility.</span>
          </h1>
          <p className="text-lg text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed">
            We built NorthStar to replace the archaic, fragmented immigration process with a unified, secure, and highly strategic platform.
          </p>
        </div>
      </section>

      {/* EDITORIAL STORY */}
      <section className="section-padding bg-white relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden tech-card border-none shadow-2xl">
              <Image
                src="/images/tech_office_abstract_1783138986295.png"
                alt="NorthStar HQ"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Built for the modern <br/> global citizen.
              </h2>
              <div className="prose prose-lg text-gray-500 font-normal leading-relaxed max-w-none">
                <p className="mb-6">
                  Traditional immigration law firms rely on outdated systems, manual data entry, and opaque communication. We recognized that ambitious professionals and scaling enterprises require a better standard.
                </p>
                <p className="mb-6">
                  At NorthStar, we combine elite, CICC-licensed legal expertise with proprietary software to streamline application processing, ensure absolute compliance, and drastically reduce processing friction.
                </p>
                <p>
                  Operating out of our Toronto headquarters, we serve a global clientele spanning 60+ countries. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label">Operating Principles</span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">The NorthStar Standard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Data-Driven Precision', icon: Award, desc: 'We utilize predictive analytics for Express Entry cutoff scores and processing times.' },
              { title: 'Bank-Grade Security', icon: Shield, desc: 'Your sensitive personal data is protected by 256-bit encryption and robust access controls.' },
              { title: 'Global Presence', icon: MapPin, desc: 'Seamlessly serving clients across the globe from our headquarters in Toronto, Canada.' }
            ].map((value, i) => (
              <div key={i} className="tech-card p-10 bg-white hover:-translate-y-2 transition-transform duration-500">
                <div className="w-14 h-14 rounded-2xl border border-gray-100 flex items-center justify-center mb-6 bg-gray-50 text-blue-600">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm font-normal text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-light opacity-50" />
        <div className="section-container relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Start your application.</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-normal text-lg">
            Speak with a senior advisor today to discover your optimal pathway to Canada.
          </p>
          <Link href="/booking" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
            Book Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}

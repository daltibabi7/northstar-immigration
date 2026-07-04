'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Star } from 'lucide-react'

const services = [
  { name: 'Study Visa', href: '/services/study-visa' },
  { name: 'Visitor Visa', href: '/services/visitor-visa' },
  { name: 'Work Permit', href: '/services/work-permit' },
  { name: 'Express Entry', href: '/services/express-entry' },
  { name: 'Family Sponsorship', href: '/services/family-sponsorship' },
  { name: 'Business Immigration', href: '/services/business-immigration' },
  { name: 'View All Services', href: '/services', highlight: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group z-50">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-bold text-lg text-gray-900 tracking-tight leading-none">NorthStar</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 backdrop-blur-md rounded-full px-2 py-1 border border-gray-200/50">
              <Link href="/" className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:shadow-sm transition-all">Home</Link>
              <Link href="/about" className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:shadow-sm transition-all">About</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:shadow-sm transition-all flex items-center gap-1">
                  Services
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-2 border border-gray-100 shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`block px-4 py-2.5 text-[13px] rounded-xl transition-all duration-200 ${
                          s.highlight
                            ? 'text-blue-600 font-semibold hover:bg-blue-50 mt-1 border-t border-gray-50'
                            : 'text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/blog" className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:shadow-sm transition-all">Blog</Link>
              <Link href="/contact" className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white hover:shadow-sm transition-all">Contact</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/portal/login" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Log in
              </Link>
              <Link href="/booking" className="btn-primary text-[13px] py-2 px-5">
                Book Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/98 backdrop-blur-3xl z-40 lg:hidden transition-all duration-300 ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 space-y-6 text-center">
            {['/', '/about', '/services', '/blog', '/contact'].map((href) => {
              const labels: Record<string, string> = { '/': 'Home', '/about': 'About', '/services': 'Services', '/blog': 'Blog', '/contact': 'Contact' }
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {labels[href]}
                </Link>
              )
            })}
            <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
              <Link href="/booking" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                Book Consultation
              </Link>
              <Link href="/portal/login" className="btn-secondary w-full" onClick={() => setMobileOpen(false)}>
                Log in to Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

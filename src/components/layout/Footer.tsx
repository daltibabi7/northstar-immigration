import Link from 'next/link'
import { Star, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const services = [
  { name: 'Study Visas', href: '/services/study-visa' },
  { name: 'Express Entry', href: '/services/express-entry' },
  { name: 'Family Sponsorship', href: '/services/family-sponsorship' },
  { name: 'Business Pathways', href: '/services/business-immigration' },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Book Consultation', href: '/booking' },
  { name: 'Client Portal', href: '/portal' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-8 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="font-bold text-lg text-gray-900 tracking-tight leading-none">NorthStar</div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              The modern infrastructure for Canadian immigration. Fast, secure, and fully compliant.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all text-gray-400"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-semibold text-sm text-gray-900 mb-5">Platform</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-gray-900 mb-5">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-gray-900 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@northstar.ca" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                  hello@northstar.ca
                </a>
              </li>
              <li>
                <a href="tel:+14165550199" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                  +1 (416) 555-0199
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} NorthStar Immigration. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Legal'].map((text) => (
              <Link key={text} href="#" className="text-gray-400 hover:text-gray-900 text-xs font-medium transition-colors">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag, Search, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Immigration News & Updates',
  description: 'Stay informed with the latest Canadian immigration news, visa updates, Express Entry draws, policy changes, and immigration tips.',
}

const categories = ['All', 'Express Entry', 'Immigration News', 'Visa Tips', 'Travel Advice', 'Processing Times', 'Success Stories', 'Policy Changes']

const posts = [
  {
    slug: 'ircc-draw-july-2025',
    category: 'Express Entry',
    title: 'IRCC Invites 3,500 Express Entry Candidates — Latest Draw Results',
    excerpt: 'Immigration, Refugees and Citizenship Canada (IRCC) has issued 3,500 Invitations to Apply (ITAs) with a minimum CRS score of 495 in the latest Express Entry draw held on July 2, 2025.',
    date: 'July 2, 2025',
    readTime: '4 min read',
    featured: true,
  },
  {
    slug: 'pgwp-extension-2025',
    category: 'Visa Tips',
    title: 'Canada Extends Post-Graduation Work Permit for 2025 Graduates',
    excerpt: 'International students graduating in 2025 will be eligible for an additional 18-month open work permit under the new PGWP extension policy announced by IRCC.',
    date: 'June 28, 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'citizenship-language-2025',
    category: 'Policy Changes',
    title: 'New Language Requirements for Canadian Citizenship Announced',
    excerpt: 'The Canadian government has announced updated minimum language test scores for citizenship applicants, effective September 1, 2025. Here is everything you need to know.',
    date: 'June 20, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'pr-pathway-nurses',
    category: 'Immigration News',
    title: 'New Permanent Residence Pathway for International Nurses',
    excerpt: 'Canada launches a dedicated immigration stream for internationally trained nurses to address healthcare worker shortages across the country.',
    date: 'June 15, 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'study-visa-refusal-tips',
    category: 'Visa Tips',
    title: 'Why Study Visas Get Refused — And How to Avoid the Most Common Mistakes',
    excerpt: 'Study visa refusals are more common than you think. Our consultants break down the top 10 reasons for refusal and exactly how to avoid them.',
    date: 'June 10, 2025',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'success-story-nigeria',
    category: 'Success Stories',
    title: "From Lagos to Toronto: Amara's Immigration Journey with NorthStar",
    excerpt: 'After a visa refusal and months of uncertainty, Amara worked with NorthStar Immigration and received her study visa approval in just 6 weeks. Read her story.',
    date: 'June 5, 2025',
    readTime: '7 min read',
    featured: false,
  },
]

export default function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const regular = posts.filter(p => !p.featured)

  return (
    <div className="pt-20">
      <section className="hero-bg grid-pattern py-28 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue" style={{ width: '500px', height: '400px', top: '-150px', right: '-100px', opacity: 0.25 }} />
        <div className="section-container relative z-10">
          <div className="max-w-2xl">
            <div className="badge mb-6">Immigration Blog</div>
            <h1 className="section-title mb-4">News, Tips &<br /><span className="text-gradient-gold">Immigration Updates</span></h1>
            <p className="section-subtitle mb-8">Stay informed with the latest Canadian immigration news, expert tips, and policy changes.</p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input className="input-premium pl-12" placeholder="Search articles..." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
            {categories.map(c => (
              <button key={c} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                c === 'All' ? 'bg-gold-500 text-navy-900' : 'bg-white/6 border border-white/10 text-slate-300 hover:border-gold-500/30 hover:text-gold-400'
              }`}>{c}</button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-gold-500" />
              <h2 className="font-display font-semibold text-xl text-white">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-7 group cursor-pointer block">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge text-xs">{post.category}</span>
                    <span className="text-slate-500 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold-400 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span className="text-gold-500 flex items-center gap-1 font-medium">Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-xl text-white mb-6">Latest Articles</h2>
            {regular.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-6 flex flex-col sm:flex-row gap-5 group cursor-pointer block hover:border-gold-500/25">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge text-xs">{post.category}</span>
                    <span className="text-slate-500 text-xs">{post.date}</span>
                    <span className="text-slate-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-gold-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex sm:flex-col items-center justify-end gap-2 sm:w-24">
                  <span className="text-gold-500 flex items-center gap-1 text-sm font-medium whitespace-nowrap">Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Eye, EyeOff, ArrowRight, Mail, Lock, User, Phone, Chrome, CheckCircle, Globe } from 'lucide-react'

export default function RegisterPage() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', password: '', confirm: '', country: '' })
  const [showPass, setShowPass] = useState(false)
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirm) { alert('Passwords do not match'); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 120% 100% at 50% -20%, rgba(30,58,138,0.5) 0%, transparent 60%), linear-gradient(180deg, #050D1A 0%, #0a1628 100%)' }}>
      <div className="glow-orb glow-orb-blue float-element" style={{ width: '500px', height: '500px', top: '-150px', right: '-150px', opacity: 0.25 }} />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 w-full max-w-lg mx-6">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] float-element">
              <Star className="w-6 h-6 text-navy-900 fill-current" />
            </div>
          </Link>
          <h1 className="font-display font-bold text-3xl text-white mb-2">Create Your Account</h1>
          <p className="text-slate-400">Join NorthStar and track your immigration journey</p>
        </div>

        <div className="glass-card p-8 gradient-border">
          {done ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-2">Account Created!</h3>
              <p className="text-slate-400 text-sm mb-6">Check your email to verify your account.</p>
              <Link href="/portal/login" className="btn-primary">Sign In Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white/6 border border-white/12 hover:bg-white/10 transition-all font-medium text-white text-sm">
                <Chrome className="w-5 h-5" />
                Sign up with Google
              </button>

              <div className="relative flex items-center">
                <div className="flex-1 border-t border-white/10" />
                <span className="px-4 text-slate-500 text-xs">or create an account</span>
                <div className="flex-1 border-t border-white/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-premium">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input required className="input-premium pl-10" placeholder="John Smith" value={form.fullName} onChange={e => update('fullName', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="label-premium">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input className="input-premium pl-10" placeholder="+1 (416) 000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                </div>
              </div>

              <div>
                <label className="label-premium">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="email" className="input-premium pl-10" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
              </div>

              <div>
                <label className="label-premium">Country of Residence</label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input className="input-premium pl-10" placeholder="e.g. Nigeria" value={form.country} onChange={e => update('country', e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-premium">Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input required type={showPass ? 'text' : 'password'} className="input-premium pl-10 pr-10" placeholder="Min 8 characters" value={form.password} onChange={e => update('password', e.target.value)} />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="label-premium">Confirm Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input required type="password" className="input-premium pl-10" placeholder="Repeat password" value={form.confirm} onChange={e => update('confirm', e.target.value)} />
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  onClick={() => setAgree(!agree)}
                  className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${agree ? 'bg-gold-500 border-gold-500' : 'border-white/20'}`}
                >
                  {agree && <CheckCircle className="w-3 h-3 text-navy-900" />}
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  I agree to NorthStar's{' '}
                  <Link href="#" className="text-gold-500 hover:text-gold-400">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="#" className="text-gold-500 hover:text-gold-400">Privacy Policy</Link>
                </span>
              </label>

              <button type="submit" disabled={loading || !agree} className="btn-primary w-full py-4">
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    Creating Account...
                  </div>
                ) : (
                  <>Create Account <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}

          {!done && (
            <p className="text-center text-slate-500 text-sm mt-5">
              Already have an account?{' '}
              <Link href="/portal/login" className="text-gold-500 hover:text-gold-400 font-medium">Sign In</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

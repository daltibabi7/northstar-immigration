import Link from 'next/link'
import { Star, ArrowRight, Lock } from 'lucide-react'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 120% 100% at 50% -20%, rgba(30,58,138,0.4) 0%, transparent 60%), linear-gradient(180deg, #050D1A 0%, #0a1628 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative z-10 w-full max-w-md mx-6">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl mb-4 shadow-[0_0_30px_rgba(245,158,11,0.3)] float-element">
            <Star className="w-7 h-7 text-navy-900 fill-current" />
          </Link>
          <h1 className="font-display font-bold text-3xl text-white mb-2">Reset Password</h1>
          <p className="text-slate-400">Enter your email and we'll send you a reset link.</p>
        </div>
        <div className="glass-card p-8">
          <form className="space-y-5">
            <div>
              <label className="label-premium">Email Address</label>
              <input type="email" className="input-premium" placeholder="you@email.com" required />
            </div>
            <button type="submit" className="btn-primary w-full py-4">
              <Lock className="w-4 h-4" />
              Send Reset Link
            </button>
          </form>
          <p className="text-center text-slate-500 text-sm mt-5">
            Remember your password?{' '}
            <Link href="/portal/login" className="text-gold-500 hover:text-gold-400 font-medium">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Eye, EyeOff, ArrowRight, Mail, Lock, Chrome, CheckCircle } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoggedIn(true)
      setTimeout(() => window.location.href = '/portal', 1500)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      {/* Animated Light Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/20 rounded-full blur-[150px] mix-blend-multiply" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-cyan-400/20 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-6">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
          </Link>
          <h1 className="font-bold text-3xl text-gray-900 tracking-tight mb-2">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your NorthStar client portal</p>
        </div>

        <div className="tech-card p-8 bg-white/80 backdrop-blur-xl border border-gray-100 shadow-xl">
          {loggedIn ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-xl mb-2">Signed In!</h3>
              <p className="text-gray-500 text-sm">Redirecting to your portal...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Google Sign In */}
              <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-all font-medium text-gray-700 text-sm shadow-sm">
                <Chrome className="w-5 h-5 text-gray-500" />
                Continue with Google
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white/80 text-gray-400 text-xs font-medium uppercase tracking-wider">Or</span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    placeholder="you@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    required
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div
                    onClick={() => setRemember(!remember)}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                      remember ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white group-hover:border-blue-400'
                    }`}
                  >
                    {remember && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <span className="text-gray-600 text-sm font-medium">Remember me</span>
                </label>
                <Link href="/portal/forgot-password" className="text-blue-600 text-sm hover:text-blue-700 font-medium transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing In...
                  </div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?{' '}
            <Link href="/portal/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Create Account
            </Link>
          </p>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6 font-medium">
          Protected by 256-bit SSL encryption &bull; PIPEDA Compliant
        </p>
      </div>
    </div>
  )
}

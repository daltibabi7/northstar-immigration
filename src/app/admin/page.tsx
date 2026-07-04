'use client'

import { useState } from 'react'
import {
  Users, Calendar, DollarSign, BarChart2, FileText, MessageCircle,
  Settings, Bell, TrendingUp, ArrowUp, ArrowDown, Star, Eye,
  CheckCircle, AlertCircle, Clock, Search, Plus, Filter,
  Globe, Shield, Download, ChevronRight, LogOut, LayoutDashboard,
  BookOpen, Image, Mail, Sliders
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Clients', id: 'clients' },
  { icon: Calendar, label: 'Appointments', id: 'appointments' },
  { icon: DollarSign, label: 'Payments', id: 'payments' },
  { icon: FileText, label: 'Documents', id: 'documents' },
  { icon: BookOpen, label: 'Blog', id: 'blog' },
  { icon: MessageCircle, label: 'Messages', id: 'messages', badge: 8 },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Star, label: 'Testimonials', id: 'testimonials' },
  { icon: Bell, label: 'Support Tickets', id: 'tickets', badge: 3 },
  { icon: Mail, label: 'Email Templates', id: 'email' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

const stats = [
  { label: 'Total Clients', value: '1,248', change: '+12%', up: true, icon: Users, color: 'blue' },
  { label: 'Active Applications', value: '342', change: '+8%', up: true, icon: FileText, color: 'gold' },
  { label: 'Monthly Revenue', value: '$48,920', change: '+23%', up: true, icon: DollarSign, color: 'green' },
  { label: 'Pending Reviews', value: '18', change: '-5%', up: false, icon: AlertCircle, color: 'amber' },
]

const recentClients = [
  { name: 'John Smith', service: 'Express Entry', status: 'processing', date: 'July 3', nationality: '🇮🇳' },
  { name: 'Amara Diallo', service: 'Study Visa', status: 'approved', date: 'July 2', nationality: '🇳🇬' },
  { name: 'Maria Garcia', service: 'Family Sponsorship', status: 'pending', date: 'July 1', nationality: '🇲🇽' },
  { name: 'Wei Zhang', service: 'Work Permit', status: 'processing', date: 'June 30', nationality: '🇨🇳' },
  { name: 'Raj Patel', service: 'PR Application', status: 'approved', date: 'June 29', nationality: '🇮🇳' },
]

const todayAppointments = [
  { time: '9:00 AM', client: 'Sarah Chen', type: 'Express Entry Review', duration: '60 min', meet: 'Zoom' },
  { time: '11:00 AM', client: 'Michael Brown', type: 'Study Visa Assessment', duration: '30 min', meet: 'Phone' },
  { time: '2:00 PM', client: 'Fatima Al-Said', type: 'PNP Strategy Session', duration: '60 min', meet: 'Zoom' },
  { time: '4:30 PM', client: 'Carlos Rodriguez', type: 'PR Consultation', duration: '45 min', meet: 'Google Meet' },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [clientSearch, setClientSearch] = useState('')

  return (
    <div className="min-h-screen flex pt-20" style={{ background: '#030A14' }}>
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-white/8 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto p-4">
        <div className="mb-6 p-3 glass-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-navy-900" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Admin Panel</div>
              <div className="text-slate-400 text-xs">NorthStar Immigration</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map(({ icon: Icon, label, id, badge }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`portal-sidebar-item w-full text-left ${activeTab === id ? 'active' : ''}`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {badge && <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-900 text-xs font-bold flex items-center justify-center">{badge}</span>}
            </button>
          ))}
        </nav>

        <button className="portal-sidebar-item w-full text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 mt-4">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-2xl text-white capitalize">{activeTab}</h1>
            <p className="text-slate-400 text-sm mt-1">{new Date().toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-gold-500/30 transition-colors">
              <Bell className="w-4 h-4 text-slate-400" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold-500" />
            </button>
            <button className="btn-primary text-sm py-2 px-4">
              <Plus className="w-4 h-4" /> New Client
            </button>
          </div>
        </div>

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(({ label, value, change, up, icon: Icon }) => (
                <div key={label} className="stat-card">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-5 h-5 text-gold-500" />
                    <span className={`flex items-center gap-1 text-xs font-semibold ${up ? 'text-emerald-400' : 'text-red-400'}`}>
                      {up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {change}
                    </span>
                  </div>
                  <div className="font-display font-bold text-2xl text-white mb-1">{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Clients */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-white flex items-center gap-2"><Users className="w-4 h-4 text-gold-500" /> Recent Clients</h2>
                  <button className="btn-ghost text-xs py-1.5">View All <ChevronRight className="w-3 h-3" /></button>
                </div>
                <div className="space-y-3">
                  {recentClients.map(c => (
                    <div key={c.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/4 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-navy-700 border border-white/10 flex items-center justify-center text-lg">{c.nationality}</div>
                        <div>
                          <div className="text-white text-sm font-medium">{c.name}</div>
                          <div className="text-slate-400 text-xs">{c.service} · {c.date}</div>
                        </div>
                      </div>
                      <span className={`status-badge ${c.status === 'approved' ? 'status-approved' : c.status === 'processing' ? 'status-processing' : 'status-pending'}`}>{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Appointments */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-white flex items-center gap-2"><Calendar className="w-4 h-4 text-gold-500" /> Today's Schedule</h2>
                  <button className="btn-ghost text-xs py-1.5">Full Calendar <ChevronRight className="w-3 h-3" /></button>
                </div>
                <div className="space-y-3">
                  {todayAppointments.map(apt => (
                    <div key={apt.time} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/4 transition-colors cursor-pointer">
                      <div className="text-center flex-shrink-0 w-14">
                        <div className="text-gold-500 text-sm font-bold">{apt.time}</div>
                        <div className="text-slate-500 text-xs">{apt.meet}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium">{apt.client}</div>
                        <div className="text-slate-400 text-xs">{apt.type} · {apt.duration}</div>
                      </div>
                      <button className="btn-primary text-xs py-1 px-3">Join</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-white flex items-center gap-2"><BarChart2 className="w-4 h-4 text-gold-500" /> Revenue Overview</h2>
                <select className="input-premium py-2 px-4 text-sm w-auto">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              <div className="h-48 flex items-end gap-2">
                {[45, 62, 38, 75, 58, 90, 82].map((h, i) => {
                  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-gold-600 to-gold-500 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        style={{ height: `${h}%` }}
                        title={`$${h * 500}`}
                      />
                      <span className="text-slate-500 text-xs">{days[i]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  className="input-premium pl-10 py-2.5"
                  placeholder="Search clients..."
                  value={clientSearch}
                  onChange={e => setClientSearch(e.target.value)}
                />
              </div>
              <button className="btn-secondary text-sm py-2.5 px-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="btn-primary text-sm py-2.5 px-4">
                <Plus className="w-4 h-4" /> Add Client
              </button>
            </div>

            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    {['Client', 'Service', 'Status', 'Date', 'Progress', 'Actions'].map(h => (
                      <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentClients
                    .filter(c => c.name.toLowerCase().includes(clientSearch.toLowerCase()))
                    .map(c => (
                      <tr key={c.name} className="border-b border-white/6 hover:bg-white/3 transition-colors cursor-pointer">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-navy-700 border border-white/10 flex items-center justify-center">{c.nationality}</div>
                            <span className="text-white font-medium text-sm">{c.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-300 text-sm">{c.service}</td>
                        <td className="px-5 py-4">
                          <span className={`status-badge ${c.status === 'approved' ? 'status-approved' : c.status === 'processing' ? 'status-processing' : 'status-pending'}`}>{c.status}</span>
                        </td>
                        <td className="px-5 py-4 text-slate-400 text-sm">{c.date}</td>
                        <td className="px-5 py-4 w-32">
                          <div className="progress-line h-1.5 rounded-full">
                            <div className="progress-line-fill rounded-full" style={{ width: c.status === 'approved' ? '100%' : c.status === 'processing' ? '60%' : '25%' }} />
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex gap-2">
                            <button className="btn-ghost text-xs py-1.5 px-3"><Eye className="w-3 h-3" /></button>
                            <button className="btn-ghost text-xs py-1.5 px-3"><MessageCircle className="w-3 h-3" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!['dashboard', 'clients'].includes(activeTab) && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="font-semibold text-white mb-2 capitalize">{activeTab} Management</h3>
              <p className="text-slate-400 text-sm">This admin module is ready for backend integration.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

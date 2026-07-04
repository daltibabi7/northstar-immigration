'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Star, Home, Calendar, FileText, MessageCircle, CreditCard,
  Bell, Upload, Download, ChevronRight, Clock, CheckCircle,
  AlertCircle, BarChart2, Settings, LogOut, User, Plus
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Calendar, label: 'Appointments', id: 'appointments' },
  { icon: FileText, label: 'Documents', id: 'documents' },
  { icon: MessageCircle, label: 'Messages', id: 'messages', badge: 2 },
  { icon: CreditCard, label: 'Payments', id: 'payments' },
  { icon: BarChart2, label: 'Application Status', id: 'status' },
  { icon: Bell, label: 'Notifications', id: 'notifications', badge: 5 },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

const applications = [
  { id: 'NSI-2025-001', service: 'Express Entry PR', status: 'processing', updated: 'July 3, 2025', progress: 65 },
  { id: 'NSI-2025-002', service: 'Study Visa - University of Toronto', status: 'approved', updated: 'June 28, 2025', progress: 100 },
  { id: 'NSI-2024-089', service: 'Work Permit Extension', status: 'pending', updated: 'June 15, 2025', progress: 30 },
]

const appointments = [
  { date: 'July 8, 2025', time: '2:00 PM EST', type: 'Express Entry Strategy', consultant: 'David Okafor', meet: 'Zoom', status: 'upcoming' },
  { date: 'June 25, 2025', time: '10:00 AM EST', type: 'Document Review', consultant: 'Jennifer Liu', meet: 'Phone', status: 'completed' },
]

const documents = [
  { name: 'Passport Copy', type: 'PDF', size: '2.4 MB', date: 'June 20, 2025', status: 'verified' },
  { name: 'Educational Credentials (ECA)', type: 'PDF', size: '1.8 MB', date: 'June 18, 2025', status: 'pending' },
  { name: 'Work Experience Letter', type: 'PDF', size: '856 KB', date: 'June 15, 2025', status: 'verified' },
  { name: 'Proof of Funds (Bank Statement)', type: 'PDF', size: '4.1 MB', date: 'June 10, 2025', status: 'verified' },
]

const invoices = [
  { id: 'INV-2025-007', service: 'Express Entry Consultation', amount: '$250', date: 'July 1, 2025', status: 'paid' },
  { id: 'INV-2025-003', service: 'Application Filing Fee', amount: '$1,299', date: 'June 5, 2025', status: 'paid' },
  { id: 'INV-2025-001', service: 'Initial Consultation', amount: '$150', date: 'May 20, 2025', status: 'paid' },
]

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen pt-20 flex" style={{ background: '#030A14' }}>
      {/* Sidebar */}
      <aside className={`hidden lg:flex flex-col w-64 border-r border-white/8 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto p-4 transition-all`}>
        <div className="mb-6 p-4 glass-card">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/20 to-navy-700 border border-gold-500/20 flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <div className="font-semibold text-white text-sm">John Smith</div>
              <div className="text-slate-400 text-xs">Client ID: NSI-1042</div>
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
              <Icon className="w-4 h-4" />
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

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-display font-bold text-2xl text-white">Welcome back, John 👋</h1>
                <p className="text-slate-400 text-sm mt-1">Here's an overview of your immigration journey</p>
              </div>
              <Link href="/booking" className="btn-primary text-sm py-2.5">
                <Plus className="w-4 h-4" /> New Booking
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Active Applications', value: '2', icon: FileText, color: 'blue' },
                { label: 'Upcoming Appointments', value: '1', icon: Calendar, color: 'gold' },
                { label: 'Pending Documents', value: '1', icon: AlertCircle, color: 'amber' },
                { label: 'Total Invested', value: '$1,699', icon: CreditCard, color: 'green' },
              ].map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="glass-card p-5">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="glass-card p-6 mb-6">
              <h2 className="font-semibold text-white mb-5 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-gold-500" /> Application Status
              </h2>
              <div className="space-y-5">
                {applications.map(app => (
                  <div key={app.id} className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-white/15 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-white text-sm">{app.service}</div>
                        <div className="text-slate-500 text-xs mt-0.5">ID: {app.id} · Updated {app.updated}</div>
                      </div>
                      <span className={`status-badge ${
                        app.status === 'approved' ? 'status-approved' :
                        app.status === 'processing' ? 'status-processing' :
                        'status-pending'
                      }`}>{app.status}</span>
                    </div>
                    <div className="progress-line h-1.5 rounded-full">
                      <div className="progress-line-fill rounded-full" style={{ width: app.progress + '%' }} />
                    </div>
                    <div className="text-slate-500 text-xs mt-1.5">{app.progress}% complete</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Appointment */}
            <div className="glass-card p-6">
              <h2 className="font-semibold text-white mb-5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-500" /> Upcoming Appointment
              </h2>
              <div className="p-4 rounded-xl bg-gold-500/8 border border-gold-500/20">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-white">{appointments[0].type}</div>
                    <div className="text-slate-400 text-sm mt-1">{appointments[0].date} at {appointments[0].time}</div>
                    <div className="text-slate-400 text-sm">with {appointments[0].consultant} · {appointments[0].meet}</div>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    Join Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-display font-bold text-2xl text-white">My Documents</h1>
              <button className="btn-primary text-sm py-2.5">
                <Upload className="w-4 h-4" /> Upload Document
              </button>
            </div>
            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    {['Document', 'Type', 'Size', 'Uploaded', 'Status', 'Action'].map(h => (
                      <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {documents.map(doc => (
                    <tr key={doc.name} className="border-b border-white/6 hover:bg-white/3 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-red-400" />
                          </div>
                          <span className="text-white text-sm font-medium">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-400 text-sm">{doc.type}</td>
                      <td className="px-5 py-4 text-slate-400 text-sm">{doc.size}</td>
                      <td className="px-5 py-4 text-slate-400 text-sm">{doc.date}</td>
                      <td className="px-5 py-4">
                        <span className={`status-badge ${doc.status === 'verified' ? 'status-approved' : 'status-pending'}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button className="btn-ghost text-xs py-1.5 px-3">
                          <Download className="w-3 h-3" /> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div>
            <h1 className="font-display font-bold text-2xl text-white mb-8">Payment History</h1>
            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    {['Invoice ID', 'Service', 'Amount', 'Date', 'Status', 'Receipt'].map(h => (
                      <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(inv => (
                    <tr key={inv.id} className="border-b border-white/6 hover:bg-white/3 transition-colors">
                      <td className="px-5 py-4 text-slate-300 text-sm font-mono">{inv.id}</td>
                      <td className="px-5 py-4 text-white text-sm">{inv.service}</td>
                      <td className="px-5 py-4 text-gold-500 font-bold">{inv.amount}</td>
                      <td className="px-5 py-4 text-slate-400 text-sm">{inv.date}</td>
                      <td className="px-5 py-4"><span className="status-badge status-approved">{inv.status}</span></td>
                      <td className="px-5 py-4">
                        <button className="btn-ghost text-xs py-1.5 px-3">
                          <Download className="w-3 h-3" /> PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <h1 className="font-display font-bold text-2xl text-white mb-8">Messages</h1>
            <div className="glass-card p-6">
              <div className="space-y-4">
                {[
                  { from: 'David Okafor', msg: 'Your Express Entry profile has been updated. Please review the latest CRS score calculations...', time: '2h ago', unread: true },
                  { from: 'Jennifer Liu', msg: 'I have reviewed your documents. Everything looks good! Please upload your IELTS results when ready.', time: 'Yesterday', unread: true },
                  { from: 'Support Team', msg: 'Your consultation for July 8 has been confirmed. Meeting link sent to your email.', time: '2 days ago', unread: false },
                ].map((m, i) => (
                  <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-all hover:border-gold-500/30 ${
                    m.unread ? 'bg-gold-500/5 border-gold-500/15' : 'bg-white/3 border-white/8'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white text-sm">{m.from}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-xs">{m.time}</span>
                        {m.unread && <div className="w-2 h-2 rounded-full bg-gold-500" />}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm truncate">{m.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!['dashboard','documents','payments','messages'].includes(activeTab) && (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-slate-400 text-sm">This section is being built.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

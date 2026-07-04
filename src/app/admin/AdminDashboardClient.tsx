'use client'

import { useState } from 'react'
import { Users, FileText, CheckCircle, Clock } from 'lucide-react'

export default function AdminDashboardClient({ users, documents }: { users: any[], documents: any[] }) {
  const [activeTab, setActiveTab] = useState('clients')

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('clients')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'clients' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            <Users className="w-5 h-5 inline-block mr-2" /> Clients
          </button>
          <button 
            onClick={() => setActiveTab('documents')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'documents' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            <FileText className="w-5 h-5 inline-block mr-2" /> All Documents
          </button>
        </div>

        {activeTab === 'clients' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.length === 0 ? (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No clients found or DB not connected yet.</td></tr>
                ) : users.map(u => (
                  <tr key={u.id}>
                    <td className="px-6 py-4 text-sm text-gray-900 font-mono">{u.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{u.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{u.email}</td>
                    <td className="px-6 py-4 text-sm"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">{u.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Client ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Document Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {documents.length === 0 ? (
                  <tr><td colSpan={3} className="px-6 py-8 text-center text-gray-500">No documents found.</td></tr>
                ) : documents.map(d => (
                  <tr key={d.id}>
                    <td className="px-6 py-4 text-sm text-gray-900 font-mono">{d.user_id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{d.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <a href={d.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Download / View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

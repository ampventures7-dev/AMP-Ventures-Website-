import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, Search, Users, Activity, Database, 
  FileSpreadsheet, ShieldCheck 
} from 'lucide-react';
import { getApiUrl } from '../apiConfig';

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [readinessChecks, setReadinessChecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('leads');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Leads
      const leadsRes = await fetch(getApiUrl('/api/leads'));
      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        setLeads(leadsData.leads || []);
      }

      // Fetch Readiness Checks
      const readRes = await fetch(getApiUrl('/api/readiness-score'));
      if (readRes.ok) {
        const readData = await readRes.json();
        setReadinessChecks(readData.checks || []);
      }
    } catch (err) {
      console.warn("Using sample mock leads for offline demonstration", err);
      setLeads([
        {
          id: 101,
          name: "Rajesh Verma",
          business_name: "Verma Dental Clinic",
          email: "rajesh@vermadental.com",
          phone: "+91 98765 12345",
          tier: "Tier 2 - Premium (CMS & Reviews)",
          budget: "₹25,000 - ₹35,000",
          message: "Need online patient appointment booking and Google review sync.",
          status: "New",
          created_at: new Date().toISOString()
        },
        {
          id: 102,
          name: "Pooja Malhotra",
          business_name: "Glow & Shine Luxury Salon",
          email: "pooja@glowshine.in",
          phone: "+91 98111 22334",
          tier: "Tier 3 - Premium Plus (3D & Automation)",
          budget: "₹50,000+",
          message: "Interested in 3D salon showcase and WhatsApp automated appointment confirmations.",
          status: "Contacted",
          created_at: new Date(Date.now() - 86400000).toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredLeads = leads.filter(l => 
    l.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.tier?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page pt-28 pb-20 bg-white text-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Internal Lead Operations</span>
            </div>
            <h1 className="text-3xl font-display font-extrabold text-slate-900">Lead Intelligence & CRM</h1>
            <p className="text-xs text-slate-600 mt-1">Live SQLite database records captured across web forms & diagnostic tools.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href={getApiUrl('/api/leads/export.csv')} 
              className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300 flex items-center gap-2 transition-all shadow-xs"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Export CSV</span>
            </a>
            <button 
              onClick={fetchData} 
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-sky-500/25 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between mb-2">
              <span>Total Captured Leads</span>
              <Users className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">{leads.length}</div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between mb-2">
              <span>Audits Completed</span>
              <Activity className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">{readinessChecks.length}</div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between mb-2">
              <span>Database Engine</span>
              <Database className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-sm font-bold text-emerald-700 flex items-center gap-2 mt-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>SQLite Active</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'leads' ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
              onClick={() => setActiveTab('leads')}
            >
              Project Inquiries ({leads.length})
            </button>
            <button 
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'audits' ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25' : 'bg-slate-100 text-slate-600 hover:text-slate-900'}`}
              onClick={() => setActiveTab('audits')}
            >
              Readiness Audits ({readinessChecks.length})
            </button>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by business, name, or tier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 w-full sm:w-72"
            />
          </div>
        </div>

        {/* Leads Table */}
        {activeTab === 'leads' && (
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-x-auto">
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center text-slate-500 text-xs">
                No lead inquiries recorded yet. Submit one via the <Link to="/contact" className="text-sky-600 underline font-medium">Contact Page</Link>.
              </div>
            ) : (
              <table className="table w-full text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-6 text-left">ID</th>
                    <th className="py-4 px-6 text-left">Business & Contact</th>
                    <th className="py-4 px-6 text-left">Selected Tier</th>
                    <th className="py-4 px-6 text-left">Budget & Notes</th>
                    <th className="py-4 px-6 text-left">Status</th>
                    <th className="py-4 px-6 text-center">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-6 font-mono text-sky-600 font-bold">#{lead.id}</td>
                      <td className="py-3.5 px-6">
                        <strong className="text-slate-900 block text-sm">{lead.business_name}</strong>
                        <span className="text-slate-500 text-[11px]">{lead.name} • {lead.phone}</span>
                      </td>
                      <td className="py-3.5 px-6">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">{lead.tier}</span>
                      </td>
                      <td className="py-3.5 px-6 max-w-xs">
                        <div className="text-slate-900 font-medium">{lead.budget}</div>
                        <div className="text-slate-500 text-[11px] truncate">{lead.message || 'No specific notes'}</div>
                      </td>
                      <td className="py-3.5 px-6">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${lead.status === 'New' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                          {lead.status || 'New'}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        <a 
                          href={`https://wa.me/${(lead.phone || '').replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name)},%20this%20is%20AMP%20Ventures%20regarding%20your%20website%20inquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[11px] inline-flex items-center gap-1 hover:bg-emerald-100 transition-colors"
                        >
                          <span>WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Readiness Audits Table */}
        {activeTab === 'audits' && (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-xs text-slate-500 shadow-sm">
            {readinessChecks.length === 0 ? (
              <span>No completed readiness checks logged yet. Take one on the <Link to="/readiness-score" className="text-sky-600 underline font-medium">Audit Page</Link>.</span>
            ) : (
              <span>{readinessChecks.length} audits logged in backend.</span>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

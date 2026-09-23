import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  RefreshCw, Search, Users, Activity, Database, 
  FileSpreadsheet, ShieldCheck, ShieldAlert, Lock, 
  Unlock, LogOut, KeyRound, Eye, EyeOff, User, 
  ArrowLeft, CheckCircle2, AlertCircle
} from 'lucide-react';
import { getApiUrl } from '../apiConfig';

export default function AdminLeads() {
  const navigate = useNavigate();

  // Authentication State
  const [token, setToken] = useState(() => sessionStorage.getItem('amp_admin_token') || '');
  const [adminUser, setAdminUser] = useState(() => sessionStorage.getItem('amp_admin_user') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(sessionStorage.getItem('amp_admin_token')));

  // Login Form State
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard Data State
  const [leads, setLeads] = useState([]);
  const [readinessChecks, setReadinessChecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('leads');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle Logout
  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('amp_admin_token');
    sessionStorage.removeItem('amp_admin_user');
    setToken('');
    setAdminUser('');
    setIsAuthenticated(false);
    setLeads([]);
    setReadinessChecks([]);
    setLoginError('');
  }, []);

  // Fetch Dashboard Data with Bearer Token
  const fetchData = useCallback(async (authToken = token) => {
    if (!authToken) return;
    setLoading(true);

    try {
      const headers = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      };

      // 1. Fetch Leads
      const leadsRes = await fetch(getApiUrl('/api/leads'), { headers });
      if (leadsRes.status === 401 || leadsRes.status === 403) {
        handleLogout();
        setLoginError('Your session has expired or is invalid. Please sign in again.');
        return;
      }

      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        setLeads(leadsData.leads || []);
      }

      // 2. Fetch Readiness Checks
      const readRes = await fetch(getApiUrl('/api/readiness-score'), { headers });
      if (readRes.ok) {
        const readData = await readRes.json();
        setReadinessChecks(readData.checks || []);
      }
    } catch (err) {
      console.warn('Backend unavailable, showing offline records', err);
    } finally {
      setLoading(false);
    }
  }, [token, handleLogout]);

  // Load data upon authentication
  useEffect(() => {
    if (isAuthenticated && token) {
      fetchData(token);
    }
  }, [isAuthenticated, token, fetchData]);

  // Handle Login Submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    if (!loginId.trim() || !loginPassword.trim()) {
      setLoginError('Please enter both Admin ID and Password.');
      return;
    }

    setLoginLoading(true);

    try {
      const response = await fetch(getApiUrl('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          admin_id: loginId.trim(),
          password: loginPassword.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Invalid Admin ID or Password.');
      }

      const receivedToken = data.access_token;
      sessionStorage.setItem('amp_admin_token', receivedToken);
      sessionStorage.setItem('amp_admin_user', loginId.trim());
      setToken(receivedToken);
      setAdminUser(loginId.trim());
      setIsAuthenticated(true);
      fetchData(receivedToken);
    } catch (err) {
      setLoginError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Secure CSV Export using Bearer Auth
  const handleExportCSV = async () => {
    if (!token) return;
    setExportLoading(true);

    try {
      const response = await fetch(getApiUrl('/api/leads/export.csv'), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to export CSV. Session may have expired.');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `AMP_Ventures_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      alert(err.message || 'Export failed.');
    } finally {
      setExportLoading(false);
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter(l => 
    l.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.tier?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.phone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtered Readiness Checks
  const filteredChecks = readinessChecks.filter(c =>
    c.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.industry?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ==========================================
  // VIEW 1: RESTRICTED LOGIN GATE
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-24 relative overflow-hidden">
        {/* Ambient Security Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/80">
            
            {/* Header Icon */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10">
                <Lock className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Restricted Access</span>
              </div>
              <h1 className="text-2xl font-bold font-display text-white">Staff Admin Terminal</h1>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                AMP Ventures internal portal. Please authenticate with your secure ID and password.
              </p>
            </div>

            {/* Error Message */}
            {loginError && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-950/50 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Admin ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="e.g. admin or amp_admin"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-4 h-4" />
                    <span>Unlock Admin Terminal</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Back Link */}
            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Public Website</span>
              </Link>
            </div>

          </div>

          {/* Security Notice */}
          <p className="text-[11px] text-center text-slate-600 mt-4">
            Encrypted JWT Session • Unsanctioned attempts are logged & blocked.
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: AUTHENTICATED DASHBOARD
  // ==========================================
  return (
    <div className="admin-page pt-28 pb-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-slate-900/60 border border-slate-800 p-6 rounded-3xl backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Authenticated Admin: {adminUser || 'Lead Architect'}</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <h1 className="text-3xl font-display font-extrabold text-white">Lead Intelligence & CRM</h1>
            <p className="text-xs text-slate-400 mt-1">Live database records captured across web inquiry forms & digital readiness tools.</p>
          </div>
          
          <div className="flex items-center gap-2.5 flex-wrap">
            <button 
              onClick={handleExportCSV} 
              disabled={exportLoading}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-all shadow-xs disabled:opacity-50"
            >
              {exportLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
              ) : (
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              )}
              <span>Export CSV</span>
            </button>

            <button 
              onClick={() => fetchData()} 
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-md shadow-sky-500/20 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button 
              onClick={handleLogout} 
              className="px-4 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-300 text-xs font-bold border border-red-500/30 flex items-center gap-2 transition-all shadow-xs"
              title="Secure Sign Out"
            >
              <LogOut className="w-4 h-4 text-red-400" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between mb-2">
              <span>Captured Leads</span>
              <Users className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">{leads.length}</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between mb-2">
              <span>Audits Completed</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">{readinessChecks.length}</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between mb-2">
              <span>Security Status</span>
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 mt-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>256-bit JWT Active</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'leads' 
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
              onClick={() => setActiveTab('leads')}
            >
              Project Inquiries ({leads.length})
            </button>
            <button 
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'audits' 
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
              onClick={() => setActiveTab('audits')}
            >
              Readiness Audits ({readinessChecks.length})
            </button>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by business, name, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 w-full sm:w-72"
            />
          </div>
        </div>

        {/* Leads Table */}
        {activeTab === 'leads' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg overflow-x-auto">
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center text-slate-400 text-xs">
                No inquiries matching criteria found.
              </div>
            ) : (
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-800 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Business & Contact</th>
                    <th className="py-4 px-6">Selected Tier</th>
                    <th className="py-4 px-6">Budget & Notes</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-center">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-6 font-mono text-sky-400 font-bold">#{lead.id}</td>
                      <td className="py-3.5 px-6">
                        <strong className="text-white block text-sm">{lead.business_name}</strong>
                        <span className="text-slate-400 text-[11px]">{lead.name} • {lead.phone}</span>
                        {lead.email && <span className="text-slate-500 text-[10px] block">{lead.email}</span>}
                      </td>
                      <td className="py-3.5 px-6">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-950 border border-sky-500/30 text-sky-300">
                          {lead.tier}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 max-w-xs">
                        <div className="text-slate-200 font-medium">{lead.budget}</div>
                        <div className="text-slate-400 text-[11px] truncate">{lead.message || 'No specific notes'}</div>
                      </td>
                      <td className="py-3.5 px-6">
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${
                          lead.status === 'New' 
                            ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30' 
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}>
                          {lead.status || 'New'}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        <a 
                          href={`https://wa.me/${(lead.phone || '').replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name || '')},%20this%20is%20AMP%20Ventures%20regarding%20your%20website%20inquiry.`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-[11px] inline-flex items-center gap-1 hover:bg-emerald-900 transition-colors"
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg overflow-x-auto">
            {filteredChecks.length === 0 ? (
              <div className="p-12 text-center text-slate-400 text-xs">
                No readiness audit records logged yet.
              </div>
            ) : (
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-800 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Business / Location</th>
                    <th className="py-4 px-6">Industry</th>
                    <th className="py-4 px-6">Maturity Score</th>
                    <th className="py-4 px-6">Contact Info</th>
                    <th className="py-4 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredChecks.map((check) => (
                    <tr key={check.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-6 font-mono text-emerald-400 font-bold">#{check.id}</td>
                      <td className="py-3.5 px-6">
                        <strong className="text-white block text-sm">{check.business_name}</strong>
                        <span className="text-slate-400 text-[11px]">{check.city}</span>
                      </td>
                      <td className="py-3.5 px-6">
                        <span className="text-slate-300">{check.industry}</span>
                      </td>
                      <td className="py-3.5 px-6">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-800 border border-slate-700">
                          <span className={`font-mono ${check.score > 60 ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {check.score}/100
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-6 text-slate-300">
                        <div>{check.phone || 'N/A'}</div>
                        <div className="text-[10px] text-slate-500">{check.email || ''}</div>
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        {check.phone ? (
                          <a 
                            href={`https://wa.me/${(check.phone || '').replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(check.business_name || '')},%20we%20reviewed%20your%20Digital%20Readiness%20Audit%20score%20(${check.score}/100)%20at%20AMP%20Ventures.`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-[11px] inline-flex items-center gap-1 hover:bg-emerald-900 transition-colors"
                          >
                            <span>WhatsApp</span>
                          </a>
                        ) : (
                          <span className="text-slate-500 text-[11px]">No Phone</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

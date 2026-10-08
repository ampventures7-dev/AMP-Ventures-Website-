import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, CheckCircle2, Sparkles, ArrowUpRight, 
  MapPin, ShieldCheck, Award, Search, MessageSquare, 
  Layers, Zap, Check, ChevronRight, Filter
} from 'lucide-react';
import { DELIVERED_PROJECTS, PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { getWhatsAppUrl } from '../apiConfig';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryCount = (catId) => {
    if (catId === 'all') return DELIVERED_PROJECTS.length;
    return DELIVERED_PROJECTS.filter((p) => p.category === catId).length;
  };

  const filteredProjects = DELIVERED_PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client_location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech_stack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="portfolio-page pt-28 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      
      {/* 1. Page Header & Agency Track Record */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-300 mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Delivered Production Deployments</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Real Projects. Real Impact. <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
              Built For Offline Businesses Transitioning Online
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Every website and web portal here was engineered by AMP VENTURES for speed, automated bookings, and local dominance. Inspect the live deployments below.
          </p>

          {/* 4 Stat Proof Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-4xl mx-auto text-center">
            <div className="p-2 sm:p-3">
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">7+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Live Client Systems</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-slate-100 sm:border-l">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">&lt; 0.5s</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Average Load Speed</div>
            </div>
            <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-slate-100">
              <div className="text-xl sm:text-2xl font-black text-sky-600 font-mono">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Custom Code Ownership</div>
            </div>
            <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-slate-100">
              <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono">0 ₹</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Monthly Platform Rent</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Industry Filter Bar */}
      <section className="container mx-auto px-4 max-w-6xl mb-10">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-200/90 shadow-sm space-y-3.5">
          
          {/* Header Row: Label & Search Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <span>Filter Projects by Industry</span>
              <span className="text-[11px] font-normal text-slate-400 lowercase">({DELIVERED_PROJECTS.length} verified live systems)</span>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, client, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 rounded-xl text-xs font-medium border-2 border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/70 hover:bg-white transition-all"
              />
            </div>
          </div>

          {/* Filter Pills: Cleanly wrapped so all 7 categories are 100% visible */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  aria-pressed={isActive}
                  className={`group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 border-2 border-emerald-500 scale-[1.03] ring-2 ring-emerald-400/40'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/80 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-2xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Projects Showcase Grid */}
      <section className="container mx-auto px-4 max-w-6xl mb-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No projects matched your search criteria.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-emerald-600 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
              >
                {/* Header Strip with Badges */}
                <div className="relative p-5 pb-4 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${project.badge_bg}`}>
                      {project.industry}
                    </span>
                    
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Vercel Edge
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {project.title}
                  </h2>
                  
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="truncate">{project.client_location}</span>
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics Highlight Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono">
                        {project.metrics.primary}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        {project.metrics.label}
                      </div>
                    </div>
                    <div className="border-x border-slate-200">
                      <div className="text-xs sm:text-sm font-extrabold text-emerald-600 font-mono">
                        {project.metrics.speed}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        Speed
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-amber-600 font-mono truncate">
                        {project.metrics.reviews}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        Trust
                      </div>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Engineering Deliverables:
                    </div>
                    <ul className="space-y-1.5 p-0 m-0 list-none">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tech_stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer Actions */}
                <div className="p-4 pt-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[130px]">
                    {project.live_url.replace('https://', '')}
                  </span>

                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-emerald-600 transition-colors shadow-xs group-hover:scale-[1.02]"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. High-Converting Bottom Conversion Banner */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          
          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-sky-500/20 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 mb-4 inline-block">
              Start Your Digital Transformation
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-4 leading-tight">
              Ready to see your business live like these projects?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              We engineer custom web apps and local Google SEO systems delivered in 5–7 days with zero recurring platform subscriptions.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Hi AMP Ventures, I checked your delivered portfolio and want to discuss building a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2 transition hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <Link
                to="/readiness-score"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-sm text-slate-200 border border-slate-700 inline-flex items-center gap-2 transition"
              >
                <span>Free 60-Sec Audit Score</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

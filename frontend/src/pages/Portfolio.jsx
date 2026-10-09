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
    <div className="portfolio-page pt-28 pb-20 bg-[#FDFBF7] text-stone-900 min-h-screen">
      
      {/* 1. Page Header & Agency Track Record */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#983B23] bg-[#FBEBE6] border border-[#F7D6CC] mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#C85A3C]" />
            <span>Delivered Production Deployments</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-900 tracking-tight leading-tight mb-5">
            Real Projects. Real Impact. <br />
            <span className="text-[#C85A3C]">
              Built For Offline Businesses Transitioning Online
            </span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            Every website and web portal here was engineered by AMP VENTURES for speed, automated bookings, and local dominance. Inspect the live deployments below.
          </p>

          {/* 4 Stat Proof Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#FAF7F0] border border-[#EAE4D8] shadow-xs max-w-4xl mx-auto text-center">
            <div className="p-2 sm:p-3">
              <div className="text-xl sm:text-2xl font-black text-stone-900 font-mono">7+</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Live Client Systems</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-[#EAE4D8] sm:border-l">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">&lt; 0.5s</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Average Load Speed</div>
            </div>
            <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-[#EAE4D8]">
              <div className="text-xl sm:text-2xl font-black text-[#C85A3C] font-mono">100%</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Custom Code Ownership</div>
            </div>
            <div className="p-2 sm:p-3 border-t sm:border-t-0 sm:border-l border-[#EAE4D8]">
              <div className="text-xl sm:text-2xl font-black text-amber-700 font-mono">0 ₹</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Monthly Platform Rent</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Industry Filter Bar */}
      <section className="container mx-auto px-4 max-w-6xl mb-10">
        <div className="bg-[#FAF7F0] p-4 sm:p-5 rounded-2xl border border-[#EAE4D8] shadow-xs space-y-3.5">
          
          {/* Header Row: Label & Search Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-[#FBEBE6] text-[#983B23] border border-[#F7D6CC]">
                <Filter className="w-3.5 h-3.5" />
              </span>
              <span>Filter Projects by Industry</span>
              <span className="text-[11px] font-normal text-stone-400 lowercase">({DELIVERED_PROJECTS.length} verified live systems)</span>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, client, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 rounded-xl text-xs font-medium border border-[#EAE4D8] focus:outline-none focus:border-[#C85A3C] bg-white text-stone-900 placeholder:text-stone-400 transition-all"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EAE4D8]">
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
                      ? 'bg-[#C85A3C] text-white shadow-sm border border-[#B44C30] scale-[1.03]'
                      : 'bg-white text-stone-700 border border-[#EAE4D8] hover:border-[#C85A3C] hover:text-[#C85A3C] hover:bg-[#FAF7F0] shadow-2xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-stone-100 text-stone-500 group-hover:bg-[#FBEBE6] group-hover:text-[#983B23]'
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
          <div className="text-center py-16 bg-[#FAF7F0] rounded-2xl border border-[#EAE4D8]">
            <p className="text-stone-500 text-sm">No projects matched your search criteria.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#C85A3C] text-white hover:bg-[#B44C30] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project, pIdx) => {
              const categoryGradients = {
                hospitality: 'bg-gradient-to-b from-amber-50/90 via-[#FFFBEB] to-white border-amber-200/90 hover:border-amber-400',
                wellness: 'bg-gradient-to-b from-rose-50/90 via-[#FFF1F2] to-white border-rose-200/90 hover:border-rose-400',
                healthcare: 'bg-gradient-to-b from-emerald-50/90 via-[#F0FDF4] to-white border-emerald-200/90 hover:border-emerald-400',
                retail: 'bg-gradient-to-b from-sky-50/90 via-[#F0F9FF] to-white border-sky-200/90 hover:border-sky-400',
                fitness: 'bg-gradient-to-b from-purple-50/90 via-[#FAF5FF] to-white border-purple-200/90 hover:border-purple-400'
              };
              const cardBg = categoryGradients[project.category] || 'bg-gradient-to-b from-stone-100/70 via-stone-50/40 to-white border-stone-200/90 hover:border-[#C85A3C]/60';

              return (
                <div
                  key={project.id}
                  className={`group relative flex flex-col justify-between rounded-2xl ${cardBg} border shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  {/* Header Strip with Badges */}
                  <div className="relative p-5 pb-4 bg-white/70 border-b border-stone-200/60">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${project.badge_bg}`}>
                      {project.industry}
                    </span>
                    
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Vercel Edge
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-stone-900 group-hover:text-[#C85A3C] transition-colors leading-snug">
                    {project.title}
                  </h2>
                  
                  <p className="text-xs text-stone-500 flex items-center gap-1 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                    <span className="truncate">{project.client_location}</span>
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Scope & Highlights (Points) */}
                  <ul className="space-y-2 p-0 m-0 list-none">
                    {(project.points || project.deliverables.slice(0, 3)).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Metrics Highlight Box */}
                  <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#EAE4D8] grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-stone-900 font-mono">
                        {project.metrics.primary}
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium truncate mt-0.5">
                        {project.metrics.label}
                      </div>
                    </div>
                    <div className="border-x border-[#EAE4D8]">
                      <div className="text-xs sm:text-sm font-extrabold text-emerald-600 font-mono">
                        {project.metrics.speed}
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium truncate mt-0.5">
                        Speed
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#C85A3C] font-mono truncate">
                        {project.metrics.reviews}
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium truncate mt-0.5">
                        Trust
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tech_stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-stone-600 border border-[#EAE4D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer Actions */}
                <div className="p-4 pt-3 bg-[#FAF7F0]/60 border-t border-[#EAE4D8] flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-stone-400 truncate max-w-[130px]">
                    {project.live_url.replace('https://', '')}
                  </span>

                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#C85A3C] hover:bg-[#B44C30] transition-colors shadow-2xs group-hover:scale-[1.02]"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
          </div>
        )}
      </section>

      {/* 4. High-Converting Bottom Conversion Banner */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#18231E] text-white relative overflow-hidden shadow-2xl border border-[#26352D]">
          
          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#C85A3C]/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E67E62] bg-[#22312A] border border-[#34483E] mb-4 inline-block">
              Start Your Digital Transformation
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-4 leading-tight">
              Ready to see your business live like these projects?
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              We engineer custom web apps and local Google SEO systems delivered in 5–7 days with zero recurring platform subscriptions.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Hi AMP Ventures, I checked your delivered portfolio and want to discuss building a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-md inline-flex items-center gap-2 transition hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <Link
                to="/readiness-score"
                className="px-6 py-3 rounded-xl bg-[#C85A3C] hover:bg-[#B44C30] font-bold text-sm text-white inline-flex items-center gap-2 transition"
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, CheckCircle2, Sparkles, ArrowUpRight, 
  Layers, MapPin, Gauge, ShieldCheck, Award, Eye, Filter
} from 'lucide-react';
import { DELIVERED_PROJECTS, PORTFOLIO_CATEGORIES } from '../data/portfolioData';

export default function PortfolioSection({ isStandalonePage = false }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryCount = (catId) => {
    if (catId === 'all') return DELIVERED_PROJECTS.length;
    return DELIVERED_PROJECTS.filter((p) => p.category === catId).length;
  };

  const filteredProjects = activeCategory === 'all'
    ? DELIVERED_PROJECTS
    : DELIVERED_PROJECTS.filter((p) => p.category === activeCategory);

  // If on homepage, display top 6 or all; let's show all or filtered
  const displayedProjects = isStandalonePage ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className={`py-16 sm:py-24 ${isStandalonePage ? 'bg-slate-50' : 'bg-white border-t border-slate-200/80'} relative overflow-hidden`}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 border border-emerald-300 mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Delivered In Production • Live Client Proof</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Proven Websites & Systems <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
              Engineered & Delivered
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real offline businesses transformed into high-converting digital powerhouses. Explore our live client deployments hosted on enterprise edge infrastructure.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex-shrink-0">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            <span>Filter:</span>
          </div>
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                aria-pressed={isActive}
                className={`group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex-shrink-0 cursor-pointer select-none ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >
              {/* Header Gradient Strip with Badges */}
              <div className="relative p-5 pb-4 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${project.badge_bg}`}>
                    {project.industry}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live & Verified
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{project.client_location}</span>
                </p>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {/* Scope & Highlights (Points) */}
                <ul className="space-y-2 p-0 m-0 list-none">
                  {(project.points || project.deliverables.slice(0, 3)).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

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
                      Load Time
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-amber-600 font-mono truncate">
                      {project.metrics.reviews}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                      Trust Metric
                    </div>
                  </div>
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-emerald-600 transition-colors shadow-xs group-hover:scale-[1.02]"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout / Navigation */}
        {!isStandalonePage && (
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-emerald-600 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Explore All Delivered Case Studies ({DELIVERED_PROJECTS.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

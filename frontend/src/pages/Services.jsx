import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Check, ArrowUpRight, Clock
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'tier-1',
    tierNumber: 'Tier 1',
    name: 'Basic Static Website',
    tagline: 'Clean, lightning-fast web presence to build immediate local credibility.',
    startingPrice: '₹14,999',
    timeline: '5–7 Business Days',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    idealFor: 'Local retail shops, solo salons, small cafes, single-doctor clinics wanting a professional online presence.',
    highlights: [
      '4–6 Custom Designed Responsive Pages (Home, About, Services, Gallery, Contact)',
      'Google Business Profile integration & Google Map embedding',
      'Contact inquiry form wired with instant email delivery alerts',
      'Lightweight, ultra-fast performance with 95+ Google Lighthouse speed score',
      'Free SSL Security Certificate & DNS / domain setup assistance',
      'Basic On-Page SEO (Meta tags, OpenGraph previews, sitemap.xml)'
    ],
    techStack: 'HTML5, Modern CSS, React Vite, Fast CDN',
    ctaLink: '/contact?tier=tier1'
  },
  {
    id: 'tier-2',
    tierNumber: 'Tier 2',
    name: 'Premium + Custom CMS',
    tagline: 'Dynamic platform allowing you to edit menus, prices, and gallery photos with zero code.',
    startingPrice: '₹24,999',
    timeline: '10–12 Business Days',
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
    isPopular: true,
    idealFor: 'Growing restaurants with seasonal menus, busy salons with stylist rosters, wellness clinics, and specialty retail.',
    highlights: [
      'Everything included in Tier 1',
      'Lightweight Client CMS: Update your menu items, price lists, and portfolio images independently',
      'Live Google Reviews Embed Widget to display 5-star customer ratings automatically',
      'Google Analytics 4 & Search Console setup for weekly traffic visibility',
      'Direct WhatsApp Slot Booking & click-to-chat CTA buttons',
      'Optional Monthly Maintenance Retainer for ongoing updates, backups & technical security'
    ],
    techStack: 'FastAPI Backend, React SPA, SQLite/PostgreSQL CMS, Google Analytics API',
    ctaLink: '/contact?tier=tier2'
  },
  {
    id: 'tier-3',
    tierNumber: 'Tier 3',
    name: 'Premium Plus (3D & Automation)',
    tagline: 'Futuristic digital experience with interactive 3D elements, AI chatbot, and WhatsApp Business API.',
    startingPrice: '₹49,999',
    timeline: '14–18 Business Days',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    isPlus: true,
    idealFor: 'High-end fine dining, luxury aesthetics clinics, multi-location brands, and premium experience venues.',
    highlights: [
      'Everything included in Tier 2',
      'Immersive 3D WebGL / Spline interactive hero sections (e.g. 3D rotating dish, 3D salon station, or interactive product)',
      'WhatsApp Business API integration for automated appointment confirmations & reminder broadcasts',
      '24/7 AI Chatbot Assistant capable of answering visitor FAQs and capturing qualified leads automatically',
      'Centralized Lead Admin Dashboard (view chatbot + WhatsApp + form leads in a single unified view)',
      'Custom micro-animations (Framer Motion / Smooth Scroll) & VIP Priority Support SLA'
    ],
    techStack: 'FastAPI, Three.js / WebGL, AI Agent Framework, WhatsApp Cloud API, Admin UI',
    ctaLink: '/contact?tier=tier3'
  }
];

const MATRIX_FEATURES = [
  { name: 'Number of Pages', t1: '4–6 Pages', t2: 'Up to 12 Pages', t3: 'Custom / Scalable' },
  { name: 'Mobile First & Responsive', t1: 'Yes', t2: 'Yes', t3: 'Yes (Ultra-responsive)' },
  { name: 'Google Business Profile Sync', t1: 'Yes', t2: 'Yes', t3: 'Yes + Priority Map SEO' },
  { name: 'Contact Form to Email', t1: 'Yes', t2: 'Yes', t3: 'Yes + SMS / WhatsApp alerts' },
  { name: 'Client CMS Dashboard', t1: '—', t2: 'Lightweight CMS', t3: 'Full Custom CMS Portal' },
  { name: 'Live Google Reviews Widget', t1: '—', t2: 'Included', t3: 'Included + Filtered' },
  { name: 'Google Analytics & Insights', t1: '—', t2: 'Included', t3: 'Advanced Funnels' },
  { name: 'WhatsApp Click-to-Chat', t1: 'Basic wa.me link', t2: 'Dynamic pre-fills', t3: 'WhatsApp Cloud API' },
  { name: '3D Interactive / WebGL Hero', t1: '—', t2: '—', t3: 'Custom 3D Model' },
  { name: 'AI Conversational Chatbot', t1: '—', t2: '—', t3: '24/7 AI Assistant' },
  { name: 'Lead Management Portal', t1: '—', t2: '—', t3: 'Included' },
  { name: 'Support SLA & Retainer', t1: '30 Days Warranty', t2: 'Priority Email + Retainer', t3: 'VIP 24h SLA + Dedicated Manager' },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="services-page pt-28 pb-20 bg-white text-slate-900">
      {/* Header */}
      <section className="py-8 sm:py-12 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-4 sm:mb-6 shadow-xs">
            <span>Simple Pricing. Real Results</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Pick a Package. Get Online. <br />
            <span className="text-sky-600">
              Start Getting Customers.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every tier includes clean, fast, mobile-ready pages — the difference is how much you want built in.
          </p>
        </div>
      </section>

      {/* 3 Detailed Service Cards */}
      <section className="py-6 sm:py-10">
        <div className="container mx-auto px-4 max-w-6xl space-y-8 sm:space-y-12">
          {SERVICES_DATA.map((srv) => (
            <div 
              id={srv.id} 
              key={srv.id} 
              className={`p-6 sm:p-8 lg:p-12 rounded-3xl bg-white border ${
                srv.isPopular 
                  ? 'border-2 border-sky-500 shadow-lg' 
                  : srv.isPlus 
                  ? 'border-2 border-indigo-400 shadow-lg' 
                  : 'border border-slate-200 shadow-sm'
              } transition-all`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${srv.badgeClass}`}>
                      {srv.tierNumber}
                    </span>
                    {srv.isPopular && <span className="text-xs font-bold text-sky-600">⭐ Most Popular</span>}
                    {srv.isPlus && <span className="text-xs font-bold text-indigo-600">🚀 Next-Gen Tech</span>}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">{srv.name}</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{srv.tagline}</p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-[11px] font-medium text-slate-500">Investment starting at</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">{srv.startingPrice}</div>
                    <div className="text-[11px] text-slate-600 flex items-center gap-1.5 pt-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{srv.timeline}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Ideal For:</strong>
                    {srv.idealFor}
                  </div>

                  <Link 
                    to={srv.ctaLink} 
                    className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center shadow-sm flex items-center justify-center gap-2 transition-all ${
                      srv.isPopular 
                        ? 'bg-sky-500 hover:bg-sky-600 text-white' 
                        : srv.isPlus 
                        ? 'bg-slate-900 hover:bg-slate-800 text-white' 
                        : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <span>Request {srv.tierNumber} Setup</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    Included Architecture Deliverables:
                  </h3>
                  
                  <ul className="space-y-2.5 sm:space-y-3">
                    {srv.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${srv.isPopular ? 'text-sky-600' : srv.isPlus ? 'text-indigo-600' : 'text-slate-500'}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span><strong>Stack:</strong> {srv.techStack}</span>
                    <span className="text-emerald-700 font-semibold font-mono">100% Owned</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Matrix Comparison Table */}
      <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mb-2 sm:mb-3">Feature Comparison Matrix</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Detailed side-by-side breakdown of all deliverables across our 3 tiers.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm no-scrollbar">
            <table className="table w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 text-left">Platform Capabilities</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center text-slate-600">Tier 1 (Basic)</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center text-sky-700 font-bold">Tier 2 (CMS)</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center text-indigo-700 font-bold">Tier 3 (3D & AI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MATRIX_FEATURES.map((feat, fIdx) => (
                  <tr key={fIdx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">{feat.name}</td>
                    <td className="py-3 px-4 sm:px-6 text-center text-slate-600">{feat.t1}</td>
                    <td className="py-3 px-4 sm:px-6 text-center text-sky-700 font-medium">{feat.t2}</td>
                    <td className="py-3 px-4 sm:px-6 text-center text-indigo-700 font-semibold">{feat.t3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}

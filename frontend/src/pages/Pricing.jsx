import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, ArrowUpRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import FaqSection from '../components/FaqSection.jsx';

const PRICING_TIERS = [
  {
    id: 'tier1',
    name: 'Tier 1 — Basic',
    badge: 'Rapid Launch',
    price: '₹14,999',
    timeline: '5–7 Days Delivery',
    description: 'Perfect for local shops, cafes & clinics needing a fast, professional online storefront.',
    features: [
      '4–6 Custom Responsive Pages',
      'Mobile-First Layout & Speed Tuning',
      'Google Maps & Business Profile Link',
      'Contact Form → Instant Email Alerts',
      'Free SSL Certificate & Hosting Setup',
      '1 Round of Design Revisions',
      '30-Day Post Launch Support'
    ],
    ctaText: 'Get Tier 1 Proposal',
    ctaLink: '/contact?tier=tier1',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    btnClass: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300'
  },
  {
    id: 'tier2',
    name: 'Tier 2 — Premium',
    badge: 'Most Popular for Local Growth',
    isPopular: true,
    price: '₹24,999',
    timeline: '10–12 Days Delivery',
    description: 'Empowers business owners with a custom CMS to edit items, prices, and photos with zero code.',
    features: [
      'Everything in Tier 1',
      'Lightweight Custom CMS Dashboard',
      'Self-serve Menu & Price Editor',
      'Live Google Reviews Embed Widget',
      'Google Analytics 4 & Traffic Dashboard',
      'Direct WhatsApp Booking CTAs',
      'Optional Maintenance Retainer',
      '60-Day Priority Support'
    ],
    ctaText: 'Start Tier 2 Build',
    ctaLink: '/contact?tier=tier2',
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
    btnClass: 'bg-sky-500 hover:bg-sky-600 text-white shadow-sm'
  },
  {
    id: 'tier3',
    name: 'Tier 3 — Premium Plus',
    badge: '3D WebGL & AI Automation',
    isPlus: true,
    price: '₹49,999',
    timeline: '14–18 Days Delivery',
    description: 'Immersive 3D interactive hero, WhatsApp Business API automation, and 24/7 AI chatbot.',
    features: [
      'Everything in Tier 2',
      '3D Interactive WebGL / Spline Hero Model',
      'WhatsApp Business API Automation',
      '24/7 AI Conversational Lead Bot',
      'Centralized Lead Management Dashboard',
      'High-Performance CDN & Custom Animations',
      'Dedicated Tech Lead & Priority SLA'
    ],
    ctaText: 'Book Tier 3 Consultation',
    ctaLink: '/contact?tier=tier3',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    btnClass: 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
  }
];

export default function Pricing() {
  const [expandedTiers, setExpandedTiers] = useState({});

  const toggleTier = (id) => {
    setExpandedTiers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="pricing-page pt-28 pb-20 bg-white text-slate-900">
      {/* Header */}
      <section className="py-8 sm:py-12 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-4 sm:mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Simple, Transparent Pricing For <br />
            <span className="text-sky-600">
              Measurable Business ROI
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every package is engineered to pay for itself through increased local search visibility, higher customer conversion, and direct WhatsApp bookings.
          </p>
        </div>
      </section>

      {/* Mobile Swipe Hint */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-500 font-semibold mb-4">
          <span>← Swipe to compare packages →</span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <section className="py-6 sm:py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mobile-snap-carousel lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch no-scrollbar">
            {PRICING_TIERS.map((tier) => {
              const isExpanded = !!expandedTiers[tier.id];
              const visibleFeatures = tier.features;

              return (
                <div 
                  key={tier.id} 
                  className={`mobile-snap-card p-6 sm:p-8 rounded-3xl bg-white border ${
                    tier.isPopular 
                      ? 'border-2 border-sky-500 shadow-xl lg:-translate-y-2' 
                      : tier.isPlus 
                      ? 'border-2 border-indigo-400 shadow-xl' 
                      : 'border border-slate-200 shadow-sm'
                  } flex flex-col justify-between transition-all`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${tier.badgeClass}`}>
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 mb-1.5">{tier.name}</h3>
                    <p className="text-xs text-slate-600 mb-4 sm:mb-6 leading-relaxed">{tier.description}</p>

                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-5">
                      <div className="text-[11px] font-medium text-slate-500">Fixed Project Fee</div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono my-0.5 sm:my-1">{tier.price}</div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-1.5 pt-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{tier.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900">Deliverables Included:</div>
                      
                      {/* Features List - Collapsible on Mobile */}
                      <ul className="space-y-2">
                        {visibleFeatures.map((feat, fIdx) => {
                          const isHiddenOnMobile = fIdx >= 3 && !isExpanded;
                          return (
                            <li 
                              key={fIdx} 
                              className={`items-start gap-2 text-xs text-slate-700 ${isHiddenOnMobile ? 'hidden sm:flex' : 'flex'}`}
                            >
                              <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${tier.isPopular ? 'text-sky-600' : tier.isPlus ? 'text-indigo-600' : 'text-slate-500'}`} />
                              <span>{feat}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Mobile Accordion Toggle Button */}
                      {tier.features.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleTier(tier.id)}
                          className="sm:hidden text-[11px] font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-1"
                        >
                          <span>{isExpanded ? 'Show less features' : `+ ${tier.features.length - 3} more deliverables`}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                  </div>

                  <Link 
                    to={tier.ctaLink} 
                    className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 transition-all ${tier.btnClass}`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FaqSection />
        </div>
      </section>

    </div>
  );
}

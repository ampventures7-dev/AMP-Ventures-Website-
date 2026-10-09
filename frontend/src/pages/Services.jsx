import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Check, ArrowUpRight, Clock, Globe, Code2, MessageSquare, 
  Megaphone, Target, Share2, Palette, Wrench, Sparkles, 
  ShieldCheck, Layers, Smartphone, Bot, Cpu, Zap, Phone, 
  Mail, ArrowRight, CheckCircle2, ChevronRight, TrendingUp
} from 'lucide-react';
import { getWhatsAppUrl } from '../apiConfig';

// 1. Comprehensive Agency Capabilities (from Official Agency Portfolio Brochure)
const AGENCY_CAPABILITIES = [
  {
    id: 'web-dev',
    title: 'Website Development',
    tag: 'Core Platform',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Globe,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    description: 'Fast, conversion-focused websites that turn local visitors into paying customers.',
    deliverables: [
      'Business Websites & Landing Pages',
      'Instant WhatsApp Booking & Inquiries',
      'E-Commerce & Online Service Catalogs',
      'Ultra-Fast CDN Hosting with Free SSL'
    ]
  },
  {
    id: 'saas-software',
    title: 'SaaS & Software Development',
    tag: 'Custom Engineering',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: Code2,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    description: 'Custom software and web apps built to automate workflows and scale operations.',
    deliverables: [
      'Custom Web Apps & Micro-SaaS Platforms',
      'Admin Dashboards & Live Business Analytics',
      'Automated Booking & Appointment Engines',
      'Secure Client Portals & Role-Based Access'
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Chatbots',
    tag: 'Next-Gen Smart',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Bot,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    description: '24/7 autonomous AI assistants that answer questions and capture hot leads.',
    deliverables: [
      '24/7 Context-Aware Smart AI Chatbots',
      'Automated Inbound Lead Qualification',
      'Instant WhatsApp & CRM Sync',
      'Custom OpenAI & LLM Integrations'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Instagram & FB)',
    tag: 'High-ROI Growth',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: Megaphone,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    description: 'Laser-targeted social campaigns engineered to flood your calendar with buyer inquiries.',
    deliverables: [
      'Hyper-Local Instagram & Facebook Campaigns',
      'Direct WhatsApp & Call Ad Funnels',
      'High-Converting Ad Creatives & Copy',
      'A/B Testing & Weekly ROI Reports'
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Local Search',
    tag: 'Buyer Intent',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: Target,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    description: 'Reach buyers at the exact second they search Google for your services.',
    deliverables: [
      'High-Intent Google Search Ads',
      'Google Maps & Click-to-Call Extensions',
      'Negative Keyword Filtering to Stop Ad Waste',
      'Conversion Tracking & Smart Bidding'
    ]
  },
  {
    id: 'advanced-seo',
    title: 'Advanced SEO & Local Dominance',
    tag: 'Rank #1 on Google',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: TrendingUp,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    description: 'Data-driven SEO to rank your business at the top of Google Search and Maps.',
    deliverables: [
      'Google Maps 3-Pack Local Dominance',
      'Sub-0.5s Speed & Core Web Vitals Optimization',
      'AI Search Readiness (ChatGPT & Gemini)',
      'Schema Markup for Rich Search Snippets'
    ]
  },
  {
    id: 'social-media-handling',
    title: 'Social Media Management',
    tag: 'Brand Authority',
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon: Share2,
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    description: 'Professional social handling that builds authority, organic reach, and customer trust.',
    deliverables: [
      'High-Impact Reels, Carousels & Graphics',
      'Conversion-Focused Copy & Captions',
      'Hashtag & Local Audience Targeting',
      'Active DM Lead Capture & Routing'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    tag: 'Visual Polish',
    badgeClass: 'bg-teal-50 text-teal-700 border-teal-200',
    icon: Palette,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    description: 'Clean, intuitive designs in Figma crafted for effortless user engagement.',
    deliverables: [
      'Figma Wireframes & Interactive Prototypes',
      'Mobile-First Responsive Layouts',
      'Brand Identity Systems & Style Guides',
      'Conversion Rate Optimization (CRO)'
    ]
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    tag: 'Zero Downtime',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    icon: Wrench,
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-100',
    description: 'Reliable technical support so your systems stay secure, updated, and fast 24/7.',
    deliverables: [
      '24/7 Security Patches & Bug Fixes',
      'Regular Content, Menu & Price Updates',
      'Daily Cloud Backups & SSL Renewals',
      'Priority Developer On-Call SLA'
    ]
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    tag: 'Zero Friction',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: MessageSquare,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    description: 'Automate bookings, confirmations, alerts, and reminders directly on WhatsApp.',
    deliverables: [
      'Official WhatsApp Business API Setup',
      '1-Click WhatsApp Booking Triggers',
      'Automated Order & Slot Confirmations',
      'Payment Reminders & Inbound Questionnaires'
    ]
  }
];

// 2. 6-Step Development Process (from Brochure: "From Idea to Launch")
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    desc: 'We understand your business model, target audience, competitive landscape, and exact requirements.'
  },
  {
    step: '02',
    title: 'PLAN',
    desc: 'We define the feature set, site architecture, tech stack, and clear milestone deliverables.'
  },
  {
    step: '03',
    title: 'DESIGN',
    desc: 'We create a clean, modern, and brand-aligned interface with interactive Figma prototypes.'
  },
  {
    step: '04',
    title: 'DEVELOP',
    desc: 'Our engineers transform the design into clean, high-performance, and scalable production code.'
  },
  {
    step: '05',
    title: 'TEST',
    desc: 'We rigorously test cross-browser responsiveness, loading speed, mobile UX, and form automations.'
  },
  {
    step: '06',
    title: 'LAUNCH',
    desc: 'Your website or application goes live on global edge CDN with domain SSL and analytics wired.'
  }
];

// 3. Why Choose Us (Point-Format & Concise)
const WHY_CHOOSE_US = [
  {
    title: 'Custom Engineering (Zero Templates)',
    points: [
      'Tailored around your exact operational workflow',
      'Zero bloated WordPress themes or slow drag-and-drop builders'
    ]
  },
  {
    title: 'Modern High-Speed Stack',
    points: [
      'Built with React, Next.js & FastAPI stacks',
      'Loads in <0.4s on global CDN edge networks'
    ]
  },
  {
    title: 'Design + Development Under One Roof',
    points: [
      'Wireframing, UI/UX, coding & cloud deployment',
      'No third-party freelancer delays or handoff gaps'
    ]
  },
  {
    title: '100% Transparent Process',
    points: [
      'Predictable 5–7 day milestone delivery',
      'Fixed project pricing with zero surprise charges'
    ]
  },
  {
    title: 'Growth-Ready Architecture',
    points: [
      'Plug-and-play WhatsApp AI, CRM & payment gateways',
      'Scales effortlessly as your customer volume grows'
    ]
  }
];

// 4. 3-Tier Turnkey Website Packages
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
      'Lightweight Client CMS: Update menu items, price lists, and portfolio images independently',
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
    idealFor: 'High-end fine dining, luxury aesthetics clinics, multi-location brands, and scalable SaaS platforms.',
    highlights: [
      'Everything included in Tier 2',
      'Immersive 3D WebGL / Spline interactive hero sections (e.g. 3D rotating dish, 3D product showcase)',
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
    <div className="services-page pt-28 pb-20 bg-[#FDFBF7] text-stone-900">
      
      {/* 1. Page Hero Header */}
      <section className="py-10 sm:py-16 text-center bg-gradient-to-b from-[#FAF7F0] to-[#FDFBF7] border-b border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBEBE6] border border-[#F7D6CC] text-xs font-bold uppercase tracking-wider text-[#983B23] mb-4 sm:mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A3C]" />
            <span>Build. Innovate. Grow. • Full-Stack Agency Capabilities</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-stone-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Your Vision. <br className="sm:hidden" />
            <span className="text-[#C85A3C]">
              Our Code.
            </span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
            Fast websites, smart automations, and marketing built to bring you real customers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#capabilities"
              className="px-6 py-3 rounded-xl bg-[#C85A3C] hover:bg-[#B44C30] text-white font-bold text-xs sm:text-sm shadow-md transition hover:scale-[1.02]"
            >
              Explore All Capabilities
            </a>
            <a
              href="#tiers"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#FAF7F0] text-stone-800 border border-[#EAE4D8] font-bold text-xs sm:text-sm transition"
            >
              Website Packages
            </a>
            <a
              href={getWhatsAppUrl("Hi AMP Ventures, I want to discuss services for my business (SaaS / Ads / Web / Automation).")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm inline-flex items-center gap-2 transition hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities Grid: "What We Provide" */}
      <section id="capabilities" className="py-16 sm:py-20 bg-[#FAF7F0] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#983B23] bg-[#FBEBE6] border border-[#F7D6CC] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#C85A3C]" />
              <span>Full Service Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 mb-3">
              What We Provide
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Everything you need to build, grow, and scale your offline business into an automated online powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {AGENCY_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              const capGradients = [
                'bg-gradient-to-b from-sky-100/70 via-[#F0F9FF] to-white border border-sky-300/80 hover:border-sky-400',
                'bg-gradient-to-b from-purple-100/70 via-[#FAF5FF] to-white border border-purple-300/80 hover:border-purple-400',
                'bg-gradient-to-b from-rose-100/70 via-[#FFF1F2] to-white border border-rose-300/80 hover:border-rose-400',
                'bg-gradient-to-b from-amber-100/70 via-[#FFFBEB] to-white border border-amber-300/80 hover:border-amber-400',
                'bg-gradient-to-b from-emerald-100/70 via-[#F0FDF4] to-white border border-emerald-300/80 hover:border-emerald-400',
                'bg-gradient-to-b from-cyan-100/70 via-[#ECFEFF] to-white border border-cyan-300/80 hover:border-cyan-400',
                'bg-gradient-to-b from-teal-100/70 via-[#F0FDFA] to-white border border-teal-300/80 hover:border-teal-400',
                'bg-gradient-to-b from-orange-100/70 via-[#FFF7ED] to-white border border-orange-300/80 hover:border-orange-400',
                'bg-gradient-to-b from-stone-100/80 via-stone-50/60 to-white border border-stone-300/80 hover:border-stone-400',
                'bg-gradient-to-b from-emerald-100/70 via-[#F0FDF4] to-white border border-emerald-300/80 hover:border-emerald-400'
              ];
              const cardBg = capGradients[idx % capGradients.length];

              return (
                <div
                  key={cap.id}
                  className={`p-6 sm:p-7 rounded-2xl ${cardBg} shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`}
                >
                  <div>
                    {/* Icon + Tag Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${cap.iconBg} border border-white/60 flex items-center justify-center shadow-2xs`}>
                        <IconComp className={`w-6 h-6 ${cap.iconColor}`} />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${cap.badgeClass}`}>
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {cap.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                      {cap.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-stone-200/70">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        Included Deliverables:
                      </div>
                      <ul className="space-y-1.5 p-0 m-0 list-none">
                        {cap.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hi AMP Ventures, I would like to inquire about your ${cap.title} service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-[#C85A3C] hover:text-white text-stone-800 text-xs font-bold text-center border border-stone-200/90 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Inquire About {cap.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 6-Step Development Process: "From Idea to Launch" */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7] border-y border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#983B23] bg-[#FBEBE6] border border-[#F7D6CC] mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#C85A3C]" />
              <span>Structured Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 mb-3">
              From Idea to Launch
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              A simple, transparent, and collaborative process engineered for zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((proc, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 rounded-2xl bg-white border border-[#EAE4D8] shadow-xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-[#C85A3C]/40">
                    {proc.step}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600">
                    Phase {proc.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#EAE4D8] shadow-xs text-xs font-bold text-stone-700">
              <span className="text-[#C85A3C]">Build</span>
              <span>→</span>
              <span className="text-[#2C4438]">Launch</span>
              <span>→</span>
              <span className="text-emerald-600">Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us: 5 Pillars */}
      <section className="py-16 sm:py-20 bg-[#FAF7F0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#983B23] bg-[#FBEBE6] border border-[#F7D6CC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C85A3C]" />
                <span>Why AMP Ventures?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 leading-tight">
                Why Choose Us?
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed">
                Engineered for maximum ROI and long-term business performance — never bloated software rent.
              </p>

              {/* The AMP Advantage Card */}
              <div className="p-5 rounded-2xl bg-[#18231E] text-white space-y-3.5 border border-[#26352D] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E67E62]">
                  The AMP Advantage
                </div>
                <ul className="space-y-2 p-0 m-0 list-none">
                  <li className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Code & Asset Ownership</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero Monthly Platform or Plugin Rent</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Guaranteed 5–7 Days Production Delivery</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Direct Tech Lead & Co-Founder Support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#EAE4D8] hover:border-[#C85A3C]/60 hover:shadow-xs transition-all flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FBEBE6] text-[#983B23] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-stone-900 mb-1">
                      {item.title}
                    </h3>
                    <ul className="space-y-1 p-0 m-0 list-none">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs text-stone-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A3C] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. 3 Detailed Turnkey Website Packages */}
      <section id="tiers" className="py-16 sm:py-20 bg-[#FDFBF7] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-6xl space-y-8 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FBEBE6] border border-[#F7D6CC] text-xs font-bold uppercase tracking-wider text-[#983B23] mb-3 shadow-xs">
              <span>Website Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 mb-3">
              3-Tier Website Packages
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              All-inclusive development packages tailored for businesses transitioning offline to online.
            </p>
          </div>

          {SERVICES_DATA.map((srv) => (
            <div 
              id={srv.id} 
              key={srv.id} 
              className={`p-6 sm:p-8 lg:p-12 rounded-3xl bg-white border ${
                srv.isPopular 
                  ? 'border-2 border-[#C85A3C] shadow-lg' 
                  : srv.isPlus 
                  ? 'border-2 border-purple-400 shadow-lg' 
                  : 'border border-[#EAE4D8] shadow-sm'
              } transition-all`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${srv.badgeClass}`}>
                      {srv.tierNumber}
                    </span>
                    {srv.isPopular && <span className="text-xs font-bold text-[#C85A3C]">⭐ Most Popular</span>}
                    {srv.isPlus && <span className="text-xs font-bold text-purple-600">🚀 Next-Gen Tech</span>}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900">{srv.name}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{srv.tagline}</p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F0] border border-[#EAE4D8] space-y-1">
                    <div className="text-[11px] font-medium text-stone-500">Investment starting at</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono">{srv.startingPrice}</div>
                    <div className="text-[11px] text-stone-600 flex items-center gap-1.5 pt-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{srv.timeline}</span>
                    </div>
                  </div>

                  <div className="text-xs text-stone-600 bg-[#FAF7F0] p-3.5 sm:p-4 rounded-xl border border-[#EAE4D8]">
                    <strong className="text-stone-900 block mb-1">Ideal For:</strong>
                    {srv.idealFor}
                  </div>

                  <Link 
                    to={srv.ctaLink} 
                    className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center shadow-sm flex items-center justify-center gap-2 transition-all ${
                      srv.isPopular 
                        ? 'bg-[#C85A3C] hover:bg-[#B44C30] text-white' 
                        : srv.isPlus 
                        ? 'bg-[#2C4438] hover:bg-[#1E3027] text-white' 
                        : 'bg-white hover:bg-[#FAF7F0] text-stone-800 border border-[#EAE4D8]'
                    }`}
                  >
                    <span>Request {srv.tierNumber} Setup</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider border-b border-[#EAE4D8] pb-2">
                    Included Architecture Deliverables:
                  </h4>
                  
                  <ul className="space-y-2.5 sm:space-y-3">
                    {srv.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${srv.isPopular ? 'text-[#C85A3C]' : srv.isPlus ? 'text-purple-600' : 'text-stone-500'}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7F0] border border-[#EAE4D8] text-xs text-stone-600 flex items-center justify-between">
                    <span><strong>Stack:</strong> {srv.techStack}</span>
                    <span className="text-emerald-700 font-semibold font-mono">100% Owned</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Feature Matrix Comparison Table */}
      <section className="py-12 sm:py-16 bg-[#FAF7F0] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900 mb-2 sm:mb-3">Feature Comparison Matrix</h2>
            <p className="text-stone-600 text-xs sm:text-sm">Detailed side-by-side breakdown of all deliverables across our 3 tiers.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#EAE4D8] bg-white shadow-xs no-scrollbar">
            <table className="table w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-[#FAF7F0] text-stone-800 font-bold border-b border-[#EAE4D8]">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 text-left">Platform Capabilities</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center text-stone-600">Tier 1 (Basic)</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center text-[#C85A3C] font-bold">Tier 2 (CMS)</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center text-[#2C4438] font-bold">Tier 3 (3D & AI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE4D8]">
                {MATRIX_FEATURES.map((feat, fIdx) => (
                  <tr key={fIdx} className="hover:bg-[#FAF7F0]/60 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-stone-900">{feat.name}</td>
                    <td className="py-3 px-4 sm:px-6 text-center text-stone-600">{feat.t1}</td>
                    <td className="py-3 px-4 sm:px-6 text-center text-[#C85A3C] font-medium">{feat.t2}</td>
                    <td className="py-3 px-4 sm:px-6 text-center text-[#2C4438] font-semibold">{feat.t3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Bottom Conversion Banner: Have a Project in Mind? */}
      <section className="container mx-auto px-4 max-w-5xl mt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#18231E] text-white relative overflow-hidden shadow-2xl border border-[#26352D]">
          
          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#C85A3C]/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E67E62] bg-[#22312A] border border-[#34483E] mb-4 inline-block">
                Let's Build Together
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-3 leading-tight">
                Have a Project in Mind?
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Let's turn your idea into a high-performance reality. Reach out for custom software, SaaS development, paid advertising campaigns, or WhatsApp automation.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-1">
                <a href="tel:7447568595" className="hover:text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#E67E62]" />
                  <span>+91 74475 68595</span>
                </a>
                <a href="mailto:ampventures7@gmail.com" className="hover:text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#E67E62]" />
                  <span>ampventures7@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              <a
                href={getWhatsAppUrl("Hi AMP Ventures, I have a project in mind and would like to discuss it.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-md text-center inline-flex items-center justify-center gap-2 transition hover:scale-[1.02]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-[#C85A3C] hover:bg-[#B44C30] font-bold text-sm text-white text-center transition"
              >
                Submit Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

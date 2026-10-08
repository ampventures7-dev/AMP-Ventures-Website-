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
    description: 'Modern, high-performing websites engineered to build instant local credibility and turn visitors into paying clients.',
    deliverables: [
      'Business Websites & Portfolios',
      'High-Converting Landing Pages',
      'Service-Based Websites (Salons, Clinics, Cafes)',
      'E-Commerce Online Stores & Catalogs',
      'Fast CDN Edge Hosting & Free SSL'
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
    description: 'Custom web applications, multi-tenant SaaS platforms, and enterprise operational software built to scale your business.',
    deliverables: [
      'Custom Web Applications & Micro-SaaS',
      'Admin Dashboards & Real-Time Analytics',
      'Automated Booking & Appointment Systems',
      'Business Management Systems & ERPs',
      'Secure Customer & Client Portals'
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
    description: 'Supercharge your operations with 24/7 autonomous AI assistants that answer questions and capture qualified leads.',
    deliverables: [
      '24/7 Context-Aware AI Chatbot Assistants',
      'AI-Powered Search & Product Suggestions',
      'Automated Inbound Lead Qualification',
      'Smart Business Process Automation',
      'Custom LLM / OpenAI API Integration'
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
    description: 'Laser-targeted advertising campaigns across Instagram and Facebook engineered to flood your calendar with leads.',
    deliverables: [
      'Targeted Ad Campaigns (Hyper-Local & Pan-India)',
      'High-Intent Lead Generation Forms',
      'Brand Awareness & Video Retargeting',
      'Direct Sales, WhatsApp & Messenger Ads',
      'Creative Ad Copywriting & A/B Testing'
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
    description: 'Reach high-intent buyers at the exact moment they search on Google for services and products in your local area.',
    deliverables: [
      'Google Search Ads (High-Buyer Intent Keywords)',
      'Local Google Maps Ads & Call Extensions',
      'Google Display Network & Banner Ads',
      'Performance Max Campaigns & Smart Bidding',
      'Negative Keyword Filtering & ROI Tracking'
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
    description: 'Data-driven technical, on-page, and local SEO strategies to rank your business at the top of Google Search and Google Maps.',
    deliverables: [
      'Google Maps & Google Business Profile (GBP) Local 3-Pack Dominance',
      'Technical SEO, Core Web Vitals & Sub-0.5s Speed Optimization',
      'AEO & GEO (AI Engine Optimization for ChatGPT & Gemini Search)',
      'JSON-LD Structured Data Schema Markup & Rich Search Snippets',
      'High-Intent Keyword Mapping, On-Page SEO & Canonical Audits'
    ]
  },
  {
    id: 'social-media-handling',
    title: 'Social Media Account Handling',
    tag: 'Brand Authority',
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon: Share2,
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    description: 'Complete management of your social profiles to build authentic brand loyalty, consistent organic reach, and engaged fans.',
    deliverables: [
      'Profile Branding & Bio Optimization',
      'High-Impact Graphic Posts & Video Reels',
      'Strategic Hashtag & Keyword Research',
      'Captions & Conversion-Focused Copywriting',
      'Audience Engagement & DM Lead Routing'
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
    description: 'Clean, professional, and intuitive user experiences designed from scratch in Figma to elevate your brand prestige.',
    deliverables: [
      'Modern UI Wireframing & Interactive Prototypes',
      'Mobile-First Responsive Interface Architecture',
      'Brand Identity Systems & Visual Guidelines',
      'Complete Website Modernization & Redesign',
      'Conversion Rate Optimization (CRO) Layouts'
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
    description: 'Dependable post-launch technical management so your web systems stay secure, updated, and blazing fast 24/7.',
    deliverables: [
      'Proactive Bug Fixes & Security Patches',
      'Regular Content, Menu & Price Updates',
      'Speed Optimizations & Core Web Vitals Monitoring',
      'Cloud Server Backups & Domain SSL Renewals',
      'Priority On-Call Technical Support SLA'
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
    description: 'Automate customer bookings, order confirmations, broadcast alerts, and payment reminders directly on WhatsApp.',
    deliverables: [
      'WhatsApp Business API Setup & Verification',
      '1-Click Direct WhatsApp Booking Triggers',
      'Automated Slot & Order Confirmations',
      'Payment Due / Takada Reminder Alerts',
      'Pre-Filled Inbound Lead Questionnaires'
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

// 3. Why Choose Us (from Brochure: "Why Choose Us?")
const WHY_CHOOSE_US = [
  {
    title: 'Built For Your Business',
    desc: 'No generic copy-paste templates. We engineer tailored solutions designed around your unique operational needs.'
  },
  {
    title: 'Modern Technology',
    desc: 'We use bleeding-edge stacks (React, FastAPI, Next.js, Vercel Edge) to create fast, secure, and scalable products.'
  },
  {
    title: 'Design + Development',
    desc: 'From the first aesthetic wireframe to final cloud deployment, we handle the entire lifecycle under one roof.'
  },
  {
    title: 'Transparent Process',
    desc: 'Clear communication, defined requirements, milestone tracking, and frequent updates with zero surprises.'
  },
  {
    title: 'Growth Ready Architecture',
    desc: 'We build with future expansion in mind — easily add payment gateways, custom CRM, or AI tools as you grow.'
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
    <div className="services-page pt-28 pb-20 bg-white text-slate-900">
      
      {/* 1. Page Hero Header */}
      <section className="py-10 sm:py-16 text-center bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-800 mb-4 sm:mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Build. Innovate. Grow. • Full-Stack Agency Capabilities</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight">
            Your Vision. <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Our Code.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We build modern, high-performing digital solutions designed around your business goals. Everything you need to build, market, and scale your online presence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#capabilities"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition hover:scale-[1.02]"
            >
              Explore All Capabilities
            </a>
            <a
              href="#tiers"
              className="px-6 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 font-bold text-xs sm:text-sm transition"
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
      <section id="capabilities" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Service Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-3">
              What We Provide
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to build, grow, and scale your offline business into an automated online powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {AGENCY_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon + Tag Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${cap.iconBg} flex items-center justify-center`}>
                        <IconComp className={`w-6 h-6 ${cap.iconColor}`} />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${cap.badgeClass}`}>
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {cap.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {cap.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Included Deliverables:
                      </div>
                      <ul className="space-y-1.5 p-0 m-0 list-none">
                        {cap.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
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
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold text-center border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-1.5"
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
      <section className="py-16 sm:py-20 bg-slate-50/80 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Structured Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-3">
              From Idea to Launch
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A simple, transparent, and collaborative process engineered for zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((proc, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-sky-600/40">
                    {proc.step}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
                    Phase {proc.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
              <span className="text-sky-600">Build</span>
              <span>→</span>
              <span className="text-indigo-600">Launch</span>
              <span>→</span>
              <span className="text-emerald-600">Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us: 5 Pillars */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Why AMP Ventures?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 leading-tight">
                Why Choose Us?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We don't just build websites, we build solutions that work for you. Our decoupled code and automation pipelines ensure you never pay recurring software rent.
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Your Success Is Our Success
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We partner with local businesses for the long run. From first launch to ongoing lead generation, we're with you at every step.
                </p>
                <div className="pt-1 flex items-center gap-4 text-xs font-medium text-slate-200">
                  <span>✓ 100% Code Ownership</span>
                  <span>✓ Zero Monthly Rent</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white transition-all flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. 3 Detailed Turnkey Website Packages */}
      <section id="tiers" className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-8 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700 mb-3 shadow-xs">
              <span>Website Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mb-3">
              3-Tier Website Packages
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All-inclusive development packages tailored for businesses transitioning offline to online.
            </p>
          </div>

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

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">{srv.name}</h3>
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
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    Included Architecture Deliverables:
                  </h4>
                  
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

      {/* 6. Feature Matrix Comparison Table */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
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

      {/* 7. Bottom Conversion Banner: Have a Project in Mind? */}
      <section className="container mx-auto px-4 max-w-5xl mt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          
          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-500/30 mb-4 inline-block">
                Let's Build Together
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-3 leading-tight">
                Have a Project in Mind?
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Let's turn your idea into a high-performance reality. Reach out for custom software, SaaS development, paid advertising campaigns, or WhatsApp automation.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <a href="tel:7447568595" className="hover:text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+91 74475 68595</span>
                </a>
                <a href="mailto:ampventures7@gmail.com" className="hover:text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>ampventures7@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              <a
                href={getWhatsAppUrl("Hi AMP Ventures, I have a project in mind and would like to discuss it.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 font-bold text-sm text-white shadow-lg shadow-sky-500/30 text-center inline-flex items-center justify-center gap-2 transition hover:scale-[1.02]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-sm text-slate-200 border border-slate-700 text-center transition"
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

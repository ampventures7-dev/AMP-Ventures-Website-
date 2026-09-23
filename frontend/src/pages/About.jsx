import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Target, Lock, Cpu, Award, ShieldCheck, 
  Check, ArrowUpRight 
} from 'lucide-react';
import LeadershipSection from '../components/LeadershipSection.jsx';

const VALUES = [
  {
    icon: Zap,
    title: 'Ultra-Fast Performance',
    desc: 'Sub-second page load times with zero bloated legacy plugins, ensuring immediate customer retention.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/25'
  },
  {
    icon: Target,
    title: 'Engineered for Conversion',
    desc: 'Bespoke WhatsApp booking pipelines, direct phone triggers, and verified Google Maps review widgets.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25'
  },
  {
    icon: Lock,
    title: '100% Client Ownership',
    desc: 'You hold full rights to your domain, database, and source code from day 1 with zero monthly software rent.',
    color: 'text-lime-accent',
    bg: 'bg-lime-accent/10',
    border: 'border-lime-accent/25'
  },
  {
    icon: Cpu,
    title: 'Modern Architecture',
    desc: 'Built on FastAPI Python engines, React Vite clients, and AI automation for future-proof scalability.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/25'
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Local Audit',
    desc: 'We analyze your current footfall, competitors on Google Maps, and determine the optimal architecture for your tier.'
  },
  {
    step: '02',
    title: 'Bespoke UI/UX Engineering',
    desc: 'Crafting responsive mobile layouts, digital service menus, and custom interactive components matching your exact brand.'
  },
  {
    step: '03',
    title: 'FastAPI & WhatsApp Integration',
    desc: 'Developing high-speed backend routes, automated lead notification triggers, and client CMS panels.'
  },
  {
    step: '04',
    title: 'Launch, SEO & Handover',
    desc: 'Going live on enterprise CDN hosting, synchronizing Google Business Profiles, and conducting full staff handover.'
  }
];

export default function About() {
  const location = useLocation();

  // Scroll to #leadership if linked directly
  useEffect(() => {
    if (location.hash === '#leadership' || location.pathname === '/leadership') {
      const el = document.getElementById('leadership');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="about-page pt-28 pb-20 bg-white text-slate-900">
      {/* 1. Original About Header */}
      <motion.section 
        className="py-12 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-6 shadow-xs">
            <span>OUR MISSION & ARCHITECTURAL VISION</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Empowering Offline Businesses With <br />
            <span className="text-sky-600">
              World-Class Web Engineering
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            AMP Ventures was founded to close the digital gap for physical businesses — replacing slow, generic templates with fast, engineered systems that actually convert visitors into customers.
          </p>
        </div>
      </motion.section>

      {/* 2. Original Founder Credentials & Engineering Standards Card */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-indigo-600" />
                  <span>ENGINEERING LEADERSHIP</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-snug">
                  Built on Real Technical Training, <br />
                  <span className="text-sky-600">
                    Not Guesswork
                  </span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Most web agencies hand your project to someone running a templated WordPress theme with a stack of plugins bolted on. It works — until it doesn't.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We took a different path: formal <strong>AI/ML training from IIT Roorkee</strong> and a <strong>Cisco CCNA</strong> in enterprise networking. That means every system we build — booking flows, lead capture, automation — is engineered with an actual understanding of how it works, not just which plugin to install.
                </p>

                {/* Verified Credentials Pills */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">IIT Roorkee Certified</div>
                      <div className="text-xs text-slate-500">Advanced Artificial Intelligence, Machine Learning & Systems</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Cisco Certified Network Associate (CCNA)</div>
                      <div className="text-xs text-slate-500">Enterprise Cloud Infrastructure, Routing & Cyber Security</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="lg:col-span-5 p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 font-display">The AMP Ventures Guarantee</h3>
                
                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-slate-900 block font-semibold mb-0.5">95+ Google PageSpeed Guarantee</strong>
                      <span className="text-slate-500 text-xs">Zero bloated plugins slowing down mobile visitors.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-slate-900 block font-semibold mb-0.5">100% Code & Data Ownership</strong>
                      <span className="text-slate-500 text-xs">You hold complete control of your domain and database.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-slate-900 block font-semibold mb-0.5">Direct Lead Architect Contact</strong>
                      <span className="text-slate-500 text-xs">Direct technical access—no junior ticket handlers.</span>
                    </div>
                  </li>
                </ul>

                <Link
                  to="/contact"
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-center text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Schedule Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Original Core Principles Bento */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-3">Core Engineering Principles</h2>
            <p className="text-slate-600 text-sm">The four pillars underlying every client deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-xl ${val.bg} ${val.border} border flex items-center justify-center mb-5`}>
                    <IconComponent className={`w-6 h-6 ${val.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{val.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Original 4-Step Execution Workflow */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-3">Our 4-Step Execution Workflow</h2>
            <p className="text-slate-600 text-sm">From initial consultation to live Google ranking in under 14 days.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black font-mono text-sky-600 mb-3">{s.step}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 font-display">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Co-Founders Leadership Section (Sabse Last Me Added) */}
      <LeadershipSection id="leadership" />
    </div>
  );
}

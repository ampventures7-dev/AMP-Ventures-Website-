import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Target, Lock, Cpu, Award, ShieldCheck, 
  Check, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import LeadershipSection from '../components/LeadershipSection.jsx';

const VALUES = [
  {
    icon: Zap,
    title: 'Ultra-Fast Performance',
    desc: 'Sub-second page load times with zero bloated legacy plugins, ensuring immediate customer retention.',
    color: 'text-amber-600',
    bg: 'bg-gradient-to-br from-amber-50 to-orange-50/60',
    border: 'border-amber-200/70',
    iconBg: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  {
    icon: Target,
    title: 'Engineered for Conversion',
    desc: 'Bespoke WhatsApp booking pipelines, direct phone triggers, and verified Google Maps review widgets.',
    color: 'text-[#C85A3C]',
    bg: 'bg-gradient-to-br from-rose-50 to-orange-50/60',
    border: 'border-[#F7D6CC]',
    iconBg: 'bg-[#FBEBE6] text-[#983B23] border-[#F7D6CC]'
  },
  {
    icon: Lock,
    title: '100% Client Ownership',
    desc: 'You hold full rights to your domain, database, and source code from day 1 with zero monthly software rent.',
    color: 'text-emerald-700',
    bg: 'bg-gradient-to-br from-emerald-50 to-teal-50/60',
    border: 'border-emerald-200/70',
    iconBg: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    icon: Cpu,
    title: 'Modern Architecture',
    desc: 'Built on FastAPI Python engines, React Vite clients, and AI automation for future-proof scalability.',
    color: 'text-purple-700',
    bg: 'bg-gradient-to-br from-purple-50 to-indigo-50/60',
    border: 'border-purple-200/70',
    iconBg: 'bg-purple-100 text-purple-800 border-purple-200'
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
    <div className="about-page pt-28 pb-20 bg-[#FDFBF7] text-stone-900">
      {/* 1. Original About Header */}
      <motion.section 
        className="py-12 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FBEBE6] border border-[#F7D6CC] text-xs font-semibold uppercase tracking-wider text-[#983B23] mb-6 shadow-xs">
            <span>OUR MISSION & ARCHITECTURAL VISION</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-stone-900 tracking-tight mb-6 leading-tight">
            Empowering Offline Businesses With <br />
            <span className="text-[#C85A3C]">
              World-Class Web Engineering
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            AMP Ventures was founded to close the digital gap for physical businesses — replacing slow, generic templates with fast, engineered systems that actually convert visitors into customers.
          </p>
        </div>
      </motion.section>

      {/* 2. Original Founder Credentials & Engineering Standards Card */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="p-8 lg:p-12 rounded-3xl bg-white border border-[#EAE4D8] shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBEBE6] border border-[#F7D6CC] text-[#983B23] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#C85A3C]" />
                  <span>ENGINEERING LEADERSHIP</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900 leading-snug">
                  Built on Real Technical Training, <br />
                  <span className="text-[#C85A3C]">
                    Not Guesswork
                  </span>
                </h2>

                {/* Point-Format Core Values (Simple Plain English) */}
                <ul className="space-y-3 p-0 m-0 list-none">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No Ready-Made Templates:</strong> Built from scratch for your business — no slow plugins or broken themes.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>IIT & Cisco Certified:</strong> Real technical training so your website is fast, secure, and reliable.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Built to Get Customers:</strong> Easy 1-click WhatsApp booking, fast loading on mobile, and zero monthly rent.</span>
                  </li>
                </ul>

                {/* Verified Credentials Pills */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EAE4D8] flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">IIT Roorkee Certified</div>
                      <div className="text-xs text-stone-500">Software Development & Modern AI Systems</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EAE4D8] flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#FBEBE6] border border-[#F7D6CC] flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#C85A3C]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">Cisco Certified (CCNA)</div>
                      <div className="text-xs text-stone-500">Fast Cloud Servers & Online Security</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="lg:col-span-5 p-7 rounded-2xl bg-[#FAF7F0] border border-[#EAE4D8] shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-stone-900 border-b border-[#EAE4D8] pb-3 font-display">The AMP Ventures Guarantee</h3>
                
                <ul className="space-y-4 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-stone-900 block font-semibold mb-0.5">Fast Mobile Speed Guarantee</strong>
                      <span className="text-stone-500 text-xs">Opens instantly on every smartphone with zero lag.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-stone-900 block font-semibold mb-0.5">100% You Own Everything</strong>
                      <span className="text-stone-500 text-xs">Full control of your website, domain name, and customer data.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</div>
                    <div>
                      <strong className="text-stone-900 block font-semibold mb-0.5">Talk Directly to Developers</strong>
                      <span className="text-stone-500 text-xs">Direct contact with the actual engineers building your site.</span>
                    </div>
                  </li>
                </ul>

                <Link
                  to="/contact"
                  className="w-full py-3.5 rounded-xl bg-[#C85A3C] hover:bg-[#B44C30] text-white font-bold text-center text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
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
      <section className="py-16 bg-[#FAF7F0] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-extrabold text-stone-900 mb-3">Core Engineering Principles</h2>
            <p className="text-stone-600 text-sm">The four pillars underlying every client deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className={`p-7 rounded-2xl ${val.bg} border ${val.border} shadow-sm hover:shadow-md transition-all`}>
                  <div className={`w-12 h-12 rounded-xl ${val.iconBg} border flex items-center justify-center mb-5`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2 font-display">{val.title}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Original 4-Step Execution Workflow */}
      <section className="py-16 bg-[#FDFBF7] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-extrabold text-stone-900 mb-3">Our 4-Step Execution Workflow</h2>
            <p className="text-stone-600 text-sm">From initial consultation to live Google ranking in under 14 days.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EAE4D8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black font-mono text-[#C85A3C] mb-3">{s.step}</div>
                  <h3 className="text-sm font-bold text-stone-900 mb-2 font-display">{s.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{s.desc}</p>
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

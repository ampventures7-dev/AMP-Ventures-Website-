import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.216 8.216 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export const FOUNDERS = [
  {
    name: 'Mohit Jangid',
    role: 'AI/ML Engineer',
    badge: 'IIT Roorkee Certified',
    phone: '917878069878',
    photo: '/team/mohit-jangir.jpg',
    bio: 'Certified in AI & Machine Learning from IIT Roorkee. Mohit builds smart AI tools and automation systems that help businesses save time, handle customer tasks automatically, and run more smoothly.',
    specialties: ['AI & Automation', 'Smart Business Tools', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/in/mohit-jangir-3933583a6/'
  },
  {
    name: 'Prachi Pawar',
    role: 'AI/ML Developer',
    badge: 'IIT Roorkee Certified',
    phone: '917038711002',
    photo: '/team/prachi-pawar.png',
    bio: 'Certified in AI & Machine Learning from IIT Roorkee. Prachi builds custom AI features and smart chatbots that make website interactions easy, fast, and helpful for visitors.',
    specialties: ['AI Chatbots', 'Smart Web Features', 'Machine Learning'],
    linkedin: 'https://www.linkedin.com/in/prachipawar001/'
  },
  {
    name: 'Ankit Bandewar',
    role: 'Full Stack Developer',
    badge: 'IIT Roorkee Certified',
    phone: '917000384330',
    photo: '/team/ankit-bandewar.jpg',
    bio: 'Certified in Full Stack Development from IIT Roorkee. Ankit creates fast, modern websites and web applications that load quickly and work smoothly on both mobile phones and laptops.',
    specialties: ['Website Development', 'Fast Web Apps', 'Database & Cloud'],
    linkedin: 'https://www.linkedin.com/in/ankit-bandewar-9a386821b/'
  }
];

export default function LeadershipSection({ className = '', id = 'leadership' }) {
  return (
    <section id={id} className={`relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden border-t border-slate-200 ${className}`}>
      {/* Subtle ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-[400px] h-[300px] bg-emerald-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Animated Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Founding Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-4 tracking-[-0.03em] leading-tight">
            Meet Our <span className="text-sky-600">Co-Founders</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Certified from IIT Roorkee, our 3 co-founders lead every project directly to deliver high-quality web engineering, fast performance, and smart AI solutions for your business.
          </p>
        </motion.div>

        {/* 3-Column Grid: Equal alignment and heights across all 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {FOUNDERS.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <div className="group h-full rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between text-center relative overflow-hidden">
                {/* Card Main Body */}
                <div className="flex flex-col items-center">
                  {/* Full Photo (Uniform 4:5 Portrait Ratio, Eyes & Head Perfectly Aligned) */}
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 border border-slate-200/90 shadow-2xs mb-5">
                    <img 
                      src={founder.photo} 
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Name: Black/Dark text at all times (no blue hover) */}
                  <h3 className="text-xl font-display font-bold text-slate-900 tracking-tight">
                    {founder.name}
                  </h3>

                  {/* Designation (Below name, slightly muted color) */}
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    {founder.role}
                  </div>

                  {/* 'IIT Roorkee Certified' Badge Under Name */}
                  <div className="mt-2.5 mb-4 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{founder.badge}</span>
                    </span>
                  </div>

                  {/* Bio in Simple English */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 text-center min-h-[4rem]">
                    {founder.bio}
                  </p>

                  {/* Core Focus Tags */}
                  <div className="w-full pt-4 border-t border-slate-100 mb-5">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                      Core Focus
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {founder.specialties.map((spec, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 border border-slate-200/80 text-slate-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: WhatsApp & LinkedIn Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2 mt-auto w-full">
                  <a 
                    href={`https://wa.me/${founder.phone}?text=${encodeURIComponent(`Hi ${founder.name.split(' ')[0]}, I'm visiting the AMP Ventures website and would like to connect.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-2xs"
                    title={`Chat with ${founder.name} on WhatsApp`}
                    aria-label={`Chat with ${founder.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 hover:border-sky-300 transition-colors shadow-2xs"
                    title={`${founder.name} LinkedIn`}
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-sky-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <motion.div 
          className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 font-display">Direct Co-Founder Communication</div>
              <div className="text-xs text-slate-500">You talk and work directly with the founders—no middlemen, no delays.</div>
            </div>
          </div>

          <a 
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-sm whitespace-nowrap"
          >
            <span>Talk With Founders</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

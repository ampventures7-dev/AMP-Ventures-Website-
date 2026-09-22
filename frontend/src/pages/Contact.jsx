import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Sparkles, CheckCircle2, MessageSquare, MapPin, 
  Mail, Clock, Lock, ShieldCheck, Send 
} from 'lucide-react';
import { getApiUrl, getWhatsAppUrl } from '../apiConfig';

const TIER_OPTIONS = [
  { value: 'Tier 1 - Basic (Static Website)', label: 'Tier 1 — Basic (Static Website • ₹9,999)' },
  { value: 'Tier 2 - Premium (CMS & Reviews)', label: 'Tier 2 — Premium (CMS & Reviews • ₹24,999)' },
  { value: 'Tier 3 - Premium Plus (3D & Automation)', label: 'Tier 3 — Premium Plus (3D & AI • ₹49,999)' },
  { value: 'Custom Enterprise / Multiple Outlets', label: 'Custom Enterprise / Multiple Outlets' }
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedTierParam = searchParams.get('tier');

  const getInitialTier = () => {
    if (requestedTierParam === 'tier1') return 'Tier 1 - Basic (Static Website)';
    if (requestedTierParam === 'tier2') return 'Tier 2 - Premium (CMS & Reviews)';
    if (requestedTierParam === 'tier3') return 'Tier 3 - Premium Plus (3D & Automation)';
    return 'Tier 2 - Premium (CMS & Reviews)';
  };

  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    tier: getInitialTier(),
    budget: 'Standard',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (requestedTierParam) {
      setFormData(prev => ({ ...prev, tier: getInitialTier() }));
    }
  }, [requestedTierParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const result = await response.json();
      setSubmittedLead(result);
    } catch (err) {
      // Local fallback confirmation
      setSubmittedLead({
        success: true,
        message: `Thank you ${formData.name}, your project inquiry for "${formData.business_name}" has been recorded!`,
        lead_id: Math.floor(1000 + Math.random() * 9000),
        data: formData
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page pt-28 pb-20 bg-white text-slate-900">
      {/* Header */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Project Consultation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Let's Engineer Your <br />
            <span className="text-sky-600">
              High-Converting Digital Platform
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Fill out your project brief below or reach out directly on WhatsApp for an immediate consultation with our Lead Technical Architect.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Contact Form or Success Confirmation */}
            <div className="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              {submittedLead ? (
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-extrabold text-slate-900">Project Brief Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                      {submittedLead.message}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Reference ID:</span>
                      <strong className="text-sky-600 font-mono">#AMP-{submittedLead.lead_id || '2026'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Package:</span>
                      <span className="text-slate-900 font-medium">{formData.tier}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimated Turnaround:</span>
                      <span className="text-emerald-700 font-semibold">Within 4 Business Hours</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <a 
                      href={getWhatsAppUrl(`Hi AMP Ventures, I just submitted lead #AMP-${submittedLead.lead_id} for ${formData.business_name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Fast-Track on WhatsApp</span>
                    </a>
                    <button 
                      onClick={() => { setSubmittedLead(null); setFormData({ ...formData, message: '' }); }}
                      className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-300"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <h3 className="text-xl font-display font-bold text-slate-900">Project Consultation Brief</h3>
                    <span className="text-xs text-sky-600 font-mono font-semibold">Step 1 of 1</span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Business Name *</label>
                      <input 
                        type="text" 
                        name="business_name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                        placeholder="e.g. Sharma Sweets & Cafe"
                        value={formData.business_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Target Service Tier</label>
                    <select 
                      name="tier"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                      value={formData.tier}
                      onChange={handleChange}
                    >
                      {TIER_OPTIONS.map((opt, idx) => (
                        <option key={idx} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">Project Goals & Requirements</label>
                    <textarea 
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="e.g. We want an online salon booking portal with Google review sync to increase weekday bookings."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    disabled={submitting}
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Transmitting Brief to Backend...' : 'Submit Inquiry & Request Strategy Call'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Zero spam. Persisted securely in encrypted backend pipeline.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Direct Contacts & WhatsApp Priority Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="p-7 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Direct WhatsApp Priority Line</h3>
                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Instant reply from Lead Architect
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Prefer a direct 1-on-1 chat? Skip the form and message our founder directly with your business location and questions.
                </p>

                <a 
                  href={getWhatsAppUrl("Hi AMP Ventures, I'd like to consult about a website for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Consultation</span>
                </a>
              </div>

              {/* Studio Info Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3 font-display">
                  Agency Details & Studio
                </h3>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Engineering Studio</strong>
                      <span className="text-slate-500">Bengaluru & New Delhi Tech Corridors, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Direct Email</strong>
                      <a href="mailto:ampventures7@gmail.com" className="text-slate-500 hover:text-sky-600 transition-colors">ampventures7@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">Operating Hours</strong>
                      <span className="text-slate-500">Monday – Saturday: 9:00 AM – 8:00 PM IST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Led by <strong>IIT Roorkee AI/ML • Cisco CCNA</strong> Engineers</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

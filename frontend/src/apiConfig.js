/**
 * Global API & Agency Configuration for AMP Ventures
 * Uses VITE_API_URL and VITE_WHATSAPP_NUMBER from environment
 */
const rawBase = import.meta.env.VITE_API_URL || '';
export const API_BASE_URL = rawBase.replace(/\/+$/, '');

export const getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

const rawWa = import.meta.env.VITE_WHATSAPP_NUMBER || '917000384330';
export const WHATSAPP_NUMBER = rawWa.replace(/\D/g, '');

export const formatWhatsAppDisplay = (num) => {
  const digits = (num || '').replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return digits ? `+${digits}` : '+91 70003 84330';
};

export const WHATSAPP_DISPLAY = formatWhatsAppDisplay(WHATSAPP_NUMBER);

export const getWhatsAppUrl = (text = '') => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  if (!text) return `https://wa.me/${cleanNumber}`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
};

export const CO_FOUNDERS_CONTACT = [
  {
    name: 'Ankit Bandewar',
    role: 'Lead Full Stack & Cloud Architect',
    location: 'Chhindwara, MP',
    phone: '917000384330',
    displayPhone: '+91 70003 84330',
    tag: 'Web & Cloud Architecture',
    badge: 'IIT Roorkee Certified',
    bio: 'Direct consultation on web engineering, performance optimization, and custom hosting.',
    defaultText: "Hi Ankit, I would like to consult about website development and architecture for my business."
  },
  {
    name: 'Mohit Jangid',
    role: 'Co-Founder & AI/ML Engineer',
    location: 'Jaipur, Rajasthan',
    phone: '917878069878',
    displayPhone: '+91 78780 69878',
    tag: 'AI & Smart Business Automation',
    badge: 'IIT Roorkee Certified',
    bio: 'Consultation on business automation, AI workflows, and machine learning systems.',
    defaultText: "Hi Mohit, I would like to consult about AI automation and smart tools for my business."
  },
  {
    name: 'Prachi Pawar',
    role: 'Co-Founder & AI/ML Developer',
    location: 'Mumbai, Maharashtra',
    phone: '917038711002',
    displayPhone: '+91 70387 11002',
    tag: 'AI Chatbots & Conversational Features',
    badge: 'IIT Roorkee Certified',
    bio: 'Consultation on 24/7 custom AI chatbots and smart visitor interaction features.',
    defaultText: "Hi Prachi, I would like to consult about an AI chatbot and customer engagement for my business."
  }
];

export const getFounderWhatsAppUrl = (phone, text = '') => {
  const digits = (phone || '').replace(/\D/g, '');
  if (!text) return `https://wa.me/${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
};

export default {
  API_BASE_URL,
  getApiUrl,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  getWhatsAppUrl,
  CO_FOUNDERS_CONTACT,
  getFounderWhatsAppUrl,
};


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_SEO = {
  '/': {
    title: 'AMP VENTURES | Web Development Agency for Offline Businesses',
    description: 'Transform your physical salon, clinic, restaurant, or retail store into an automated digital revenue engine. 95+ PageSpeed guarantee, WhatsApp booking, and 100% code ownership.'
  },
  '/services': {
    title: 'Engineering Packages & Capabilities | AMP VENTURES',
    description: 'From 5-day rapid static storefronts to lightweight custom CMS portals and immersive 3D/AI interactive experiences. Explore all 3 development tiers.'
  },
  '/pricing': {
    title: 'Transparent Project Pricing & ROI | AMP VENTURES',
    description: 'Predictable, one-time project pricing starting at ₹14,999 with zero hidden fees, zero recurring plugin subscriptions, and 100% code and database ownership.'
  },
  '/about': {
    title: 'Engineering Leadership & Mission | AMP VENTURES',
    description: 'Founded on first principles by IIT Roorkee AI/ML and Cisco Certified Network Associate (CCNA) engineers to bridge the digital gap for offline businesses.'
  },
  '/readiness-score': {
    title: 'Free Digital Readiness & Revenue Gap Audit | AMP VENTURES',
    description: 'Take a 60-second interactive diagnostic to calculate your business digital maturity score and uncover untapped monthly revenue bottlenecks.'
  },
  '/blog': {
    title: 'Offline-to-Online Growth Insights & Playbooks | AMP VENTURES',
    description: 'Practical, fluff-free guides and engineering breakdowns on local Google Maps SEO, WhatsApp commerce, and sub-second web speed conversion.'
  },
  '/contact': {
    title: 'Schedule Lead Architect Consultation | AMP VENTURES',
    description: 'Submit your project brief or connect directly on WhatsApp with our Lead Technical Architect for guaranteed same-day project scoping.'
  },
  '/admin': {
    title: 'Lead Intelligence & CRM Dashboard | AMP VENTURES',
    description: 'Internal operations dashboard tracking client inquiries and digital readiness audits.'
  }
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentSeo = ROUTE_SEO[pathname] || ROUTE_SEO['/'];
    
    // Update Title
    document.title = currentSeo.title;

    // Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', currentSeo.description);
    }

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSeo.title);
    }

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', currentSeo.description);
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://ampventures.agency${pathname === '/' ? '' : pathname}`);
    }
  }, [pathname]);

  return null;
}

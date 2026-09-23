import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight, X, BookOpen } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: '5 Reasons Local Salons Lose 50% of Customers Without an Online Portal',
    excerpt: 'Over 68% of salon clients look to book haircuts and spa slots between 9 PM and midnight—hours when your receptionist is asleep.',
    category: 'Salons & Spas',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'AMP Engineering Team',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'The Zero-Commission Playbook: How Restaurants Retain 30% Higher Margins',
    excerpt: 'Food aggregators charge 25–32% in commissions. Discover how direct QR digital menus and WhatsApp ordering return full control to restaurateurs.',
    category: 'Restaurants',
    readTime: '6 min read',
    date: 'August 2026',
    author: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Local Google Maps SEO: How to Rank #1 for "Near Me" Searches in 14 Days',
    excerpt: 'A complete breakdown of linking high-speed schema markup, Google Reviews widgets, and local citations to dominate your city map pack.',
    category: 'Local SEO',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'AMP Engineering Team',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Why Static Templates Fail: The Case for Lightweight Custom CMS Architecture',
    excerpt: 'Why local store owners abandon WordPress within 6 months and why lightweight, decoupled CMS setups provide lasting ROI.',
    category: 'Architecture',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'WhatsApp Commerce: How Local Boutiques Convert Browsers into Daily Buyers',
    excerpt: 'How retail boutiques turn Instagram followers and walk-ins into a VIP broadcast channel with instant 1-click cart checkout.',
    category: 'Retail & Commerce',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'AMP Engineering Team',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Speed Equals Revenue: Why Sub-Second Load Times Double In-Store Footfall',
    excerpt: 'Every 100ms delay in mobile load time reduces conversions by 7%. How headless architecture delivers ultra-fast local experiences.',
    category: 'Performance',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="blog-page pt-28 pb-20 bg-white text-slate-900">
      {/* Header */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-6 shadow-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Growth Knowledge Hub</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Offline-to-Online <br />
            <span className="text-sky-600">
              Growth Insights & Playbooks
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Practical, fluff-free guides and engineering breakdowns on turning local walk-ins into predictable automated digital revenue.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all">
                <div>
                  <div 
                    className="h-44 bg-cover bg-center p-4 flex items-end relative"
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.6) 100%), url(${post.image})` }}
                  >
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-[11px] text-slate-500">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug font-display">{post.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => setSelectedArticle(post)}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Read Executive Summary</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit CTA Strip */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="p-8 lg:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">Want a Personalized Growth Architecture for Your Business?</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Run our free Digital Readiness Score tool or book a 1-on-1 strategy call with our Lead Architect today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/readiness-score" className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-sm flex items-center gap-2 transition-all">
                <span>Take Free Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300 transition-all">
                Request Custom Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl max-w-xl w-full space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">{selectedArticle.category}</span>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-slate-400 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-xl font-display font-bold text-slate-900">{selectedArticle.title}</h2>
            <div className="text-xs text-slate-500">
              By {selectedArticle.author} • {selectedArticle.date} • {selectedArticle.readTime}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedArticle.excerpt}
            </p>
            
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              In today's hyper-local economy, physical foot traffic is increasingly decided on smartphones before the customer ever steps out of their house. Having a fast, high-converting digital storefront ensures that when local buyers search on Google or Instagram, your business wins the first impression and the booking.
            </p>

            <div className="flex gap-3 pt-2">
              <Link 
                to="/contact" 
                className="flex-grow py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs text-center shadow-sm flex items-center justify-center gap-1.5 transition-all"
                onClick={() => setSelectedArticle(null)}
              >
                <span>Implement This Setup With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button 
                className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-300" 
                onClick={() => setSelectedArticle(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

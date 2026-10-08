from fastapi import APIRouter
from typing import List, Optional
from app.services.cache import cached

router = APIRouter()

PORTFOLIO_CASE_STUDIES = [
    {
        "id": "pawar-constructions",
        "title": "Pawar Constructions",
        "industry": "Civil & Infrastructure",
        "category": "infrastructure",
        "tier": "Tier 2 — Premium",
        "tagline": "Building Strong Foundations with Zero-Incident Safety & Milestones",
        "client_location": "India",
        "metrics": {
            "booking_increase": "100% On-Time",
            "google_reviews": "4.9 ★ Rating",
            "page_load_speed": "0.4s Speed"
        },
        "description": "Civil engineering platform with project milestones, architectural gallery, and instant lead capture.",
        "points": [
            "Civil contracting & infrastructure portfolio showcase",
            "Real-time project milestones & architectural gallery",
            "Serverless lead capture with 0.4s edge latency"
        ],
        "deliverables": [
            "High-Speed Responsive Web App",
            "Vercel Serverless Contact API",
            "Civil Portfolio Showcase",
            "Fast CDN Global Edge Delivery"
        ],
        "image_gradient": "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
        "accent_color": "#ea580c",
        "live_demo_url": "https://pawar-constructions.vercel.app"
    },
    {
        "id": "saroj-school",
        "title": "Saroj Mehta International School",
        "industry": "Education & CBSE School",
        "category": "education",
        "tier": "Tier 2 — Premium",
        "tagline": "Best CBSE School in Dapoli, Ratnagiri (SMISK)",
        "client_location": "Dapoli, Ratnagiri, Maharashtra",
        "metrics": {
            "booking_increase": "+180% Inquiries",
            "google_reviews": "4.9 ★ Trust",
            "page_load_speed": "0.5s Load"
        },
        "description": "CBSE school portal with online admissions pipeline, interactive curriculum, and campus tour.",
        "points": [
            "Digital student admissions & parent inquiry pipeline",
            "Interactive CBSE curriculum & academic calendar",
            "Panoramic campus visual tour & faculty showcase"
        ],
        "deliverables": [
            "CBSE-Aligned School Portal",
            "Admissions Inquiry Lead Capture",
            "Interactive Academic Curriculum Guide",
            "Mobile-Optimized Campus Showcase"
        ],
        "image_gradient": "linear-gradient(135deg, #1d4ed8 0%, #0369a1 100%)",
        "accent_color": "#1d4ed8",
        "live_demo_url": "https://saroj-school.vercel.app"
    },
    {
        "id": "siddhivinayak-hotel",
        "title": "Hotel Siddhivinayak HMS & ERP",
        "industry": "Hospitality & Operations ERP",
        "category": "hospitality",
        "tier": "Tier 3 — Custom Cloud ERP",
        "tagline": "25 Room PMS, Banquet & Marriage Garden Operations Software",
        "client_location": "Rajasthan, India",
        "metrics": {
            "booking_increase": "₹27L+ Ledger",
            "google_reviews": "25 Rooms Managed",
            "page_load_speed": "0.3s Real-Time"
        },
        "description": "25-room hotel ERP with banquet scheduler, bilingual ledger, and WhatsApp payment reminders.",
        "points": [
            "25-room live room status & occupancy grid",
            "Marriage garden event ledger & cashflow P&L",
            "1-click WhatsApp payment reminders in Hindi & English"
        ],
        "deliverables": [
            "25-Room Interactive Live Board",
            "Banquet & Marriage Garden Event Scheduler",
            "Automated Cashflow & P&L Reports",
            "1-Click WhatsApp Takada / Payment Reminders"
        ],
        "image_gradient": "linear-gradient(135deg, #4f46e5 0%, #059669 100%)",
        "accent_color": "#4f46e5",
        "live_demo_url": "https://siddhivinayak-hotel.vercel.app"
    },
    {
        "id": "kaushal-refrigeration-interior",
        "title": "Kaushal Refrigeration & Interiors",
        "industry": "Commercial Refrigeration & Interiors",
        "category": "commercial",
        "tier": "Tier 2 — Premium",
        "tagline": "Heavy-Gauge SS 304 Commercial Bakery & Display Counters",
        "client_location": "Jaipur, Rajasthan",
        "metrics": {
            "booking_increase": "#1 Local SEO",
            "google_reviews": "30+ Yrs Legacy",
            "page_load_speed": "0.4s Fast CDN"
        },
        "description": "Commercial refrigeration catalog with local Google SEO schema and B2B WhatsApp quotation triggers.",
        "points": [
            "Heavy-duty commercial refrigerated counter catalog",
            "Deep local Google Maps SEO & technical schema",
            "Direct WhatsApp 1-click B2B quotation triggers"
        ],
        "deliverables": [
            "Commercial Catalog & Technical Specs",
            "Comprehensive AEO, GEO & Local SEO",
            "1-Click WhatsApp B2B Inquiry Triggers",
            "Custom Domain Production Architecture"
        ],
        "image_gradient": "linear-gradient(135deg, #0284c7 0%, #0f766e 100%)",
        "accent_color": "#0284c7",
        "live_demo_url": "https://kaushalrefrigerationandinterior.com"
    },
    {
        "id": "anupam-watch-center",
        "title": "Anupam Watch Center",
        "industry": "Luxury Retail & Watchmaking",
        "category": "retail",
        "tier": "Tier 1 — High-Speed Showcase",
        "tagline": "Chhindwara's Most Trusted Watch Store & Service Since 1976",
        "client_location": "Chhindwara, Madhya Pradesh",
        "metrics": {
            "booking_increase": "+160% Footfall",
            "google_reviews": "50+ Yrs Trust",
            "page_load_speed": "0.3s Ultralight"
        },
        "description": "Luxury watch retail storefront with horology catalog, warranty service booking, and Maps integration.",
        "points": [
            "Luxury timepiece catalog (Titan, Fastrack, Sonata)",
            "Official warranty & watch repair booking",
            "Direct Google Maps integration for store footfall"
        ],
        "deliverables": [
            "High-Resolution Timepiece Catalog",
            "Official Brand & Warranty Showcase",
            "Watch Repair Consultation Booking",
            "Direct Google Business Profile Integration"
        ],
        "image_gradient": "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)",
        "accent_color": "#b91c1c",
        "live_demo_url": "https://anupam-watch-center.vercel.app"
    },
    {
        "id": "home-decor-malhar",
        "title": "Malhar™ Handcrafted Decor & Furniture",
        "industry": "Artisan Decor & E-Commerce",
        "category": "retail",
        "tier": "Tier 2 — Aesthetic Catalog",
        "tagline": "Handcrafted Teakwood, Ceramics & Coastal Indian Home Decor",
        "client_location": "Ganpatipule, Konkan, Maharashtra",
        "metrics": {
            "booking_increase": "+130% Catalog Reach",
            "google_reviews": "100% Artisan",
            "page_load_speed": "0.5s Fast Image"
        },
        "description": "Artisan furniture & ceramics boutique with visual brand storytelling and direct WhatsApp ordering.",
        "points": [
            "Handcrafted teakwood furniture & ceramics catalog",
            "Artisan atelier brand storytelling experience",
            "Direct WhatsApp order inquiries & customer chat"
        ],
        "deliverables": [
            "Bespoke Earthy Minimalist UI",
            "High-Resolution Art & Furniture Gallery",
            "Storytelling Atelier Experience",
            "WhatsApp Instant Order & Inquiry Routing"
        ],
        "image_gradient": "linear-gradient(135deg, #78350f 0%, #b45309 100%)",
        "accent_color": "#78350f",
        "live_demo_url": "https://home-decor-seven-sandy.vercel.app"
    },
    {
        "id": "smart-health-welfare-foundation",
        "title": "Smart Health Welfare Foundation (SHWF)",
        "industry": "Healthcare Foundation & NGO",
        "category": "healthcare",
        "tier": "Tier 3 — Custom Web Portal",
        "tagline": "Grassroots School Health Camps & Pediatric Screenings (Govt Reg.)",
        "client_location": "Madhya Pradesh, India",
        "metrics": {
            "booking_increase": "10,000+ Students",
            "google_reviews": "Govt. Registered",
            "page_load_speed": "0.4s Fast PDF"
        },
        "description": "Healthcare NGO portal with school health camp management, WHO growth metrics, and PDF generation.",
        "points": [
            "School health camp screening management portal",
            "WHO child growth assessment & pediatric metrics",
            "Instant certified student health card PDF generator"
        ],
        "deliverables": [
            "Official Govt Reg. NGO Portal",
            "WHO Growth Assessment Calculator",
            "Parent OTP Report Card Portal",
            "Dynamic Certified Student Health Card PDF Generation"
        ],
        "image_gradient": "linear-gradient(135deg, #002868 0%, #1e40af 100%)",
        "accent_color": "#002868",
        "live_demo_url": "https://shwf-rho.vercel.app"
    }
]

@router.get("/portfolio")
@cached(ttl_seconds=600, key_prefix="portfolio")
async def get_portfolio(category: Optional[str] = None):
    """Retrieve agency portfolio case studies with optional industry filter."""
    if category and category.lower() != "all":
        filtered = [item for item in PORTFOLIO_CASE_STUDIES if item["category"].lower() == category.lower()]
        return {"count": len(filtered), "case_studies": filtered}
    return {"count": len(PORTFOLIO_CASE_STUDIES), "case_studies": PORTFOLIO_CASE_STUDIES}

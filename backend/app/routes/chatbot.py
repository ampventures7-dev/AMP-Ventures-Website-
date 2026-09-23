import re
from fastapi import APIRouter
from app.models import ChatbotRequest, ChatbotResponse
from app.services.llm import generate_ai_reply
from app.config import settings

router = APIRouter()

# Structured FAQ knowledge base for AMP Ventures (Instant, Accurate & Zero Cost)
FAQS = [
    {
        "keywords": ["founder", "owner", "ceo", "who are you", "who started", "who made", "leadership", "team", "credential", "qualification", "iit", "ccna", "lead architect", "kaun hai", "ankit", "bandewar", "mohit", "jangid", "prachi", "pawar"],
        "reply": "AMP Ventures was founded by **Ankit Bandewar, Mohit Jangid, and Prachi Pawar** — Technical Architects certified in **AI/ML from IIT Roorkee** and **Cisco CCNA Networking**.\n\nWe specialize in engineering high-converting digital storefronts, WhatsApp booking automations, and local Google SEO for physical offline businesses. Would you like to connect with the founders on WhatsApp?",
        "suggested_actions": ["Talk to Founders on WhatsApp", "View Service Packages", "Book Free Consultation"],
        "recommended_tier": "Tier 2 — Premium"
    },
    {
        "keywords": ["address", "location", "office", "where are you", "where is", "malad", "signet heights", "mumbai", "headquarter", "studio", "pata", "kahan"],
        "reply": "Our studio office is located at:\n**SIGNET HEIGHTS, Western Express Highway, Malad East, Mumbai, Maharashtra, India**.\n\nWe design, build, and deploy high-converting websites for clients in Mumbai, Delhi, Bengaluru, and nationwide.",
        "suggested_actions": ["Contact Owners on WhatsApp", "Schedule Studio Meeting", "Explore Packages"],
        "recommended_tier": None
    },
    {
        "keywords": ["contact", "phone", "email", "call", "whatsapp", "number", "reach", "connect", "mail", "sampark", "baat", "talk to human"],
        "reply": f"You can reach the owners and technical team directly through:\n• **WhatsApp**: [Click to Chat ({settings.WHATSAPP_NUMBER})](https://wa.me/{settings.WHATSAPP_NUMBER.replace('+', '')})\n• **Email**: ampventures7@gmail.com\n• **Studio**: SIGNET HEIGHTS, Western Express Highway, Malad East, Mumbai\n\nWe reply within minutes during business hours!",
        "suggested_actions": ["Open WhatsApp Chat", "Email Owners", "Book Free Consultation"],
        "recommended_tier": None
    },
    {
        "keywords": ["price", "cost", "pricing", "budget", "package", "how much", "rate", "fee", "tier", "kitna", "kitne", "daam", "kimat", "kharcha", "paise", "rupaye"],
        "reply": "AMP Ventures offers 3 transparent packages with 100% source code ownership:\n• **Tier 1 — Basic (₹14,999)**: 4-6 responsive pages, Google Maps & local SEO, 5-7 days delivery.\n• **Tier 2 — Premium (₹24,999)** [Most Popular]: Custom CMS (edit menus/prices yourself), Google Reviews sync, Analytics.\n• **Tier 3 — Next-Gen 3D & AI (₹49,999)**: 3D interactive hero, WhatsApp Business API auto-booking, AI chatbot.\n\nWould you like a tailored recommendation for your business?",
        "suggested_actions": ["Compare All 3 Tiers", "Check Digital Readiness Score", "Talk on WhatsApp"],
        "recommended_tier": "Tier 2 — Premium"
    },
    {
        "keywords": ["tier 1", "basic", "static"],
        "reply": "Our **Tier 1 — Basic** package (₹14,999) is ideal for businesses and professionals wanting a clean, fast online presence in 5-7 days. It includes:\n• 4–6 responsive pages\n• Google Business Profile link & Map sync\n• Contact form with instant email alerts\n• Free SSL & domain setup guidance\n• 100% code ownership.",
        "suggested_actions": ["Get Tier 1 Quote", "Compare with Tier 2"],
        "recommended_tier": "Tier 1 — Basic"
    },
    {
        "keywords": ["tier 2", "premium", "cms", "retainer"],
        "reply": "Our **Tier 2 — Premium** package (₹24,999) is our Most Popular choice! You get:\n• Everything in Basic\n• Lightweight custom CMS (update menus, prices & photos yourself with zero code)\n• Google Analytics & SEO tracking\n• Live Google Reviews sync widget\n• Optional monthly maintenance retainer.",
        "suggested_actions": ["Get Tier 2 Quote", "See Tier 3 Features"],
        "recommended_tier": "Tier 2 — Premium"
    },
    {
        "keywords": ["tier 3", "plus", "3d", "automation", "whatsapp api", "bot"],
        "reply": "Our **Tier 3 — Next-Gen 3D & AI** (₹49,999) gives physical businesses an unfair market advantage:\n• 3D interactive hero section (Three.js/Spline)\n• Embedded AI FAQ & lead capture chatbot\n• WhatsApp Business API automated booking & confirmations\n• Centralized lead management dashboard\n• Priority SLA support.",
        "suggested_actions": ["Request Tier 3 Demo", "Book Strategy Call"],
        "recommended_tier": "Tier 3 — Premium Plus"
    },
    {
        "keywords": ["timeline", "how long", "delivery", "duration", "fast", "days", "kitne din", "kab tak", "time kitna"],
        "reply": "Our delivery timelines:\n• **Tier 1 (Basic)**: 5–7 business days\n• **Tier 2 (Premium)**: 10–14 business days\n• **Tier 3 (3D & AI)**: 14–21 business days\n\nWe start with a quick discovery scoping call and handle all copy and setup for you.",
        "suggested_actions": ["Book Discovery Call", "Start Contact Form"],
        "recommended_tier": None
    },
    {
        "keywords": ["salon", "spa", "clinic", "doctor", "restaurant", "cafe", "retail", "shop", "gym", "boutique", "industry", "niche", "business"],
        "reply": "We engineer websites for businesses across all niches:\n• **Services & Consultancies**: Online bookings, lead captures & client portals\n• **Retail & E-commerce**: Visual catalogs, fast checkouts & WhatsApp inquiries\n• **Hospitality & Clinics**: Direct reservations, menus & Google Maps dominance\n• **Custom Niches**: Tailored fullstack solutions built to your exact workflows.",
        "suggested_actions": ["Calculate Readiness Score", "Talk on WhatsApp"],
        "recommended_tier": "Tier 2 — Premium"
    },
    {
        "keywords": ["ownership", "source code", "rent", "subscription", "recurring", "monthly fee", "wix", "shopify"],
        "reply": "Unlike platforms that charge monthly rent forever, AMP Ventures provides **100% full source code and database ownership**. There are **zero recurring monthly software rent fees**. You own your digital assets completely.",
        "suggested_actions": ["View Pricing Breakdown", "Talk on WhatsApp"],
        "recommended_tier": None
    },
    {
        "keywords": ["hindi", "hindi me", "madad", "sahayata", "namaste", "kaise ho"],
        "reply": "नमस्ते! 🙏 जी हाँ, हम हिंदी (Hindi) और English दोनों में आपकी पूरी सहायता करते हैं। आप किसी भी बिज़नेस या इंडस्ट्री के लिए वेबसाइट बनवाने के बारे में कोई भी सवाल पूछ सकते हैं।",
        "suggested_actions": ["View Pricing Breakdown", "Talk on WhatsApp"],
        "recommended_tier": None
    },
    {
        "keywords": ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening", "halo"],
        "reply": "Hello! 👋 Welcome to **AMP Ventures**. I can help you select website packages (starting at ₹14,999), check 5-day delivery timelines, explore WhatsApp booking automations, or connect with our leadership.\n\nWhat would you like to know?",
        "suggested_actions": ["View Pricing Breakdown", "Who are the founders?", "Talk on WhatsApp"],
        "recommended_tier": None
    }
]

def check_faq_match(user_msg: str):
    """Accurately match user query against keyword and phrase patterns."""
    for faq in FAQS:
        for kw in faq["keywords"]:
            if " " in kw:
                if kw in user_msg:
                    return faq
            else:
                if re.search(rf"\b{re.escape(kw)}", user_msg):
                    return faq
    return None

@router.post("/chatbot", response_model=ChatbotResponse)
async def chat_with_bot(payload: ChatbotRequest):
    """
    Context-aware AI Chatbot endpoint for prospective clients.
    1. Checks fast keyword & FAQ matches first.
    2. Falls back to OpenAI / Gemini LLM if API key is provided.
    3. If answer is not available, gently answers that info is unavailable
       and provides direct owner contact details.
    """
    user_msg = payload.message.lower().strip()
    
    # 1. Fast match against structured knowledge base
    matched_faq = check_faq_match(user_msg)
    if matched_faq:
        return ChatbotResponse(
            reply=matched_faq["reply"],
            suggested_actions=matched_faq["suggested_actions"],
            recommended_tier=matched_faq.get("recommended_tier")
        )
            
    # 2. Try LLM API (OpenAI / Gemini)
    llm_reply = await generate_ai_reply(payload.message, payload.history)
    if llm_reply:
        return ChatbotResponse(
            reply=llm_reply,
            suggested_actions=["Book a Consultation", "Check Pricing", "Talk on WhatsApp"],
            recommended_tier="Tier 2 — Premium"
        )
            
    # 3. Gentle fallback if answer is not available
    return ChatbotResponse(
        reply="I do not have this information at the moment. For more detailed information, please contact the owners directly via WhatsApp at +91 70003 84330 or email at ampventures7@gmail.com.",
        suggested_actions=["Contact Owners on WhatsApp", "Email Owners", "View Service Packages"],
        recommended_tier="Tier 2 — Premium"
    )

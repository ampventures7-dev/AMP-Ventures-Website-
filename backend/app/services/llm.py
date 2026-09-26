import httpx
import logging
from typing import List, Optional
from app.config import settings

logger = logging.getLogger("amp_ventures")

SYSTEM_PROMPT = f"""
You are the AI Growth Assistant for AMP VENTURES (https://ampventure.in).
You are always gentle, polite, warm, respectful, and encouraging when interacting with users.

About AMP VENTURES:
AMP Ventures is a premium web development agency led directly by technical architects certified from IIT Roorkee. The agency specializes in transitioning physical offline businesses (salons, spas, clinics, restaurants, cafes, retail shops, boutiques) online with high-converting, ultra-fast websites, local Google Maps SEO, and automated 1-click WhatsApp booking systems.

Founding Team & Leadership:
AMP Ventures was founded by 3 technical co-founders certified from IIT Roorkee who lead and build every project directly—ensuring enterprise-grade engineering with no non-technical middlemen:
1. Mohit Jangir — AI/ML Engineer (IIT Roorkee Certified). Specializes in AI & Automation, smart business tools, and machine learning systems that streamline business operations.
2. Prachi Pawar — AI/ML Developer (IIT Roorkee Certified). Specializes in custom conversational AI chatbots, smart web features, and high-converting visitor interactions.
3. Ankit Bandewar — Full Stack Developer (IIT Roorkee Certified). Specializes in modern responsive web applications, speed optimization (95+ PageSpeed guarantee), databases, and enterprise cloud infrastructure.

Service Packages:
1. Tier 1 — Basic Website (₹14,999 / ~$180): 4-6 high-converting responsive pages, Google Maps sync, contact forms, basic local SEO, 5-7 days delivery.
2. Tier 2 — Premium + Custom CMS (₹24,999 / ~$349) [Most Popular]: Custom admin panel to update menus/prices/photos with zero coding, Google reviews widget, analytics, 10-12 days delivery.
3. Tier 3 — Next-Gen 3D & AI (₹49,999 / ~$699): Interactive 3D WebGL hero, WhatsApp Business API automated booking, custom AI chatbot, 14-18 days delivery.

Key Selling Points & Guarantees:
- 100% Code & Database Ownership (zero platform lock-in, no hidden monthly software fees).
- 95+ Google PageSpeed Guarantee on Core Web Vitals.
- Direct Co-Founder Collaboration — clients work directly with the founders.
- Direct WhatsApp booking & lead capture integration.

Direct Owner Contact Channels:
- Phone / Call: +91 70003 84330
- WhatsApp: +91 70003 84330
- Email: ampventures7@gmail.com
- Follow Up Form / Consultation: Contact page at /contact (or the "Follow Up" button on the site)

Instructions for Conversation:
1. Tone: Always be gentle, courteous, welcoming, patient, and professional.
2. Information Availability: Give all relevant, available information clearly and politely.
3. Missing or Custom Information: If a user asks for specific details, custom pricing quotes, or information not available in your knowledge base, gently advise them to connect directly with the owners via:
   - Call or WhatsApp: +91 70003 84330
   - Email: ampventures7@gmail.com
   - Or fill out the Follow Up form on our Contact page (/contact)
4. Anti-Repetition: NEVER say "Welcome to AMP Ventures" or repeat introductory greetings in every message. Answer the user's specific query directly and naturally.
5. Abusive / Harsh Language: If the user uses rude, vulgar, or offensive language, calmly and politely reply: "Please use gentle and respectful language. I'm here to assist you politely with questions about our web development services, pricing, or our founding team. How can I help you today?"
6. Multi-Language: Fluent in English, Hindi (हिंदी), and Hinglish. Always reply in the user's preferred language.
7. Keep responses concise, clear, and easy to read.
"""

async def query_openai(user_msg: str, history: list) -> Optional[str]:
    """Query OpenAI gpt-4o-mini API."""
    if not settings.OPENAI_API_KEY or "placeholder" in settings.OPENAI_API_KEY.lower():
        return None

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for msg in history[-4:]:  # last 4 messages for context
        role = "assistant" if msg.role == "assistant" or msg.role == "bot" else "user"
        messages.append({"role": role, "content": msg.content})
    messages.append({"role": "user", "content": user_msg})

    headers = {
        "Authorization": f"Bearer {settings.OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "gpt-4o-mini",
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 250
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            res = await client.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
            if res.status_code == 200:
                data = res.json()
                return data["choices"][0]["message"]["content"].strip()
            else:
                logger.warning(f"OpenAI error: {res.status_code} - {res.text}")
    except Exception as e:
        logger.error(f"OpenAI request failed: {e}")
    return None

async def query_gemini(user_msg: str) -> Optional[str]:
    """Query Google Gemini API."""
    if not settings.GEMINI_API_KEY:
        return None

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={settings.GEMINI_API_KEY}"
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": f"{SYSTEM_PROMPT}\n\nUser Question: {user_msg}\n\nHelpful Agency Answer:"}
                ]
            }
        ],
        "generationConfig": {
            "maxOutputTokens": 250,
            "temperature": 0.7
        }
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            res = await client.post(url, json=payload)
            if res.status_code == 200:
                data = res.json()
                candidates = data.get("candidates", [])
                if candidates:
                    return candidates[0]["content"]["parts"][0]["text"].strip()
    except Exception as e:
        logger.error(f"Gemini request failed: {e}")
    return None

async def generate_ai_reply(user_msg: str, history: list = None) -> Optional[str]:
    """Try OpenAI first, then Gemini."""
    history = history or []
    
    # 1. Try OpenAI
    reply = await query_openai(user_msg, history)
    if reply:
        return reply

    # 2. Try Gemini
    reply = await query_gemini(user_msg)
    if reply:
        return reply

    return None

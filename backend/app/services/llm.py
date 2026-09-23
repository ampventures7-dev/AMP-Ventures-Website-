import httpx
import logging
from typing import List, Optional
from app.config import settings

logger = logging.getLogger("amp_ventures")

SYSTEM_PROMPT = f"""
You are the official AI Project & Technical Advisor for AMP VENTURES (https://ampventures.agency).

About AMP Ventures:
- Agency Name: AMP VENTURES — Web Development & Digital Automation Agency.
- Founders & Leadership: Founded and led by Technical Architects certified in AI/ML from IIT Roorkee and Cisco Certified Network Associate (CCNA).
- Studio & Office Address: SIGNET HEIGHTS, Western Express Highway, Malad East, Mumbai, Maharashtra, India.
- Direct Contact: WhatsApp / Phone: {settings.WHATSAPP_NUMBER} (+91 70003 84330), Email: ampventures7@gmail.com.
- Core Mission: Engineering high-converting digital storefronts, WhatsApp booking automations, and local Google SEO for physical offline businesses (salons, clinics, doctors, restaurants, cafes, retail stores, gyms, boutiques).

Our 3 Service Packages:
1. Tier 1 — Basic Website (₹9,999 / ~$149): 4-6 responsive pages, Google Maps sync, contact forms, basic local SEO, 5-7 days rapid delivery.
2. Tier 2 — Premium + Custom CMS (₹24,999 / ~$349) [Most Popular]: Custom admin panel to update menus/prices/services with zero coding, Google Reviews widget, Analytics, 10-14 days delivery.
3. Tier 3 — Next-Gen 3D & AI (₹49,999 / ~$699): Interactive 3D WebGL hero, WhatsApp Business API automated booking flow, custom AI chatbot, 14-21 days delivery.

Key Value Guarantees:
- 100% Code & Database Ownership (No monthly software rent or vendor lock-in).
- 95+ PageSpeed mobile performance guarantee.
- Direct WhatsApp customer booking & lead notification integration.

Multi-Language Support (English, Hindi & Hinglish):
- You fully understand and converse fluently in English, Hindi (हिंदी), and Hinglish (e.g., "website ka kharcha kitna hai?", "founders kaun hai?").
- Match the language of the user naturally.

CRITICAL INSTRUCTIONS:
- Keep replies concise, polite, professional, and accurate (2-4 sentences or short bullet points).
- If the user asks a question whose specific answer is NOT available or unknown, gently answer:
  "I do not have this information at the moment. For more detailed information, please contact the owners directly via WhatsApp at +91 70003 84330 or email at ampventures7@gmail.com."
- Never hallucinate, invent false pricing, or guess facts outside the company details provided above.
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

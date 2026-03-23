import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  messages: ChatMessage[]
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600_000 }) // 1 hour window
    return false
  }

  entry.count++
  return entry.count > 30 // 30 requests per hour
}

export default defineEventHandler(async (event) => {
  const ip = event.node.req.headers['x-forwarded-for'] as string || 'unknown'

  if (isRateLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests. Please try again later.' })
  }

  const config = useRuntimeConfig()
  const apiKey = config.anthropicApiKey

  if (!apiKey) {
    throw createError({ statusCode: 500, statusMessage: 'API key not configured' })
  }

  const body = await readBody<ChatRequest>(event)

  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Messages array is required' })
  }

  // Limit conversation history to last 10 messages
  const recentMessages = body.messages.slice(-10)

  const systemPrompt = `Tu es l'assistant virtuel de Jean-Philippe Perron, développeur web full-stack et spécialiste en automatisation IA basé à Jonquière, Canada.

TON RÔLE :
- Répondre aux questions des visiteurs sur les services de Jean-Philippe
- Aider les clients potentiels à comprendre comment l'IA et le développement web peuvent les aider
- Qualifier les leads et encourager la prise de contact

SERVICES OFFERTS :
1. Développement Web Full-Stack (Vue.js, Nuxt, React, Laravel, Node.js)
2. Automatisation IA (chatbots, workflows intelligents, intégration d'APIs IA)
3. Consultation en stratégie IA pour entreprises
4. Intégration de solutions IA dans des systèmes existants

INFORMATIONS :
- Email : jpperron123@gmail.com
- Localisation : Jonquière, QC, Canada
- Langues : Français et Anglais
- Disponible pour des projets freelance et contrats

RÈGLES :
- Réponds dans la langue utilisée par le visiteur (français ou anglais)
- Sois professionnel mais amical
- Garde tes réponses courtes et utiles (2-3 phrases max)
- Si on te demande un prix, donne une fourchette générale et suggère de contacter Jean-Philippe pour un devis précis
- Ne partage jamais d'informations personnelles au-delà de ce qui est listé ci-dessus
- Si tu ne sais pas quelque chose, dis-le honnêtement et suggère de contacter Jean-Philippe directement`

  try {
    const response = await $fetch<{
      content: { type: string; text: string }[]
    }>('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: {
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: systemPrompt,
        messages: recentMessages,
      },
    })

    return {
      reply: response.content[0]?.text || '',
    }
  } catch (err: unknown) {
    const error = err as { statusCode?: number; data?: { error?: { message?: string } } }
    console.error('Anthropic API error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.data?.error?.message || 'Failed to get AI response',
    })
  }
})

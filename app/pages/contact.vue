<template>
  <div ref="pageRef" class="py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'get_in_touch', fr: 'me_contacter' }) }}</p>
        <h1 class="section-title">{{ t({ en: "Let's Work Together", fr: 'Travaillons ensemble' }) }}</h1>
        <p class="section-subtitle mx-auto">
          {{ t({
            en: "Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.",
            fr: "Vous avez un projet en tête ? J'adorerais en entendre parler. Envoyez-moi un message et je vous répondrai dès que possible."
          }) }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Contact Form -->
        <div class="lg:col-span-3 reveal">
          <form @submit.prevent="handleSubmit" class="glass-card space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Name', fr: 'Nom' }) }}</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  :placeholder="t({ en: 'Your name', fr: 'Votre nom' })"
                  class="input-field"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Email', fr: 'Courriel' }) }}</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  :placeholder="t({ en: 'you@example.com', fr: 'vous@exemple.com' })"
                  class="input-field"
                  required
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Subject', fr: 'Sujet' }) }}</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                :placeholder="t({ en: 'What\'s this about?', fr: 'De quoi s\'agit-il ?' })"
                class="input-field"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-primary-300 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                :placeholder="t({ en: 'Tell me about your project...', fr: 'Parlez-moi de votre projet...' })"
                class="input-field resize-none"
                required
              />
            </div>

            <button
              type="submit"
              class="btn-primary w-full justify-center"
              :class="{ 'opacity-75 cursor-not-allowed': submitted }"
              :disabled="submitted"
            >
              <template v-if="!submitted">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {{ t({ en: 'Send Message', fr: 'Envoyer le message' }) }}
              </template>
              <template v-else>
                <svg class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ t({ en: 'Message Sent!', fr: 'Message envoyé !' }) }}
              </template>
            </button>

            <p v-if="submitted" class="text-center text-primary-400 text-sm">
              {{ t({
                en: "Thank you! I'll get back to you soon. You can also reach me directly at",
                fr: 'Merci ! Je vous répondrai bientôt. Vous pouvez aussi me joindre directement à'
              }) }}
              <a href="mailto:jpperron123@gmail.com" class="text-accent hover:text-accent-light transition-colors">
                jpperron123@gmail.com
              </a>
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-2 space-y-6 reveal-right">
          <!-- Email -->
          <div class="glass-card">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-primary-400">{{ t({ en: 'Email', fr: 'Courriel' }) }}</p>
                <a href="mailto:jpperron123@gmail.com" class="text-white hover:text-accent transition-colors font-medium">
                  jpperron123@gmail.com
                </a>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="glass-card">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-primary-400">{{ t({ en: 'Location', fr: 'Emplacement' }) }}</p>
                <p class="text-white font-medium">Jonquière, QC, Canada</p>
              </div>
            </div>
          </div>

          <!-- Languages -->
          <div class="glass-card">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <p class="text-sm text-primary-400">{{ t({ en: 'Languages', fr: 'Langues' }) }}</p>
                <p class="text-white font-medium">{{ t({ en: 'French & English', fr: 'Français & Anglais' }) }}</p>
              </div>
            </div>
          </div>

          <!-- GitHub -->
          <div class="glass-card">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-primary-400">GitHub</p>
                <a href="https://github.com/jpperron123" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors font-medium">
                  jpperron123
                </a>
              </div>
            </div>
          </div>

          <!-- Availability -->
          <div class="glass-card">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center shrink-0">
                <span class="w-3 h-3 rounded-full bg-success animate-pulse" />
              </div>
              <div>
                <p class="text-sm text-primary-400">{{ t({ en: 'Status', fr: 'Statut' }) }}</p>
                <p class="text-success font-medium">{{ t({ en: 'Available for projects', fr: 'Disponible pour des projets' }) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLocale()

useHead({
  title: 'Contact — Jean-Philippe Perron',
  meta: [
    { name: 'description', content: 'Get in touch with Jean-Philippe Perron — Full-Stack Developer & AI Automation Specialist.' },
  ],
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  // Frontend-only: open mailto link with form data
  const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
  const body = encodeURIComponent(
    `Hi Jean-Philippe,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )
  window.open(`mailto:jpperron123@gmail.com?subject=${subject}&body=${body}`, '_blank')
  submitted.value = true
}

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

onMounted(() => {
  revealAll(pageRef.value)
})
</script>

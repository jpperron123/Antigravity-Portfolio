<template>
  <div ref="pageRef">
    <!-- Hero Section -->
    <section class="min-h-[90vh] flex items-center relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <p class="text-accent font-mono text-sm mb-6 animate-fade-in">
            {{ t({ en: '// hello_world', fr: '// bonjour_monde' }) }}
          </p>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
            {{ t({ en: "Hi, I'm", fr: 'Bonjour, je suis' }) }}
            <span class="gradient-text whitespace-nowrap">Jean-Philippe</span>
            <span class="block">Perron</span>
          </h1>

          <h2 class="text-xl md:text-2xl text-primary-300 mb-8 animate-fade-up" style="animation-delay: 0.2s">
            {{ t({
              en: 'Full-Stack Web Developer & AI Automation Specialist',
              fr: 'Développeur Web Full-Stack & Spécialiste en automatisation IA'
            }) }}
          </h2>

          <p class="text-primary-400 text-lg leading-relaxed mb-10 max-w-2xl animate-fade-up" style="animation-delay: 0.3s">
            {{ t({
              en: 'Bilingual (FR/EN) developer based in Jonquière, Canada. I craft modern web experiences and build intelligent automation workflows that transform how businesses operate.',
              fr: 'Développeur bilingue (FR/EN) basé à Jonquière, Canada. Je crée des expériences web modernes et développe des flux d\'automatisation intelligents qui transforment le fonctionnement des entreprises.'
            }) }}
          </p>

          <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay: 0.4s">
            <NuxtLink to="/projects" class="btn-primary">
              {{ t({ en: 'View Projects', fr: 'Voir les projets' }) }}
            </NuxtLink>
            <NuxtLink to="/contact" class="px-6 py-3 rounded-xl border border-primary-700 text-primary-300 hover:text-white hover:border-primary-500 transition-all duration-300 flex items-center gap-2 font-medium">
              {{ t({ en: 'Get in Touch', fr: 'Me contacter' }) }}
            </NuxtLink>
            <a
              href="https://github.com/jpperron123"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-3 rounded-xl border border-primary-700 text-primary-300 hover:text-white hover:border-primary-500 transition-all duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800/30 to-primary-900" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <p class="text-accent font-mono text-sm mb-3">
            {{ t({ en: '// what_i_do', fr: '// mes_compétences' }) }}
          </p>
          <h2 class="section-title">{{ t({ en: 'Skills & Expertise', fr: 'Compétences & Expertise' }) }}</h2>
          <p class="section-subtitle mx-auto">
            {{ t({
              en: 'A versatile tech stack spanning frontend, backend, and AI automation',
              fr: 'Une stack technologique polyvalente couvrant le frontend, le backend et l\'automatisation IA'
            }) }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <div v-for="category in skills.categories" :key="category.name.en" class="glass-card">
            <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
              <span class="text-xl">{{ category.icon }}</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ t(category.name) }}</h3>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="skill in category.skills" :key="skill" class="tech-badge">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2 class="section-title">{{ t({ en: "Let's Build Something Amazing", fr: 'Construisons quelque chose d\'incroyable' }) }}</h2>
        <p class="section-subtitle mx-auto mb-10">
          {{ t({
            en: 'Looking for a full-stack developer with AI automation expertise? Let\'s discuss your project.',
            fr: 'Vous cherchez un développeur full-stack avec une expertise en automatisation IA ? Discutons de votre projet.'
          }) }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary">
            {{ t({ en: 'Start a Conversation', fr: 'Démarrer une conversation' }) }}
          </NuxtLink>
          <NuxtLink to="/about" class="px-6 py-3 rounded-xl border border-primary-700 text-primary-300 hover:text-white hover:border-primary-500 transition-all duration-300 font-medium">
            {{ t({ en: 'Learn More About Me', fr: 'En savoir plus sur moi' }) }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import skills from '~/content/skills.json'

const { t } = useLocale()

useHead({
  title: 'Jean-Philippe Perron — Full-Stack Developer & AI Specialist',
  meta: [
    { name: 'description', content: 'Bilingual Full-Stack Web Developer & AI Automation Specialist.' },
  ],
})

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

onMounted(() => {
  revealAll(pageRef.value)
})
</script>

<template>
  <footer class="border-t border-primary-800/50 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span class="text-accent font-bold text-lg font-mono">JP</span>
            </div>
            <div>
              <p class="font-semibold text-white">Jean-Philippe Perron</p>
              <p class="text-sm text-primary-400">{{ t({ en: 'Full-Stack Developer & AI Specialist', fr: 'Développeur Full-Stack & Spécialiste IA' }) }}</p>
            </div>
          </div>
          <p class="text-primary-400 text-sm leading-relaxed">
            {{ t({
              en: 'Building modern web experiences with cutting-edge technologies and AI-powered automation.',
              fr: 'Création d\'expériences web modernes avec des technologies de pointe et l\'automatisation propulsée par l\'IA.'
            }) }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-primary-300 uppercase tracking-wider mb-4">Navigation</h3>
          <div class="flex flex-col gap-2">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="text-primary-400 hover:text-accent transition-colors text-sm"
            >
              {{ t(link.label) }}
            </NuxtLink>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold text-primary-300 uppercase tracking-wider mb-4">{{ t({ en: 'Get in Touch', fr: 'Me contacter' }) }}</h3>
          <div class="flex flex-col gap-2">
            <a
              href="mailto:jpperron123@gmail.com"
              class="text-primary-400 hover:text-accent transition-colors text-sm flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jpperron123@gmail.com
            </a>
            <span class="text-primary-400 text-sm flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jonquière, QC, Canada
            </span>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-primary-800/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-primary-500 text-sm">
          &copy; {{ currentYear }} Jean-Philippe Perron. {{ t({ en: 'All rights reserved.', fr: 'Tous droits réservés.' }) }}
        </p>
        <p class="text-primary-600 text-xs">
          {{ t({ en: 'Built with', fr: 'Construit avec' }) }} Nuxt 3 + Vue 3 + Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useLocale()
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: { en: 'Home', fr: 'Accueil' }, path: '/' },
  { label: { en: 'About', fr: 'À propos' }, path: '/about' },
  { label: { en: 'Projects', fr: 'Projets' }, path: '/projects' },
  { label: { en: 'Experience', fr: 'Expérience' }, path: '/experience' },
  { label: { en: 'Contact', fr: 'Contact' }, path: '/contact' },
]
</script>

<template>
  <div ref="pageRef">
    <!-- Hero -->
    <section class="py-24 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'about_me', fr: 'à_propos' }) }}</p>
            <h1 class="section-title">
              {{ t({ en: 'Building the Web with', fr: 'Construire le Web avec' }) }}
              <span class="gradient-text">{{ t({ en: 'Passion & Precision', fr: 'Passion & Précision' }) }}</span>
            </h1>
            <p class="text-primary-300 text-lg leading-relaxed mb-6">
              {{ t({
                en: "I'm Jean-Philippe Perron, a bilingual (French/English) Full-Stack Web Developer and AI Automation Specialist based in Jonquière, Quebec. With a strong foundation in modern web technologies and a growing expertise in AI-driven solutions, I help businesses transform their digital presence.",
                fr: "Je suis Jean-Philippe Perron, un développeur Web Full-Stack bilingue (français/anglais) et spécialiste en automatisation IA basé à Jonquière, Québec. Avec une solide base en technologies web modernes et une expertise croissante en solutions propulsées par l'IA, j'aide les entreprises à transformer leur présence numérique."
              }) }}
            </p>
            <p class="text-primary-400 leading-relaxed">
              {{ t({
                en: "My journey from technical support at CGI to telecommunications at Sûreté du Québec, and finally to full-stack development at Webrio, has given me a unique perspective on building technology that truly serves people. I combine technical excellence with a deep understanding of user needs and business goals.",
                fr: "Mon parcours du support technique chez CGI aux télécommunications à la Sûreté du Québec, et finalement au développement full-stack chez Webrio, m'a donné une perspective unique sur la création de technologies qui servent véritablement les gens. Je combine l'excellence technique avec une compréhension approfondie des besoins utilisateurs et des objectifs d'affaires."
              }) }}
            </p>
          </div>

          <!-- Profile Card -->
          <div class="reveal-right">
            <div class="glass-card relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div class="relative">
                <div class="w-24 h-24 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6">
                  <span class="text-accent font-bold text-3xl font-mono">JP</span>
                </div>
                <h2 class="text-xl font-bold text-white mb-1">Jean-Philippe Perron</h2>
                <p class="text-accent-light font-medium mb-4">{{ t({ en: 'Full-Stack Developer & AI Specialist', fr: 'Développeur Full-Stack & Spécialiste IA' }) }}</p>
                
                <div class="space-y-3 text-sm">
                  <div class="flex items-center gap-3 text-primary-300">
                    <svg class="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Jonquière, QC, Canada
                  </div>
                  <div class="flex items-center gap-3 text-primary-300">
                    <svg class="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {{ t({ en: 'Bilingual: French & English', fr: 'Bilingue : Français & Anglais' }) }}
                  </div>
                  <div class="flex items-center gap-3 text-primary-300">
                    <svg class="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    jpperron123@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800/30 to-primary-900" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'my_approach', fr: 'mon_approche' }) }}</p>
          <h2 class="section-title">{{ t({ en: 'Values & Philosophy', fr: 'Valeurs & Philosophie' }) }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          <div class="glass-card text-center">
            <div class="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ t({ en: 'Performance First', fr: 'Performance d\'abord' }) }}</h3>
            <p class="text-primary-400 text-sm">
              {{ t({
                en: 'Every line of code is written with performance in mind. Fast load times, smooth interactions, and optimized workflows are non-negotiable.',
                fr: 'Chaque ligne de code est écrite avec la performance en tête. Des temps de chargement rapides, des interactions fluides et des flux de travail optimisés sont non-négociables.'
              }) }}
            </p>
          </div>

          <div class="glass-card text-center">
            <div class="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ t({ en: 'Clean Architecture', fr: 'Architecture propre' }) }}</h3>
            <p class="text-primary-400 text-sm">
              {{ t({
                en: 'Maintainable, well-documented code that your team can understand and extend. I build solutions that scale with your business.',
                fr: 'Du code maintenable et bien documenté que votre équipe peut comprendre et étendre. Je construis des solutions qui évoluent avec votre entreprise.'
              }) }}
            </p>
          </div>

          <div class="glass-card text-center">
            <div class="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ t({ en: 'AI-Forward Thinking', fr: 'Pensée orientée IA' }) }}</h3>
            <p class="text-primary-400 text-sm">
              {{ t({
                en: 'Leveraging AI and automation to eliminate repetitive tasks and create smarter, more efficient workflows for modern businesses.',
                fr: 'Exploiter l\'IA et l\'automatisation pour éliminer les tâches répétitives et créer des flux de travail plus intelligents et efficaces pour les entreprises modernes.'
              }) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal">
          <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'education', fr: 'formation' }) }}</p>
          <h2 class="section-title">{{ t({ en: 'Academic Background', fr: 'Formation académique' }) }}</h2>
        </div>

        <div class="max-w-2xl mx-auto reveal">
          <div class="glass-card">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zM12 14v7" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">{{ t({ en: 'AEC in Web Application Development', fr: 'AEC en développement d\'applications Web' }) }}</h3>
                <p class="text-accent-light">Cégep de Shawinigan</p>
                <p class="text-primary-400 text-sm mt-1">{{ t({ en: 'Graduated 2023', fr: 'Diplômé 2023' }) }}</p>
                <p class="text-primary-400 text-sm mt-3">
                  {{ t({
                    en: 'Intensive program covering modern web development practices including frontend frameworks, backend development, database management, and deployment strategies.',
                    fr: 'Programme intensif couvrant les pratiques modernes de développement web incluant les frameworks frontend, le développement backend, la gestion de bases de données et les stratégies de déploiement.'
                  }) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useLocale()

useHead({
  title: 'About — Jean-Philippe Perron',
  meta: [
    { name: 'description', content: 'Learn about Jean-Philippe Perron — Bilingual Full-Stack Developer & AI Automation Specialist based in Jonquière, Canada.' },
  ],
})

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

onMounted(() => {
  revealAll(pageRef.value)
})
</script>

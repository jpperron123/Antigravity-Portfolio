<template>
  <div ref="pageRef" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'my_work', fr: 'mes_projets' }) }}</p>
        <h1 class="section-title">{{ t({ en: 'Projects', fr: 'Projets' }) }}</h1>
        <p class="section-subtitle mx-auto">
          {{ t({
            en: 'A selection of projects I\'ve worked on, showcasing my expertise across different technologies.',
            fr: 'Une sélection de projets sur lesquels j\'ai travaillé, démontrant mon expertise à travers différentes technologies.'
          }) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        <NuxtLink
          v-for="project in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="glass-card group cursor-pointer block"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
              {{ project.category }}
            </span>
            <span class="text-primary-500 text-xs">{{ project.year }}</span>
          </div>

          <h3 class="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
            {{ t(project.title) }}
          </h3>

          <p class="text-primary-400 text-sm mb-4 line-clamp-2">
            {{ t(project.description) }}
          </p>

          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.tech.slice(0, 4)"
              :key="tech"
              class="tech-badge text-[10px]"
            >
              {{ tech }}
            </span>
            <span v-if="project.tech.length > 4" class="tech-badge text-[10px]">
              +{{ project.tech.length - 4 }}
            </span>
          </div>

          <div class="mt-4 flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {{ t({ en: 'View Details', fr: 'Voir les détails' }) }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLocale()
const { projects } = useProjects()

useHead({
  title: 'Projects — Jean-Philippe Perron',
  meta: [
    { name: 'description', content: 'Portfolio projects by Jean-Philippe Perron — Full-Stack Developer & AI Automation Specialist.' },
  ],
})

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

onMounted(() => {
  revealAll(pageRef.value)
})
</script>

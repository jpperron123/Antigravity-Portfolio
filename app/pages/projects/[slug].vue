<template>
  <div ref="pageRef" class="py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->
      <NuxtLink
        to="/projects"
        class="inline-flex items-center gap-2 text-primary-400 hover:text-accent transition-colors mb-8 reveal"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        {{ t({ en: 'Back to Projects', fr: 'Retour aux projets' }) }}
      </NuxtLink>

      <template v-if="project">
        <!-- Header -->
        <div class="mb-12 reveal">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
              {{ project.category }}
            </span>
            <span class="text-primary-500 text-sm">{{ project.year }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
            {{ t(project.title) }}
          </h1>
          <p class="text-primary-300 text-lg leading-relaxed">
            {{ t(project.description) }}
          </p>
        </div>

        <!-- Project Details Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-children">
          <!-- Role -->
          <div class="glass-card">
            <h3 class="text-sm font-mono text-accent mb-3">// {{ t({ en: 'role', fr: 'rôle' }) }}</h3>
            <p class="text-white font-medium">{{ t(project.role) }}</p>
          </div>

          <!-- Tech Stack -->
          <div class="glass-card">
            <h3 class="text-sm font-mono text-accent mb-3">// {{ t({ en: 'tech_stack', fr: 'technologies' }) }}</h3>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.tech" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="glass-card mb-12 reveal">
          <h3 class="text-sm font-mono text-accent mb-4">// {{ t({ en: 'key_features', fr: 'fonctionnalités_clés' }) }}</h3>
          <ul class="space-y-3">
            <li
              v-for="(feature, index) in tArray(project.features)"
              :key="index"
              class="flex items-start gap-3 text-primary-300"
            >
              <svg class="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="text-center reveal">
          <p class="text-primary-400 mb-4">{{ t({ en: 'Interested in a similar project?', fr: 'Intéressé par un projet similaire ?' }) }}</p>
          <NuxtLink to="/contact" class="btn-primary">
            {{ t({ en: "Let's Discuss", fr: 'Discutons-en' }) }}
          </NuxtLink>
        </div>
      </template>

      <!-- Not Found -->
      <div v-else class="text-center py-24 reveal">
        <h2 class="text-2xl font-bold text-white mb-4">{{ t({ en: 'Project Not Found', fr: 'Projet non trouvé' }) }}</h2>
        <p class="text-primary-400 mb-8">{{ t({ en: "The project you're looking for doesn't exist.", fr: "Le projet que vous recherchez n'existe pas." }) }}</p>
        <NuxtLink to="/projects" class="btn-primary">
          {{ t({ en: 'View All Projects', fr: 'Voir tous les projets' }) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, tArray } = useLocale()
const { getProject } = useProjects()

const route = useRoute()
const slug = route.params.slug as string

const project = getProject(slug)

useHead({
  title: project
    ? `${t(project.title)} — Jean-Philippe Perron`
    : 'Project Not Found — Jean-Philippe Perron',
})

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

onMounted(() => {
  revealAll(pageRef.value)
})
</script>

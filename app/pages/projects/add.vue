<template>
  <PasswordGate>
    <div ref="pageRef" class="py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 reveal">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 text-primary-400 hover:text-accent transition-colors mb-6"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {{ t({ en: 'Back to Projects', fr: 'Retour aux projets' }) }}
          </NuxtLink>

          <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'admin', fr: 'administration' }) }}</p>
          <h1 class="section-title">{{ t({ en: 'Add a Project', fr: 'Ajouter un projet' }) }}</h1>
          <p class="section-subtitle">
            {{ t({
              en: 'Fill in the details below to add a new project to your portfolio.',
              fr: 'Remplissez les détails ci-dessous pour ajouter un nouveau projet à votre portfolio.'
            }) }}
          </p>
        </div>

        <!-- Success Message -->
        <Transition name="page">
          <div v-if="success" class="glass-card border-success/30 mb-8 reveal">
            <div class="flex items-center gap-3 text-success mb-2">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="font-semibold">{{ t({ en: 'Project added!', fr: 'Projet ajouté !' }) }}</p>
            </div>
            <p class="text-primary-400 text-sm">
              {{ t({
                en: 'Your project has been saved locally. It will appear on the projects page.',
                fr: 'Votre projet a été sauvegardé localement. Il apparaîtra sur la page des projets.'
              }) }}
            </p>
            <div class="mt-4 flex gap-3">
              <NuxtLink :to="`/projects/${lastSlug}`" class="btn-primary text-sm">
                {{ t({ en: 'View Project', fr: 'Voir le projet' }) }}
              </NuxtLink>
              <button @click="resetForm" class="px-4 py-2 rounded-xl border border-primary-700 text-primary-300 hover:text-white hover:border-primary-500 transition-all duration-300 text-sm font-medium">
                {{ t({ en: 'Add Another', fr: 'En ajouter un autre' }) }}
              </button>
            </div>
          </div>
        </Transition>

        <!-- Form -->
        <form v-if="!success" @submit.prevent="handleSubmit" class="space-y-8 reveal">
          <!-- Basic Info -->
          <div class="glass-card space-y-5">
            <h2 class="text-sm font-mono text-accent">// {{ t({ en: 'basic_info', fr: 'info_de_base' }) }}</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Title (EN)', fr: 'Titre (EN)' }) }}</label>
                <input v-model="form.titleEn" type="text" class="input-field" :placeholder="t({ en: 'Project Title', fr: 'Titre du projet' })" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Title (FR)', fr: 'Titre (FR)' }) }}</label>
                <input v-model="form.titleFr" type="text" class="input-field" :placeholder="t({ en: 'Project Title in French', fr: 'Titre du projet en français' })" required />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Category', fr: 'Catégorie' }) }}</label>
                <input v-model="form.category" type="text" class="input-field" placeholder="Web Development" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Year', fr: 'Année' }) }}</label>
                <input v-model.number="form.year" type="number" class="input-field" :placeholder="String(new Date().getFullYear())" required />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Role (EN)', fr: 'Rôle (EN)' }) }}</label>
                <input v-model="form.roleEn" type="text" class="input-field" placeholder="Full-Stack Developer" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Role (FR)', fr: 'Rôle (FR)' }) }}</label>
                <input v-model="form.roleFr" type="text" class="input-field" placeholder="Développeur Full-Stack" required />
              </div>
            </div>
          </div>

          <!-- Descriptions -->
          <div class="glass-card space-y-5">
            <h2 class="text-sm font-mono text-accent">// {{ t({ en: 'descriptions', fr: 'descriptions' }) }}</h2>

            <div>
              <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Description (EN)', fr: 'Description (EN)' }) }}</label>
              <textarea v-model="form.descEn" rows="3" class="input-field resize-none" :placeholder="t({ en: 'Describe the project...', fr: 'Décrivez le projet...' })" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-primary-300 mb-2">{{ t({ en: 'Description (FR)', fr: 'Description (FR)' }) }}</label>
              <textarea v-model="form.descFr" rows="3" class="input-field resize-none" :placeholder="t({ en: 'Description in French...', fr: 'Description en français...' })" required />
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="glass-card space-y-5">
            <h2 class="text-sm font-mono text-accent">// {{ t({ en: 'tech_stack', fr: 'technologies' }) }}</h2>

            <div>
              <label class="block text-sm font-medium text-primary-300 mb-2">
                {{ t({ en: 'Technologies (comma-separated)', fr: 'Technologies (séparées par des virgules)' }) }}
              </label>
              <input v-model="form.tech" type="text" class="input-field" placeholder="Vue 3, Nuxt 3, Tailwind CSS, Laravel" required />
            </div>
          </div>

          <!-- Features -->
          <div class="glass-card space-y-5">
            <h2 class="text-sm font-mono text-accent">// {{ t({ en: 'key_features', fr: 'fonctionnalités_clés' }) }}</h2>

            <div>
              <label class="block text-sm font-medium text-primary-300 mb-2">
                {{ t({ en: 'Features EN (one per line)', fr: 'Fonctionnalités EN (une par ligne)' }) }}
              </label>
              <textarea v-model="form.featuresEn" rows="4" class="input-field resize-none" :placeholder="t({ en: 'One feature per line...', fr: 'Une fonctionnalité par ligne...' })" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-primary-300 mb-2">
                {{ t({ en: 'Features FR (one per line)', fr: 'Fonctionnalités FR (une par ligne)' }) }}
              </label>
              <textarea v-model="form.featuresFr" rows="4" class="input-field resize-none" :placeholder="t({ en: 'One feature per line in French...', fr: 'Une fonctionnalité par ligne en français...' })" required />
            </div>
          </div>

          <!-- Submit -->
          <button type="submit" class="btn-primary w-full justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            {{ t({ en: 'Add Project', fr: 'Ajouter le projet' }) }}
          </button>
        </form>

        <!-- Manage Existing Custom Projects -->
        <div v-if="customProjects.length" class="mt-16 reveal">
          <div class="mb-8">
            <h2 class="text-sm font-mono text-accent mb-2">// {{ t({ en: 'manage_projects', fr: 'gérer_les_projets' }) }}</h2>
            <h3 class="text-xl font-semibold text-white">{{ t({ en: 'Your Custom Projects', fr: 'Vos projets personnalisés' }) }}</h3>
            <p class="text-primary-400 text-sm mt-1">
              {{ t({
                en: 'These projects are saved in your browser. You can remove them here.',
                fr: 'Ces projets sont sauvegardés dans votre navigateur. Vous pouvez les supprimer ici.'
              }) }}
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="project in customProjects"
              :key="project.slug"
              class="glass-card flex items-center justify-between gap-4"
            >
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">{{ project.category }}</span>
                  <span class="text-primary-500 text-xs">{{ project.year }}</span>
                </div>
                <h4 class="text-white font-medium truncate">{{ t(project.title) }}</h4>
                <p class="text-primary-400 text-sm truncate">{{ t(project.description) }}</p>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <NuxtLink
                  :to="`/projects/${project.slug}`"
                  class="p-2 rounded-lg text-primary-400 hover:text-accent hover:bg-accent/10 transition-all"
                  :title="t({ en: 'View', fr: 'Voir' })"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </NuxtLink>
                <button
                  v-if="confirmSlug !== project.slug"
                  @click="confirmSlug = project.slug"
                  class="p-2 rounded-lg text-primary-400 hover:text-red-400 hover:bg-red-400/10 transition-all"
                  :title="t({ en: 'Delete', fr: 'Supprimer' })"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <div v-else class="flex items-center gap-1">
                  <button
                    @click="handleDelete(project.slug)"
                    class="px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 text-xs font-medium transition-all"
                  >
                    {{ t({ en: 'Confirm', fr: 'Confirmer' }) }}
                  </button>
                  <button
                    @click="confirmSlug = ''"
                    class="px-3 py-1.5 rounded-lg border border-primary-700 text-primary-400 hover:text-white text-xs font-medium transition-all"
                  >
                    {{ t({ en: 'Cancel', fr: 'Annuler' }) }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PasswordGate>
</template>

<script setup lang="ts">
const { t } = useLocale()
const { addProject, removeProject, customProjects } = useProjects()
const { isAuthenticated } = useAuth()

useHead({ title: 'Add Project — Jean-Philippe Perron' })

const success = ref(false)
const lastSlug = ref('')
const confirmSlug = ref('')

function handleDelete(slug: string) {
  removeProject(slug)
  confirmSlug.value = ''
}

const form = reactive({
  titleEn: '',
  titleFr: '',
  descEn: '',
  descFr: '',
  category: '',
  year: new Date().getFullYear(),
  roleEn: '',
  roleFr: '',
  tech: '',
  featuresEn: '',
  featuresFr: '',
})

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function handleSubmit() {
  const slug = slugify(form.titleEn)
  lastSlug.value = slug

  addProject({
    slug,
    title: { en: form.titleEn, fr: form.titleFr },
    description: { en: form.descEn, fr: form.descFr },
    shortDescription: { en: form.descEn.substring(0, 100), fr: form.descFr.substring(0, 100) },
    category: form.category,
    year: form.year,
    role: { en: form.roleEn, fr: form.roleFr },
    tech: form.tech.split(',').map(t => t.trim()).filter(Boolean),
    features: {
      en: form.featuresEn.split('\n').map(f => f.trim()).filter(Boolean),
      fr: form.featuresFr.split('\n').map(f => f.trim()).filter(Boolean),
    },
  })

  success.value = true
}

function resetForm() {
  form.titleEn = ''
  form.titleFr = ''
  form.descEn = ''
  form.descFr = ''
  form.category = ''
  form.year = new Date().getFullYear()
  form.roleEn = ''
  form.roleFr = ''
  form.tech = ''
  form.featuresEn = ''
  form.featuresFr = ''
  success.value = false
}

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

watch(isAuthenticated, (val) => {
  if (val) {
    nextTick(() => revealAll(pageRef.value))
  }
})

onMounted(() => {
  if (isAuthenticated.value) {
    revealAll(pageRef.value)
  }
})
</script>

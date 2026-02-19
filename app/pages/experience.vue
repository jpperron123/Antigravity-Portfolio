<template>
  <div ref="pageRef" class="py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-accent font-mono text-sm mb-3">// {{ t({ en: 'career_path', fr: 'parcours_professionnel' }) }}</p>
        <h1 class="section-title">{{ t({ en: 'Professional Experience', fr: 'Expérience professionnelle' }) }}</h1>
        <p class="section-subtitle mx-auto">
          {{ t({
            en: 'My journey through tech — from technical support to full-stack development and AI automation.',
            fr: 'Mon parcours en tech — du support technique au développement full-stack et à l\'automatisation IA.'
          }) }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-primary-700" />

        <!-- Timeline Items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experience"
            :key="exp.company"
            :class="[
              'relative flex flex-col md:flex-row gap-6 md:gap-12',
              index % 2 === 0 ? '' : 'md:flex-row-reverse',
            ]"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary-900 z-10" />

            <!-- Content -->
            <div
              :class="[
                'ml-12 md:ml-0 md:w-1/2',
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12',
                index % 2 === 0 ? 'reveal-left' : 'reveal-right',
              ]"
            >
              <div class="glass-card">
                <!-- Period -->
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {{ formatPeriod(exp.period) }}
                  </span>
                </div>

                <!-- Role & Company -->
                <h3 class="text-xl font-semibold text-white mb-1">
                  {{ t(exp.title) }}
                </h3>
                <p class="text-accent-light font-medium mb-1">{{ exp.company }}</p>
                <p class="text-primary-500 text-sm mb-4">{{ t(exp.location) }}</p>

                <!-- Description -->
                <p class="text-primary-400 text-sm leading-relaxed mb-4">
                  {{ t(exp.description) }}
                </p>

                <!-- Responsibilities -->
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="(resp, i) in tArray(exp.responsibilities).slice(0, 3)"
                    :key="i"
                    class="flex items-start gap-2 text-primary-400 text-sm"
                  >
                    <span class="text-accent mt-1">▸</span>
                    {{ resp }}
                  </li>
                </ul>

                <!-- Tech -->
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in exp.tech"
                    :key="tech"
                    class="tech-badge text-[10px]"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import experience from '~/content/experience.json'

const { t, tArray, locale } = useLocale()

useHead({
  title: 'Experience — Jean-Philippe Perron',
  meta: [
    { name: 'description', content: 'Professional experience of Jean-Philippe Perron — Full-Stack Developer at Webrio, Telecom Tech at Sûreté du Québec, Tech Support at CGI.' },
  ],
})

function formatPeriod(period: { start: string; end: string }): string {
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthsFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
  const months = locale.value === 'fr' ? monthsFr : monthsEn
  
  const format = (date: string) => {
    const [year, month] = date.split('-')
    return `${months[parseInt(month) - 1]} ${year}`
  }
  return `${format(period.start)} — ${format(period.end)}`
}

const pageRef = ref<HTMLElement | null>(null)
const { revealAll } = useScrollReveal()

onMounted(() => {
  revealAll(pageRef.value)
})
</script>

<template>
  <section class="py-24 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800/30 to-primary-900" />
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-accent font-mono text-sm mb-3">
          // {{ t({ en: 'ai_services', fr: 'services_ia' }) }}
        </p>
        <h2 class="section-title">{{ t({ en: 'AI-Powered Solutions', fr: 'Solutions propulsées par l\'IA' }) }}</h2>
        <p class="section-subtitle mx-auto">
          {{ t({
            en: 'Leverage artificial intelligence to automate, optimize, and transform your business processes',
            fr: 'Exploitez l\'intelligence artificielle pour automatiser, optimiser et transformer vos processus d\'affaires'
          }) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        <!-- Custom Chatbots -->
        <div class="glass-card group">
          <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ t({ en: 'Custom Chatbots', fr: 'Chatbots sur mesure' }) }}</h3>
          <p class="text-primary-400 text-sm leading-relaxed mb-4">
            {{ t({
              en: 'Intelligent chatbots tailored to your business. Answer customer questions 24/7, qualify leads, and automate support.',
              fr: 'Chatbots intelligents adaptés à votre entreprise. Répondez aux questions clients 24/7, qualifiez des leads et automatisez le support.'
            }) }}
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span class="tech-badge">Claude AI</span>
            <span class="tech-badge">GPT</span>
            <span class="tech-badge">RAG</span>
          </div>
        </div>

        <!-- AI Workflow Automation -->
        <div class="glass-card group">
          <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ t({ en: 'AI Workflow Automation', fr: 'Automatisation de workflows IA' }) }}</h3>
          <p class="text-primary-400 text-sm leading-relaxed mb-4">
            {{ t({
              en: 'Automate repetitive tasks with intelligent workflows. From data processing to content generation, let AI handle the heavy lifting.',
              fr: 'Automatisez les tâches répétitives avec des workflows intelligents. Du traitement de données à la génération de contenu, laissez l\'IA faire le gros du travail.'
            }) }}
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span class="tech-badge">n8n</span>
            <span class="tech-badge">Make</span>
            <span class="tech-badge">APIs</span>
          </div>
        </div>

        <!-- AI Integration -->
        <div class="glass-card group">
          <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ t({ en: 'AI Integration', fr: 'Intégration IA' }) }}</h3>
          <p class="text-primary-400 text-sm leading-relaxed mb-4">
            {{ t({
              en: 'Integrate AI capabilities into your existing systems. Smart search, content analysis, document processing, and more.',
              fr: 'Intégrez des capacités IA dans vos systèmes existants. Recherche intelligente, analyse de contenu, traitement de documents, et plus.'
            }) }}
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span class="tech-badge">Anthropic</span>
            <span class="tech-badge">OpenAI</span>
            <span class="tech-badge">LangChain</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 reveal">
        <NuxtLink to="/contact" class="btn-primary">
          {{ t({ en: 'Discuss Your AI Project', fr: 'Discutons de votre projet IA' }) }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useLocale()
</script>

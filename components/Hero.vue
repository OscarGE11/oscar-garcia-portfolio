<script setup lang="ts">
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-vue-next'

const { t, locale } = useLanguage()

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center px-4 pt-20 bg-slate-950">
    <div class="container mx-auto max-w-4xl text-center">
      <div class="space-y-6">
        <h1 class="text-5xl md:text-7xl font-bold text-balance">
          <span class="text-slate-100">Óscar García</span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-orange-500 font-semibold">{{ t.hero.title }}</h2>
        <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
          <template v-if="locale === 'es'">
            Especializado en <span class="text-green-500 font-semibold">TypeScript</span> (Next.js, React), con
            experiencia en <span class="text-green-500 font-semibold">Angular</span> y
            <span class="text-green-500 font-semibold">Java</span>. Desarrollo aplicaciones completas en Fintech y
            Logística.
          </template>
          <template v-else>
            Specialized in <span class="text-green-500 font-semibold">TypeScript</span> (Next.js, React), with
            experience in <span class="text-green-500 font-semibold">Angular</span> and
            <span class="text-green-500 font-semibold">Java</span>. Building complete applications in Fintech and
            Logistics.
          </template>
        </p>

        <div class="flex items-center justify-center gap-4 pt-6">
          <UiButton
            size="lg"
            class="bg-orange-600 text-white hover:bg-orange-700"
            @click="scrollToSection('contact')"
          >
            {{ t.hero.contactMe }}
          </UiButton>
          <UiButton
            variant="outline"
            size="lg"
            class="border-orange-600 text-orange-500 hover:bg-orange-600/10 bg-transparent"
            @click="scrollToSection('projects')"
          >
            {{ t.hero.viewProjects }}
          </UiButton>
        </div>

        <div class="flex items-center justify-center gap-4 pt-8">
          <a
            href="https://github.com/OscarGE11"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-orange-500 transition-colors"
          >
            <Github class="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-garciaesp/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-orange-500 transition-colors"
          >
            <Linkedin class="h-6 w-6" />
          </a>
          <a
            href="mailto:geoscar1100@gmail.com"
            class="text-slate-400 hover:text-orange-500 transition-colors"
          >
            <Mail class="h-6 w-6" />
          </a>
        </div>

        <div class="pt-12">
          <button
            class="text-slate-400 hover:text-orange-500 transition-colors animate-bounce"
            @click="scrollToSection('about')"
          >
            <ArrowDown class="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

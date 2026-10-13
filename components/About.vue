<script setup lang="ts">
import { Code2, Lightbulb, Rocket } from 'lucide-vue-next'

const { t, locale } = useLanguage()

const icons = [Code2, Rocket, Lightbulb]
const colors = ['text-orange-500', 'text-green-500', 'text-orange-500']
const bgColors = ['bg-orange-500/10', 'bg-green-500/10', 'bg-orange-500/10']
</script>

<template>
  <section id="about" class="py-20 px-4 bg-slate-900">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">{{ t.about.title }}</h2>
      <div class="w-20 h-1 bg-green-500 mx-auto mb-12" />

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="space-y-4">
          <p class="text-lg text-slate-200 leading-relaxed">
            <template v-if="locale === 'es'">
              Desarrollador full-stack con experiencia en sectores
              <span class="text-orange-500 font-semibold">Fintech</span> y
              <span class="text-orange-500 font-semibold">Logística</span>.
              <span class="text-orange-500 font-semibold">TypeScript</span> es mi stack principal y <span class="text-orange-500 font-semibold">Python</span> para el backend en mis proyectos propios.
            </template>
            <template v-else>
              Full-stack developer with experience in
              <span class="text-orange-500 font-semibold">Fintech</span> and
              <span class="text-orange-500 font-semibold">Logistics</span>.
              <span class="text-orange-500 font-semibold">TypeScript</span> is my main stack and <span class="text-orange-500 font-semibold">Python</span> for the backend in my personal projects.
            </template>
          </p>
          <p class="text-lg text-slate-400 leading-relaxed">{{ t.about.paragraph2 }}</p>
        </div>

        <div class="space-y-4">
          <div
            v-for="(highlight, index) in t.about.highlights"
            :key="index"
            class="flex items-start gap-3"
          >
            <div :class="[bgColors[index], 'p-2 rounded-lg']">
              <component :is="icons[index]" :class="[colors[index], 'h-5 w-5']" />
            </div>
            <div>
              <h3 class="font-semibold text-slate-200 mb-1">{{ highlight.title }}</h3>
              <p class="text-sm text-slate-400">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

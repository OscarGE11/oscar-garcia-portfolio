<script setup lang="ts">
import { Code, Database, Server, Wrench } from 'lucide-vue-next'

const { t } = useLanguage()

const icons = [Code, Server, Wrench, Database]
const colors = ['text-orange-500', 'text-green-500', 'text-orange-500', 'text-green-500']
const bgColors = ['bg-orange-500/10', 'bg-green-500/10', 'bg-orange-500/10', 'bg-green-500/10']
</script>

<template>
  <section id="skills" class="py-20 px-4 bg-slate-900">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">{{ t.skills.title }}</h2>
      <div class="w-20 h-1 bg-green-500 mx-auto mb-12" />

      <div class="grid md:grid-cols-2 gap-6">
        <UiCard
          v-for="(category, index) in t.skills.categories"
          :key="index"
          class="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all hover:scale-105"
        >
          <div class="flex items-center gap-3 mb-4">
            <div :class="[bgColors[index], 'p-3 rounded-lg']">
              <component :is="icons[index]" :class="[colors[index], 'h-6 w-6']" />
            </div>
            <h3 class="text-xl font-bold text-slate-100">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, i) in category.skills"
              :key="i"
              class="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>

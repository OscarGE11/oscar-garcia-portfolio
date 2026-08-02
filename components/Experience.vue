<script setup lang="ts">
import { Briefcase, Calendar } from 'lucide-vue-next'

const { t } = useLanguage()
</script>

<template>
  <section id="experience" class="py-20 px-4 bg-slate-800/50">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">{{ t.experience.title }}</h2>
      <div class="w-20 h-1 bg-green-500 mx-auto mb-12" />

      <div class="space-y-6">
        <UiCard
          v-for="(exp, index) in t.experience.items"
          :key="index"
          class="bg-slate-900 border-slate-800 p-6 hover:border-orange-500/50 transition-colors"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div class="flex items-start gap-3">
              <div class="bg-orange-500/10 p-2 rounded-lg">
                <Briefcase class="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-100">{{ exp.position }}</h3>
                <p class="text-lg text-orange-500 font-semibold">{{ exp.company }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-slate-400">
              <Calendar class="h-4 w-4" />
              <span class="text-sm">{{ exp.period }}</span>
              <UiBadge v-if="index === 0" variant="default" class="bg-green-600 text-white ml-2">
                {{ t.experience.current }}
              </UiBadge>
            </div>
          </div>

          <ul class="space-y-2 mb-4">
            <li v-for="(item, i) in exp.description" :key="i" class="text-slate-400 flex items-start gap-2">
              <span class="text-green-500 mt-1">▸</span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <UiBadge
              v-for="(tech, i) in exp.technologies"
              :key="i"
              variant="secondary"
              class="bg-slate-800 text-slate-300"
            >
              {{ tech }}
            </UiBadge>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>

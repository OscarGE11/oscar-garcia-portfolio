<script setup lang="ts">
import { Award, BookOpen, GraduationCap } from 'lucide-vue-next'

const { t } = useLanguage()
</script>

<template>
  <section id="education" class="py-20 px-4 bg-slate-900">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">{{ t.education.title }}</h2>
      <div class="w-20 h-1 bg-green-500 mx-auto mb-12" />

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <GraduationCap class="h-6 w-6 text-orange-500" />
            {{ t.education.officialEducation }}
          </h3>
          <UiCard
            v-for="(edu, index) in t.education.educationItems"
            :key="index"
            class="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-colors"
          >
            <div class="flex items-start gap-3 mb-3">
              <div class="bg-orange-500/10 p-2 rounded-lg">
                <GraduationCap class="h-5 w-5 text-orange-500" />
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-slate-100 mb-1">{{ edu.title }}</h4>
                <p class="text-orange-500 font-semibold">{{ edu.institution }}</p>
                <p class="text-sm text-slate-400 mt-1">{{ edu.period }}</p>
              </div>
            </div>
          </UiCard>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <BookOpen class="h-6 w-6 text-green-500" />
            {{ t.education.languages }}
          </h3>
          <UiCard class="bg-slate-800 border-slate-700 p-6">
            <div class="space-y-4">
              <div
                v-for="(lang, index) in t.education.languagesList"
                :key="index"
                class="flex items-center justify-between"
              >
                <span class="text-slate-100 font-semibold">{{ lang.language }}</span>
                <UiBadge variant="secondary" class="bg-green-500/20 text-green-500">
                  {{ lang.level }}
                </UiBadge>
              </div>
            </div>
          </UiCard>
        </div>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <Award class="h-6 w-6 text-orange-500" />
          {{ t.education.courses }}
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          <UiCard
            v-for="(cert, index) in t.education.certifications"
            :key="index"
            class="bg-slate-800 border-slate-700 p-4 hover:border-green-500/50 transition-colors"
          >
            <div class="flex items-start gap-3">
              <div class="bg-green-500/10 p-2 rounded-lg">
                <Award class="h-4 w-4 text-green-500" />
              </div>
              <div>
                <h4 class="font-semibold text-slate-100 text-sm mb-1">{{ cert.title }}</h4>
                <p class="text-xs text-slate-400">{{ cert.platform }}</p>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

const { t } = useLanguage()

const hoveredProject = ref<number | null>(null)

const projectMeta = [
  {
    image: '/images/veracroma.png',
    liveUrl: 'https://vera-croma.vercel.app/home',
    technologies: ['Angular', 'TypeScript', 'CSS3'],
  },
  {
    image: '/images/reactodoapp.png',
    liveUrl: 'https://react-todo-app-seven-flax.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
]

function openProject(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <section id="projects" class="py-20 px-4 bg-slate-800/50">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">{{ t.projects.title }}</h2>
      <div class="w-20 h-1 bg-green-500 mx-auto mb-12" />

      <div class="grid md:grid-cols-2 gap-8">
        <UiCard
          v-for="(project, index) in t.projects.items"
          :key="index"
          class="bg-slate-900 border-slate-800 overflow-hidden hover:border-orange-500/50 transition-all group"
          @mouseenter="hoveredProject = index"
          @mouseleave="hoveredProject = null"
        >
          <div class="relative overflow-hidden aspect-video">
            <img
              :src="projectMeta[index].image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent transition-opacity duration-300"
              :class="hoveredProject === index ? 'opacity-100' : 'opacity-0'"
            >
              <div class="absolute bottom-4 left-4 right-4 flex gap-2">
                <UiButton
                  size="sm"
                  class="bg-orange-600 text-white hover:bg-orange-700 flex-1"
                  @click="openProject(projectMeta[index].liveUrl)"
                >
                  <ExternalLink class="h-4 w-4 mr-2" />
                  {{ t.projects.viewProject }}
                </UiButton>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-slate-100 mb-2">{{ project.title }}</h3>
            <p class="text-slate-400 mb-4 leading-relaxed">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, i) in projectMeta[index].technologies"
                :key="i"
                class="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-md text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>

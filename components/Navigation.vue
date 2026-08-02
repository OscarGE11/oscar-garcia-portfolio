<script setup lang="ts">
import { Languages, Menu, X } from 'lucide-vue-next'

const { t, locale, toggleLocale } = useLanguage()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t.value.nav.about, id: 'about' },
  { label: t.value.nav.experience, id: 'experience' },
  { label: t.value.nav.projects, id: 'projects' },
  { label: t.value.nav.contact, id: 'contact' },
])

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <button
          class="text-xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
          @click="scrollToSection('hero')"
        >
          ÓG
        </button>

        <div class="hidden md:flex items-center gap-6">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="text-sm text-slate-400 hover:text-orange-500 transition-colors"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </button>
          <UiButton
            variant="outline"
            size="sm"
            class="border-orange-600/50 text-orange-500 hover:bg-orange-600/10 bg-transparent gap-2"
            :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a español'"
            @click="toggleLocale"
          >
            <Languages class="h-4 w-4" />
            {{ t.nav.switchTo }}
          </UiButton>
        </div>

        <div class="flex items-center gap-2 md:hidden">
          <UiButton
            variant="outline"
            size="sm"
            class="border-orange-600/50 text-orange-500 hover:bg-orange-600/10 bg-transparent gap-1 px-2"
            :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a español'"
            @click="toggleLocale"
          >
            <Languages class="h-4 w-4" />
            {{ t.nav.switchTo }}
          </UiButton>
          <UiButton
            variant="ghost"
            size="icon"
            class="text-slate-400 hover:text-orange-500"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <X v-if="isMobileMenuOpen" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </UiButton>
        </div>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 flex flex-col gap-3">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="text-left text-sm text-slate-400 hover:text-orange-500 transition-colors py-2"
          @click="scrollToSection(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

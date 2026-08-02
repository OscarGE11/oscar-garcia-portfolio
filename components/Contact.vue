<script setup lang="ts">
import { Car, Clock, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-vue-next'

const { t } = useLanguage()

const contactInfo = computed(() => [
  {
    icon: Mail,
    label: t.value.contact.labels.email,
    value: 'geoscar1100@gmail.com',
    href: 'mailto:geoscar1100@gmail.com',
    color: 'text-orange-500',
  },
  {
    icon: Phone,
    label: t.value.contact.labels.phone,
    value: '+34 695 653 041',
    href: 'tel:+34695653041',
    color: 'text-green-500',
  },
  {
    icon: Linkedin,
    label: t.value.contact.labels.linkedin,
    value: 'oscargarciaesp',
    href: 'https://www.linkedin.com/in/oscar-garciaesp/',
    color: 'text-orange-500',
  },
  {
    icon: Github,
    label: t.value.contact.labels.github,
    value: 'OscarGE11',
    href: 'https://github.com/OscarGE11',
    color: 'text-green-500',
  },
])

const availabilityIcons = [MapPin, Car, Clock]
</script>

<template>
  <section id="contact" class="py-20 px-4 bg-slate-800/50">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-500">{{ t.contact.title }}</h2>
      <div class="w-20 h-1 bg-green-500 mx-auto mb-12" />

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-2xl font-bold text-slate-100 mb-6">{{ t.contact.letsTalk }}</h3>
          <p class="text-slate-400 mb-6 leading-relaxed">{{ t.contact.intro }}</p>

          <UiCard class="bg-slate-900 border-slate-800 p-6 mb-6">
            <h4 class="font-semibold text-slate-100 mb-4">{{ t.contact.availability }}</h4>
            <div class="space-y-3">
              <div
                v-for="(text, index) in t.contact.availabilityItems"
                :key="index"
                class="flex items-center gap-3 text-slate-400"
              >
                <component :is="availabilityIcons[index]" class="h-5 w-5 text-green-500" />
                <span class="text-sm">{{ text }}</span>
              </div>
            </div>
          </UiCard>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-100 mb-6">{{ t.contact.contactInfo }}</h3>
          <div class="space-y-4">
            <UiCard
              v-for="(contact, index) in contactInfo"
              :key="index"
              class="bg-slate-900 border-slate-800 p-4 hover:border-orange-500/50 transition-colors"
            >
              <a
                :href="contact.href"
                :target="contact.href.startsWith('http') ? '_blank' : undefined"
                :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-4 group"
              >
                <div
                  :class="contact.color === 'text-orange-500' ? 'bg-orange-500/10' : 'bg-green-500/10'"
                  class="p-3 rounded-lg"
                >
                  <component :is="contact.icon" :class="[contact.color, 'h-5 w-5']" />
                </div>
                <div class="flex-1">
                  <p class="text-sm text-slate-400">{{ contact.label }}</p>
                  <p class="text-slate-100 font-semibold group-hover:text-orange-500 transition-colors">
                    {{ contact.value }}
                  </p>
                </div>
              </a>
            </UiCard>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 text-slate-500 text-sm">
        <p>{{ t.contact.copyright }}</p>
      </div>
    </div>
  </section>
</template>

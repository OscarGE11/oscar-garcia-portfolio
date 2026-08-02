import { translations, type Locale, type Translations } from '~/lib/translations'

export const useLanguage = () => {
  const locale = useState<Locale>('locale', () => 'es')

  const t = computed(() => translations[locale.value] as Translations)

  const toggleLocale = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
  }

  onMounted(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'es' || saved === 'en') {
      locale.value = saved
    }
  })

  watch(
    locale,
    (newLocale) => {
      if (import.meta.client) {
        localStorage.setItem('locale', newLocale)
        document.documentElement.lang = newLocale
      }

      useSeoMeta({
        title: translations[newLocale].meta.title,
        description: translations[newLocale].meta.description,
      })
    },
    { immediate: true },
  )

  return { locale, t, toggleLocale }
}

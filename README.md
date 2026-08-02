# Óscar García Portfolio

Portfolio personal de Óscar García — Full-Stack Developer. SPA bilingüe (ES/EN) construida con Nuxt 3, Vue 3 y Tailwind CSS.

## Stack

- **Nuxt 3** + Vue 3 + TypeScript
- **Tailwind CSS** (`@nuxtjs/tailwindcss`)
- **lucide-vue-next** (iconos)
- **@vercel/analytics**

## Scripts

```bash
pnpm install    # instalar dependencias
pnpm dev        # servidor de desarrollo (http://localhost:3000)
pnpm build      # build de producción
pnpm preview    # preview del build de producción
```

## Deploy en Vercel (nuevo proyecto)

1. Vercel Dashboard → **Add New Project**
2. Importar este repositorio de GitHub
3. Framework Preset: **Nuxt.js** (auto-detectado)
4. Build Command: `pnpm build`
5. Output: gestionado automáticamente por el preset Nuxt
6. Deploy

> Este deploy es independiente del proyecto Vercel anterior (Next.js). Puedes usar un dominio distinto o sustituir el anterior cuando esté validado.

## Estructura

```
├── app.vue                 # Layout raíz + Analytics
├── pages/index.vue         # Página principal (todas las secciones)
├── components/             # Secciones + UI (UiButton, UiCard, UiBadge)
├── composables/useLanguage.ts  # i18n custom (ES/EN + localStorage)
├── lib/translations.ts     # Contenido bilingüe
├── assets/css/main.css     # Estilos globales
└── public/images/          # Assets de proyectos
```

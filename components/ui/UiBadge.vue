<script setup lang="ts">
type Variant = 'default' | 'secondary'

withDefaults(
  defineProps<{
    variant?: Variant
    class?: string
  }>(),
  {
    variant: 'default',
  },
)

const variantClasses: Record<Variant, string> = {
  default: 'bg-green-600 text-white',
  secondary: 'bg-slate-800 text-slate-300',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold"
    :class="[variantClasses[variant], $props.class]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
type Variant = 'default' | 'outline' | 'ghost'
type Size = 'default' | 'sm' | 'lg' | 'icon'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'default',
    size: 'default',
    type: 'button',
  },
)

const variantClasses: Record<Variant, string> = {
  default: 'bg-orange-600 text-white shadow-sm hover:bg-orange-700',
  outline: 'border bg-transparent shadow-sm hover:bg-white/5',
  ghost: 'hover:bg-white/5',
}

const sizeClasses: Record<Size, string> = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-sm',
  lg: 'h-10 rounded-md px-6',
  icon: 'h-9 w-9',
}
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </button>
</template>

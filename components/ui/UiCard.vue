<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    class="rounded-xl border shadow-sm"
    :class="$props.class"
  >
    <slot />
  </div>
</template>

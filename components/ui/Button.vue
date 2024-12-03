<template>
  <button
    :class="[
      variant === 'primary' ? 'btn-primary' : 'btn-secondary',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>
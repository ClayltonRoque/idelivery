<script setup lang="ts">
defineProps({
  rounded: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <UButton
    :color="color"
    :ui="{ rounded: rounded ? 'rounded-full' : 'rounded-sm' }"
    class="button"
    :class="[`is-${color}`]"
  >
    <slot></slot>
  </UButton>
</template>

<style scoped>
.button {
  &.is-gray {
    &:hover {
      @apply bg-primary text-white;
    }
  }
}
</style>

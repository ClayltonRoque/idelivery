<script setup lang="ts">
import type { PropType } from 'vue';
defineProps({
  rounded: {
    type: String as PropType<'rounded-full' | 'rounded-sm'>,
  },
  textColor: {
    type: String,
  },
});
</script>

<template>
  <UButton
    :ui="{ rounded: rounded ? 'rounded-full' : 'rounded-sm' }"
    class="button"
    :class="[`text-${textColor}`]"
  >
    <slot></slot>
  </UButton>
</template>

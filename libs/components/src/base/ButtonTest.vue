<script setup lang="ts">
import type { PropType } from 'vue';
defineProps({
  rounded: {
    type: String as PropType<'rounded-full' | 'rounded-lg'>,
  },
  textColor: {
    type: String,
  },
});
</script>

<template>
  <UButton
    :ui="{ rounded: rounded ? 'rounded-full' : 'rounded-lg' }"
    class="button"
    color="cinnabar"
    :class="[`text-${textColor}`]"
  >
    <slot></slot>
  </UButton>
</template>

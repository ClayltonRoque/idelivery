<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  shadow: {
    type: String as PropType<'none' | 'sm' | 'lg' | 'xl'>,
  },
});

const shadowSize = computed(() => {
  switch (props.shadow) {
    case 'sm':
      return 'shadow-sm';
    case 'lg':
      return 'shadow-lg';
    case 'xl':
      return 'shadow-xl';
    default:
      return 'none';
  }
});
</script>
<template>
  <div class="card" :class="[shadowSize]">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

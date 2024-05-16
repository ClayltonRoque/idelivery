<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  padding: {
    type: String as PropType<'none' | 'sm' | 'lg' | 'xl'>,
    default: 'none',
  },
  bgColor: {
    type: String,
    default: 'white',
  },
  shadow: {
    type: String as PropType<'none' | 'sm' | 'lg' | 'xl'>,
  },
  color: {
    type: String,
    default: 'black',
  },
  position: {
    type: String as PropType<'flex' | 'flex-col'>,
    default: 'flex',
  },
  gap: {
    type: String as PropType<'none' | 'sm' | 'lg' | 'xl'>,
    default: 'none',
  },
});

const computeGapClass = (gap: string): string => {
  switch (gap) {
    case 'sm':
      return 'gap-2';
    case 'lg':
      return 'gap-4';
    case 'xl':
      return 'gap-8';
    default:
      return 'gap-0';
  }
};

const computePaddingClass = (padding: string): string => {
  switch (padding) {
    case 'sm':
      return 'p-2';
    case 'lg':
      return 'p-4';
    case 'xl':
      return 'p-8';
    default:
      return 'p-0';
  }
};
</script>
<template>
  <div
    :class="
      'card' +
      ' ' +
      position +
      ' shadow-' +
      shadow +
      ' text-' +
      color +
      ' bg-' +
      bgColor +
      ' ' +
      computeGapClass(gap) +
      ' ' +
      computePaddingClass(padding)
    "
  >
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>

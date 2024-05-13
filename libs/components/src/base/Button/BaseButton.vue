<script setup lang="ts">
import { computed, type PropType } from 'vue';

import DefaultButton from './DefaultButton.vue';
import PrimaryButton from './PrimaryButton.vue';
import SuccessButton from './SuccessButton.vue';

const props = defineProps({
  type: {
    type: String as PropType<'default' | 'primary' | 'success'>,
    default: 'default',
  },
  rounded: {
    type: String as PropType<'rounded-full' | 'rounded-sm'>,
  },
});

// const emit = defineEmits(['click']);

const Button = computed(() => {
  switch (props.type) {
    case 'primary':
      return PrimaryButton;
    case 'success':
      return SuccessButton;
    default:
      return DefaultButton;
  }
});
</script>

<template>
  <component :is="Button" :ui="{ rounded: props.rounded }">
    <slot></slot>
  </component>
</template>

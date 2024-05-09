<script setup lang="ts">
import { Button } from '@idelivery/components';

// size:{ 2xs, xs, sm, md, lg, xl } : tamanho do button
// label: "texto do button"
// color:
</script>

<template>
  <UContainer>
    <div>
      <h1 class="text-center">components</h1>
      <div>
        <h2>Buttons</h2>
        <UButton size="xl">Button</UButton>
        <UButton size="lg" class="px-4 py-2 text-green-300 rounded-full"
          >Button</UButton
        >
      </div>
    </div>
  </UContainer>
</template>

<style scoped lang="postcss">
div {
  @apply pt-16;

  &:first-child {
    @apply pt-8;
  }

  h1 {
    @apply text-5xl font-bold;
  }
  h2 {
    @apply text-3xl font-semibold mb-4;
  }
}
</style>

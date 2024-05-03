<script setup lang="ts"></script>

<template>
  <section class="fb-base-section" v-bind="$attrs">
    <slot />
  </section>
</template>

<style lang="postcss">
.fb-base-section {
  @apply pb-[100px];
  &:first-of-type,
  &:first-child {
    @apply pt-[60px];
  }
}
</style>

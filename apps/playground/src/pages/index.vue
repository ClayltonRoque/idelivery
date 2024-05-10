<script setup lang="ts">
import { Button } from '@idelivery/components';
</script>

<template>
  <UContainer>
    <div>
      <h1 class="text-center">components</h1>
      <div>
        <h2>Buttons</h2>
        <div class="flex gap-4">
          <Button
            icon="i-ri-filter-2-fill"
            text-color="cinnabar-500"
            color="malachite"
          ></Button>
          <Button icon="i-ri-filter-2-fill" label="button icon right"></Button>
          <Button
            icon="i-ri-filter-2-fill"
            label="button icon left"
            trailing="true"
          ></Button>
          <Button label="loading button" loading="true"></Button>
          <Button label="disabled button" disabled></Button>
          <Button
            label="target button"
            to="https://volta.net"
            target="_blank"
          ></Button>
          <Button label="no padding button" :padded="false"></Button>
          <Button label="square button" square="true"></Button>
        </div>
        <div class="flex gap-4">
          <Button label="button"></Button>
          <Button label="button link" variant="link"></Button>
          <Button label="button outline" variant="outline"></Button>
          <Button label="button soft" variant="soft"></Button>
          <Button label="button ghost" variant="ghost"></Button>
        </div>
        <div class="flex items-end gap-4">
          <Button label="button" size="2xs"></Button>
          <Button label="button" size="xs"></Button>
          <Button label="button" size="sm"></Button>
          <Button label="button" size="md"></Button>
          <Button label="button" size="lg"></Button>
          <Button label="button" size="xl"></Button>
        </div>
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
    @apply text-3xl font-semibold;
  }
}
</style>

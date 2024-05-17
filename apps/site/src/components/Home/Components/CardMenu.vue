<script setup lang="ts">
import { Card } from '@idelivery/components';
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Card
    shadow="lg"
    class="w-40 xl:w-60 h-80 text-[#323232] hover:text-white hover:shadow-2xl hover:bg-cinnabar-500"
  >
    <template #header>
      <figure class="px-4 pt-6">
        <img
          src="@/public/hamburgers.png"
          alt="Shoes"
          class="rounded-full w-40 h-40"
        />
      </figure>
    </template>
    <template #default>
      <div class="card-body items-center text-center gap-0 p-4">
        <h2 class="text-lg font-bold">Royale De Luxe</h2>
        <p class="text-sm">140 g</p>
        <p class="text-lg font-bold" :class="active ? 'mt-1' : 'mt-4'">$2.50</p>
        <div v-if="active" class="flex mt-4">
          <Button
            type="primary"
            class="rounded-e-none border-white border-[1px] border-solid px-2 py-0"
          >
            <UIcon name="i-mdi-minus" class="text-xl" />
          </Button>
          <Button
            type="primary"
            class="text-xl rounded-none border-white border-[1px] border-solid px-2 py-0"
            >1</Button
          >
          <Button
            type="primary"
            class="rounded-s-none border-white border-[1px] border-solid px-2 py-0"
          >
            <UIcon name="i-mdi-plus" class="text-xl" />
          </Button>
          <UButton class="ml-2 bg-[#fafafa]">
            <UIcon
              name="i-ri-shopping-basket-line"
              class="text-xl text-cinnabar-500"
            />
          </UButton>
        </div>
      </div>
    </template>
  </Card>
</template>

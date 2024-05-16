<script setup lang="ts">
import { Section, Button, Card } from '@idelivery/components';

const array = ref([
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
]);
</script>

<template>
  <Section class="pt-[60px]">
    <UContainer>
      <div class="flex flex-col justify-center gap-4 mb-8">
        <div class="text-center">
          <p class="text-cinnabar-500">Our Menu</p>
          <h2 class="text-[#040921] font-bold text-3xl mb-6">
            Menu That Always Make You <br />
            To Fall In Love
          </h2>
        </div>
        <div class="flex justify-center flex-wrap gap-2 items-center mb-8">
          <Button
            type="default"
            class="text-base hover:bg-red-500 hover:text-white px-3"
          >
            <UIcon name="i-ri-filter-2-fill"></UIcon>
          </Button>
          <div v-for="(item, index) in array" :key="index">
            <Button
              type="default"
              class="text-base hover:bg-red-500 hover:text-white gap-3 px-5"
              ><UIcon name="i-mdi-hamburger" /> Burger</Button
            >
          </div>
        </div>
        <div class="hidden xl:flex flex-row flex-wrap gap-4 justify-center">
          <div v-for="(item, index) in array" :key="index">
            <Card
              shadow="lg"
              class="w-40 xl:w-60 h-80 text-[#323232] hover:text-white hover:shadow-2xl hover:bg-cinnabar-500"
              @mouseover="item.active = true"
              @mouseleave="item.active = false"
            >
              <template #header>
                <figure class="px-4 pt-6">
                  <img
                    src="../public/hamburgers.png"
                    alt="Shoes"
                    class="rounded-full w-40 h-40"
                  />
                </figure>
              </template>
              <template #footer>
                <div class="card-body items-center text-center gap-0 p-4">
                  <h2 class="text-lg font-bold">Royale De Luxe</h2>
                  <p class="text-sm">140 g</p>
                  <p
                    class="text-lg font-bold"
                    :class="item.active ? 'mt-1' : 'mt-4'"
                  >
                    $2.50
                  </p>
                  <div v-if="item.active" class="flex mt-4">
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
          </div>
        </div>
        <div class="carousel rounded-box gap-4 xl:hidden">
          <div v-for="(item, index) in array">
            <div class="carousel-item w-3/4">
              <div class="card xl:w-60 h-80 bg-cinnabar-500 p-2">
                <figure class="px-4 pt-6">
                  <img
                    src="../public/hamburgers.jpg"
                    alt="Shoes"
                    class="rounded-xl w-40 h-40"
                  />
                </figure>
                <div class="card-body items-center text-center gap-0 p-4">
                  <h2 class="text-lg font-bold text-[#323232] hover:text-white">
                    Royale De Luxe
                  </h2>
                  <p class="text-sm text-[#323232] hover:text-white">140 g</p>
                  <p
                    class="text-lg font-bold mt-4 text-[#323232] hover:text-white"
                  >
                    $2.50
                  </p>
                  <div class="flex mt-4">
                    <UButton
                      class="rounded-e-none bg-cinnabar-500 border-white border-[1px] border-solid px-2 py-0"
                    >
                      <UIcon name="i-mdi-minus" class="text-xl" />
                    </UButton>
                    <UButton
                      class="text-xl rounded-none bg-cinnabar-500 border-white border-[1px] border-solid px-2 py-0"
                      >1</UButton
                    >
                    <UButton
                      class="rounded-s-none bg-cinnabar-500 border-white border-[1px] border-solid px-2 py-0"
                    >
                      <UIcon name="i-mdi-plus" class="text-xl" />
                    </UButton>
                    <UButton class="ml-2 bg-[#fafafa]">
                      <UIcon
                        name="i-ri-shopping-basket-line"
                        class="text-xl text-cinnabar-500"
                      />
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <Button
            type="primary"
            variant="ghost"
            rounded="rounded-full"
            class="text-cinnabar-500 shadow-lg w-40 justify-center"
            >Show More</Button
          >
        </div>
      </div>
    </UContainer>
  </Section>
</template>

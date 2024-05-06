<script setup lang="ts">
import { Section } from '@idelivery/components';
</script>

<template>
  <Section class="bg-red-50 pt-[60px]">
    <UContainer>
      <div
        class="flex flex-col md:flex-row justify-center md:gap-10 lg:gap-24 items-center"
      >
        <div class="hidden md:flex">
          <NuxtImg src="../public/MobileApp.png"></NuxtImg>
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-red-500 text-center">Download our app</p>
            <h2
              class="text-[#040921] font-bold text-2xl md:text-3xl text-center"
            >
              Get The Groceries App <br />
              Order More Easily.
            </h2>
          </div>
          <p class="text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Ipsa iusto saepe neque eius .
          </p>
          <div class="flex justify-center md:hidden">
            <NuxtImg src="../public/MobileApp.png"></NuxtImg>
          </div>
          <div class="flex md:grid grid-cols-4 gap-4 mt-8">
            <a
              class="bg-black col-span-2 flex items-center pr-2 lg:pr-6 h-20 rounded-md"
            >
              <NuxtImg src="../public/playstoreIcon.png" class="w-12" />
              <div class="text-white">
                <p class="uppercase text-xs text-center">Download on the</p>
                <h2 class="text-sm lg:text-xl text-bold text-center">
                  Apple Store
                </h2>
              </div>
            </a>

            <a
              class="bg-black col-span-2 flex items-center pr-2 lg:pr-6 h-20 rounded-md"
            >
              <NuxtImg src="../public/playstoreIcon.png" class="w-12" />
              <div class="text-white">
                <p class="uppercase text-xs text-center">Download on the</p>
                <h2 class="text-sm lg:text-xl text-bold text-center">
                  Play Store
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </Section>
</template>

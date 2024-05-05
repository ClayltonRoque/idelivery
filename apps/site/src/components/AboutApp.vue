<script setup lang="ts">
import { Section } from '@idelivery/components';
</script>

<template>
  <Section class="bg-red-50 pt-[60px]">
    <UContainer>
      <div class="flex justify-center gap-24 items-center">
        <div>
          <NuxtImg src="../public/MobileApp.png"></NuxtImg>
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-red-500">Download our app</p>
            <h2 class="text-[#040921] font-bold text-3xl">
              Get The Groceries App <br />
              Order More Easily.
            </h2>
          </div>
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Ipsa iusto saepe neque eius .
          </p>
        </div>
      </div>
    </UContainer>
  </Section>
</template>

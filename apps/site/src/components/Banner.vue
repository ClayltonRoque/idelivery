<script setup lang="ts">
import { Section } from '@idelivery/components';
</script>

<template>
  <Section>
    <UContainer class="md:grid md:grid-cols-12">
      <div class="col-span-5 flex flex-col gap-8">
        <div>
          <span class="bg-red-100 text-red-500 rounded-full px-4 py-2">
            More than Faster
            <UIcon name="i-mdi-food"></UIcon>
          </span>
        </div>
        <div class="text-3xl xl:text-6xl font-bold">
          Be The Fastest In Delivering Your
          <span class="text-red-500">Food</span>
        </div>
        <div class="flex md:hidden flex-col h-full justify-center">
          <div
            class="mb-[-100px] ml-3 lg:ml-10 w-[120px] lg:w-[180px] h-[160px] bg-[#fafafa] rounded-xl flex flex-col justify-center items-center p-4 lg:p-6 gap-5 z-10"
          >
            <div class="flex flex-col items-center gap-1">
              <img src="../public/orange.jpg" />
              <div class="text-sm md:text-base">Fresh Orange</div>
              <div class="w-[40px] h-[3px] bg-orange-300"></div>
              <div class="font-black text-lg">$44.60</div>
              <div class="text-sm md:text-base text-gray-400">
                Free Shipping
              </div>
              <div class="bg-red-500 p-3 rounded-xl flex justify-center">
                <UIcon name="i-mdi-cart-plus" class="text-1xl text-white" />
              </div>
            </div>
          </div>
          <img src="../public/womanModel.jpg" class="rounded" />

          <div
            class="items-end mt-[-40px] w-[120px] lg:w-[180px] ml-3 lg:ml-10 z-10"
          >
            <div
              class="rounded-lg bg-[#fafafa] flex items-center justify-center px-4 py-3 gap-2"
            >
              <div>
                <UIcon name="i-ri-alarm-line" class="text-4xl text-green-400" />
              </div>
              <div class="text-sm md:text-base">
                <div>Delivery</div>
                <div>30 Min</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae eos officia tempore iure, libero quasi est ut quibusdam
          vitae ducimus debitis accusamus odio similique temporibus provident
          cupiditate voluptatum natus.
        </div>
        <div class="flex gap-5">
          <UButton
            class="btn px-3 text-base md:px-6 md:text-lg rounded-full bg-red-500 hover:text-red-500 text-[#fafafa] font-normal"
            >Order Now</UButton
          >
          <UButton
            class="btn px-3 text-base md:px-6 md:text-lg rounded-full bg-white hover:text-red-500 text-[#040921] border-red-500 border-x-red-300 border-b-white font-normal"
            ><UIcon name="i-ri-play-large-fill" class="text-red-500" /> Order
            Process</UButton
          >
        </div>
      </div>

      <div class="col-span-1"></div>
      <div class="hidden col-span-6 md:flex flex-col h-full justify-center">
        <div
          class="mb-[-100px] ml-5 lg:ml-10 w-[140px] lg:w-[180px] h-[200px] bg-[#fafafa] rounded-xl flex flex-col justify-center items-center p-6 gap-5 z-10"
        >
          <div class="flex flex-col items-center gap-1">
            <img src="../public/orange.jpg" />
            <div>Fresh Orange</div>
            <div class="w-[40px] h-[3px] bg-orange-300"></div>
            <div class="font-black text-lg">$44.60</div>
            <div class="text-sm text-gray-400">Free Shipping</div>
            <div class="bg-red-500 p-4 rounded-xl flex justify-center">
              <UIcon name="i-mdi-cart-plus" class="text-2xl text-white" />
            </div>
          </div>
        </div>
        <img src="../public/womanModel.jpg" class="rounded" />

        <div
          class="items-end mt-[-40px] w-[140px] lg:w-[180px] ml-5 lg:ml-10 z-10"
        >
          <div
            class="rounded-lg bg-[#fafafa] flex items-center justify-center px-4 py-3 gap-3"
          >
            <div>
              <UIcon name="i-ri-alarm-line" class="text-4xl text-green-400" />
            </div>
            <div>
              <div>Delivery</div>
              <div>30 Min</div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </Section>
</template>

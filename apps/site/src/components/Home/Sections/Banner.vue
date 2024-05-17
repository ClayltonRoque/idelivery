<script setup lang="ts">
import { Card, Section } from '@idelivery/components';
import { Button } from '@idelivery/components';
</script>

<template>
  <Section>
    <UContainer class="md:grid md:grid-cols-12">
      <div class="col-span-5 flex flex-col gap-8">
        <div>
          <span
            class="bg-cinnabar-100 text-cinnabar-500 rounded-full px-4 py-2"
          >
            More than Faster
            <UIcon name="i-mdi-food"></UIcon>
          </span>
        </div>
        <div class="text-3xl xl:text-6xl font-bold">
          Be The Fastest In Delivering Your
          <span class="text-cinnabar-500">Food</span>
        </div>
        <div class="flex md:hidden flex-col h-full justify-center">
          <div
            class="mb-[-100px] ml-3 lg:ml-10 w-[120px] lg:w-[180px] h-[160px] bg-[#fafafa] rounded-xl flex flex-col justify-center items-center p-4 lg:p-6 gap-5 z-10"
          >
            <div class="flex flex-col items-center gap-1">
              <img src="@/public/orange.png" />
              <div class="text-sm md:text-base">Fresh Orange</div>
              <div class="w-[40px] h-[3px] bg-orange-300"></div>
              <div class="font-black text-lg">$44.60</div>
              <div class="text-sm md:text-base text-gray-400">
                Free Shipping
              </div>
              <Button type="primary" class="p-3 rounded-xl flex justify-center">
                <UIcon name="i-mdi-cart-plus" class="text-1xl text-white" />
              </Button>
            </div>
          </div>
          <img src="@/public/womanModel.jpg" class="rounded" />

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
          <Button
            type="primary"
            class="btn px-3 text-base md:px-6 md:text-lg font-normal"
            :rounded="'rounded-full'"
            >Order Now</Button
          >
          <Button
            type="primary"
            variant="outline"
            rounded="rounded-full"
            class="text-base"
          >
            <UIcon name="i-ri-play-large-fill" /> Order Process</Button
          >
        </div>
      </div>

      <div class="col-span-1"></div>
      <div class="hidden col-span-6 md:flex flex-col h-full justify-center">
        <Card
          class="lg:ml-10 lg:w-[180px] w-[140px] mb-[-100px] ml-5 h-[200px] bg-base-100 rounded-xl flex flex-col justify-center items-center p-6 gap-5 z-10"
        >
          <div class="flex flex-col items-center gap-1">
            <img src="@/public/orange.png" />
            <div>Fresh Orange</div>
            <div class="w-[40px] h-[3px] bg-orange-300"></div>
            <div class="font-black text-lg">$44.60</div>
            <div class="text-sm text-gray-400">Free Shipping</div>
            <Button type="primary" class="p-4 rounded-xl flex justify-center">
              <UIcon name="i-mdi-cart-plus" class="text-2xl text-white" />
            </Button>
          </div>
        </Card>
        <img src="@/public/womanModel.jpg" class="rounded-xl" />

        <div
          class="items-end mt-[-40px] w-[140px] lg:w-[180px] ml-5 lg:ml-10 z-10"
        >
          <div
            class="rounded-lg bg-base-100 flex items-center justify-center px-4 py-3 gap-3"
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

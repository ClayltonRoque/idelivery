<script setup lang="ts">
import { Section } from '@idelivery/components';

const array = [
  '../public/clayltonRoque.jpg',
  '../public/pix.jpg',
  '../public/poroRenekton.jpg',
  '../public/lulu.jpg',
];
</script>

<template>
  <Section>
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-10">
        <div class="flex flex-col items-center gap-3">
          <h2 class="text-[#040921] font-bold text-xl lg:text-3xl">
            Testimonials About Us
          </h2>
          <div class="w-10 h-2 rounded-lg bg-red-500"></div>
          <p class="text-base lg:text-lg mt-2 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Illum, tenetur cum! Labore se.
          </p>
        </div>
        <div class="carousel w-full lg:w-4/5">
          <div
            v-for="(item, index) in array"
            :id="'slide' + index"
            class="carousel-item w-full h-1/2 flex lg:items-center lg:gap-5 relative"
          >
            <a
              :href="'#slide' + (index === 0 ? array.length - 1 : index - 1)"
              class="btn btn-circle hidden lg:flex"
              >❮</a
            >

            <div
              class="flex flex-col lg:flex-row items-center text-center gap-5 lg:gap-10 bg-slate-50 px-16 py-12 lg:px-28 lg:py-16 rounded-3xl border-slate-400 border-[1px] border-solid"
            >
              <NuxtImg
                :src="item"
                class="w-24 h-24 lg:w-32 lg:h-32 rounded-full"
              />

              <div class="flex flex-col flex-wrap gap-8">
                <h2 class="text-sm lg:text-base font-semibold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci doloremque corrupti, excepturi numquam id, molestias
                  quam sequi, necessitatibus eveniet esse cupiditate vero iure
                  repellat possimus delectus! Enim magni officiis est.
                </h2>
                <div>
                  <p class="text-red-500 text-lg font-bold">Claylton Roque</p>
                  <p class="text-xs font-medium">Maracanaú, BR</p>
                </div>
              </div>
            </div>
            <a
              :href="'#slide' + (index === array.length - 1 ? 0 : index + 1)"
              class="btn btn-circle hidden lg:flex"
              >❯</a
            >
            <div
              class="absolute lg:hidden flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2"
            >
              <a
                :href="'#slide' + (index === 0 ? array.length : index - 1)"
                class="btn btn-circle"
                >❮</a
              >
              <a
                :href="'#slide' + (index === array.length ? 0 : index + 1)"
                class="btn btn-circle"
                >❯</a
              >
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </Section>
</template>

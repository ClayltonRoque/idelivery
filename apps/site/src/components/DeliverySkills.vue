<script setup lang="ts">
import { Section } from '@idelivery/components';
</script>

<template>
  <Section class="bg-red-50 pt-[60px]">
    <UContainer>
      <div class="flex flex-col justify-center items-center gap-10">
        <div class="flex flex-col items-center text-center">
          <p class="text-cinnabar-500">What we Serve</p>
          <h2 class="text-[#040921] font-bold text-3xl">
            Your Favorite Food <br />Delivery Partern
          </h2>
        </div>
        <div class="carousel rounded-box w-80 gap-4 md:hidden">
          <div class="carousel-item w-2/3">
            <div class="card w-60 xl:w-80 h-80 bg-base-100">
              <figure class="px-4 pt-6">
                <img
                  src="../public/easyToOrder.png"
                  alt="Shoes"
                  class="rounded-xl w-30 h-40"
                />
              </figure>
              <div class="card-body items-center text-center p-4">
                <h2 class="card-title">Fastest Delivery</h2>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  labore
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item w-2/3">
            <div class="card w-60 xl:w-80 h-80 bg-base-100">
              <figure class="px-4 pt-6">
                <img
                  src="../public/fastDeliveryy.png"
                  alt="Shoes"
                  class="rounded-xl w-30 h-40"
                />
              </figure>
              <div class="card-body items-center text-center p-4">
                <h2 class="card-title">Fastest Delivery</h2>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  labore
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item w-2/3">
            <div class="card w-60 xl:w-80 h-80 bg-base-100">
              <figure class="px-4 pt-6">
                <img
                  src="../public/pizzaiolo.jpg"
                  alt="Shoes"
                  class="rounded-xl w-30 h-40"
                />
              </figure>
              <div class="card-body items-center text-center p-4">
                <h2 class="card-title">Fastest Delivery</h2>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  labore
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden md:flex flex-col md:flex-row justify-center gap-4 lg:gap-12"
        >
          <div class="card w-60 xl:w-80 h-80 bg-base-100">
            <figure class="px-4 pt-6">
              <img
                src="../public/easyToOrder.png"
                alt="Shoes"
                class="rounded-xl w-30 h-40"
              />
            </figure>
            <div class="card-body items-center text-center p-4">
              <h2 class="card-title">Fastest Delivery</h2>
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                labore
              </p>
            </div>
          </div>
          <div class="card w-60 xl:w-80 bg-base-100 somber">
            <figure class="px-4 pt-6">
              <img
                src="../public/fastDeliveryy.png"
                alt="Shoes"
                class="rounded-xl w-30 h-40"
              />
            </figure>
            <div class="card-body items-center text-center p-4">
              <h2 class="card-title">Fastest Delivery</h2>
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                labore
              </p>
            </div>
          </div>
          <div class="card w-60 xl:w-80 bg-base-100">
            <figure class="px-4 pt-6">
              <img
                src="../public/pizzaiolo.jpg"
                alt="Shoes"
                class="rounded-xl w-30 h-40"
              />
            </figure>
            <div class="card-body items-center text-center p-4">
              <h2 class="card-title">Fastest Delivery</h2>
              <p class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </Section>
</template>
<style lang="postcss">
.somber {
  -webkit-box-shadow: 0px 0px 40px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 40px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 40px -7px rgba(0, 0, 0, 0.75);
}
</style>

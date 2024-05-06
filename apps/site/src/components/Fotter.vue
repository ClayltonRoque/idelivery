<script setup lang="ts">
import { Section } from '@idelivery/components';
</script>
<template>
  <div class="pt-[100px] lg:pt-[160px] pb-[30px]">
    <div class="px-14 lg:px-[120px]">
      <div class="flex flex-col gap-6 lg:gap-0 lg:grid grid-cols-11">
        <div class="col-span-5">
          <div class="flex flex-col lg:items-start gap-4">
            <a
              class="btn btn-ghost text-2xl md:text-3xl gap-0 p-0 tracking-[1px] font-bold"
              >F<span class="text-red-500">OO</span>D</a
            >
            <p class="lg:w-1/2 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam
              minima suscipit architecto similique debitis dolore quasi ad, ex
              iste officiis consequuntur deserunt voluptatum vel, fuga veniam
              accusantium recusandae aliquam!
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <div class="flex flex-col lg:items-start gap-3 text-gray-500">
            <h3 class="text-xl mb-4 font-medium text-[#040921] lg:text-center">
              Company
            </h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>All Products</p>
            <p>Locations Map</p>
          </div>
        </div>
        <div class="col-span-2">
          <div class="flex flex-col items-start gap-3 text-gray-500">
            <h3 class="text-xl mb-4 font-medium text-[#040921]">Services</h3>
            <p>Order tracking</p>
            <p>Wish List</p>
            <p>My account</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div class="col-span-2">
          <div
            class="flex flex-col items-start justify-center gap-4 h-full text-gray-500"
          >
            <h3 class="text-xl mb-4 font-medium text-[#040921]">
              Get in Touch
            </h3>
            <p class="lg:w-3/4">
              Subscribe to our weekly Newsletter and recieve updates via email.
            </p>
            <div class="flex flex-col lg:flex-row items-center gap-4">
              <input
                class="rounded-full border-solid border-red-500 border-[1px] opacity-50 -ml-2 px-3 py-1"
                placeholder="Enter Your Email Adress"
              />
              <UButton class="rounded-full p-4 bg-red-500"
                ><UIcon name="i-mdi-email-arrow-right" class="text-xl"
              /></UButton>
            </div>
          </div>
        </div>
      </div>
      <div class="text-gray-400 mt-20">
        <div class="w-full h-[1px] bg-gray-400"></div>
        <div class="flex justify-between mt-6">
          <p>All Rights Reserved @ Company 2022</p>
          <div class="flex gap-8">
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

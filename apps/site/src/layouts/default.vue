<script setup lang="ts">
import { Section } from '@idelivery/components';
</script>

<template>
  <Section>
    <UContainer>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Home</a></li>
              <li><a>Menu</a></li>
              <li><a>Service</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-3xl gap-0 tracking-[1px]"
            >F<span class="text-red-500">OO</span>D</a
          >
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Menu</a></li>
            <li><a>Service</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div class="navbar-end gap-5">
          <a>
            <UIcon name="i-mdi-magnify" class="icon-large" />
          </a>
          <a>
            <UIcon name="i-ri-shopping-basket-line" class="icon-large" />
          </a>
          <a class="btn justify-center px-6 text-lg rounded-full bg-red-500"
            >Sign in <UIcon name="i-ri-arrow-right-line" class="text-xl"
          /></a>
        </div>
      </div>
    </UContainer>
  </Section>
</template>

<style lang="postcss">
.icon-large {
  @apply text-2xl;
}
</style>

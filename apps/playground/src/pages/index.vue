<script setup lang="ts">
import { Button } from '@idelivery/components';

const propsButton = ref({
  text: 'Button',
  color: 'gray',
  variant: 'solid',
  icon: '',
  size: 'sm',
  disabled: false,
  loading: false,
  iconLeft: 'false',
  link: '',
  target: '',
  padding: true,
  square: false,
});

const items = [
  [
    {
      label: 'Solid',
      click: () => {
        propsButton.value.variant = 'solid';
      },
    },
    {
      label: 'Link',
      click: () => {
        propsButton.value.variant = 'link';
      },
    },
    {
      label: 'Outline',
      click: () => {
        propsButton.value.variant = 'outline';
      },
    },
    {
      label: 'Soft',
      click: () => {
        propsButton.value.variant = 'soft';
      },
    },
    {
      label: 'Ghost',
      click: () => {
        propsButton.value.variant = 'ghost';
      },
    },
  ],
];

const itemsSize = [
  [
    {
      label: '2xs',
      click: () => {
        propsButton.value.size = '2xs';
      },
    },
    {
      label: 'xs',
      click: () => {
        propsButton.value.size = 'xs';
      },
    },
    {
      label: 'sm',
      click: () => {
        propsButton.value.size = 'sm';
      },
    },
    {
      label: 'md',
      click: () => {
        propsButton.value.size = 'md';
      },
    },
    {
      label: 'lg',
      click: () => {
        propsButton.value.size = 'lg';
      },
    },
    {
      label: 'xl',
      click: () => {
        propsButton.value.size = 'xl';
      },
    },
  ],
];
const itemsColor = [
  [
    {
      label: 'cinnabar',
      click: () => {
        propsButton.value.color = 'cinnabar';
      },
    },
    {
      label: 'malachite',
      click: () => {
        propsButton.value.color = 'malachite';
      },
    },
    {
      label: 'danger',
      click: () => {
        propsButton.value.color = 'danger';
      },
    },
    {
      label: 'caution',
      click: () => {
        propsButton.value.color = 'caution';
      },
    },
  ],
];

function notify() {
  alert('Hello Primary');
}
</script>

<template>
  <UContainer>
    <div>
      <h1 class="text-center">components</h1>
      <div>
        <h2>Buttons</h2>
        <div class="flex gap-4">
          <Button
            icon="i-ri-filter-2-fill"
            text-color="cinnabar-500"
            color="malachite"
          ></Button>
          <Button icon="i-ri-filter-2-fill" label="button icon right"></Button>
          <Button
            icon="i-ri-filter-2-fill"
            label="button icon left"
            trailing="true"
            color="cinnabar"
          ></Button>
          <Button label="loading button" loading="true"></Button>
          <Button label="disabled button" disabled></Button>
          <Button
            label="target button"
            to="https://volta.net"
            target="_blank"
          ></Button>
          <Button label="no padding button" :padded="false"></Button>
          <Button label="square button" square="true"></Button>
        </div>
        <h2 class="mt-4">Variant</h2>
        <div class="flex gap-4">
          <Button label="button"></Button>
          <Button label="button link" variant="link"></Button>
          <Button label="button outline" variant="outline"></Button>
          <Button label="button soft" variant="soft"></Button>
          <Button label="button ghost" variant="ghost"></Button>
        </div>
        <h2 class="mt-4">Size</h2>
        <div class="flex items-end gap-4">
          <Button label="button" size="2xs"></Button>
          <Button label="button" size="xs"></Button>
          <Button label="button" size="sm"></Button>
          <Button label="button" size="md"></Button>
          <Button label="button" size="lg"></Button>
          <Button label="button" size="xl"></Button>
        </div>

        <div class="flex items-end gap-4">
          <Button>Default</Button>
          <Button type="primary" variant="soft"> Primary </Button>
          <Button type="success" variant="outline" rounded="rounded-full"
            >Success</Button
          >
        </div>

        <h2 class="mt-4">Personalize</h2>
        <div class="flex flex-col">
          <div class="flex gap-4 mt-4">
            <UInput
              placeholder="text"
              v-model="propsButton.text"
              class="w-20"
            />
            <UDropdown
              :items="items"
              class="w-20"
              :popper="{ placement: 'bottom-start' }"
            >
              <UButton
                label="Variant"
                :trailing="true"
                icon="i-ri-arrow-down-line"
              ></UButton>
            </UDropdown>

            <UDropdown
              :items="itemsSize"
              class="w-20"
              :popper="{ placement: 'bottom-start' }"
            >
              <UButton
                label="Size"
                :trailing="true"
                icon="i-ri-arrow-down-line"
              ></UButton>
            </UDropdown>

            <UDropdown
              :items="itemsColor"
              class="w-20"
              :popper="{ placement: 'bottom-start' }"
            >
              <UButton
                label="Color"
                :trailing="true"
                icon="i-ri-arrow-down-line"
              ></UButton>
            </UDropdown>
          </div>

          <div>
            <Button
              :label="propsButton.text"
              :variant="propsButton.variant"
              :size="propsButton.size"
              :color="propsButton.color"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped lang="postcss">
div {
  .button {
    @apply mt-4;
  }
  h1 {
    @apply text-5xl font-bold;
  }
  h2 {
    @apply text-3xl font-semibold;
  }
}
</style>

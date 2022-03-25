<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const classifierMethod = computed(() => {
  return router.currentRoute.value.name === "main-page" ? "file" : "webcam";
});
</script>

<template>
  <div class="flex flex-wrap justify-center mx-auto w-full">
    <router-link
      to="/"
      class="cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
      :class="[
        classifierMethod === 'file'
          ? 'border-stone-500 dark:border-slate-100 text-stone-900 dark:text-slate-100'
          : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-400 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
      ]"
    >
      <font-awesome-icon icon="image" class="w-4 h-4" aria-hidden="true" />
      <span class="ml-2 lg:ml-4">File</span>
    </router-link>
    <router-link
      to="/webcam"
      class="cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
      :class="[
        classifierMethod === 'webcam'
          ? 'border-stone-500 dark:border-slate-100 text-stone-900 dark:text-slate-100'
          : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-400 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
      ]"
    >
      <font-awesome-icon icon="camera" class="w-4 h-4" aria-hidden="true" />
      <span class="ml-2 lg:ml-4">Webcam</span>
    </router-link>
  </div>
</template>

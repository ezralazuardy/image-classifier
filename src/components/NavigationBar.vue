<script lang="ts">
import { defineComponent } from "vue";
import ThemeToggler from "./ThemeToggler.vue";

export default defineComponent({
  components: {
    ThemeToggler,
  },
});
</script>

<template>
  <div class="bg-slate-400 dark:bg-slate-700 pb-32 transition">
    <header class="pt-14 lg:pt-24 pb-6 lg:pb-8">
      <div
        class="flex items-center justify-between max-w-7xl mx-auto pl-5 pr-4 lg:pl-8 lg:pr-6"
      >
        <h1
          class="text-2xl lg:text-3xl font-semibold text-stone-900 dark:text-slate-100 transition"
        >
          Image Classifier
        </h1>
        <ThemeToggler />
      </div>
    </header>
  </div>
</template>

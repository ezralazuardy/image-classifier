<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const classifierMethod = computed(() => {
  return router.currentRoute.value.name === "main-page" ? "file" : "webcam";
});
</script>

<template>
  <div class="flex p-1 space-x-1 bg-slate-600 dark:bg-slate-800 rounded-xl">
    <router-link
      to="/"
      :class="[
        'w-full py-2.5 text-sm leading-5 font-bold rounded-lg text-center transition',
        classifierMethod === 'file'
          ? 'bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-100 shadow'
          : 'text-slate-100 hover:bg-white/[0.12] hover:text-white',
      ]"
    >
      File
    </router-link>
    <router-link
      to="/webcam"
      :class="[
        'w-full py-2.5 text-sm leading-5 font-bold rounded-lg text-center transition',
        classifierMethod === 'webcam'
          ? 'bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-100 shadow'
          : 'text-slate-100 hover:bg-white/[0.12] hover:text-white',
      ]"
    >
      Webcam
    </router-link>
  </div>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-slate-200 dark:bg-slate-800 min-h-screen transition">
    <RouterView />
    <Footer />
  </div>
</template>

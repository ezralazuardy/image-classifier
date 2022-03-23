<script setup lang="ts">
import Container from "@/components/Container.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <main class="-mt-32">
    <Container>
      <div class="bg-white rounded-lg drop-shadow-2xl px-5 py-6 sm:px-6">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
    </Container>
  </main>
</template>

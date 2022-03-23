<script lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/outline";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    SunIcon,
    MoonIcon,
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
});
</script>

<template>
  <button
    class="p-2 transition text-white active:text-gray-400 hover:scale-125"
    title="Toggle theme"
  >
    <SunIcon @click="toggleTheme" class="h-8 w-8" aria-hidden="true" />
  </button>
</template>

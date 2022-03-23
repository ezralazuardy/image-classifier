<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ThemeToggler from "./ThemeToggler.vue";

export default defineComponent({
  components: {
    ThemeToggler,
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      alert(newTheme === "light");
      newTheme === "light"
        ? document?.querySelector("html")?.classList.remove("dark")
        : document?.querySelector("html")?.classList.add("dark");
    },
  },
});
</script>

<template>
  <div class="bg-gray-800 pb-32">
    <header class="pt-16 lg:pt-24 pb-8">
      <div
        class="flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-6 lg:px-8"
      >
        <h1 class="text-3xl font-bold text-white">Image Classifier</h1>
        <ThemeToggler />
      </div>
    </header>
  </div>
</template>

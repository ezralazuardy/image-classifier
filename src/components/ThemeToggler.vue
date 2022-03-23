<script lang="ts">
import { mapGetters } from "vuex";
import { SunIcon, MoonIcon } from "@heroicons/vue/outline";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    SunIcon,
    MoonIcon,
  },
  setup() {
    return {
      lightTheme: ref(true),
    };
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      if (newTheme === "light") {
        document?.querySelector("html")?.classList.remove("dark");
        document
          ?.querySelector("#light-theme-toggle-icon")
          ?.classList.remove("hidden");
        document
          ?.querySelector("#dark-theme-toggle-icon")
          ?.classList.add("hidden");
        this.lightTheme = true;
      } else {
        document?.querySelector("html")?.classList.add("dark");
        document
          ?.querySelector("#light-theme-toggle-icon")
          ?.classList.add("hidden");
        document
          ?.querySelector("#dark-theme-toggle-icon")
          ?.classList.remove("hidden");
        this.lightTheme = false;
      }
    },
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
    class="p-2 active:scale-100 hover:scale-125 transition"
    title="Toggle theme"
    @click="toggleTheme"
  >
    <SunIcon
      id="light-theme-toggle-icon"
      aria-hidden="true"
      class="h-7 lg:h-8 w-7 lg:w-8 text-stone-900 active:text-stone-600"
      :class="[lightTheme ? '' : 'hidden']"
    />
    <MoonIcon
      id="dark-theme-toggle-icon"
      aria-hidden="true"
      class="h-7 lg:h-8 w-7 lg:w-8 text-slate-100 active:text-slate-400"
      :class="[lightTheme ? 'hidden' : '']"
    />
  </button>
</template>

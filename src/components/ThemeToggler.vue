<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from "vue";
import { useStore } from "vuex";
import { SunIcon, MoonIcon } from "@heroicons/vue/outline";

const sunIcon = ref<HTMLElement>();
const moonIcon = ref<HTMLElement>();

const lightTheme = ref(true);
const store = useStore();
const theme = computed(() => {
  return store.getters.theme;
});

onBeforeMount(() => {
  store.dispatch("initTheme");
});

watch(theme, async (newTheme, oldTheme) => {
  if (newTheme === "light") {
    document?.querySelector("html")?.classList.remove("dark");
    sunIcon?.value?.classList.remove("hidden");
    moonIcon?.value?.classList.add("hidden");
    lightTheme.value = true;
    return;
  }
  document?.querySelector("html")?.classList.add("dark");
  sunIcon?.value?.classList.add("hidden");
  moonIcon?.value?.classList.remove("hidden");
  lightTheme.value = false;
});

async function toggleTheme() {
  store.dispatch("toggleTheme");
}
</script>

<template>
  <button
    class="p-2 active:scale-100 hover:scale-125 transition"
    title="Toggle theme"
    @click="toggleTheme"
  >
    <SunIcon
      ref="sunIcon"
      aria-hidden="true"
      class="h-7 lg:h-8 w-7 lg:w-8 text-stone-900 active:text-slate-600 hover:motion-safe:animate-spin"
      :class="[lightTheme ? '' : 'hidden']"
    />
    <MoonIcon
      ref="moonIcon"
      aria-hidden="true"
      class="h-7 lg:h-8 w-7 lg:w-8 text-slate-100 active:text-slate-400 hover:motion-safe:animate-pulse"
      :class="[lightTheme ? 'hidden' : '']"
    />
  </button>
</template>

<script setup lang="ts">
import Container from "../components/Container.vue";
import NavigationBar from "../components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <main class="-mt-32">
    <Container>
      <div
        class="bg-neutral-100 dark:bg-stone-900 rounded-2xl drop-shadow-2xl p-8 lg:p-14 transition"
      >
        <div class="flex flex-wrap w-full">
          <div class="flex relative w-full pb-24">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div
                class="h-full w-1 bg-neutral-600 dark:bg-neutral-300 pointer-events-none transition"
              ></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-10"
            >
              <span>1</span>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-bold title-font text-sm text-gray-800 dark:text-gray-400 my-3 tracking-wider uppercase"
              >
                Choose object type
              </h2>
              <div
                class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
              >
                <p>Please choose the object type inside your image target.</p>
              </div>
            </div>
          </div>
          <div class="flex relative w-full pb-24">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-10"
            >
              <span>2</span>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-bold title-font text-sm text-gray-800 dark:text-gray-400 my-3 tracking-wider uppercase"
              >
                Get the classification result
              </h2>
              <div
                class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
              >
                <p>
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>

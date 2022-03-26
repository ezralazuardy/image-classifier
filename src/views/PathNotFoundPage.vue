<script setup lang="ts">
import Container from "../components/Container.vue";
import NavigationBar from "../components/NavigationBar.vue";
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <main class="-mt-32">
      <Container>
        <div
          class="bg-neutral-100 dark:bg-stone-900 rounded-2xl drop-shadow-2xl p-8 lg:p-14 lg:space-x-16 flex flex-col lg:flex-row transition"
        >
          <div class="w-full">
            <img
              class="rounded-xl drop-shadow-xl hover:scale-105 active:scale-95 cursor-pointer w-full aspect-square object-cover bg-gray-400 dark:bg-gray-600 transition"
              src="../assets/images/404.gif"
            />
          </div>
          <div
            class="w-full mt-8 lg:mt-0 text-stone-900 dark:text-slate-100 lg:pt-24"
          >
            <div class="font-black text-4xl lg:text-5xl tracking-normal">
              <p>404 and</p>
              <p class="mt-2">heartbreaks.</p>
            </div>
            <p class="mt-6 lg:mt-8 font-medium text-lg">
              Sometimes it's sad to find out that you can't get something or
              someone that you like and love. Give up now, the <i>page</i> you
              looking for is not there for you.
            </p>
            <p class="mt-12 lg:mt-16">
              <a
                title="Back to main page"
                href="/"
                class="font-semibold animate-pulse hover:animate-none text-lg text-gray-700 dark:text-gray-300 active:text-gray-900 dark:active:text-gray-400 transition"
              >
                <font-awesome-icon
                  icon="arrow-left"
                  class="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Take me back</span>
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>

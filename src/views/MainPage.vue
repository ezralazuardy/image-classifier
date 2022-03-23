<script setup lang="ts">
import Container from "../components/Container.vue";
import NavigationBar from "../components/NavigationBar.vue";
import Classifier from "../components/Classifier.vue";
</script>

<template>
  <NavigationBar />
  <main class="-mt-32">
    <Container>
      <div
        class="bg-neutral-100 dark:bg-stone-900 rounded-2xl drop-shadow-2xl p-6 lg:p-14 transition"
      >
        <div class="flex flex-wrap w-full">
          <div class="flex relative w-full pb-8">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div
                class="h-full w-1 bg-neutral-600 dark:bg-neutral-400 pointer-events-none transition"
              ></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-20"
            >
              <font-awesome-icon icon="1" class="w-3 h-3" />
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
                <div class="w-full">
                  <p>
                    Pick the right object type for your desired image target.
                  </p>
                </div>
                <div class="mt-8 w-full">
                  <div>
                    <a
                      href="https://unsplash.com/s/photos/cat"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Find cat images"
                    >
                      <div
                        class="active:scale-100 hover:scale-105 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 active:text-slate-600 dark:active:text-stone-400 transition flex rounded-xl border-2 border-gray-400 border-opacity-50 px-6 py-4 sm:flex-row flex-col"
                      >
                        <div
                          class="w-10 h-10 lg:w-12 lg:h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 flex-shrink-0"
                        >
                          <font-awesome-icon
                            icon="cat"
                            class="w-5 h-5 lg:w-6 lg:h-6"
                          />
                        </div>
                        <div
                          class="flex-grow text-stone-900 dark:text-slate-100"
                        >
                          <h2 class="text-md title-font font-bold">Cat</h2>
                          <p class="leading-relaxed text-sm">
                            Cat is cute. Find some very cute cat on Unsplash
                            now!
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="mt-4">
                    <a
                      href="https://unsplash.com/s/photos/dog"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Find dog images"
                    >
                      <div
                        class="active:scale-100 hover:scale-105 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 active:text-slate-600 dark:active:text-stone-400 transition flex rounded-xl border-2 border-gray-400 border-opacity-50 px-6 py-4 sm:flex-row flex-col"
                      >
                        <div
                          class="w-10 h-10 lg:w-12 lg:h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 flex-shrink-0"
                        >
                          <font-awesome-icon
                            icon="dog"
                            class="w-5 h-5 lg:w-6 lg:h-6"
                          />
                        </div>
                        <div
                          class="flex-grow text-stone-900 dark:text-slate-100"
                        >
                          <h2 class="text-md title-font font-bold">Dog</h2>
                          <p class="leading-relaxed text-sm">
                            Even though cats are cute, dog is more loyal to you.
                            Find them at Unsplash.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex relative w-full pb-8">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div
                class="h-full w-1 bg-neutral-600 dark:bg-neutral-400 pointer-events-none transition"
              ></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-10"
            >
              <font-awesome-icon icon="2" class="w-3 h-3" />
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-bold title-font text-sm text-gray-800 dark:text-gray-400 my-3 tracking-wider uppercase"
              >
                Prepare your image
              </h2>
              <div
                class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
              >
                <div class="w-full">
                  <p>
                    You can do the image classification with webcam or by
                    manually upload an image. Uploading an image manually will
                    result in better classification accuracy. Just make sure to
                    print the image if you want to classify by webcam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex relative w-full">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-10"
            >
              <font-awesome-icon icon="3" class="w-3 h-3" />
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-bold title-font text-sm text-gray-800 dark:text-gray-400 my-3 tracking-wider uppercase"
              >
                Start classifying!
              </h2>
              <div
                class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
              >
                <div class="w-full">
                  <p>
                    Pick the classifier method and start classifying your image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full">
          <Classifier />
        </div>
      </div>
    </Container>
  </main>
</template>

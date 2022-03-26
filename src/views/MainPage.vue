<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Container from "../components/Container.vue";
import NavigationBar from "../components/NavigationBar.vue";
import ImageFileClassifier from "../components/ImageFileClassifier.vue";
import ImageWebcamClassifier from "../components/ImageWebcamClassifier.vue";
import Dialog from "../components/Dialog.vue";

const router = useRouter();

const resultPanel = ref<HTMLElement>();
const resultPanelStep = ref<HTMLElement>();
const confidenceCounter = ref<any>();
const unknownCategory = ref(false);
const resultPanelOpened = ref(false);
const resultPanelTitle = ref("");
const cachedConfidence = ref(0);
const confidence = ref(0);
const category = ref("");
const fact = ref("");
const helpDialogOpened = ref(false);

const classifierMethod = computed(() => {
  const routeName =
    router.currentRoute.value.name === "main-page" ? "file" : "webcam";
  if (routeName === "file") hideResultPanel();
  return routeName;
});

watch(classifierMethod, () => {
  hideResultPanel();
});

watch(confidence, () => {
  confidenceCounter.value.start();
});

function openHelpDialog(state) {
  helpDialogOpened.value = state;
}

async function onClassificationProgress() {
  await hideResultPanel();
}

async function onClassificationImageRemoved() {
  await hideResultPanel();
}

async function onClassificationResult(data) {
  await updateClassificationData(data);
  await showResultPanel();
}

async function onClassificationStream(data) {
  await updateClassificationData(data);
  await showResultPanel(true);
}

async function updateClassificationData({
  newConfidence,
  newCategory,
  newFact,
}) {
  unknownCategory.value = newCategory.toLocaleLowerCase() === "unknown";
  cachedConfidence.value = confidence.value;
  confidence.value = newConfidence;
  category.value = unknownCategory.value
    ? "Whoops! what is that thing?"
    : `It's a ${newCategory}!`;
  fact.value = unknownCategory.value
    ? "Looks like an error has occurred. Somehow, our system can't detect the object inside your image target. Please try again later or contact the author."
    : newFact;
}

async function showResultPanel(asStream: boolean = false) {
  setTimeout(() => {
    if (resultPanelOpened.value) return;
    resultPanelOpened.value = true;
    resultPanelTitle.value = `Check your result${asStream ? " (Live)" : ""}`;
    resultPanel?.value?.classList.replace("hidden", "flex");
    resultPanel?.value?.classList.replace("opacity-100", "opacity-0");
    resultPanelStep?.value?.classList.replace("hidden", "flex");
    resultPanelStep?.value?.classList.replace("opacity-100", "opacity-0");
    setTimeout(() => {
      resultPanel?.value?.classList.replace("opacity-0", "opacity-100");
      resultPanelStep?.value?.classList.replace("opacity-0", "opacity-100");
    }, 250);
  }, 250);
}

async function hideResultPanel() {
  setTimeout(() => {
    resultPanelOpened.value = false;
    resultPanel?.value?.classList.replace("opacity-100", "opacity-0");
    resultPanelStep?.value?.classList.replace("opacity-100", "opacity-0");
    setTimeout(() => {
      resultPanel?.value?.classList.replace("flex", "hidden");
      resultPanelStep?.value?.classList.replace("flex", "hidden");
    }, 250);
  }, 250);
}
</script>

<template>
  <div class="min-h-screen">
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
                      Using an unsupported object type will result in ambiguous
                      result.
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
                          class="active:scale-100 hover:scale-105 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 active:text-slate-600 dark:active:text-stone-400 transition flex rounded-xl border-2 border-slate-600 dark:border-slate-500 border-opacity-50 px-6 py-4 sm:flex-row flex-col"
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
                          class="active:scale-100 hover:scale-105 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 active:text-slate-600 dark:active:text-stone-400 transition flex rounded-xl border-2 border-slate-600 dark:border-slate-500 border-opacity-50 px-6 py-4 sm:flex-row flex-col"
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
                              Even though cats are cute, dog is more loyal to
                              you. Find them at Unsplash.
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
                      result in better classification accuracy. Make sure to
                      print the image and use better room lighting if you want
                      to classify by webcam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex relative w-full pb-8 lg:pb-0">
              <div
                ref="resultPanelStep"
                class="h-full w-10 absolute inset-0 hidden opacity-0 items-center justify-center transition"
              >
                <div
                  class="h-full w-1 bg-neutral-600 dark:bg-neutral-400 pointer-events-none transition"
                ></div>
              </div>
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
                      Pick the classifier method and start classifying your
                      image.
                    </p>
                  </div>
                  <div class="w-full">
                    <keep-alive>
                      <ImageFileClassifier
                        v-if="classifierMethod === 'file'"
                        @progress="onClassificationProgress"
                        @result="onClassificationResult"
                        @image-file-removed="onClassificationImageRemoved"
                      />
                    </keep-alive>
                    <keep-alive>
                      <ImageWebcamClassifier
                        v-if="classifierMethod === 'webcam'"
                        @stream="onClassificationStream"
                      />
                    </keep-alive>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref="resultPanel"
              class="hidden relative w-full opacity-0 transition"
            >
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-10"
              >
                <div
                  class="animate-ping flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative z-10"
                ></div>
                <div class="absolute">
                  <font-awesome-icon
                    icon="magnifying-glass"
                    class="w-3 h-3"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-bold title-font text-sm text-gray-800 dark:text-gray-400 my-3 tracking-wider uppercase"
                >
                  {{ resultPanelTitle }}
                </h2>
                <div
                  class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
                >
                  <div class="w-full">
                    <p>Cat or dog? here is the classified result!</p>
                  </div>
                  <div
                    class="mt-4 p-6 w-full bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-gray-400 border-opacity-50"
                  >
                    <div
                      class="text-start w-full text-stone-900 dark:text-slate-100"
                    >
                      <div class="flex flex-row w-full">
                        <span
                          class="animate-bounce w-8/12 text-xl font-bold title-font pt-1"
                        >
                          {{ category }}
                        </span>
                        <div class="flex w-4/12 justify-end">
                          <span
                            @click="openHelpDialog(true)"
                            class="active:scale-100 hover:scale-125 active:text-slate-600 dark:active:text-slate-400 cursor-pointer transition"
                          >
                            <font-awesome-icon
                              icon="circle-question"
                              class="w-5 h-5"
                            />
                          </span>
                        </div>
                      </div>
                      <p class="mx-auto leading-relaxed text-sm mt-3">
                        {{ fact }}
                      </p>
                      <p
                        class="mx-auto leading-relaxed text-sm mt-6"
                        :class="[unknownCategory ? 'hidden' : '']"
                      >
                        <span class="font-semibold mr-1">Confidence: </span>
                        <vue3-autocounter
                          ref="confidenceCounter"
                          suffix="%"
                          :autoinit="true"
                          :startAmount="cachedConfidence"
                          :endAmount="confidence"
                          :duration="1"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Dialog
        :show="helpDialogOpened"
        @close="openHelpDialog(false)"
        title="Where are these data come from?"
      >
        <template #content>
          <p>
            Image Classifier uses a Supervised Machine Learning Model that built
            using
            <a
              href="https://teachablemachine.withgoogle.com"
              rel="noopener noreferrer"
              target="_blank"
              class="font-semibold text-gray-700 dark:text-gray-300 hover:underline active:text-gray-900 dark:active:text-gray-400 transition"
              >Teachable Machine</a
            >
            with the image dataset provided by
            <a
              href="https://kaggle.com"
              rel="noopener noreferrer"
              target="_blank"
              class="font-semibold text-gray-700 dark:text-gray-300 hover:underline active:text-gray-900 dark:active:text-gray-400 transition"
              >Kaggle</a
            >. For development purposes, check out this project source code at
            <a
              href="https://github.com/ezralazuardy/image-classifier"
              rel="noopener noreferrer"
              target="_blank"
              class="font-semibold text-gray-700 dark:text-gray-300 hover:underline active:text-gray-900 dark:active:text-gray-400 transition"
              >GitHub</a
            >.
          </p>
          <p class="mt-3">
            Please contact the
            <a
              href="https://ezralazuardy.com"
              rel="noopener noreferrer"
              target="_blank"
              class="font-semibold text-gray-700 dark:text-gray-300 hover:underline active:text-gray-900 dark:active:text-gray-400 transition"
              >author</a
            >
            if you have any question or just want to report a bug.
          </p>
        </template>
        <template #buttons>
          <button
            @click="openHelpDialog(false)"
            class="w-full inline-flex justify-center px-4 py-2 mt-2 sm:ml-3 sm:w-auto text-stone-900 dark:text-slate-100 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-800 rounded-xl transition"
          >
            Close
          </button>
        </template>
      </Dialog>
    </main>
  </div>
</template>

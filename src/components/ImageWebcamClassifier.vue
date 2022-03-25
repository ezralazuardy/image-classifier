<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import ml5 from "ml5";
import FilePond from "./FilePond.vue";

const router = useRouter();
const emit = defineEmits([
  "progress",
  "result",
  "imageFileAdded",
  "imageFileRemoved",
]);

const inputImageFile = ref<HTMLInputElement>();

const imageFile = ref(new Image());
const imageFileLoaded = ref(false);
const classificationProgress = ref(false);
const confindence = ref("");
const category = ref("");
const fact = ref("");

const classifierMethod = computed(() => {
  console.log(router.currentRoute.value.name);
  return router.currentRoute.value.name === "main-page" ? "file" : "webcam";
});

const catFacts = [
  `Believe it or not, cats can dream.`,
  `Fun fact, cats have an extra organ that allows them to taste scents in the air.`,
  `Did you know that each cat's nose is unique? it's much like human fingerprints.`,
  `Did you know that cats can run around 48 kph (30 mph), but only over short distances? A house cat could beat superstar runner Usain Bolt in the 200 meter dash.`,
  `Here's a fact. An adult cat's brain is approximately 5 cm (2 inches) long and weighs about 30g and has nearly twice the amount of neurons in their cerebral cortex than dogs.`,
];
const dogFacts = [
  `Your blood pressure can go down when petting a dog, and so does the dog's..`,
  `Fun fact, a group of pugs is called a "grumble".`,
  `Like a superpower, dog's eyes contain a special membrane called the tapetum lucidum. It allows them to see in the dark.`,
  `Did you know that dogs can smell about 1,000-10,000 times better than humans? While humans have 5 million smell-detecting cells, dogs have more than 220 million. The part of the brain that interprets smell is also four times larger in dogs than in humans.`,
  `Jeez! it costs approximately $10,000 to train a dog for federally certified search and rescue.`,
];

function pickRandomFact(facts) {
  return facts[Math.floor(Math.random() * facts.length)];
}

async function onImageFileAdded(error, image) {
  if (error) {
    console.error(error);
    return;
  }
  imageFile.value.src = image.getFileEncodeDataURL();
  imageFileLoaded.value = true;
  emit("imageFileAdded");
}

async function onImageFileRemoved() {
  imageFile.value.src = "";
  imageFileLoaded.value = false;
  emit("imageFileRemoved");
}

async function onClassificationProgress() {
  emit("progress");
  classificationProgress.value = true;
}

async function onClassificationResult() {
  emit("result", {
    newConfidence: confindence.value,
    newCategory: category.value,
    newFact: fact.value,
  });
  setTimeout(() => {
    classificationProgress.value = false;
  }, 500);
}

async function onClassified(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  if (result.length <= 0) {
    category.value = "Unknown";
    confindence.value = "100%";
    return;
  }
  confindence.value = `${result[0].confidence.toFixed(2) * 100}%`;
  category.value = result[0].label;
  fact.value = pickRandomFact(
    result[0].label.toLocaleLowerCase() === "cat" ? catFacts : dogFacts
  );
}

async function startClassification() {
  await onClassificationProgress();
  await performClassification();
  await onClassificationResult();
}

async function performClassification() {
  if (!imageFileLoaded.value) {
    alert("Please pick the image file before classifying");
    return;
  }
  const classifier = await ml5.imageClassifier(
    import.meta.env.VITE_TM_MODEL_URL + "/model.json"
  );
  await classifier.classify(imageFile.value, onClassified);
}
</script>

<template>
  <div class="mt-4 text-md text-stone-900 dark:text-slate-100">
    <div class="flex flex-wrap justify-center mx-auto w-full">
      <router-link
        to="/"
        class="cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
        :class="[
          classifierMethod === 'file'
            ? 'border-stone-500 dark:border-slate-100 text-stone-900 dark:text-slate-100'
            : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-400 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
        ]"
      >
        <font-awesome-icon icon="image" class="w-4 h-4" aria-hidden="true" />
        <span class="ml-2 lg:ml-4">File</span>
      </router-link>
      <router-link
        to="/webcam"
        class="cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
        :class="[
          classifierMethod === 'webcam'
            ? 'border-stone-500 dark:border-slate-100 text-stone-900 dark:text-slate-100'
            : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-400 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
        ]"
      >
        <font-awesome-icon icon="camera" class="w-4 h-4" aria-hidden="true" />
        <span class="ml-2 lg:ml-4">Webcam</span>
      </router-link>
    </div>
    <FilePond
      ref="inputImageFile"
      name="input-image-file"
      label-idle="Pick Image File"
      accepted-file-types="image/*"
      class="mt-6 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 rounded-xl border-2 border-gray-400 border-opacity-80 border-dashed cursor-pointer transition"
      @addfile="onImageFileAdded"
      @removefile="onImageFileRemoved"
      :class="[imageFileLoaded ? '' : 'hover:scale-105 active:scale-100']"
      :maxFiles="1"
    />
    <div class="mt-6 w-full flex flex-wrap justify-end">
      <button
        class="py-2 px-6 active:scale-100 hover:scale-110 bg-slate-500 disabled:bg-slate-600 dark:bg-slate-600 active:bg-slate-600 dark:disabled:bg-slate-800 dark:active:bg-slate-800 text-slate-100 active:text-slate-200 dark:active:text-slate-400 rounded-lg drop-shadow-xl text-md font-semibold capitalize disabled:cursor-not-allowed transition"
        @click="startClassification"
        :disabled="classificationProgress || !imageFileLoaded"
      >
        <font-awesome-icon
          icon="spinner"
          :class="[classificationProgress ? '' : 'hidden']"
          class="w-4 h-4 mr-2 animate-spin"
          aria-hidden="true"
        />
        {{ classificationProgress ? "Classifying..." : "Classify it!" }}
      </button>
    </div>
  </div>
</template>

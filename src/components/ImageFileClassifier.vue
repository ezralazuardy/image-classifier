<script setup lang="ts">
import { ref } from "vue";
import { pickRandomCatFact, pickRandomDogFact } from "../services/factService";
import ml5 from "ml5";
import ClassifierMethodTab from "./ClassifierMethodTab.vue";
import FilePond from "./FilePond.vue";

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
const confindence = ref(0);
const category = ref("");
const fact = ref("");

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

async function onClassified(error, results) {
  if (error) console.error(error);
  if (results && results.length <= 0) {
    category.value = "Unknown";
    confindence.value = 100;
    return;
  }
  confindence.value =
    results && results.length > 0
      ? parseInt((results[0].confidence.toFixed(2) * 100).toString(), 10)
      : 100;
  category.value = results && results.length > 0 ? results[0].label : "Unknown";
  fact.value =
    category.value.toLowerCase() === "cat"
      ? pickRandomCatFact()
      : pickRandomDogFact();
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
    <ClassifierMethodTab />
    <FilePond
      ref="inputImageFile"
      name="input-image-file"
      label-idle="Pick Image File"
      accepted-file-types="image/*"
      class="mt-6 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 rounded-xl border-2 border-slate-600 dark:border-slate-500 border-opacity-50 border-dashed cursor-pointer transition"
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

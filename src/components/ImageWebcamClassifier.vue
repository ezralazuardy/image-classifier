<script setup lang="ts">
import { onActivated, onDeactivated, ref } from "vue";
import { pickRandomCatFact, pickRandomDogFact } from "../services/factService";
import ml5 from "ml5";
import p5 from "p5";
import ClassifierMethodTab from "./ClassifierMethodTab.vue";

const emit = defineEmits(["stream"]);

const p5Canvas = ref<HTMLElement>();
const runtime = ref<HTMLElement>();
const webcam = ref<any>();
const active = ref(false);

onActivated(async () => {
  active.value = true;
  await resetRuntime();
  runtime.value = new p5((p5) => {
    let canvas, cachedCategory, cachedFact;

    p5.preload = () => {
      cachedFact = pickRandomCatFact();
    };

    p5.setup = () => {
      canvas = p5.createCanvas(320, 240);
      webcam.value = p5.createCapture(p5.VIDEO);
      webcam.value.size(320, 240);
      webcam.value?.hide();
      onResized();
      performClassification();
    };

    p5.draw = () => {
      p5.background(220);
      p5.translate(p5.width, 0);
      p5.scale(-1, 1);
      p5.image(webcam.value, 0, 0, p5.width, p5.height);
    };

    p5.windowResized = () => {
      onResized();
    };

    async function performClassification() {
      ml5
        .imageClassifier(import.meta.env.VITE_TM_MODEL_URL + "/model.json")
        .then((classifier) => classifier.predict(webcam.value))
        .then((results) => onClassified(results))
        .catch((error) => console.log(error));
    }

    async function onClassified(results) {
      if (!active.value) return;
      if (results.length > 0) {
        if (cachedCategory !== results[0].label) {
          cachedFact =
            results[0].label.toLowerCase() === "cat"
              ? pickRandomCatFact()
              : pickRandomDogFact();
        }
        cachedCategory = results[0].label;
      }
      emit("stream", {
        newConfidence:
          results && results.length > 0
            ? parseInt((results[0].confidence.toFixed(2) * 100).toString(), 10)
            : 100,
        newCategory:
          results && results.length > 0 ? results[0].label : "Unknown",
        newFact: cachedFact,
      });
      await performClassification();
    }

    async function onResized() {
      if (p5.windowWidth > p5.windowHeight) {
        canvas.resize(0.5 * p5.windowHeight, 0.35 * p5.windowHeight);
      } else {
        canvas.resize(0.5 * p5.windowWidth, 0.3 * p5.windowWidth);
      }
    }
  }, p5Canvas.value);
});

onDeactivated(async () => {
  active.value = false;
  await resetRuntime();
});

async function resetRuntime() {
  if (!runtime.value) return;
  webcam.value?.remove();
  runtime.value?.remove();
  runtime.value = undefined;
}
</script>

<template>
  <div class="mt-4 text-md text-stone-900 dark:text-slate-100 pb-8">
    <ClassifierMethodTab />
    <div
      class="mt-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-slate-600 dark:border-slate-500 border-opacity-50 border-dashed transition"
    >
      <div ref="p5Canvas" class="flex justify-center align-middle"></div>
    </div>
  </div>
</template>

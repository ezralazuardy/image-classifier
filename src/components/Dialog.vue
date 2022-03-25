<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  title: String,
});

const emit = defineEmits(["close"]);

async function close() {
  emit("close");
}
</script>

<template>
  <TransitionRoot as="template" :show="show">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
      :show="show"
      :closeable="closeable"
      @close="close"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom bg-neutral-100 dark:bg-stone-900 rounded-lg p-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          >
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-bold text-stone-900 dark:text-slate-100"
                >
                  {{ title }}
                </DialogTitle>
                <div class="text-sm mt-4 text-gray-600 dark:text-gray-400">
                  <slot name="content"></slot>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <slot name="buttons"></slot>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

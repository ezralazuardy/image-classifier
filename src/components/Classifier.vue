<template>
  <div class="">
    <div class="flex flex-wrap w-full mt-2 transition">
      <div class="flex relative w-full">
        <div class="flex-grow pl-12">
          <div
            class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
          >
            <div class="flex mx-auto flex-wrap">
              <a
                class="cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-end sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-stone-500 dark:border-slate-100 text-stone-900 dark:text-slate-100 tracking-wider rounded-t"
              >
                <font-awesome-icon
                  icon="folder"
                  class="w-4 h-4"
                  aria-hidden="true"
                />
                <span class="ml-4">File</span>
              </a>
              <a
                class="cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-400 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition tracking-wider"
              >
                <font-awesome-icon
                  icon="camera"
                  class="w-4 h-4"
                  aria-hidden="true"
                />
                <span class="ml-4">Webcam</span>
              </a>
            </div>
            <div
              class="flex justify-center mt-8 p-8 active:scale-100 hover:scale-105 bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 rounded-xl border-2 border-gray-400 border-opacity-80 border-dashed cursor-pointer transition"
            >
              <div class="space-y-1 text-center">
                <font-awesome-icon
                  icon="image"
                  class="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
                <div class="flex justify-center text-sm text-gray-600">
                  <label
                    for="upload-image"
                    class="relative rounded-xl font-medium text-stone-900 dark:text-slate-100 cursor-pointer"
                  >
                    <span class="capitalize">Upload image file</span>
                    <input
                      id="upload-image"
                      type="file"
                      class="sr-only"
                      accept=".jpeg, .jpg, .png"
                    />
                  </label>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  JPEG, JPG, PNG
                </p>
              </div>
            </div>
            <div class="mt-6 w-full flex flex-wrap justify-end">
              <button
                class="py-2 px-8 active:scale-100 hover:scale-110 bg-slate-500 dark:bg-slate-600 active:bg-slate-600 dark:active:bg-slate-800 text-slate-100 active:text-slate-200 dark:active:text-slate-400 transition rounded-lg drop-shadow-xl text-md font-semibold capitalize"
              >
                Classify it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden transition">
      <div class="flex flex-wrap w-full mt-8">
        <div class="flex relative w-full">
          <div
            class="flex-shrink-0 w-10 h-10 rounded-full text-stone-900 dark:text-slate-100 bg-slate-300 dark:bg-slate-600 inline-flex items-center justify-center relative"
          >
            <font-awesome-icon
              icon="magnifying-glass"
              class="w-3 h-3"
              aria-hidden="true"
            />
          </div>
          <div class="flex-grow pl-4">
            <h2
              class="font-bold title-font text-sm text-gray-800 dark:text-gray-400 my-3 tracking-wider uppercase"
            >
              Check your result
            </h2>
            <div
              class="leading-relaxed text-md text-stone-900 dark:text-slate-100"
            >
              <div class="w-full">
                <p>Cat or dog? here is the classified result!</p>
              </div>
              <div
                class="mt-6 p-8 w-full bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-gray-400 border-opacity-50"
              >
                <img
                  class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-8 object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
                <div
                  class="flex flex-col text-center w-full text-stone-900 dark:text-slate-100"
                >
                  <h1 class="text-xl font-medium title-font mb-4">
                    It's a Cat!
                  </h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Did you know that cats can run around 48 kph (30 mph), but
                    only over short distances? A house cat could beat superstar
                    runner Usain Bolt in the 200 meter dash.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

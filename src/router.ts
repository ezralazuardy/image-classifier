import { createRouter, createWebHistory } from "vue-router";
import PathNotFoundPage from "./views/PathNotFoundPage.vue";
import MainPage from "./views/MainPage.vue";

export const routes = [
  {
    path: "/",
    name: "main-page",
    component: MainPage,
  },
  {
    path: "/webcam",
    name: "main-page-webcam",
    component: MainPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "path-not-found",
    component: PathNotFoundPage,
  },
];

export default createRouter({ history: createWebHistory(), routes });

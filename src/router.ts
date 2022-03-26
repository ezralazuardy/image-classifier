import { createRouter, createWebHistory } from "vue-router";
import PathNotFoundPage from "./views/PathNotFoundPage.vue";
import MainPage from "./views/MainPage.vue";

export const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "path-not-found",
    component: PathNotFoundPage,
  },
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
];

export default createRouter({ history: createWebHistory(), routes });

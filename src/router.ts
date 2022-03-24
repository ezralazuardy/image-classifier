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
    path: "/404",
    name: "path-not-found",
    component: PathNotFoundPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

export default createRouter({ history: createWebHistory(), routes });

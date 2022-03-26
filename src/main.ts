// @ts-ignore
import { registerSW } from "virtual:pwa-register";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fa1,
  fa2,
  fa3,
  faDog,
  faCat,
  faImage,
  faCamera,
  faMagnifyingGlass,
  faSpinner,
  faArrowLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import VueAutoCounter from "vue3-autocounter";
import App from "./App.vue";
import Router from "./router";
import Store from "./stores/store";
import "./assets/styles/base.scss";

library.add(
  fa1,
  fa2,
  fa3,
  faDog,
  faCat,
  faImage,
  faCamera,
  faMagnifyingGlass,
  faSpinner,
  faArrowLeft,
  faCircleQuestion
);

registerSW({ immediate: true });

createApp(App)
  .use(Router)
  .use(Store)
  .component("vue-autocounter", VueAutoCounter)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

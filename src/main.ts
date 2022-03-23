import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App.vue";
import Store from "./store";
import "./assets/styles/base.scss";

import {
  fa1,
  fa2,
  fa3,
  faDog,
  faCat,
  faFolder,
  faCamera,
  faImage,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fa1,
  fa2,
  fa3,
  faDog,
  faCat,
  faFolder,
  faCamera,
  faImage,
  faMagnifyingGlass
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Store)
  .mount("#app");

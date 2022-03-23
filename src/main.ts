import { createApp } from "vue";
import App from "./App.vue";
import Store from "./store";
import "@/assets/styles/base.scss";

createApp(App).use(Store).mount("#app");

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";

import "./assets/fontawesomeIcons";

const vueApp = createApp(App);

vueApp.component("FontAwesomeIcon", FontAwesomeIcon)

vueApp.mount("#app");

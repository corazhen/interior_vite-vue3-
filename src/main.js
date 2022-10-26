import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//
import "./assets/front/css/tailwind.css";
import "./assets/front/css/all.css";
const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css"; // tailwind 스타일 적용

createApp(App).use(store).use(router).mount("#app");

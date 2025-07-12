import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";

createApp(App) //
  .use(router) //
  .mixin(mixins) // 공동함수
  .use(store) //
  .mount("#app");

window.Kakao.init("232fb1dc3fdaafe3777e31b4991db467");

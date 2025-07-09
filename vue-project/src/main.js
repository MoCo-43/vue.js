// 진입점
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 인스턴스 생성
const app = createApp(App);
// 라우터정보 가지고오기
app.use(router);
// 마운트
app.mount("#app");

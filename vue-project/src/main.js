// 진입점
import { createApp } from "vue";
import App from "./App.vue"; // root 컴포넌트
import router from "./router"; // 라우팅정보
import store from "./store/index.js"; // 저장소

// 인스턴스 생성
const app = createApp(App);
// 라우터정보 가지고오기
app.use(router);
app.use(store);
// 마운트
app.mount("#app");

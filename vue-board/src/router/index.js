import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Board from "../views/BoardView.vue";
import BoardDetail from "../components/BoardDetail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/board", name: "Board", component: Board },
  {
    path: "/board/:id",
    name: "BoardDetail",
    component: BoardDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

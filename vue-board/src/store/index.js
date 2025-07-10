import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        auth: "작성자1",
        title: "첫 번째 게시글",
        content: "안녕하세요 Vue Board입니다.",
      },
      {
        id: 2,
        auth: "작성자2",
        title: "두 번째 게시글",
        content: "게시판 샘플입니다.",
      },
    ],
  },
  getters: {
    posts: (state) => state.posts,
    getPostById: (state) => (id) =>
      state.posts.find((post) => post.id === Number(id)),
  },
  mutations: {
    ADD_POST(state, post) {
      post.id = Date.now();
      state.posts.unshift(post);
    },
    DELETE_POST(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  actions: {
    addPost({ commit }, post) {
      commit("ADD_POST", post);
    },
    deletePost({ commit }, id) {
      commit("DELETE_POST", id);
    },
  },
});

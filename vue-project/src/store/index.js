// src/store/index.js
import { createStore } from "vuex";

// todo기준으로 만듦
export default createStore({
  state: {
    todos: [
      { id: 1, name: "Vue공부하기", chk: false },
      { id: 2, name: "TV 시청", chk: false },
      { id: 3, name: "저녁운동", chk: false },
    ],
    title: "hello world",
  },
  getters: {
    titling(state) {
      // return this.state.title;  // this접근이 불가함으로 state값을 가져와서 그값을 return
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    // 기능을 구현
    addTodo(state, name) {
      const id = state.todos[state.todos.length - 1].id;
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});

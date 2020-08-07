import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '.1.', done: true },
      { id: 2, text: '.2.', done: false },
    ],
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});

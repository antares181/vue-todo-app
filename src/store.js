import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    isNewForm: false,
    isUpdateForm: false,
    item: {}
  },
  actions: {
    GET_TODO: context => {
      const todos = [
        {
          id: 0,
          title: "Beli laptop",
          status: "done",
          date: "2019-08-12"
        },
        {
          id: 1,
          title: "Beli macbook pro 2017",
          status: "done",
          date: "2019-08-12"
        },
        {
          id: 2,
          title: "Beli lisensi microsoft 365",
          status: "not-done",
          date: "2019-08-12"
        },
        {
          id: 3,
          title: "Beli sayuran",
          status: "not-done",
          date: "2019-08-12"
        }
      ];
      context.commit("SET_TODO", todos);
    }
  },
  mutations: {
    SET_TODO: (state, payload) => {
      state.todos = payload;
    }
  },
  getters: {
    todos: state => state.todos
  }
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
 * About Vuex
 *
 * Vuex is a state management pattern + library for Vue.js applications.
 * It serves as a centralized store for all the components in an application,
 * with rules ensuring that the state can only be mutated in a predictable fashion.
 *
 *
 * Jadi sederhanya vuex merupakan sebuah state management pattern pada vuejs
 * yg mana tugasnya sebagai centralized store untuk semua component dalam aplikasi vuejs yg akan kita buat.
 *
 *
 * source: https://ngide.net/posts/kenalan-dengan-vuex-state-management-di-vue-js
 *
 */

export default new Vuex.Store({
  /*
   * 1. State
   *
   * State adalah sebuah object dimana tempat semua data aplikasi berada.
   * Jadi state ini saya bilangnya sebuah json yang berisi data-data yang
   * akan kita akses dari component yang ada.
   */
  state: {
    todos: [],
    isNewForm: false,
    isUpdateForm: false,
    item: {},
    itemTemp: {}
  },
  /*
   * 2. Action
   *
   * Action mirip dengan mutation, bedanya adalah mutation
   * hanya bisa di akses secara synchronous sedangankan action bisa di akses secara asynchronous.
   * action ini tidak merubah state, tapi action akan memanggil mutation dan mutation
   * yang akan merubah state. Kita butuh action ketika melakukan proses asynchronous dan perlu
   * untuk merubah state. Misalnya saat selesai melakukan request ajax.
   */
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
    },
    NEW_TODO: context => {
      context.commit("OPEN_NEW_TODO");
    },
    UPDATE_TODO: (context, payload) => {
      context.commit("OPEN_UPDATE_TODO");
      context.commit("SET_DATA_UPDATE", payload);
    },
    SUBMIT_TODO: (context, payload) => {
      let date = new Date();
      const newData = {
        id: date.getTime(),
        title: payload,
        status: "not-done",
        date: date.toISOString().substring(0, 10)
      };
      context.commit("CLOSE_NEW_TODO");
      context.commit("SAVE_TODO", newData);
    },
    STORE_TODO: (context, payload) => {
      context.commit("STORE_DATA_TODO", payload);
      context.commit("CLOSE_UPDATE_TODO");
    },
    CHECK_ITEM: (context, payload) => {
      context.commit("CHECK_ITEM", payload);
    },
    DELETE_ITEM: (context, payload) => {
      context.commit("DELETE_ITEM", payload.id);
    }
  },
  /*
   * 3. Mutation
   *
   * Mutation adalah satu-satunya cara untuk merubah state. Jadi mutation ini bisa dibilang mirip event yang ada di dalam store
   *
   */
  mutations: {
    SET_TODO: (state, payload) => {
      state.todos = payload;
    },
    OPEN_NEW_TODO: state => {
      state.isNewForm = true;
    },
    OPEN_UPDATE_TODO: state => {
      state.isUpdateForm = true;
    },
    CLOSE_NEW_TODO: state => {
      state.isNewForm = false;
    },
    CLOSE_UPDATE_TODO: state => {
      state.isUpdateForm = false;
    },
    SET_DATA_UPDATE: (state, payload) => {
      state.item = payload;
      state.itemTemp = payload;
    },
    SAVE_TODO: (state, payload) => {
      state.todos.push(payload);
    },
    STORE_DATA_TODO: (state, payload) => {
      state.todos.map(el => {
        if (el.id == payload.id) return { ...el, ...payload };
      });
    },
    CHECK_ITEM: (state, payload) => {
      state.todos.map(el => {
        if (el.id == payload.id) {
          if (el.status == "done") return (el.status = "not-done");
          else if (el.status == "not-done") return (el.status = "done");
        }
      });
    },
    DELETE_ITEM: (state, payload) => {
      state.todos = state.todos.filter(el => {
        return el.id !== payload;
      });
    }
  },
  /*
   * 4. Gettert
   *
   * Sesuai namanya, Getter berfungsi untuk mengakses state. Dengan menggunakan Getter kita bisa mengolah terlebih dahulu state yang akan kita ambil seperti fungsi computed yang ada di VueJS. Jadi kita bisa memfilter data state sebelum di panggil.
   *
   */
  getters: {
    todos: state => state.todos,
    isNewForm: state => state.isNewForm,
    isUpdateForm: state => state.isUpdateForm
  }
});

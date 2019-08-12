<template>
  <div class="todo-list">
    <div class="header">
      <div></div>
      <div>
        <h1>All Task</h1>
      </div>
      <div></div>
    </div>
    <div class="content">
      <div
        class="content-item"
        style="cursor: pointer;"
        v-for="(item, index) in todos"
        :key="index"
      >
        <div style="display:flex; position:relative">
          <div @click="updateTodo(item)">
            <div
              :style="item.status == 'done' ? 'text-decoration-line: line-through;' : ''"
            >{{ item.title }}</div>
            <small style="color: grey; display:block;">{{ item.date }}</small>
          </div>
          <div @click="check(item)" v-show="item.status == 'done'" class="done"></div>
          <div @click="check(item)" v-show="item.status == 'not-done'" class="not-done"></div>
          <div @click="deleteItem(item)" v-show="item.status == 'done'" class="delete"></div>
        </div>
      </div>
    </div>
    <div v-if="isNewForm == false && isUpdateForm == false">
      <div class="action">
        <button style="width: 100%;" class="btn" @click="newTodo">NEW</button>
      </div>
    </div>

    <!-- form menambahkan todo baru -->
    <NewTask style="margin-top: 40px;" v-if="isNewForm"></NewTask>

    <!-- form udpate todo -->
    <UpdateTask style="margin-top: 40px;" v-if="isUpdateForm"></UpdateTask>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewTask from "@/components/NewTask.vue";
import UpdateTask from "@/components/UpdateTask.vue";
export default {
  name: "TodoList",
  components: {
    NewTask,
    UpdateTask
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    isNewForm() {
      return this.$store.getters.isNewForm;
    },
    isUpdateForm() {
      return this.$store.getters.isUpdateForm;
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      // mengambil semua data di state
      this.$store.dispatch("GET_TODO");
    },
    newTodo() {
      // menampilkan form untuk pengisian item baru
      this.$store.dispatch("NEW_TODO");
    },
    updateTodo(item) {
      // menampilkan form untuk update item
      this.$store.dispatch("UPDATE_TODO", item);
    },
    check(item) {
      // mengubah status done/not done
      this.$store.dispatch("CHECK_ITEM", item);
    },
    deleteItem(item) {
      // menghapus data yang dipilih
      this.$store.dispatch("DELETE_ITEM", item);
    }
  }
};
</script>

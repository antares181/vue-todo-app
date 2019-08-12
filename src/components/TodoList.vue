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
        </div>
      </div>
    </div>

    <div>
      <div class="action">
        <button style="width: 100%;" class="btn">NEW</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      // mengambil semua data di state
      this.$store.dispatch("GET_TODO");
    }
  }
};
</script>

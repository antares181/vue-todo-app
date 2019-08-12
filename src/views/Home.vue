<template>
  <div class="home" style="text-align: center;">
    <TodoList></TodoList>
    <div style="margin-top: 20px;">Sample vuex todo app</div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: { TodoList }
};
</script>

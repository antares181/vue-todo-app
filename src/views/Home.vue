<template>
  <div class="home">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: { TodoList }
};
</script>

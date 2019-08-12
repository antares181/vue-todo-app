<template>
  <div class="home">
    <TodoList></TodoList>
    <div style="text-align: center; margin-top: 30px;">
      <a
        target="_blank"
        style="color: white !important; text-decoration: none; margin-right: 20px;"
        href="https://vuex.vuejs.org/"
      >Vuex Documentations</a>
      <a
        target="_blank"
        style="color: white !important; text-decoration: none;"
        href="https://scrimba.com/g/gvuex"
      >Vuex video tutorials</a>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: { TodoList }
};
</script>

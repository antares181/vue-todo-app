<template>
  <div>
    <div class="header">
      <div></div>
      <div>
        <h1>New Task</h1>
      </div>
      <div></div>
    </div>
    <!-- input item baru -->
    <div class="content">
      <input type="text" v-model="todo" class="form" />
    </div>
    <!-- end input item baru -->

    <!-- tombol untuk simpan dan batal -->
    <div class="action">
      <button class="btn" style="margin-right: 10px;" @click="submitTodo">SAVE</button>
      <button class="btn-grey" @click="cancelNewTodo">CANCEL</button>
    </div>
    <!-- end tombol untuk simpan dan batal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: null
    };
  },
  methods: {
    submitTodo() {
      // aksi untuk menyimpan data item baru
      this.$store.dispatch("SUBMIT_TODO", this.todo);
    },
    cancelNewTodo() {
      // aksi untuk membatalkan item baru
      this.$store.commit("CLOSE_NEW_TODO");
    }
  }
};
</script>

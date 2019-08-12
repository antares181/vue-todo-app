<template>
  <div>
    <div class="header">
      <div></div>
      <div>
        <h1>Update Task</h1>
      </div>
      <div></div>
    </div>
    <!-- input update item todo -->
    <div class="content">
      <input type="text" v-model="item.title" class="form" />
    </div>
    <!-- end input update item todo -->

    <!-- tombol update item todo -->
    <div class="action">
      <button class="btn" style="margin-right: 10px;" @click="updateTodo">SAVE</button>
      <button class="btn-grey" @click="cancelUpdateTodo">CANCEL</button>
    </div>
    <!-- end tombol update item todo -->
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.state.item;
    }
  },
  methods: {
    updateTodo() {
      // aksi untuk menyimpan data item yang telah diubah
      this.$store.dispatch("STORE_TODO", this.item);
    },
    cancelUpdateTodo() {
      // aksi untuk membatalkan ubah data
      this.$store.commit("CLOSE_UPDATE_TODO");
    }
  }
};
</script>

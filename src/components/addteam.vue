<template>
  <form @submit.prevent="addItem">
    <input
      type="text"
      v-model="newItem.teamName"
      placeholder="enter team name"
      required
    />
    <input
      type="text"
      v-model="newItem.teamLead"
      placeholder="Enter team leader name"
      required
    />
    <input
      type="text"
      v-model="newItem.teamDesc"
      placeholder="Enter Team Description"
      required
    />
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>
/*@import "../assets/css/request.css";*/
@import "~@fortawesome/fontawesome-free/css/all.css";
</style>

<script>
export default {
  name: "addteam",
  data() {
    return {
      newItem: { teamName: "", teamLead: "", teamDesc: "" },
    };
  },
  methods: {
    addItem() {
      this.tableData.push(this.newItem);
      this.newItem = { teamName: "", teamLead: "", teamDesc: "" };
    },
    editItem(index) {
      // Implement edit logic
    },
    deleteItem(index) {
      this.tableData.splice(index, 1);
    },
    goBack() {
      // Code to navigate back to the previous page
      this.$router.go(-1);
    },
  },
};
</script>

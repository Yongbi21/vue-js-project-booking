<template>
  <div>
    <md-table v-model="users" md-card md-sort="name" md-sort-order="asc">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Request ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Task">{{ item.task }}</md-table-cell>
        <md-table-cell md-label="Owner">{{ item.owner }}</md-table-cell>
        <md-table-cell md-label="Due Date">{{ item.duedate }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style lang="scss" scoped>
.md-fab-top-right {
  display: block;
  justify-items: right;
}
</style>

<script>
export default {
  name: "timeline-project",
  props: {
    tableHeaderColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          task: "Dakota Rice",
          owner: "$36,738",
          duedate: "Niger",
        },
        {
          id: 2,
          task: "Dakota Rice",
          owner: "$36,738",
          duedate: "Niger",
        },
        {
          id: 3,
          task: "Dakota Rice",
          owner: "$36,738",
          duedate: "Niger",
        },
        {
          id: 4,
          task: "Dakota Rice",
          owner: "$36,738",
          duedate: "Niger",
        },
      ],
    };
  },
};
</script>

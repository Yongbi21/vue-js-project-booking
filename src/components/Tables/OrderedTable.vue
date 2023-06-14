<template>
  <div>
    <md-button class="md-fab-top-right">
      <md-icon>add</md-icon>
    </md-button>
    <md-field md-clearable class="md-toolbar-section-end">
      <md-input
        placeholder="Search by name..."
        v-model="search"
        @input="searchOnTable"
      />
    </md-field>

    <md-table v-model="users" md-card md-sort="name" md-sort-order="asc">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Project Name">{{
          item.projectname
        }}</md-table-cell>
        <md-table-cell md-label="Project Details">{{
          item.projectdetails
        }}</md-table-cell>
        <md-table-cell md-label="Budget">{{ item.budget }}</md-table-cell>
        <md-table-cell md-label="Priority">{{ item.priority }}</md-table-cell>
        <md-table-cell md-label="Due Date">{{ item.duedate }}</md-table-cell>
        <md-table-cell md-label="File">{{ item.file }}</md-table-cell>
        <md-table-cell md-label="Action"></md-table-cell>
        <md-table-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-table-actions>
      </md-table-row>
      <md-table-pagination
        :md-page-size="2"
        :md-page-options="[1, 2, 3, 4, 5, 6]"
        :md-update="updatePagination"
        :md-data="users"
        :md-paginated-data.sync="paginatedUsers"
      />
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
  name: "FloatingButtons",
  name: "ordered-table",
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
          name: "Dakota Rice",
          salary: "$36,738",
          email: "Niger",
          projectname: "Oud-Turnhout",
          projectdetails: "Oud-Turnhout",
          budget: "Oud-Turnhout",
          priority: "high",
          duedate: "Oud-Turnhout",
          file: "Oud-Turnhout",
        },
        {
          id: 2,
          name: "Dakota Rice",
          salary: "$36,738",
          email: "Niger",
          projectname: "Oud-Turnhout",
          projectdetails: "Oud-Turnhout",
          budget: "Oud-Turnhout",
          priority: "high",
          duedate: "Oud-Turnhout",
          file: "Oud-Turnhout",
        },
        {
          id: 3,
          name: "Dakota Rice",
          salary: "$36,738",
          email: "Niger",
          projectname: "Oud-Turnhout",
          projectdetails: "Oud-Turnhout",
          budget: "Oud-Turnhout",
          priority: "high",
          duedate: "Oud-Turnhout",
          file: "Oud-Turnhout",
        },
        {
          id: 4,
          name: "Dakota Rice",
          salary: "$36,738",
          email: "Niger",
          projectname: "Oud-Turnhout",
          projectdetails: "Oud-Turnhout",
          budget: "Oud-Turnhout",
          priority: "high",
          duedate: "Oud-Turnhout",
          file: "Oud-Turnhout",
        },
      ],
    };
  },
};
</script>

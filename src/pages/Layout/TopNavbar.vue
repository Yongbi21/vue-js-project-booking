<template>
  <md-toolbar md-elevation="0" class="md-transparent" style="z-index: 0;">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
          <h3 v-if="!isModalOpen" class="md-title" :style="{ fontWeight: getRouteFontWeight, fontSize: '30px' }">
          {{ $route.name }}
        </h3>
        <h3 v-else class="md-title hide-route-name" :style="{ fontWeight: getRouteFontWeight, fontSize: '30px' }">
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
            >
              <label>Search...</label>
            </md-autocomplete>
          </div>
          <md-list>
            <li class="md-list-item">
              <router-link
                to="/dashboard"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#">Kelly Kapoor responded to your email</a>
                      </li>
                      <li><a href="#">You have 3 new tasks</a></li>
                    </ul>
                  </drop-down>
                </div>
              </router-link>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
  export default {
    data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    onModalOpened() {
      // Set the flag to true when the modal is opened
      this.isModalOpen = true;
    },
  },
  computed: {
    getRouteFontWeight() {
      const routeFontWeights = {
        "/dashboard": "500",
        "/projectrequest": "500",
        "/pricingquoting": "500",
        "/projectstatus": "500",
        "/messenger": "500",
        "/settings": "500",
        // Add more routes and their respective font weights here
      };

      const currentRoute = this.$route.path;
      return routeFontWeights[currentRoute] || "normal";
    },
    displayedRouteName() {
      // Return an empty string when isModalOpen is true, otherwise return the actual route name
      return this.isModalOpen ? '' : this.$route.name;
    },
  },
  created() {
    this.$root.$on("modal-opened", this.onModalOpened);
  },
  beforeDestroy() {
    this.$root.$off("modal-opened", this.onModalOpened);
  },
  watch: {
    isModalOpen(val) {
      // When the value of isModalOpen changes, if it's true, block the route name
      // by setting it to an empty string
      if (val) {
        this.$route.name = "";
      } else {
        // When isModalOpen is false, restore the original route name
        this.$route.name = this.$route.meta.title || "Default Title"; // You can change "Default Title" to a fallback title if necessary.
      }
    },
  },
};
</script>

<style>

</style>
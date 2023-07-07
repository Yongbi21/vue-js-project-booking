<template>
  <md-toolbar md-elevation="0" class="md-dark">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <div class="md-toolbar-section-start" :class="{ 'modal-open': isModalOpen }">
           <h3 class="md-title" :style="{ fontWeight: getRouteFontWeight, fontSize: '30px' }">{{ $route.name }}</h3>
        </div>
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
    openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  this.isModalOpen = true;
},

closeModal(event) {
  const modal = event.target.closest(".modal");
  modal.style.display = "none";
  this.isModalOpen = false;
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
};
</script>

<style>
.modal-open .md-title {
  display: none;
}
</style>
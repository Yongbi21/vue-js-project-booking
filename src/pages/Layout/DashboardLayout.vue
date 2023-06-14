<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <i class="bi bi-house"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <i class="bi bi-folder"></i>
        <p>Project Request</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <i class="bi-graph-up-arrow"></i>
        <p>Pricing and Qutoting</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <i class="bi bi-calendar"></i>
        <p>Project Tracking Status</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <i class="bi bi-chat-dots"></i>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/">
        <i class="bi bi-gear-fill"></i>
        <p>Settings</p>
      </sidebar-link>
      <sidebar-link to="/logout">
        <i class="bi bi-box-arrow-left"></i>
        <p>Logout</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "orange",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>

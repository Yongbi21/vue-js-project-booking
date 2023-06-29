<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <i class="bi bi-house"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/projectrequest">
        <i class="bi bi-folder"></i>
        <p>Project Request</p>
      </sidebar-link>
      <sidebar-link to="/pricingquoting">
        <i class="bi-graph-up-arrow"></i>
        <p>Pricing and Quoting</p>
      </sidebar-link>
      <sidebar-link to="/projectstatus">
        <i class="bi bi-calendar"></i>
        <p>Project Tracking Status</p>
      </sidebar-link>
      <sidebar-link to="/messenger">
        <i class="bi bi-chat-dots"></i>
        <p>Messenger</p>
      </sidebar-link>
      <sidebar-link to="/settings">
        <i class="bi bi-gear-fill"></i>
        <p>Admin Settings</p>
      </sidebar-link>
      <sidebar-link to="/">
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

      <dashboard-content></dashboard-content>

    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
// import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    // MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      title: "", 
      sidebarBackground: "orange",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>

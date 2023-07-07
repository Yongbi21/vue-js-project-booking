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
      <sidebar-link to="/projectRequest">
        <i class="bi bi-folder"></i>
        <p>Project Request</p>
      </sidebar-link>
      <sidebar-link to="/pricing-quoting">
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
      <div class="md-list-item">
        <div class="md-list-item-content md-ripple">
          <i class="bi bi-box-arrow-left"></i>
          <button @click="toggleLogoutModal" type="button" class="btn btn-custom-btn ms-4" style="color: #fff;">
            Logout
          </button>
          <Modal @close="toggleLogoutModal" :modalActive="logoutModalActive">
            <template #default>
              <div class="modal-content">
                <Logout @close="toggleLogoutModal" />
              </div>
            </template>
          </Modal>
          
        </div>
      </div>
    </side-bar>
    

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin :color.sync="sidebarBackground" :image.sync="sidebarBackgroundImage">
      </fixed-plugin>

      <dashboard-content></dashboard-content>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";    
import FixedPlugin from "./Extra/FixedPlugin.vue";
import Modal from "@/components/LandingModals.vue";
import Logout from "@/components/logout.vue";
import { ref } from "vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    FixedPlugin,
    Modal,
    Logout,
  },
  setup() {
    const logoutModalActive = ref(false);

    const toggleLogoutModal = () => {
      logoutModalActive.value = !logoutModalActive.value;
    };

    return {
      logoutModalActive,
      toggleLogoutModal,
    };
  },
  data() {
    return {
      sidebarBackground: "orange",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>


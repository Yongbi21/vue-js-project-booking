<template>
  <div class="container">
    <top-navbar></top-navbar>
    <side-bar></side-bar>

    <div class="row">
      <div class="col-12 big-container">
        <h2>Big Container</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-3 mini-container">
        <h3>Mini Container 1</h3>
      </div>
      <div class="col-3 mini-container">
        <h3>Mini Container 2</h3>
      </div>
      <div class="col-3 mini-container">
        <h3>Mini Container 3</h3>
      </div>
      <div class="col-3 mini-container">
        <h3>Mini Container 4</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-2 middle-container">
        <h3>Middle Container 1</h3>
      </div>
      <div class="col-2 middle-container">
        <h3>Middle Container 2</h3>
      </div>
      <div class="col-2 middle-container">
        <h3>Middle Container 3</h3>
      </div>
      <div class="col-2 middle-container">
        <h3>Middle Container 4</h3>
      </div>
      <div class="col-2 middle-container">
        <h3>Middle Container 5</h3>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "@/pages/Layout/TopNavbar.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";

export default {
  components: {
    TopNavbar,
    SideBar,
  },
};
</script>

<style scoped>
@import '../assets/css/project-status.css';
</style>

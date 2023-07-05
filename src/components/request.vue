<template>
  <div class="request-form">
    <form>
      <div class="d-flex justify-content-between">
        <div class="close-back">
          <i class="fas fa-arrow-left" @click="goBack"></i>
        </div>
      </div>
      <legend class="prf">Project Request Form</legend>
      <br />
      <hr style="border: 1px solid black" />
      <label for="projectComplexity">Project Complexity</label>
      <select id="projectComplexity" required>
        <option value="" disabled selected>Select the complexity</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <div>
        <label for="projectTime">Estimated Time</label>
        <input type="week" v-model="weekValue" @input="handleInput" />
        <input type="month" v-model="monthValue" @input="handleInput" />
      </div>
      <label for="additionalServices">Additional Services</label>
      <textarea
        id="additionalServices"
        placeholder="Enter your additional services"
        required
      ></textarea>
      <router-link :to="{ name: 'landingpage' }" class="btn btn-ms-2" id="next"
        >Submit Request</router-link
      >
    </form>
  </div>
</template>

<style scoped>
@import "../assets/css/request.css";
@import "~@fortawesome/fontawesome-free/css/all.css";
</style>

<script>
export default {
  name: "Request1",
  data() {
    return {
      weekValue: "",
      monthValue: "",
      yearValue: "",
    };
  },
  methods: {
    goBack() {
      // Code to navigate back to the previous page
      this.$router.go(-1);
    },

    handleInput() {
      const combinedDate =
        this.weekValue + "-" + this.monthValue + "-" + this.yearValue;
    },
  },
};
</script>
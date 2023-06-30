<template>
  <div class="form-container">
    <span class="back" id="backbtn"></span>
    <div class="Logo" id="sign">
      <img src="../assets/img/dreamers logo.png" alt="Logo" class="logo" />
    </div>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-control"
          placeholder="Enter your password"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          class="form-control"
          placeholder="Confirm your password"
          required
        />
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input
            v-model="firstname"
            type="firstname"
            id="firstname"
            class="form-control"
            placeholder="Enter your First Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="middlename">Middle Name</label>
          <input
            v-model="middlename"
            type="middlename"
            id="middlename"
            class="form-control"
            placeholder="Enter your Middle Name"
            required
          />
        </div>

        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input
            v-model="lastname"
            type="lastname"
            id="lastname"
            class="form-control"
            placeholder="Enter your Last Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="contactnum">Contact Number</label>
          <input
            v-model="contactnum"
            type="contacnum"
            id="contactnum"
            class="form-control"
            placeholder="Enter your Contact Number"
            required
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Create Account</button>
    </form>
    <p>Already have an account? <router-link to="/">Log In</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    signup() {
      // Perform signup logic here
      if (this.password === this.confirmPassword) {
        // Valid signup
        console.log("Signup successful!");
      } else {
        // Passwords do not match
        console.log("Passwords do not match");
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/signup.css";
</style>

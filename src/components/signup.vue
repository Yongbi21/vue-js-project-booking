<template>
  <div class="form-container">
    <span class="back" id="backbtn"></span>
    <div class="Logo" id="sign">
      <img src="../assets/img/dreamers logo.png" alt="Logo" class="logo"/>
    </div>
    <form @submit.prevent="signup">
      <div class="form-group">
        <div v-if="signupError" class="alert alert-danger" role="alert">
          <ul>
            <li v-for="message in errorMessages" :key="message">{{ message }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input
            v-model="firstname"
            type="text"
            id="firstname"
            class="form-control"
            placeholder="Enter your First Name"  
          />
        </div>
        <div class="form-group">
          <label for="middlename">Middle Name</label>
          <input
            v-model="middlename"
            type="text"
            id="middlename"
            class="form-control"
            placeholder="Enter your Middle Name"
          />
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input
            v-model="lastname"
            type="text"
            id="lastname"
            class="form-control"
            placeholder="Enter your Last Name"
          />
        </div>
        <div class="form-group">
          <label for="contactnum">Contact Number</label>
          <input
            v-model="contactnum"
            type="text"
            id="contactnum"
            class="form-control"
            placeholder="Enter your Contact Number"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
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
          />
        </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </div>
    </form>
    <p>
      Already have an account? <router-link to="/login">Log In</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstname: '',
      middlename: '',
      lastname: '',
      contactnum: '',
      email: '',
      password: '',
      confirmPassword: '',
      signupError: false,
      errorMessages: [],
    };
  },

  methods: {
    async signup() {
      this.signupError = false;
      try {
        const response = await axios.post('http://localhost:8000/api/signup', {
          first_name: this.firstname,
          middle_name: this.middlename,
          last_name: this.lastname,
          contact_number: this.contactnum,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });

        const { user, token } = response.data;
        // Handle successful response and store the user and token if needed

      } catch (error) {
        this.signupError = true;
        this.errorMessages = error.response.data.errors;
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/signup.css";
</style>

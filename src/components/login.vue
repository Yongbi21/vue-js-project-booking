<template>
  <form @submit.prevent="login">
    <div class="logo-container">
      <img src="../assets/img/dreamers logo.png" alt="Logo" class="logo" />
    </div>
    <div class="alert alert-danger" role="alert" v-if="loginError">
      <ul>
        <li v-for="error in errorMessages" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="input-container">
      <input
      v-model="email"
      type="email"
      id="typeEmailX"
      class="form-control form-control-lg"
      placeholder="Email"
      required
    />
    <br />
    <input
      v-model="password"
      type="password"
      id="typePasswordX"
      class="form-control form-control-lg"
      placeholder="Password"
    />

    </div>
    <p>
      <a href="#!" style="color: cornflowerblue">Forgot password?</a>
    </p>
    <div class="loginbtn">
        <button class="colored-button" type="submit"> Login</button>
    </div>
    <div class="social-login">
      <p id="sign-in">Sign in with</p>
      <div class="social-icons">
        <a href="#!" style="color: rgb(74, 8, 227)"
          ><i class="fab fa-facebook-f fa-lg"></i
        ></a>
        <a href="#!" style="color: cornflowerblue"
          ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
        ></a>
        <a href="#!" style="color: rgb(204, 10, 36)"
          ><i class="fab fa-google fa-lg"></i
        ></a>
      </div>
    </div>
    <div class="signup-link">
      <p class="mb-0">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/css/login.css";
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: false,
      errorMessages: [],
    };
  },
  methods: {
    async login() {
      this.loginError = false;
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password,
        });

        const { user, token } = response.data;

        // Save the token to local storage for future requests
        localStorage.setItem('token', token);

        // Redirect the user to the dashboard or any other route
        this.$router.push('/dashboard'); // Update '/dashboard' with your desired route

      } catch (error) {
        this.loginError = true;
        if (error.response && error.response.data && error.response.data.errors) {
          const errorFields = Object.keys(error.response.data.errors);
          this.errorMessages = errorFields.map(field => {
            return error.response.data.errors[field][0];
          });
        } else {
          this.errorMessages = ['An error occurred during login. Please try again later.'];
        }
        console.error(error);
      }
    },
  },
};
</script>




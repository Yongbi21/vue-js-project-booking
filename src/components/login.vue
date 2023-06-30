<template>
  <form @submit.prevent="login">
    <div class="logo-container">
      <img src="../assets/img/dreamers logo.png" alt="Logo" class="logo" />
    </div>
    <div class="input-container">
      <input
        v-model="username"
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
        required
      />
    </div>
    <p>
      <a href="#!" style="color: cornflowerblue">Forgot password?</a>
    </p>
    <div class="loginbtn">
      <router-link to="/dashboard">
        <button class="colored-button" type="submit">Login</button>
      </router-link>
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
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      // You can redirect the user to the dashboard page after successful login
      this.$router.push("/dashboard");
    },
  },
};
</script>

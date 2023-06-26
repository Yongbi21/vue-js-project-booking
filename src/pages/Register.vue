<template>
    <div class="login-container">
      <div class="form-container">
        <form @submit.prevent="login">
          <div class="Logo">
            <img src="../assets/img/dreamers logo.png" alt="Logo" class="logo">
          </div>
          <p id ="logo-line">_____________________</p>
        <br/>
          <div class="Email">
            <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Email"/>
            
          </div>
          <div class="Password">
            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password" />
          </div>
          <p ><a  href="#!" style="color:cornflowerblue">Forgot password?</a></p>
          <div class="loginbtn">
            <router-link to="/dashboard">
            <button class="colored-button"  type="submit">Login</button>
          </router-link>
          </div>
          <div>
            <p id ="sign-in"> Sign in with</p>
          </div>
          <div class="d-flex justify-content-center text-center mt-4 pt-1">
            <a href="#!" style="color:rgb(74, 8, 227)"><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="#!" style="color:cornflowerblue"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
            <a href="#!" style="color:rgb(204, 10, 36)"><i class="fab fa-google fa-lg"></i></a>
          </div>
          <br/>
          <div>
            <p class="mb-0">Don't have an account? <a href="#!" style="color:cornflowerblue">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </template>

<style scoped>
@import '../assets/css/request.css';
@import '~@fortawesome/fontawesome-free/css/all.css';
</style>


<script>
export default {
    name: "Register",
}
</script>
  
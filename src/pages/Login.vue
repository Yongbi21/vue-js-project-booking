<template>
  <div class="login-container">
    <div class="form-container">
      <form @submit.prevent="login">
        <div class="logo-container">
          <img src="../assets/img/dreamers logo.png" alt="Logo" class="logo" />
        </div>
        <div class="input-container">
          <input
            type="email"
            id="typeEmailX"
            class="form-control form-control-lg"
            placeholder="Email"
            required
          />
          <br>
          <input
            type="password"
            id="typePasswordX"
            class="form-control form-control-lg"
            placeholder="Password"
            required
          />
        </div>
        <p><a href="#!" style="color: cornflowerblue">Forgot password?</a></p>
        <div class="loginbtn">
          <router-link to="/dashboard">
            <button class="colored-button" type="submit">Login</button>
          </router-link>
        </div>
        <div class="social-login">
          <p id="sign-in">Sign in with</p>
          <div class="social-icons">
            <a href="#!" style="color: rgb(74, 8, 227)"><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="#!" style="color: cornflowerblue"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
            <a href="#!" style="color: rgb(204, 10, 36)"><i class="fab fa-google fa-lg"></i></a>
          </div>
        </div>
        <div class="signup-link">
          <p class="mb-0">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border-radius: 8%;
}

.form-container {
  background-color: #fff;
  padding: 4rem;
  border-radius: 4%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  margin: auto;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.input-container {
  margin-bottom: 2rem;
}

.loginbtn {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.colored-button {
  padding: 10px 30px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colored-button:hover {
  background-color: #c68949;
}

.social-login {
  text-align: center;
  margin-bottom: 2rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-link {
  text-align: center;
}

@media (max-width: 768px) {
  .form-container {
    padding: 3rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>





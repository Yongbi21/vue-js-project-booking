<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login-container">
    <div class="form-container">
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            id="autoSizingCheck2"
          />
          <label class="form-check-label" for="autoSizingCheck2">
            Remember me
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
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
  height: 100vh;
  border-radius: 8%;
}

.form-container {
  background-color: #fff;
  padding: 50px;
  border-radius: 4%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.form-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.form-container label {
  font-weight: bold;
}

.form-container input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left: 10px;
}

.form-container button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

.form-container button:hover {
  background-color: #45a049;
}

@media (max-width: 480px) {
  .form-container {
    width: 90%;
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
  methods: {
    login() {
      // Perform login logic here
      // This could include making an API call to the server to verify the credentials

      // After successful login, navigate to the dashboard page
      this.$router.push("/dashboard");
    },
  },
};
// eslint-disable-next-line prettier/prettier
</script>

<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

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

      // After successful login, you can navigate to another page
      // For example, redirect to a dashboard page
      this.$router.push("/dashboard");
    },
  },
};
</script>

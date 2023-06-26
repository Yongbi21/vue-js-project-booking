<template>
  <div class="signup-container">
    <div class="form-container">
      <div class="Logo">
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
      <p>
        Already have an account? <router-link to="/">Log In</router-link>
      </p>
    </div>
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
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 8%;
}

.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 600px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.btn-primary {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #e68a11;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

p {
  text-align: center;
  margin-top: 20px;
}
</style>

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
      </div>
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input
          v-model="firstName"
          type="text"
          id="firstname"
          class="form-control"
          placeholder="Enter your First Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="middlename">Middle Name</label>
        <input
          v-model="middleName"
          type="text"
          id="middlename"
          class="form-control"
          placeholder="Enter your Middle Name"
        />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input
          v-model="lastName"
          type="text"
          id="lastname"
          class="form-control"
          placeholder="Enter your Last Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="contactnum">Contact Number</label>
        <input
          v-model="contactNumber"
          type="text"
          id="contactnum"
          class="form-control"
          placeholder="Enter your Contact Number"
          required
        />
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
      firstName: "",
      middleName: "",
      lastName: "",
      contactNumber: ""
    };
  },
  methods: {
    signup() {
      if (this.password === this.confirmPassword) {
        // Passwords match, proceed with registration
        const formData = {
          first_name: this.firstName,
          middle_name: this.middleName,
          last_name: this.lastName,
          contact_number: this.contactNumber,
          email: this.email,
          password: this.password
        };

        // Make an API request to register the user
        axios
          .post("/api/register", formData)
          .then(response => {
            console.log("Registration successful!");
            // Redirect or show success message to the user
          })
          .catch(error => {
            console.log("Registration failed:", error.response.data);
            // Show error message to the user
          });
      } else {
        console.log("Passwords do not match");
        // Show error message to the user
      }
    }
  }
};
</script>

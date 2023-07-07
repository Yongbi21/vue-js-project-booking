<template>
  <div class="logout-content">
    <div class="logout-header">
      <h4>Log Out <i class="fa fa-lock"></i></h4>
    </div>
    <div class="logout-body">
      <p><i class="fa fa-question-circle"></i> Are you sure you want to log off?</p>
      <div class="logout-actions">
        <button class="logout-btn logout-btn-primary" @click="logout">Logout</button>
        <button class="logout-btn logout-btn-secondary" @click="close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async logout() {
      try {
        // Add the authentication token to the request headers
        const token = localStorage.getItem('token');

        const response = await axios.post('http://localhost:8000/api/logout', null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          // Clear the token from local storage
          localStorage.removeItem('token');
          
          // Redirect to the landing page
          this.$router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
@import "../assets/scss/logout.scss";
</style>

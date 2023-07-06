<template>
  <div class="settings-wrapper">
    <div class="settings-container">
      <div class="profile-container">
        <form class="card mb-4">
          <div class="card-header">
            <h2 class="card-heading" style="font-weight: 500;">Edit Profile</h2>
          </div>
          <div class="card-body">
            <div class="mb-4">
              <label class="form-label">First Name</label>
              <input class="form-control" type="text" placeholder="First Name">
            </div>
            <div class="mb-4">
              <label class="form-label">Last Name</label>
              <input class="form-control" type="text" placeholder="Last Name">
            </div>
            <div class="mb-4">
              <label class="form-label">Middle Initial</label>
              <input class="form-control" type="text" placeholder="Middle Initial">
            </div>
            <div class="mb-4">
              <label class="form-label">Email</label>
              <input class="form-control" type="email" placeholder="Email">
            </div>
            <div class="mb-4">
              <label class="form-label">Contact Number</label>
              <input class="form-control" type="number" placeholder="Contact Number">
            </div>
          </div>
          <div class="card-footer text-center">
            <button class="btn btn-primary" type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '../assets/css/settings.css';
</style>

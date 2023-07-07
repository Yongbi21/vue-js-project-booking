<template>
  <div class="settings-wrapper">
    <div class="settings-container">
      <form class="card mb-4">
        <div class="card-header">
          <h2 class="card-heading" style="font-weight: 500;">Edit Profile</h2>
        </div>
        <div class="card-body">
          <div class="row">
            <!-- Upload profile avatar -->
            <div class="col-md-3">
              <div class="text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" id="avatar" alt="avatar">
                <h6>Upload a different photo...</h6>
                <div class="mb-4">
                  <input class="form-control1" type="file">
                </div>
              </div>
            </div>
            <!-- Personal info -->
            <div class="col-md-9">
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
                  <label class="form-label">Phone Number</label>
               <vue-phone-number-input class="form-control" v-model="phoneNumber" placeholder="Contact Number"></vue-phone-number-input>
              </div>            
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-primary" id="update" type="submit">Update Profile</button>
        </div>
      </form>
  
        <div class="header-container">
          <h2 class="heading" style="font-weight: 500;">Edit Settings</h2>
        <div class="set-card">
          <div class="row">
            <div class="checkbox col-md-6">
              <div class="mb-4">
                <h2 class="sub-heading">Delivery Methods</h2>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="automated-reminders1" />
                  <label class="form-check-label" for="automated-reminders1">In-app Notifications</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="automated-reminders2" />
                  <label class="form-check-label" for="automated-reminders2">Email</label>
                </div>
              </div>
              <div class="mb-4" style="margin-left: 55px;">
                <h2 class="sub-heading">Automated Reminder</h2>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="automated-reminders2" />
                  <label class="form-check-label" for="automated-reminders2">Activate</label>
                </div>
              </div>
              <hr>
            </div>
            <div class="col-md-6">
              <div class="mb-4">
                <label class="form-label">Admin Message Notification:</label>
                <select class="form-control" id="notif-dropdown">
                  <option value="In-app" disable selected>In-app notifications</option>
                  <option value="In-app">In-app notifications</option>
                  <option value="None">None</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="form-label">Deadline Reminder</label>
                <input class="form-control" id="settings-date" type="date" placeholder="Date">
              </div>
            </div>
          </div>
        </div>
        <div class="savebtn">
          <button
            class="colored-button"
            id="save"
            @click="saveForm"
            type="submit"
          >
            Save
          </button>

        <div class="card-footer text-center">
          <button class="btn btn-primary" id="save" type="save">Save</button>
        </div>
      </div>
</div>
</div>
</div>
  
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      phoneNumber: '',
    };
  },
};
</script>


<style scoped>
@import '../assets/css/settings.css';
</style>

<template>
  <div class="container-lg">
    <div class="container-body">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-check mb-4">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox1"
              v-model="automatedReminders"
            />
            <h3>
              <label class="form-check-label" for="checkbox1"
                >Automated Reminders</label
              >
            </h3>
          </div>
          <div class="form-check mb-4">
            <h3>Delivery Method</h3>
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox2"
              v-model="inAppNotifications"
            />
            <label class="form-check-label" for="checkbox2"
              >In-App Notifications</label
            >
          </div>
          <div class="form-check mb-4">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkbox3"
              v-model="emailNotifications"
            />
            <label class="form-check-label" for="checkbox3">Email</label>
          </div>
        </div>
        <div class="col-md-6">
          <h2>Admin Notifications</h2>
          <div class="form-outline mb-4">
            <select class="form-select" v-model="adminNotification">
              <option value="" disabled selected hidden>
                In-App Notifications
              </option>
              <option value="rigatoni">Rigatoni</option>
              <option value="dave">Dave</option>
              <option value="pumpernickel">Pumpernickel</option>
              <option value="reeses">Reeses</option>
            </select>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h2>Deadline Reminders</h2>
              <div class="form-outline mb-4">
                <input
                  class="form-control"
                  type="date"
                  id="datepicker"
                  v-model="deadline"
                  placeholder="01/06/23"
                />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      automatedReminders: false,
      inAppNotifications: false,
      emailNotifications: false,
      adminNotification: "",
      deadline: "",
    };
  },
  methods: {
    saveForm() {
      // Handle form submission here
      console.log("Form submitted!");
      console.log("Automated Reminders:", this.automatedReminders);
      console.log("In-App Notifications:", this.inAppNotifications);
      console.log("Email Notifications:", this.emailNotifications);
      console.log("Admin Notifications:", this.adminNotification);
      console.log("Deadline:", this.deadline);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
}

.container-body {
  padding: 70px;
  background-color: #f8f9fa;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .container-body {
    padding: 20px;
  }

  .col-md-6 {
    margin-bottom: 20px;
  }
}
.savebtn {
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
</style>

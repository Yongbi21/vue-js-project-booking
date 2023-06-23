<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="form-check mb-4">
          <input class="form-check-input" type="checkbox" id="checkbox1" />
          <label class="form-check-label1" for="checkbox1"
            >Automated Reminders</label
          >
        </div>
        <div class="form-check mb-4">
          <h3>Delivery Method</h3>
          <input class="form-check-input" type="checkbox" id="checkbox2" />
          <label class="form-check-label" for="checkbox2"
            >In-App Notifications</label
          >
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="checkbox" id="checkbox3" />
          <label class="form-check-label" for="checkbox3">Email</label>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Admin Notifications</h2>
        <div class="form-outline mb-4">
          <select class="form-select" name="dog-names" id="dog-names">
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
                placeholder="01/06/23"
              />
            </div>
          </div>
        </div>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 20px;
}

.content {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  justify-items: center;
  justify-content: center;
}

.form-check-label h3,
.content h2 {
  margin-bottom: 10px;
}
form-check-label {
  text-size-adjust: 12px;
}

@media (max-width: 767px) {
  .col-md-6 {
    margin-bottom: 20px;
  }
}
</style>
<script>
export default {};
</script>

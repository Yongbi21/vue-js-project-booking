<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-content>
            <div id="settings">
              <div class="left">
                <div class="auto">
                  <div class="form-outline form-white mb-4">
                    <input type="checkbox" id="checkbox1" />
                    <label class="form-label" for="checkbox1"
                      >Automated Reminders</label
                    >
                  </div>
                </div>
                <div class="in app">
                  <h2>Delivery Methods</h2>
                  <div class="form-outline form-white mb-4">
                    <input type="checkbox" id="checkbox1" />
                    <label class="form-label" for="checkbox1"
                      >In - App notifications</label
                    >
                  </div>
                </div>
                <div class="email">
                  <div class="form-outline form-white mb-4">
                    <input type="checkbox" id="checkbox1" />
                    <label class="form-label" for="checkbox1">Email</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <h2>Admin Notifications</h2>
                <div class="form-outline form-white mb-4">
                  <select name="dog-names" id="dog-names">
                    <option value="" disabled selected hidden>
                      In app notifications
                    </option>
                    <option value="rigatoni">Rigatoni</option>
                    <option value="dave">Dave</option>
                    <option value="pumpernickel">Pumpernickel</option>
                    <option value="reeses">Reeses</option>
                  </select>
                </div>
                <div class="row">
                  <h2>Deadline Remainders</h2>
                  <div class="form-outline form-white mb-4">
                    <input type="date" id="datepicker" placeholder="01/06/23" />
                  </div>
                </div>
                <button>Save</button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
.right {
  float: right;
}
</style>
<script>
export default {};
</script>

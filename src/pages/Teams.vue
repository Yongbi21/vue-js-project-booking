<template>
  <div class="responsive-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 big-container">
          <div class="row">
            <div span="col-2 col-sm-8 mini-container text-center" id="mini1">
              <div class="team">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button
                    class="btn btn-primary custom-button"
                    id=""
                    @click="openteamModal"
                  >
                    <i class="bi bi-plus-lg"></i>
                  </button>

                  <div class="btn-group" role="group" id="team-drp">
                    <button
                      type="button"
                      class="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    Team A
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Team A</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Team B</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="teamModal" class="modal">
      <div class="modal-content">
        <span class="close" id="close" @click="closeModal">&times;</span>
        <h2 style="color: black">Add New Team</h2>
        <hr style="border: 1px solid black" />
        <form class="group">
          <label for="team">Team Name</label>
          <div class="input-container">
            <div id>
              <input
                v-model="teamName"
                type="text"
                id="teamName"
                class="form-control form-control-lg"
                placeholder="Enter your team name"
                required
              />

              <div>
                <label for="teamLeader">Team Leader</label>
                <input
                  v-model="teamLeader"
                  type="text"
                  id="teamLeader"
                  class="form-control form-control-lg"
                  placeholder="Enter your team leader name"
                  required
                />
              </div>
            </div>
            <label for="teamDetails">Team Details(optional)</label>
            <textarea
              id="teamDetails"
              placeholder="Put description of your project"
              required
            ></textarea>
          </div>
          <div class="row">
            <button
              type="submit"
              class="btn btn-primary add"
              id="save"
              @click="$router.push('/teams')"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-danger cancel"
              id="cancel"
              @click="closeModal"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
</script>

<style scoped>
@import "../assets/css/teams.css";
</style>

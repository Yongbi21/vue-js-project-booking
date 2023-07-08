<template>
  <div class="teams-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 big-container">
          <div class="table-responsive d-flex">
            <div
              class="Teams"
              style="margin-left: auto; margin-bottom: 30px; padding: 10px"
            >
              <button
                class="btn btn-primary custom-button"
                id=""
                @click="openMemberModal"
              >
                View Members
              </button>
            </div>
          </div>
          <div class="row">
            <div class="table-responsive" id="space">
              <table class="table">
                <thead>
                  <tr>
                    <th class="header-cell">#</th>
                    <th class="header-cell">Team Name</th>
                    <th class="header-cell">Team Leader</th>
                    <th class="header-cell">Members</th>
                    <th class="header-cell">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Angkol Teams</td>
                    <td>Bembol Roko</td>
                    <td>We are the Angkol Devs.</td>
                    <td class="status-working">
                      <i
                        class="bi bi-pencil-square"
                        id="services"
                        @click="openEditModal"
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bata Teams</td>
                    <td>Bimbol Loko</td>
                    <td>We are the Bata Devs.</td>
                    <td class="status-working">
                      <i
                        class="bi bi-pencil-square"
                        id="services"
                        @click="openEditModal"
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Anty Teams</td>
                    <td>Marites Tagalog</td>
                    <td>We are the Anty Devs.</td>
                    <td class="status-working">
                      <i
                        class="bi bi-pencil-square"
                        id="services"
                        @click="openEditModal"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Pricing Modal -->
    <div id="memberModal" class="modal -dialog modal-dialog-centered">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 style="color: black">Members</h2>
        <hr style="border: 1px solid black" />
        <div class="row">
          <div class="table-responsive" id="space">
            <table class="table">
              <thead>
                <tr>
                  <th class="header-cell">#</th>
                  <th class="header-cell">Team Name</th>
                  <th class="header-cell">Team Leader</th>
                  <th class="header-cell">Members</th>
                  <th class="header-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Angkol Teams</td>
                  <td>Bembol Roko</td>
                  <td>We are the Angkol Devs.</td>
                  <td class="status-working">
                    <i
                      class="bi bi-pencil-square"
                      id="services"
                      @click="openEditModal"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bata Teams</td>
                  <td>Bimbol Loko</td>
                  <td>We are the Bata Devs.</td>
                  <td class="status-working">
                    <i
                      class="bi bi-pencil-square"
                      id="services"
                      @click="openEditModal"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Anty Teams</td>
                  <td>Marites Tagalog</td>
                  <td>We are the Anty Devs.</td>
                  <td class="status-working">
                    <i
                      class="bi bi-pencil-square"
                      id="services"
                      @click="openEditModal"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <button type="submit" class="btn btn-primary add" id="add">
            Save
          </button>
          <button
            type="button"
            class="btn btn-danger cancel"
            @click="closeModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Edit Price Modal -->
    <div id="editModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 style="color: black">Edit Price</h2>
        <div class="row">
          <button type="submit" class="btn btn-primary add" id="add">
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger cancel"
            @click="closeModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Services Modal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    },

    closeModal(event) {
      const modal = event.target.closest(".modal");
      modal.style.display = "none";
    },
    openMemberModal() {
      this.openModal("memberModal");
    },

    openEditModal() {
      this.openModal("editModal");
    },

    openServicesModal() {
      this.openModal("servicesModal");
    },
  },

  mounted() {
    // Add event listeners to the "view" icons to trigger the openEditModal() method
    const viewIcons = document.querySelectorAll(
      ".status-working i.fas.fa-edit"
    );
    viewIcons.forEach((icon) => {
      icon.addEventListener("click", this.openEditModal);
    });
  },
};
</script>

<style scoped>
@import "../assets/css/teams.css";
</style>

    <template>
      <div class="pricing-quoting-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 big-container">   
                  <div class="table-responsive d-flex">
                    <div class="search" id="search-req">
                      <div class="input-group mb-3" id="search-request" style="width: 30vh;">
                        <div class="input-group-append">
                    </div>
                      <input
                        type="text"
                        id="searchInput"
                        class="form-control"
                        placeholder="Search..."
                        v-model="searchInput"
                        >
                </div>
              </div>
                    <div class="price " style="margin-left: auto; margin-bottom: 0px; padding: 10px;">
                      <button class="btn btn-primary custom-button" id="add-request" @click="openAddModal">Add</button>
            </div>
      </div>
      <div class="row"> 
              <div class="table-responsive" id="space">
                    <table class="table">
                      <thead>
                        <tr>  
                          <th class="header-cell">#</th>
                          <th class="header-cell">Name</th>
                          <th class="header-cell">Email</th>
                          <th class="header-cell">Project Name</th>
                          <th class="header-cell">Project Details</th>
                          <th class="header-cell">Budget</th>
                          <th class="header-cell">Priority</th>
                          <th class="header-cell">Due Date</th>
                          <th class="header-cell">File</th>
                          <th class="header-cell">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John Doe</td>
                          <td>Johnydadskie@gmail.com</td>
                          <td>Ecommerce</td>
                          <td>Web App Ecommerce Site</td>
                          <td>₱100,000</td>
                          <td>High</td>
                          <td>01-07-23</td>
                          <td class="status-working">
                            <i class="fas fa-file" id="file-icon" @click="openFileModal"></i>
                          </td>
                          <td class="status-working">
                            <i class="fas fa-edit" id="edit-icon" @click="openEditModal"></i>
                          </td>
                        </tr>           
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
      </div>
    <!-- Add Project Request Modal -->
    <div id="addModal" class="modal"> 
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 style="color: black;">Add New Project</h2>
        <hr style="border: 1px solid black;">
        <div class="row">
          <div class="col-md-4">
            <form class="group">
              <label for="newName">Name:</label>
              <input type="text" id="newName" placeholder="Enter your Name" required>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="newProjectEmail">Email:</label>
              <input type="email" id="newProjectEmail" placeholder="Enter your email" required>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="newProjectName">Project Name:</label>
              <input type="text" id="newProjectName" placeholder="Enter your project name" required>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
  <label for="newProjectBudget">Budget:</label>
  <input
  type="text"
  id="newProjectBudget"
  v-model="budgetValue"
  v-money="{
    decimal: '.',
    thousands: ',',
    prefix: '₱',
    precision: 2,
    masked: false
  }"
  required>
</div>
    <div class="col-md-4">
            <form class="group">
              <label for="newProjectPriority">Priority:</label>
              <select id="newProjectPriority" required>
                <option value="" selected>Choose your level of priority</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
              </select>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="newProjectDate">Due Date:</label>
              <input type="date" id="newProjectDate" required>
            </form>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <form class="group">
              <label for="newProjectDetails">Project Details:</label>
              <textarea id="newProjectDetails" placeholder="Put the description of your project . . . . ." required></textarea>
            </form>
          </div>
        </div>
        
        
      <div class="row" id="edit-cancel">
        <button type="submit" class="btn btn-primary add" id="add">Edit</button>
        <button type="button" class="btn btn-danger cancel" @click="closeModal">Cancel</button>
      </div>

        </div>
      </div>

    <!-- Edit Project Request Modal -->
    <div id="editModal" class="modal"> 
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 style="color: black;">Add New Project</h2>
        <hr style="border: 1px solid black;">
        <div class="row">
          <div class="col-md-4">
            <form class="group">
              <label for="Name">Name:</label>
              <input type="text" id="Name" placeholder="John Doe" required>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="ProjectEmail">Email:</label>
              <input type="email" id="ProjectEmail" placeholder="Johnydadskie@gmail.com" required>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="ProjectName">Project Name:</label>
              <input type="text" id="ProjectName" placeholder="Ecommerce" required>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <form class="group">
              <label for="ProjectBudget">Budget:</label>
              <input type="text" id="ProjectBudget" placeholder="₱100,000" required>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="ProjectPriority">Priority:</label>
              <select id="ProjectPriority" required>
                <option value="urgent" selected>Urgent</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
              </select>
            </form>
          </div>
          <div class="col-md-4">
            <form class="group">
              <label for="ProjectDate">Due Date:</label>
              <input type="date" id="ProjectDate">
            </form>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <form class="group">
              <label for="ProjectDetails">Project Details:</label>
              <textarea id="ProjectDetails" placeholder="Web App Ecommerce Site" required></textarea>
            </form>
          </div>
        </div>
        
        
      <div class="row" id="edit-cancel">
        <button type="submit" class="btn btn-primary add" id="add">Edit</button>
        <button type="button" class="btn btn-danger cancel" @click="closeModal">Cancel</button>
      </div>

        </div>
      </div>
    </div>
      </template>

    <script>

    export default {

    data() {
      return {
        sortOption: 'default',
        isModalOpen: false,
        searchInput: '',
        budgetValue: null,
      };
    },
      methods: {
        handleClick() {

        },
        
        openModal(modalId) {
          const modal = document.getElementById(modalId);
          modal.style.display = "block";
          this.isModalOpen = true;
        },

        closeModal(event) {
          const modal = event.target.closest(".modal");
          modal.style.display = "none";
          this.isModalOpen = false;
        },
        openEditModal() {
          this.openModal("editModal");
        },
        openAddModal() {
          this.openModal("addModal");
        },
      },

      watch: {
        isModalOpen(val) {
          if (val) {
            document.body.classList.add("modal-open");
          } else {
            document.body.classList.remove("modal-open");
          }
        },
      },
      mounted() {
        const viewIcons = document.querySelectorAll(".status-working i.fas.fa-edit");
        viewIcons.forEach((icon) => {
          icon.addEventListener("click", this.openEditModal);
        });
    },
    };

    </script>

    <style scoped>
    @import '../assets/css/project-request.css';
    </style>

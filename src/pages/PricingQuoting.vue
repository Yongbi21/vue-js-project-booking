<template>
  <div class="pricing-quoting-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 big-container" id="price1">   
              <div class="table-responsive d-flex">
                <div class="col-6 sort-by" id="sort">
                  <label for="sortDropdown"></label>
                <select v-model="sortOption" @change="sortTable" id="sortDropdown">
                <option value="default">Sort by:</option>
                <option value="high">High</option>
                <option value="med">Medium</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
                </select>
                <i class="fa-solid fa-caret-down dropdown-icon"></i>
                </div>
                <div class="col-6 sort-by" id="sort2">
                  <label for="sortDropdown"></label>
                <select v-model="sortOption" @change="sortTable" id="sortDropdown">
                <option value="default">Sort by:</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                </select>
                <i class="fa-solid fa-caret-down dropdown-icon"></i>
                </div>

                <div class="price " style="margin-left: auto; margin-bottom: 30px; padding: 10px;">
                  <button class="btn btn-primary custom-button" id="edit-price" @click="openPriceModal">Edit Prices</button>
        </div>
   </div>
   <div class="row"> 
          <div class="table-responsive" id="space">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="header-cell">#</th>
                      <th class="header-cell">Project Complexity</th>
                      <th class="header-cell">Estimated Time</th>
                      <th class="header-cell">Date Created</th>
                      <th class="header-cell">Additional Services</th>
                      <th class="header-cell">Total Amount</th>
                      <th class="header-cell">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>High</td>
                      <td>1 month</td>
                      <td>01-07-23</td>
                      <td class="status-working">
                        <i class="fas fa-eye" id="services" @click="openServicesModal"></i>
                     </td>
                      <td class="amount">₱100,000</td>
                      <td class="status-working">
                        <i class="fas fa-edit" id="edit-icon" @click="openEditModal"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>High</td>
                      <td>1 month</td>
                      <td>01-07-23</td>
                      <td class="status-working">
                        <i class="fas fa-eye" id="services" @click="openServicesModal"></i>
                     </td>
                      <td class="amount">₱100,000</td>
                      <td class="status-working">
                        <i class="fas fa-edit" id="edit-icon" @click="openEditModal"></i>
                      </td>
                    </tr>                 
                    <tr>
                      <td>3</td>
                      <td>High</td>
                      <td>1 month</td>
                      <td>01-07-23</td>
                      <td class="status-working">
                        <i class="fas fa-eye" id="services" @click="openServicesModal"></i>
                     </td>
                      <td class="amount">₱100,000</td>
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
  <!-- Edit Pricing Modal -->
<div id="priceModal" class="modal"> 
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 style="color: black;">Edit Prices</h2>
      <hr style="border: 1px solid black;">
      <form class="group">
      <label for="projectCost">Cost for Project Complexity:</label>
      <input type="text" id="projectCost" pattern="^[A-Za-z]{1,3}\s?\d+(\.\d{1,2})?$" placeholder="High - ₱30,000" required>
      <label for="projectCost">Cost for Project Complexity:</label>
      <input type="text" id="projectCost" pattern="^[A-Za-z]{1,3}\s?\d+(\.\d{1,2})?$" placeholder="Average - ₱20,000" required>
      <label for="projectCost">Cost for Project Complexity:</label>
      <input type="text" id="projectCost" pattern="^[A-Za-z]{1,3}\s?\d+(\.\d{1,2})?$" placeholder="Low - ₱10,000" required>
      <label for="projectCost">Cost for Time Estimation:</label>
      <input type="text" id="projectCost" pattern="^[A-Za-z]{1,3}\s?\d+(\.\d{1,2})?$" placeholder="1 month - ₱30,000" required>
      <label for="projectCost">Cost for Additional Services:</label>
      <input type="text" id="projectCost" pattern="^[A-Za-z]{1,3}\s?\d+(\.\d{1,2})?$" placeholder="₱10,000" required>

    </form>
    <div class="row">
    <button type="submit" class="btn btn-primary add" id="add">Edit</button>
    <button type="button" class="btn btn-danger cancel" @click="closeModal">Cancel</button>
   </div>

    </div>
  </div>

<!-- Edit Price Modal -->
<div id="editModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 style="color: black;">Edit Price</h2>
      <form class="group">
      <hr style="border: 1px solid black;">

      <label for="projectComplexity">Project Complexity:</label>
      <select id="projectComplexity" required>
        <option value="" selected>High</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
      
      <div class="estimatedTime">
      <label for="estimatedTime">Estimated Time</label>
      <input type="week" v-model="weekValue" @input="handleInput">
      <input type="month" v-model="monthValue" @input="handleInput">
      </div>

      <label for="projectDate">Date Created</label>
      <input type="date" id="projectDate" placeholder="Enter date created" required>
      
  <label for="Total Amount">Total Amount:</label>
  <input
  type="text"
  id="totalAmount"
  v-model="totalValue"
  v-money="{
    decimal: '.',
    thousands: ',',
    prefix: '₱',
    precision: 2,
    masked: false
  }"
  required>      

      <label for="additional-services">Additional Services</label>
      <textarea id="additional-services" placeholder="Input Additional Services" required></textarea>  
    </form>
    <div class="row">
    <button type="submit" class="btn btn-primary add" id="add">Edit</button>
    <button type="button" class="btn btn-danger cancel" @click="closeModal">Cancel</button>
   </div>

    </div>
  </div>

  <!-- Services Modal -->
  <div id="servicesModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Additional Services</h2>
      <hr>
      <label for="additional-services">Services Requested:</label>
      <textarea id="additional-services" placeholder="Web Design, UI Design, Maintainenance" required></textarea>  

    </div>
  </div>
</div> 
  </template>

<script>
export default {
  data() {
       return {
        sortOption: "default", 
       weekValue: '',
        monthValue: ''
      };
    },
    


  methods: {
    handleInput() {
      const combinedDate = this.weekValue + '-' + this.monthValue + '-' 
    },
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    },

    closeModal(event) {
      const modal = event.target.closest(".modal");
      modal.style.display = "none";
    },
    openPriceModal() {
      this.openModal("priceModal");
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
    const viewIcons = document.querySelectorAll(".status-working i.fas.fa-edit");
    viewIcons.forEach((icon) => {
      icon.addEventListener("click", this.openEditModal);
    });
  },
};
</script>

<style scoped>
@import '../assets/css/pricing-qouting.css';
</style>

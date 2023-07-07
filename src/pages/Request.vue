  <template>
    <div class="request-form">

    <form>
      <div class="d-flex justify-content-between">
        <div class="close-icon">
          <i class="fas fa-times" @click="goToLandingPage"></i>
        </div>
      </div>
      <legend class="prf">Project Request Form</legend><br>
      <hr style="border: 1px solid black;">
      <label for="projectName">Project Name</label>
      <input type="text" id="projectName" placeholder="Enter project name" required>
      
      <label for="projectDescription">Project Description</label>
      <textarea id="projectDescription" placeholder="Enter project description" required></textarea>  
      <label for="projectPriority">Priority</label>
      <select id="projectPriority" required>
        <option value="" disabled selected>Select priority</option>
        <option value="urgent">Urgent</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
      <label for="projectBudget">Budget</label>
      <input type="number" id="projectBudget" placeholder="Enter budget" required>

      <label for="projectDeadline">Due Date</label>
      <input type="date" id="projectDeadline" placeholder="Enter due date" required>
      <label for="attachedFile">Attach File</label>
      <input type="file" id="attachedFile">
      <button type="submit" class="next" id="next">Proceed to Next</button>
    </form>
  </div>
    </template>

  <style scoped>
  @import '../assets/css/request.css';
  @import '~@fortawesome/fontawesome-free/css/all.css';
  </style>


  <script>
  export default {
    name: "Request1",
    methods: {
      goToLandingPage() {
      // Code to navigate to the landing page using router
      // For example, if your landing page route name is 'landing':
      this.$router.push({ name: 'landingpage' });
    },
    // Rest of the component code
    },
      submitForm(event) {
        event.preventDefault();

        // Perform manual form validation
        if (event.target.checkValidity()) {
          // All required fields are filled, proceed to next
          // Add your logic here

          // For example, you can navigate to the next page using router
          // this.$router.push({ name: 'request1' });
        } else {
          // Invalid form, display error messages or handle validation errors
        }
      }
    }
  
  </script>
    
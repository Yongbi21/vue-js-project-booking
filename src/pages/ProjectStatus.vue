<template>
  <div class="responsive-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 big-container">
          <div class="row">
            <div class="col-6 col-md-3 mini-container text-center" id="mini1">
              <h2 class="h">2</h2>
              <h3>Completed Task</h3>
            </div>
            <div class="col-6 col-md-3 mini-container text-center" id="mini2">
              <h2 class="h">2</h2>
              <h3>Cancelled Task</h3>
            </div>
            <div class="col-6 col-md-3 mini-container text-center" id="mini3">
              <h2 class="h">2</h2>
              <h3>Completed Milestones</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 middle-container align-center">
              <h4 class="ts text-center">Task Status</h4>
              <br>
              <div class="chart-wrapper d-flex justify-center align-center">
                <Doughnut
                  id="doughnut"
                  :options="chartOptions"
                  :data="doughnutData"
                />
              </div>
            </div>
            <div class="col-12 col-md-6 middle-container align-center">
              <h4 class="tp text-center">Project Progress</h4><br><br>
              <div>
                <Bar
                  id="chart-wrapper d-flex justify-center align-center"
                  :options="chartOptions"
                  :data="barData"
                />
              </div>
            </div>
          </div>
          <div class="row">        
            <div class="col-12 col-md-12 semi-middle-container ">
              <h3 class="pl text-left">Project Timeline</h3>
              <div class="table-responsive d-flex">
                <div class="search" style="margin-left: auto;">
           <div class="input-group mb-3" style="width: 30vh;">
            <input
                  type="text"
                  id="searchInput"
                  class="form-control"
                  placeholder="Search..."
                  v-model="searchInput"
               >
             <div class="input-group-append">
             <button class="btn btn-outline-secondary" type="button" @click="searchTable()">Search</button>
           </div>
         </div>
       </div>
   </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th class="header-cell">#</th>
                      <th class="header-cell">Task</th>
                      <th class="header-cell">Owner</th>
                      <th class="header-cell">Start Date</th>
                      <th class="header-cell">Due Date</th>
                      <th class="header-cell">Status</th>
                      <th class="header-cell">Milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Create a Real Estate Landing Page</td>
                      <td>Kurt</td>
                      <td>01-07-23</td>
                      <td>01-014-23</td>
                      <td class="status-working">In Progress</td>
                      <td class="status-working">
                      <i class="fas fa-eye" id="milestone-cell"></i></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>New a Real Estate Landing Page</td>
                      <td>Kurt</td>
                      <td>01-07-23</td>
                      <td>01-014-23</td>
                      <td class="status-working">In Progress</td>
                      <td class="status-working">
                      <i class="fas fa-eye" id="milestone-cell"></i></td>                    
                    </tr>                   
                      <tr>
                      <td>3</td>
                      <td>Create a Real Estate Landing Page</td>
                      <td>Kurt</td>
                      <td>01-07-23</td>
                      <td>01-014-23</td>
                      <td class="status-working">In Progress</td>
                      <td class="status-working">
                      <i class="fas fa-eye" id="milestone-cell"></i></td>                    
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Create a Real Estate Landing Page</td>
                      <td>Kurt</td>
                      <td>01-07-23</td>
                      <td>01-014-23</td>
                      <td class="status-working">In Progress</td>
                      <td class="status-working">
                      <i class="fas fa-eye" id="milestone-cell"></i></td>                    
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
      <!-- Modal Form -->
<div id="milestoneModal" class="modal">
  <div class="modal-content">
    <span class="close" @click="closeModal">&times;</span>
    <!-- Your form content goes here -->
    <h2>Milestones Completed</h2>
    <hr>
    <ul>
        <li v-for="milestone in completedMilestones" :key="milestone.id">{{ milestone.name }}</li>
      </ul>
  </div>
</div>
      </div>
    </div>
</template>

<script>
import { Bar, Doughnut } from 'vue-chartjs';
import 'chartjs-plugin-labels';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale);

export default {
  name: 'Charts',
  components: { Bar, Doughnut },
  data() {
    return {
      barData: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
          {
            label: 'Progress',
            data: [30, 35, 40, 50, 55, 60, 75],
            backgroundColor: '#477BFF',
            borderColor: '#477BFF',
          },
        ],
      },
      doughnutData: {
        labels: ['Completed', 'Incompleted'],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ['#47D1CB', '#477BFF'],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                var value = context.dataset.data[context.dataIndex];
                return value + '%';
              },
            },
          },
        },
        aspectRatio: 1.5,
      },
    };
  },
  methods: {
    searchTable() {
      const filter = this.searchInput.toUpperCase();
      const table = document.querySelector('.table');
      const tr = table.getElementsByTagName('tr');

      for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[1]; // Column index to filter (Task column in this case)
        if (td) {
          const txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    },

    openModal() {
      const modal = document.getElementById("milestoneModal");
      modal.style.display = "block";
    },

    closeModal() {
      const modal = document.getElementById("milestoneModal");
      modal.style.display = "none";
    },
  },
  mounted() {
    // Add event listeners to the "view" icons to trigger the openModal() method
    const viewIcons = document.querySelectorAll(".status-working i.fas.fa-eye");
    viewIcons.forEach((icon) => {
      icon.addEventListener("click", this.openModal);
    });
  },
};



</script>

<style scoped>
@import '../assets/css/project-status.css';
</style>

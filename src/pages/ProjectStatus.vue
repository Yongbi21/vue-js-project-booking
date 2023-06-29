<template>
  <div class="container">
    <div class="row">
      <div class="col-12 big-container">
        <div class="row">
          <div class="col-6 col-md-3 mini-container text-center">
            <h2>2</h2>
            <hr>
            <h3>Completed Task</h3>
          </div>
          <div class="col-6 col-md-3 mini-container text-center">
            <h2>2</h2>
            <hr>
            <h3>Inompleted Task</h3>
          </div>
          <div class="col-6 col-md-3 mini-container text-center">
            <h2>2</h2>
            <hr>
            <h3>Upcoming Task</h3>
          </div>
          <div class="col-6 col-md-3 mini-container text-center">
            <h2>75%</h2>
            <hr>
            <h3>Overall Progress</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-md-6 middle-container">
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
          <div class="col-6 col-md-6 middle-container">
            <h4 class="tp text-center">Team Progress</h4><br>
            <br>
            <div>
              <Bar
                id="chart-wrapper d-flex justify-center align-center"
                :options="chartOptions"
                :data="barData"
              />
            </div>
          </div>
          <div class="row">
        </div>
            <div class="col-12 col-md-12  semi-middle-container">
  <h4 class="pl text-left">Project Timeline</h4>
  <table class="table">
    <thead>
      <tr>
        <th class="header-cell">#</th>
        <th class="header-cell">Task</th>
        <th class="header-cell">Owner</th>
        <th class="header-cell">Due Date</th>
        <th class="header-cell">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Create a Real Estate Landing Page</td>
        <td>Kurt</td>
        <td>01-07-23</td>
        <td class="status-working">Working</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Create a Real Estate Landing Page</td>
        <td>Kurt</td>
        <td>01-07-23</td>
        <td class="status-working">Working</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Create a Real Estate Landing Page</td>
        <td>Kurt</td>
        <td>01-07-23</td>
        <td class="status-cancelled">Cancelled</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Create a Real Estate Landing Page</td>
        <td>Kurt</td>
        <td>01-07-23</td>
        <td class="status-working">Working</td>
      </tr>
         </tbody>
        </table>
      </div>
          <div class="col-6 col-md-6 semi-mid-container">
            <h4 class="ml text-left">Milestones</h4>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Doughnut } from 'vue-chartjs';
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
            data: [100, 90, 80, 75, 70, 60, 40],
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
        aspectRatio: 1.5, // Adjust the aspect ratio of the doughnut chart
      },
    };
  },
};

</script>

<style scoped>
@import '../assets/css/project-status.css';
</style>

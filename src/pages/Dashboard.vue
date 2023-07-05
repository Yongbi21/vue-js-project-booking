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
                  <button type="button" class="btn btn-primary">
                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                  </button>

                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Teams
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Dropdown link</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Dropdown link</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 middle-container align-center">
              <h4 class="ts text-left">Project Details</h4>
              <div class="card -md-10" id="projectdetails">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="card">
                      <div class="card-body" id="realstit">
                        <span id="proj">Real Estate Project</span>
                        <i class="bi bi-three-dots-vertical" id="dots"></i>
                        <p>
                          Create a consistent look and feel smooth on web and
                          mobile, revision in landing page.
                        </p>
                        <br />
                        <div class="team-container">
                          <button type="button" class="btn btn-danger" disabled>
                            Kurt and team
                          </button>
                          <img
                            src="../assets/img/angkol.png"
                            alt="Avatar"
                            class="avatar"
                          />
                          <img
                            src="../assets/img/angkol.png"
                            alt="Avatar"
                            class="avatar"
                          />
                          <img
                            src="../assets/img/angkol.png"
                            alt="Avatar"
                            class="avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <div class="card">
                      <div class="card-body" id="mobile">
                        <span id="proj">Travel Mobile Design</span>
                        <i class="bi bi-three-dots-vertical" id="dots"></i>
                        <p>
                          Create a consistent look and feel smooth on web and
                          mobile, revision in landing page.
                        </p>
                        <br />
                        <div class="logo-container">
                          <button type="button" class="btn btn-danger" disabled>
                            Jonel
                          </button>
                          <img
                            src="../assets/img/angkol.png"
                            alt="Avatar"
                            class="avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="card">
                      <div class="card-body" id="helth">
                        <span id="proj">Health Tracker Device</span>
                        <i class="bi bi-three-dots-vertical" id="dots"></i>
                        <p id="realstit">
                          Create a consistent look and feel smooth on web and
                          mobile, revision in landing page.
                        </p>
                        <br />
                        <div class="logo-container">
                          <button type="button" class="btn btn-danger" disabled>
                            Bembol
                          </button>
                          <img
                            src="../assets/img/angkol.png"
                            alt="Avatar"
                            class="avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <br />
              <div
                class="details-wrapper d-flex justify-center align-center"
              ></div>
            </div>
            <div class="col-12 col-md-12 middle-container align-center">
              <div class="card">
                <div class="card-body">
                  <h4 class="tp text-left">Project Progress</h4>
                  <br /><br />
                  <Bar
                    id="chart-wrapper d-flex justify-center align-center"
                    :options="chartOptions"
                    :data="barData"
                  />
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h4 class="tp text-left">Project Deadline</h4>
                  <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <div span="col">
                            <button type="button" class="btn btn-info" disabled>
                              Done
                            </button>
                          </div>
                          <h5 class="card-title">Real State Project</h5>
                          <div>
                            <img
                              src="../assets/img/angkol.png"
                              alt="Avatar"
                              class="avatar"
                            />
                          </div>
                          <div>
                            <i class="bi bi-calendar3">29 January 2023</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <div span="col">
                            <button type="button" class="btn btn-info" disabled>
                              Done
                            </button>
                          </div>
                          <h5 class="card-title">Travel Mobile Design</h5>
                          <div>
                            <img
                              src="../assets/img/angkol.png"
                              alt="Avatar"
                              class="avatar"
                            />
                          </div>
                          <div>
                            <i class="bi bi-calendar3">29 January 2023</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <div span="col">
                            <button type="button" class="btn btn-info" disabled>
                              Done
                            </button>
                          </div>
                          <h5 class="card-title">Health Tracker Device</h5>
                          <div>
                            <img
                              src="../assets/img/angkol.png"
                              alt="Avatar"
                              class="avatar"
                            />
                          </div>
                          <div>
                            <i class="bi bi-calendar3">29 January 2023</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import "chartjs-plugin-labels";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "Charts",
  components: { Bar },
  data() {
    return {
      barData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Progress",
            data: [100, 150, 90, 80, 55, 60, 75, 100, 150, 90, 80, 55],
            backgroundColor: "#D70040",
            borderColor: "#D70040",
            borderRadius: 10,
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
                return value;
              },
            },
          },
        },
        aspectRatio: 1.5,
      },
    };
  },
};
</script>

<style scoped>
@import "../assets/css/dashboard.css";
</style>

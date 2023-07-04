<template>
  <div class="container">
    <div class="row-lg">
      <div class="team">
        <div class="btn-group" role="group">
          <button type="button" class="team-btn" id="teambtn">
            <i class="bi bi-plus-square-fill" id="plus"></i>
          </button>

          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Teams
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-5 col-sm-6">
        <div class="card -md-10" id="details">
          <div class="card-title">Project Details</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div>
                <span id="proj">Real Estate Project</span>
                <i class="bi bi-three-dots-vertical"></i>
                <p>
                  Create a consistent look and feel smooth on web and mobile,
                  revision in landing page.
                </p>
                <br />
                <div class="logo-container">
                  <a href="#">Kurt and team</a>
                  <img
                    class="avatar"
                    src="../assets/img/angkol.png"
                    alt="Logo 1"
                  />
                  <img
                    class="avatar"
                    src="../assets/img/kalbs.png"
                    alt="Logo 2"
                  />
                  <img
                    class="avatar"
                    src="../assets/img/angkol.png"
                    alt="Logo 3"
                  />
                </div>
              </div>
            </li>

            <li class="list-group-item">
              <div>
                <span id="proj">Travel Mobile Design</span>
                <i class="bi bi-three-dots-vertical"></i>
                <p>
                  Create a consistent look and feel smooth on web and mobile,
                  revision in landing page.
                </p>
                <br />
                <div class="logo-container">
                  <a href="#">Jonel</a>
                  <img
                    class="avatar"
                    src="../assets/img/angkol.png"
                    alt="Logo 1"
                  />
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div>
                <span id="proj">Health Tracker Device</span>
                <i class="bi bi-three-dots-vertical"></i>
                <p id="realstit">
                  Create a consistent look and feel smooth on web and mobile,
                  revision in landing page.
                </p>
                <br />
                <div class="logo-container">
                  <a href="#">Bembol</a>
                  <img
                    class="avatar"
                    src="../assets/img/kalbs.png"
                    alt="Logo 1"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 col-sm-6">
            <div class="card" id="chart">
              <div class="card-body">
                <div class="card-title">Project Status</div>
                <Bar :data="data" :options="options" />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-sm-6">
            <div class="card" id="deadline">
              <div class="card-body">
                <h5 class="card-title">Project Deadline</h5>
                <div class="row row-cols-1 row-cols-sm-3 g-3">
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <div id="btn">
                          <button
                            type="button"
                            disabled
                            class="btn btn-info custom-button"
                          >
                            <p>Done</p>
                          </button>
                        </div>
                        <div>
                          <h5 class="card-title">Travel Mobile Design</h5>
                        </div>
                        <div>
                          <img class="avatar" src="../assets/img/angkol.png" />
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
                        <div id="done">
                          <button
                            type="button"
                            disabled
                            class="btn btn-info custom-button"
                          >
                            <p>Done</p>
                          </button>
                        </div>
                        <div>
                          <h5 class="card-title">Real State Project</h5>
                        </div>
                        <div>
                          <img class="avatar" src="../assets/img/angkol.png" />
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
                        <div class="done">
                          <button
                            type="button"
                            disabled
                            class="btn btn-info custom-button"
                            id="done"
                          >
                            <p>Done</p>
                          </button>
                        </div>
                        <div>
                          <h5 class="card-title">Health Tracker Device</h5>
                        </div>
                        <div>
                          <img class="avatar" src="../assets/img/angkol.png" />
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
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
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
            label: "Completed Projects",
            backgroundColor: "#f87979",
            borderRadius: 10,
            data: [15, 35, 75, 150, 70, 100, 80, 200, 100, 70, 250, 160],
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
};
</script>

<style scoped>
@import "../assets/css/dashboard.css";
</style>

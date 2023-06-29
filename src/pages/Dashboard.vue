<template>
  <div class="container">
    <div class="row">
      <div class="row">
      <div class="team" id="team">
        <div class="teambox">
        <span class="add"><i class="bi bi-plus"></i></span>
          <select name="team" id="team">
            <option value="team A" selected disabled>team A</option>
            <option value="team B">team B</option>
            <option value="team C">team C</option>
            <option value="team D">team D</option>
          </select>
          <div class="task" id="task">
            <div class="taskbox">
            <span class="add"><i class="bi bi-plus"></i></span>
              <select name="task" id="task">
                <option value="team A" selected disabled> Add Task</option>
                <option value="team B">team B</option>
                <option value="team C">team C</option>
                <option value="team D">team D</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="col-md-5 col-sm-6">
        <div class="card -md-8" id="details">
          <div class="card-t">Project Details</div>
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
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
.logo-container {
  display: flex;
}
#projectdetails {
  background: #ffffff;
  box-shadow: 6px 10px 35px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  box-sizing: border-box;
  padding: 20px;
  height: 90vh;
}
img.avatar {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  vertical-align: middle;
  float: right;
  top: 10px;
}
.custom-button {
  width: 70px;
  height: 25px;
}
</style>

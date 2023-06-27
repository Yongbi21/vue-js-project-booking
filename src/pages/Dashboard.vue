<template>
  <div class="row row-cols-1 row-cols-sm-1 g-3">
    <div class="card" id="projectdetails" style="width: 25rem">
      <ul class="list-group list-group-flush">
        <div class="card-header">Project Details</div>
        <div>
          <span id="proj">Real Estate Project</span>
          <i class="bi bi-three-dots-vertical"></i>
          <p id="realstit">
            Create a consistent look and feel smooth on web and mobile, revision
            in landing page.
          </p>
          <br />
          <div class="logo-container">
            <a href="#">Kurt and team</a>
            <img src="../assets/img/angkol.png" alt="Logo 1" />
            <img src="../assets/img/kalbs.png" alt="Logo 2" />
            <img src="../assets/img/angkol.png" alt="Logo 3" />
          </div>
        </div>
        <li class="list-group-item"></li>
        <div>
          <span id="proj">Travel Mobile Design</span>
          <i class="bi bi-three-dots-vertical"></i>
          <p id="realstit">
            Create a consistent look and feel smooth on web and mobile, revision
            in landing page.
          </p>
          <br />
          <div class="logo-container">
            <a href="#">Jonel</a>
            <img src="../assets/img/angkol.png" alt="Logo 1" />
          </div>
        </div>
        <li class="list-group-item"></li>
        <div>
          <span id="proj">Health Tracker Device</span>
          <i class="bi bi-three-dots-vertical"></i>
          <p id="realstit">
            Create a consistent look and feel smooth on web and mobile, revision
            in landing page.
          </p>
          <br />
          <div class="logo-container">
            <a href="#">Bembol</a>
            <img src="../assets/img/kalbs.png" alt="Logo 1" />
          </div>
        </div>
      </ul>
    </div>
    <div class="col" id="chart">
      <div class="card">
        <div class="card-body">
          <div class="card-title">Project Status</div>
          <Bar :data="data" :options="options" />
        </div>
      </div>
    </div>
    <div class="col" id="deadline" style="color: ">
      <h5 class="card-title">
        <strong>Project Deadline</strong>
      </h5>
      <div class="card text-bg-light mb-3" id="travel">
        <div class="done">Done</div>
        <div class="card-body">
          <h5 class="card-title" id="travelcard">
            <strong>Travel Mobile Design</strong>
          </h5>
          <div class="logo-container">
            <img src="../assets/img/angkol.png" alt="Logo 1" id="img1" />
          </div>
          <i class="bi bi-calendar3">29 January 2023</i>
        </div>
      </div>
      <div class="card text-bg-light mb-3" id="real">
        <div class="done" id="card1">Done</div>
        <div class="card-body">
          <h5 class="card-title"><strong>Real Estate proeject</strong></h5>
          <div class="logo-container">
            <img src="../assets/img/angkol.png" alt="Logo 1" id="img1" />
          </div>
          <i class="bi bi-calendar3">29 January 2023</i>
        </div>
      </div>
      <div class="card text-bg-light mb-3" id="health">
        <div class="done">Done</div>
        <div class="card-body">
          <h5 class="card-title"><strong>Health Tracker Device</strong></h5>
          <div class="logo-container">
            <img src="../assets/img/angkol.png" alt="Logo 1" id="img1" />
          </div>
          <i class="bi bi-calendar3">29 January 2023</i>
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
  name: "App",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: ["Jan 12", "Jan 18", "Jan 20", "Jan 23", "Jan 27","Jan 28", "Jan 29"],
        datasets: [{ data: [15, 35, 75, 150, 70, 100, 80] }],
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
#realstit {
  text-align: left;
  height: 90px;
}
#projectdetails {
  position: absolute;
  width: 500px;
  height: 85vh;
  left: 186px;
  top: 90px;
  background: #ffffff;
  box-shadow: 6px 10px 35px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  box-sizing: border-box;
}

.logo-container img {
  width: 20px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 1px; /* Adjust the margin between images */
  margin-left: 10px;
}
#travel {
  position: absolute;
  float: left;
  top: 0;
  margin-top: 35px;
  right: 50%;
  width: 255px;
  margin-right: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 35px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}
#real {
  position: absolute;
  float: right;
  top: 0;
  margin-top: 35px;
  left: 50%;
  width: 255px;
  right: 50%;
  margin-left: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 35px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}
#health {
  margin-top: 20px;
  position: absolute;
  top: 50%;
  left: 30%;
  width: 255px;
  right: 55%;
  background: #ffffff;
  box-shadow: 0px 0px 35px 10px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}
#deadline {
  position: absolute;
  width: 600px;
  height: 40vh;
  left: 603px;
  top: 450px;

  background: #ffffff;
  border-radius: 14px;
  margin-bottom: 32px;
}

#chart {
  position: absolute;
  width: 600px;
  height: 50vh;
  left: 603px;
  top: 95px;
  border-radius: 14px;
}

#done {
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 4;
}
</style>

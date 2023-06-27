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
          <h5 class="card-title">Project Status</h5>
          <div></div>
        </div>
      </div>
    </div>
    <div class="col" id="deadline">
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

<script>
export default {};
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
  height: 70vh;
  left: 186px;
  top: 230px;
  background: #ffffff;
  box-shadow: 6px 10px 35px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
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
  top: 400px;

  background: #ffffff;
  border: 1px solid #e7e4e4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  margin-bottom: 32px;
}

#done {
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 4;
}

#chart {
  position: absolute;
  width: 530px;
  height: 363px;
  left: 603px;
  top: 227px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

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
          <h5 class="card-title">Project Deadline</h5>
          <div></div>
        </div>
      </div>
    </div>
    <div class="col" id="deadline">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Project Deadline</h5>
          <div></div>
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
  width: 390px;
  height: 700px;
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
#deadline {
  position: absolute;
  width: 530px;
  height: 331px;
  left: 603px;
  top: 625px;

  background: #ffffff;
  border: 1px solid #e7e4e4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
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

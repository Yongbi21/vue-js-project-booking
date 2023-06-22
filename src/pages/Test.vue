<template>
  <section>
    <div class="parent">
      <div class="div1">Complete Task</div>
      <div class="div2">Incompleted Task</div>
      <div class="div3">Upcoming Tasks</div>
      <div class="div4">Overall Progress</div>
      <div class="div5">
        <div class="card">
          <div class="card-header">Task Status</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="div6"></div>
      <div class="div7">
        <div class="card">
          <div class="card-header">Task List</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="div8">
        <div class="card">
          <div class="card-header">Milestone</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 6px;
  text-align: center;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;

}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
}
.div4 {
  grid-area: 1 / 4 / 2 / 5;
}
.div5 {
  grid-area: 2 / 1 / 3 / 3;
}
.div6 {
  grid-area: 2 / 1 / 4 / 4;
}
.div7 {
  grid-area: 2 / 4 / 3 / 5;
}
.div8 {
  grid-area: 3 / 4 / 4 / 5;
}
</style>

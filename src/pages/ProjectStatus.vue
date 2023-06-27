<template>
  <div class="grid-container">
    <div class="grid-item">Completed Tasks</div>
    <div class="grid-item">Incompleted Tasks</div>
    <div class="grid-item">Upcoming Tasks</div>
    <div class="grid-item">Overall Progess</div>
    <div class="grid-item">Task Status</div>
    <div class="grid-item">Team Progress</div>
    <div class="grid-item" id="task">
   </div>

    <div class="grid-item">Project Timeline</div>

    <div class="grid-item">Milestones</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
}

.grid-item {
  padding: 20px;
  text-align: center;
}

#task {
  position: absolute;
  width: 278px;
  height: 242px;
  left: 837px;
  top: 377px;
  background: #ffffff;
  border: 1px solid #e7e4e4;

  border-radius: 14px;
}
</style>


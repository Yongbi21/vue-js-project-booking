<template>
  <div class="container">
    <div class="section1">Section 1</div>
    <div class="section2">Section 2</div>
    <div class="section3">Section 3</div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.section1,
.section2,
.section3 {
  width: 100%;
  height: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
}
.section1 {
  background: lightgreen;
}
.section2 {
  background: lightblue;
}
.section3 {
  background: lightsalmon;
}
</style>

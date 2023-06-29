<template>
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
      </div>
</template>
<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4px;
  }
  
  .grid-item {
    background-color: #ccc;
    padding: 5px;
  }
  
</style>
<template>
  <div class="chart-card">
    <div ref="chartContainer"></div>
  </div>
</template>

<script>
import Chartist from "chartist";

export default {
  name: "ChartCards",
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const options = {
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        showLabel: true,
      };
      new Chartist.Pie(this.$refs.chartContainer, this.chartData, options);
    },
  },
};
</script>

<style scoped>
.chart-card {
  width: 400px; /* Adjust the width of the chart card */
  height: 300px; /* Adjust the height of the chart card */
}
</style>

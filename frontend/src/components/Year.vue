<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
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
          "December"
        ],
        datasets: [
          {
            label: "Data",
            backgroundColor: "#E53935",
            data: [500000000, 1000000000, 700000000, 390000000, 1000000000, 2500000000, 460000000, 800000000, 2000000000, 1600000000, 1200000000,5000000000]
          },
        //   {
        //     label: "Data two",
        //     backgroundColor: "#E91E63",
        //     data: [400000, 200000, 120000, 590000, 1000000, 300000, 390000, 200000, 600000, 200000]
        //   },
        //   {
        //     label: "Data three",
        //     backgroundColor: "#8E24AA",
        //     data: [200000, 120000, 110000,510000, 120000, 120000, 300000,120000]
        //   }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ],
        datasets: [
          // {
          //   label: "Data One",
          //   backgroundColor: "#E53935",
          //   data: [50, 100, 120, 390, 100, 400, 390, 80, 40, 200, 120, 110,200,500]
          // },
          {
            label: "Data",
            backgroundColor: "#E91E63",
            data: [100, 100, 100, 590, 1, 300, 390, 200, 100, 200, 120, 100,50, 100, 120, 390, 100, 100, 390, 80, 40, 100, 120, 110,200,500, 390, 80, 40, 200, 120]
          },
          // {
          //   label: "Data three",
          //   backgroundColor: "#8E24AA",
          //   data: [200, 120, 110,510, 120, 120, 300, 100, 450, 390, 80, 40, 200, 120, 110,200,500, 390, 80, 40, 200, 120]
          // }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
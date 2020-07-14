<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">ປະເພດລົດທັງໝົດ</h3>
    </div>

    <div class="card-img-bottom">
      <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labels: ["Land cruiser", "Camry", "Sedan", "Van",
      //  "Coupe", "Wagons","Convertible","Sports Car","Diesel","Crossover","Luxury Car","Hybrid/Electric","Certified Pre-Owned"
       ],
      option: {},
      datasets: [
        {
          data: [10, 20, 40,50,
          //  70, 20,10, 20, 40, 50, 70, 20, 50, 70, 20
           ],
          backgroundColor: [
            "#E53935",
            "#ffdb3b",
            "purple",
            "#E91E63",
            "red",
            "blue",
            "#f36e60",
            "#ffdb3b",
            "#185190",
            "pink",
            "red",
            "blue",
            "pink",
            "red",
            "blue"
          ],
          hoverBackgroundColor: [
            "#fbd2cd",
            "#fef5c9",
            "#d1e3f7",
            "light-pink lighten-3",
            "light-redlighten-3",
            "blue",
            "#f36e60",
            "#ffdb3b",
            "#185190",
            "pink",
            "red",
            "blue",
            "pink",
            "red",
            "blue"
          ]
        }
      ]
    };
  }
};
</script>

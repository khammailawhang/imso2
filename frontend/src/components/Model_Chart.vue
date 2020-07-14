<template>
  <div class="card" color="blue">
    <div class="card-body">
      <h3 class="card-title">ຍີ່ຫໍ້ລົດທັງໝົດ</h3>
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
      labels: ["TOYOTA", "ford", "mazda", "Ben",
      //  "Coupe", "Wagons","Convertible","Sports Car","Diesel","Crossover","Luxury Car","Hybrid/Electric","Certified Pre-Owned"
       ],
      option: {},
      datasets: [
        {
          data: [30, 60, 80, 50, 
          // 70, 20,10, 20, 20, 40, 70, 20, 50, 70, 20
          ],
          backgroundColor: [
            "purple",
            "red",
            "orange",
            "#E53935",
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
            "#f36e60",
            "#ffdb3b",
            "#185190",
            "pink",
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
          ]
        }
      ]
    };
  }
};
</script>

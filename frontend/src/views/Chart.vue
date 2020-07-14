<template>
  <div>
    <v-row>
      <v-col cols="6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Type of cars</h2>
          </div>
          <div class="card-img-bottom">
            <canvas id="fooCanvas" count="4" />
            <chartjs-bar
              v-for="(item, index) in types"
              :key="index"
              :backgroundcolor="item.bgColor"
              :beginzero="beginZero"
              :bind="true"
              :bordercolor="item.borderColor"
              :data="item.data"
              :datalabel="item.dataLabel"
              :labels="label1"
              target="fooCanvas"
            />
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Doughnut</h2>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginZero: true,
      label1: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      label2: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      types: [
        {
          bgColor: "#03A9F4",
          borderColor: "white",
          data: [1, 3, 5, 7, 2, 4, 6],
          dataLabel: "Bar"
        },
        {
          bgColor: "#FF1744",
          borderColor: "white",
          data: [1, 5, 2, 6, 3, 7, 4],
          dataLabel: "Baz"
        },
        {
          bgColor: "#00BFA5",
          borderColor: "white",
          data: [1, 5, 8, 6, 3, 4, 3],
          dataLabel: "Baz"
        }
      ],
      datasets: [
        {
          data: [10, 20, 40,15],
          backgroundColor: ["#f36e60", "#ffdb3b", "#185190","#185194"],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7","#185150"]
        }
      ],
      labels: ["Foo", "Bar", "Baz","Drink"],
      option: {},
    };
  }
};
</script>

<template>
  <div class="dashboard">
    <v-col cols="12">
      <h3>Dashboard</h3>
      <v-btn color="red">Red</v-btn>
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
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
     labels: ["Foo", "Bar", "Baz"],
      option: {},
     datasets: [
        {
          data: [10, 20, 40],
          backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ]
  }),
};
</script>

<style></style>

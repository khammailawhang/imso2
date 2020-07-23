<template>
  <div>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" align="left" class="indigo--text">
            <h3 class="grey--text">{{$t("Fee.Feeperyear")}}</h3>
          </v-col>
          <v-col cols="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 0 : 0">
                <v-card-text>
                  <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
                  <span v-for="item in peryears" :key="item.fee_id">
                    <p>{{$t("Fee.peryear")}} : ກີບ {{item.price | formatNumber}}</p>
                  </span>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import numeral from "numeral";
import JsonCSV from "vue-json-csv";
Vue.use(VueAxios, axios,JsonCSV);
import LineChart from "@/components/FeePerYear.vue";
Vue.filter("formatNumber", function(value) {
  return numeral(value).format("0,0.00");
});
export default {
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null,
    peryears: []
  }),
  async mounted() {
    this.loaded = false;
    axios.get("/api/feechart/branch_id/" + this.$route.query.branch_id).then(res => {
      this.loaded = true;
      (this.chartdata = {
        labels: res.data.map(item => item.created_at),
        datasets: [
          {
            label: "Income per year",
            backgroundColor: "#3D5AFE",
            borderColor:"#3D5AFE",
            data: res.data.map(item => item.price)
          }
        ]
      }),
        (this.options = {
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var value = Number(
                  data.datasets[0].data[tooltipItem.index]
                ).toFixed(2);
                return "Total: LAK " + value;
              }
            }
          },
          scales: {
            ticks: {
              suggestedMin: 50,
              suggestedMax: 100
            },
            xAxes: [
              {
                display: true,
                type: "time",
                time: {
                  tooltipFormat: "YYYY",
                  unit: "year"
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  callback: function(value) {
                    return numeral(value).format("0a");
                  }
                },
                stacked: true
              }
            ]
          },
          responsive: true,
          maintainAspectRatio: false
        });
    });
  },
  created() {
    this.getPeryear();
  },
  methods: {
    async getPeryear() {
      await this.axios.get("/api/feechart/feeperyear_total/branch_id/" + this.$route.query.branch_id).then(res => {
        this.peryears = res.data.peryears;
      });
    }
  }
};
</script>

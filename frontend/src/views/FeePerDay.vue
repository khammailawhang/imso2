<template>
  <div>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" align="left" class="indigo--text"> 
            <h2>{{$t('Fee.Feeperday')}}</h2>
          </v-col>
          <v-col cols="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 20 : 0">
                <v-card-text>
                  <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
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
Vue.use(VueAxios, axios);
import LineChart from "@/components/FeePerDay.vue";
export default {
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null
  }),
  async mounted() {
    this.loaded = false;
    axios.get("/api/feeperday/branch_id/" + this.$route.query.branch_id).then(res => {
      this.loaded = true;
      (this.chartdata = {
        labels: res.data.map(item => item.date),
        datasets: [
          {
            label: "Income per day",
            backgroundColor: "#3F51B5",
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
                return " LAK " + value;
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
                  tooltipFormat: "DD/MM/YYYY HH:mm a",
                  unit: "day"
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  callback: function(value) {
                    return numeral(value).format("0a");
                  }
                }
              }
            ]
          },
          responsive: true,
          maintainAspectRatio: false
        });
    });
  }
};
</script>
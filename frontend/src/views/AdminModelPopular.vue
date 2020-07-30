<template>
  <div>

        <v-row>
          <v-col cols="12" align="left" class="indigo--text"> 
            <h3 class="grey--text">{{$t('Report.ModelPopular')}}</h3>
          </v-col>
          
          <v-col cols="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 0 : 0">
                <v-card-text>
                  <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
// import numeral from "numeral";
import randomColor from 'randomcolor';
Vue.use(VueAxios, axios);

import numeral from "numeral";
import LineChart from "@/components/ModelPopular.vue";
Vue.filter("formatNumber", function(value) {
  return numeral(value).format("0,0.00");
});
export default {
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null
  }),
  async mounted() {
    this.loaded = false;
    axios.get("/api/admin/admin/model").then(res => {
      this.loaded = true;
      (this.chartdata = {
        labels: res.data.map(item => item.name),
        datasets: [
          {
            label: "Income per month",
            backgroundColor: [randomColor()],
            data: res.data.map(item => item.inspection_id)
          }
        ]
      }),
        (this.options = {
          scales: {
            ticks: {
              suggestedMin: 50,
              suggestedMax: 100
            }
          },
          responsive: true,
          maintainAspectRatio: false
        });
    });
  },
};
</script>


<template>
  <div>
    <v-content>
      <v-container >
        <v-row>
          <v-col cols="12" align="left" class="indigo--text"> 
            <h3 class="grey--text">{{$t('Report.TypePopular')}}</h3>
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
      </v-container>
    </v-content>
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
    axios.get("/api/model/type/branch_id/" + this.$route.query.branch_id).then(res => {
      this.loaded = true;
      (this.chartdata = {
        labels: res.data.map(item => item.TName),
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

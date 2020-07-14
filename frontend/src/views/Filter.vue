<template>
  <div>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>Filter by Date</h1>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Start date" v-model="fromdate" @closed="checkDate();"></v-text-field>
            <v-text-field label="Start date" v-model="todate" @closed="checkDate();"></v-text-field>
            <v-btn x-large color="indigo" class="white--text" @click="fetchRecords()">Search</v-btn>
          </v-col>
          <v-col cols="12">
            <table border="1" width="80%" style="border-collapse: collapse;">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="color in colors" :key="color.color_id">
                  <td>{{ color.name }}</td>
                  <td>{{ color.created_at }}</td>
                </tr>

                <tr v-show="recordNotFound">
                  <td colspan="3">No record found.</td>
                </tr>
              </tbody>
            </table>
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
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    fromdate: "",
    todate: "",
    colors: []
  }),
  methods: {
    checkDate: function() {
      if (this.fromdate != "") {
        var fromdate = new Date(this.fromdate);
        var todate = new Date(this.todate);

        if (fromdate.getTime() > todate.getTime()) {
          var day = fromdate.getDate();
          var month = fromdate.getMonth();
          var year = fromdate.getFullYear();

          this.todate = new Date(year, month, day);
        }
      }
    },
    fetchRecords() {
      if(this.fromdate != '' && this.todate != ''){
        this.axios.get("/api/color/filter",{params:{fromdate: this.fromdate,todate: this.todate}}).then(res => {
          this.colors = res.data.colors;
        })
      }
    }
  }
};
</script>
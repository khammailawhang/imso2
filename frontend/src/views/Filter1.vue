<template>
  <div>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" xl="2" lg="3" md="4" sm="4">
            <v-menu
              ref="show_start_date"
              :close-on-content-click="false"
              v-model="show_start_date"
              :nudge-right="40"
              :return-value.sync="show_start_date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="200px"
              class="red"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="start_date"
                  label="From"
                  prepend-icon="mdi-calendar-month-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="start_date" @input="filterStartDate" scrollable></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" xl="2" lg="3" md="4" sm="4">
            <v-menu
              ref="show_end_date"
              :items="inspections"
              :close-on-content-click="false"
              v-model="show_end_date"
              :nudge-right="40"
              :return-value.sync="end_date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="end_date"
                  label="End date"
                  prepend-icon="mdi-calendar-month-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="end_date" @input="filterEndDate"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12">
            <v-btn x-large color="indigo" class="white--text" @click="fetchRecords()">Search</v-btn>
          </v-col>
          <v-col cols="12">
            <table border="1" width="100%" style="border-collapse: collapse;">
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
    colors: [],
    show_start_date: "",
    start_date: "",
    show_end_date: "",
    end_date: ""
  }),
  methods: {
    filterStartDate(val) {
      this.$refs.show_start_date.save(val);
    },
    filterEndDate(val) {
      this.$refs.show_end_date.save(val);
    },
    checkDate: function() {
      if (this.start_date != "") {
        var start_date = new Date(this.start_date);
        var end_date = new Date(this.end_date);

        if (start_date.getTime() > end_date.getTime()) {
          var day = start_date.getDate();
          var month = start_date.getMonth();
          var year = start_date.getFullYear();

          this.end_date = new Date(year, month, day);
        }
      }
    },
    fetchRecords() {
      if (this.start_date != "" && this.end_date != "") {
        this.axios
          .get("/api/color/filter", {
            params: { start_date: this.start_date, end_date: this.end_date }
          })
          .then(res => {
            this.colors = res.data.colors;
          });
      }
    }
  }
};
</script>
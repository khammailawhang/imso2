<template>
  <div class="model">
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 0 : 0" class="mx-auto">
                <v-card-title>
                  <h5>{{$t('Inspection.Expired')}}</h5>
                  <v-spacer />
                  <v-btn color="indigo" class="white--text ma-2" @click="fetchRecords()">Search</v-btn>
                  <v-btn depressed color="indigo mr-3" dark v-on="on">
                    <download-csv :data="fees" name="Expired.csv">{{$t("Report.Download")}}</download-csv>
                  </v-btn>
                </v-card-title>
                <v-card-subtitle>
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
                            dense
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
                            dense
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
                  </v-row>
                </v-card-subtitle>
                <v-card-text>
                  <v-data-table :headers="headers" :items="fees" :search="search">
                    <template v-slot:item.created_at="{ item }">
                      <v-text>{{ item.created_at | formatDate }}</v-text>
                    </template>
                  </v-data-table>
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
import axios from "axios";
import VueAxios from "vue-axios";
import JsonCSV from "vue-json-csv";
import format from "vue-text-format";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
  data: () => ({
    fees: [],
    show_start_date: "",
    start_date: "",
    show_end_date: "",
    end_date: ""
  }),
  computed: {
    headers() {
      return [
        {
          text: "Owner",
          value: "owner_name",
          width: "150px"
        },
        {
          text: "Province",
          value: "PName",
          width: "0px",
          filter: this.provinceFilter
        },
        {
          text: "Type platc no",
          value: "TRName",
          width: "0px",
          filter: this.typeplatcnoFilter
        },
        {
          text: "Platc no",
          value: "platc_no",
          width: "0px",
          filter: this.platcnoFilter
        },
        {
          text: "Model",
          value: "MName",
          width: "0px"
        },
        {
          text: "Type",
          value: "TName",
          width: "0px"
        },
        {
          text: "Color",
          value: "CName",
          width: "0px"
        },
        {
          text: "Price",
          value: "price",
          width: "0px"
        },
        {
          text: "Date",
          value: "created_at",
          width: "0px",
          align: "right"
        }
      ];
    }
  },
  async created() {
    this.initialize();
  },
  methods: {
    provinceFilter(value) {
      if (!this.provinceFilterValue) {
        return 1;
      }
      return value === this.provinceFilterValue;
    },
    platcnoFilter(value) {
      if (!this.platcnoFilterValue) {
        return 1;
      }
      return value
        .toLowerCase()
        .includes(this.platcnoFilterValue.toLowerCase());
    },

    typeplatcnoFilter(value) {
      if (!this.typeplactnoFilterValue) {
        return 1;
      }
      return value === this.typeplactnoFilterValue;
    },
    initialize() {
      this.axios
        .get("/api/fee/branch_id/" + this.$route.query.branch_id)
        .then(response => {
          this.fees = response.data.fees;
        });
    },
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
          .get("/api/fee/filter/branch_id/" + this.$route.query.branch_id, {
            params: { start_date: this.start_date, end_date: this.end_date }
          })
          .then(res => {
            this.fees = res.data.fees;
          });
      }
    }
  }
};
</script>

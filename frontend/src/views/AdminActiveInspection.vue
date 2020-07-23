<template>
  <div class="model">
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 0 : 0" class="mx-auto">
                <v-card-title>
                  <h5>{{$t("Report.InspectionActive")}}</h5>
                  <v-spacer />
                  <v-btn-toggle dense rounded>
                    <v-btn depressed color="#3d5AFE" class="white--text text-capitalize" width="80px" @click="fetchRecords()">{{$t('Report.Search')}}</v-btn>
                    <v-btn depressed color="#3d5AFE" dark v-on="on" width="80px" class="white--text text-capitalize">
                      <download-csv :data="inspections" name="All_Inspection_Active.csv">{{$t("Report.Download")}}</download-csv>
                    </v-btn>
                  </v-btn-toggle>
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
                          :label="$t('Report.From')"
                          prepend-icon="mdi-calendar-month-outline"
                          readonly
                          color="#3d5AFE"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker color="#3d5AFE" v-model="start_date" @input="filterStartDate" scrollable></v-date-picker>
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
                          :label="$t('Report.End')"
                          prepend-icon="mdi-calendar-month-outline"
                          readonly
                          color="#3d5AFE"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker color="#3d5AFE" v-model="end_date" @input="filterEndDate"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                    <v-select
                        :items="inspections"
                        item-text="PName"
                        :label="$t('Province.Name')"
                        dense
                        color="#3d5AFE"
                        v-model="provinceFilterValue"
                      ></v-select>
                  </v-col>
                  <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                    <v-select
                        :items="inspections"
                        item-text="TRName"
                        :label="$t('Inspection.inspectonseach')"
                        dense
                        color="#3d5AFE"
                        v-model="typeplactnoFilterValue"
                      ></v-select>
                  </v-col>
                  <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                    <v-text-field
                        dense
                        color="#3d5AFE"
                        v-model="platcnoFilterValue"
                        :label="$t('Register.Platcno')"
                        type="text"
                      ></v-text-field>
                  </v-col>
                </v-row>
                </v-card-subtitle>
                <v-card-text>
                  <v-data-table class="elevation-0" :headers="headers" :items="inspections" :search="search">
                    <template v-slot:item.ວັນທີ="{ item }">
                      <v-text>{{ item.ວັນທີ | formatDate }}</v-text>
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
import AuthService from "@/services/AuthService.js";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
  data: () => ({
    show_start_date: "",
    start_date: "",
    show_end_date: "",
    end_date: "",
    
    provinceFilterValue: "",
    typeplactnoFilterValue: "",
    platcnoFilterValue: "",
    inspections: [],
  }),
  computed: {
    headers() {
      return [
        {
          text: "ເຈົ້າຂອງລົດ",
          align: "left",
          value: "ເຈົ້າຂອງລົດ"
        },
        {
          text: "ເພດ",
          value: "ເພດ"
        },
        {
            text: "ແຂວງ",
            value: "ແຂວງ",
            filter: this.provinceFilter
        },
        {
            text: "ສາຂາ",
            value: "ສາຂາ"
        },
        {
          text: "ປະເພດທະບຽນ",
          value: "ປະເພດທະບຽນ",
          filter: this.typeplatcnoFilter
        },
        {
          text: "ເລກທະບຽນ",
          value:"ເລກທະບຽນ"
        },
        {
          text: "ຍີ່ຫໍ້",
          value: "ຍີ່ຫໍ້"
        },
        {
          text: "ປະເພດ",
          value: "ປະເພດ"
        },
        {
          text: "ສີ",
          value: "ສີ"
        },
        {
          text: "ວັນທີ",
          value: "ວັນທີ"
        }
      ];
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    } else if (this.$store.getters.getUser.model === "1") {
      this.initialize();
      this.users_id = this.$store.getters.getUser.users_id;
      this.fee = this.$store.getters.getUser.fee;
      this.fee_create = this.$store.getters.getUser.fee_create;
      this.fee_update = this.$store.getters.getUser.fee_update;
      this.fee_delete = this.$store.getters.getUser.fee_delete;
      this.fee_detail = this.$store.getters.getUser.fee_detail;
      this.fee_upload = this.$store.getters.getUser.fee_upload;
      this.fee_report = this.$store.getters.getUser.fee_report;
      this.fee_export = this.$store.getters.getUser.fee_export;
      this.username = this.$store.getters.getUser.username;
      this.home = this.$store.getters.getUser.home;
      this.register = this.$store.getters.getUser.register;
      this.inspection = this.$store.getters.getUser.inspection;

      this.report = this.$store.getters.getUser.report;
      this.setting = this.$store.getters.getUser.setting;
      this.branch_name = this.$store.getters.getUser.branch_name;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },
  methods: {
    provinceFilter(value) {
      if (!this.provinceFilterValue) {
        return true;
      }
      return value === this.provinceFilterValue;
    },
    typeplatcnoFilter(value) {
      if (!this.typeplactnoFilterValue) {
        return true;
      }
      return value === this.typeplactnoFilterValue;
    },
    platcnoFilter(value) {
      if (!this.platcnoFilterValue) {
        return true;
      }
      return value
        .toLowerCase()
        .includes(this.platcnoFilterValue.toLowerCase());
    },
    getColorplatc_no(platc_no) {
      if (platc_no > 9000) return "#F9A825 ";
      // else if (platc_no > 9999) return '#F9A825'
      else return "#F9A825";
    },
    getStatus(status) {
      if (status == "PaySuccess") return "#00C853";
      else return "red";
    },
    initialize() {
      this.axios
        .get("/api/report/admin/inspection/active")
        .then(response => {
          this.inspections = response.data.inspections;
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
          .get("/api/report/admin/inspection/active", {
            params: { start_date: this.start_date, end_date: this.end_date }
          })
          .then(res => {
            this.inspections = res.data.inspections;
          });
      }
    }
  }
};
</script>

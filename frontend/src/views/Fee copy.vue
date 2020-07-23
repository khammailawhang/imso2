<template>
  <div class="model">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <strong>{{$t("Navbar.Fee")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <span>{{$t("Fee.WaitingPayfee")}}</span>
              </v-card-text>
            </v-card> 
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-4">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("Fee.WaitingPayfee") }}
                <v-spacer />
                <v-text-field
                  flat
                  dense
                  solo-inverted
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="$t('Register.Search')"
                  hide-details
                  single-line
                  color="#3d5afe"
                ></v-text-field>
                <v-tooltip bottom color="#3d5afe">
                  
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      @click="feeListTo(branch_id)"
                      small
                      fab
                      class="ml-3"
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon>mdi-buffer</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Fee.history") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="inspections"
                  :search="search"
                  class="white"
                >
                  <template v-slot:item.price="{ item }">
                    <div v-format="'₭ #,##0.00'">{{ item.price }}</div>
                  </template>
                  <template v-slot:item.status="{ item }">
                    <span
                      class="group pa-2 indigo white--text"
                      :color="getStatus(item.status)"
                      v-if="item.status == 'PaySuccess'"
                    >Pay Success</span>
                    <span
                      class="group pa-2 grey white--text"
                      :color="getStatus(item.status)"
                      v-else
                    >Not pay</span>
                  </template>
                    <template v-slot:item.platc_no="{ item }">
                                    <v-btn width="60px" depressed  :color="getColorplatc_no(item.platc_no)">
                                        <v-text>{{ item.platc_no }}</v-text>
                                    </v-btn>
                                </template>
                  <template v-slot:item.print="{ index, item }">
                    <v-tooltip left color="#00E676">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          depressed
                          small
                          v-if="fee_create === '1'"
                          color="#00E676"
                          dark
                          v-on="on"
                          @click="PayItem(item.inspection_id)"
                        >
                          <!-- <v-icon small class="ma-1">mdi-currency-usd</v-icon> -->
                          {{$t("Fee.Pay")}}
                        </v-btn>
                      </template>
                      <span>{{ $t("Fee.savepay") }}</span>
                    </v-tooltip>
                  </template>
                  <template v-slot:item.created_at="{ item }">
                    <v-text>{{ item.created_at | formatDate }}</v-text>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="indigo" @click="initialize">
                      {{
                      $t("Type.Reload")
                      }}
                    </v-btn>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
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
    search: "",
    items: [],
    headers: [
      {
        text: "ຊື່ົເຈົ້າຂອງລົດ",
        align: "left",
        sortable: true,
        value: "owner_name",
        width: "0px"
      },
      {
        text: "ລະຫັດ",
        value: "TRName",
        width: "0px"
      },
      {
        text: "ເລກທະບຽນ",
        value: "platc_no",
        width: "0px"
      },
      {
        text: "ຍີ່ຫໍ້ລົດ",
        value: "MName",
        width: "0px"
      },
      {
        text: "ປະເພດລົດ",
        value: "TName",
        width: "150px"
      },
      {
        text: "ວັນທີ",
        align: "left",
        sortable: true,
        value: "created_at",
        width: "0px"
      },
      {
        text: "ຈ່າຍເງິນ",
        value: "print",
        width: "120px",
        align: "left"
      }
    ],
    inspections: [],
    editedIndex: -1,
    editedItem: {
      orgaization_name: "",
      phone: "",
      mobile: "",
      email: "",
      facebookPage: "",
      website: "",
      youtube: "",
      address: "",
      logo: "",
      status: ""
    }
  }),

  computed: {
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
    } else if (this.$store.getters.getUser) {
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
      this.fee = this.$store.getters.getUser.fee;
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
    getColorplatc_no(platc_no) {
      if (platc_no > 9000) return "#F9A825 ";
      // else if (platc_no > 9999) return '#F9A825'
      else return "#F9A825";
    },
    getStatus(status) {
      if (status == "PaySuccess") return "indigo";
      else return "grey";
    },
    //   initialize() {
    //   this.axios
    //     .get("/api/fee_request/branch_id" + this.$route.query.branch_id)
    //     .then(response => {
    //       this.inspections = response.data.inspections;
    //     });
    // },
    initialize() {
      this.axios.get("/api/inspection/payfee").then(response => {
        this.inspections = response.data.inspections;
      });
    },
    PayItem(inspection_id) {
      this.$router.push("FeeCreate?inspection_id=" + inspection_id);
    },
    feeListTo(branch_id) {
      this.$router.push("FeeList?branch_id=" + branch_id);
    }
  }
};
</script>

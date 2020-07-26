<template>
  <div class="feelist">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="left">
            <v-card height="60px" flat color="white">
              <v-card-title>
                <span style="font-size:12px">{{$t("Navbar.Dashboard")}}</span>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <span style="font-size:12px">{{$t("Navbar.Fee")}}</span>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <strong style="font-size:12px">{{$t("Fee.Fee")}}</strong>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-4">
            <v-card flat color="white">
              <v-card-title>
                {{$t('Fee.Fee')}}
                <v-spacer />
                <v-btn
                  class="text-capitalize white--text"
                  color="#3D5AFE"
                  depressed
                  small
                  @click="show = !show"
                >
                  <v-icon small color="white">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  {{$t("Inspection.Search")}}
                </v-btn>
                <!-- <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      @click="feehistoryTo(branch_id)"
                      small
                      fab
                      color="#3d5afe"
                      class="mr-2"
                      dark
                      v-on="on"
                    >
                      <v-icon>mdi-history</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Fee.history") }}</span>
                </v-tooltip>-->
                <v-tooltip bottom color="#00E676">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      @click="feeRequestTo(branch_id)"
                      small
                      color="#00E676"
                      class="ml-2 text-capitalize"
                      dark
                      v-on="on"
                    >
                      <v-icon small class="mr-1" color="white">mdi-plus</v-icon>
                      {{ $t("Fee.Create") }}
                    </v-btn>
                  </template>
                  <span>{{ $t("Fee.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-subtitle>
                <v-expand-transition>
                  <div v-show="show">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                          <v-autocomplete
                            :items="fees"
                            item-text="PName"
                            :label="$t('Province.Name')"
                            dense
                            color="#3d5afe"
                            v-model="provinceFilterValue"
                          ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                          <v-autocomplete
                            :items="fees"
                            item-text="TRName"
                            :label="$t('Inspection.inspectonseach')"
                            dense
                            color="#3d5afe"
                            v-model="typeplactnoFilterValue"
                          ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                          <v-text-field
                            dense
                            color="#3d5afe"
                            v-model="platcnoFilterValue"
                            :label="$t('Register.Platcno')"
                            type="text"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card-subtitle>
              <v-card-text>
                <v-data-table :headers="headers" :items="fees" :search="search">
                  <template v-slot:item.status="{ item }">
                    <v-btn-toggle borderless dense>
                      <v-btn
                        width="100px"
                        small
                        class="white--text text-capitalize"
                        depressed
                        :color="getStatus(item.status)"
                        v-if="item.status ==='PaySuccess'"
                      >{{$t('Fee.StatusTrue')}}</v-btn>
                      <v-btn
                        width="100px"
                        small
                        depressed
                        class="white--text text-capitalize"
                        :color="getStatus(item.status)"
                        v-else
                        dark
                        label
                      >{{$t('Fee.Notpay')}}</v-btn>

                      <v-btn
                        width="80px"
                        small
                        depressed
                        class="white--text text-capitalize"
                        :color="getprinted(item.printed)"
                        v-if="item.printed"
                      >{{$t("Fee.Printed")}}</v-btn>
                      <v-btn
                        width="80px"
                        small
                        depressed
                        class="white--text text-capitalize"
                        :color="getprinted(item.printed)"
                        v-else
                      >{{$t("Fee.NotPrinted")}}</v-btn>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:item.action="{ index, item }">
                      <v-tooltip left color="#3d5afe">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            depressed
                            @click="PrintItem(item.fee_id)"
                            color="#3d5afe"
                            v-on="on"
                            v-if="fee_create === '1'"
                          >
                            <v-icon small color="#fff">mdi-printer</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t('Fee.Print')}}</span>
                      </v-tooltip>
                      <!-- <v-tooltip left color="indigo">
                            <template v-slot:activator="{ on }">
                                <v-btn depressed @click="detailItem(item.fee_id)" small color="indigo mr-2" dark v-on="on">
                                    <v-icon small color="#fff">mdi-eye</v-icon>
                                </v-btn>
                            </template>
                            <span>ລາຍລະອຽດ</span>
                      </v-tooltip>-->
                      <v-tooltip left color="amber darken-1 ">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            depressed
                            @click="editItem(item.fee_id)"
                            color="amber darken-1"
                            dark
                            v-on="on"
                            class="ml-2"
                            v-if="fee_update === '1'"
                          >
                            <v-icon small color="#fff">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t('Fee.Edit')}}</span>
                      </v-tooltip>
                      <v-tooltip left color="red">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            depressed
                            @click="deleteItem(item.fee_id)"
                            color="red"
                            class="ml-2"
                            dark
                            v-on="on"
                            v-if="fee_delete === '1'"
                          >
                            <v-icon small color="#fff">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Type.Delete")}}</span>
                      </v-tooltip>
                  </template>
                  <template v-slot:item.platc_no="{ item }">
                    <v-btn
                      width="60px"
                      class="black--text"
                      depressed
                      small
                      :color="getColorplatc_no(item.platc_no)"
                    >{{ item.platc_no }}</v-btn>
                  </template>
                  <template
                    v-slot:item.owner_name="{ item }"
                  >{{ item.gender }} - {{ item.owner_name }}</template>
                  <template v-slot:item.PiName="{item}">
                    <div v-format="'0,000 KIP'">{{item.PiName}}</div>
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
    show: false,
    provinceFilterValue: "",
    typeplactnoFilterValue: "",
    platcnoFilterValue: "",
    fees: [],
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
    headers() {
      return [
        {
          text: "ເຈົ້າຂອງລົດ",
          align: "left",
          value: "owner_name",
          width: "0px"
        },
        {
          text: "ແຂວງ",
          value: "PName",
          width: "0px",
          filter: this.provinceFilter
        },
        {
          text: "ລະຫັດ",
          value: "TRName",
          width: "0px",
          filter: this.typeplatcnoFilter
        },
        {
          text: "ເລກທະບຽນ",
          value: "platc_no",
          width: "0px",
          filter: this.platcnoFilter
        },
        {
          text: "ຍີ່ຫໍ້",
          value: "MName",
          width: "0px"
        },
        {
          text: "ປະເພດ",
          value: "TName",
          width: "0px"
        },
        {
          text: "ລາຄາ",
          value: "PiName",
          width: "0px"
        },
        {
          text: "ສະຖານະ",
          value: "status",
          width: "0px"
        },
        {
          text: "ຈັດການ",
          value: "action",
          width: "200px",
          align: "right"
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
      this.$router.push("/");
    } else if (this.$store.getters.getUser.fee === "1") {
      this.initialize();
      this.fee = this.$store.getters.getUser.fee;
      this.fee_create = this.$store.getters.getUser.fee_create;
      this.fee_update = this.$store.getters.getUser.fee_update;
      this.fee_delete = this.$store.getters.getUser.fee_delete;
      this.fee_detail = this.$store.getters.getUser.fee_detail;
      this.fee_upload = this.$store.getters.getUser.fee_upload;
      this.fee_report = this.$store.getters.getUser.fee_report;
      this.fee_export = this.$store.getters.getUser.fee_export;
      this.branch_name = this.$store.getters.getUser.branch_name;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
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
      else return "amber";
    },
    getStatus(status) {
      if (status == "PaySuccess") return "#00E676";
      else return "red";
    },
    getprinted(printed) {
      if (printed === "printed") return "#3D5AFE";
      else return "#C5CAE9";
    },
    initialize() {
      this.axios
        .get("/api/fee/list/branch_id/" + this.$route.query.branch_id)
        .then(response => {
          this.fees = response.data.fees;
        });
    },
    PrintItem(fee_id) {
      this.$router.push("FeePrint?fee_id=" + fee_id);
    },
    detailItem(fee_id) {
      this.$router.push("Fee_Detail?fee_id=" + fee_id);
    },
    editItem(fee_id) {
      this.$router.push("FeeEdit?fee_id=" + fee_id);
    },
    async deleteItem(fee_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        this.axios.delete("/api/fee/delete/" + fee_id).then();
        this.fees.splice(index, 1);
      }
    },
    feeRequestTo(branch_id) {
      this.$router.push("./Fee?branch_id=" + branch_id);
    },
    feehistoryTo(branch_id) {
      this.$router.push("./FeeHistory?branch_id=" + branch_id);
    }
  }
};
</script>

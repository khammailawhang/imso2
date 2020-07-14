<template>
<div class="model">
    <v-row align="12" justify="center">
        <v-col cols="12" xl="12" lg="10" md="12" sm="12">
            <v-row align="12" justify="center" no-gutters>
                <v-card-title> <v-icon color="indigo">mdi-xing</v-icon>
                    <v-toolbar-title cols="12" xl="12" lg="12" md="12" sm="12" class="indigo--text pl-2">
                        <h3>
                            {{$t('Fee.Pay_History')}}
                        </h3>
                                          <v-btn color="indigo" class="white--text ma-2" @click="fetchRecords()">Search</v-btn>
                    </v-toolbar-title>
                </v-card-title>
                <v-spacer />
                <v-card-title>
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
                        <v-col cols="12">
                            <v-col>
                                <v-select :items="fees" item-text="PName" :label="$t('Province.Name')" dense v-model="provinceFilterValue"></v-select>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-col>
                                <v-select :items="fees" item-text="TRName" :label="$t('Inspection.inspectonseach')" dense v-model="typeplactnoFilterValue"></v-select>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-col>
                                <v-text-field dense v-model="platcnoFilterValue" :label="$t('Register.Platcno')" type="text"></v-text-field>
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-tooltip bottom color="indigo">
                                <template v-slot:activator="{ on }">
                                    <v-btn depressed @click="feeRequestTo(branch_id)" small fab color="indigo" dark v-on="on">
                                        <v-icon>mdi-undo-variant</v-icon>
                                    </v-btn>
                                </template>
                                <span>{{ $t("Inspection.Back") }}</span>
                            </v-tooltip>
                        </v-col>
                    </v-row>
                </v-card-title>
            </v-row>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-data-table :headers="headers" :items="fees" :search="search">
                    <template v-slot:item.status="{ item }">
                        <v-chip :color="getStatus(item.status)" v-if="item.status ==='PaySuccess'" dark green accent-4 label>{{$t('Fee.Paysuccess')}}</v-chip>
                        <v-chip :color="getStatus(item.status)" v-else dark label>{{$t('Fee.Notpay')}}</v-chip>
                    </template>
                    <template v-slot:item.action="{ index, item }">
                        <v-tooltip left color="green accent-4 ">
                            <template v-slot:activator="{ on }">
                                <v-btn depressed @click="PrintItem(item.fee_id)" small color="green accent-4 mr-2" v-on="on">
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
                        </v-tooltip> -->
                        <v-tooltip left color="amber darken-1 ">
                            <template v-slot:activator="{ on }">
                                <v-btn depressed @click="editItem(item.fee_id)" small color="amber darken-1 mr-2" dark v-on="on">
                                    <v-icon small color="#fff">mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                            <span>{{$t('Fee.Edit')}}</span>
                        </v-tooltip>
                        <v-tooltip left color="red">
                            <template v-slot:activator="{ on }">
                                <v-btn depressed @click="deleteItem(item.fee_id)" small color="red" dark v-on="on">
                                    <v-icon small color="#fff">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <span>{{$t("Type.Delete")}}</span>
                        </v-tooltip>
                    </template>

                    <template v-slot:item.platc_no="{ item }">
                        <v-btn depressed :color="getColorplatc_no(item.platc_no)">
                            <v-text>{{ item.platc_no }}</v-text>
                        </v-btn>
                    </template>
                    <template v-slot:item.PiName="{item}">
                        <div v-format="'₭ 0,000'">{{item.PiName}}</div>
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
            </v-col>
        </v-col>
    </v-row>
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
            return [{
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
                    text: "ແຂວງ",
                    value: "PName",
                    width: "0px",
                    filter: this.provinceFilter
                },
                {
                    text: "ຊື່ົເຈົ້າຂອງລົດ",
                    align: "left",
                    value: "owner_name",
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
                    text: "ວັນທີ",
                    value: "created_at",
                    width: "0px"
                },
                {
                    text: "ສະຖານະ",
                    value: "status",
                    width: "0px"
                },
                {
                    text: "ພິມ / ລາຍລະອຽດ /  ລົບ",
                    value: "action",
                    width: "200px",
                    align: "center"
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
                .get("/api/fee/branch_id/" + this.$route.query.branch_id)
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
                let res = this.axios.delete("/api/fee/delete/" + fee_id).then();
                if (res) {
                    this.fees.splice(index, 1);
                    this.$router.replace("List");
                }
            }
        },
        feeRequestTo(branch_id) {
            this.$router.push("./Fee?branch_id=" + branch_id);
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

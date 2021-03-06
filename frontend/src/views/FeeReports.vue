<template>
<div class="model">

    <v-row>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 0 : 0" class="mx-auto">
                    <v-card-title>
                        <h5>{{$t("Report.FeeReport")}}</h5>
                        <v-spacer />

                        <v-expand-transition>
                            <div>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="6" xl="6" lg="6" md="6" sm="6">
                                            <v-menu ref="show_start_date" :close-on-content-click="false" v-model="show_start_date" :nudge-right="40" :return-value.sync="show_start_date" lazy transition="scale-transition" offset-y full-width min-width="200px" class="red">
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field v-model="start_date" dense :label="$t('Report.From')" prepend-icon="mdi-calendar-month-outline" readonly color="#3D5AFE" v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-date-picker color="#3D5AFE" v-model="start_date" @input="filterStartDate" scrollable></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="6" xl="6" lg="6" md="6" sm="6">
                                            <v-menu ref="show_end_date" :items="inspections" :close-on-content-click="false" v-model="show_end_date" :nudge-right="40" :return-value.sync="end_date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field v-model="end_date" dense :label="$t('Report.End')" prepend-icon="mdi-calendar-month-outline" readonly color="#3D5AFE" v-bind="attrs" v-on="on"></v-text-field>
                                                </template>
                                                <v-date-picker color="#3D5AFE" v-model="end_date" @input="filterEndDate"></v-date-picker>
                                            </v-menu>
                                        </v-col>

                                    </v-row>
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                     
                            <v-btn small depressed color="#3D5AFE" class="white--text text-capitalize" width="80px" @click="fetchRecords()" v-if="report_report === '1'">{{$t('Report.Search')}}</v-btn>
                            <v-btn small v-if="report_export === '1'" depressed color="#3D5AFE" dark v-on="on" width="80px" class="white--text text-capitalize">
                                <download-csv :data="fees" name="Fee_Report.csv">{{$t("Report.Download")}}</download-csv>
                            </v-btn>
                     
                    </v-card-title>
             
                    <v-card-text>

                        <v-data-table class="elevation-0" :headers="headers" :items="fees" :search="search">
                            <template v-slot:item.ລາຄາ="{ item }">
                                <v-text v-format="'0,000 Kip'">{{ item.ລາຄາ }}</v-text>
                            </template>
                            <template v-slot:item.ວັນທີ="{ item }">
                                <v-text>{{ item.ວັນທີ | formatDate }}</v-text>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-hover>
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
        show: false,
        show_start_date: "",
        start_date: "",
        show_end_date: "",
        end_date: "",

        provinceFilterValue: "",
        typeplactnoFilterValue: "",
        platcnoFilterValue: "",
        fees: []
    }),
    computed: {
        headers() {
            return [{
                    text: "ເຈົ້າຂອງລົດ",
                    align: "left",
                    value: "ເຈົ້າຂອງລົດ",
                    width: "0px"
                },
                {
                    text: "ເພດ",
                    value: "ເພດ",
                    width: "0px"
                },
                {
                    text: "ແຂວງ",
                    value: "ແຂວງ",
                    width: "0px",
                    filter: this.provinceFilter
                },
                {
                    text: "ປະເພດທະບຽນ",
                    value: "ປະເພດທະບຽນ",
                    width: "0px",
                    filter: this.typeplatcnoFilter
                },
                {
                    text: "ເລກທະບຽນ",
                    value: "ເລກທະບຽນ",
                    width: "0px",
                    filter: this.platcnoFilter
                },
                {
                    text: "ຍີ່ຫໍ້",
                    value: "ຍີ່ຫໍ້",
                    width: "0px"
                },
                {
                    text: "ປະເພດ",
                    value: "TName",
                    width: "0px"
                },
                {
                    text: "ສີ",
                    value: "ສີ",
                    width: "0px"
                },
                {
                    text: "ລາຄາ",
                    value: "ລາຄາ",
                    width: "0px"
                },
                {
                    text: "ວັນທີ",
                    value: "ວັນທີ",
                    width: "0px"
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
        } else if (this.$store.getters.getUser.report === "1") {
            this.initialize();
            this.report = this.$store.getters.getUser.report;
            this.report_report = this.$store.getters.getUser.report_report;
            this.report_export = this.$store.getters.getUser.report_export;
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
            else return "#F9A825";
        },
        getStatus(status) {
            if (status == "PaySuccess") return "#00C853";
            else return "red";
        },
        initialize() {
            this.axios
                .get("/api/fee/report/branch_id/" + this.$route.query.branch_id)
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
        checkDate: function () {
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
                    .get("/api/fee/report/branch_id/" + this.$route.query.branch_id, {
                        params: {
                            start_date: this.start_date,
                            end_date: this.end_date
                        }
                    })
                    .then(res => {
                        this.fees = res.data.fees;
                    });
            }
        }
    }
};
</script>

<template>
<div class="model">
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-tabs background-color="white" color="#3D5AFE" class="elevation-0" grow icons-and-text centered center-active height="100px" dark>
                        <!-- <v-tab class="indigo accent-4 ma-2 white--text text-capitalize">
                {{$t("Report.AllInspection")}}
                <span
                  v-for="item in inspectionsall"
                  :key="item.inspection_id"
                >{{item.inspection_id}}.00</span>
              </v-tab> -->
                        <v-tab class="green accent-3 ma-2 white--text text-capitalize">

                            <span class="white--text" v-for="item in inspectionstatu" :key="item.inspection_id">{{item.inspection_id}}</span>
                            <p class="white--text ma-3">{{$t('Fee.statu')}}</p>
                        </v-tab>
                        <v-tab class="red ma-2 white--text text-capitalize">

                            <span class="white--text" v-for="item in inspectionsend" :key="item.inspection_id">{{item.inspection_id}}</span>
                            <p class="white--text ma-3">{{$t('Fee.Expired')}}</p>
                        </v-tab>

                        <!-- ລາຍງານຂໍ້ມູນກວດກາເກັບຄ່າທໍານຽມ -->
                        <v-tab-item>
                            <v-card flat tile>
                                <v-card-text>
                                    <InspectionActive />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <!-- ລາຍງານຂໍ້ມູນເລືອກວັນທີ -->
                        <v-tab-item>
                            <v-card flat tile>
                                <v-card-text>
                                    <InspectionExpired />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                           <template v-slot:item.platc_no="{ item }">
                                    <v-tooltip left color="amber">
                                        <template v-slot:activator="{ on }">
                                            <v-btn width="80px" small @click="detailItem(item.register_id)" depressed :color="getColorplatc_no(item.platc_no)" v-on="on">{{ item.TRName }} {{ item.platc_no }}</v-btn>
                                        </template>
                                        <span>{{$t("Type.description")}}</span>
                                    </v-tooltip>
                                </template>
                    </v-tabs>
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
import InspectionActive from "@/views/InspectionActive";
import InspectionExpired from "@/views/InspectionExpired";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
    components: {
        InspectionActive,
        InspectionExpired
    },
    data: () => ({
        show_start_date: "",
        start_date: "",
        show_end_date: "",
        end_date: "",

        provinceFilterValue: "",
        typeplactnoFilterValue: "",
        platcnoFilterValue: "",
        inspections: [],
        inspectionsall: [],
        inspectionstatu: [],
        inspectionsend: []
    }),
    computed: {
        headers() {
            return [{
                    text: "ເຈົ້າຂອງລົດ",
                    align: "left",
                    value: "ເຈົ້າຂອງລົດ"
                },
                {
                    text: "ເພດ",
                    value: "ເພດ"
                },
                {
                    text: "ເບີໂທລະສັບ",
                    value: "ເບີໂທລະສັບ"
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
                    value: "ເລກທະບຽນ"
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
            this.$router.push("/");
        } else if (this.$store.getters.getUser.report === "1") {
            this.initialize();
            // ລາຍງານຈໍານວນລົດ ທັງໝົດ
            await axios
                .get("/api/report/inspection/branch_id/" + this.$route.query.branch_id)
                .then(res => {
                    this.inspectionsall = res.data.inspectionsall;
                });
            // ລາຍງານຈໍານວນລົດ ໃຊ້ງານ
            await axios
                .get(
                    "/api/report/inspectionstatu/branch_id/" + this.$route.query.branch_id
                )
                .then(res => {
                    this.inspectionstatu = res.data.inspectionstatu;
                });
            // ລາຍງານຈໍານວນລົດໝົດອາຍຸ
            await axios
                .get(
                    "/api/report/inspectionsend/branch_id/" + this.$route.query.branch_id
                )
                .then(res => {
                    this.inspectionsend = res.data.inspectionsend;
                });

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
                .get("/api/inspection/report/branch_id/" + this.$route.query.branch_id)
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
                    .get(
                        "/api/inspection/report/branch_id/" + this.$route.query.branch_id, {
                            params: {
                                start_date: this.start_date,
                                end_date: this.end_date
                            }
                        }
                    )
                    .then(res => {
                        this.inspections = res.data.inspections;
                    });
            }
        }
    }
};
</script>

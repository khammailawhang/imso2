<template>
<div class="start">
    <v-content>
        <v-container>
            <v-row align="center" justify="center" no-gutters>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
                    <v-card dense flat color="white" elevation="0">
                        <v-card-text>
                            <strong>{{$t("Navbar.Dashboard")}}</strong>
                            <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                            <strong>{{$t("Navbar.Inspection")}}</strong>
                            <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                            <span>{{$t("Inspection.SelectCarInfo")}}</span>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-4">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card flat color="white" :elevation="hover ?0 : 0">
                            <v-card-title>
                                <span style="font-size:18px">{{ $t("Inspection.SelectCarInfo") }}</span>
                                <v-spacer />
                                <v-btn class="text-capitalize white--text" color="#3D5AFE" depressed small @click="show = !show">
                                    <v-icon small color="white">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    {{$t("Inspection.Search")}}
                                </v-btn>
                                <v-tooltip bottom color="#3D5AFE" class="mr-4">
                                    <template v-slot:activator="{ on }">
                                        <v-btn depressed @click="inspectionListTo(branch_id)" small color="#3D5AFE" dark class="ml-2 text-capitalize" v-on="on">
                                            <v-icon small color="white" class="mr-2">mdi-buffer</v-icon>
                                            {{ $t("Inspection.History") }}
                                        </v-btn>
                                    </template>
                                    <span>{{ $t("Inspection.History") }}</span>
                                </v-tooltip>
                            </v-card-title>
                            <v-card-subtitle>
                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                                                    <v-autocomplete :items="registers" item-text="PName" :label="$t('Province.Name')" color="#3D5AFE" v-model="provinceFilterValue"></v-autocomplete>
                                                </v-col>
                                                <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                                                    <v-autocomplete :items="registers" item-text="TRName" :label="$t('Inspection.inspectonseach')" color="#3D5AFE" v-model="typeplactnoFilterValue"></v-autocomplete>
                                                </v-col>
                                                <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                                                    <v-text-field class="mr-4" color="#3D5AFE" v-model="platcnoFilterValue" :label="$t('Register.Platcno')" type="text"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card-subtitle>
                            <v-card-text>
                                <v-data-table :headers="headers" :items="registers">
                                    <template v-slot:item.platc_no="{ item }">
                                        <v-btn class="text-capitalize " depressed small width="100px" :color="getColorplatc_no(item.platc_no)">{{item.TRName}} {{item.platc_no}}</v-btn>
                                    </template>
                                    <template v-slot:item.dowload="{ index, item }">
                                        <v-tooltip left color="#00E676">
                                            <template v-slot:activator="{ on }">
                                                <v-btn small depressed color="#00E676" dark class="text-capitalize" v-on="on" @click="editItem(item.fee_id)">
                                                    <v-icon color="white" class="mr-2" small>mdi-trending-neutral</v-icon>
                                                    {{ $t("Inspection.Next") }}
                                                </v-btn>
                                            </template>
                                            <span>{{ $t("Inspection.inspectionstart") }}</span>
                                        </v-tooltip>
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
    data() {
        return {
            show: false,
            registers: [],
            fees: [],
            provinceFilterValue: "",
            typeplactnoFilterValue: "",
            platcnoFilterValue: ""
        };
    },
    computed: {
        headers() {
            return [{
                    text: "ເຈົ້າຂອງ",
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
                    text: "ປະເພດລົດ",
                    value: "TName",
                    filter: this.typeFilter,
                    width: "0px"
                },
                {
                    text: "ຈັດການ",
                    value: "dowload",

                    width: "100px",
                    align: "left"
                }
            ];
        }
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("/");
        } else if (this.$store.getters.getUser.inspection === "1") {
            this.initialize();
            this.inspection = this.$store.getters.getUser.inspection;
            this.branch_name = this.$store.getters.getUser.branch_name;
            this.branch_id = this.$store.getters.getUser.branch_id;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("/");
        }
    },
    methods: {
        /**
         * Filter for dessert names column.
         * @param value Value to be tested.
         * @returns {boolean}
         */
        // getRegister() {
        //   this.axios.get("/api/register").then(response => {
        //     this.registers = response.data.registers;
        //   });
        // },

        getColorplatc_no(platc_no) {
            if (platc_no > 9000) return "#F9A825 ";
            // else if (platc_no > 9999) return '#F9A825'
            else return "amber";
        },
        initialize() {
            this.axios
                .get("/api/register/fee/branch_id/" + this.$route.query.branch_id)
                .then(response => {
                    this.registers = response.data.registers;
                });
        },

        inspectionListTo(branch_id) {
            this.$router.push("inspectionList?branch_id=" + branch_id);
        },

        editdetail(register_id) {
            this.$router.push("inspectionDetail?register_id=" + register_id);
        },
        editItem(fee_id) {
            this.$router.push("inspectionCreateNew?fee_id=" + fee_id);
        },
        detailRegister(register_id) {
            this.$router.push("Detailregister?register_id=" + register_id);
        },
        ownerFilter(value) {
            if (!this.ownerFilterValue) {
                return true;
            }
            return value.toLowerCase().includes(this.ownerFilterValue.toLowerCase());
        },
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
        modelFilter(value) {
            if (!this.modelFilterValue) {
                return true;
            }
            return value === this.modelFilterValue;
        },
        typeFilter(value) {
            if (!this.typeFilterValue) {
                return true;
            }
            return value === this.typeFilterValue;
        }
    }
};
</script>

<template> 
<div class="start">
     <!-- <eva-input placeholder="Type: warning" status="danger" v-model="inputValue"/> -->
    <v-col cols="12" xl="12" lg="8" md="12" sm="12">
        <v-card-title>
            <v-row>
                <v-col cols="12" lg="3">
                    <v-select :items="registers" class="mr-4" item-text="TRName" label="Type" v-model="typeplactnoFilterValue"></v-select>
                </v-col>
                <v-col cols="12" lg="3">
                    <v-text-field class="mr-4" v-model="platcnoFilterValue" label="No" type="text"></v-text-field>
                </v-col>
                <v-col cols="12" lg="3">
                    <v-menu ref="show_start_date" :close-on-content-click="false" v-model="show_date" :nudge-right="40" :return-value.sync="show_start_date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                        <template v-slot:activator="{ on }">
                            <v-text-field slot="activator"   v-on="on" v-model="date" label="ຈາກ" prepend-icon="event" readonly></v-text-field>
                        </template>
                        <v-date-picker v-model="dateFilterValue"  @input="filterStartDate"></v-date-picker>

                    </v-menu>
                </v-col>
                <v-col cols="12" lg="3">
                    <v-btn depressed color="indigo mr-3" class="white--text">
                        <download-csv :data="registers" name="Register.csv">
                            DownloadToCSV
                        </download-csv>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-title>

        <v-data-table class="font-weight-black" :headers="headers" :items="registers"></v-data-table>
    </v-col>
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
    data() {
        return {
            registers: [],
            provinceFilterValue: "",
            typeplactnoFilterValue: "",
            platcnoFilterValue: "",
            dateFilterValue: "",
            
            show_date: "",
            date: "",
            modal: false,
            filters: {
                search: '',
                platc_no: '',
                added_by: '',
                date: "",
            },
        };
    },
    computed: {
        headers() {
            return [
                {
                    text: "Province",
                    value: "PName",
                    width: "0px",
                    filter: this.provinceFilter
                },
                {
                    text: "Type",
                    value: "TRName",
                    width: "0px",
                    filter: this.typeplatcnoFilter
                },
                {
                    text: "No",
                    value: "platc_no",
                    width: "0px",
                    filter: this.platcnoFilter
                },
                {
                    text: "No",
                    value: "created_at",
                    width: "0px",
                    filter: this.dateFilter
                },
            ];
        },
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
    },
    async created() {
        this.initialize();
    },
    methods: {
        /**
         * Filter for dessert names column.
         * @param value Value to be tested.
         * @returns {boolean}
         */
      
        initialize() {
            this.axios.get("/api/register").then(response => {
                this.registers = response.data.registers;
            });
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
        dateFilter(value) {
            if (!this.dateFilterValue) {
                return true;
            }
            return value
                .toLowerCase()
                .includes(this.dateFilterValue.toLowerCase());
        }
    }
};
</script>

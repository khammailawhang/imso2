<template>
<div class="model">

    <v-row>
        <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <InspectionMenu />
          </v-col> -->
        <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 0 : 0" class="mx-auto">
                    <v-card-title>
                        <h5>{{$t('Report.Expense')}}</h5>
                        <v-spacer />

                    </v-card-title>
                    <v-card-subtitle>
                        <v-row>

                            <!-- <v-col cols="12" xl="2" lg="3" md="4" sm="4">

                                <v-text-field append-icon="search" label="Filter" single-line hide-details @input="filterSearch"></v-text-field>
                            </v-col>
                            <v-col cols="12" xl="2" lg="3" md="4" sm="4">

                                <v-select :items="authors" label="Author" @change="filterAuthor"></v-select>
                            </v-col> -->
                            <v-col cols="12" xl="2" lg="3" md="4" sm="4">

                                <v-menu ref="show_start_date" :close-on-content-click="false" v-model="show_start_date" :nudge-right="40" :return-value.sync="show_start_date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field slot="activator"   v-on="on" v-model="start_date" label="ຈາກ" prepend-icon="event" readonly></v-text-field>
                                    </template>
                                    <v-date-picker v-model="start_date"  @input="filterStartDate"></v-date-picker>

                                </v-menu>

                            </v-col>
                            <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                                <v-menu ref="show_end_date" :items="inspections" :close-on-content-click="false" v-model="show_end_date" :nudge-right="40" :return-value.sync="end_date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field slot="activator" :items="inspections" v-on="on" v-model="end_date" label="ຫາ" prepend-icon="event" readonly></v-text-field>
                                    </template>
                                    <v-date-picker v-model="end_date"  @input="filterEndDate"></v-date-picker>

                                </v-menu>
                            </v-col>
                            <v-col cols="12" xl="1" lg="2" md="4" sm="4" class="pt-6" align="left">
                                <v-btn depressed color="indigo mr-3" dark v-on="on">
                                    <download-csv :data="inspections" name="Expired.csv">
                                        {{$t("Report.Download")}}
                                    </download-csv>
                                </v-btn>
                            </v-col>
                            <v-row>

                                <v-col cols="12" xl="12" lg="12" md="12" sm="12">

                                    <v-select :items="inspections" class="mr-4" item-text="PName" :label="$t('Province.Name')" dense v-model="provinceFilterValue"></v-select>

                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card-subtitle>
                    <v-card-text>
                        <v-data-table v-model="selected" :headers="headers" :items="inspections" :pagination.sync="pagination" select-all item-key="created_at" class="elevation-1" :rows-per-page-items="[-1]" :search="filters" :custom-filter="customFilter">

                            <template v-slot:item.brk_m="{ item }">
                                <v-tooltip left color="indigo">
                                    <template v-slot:activator="{ on }">
                                        <v-btn small :color="status(item.brk_m)" v-on="on" v-if="
                     item.brk_m === 'true' &&
                     item.brk_s === 'true' &&
                     item.cy_c === 'true' &&
                     item.re_m === 'true' &&
                     item.v_w === 'true' &&
                     item.s_n === 'true' &&
                     item.handier === 'true' &&
                     item.am === 'true' &&
                     item.side_slip === 'true' &&
                     item.pedal === 'true'  &&

                     item.reservoir_tank === 'true' &&
                     item.hose === 'true' &&
                     item.tire === 'true' &&
                     item.wheel === 'true' &&
                     item.bolt === 'true' &&
                     item.chock_absorber === 'true' &&
                     item.spring === 'true' &&
                     item.air_cleaner === 'true' &&
                     item.fan_belt === 'true' &&
                     item.radiator === 'true' &&

                     item.carburator === 'true' &&
                     item.injection_pump === 'true' &&
                     item.co2 === 'true' &&
                     item.co === 'true' &&
                     item.hc === 'true' &&
                     item.clutch === 'true' &&
                     item.gear_lever === 'true' &&
                     item.drive_shaft === 'true' &&
                     item.universal_join === 'true' &&
                     item.muffler === 'true' &&

                     item.db === 'true' &&
                     item.batterry === 'true' &&
                     item.light === 'true' &&
                     item.horn === 'true' &&
                     item.indictor_light === 'true' &&
                     item.brake_light === 'true' &&
                     item.side_light === 'true' &&
                     item.rear_light === 'true' &&
                     item.mirror === 'true' &&
                     item.wiper === 'true'">

                                            <v-icon small color="#fff" style="font-size: 14px; font-family:Vision,Phetsarath OT;" class="mr-2"> ຜ່ານ </v-icon>
                                        </v-btn>

                                        <v-btn small :color="status(
                     item.brk_m === 'false' &&
                     item.brk_s === 'false' &&
                     item.cy_c === 'false' &&
                     item.re_m === 'false' &&
                     item.v_w === 'false' &&
                     item.s_n === 'false' &&
                     item.handier === 'false' &&
                     item.am === 'false' &&
                     item.side_slip === 'false' &&
                     item.pedal === 'false'  &&

                     item.reservoir_tank === 'false' &&
                     item.hose === 'false' &&
                     item.tire === 'false' &&
                     item.wheel === 'false'  &&
                     item.bolt === 'false' &&
                     item.chock_absorber === 'false' &&
                     item.spring === 'false' &&
                     item.air_cleaner === 'false' &&
                     item.fan_belt === 'false' &&
                     item.radiator === 'false' &&

                     item.carburator === 'false' &&
                     item.injection_pump === 'false' &&
                     item.co2 === 'false' &&
                     item.co === 'false' &&
                     item.hc === 'false' &&
                     item.clutch === 'false' &&
                     item.gear_lever === 'false' &&
                     item.drive_shaft === 'false' &&
                     item.universal_join === 'false' &&
                     item.muffler === 'false' &&

                     item.db === 'false' &&
                     item.batterry === 'false' &&
                     item.light === 'false' &&
                     item.horn === 'false' &&
                     item.indictor_light === 'false' &&
                     item.brake_light === 'false' &&
                     item.side_light === 'false' &&
                     item.rear_light === 'false' &&
                     item.mirror === 'false' &&
                     item.wiper === 'false')" v-else>
                                            <v-icon small color="#fff" style="font-size: 14px; font-family:Vision,Phetsarath OT;">ບໍ່ຜ່ານ</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>{{ $t("Inspection.statusinspection") }}</span>
                                </v-tooltip>
                            </template>

                            <template v-slot:item.pint="{ item }">
                                <v-tooltip left color="indigo">
                                    <template v-slot:activator="{ on }">
                                        <v-btn small :color="getColorpint(item.pint)">
                                            <v-icon color="#fff" v-on="on" small @click="PrintOneItem(item.inspection_id)">mdi-printer</v-icon>
                                        </v-btn>

                                    </template>
                                    <span>{{ $t("Inspection.bill1") }}</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:item.pint2="{ item }">
                                <v-tooltip left color="indigo">
                                    <template v-slot:activator="{ on }">
                                        <v-btn small :color="getColorpint(item.pint2)">
                                            <v-icon color="#fff" v-on="on" small @click="PrintTwoItem(item.inspection_id)">mdi-printer</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>{{ $t("Inspection.bill2") }}</span>
                                </v-tooltip>
                            </template>
                            <template v-slot:item.platc_no="{ item }">
                                <v-btn small :color="getColorplatc_no(item.platc_no)">
                                    <v-text>{{ item.platc_no }}</v-text>
                                </v-btn>
                            </template>
                            <!-- 
                                <template slot="items" slot-scope="props">

                                    <v-text class="text-xs-right">{{ props.item.created_at | formatDate}}</v-text>

                            </template> -->
                            <template v-slot:item.created_at="{ item }">

                                <v-text @click="props.selected = !props.selected">{{item.created_at | formatDate }}</v-text>

                            </template>

                        </v-data-table>
                        <v-flex>
                            <v-card>
                                <v-card-title primary-title>
                                    <h3>Filters log:</h3>
                                </v-card-title>
                                <ul>
                                    {{filters}}
                                </ul>
                            </v-card>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>

</div>
</template>

<script src='https://unpkg.com/vue-load-image'></script><script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JsonCSV from "vue-json-csv";
import format from "vue-text-format";

import console from "console";
import jsPDF from 'jspdf';
import VanillaQR from "vanillaqr";
Vue.use(format);
Vue.use(VueAxios, axios);

Vue.component("downloadCsv", JsonCSV);
export default {
    data: () => ({

        show_start_date: "",
        start_date: "",
        modal: false,
        show_end_date: "",
        end_date: "",
        modal1: false,
        filters: {
            search: '',
            added_by: '',
            start_date: "",
            end_date: "",
        },
        created_at: "",
        selected: [],
        authors: ['Admin', 'Foo'],
        pagination: {
            sortBy: 'name'
        },

        // provinceFilterValue: "",
        // typeplactnoFilterValue: "",
        // platcnoFilterValue: "",
        registerFilter: "",

        brk_m: "",
        brk_s: "",
        cy_c: "",
        re_m: "",
        v_w: "",
        s_n: "",
        handier: "",
        am: "",
        side_slip: "",
        pedal: "",

        hose: "",
        reservoir_tank: "",
        tire: "",
        wheel: "",
        bolt: "",
        chock_absorber: "",
        spring: "",
        air_cleaner: "",
        fan_belt: "",
        radiator: "",

        carburator: "",
        injection_pump: "",
        clutch: "",
        co2: "",
        co: "",
        hc: "",
        gear_lever: "",
        drive_shaft: "",
        universal_join: "",
        muffler: "",

        db: "",
        batterry: "",
        light: "",
        horn: "",
        indictor_light: "",
        brake_light: "",
        side_light: "",
        rear_light: "",
        mirror: "",
        wiper: "",

        photo: [],
        inspections: [],
        editedIndex: -1,
        editedItem: {

        },
        value: '',
        QRvalue: '',
        size: 150,
        base64: '',
        file: '',
        qrUrl: 'http://localhost:8084/la/InspectionPrint?inspection_id='

    }),

    computed: {

        headers() {

            return [{
                    text: "ລະຫັດ",
                    value: "TRName",
                    width: '0px',
                    filter: this.typeplatcnoFilter
                },

                {
                    text: 'ເລກທະບຽນ',
                    value: 'platc_no',
                    width: '0px',
                    filter: this.platcnoFilter
                },

                {
                    text: "ແຂວງ",
                    value: "PName",
                    width: '0px',
                    filter: this.provinceFilter
                },

                {
                    text: "ວັນທີ່ກວດ",
                    value: "created_at",
                    width: "0px",
                    align: 'right',
                    filter: this.registerFilter

                },
                {
                    text: "ສະຖານະ",
                    value: "brk_m",
                    width: "0px",
                    align: "right"
                },

                // {
                //     text: "ບິນໃບທີ 1",
                //     value: "pint",
                //     width: "0px",
                //     align: "right"
                // },
                // {
                //     text: "ບິນໃບທີ2",
                //     value: "pint2",
                //     width: "1px",
                //     align: "right"
                // },
                // {
                //     text: "ກວດໃໝ່",
                //     value: "edit",
                //     width: "100px",
                //     align: "right"
                // },

            ];

        },

        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },

    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },
    async created() {

        // this.initialize();
        this.customFilter();
        this.status();
        this.brk_m = res.data.inspections.brk_m || "";
        this.brk_s = res.data.inspections.brk_s || "";
        this.cy_c = res.data.inspections.cy_c || "";
        this.v_w = res.data.inspections.v_w || "";
        this.v_m = res.data.inspections.v_m || "";
        this.s_n = res.data.inspections.s_n || "";
        this.handier = res.data.inspections.handier || "";
        this.am = res.data.inspections.am || "";
        this.side_slip = res.data.inspections.side_slip || "";
        this.pedal = res.data.inspections.pedal || "";

        this.hose = res.data.inspections.hose || "";
        this.reservoir_tank = res.data.inspections.reservoir_tank || "";
        this.tire = res.data.inspections.tire || "";
        this.wheel = res.data.inspections.wheel || "";
        this.bolt = res.data.inspections.bolt || "";
        this.chock_absorber = res.data.inspections.chock_absorber || "";
        this.spring = res.data.inspections.spring || "";
        this.air_cleaner = res.data.inspections.air_cleaner || "";
        this.fan_belt = res.data.inspections.fan_belt || "";
        this.radiator = res.data.inspections.radiator || "";

        this.carburator = res.data.inspections.carburator || "";
        this.injection_pump = res.data.inspections.injection_pump || "";
        this.co2 = res.data.inspections.co2 || "";
        this.co = res.data.inspections.co || "";
        this.hc = res.data.inspections.hc || "";
        this.clutch = res.data.inspections.clutch || "";
        this.gear_lever = res.data.inspections.gear_lever || "";
        this.drive_shaft = res.data.inspections.drive_shaft || "";
        this.universal_join = res.data.inspections.universal_join || "";
        this.muffler = res.data.inspections.muffler || "";

        this.db = res.data.inspections.db || "";
        this.batterry = res.data.inspections.batterry || "";
        this.light = res.data.inspections.light || "";
        this.horn = res.data.inspections.horn || "";
        this.indictor_light = res.data.inspections.indictor_light || "";
        this.brake_light = res.data.inspections.brake_light || "";
        this.side_light = res.data.inspections.side_light || "";
        this.rear_light = res.data.inspections.rear_light || "";
        this.mirror = res.data.inspections.mirror || "";
        this.wiper = res.data.inspections.wiper || "";
        this.created_at = res.data.inspections.created_at || "";

    },

    methods: {
        customFilter(items, filters, filter, headers, registerFilter) {
            this.axios
                .get("/api/inspection/branch_id/" + this.$route.query.branch_id)
                .then(response => {
                    this.inspections = response.data.inspections.slice();
                    // Init the filter class.
                    const cf = new this.$MultiFilters(items, filters, filter, headers);

                    // Use regular function(),
                    // arrow functions does not allow context binding.
                    // Register "start_date" filter.
                    cf.registerFilter('start_date', function (start_date, items) {
                        // If the filter has not been applied yet
                        // just return all available items.
                        if (start_date === null) return items;
                        // Compare each item start_date and just return the matching ones.
                        return items.filter(item => {
                            return item.created_at >= start_date;
                        }, start_date);
                    });

                    // Use regular function(),
                    // arrow functions does not allow context binding.
                    // Register "end_date" filter.

                    cf.registerFilter('end_date', function (end_date, items) {
                        // If the filter has not been applied yet
                        // just return all available items.
                        if (end_date === null) return items;
                        // Compare each item end_date and just return the matching ones.
                        return items.filter(item => {
                            return item.created_at <= end_date;
                        }, end_date);
                    });

                });

            // Use regular function(),
            // arrow functions does not allow context binding.
            // Register the global standard filter.
            // cf.registerFilter('search', function (searchWord, items) {
            //     if (searchWord.trim() === '') return items;
            //     return items.filter(item => {
            //         return item.name.toLowerCase().includes(searchWord.toLowerCase());
            //     }, searchWord);
            // });
            // Use regular function(),
            // arrow functions does not allow context binding.
            // Register "added_by" filter.
            // cf.registerFilter('added_by', function (added_by, items) {
            //     // If the filter has not been applied yet
            //     // just return all available items.
            //     if (added_by.trim() === '') return items;
            //     // Compare each item added_by and just return the matching ones.
            //     return items.filter(item => {
            //         return item.added_by.toLowerCase() === added_by.toLowerCase();
            //     }, added_by);
            // });

            // Its time to run all created filters.
            // Will be executed in the order thay were defined.
            return cf.runFilters();
        },

        /**
         * Toggle selected items with the master checkbox.
         */
        toggleAll() {

            if (this.selected.length) {
                this.selected = [];
            } else {
                this.selected = this.inspections.slice();
            }
        },
        // initialize() {
        //     this.axios
        //         .get("/api/inspection/branch_id/" + this.$route.query.branch_id)
        //         .then(response => {
        //             this.selected = response.data.inspections.slice();
        //         });
        // },
        changeSort(column) {
            if (this.pagination.sortBy === column) {
                this.pagination.descending = !this.pagination.descending;
            } else {
                this.pagination.sortBy = column;
                this.pagination.descending = false;
            }
        },
        /**
         * Handler when user input something at the "Filter" text field.
         */
        // filterSearch(val) {
        //     this.filters = this.$MultiFilters.updateFilters(this.filters, {
        //         search: val
        //     });
        // },
        /**
         * Handler when user  select some author at the "Author" select.
         */
        // filterAuthor(val) {
        //     this.filters = this.$MultiFilters.updateFilters(this.filters, {
        //         added_by: val
        //     });
        // },
        //ຄົ້ນຫາເລືອກວັນທີ

        /**
         * Handler when select a date on "From" date picker.
         */
        filterStartDate(val) {
            // Close the date picker.
            this.$refs.show_start_date.save(val);
            //Convert the value to a timestamp before saving it.
            const timestamp = new Date(val + 'T00:00:00Z').getTime();
            this.filters = this.$MultiFilters.updateFilters(this.filters, {
                start_date: timestamp
            });
        },
        /**
         * Handler when select a date on "To" date picker.
         */
        filterEndDate(val) {
            // Close the date picker.
            this.$refs.show_end_date.save(val);
            //Convert the value to a timestamp before saving it.
            const timestamp = new Date(val + 'T00:00:00Z').getTime();
            this.filters = this.$MultiFilters.updateFilters(this.filters, {
                end_date: timestamp
            });
        },

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
            return value.toLowerCase().includes(this.platcnoFilterValue.toLowerCase());
        },

        typeplatcnoFilter(value) {
            if (!this.typeplactnoFilterValue) {
                return 1;
            }
            return value === this.typeplactnoFilterValue;
        },
        // dateFilter(value) {
        //     if (!this.dateFilterValue) {
        //         return 1;
        //     }
        //     return value === this.dateFilterValue;
        // },

        //ສີປ້າຍທະບຽນ
        getColorplatc_no(platc_no) {
            if (platc_no > 9000) return '#F9A825 '
            else return '#F9A825'
        },
        //ສີພຶມ
        getColorpint(platc_no) {
            if (platc_no > 9000) return '#F9A825 '
            else return '#00C853'
        },

        filters: {
            /**
             * Format a timestamp into a d/m/yyy (because spanish format).
             *
             * @param value
             * @returns {string}
             */
            formatDate: function (value) {
                if (!value) return '';
                return new Date(value).toLocaleDateString("es-ES");
            }
        }
    },

};
</script>

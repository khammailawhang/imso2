<template>
<div id="report">
    <v-content>
        <v-container>
            <v-row align="start" justify="center" no-gutters>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
                    <v-card dense flat color="white">
                     
                            <v-card-title>
                                <v-btn to="Home" text>{{$t("Navbar.Dashboard")}}</v-btn>
                                <v-icon small>mdi-chevron-right</v-icon>
                                  <v-btn to="Home" text>{{$t("Navbar.Report")}}</v-btn>
                                <v-spacer />
                                
                                <v-btn color="#3d5afe" depressed small dark onclick="location.reload(true)" class="ml-2">
                                    <v-icon small class="mr-1">mdi-refresh</v-icon> {{ $t("Home.Refresh") }}
                                </v-btn>
                            </v-card-title>
                      
                    </v-card>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="pt-4">
                    <v-card flat>
                        <v-card-title></v-card-title>
                        <v-tabs color="#304FFE" center-active icons-and-text centered height="80px" width="80px">
                            <v-tab>
                                <p>{{$t("Report.All")}}</p>
                                <v-icon large>mdi-chart-arc</v-icon>
                            </v-tab>
                            <v-tab>
                                <p>{{$t("Report.InExpired")}}</p>
                                <v-icon large>mdi-car</v-icon>
                            </v-tab>
                            <v-tab>
                                <p>{{$t("Report.Fee")}}</p>
                                <v-icon large>mdi-currency-usd</v-icon>
                            </v-tab>
                            <!-- <v-tab>
                  <p>{{$t("Report.Expense")}}</p>
                  <v-icon large>mdi-currency-usd</v-icon>
                </v-tab> -->
                            <!-- ລາຍງານລວມທັງໝົດ ຈໍານວນລົງທະບຽນ, ຈໍານວນກວດເຕັກນິກ, ຈໍານວນເກັບຄ່າທໍານຽນ -->

                            <v-tab-item>
                                <v-card flat tile>
                                    <v-card-text>
                                        <Management />
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <!-- ລາຍງານຂໍ້ມູນກວດກາເຕັນກນິກ -->
                            <v-tab-item>
                                <v-card flat tile>
                                    <v-card-text>
                                        <InspectionReport />
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <!-- ລາຍງານຂໍ້ມູນກວດກາເກັບຄ່າທໍານຽມ -->
                            <v-tab-item>
                                <v-card flat tile>
                                    <v-card-text>
                                        <FeeReports />
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <!-- ລາຍງານຂໍ້ມູນເລືອກວັນທີ -->
                            <!-- <v-tab-item>
                  <v-card flat tile>
                    <v-card-text>
                      <Expense />
                    </v-card-text>
                  </v-card>
                </v-tab-item> -->
                        </v-tabs>
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
Vue.use(VueAxios, axios);
import Management from "@/views/Management";
import InspectionReport from "@/views/InspectionReport";
import FeeReports from "@/views/FeeReports";
// import Expense from "@/views/Expense";
// import FilterDate from "@/views/FilterDate";

import AuthService from "@/services/AuthService.js";
export default {
    components: {
        Management,
        InspectionReport,
        FeeReports,
        // Expense,

    },
    data() {
        return {
            items: [{
                    text: "Dashboard",
                    disabled: false,
                    href: "Home"
                },
                {
                    text: "Report",
                    disabled: true,
                    href: "Report"
                }
            ],
            secretMessage: "",
            username: "",
            password: "",
            home: "",
            fee: ""
        };
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("login");
        } else if (this.$store.getters.getUser.report === "1") {
            this.initialize();
            this.report = this.$store.getters.getUser.report;
            this.branch_id = this.$store.getters.getUser.branch_id;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("login");
        }
    }
};
</script>

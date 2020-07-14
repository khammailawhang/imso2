<template>
  <div id="report">
    <v-content>
      <v-container>
        <v-row align="start" justify="center">
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.AdminManagement")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="pt-6">
            <v-card flat>
              <v-card-title></v-card-title>
              <v-tabs icons-and-text centered center-active height="80px" color="#304FFE">
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
                <v-tab-item>
                  <v-card flat tile color="white">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                          <AdminManagement />
                        </v-col>
                        <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <FeePerDay />
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <FeePerMonth />
                        </v-col>-->
                        <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <FeePerYear />
                        </v-col>-->
                        <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <ModelPopular />
                        </v-col>-->
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat tile>
                    <v-card-text>
                      <AdminInspection />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat tile>
                    <v-card-text>
                      <AdminExpense />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="pt-6 pl-3">
            <v-card flat color="white">
              <AdminModelPopular />
            </v-card>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12" class="pt-6 pl-3">
            <v-card flat color="white">
              <AdminTypePopular />
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="pt-6">
            <v-card flat color="white">
              <FeePerDay />
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="pt-6">
            <v-card flat color="white">
              <FeePerMonth />
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="pt-6 pb-6">
            <v-card flat color="white">
              <FeePerYear />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import AdminManagement from "@/views/AdminManagement";
import AdminInspection from "@/views/AdminInspection";
import AdminExpense from "@/views/AdminExpense";
// import ReportMenu from "@/views/ReportMenu";
import FeePerDay from "@/views/AdminPerDay";
import FeePerMonth from "@/views/AdminPerMonth";
import FeePerYear from "@/views/AdminPerYear";
import AdminModelPopular from "@/views/AdminModelPopular";
import AdminTypePopular from "@/views/AdminTypePopular";
export default {
  components: {
    AdminManagement,
    AdminInspection,
    AdminExpense,
    FeePerDay,
    FeePerMonth,
    FeePerYear,
    AdminModelPopular,
    AdminTypePopular
    // ReportMenu
  },
  data() {
    return {
      secretMessage: "",
      username: "",
      password: "",
      home: "",
      fee: ""
    };
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  font-family: "Phetsarath OT", Roboto, Tahoma, Geneva, Verdana, sans-serif;
}
</style>

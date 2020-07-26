<template>
  <div id="home">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-title>

              </v-card-title>
              <v-card-text>
                
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-col cols="12" xl="10" lg="10" md="10" sm="11">
      <v-row align="center" justify="center">
        <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center"><h2>ເມນູຫຼັກ</h2></v-col> -->
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" align="center">
          <v-btn to="Filter" x-large color="indigo" class="white--text">Filter by date</v-btn>
          <v-btn @click="click" color="red" class="white--text ma-2" x-large>Click</v-btn>
          <router-link to="http://localhost/filter_vue/index" target="_blank">
            <span
              v-if="is_debug"
            >task_id # {{ nextAssigningTasksAssignedToUser.task_id }} ( subtask # {{ nextAssigningTasksAssignedToUser.id }} )</span>
            Open
          </router-link>
        </v-col>
        <v-col cols="12" lg="2" md="3" sm="4" xs="12" v-if="register === '1'">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="indigo" height="164px">
              <v-img :aspect-ratio="16 / 9" height="164px">
                <div
                  class="white--text pt-2"
                  style="color:#fff, font-size:18px"
                >{{ $t("Dashboard.Register") }}</div>
                <v-avatar class="ma-8" size="100">
                  <v-icon color="white" style="font-size:100px">mdi-account-plus</v-icon>
                </v-avatar>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-2 white--text"
                    style="height: 100%;"
                  >
                    <v-btn
                      to="RegisterCreate"
                      tile
                      large
                      width="100%"
                      height="100%"
                      text
                      color="indigo"
                      class="yellow--text"
                      style="font-family: 'Phetsarath OT'"
                    >
                      <strong
                        class="whit--text"
                        width="100%"
                        style="font-size:16px"
                      >{{ $t("Dashboard.Register") }}</strong>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" lg="2" md="3" sm="4" xs="12" v-if="inspection === '1'">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="indigo" height="164px">
              <v-img :aspect-ratio="16 / 9" height="164px">
                <div
                  class="white--text pt-2"
                  style="color:#fff, font-size:18px"
                >{{ $t("Dashboard.Inspection") }}</div>
                <v-avatar class="ma-8" size="100">
                  <v-icon color="white" style="font-size:100px">mdi-car-multiple</v-icon>
                </v-avatar>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-2 white--text"
                    style="height: 100%;"
                  >
                    <v-btn
                      to="InspectionStart"
                      tile
                      large
                      width="100%"
                      height="100%"
                      text
                      color="indigo"
                      class="yellow--text"
                      style="font-family: 'Phetsarath OT'"
                    >
                      <strong
                        class="whit--text"
                        width="100%"
                        style="font-size:16px"
                      >{{ $t("Dashboard.Inspection") }}</strong>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" lg="2" md="3" sm="4" xs="12" v-if="fee === '1'">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="indigo" height="164px">
              <v-img :aspect-ratio="16 / 9" height="164px">
                <div
                  class="white--text pt-2"
                  style="color:#fff, font-size:18px"
                >{{ $t("Dashboard.Fee") }}</div>
                <v-avatar class="ma-8" size="100">
                  <v-icon color="white" style="font-size:100px">mdi-currency-usd</v-icon>
                </v-avatar>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-2 white--text"
                    style="height: 100%;"
                  >
                    <v-btn
                      @click="feeRequestTo(branch_id)"
                      tile
                      large
                      width="100%"
                      height="100%"
                      text
                      color="indigo"
                      class="yellow--text"
                      style="font-family: 'Phetsarath OT'"
                    >
                      <strong
                        class="whit--text"
                        width="100%"
                        style="font-size:16px"
                      >{{ $t("Dashboard.Fee") }}</strong>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" lg="2" md="3" sm="4" xs="12" v-if="report === '1'">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="indigo" height="164px">
              <v-img :aspect-ratio="16 / 9" height="164px">
                <div
                  class="white--text pt-2"
                  style="color:#fff, font-size:18px"
                >{{ $t("Dashboard.Report") }}</div>
                <v-avatar class="ma-8" size="100">
                  <v-icon color="white" style="font-size:100px">mdi-chart-bar</v-icon>
                </v-avatar>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-2 white--text"
                    style="height: 100%;"
                  >
                    <v-btn
                      to="Report"
                      tile
                      large
                      width="100%"
                      height="100%"
                      text
                      color="indigo"
                      class="yellow--text"
                      style="font-family: 'Phetsarath OT'"
                    >
                      <strong
                        class="whit--text"
                        width="100%"
                        style="font-size:16px"
                      >{{ $t("Dashboard.Report") }}</strong>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <!-- <v-col cols="12" lg="2" md="3" sm="4" xs="12" v-if="setting === '1'">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="indigo" height="164px">
                   
                        <v-img :aspect-ratio="16 / 9" height="164px">
                           <div class="white--text pt-2" style="color:#fff, font-size:18px">{{ $t("Dashboard.Setting") }}</div>
                            <v-avatar class="ma-8" size="100">
                                <v-icon color="white" style="font-size:100px">mdi-cogs</v-icon>
                            </v-avatar>
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-2 white--text" style="height: 100%;">
                                    <v-btn to="Setting" tile large width="100%" height="100%" text color="indigo" class="yellow--text" style="font-family: 'Phetsarath OT'">
                                        <strong class="whit--text" width="100%" style="font-size:16px">{{ $t("Dashboard.Setting") }}</strong>
                                    </v-btn>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
        </v-col>-->
      </v-row>

      <v-row align="start" justify="center">
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <h3>ລາຍງານຜົນການກວດເຕັກນິກຕໍ່ວັນ</h3>
          <Bar />
        </v-col>

        <v-col cols="12" lg="6" md="12" sm="12" xs="12">
          <TypeChart />
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xs="12">
          <ModelChart />
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import TypeChart from "@/components/Type_Chart.vue";
import ModelChart from "@/components/Model_Chart.vue";

import Bar from "../components/Bar.vue";

export default {
  components: {
    TypeChart,
    ModelChart,

    Bar
  },
  data() {
    return {
      chartData: {
        Books: 54,
        Magazine: 30,
        Newspapers: 10
      },
      hover: false,
      secretMessage: "",
      username: "",
      password: "",
      home: "",
      fee: "",
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People"
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        }
      ]
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else if (this.$store.getters.getUser.home === "1") {
      this.username = this.$store.getters.getUser.username;
      this.userId = this.$store.getters.getUser.id;
      this.home = this.$store.getters.getUser.home;
      this.register = this.$store.getters.getUser.register;
      this.inspection = this.$store.getters.getUser.inspection;
      this.fee = this.$store.getters.getUser.fee;
      this.report = this.$store.getters.getUser.report;
      this.setting = this.$store.getters.getUser.setting;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/Login");
    }
  },
  methods: {
    initialize() {
      this.axios
        .get("/api/fee/branch_id/" + this.$route.query.branch_id)
        .then(response => {
          this.fees = response.data.fees;
        });
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    feeRequestTo(branch_id) {
      this.$router.push("./Fee?branch_id=" + branch_id);
    },
    click() {
      window.open("http://localhost/filter_vue/index", "_blank");
    }
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

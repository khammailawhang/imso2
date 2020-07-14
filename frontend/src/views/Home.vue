<template>
  <div id="home">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-title>
                <v-icon small class="ma-2">mdi-view-dashboard</v-icon>
                <span>{{$t("Navbar.Dashboard")}}</span>
                <v-spacer/>
                <v-btn color="#3d5afe" depressed small dark onclick="location.reload(true)" class="ml-2"><v-icon small class="mr-1">mdi-refresh</v-icon> {{ $t("Home.Refresh") }}</v-btn>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-text>
                <v-row align="start" justify="center">
                  <v-col cols="12" xl="2" lg="2" md="3" sm="3" xs="6" v-if="register === '1'">
                    <v-flex>
                      <v-tooltip top color="#3D5AFE">
                        <template v-slot:activator="{ on }">
                          <v-hover v-slot:default="{ hover }" open-delay="200">
                            <v-btn
                              to="Register"
                              :elevation="hover ? 24 : 0"
                              color="#3D5AFE"
                              class="white--text"
                              width="150px"
                              height="150px"
                              v-on="on"
                            >
                              <v-icon style="font-size:100px">mdi-account</v-icon>
                            </v-btn>
                          </v-hover>
                        </template>
                        <span>{{ $t("Navbar.Register") }}</span>
                      </v-tooltip>
                    </v-flex>
                  </v-col>
                  <v-col cols="12" xl="2" lg="2" md="3" sm="3" xs="6" v-if="inspection === '1'">
                    <v-flex>
                      <v-tooltip top color="#3D5AFE">
                        <template v-slot:activator="{ on }">
                          <v-hover v-slot:default="{ hover }" open-delay="200">
                            <v-btn
                              to="InspectionStart"
                              :elevation="hover ? 24 : 0"
                              color="#3D5AFE"
                              class="white--text"
                              width="150px"
                              height="150px"
                              v-on="on"
                            >
                              <v-icon style="font-size:100px">mdi-car</v-icon>
                            </v-btn>
                          </v-hover>
                        </template>
                        <span>{{ $t("Navbar.Inspection") }}</span>
                      </v-tooltip>
                    </v-flex>
                  </v-col>
                  <v-col cols="12" xl="2" lg="2" md="3" sm="3" xs="6" v-if="fee === '1'">
                    <v-flex>
                      <v-tooltip top color="#3D5AFE">
                        <template v-slot:activator="{ on }">
                          <v-hover v-slot:default="{ hover }" open-delay="200">
                            <v-btn
                              @click="feeRequestTo(branch_id)"
                              :elevation="hover ? 24 : 0"
                              color="#3D5AFE"
                              class="white--text"
                              width="150px"
                              height="150px"
                              v-on="on"
                            >
                              <v-icon style="font-size:100px">mdi-currency-usd</v-icon>
                            </v-btn>
                          </v-hover>
                        </template>
                        <span>{{ $t("Navbar.Fee") }}</span>
                      </v-tooltip>
                    </v-flex>
                  </v-col>
                  <v-col cols="12" xl="2" lg="2" md="3" sm="3" xs="6" v-if="report === '1'">
                    <v-flex>
                      <v-tooltip top color="#3D5AFE">
                        <template v-slot:activator="{ on }">
                          <v-hover v-slot:default="{ hover }" open-delay="200">
                            <v-btn
                              @click="reportTo(branch_id)"
                              :elevation="hover ? 24 : 0"
                              color="#3D5AFE"
                              class="white--text"
                              width="150px"
                              height="150px"
                              v-on="on"
                            >
                              <v-icon style="font-size:100px">mdi-chart-bar</v-icon>
                            </v-btn>
                          </v-hover>
                        </template>
                        <span>{{ $t("Navbar.Report") }}</span>
                      </v-tooltip>
                    </v-flex>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-text>
                <v-row align="center" class="ma-2">
                  <v-date-picker
                    color="#3d5afe"
                    v-model="date"
                    full-width
                    :landscape="$vuetify.breakpoint.smAndUp"
                  ></v-date-picker>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col> -->
          <v-col cols="12" xl="6" lg="6" md="12" sm="12">
            <v-card flat color="white">
              <v-card-text>
                <ModelPopular/>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="12" sm="12">
            <v-card flat color="white">
              <v-card-text>
                <TypePopular/>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-text>
                <FeePerYear/>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import FeePerYear from "@/views/FeePerYear";
import ModelPopular from "@/views/ModelPopular";
import TypePopular from "@/views/TypePopular";
export default {
  components:{
    FeePerYear,
    ModelPopular,
    TypePopular
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
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
      this.$router.push("`/${$i18n.locale}/Login`");
    } else if (this.$store.getters.getUser.home === "1") {
      this.username = this.$store.getters.getUser.username;
      this.userId = this.$store.getters.getUser.id;
      this.home = this.$store.getters.getUser.home;
      this.register = this.$store.getters.getUser.register;
      this.inspection = this.$store.getters.getUser.inspection;
      this.fee = this.$store.getters.getUser.fee;
      this.report = this.$store.getters.getUser.report;
      this.setting = this.$store.getters.getUser.setting;
      this.branch_name = this.$store.getters.getUser.branch_name;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("`/${$i18n.locale}/Login`");
    }
  },
  methods: {
     reloadPage(){
    window.location.reload()
  },
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
      this.$router.push("login");
    },
    click() {
      window.open("http://localhost/filter_vue/index", "_blank");
    },
     feeRequestTo(branch_id) {
      this.$router.push("./Fee?branch_id=" + branch_id);
    },

    reportTo(branch_id) {
      this.$router.push("Report?branch_id=" + branch_id);
    },
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

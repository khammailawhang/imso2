<template>
  <div>
    <v-app-bar flat fixed clipped-left color="#3D5AFE">
      <div class="d-flex align-center">
        <router-link link :to="`/${$i18n.locale}/Started`">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/l.png')"
            transition="scale-transition"
            width="80"
          />
        </router-link>
      </div>
      <v-toolbar-title show-arrows style="width: 100%" class="ml-2 pl-2"></v-toolbar-title>
      <v-spacer />
      <v-tabs show-arrows color="#3D5AFE" background-color="#3D5AFE">
        <v-tab v-if="home === '1'">
          <v-btn link @click="toHome(branch_id)" text class="white--text">
            <v-icon small class="ma-2">mdi-view-dashboard</v-icon>
            {{ $t("Navbar.Dashboard") }}
          </v-btn>
        </v-tab>
        <v-tab v-if="register === '1'">
          <v-btn link :to="`/${$i18n.locale}/Register`" text class="white--text">
            <v-icon small class="ma-2">mdi-account</v-icon>
            {{ $t("Navbar.Register") }}
          </v-btn>
        </v-tab>
        <v-tab v-if="inspection === '1'">
          <v-btn link :to="`/${$i18n.locale}/InspectionStart`" text class="white--text">
            <v-icon small class="ma-2">mdi-car</v-icon>
            {{ $t("Navbar.Inspection") }}
          </v-btn>
        </v-tab>
        <v-tab v-if="fee === '1'">
          <v-btn @click="feeRequestTo(branch_id)" text class="white--text">
            <v-icon small class="ma-2">mdi-currency-usd</v-icon>
            {{ $t("Navbar.Fee") }}
          </v-btn>
        </v-tab>
        <v-tab v-if="report === '1'">
          <v-btn link @click="reportTo(branch_id)" text class="white--text">
            <v-icon small class="ma-2">mdi-chart-bar</v-icon>
            {{ $t("Navbar.Report") }}
          </v-btn>
        </v-tab>
        <v-tab v-if="setting === '1'">
          <v-menu flat top offset-y transition="slide-y-transition" class="white--text">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2" outlined fab small color="white">
                <v-icon text rounded color="white" class="white--text" v-on="on">mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-sheet flat id="scroll-area-2" class="overflow-y-auto">
              <v-card flat width="280px" height="500px" class="white">
                <v-container flat height="auto" class="white">
                  <v-list-item link>
                    <v-list-item-action>
                      <v-icon color="#00E676" small>mdi-checkbox-blank-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="pl-0">
                      <strong class="indigo--text text--accent-4">
                        {{ username }}
                      </strong>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link @click="changePasswordTo(users_id)">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-account</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.ChangePassword") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item link @click="logout">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-login-variant</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Logout") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider/>
                  <v-list-item v-if="model ==='1'" link :to="`/${$i18n.locale}/Model`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Model") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-if="type ==='1'" link :to="`/${$i18n.locale}/Type`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Type") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-if="color ==='1'" link :to="`/${$i18n.locale}/Color`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Color") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    v-if="type_register ==='1'"
                    link
                    :to="`/${$i18n.locale}/Type_Register`"
                  >
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Type_Register") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-if="village ==='1'" link :to="`/${$i18n.locale}/Village`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Village") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-if="district ==='1'" link :to="`/${$i18n.locale}/District`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.District") }}</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item v-if="province ==='1'" link :to="`/${$i18n.locale}/Province`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Province") }}</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item v-if="use ==='1'" link :to="`/${$i18n.locale}/Use`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Register.use") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    v-if="standard_setting ==='1'"
                    link
                    :to="`/${$i18n.locale}/StandardSetting`"
                  >
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.StandardSetting") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-if="branch ==='1'" link :to="`/${$i18n.locale}/Branch`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Branch") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-if="level ==='1'" link :to="`/${$i18n.locale}/Level`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.Level") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider/>
                  <v-list-item v-if="user_authorization ==='1'" link :to="`/${$i18n.locale}/User`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-account-cog</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.UserSetting") }}</span>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link :to="`/${$i18n.locale}/AdminPage`">
                    <v-list-item-action>
                      <v-icon color="grey">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                     <v-list-item-content class="grey--text">
                      <span>{{ $t("Navbar.AdminManagement") }}</span>
                    </v-list-item-content>
                  </v-list-item>
                </v-container>
              </v-card>
            </v-sheet>
          </v-menu>
        </v-tab>
        <v-tab>
          <Language></Language>
        </v-tab>

        <v-spacer />
      </v-tabs>
      <v-spacer />
      <!-- <Language></Language> -->
    </v-app-bar>
  </div>
</template>
<script>
import Language from "@/components/Language.vue";
import AuthService from "@/services/AuthService.js";
export default {
  components: {
    Language
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "ຊື່ຜູ້ໃຊ້ລະບົບ",
        align: "left",
        sortable: true,
        value: "username",
        width: "100px"
      }
    ]
  }),

  // data() {
  //     return {
  //         menuOpen: false,
  //         secretMessage: "",
  //         username: "",
  //         home: "",
  //         register: "",
  //         inspection: "",
  //         fee: "",
  //         report: "",
  //         setting: "",
  //         model: '',
  //         type: '',
  //         color: '',
  //         village: '',
  //         district: '',
  //         province: '',
  //         use: '',
  //         company_information: '',
  //         fee_setting: '',
  //         type_register: '',
  //         standard_setting: '',
  //         branch: '',
  //         level: '',
  //         user_authorization: '',
  //         // userId:"",
  //     };
  // },
   async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("Login");
    } else if (this.$store.getters.getUser.home === "1") {
      this.username = this.$store.getters.getUser.username;
    this.home = this.$store.getters.getUser.home;
    this.register = this.$store.getters.getUser.register;
    this.inspection = this.$store.getters.getUser.inspection;
    this.fee = this.$store.getters.getUser.fee;
    this.report = this.$store.getters.getUser.report;
    this.setting = this.$store.getters.getUser.setting;
    this.model = this.$store.getters.getUser.model;
    this.type = this.$store.getters.getUser.type;
    this.color = this.$store.getters.getUser.color;
    this.village = this.$store.getters.getUser.village;
    this.district = this.$store.getters.getUser.district;
    this.province = this.$store.getters.getUser.province;
    this.use = this.$store.getters.getUser.use;
    this.company_information = this.$store.getters.getUser.company_information;
    this.fee_setting = this.$store.getters.getUser.fee_setting;
    this.type_register = this.$store.getters.getUser.type_register;
    this.branch = this.$store.getters.getUser.branch;
    this.level = this.$store.getters.getUser.level;
    this.user_authorization = this.$store.getters.getUser.user_authorization;
    this.users_id = this.$store.getters.getUser.users_id;
    this.registered = this.$store.getters.getUser.registered;
    this.home = this.$store.getters.getUser.home;
    this.branch_name = this.$store.getters.getUser.branch_name;
    this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("Login");
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
    getColorplatc_no(platc_no) {
      if (platc_no > 9000) return "#F9A825 ";
      // else if (platc_no > 9999) return '#F9A825'
      else return "#F9A825";
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("login");
    },
    changePasswordTo(users_id) {
      this.$router.push("ChangePassword?users_id=" + users_id);
    },
    feeRequestTo(branch_id) {
      this.$router.push("./Fee?branch_id=" + branch_id);
    },

    reportTo(branch_id) {
      this.$router.push("Report?branch_id=" + branch_id);
    },
    toHome(branch_id) {
      this.$router.push("Home?branch_id=" + branch_id);
    },
  }
};
</script>

<template>
  <div>
    <v-app-bar flat app color="#3d5afe" class="grey--text text--lighten-5" dark>
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
      <v-spacer />
      <Language />
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12">
            <p align="center" class="font-weight-medium">{{$t("Start.Title")}}</p>
            <v-btn
              color="#3d5afe"
              large
              block
              class="white--text ma-2 text-capitalize"
              depressed
              @click="toHome(branch_id)"
            >{{$t("Start.continue")}}</v-btn>
            <v-btn
              color="#FF1744"
              large
              block
              class="white--text ma-2 text-capitalize"
              depressed
              @click="logout"
            >{{$t("Start.signout")}}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Language from "@/components/Language.vue";
import AuthService from "@/services/AuthService.js";
export default {
  components: { Language },
  data: () => ({}),
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
      this.branch_name = this.$store.getters.getUser.branch_name;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },
  methods: {
    toHome(branch_id) {
      this.$router.push("Home?branch_id=" + branch_id || "Navbar?branch_id=" + branch_id);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  }
};
</script>
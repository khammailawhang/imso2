<template>
  <div class="edit">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card flat>
          <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="white"
            flat
            dark
          >
            <v-icon color="indigo">mdi-xing</v-icon>
            <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
              <h5 class="indigo--text">{{ $t("Use.Edit_Title") }}</h5>
            </v-toolbar-title>
            <v-spacer />
            <v-tooltip bottom color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="ma-2 hidden-xl-only"
                  href="../Use"
                  icon
                  color="indigo"
                  dark
                  v-on="on"
                >
                  <v-icon>mdi-undo-variant</v-icon>
                </v-btn>
              </template>
              <span>{{ $t("Fee.Back") }}</span>
            </v-tooltip>
          </v-app-bar>
          <v-card-text>
            <v-form>
              <span class="pt-2">{{ $t("Use.Name") }}</span>
              <v-text-field v-model="name" type="text" autocomplete="off" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="indigo" class="white--text" @click="update" v-if="Use_update === '1'"
              ><v-icon>mdi-plus</v-icon> {{ $t("Use.Update") }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      items: [
        {
          text: "ໜ້າຫຼັກ",
          disabled: false,
          href: "/Dashboard"
        },
        {
          text: "ຕັ້ງຄ່າ",
          disabled: false,
          href: "/Village"
        },
        {
          text: "ແຂວງ",
          disabled: false,
          href: "../Use"
        },
        {
          text: "ແ້ກ້ໄຂແຂວງ",
          disabled: true
        }
      ],
      name: "",
      status: ""
    };
  },
   async created() { 
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    }
    else if(this.$store.getters.getUser.Use_update === '1'){
      let res = await axios.get(
      "/api/Use/Use_id/" + this.$route.query.Use_id
    );
    this.name = res.data.Uses.name || "";
    this.status = res.data.Uses.status || "";
      this.Use_update = this.$store.getters.getUser.Use_update;
      this.secretMessage = await AuthService.getSecretContent();
    }else{
      this.$store.dispatch("logout");
      this.$router.push("../login");
    }
  },
  methods: {
    async update() {
      let res = await this.axios.put("/api/Use/update", {
        Use_id: this.$route.query.Use_id,
        name: this.name,
        status: this.status
      });

      if (res) {
        this.$router.replace("../Use");
      }
    }
  }
};
</script>

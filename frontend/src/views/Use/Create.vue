<template>
  <div class="create">
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
            <v-toolbar-title style="" class="ml-0 pl-4">
              <h5 class="indigo--text">{{ $t("Use.Create_Title") }}</h5>
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
              <v-text-field
                v-model="form.name"
                type="text"
                autocomplete="off"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="grey" @click="reset" class="white--text">{{
              $t("Use.Cancel")
            }}</v-btn>
            <v-btn text color="indigo" class="white--text" @click="save" v-if="Use_create === '1'"
              ><v-icon>mdi-plus</v-icon> {{ $t("Use.Save") }}</v-btn
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
  data: () => ({
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
        text: "ເພີ່ມແຂວງ",
        disabled: true
      }
    ],
    headers: [
      {
        text: "ຊື່ຍີ່ຫໍ້",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "ສະຖານະ", value: "status" },
      { text: "ຈັດການ", value: "action", sortable: false }
    ],
    form: {
      name: "",
      status: ""
    },
    snackbar:false,
      snackbarText:'',
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    }
    else if(this.$store.getters.getUser.Use_create === '1'){
      this.getModel();
      this.Use = this.$store.getters.getUser.Use;
      this.secretMessage = await AuthService.getSecretContent();
    }else{
      this.$store.dispatch("logout");
      this.$router.push("../login");
    }
  },
  methods: {
    async save() {
      let res = await this.axios.post("/api/use/create", this.form);
      if (res) {
        this.$router.replace("../Use");
      }
    },
    async reset() {
      (this.form.name = ""), (this.form.status = false);
    }
  }
};
</script>

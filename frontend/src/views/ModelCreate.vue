<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Model.Create_Title") }}</v-card-title>
                <v-card-text class="pt-6">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field dense outlined v-model="form.name" type="text" autocomplete="off">
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("Model.Name") }}
                          <v style="color:red" v-for="(error, name) in errors" :key="name">
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-text-field>
                  </ValidationProvider>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />

                  <v-btn-toggle dense>
                    <v-btn depressed color="#3d5afe" class="white--text" @click="save">
                      <v-icon color="white" class="mr-1">check</v-icon>
                      {{$t("Type.Save")}}
                    </v-btn>

                    <v-btn
                      color="#B0BEC5"
                      :to="`/${$i18n.locale}/Model`"
                      class="white--text"
                    >{{$t("Type.Back")}}</v-btn>
                  </v-btn-toggle>
                </v-card-actions>
                <v-alert
                  :timeout="timeout"
                  v-if="msg === true"
                  dismissible
                  :color="getColor(msg)"
                  class="white--text"
                  flat
                >{{ msg }}</v-alert>
                <v-alert
                  :timeout="timeout"
                  v-if="msg === false"
                  dismissible
                  :color="getColor(msg)"
                  class="white--text"
                  flat
                >{{ msg }}</v-alert>
              </v-card>
            </v-col>
          </v-row>
        </ValidationObserver>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import console from "console";
import AuthService from "@/services/AuthService.js";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";

Vue.use(VueAxios, axios);
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    snackbar: false,
    msg: "",
    timeout: 2000,
    form: {
      name: ""
    }
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
    } else if (this.$store.getters.getUser.model_create === "1") {
      this.getModel();
      this.model = this.$store.getters.getUser.model;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },

  methods: {
    async save() {
      const isValid = await this.$refs.observer.validate(
        this.form.name != false &&
          this.axios.post("/api/model/create", this.form).then(response => {
            this.form.name = response.data.form.name;
          })
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        // console.log("is valid");
        // this.msg = isValid.data.msg;
        this.$router.replace("./model");
      }
    },

    // async save() {
    //     let res = await this.axios.post("/api/model/create", this.form);
    //     if (res) {
    //         this.$router.replace("./model");
    //     }
    // },

    async reset() {
      this.form.name = "";
    },
    getColor(msg) {
      if (msg == "Success") return "green";
      else return "red";
    }
  }
};
</script>

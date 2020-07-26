<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center">
            <v-col cols="12" xl="4" lg="4" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>
                  {{ $t("Type.Create_Title") }}
                </v-card-title>
                <v-card-text class>
                  <v-form align="left">
                    <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                      <v-select
                        :items="models"
                        v-model="form.model_id"
                        item-text="name"
                        item-value="model_id"
                        required
                      >
                        <template slot="label">
                          <span class="pt-2">
                            {{ $t("Type.mode") }}
                            <v
                              style="color:red"
                              v-for="(error, model_id) in errors"
                              :key="model_id"
                            >
                              <b>*</b>
                            </v>
                          </span>
                        </template>
                      </v-select>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                      <v-text-field v-model="form.name" type="text" autocomplete="off">
                        <template slot="label">
                          <span class="pt-2">
                            {{ $t("Type.Name") }}
                            <v style="color:red" v-for="(error, name) in errors" :key="name">
                              <b>*</b>
                            </v>
                          </span>
                        </template>
                      </v-text-field>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                      <v-text-field v-model="form.price" type="text" autocomplete="off">
                        <template slot="label">
                          <span class="pt-2">
                            {{ $t("Type.fee") }}
                            <v style="color:red" v-for="(error, price) in errors" :key="price">
                              <b>*</b>
                            </v>
                          </span>
                        </template>
                      </v-text-field>
                    </ValidationProvider>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-row class="pr-2 pl-2">
                    <v-col cols="6">
                      <v-btn
                        color="#00E676"
                        depressed
                        block
                        class="white--text mr-2"
                        v-on="on"
                        @click="save"
                        v-if="type_create === '1'"
                      >
                        <v-icon class="ma-1">check</v-icon>
                        {{$t("Type.Save")}}
                      </v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn
                        color="#B0BEC5"
                        depressed
                        block
                        :to="`/${$i18n.locale}/Type`"
                        v-on="on"
                        class="white--text"
                        v-if="type_create === '1'"
                      >
                        {{$t("Fee.Back")}}
                      </v-btn>
                    </v-col>
                    <v-col cols="12">
                        <v-alert
                        v-if="msg === true"
                        text
                        prominent
                        color="#00E676"
                        ><v-icon color="#00E676">mdi-check</v-icon> {{ $t("User.CreateSuccess") }}</v-alert>
                        <v-alert
                        v-if="msg === err"
                        text
                        prominent
                        color="red"
                        >{{ $t("User.CreateNotSuccess") }}</v-alert>
                    </v-col>
                  </v-row>
                </v-card-actions>
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
    snackbarText: "",
    status: false,
    form: {
      name: "",
      model_id: "",
      price: ""
    },
    msg:"",
    models: [],
    type_create: ""
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
      this.$router.push("/");
    } else if (this.$store.getters.getUser.type_create === "1") {
      this.getModel();
      this.type_create = this.$store.getters.getUser.type_create;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async save() {
      const isValid = await this.$refs.observer.validate(
        this.form.model_id != false &&
          this.form.name != false &&
          this.form.price != false &&
          this.axios.post("/api/type/create", this.form)
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
          this.msg = isValid.data.msg;
        // this.$router.replace("./Type");
      }
    },
    // async save() {
    //     let res = await this.axios.post("/api/type/create", this.form);
    //     if (res) {
    //         this.$router.replace("./Type");
    //     }
    // },
    async reset() {
      (this.form.name = ""), (this.form.model_id = ""), (this.form.price = "");
    },
    getModel() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    }
  }
};
</script>

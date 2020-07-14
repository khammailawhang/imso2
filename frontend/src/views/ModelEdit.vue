<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>
                  {{ $t("Model.Create_Title") }}
                  <v-spacer />
                </v-card-title>
                <v-card-text class="pt-6">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field dense outlined v-model="name" type="text" autocomplete="off">
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
                    <v-btn color="#3d5afe" depressed class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("Model.Update")}}
                    </v-btn>
                    <v-btn
                      color="#B0BEC5"
                      :to="`/${$i18n.locale}/Model`"
                      class="white--text"
                    >{{$t("Type.Back")}}</v-btn>
                  </v-btn-toggle>
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
  data() {
    return {
      name: ""
    };
  },
  async created() {
    let res = await axios.get(
      "/api/model/model_id/" + this.$route.query.model_id
    );
    this.name = res.data.models.name || "";
    this.status = res.data.models.status || "";
    if (this.$store.getters.getUser.model_create === "1") {
      this.model_create = this.$store.getters.getUser.model_create;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate(
        this.name != false &&
          (await this.axios.put("/api/model/update", {
            model_id: this.$route.query.model_id,
            name: this.name
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./model");
      }
    }

    // async update() {
    //     let res = await this.axios.put("/api/model/update", {
    //         model_id: this.$route.query.model_id,
    //         name: this.name
    //     });

    //     if (res) {
    //         this.$router.replace("./Model");
    //     }
    // }
  }
};
</script>

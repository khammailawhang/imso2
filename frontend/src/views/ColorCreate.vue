<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Color.Create_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      dense
                      outlined
                      color="#3d5afe"
                      v-model="form.name"
                      type="text"
                      autocomplete="off"
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("Color.Name") }}
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
                    <v-btn
                      color="#3d5afe"
                      depressed
                      v-on="on"
                      flat
                      class="white--text"
                      @click="save"
                      v-if="color_create ==='1'"
                    >
                      <v-icon color="white">check</v-icon>
                      {{$t("Type.Save")}}
                    </v-btn>
                    <v-btn
                      depressed
                      color="#B0BEC5"
                      :to="`/${$i18n.locale}/Color`"
                      v-on="on"
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
  data: () => ({
    items: "",
    snackbar: false,
    snackbarText: "",
    status: false,
    form: {
      name: "",
      status: ""
    },
    color_create: ""
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  async created() {
    if (this.$store.getters.getUser.color_create === "1") {
      this.color_create = this.$store.getters.getUser.color_create;
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
          this.axios.post("/api/color/create", this.form).then(response => {
            this.form.name = response.data.form.name;
          })
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Color");
      }
    },

    async reset() {
      (this.form.name = ""), (this.form.status = false);
    }
  }
};
</script>

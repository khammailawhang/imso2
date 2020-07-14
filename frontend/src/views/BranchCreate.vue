<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>
                  <h5 class="indigo--text">{{ $t("Branch.Create_Title") }}</h5>
                </v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      v-model="form.name"
                      type="text"
                      dense
                      hide-details
                      class="indigo--text"
                      color="#3d5afe"
                      autocomplete="off"
                      outlined
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("Branch.Name") }}
                          <v style="color:red" v-for="(error, name) in errors" :key="name">
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-text-field>
                    <v-checkbox
                      v-model="form.status"
                      dense
                      hide-details
                      :label="$t('District.Status')"
                      color="#3d5afe"
                      value="Active"
                    ></v-checkbox>
                  </ValidationProvider>
                </v-card-text>
                <v-card-actions class="pr-4 pb-4">
                  <v-spacer />
                  <v-btn-toggle dense>
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="save">
                      <v-icon color="white">check</v-icon>
                      {{$t("Type.Save")}}
                    </v-btn>
                    <v-btn
                      color="#B0BEC5"
                      depressed
                      :to="`/${$i18n.locale}/Branch`"
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
    form: {
      name: "",
      status: ""
    }
  }),
  async created() {
    if (this.$store.getters.getUser.branch_create === "1") {
      this.getModel();
      this.branch_create = this.$store.getters.getUser.branch_create;
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
          this.axios.post("/api/branch/create", this.form).then(response => {
            this.form.name = response.data.form.name;
          })
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Branch");
      }
    },

    reset() {
      (this.form.name = ""), (this.form.status = "");
    }
  }
};
</script>

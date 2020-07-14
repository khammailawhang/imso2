<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Branch.Edit_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      v-model="name"
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
                          <v
                            style="color:red"
                            v-for="(error, province_id) in errors"
                            :key="province_id"
                          >
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-text-field>
                    <v-checkbox
                      v-model="status"
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
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("Branch.Update")}}
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
  data() {
    return {
      name: "",
      status: "true"
    };
  },
  async created() {
    if (this.$store.getters.getUser.branch_update === "1") {
      let res = await axios.get(
        "/api/branch/branch_id/" + this.$route.query.branch_id
      );
      this.name = res.data.branchs.name || "";
      this.status = res.data.branchs.status || "";
      this.branch_update = this.$store.getters.getUser.branch_update;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$router.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate(
        this.name != false &&
          (await this.axios.put("/api/branch/update", {
            branch_id: this.$route.query.branch_id,
            name: this.name,
            status: this.status
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Branch");
      }
    }

    // async update() {
    //     let res = await this.axios.put("/api/branch/update", {
    //         branch_id: this.$route.query.branch_id,
    //         name: this.name,
    //         status: this.status
    //     });

    //     if (res) {
    //         this.$store.dispatch("setSnackbar", {
    //             showing: true,
    //             text: `ແກ້ໄຂສຳເລັດ.`
    //         });
    //         this.$router.replace("./Branch");
    //     }
    // }
  }
};
</script>

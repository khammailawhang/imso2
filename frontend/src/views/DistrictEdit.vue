<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("District.Edit_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-autocomplete
                      :items="provinces"
                      v-model="province_id"
                      item-text="name"
                      item-value="province_id"
                      required
                      outlined
                      dense
                      color="#3d5afe"
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("Province.Name") }}
                          <v
                            style="color:red"
                            v-for="(error, province_id) in errors"
                            :key="province_id"
                          >
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      v-model="name"
                      type="text"
                      autocomplete="off"
                      outlined
                      dense
                      color="#3d5afe"
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("District.Name") }}
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
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("District.Update")}}
                    </v-btn>
                    <v-btn
                      color="#B0BEC5"
                      depressed
                      :to="`/${$i18n.locale}/District`"
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
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      province_id: "",
      provinces: [],
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else if (this.$store.getters.getUser.district_update === "1") {
      let res = await axios.get(
        "/api/district/district_id/" + this.$route.query.district_id
      );
      this.name = res.data.districts.DName || "";
      this.province_id = res.data.districts.province_id || "";
      this.status = res.data.districts.status || "";
      this.getProvince();
      this.district_update = this.$store.getters.getUser.district_update;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },

  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate(
        this.province_id != false &&
          this.name != false &&
          (await this.axios.put("/api/district/update", {
            district_id: this.$route.query.district_id,
            province_id: this.province_id,
            name: this.name,
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./District");
      }
    },

    getProvince() {
      this.axios
        .get("/api/province", {
          params: {
            province_id: 1,
          },
        })
        .then((response) => {
          this.provinces = response.data.provinces;
        });
    },
  },
};
</script>
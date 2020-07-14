<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("District.Create_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-autocomplete
                      :items="provinces"
                      outlined
                      dense
                      color="#3d5afe"
                      v-model="form.province_id"
                      item-text="name"
                      item-value="province_id"
                      required
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
                      outlined
                      dense
                      color="#3d5afe"
                      v-model="form.name"
                      type="text"
                      autocomplete="off"
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
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="save">
                      <v-icon color="white">check</v-icon>
                      {{$t("District.Save")}}
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
    ValidationObserver
  },
  data: () => ({
    items: [
      // {
      //     text: "ໜ້າຫຼັກ",
      //     disabled: false,
      //     href: "/Dashboard"
      // },
      // {
      //     text: "ຕັ້ງຄ່າ",
      //     disabled: false,
      //     href: "/Village"
      // },
      // {
      //     text: "ເມືອງ",
      //     disabled: false,
      //     href: "../District"
      // },
      // {
      //     text: "ເພີ່ມເມືອງ",
      //     disabled: true
      // }
    ],
    headers: [
      // {
      //     text: "ຊື່ຍີ່ຫໍ້",
      //     align: "left",
      //     sortable: false,
      //     value: "name"
      // },
      // {
      //     text: "ສະຖານະ",
      //     value: "status"
      // },
      // {
      //     text: "ຈັດການ",
      //     value: "action",
      //     sortable: false
      // }
    ],
    snackbar: false,
    snackbarText: "",
    provinces: [],
    form: {
      name: "",
      province_id: "",
      status: ""
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
    } else if (this.$store.getters.getUser.district_create === "1") {
      this.getProvince();
      this.district_create = this.$store.getters.getUser.district_create;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async save() {
      const isValid = await this.$refs.observer.validate(
        this.form.province_id != false &&
          this.form.name != false &&
          this.axios.post("/api/district/create", this.form).then(response => {
            this.form.province_id = response.data.form.province_id;
            this.form.name = response.data.form.name;
          })
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./District");
      }
    },

    async reset() {
      (this.form.name = ""),
        (this.form.province_id = ""),
        (this.form.status = false);
    },
    getProvince() {
      this.axios.get("/api/province").then(response => {
        this.provinces = response.data.provinces;
      });
    }
  }
};
</script>

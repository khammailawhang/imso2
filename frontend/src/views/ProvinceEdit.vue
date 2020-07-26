<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Province.Edit_Title") }}</v-card-title>
                <v-card-text>
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
                          {{ $t("Province.Name") }}
                          <v style="color:red" v-for="(error, name) in errors" :key="name">
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-text-field>
                  </ValidationProvider>
                </v-card-text>
                <v-card-actions  class="pr-4 pb-4">
                  <v-spacer />
                  <v-btn-toggle dense>
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("Province.Update")}}
                    </v-btn>
                    <v-btn
                      color="#B0BEC5"
                      depressed
                      :to="`/${$i18n.locale}/Province`"
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
          href: "../Province"
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
    let res = await axios.get(
      "/api/province/province_id/" + this.$route.query.province_id
    );
    this.name = res.data.provinces.name || "";
    this.status = res.data.provinces.status || "";
    if (this.$store.getters.getUser.province_update === "1") {
      this.province_update = this.$store.getters.getUser.province_update;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  // async created() {
  //     if (!this.$store.getters.isLoggedIn) {
  //         this.$router.push("/");
  //     } else if (this.$store.getters.getUser.province_update === "1") {
  //         let res = await axios.get(
  //             "/api/province/province_id/" + this.$route.query.province_id
  //         );
  //         this.name = res.data.provinces.name || "";
  //         this.status = res.data.provinces.status || "";
  //         this.province_update = this.$store.getters.getUser.province_update;
  //         this.secretMessage = await AuthService.getSecretContent();
  //     } else {
  //         this.$store.dispatch("logout");
  //         this.$router.push("./login");
  //     }
  // },
  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate(
        this.name != false &&
          (await this.axios.put("/api/province/update", {
            province_id: this.$route.query.province_id,
            name: this.name,
            status: this.status
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Province");
      }
    }
  }
};
</script>

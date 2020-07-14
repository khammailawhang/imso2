<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("TR.Edit_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      v-model="name"
                      :rules="rules"
                      counter
                      maxlength="2"
                      type="text"
                      autocomplete="off"
                      outlined
                      dense
                      color="#3d5afe"
                    >
                      <span class="pt-2">
                        {{ $t("TR.Name") }}
                        <v style="color:red" v-for="(error, name) in errors" :key="name">
                          <b>*</b>
                        </v>
                      </span>
                    </v-text-field>
                  </ValidationProvider>
                </v-card-text>
                <v-card-actions class="pr-4 pb-4">
                  <v-spacer />
                  <v-btn-toggle dense>
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("TR.Update")}}
                    </v-btn>
                    <v-btn
                      color="#B0BEC5"
                      depressed
                      :to="`/${$i18n.locale}/Type_Register`"
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
        // {
        //   text: "ໜ້າຫຼັກ",
        //   disabled: false,
        //   href: "/Dashboard"
        // },
        // {
        //   text: "ຕັ້ງຄ່າ",
        //   disabled: false,
        //   href: "/Village"
        // },
        // {
        //   text: "ຍີ່ຫໍ້",
        //   disabled: false,
        //   href: "../Model"
        // },
        // {
        //   text: "ເພີ່ມຍີ່ຫໍ້",
        //   disabled: true
        // }
      ],
      name: "",
      trs: [],
      rules: [
        value => value.length <= 4 || "ທ່ານໃສ່ເກີນ 2 ຕົວ",
        value => (value && value.length >= 4) || "ຕ້ອງເປັນຕົວອັດສອນເທົ່ານັ້ນ",

        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "2 ຕົວກພໍດີ.";
        }
      ]
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    } else if (this.$store.getters.getUser.type_register_update === "1") {
      let res = await axios.get(
        "/api/type_register/tr_id/" + this.$route.query.tr_id
      );
      this.name = res.data.trs.name || "";
      this.type_register_update = this.$store.getters.getUser.type_register_update;
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
          (await this.axios.put("/api/type_register/update", {
            tr_id: this.$route.query.tr_id,
            name: this.name
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Type_Register");
      }
    }

    // async update() {
    //     let res = await this.axios.put("/api/type_register/update", {
    //         tr_id: this.$route.query.tr_id,
    //         name: this.name
    //     });

    //     if (res) {
    //         this.$router.replace("./Type_Register");
    //     }
    // }
  }
};
</script>

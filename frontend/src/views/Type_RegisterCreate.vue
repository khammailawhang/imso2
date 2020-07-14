<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("TR.Create_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      v-model="form.name"
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
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="save">
                      <v-icon color="white">check</v-icon>
                      {{$t("Type.Save")}}
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
  data: () => ({
    items: [
      // {
      //   text: "ໜ້າຫຼັກ",
      //   disabled: false,
      //   href: "/Dashboard"
      // },
      // {
      //   text: "ຕັ້ງຄ່າ",
      //   disabled: false,
      //   href: "../Village"
      // },
      // {
      //   text: "ປະເພດລົດ",
      //   disabled: false,
      //   href: "../Type"
      // },
      // {
      //   text: "ເພີ່ມປະເພດລົດ",
      //   disabled: true
      // }
    ],
    snackbar: false,
    snackbarText: "",
    status: false,
    form: {
      name: ""
    },
    rules: [
      value => value.length <= 4 || "ທ່ານໃສ່ເກີນ 2 ຕົວ",
      value => (value && value.length >= 4) || "ຕ້ອງເປັນຕົວອັດສອນເທົ່ານັ້ນ",

      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "2 ຕົວກພໍດີ.";
      }
    ]
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
    } else if (this.$store.getters.getUser.type_register_create === "1") {
      this.getModel();
      this.type_register_create = this.$store.getters.getUser.type_register_create;
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
          this.axios.post("/api/type_register/create", this.form).then(response => {
            this.form.name = response.data.form.name;
          })
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Type_Register");
      }
    },
    // async save() {
    //     let res = await this.axios.post("/api/type_register/create", this.form);
    //     if (res) {
    //         this.$router.replace("./Type_Register");
    //     }
    // },
    async reset() {
      this.form.name = "";
    }
  }
};
</script>

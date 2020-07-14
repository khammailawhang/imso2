<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="4" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Type.Edit_Title") }}</v-card-title>
                <v-card-text class="pt-6">
                  <v-form align="left">
                    <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                      <v-select
                        :items="models"
                        v-model="model_id"
                        item-text="name"
                        item-value="model_id"
                        required
                        outlined
                        dense
                        color="#3d5afe"
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
                      <v-text-field
                        dense
                        outlined
                        color="#3d5afe"
                        v-model="name"
                        type="text"
                        autocomplete="off"
                      >
                        <template slot="label">
                          <span class="pt-2">
                            {{ $t("Type.Update") }}
                            <v style="color:red" v-for="(error, name) in errors" :key="name">
                              <b>*</b>
                            </v>
                          </span>
                        </template>
                      </v-text-field>
                    </ValidationProvider>
                    <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                      <v-text-field
                        dense
                        outlined
                        color="#3d5afe"
                        v-model="price"
                        type="text"
                        autocomplete="off"
                      >
                        <template slot="label">
                          <span class="pt-2">
                            {{ $t("Type.feee") }}
                            <v style="color:red" v-for="(error, price) in errors" :key="price">
                              <b>*</b>
                            </v>
                          </span>
                        </template>
                      </v-text-field>
                    </ValidationProvider>
                  </v-form>
                  <v-card-actions>
                    <v-row>
                      <v-col cols="6">
                        <v-btn
                          depressed
                          block
                          color="#3d5afe"
                          class="white--text"
                          v-on="on"
                          @click="update"
                        >
                          <v-icon class="mr-2">check</v-icon>
                          {{$t("Type.Update")}}
                        </v-btn>
                      </v-col>
                      <v-col cols="6">
                        <v-btn
                          depressed
                          block
                          :to="`/${$i18n.locale}/Type`"
                          color="#B0BEC5"
                          class="white--text"
                        >{{$t("Fee.Back")}}</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card-text>
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
          text: "ຍີ່ຫໍ້",
          disabled: false,
          href: "../Model"
        },
        {
          text: "ເພີ່ມຍີ່ຫໍ້",
          disabled: true
        }
      ],

      name: "",
      price: "",
      model_id: "",

      types: [],
      models: [],
      type_update: ""
    };
  },
  // async created() {
  //     let res = await axios.get(
  //         "/api/type/type_id/" + this.$route.query.type_id
  //     );
  //     this.name = res.data.types.TName || "";
  //     this.price = res.data.types.PName || "";
  //     this.model_id = res.data.types.model_id || "";
  //     this.getModel();
  //     if (this.$store.getters.getUser.type_update === "1") {
  //         this.type_update = this.$store.getters.getUser.type_update;
  //         this.secretMessage = await AuthService.getSecretContent();
  //     } else {
  //         this.$store.dispatch("logout");
  //         this.$router.push("./login");
  //     }
  // },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    } else if (this.$store.getters.getUser.type_update === "1") {
      let res = await axios.get(
        "/api/type/type_id/" + this.$route.query.type_id
      );
      this.name = res.data.types.TName || "";
      this.price = res.data.types.PName || "";
      this.model_id = res.data.types.model_id || "";
      this.getModel();
      this.type_update = this.$store.getters.getUser.type_update;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate(
        this.model_id != false &&
          this.name != false &&
          this.price != false &&
          (await this.axios.put("/api/type/update", {
            type_id: this.$route.query.type_id,
            model_id: this.model_id,
            name: this.name,
            price: this.price
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Type");
      }
    },
    // async update() {
    //     let res = await this.axios.put("/api/type/update", {
    //         type_id: this.$route.query.type_id,
    //         model_id: this.model_id,
    //         name: this.name,
    //         price: this.price
    //     });

    //     if (res) {
    //         this.$router.replace("./Type");
    //     }
    // },
    getModel() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    }
  }
};
</script>

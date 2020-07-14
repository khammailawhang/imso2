<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Color.Edit_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      outlined
                      dense
                      color="#3d5afe"
                      v-model="name"
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
                    <v-btn color="#3d5afe" v-on="on" class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("Color.Update")}}
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
          text: "ສີລົດ",
          disabled: false,
          href: "./Color"
        },
        {
          text: "ແກ້ໄຂສີລົດ",
          disabled: true
        }
      ],
      name: "",
      detail: "",
      status: ""
    };
  },
  async created() {
    if (this.$store.getters.getUser.color_update === "1") {
      let res = await axios.get(
        "/api/color/color_id/" + this.$route.query.color_id
      );
      this.name = res.data.colors.name || "";
      this.status = res.data.colors.status || "";
      this.color_update = this.$store.getters.getUser.color_update;
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
          (await this.axios.put("/api/color/update", {
            color_id: this.$route.query.color_id,
            name: this.name
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Color");
      }
    }
  }
};
</script>

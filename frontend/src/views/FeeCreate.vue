<template>
  <div class="create">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12">
            <v-card flat color="white">
              <v-card-title>{{ $t("Fee.savepay") }}</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" xl="12" lg="12" md="12" sm="12" hidden>
                    <v-text-field
                      label="ລະຫັດອ້າງອີງ"
                      readonly
                      hidden-xl-only
                      v-model="inspection_id"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="ລະຫັດຜູ້ເຂົ້າໃຊ້ລະບົບ"
                      readonly
                      hidden-xl-only
                      v-model="users_id"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="ລະຫັດສາຂາ"
                      readonly
                      hidden-xl-only
                      v-model="branch_id"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6">
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Register.OwnerName')"
                      v-model="owner_name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('TR.Name')"
                      v-model="TRName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Register.Platcno')"
                      v-model="platc_no"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Province.Name')"
                      v-model="PName"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" dense>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Model.Name')"
                      v-model="MName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Type.Name')"
                      v-model="TName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Color.Name')"
                      v-model="CName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      disabled
                      :label="$t('Register.Price')"
                      v-model="price"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" dense>
                    <v-btn
                      block
                      large
                      color="#00E676"
                      depressed
                      class="white--text"
                      @click="save()"
                      v-if="fee_create === '1'"
                    >{{ $t("Fee.Save") }}</v-btn>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" dense>
                    <v-btn
                      block
                      large
                      color="#B0BEC5"
                      depressed
                      class="white--text"
                      @click="back(branch_id)"
                    >{{ $t("Fee.Back") }}</v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-alert
                      v-if="msg === true"
                      text
                      prominent
                      color="#00E676"
                    >{{$t("Fee.Paysuccess")}}</v-alert>
                    <v-alert
                      v-if="msg === false"
                      text
                      prominent
                      color="red"
                    >{{ $t("Fee.PayNotSuccess") }}</v-alert>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      inspection_id: "",
      price: "",
      owner_name: "",
      platc_no: "",
      register_id: "",
      status: "PaySuccess",
      registers: [],
      username: "",
      users_id: "",
      branch_id: "",
      msg: ""
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    } else if (this.$store.getters.getUser.fee_create === "1") {
      let res = await axios.get(
        "/api/inspection/inspection_id/" + this.$route.query.inspection_id
      );
      this.inspection_id = res.data.inspections.inspection_id || "";
      this.owner_name = res.data.inspections.owner_name || "";
      this.platc_no = res.data.inspections.platc_no || "";
      this.MName = res.data.inspections.MName || "";
      this.TRName = res.data.inspections.TRName || "";
      this.CName = res.data.inspections.CName || "";
      this.TName = res.data.inspections.TName || "";
      this.PName = res.data.inspections.PName || "";
      this.price = res.data.inspections.PiName || "";

      // this.getRegister();

      this.fee_create = this.$store.getters.getUser.fee_create;
      this.users_id = this.$store.getters.getUser.users_id;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("./login");
    }
  },
  methods: {
    async save() {
      if (confirm) {
        let res = await this.axios.post("/api/fee/create", {
          users_id: this.users_id || "",
          branch_id: this.branch_id || "",
          inspection_id: this.inspection_id || "",
          price: this.price || "",
          status: this.status || ""
        });
        if (res) {
          this.msg = res.data.msg;
          //   this.$router.replace("FeeList");
        }
      }
    },

    // getRegister() {
    //   this.axios.get("/api/register").then(response1 => {
    //     this.registers = response1.data.registers;
    //   });
    // },
    feeRequestTo(branch_id) {
      this.$router.push("./Fee?branch_id=" + branch_id);
    },
    back(branch_id) {
      this.$router.push("FeeList?branch_id=" + branch_id);
    }
  }
};
</script>

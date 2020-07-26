<template>
  <div class="create">
    <v-row align="center" justify="center">
      <v-col cols="12" xl="6" lg="6" md="6" sm="12">
        <v-card flat color="white">
          <v-card-title>{{ $t("Fee.Create_Title") }}</v-card-title>
          <v-card-text>
            <v-row no-gutters>
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
              </v-col>
              <v-col cols="12" xl="6" lg="6" md="6" sm="6">
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Register.OwnerName')"
                      v-model="owner_name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('TR.Name')"
                      v-model="TRName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Register.Platcno')"
                      v-model="platc_no"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Province.Name')"
                      v-model="PName"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" dense>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Model.Name')"
                      v-model="MName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Type.Name')"
                      v-model="TName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Color.Name')"
                      v-model="CName"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      disabled class="ma-1"
                      :label="$t('Register.Price')"
                      v-model="price"
                      required
                    ></v-text-field>
                  </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-checkbox
                  dense
                  class="pr-3"
                  :label="$t('Fee.Status')"
                  v-model="status"
                  value="PaySuccess"
                  color="indigo accent-4"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" xl="6" lg="6" md="6" sm="6">
                <v-btn
                  block
                  large
                  color="#00E676"
                  depressed
                  class="white--text text-capitalize"
                  @click="update()"
                  v-if="fee_update === '1'"
                >{{ $t("Fee.Save") }}</v-btn>
              </v-col>
              <v-col cols="12" xl="6" lg="6" md="6" sm="6">
                <v-btn
                  block
                  large
                  color="#B0BEC5"
                  depressed
                  class="white--text ml-2 text-capitalize"
                  @click="back(branch_id)"
                >{{ $t("Fee.Back") }}</v-btn>
              </v-col>
              <v-col cols="12">
                <v-alert
                  v-if="msg === true"
                  text
                  prominent
                  color="amber mr-2"
                >{{ $t("Fee.UpdateSuccess") }}</v-alert>
                <v-alert
                  v-if="msg === false"
                  text
                  prominent
                  color="red"
                >{{ $t("Fee.UpdateNotSuccess") }}</v-alert>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
      fee_id: "",
      price: "",
      owner_name: "",
      platc_no: "",
      register_id: "",
      status: "",
      registers: [],
      username: "",
      users_id: "",
      msg: ""
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else if (this.$store.getters.getUser.fee_update === "1") {
      let res = await axios.get("/api/fee/fee_id/" + this.$route.query.fee_id);
      this.fee_id = res.data.fees.fee_id || "";
      this.register_id = res.data.fees.register_id || "";
      this.owner_name = res.data.fees.owner_name || "";
      this.platc_no = res.data.fees.platc_no || "";
      this.MName = res.data.fees.MName || "";
      this.TName = res.data.fees.TName || "";
      this.TRName = res.data.fees.TRName || "";
      this.CName = res.data.fees.CName || "";
      this.TName = res.data.fees.TName || "";
      this.PName = res.data.fees.PName || "";
      this.price = res.data.fees.price || "";
      this.status = res.data.fees.status || "";
      this.getRegister();
      this.fee_update = this.$store.getters.getUser.fee_update;
      // this.users_id = this.$store.getters.getUser.users_id;
      this.username = this.$store.getters.getUser.username;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("../login");
    }
  },
  methods: {
    async update() {
      let res = await this.axios.put("/api/fee/update", {
        fee_id: this.$route.query.fee_id,
        // users_id: this.users_id,
        inspection_id: this.inspection_id,
        price: this.price,
        status: this.status
      });

      if (res) {
        this.msg = res.data.msg;
        // this.$router.replace("List");
      }
    },
    getRegister() {
      this.axios.get("/api/register").then(response1 => {
        this.registers = response1.data.registers;
      });
    },
    // feeRequestTo(branch_id) {
    //   this.$router.push("List?branch_id=" + branch_id);
    // },
    back(branch_id) {
      this.$router.push("FeeList?branch_id=" + branch_id);
    }
  }
};
</script>

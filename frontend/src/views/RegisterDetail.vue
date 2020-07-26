<template>
  <div class="registerdetail">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-title>
                <span style="font-size:12px">{{$t("Navbar.Dashboard")}}</span>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <span style="font-size:12px">{{$t("Navbar.Register")}}</span>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <strong style="font-size:12px">{{$t("detail.car")}}</strong>
                <v-spacer/>
                <v-tooltip bottom color="#3d5afe">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        depressed
                        :to="`/${$i18n.locale}/Register`"
                        small
                        class="text-capitalize"
                        color="#3d5afe"
                        dark
                        v-on="on"
                      >
                        <v-icon small class="mr-2">mdi-keyboard-backspace</v-icon>
                        {{ $t("Fee.Back") }}
                      </v-btn>
                    </template>
                    <span>{{ $t("Fee.Back") }}</span>
                  </v-tooltip>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-text>
                <v-row align="start" justify="center">
                  <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                    <v-row>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("TR.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="TRName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.Platcno")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="amber--text" v-text="platc_no"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.Gender")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="gender"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.OwnerName")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="owner_name"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.Phone")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="phone"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Village.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="VName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("District.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="DName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Province.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="PName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                    <v-row>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Model.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="MName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Type.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="TName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Color.Name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="CName"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.steering_wheel")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="steering_wheel"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.fuel")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="fuel"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.cylinder")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="cylinder"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="5" lg="5" md="5" sm="5" xs="5" align="left">
                        {{
                        $t("Register.cylinder_size_cc")
                        }}
                      </v-col>
                      <v-col cols="12" xl="5" lg="5" md="5" sm="5" xs="5" align="left">
                        <Strong class="indigo--text" v-text="cylinder_size_cc"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">{{ $t("Register.cc") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>

                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.engine_no")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="engine_no"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                    <v-row>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.chassis_no")
                        }}
                      </v-col>
                      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8" align="left">
                        <Strong class="indigo--text" v-text="chassis_no"></Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.width")
                        }}
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                        <Strong class="indigo--text" v-text="width"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="6" align="left">
                        <span class="text-left">{{ $t("Register.mm") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.length")
                        }}
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                        <Strong class="indigo--text" v-text="length"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">{{ $t("Register.mm") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.height")
                        }}
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                        <Strong class="indigo--text" v-text="height"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">{{ $t("Register.mm") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="5" lg="5" md="5" sm="5" xs="5" align="left">
                        {{
                        $t("Register.passenger_scats")
                        }}
                      </v-col>
                      <v-col cols="12"  xl="5" lg="5" md="5" sm="5" xs="5" align="left">
                        <Strong class="indigo--text" v-text="passenger_scats"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">
                          {{
                          $t("Register.scats")
                          }}
                        </span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.vehicle_weight")
                        }}
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                        <Strong class="indigo--text" v-text="vehicle_weight"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">{{ $t("Register.kg") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.max_loading")
                        }}
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                        <Strong class="indigo--text" v-text="max_loading"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">{{ $t("Register.kg") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4" align="left">
                        {{
                        $t("Register.total_weight")
                        }}
                      </v-col>
                      <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6" align="left">
                        <Strong class="indigo--text" v-text="total_weight"></Strong>
                      </v-col>
                      <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2" align="left">
                        <span class="text-left">{{ $t("Register.kg") }}</span>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                    </v-row>
                  </v-col>

                  <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                    <v-progress-linear color="grey darken-1" rounded value="0"></v-progress-linear>
                    <v-col cols="12">
                      <v-row>
                        <v-toolbar-title style cols="12" xl="12" lg="12" md="12" sm="12">
                          <h5 class="indigo--text">
                            {{ $t("detail.Usernamerigister") }}
                          </h5>
                        </v-toolbar-title>
                        <v-row></v-row>
                      </v-row>
                    </v-col>
                  </v-col> -->

                  <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                    <v-row> -->
                      <!-- <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left">
                        {{
                        $t("detail.name")
                        }}
                      </v-col>
                      <v-col cols="12" xl="1" lg="1" md="1" sm="1" xs="1" align="left">
                        <Strong class="indigo--text">{{ name }}</Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>
                      <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left">
                        {{
                        $t("detail.Date")
                        }}
                      </v-col>
                      <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left">
                        <Strong class="indigo--text">{{ created_at | formatDate }}</Strong>
                      </v-col>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col> -->
                      <!-- <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left">{{
                $t("detail.phone")
              }}</v-col>
                    <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left"><Strong class="indigo--text" v-text="UserPhone"></Strong></v-col>
                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>-->
                      <!-- <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left">{{
                $t("detail.branch")
              }}</v-col>
                    <v-col cols="12" xl="3" lg="3" md="3" sm="3" xs="3" align="left"><Strong class="indigo--text" v-text="BranchName"></Strong></v-col>
                    <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                        <v-divider />
                      </v-col>-->
                    <!-- </v-row>
                  </v-col> -->
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
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    villages: [],
    districts: [],
    provinces: [],
    genders: ["ນາງ", "ທ້າວ", "ອື່ນໆ"],
    steeringwheel: ["ຂວາ", "ຊ້າຍ", "ອື່ນໆ"],
    fuels: ["ແອັດຊັງ", "ກາຊວນ"],
    snackbar: false,
    snackbarText: "",
    owner_name: "",
    gender: "",
    phone: "",
    model_id: "",
    tr_id: "",
    village_id: "",

    type_id: "",
    color_id: "",
    platc_no: "",
    steering_wheel: "",
    fuel: "",
    cylinder: "",
    cylinder_size_cc: "",
    engine_no: "",
    chassis_no: "",
    width: "",
    length: "",
    height: "",
    passenger_scats: "",
    vehicle_weight: "",
    max_loading: "",
    total_weight: "",
    models: [],
    types: [],
    colors: [],
    trs: [],
    owners: [],
    province_id: [],
    district_id: [],
    getall: [],
    getalldata: [],
    registers: [],
    username: "",
    name: "",
    created_at: ""
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    },
    province_id() {
      this.getProvince();
    },
    district_id() {
      this.getDistrict();
    }
  },
  async created() {
    let res = await axios.get(
      "/api/register/register_id/" + this.$route.query.register_id
    );
    this.owner_name = res.data.registers.owner_name || "";
    this.gender = res.data.registers.gender || "";
    this.phone = res.data.registers.phone || "";
    this.PName = res.data.registers.PName || "";
    this.DName = res.data.registers.DName || "";
    this.VName = res.data.registers.VName || "";
    this.TRName = res.data.registers.TRName || "";
    this.MName = res.data.registers.MName || "";
    this.TName = res.data.registers.TName || "";
    this.CName = res.data.registers.CName || "";

    this.province_id = res.data.registers.province_id || "";
    this.district_id = res.data.registers.district_id || "";
    this.village_id = res.data.registers.village_id || "";
    this.tr_id = res.data.registers.tr_id || "";
    this.platc_no = res.data.registers.platc_no || "";
    this.model_id = res.data.registers.model_id || "";
    this.type_id = res.data.registers.type_id || "";
    this.color_id = res.data.registers.color_id || "";
    this.fuel = res.data.registers.fuel || "";
    this.steering_wheel = res.data.registers.steering_wheel || "";
    this.cylinder = res.data.registers.cylinder || "";
    this.cylinder_size_cc = res.data.registers.cylinder_size_cc || "";
    this.engine_no = res.data.registers.engine_no || "";
    this.chassis_no = res.data.registers.chassis_no || "";
    this.width = res.data.registers.width || "";
    this.length = res.data.registers.length || "";
    this.height = res.data.registers.height || "";
    this.passenger_scats = res.data.registers.passenger_scats || "";
    this.vehicle_weight = res.data.registers.vehicle_weight || "";
    this.max_loading = res.data.registers.max_loading || "";
    this.total_weight = res.data.registers.total_weight || "";
    this.created_at = res.data.registers.created_at || "";

    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    }
    this.username = this.$store.getters.getUser.username;
    this.name = this.$store.getters.getUser.name;

    // this.secretMessage = await AuthService.getSecretContent();
    // this.getVillage();
    // this.getColor();
    // this.getOwner();
    this.getDistrict();
    this.getProvince();
    this.getAllData();
    this.getTypeRegister();
    this.getModel();
    this.getType();
  },
  methods: {
    async update() {
      let res = await this.axios.put("/api/register/update", {
        register_id: this.$route.query.register_id,
        owner_name: this.owner_name,
        gender: this.gender,
        phone: this.phone,
        province_id: this.province_id,
        district_id: this.district_id,
        village_id: this.village_id,
        tr_id: this.tr_id,
        model_id: this.model_id,
        type_id: this.type_id,
        color_id: this.color_id,
        platc_no: this.platc_no,
        steering_wheel: this.steering_wheel,
        fuel: this.fuel,
        cylinder: this.cylinder,
        cylinder_size_cc: this.cylinder_size_cc,
        engine_no: this.engine_no,
        chassis_no: this.chassis_no,
        width: this.width,
        length: this.length,
        height: this.height,
        passenger_scats: this.passenger_scats,
        vehicle_weight: this.vehicle_weight,
        max_loading: this.max_loading,
        total_weight: this.total_weight,
        created_at: this.created_at
      });

      if (res) {
        this.$router.replace("../Register");
      }
    },
    getColor1(platc_no) {
      if (platc_no > 9999) return "red ";
      // else if (platc_no > 9999) return '#F9A825'
      else return "#F9A825";
    },
    getVillage() {
      this.axios.get("/api/village").then(response1 => {
        this.villages = response1.data.villages;
      });
    },
    async Rreset() {
      (this.form.full_name = ""),
        (this.form.model_id = ""),
        (this.form.type_id = ""),
        (this.form.color_id = ""),
        (this.form.owner_id = ""),
        (this.form.platc_no = ""),
        (this.form.steering_wheel = ""),
        (this.form.fuel = ""),
        (this.form.cylinder = ""),
        (this.form.cylinder_size_cc = ""),
        (this.form.engine_no = ""),
        (this.form.chassis_no = ""),
        (this.form.width = ""),
        (this.form.length = ""),
        (this.form.height = ""),
        (this.form.passenger_scats = ""),
        (this.form.vehicle_weight = ""),
        (this.form.max_loading = ""),
        (this.form.total_weight = ""),
        (this.form.created_at = ""),
        (this.form.status = false);
    },
    getTypeRegister() {
      this.axios.get("/api/type_register").then(response => {
        this.trs = response.data.trs;
      });
    },
    getColor() {
      this.axios.get("/api/color").then(response => {
        this.colors = response.data.colors;
      });
    },
    getOwner() {
      this.axios.get("/api/owner").then(response => {
        this.owners = response.data.owners;
      });
    },
    async getAllData() {
      this.axios.get("/api/province").then(response => {
        this.provinces = response.data.provinces;
      });
    },
    async getDistrict() {
      let res = await this.axios.get("/api/district/all", {
        params: {
          district_id: this.district_id
        }
      });
      this.getall = res.data.getall;
    },
    async getProvince() {
      let res = await this.axios.get("/api/district/getAll", {
        params: {
          province_id: this.province_id
        }
      });
      this.getalldata = res.data.getalldata;
    },
    getType() {
      this.axios.get("/api/type").then(response1 => {
        this.types = response1.data.types;
      });
    },
    getModel() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    }
  }
};
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>

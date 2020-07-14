<template>
  <div class="create">
    <v-content>
      <v-container>
        <v-row align="center" justify="space-around" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-app-bar
              :clipped-left="$vuetify.breakpoint.lgAndUp"
              color="white"
              flat
              dark
            >
              <v-toolbar-title style="width: 380px" class="ml-0 pr-8">
                <h5 class="indigo--text">
                  {{ $t("Inspection.Create_Title") }}
                </h5>
              </v-toolbar-title>
              <v-spacer />
              <v-tooltip bottom color="indigo">
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    color="primary"
                    @click="hidden = !hidden"
                    v-on="on"
                  >
                    {{ hidden ? "Show" : "Hide" }}
                  </v-btn>
                </template>
                <span>{{ $t("Inspection.Back") }}</span>
              </v-tooltip>
              <v-tooltip bottom color="indigo">
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="ma-2 hidden-xl-only"
                    href="Start"
                    icon
                    color="indigo"
                    dark
                    v-on="on"
                  >
                    <v-icon>mdi-undo-variant</v-icon>
                  </v-btn>
                </template>
                <span>{{ $t("Inspection.Back") }}</span>
              </v-tooltip>
            </v-app-bar>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-row no-gutters>
                  <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                    <v-row no-gutters>
                              <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                                <v-checkbox
                                  v-model="handier"
                                  hide-details
                                  :label="$t('Inspection.handier')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="am"
                                  hide-details
                                  :label="$t('Inspection.am')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="side_slip"
                                  hide-details
                                  :label="$t('Inspection.side_slip')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="pedal"
                                  hide-details
                                  :label="$t('Inspection.pedal')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="hose"
                                  hide-details
                                  :label="$t('Inspection.hose')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="reservoir_tank"
                                  hide-details
                                  :label="$t('Inspection.reservoir_tank')"
                                  color="indigo"
                                ></v-checkbox>
                              </v-col>
                              <v-col cols="12" xl="2" lg="2" md="4" sm="4">
                                <v-checkbox
                                  v-model="tire"
                                  hide-details
                                  :label="$t('Inspection.tire')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="wheel"
                                  hide-details
                                  :label="$t('Inspection.wheel')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="bolt"
                                  hide-details
                                  :label="$t('Inspection.bolt')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="chock_absorber"
                                  hide-details
                                  :label="$t('Inspection.chock_absorber')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="spring"
                                  hide-details
                                  :label="$t('Inspection.spring')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="prime_move"
                                  hide-details
                                  :label="$t('Inspection.prime_move')"
                                  color="indigo"
                                ></v-checkbox>
                              </v-col>

                              <v-col cols="12" lg="2" md="4" sm="4">
                                <v-checkbox
                                  v-model="air_cleaner"
                                  hide-details
                                  :label="$t('Inspection.air_cleaner')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="fan_belt"
                                  hide-details
                                  :label="$t('Inspection.fan_belt')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="radiator"
                                  hide-details
                                  :label="$t('Inspection.radiator')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="carburator"
                                  hide-details
                                  :label="$t('Inspection.carburator')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="injection_pump"
                                  hide-details
                                  :label="$t('Inspection.injection_pump')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="co"
                                  hide-details
                                  :label="$t('Inspection.co')"
                                  color="indigo"
                                ></v-checkbox>
                              </v-col>

                              <v-col cols="12" lg="2" md="4" sm="4">
                                <v-checkbox
                                  v-model="hc"
                                  hide-details
                                  :label="$t('Inspection.hc')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="clutch"
                                  hide-details
                                  :label="$t('Inspection.clutch')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="gear_lever"
                                  hide-details
                                  :label="$t('Inspection.gear_lever')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="drive_shaft"
                                  hide-details
                                  :label="$t('Inspection.drive_shaft')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="universal_join"
                                  hide-details
                                  :label="$t('Inspection.universal_join')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="muffler"
                                  hide-details
                                  :label="$t('Inspection.muffler')"
                                  color="indigo"
                                ></v-checkbox>
                              </v-col>

                              <v-col cols="12" lg="2" md="4" sm="4">
                                <v-checkbox
                                  v-model="db"
                                  hide-details
                                  :label="$t('Inspection.db')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="batterry"
                                  hide-details
                                  :label="$t('Inspection.batterry')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="light"
                                  hide-details
                                  :label="$t('Inspection.light')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="horn"
                                  hide-details
                                  :label="$t('Inspection.horn')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="indictor_light"
                                  hide-details
                                  :label="$t('Inspection.indictor_light')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="brake_light"
                                  hide-details
                                  :label="$t('Inspection.brake_light')"
                                  color="indigo"
                                ></v-checkbox>
                              </v-col>

                              <v-col cols="12" lg="2" md="4" sm="4">
                                <v-checkbox
                                  v-model="side_light"
                                  hide-details
                                  :label="$t('Inspection.side_light')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="rear_light"
                                  hide-details
                                  :label="$t('Inspection.rear_light')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="mirror"
                                  hide-details
                                  :label="$t('Inspection.mirror')"
                                  color="indigo"
                                ></v-checkbox>
                                <v-checkbox
                                  v-model="wiper"
                                  hide-details
                                  :label="$t('Inspection.wiper')"
                                  color="indigo"
                                ></v-checkbox>
                                 <div class="base-image-input pt-4"
                                  :style="{ 'background-image': `url(${imageData})` }"
                                  @click="chooseImage"
                                >
                                  <span v-if="!imageData" class="placeholder">
                                    <v-icon style="font-size:60px" color="white">mdi-camera-image</v-icon>
                                  </span>
                                  <input
                                    class="file-input"
                                    ref="photo"
                                    type="file"
                                    @change="onSelect"
                                    @input="onSelectFile"
                                  />
                                </div>
                              </v-col>
                            </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    xl="12"
                    lg="12"
                    md="12"
                    sm="12" 
                    v-show="!hidden"
                  >
                    <v-row>
                      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                        <h3 class="indigo--text">
                          {{ $t("Inspection.Car_Owner") }}
                        </h3>
                      </v-col>

                      <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                        <v-row>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Register.OwnerName")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="owner_name"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Register.Phone")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="phone"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Village.Name")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="VName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("District.Name")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="DName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                        <v-row>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Province.Name")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="PName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="6" lg="6" md="6" sm="6">{{
                            $t("TR.Name")
                          }}</v-col>
                          <v-col cols="12" xl="6" lg="6" md="6" sm="6"
                            ><Strong
                              class="indigo--text"
                              v-text="TRName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Register.Platcno")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="platc_no"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Model.Name")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="MName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                        <v-row>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Type.Name")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="TName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Color.Name")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="CName"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Register.engine_no")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="engine_no"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                          <v-col cols="12" xl="4" lg="4" md="4" sm="4">{{
                            $t("Register.chassis_no")
                          }}</v-col>
                          <v-col cols="12" xl="8" lg="8" md="8" sm="8"
                            ><Strong
                              class="indigo--text"
                              v-text="chassis_no"
                            ></Strong
                          ></v-col>
                          <v-col
                            cols="12"
                            xl="12"
                            lg="12"
                            md="12"
                            sm="12"
                            xs="12"
                            ><v-divider
                          /></v-col>
                        </v-row>
                      </v-col>

                      <v-col hidden cols="12" xl="2" lg="2" md="4" sm="4">
                        <v-text-field
                          disabled="register_id"
                          label="Register ID"
                          v-model="register_id"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" align="right" class="pb-12">
                <v-btn 
                fab
                bottom
                fixed
                right
                  color="indigo"
                  class="white--text"
                  @click="save"
                >
                  <v-icon>mdi-plus</v-icon>
                 </v-btn>
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
import console from "console.log";
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    hidden: true,
    imageData: null,
    fee_id: "",
    register_id: "",
    handier: true,
    am: true,
    side_slip: true,
    pedal: true,
    hose: true,
    reservoir_tank: true,
    tire: true,
    wheel: true,
    bolt: true,
    chock_absorber: true,
    spring: true,
    prime_move: true,
    air_cleaner: true,
    fan_belt: true,
    radiator: true,
    carburator: true,
    injection_pump: true,
    co: true,
    hc: true,
    db: true,
    clutch: true,
    gear_lever: true,
    drive_shaft: true,
    universal_join: true,
    muffler: true,
    batterry: true,
    light: true,
    horn: true,
    indictor_light: true,
    brake_light: true,
    side_light: true,
    rear_light: true,
    mirror: true,
    wiper: true,
    photo: "",
    status: "NotPay",
    message: "",

    prime_moves: ["ແອັດຊັງ", "ກາຊວນ"],
    snackbar: false,
    snackbarText: "",
    registers: []
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  async created() {
    let res = await axios.get(
      "/api/register/register_id/" + this.$route.query.register_id
    );
    this.register_id = res.data.registers.register_id || "";
    this.owner_name = res.data.registers.owner_name || "";
    this.phone = res.data.registers.phone || "";
    this.VName = res.data.registers.VName || "";
    this.DName = res.data.registers.DName || "";
    this.PName = res.data.registers.PName || "";
    this.TRName = res.data.registers.TRName || "";
    this.platc_no = res.data.registers.platc_no || "";
    this.MName = res.data.registers.MName || "";
    this.TName = res.data.registers.TName || "";
    this.CName = res.data.registers.CName || "";
    this.engine_no = res.data.registers.engine_no || "";
    this.chassis_no = res.data.registers.chassis_no || "";
    this.getRegister();
  },
  methods: {
    chooseImage() {
      this.$refs.photo.click();
    },
    onSelectFile() {
      const input = this.$refs.photo;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const photo = this.$refs.photo.files[0];
      this.photo = photo;
      if (!allowedTypes.includes(photo.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (photo.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async save() {
      const formData = new FormData();
      formData.append("register_id", this.register_id);
      formData.append("handier", this.handier);
      formData.append("am", this.am);
      formData.append("side_slip", this.side_slip);
      formData.append("pedal", this.pedal);
      formData.append("hose", this.hose);
      formData.append("reservoir_tank", this.reservoir_tank);
      formData.append("tire", this.tire);
      formData.append("wheel", this.wheel);
      formData.append("bolt", this.bolt);
      formData.append("chock_absorber", this.chock_absorber);
      formData.append("spring", this.spring);
      formData.append("prime_move", this.prime_move);
      formData.append("air_cleaner", this.air_cleaner);
      formData.append("fan_belt", this.fan_belt);
      formData.append("radiator", this.radiator);
      formData.append("carburator", this.carburator);
      formData.append("injection_pump", this.injection_pump);
      formData.append("co", this.co);
      formData.append("hc", this.hc);
      formData.append("clutch", this.clutch);
      formData.append("gear_lever", this.gear_lever);
      formData.append("drive_shaft", this.drive_shaft);
      formData.append("universal_join", this.universal_join);
      formData.append("muffler", this.muffler);
      formData.append("db", this.db);
      formData.append("batterry", this.batterry);
      formData.append("light", this.light);
      formData.append("horn", this.horn);
      formData.append("indictor_light", this.indictor_light);
      formData.append("brake_light", this.brake_light);
      formData.append("side_light", this.side_light);
      formData.append("rear_light", this.rear_light);
      formData.append("mirror", this.mirror);
      formData.append("wiper", this.wiper);
      formData.append("photo", this.photo);
      formData.append("status", this.status);
      try {
        await axios.post("/api/inspection1/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.message = "Uploaded!!";
        this.$router.push('../Inspection')
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
    },
    getRegister() {
      this.axios.get("/api/register").then(response1 => {
        this.registers = response1.data.registers;
      });
    }
  }
};
</script>
<style scoped>
.base-image-input {
  display: block;
  width: 110px;
  height: 80px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: indigo;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #e0e0e0;
}
.file-input {
  display: none;
}
</style>

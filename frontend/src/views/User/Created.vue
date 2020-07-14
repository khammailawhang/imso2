<template>
  <div class="create">
    <v-row align="center" justify="center">
      <v-col class="12" lg="12" md="12" sm="12">
        <v-toolbar flat color="white" dark height="60px">
          <h3 class="indigo--text">{{ $t("Inspection.Table_Title") }}</h3>
          <v-spacer />
          <v-btn
            href="List"
            color="indigo"
            rounded
            class="ma-1 white--text"
            ><v-icon class="1">mdi-format-list-bulleted</v-icon> 
            {{ $t("Inspection.AllData") }}</v-btn
          >
        </v-toolbar>
        
        <v-card-text class="py-1">
          <v-row>
            <v-col cols="12" lg="3" md="4" sm="12">
              <v-text-field
                    v-model="firstname"
                    label="First name"
                    required
                    dense
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="12">
              <v-text-field
                    v-model="firstname"
                    label="First name"
                    required
                    dense
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="12">
              <v-text-field
                    v-model="firstname"
                    label="First name"
                    required
                    dense
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="12">
              <v-text-field
                    v-model="firstname"
                    label="First name"
                    required
                    dense
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="12" lg="2" md="2" sm="2">
              <v-checkbox
                v-model="form.handier"  hide-details
                label="ພວງມາໄລ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.am"  hide-details
                label="ຄັນສົ່ງ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.side_slip"  hide-details
                label="ຕັ້ງລໍ້"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.pedal"  hide-details
                label="ຜາງຕີນ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.hose"  hide-details
                label="ທໍ່ນໍ້າມັນເບກ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.reservoir_tank"  hide-details
                label="ເຕົ້ານໍ້າມັນເບກ"
                color="indigo"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" lg="2" md="2" sm="2">
              <v-checkbox
                v-model="form.tire"  hide-details
                label="ລົມຢາງຕີນລົດ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.wheel"  hide-details
                label="ຕີນລົດ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.bolt"  hide-details
                label="ນ໋ອດລໍ້"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.chock_absorber"  hide-details
                label="ຊົກອັບ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.spring"  hide-details
                label="ໄສ້ເສືອ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.prime_move"  hide-details
                label="ນໍ້າມັນ"
                color="indigo"
              ></v-checkbox>
              <!-- <v-select
                :items="prime_moves"
                :label="$t('Register.fuel')"
                v-model="form.prime_move"
              ></v-select> -->
            </v-col>

            <v-col cols="12" lg="2" md="2" sm="2">
              <v-checkbox
                v-model="form.air_cleaner"  hide-details
                label="ໝໍ້ກອງອາກາດ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.fan_belt"  hide-details
                label="ສາຍພານ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.radiator"  hide-details
                label="ໝໍ້ນໍ້າ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.carburator"  hide-details
                label="ຄາບິວ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.injection_pump"  hide-details
                label="ປໍ້າຊີດ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.co"  hide-details
                label="CO"
                color="indigo"
              ></v-checkbox>
            </v-col>


            <v-col cols="12" lg="2" md="2" sm="2">
              <v-checkbox
                v-model="form.hc"  hide-details
                label="HC"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.clutch"  hide-details
                label="ຈານຄາດ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.gear_lever"  hide-details
                label="ເກັຍ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.drive_shaft"  hide-details
                label="ກາກດັ່ງ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.universal_join"  hide-details
                label="ກາກບາດ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.muffler"  hide-details
                label="ທໍ່ອາຍເສັຍ"
                color="indigo"
              ></v-checkbox>
            </v-col>

            <v-col cols="12" lg="2" md="2" sm="2">
              <v-checkbox
                v-model="form.db"  hide-details
                label="ລະດັບສຽງ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.batterry"  hide-details
                label="ໝໍ້ໄຟ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.light"  hide-details
                label="ໄຟຕາ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.horn"  hide-details
                label="ແກ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.indictor_light"  hide-details
                label="ໄຟລ້ຽວ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.brake_light"  hide-details
                label="ໄຟແບກ"
                color="indigo"
              ></v-checkbox>
            </v-col>

            <v-col cols="12" lg="2" md="2" sm="2">
              <v-checkbox
                v-model="form.side_light"  hide-details
                label="ໄຟຕາລີ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.rear_light"  hide-details
                label="ໄຟຖອຍ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.mirror"  hide-details
                label="ແວ່ນສ່ອງຫລັງ, ແວ່ນຂ້າງ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.wiper"  hide-details
                label="ຝອຍປັດນໍ້າຝົນ"
                color="indigo"
              ></v-checkbox>
              <v-checkbox
                v-model="form.status"  hide-details
                label="ສະຖານະ"
                color="indigo"
                value="NotPay"
                disabled
                input-value="false"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" lg="12" md="12" sm="12" align="right">
              <v-btn rounded color="grey"  class="ma-2 white--text">{{
                $t("Type.Cancel")
              }}</v-btn>
              <v-btn rounded color="indigo" class="white--text" @click="save">
                <v-icon>mdi-plus</v-icon>
                {{ $t("Type.Save") }}</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    form:{
      register_id:true,
      handier:true,
      am:true,
      side_slip:true,
      pedal:true,
      hose:true,
      reservoir_tank:true,
      tire:true,
      wheel:true,
      bolt:true,
      chock_absorber:true,
      spring:true,
      prime_move:true,
      air_cleaner:true,
      fan_belt:true,
      radiator:true,
      carburator:true,
      injection_pump:true,
      co:true,
      hc:true,
      db:true,
      clutch:true,
      gear_lever:true,
      drive_shaft:true,
      universal_join:true,
      muffler:true,
      batterry:true,
      light:true,
      horn:true,
      indictor_light:true,
      brake_light:true,
      side_light:true,
      rear_light:true,
      mirror:true,
      wiper:true,
      status:'',
    },
    prime_moves:["ແອັດຊັງ", "ກາຊວນ"],
    snackbar: false,
    snackbarText: "",
    registers:[],
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    },
  },
  created(){
    this.getRegister()
  },
  methods: {
    async save() {
      let res = await this.axios.post("/api/inspection/create",this.form);
      if (res) {
        this.$router.replace("../Inspection");
      }
    },
    getRegister(){
        this.axios.get('/api/register').then(response1 => {
          this.registers = response1.data.registers
        })
      },
    
  }
};
</script>

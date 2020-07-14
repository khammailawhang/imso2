<template>
  <div class="model">
    <v-row align="12" justify="center">
      <v-col cols="12" lg="12">
        <v-data-table :headers="headers" :items="fees" :search="search">
          <template v-slot:top>
            <v-toolbar flat color="white" height="60px">
              <h3>
                <span class="indigo--text">{{
                  $t("Fee.Pay_History")
                }}</span>
              </h3>

              <v-spacer />
              <v-text-field
                class="ma-2"
                outlined
                rounded
                dense
                color="indigo"
                v-model="search"
                :label="$t('Inspection.Search')"
                single-line
                hide-details
                autocomplete="off"
              ></v-text-field>
              <v-tooltip bottom color="indigo">
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2" icon color="indigo" dark v-on="on">
                    <download-csv :data="fees" name="Fee_List.csv">
                      <v-icon>mdi-download</v-icon>
                    </download-csv></v-btn
                  >
                </template>
                <span>{{ $t("Inspection.Export_Excel") }}</span>
              </v-tooltip>
                <v-btn rounded color="indigo" dark v-on="on" href="../Fee"
                ><v-icon>mdi-plus</v-icon> {{ $t("Inspection.Create") }}</v-btn>
            </v-toolbar>
          </template>
          <template v-slot:item.price="{ item }">
            <div v-format="'₭ #,##0.00'">{{ item.price }}</div>
          </template>
          <!-- <template v-slot:item.handier="{item}">
            <v-chip :color="getHandier(item.handier)" v-if = "item.handier" dark small>{{ item.handier }}</v-chip>
            <v-chip :color="getHandier(item.handier)" v-else dark small>Inactive</v-chip>
          </template> -->
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getStatus(item.status)"
              v-if="item.status ==='PaySuccess'"
              dark
              small
              >{{ item.status }}</v-chip
            >
            <v-chip :color="getStatus(item.status)" v-else dark small
              >Inactive</v-chip
            >
          </template>
          <template v-slot:item.handier="{item}">
            <span class="group pa-2 indigo" :color="getHandier(item.handier)" v-if = "item.handier == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getHandier(item.handier)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.am="{item}">
            <span class="group pa-2 indigo" :color="getAm(item.am)" v-if = "item.am == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getAm(item.am)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>

          <template v-slot:item.side_slip="{item}">
            <span class="group pa-2 indigo" :color="getSideSlip(item.side_slip)" v-if = "item.side_slip == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getSideSlip(item.side_slip)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>

          <template v-slot:item.pedal="{item}">
            <span class="group pa-2 indigo" :color="getPedal(item.pedal)" v-if = "item.pedal == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getPedal(item.pedal)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.hose="{item}">
            <span class="group pa-2 indigo" :color="getHose(item.hose)" v-if = "item.hose == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getHose(item.sose)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.reservoir_tank="{item}">
            <span class="group pa-2 indigo" :color="getReservoir_tank(item.reservoir_tank)" v-if = "item.reservoir_tank == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getReservoir_tank(item.reservoir_tank)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.tire="{item}">
            <span class="group pa-2 indigo" :color="getTire(item.tire)" v-if = "item.tire == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getTire(item.tire)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.wheel="{item}">
            <span class="group pa-2 indigo" :color="getWheel(item.wheel)" v-if = "item.wheel == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getWheel(item.wheel)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.bolt="{item}">
            <span class="group pa-2 indigo" :color="getBolt(item.bolt)" v-if = "item.bolt == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getBolt(item.bolt)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.chock_absorber="{item}">
            <span class="group pa-2 indigo" :color="getChock_absorber(item.chock_absorber)" v-if = "item.chock_absorber == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getChock_absorber(item.chock_absorber)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.spring="{item}">
            <span class="group pa-2 indigo" :color="getSpring(item.spring)" v-if = "item.spring == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getSpring(item.spring)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.prime_move="{item}">
            <span class="group pa-2 indigo" :color="getPrime_move(item.prime_move)" v-if = "item.prime_move == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getPrime_move(item.prime_move)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.air_cleaner="{item}">
            <span class="group pa-2 indigo" :color="getAir_cleaner(item.air_cleaner)" v-if = "item.air_cleaner == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getAir_cleaner(item.air_cleaner)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.fan_belt="{item}">
            <span class="group pa-2 indigo" :color="getFan_belt(item.fan_belt)" v-if = "item.fan_belt == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getFan_belt(item.fan_belt)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.radiator="{item}">
            <span class="group pa-2 indigo" :color="getRadiator(item.radiator)" v-if = "item.radiator == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getRadiator(item.radiator)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.carburator="{item}">
            <span class="group pa-2 indigo" :color="getCarburator(item.carburator)" v-if = "item.carburator == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getCarburator(item.carburator)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.injection_pump="{item}">
            <span class="group pa-2 indigo" :color="getInjection_pump(item.injection_pump)" v-if = "item.injection_pump == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getInjection_pump(item.injection_pump)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.co="{item}">
            <span class="group pa-2 indigo" :color="getCo(item.co)" v-if = "item.co == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getCo(item.co)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.hc="{item}">
            <span class="group pa-2 indigo" :color="getHC(item.hc)" v-if = "item.hc == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getHC(item.hc)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.clutch="{item}">
            <span class="group pa-2 indigo" :color="getClutch(item.clutch)" v-if = "item.clutch == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getClutch(item.clutch)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.gear_lever="{item}">
            <span class="group pa-2 indigo" :color="getGear_lever(item.gear_lever)" v-if = "item.gear_lever == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getGear_lever(item.gear_lever)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.drive_shaft="{item}">
            <span class="group pa-2 indigo" :color="getDrive_shaft(item.drive_shaft)" v-if = "item.drive_shaft == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getDrive_shaft(item.drive_shaft)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.universal_join="{item}">
            <span class="group pa-2 indigo" :color="getUniversal_join(item.universal_join)" v-if = "item.universal_join == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getUniversal_join(item.universal_join)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.muffler="{item}">
            <span class="group pa-2 indigo" :color="getMuffler(item.muffler)" v-if = "item.muffler == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getMuffler(item.muffler)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.db="{item}">
            <span class="group pa-2 indigo" :color="getDB(item.db)" v-if = "item.db == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getDB(item.db)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.batterry="{item}">
            <span class="group pa-2 indigo" :color="getBatterry(item.batterry)" v-if = "item.batterry == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getBatterry(item.batterry)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.light="{item}">
            <span class="group pa-2 indigo" :color="getLight(item.light)" v-if = "item.light == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getLight(item.light)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.horn="{item}">
            <span class="group pa-2 indigo" :color="getHorn(item.horn)" v-if = "item.horn == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getHorn(item.horn)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.indictor_light="{item}">
            <span class="group pa-2 indigo" :color="getBolt(item.indictor_light)" v-if = "item.indictor_light == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getBolt(item.indictor_light)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.brake_light="{item}">
            <span class="group pa-2 indigo" :color="getBrake_light(item.brake_light)" v-if = "item.brake_light == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getBrake_light(item.brake_light)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.side_light="{item}">
            <span class="group pa-2 indigo" :color="getSide_light(item.side-light)" v-if = "item.side_light == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getSide_light(item.side_light)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.rear_light="{item}">
            <span class="group pa-2 indigo" :color="getRear_light(item.rear_light)" v-if = "item.rear_light == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getRear_light(item.rear_light)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.mirror="{item}">
            <span class="group pa-2 indigo" :color="getMirror(item.mirror)" v-if = "item.mirror == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getMirror(item.mirror)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.wiper="{item}">
            <span class="group pa-2 indigo" :color="getWiper(item.wiper)" v-if = "item.wiper == 1"  >
              <v-icon medium dark>check</v-icon>
            </span>
            <span class="group pa-2 grey" :color="getWiper(item.wiper)" v-else >
              <v-icon medium dark>close</v-icon>
            </span>
          </template>
          <template v-slot:item.print="{ index, item }">
              <v-tooltip top color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn icon color="indigo" dark v-on="on">
                  <v-icon small @click="PrintItem(item.fee_id)">mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>ພິມໃບບິນ</span>
            </v-tooltip>
          </template>
          <template v-slot:item.action="{ index, item }">
            <v-tooltip top color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn icon color="indigo" dark v-on="on">
                  <v-icon small @click="detailItem(item.fee_id)">mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>ລາຍລະອຽດ</span>
            </v-tooltip>
            <v-tooltip top color="indigo" tile flat>
              <template v-slot:activator="{ on }">
                <v-btn icon color="indigo" dark v-on="on">
                  <v-icon small @click="editItem(item.fee_id)">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>{{$t("Type.Edit")}}</span>
            </v-tooltip>
            <v-tooltip top color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn icon color="indigo" dark v-on="on">
                  <v-icon @click="deleteItem(item.fee_id)">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>{{$t("Type.Delete")}}</span>
            </v-tooltip>
          </template>
          <template v-slot:no-data>
            <v-btn text color="indigo" @click="initialize">{{
              $t("Type.Reload")
            }}</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JsonCSV from "vue-json-csv";
import format from "vue-text-format";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
  data: () => ({
    search: "",
    items: [
      {
        text: "ໜ້າຫຼັກ",
        disabled: false,
        href: "/Dashboard"
      },
      {
        text: "ລົງທະບຽນ",
        disabled: true
      }
    ],
    headers: [
      // { text: "ວັນທີ", value: "created_at", width: "250px" },
      // { text: "ເພດ", value: "gender", width: "70px" },
      {
          text: 'ຊື່ົເຈົ້າຂອງລົດ', align: 'left',sortable: true,value: 'owner_name',width:'160px'
        },
        // { text: 'ປະເພດທະບຽນ', value:'TRName',width:'150px' },
        { text: 'ເລກທະບຽນ', value:'platc_no',width:'120px' },
        { text: 'ຍີ່ຫໍ້', value: 'MName',width:'100px' },
        { text: 'ປະເພດ', value: 'TName',width:'100px' },
        { text: 'ສີ', value: 'CName',width:'100px' },
        // { text: 'ພວງມາໄລ', value: 'steering_wheel',width:'120px' },
        // { text: 'ນໍ້າມັນ', value: 'fuel',width:'100px' },
        // { text: 'ຈຳນວນສູບ', value: 'cylinder',width:'100px' },
        // { text: 'ຄວາມແຮງ', value: 'cylinder_size_cc',width:'100px' },
        // { text: 'ເລກຈັກ', value: 'engine_no',width:'150px' },
        // { text: 'ເລກຖັງ', value: 'chassis_no' ,width:'150px'},
        // { text: 'ຂະໜາດລົດ(ກ້ວາງ)', value: 'width' ,width:'140px'},
        // { text: 'ຂະໜາດລົດ(ຍາວ)', value: 'length',width:'140px' },
        // { text: 'ຂະໜາດລົດ(ສູງ)', value: 'height',width:'140px' },
        // { text: 'ຈຳນວນບ່ອນນັ່ງໂດຍສານ', value: 'passenger_scats' ,width:'180px'},
        // { text: 'ນໍ້າໜັກລົດ', value: 'vehicle_weight' ,width:'120px'},
        // { text: 'ນໍ້າໜັກບັນທຸກ', value: 'max_loading' ,width:'120px'},
        // { text: 'ນໍ້າໜັກລວມ', value: 'total_weight' ,width:'120px'},

        // { text: 'ພວງມະໄລ', value: 'handier' ,width:'100px'},
        // { text: 'ຄັນສົ່ງ', value: 'am' ,width:'100px'},
        // { text: 'ຕັ້ງລໍ້', value: 'side_slip' ,width:'100px'},
        // { text: 'ຜາງຕີນ', value: 'pedal' ,width:'100px'},
        // { text: 'ທໍ່ນໍ້າມັນເບກ', value: 'hose' ,width:'120px'},
        // { text: 'ເຕົ້ານໍ້າມັນເບກ', value: 'reservoir_tank' ,width:'120px'},
        // { text: 'ລົມຢາງຕີນລົດ', value: 'tire',width:'120px' },
        // { text: 'ຕີນລົດ', value: 'wheel',width:'100px' },
        // { text: 'ນ໋ອດ', value: 'bolt',width:'100px' },
        // { text: 'ຊົກອັບ', value: 'chock_absorber',width:'100px' },
        // { text: 'ໄສ້ເສືອ', value: 'spring',width:'100px' },
        // { text: 'ນໍ້າມັນ', value: 'prime_move',width:'100px' },
        // { text: 'ທໍ່ກອງອາກາດ', value: 'air_cleaner',width:'120px' },
        // { text: 'ສາຍສະພານ', value: 'fan_belt',width:'120px' },
        // { text: 'ໝໍ້ນໍ້າ', value: 'radiator',width:'100px' },
        // { text: 'ຄາບິວ', value: 'carburator',width:'100px' },
        // { text: 'ປໍ້າຊີດ', value: 'injection_pump',width:'100px' },
        // { text: 'ກາດ (CO) Carbon Monoxide', value: 'co',width:'200px' },
        // { text: 'ປໍ້າຊີດ (HC) Hydrocabons', value: 'hc',width:'200px' },

        // { text: 'ຈານຄາດ', value: 'clutch',width:'120px' },
        // { text: 'ເກັຍ', value: 'gear_lever',width:'100px' },
        // { text: 'ກາກດັ່ງ', value: 'drive_shaft',width:'100px' },
        // { text: 'ກາກບາດ', value: 'universal_join',width:'100px' },

        // { text: 'ທໍ່ອາຍເສັຍ', value: 'muffler',width:'100px' },
        // { text: 'ລະດັບສຽງ db', value: 'db',width:'120px' },

        // { text: 'ໝໍ້ໄຟ', value: 'batterry',width:'100px' },
        // { text: 'ໄຟຕາ', value: 'light',width:'100px' },
        // { text: 'ແກ', value: 'horn',width:'100px' },
        // { text: 'ໄຟລ້ຽວ', value: 'indictor_light',width:'100px' },
        // { text: 'ໄຟເບກ', value: 'brake_light',width:'100px' },
        // { text: 'ໄຟຕາລີ', value: 'side_light',width:'100px' },
        // { text: 'ໄປຖອຍ', value: 'rear_light',width:'100px' },

        // { text: 'ແວ່ນສ່ອງຫລັງ, ແວ່ນຂ້າງ', value: 'mirror',width:'180px' },
        // { text: 'ຝອຍປັດນໍ້າຝົນ', value: 'wiper',width:'150px' },
        { text: "ລາຄາ", value: "price", width: "150px" },
        { text: "ສະຖານະ", value: "status", width: "150px" },
        { text: "ອອກບິນ", value: "print", width: "100px", align: "left" },
        // { text: "ຈັດການ", value: "action", width: "140px", align: "left" },
    ],
    fees: [],
    editedIndex: -1,
    editedItem: {
      orgaization_name: "",
      phone: "",
      mobile: "",
      email: "",
      facebookPage: "",
      website: "",
      youtube: "",
      address: "",
      logo: "",
      status: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();

  },

  methods: {
    
    getStatus(status) {
      if (status == "PaySuccess") return "success";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/fee/list").then(response => {
        this.fees = response.data.fees;
      });
    },
    PrintItem(fee_id){
        this.$router.push('Print?fee_id=' + fee_id)
    },
    async deleteItem(fee_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/fee/delete/" + fee_id).then();
        if (res) {
          this.fees.splice(index, 1);
          this.$router.replace("List");
        }
      }
    }
  }
};
</script>

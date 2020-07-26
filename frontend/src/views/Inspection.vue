<template>
  <div class="model">
    <v-row align="12" justify="center">
      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
        <v-app-bar
          :clipped-left="$vuetify.breakpoint.lgAndUp"
          color="white"
          flat
          dark
        >
          <v-icon color="indigo">mdi-xing</v-icon>
          <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
            <h5 class="indigo--text">{{$t('Inspection.New_Inspection_Title')}}</h5>
          </v-toolbar-title>
          <v-text-field
            rounded
            flat
            dense
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            v-model="search"
            :label="$t('Inspection.Search')"
            outlined
            class="grey--text hidden-sm-and-down"
          />
          <v-spacer />
          <!-- <v-tooltip bottom color="indigo">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2 hidden-xl-only" icon color="indigo" dark v-on="on">
                <download-csv :data="inspections" name="Inspection.csv">
                  <v-icon>mdi-download</v-icon>
                </download-csv></v-btn
              >
            </template>
            <span>{{ $t("Register.Export_Excel") }}</span>
          </v-tooltip> -->
          <v-tooltip bottom color="indigo">
            <template v-slot:activator="{ on }">
              <v-btn href="Inspection/List" class="ma-2" icon color="indigo" dark v-on="on">
                  <v-icon>mdi-buffer</v-icon>
                </v-btn
              >
            </template>
            <span>{{ $t("Inspection.Table_Title") }}</span>
          </v-tooltip>
          <v-tooltip bottom color="indigo" v-if="inspection_create === '1'">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2 hidden-xl-only" href="Inspection/Start" icon color="indigo" dark v-on="on">
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
            </template>
            <span>{{ $t("Register.Create") }}</span>
          </v-tooltip>
        </v-app-bar>
      </v-col>
      <v-col cols="12" lg="12">
        <v-data-table :headers="headers" :items="inspections" :search="search">
          <template v-slot:item.price="{ item }">
            <div v-format="'₭ #,##0.00'">{{ item.price }}</div>
          </template>
          <template v-slot:item.print="{ index, item }">
            <v-tooltip top color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn icon  class="ma-2" small color="indigo" dark v-on="on">
                  <v-icon small @click="PrintOneItem(item.inspection_id)">mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>{{$t('Inspection.OptionGrid')}}</span>
            </v-tooltip>
            <v-tooltip top color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn icon  class="ma-2" small color="indigo" dark v-on="on">
                  <v-icon small @click="PrintTwoItem(item.inspection_id)">mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>{{$t('Inspection.OptionTable')}}</span>
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
import AuthService from "@/services/AuthService.js";
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
      { text: "Gender", value: "gender", width: "70px" },
      {
          text: 'Owner', align: 'left',sortable: true,value: 'owner_name',width:'160px'
        },
        { text: 'Type No', value:'platc_no',width:'110px' },
        { text: 'Model', value: 'MName',width:'120px' },
        { text: 'Type', value: 'TName',width:'100px' },
        { text: 'Color', value: 'CName',width:'100px' },
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
        { text: "Action", value: "print", width: "120px", align: "right" },
        // { text: "Action", value: "action", width: "100px", align: "right" },
    ],
    inspections: [],
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

  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else if (this.$store.getters.getUser.type === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.inspection = this.$store.getters.getUser.inspection;
      this.inspection_create = this.$store.getters.getUser.inspection_create;
      this.inspection_update = this.$store.getters.getUser.inspection_update;
      this.inspection_delete = this.$store.getters.getUser.tinspection_delete;
      this.inspection_upload = this.$store.getters.getUser.inspection_upload;
      this.inspection_report = this.$store.getters.getUser.inspection_report;
      this.inspection_export = this.$store.getters.getUser.inspection_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },

  methods: {
    getStatus(status) {
      if (status == "Active") return "indigo";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/inspection/last").then(response => {
        this.inspections = response.data.inspections;
      });
    },
    PrintOneItem(inspection_id){
        this.$router.push('Inspection/Print?inspection_id=' + inspection_id)
    },
    PrintTwoItem(inspection_id){
        this.$router.push('Inspection/Print?inspection_id=' + inspection_id)
    },
    
  }
};
</script>

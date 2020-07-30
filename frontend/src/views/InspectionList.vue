<template>
  <div class="inspectionlist">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <strong>{{$t("Navbar.Inspection")}}</strong>
                <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                <span>{{$t("Inspection.History")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-4">
            <v-card flat color="white">
              <v-card-title>
               <span style="font-size:18px"> {{$t('Inspection.History')}}</span>
                <v-spacer />
                <v-btn
                    class="text-capitalize white--text"
                    color="#3D5AFE"
                    depressed
                    small
                    @click="show = !show"
                  >
                    <v-icon small color="white">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    {{$t("Inspection.Search")}}
                  </v-btn>
                <v-tooltip bottom color="#00E676">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      small
                      @click="inspectionTo(branch_id)"
                      depressed
                      color="#00E676"
                      class="ml-2 text-capitalize"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus</v-icon>{{ $t("Inspection.Create") }}
                    </v-btn>
                  </template>
                  <span>{{ $t("Inspection.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-subtitle>
                <v-expand-transition>
                    <div v-show="show">
                      <v-card-text>
                        <v-row>
                  <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                    <v-autocomplete
                      :items="inspections"
                      color="#3d5afe"
                      item-text="PName"
                      :label="$t('Province.Name')"
                      dense
                      v-model="provinceFilterValue"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                    <v-autocomplete
                      :items="inspections"
                      item-text="TRName"
                      color="#3d5afe"
                      :label="$t('Inspection.inspectonseach')"
                      dense
                      v-model="typeplactnoFilterValue"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="4" lg="4" md="4" sm="4">
                    <v-text-field
                      dense
                      class="mr-4"
                      color="#3d5afe"
                      v-model="platcnoFilterValue"
                      :label="$t('Register.Platcno')"
                      type="text"
                    ></v-text-field>
                  </v-col>
                </v-row>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                
              </v-card-subtitle>
              <v-card-text>
                <v-data-table :headers="headers" :items="inspections" :search="search">
                  <template v-slot:item.brk_m="{ item }">
                      <v-tooltip bottom color="#00E676">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          depressed
                          small
                          :color="status(item.brk_m)"
                          v-on="on"
                          v-if="
                     item.brk_m === 'true' &&
                     item.brk_s === 'true' &&
                     item.cy_c === 'true' &&
                     item.re_m === 'true' &&
                     item.v_w === 'true' &&
                     item.s_n === 'true' &&
                     item.handier === 'true' &&
                     item.am === 'true' &&
                     item.side_slip === 'true' &&
                     item.pedal === 'true'  &&

                     item.reservoir_tank === 'true' &&
                     item.hose === 'true' &&
                     item.tire === 'true' &&
                     item.wheel === 'true' &&
                     item.bolt === 'true' &&
                     item.chock_absorber === 'true' &&
                     item.spring === 'true' &&
                     item.air_cleaner === 'true' &&
                     item.fan_belt === 'true' &&
                     item.radiator === 'true' &&

                     item.carburator === 'true' &&
                     item.injection_pump === 'true' &&
                     item.co2 === 'true' &&
                     item.co === 'true' &&
                     item.hc === 'true' &&
                     item.clutch === 'true' &&
                     item.gear_lever === 'true' &&
                     item.drive_shaft === 'true' &&
                     item.universal_join === 'true' &&
                     item.muffler === 'true' &&

                     item.db === 'true' &&
                     item.batterry === 'true' &&
                     item.light === 'true' &&
                     item.horn === 'true' &&
                     item.indictor_light === 'true' &&
                     item.brake_light === 'true' &&
                     item.side_light === 'true' &&
                     item.rear_light === 'true' &&
                     item.mirror === 'true' &&
                     item.wiper === 'true'"
                        >
                          <v-icon
                            small
                            color="#fff"
                            style="font-size: 14px; font-family:Vision,Phetsarath OT;"
                            class="mr-2"
                          >ຜ່ານ</v-icon>
                        </v-btn>

                        <v-btn
                          small
                          depressed
                          :color="status(
                     item.brk_m === 'false' &&
                     item.brk_s === 'false' &&
                     item.cy_c === 'false' &&
                     item.re_m === 'false' &&
                     item.v_w === 'false' &&
                     item.s_n === 'false' &&
                     item.handier === 'false' &&
                     item.am === 'false' &&
                     item.side_slip === 'false' &&
                     item.pedal === 'false'  &&

                     item.reservoir_tank === 'false' &&
                     item.hose === 'false' &&
                     item.tire === 'false' &&
                     item.wheel === 'false'  &&
                     item.bolt === 'false' &&
                     item.chock_absorber === 'false' &&
                     item.spring === 'false' &&
                     item.air_cleaner === 'false' &&
                     item.fan_belt === 'false' &&
                     item.radiator === 'false' &&

                     item.carburator === 'false' &&
                     item.injection_pump === 'false' &&
                     item.co2 === 'false' &&
                     item.co === 'false' &&
                     item.hc === 'false' &&
                     item.clutch === 'false' &&
                     item.gear_lever === 'false' &&
                     item.drive_shaft === 'false' &&
                     item.universal_join === 'false' &&
                     item.muffler === 'false' &&

                     item.db === 'false' &&
                     item.batterry === 'false' &&
                     item.light === 'false' &&
                     item.horn === 'false' &&
                     item.indictor_light === 'false' &&
                     item.brake_light === 'false' &&
                     item.side_light === 'false' &&
                     item.rear_light === 'false' &&
                     item.mirror === 'false' &&
                     item.wiper === 'false')"
                          v-else
                        >
                          <v-icon
                            small
                            color="#fff"
                            style="font-size: 14px; font-family:Vision,Phetsarath OT;"
                          >ບໍ່ຜ່ານ</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ $t("Inspection.statusinspection") }}</span>
                    </v-tooltip>
                  </template>

                  <template v-slot:item.pint="{ item }">
                    <v-tooltip bottom color="#3d5afe">
                      <template v-slot:activator="{ on }">
                        <v-btn small depressed v-on="on" :color="getColorpint(item.pint)" @click="createPDF(item)" v-if="inspection_print_grid ==='1'">
                          <v-icon color="#fff"  small>mdi-printer</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ $t("Inspection.bill1") }}</span>
                    </v-tooltip>
                    <v-tooltip bottom color="#3d5afe">
                      <template v-slot:activator="{ on }">
                        <v-btn depressed class="ml-1" small @click="createPDF2(item)" v-on="on" :color="getColorpint(item.pint2)" v-if="inspection_print_table ==='1'">
                          <v-icon color="#fff"  small >mdi-printer</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ $t("Inspection.bill2") }}</span>
                    </v-tooltip>
                    <v-tooltip bottom color="#F9A825">
                      <template v-slot:activator="{ on }">
                        <v-btn small class="ml-1"  @click="editItem(item.inspection_id)" depressed color="#F9A825" dark v-on="on" v-if="inspection_update === '1'">
                          <v-icon small color="white">mdi-pencil</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ $t("Inspection.Update") }}</span>
                    </v-tooltip>
                  </template>
                  <template v-slot:item.platc_no="{ item }">
                    <v-btn small class="black--text ml-1" width="80px" depressed :color="getColorplatc_no(item.platc_no)">
                      {{ item.TRName }} {{ item.platc_no }}
                    </v-btn>
                  </template>
                  <template v-slot:item.created_at="{ item }">
                    <v-text>{{ item.created_at | formatDate }}</v-text>
                  </template>
                  <template v-slot:item.photo="{ item }">
                     <v-avatar color="indigo" size="45">
                       <v-img :src="item.photo" aspect-ratio="1.7" width="50px" height="50px"></v-img>
                      </v-avatar>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script src='https://unpkg.com/vue-load-image'></script><script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JsonCSV from "vue-json-csv";
import format from "vue-text-format";
import console from "console";
import jsPDF from "jspdf";
import VanillaQR from "vanillaqr";
import createPDF from "../services/createPDF/index";
import createPDF2 from "../services/createPDF2/index";
Vue.use(format);
Vue.use(VueAxios, axios);

Vue.component("downloadCsv", JsonCSV);
export default {
  data: () => ({
    show: false,
    provinceFilterValue: "",
    typeplactnoFilterValue: "",
    platcnoFilterValue: "",

    brk_m: "",
    brk_s: "",
    cy_c: "",
    re_m: "",
    v_w: "",
    s_n: "",
    handier: "",
    am: "",
    side_slip: "",
    pedal: "",

    hose: "",
    reservoir_tank: "",
    tire: "",
    wheel: "",
    bolt: "",
    chock_absorber: "",
    spring: "",
    air_cleaner: "",
    fan_belt: "",
    radiator: "",

    carburator: "",
    injection_pump: "",
    clutch: "",
    co2: "",
    co: "",
    hc: "",
    gear_lever: "",
    drive_shaft: "",
    universal_join: "",
    muffler: "",

    db: "",
    batterry: "",
    light: "",
    horn: "",
    indictor_light: "",
    brake_light: "",
    side_light: "",
    rear_light: "",
    mirror: "",
    wiper: "",
    printed:"printed",
    inspected: "",
    photo: [],
    inspections: [],
    editedIndex: -1,
    editedItem: {},
    value: "",
    QRvalue: "",
    size: 150,
    base64: "",
    file: "",
    // qrUrl: "http://localhost:8084/la/InspectionPrint?inspection_id="
  }),

  computed: {
    headers() {
      return [
          {
          text: "ຮູບພາບ",
          value: "photo",
          width: "0px"
        },
          {
          text: "ເຈົ້າຂອງລົດ",
          value: "owner_name",
          width: "0px"
        },
          {
          text: "ແຂວງ",
          value: "PName",
          width: "0px",
          filter: this.provinceFilter
        },
        {
          text: "ເລກທະບຽນ",
          value: "platc_no",
          width: "0px",
          filter: this.platcnoFilter
        },
        {
          text: "ຍີ່ຫໍ້",
          value: "MName",
          width: "0px"
        },
        {
          text: "ປະເພດລົດ",
          value: "TName",
          filter: this.typeFilter,
          width: "0px"
        },
        {
          text: "ວັນທີ່ກວດ",
          value: "created_at",
          width: "0px",
          align: "right"
        },
        {
          text: "ສະຖານະ",
          value: "brk_m",
          width: "100px",
          align: "right"
        },

        {
          text: "ຈັດການ",
          value: "pint",
          width: "200px",
          align: "right"
        },
      ];
    },

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
    } else if (this.$store.getters.getUser.home === "1") {
      let res = await axios.get(
        "/api/inspection/branch_id/" + this.$route.query.branch_id
      );
      // let res = await axios.get("/api/inspection/inspection_id/" + this.$route.query.inspection_id);
      // this.createPDFshow(),
      // this.createPDF();
      this.createPDF2();
      // this.status();

      this.inspection_id = res.data.inspections.inspection_id || "";
      this.inspection_data = res.data;

      this.brk_m = res.data.inspections.brk_m || "";
      this.brk_s = res.data.inspections.brk_s || "";
      this.cy_c = res.data.inspections.cy_c || "";
      this.v_w = res.data.inspections.v_w || "";
      this.v_m = res.data.inspections.v_m || "";
      this.s_n = res.data.inspections.s_n || "";

      this.handier = res.data.inspections.handier || "";
      this.am = res.data.inspections.am || "";
      this.side_slip = res.data.inspections.side_slip || "";
      this.pedal = res.data.inspections.pedal || "";

      this.hose = res.data.inspections.hose || "";
      this.reservoir_tank = res.data.inspections.reservoir_tank || "";
      this.tire = res.data.inspections.tire || "";
      this.wheel = res.data.inspections.wheel || "";
      this.bolt = res.data.inspections.bolt || "";
      this.chock_absorber = res.data.inspections.chock_absorber || "";
      this.spring = res.data.inspections.spring || "";
      this.air_cleaner = res.data.inspections.air_cleaner || "";
      this.fan_belt = res.data.inspections.fan_belt || "";
      this.radiator = res.data.inspections.radiator || "";

      this.carburator = res.data.inspections.carburator || "";
      this.injection_pump = res.data.inspections.injection_pump || "";
      this.co2 = res.data.inspections.co2 || "";
      this.co = res.data.inspections.co || "";
      this.hc = res.data.inspections.hc || "";
      this.clutch = res.data.inspections.clutch || "";
      this.gear_lever = res.data.inspections.gear_lever || "";
      this.drive_shaft = res.data.inspections.drive_shaft || "";
      this.universal_join = res.data.inspections.universal_join || "";
      this.muffler = res.data.inspections.muffler || "";

      this.db = res.data.inspections.db || "";
      this.batterry = res.data.inspections.batterry || "";
      this.light = res.data.inspections.light || "";
      this.horn = res.data.inspections.horn || "";
      this.indictor_light = res.data.inspections.indictor_light || "";
      this.brake_light = res.data.inspections.brake_light || "";
      this.side_light = res.data.inspections.side_light || "";
      this.rear_light = res.data.inspections.rear_light || "";
      this.mirror = res.data.inspections.mirror || "";
      this.wiper = res.data.inspections.wiper || "";

      this.co2access = res.data.inspections.co2access || "";
      this.coaccess = res.data.inspections.coaccess || "";
      this.hcaccess = res.data.inspections.hcaccess || "";

      this.LFF = res.data.inspections.LFF || "";
      this.RFF = res.data.inspections.RFF || "";
      this.SFF = res.data.inspections.SFF || "";
      this.RF = res.data.inspections.RF || "";

      this.LRM = res.data.inspections.LRM || "";
      this.RRM = res.data.inspections.RRM || "";
      this.SRM = res.data.inspections.SRM || "";
      this.RM = res.data.inspections.RM || "";

      this.LRR = res.data.inspections.LRR || "";
      this.RRR = res.data.inspections.RRR || "";
      this.SRR = res.data.inspections.SRR || "";
      this.RF = res.data.inspections.RR || "";

      this.LRF = res.data.inspections.LRF || "";
      this.RRF = res.data.inspections.RRF || "";
      this.SRF = res.data.inspections.SRF || "";
      this.PB = res.data.inspections.PB || "";
      //ດຶ່ງຂໍ້ມູນຈາກ access
      this.BSUM = res.data.inspections.BSUM || "";
      //ເບຣກມື
      this.PBSUM = res.data.inspections.PBSUM || "";

      // ເບຣກສຸກເສີນ
      this.PKSUM = res.data.inspections.PKSUM || "";

      this.inspection_update = this.$store.getters.getUser.inspection_update;
      this.inspection_print_grid = this.$store.getters.getUser.inspection_print_grid;
      this.	inspection_print_table = this.$store.getters.getUser.	inspection_print_table;
      this.home = this.$store.getters.getUser.home;
      this.username = this.$store.getters.getUser.username;
      this.branch_name = this.$store.getters.getUser.branch_name;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },

  methods: {
    // generatePDFwithQRcode() {
    //   var qr = new VanillaQR({
    //     // create QRcode
    //     url:
    //       this.qrUrl +
    //       this.inspection_id +
    //       "/no_id/" +
    //       this.engine_no +
    //       "/Date/" +
    //       this.created_at
    //   });
    //   const imageElement = qr.toImage("jpg"); // convert QRcode to image
    //   this.QRvalue = imageElement.src;
    //   const doc = new jsPDF("p", "pt", "a4");
    //   const width = doc.internal.pageSize.getWidth();
    //   const elementHTML = document.getElementById("content");
    //   const specialElementHandlers = {
    //     "#elementH": function() {
    //       return "";
    //     }
    //   };
    //   doc.fromHTML(elementHTML, 5, 5, {
    //     width: width,
    //     elementHandlers: specialElementHandlers
    //   });
    //   // doc.addImage(imageElement.src, 'JPEG', (width / 1) - 50, 250, 100, 100) // import รูปเข้าไปใน pdf
    //   // doc.save('test.pdf')
    // },
    provinceFilter(value) {
      if (!this.provinceFilterValue) {
        return 1;
      }
      return value === this.provinceFilterValue;
    },
    platcnoFilter(value) {
      if (!this.platcnoFilterValue) {
        return 1;
      }
      return value
        .toLowerCase()
        .includes(this.platcnoFilterValue.toLowerCase());
    },

    typeplatcnoFilter(value) {
      if (!this.typeplactnoFilterValue) {
        return 1;
      }
      return value === this.typeplactnoFilterValue;
    },
    //ສີປ້າຍທະບຽນ
    getColorplatc_no(platc_no) {
      if (platc_no > 9000) return "#F9A825 ";
      else return "amber";
    },
    //ສີພຶມ
    getColorpint(platc_no) {
      if (platc_no > 9000) return "#F9A825 ";
      else return "#3d5afe";
    },
    //ສີລົດ
    getColordetele(platc_no) {
      if (platc_no > 9000) return "#F9A825 ";
      else return "red";
    },

    // ສະຖານະຜ່ານກວດເຕັກນິກ ແລະ ບໍ່ຜ່ານກວດເຕັກນິກ
    status(brk_m) {
      if (brk_m === "true") return "#00E676";
      else return "red";
    },
     getprinted(printed) {
      if (printed === "printed") return "#3D5AFE";
      else return "#B0BEC5";
    },

    // initialize() {

    // },
    // QR code
    qrOneItem(inspection_id) {
      this.$router.push("Inspectionqr?inspection_id=" + inspection_id);
    },
    //ໃບບິນທີ 1

     createPDF(inspection_data) {
            window.open(inspection_data.qr)
            // this.axios
            //     .get("/api/inspection/branch_id/" + this.$route.query.branch_id)
            //     .then(response => {
            //         this.inspections = response.qr.inspections;
            //     });
            // createPDF.createPDF(inspection_data);

            // this.$router.push('file:///D:/Vuefrontend/imso/frontend/src/views/InspectionPrint.html?inspection_id=' + inspection_id )
        },
    //ໃບບິນທີສອງ
    // PrintTwoItem(inspection_id) {
    //     this.$router.push('InspectionPrint2?inspection_id=' + inspection_id)
    // },

     createPDF2(inspection_data) {
      this.axios
        .get("/api/inspection/branch_id/" + this.$route.query.branch_id)
        .then(response => {
          this.inspections = response.data.inspections;
        });
      createPDF2.createPDF2(inspection_data);
      // this.$router.push('file:///D:/Vuefrontend/imso/frontend/src/views/InspectionPrint.html?inspection_id=' + inspection_id )
    },
    detailItem(inspection_id) {
      this.$router.push("Detail?inspection_id=" + inspection_id);
    },
    //ແກ່ໄຂກວດເຕັກນິກ
    editItem(inspection_id) {
      this.$router.push("inspectionEdit?inspection_id=" + inspection_id);
    },

    async deleteItem(inspection_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios
          .delete("/api/inspection/delete/" + inspection_id)
          .then();
        if (res) {
          this.inspections.splice(index, 1);
          this.$store.dispatch("setSnackbar", {
            showing: 1,
            text: "ຂໍ້ມູນຂອງທ່າຖືກລົບເປັນທີ່ຮຽບຮ້ອຍ"
          });
          this.$router.replace("List");
        }
      }
    },
    inspectionTo(branch_id) {
      this.$router.push("./InspectionStart?branch_id=" + branch_id);
    }
  }
};
</script>

<template>
  <div>
    <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <b-col cols="12">
          <v-card flat color="white">
              <v-card-title>
                {{$t('Fee.Print')}}
                <v-spacer />
                <v-btn
                  align="right"
                  class="indigo--text mr-4"
                  small
                  depressed
                  fab
                  dark
                  color="yellow"
                  bottom
                  @click="print"
                >
                  <v-icon color="#3d5afe">mdi-printer</v-icon>
                </v-btn>
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      depressed
                      @click="feeRequestTo(branch_id)"
                      small
                      fab
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-undo-variant</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Inspection.Back") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text id="printtopaper" style="font-family:Phetsarath OT">
                 <div class="col-xs-12 col-md-10 offset-md-1 pt-5">
                <h3 align="center" class="font-weight-black" style="font-family:Phetsarath OT">{{$t("Fee.Title")}}</h3>
                <b-table-simple bordered style="font-family:Phetsarath OT">
                  <b-tbody>
                    <b-tr>
                      <b-td>{{$t("Register.OwnerName")}}</b-td>
                      <b-th v-text="owner_name"></b-th>
                    </b-tr>
                    <b-tr>
                      <b-td>{{$t("Province.Name")}}</b-td>
                      <b-th v-text="PName"></b-th>
                    </b-tr>
                    <b-tr>
                      <b-td>{{$t("Register.Platcno")}}</b-td>
                      <b-th v-text="platc_no"></b-th>
                    </b-tr>
                    <b-tr>
                      <b-td>{{$t("Model.Name")}}</b-td>
                      <b-th v-text="MName"></b-th>
                    </b-tr>
                    <b-tr>
                      <b-td>{{$t("Type.Name")}}</b-td> 
                      <b-th v-text="TName"></b-th>
                    </b-tr>
                    <b-tr>
                      <b-td>{{$t("Fee.Price")}}</b-td>
                      <b-th>
                         <div v-format="'0,000.00 LAK'">{{PiName}}</div>
                      </b-th>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
                 </div>
              </v-card-text>
            </v-card>
        </b-col>
      </v-row>
    </v-container>
    </v-content>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import jsPDF from "jspdf";
import VanillaQR from "vanillaqr";

import format from "vue-text-format";
import VueHtmlToPaper from "vue-html-to-paper";

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "//unpkg.com/bootstrap/dist/css/bootstrap.min.css",
    "//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
  ]
};

Vue.use(VueHtmlToPaper, options);

// or, using the defaults with no stylesheet
Vue.use(VueHtmlToPaper);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// eslint-disable-next-line
import autoTable from "jspdf-autotable";
Vue.use(VueHtmlToPaper, VueAxios, axios);

Vue.use(format)
export default {
  components: {
    // Qrcode
  },
  data: () => ({
    items: [
      { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      { age: 21, first_name: "Larsen", last_name: "Shaw" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 38, first_name: "Jami", last_name: "Carney" }
    ],
    fee_id: "",
    snackbar: false,
    snackbarText: "",
    owner_name: "",
    platc_no: "",
    engine_no: "",
    chassis_no: "",
    fees: [],
    created_at: "",

    value: "",
    QRvalue: "",
    size: 150,
    base64: "",
    file: "",
    qrUrl: "http://178.128.23.172/la/feeqr?fee_id="
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  async created() {
    let res = await axios.get("/api/fee/fee_id/" + this.$route.query.fee_id);
    this.fee_id = res.data.fees.fee_id || "";
    this.owner_name = res.data.fees.owner_name || "";
    this.PName = res.data.fees.PName || "";
    this.DName = res.data.fees.DName || "";
    this.VName = res.data.fees.VName || "";
    this.TRName = res.data.fees.TRName || "";
    this.MName = res.data.fees.MName || "";
    this.TName = res.data.fees.TName || "";
    this.CName = res.data.fees.CName || "";
    this.platc_no = res.data.fees.platc_no || "";
    this.PiName = res.data.fees.PiName || "";
    this.created_at = res.data.fees.created_at || "";
    this.branch_id = this.$store.getters.getUser.branch_id;
  },
  methods: {
    generatePDFwithQRcode() {
      var qr = new VanillaQR({
        // create QRcode
        url: this.qrUrl + this.fee_id
      });
      const imageElement = qr.toImage("jpg"); // convert QRcode to image
      this.QRvalue = imageElement.src;
      const doc = new jsPDF("p", "pt", "a4");
      const width = doc.internal.pageSize.getWidth();
      const elementHTML = document.getElementById("content");
      const specialElementHandlers = {
        "#elementH": function() {
          return "";
        }
      };
      doc.fromHTML(elementHTML, 5, 5, {
        width: width,
        elementHandlers: specialElementHandlers
      });
      // doc.addImage(imageElement.src, 'JPEG', (width / 1) - 50, 250, 100, 100) // import รูปเข้าไปใน pdf
      // doc.save('test.pdf')
    },
    print() {
      this.$htmlToPaper("printtopaper");
    },
    generateFromHTML() {
      const el = this.$refs.printtopaper;
      let doc = new jsPDF();
      doc.fromHTML(
        el, // HTML string or DOM elem ref.
        10, // x coord
        10
      );
      // doc.save("export.pdf");
    },
    feeRequestTo(branch_id) {
      this.$router.push("./FeeList?branch_id=" + branch_id);
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

.table,
.th,
.td {
  font-size: 16px;
  border: 0px solid black;
  border-collapse: collapse;
  padding: 15px;
}

.th .td {
  padding: 5px;
  text-align: left;
}
</style>

<template>
  <div class="model">
    <v-row align="12" justify="center">
      <v-col cols="12" lg="12">
        <v-data-table :headers="headers" :items="registers" :search="search">
          <template v-slot:top>
            <v-toolbar flat color="white" height="60px">
              <h3>
                <span class="indigo--text">{{
                  $t("Fee.Table_Title")
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
                :label="$t('Fee.Search')"
                single-line
                hide-details
                autocomplete="off"
              ></v-text-field>
              <v-tooltip bottom color="indigo">
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2" icon color="indigo" dark v-on="on">
                    <download-csv :data="registers" name="Register.csv">
                      <v-icon>mdi-download</v-icon>
                    </download-csv></v-btn
                  >
                </template>
                <span>{{ $t("Register.Export_Excel") }}</span>
              </v-tooltip>
              <v-btn rounded color="indigo" dark v-on="on" to="../Fee"
                ><v-icon>mdi-plus</v-icon> {{ $t("Fee.Create") }}</v-btn
              >
            </v-toolbar>
          </template>
          <template v-slot:item.price="{ item }">
            <div v-format="'₭ #,##0.00'">{{ item.price }}</div>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColor(item.status)"
              v-if="item.status"
              dark
              small
              >{{ item.status }}</v-chip
            >
            <v-chip :color="getColor(item.status)" v-else dark small
              >Inactive</v-chip
            >
          </template>
          <template v-slot:item.action="{ index, item }">
            <v-btn-toggle
              v-model="toggle_multiple"
              dense
              rounded
              background-color="indigo"
              dark
              multiple
            >
              <v-btn
                class="ma-1"
                small
                rounded
                outlined
                color="white"
                dark
                v-on="on"
                @click="editItem(item.fee_id)"
              >
                <v-icon small
                  >mdi-currency-usd</v-icon
                >
                {{ $t("Fee.Pay") }}
              </v-btn>
            </v-btn-toggle>
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
      { text: "ຈັດການ", value: "action", width: "190px", align: "left" },
      { text: "ເພດ", value: "gender", width: "70px" },
      {
        text: "ຊື່ົເຈົ້າຂອງລົດ",
        align: "left",
        sortable: true,
        value: "owner_name",
        width: "200px"
      },
      { text: "ເບີໂທລະສັບ", value: "phone", width: "150px" },
      { text: "ບ້ານ", value: "VName", width: "150px" },
      { text: "ເມືອງ", value: "DName", width: "150px" },
      { text: "ແຂວງ", value: "PName", width: "150px" },
      { text: "ປະເພດທະບຽນ", value: "TRName", width: "130px" },
      { text: "ເລກທະບຽນ", value: "platc_no", width: "140px" },
      { text: "ຍີ່ຫໍ້", value: "MName", width: "150px" },
      { text: "ປະເພດ", value: "TName", width: "150px" },
      { text: "ສີ", value: "CName", width: "100px" },
      { text: "ພວງມາໄລ", value: "steering_wheel", width: "100px" },
      { text: "ນໍ້າມັນ", value: "fuel", width: "100px" },
      { text: "ຈຳນວນສູບ", value: "cylinder", width: "100px" },
      { text: "ຄວາມແຮງ", value: "cylinder_size_cc", width: "100px" },
      { text: "ເລກຈັກ", value: "engine_no", width: "100px" },
      { text: "ເລກຖັງ", value: "chassis_no", width: "100px" },
      { text: "ຂະໜາດລົດ(ກ້ວາງ)", value: "width", width: "100px" },
      { text: "ຂະໜາດລົດ(ຍາວ)", value: "length", width: "100px" },
      { text: "ຂະໜາດລົດ(ສູງ)", value: "height", width: "100px" },
      { text: "ຈຳນວນບ່ອນນັ່ງໂດຍສານ", value: "passenger_scats", width: "150px" },
      { text: "ນໍ້າໜັກລົດ", value: "vehicle_weight", width: "100px" },
      { text: "ນໍ້າໜັກບັນທຸກ", value: "max_loading", width: "100px" },
      { text: "ນໍ້າໜັກລວມ", value: "total_weight", width: "100px" }
    ],
    registers: [],
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
    getColor(status) {
      if (status == "Active") return "indigo";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/register").then(response => {
        this.registers = response.data.registers;
      });
    },

    editItem(register_id) {
      this.$router.push("Fee/Create?register_id=" + register_id);
    },
    async deleteItem(register_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios
          .delete("/api/register/delete/" + register_id)
          .then();
        if (res) {
          this.registers.splice(index, 1);
          this.$router.replace("Register");
        }
      }
    }
  }
};
</script>

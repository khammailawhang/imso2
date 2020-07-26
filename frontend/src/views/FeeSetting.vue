<template>
  <div class="model">
    <v-row align="start" justify="center">
      <v-col cols="12" xl="8" lg="12" md="12" sm="12">
        <v-row>
          <v-card-title>
            <v-icon color="indigo">mdi-xing</v-icon>
            <v-toolbar-title style class="ml-1 pl-1">
              <h5 class="indigo--text">{{ $t("FeeSetting.Table_Title") }}</h5>
            </v-toolbar-title>
          </v-card-title>

          <v-spacer />
          <v-row>
            <v-col cols="12">
              <v-col>
                <v-text-field
                  flat
                  solo-inverted
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="$t('Branch.Search')"
                  hide-details
                  single-line
                ></v-text-field>
              </v-col>
            </v-col>
          </v-row>

          <v-card-title>
            <v-tooltip bottom color="indigo" v-if="model_export === '1'">
              <template v-slot:activator="{ on }">
                <v-btn small fab color="indigo mr-2" dark v-on="on">
                  <download-csv :data="feesettings" name="FeeSetting.csv">
                    <v-icon>mdi-download</v-icon>
                  </download-csv>
                </v-btn>
              </template>
              <span>{{ $t("FeeSetting.Export_Excel") }}</span>
            </v-tooltip>
            <v-tooltip bottom color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn
                  :to="`/${$i18n.locale}/FeeSetting/Create`"
                  fab
                  small
                  color="#00C853"
                  dark
                  v-on="on"
                >
                  <v-icon small>mdi-plus-thick</v-icon>
                </v-btn>
              </template>
              <span>{{ $t("FeeSetting.Create") }}</span>
            </v-tooltip>
          </v-card-title>
        </v-row>

        <v-col cols="12" lg="12">
          <v-data-table :headers="headers" :items="feesettings" :search="search">
            <template v-slot:item.price="{item}">
              <div v-format="'₭ 0,000'">{{item.price}}</div>
            </template>
            <template v-slot:item.status="{item}">
              <v-chip :color="getColor(item.status)" v-if="item.status" dark small>{{ item.status }}</v-chip>
              <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
            </template>
            <template v-slot:item.action="{ index,item }">
              <v-tooltip left color="indigo" v-if="fee_setting_update === '1'">
                <template v-slot:activator="{ on }">
                  <v-btn small fab color="indigo mr-2" dark v-on="on">
                    <v-icon small @click="editItem(item.fs_id)">mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>{{$t("FeeSetting.Edit")}}</span>
              </v-tooltip>
              <v-tooltip right color="indigo" v-if="fee_setting_delete === '1'">
                <template v-slot:activator="{ on }">
                  <v-btn fab small color="red" dark v-on="on">
                    <v-icon small @click="deleteItem(item.fs_id)">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>{{$t("FeeSetting.Delete")}}</span>
              </v-tooltip>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="indigo"
                class="white--text"
                @click="initialize"
              >{{$t('FeeSetting.Reload')}}</v-btn>
            </template>
          </v-data-table>
        </v-col>
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
        text: "ຕັ້ງຄ່າ",
        disabled: false,
        href: "/user"
      },
      {
        text: "ກຳນົດຄ່າທຳນຽມ",
        disabled: true
      }
    ],
    headers: [
      {
        text: "ຍີ່ຫໍ້ລົດ",
        value: "ModelName",
        width: "100px"
      },
      {
        text: "ປະເພດລົດ",
        value: "TypeName",
        width: "100px"
      },
      {
        text: "ລາຄາ",
        value: "price",
        width: "100px"
      },
      {
        text: "ສະຖານະ",
        value: "fsStatus",
        width: "100px"
      },
      {
        text: "ຈັດການ",
        value: "action",
        width: "60px",
        align: "right"
      }
    ],
    feesettings: [],
    editedIndex: -1,
    editedItem: {
      model_id: "",
      type_id: "",
      name: "",
      price: "",
      status: ""
    },
    defaultItem: {
      model_id: "",
      type_id: "",
      name: "",
      price: "",
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
    } else if (this.$store.getters.getUser.fee_setting === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.fee_setting = this.$store.getters.getUser.fee_setting;
      this.fee_setting_create = this.$store.getters.getUser.fee_setting_create;
      this.fee_setting_update = this.$store.getters.getUser.fee_setting_update;
      this.fee_setting_delete = this.$store.getters.getUser.fee_setting_delete;
      this.fee_setting_upload = this.$store.getters.getUser.fee_setting_upload;
      this.fee_setting_report = this.$store.getters.getUser.fee_setting_report;
      this.fee_setting_export = this.$store.getters.getUser.fee_setting_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },

  methods: {
    getColor(status) {
      if (status == "Active") return "indigo";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/feesetting").then(response => {
        this.feesettings = response.data.feesettings;
      });
    },

    editItem(fs_id) {
      this.$router.push("FeeSetting/Edit?fs_id=" + fs_id);
    },
    async deleteItem(fs_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/feesetting/delete/" + fs_id).then();
        if (res) {
          this.feesettings.splice(index, 1);
          this.$router.replace("FeeSetting");
        }
      }
    }
  }
};
</script>

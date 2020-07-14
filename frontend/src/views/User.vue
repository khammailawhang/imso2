<template>
  <div class="user">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.UserSetting")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("User.Table_Title") }}
                <v-spacer />
                <v-text-field
                  flat
                  dense
                  color="#3d5afe"
                  solo-inverted
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="$t('Branch.Search')"
                  hide-details
                  single-line
                ></v-text-field>
                <v-tooltip bottom color="#00E676">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      @click="Create(branch_id)"
                      fab
                      depressed
                      small
                      class="ml-2"
                      color="#00E676"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("User.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="users" :search="search">
                  <template v-slot:item.home="{item}">
                    <span class="group pa-2 indigo" :color="getHome(item.home)" v-if="item.home">
                      <v-icon medium dark>check</v-icon>
                    </span>
                    <span class="group pa-2 grey" :color="getHome(item.home)" v-else>
                      <v-icon medium dark>close</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.register="{item}">
                    <span
                      class="group pa-2 indigo"
                      :color="getRegister(item.register)"
                      v-if="item.register"
                    >
                      <v-icon medium dark>check</v-icon>
                    </span>
                    <span class="group pa-2 grey" :color="getRegister(item.register)" v-else>
                      <v-icon medium dark>close</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.register_create="{item}">
                    <span
                      class="group pa-2 indigo"
                      :color="getRegisterCreate(item.register_create)"
                      v-if="item.register_create"
                    >
                      <v-icon medium dark>check</v-icon>
                    </span>
                    <span
                      class="group pa-2 grey"
                      :color="getRegisterCreate(item.register_create)"
                      v-else
                    >
                      <v-icon medium dark>close</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.article_registration_edit="{ item }">
                    <v-icon
                      :color="getRegisterEdit(item.article_registration_edit)"
                      v-if="item.article_registration_edit"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getRegisterEdit(item.article_registration_edit)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_registration_delete="{ item }">
                    <v-icon
                      :color="getRegisterDelete(item.article_registration_delete)"
                      v-if="item.article_registration_delete"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getRegisterDelete(item.article_registration_delete)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_registration_detail="{ item }">
                    <v-icon
                      :color="getRegisterDetail(item.article_registration_detail)"
                      v-if="item.article_registration_detail"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getRegisterDetail(item.article_registration_detail)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_registration_export="{ item }">
                    <v-icon
                      :color="getRegisterExport(item.article_registration_export)"
                      v-if="item.article_registration_export"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getRegisterExport(item.article_registration_export)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_registration_upload="{ item }">
                    <v-icon
                      :color="getRegisterUpload(item.article_registration_upload)"
                      v-if="item.article_registration_upload"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getRegisterUpload(item.article_registration_upload)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle="{ item }">
                    <v-icon
                      :color="getInspection(item.article_inspectioin_vehicle)"
                      v-if="item.article_inspectioin_vehicle"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getInspection(item.article_inspectioin_vehicle)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle_add="{ item }">
                    <v-icon
                      :color="getInspectionAdd(item.article_inspectioin_vehicle_add)"
                      v-if="item.article_inspectioin_vehicle"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getInspectionAdd(item.article_inspectioin_vehicle_add)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle_edit="{ item }">
                    <v-icon
                      :color="getInspectionEdit(item.article_inspectioin_vehicle_edit)"
                      v-if="item.article_inspectioin_vehicle_edit"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getInspectionEdit(item.article_inspectioin_vehicle_edit)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle_delete="{ item }">
                    <v-icon
                      :color="
                getInspectionDelete(item.article_inspectioin_vehicle_delete)
              "
                      v-if="item.article_inspectioin_vehicle_delete"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="
                getInspectionDelete(item.article_inspectioin_vehicle_delete)
              "
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle_detail="{ item }">
                    <v-icon
                      :color="
                getInspectionDetail(item.article_inspectioin_vehicle_detail)
              "
                      v-if="item.article_inspectioin_vehicle_detail"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="
                getInspectionDetail(item.article_inspectioin_vehicle_detail)
              "
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle_export="{ item }">
                    <v-icon
                      :color="
                getInspectionExport(item.article_inspectioin_vehicle_export)
              "
                      v-if="item.article_inspectioin_vehicle_export"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="
                getInspectionExport(item.article_inspectioin_vehicle_export)
              "
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_inspectioin_vehicle_upload="{ item }">
                    <v-icon
                      :color="
                getInspectionUpload(item.article_inspectioin_vehicle_upload)
              "
                      v-if="item.article_inspectioin_vehicle_upload"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="
                getInspectionUpload(item.article_inspectioin_vehicle_upload)
              "
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee="{ item }">
                    <v-icon
                      :color="getFee(item.article_fee)"
                      v-if="item.article_fee"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFee(item.article_fee)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee_add="{ item }">
                    <v-icon
                      :color="getFeeAdd(item.article_fee_add)"
                      v-if="item.article_fee_add"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFeeAdd(item.article_fee_add)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee_edit="{ item }">
                    <v-icon
                      :color="getFeeEdit(item.article_fee_edit)"
                      v-if="item.article_fee_edit"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFeeEdit(item.article_fee_edit)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee_delete="{ item }">
                    <v-icon
                      :color="getFeeDelete(item.article_fee_delete)"
                      v-if="item.article_fee_delete"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFeeDelete(item.article_fee_delete)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee_detail="{ item }">
                    <v-icon
                      :color="getFeeDetail(item.article_fee_detail)"
                      v-if="item.article_fee_detail"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFeeDetail(item.article_fee_detail)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee_export="{ item }">
                    <v-icon
                      :color="getFeeExport(item.article_fee_detail)"
                      v-if="item.article_fee_export"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFeeExport(item.article_fee_export)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_fee_upload="{ item }">
                    <v-icon
                      :color="getFeeUpload(item.article_fee_upload)"
                      v-if="item.article_fee_upload"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getFeeUpload(item.article_fee_upload)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_report="{ item }">
                    <v-icon
                      :color="getReport(item.article_report)"
                      v-if="item.article_report"
                      small
                    >mdi-check</v-icon>
                    <v-icon :color="getReport(item.article_report)" v-else small>mdi-close</v-icon>
                  </template>
                  <template v-slot:item.article_report_export="{ item }">
                    <v-icon
                      :color="getReportExport(item.article_report_export)"
                      v-if="item.article_report_export"
                      small
                    >mdi-check</v-icon>
                    <v-icon
                      :color="getReportExport(item.article_report_export)"
                      v-else
                      small
                    >mdi-close</v-icon>
                  </template>
                  <template v-slot:item.status="{item}">
                    <v-chip
                      :color="getStatus(item.status)"
                      v-if="item.status == '1'"
                      small
                      class="ma-2"
                      text-color="white"
                    >
                      <!-- <v-icon left>mdi-check</v-icon> -->
                      Active
                    </v-chip>
                    <v-chip
                      :color="getStatus(item.status)"
                      v-else
                      class="ma-2"
                      small
                      text-color="white"
                    >
                      <!-- <v-icon left>mdi-close</v-icon> -->
                      Inactive
                    </v-chip>
                  </template>
                  <template v-slot:item.action="{ index, item }">
                    <v-btn-toggle>
                         <!-- <v-tooltip left color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn icon color="indigo" dark v-on="on">
                  <v-icon small @click="detailItem(item.users_id)"
                    >mdi-eye</v-icon
                  >
                </v-btn>
              </template>
              <span>{{$t('User.Detail')}}</span>
                    </v-tooltip>-->
                      <v-tooltip left color="#3d5afe" v-if="user_authorization_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn small color="#3d5afe" @click="editItem(item.users_id)" dark v-on="on">
                            <v-icon color="white" small >mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("User.Edit") }}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="user_authorization_delete ==='1'">
                        <template v-slot:activator="{ on }">
                          <v-btn small color="red"  @click="deleteItem(item.users_id)" dark v-on="on">
                            <v-icon
                              color="white"
                              small
                            >mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("User.Delete") }}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:item.registered="{ item }">
                    <v-text>{{ item.registered | formatDate }}</v-text>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="#3d5afe" depressed text class="white" @click="initialize">
                      {{
                      $t("User.Reload")
                      }}
                    </v-btn>
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

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JsonCSV from "vue-json-csv";
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);

import { mapState } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "ເພດ",
        align: "left",
        sortable: true,
        value: "gender",
        width: "0px"
      },
      {
        text: "ຊື່",
        align: "left",
        sortable: true,
        value: "UName",
        width: "0px"
      },

      {
        text: "ຊື່ຜູ້ໃຊ້ລະບົບ",
        align: "left",
        sortable: true,
        value: "username",
        width: "0px"
      },
      {
        text: "ເບີໂທ",
        align: "left",
        sortable: true,
        value: "phone",
        width: "0px"
      },
      {
        text: "ວັນທີ່ເລີມໃຊ້ງານ",
        align: "left",
        sortable: true,
        value: "registered",
        width: "0px"
      },

      {
        text: "ສາຂາ",
        value: "BName",
        width: "0px"
      },
      {
        text: "ສະຖານະ",
        value: "status",
        width: "0px"
      },
      {
        text: "ແກ້ໄຂ / ລົບ",
        value: "action",
        width: "120",
        align: "right"
      }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      address: "",
      telephone: "",
      level: "",
      email: "",
      password: "",
      status: ""
    }
  }),

  computed: {
    ...mapState(["currenUsercl"]),
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
      this.$router.push("login");
    } else if (this.$store.getters.getUser.user_authorization === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.user_authorization = this.$store.getters.getUser.user_authorization;
      this.user_authorization_create = this.$store.getters.getUser.user_authorization_create;
      this.user_authorization_update = this.$store.getters.getUser.user_authorization_update;
      this.user_authorization_delete = this.$store.getters.getUser.user_authorization_delete;
      this.user_authorization_upload = this.$store.getters.getUser.user_authorization_upload;
      this.user_authorization_report = this.$store.getters.getUser.user_authorization_report;
      this.user_authorization_export = this.$store.getters.getUser.user_authorization_export;
      this.branch_id = this.$store.getters.getUser.branch_id;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },

  methods: {
    getStatus(status) {
      if (status == "1") return "#00E676";
      else return "grey";
    },
    getHome(home) {
      if (home == "1") return "success";
      else return "grey";
    },
    getRegister(register) {
      if (register == "1") return "success";
      else return "grey";
    },
    //ສະແດງຜູ້ໃຊ້ງານ
    initialize() {
      this.axios.get("/api/user").then(response => {
        this.users = response.data.users;
      });
    },

    editItem(users_id) {
      this.$router.push("UserEdit?users_id=" + users_id);
    },
    async deleteItem(users_id, index) {
      if (confirm("ເຈົ້າຕ້ອງການລົບຂໍ້ມູນນີ້ບໍ ?")) {
        let res = this.axios.delete("/api/user/delete/" + users_id).then();
        if (res) {
          this.users.splice(index, 1);
          this.$router.replace("User");
        }
      }
    },
    Create(branch_id) {
      this.$router.push("UserCreate?branch_id=" + branch_id);
    }
  }
};
</script>

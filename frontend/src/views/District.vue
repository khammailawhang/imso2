<template>
  <div class="district">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.District")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("District.Table_Title") }}
                <v-spacer />
                <v-text-field
                  dense
                  color="#3d5afe"
                  flat
                  solo-inverted
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="$t('Branch.Search')"
                  hide-details
                  single-line
                ></v-text-field>
                <v-tooltip bottom color="indigo">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :to="`/${$i18n.locale}/DistrictCreate`"
                      fab
                      small
                      color="#3d5afe"
                      depressed
                      class="ml-2"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("District.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="districts" :search="search">
                  <template v-slot:item.status="{item}">
                    <v-chip
                      :color="getColor(item.status)"
                      v-if="item.status"
                      dark
                      small
                    >{{ item.status }}</v-chip>
                    <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
                  </template>
                  <!-- <template v-slot:item.status="{item}">
              <span class="group pa-2 green" :color="getColor(item.status)" v-if = "item.status" >
                <v-icon medium dark>check</v-icon>
              </span>
              <span class="group pa-2 red" :color="getColor(item.status)" v-else >
                <v-icon medium dark>close</v-icon>
              </span>
                  </template>-->
                  <template v-slot:item.action="{ index,item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="district_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="#3d5afe"
                            @click="editItem(item.district_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("District.Edit")}}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="tdistrict_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="red"
                            @click="deleteItem(item.district_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("District.Delete")}}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn
                      color="#3d5afe"
                      small
                      text
                      class="white--text"
                      @click="initialize"
                    >{{$t("District.Reload")}}</v-btn>
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
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "ຊື່ເມືອງ",
        align: "left",
        sortable: true,
        value: "DName",
        width: "200px",
      },
      {
        text: "ຊື່ແຂວງ",
        value: "PName",
        width: "200px",
      },
      {
        text: "ຈັດການ",
        value: "action",
        width: "80px",
        align: "right",
      },
    ],
    districts: [],
  }),
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/");
    } else if (this.$store.getters.getUser.district === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.district = this.$store.getters.getUser.district;
      this.district_create = this.$store.getters.getUser.district_create;
      this.district_update = this.$store.getters.getUser.district_update;
      this.tdistrict_delete = this.$store.getters.getUser.district_delete;
      this.district_upload = this.$store.getters.getUser.district_upload;
      this.district_report = this.$store.getters.getUser.district_report;
      this.district_export = this.$store.getters.getUser.district_export;
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
      this.axios.get("/api/district").then((response) => {
        this.districts = response.data.districts;
      });
    },

    editItem(district_id) {
      this.$router.push("DistrictEdit?district_id=" + district_id);
    },
    async deleteItem(district_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios
          .delete("/api/district/delete/" + district_id)
          .then();
        if (res) {
          this.districts.splice(index, 1);
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "ຂໍ້ມູນຂອງທ່າຖືກລົບເປັນທີ່ຮຽບຮ້ອຍ",
          });
        }
      }
    },
  },
};
</script>
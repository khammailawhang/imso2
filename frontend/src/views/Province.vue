<template>
  <div class="province">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.Province")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("Province.Table_Title") }}
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
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :to="`/${$i18n.locale}/ProvinceCreate`"
                      fab
                      small
                      depressed
                      class="ml-2"
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Province.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="provinces" :search="search">
                  <template v-slot:item.status="{item}">
                    <v-chip
                      :color="getColor(item.status)"
                      v-if="item.status"
                      dark
                      small
                    >{{ item.status }}</v-chip>
                    <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
                  </template>
                  <template v-slot:item.action="{ index,item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="province_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="#3d5afe"
                            @click="editItem(item.province_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Province.Edit")}}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="province_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="red"
                            @click="deleteItem(item.province_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Province.Delete")}}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="#3d5afe" @click="initialize">{{$t('Province.Reload')}}</v-btn>
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
    items: [
      {
        text: "ໜ້າຫຼັກ",
        disabled: false,
        href: "/Dashboard"
      },
      {
        text: "ຕັ້ງຄ່າ",
        disabled: false,
        href: "/Village"
      },
      {
        text: "ແຂວງ",
        disabled: true
      }
    ],
    headers: [
      {
        text: "ຊື່ແຂວງ",
        align: "left",
        sortable: true,
        value: "name",
        width: "300px"
      },
      { text: "ຈັດການ", value: "action", width: "60px", align: "right" }
    ],
    provinces: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      status: ""
    },
    defaultItem: {
      name: "",
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
    } else if (this.$store.getters.getUser.province === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.province = this.$store.getters.getUser.province;
      this.province_create = this.$store.getters.getUser.province_create;
      this.province_update = this.$store.getters.getUser.province_update;
      this.province_delete = this.$store.getters.getUser.province_delete;
      this.province_upload = this.$store.getters.getUser.province_upload;
      this.province_report = this.$store.getters.getUser.province_report;
      this.province_export = this.$store.getters.getUser.province_export;
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
      this.axios.get("/api/province").then(response => {
        this.provinces = response.data.provinces;
      });
    },

    editItem(province_id) {
      this.$router.push("ProvinceEdit?province_id=" + province_id);
    },
    async deleteItem(province_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios
          .delete("/api/province/delete/" + province_id)
          .then();
        if (res) {
          this.provinces.splice(index, 1);
          this.$router.replace("Province");
        }
      }
    }
  }
};
</script>
<template>
  <div class="village">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.Village")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("Village.Table_Title") }}
                <v-spacer />
                <v-text-field
                  flat
                  dense
                  color="#3d5afe"
                  solo-inverted
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="$t('Type.Search')"
                  hide-details
                  single-line
                ></v-text-field>
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :to="`/${$i18n.locale}/VillageCreate`"
                      fab
                      small
                      class="ml-2"
                      depressed
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Village.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="villages" :search="search">
                  <template v-slot:item.status="{ item }">
                    <v-chip
                      :color="getColor(item.status)"
                      v-if="item.status"
                      dark
                      small
                    >{{ item.status }}</v-chip>
                    <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
                  </template>
                  <template v-slot:item.action="{ index, item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="village_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="#3d5afe"
                            @click="editItem(item.village_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("Color.Edit") }}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="village_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="red"
                            @click="deleteItem(item.village_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("Village.Delete") }}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn
                      text
                      color="#3d5afe"
                      depressed
                      samll
                      class="white--text"
                      @click="initialize"
                    >{{ $t("Village.Reload") }}</v-btn>
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
        text: "ບ້ານ",
        disabled: true
      }
    ],
    headers: [
      {
        text: "ຊື່ບ້ານ",
        align: "left",
        sortable: true,
        value: "VName",
        width: "200px"
      },
      {
        text: "ເມືອງ",
        value: "DName",
        width: "200px"
      },
      {
        text: "ຈັດການ",
        value: "action",
        width: "60px",
        align: "right"
      }
    ],
    villages: [],
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
      this.$router.push("login");
    } else if (this.$store.getters.getUser.village === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.village = this.$store.getters.getUser.village;
      this.village_create = this.$store.getters.getUser.village_create;
      this.village_update = this.$store.getters.getUser.village_update;
      this.village_delete = this.$store.getters.getUser.village_delete;
      this.village_upload = this.$store.getters.getUser.village_upload;
      this.village_report = this.$store.getters.getUser.village_report;
      this.village_export = this.$store.getters.getUser.village_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },
  methods: {
    getColor(status) {
      if (status == "Active") return "indigo";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/village").then(response => {
        this.villages = response.data.villages;
      });
    },

    editItem(village_id) {
      this.$router.push("VillageEdit?village_id=" + village_id);
    },
    async deleteItem(village_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/village/delete/" + village_id).then();
        if (res) {
          this.villages.splice(index, 1);
          this.$router.replace("Village");
        }
      }
    }
  }
};
</script>

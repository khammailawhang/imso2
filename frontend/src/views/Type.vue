<template>
  <div class="type">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.Type")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("Type.Table_Title") }}
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
                      class="ml-2"
                      depressed
                      :to="`/${$i18n.locale}/TypeCreate`"
                      fab
                      small
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Type.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="types" :search="search">
                  <template v-slot:item.PName="{item}">
                    <div v-format="'0,000 LAK'">{{item.PName}}</div>
                  </template>
                  <template v-slot:item.action="{ index, item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="type_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            @click="editItem(item.type_id)"
                            small
                            color="#3d5afe"
                            dark
                            v-on="on"
                          >
                            <v-icon color="white" small>mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("Type.Edit") }}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="type_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn small @click="deleteItem(item.type_id)" color="red" dark v-on="on">
                            <v-icon color="white" small>mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("Type.Delete") }}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="indigo" @click="initialize">
                      {{
                      $t("Type.Reload")
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
import format from "vue-text-format";
import AuthService from "@/services/AuthService.js";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "ຊື່ປະເພດລົດ",
        align: "left",
        sortable: false,
        value: "TName",
        width: "100px"
      },
      {
        text: "ຄ່າທໍານຽນ",
        align: "left",
        sortable: false,
        value: "PName",
        width: "100px"
      },
      {
        text: "ຍິ່ຫໍ້ລົດ",
        value: "MName",
        width: "100px",
        align: "left"
      },
      {
        text: "ຈັດການ",
        value: "action",
        width: "100px",
        align: "right"
      }
    ],
    types: [],
    type: "",
    type_create: "",
    type_update: "",
    type_delete: "",
    type_upload: "",
    type_report: "",
    type_export: "",
    editedIndex: -1,
    editedItem: {
      name: "",
      model_id: ""
    },
    defaultItem: {
      name: "",
      calories: 0
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
      this.type = this.$store.getters.getUser.type;
      this.type_create = this.$store.getters.getUser.type_create;
      this.type_update = this.$store.getters.getUser.type_update;
      this.type_delete = this.$store.getters.getUser.type_delete;
      this.type_upload = this.$store.getters.getUser.type_upload;
      this.type_report = this.$store.getters.getUser.type_report;
      this.type_export = this.$store.getters.getUser.type_export;
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
      this.axios.get("/api/type").then(response => {
        this.types = response.data.types;
      });
    },

    editItem(type_id) {
      this.$router.push("TypeEdit?type_id=" + type_id);
    },
    async deleteItem(type_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/type/delete/" + type_id).then();
        if (res) {
          this.types.splice(index, 1);
          this.$router.replace("Type");
        }
      }
    }
  }
};
</script>

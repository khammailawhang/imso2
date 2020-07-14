<template>
  <div class="model">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.Model")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("Model.Table_Title") }}
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
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :to="`/${$i18n.locale}/ModelCreate`"
                      fab
                      depressed
                      class="ml-2"
                      small
                      color="#3d5afe"
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("Model.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="models" :search="search">
                  <template v-slot:item.action="{ index,item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="model_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn small color="#3d5afe"  @click="editItem(item.model_id)" dark v-on="on">
                            <v-icon color="white" small>mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Model.Edit")}}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="model_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn small  @click="deleteItem(item.model_id)" color="red" dark v-on="on">
                            <v-icon
                              color="white"
                              small
                            >mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Model.Delete")}}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="indigp" @click="initialize">{{$t('Model.Reload')}}</v-btn>
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
    // items: [
    //   {
    //     text: "ໜ້າຫຼັກ",
    //     disabled: false,
    //     href: "/Dashboard"
    //   },
    //   {
    //     text: "ຕັ້ງຄ່າ",
    //     disabled: false,
    //     href: "/Village"
    //   },
    //   {
    //     text: "ແຂວງ",
    //     disabled: true
    //   }
    // ],
    headers: [
      {
        text: "ຊື່ຍີ່ຫໍ້",
        align: "left",
        sortable: true,
        value: "name",
        width: "100px"
      },
      {
        text: "ຈັດການ",
        value: "action",
        width: "60px",
        align: "right"
      }
    ],
    models: [],
    editedIndex: -1,
    editedItem: {
      name: ""
      // status: ""
    },
    defaultItem: {
      name: ""
      // status: ""
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
    } else if (this.$store.getters.getUser.model === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.model = this.$store.getters.getUser.model;
      this.model_create = this.$store.getters.getUser.model_create;
      this.model_update = this.$store.getters.getUser.model_update;
      this.model_delete = this.$store.getters.getUser.model_delete;
      this.model_upload = this.$store.getters.getUser.model_upload;
      this.model_report = this.$store.getters.getUser.model_report;
      this.model_export = this.$store.getters.getUser.model_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },

  methods: {
    initialize() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    },

    getColor(status) {
      if (status == "Active") return "indigo";
      else return "grey";
    },

    editItem(model_id) {
      this.$router.push("modelEdit?model_id=" + model_id);
    },
    async deleteItem(model_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/model/delete/" + model_id).then();
        if (res) {
          this.models.splice(index, 1);
          this.$router.replace("model");
        }
      }
    }
  }
};
</script>

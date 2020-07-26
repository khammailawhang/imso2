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
                <span>{{$t("Navbar.Type_Register")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("TR.Table_Title") }}
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
                      class="ml-2"
                      :to="`/${$i18n.locale}/Type_RegisterCreate`"
                      fab
                      small
                      color="#3d5afe"
                      depressed
                      dark
                      v-on="on"
                    >
                      <v-icon small>mdi-plus-thick</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("TR.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="trs" :search="search">
                  <template v-slot:item.action="{ index,item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="type_register_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            depressed
                            color="#3d5afe"
                            @click="editItem(item.tr_id)"
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("TR.Edit")}}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="type_register_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            depressed
                            small
                            color="red"
                            @click="deleteItem(item.tr_id)"
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("TR.Delete")}}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="#3d5afe" @click="initialize">{{$t('TR.Reload')}}</v-btn>
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
    items: [],
    headers: [
      {
        text: "ຊື່ປະເພດລະຫັດທະບຽນ",
        align: "left",
        sortable: false,
        value: "name",
        width: "100px"
      },

      {
        text: "ຈັດການ",
        value: "action",
        width: "50px",
        align: "right"
      }
    ],
    trs: [],
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
    } else if (this.$store.getters.getUser.type_register === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.type_register = this.$store.getters.getUser.type_register;
      this.type_register_create = this.$store.getters.getUser.type_register_create;
      this.type_register_update = this.$store.getters.getUser.type_register_update;
      this.type_register_delete = this.$store.getters.getUser.type_register_delete;
      this.type_register_upload = this.$store.getters.getUser.type_register_upload;
      this.type_register_report = this.$store.getters.getUser.type_register_report;
      this.type_register_export = this.$store.getters.getUser.type_register_export;
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
      this.axios.get("/api/type_register").then(response => {
        this.trs = response.data.trs;
      });
    },

    editItem(tr_id) {
      this.$router.push("Type_RegisterEdit?tr_id=" + tr_id);
    },
    async deleteItem(tr_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios
          .delete("/api/type_register/delete/" + tr_id)
          .then();
        if (res) {
          this.trs.splice(index, 1);
          this.$router.replace("Type_Register");
        }
      }
    }
  }
};
</script>

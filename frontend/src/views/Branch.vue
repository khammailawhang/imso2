<template>
  <div class="branch">
    <v-content>
      <v-container>
        <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
            <v-card dense flat color="white">
              <v-card-text>
                <strong>{{$t("Navbar.Dashboard")}}</strong>
                <v-icon small>mdi-chevron-right</v-icon>
                <span>{{$t("Navbar.Branch")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{$t('Branch.Table_Title')}}
                <v-spacer />
                <v-text-field
                  flat
                  solo-inverted
                  dense
                  color="#3d5afe"
                  v-model="search"
                  append-icon="mdi-magnify"
                  :label="$t('Branch.Search')"
                  hide-details
                  single-line
                ></v-text-field>
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :to="`/${$i18n.locale}/BranchCreate`"
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
                  <span>{{ $t("Branch.Create") }}</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text>
                <v-data-table :headers="headers" :items="branchs" :search="search">
                  <template v-slot:item.price="{ item }">
                    <div v-format="'₭ #,##0.00'">{{ item.price }}</div>
                  </template>
                  <template v-slot:item.status="{ item }">
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
                      <v-tooltip left color="#3d5afe" v-if="branch_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="#3d5afe"
                            @click="editItem(item.branch_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Model.Edit")}}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="branch_create === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            small
                            color="red"
                            @click="deleteItem(item.branch_id)"
                            depressed
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{$t("Model.Delete")}}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="#3d5afe" @click="initialize">
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
        text: "ຊື່ສາຂາ",
        align: "left",
        sortable: true,
        value: "name",
        width: "100px"
      },
      {
        text: "ສະຖານະ",
        value: "status",
        width: "100px"
      },
      {
        text: "ຈັດການ",
        value: "action",
        width: "80px",
        align: "right"
      }
    ],
    branchs: []
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
    }
    if (this.$store.getters.getUser.branch === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.branch = this.$store.getters.getUser.branch;
      this.branch_create = this.$store.getters.getUser.branch_create;
      this.branch_update = this.$store.getters.getUser.branch_update;
      this.branch_delete = this.$store.getters.getUser.branch_delete;
      this.branch_upload = this.$store.getters.getUser.branch_upload;
      this.branch_report = this.$store.getters.getUser.branch_report;
      this.branch_export = this.$store.getters.getUser.branch_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },

  methods: {
    getColor(status) {
      if (status == "Active") return "#3d5afe";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/branch").then(response => {
        this.branchs = response.data.branchs;
      });
    },

    editItem(branch_id) {
      this.$router.push("BranchEdit?branch_id=" + branch_id);
    },
    async deleteItem(branch_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/branch/delete/" + branch_id).then();
        if (res) {
          this.branchs.splice(index, 1);
          this.$router.replace("Branch");
        }
      }
    }
  }
};
</script>

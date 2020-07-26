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
                <span>{{$t("Navbar.Color")}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
            <v-card flat color="white">
              <v-card-title>
                {{ $t("Color.Table_Title") }}
                <v-spacer />
                <v-tooltip bottom color="#3d5afe">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :to="`/${$i18n.locale}/ColorCreate`"
                      fab
                      depressed
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
                <v-data-table :headers="headers" :items="colors" :search="search">
                  <!-- <template v-slot:item.status="{ item }">
              <v-chip :color="getColor(item.status)" v-if="item.status" dark small>{{ item.status }}</v-chip>
              <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
                  </template>-->
                  <template v-slot:item.actionn="{ index, item }">
                    <v-btn-toggle>
                      <v-tooltip left color="#3d5afe" v-if="color_update === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            depressed
                            small
                            color="#3d5afe"
                            @click="editItem(item.color_id)"
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("Color.Edit") }}</span>
                      </v-tooltip>
                      <v-tooltip right color="red" v-if="color_delete === '1'">
                        <template v-slot:activator="{ on }">
                          <v-btn
                            depressed
                            @click="deleteItem(item.color_id)"
                            small
                            color="red"
                            dark
                            v-on="on"
                          >
                            <v-icon small color="white">delete</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ $t("Color.Delete") }}</span>
                      </v-tooltip>
                    </v-btn-toggle>
                  </template>
                  <template v-slot:no-data>
                    <v-btn text color="#3d5afe" depressed @click="initialize">
                      {{
                      $t("Color.Reload")
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
    //     text: "ສີລົດ",
    //     disabled: true
    //   }
    // ],
    headers: [
      {
        text: "ຊື່ສີ",
        align: "left",
        sortable: true,
        value: "name",
        width: "100px"
      },
      {
        text: "ຈັດການ",
        value: "actionn",
        width: "60px",
        align: "right"
      }
    ],
    colors: [],
    editedIndex: -1,
    editedItem: {
      name: ""
    },
    defaultItem: {
      name: ""
    },
    color: "",
    color_create: "",
    color_update: "",
    color_delete: "",
    color_upload: "",
    color_report: "",
    color_export: ""
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
    } else if (this.$store.getters.getUser.color === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.color = this.$store.getters.getUser.color;
      this.color_create = this.$store.getters.getUser.color_create;
      this.color_update = this.$store.getters.getUser.color_update;
      this.color_delete = this.$store.getters.getUser.color_delete;
      this.color_upload = this.$store.getters.getUser.color_upload;
      this.color_report = this.$store.getters.getUser.color_report;
      this.color_export = this.$store.getters.getUser.color_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    // getColor(status) {
    //   if (status == "Active") return "indigo";
    //   else return "grey";
    // },

    initialize() {
      this.axios.get("/api/color").then(response => {
        this.colors = response.data.colors;
      });
    },

    editItem(color_id) {
      this.$router.push("ColorEdit?color_id=" + color_id);
    },
    async deleteItem(color_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios.delete("/api/color/delete/" + color_id).then();
        if (res) {
          this.colors.splice(index, 1);
          this.$store.dispatch("setSnackbar", {
            showing: true,
            text: "ຂໍ້ມູນຂອງທ່າຖືກລົບເປັນທີ່ຮຽບຮ້ອຍ"
          });
          this.$router.replace("Color");
        }
      }
    }
  }
};
</script>

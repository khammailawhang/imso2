<template>
  <div class="model">
    <v-row align="12" justify="center">
      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
        <v-app-bar
          :clipped-left="$vuetify.breakpoint.lgAndUp"
          color="white"
          flat
          dark
        >
          <v-icon color="indigo">mdi-xing</v-icon>
          <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
            <h5 class="indigo--text">{{$t('Level.Table_Title')}}</h5>
          </v-toolbar-title>
          <v-text-field
            rounded
            flat
            dense
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            v-model="search"
            :label="$t('Branch.Search')"
            outlined
            class="grey--text hidden-sm-and-down"
          />
          <v-spacer />
          <v-tooltip bottom color="indigo">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2 hidden-xl-only" icon color="indigo" dark v-on="on">
                <download-csv :data="levels" name="Level.csv">
                  <v-icon>mdi-download</v-icon>
                </download-csv></v-btn
              >
            </template>
            <span>{{ $t("Branch.Export_Excel") }}</span>
          </v-tooltip>
          <v-tooltip bottom color="indigo">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2 hidden-xl-only" href="Level/Create" icon color="indigo" dark v-on="on">
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
            </template>
            <span>{{ $t("Level.Create") }}</span>
          </v-tooltip>
        </v-app-bar>
      </v-col>
      <v-col cols="12" lg="12">
        <v-data-table :headers="headers" :items="levels" :search="search">
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColor(item.status)"
              v-if="item.status"
              dark
              small
              >{{ item.status }}</v-chip
            >
            <v-chip :color="getColor(item.status)" v-else dark small
              >Inactive</v-chip
            >
          </template>
          <template v-slot:item.action="{ index,item }">
                <v-tooltip left color="indigo">
                <template v-slot:activator="{ on }">
                    <v-btn icon color="indigo" dark v-on="on">
                    <v-icon small @click="editItem(item.level_id)">mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <span>{{$t("Level.Edit")}}</span>
                </v-tooltip>
                <v-tooltip right color="indigo">
                <template v-slot:activator="{ on }">
                    <v-btn icon color="indigo" dark v-on="on">
                    <v-icon small @click="deleteItem(item.level_id)">mdi-delete</v-icon>
                    </v-btn>
                </template>
                <span>{{$t("Level.Delete")}}</span>
                </v-tooltip>
            </template>
          <template v-slot:no-data>
            <v-btn text color="indigo" @click="initialize">{{
              $t("Level.Reload")
            }}</v-btn>
          </template>
        </v-data-table>
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
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
        width: "200px"
      },
      {text:'Branch',value:'BName',width:'200px'},
      {text:'Status',value:'status',width:'100px'},
      { text: "Action", value: "action", width: "80px", align: "right" },
    ],
    levels: [],
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

  created() {
    this.initialize();
  },

  methods: {
    getColor(status) {
      if (status == "Active") return "indigo";
      else return "grey";
    },
    initialize() {
      this.axios.get("/api/level").then(response => {
        this.levels = response.data.levels;
      });
    },

    editItem(level_id) {
      this.$router.push("Level/Edit?level_id=" + level_id);
    },
    async deleteItem(level_id, index) {
      if (confirm("Ayre you sure delete ?")) {
        let res = this.axios
          .delete("/api/branch/delete/" + level_id)
          .then();
        if (res) {
          this.levels.splice(index, 1);
          this.$router.replace("Branch");
        }
      }
    }
  }
};
</script>

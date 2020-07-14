<template>
  <div class="model">
    <v-row  align="12" justify="center">
      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
        <v-app-bar
          :clipped-left="$vuetify.breakpoint.lgAndUp"
          color="white"
          flat
          dark 
        >
          <v-icon color="indigo">mdi-xing</v-icon>
          <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
            <h5 class="indigo--text">{{ $t("use.Table_Title") }}</h5>
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
          <v-tooltip bottom color="indigo" v-if="use_export === '1'">
            <template v-slot:activator="{ on }">
              <v-btn
                class="ma-2 hidden-xl-only"
                icon
                color="indigo"
                dark
                v-on="on"
              >
                <download-csv :data="uses" name="use.csv">
                  <v-icon>mdi-download</v-icon>
                </download-csv></v-btn
              >
            </template>
            <span>{{ $t("use.Export_Excel") }}</span>
          </v-tooltip>
          <v-tooltip bottom color="indigo" v-if="use_create === '1'">
            <template v-slot:activator="{ on }">
              <v-btn
                class="ma-2 hidden-xl-only"
                href="use/Create"
                icon
                color="indigo"
                dark
                v-on="on"
              >
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
            </template>
            <span>{{ $t("use.Create") }}</span>
          </v-tooltip>
        </v-app-bar>
      </v-col>
        <v-col cols="12" lg="12">
          <v-data-table
            :headers="headers"
            :items="uses"
            :search="search" 
          >
            <template v-slot:item.status="{item}">
              <v-chip :color="getColor(item.status)" v-if = "item.status" dark small>{{ item.status }}</v-chip>
              <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
            </template>
            <template v-slot:item.action="{ index,item }">
              <v-tooltip left color="indigo" v-if="use_update === '1'">
                <template v-slot:activator="{ on }">
                  <v-btn icon color="indigo" dark v-on="on">
                    <v-icon small @click="editItem(item.use_id)">mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>{{$t("use.Edit")}}</span>
              </v-tooltip>
              <v-tooltip right color="indigo" v-if="use_delete === '1'">
                <template v-slot:activator="{ on }">
                  <v-btn icon small color="indigo" v-on="on">
                    <v-icon small @click="deleteItem(item.use_id)">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>{{$t("use.Delete")}}</span>
              </v-tooltip>
            </template>
            <template v-slot:no-data>
              <v-btn text color="indigp" @click="initialize">{{$t('use.Reload')}}</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JsonCSV from 'vue-json-csv'
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios)
Vue.component('downloadCsv', JsonCSV)
export default {
  data: () => ({
      search: '',
      items: [
        {
          text: 'ໜ້າຫຼັກ',
          disabled: false,
          href: '/Dashboard',
        },
        {
          text: 'ຕັ້ງຄ່າ',
          disabled: false,
          href: '/Village',
        },
        {
          text: 'ແຂວງ',
          disabled: true,
        }
      ],
      headers: [
        {
          text: 'ຊື່ແຂວງ',
          align: 'left',
          sortable: true,
          value: 'name',
          width:'300px'
        },
        { text: 'ຈັດການ', value: 'action',width:'60px',align:'right'},
      ],
      uses: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        status: '',
      },
      defaultItem: {
        name: '',
        status: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    }
    else if (this.$store.getters.getUser.use === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.use = this.$store.getters.getUser.use;
      this.use_create = this.$store.getters.getUser.use_create;
      this.use_update = this.$store.getters.getUser.use_update;
      this.use_delete = this.$store.getters.getUser.use_delete;
      this.use_upload = this.$store.getters.getUser.use_upload;
      this.use_report = this.$store.getters.getUser.use_report;
      this.use_export = this.$store.getters.getUser.use_export;
      this.secretMessage = await AuthService.getSecretContent();
    } else {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },

    methods: {
      getColor (status) {
        if (status == 'Active') return 'indigo'
        else return 'grey'
      },
      initialize () {
        this.axios.get('/api/use').then(response => {
          this.uses = response.data.uses
        })
      },

      editItem (use_id) {
        this.$router.push('use/Edit?use_id=' + use_id)
      },
      async deleteItem (use_id,index) {
        if (confirm('Ayre you sure delete ?')) {
           let res =  this.axios.delete('/api/use/delete/' + use_id).then()
            if (res) {
                      this.uses.splice(index,1)
                      this.$router.replace('use')
              }
        }
      }
    },
}
</script>
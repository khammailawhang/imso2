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
            <h5 class="indigo--text">{{ $t("Organization.Table_Title") }}</h5>
          </v-toolbar-title>
          <v-text-field
            rounded
            flat
            dense
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            v-model="search"
            :label="$t('Organization.Search')"
            outlined
            class="grey--text hidden-sm-and-down"
          />
          <v-spacer />
          <v-tooltip bottom color="indigo" v-if="company_information_export === '1'">
            <template v-slot:activator="{ on }">
              <v-btn
                class="ma-2 hidden-xl-only"
                icon
                color="indigo"
                dark
                v-on="on"
              >
                <download-csv :data="organizations" name="Organization.csv">
                  <v-icon>mdi-download</v-icon>
                </download-csv></v-btn
              >
            </template>
            <span>{{ $t("Organization.Export_Excel") }}</span>
          </v-tooltip>
          <v-tooltip bottom color="indigo" v-if="company_information_create === '1'">
            <template v-slot:activator="{ on }">
              <v-btn
                class="ma-2 hidden-xl-only"
                href="Organization/Create"
                icon
                color="indigo"
                dark
                v-on="on"
              >
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
            </template>
            <span>{{ $t("Organization.Create") }}</span>
          </v-tooltip>
        </v-app-bar>
      </v-col>
        <v-col cols="12" lg="12">
          
        </v-col>
        <v-col cols="12" lg="12"> 
          <v-data-table
            :headers="headers"
            :items="organizations"
            :search="search"
          >
          <template v-slot:item.logo="{}">
              <v-img
                src="logo" width="80px" height="80px"
              ></v-img>
            </template>
            <template v-slot:item.status="{item}">
              <v-chip :color="getColor(item.status)" v-if = "item.status" dark small>{{ item.status }}</v-chip>
              <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
            </template>
            <template v-slot:item.action="{ index,item }">
              <v-icon small class="mr-2" @click="editItem(item.organization_id)" v-if="company_information_update === '1'">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item.organization_id)" v-if="company_information_delete === '1'">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">ວ່າງເປົ່າ</v-btn>
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
import format from 'vue-text-format';
import AuthService from "@/services/AuthService.js";
Vue.use(format);
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
          href: '/user',
        },
        {
          text: 'ຕັ້ງຄ່າອົງກອນ',
          disabled: true,
        },
      ],
      headers: [
        { text: 'LOGO', value: 'logo'},
        {
          text: 'ຊື່ົອົງກອນ',
          align: 'left',
          sortable: true,
          value: 'organization_name',
        },
        { text: 'ເລກທີ', value: 'no_organization'},
        { text: 'ເບີໂທລະສັບ', value: 'phone' },
        { text: 'ມືຖື', value: 'mobile' },
        { text: 'ອີເມວ', value: 'email' },
        { text: 'ເຟສບຸກ', value: 'facebook' },
        { text: 'ເວບໄຊ', value: 'website' },
        { text: 'ຢູທູບ', value: 'youtube' },
        { text: 'ທີ່ຢູ່', value: 'address' },
        { text: 'ສະຖານະ', value: 'status' },
        { text: 'ຈັດການ', value: 'action'},
      ],
      organizations: [],
      editedIndex: -1,
      editedItem: {
        orgaization_name: '',
        no_organization:'',
        phone:'',
        mobile:'',
        email:'',
        facebookPage:'',
        website:'',
        youtube:'',
        address:'',
        logo:'',
        status: '',
      },
      defaultItem: {
        orgaization_name: '',
        no_organization:'',
        phone:'',
        mobile:'',
        email:'',
        facebookPage:'',
        website:'',
        youtube:'',
        address:'',
        logo:'',
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
    else if (this.$store.getters.getUser.company_information === "1") {
      this.initialize();
      this.userId = this.$store.getters.getUser.users_id;
      this.company_information = this.$store.getters.getUser.company_information;
      this.company_information_create = this.$store.getters.getUser.company_information_create;
      this.company_information_update = this.$store.getters.getUser.company_information_update;
      this.company_information_delete = this.$store.getters.getUser.company_information_delete;
      this.company_information_upload = this.$store.getters.getUser.company_information_upload;
      this.company_information_report = this.$store.getters.getUser.company_information_report;
      this.company_information_export = this.$store.getters.getUser.company_information_export;
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
        this.axios.get('/api/organization').then(response => {
          this.organizations = response.data.organizations
        })
      },
      getPhoto(){
        this.axios.get('/api/organization' + this.logo).then(response => {
          this.organizations = response.data.organizations
        })
      },
      editItem (organization_id) {
        this.$router.push('Organization/Edit?organization_id=' + organization_id)
      },
      async deleteItem (organization_id,index) {
        if (confirm('Ayre you sure delete ?')) {
           let res =  this.axios.delete('/api/organization/delete/' + organization_id).then()
            if (res) {
                      this.organizations.splice(index,1)
                      this.$router.replace('Organization')
              }
        }
      }
    },
}
</script>
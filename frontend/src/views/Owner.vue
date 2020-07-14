<template>
  <div class="model">
    <v-row  align="12" justify="center">
        <v-col cols="12" lg="12">
          <v-breadcrumbs :items="items"></v-breadcrumbs>
          <!-- <h4 class="text-left py-4">ຍີ່ຫໍ້</h4> -->
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="owners"
            :search="search"
            class="elevation-2"
          >
            <template v-slot:top>
              <v-toolbar flat color="grey lighten-5" height="60px">
                <span class="font-weight-medium">ລົງທະບຽນ</span>
                <v-spacer></v-spacer>
                <v-btn icon to="Register/Print"><v-icon small>mdi-printer-wireless</v-icon></v-btn>
                <v-btn icon>
                  <download-csv
                    :data   = "owners"
                    name    = "Owner.csv">
                    <v-icon small>mdi-file-download</v-icon>
                  </download-csv>
                </v-btn>
                <v-btn icon color="gray" to="Owner/Create">
                    <v-icon small>mdi-pencil-plus</v-icon>
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:item.status="{item}">
              <v-chip :color="getColor(item.OStatus)" v-if = "item.OStatus" dark small>{{ item.OStatus }}</v-chip>
              <v-chip :color="getColor(item.OStatus)" v-else dark small>Inactive</v-chip>
            </template>
            <template v-slot:item.action="{index,item}">
              <v-icon small class="mr-2" @click="editItem(item.owner_id)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(index,item.owner_id)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
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
          text: 'ລົງທະບຽນ',
          disabled:false,
          href:"/Owner"
        },
        {
          text: 'ລົງທະບຽນເຈົ້າຂອງລົດ',
          disabled:true,
        }
      ],
      headers: [
        {
          text: 'ຊື່ົເຈົ້າຂອງລົດ',
          align: 'left',
          sortable: true,
          value: 'full_name',
        },
        { text: 'ເພດ', value: 'gender' },
        { text: 'ເບີໂທລະສັບ', value: 'phone' },
        { text: 'ບ້ານ', value: 'VName' },
        { text: 'ເມືອງ', value: 'DName' },
        { text: 'ແຂວງ', value: 'PName' },
        { text: 'ທີ່ຢູ່', value: 'address' },
        { text: 'ສະຖານະ', value: 'status' },
        { text: 'ຈັດການ', value: 'action'},
      ],
      owners: [],
      selected: [],
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

    created () {
      this.initialize()
    },

    methods: {
      getColor (OStatus) {
        if (OStatus == 'Active') return 'indigo'
        else return 'grey'
      },
      initialize () {
        this.axios.get('/api/owner').then(response => {
          this.owners = response.data.owners
        })
      },

      editItem (owner_id) {
        this.$router.push('Owner/Edit?owner_id=' + owner_id)
      },
      async deleteItem (index,owner_id) {
        if (confirm('Ayre you sure delete ?')) {
           let res =  this.axios.delete('/api/owner/delete/' + owner_id).then()
            if (res) {
                this.owners.splice(index,1)
                this.$router.replace('Owner')
              }
        }
      },
    },
}
</script>
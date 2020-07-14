<template>
  <div class="model">
    <v-row  align="12" justify="center">
        <h2>Test: <b v-text="SDvalue" item-text="SDvalue" >OK</b></h2>
        <v-col cols="12" lg="12">
          <v-breadcrumbs :items="items"></v-breadcrumbs>
          <!-- <h4 class="text-left py-4">ຍີ່ຫໍ້</h4> -->
          <v-spacer/>
          <v-data-table
            :headers="headers"
            :items="cardatas"
            :search="search" 
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="grey lighten-5" height="60px">
                <span class="font-weight-midium">ສີລົດ</span>
                <v-spacer></v-spacer>
                <v-btn icon to="Color/Print"><v-icon small>mdi-printer-wireless</v-icon></v-btn>
                <v-btn icon>
                  <download-csv
                    :data   = "colors"
                    name    = "Color.csv">
                    <v-icon small>mdi-file-download</v-icon>
                
                  </download-csv>
                </v-btn>
                <v-btn icon color="gray" to="Color/Create">
                    <v-icon small>mdi-pencil-plus</v-icon>
                  </v-btn>
              </v-toolbar>
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

Vue.use(VueAxios, axios)
Vue.component('downloadCsv', JsonCSV)
export default {
  data: () => ({
      search: '',
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: true,
          value: 'AcceptNo',
        },
        { text: 'Title', value: 'ABS__Stt' },
        { text: 'Title', value: 'ABS__End' },
        { text: 'Title', value: 'Bk_Check' },
        { text: 'Title', value: 'Sp_Check' },
        { text: 'Title', value: 'Taxi_CHK' },
        { text: 'Title', value: 'Ht_Check' },
        { text: 'Title', value: 'Smok_CHK' },
        { text: 'Title', value: 'SlipV_FF' },
        { text: 'Title', value: 'SlipIOFF' },
        { text: 'Title', value: 'SlipFFPK' },
        { text: 'Title', value: 'SlipV_RR' },
        { text: 'Brake', value: 'Brk_L_FR' },
        { text: 'Brake', value: 'Brk_R_FR' },
        { text: 'Brake', value: 'BSum__FR' },
        { text: 'Action', value: 'action'},
      ],
      SDvalue:'',
      cardatas: [],
      standards: [],
    }),

    created () {
      this.getData()
      this.getCarData()
    },

    methods: {
      getData () {
        this.axios.get('/api/cardata').then(response => {
          this.cardatas = response.data.cardatas
        })
      },
      getCarData(){
           this.axios.get('/api/standardsetting').then(response => {
          this.standards = response.data.standards
        })
      }
    },
}
</script>
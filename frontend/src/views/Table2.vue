<template>
  <div>
    <h1>Test</h1>
    <ul>
      <v-select
          :items="districts"
          v-model="dist"
          item-text="DName"
          item-value="district_id"
          label="Standard"
        ></v-select>
      <li v-for="g in filteredDistrict" :key="g.district_id">{{g.name}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default Vue.extend({
  data:()=>({
    dist:[],
    district_id:'',
    districts:[],
    getall:[],
  }),
  computed:{
    filteredDistrict(){
      return this.getall.filter(x => '' + x.district_id === this.dist)
    },
  },
  created(){
    this.getDistrict()
    this.getAllData()
  },
  methods:{
    async getAllData(){
      this.axios.get('/api/district').then(response => {
        this.districts = response.data.districts
      })
    },
    async getDistrict(){
      // await this.axios.get('/api/district/all?district_id=1').then(response => {
      // await this.axios.get('/api/district/all',{params:{district_id:this.dist }}).then(response => {
      //     this.getall =response.data.getall
      //   })
      let res = await this.axios.get('/api/district/all')
      this.getall = res.data.getall
    }
  }
})
</script>
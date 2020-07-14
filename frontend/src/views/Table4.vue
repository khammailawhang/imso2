<template>
  <div id="test">
    <h1>Sort </h1>
    <v-row>
      <v-col cols="4">
        <v-select
          :items="provinces"
          v-model="province_id"
          item-text="name"
          item-value="province_id"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="getalldata"
          v-model="district_id"
          item-text="name"
          item-value="district_id"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="getall"
          v-model="village_id"
          item-text="name"
          item-value="village_id"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-btn color="green" class="white--text" @click="save">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default Vue.extend({
  data: () => ({
    village_id:'',
    province_id: [],
    district_id: [],
    provinces: [],
    getall: [],
    getalldata: []
  }),
  watch: {
    province_id() {
      this.getProvince();
    },
    district_id() {
      this.getDistrict();
    }
  },
  created() {
    this.getDistrict();
    this.getProvince();
    this.getAllData();
  },
  methods: {
    async getAllData() {
      this.axios.get("/api/province").then(response => {
        this.provinces = response.data.provinces;
      });
    },
    async getDistrict() {
      let res = await this.axios.get("/api/district/all", {
        params: { district_id: this.district_id }
      });
      this.getall = res.data.getall;
    },
    async getProvince() {
      let res = await this.axios.get("/api/district/getAll", {
        params: { province_id: this.province_id }
      });
      this.getalldata = res.data.getalldata;
    },
    async save(){
      let res = await this.axios.post('/api/district/select',{
        village_id:this.village_id,
        district_id:this.district_id,
        province_id:this.province_id,
      })
      if (res) {
        this.$router.replace('Table4')
      }
    },
  }
});
</script>
<style>
  .test{
    font-family: 'Noto Sans Lao',Roboto, Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
  }
</style>

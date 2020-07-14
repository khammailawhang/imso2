<template>
  <div>
    <h1>Test</h1>
    <ul>
      <v-select
        :items="provinces"
        v-model="pro"
        item-text="name"
        item-value="province_id"
        label="Standard"
      ></v-select>
      <h1>District</h1>
      <v-select
        :items="getalldata"
        v-model="dist"
        item-text="name"
        item-value="district_id"
        label="Standard"
      ></v-select>
      <h1>Village</h1>
      <v-select
        :items="getall"
        v-model="village_id"
        item-text="name"
        item-value="village_id"
        label="Standard"
      ></v-select>
      <!-- <li v-for="g in getalldata" :key="g.district_id">{{g.name}}</li>
      <v-divider/>
      <li v-for="g in getall" :key="g.village_id">{{g.name}}</li> -->
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default Vue.extend({
  data: () => ({
    pro: [],
    dist: [],
    provinces: [],
    getall: [],
    getalldata: []
  }),
  watch: {
    pro() {
      this.getProvince();
    },
    dist() {
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
        params: { district_id: this.dist }
      });
      this.getall = res.data.getall;
    },
    async getProvince() {
      let res = await this.axios.get("/api/district/getAll", {
        params: { province_id: this.pro }
      });
      this.getalldata = res.data.getalldata;
    }
  }
});
</script>

<template>
  <div id="test">
    <h1>Sort </h1>
    <v-row>
      <v-col cols="4">
        <v-select
          :items="models"
          v-model="model_id"
          item-text="name"
          item-value="model_id"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="getalldata"
          v-model="type_id"
          item-text="name"
          item-value="type_id"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="getall"
          v-model="type_id"
          item-text="price"
          item-value="type_id"
          label="Standard"
        ></v-select>
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
    fs_id:'',
    model_id: [],
    type_id: [],
    models: [],
    getall: [],
    getalldata: []
  }),
  watch: {
    model_id() {
      this.getType();
    },
    type_id() {
      this.getPrice();
    },
  },
  created() {
    this.getPrice();
    this.getType();
    this.getAllData();
  },
  methods: {
    async getAllData() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    },
    async getPrice() {
      let res = await this.axios.get("/api/testfee3/all", {
        params: { type_id: this.type_id }
      });
      this.getall = res.data.getall;
    },
    async getType() {
      let res = await this.axios.get("/api/testfee3/getAll", {
        params: { model_id: this.model_id }
      });
      this.getalldata = res.data.getalldata;
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

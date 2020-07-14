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
          label="Model"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="gettypes"
          v-model="type_id"
          item-text="TypeName"
          item-value="type_id"
          label="Type"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          :items="getprices"
          v-model="fs_id"
          item-text="price"
          item-value="fs_id"
          label="Price"
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
    model_id: [],
    type_id: [],
    gettypes: [],
    getprices:[],
    models: [],
  }),
  watch: {
    model_id() {
      this.getType();
    },
    type_id(){
      this.getPrice()
    }
  },
  created() {
    this.getType();
    this.getPrice();
    this.getModel();
  },
  methods: {
    async getModel() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    },
    async getType() {
      let res = await this.axios.get("/api/testfee/gettype", {
        params: { model_id: this.model_id }
      });
      this.gettypes = res.data.gettypes;
    },
    async getPrice(){
      let res = await this.axios.get('/api/testfee/getprice',{
        params:{type_id:this.type_id}
      });
      this.getprices = res.data.getprices;
    }
  }
});
</script>
<style>
  .test{
    font-family: 'Noto Sans Lao',Roboto, Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
  }
</style>

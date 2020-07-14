<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12"><h1>Option</h1></v-col>
      <v-col cols="12" lg="4" md="4">
        <v-select
          :items="models"
          v-model="model_id"
          item-text="ModelName"
          item-value="model_id"
          label="Model"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="4" md="4">
        <v-select
          :items="types"
          v-model="type_id"
          item-text="type_id"
          item-value="type_id"
          label="Type"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="4" md="4">
        <v-select
          :items="prices"
          v-model="type_id"
          item-text="price"
          item-value="type_id"
          label="Price"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="4" md="4">
        <h1>Type</h1>
        <v-select
          :items="gettypes"
          v-model="type_id"
          item-text="TypeName"
          item-value="type_id"
          label="Price"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    model_id: [],
    type_id: [],
    models: [],
    types: [],
    prices: [],
    gettypes:[],
  }),
  watch: {
    model_id() {
      this.getType();
    },
    type_id() {
      this.getPrice();
      this.getTypeAll();
    }
  },
  created() {
    this.getModel();
    this.getType();
    this.getPrice();
    this.getTypeAll();
  },
  methods: {
    async getModel() {
      let res = await this.axios.get("/api/testfee2/model", {
        params: { model_id: this.model_id }
      });
      this.models = res.data.models;
    },
    async getType() {
      let res = await this.axios.get("/api/testfee2/type", {
        params: { model_id: this.model_id }
      });
      this.types = res.data.types;
    },
    async getPrice() {
      let res = await this.axios.get("/api/testfee2/price", {
        params: { type_id: this.type_id }
      });
      this.prices = res.data.prices;
    },
    async getTypeAll() {
      let res = await this.axios.get("/api/testfee2/gettype", {
        params: { type_id: this.type_id }
      });
      this.gettypes = res.data.gettypes;
    }
  }
};
</script>

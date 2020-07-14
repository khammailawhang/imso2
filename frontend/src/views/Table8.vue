<template>
  <div id="test">
    <h1>Sort </h1>
    <v-row>
      <v-col cols="4">
        <v-select
          :items="gettypes"
          v-model="model_id"
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
    gettypes: [],
    getprices:[],
    models: [],
  }),
  watch: {
    type_id(){
      this.getPrice()
      this.getPype()
    },
  },
  created() {
    this.getType();
    this.getPrice();
  },
  methods: {
    async getType(){
      let res = await this.axios.get('/api/testfee1/gettype',{
        params:{model_id:this.model_id}
      })
      this.gettypes = res.data.gettypes
    },
    async getPrice(){
      let res = await this.axios.get('/api/testfee1/getprice',{
        params:{model_id:this.model_id}
      });
      this.getprices = res.data.getprices;
    }
  }
});
</script>

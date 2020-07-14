<template>
  <div>
    <v-row>
      <v-col cols="12" xl="10" lg="10" md="10" sm="10">
        <h1 class="indigo--text">{{$t('Report.Table_Title')}}</h1>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="2">
        <v-spacer/>
        <v-btn color="indigo" dark v-on="on">
          <download-csv :data="registers" name="Report.csv">
            <v-icon>mdi-download</v-icon>
          </download-csv> {{$t('Report.Download')}}
        </v-btn>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="3">
        <v-text-field v-model="ownerFilterValue" type="text" label="Name"></v-text-field>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="3">
        <v-select
            :items="registers"
            item-text="PName"
            v-model="provinceFilterValue"
            label="Province"
          ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="3">
        <v-select
            :items="registers"
            item-text="TRName"
            v-model="typeplactnoFilterValue"
            label="Type Platc No"
          ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="3">
        <v-text-field v-model="platcnoFilterValue" type="text" label="Name"></v-text-field>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="3">
        <v-select
            :items="registers"
            item-text="MName"
            v-model="modelFilterValue"
            label="Model"
          ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="3">
        <v-select
            :items="registers"
            item-text="TName"
            v-model="typeFilterValue"
            label="Type"
          ></v-select>
      </v-col>
      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
        <v-data-table
          :headers="headers"
          :items="registers"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JsonCSV from "vue-json-csv";
import format from "vue-text-format";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
  data() {
    return {
      registers: [],
      ownerFilterValue: "",
      provinceFilterValue: "",
      typeplatcnoFilterValue: null,
      platcnoFilterValue: "",
      modelFilterValue: null,
      typeFilterValue: null
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Owner",
          align: "left",
          sortable: false,
          value: "owner_name",
          filter: this.ownerFilter,
          width:'160px'
        },
        {text: "Phone",value: "phone",width:'130px'},
        {text: "Village",value: "VName",width:'130px'},
        {text: "District",value: "DName",width:'130px'},
        {text: "Province",value: "PName",width:'140px',filter:this.provinceFilter},
        {text: "Type Platc No",value: "TRName",width:'130px',filter:this.typeplatcnoFilter},
        {text: "Platc No",value: "platc_no",width:'100px',filter:this.platcnoFilter},
        {
          text: "Model",
          align: "left",
          sortable: false,
          value: "MName",
          filter: this.modelFilter,
          width:'120px'
        },
        {
          text: "Type",
          value: "TName",
          filter: this.typeFilter,
          width:'120px'
        },
        {text: "Color",value: "CName",width:'100px'},
        {text: "Steering Wheel",value: "steering_wheel",width:'140px'},
        {text: "Fuel",value: "fuel",width:'100px'},
        { text: "Cylinder", value: "cylinder", width: "100px" },
        { text: "Cylinder Size cc", value: "cylinder_size_cc", width: "140px" },
        { text: "Engine No", value: "engine_no", width: "130px" },
        { text: "Chassis No", value: "chassis_no", width: "130px" },
        { text: "Width", value: "width", width: "100px" },
        { text: "Length", value: "length", width: "100px" },
        { text: "Height", value: "height", width: "100px" },
        { text: "Passenger Scats", value: "passenger_scats", width: "150px" },
        { text: "Vehicle Weight", value: "vehicle_weight", width: "140px" },
        { text: "Max Loading", value: "max_loading", width: "130px" },
        { text: "Total Weight", value: "total_weight", width: "130px" },
        { text: "Date Action", value: "created_at", width: "250px",align:'right' },
      ];
    }
  },
  created() {
    this.getData();
  },
  methods: {
    /**
     * Filter for dessert names column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    getData() {
      this.axios.get("/api/register").then(response => {
        this.registers = response.data.registers;
      });
    },
    ownerFilter(value) {
      if (!this.ownerFilterValue) {
        return true;
      }
      return value
        .toLowerCase()
        .includes(this.ownerFilterValue.toLowerCase());
    },
    provinceFilter(value) {
      if (!this.provinceFilterValue) {
        return true;
      }
      return value === this.provinceFilterValue;
    },
    typeplatcnoFilter(value) {
      if (!this.typeplactnoFilterValue) {
        return true;
      }
      return value === this.typeplactnoFilterValue;
    },
    platcnoFilter(value) {
      if (!this.platcnoFilterValue) {
        return true;
      }
      return value.toLowerCase().includes(this.platcnoFilterValue.toLowerCase());
    },
    modelFilter(value) {
      if (!this.modelFilterValue) {
        return true;
      }
      return value === this.modelFilterValue;
    },
    typeFilter(value) {
      if (!this.typeFilterValue) {
        return true;
      }
      return value === this.typeFilterValue;
    }
  }
};
</script>

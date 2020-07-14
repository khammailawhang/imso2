<template>
  <div id="test">
    <h1>Sort </h1>
    <v-row>
      <v-col cols="4">
        <v-select
          :items="clsList"
          v-model="cls"
          item-text="ST_class"
          item-value="class"
          label="Student"
          @change="getStudent"
        ></v-select>
        <h1>Student</h1>
        <li v-for="st in filteredStudent" :key="st.id">{{st.class}}{{st.name}}</li>
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
    cls:'',
    clsList:[
        {class:'1',ST_class:'Class 1'},
        {class:'2',ST_class:'Class 2'},
        {class:'3',ST_class:'Class 3'},
        {class:'4',ST_class:'Class 4'},
        {class:'5',ST_class:'Class 5'},
    ],
    students:[],
    studentsall:[],
  }),
  computed:{
      filteredStudent(){
          return this.students.filter(x => '' + x.class === this.cls)
      }
  },
  created() {
    this.getStudent()
    this.getStudentAll()
  },
  methods: {
    async getStudent(){
        let res = await this.axios.get("/api/district/getStudent");
        this.students = res.data.students;
    },
    async getStudentAll(){
        let res = await this.axios.get("/api/district/getStudentAll");
        this.studentsall = res.data.studentsall;
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

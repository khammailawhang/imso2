<template>
  <div>
    <v-text-field label="Name" v-model="name"></v-text-field>
    <v-btn color="green" class="white--text" @click="upload">Upload</v-btn>
    <p v-if="msg">{{msg}}</p>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    data:()=> ({
        name:"",
        msg:"",
    }),
    methods:{
        upload(){
            let res =  axios.post('/api/upload/insert',{
                 name:this.names
            })

            if(res){
                this.msg = res.data.msg;
            }else{
                this.msg =res.data.msg;
            }
            
        }
    }
}
</script>

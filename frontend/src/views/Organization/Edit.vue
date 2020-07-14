<template>
    <div class="edit">
        <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <v-breadcrumbs :items="items"></v-breadcrumbs>
                <v-card class="elevation-12">
                    <v-toolbar color="grey lighten-5" class="grey--text" dark flat >
                    <v-toolbar-title>ແກ້ໄຂອົງກອນ</v-toolbar-title>
                    <v-spacer />
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                        <v-btn icon color="grey" href="../Orgenization">
                            <v-icon small>mdi-arrow-left</v-icon>
                        </v-btn>
                        </template>
                        <span>Codepen</span> 
                    </v-tooltip>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-row>
                            <v-col cols="12" md="6"><v-text-field label="ຊື່ົອົງກອນ" v-model="organization_name" type="text" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ເລກທີ" v-model="no_organization" type="text" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ເບີໂທລະສັບ" v-model="phone" type="number" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ມືຖື" v-model="mobile" type="number" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ອີເມວ" v-model="email" type="email" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ເຟສບຸກ" v-model="facebook" type="text" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ເວບໄຊ" v-model="website" type="text" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ຢູທູບ" v-model="youtube" type="text" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-text-field label="ທີ່ຢູ່" v-model="address" type="text" autocomplete="off" /></v-col>
                            <v-col cols="12" md="6"><v-switch v-model="status" label="ສະຖານະ" value="Active"></v-switch></v-col>
                            </v-row>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer />
                    <v-btn text color="primary" @click="update" v-if="company_information_update === '1'">ແກ້ໄຂ</v-btn>
                    </v-card-actions>
                </v-card>
                    
            </v-col>
        </v-row>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios)
export default {
    data(){
        return{
            items: [
                {
                text: 'ໜ້າຫຼັກ',
                disabled: false,
                href: '/Dashboard',
                },
                {
                text: 'ຕັ້ງຄ່າ',
                disabled: false,
                href: '/user',
                },
                {
                text: 'ອົງກອນ',
                disabled: false,
                href: '../Organization',
                },
                {
                text: 'ແກ້ໄຂອົງກອນ',
                disabled: true,
                href: 'model',
                },
            ],
            organization_name: '',
            no_organization:'',
            phone:'',
            mobile:'',
            email:'',
            facebook:'',
            website:'',
            youtube:'',
            address:'',
            status: '',
        } 
    },
     async created() { 
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    }
    else if(this.$store.getters.getUser.company_information_update === '1'){
      let res = await axios.get('/api/organization/organization_id/' + this.$route.query.organization_id)
        this.organization_name = res.data.organizations.organization_name || ''
        this.no_organization = res.data.organizations.no_organization  || ''
        this.phone = res.data.organizations.phone  || ''
        this.mobile = res.data.organizations.mobile  || ''
        this.email = res.data.organizations.email  || ''
        this.facebook = res.data.organizations.facebook  || ''
        this.website = res.data.organizations.website  || ''
        this.youtube = res.data.organizations.youtube  || ''
        this.address = res.data.organizations.address  || ''
        this.status = res.data.organizations.status || ''
      this.company_information_update = this.$store.getters.getUser.company_information_update;
      this.secretMessage = await AuthService.getSecretContent();
    }else{
      this.$store.dispatch("logout");
      this.$router.push("../login");
    }
  },
    methods:{
         async update(){
               let res = await this.axios.put('/api/organization/update',{
                organization_id:this.$route.query.organization_id,
                organization_name:this.organization_name,
                no_organization:this.no_organization,
                phone:this.phone,
                mobile:this.mobile,
                email:this.email,
                facebook:this.facebook,
                website:this.website,
                youtube:this.youtube,
                address:this.address,
                status:this.status,
            });

            if (res) {
                this.$router.replace('../Organization')
            }
        },
        reset(){

        }
    }
}
</script>
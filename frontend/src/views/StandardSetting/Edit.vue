<template>
    <div class="edit">
        <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <v-breadcrumbs :items="items"></v-breadcrumbs>
                <v-card class="elevation-12">
                    <v-toolbar color="grey lighten-5" class="grey--text" dark flat >
                    <v-toolbar-title>ແກ້ໄຂຄ່າມາຕາຖານ</v-toolbar-title>
                    <v-spacer />
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                        <v-btn icon color="grey" href="../StandardSetting">
                            <v-icon small>mdi-arrow-left</v-icon>
                        </v-btn>
                        </template>
                        <span>Codepen</span> 
                    </v-tooltip>
                    </v-toolbar>
                    <v-card-text>
                    <v-form>
                        <v-text-field label="ຫົວຂໍ້" v-model="title" type="text" autocomplete="off" />
                        <v-text-field label="ຄ່າມາດຕາຖານ" v-model="value" type="text" autocomplete="off" />
                        <v-textarea v-model="detail" label="ລາຍລະອຽດ" value=""></v-textarea>
                        <v-switch v-model="status" label="ສະຖານະ" value="Active"></v-switch>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer />
                    <v-btn text color="grey" @click="reset" class="white--text">ຍົກເລີກ</v-btn>
                    <v-btn text color="primary" @click="update">ແກ້ໄຂ</v-btn>
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
                text: 'ຕັ້ງຄ່າມາດຕະຖານ',
                disabled: false,
                href:'../StandardSetting'
                },
                {
                text: 'ແກ້ໄຂຄ່າມາດຕະຖານ',
                disabled: true,
                },
            ],
            title:'',
            value:'',
            detail:'',
            status:'' 
        } 
    },
    async created() {
        let res = await axios.get('/api/standardsetting/standard_setting_id/' + this.$route.query.standard_setting_id)
        this.title = res.data.standards.title || ''
        this.value = res.data.standards.value || ''
        this.detail = res.data.standards.detail || ''
        this.status = res.data.standards.status || ''
    },
    methods:{
         async update(){
               let res = await this.axios.put('/api/standardsetting/update',{
                standard_setting_id:this.$route.query.standard_setting_id,
                title:this.title,
                value:this.value,
                detail:this.detail,
                status:this.status,
            });

            if (res) {
                this.$router.replace('../StandardSetting')
            }
        }
    }
}
</script>
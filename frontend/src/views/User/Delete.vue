<template>
    <div class="edit">
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <h4 align="left" class="py-6">ແກ້ໄຂຍີ່ຫໍ້</h4>
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field v-model="name" label="ຊື່ຍີ່ຫໍ້" equired autocomplete="off"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-switch v-model="status" label="Active" value="Active"></v-switch>
                                </v-col>
                                <v-col cols="12" md="6" align="right" class="py-8">
                                    <v-btn color="indigo" class="white--text" @click="remove">ບັນທຶກ</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
            </v-col>
            <v-col cols="3"></v-col>
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
            name:'',
            status:'' 
        } 
    },
    async created() {
        let res = await axios.get('/api/model/model_id/' + this.$route.query.model_id)
        this.name = res.data.models.name || ''
        this.status = res.data.models.status || ''
    },
    methods:{
         async remove(){
               let res = await this.axios.delete('/api/model/delete',{
                model_id:this.$route.query.model_id
            });

            if (res) {
                this.$router.replace('../Model')
            }
        }
    }
}
</script>
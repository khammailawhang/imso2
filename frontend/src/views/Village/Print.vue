<template>
    <div class="print">
        <v-row no-gutters>
            <v-col cols="12" align="center" justify="center">
                <p>ສາທາລະນະລັດ  ປະຊາທິປະໄຕ  ປະຊາຊົນລາວ<br>Lao  People's  Democratic  Republic<br>--- 000 ---</p>
            </v-col>
            <v-col cols="6" md="6" align="left"><p>ກະຊວງ ຄົມມະນາຄົມ ຂົນສົ່ງ ໄປສະນີ ແລະ ກໍ່ສ້າງ<br>MINISTRY OF C.T.P.C<br>ພະແນກ ຄຂປກ ປະຈຳແຂວງ ...<br>DEPARTMENT OF CTPC</p></v-col>
            <v-col cols="6" md="6" align="right">ເລກທີ...ຄຂປກ.</v-col>

            <!-- Title -->
            <v-col cols="12" align="center"><h4>ລາຍການກວດກາເທັກນິກ ພາຫະນະ<br>MONITOR VEHICLE TECHNICAL INSPECTION RECORD</h4></v-col>
            
            <!-- Register info --> 
            <v-col cols="3" align="left">ຊື່ເຈົ້າຂອງລົດ<b>...</b><br>(Name)</v-col>
            <v-col cols="3" align="left">ທີ່ຢູ່ <b>...</b><br>(Address)</v-col>
            <v-col cols="3" align="left">ບ້ານ <b>...</b><br>(Village)</v-col>
            <v-col cols="3" align="left">ເມືອງ <b>...</b><br>(District)</v-col>
            <v-col cols="3" align="left">ແຂວງ <b>...</b><br>(Province)</v-col>
            <v-col cols="3" align="left">ເບີໂທລະສັບ <b>...</b><br>(Telephone)</v-col>
            <v-col cols="3" align="left">ເລກທະບຽນລົດ <b>...</b><br>(Platc No)</v-col>
            <v-col cols="3" align="left">ຍີ່ຫໍ້ <b>...</b><br>(Model)</v-col>
            <v-col cols="3" align="left">ປະເພດລົດ <b>...</b><br>(Type)</v-col>
            <v-col cols="3" align="left">ສີ <b>...</b><br>(Color)</v-col>
            <v-col cols="3" align="left">ພວງມມະໄລ <b>...</b><br>(Steering Wheel)</v-col>
            <v-col cols="3" align="left">ໃຊ້ນຳ້ມັນ <b>...</b><br>(Fuel)</v-col>
            <v-col cols="3" align="left">ຈຳນວນສູບ <b>...</b><br>(Cylinder)</v-col>
            <v-col cols="2" align="left">ຄວາມແຮງ <b>...</b><br>(Cylinder Size CC)</v-col>
            <v-col cols="1" align="right">ຊຊ<br>(CC)</v-col>
            <v-col cols="3" align="left">ເລກຈັກ <b>...</b><br>(Engine No)</v-col>
            <v-col cols="3" align="left">ເລກຖັງ <b>...</b><br>(Chassic No)</v-col>
            <v-col cols="2" align="left">ລວງກ້ວາງ<b>...</b><br>(Width)</v-col>
            <v-col cols="1" align="right">ມມ<br>(mm)</v-col>
            <v-col cols="2.4" align="left">ລວງຍາວ<b>...</b><br>(Length)</v-col>
            <v-col cols=".6" align="right">ມມ<br>(mm)</v-col>
            <v-col cols="2" align="left">ລວງສູງ <b>...</b><br>(Height)</v-col>
            <v-col cols="1" align="right">ມມ<br>(mm)</v-col>
            <v-col cols="2" align="left">ຈຳນວນບ່ອນນັ່ງໂດຍສານ <b>...</b><br>(Passenger Scats)</v-col>
            <v-col cols="1" align="right">ບ່ອນນັ່ງ<br>(Scats)</v-col>
            <v-col cols="2" align="left">ນຳ້ໜັກລົດ <b>...</b><br>(Vehicle Weight)</v-col>
            <v-col cols="1" align="right">ກິໂລ<br>(Kg)</v-col>
            <v-col cols="2" align="left">ນຳ້ໜັກບັນທຸກ <b>...</b><br>(Max Loading)</v-col>
            <v-col cols="1" align="right">ກິໂລ<br>(Kg)</v-col>
            <v-col cols="2" align="left">ນຳ້ໜັກລວມ <b>...</b><br>(Total Weight)</v-col>
            <v-col cols="1" align="right">ກິໂລ<br>(Kg)</v-col>
            <v-col cols="5" align="right"></v-col>

            <!-- Detail -->
            <!-- Number 1 -->
            <v-col cols="2" align="left"><b>1. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 2 -->
            <v-col cols="2" align="left"><b>2. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 3 -->
            <v-col cols="2" align="left"><b>3. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 4 -->
            <v-col cols="2" align="left"><b>4. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 5 -->
            <v-col cols="2" align="left"><b>5. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 6 -->
            <v-col cols="2" align="left"><b>6. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 7 -->
            <v-col cols="2" align="left"><b>7. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 8 -->
            <v-col cols="2" align="left"><b>8. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 9 -->
            <v-col cols="2" align="left"><b>9. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>

            <!-- Number 10 -->
            <v-col cols="2" align="left"><b>10. Title</b></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>
            <v-col cols="2" align="left"><v-checkbox class="mx-2" label="Column"></v-checkbox></v-col>


            <v-col cols="2" align="left">Notes</v-col>
            <v-col cols="3" align="left">Notes</v-col>
            <v-col cols="4" align="left">Notes</v-col>
            <v-col cols="3" align="left">Notes</v-col>


            <v-col cols="4" align="left">Notes</v-col>
            <v-col cols="4" align="left">Notes</v-col>
            <v-col cols="4" align="left">Notes</v-col>

            <v-col cols="4" align="left">Notes</v-col>
            <v-col cols="4" align="left">Notes</v-col>
            <v-col cols="4" align="left">Notes</v-col>

            <v-col cols="12" align="center"><v-btn v-print>Print</v-btn></v-col>
        </v-row>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Print from 'vue-print-nb'

Vue.use(Print);
Vue.use(VueAxios, axios)
export default {
    data :() =>({
        disabled:false,
        models:[],
    }),
    mounted(){
        this.getAllData();
    },
    methods:{
        getAllData(){
            axios.get('/api/model').then(response => {
                this.models = response.data.models
            })
        },
         async save(){
               let res = await this.axios.post('/api/model/create',{
                model_id:this.$route.query.model_id,
                name:this.name,
                status:this.status,
            });

            if (res) {
                this.$router.replace('../Model')
            }
        }
    }
}
</script>
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
            <v-col cols="12" align="center">
                <v-simple-table>
                    <template>
                        <thead>
                            <tr>
                            <th class="text-left">ຊື່ລິສັດ</th>
                            <th class="text-left">ຊື່ລິສັດ</th>
                            <th class="text-left">ເບີໂທລະສັບ</th>
                            <th class="text-left">ມືຖຶ</th>
                            <th class="text-left">ອີເມວ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in standards" :key="item.standard_setting_id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.value }}</td>
                            <td>{{ item.detail }}</td>
                            <td>{{ item.status }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
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
        standards: [],
    }),
    methods:{
        getAllData(){
            this.axios.get('/api/standardsetting').then(response => {
                this.standards = response.data.standards
            })
        }
    }
}
</script>
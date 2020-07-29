<template>
<div class="mangement">
    <v-content>
        <v-container>
            <v-row align="start">
                <!-- ລາຍງານຈໍານວນລົງທະບຽນທັງໝົດ -->
                <v-col cols="12" xl="3" lg="" md="6" sm="6" align="left">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 20 : 0" color="pink accent-3" height="100px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <p class="ma-3 white--text">{{$t('Fee.Customer')}}</p>
                                    <v-card-subtitle class="white--text" v-for="income in cars" :key="income.fee_id">{{income.register_id}} </v-card-subtitle>
                                </div>
                                <v-avatar class="ma-2" size="60" tile>
                                    <v-icon size="50" color="white">mdi-account-plus</v-icon>
                                </v-avatar>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
                <!-- ລາຍງານຈໍານວນກວດເຕັກນິກທັງໝົດ -->
                <v-col cols="12" xl="3" lg="" md="6" sm="6" align="left">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 20 : 0" color="indigo accent-3" height="100px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <p class="white--text ma-3">{{$t('Fee.Inspection')}}</p>
                                    <v-card-subtitle class="white--text" v-for="item in inspections" :key="item.fee_id">  {{item.inspection_id}} </v-card-subtitle>
                                </div>
                                <v-avatar class="ma-3" size="40" tile>
                                    <v-icon size="50" color="white">mdi-car</v-icon>
                                </v-avatar>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
                <!-- ລາຍງານຈໍານວນເກັບຄ່າທໍານຽນທັງໝົດ -->
                <v-col cols="12" xl="3" lg="" md="6" sm="6" align="left">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 20 : 0" color="green accent-3" height="100px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <p class="white--text ma-3">{{$t('Fee.Fee')}}</p>
                                    <v-card-subtitle class="white--text" v-for="item in incomes" :key="item.fee_id" v-format="'0,000 ກີບ'">{{item.price}}</v-card-subtitle>
                                </div>
                                <v-avatar class="ma-3" size="40" tile>
                                    <v-icon size="50" color="white">mdi-currency-usd</v-icon>
                                </v-avatar>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
    data: () => ({
        cars: [],
        incomes: [],
        inspections: [],
        fees: [],
        totalincomes: [],
    }),
    async created() {
      await axios.get("/api/admin/total_income").then(res=>{
          this.incomes = res.data.incomes;
      })
      await axios.get("/api/admin/car").then(res=>{
          this.cars = res.data.cars;
      })
      await axios.get("/api/admin/inspection").then(res=>{
          this.inspections = res.data.inspections;
      })
      await axios.get("/api/admin/fee").then(res=>{
          this.fees = res.data.fees; 
      })
  }
};
</script>

<template>
<div class="mangement">
    <v-content>
        <v-container>
            <v-row align="start">
                <!-- ລາຍງານຈໍານວນລົງທະບຽນທັງໝົດ -->
                <v-col cols="12" xl="3" lg="" md="6" sm="6" align="left">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 0" color="#F50057" height="100px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <p class="ma-3 white--text">{{$t('Fee.Customer')}}</p>
                                    <v-card-subtitle class="white--text" v-for="income in cars" :key="income.fee_id">{{income.register_id}} </v-card-subtitle>
                                </div>
                                <v-avatar class="ma-2" size="60" tile>
                                    <v-icon size="50" color="white">mdi-account</v-icon>
                                </v-avatar>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
                <!-- ລາຍງານຈໍານວນກວດເຕັກນິກທັງໝົດ -->
                <v-col cols="12" xl="3" lg="" md="6" sm="6" align="left">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 16 : 0" color="#3D5AFE" height="100px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <p class="white--text ma-3">{{$t('Fee.Inspection')}}</p>
                                    <v-card-subtitle class="white--text" v-for="item in inspections" :key="item.fee_id"> {{item.inspection_id}} </v-card-subtitle>
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
                        <v-card :elevation="hover ? 16 : 0" color="#00E676" height="100px">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <p class="white--text ma-3">{{$t('Fee.Fee')}}</p>
                                    <v-card-subtitle class="white--text" v-for="item in totalincomes" :key="item.fee_id" v-format="'0,000 ກີບ'">{{item.price}}</v-card-subtitle>
                                </div>
                                <v-avatar class="ma-3" size="40" tile>
                                    <v-icon size="50" color="white">mdi-currency-usd</v-icon>
                                </v-avatar>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>

            </v-row>

            <v-row align="start" justify="center" no-gutters>

                <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" class="pt-6 pr-3">
                    <v-card flat color="white">
                        <v-card-text>
                            <ModelPopular />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12" class="pt-6 pl-3">
                    <v-card flat color="white">
                        <v-card-text>
                            <TypePopular />
                        </v-card-text>
                    </v-card>
                </v-col>
                <!-- <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="pt-6 pb-6">
                    <v-card flat color="white">
                        <v-card-text>
                            <FeePerYear />
                        </v-card-text>
                    </v-card>
                </v-col> -->

            </v-row>

        </v-container>
    </v-content>
</div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
// import FeePerYear from "@/views/FeePerYear";
import ModelPopular from "@/views/ModelPopular";
import TypePopular from "@/views/TypePopular";
Vue.use(VueAxios, axios);
export default {
    components: {

        // FeePerYear,
        ModelPopular,
        TypePopular
    },
    data: () => ({
        cars: [],
        incomes: [],
        inspections: [],
        fees: [],
        totalincomes: [],
    }),
    async created() {
        await axios.get("/api/income/total_income/branch_id/" + this.$route.query.branch_id).then(res => {
            this.totalincomes = res.data.totalincomes;
        })
        await axios.get("/api/income/car").then(res => {
            this.cars = res.data.cars;
        })
        await axios.get("/api/income/inspection/branch_id/" + this.$route.query.branch_id).then(res => {
            this.inspections = res.data.inspections;
        })
        await axios.get("/api/income/income/branch_id/" + this.$route.query.branch_id).then(res => {
            this.incomes = res.data.incomes;
        })

    }
};
</script>

<template>
<div>
    <v-content>
        <v-container>
            <v-row align="start" justify="center">

                <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                    <v-col cols="12">

                        <v-row>
                            <v-toolbar-title style="" cols="12" xl="12" lg="12" md="12" sm="12">
                                <h5 class="indigo--text">
                                    <v-icon color="indigo">mdi-xing</v-icon> {{ $t("detail.car") }}
                                </h5>
                            </v-toolbar-title>
                            <v-row> </v-row>
                            <v-spacer />
                            <v-tooltip bottom color="indigo">
                                <template v-slot:activator="{ on }">
                                    <v-btn  :to="`/${$i18n.locale}/Register`" fab small color="indigo" dark v-on="on">
                                        <v-icon>mdi-undo-variant</v-icon>
                                    </v-btn>
                                </template>
                                <span>{{ $t("Fee.Back") }}</span>
                            </v-tooltip>
                        </v-row>

                    </v-col>
                </v-col>

                <v-col cols="12" xl="4" lg="4" md="4" sm="12">

                    <v-row>

                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("TR.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="TRName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.Platcno")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8">
                            <v-btn small color="#F9A825" v-text="platc_no"></v-btn>
                        </v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.Gender")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="gender"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.OwnerName")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="owner_name"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.Phone")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="phone"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Village.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="VName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("District.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="DName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Province.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="PName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>

                    </v-row>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                    <v-row>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Model.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="MName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Type.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="TName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Color.Name")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="CName"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.steering_wheel")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="steering_wheel"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.fuel")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="fuel"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.cylinder")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="cylinder"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.cylinder_size_cc")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="cylinder_size_cc"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.cc") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.engine_no")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="engine_no"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                    <v-row>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.chassis_no")
              }}</v-col>
                        <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8"><Strong class="indigo--text" v-text="chassis_no"></Strong></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.width")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="width"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.mm") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.length")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="length"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.mm") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.height")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="height"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.mm") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.passenger_scats")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="passenger_scats"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{
                  $t("Register.scats")
                }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.vehicle_weight")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="vehicle_weight"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.kg") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.max_loading")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="max_loading"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.kg") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                        <v-col cols="12" xl="4" lg="4" md="4" sm="4" xs="4">{{
                $t("Register.total_weight")
              }}</v-col>
                        <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6"><Strong class="indigo--text" v-text="total_weight"></Strong></v-col>
                        <v-col cols="12" xl="2" lg="2" md="2" sm="2" xs="2"><span class="text-left">{{ $t("Register.kg") }}</span></v-col>
                        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
                            <v-divider />
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
        </v-container>
    </v-content>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    data: () => ({
        villages: [],
        districts: [],
        provinces: [],
        genders: ["ນາງ", "ທ້າວ", "ອື່ນໆ"],
        steeringwheel: ["ຂວາ", "ຊ້າຍ", "ອື່ນໆ"],
        fuels: ["ແອັດຊັງ", "ກາຊວນ"],
        snackbar: false,
        snackbarText: "",
        owner_name: "",
        gender: "",
        phone: "",
        tr_id: "",
        village_id: "",
        model_id: "",
        type_id: "",
        color_id: "",
        platc_no: "",
        steering_wheel: "",
        fuel: "",
        cylinder: "",
        cylinder_size_cc: "",
        engine_no: "",
        chassis_no: "",
        width: "",
        length: "",
        height: "",
        passenger_scats: "",
        vehicle_weight: "",
        max_loading: "",
        total_weight: "",
        models: [],
        types: [],
        colors: [],
        trs: [],
        owners: [],
        province_id: [],
        district_id: [],
        getall: [],
        getalldata: [],
        registers: []
    }),

    watch: {
        variant(val) {
            if (val.includes("filter")) {
                this.value = true;
            }
        },
        province_id() {
            this.getProvince();
        },
        district_id() {
            this.getDistrict();
        }
    },
    async created() {
        let res = await axios.get(
            "/api/register/register_id/" + this.$route.query.register_id
        );
        this.owner_name = res.data.registers.owner_name || "";
        this.gender = res.data.registers.gender || "";
        this.phone = res.data.registers.phone || "";
        this.PName = res.data.registers.PName || "";
        this.DName = res.data.registers.DName || "";
        this.VName = res.data.registers.VName || "";
        this.TRName = res.data.registers.TRName || "";
        this.MName = res.data.registers.MName || "";
        this.TName = res.data.registers.TName || "";
        this.CName = res.data.registers.CName || "";
        this.province_id = res.data.registers.province_id || "";
        this.district_id = res.data.registers.district_id || "";
        this.village_id = res.data.registers.village_id || "";
        this.tr_id = res.data.registers.tr_id || "";
        this.platc_no = res.data.registers.platc_no || "";
        this.model_id = res.data.registers.model_id || "";
        this.type_id = res.data.registers.type_id || "";
        this.color_id = res.data.registers.color_id || "";
        this.fuel = res.data.registers.fuel || "";
        this.steering_wheel = res.data.registers.steering_wheel || "";
        this.cylinder = res.data.registers.cylinder || "";
        this.cylinder_size_cc = res.data.registers.cylinder_size_cc || "";
        this.engine_no = res.data.registers.engine_no || "";
        this.chassis_no = res.data.registers.chassis_no || "";
        this.width = res.data.registers.width || "";
        this.length = res.data.registers.length || "";
        this.height = res.data.registers.height || "";
        this.passenger_scats = res.data.registers.passenger_scats || "";
        this.vehicle_weight = res.data.registers.vehicle_weight || "";
        this.max_loading = res.data.registers.max_loading || "";
        this.total_weight = res.data.registers.total_weight || "";
        this.getVillage();
        this.getColor();
        this.getOwner();
        this.getDistrict();
        this.getProvince();
        this.getAllData();
        this.getTypeRegister();
        this.getModel();
        this.getType();
    },
    methods: {
        async update() {
            let res = await this.axios.put("/api/register/update", {
                register_id: this.$route.query.register_id,
                owner_name: this.owner_name,
                gender: this.gender,
                phone: this.phone,
                province_id: this.province_id,
                district_id: this.district_id,
                village_id: this.village_id,
                tr_id: this.tr_id,
                model_id: this.model_id,
                type_id: this.type_id,
                color_id: this.color_id,
                platc_no: this.platc_no,
                steering_wheel: this.steering_wheel,
                fuel: this.fuel,
                cylinder: this.cylinder,
                cylinder_size_cc: this.cylinder_size_cc,
                engine_no: this.engine_no,
                chassis_no: this.chassis_no,
                width: this.width,
                length: this.length,
                height: this.height,
                passenger_scats: this.passenger_scats,
                vehicle_weight: this.vehicle_weight,
                max_loading: this.max_loading,
                total_weight: this.total_weight
            });

            if (res) {
                this.$router.replace("../Register");
            }
        },
        getColor1(platc_no) {
            if (platc_no > 9999) return 'red '
            // else if (platc_no > 9999) return '#F9A825'
            else return '#F9A825'
        },
        getVillage() {
            this.axios.get("/api/village").then(response1 => {
                this.villages = response1.data.villages;
            });
        },
        async Rreset() {
            (this.form.full_name = ""),
            (this.form.model_id = ""),
            (this.form.type_id = ""),
            (this.form.color_id = ""),
            (this.form.owner_id = ""),
            (this.form.platc_no = ""),
            (this.form.steering_wheel = ""),
            (this.form.fuel = ""),
            (this.form.cylinder = ""),
            (this.form.cylinder_size_cc = ""),
            (this.form.engine_no = ""),
            (this.form.chassis_no = ""),
            (this.form.width = ""),
            (this.form.length = ""),
            (this.form.height = ""),
            (this.form.passenger_scats = ""),
            (this.form.vehicle_weight = ""),
            (this.form.max_loading = ""),
            (this.form.total_weight = ""),
            (this.form.status = false);
        },
        getTypeRegister() {
            this.axios.get("/api/type_register").then(response => {
                this.trs = response.data.trs;
            });
        },
        getColor() {
            this.axios.get("/api/color").then(response => {
                this.colors = response.data.colors;
            });
        },
        getOwner() {
            this.axios.get("/api/owner").then(response => {
                this.owners = response.data.owners;
            });
        },
        async getAllData() {
            this.axios.get("/api/province").then(response => {
                this.provinces = response.data.provinces;
            });
        },
        async getDistrict() {
            let res = await this.axios.get("/api/district/all", {
                params: {
                    district_id: this.district_id
                }
            });
            this.getall = res.data.getall;
        },
        async getProvince() {
            let res = await this.axios.get("/api/district/getAll", {
                params: {
                    province_id: this.province_id
                }
            });
            this.getalldata = res.data.getalldata;
        },
        getType() {
            this.axios.get("/api/type").then(response1 => {
                this.types = response1.data.types;
            });
        },
        getModel() {
            this.axios.get("/api/model").then(response => {
                this.models = response.data.models;
            });
        }
    }
};
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 72px);
}

.repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
            rgba(255, 0, 0, 0.25),
            rgba(255, 0, 0, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 10px);
}
</style>

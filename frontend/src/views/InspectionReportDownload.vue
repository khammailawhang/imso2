<template>
<div class="print1">
    <v-col cols="12" xl="12" lg="10" md="12" sm="11">
        <v-row no-gutters>
            <v-col cols="">
                <v-card-title>
                    <v-row>
                        <v-icon color="indigo">mdi-xing</v-icon>
                        <v-toolbar-title class="ml-0 pl-2">
                            <h5 class="indigo--text">{{$t('print.titel')}}</h5>
                        </v-toolbar-title>

                    </v-row>
                    <v-spacer />

                    <v-btn class="indigo--text mr-4" small fab dark color="yellow" bottom @click="print">
                        <v-icon>mdi-printer</v-icon>
                    </v-btn>

                    <v-tooltip bottom color="indigo">
                        <template v-slot:activator="{ on }">
                            <v-btn depressed @click="inspectionListTo(branch_id)" small fab color="#00C853" dark v-on="on">
                                <v-icon>mdi-undo-variant</v-icon>
                            </v-btn>
                        </template>
                        <span class="fontsizebody">{{ $t("Inspection.Back") }}</span>
                    </v-tooltip>

                </v-card-title>
            </v-col>
        </v-row>
        <v-card ref="form">
            <v-col>
                <v-row id="print" align="center" justify="center" style="background: #ffffff">

                    <v-col cols="12" align="center" style="background: #ffffff">

                        <table align="center" justify="center" style="font-size: 20px; font-family:Vision,Phetsarath OT; width:90%">
                            <br> <br><br>
                            <tr colspan="12" align="center">
                                <th class="fontsize"><img src="../assets/PWT.png" align="left" width="80px" /> ລາຍງານຜົນກວດກາສະພາດລົດ</th>
                            </tr>

                        </table>

                        <table align="center" justify="center" style="font-size: 16px; font-family:Vision,Phetsarath OT; width:90%">
                            <tr colspan="12" align="right">

                                <td>ວັນທີ: {{ created_at | formatDate }} </td>

                            </tr>

                        </table>
                        <table align="center" justify="center" style="font-size: 18px; font-family:Vision,Phetsarath OT; width:90%">
                            <tr colspan="12">

                                <td align="center"> ໝາຍເລກທະບຽນ:<b class="pl-2" v-text="TRName"></b><b class="pl-4" v-text="platc_no"></b> </td>

                                <td align="right">ເຂົ້າກວດສະພາບລົດ: 1</td>

                            </tr>

                        </table>
                        <table align="center" justify="center" style="font-size: 14px; font-family:Vision,Phetsarath OT; width:90%">
                            <tr colspan="12" align="right">

                                <td>ຊ່ອງກວດ: 1</td>

                            </tr>

                        </table>
                        <table align="center" justify="center" style="font-size: 16px; font-family:Vision,Phetsarath OT; width:90%">
                            <tr colspan="3">
                                <td>ກວດສອບການອອກລາຍລະອຽດຂ້າງລຸ້ມນີ້</td>

                            </tr>

                        </table><br>

                        <table class="table table-bordered" align="center" justify="center" style="font-size: 14px; font-family:Vision,Phetsarath OT; width:90%">

                            <tbody>

                                <tr class="tr">
                                    <th class="td" align="left">ລາຍການກວດ</th>
                                    <th class="td">ຄ່າທີກວດວັດໄດ້</th>
                                    <th class="td">ຜົນ</th>
                                    <th class="td">ມາດຕະຖານທີ່ກໍານົດ</th>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ຄັວນດຳ</td>
                                    <td class="td" align="center"><b class="pl-2" v-text="co2access"></b> % (OPACITY)</td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="co2 === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">ບໍ່ເກີນ 45% (OPACITY)</td>
                                </tr>
                                <tr class="tr">
                                    <td class="td" align="left">ກາກບາດ CO</td>
                                    <td class="td" align="center"> <b class="pl-2" v-text="coaccess"></b> % </td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="co === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">ບໍ່ເກີນ 4.5%</td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ກາກບາດ HC</td>
                                    <td class="td" align="center"><b class="pl-2" v-text="hcaccess"></b> % PPM</td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="hc === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">ບໍ່ເກີນ 600 PPM</td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ສຽງ</td>
                                    <td class="td" align="center">.. dBA</td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="db === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">ບໍ່ເກີນ 100 dBA ໄລຍະ 0.5 m</td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ໄຟຕໍາ<br>
                                        ດ້ານຊາຍ<br>
                                        ດ້ານຂວາ

                                    </td>
                                    <td class="td">
                                        ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd <br>
                                        ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd

                                    </td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="light === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">
                                        ມູມຕົກບໍ່ເກີນ -0.29 ອົງສາແລະບໍ່ຕໍ່າກວ່າ -2.29 ອົງສາ<br>
                                        (ມີມູມກົດຈາກແນວລະດັບຫຼາຍກວ່າ0.29ອົງສາແຕ່ບໍ່ເກີນ2.29ອົງສາ)<br>
                                        ບໍ່ອ່ຽງທາງຂວາ(-ອ່ຽງຊາຍ/+ອ່ຽງຂວາ)<br>
                                        ຄວາມສະຫວ່າງ @ ບໍ່ໜອຍກວ່າ 6.4 kcd

                                    </td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ໄຟສູງ<br>
                                        ດ້ານຊາຍ<br>
                                        ດ້ານຂວາ
                                    </td>
                                    <td class="td">
                                        ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd<br>
                                        ມູມ .. ອ່ຽງ .. ຄວາມສະຫວ່າງ kcd

                                    </td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="light === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">
                                        ມູມຕົກບໍ່ສູງກວ່າແນວຂະໜານກັບພື້ນພຽງ<br>
                                        ບໍ່ອ່ຽງທາງຂວາ(-ອ່ຽງຊາຍ/+ອ່ຽງຂວາ)<br>
                                        ຄວາມສະຫວ່າງ @ ບໍ່ໜອຍກວ່າ 12 kcd ລວມບໍ່ເກີນ 430 kcd

                                    </td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ສູນລໍ້ໜ້າ</td>
                                    <td class="td">... m/km</td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="s_n === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">ບໍ່ເກີນ +- 5 m/km</td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ເບກຕີນ<br>

                                        ເພົາທີ 1 <br>
                                        ເພົາທີ 2 <br>
                                        ເພົາທີ 3 <br>
                                        ເພົາທີ 4

                                    </td>
                                    <td class="td">ປະສິດທີພາບລວາມ <b class="pl-2" v-text="BSUM"></b> %<br>
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ <b class="pl-2" v-text="LFF"></b> % , ລໍ້ຂວາ <b class="pl-2" v-text="RFF"></b> % , ບໍ່ສົມດູນ <b class="pl-2" v-text="RF"></b> % <br>
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ <b class="pl-2" v-text="LRR"></b> % , ລໍ້ຂວາ <b class="pl-2" v-text="RRR"></b> % , ບໍ່ສົມດູນ <b class="pl-2" v-text="RR"></b> % <br>
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ <b class="pl-2" v-text="LRM"></b> % , ລໍ້ຂວາ <b class="pl-2" v-text="RRM"></b> % , ບໍ່ສົມດູນ <b class="pl-2" v-text="RM"></b> % <br>
                                        ແຮງເບຣກ ລໍ້ໍໍຊາຍ <b class="pl-2" v-text="LRF"></b> % , ລໍ້ຂວາ <b class="pl-2" v-text="RRF"></b> % , ບໍ່ສົມດູນ <b class="pl-2" v-text="PB"></b> %
                                    </td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="pedal === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">
                                        ບໍ່ນ້ອຍກ່ວາ 50% ຂອງນໍ້າໜັກລົດ<br>
                                        ຜົນຕ່າງຄວາມສົນດູນລະຫວາງແຮງເບຣກລໍ້ຊາຍກັບລໍ້ຂວາຕ້ອງບໍ່ເກີນ<br>
                                        25% ຂອງແຮງເບຣກສູງສຸດຂອງເພົານັ້ນ
                                    </td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ເບຣກມື</td>
                                    <td class="td" align="center">ປະສິດທີພາບລວາມ <b class="pl-2" v-text="PBSUM"></b> %</td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="brk_m === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td">ບໍ່ນ້ອຍກວ່າ 20% ຂອງນໍ້າໜັກລົດ</td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ເບຣກສຸກເສີນ</td>
                                    <td class="td" align="center">ປະສິດທີພາບລວາມ <b class="pl-2" v-text="PKSUM"></b> %</td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="brk_s === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td"></td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ເຄື່ອງວັດ<br>
                                        ຄວາມແຮງ
                                    </td>
                                    <td class="td">
                                        ຜົນການກວດທີ່ 20 km/h ..... ຜົນທີ່ໄດ້ ... %<br>
                                        ຜົນການກວດທີ່ 40 km/h ..... ຜົນທີ່ໄດ້ ... %<br>
                                        ຜົນການກວດທີ່ 60 km/h ..... ຜົນທີ່ໄດ້ ... %<br>
                                    </td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="cy_c === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text small>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td"><br>
                                        ຄ່າຄາດເຄື່ອນບໍ່ເກີນຮ້ອຍລະ 10
                                    </td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ເຄື່ອງຜ່ອນຄາຍ</td>
                                    <td class="td">ເພົ່າທີ່ 1 = .... % , ເພົ່າທີ່ 2 = ... % </td>
                                    <td class="td" align="center">
                                        <v-text class="mt-1 " x-small tile outlined color="black" darks v-if="re_m === 'true'">
                                            <v-text>Y</v-text>
                                        </v-text>
                                        <v-text class="ma-1 " x-small tile outlined color="black" dark v-else>
                                            <v-text small>N</v-text>
                                        </v-text>
                                    </td>
                                    <td class="td"></td>
                                </tr>
                                <tr class="tr">
                                    <td class="td">ນໍ້າໜັກລົງເພົາ</td>
                                    <th colspan="3">
                                        ເພົາ 1 = ....... kg, ເພົາ 2 = ...... kg, ເພົາ 3 = ...... kg, ເພົາ 4 = ...... kg, ລວມ = ...... kg
                                    </th>

                                </tr>
                            </tbody>
                        </table>

                        <table align="center" justify="center" style="font-size: 13px; font-family:Vision,Phetsarath OT; width:90%">
                            <tr colspan="10">

                                <b>
                                    <td class="pl-12" style="font-size: 18px;"> ສະຫຼຸບຜົນການກວດສະພາບ ແລະ ຂໍ້ບົກຜ່ອງ:<b>
                                            <v-text style="font-size: 20px;" class="ma-12" x-small tile color="black" v-if="brk_m === 'true' &&
                                            co2 === 'true' &&
                                            co === 'true' &&
                                            hc === 'true' &&    
                                            db === 'true' && 
                                            light === 'true' && 
                                            light === 'true' && 
                                            s_n === 'true' &&
                                            pedal === 'true' &&
                                            brk_m === 'true' &&
                                            brk_s === 'true' &&
                                            cy_c === 'true' &&
                                            re_m === 'true' &&
                                            v_w === 'true' 

                                            ">
                                                ຜ່ານ
                                            </v-text>
                                            <v-text class="ma-1 " x-small tile color="black" v-else>
                                                ບໍ່ຜ່ານ
                                            </v-text>

                                        </b> </td>

                                </b>

                                <td align="right">
                                    <v-img :src="photo" aspect-ratio="1.7" contain width="200px" height="85px"></v-img>

                                </td>
                                <!-- <td align="right">
                                    <img src="../../../../backend/inspections/download.png" width="100px" />
                                </td> -->
                                <!-- <td colspan="12" align="right">
                            <qrcode :background="background" :size="size" :value="qrcode_url" width="10%"></qrcode>
                        </td> -->
                            </tr>
                        </table>
                    </v-col>
                </v-row>
            </v-col>
        </v-card>
    </v-col>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Print from "vue-print-nb";

Vue.use(Print);
Vue.use(VueAxios, axios);

import VueHtmlToPaper from "vue-html-to-paper";
import AuthService from "@/services/AuthService.js";
// import Qrcode from "v-qrcode/src/index";
import console from "console";

const options = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
    styles: [
        "font-family:'Noto Sans Lao'",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "https://unpkg.com/kidlat-css/css/kidlat.css",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        "https://code.jquery.com/jquery-3.4.1.slim.min.js",
        "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
        "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
        "https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js",
        "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"
    ]
};

Vue.use(VueHtmlToPaper, options);

export default {
    props: ['date'],
    components: {
        // Qrcode
    },

    headers() {
        return [

            {
                text: 'Date',
                value: 'published_at'
            },

        ]
    },

    data: () => ({

        // photo: "",

        console,
        loading: false,
        created_at: "date",
        qrcode_url: "",
        size: 100,
        background: "white",
        SDvalue: "",
        no_organization: "",
        owner_name: "",
        gender: "",
        phone: "",
        village_id: "",
        district_id: "",
        province_id: "",
        idcarcohc: "",
        address: "",

        platc_no: "",
        steering_wheel: "",
        cylinder: "",
        cylinder_size_cc: "",
        engine_no: "",
        fuel: "",
        chassis_no: "",
        width: "",
        length: "",
        height: "",
        passenger_scats: "",

        vehicle_weight: "",
        max_loading: "",
        total_weight: "",
        register_id: "",
        handier: "",
        am: "",
        side_slip: "",
        pedal: "",
        hose: "",
        reservoir_tank: "",
        total_efficiency_foot_brake: "",
        shaft_one_left_brake: "",
        shaft_one_right_brake: "",
        shaft_two_left_brake: "",
        shaft_two_right_brake: "",
        shaft_three_left_brake: "",
        shaft_three_right_brake: "",
        shaft_four_left_brake: "",
        shaft_four_right_brake: "",
        total_efficiency_hand_brake: "",
        total_efficiency_emergency_brake: "",
        tire: "",
        wheel: "",
        bolt: "",
        front_wheel_drive: "",
        chock_absorber: "",
        spring: "",
        air_cleaner: "",
        fan_belt: "",
        radiator: "",
        carburator: "",
        injection_pump: "",

        brk_m: "",
        brk_s: "",
        cy_c: "",
        re_m: "",
        v_w: "",
        s_n: "",
        co2: "",
        co: "",
        hc: "",
        opacity: "",
        clutch: "",
        gear_lever: "",
        drive_shaft: "",
        universal_join: "",
        force_meter_one: "",
        force_meter_two: "",
        force_meter_three: "",
        muffler: "",
        db: "",
        batterry: "",
        light: "",
        horn: "",
        indictor_light: "",
        brake_light: "",
        side_light: "",
        rear_light: "",
        low_beam_left_corner: "",
        low_beam_left_inclined: "",
        low_beam_left_light: "",
        low_beam_right_corner: "",
        low_beam_right_inclined: "",
        low_beam_right_light: "",
        height_beam_left_corner: "",
        height_beam_left_inclined: "",
        height_beam_left_light: "",
        height_beam_right_corner: "",
        height_beam_right_inclined: "",
        height_beam_right_light: "",
        mirror: "",
        wiper: "",

        shaft_one_relaxation_machine: "",
        shaft_two_relaxation_machine: "",
        shaft_one_lose_weight: "",
        shaft_two_lose_weight: "",
        shaft_three_lose_weight: "",
        shaft_four_lose_weight: "",
        qrcode: "",
        status: "",
        registers: [],
        standards: [],
        username: "",

        downloads: [],

    }),

    async created() {

        let res = await axios.get(
            "/api/inspection/inspection_id/" + this.$route.query.inspection_id
        );

        this.inspections = res.data.inspections.inspection_id || "";
        this.SDtitle = res.data.inspections.SDtitle || "";
        this.SDvalue = res.data.inspections.SDvalue || "";
        this.village_id = res.data.inspections.village_id || "";
        this.owner_name = res.data.inspections.owner_name || "";
        this.gender = res.data.inspections.gender || "";
        this.phone = res.data.inspections.phone || "";
        this.address = res.data.inspections.address || "";
        this.VName = res.data.inspections.VName || "";
        this.DName = res.data.inspections.DName || "";
        this.MName = res.data.inspections.MName || "";
        this.TName = res.data.inspections.TName || "";
        this.CName = res.data.inspections.CName || "";
        this.cylinder = res.data.inspections.cylinder || "";
        this.cylinder_size_cc = res.data.inspections.cylinder_size_cc || "";
        this.TRName = res.data.inspections.TRName || "";
        this.platc_no = res.data.inspections.platc_no || "";
        this.steering_wheel = res.data.inspections.steering_wheel || "";
        this.engine_no = res.data.inspections.engine_no || "";
        this.fuel = res.data.inspections.fuel || "";
        this.chassis_no = res.data.inspections.chassis_no || "";
        this.width = res.data.inspections.width || "";
        this.length = res.data.inspections.length || "";
        this.height = res.data.inspections.height || "";
        this.passenger_scats = res.data.inspections.passenger_scats || "";
        this.vehicle_weight = res.data.inspections.vehicle_weight || "";
        this.max_loading = res.data.inspections.max_loading || "";
        this.total_weight = res.data.inspections.total_weight || "";
        this.register_id = res.data.inspections.register_id || "";
        this.platc_no = res.data.inspections.platc_no || "";
        this.steering_wheel = res.data.inspections.steering_wheel || "";
        this.handier = res.data.inspections.handier || "";
        this.am = res.data.inspections.am || "";
        this.side_slip = res.data.inspections.side_slip || "";
        this.pedal = res.data.inspections.pedal || "";
        this.hose = res.data.inspections.hose || "";
        this.reservoir_tank = res.data.inspections.reservoir_tank;
        this.total_efficiency_foot_brake =
            res.data.inspections.total_efficiency_foot_brake || "";
        this.shaft_one_left_brake = res.data.inspections.shaft_one_left_brake || "";
        this.shaft_one_right_brake =
            res.data.inspections.shaft_one_right_brake || "";
        this.shaft_two_left_brake = res.data.inspections.shaft_two_left_brake || "";
        this.shaft_two_right_brake =
            res.data.inspections.shaft_two_right_brake || "";
        this.shaft_three_left_brake =
            res.data.inspections.shaft_three_left_brake || "";
        this.shaft_three_right_brake =
            res.data.inspections.shaft_three_right_brake || "";
        this.shaft_four_left_brake =
            res.data.inspections.shaft_four_left_brake || "";
        this.shaft_four_right_brake =
            res.data.inspections.shaft_four_right_brake || "";
        this.total_efficiency_hand_brake =
            res.data.inspections.total_efficiency_hand_brake || "";
        this.total_efficiency_emergency_brake =
            res.data.inspections.total_efficiency_emergency_brake;
        this.tire = res.data.inspections.tire || "";
        this.wheel = res.data.inspections.wheel || "";
        this.bolt = res.data.inspections.wheel || "";
        this.front_wheel_drive = res.data.inspections.bolt || "";
        this.chock_absorber = res.data.inspections.chock_absorber || "";
        this.spring = res.data.inspections.spring || "";

        this.air_cleaner = res.data.inspections.air_cleaner || "";
        this.fan_belt = res.data.inspections.fan_belt || "";
        this.radiator = res.data.inspections.radiator || "";
        this.carburator = res.data.inspections.carburator || "";
        this.injection_pump = res.data.inspections.injection_pump || "";
        this.brk_m = res.data.inspections.brk_m || "";
        this.brk_s = res.data.inspections.brk_s || "";
        this.cy_c = res.data.inspections.cy_c || "";
        this.re_m = res.data.inspections.re_m || "";
        this.v_w = res.data.inspections.v_w || "";

        this.s_n = res.data.inspections.s_n || "";
        this.co2 = res.data.inspections.co2 || "";
        this.co = res.data.inspections.co || "";
        this.hc = res.data.inspections.hc || "";
        this.opacity = res.data.inspections.opacity || "";
        this.clutch = res.data.inspections.clutch || "";
        this.gear_lever = res.data.inspections.gear_lever || "";
        this.drive_shaft = res.data.inspections.drive_shaft || "";
        this.universal_join = res.data.inspections.universal_join || "";
        this.force_meter_one = res.data.inspections.force_meter_one || "";
        this.force_meter_two = res.data.inspections.force_meter_two || "";
        this.force_meter_three = res.data.inspections.force_meter_three || "";
        this.muffler = res.data.inspections.muffler || "";
        this.db = res.data.inspections.db || "";
        this.batterry = res.data.inspections.batterry || "";
        this.light = res.data.inspections.light || "";
        this.horn = res.data.inspections.horn || "";
        this.indictor_light = res.data.inspections.indictor_light || "";
        this.brake_light = res.data.inspections.brake_light || "";
        this.side_light = res.data.inspections.side_light || "";
        this.rear_light = res.data.inspections.rear_light || "";
        this.low_beam_left_corner = res.data.inspections.low_beam_left_corner || "";
        this.low_beam_left_inclined =
            res.data.inspections.low_beam_left_inclined || "";
        this.low_beam_left_light = res.data.inspections.low_beam_left_light || "";
        this.low_beam_right_corner =
            res.data.inspections.low_beam_right_corner || "";
        this.low_beam_right_inclined =
            res.data.inspections.low_beam_right_inclined || "";
        this.low_beam_right_light = res.data.inspections.low_beam_right_light || "";
        this.height_beam_left_corner =
            res.data.inspections.height_beam_left_corner || "";
        this.height_beam_left_inclined =
            res.data.inspections.height_beam_left_inclined || "";
        this.height_beam_left_light =
            res.data.inspections.height_beam_left_light || "";
        this.height_beam_right_corner =
            res.data.inspections.height_beam_right_corner || "";
        this.height_beam_right_inclined =
            res.data.inspections.height_beam_right_inclined || "";
        this.height_beam_right_light =
            res.data.inspections.height_beam_right_light || "";
        this.mirror = res.data.inspections.mirror || "";
        this.wiper = res.data.inspections.wiper || "";
        this.shaft_one_relaxation_machine =
            res.data.inspections.shaft_one_relaxation_machine || "";
        this.shaft_two_relaxation_machine =
            res.data.inspections.shaft_two_relaxation_machine || "";
        this.shaft_one_lose_weight =
            res.data.inspections.shaft_one_lose_weight || "";
        this.shaft_two_lose_weight =
            res.data.inspections.shaft_two_lose_weight || "";
        this.shaft_three_lose_weight =
            res.data.inspections.shaft_three_lose_weight || "";
        this.shaft_four_lose_weight =
            res.data.inspections.shaft_four_lose_weight || "";
        this.photo = res.data.inspections.photo || "";
        this.qrcode = res.data.inspections.qrcode || "";
        this.status = res.data.inspections.status || "";
        this.created_at = res.data.inspections.created_at || "";
        this.PName = res.data.inspections.PName || "";

        this.co2access = res.data.inspections.co2access || "";
        this.coaccess = res.data.inspections.coaccess || "";
        this.hcaccess = res.data.inspections.hcaccess || "";

        this.LFF = res.data.inspections.LFF || "";
        this.RFF = res.data.inspections.RFF || "";
        this.SFF = res.data.inspections.SFF || "";
        this.RF = res.data.inspections.RF || "";

        this.LRM = res.data.inspections.LRM || "";
        this.RRM = res.data.inspections.RRM || "";
        this.SRM = res.data.inspections.SRM || "";
        this.RM = res.data.inspections.RM || "";

        this.LRR = res.data.inspections.LRR || "";
        this.RRR = res.data.inspections.RRR || "";
        this.SRR = res.data.inspections.SRR || "";
        this.RF = res.data.inspections.RR || "";

        this.LRF = res.data.inspections.LRF || "";
        this.RRF = res.data.inspections.RRF || "";
        this.SRF = res.data.inspections.SRF || "";
        this.PB = res.data.inspections.PB || "";
        //ດຶ່ງຂໍ້ມູນຈາກ access
        this.BSUM = res.data.inspections.BSUM || "";
        //ເບຣກມື
        this.PBSUM = res.data.inspections.PBSUM || "";

        // ເບຣກສຸກເສີນ
        this.PKSUM = res.data.inspections.PKSUM || "";

        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("login");
        }
        this.username = this.$store.getters.getUser.username;
        this.branch_name = this.$store.getters.getUser.branch_name;
        this.branch_id = this.$store.getters.getUser.branch_id;
        // this.userId = this.$store.getters.getUser.id;
        this.secretMessage = await AuthService.getSecretContent();
    },
    mounted() {
        this.getDatacar();
        this.getStandard();
        this.getdata();

    },

    methods: {
        inspectionListTo(branch_id) {
            this.$router.push("InspectionList?branch_id=" + branch_id);
        },
        print() {
            this.$htmlToPaper("print");
        },
        getAllData() {
            axios.get("/api/inspection").then(response => {
                this.inspections = response.data.inspections;
            });
        },
        // getdata() {
        //     axios.get("/api/inspection/download/inspection_id/" + this.$route.query.inspection_id).then(response => {
        //         this.downloads = response.data.downloads;
        //     });
        // },

        getDatacar() {
            this.axios.get("/api/cardata").then(response => {
                this.cardatas = response.data.cardatas;
            });
        },
        mounted() {
            this.loading = 1;

        },
        getStandard() {
            this.axios.get("/api/standardsetting").then(response => {
                this.standards = response.data.standards;
            });
        }
    }
};
</script>

<style>
.fontsize {
    font-size: 24px;
}

.fontsizebody {
    font-size: 16px;
}

.table,
.th,
.td {
    font-size: 12px;
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px;
}

.th .td {
    padding: 5px;
    text-align: left;
}
</style>

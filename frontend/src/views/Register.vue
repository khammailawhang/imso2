<template>
<div class="register">
    <v-content>
        <v-container>
            <v-row align="center" justify="center" no-gutters>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" align="left">
                    <v-card dense flat color="white">
                        <v-card-text>
                            <strong>{{$t("Navbar.Dashboard")}}</strong>
                            <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                            <strong>{{$t("Navbar.Register")}}</strong>
                            <v-icon small class="ma-2">mdi-chevron-right</v-icon>
                            <span>{{$t("Register.Table_Title")}}</span>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="pt-6">
                    <v-card flat color="white">
                        <v-card-title>
                            {{$t('Register.Table_Title')}}
                            <v-spacer />
                            <v-text-field flat dense solo-inverted v-model="search" append-icon="mdi-magnify" :label="$t('Register.Search')" hide-details single-line color="#3d5afe"></v-text-field>
                           
                                <v-tooltip bottom color="#3d5afe">
                                    <template v-slot:activator="{ on }">
                                        <v-btn depressed class="ml-2" color="#3d5afe" v-if="register_export === '1'" v-on="on">
                                            <download-csv :data="registers" name="Register.csv">
                                                <v-icon small color="white">mdi-download</v-icon>
                                            </download-csv>
                                        </v-btn>
                                    </template>
                                    <span>{{ $t("Register.Export_Excel") }}</span>
                                </v-tooltip>

                                <v-tooltip bottom color="#00E676">
                                    <template v-slot:activator="{ on }">
                                        <v-btn class="ml-2" depressed :to="`/${$i18n.locale}/RegisterCreate`" v-if="register_create === '1'" color="#00E676" dark v-on="on">
                                            <v-icon small color="white">mdi-plus-thick</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>{{ $t("Register.Create") }}</span>
                                </v-tooltip>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table  :headers="headers" :items="registers" :search="search">
                                <template v-slot:item.owner_name="{ item }">
                                   {{item.gender}} - {{item.owner_name}}
                                </template>
                                <template v-slot:item.status="{ item }">
                                    <v-chip :color="getColor(item.status)" v-if="item.status" dark small>{{ item.status }}</v-chip>
                                    <v-chip :color="getColor(item.status)" v-else dark small>Inactive</v-chip>
                                </template>
                                <template v-slot:item.action="{ index, item }">
                                        <v-tooltip left color="#3d5afe">
                                            <template v-slot:activator="{ on }">
                                                <v-btn small depressed @click="detailItem(item.register_id)" color="#3d5afe" dark v-on="on" v-if="register_detail === '1'">
                                                    <v-icon color="white" small>mdi-eye</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t("Type.description")}}</span>
                                        </v-tooltip>
                                        <v-tooltip left color="amber">
                                            <template v-slot:activator="{ on }">
                                                <v-btn small class="ml-2" depressed @click="editItem(item.register_id)" v-if="register_update === '1'" color="amber" dark v-on="on">
                                                    <v-icon color="white" small>mdi-pencil</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t("Type.Edit")}}</span>
                                        </v-tooltip>
                                        <v-tooltip right color="red">
                                            <template v-slot:activator="{ on }">
                                                <v-btn class="ml-2" small depressed @click="deleteItem(item.register_id)" v-if="register_delete === '1'" color="red" dark v-on="on">
                                                    <v-icon color="white" small>mdi-delete</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>{{$t("Type.Delete")}}</span>
                                        </v-tooltip>
                                </template>

                                <template v-slot:item.platc_no="{ item }">
                                    <v-tooltip left color="amber">
                                        <template v-slot:activator="{ on }">
                                            <v-btn width="80px" small @click="detailItem(item.register_id)" depressed :color="getColorplatc_no(item.platc_no)" v-on="on">{{ item.TRName }} {{ item.platc_no }}</v-btn>
                                        </template>
                                        <span>{{$t("Type.description")}}</span>
                                    </v-tooltip>
                                </template>
                                <template v-slot:item.created_at="{ item }">
                                    <v-text>{{ item.created_at | formatDate }}</v-text>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
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
import JsonCSV from "vue-json-csv";
import format from "vue-text-format";
import AuthService from "@/services/AuthService.js";
Vue.use(format);
Vue.use(VueAxios, axios);
Vue.component("downloadCsv", JsonCSV);
export default {
    data: () => ({
        search: "",

        headers: [{
                text: "ເຈົ້າຂອງລົດ",
                align: "left",
                value: "owner_name",
                width: "140px"
            },
            {
                text: "ແຂວງ",
                value: "PName",
            },
            {
                text: "ທະບຽນລົດ",
                value: "platc_no",
            },
            {
                text: "ຍີ່ຫໍ້",
                value: "MName",
            },
            {
                text: "ປະເພດ",
                value: "TName",
            },
            // { text: "ສີລົດ", value: "CName", width: "90px" },
            // { text: "ພວງມາໄລ", value: "steering_wheel", width: "100px" },
            // { text: "ນໍ້າມັນ", value: "fuel", width: "100px" },
            // { text: "ຈຳນວນສູບ", value: "cylinder", width: "100px" },
            // { text: "ຄວາມແຮງ", value: "cylinder_size_cc", width: "100px" },
            // { text: "ເລກຈັກ", value: "engine_no", width: "10px" },
            // { text: "ເລກຖັງ", value: "chassis_no", width: "130px" },
            // { text: "ຂະໜາດລົດ(ກ້ວາງ)", value: "width", width: "100px" },
            // { text: "ຂະໜາດລົດ(ຍາວ)", value: "length", width: "100px" },
            // { text: "ຂະໜາດລົດ(ສູງ)", value: "height", width: "100px" },
            // { text: "ຈຳນວນບ່ອນນັ່ງໂດຍສານ", value: "passenger_scats", width: "150px" },
            // { text: "ນໍ້າໜັກລົດ", value: "vehicle_weight", width: "100px" },
            // { text: "ນໍ້າໜັກບັນທຸກ", value: "max_loading", width: "100px" },
            // { text: "ນໍ້າໜັກລວມ", value: "total_weight", width: "100px" },
            { text: "ວັນທີ", value: "created_at"},
            {
                text: "ຈັດການ",
                value: "action",
                width: "200px",
                align: "right"
            }
        ],
        registers: [],
        editedIndex: -1,
        editedItem: {
            orgaization_name: "",
            phone: "",
            mobile: "",
            email: "",
            facebookPage: "",
            website: "",
            youtube: "",
            address: "",
            logo: "",
            status: ""
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },

    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("/");
        } else if (this.$store.getters.getUser.register === "1") {
            this.initialize();
            this.userId = this.$store.getters.getUser.users_id;
            this.register = this.$store.getters.getUser.register;
            this.register_create = this.$store.getters.getUser.register_create;
            this.register_update = this.$store.getters.getUser.register_update;
            this.register_delete = this.$store.getters.getUser.register_delete;
            this.register_detail = this.$store.getters.getUser.register_detail;
            this.register_upload = this.$store.getters.getUser.register_upload;
            this.register_report = this.$store.getters.getUser.register_report;
            this.register_export = this.$store.getters.getUser.register_export;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("/");
        }
    },

    methods: {
        getColor(status) {
            if (status == "Active") return "indigo";
            else return "grey";
        },
        getColorplatc_no(platc_no) {
            if (platc_no > 9000) return "#F9A825 ";
            else return "amber";
        },
        initialize() {
            this.axios.get("/api/register").then(response => {
                this.registers = response.data.registers;
            });
        },
        detailItem(register_id) {
            this.$router.push("RegisterDetail?register_id=" + register_id);
        },
        editItem(register_id) {
            this.$router.push("RegisterEdit?register_id=" + register_id);
        },
        async deleteItem(register_id, index) {
            if (confirm("Ayre you sure delete ?")) {
                let res = this.axios
                    .delete("/api/register/delete/" + register_id)
                    .then();
                if (res) {
                    this.registers.splice(index, 1);
                }
            }
        }
    }
};
</script>

<style scoped>
.font-weight-black {
    font-size: 58px;
}
</style>

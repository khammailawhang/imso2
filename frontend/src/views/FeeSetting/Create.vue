<template>
<div class="create">
    <v-row align="start" justify="center">
        <v-col cols="12" md="5">
            <v-card flat>
                <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" flat dark>
                    <v-icon color="indigo">mdi-xing</v-icon>
                    <v-toolbar-title class="ml-0 pl-2">
                        <h5 class="indigo--text">{{ $t("FeeSetting.Create_Title") }}</h5>
                    </v-toolbar-title>
                    <v-spacer />
                    <v-tooltip bottom color="indigo">
                        <template v-slot:activator="{ on }">
                            <v-btn :to="`/${$i18n.locale}/FeeSetting`" small fab color="indigo" dark v-on="on">
                                <v-icon>mdi-undo-variant</v-icon>
                            </v-btn>
                        </template>
                        <span>{{ $t("Fee.Back") }}</span>
                    </v-tooltip>
                </v-app-bar>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" lg="6" md="6" sm="4">
                            <span class="pt-2">{{ $t("Model.Name") }}</span>
                            <v-select :items="models" v-model="model_id" item-text="name" item-value="model_id" required></v-select>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" sm="4">
                            <span class="pt-2">{{ $t("Type.Name") }}</span>
                            <v-select :items="types" v-model="type_id" item-text="name" item-value="type_id" required></v-select>
                        </v-col>
                        <v-col cols="12" lg="12" md="6" sm="4">
                            <span class="pt-2">{{ $t("FeeSetting.Price") }}</span>
                            <v-text-field v-model="price" type="text" autocomplete="off" />
                        </v-col>
                        <v-col cols="12" lg="12" md="6" sm="4">
                            <v-checkbox class="pr-3" :label="$t('FeeSetting.Status')" v-model="status" value="Active" color="indigo"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="#00C853" class="white--text" @click="save" v-if="fee_setting_create ==='1'">
                        <v-icon>save</v-icon>
                        <!-- {{$t('District.Save')}} -->
                    </v-btn>
                    <v-btn color="red" @click="reset" class="white--text">
                        <v-icon>cancel</v-icon>
                        <!-- {{
              $t("FeeSetting.Cancel")
              }}-->
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios);
export default {
    data: () => ({
        items: [{
                text: "ໜ້າຫຼັກ",
                disabled: false,
                href: "/Dashboard"
            },
            {
                text: "ຕັ້ງຄ່າ",
                disabled: false,
                href: "/userz"
            },
            {
                text: "ເມືອງ",
                disabled: false,
                href: "../District"
            },
            {
                text: "ເພີ່ມຄ່າທຳນຽມ",
                disabled: true
            }
        ],
        headers: [{
                text: "ຊື່ຍີ່ຫໍ້",
                align: "left",
                sortable: false,
                value: "name"
            },
            {
                text: "ສະຖານະ",
                value: "status"
            },
            {
                text: "ຈັດການ",
                value: "action",
                sortable: false
            }
        ],
        snackbar: false,
        snackbarText: "",
        form: {
            name: "",
            price: "",
            model_id: "",
            type_id: "",
            status: ""
        },
        model_id: [],
        type_id: [],
        price: "",
        status: "",
        models: [],
        types: []
    }),

    watch: {
        variant(val) {
            if (val.includes("filter")) {
                this.value = true;
            }
        },
        model_id() {
            this.getType();
        }
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("login");
        } else if (this.$store.getters.getUser.fee_setting_create === "1") {
            this.getType();
            this.getModel();
            this.fee_setting_create = this.$store.getters.getUser.fee_setting_create;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("../login");
        }
    },
    methods: {
        async save() {
            let res = await this.axios.post("/api/feesetting/create", {
                model_id: this.model_id || "",
                type_id: this.type_id || "",
                price: this.price || "",
                status: this.status || ""
            });
            if (res) {
                this.$router.replace("../FeeSetting");
            }
        },
        async reset() {
            (this.form.price = ""),
            (this.form.model_id = ""),
            (this.form.type_id = ""),
            (this.form.status = false);
        },
        getModel() {
            this.axios.get("/api/model").then(response => {
                this.models = response.data.models;
            });
        },
        async getType() {
            let res = await this.axios.get("/api/feesetting/type", {
                params: {
                    model_id: this.model_id
                }
            });
            this.types = res.data.types;
        }
    }
};
</script>

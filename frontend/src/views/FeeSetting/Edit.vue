<template>
<div class="edit">
    <v-row align="center" justify="center">
        <v-col cols="12" md="5">
            <v-card flat>
                <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" flat dark>
                    <v-icon color="indigo">mdi-xing</v-icon>
                    <v-toolbar-title class="ml-0 pl-2">
                        <h5 class="indigo--text">{{ $t("FeeSetting.Edit_Title") }}</h5>
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
                            <v-select :items="types" v-model="type_id" item-text="TName" item-value="type_id" required></v-select>
                        </v-col>
                        <v-col cols="12" lg="12" md="6" sm="4">
                            <span class="pt-2">{{ $t("Model.Name") }}</span>
                            <v-text-field v-model="price" type="text" autocomplete="off" />
                        </v-col>
                        <v-col cols="12" lg="12" md="6" sm="4">
                            <v-checkbox class="pr-3" :label="$t('FeeSetting.Status')" v-model="status" value="Active" color="indigo"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="#00C853" class="white--text" @click="update" v-if="fee_setting_update ==='1'">
                        <v-icon>save</v-icon>
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
    data() {
        return {
            price: "",
            model_id: "",
            type_id: "",
            status: "",
            models: [],
            types: []
        };
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("login");
        } else if (this.$store.getters.getUser.fee_setting_update === "1") {
            let res = await axios.get(
                "/api/feesetting/fs_id/" + this.$route.query.fs_id
            );
            this.price = res.data.feesettings.price || "";
            this.model_id = res.data.feesettings.model_id || "";
            this.type_id = res.data.feesettings.type_id || "";
            this.status = res.data.feesettings.status || "";
            this.getType();
            this.getModel();
            this.fee_setting_update = this.$store.getters.getUser.fee_setting_update;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("../login");
        }
    },
    methods: {
        async update() {
            let res = await this.axios.put("/api/feesetting/update", {
                fs_id: this.$route.query.fs_id,
                price: this.price,
                model_id: this.model_id,
                type_id: this.type_id,
                status: this.status
            });

            if (res) {
                this.$router.replace("../FeeSetting");
            }
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

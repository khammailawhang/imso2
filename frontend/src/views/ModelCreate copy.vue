<template>
<div class="create">
    <v-row align="center" justify="center">
        <v-col cols="12" xl="12" lg="4" md="12" sm="11">
            <ValidationObserver ref="observer">
                <v-card flat><br>
                    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" flat dark>
                        <v-icon color="indigo">mdi-xing</v-icon>
                        <v-toolbar-title class="ml-0 pl-4">
                            <h5 class="indigo--text">{{ $t("Model.Create_Title") }}</h5>
                        </v-toolbar-title>
                        <v-spacer />
                        <v-tooltip bottom color="indigo">
                            <template v-slot:activator="{ on }">
                                <v-btn :to="`/${$i18n.locale}/Model`" small fab color="indigo" dark v-on="on">
                                    <v-icon small>mdi-undo-variant</v-icon>
                                </v-btn>
                            </template>
                            <span>{{ $t("Fee.Back") }}</span>
                        </v-tooltip>
                    </v-app-bar>
                    <v-card-text>
                        <v-form align="left">

                            <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                                <span class="pt-2">{{ $t("Model.Name") }}
                                    <v style="color:red" v-for="(error, name) in errors" :key="name"><b>*</b></v>
                                </span>

                                <v-text-field v-model="form.name" type="text" autocomplete="off" />

                            </ValidationProvider>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />

                        <v-tooltip top color="indigo">

                            <template v-slot:activator="{ on }">
                                <v-btn color="#00C853" v-on="on" class="white--text mr-2" @click="save">
                                    <v-icon>save</v-icon>
                                </v-btn>

                            </template>
                            <span>{{$t("Type.Save")}}</span>
                        </v-tooltip>

                        <v-tooltip top color="indigo">
                            <template v-slot:activator="{ on }">
                                <v-btn color="red" @click="reset" v-on="on" class="white--text">
                                    <v-icon>cancel</v-icon>
                                </v-btn>
                            </template>
                            <span>{{$t("Type.Cancel")}}</span>
                        </v-tooltip>
                    </v-card-actions>
                    <v-alert :timeout="timeout" v-if="msg === 'Success'" dismissible :color="getColor(msg)" class="white--text" flat>{{ msg }}</v-alert>
                    <v-alert :timeout="timeout" v-if="msg === 'Error'" dismissible :color="getColor(msg)" class="white--text" flat>{{ msg }}</v-alert>
                </v-card>
            </ValidationObserver>
        </v-col>
    </v-row>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import console from "console";
import AuthService from "@/services/AuthService.js";
import {
    ValidationProvider,

} from "vee-validate/dist/vee-validate.full";
import {
    ValidationObserver
} from "vee-validate/dist/vee-validate.full";

Vue.use(VueAxios, axios);
export default {
    components: {

        ValidationProvider,
        ValidationObserver
    },
    data: () => ({
        snackbar: false,
        msg: "",
        timeout: 2000,
        form: {
            name: ""
        }
    }),

    watch: {
        variant(val) {
            if (val.includes("filter")) {
                this.value = true;
            }
        }
    },

    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push("/");
        } else if (this.$store.getters.getUser.model_create === "1") {
            this.getModel();
            this.model = this.$store.getters.getUser.model;
            this.secretMessage = await AuthService.getSecretContent();
        } else {
            this.$store.dispatch("logout");
            this.$router.push("./login");
        }
    },

    methods: {
        async save() {

            const isValid = await this.$refs.observer.validate(
                this.form.name != false &&
                this.axios.post("/api/model/create", this.form).then(response => {
                    this.form.name = response.data.form.name;
                }),

            );
            if (!isValid) {

                // alert("Please Save");

            } else {
                console.log("is valid");

                this.$router.replace("./model");

            }
        },

        // async save() {
        //     let res = await this.axios.post("/api/model/create", this.form);
        //     if (res) {
        //         this.$router.replace("./model");
        //     }
        // },

        async reset() {
            this.form.name = "";
        },
        getColor(msg) {
            if (msg == "Success") return "green";
            else return "red";
        }
    }
};
</script>

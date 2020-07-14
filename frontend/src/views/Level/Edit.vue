<template>
<div class="edit">
    <v-row align="center" justify="center">
        <v-col cols="12" lg="6" md="6" sm="12">
            <v-card flat>
                <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" flat dark>
                    <v-icon color="indigo">mdi-xing</v-icon>
                    <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
                        <h5 class="indigo--text">{{ $t("Level.Edit_Title") }}</h5>
                    </v-toolbar-title>
                    <v-spacer />
                    <v-tooltip bottom color="indigo">
                        <template v-slot:activator="{ on }">
                            <v-btn class="ma-2 hidden-xl-only" href="../Level" icon color="indigo" dark v-on="on">
                                <v-icon>mdi-undo-variant</v-icon>
                            </v-btn>
                        </template>
                        <span>{{ $t("Fee.Back") }}</span>
                    </v-tooltip>
                </v-app-bar>
                <v-card-text>
                    <v-form>
                        <span class="pt-2">{{ $t("Level.Name") }}</span>
                        <v-text-field v-model="name" type="text" dense hide-details class="indigo--text" color="indigo" autocomplete="off" />
                        <span class="pt-2">{{ $t("Branch.Name") }}</span>
                        <v-select :items="branchs" v-model="branch_id" item-text="name" item-value="branch_id" required></v-select>
                        <v-checkbox v-model="status" dense hide-details :label="$t('Level.Status')" color="indigo"></v-checkbox>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn rounded class="white--text ma-2" color="indigo" @click="update">
                        <v-icon>mdi-plus</v-icon> {{ $t("Level.Update") }}
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
Vue.use(VueAxios, axios);
export default {
    data() {
        return {
            level_id: "",
            name: "",
            status: "",
            levels: [],
            branchs: [],
        };
    },
    async created() {
        let res = await axios.get(
            "/api/level/level_id/" + this.$route.query.level_id
        );
        this.branch_id = res.data.levels.branch_id || "";
        this.name = res.data.levels.name || "";
        this.status = res.data.levels.status || "";
        this.getBranch();
    },
    methods: {
        async update() {
            let res = await this.axios.put("/api/level/update", {
                level_id: this.$route.query.level_id,
                branch_id: this.branch_id,
                name: this.name,
                status: this.status
            });

            if (res) {
                this.$store.dispatch("setSnackbar", {
                    showing: true,
                    text: `ແກ້ໄຂສຳເລັດ.`
                });
                this.$router.replace("../Level");
            }
        },
        getBranch() {
            this.axios.get("/api/branch").then(response => {
                this.branchs = response.data.branchs;
            });
        }
    }
};
</script>

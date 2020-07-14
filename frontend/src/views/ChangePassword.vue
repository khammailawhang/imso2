<template>
  <div class="create">
    <v-content>
      <v-container>
        <v-row align="start" justify="center">
          <v-col cols="12" xl="12" lg="4" md="6" sm="8">
            <v-card flat>
              <v-card-title>{{ $t("ChangePassword.Title") }}</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="username"
                  outlined
                  color="#3d5afe"
                  :label="$t('ChangePassword.Username')"
                  type="text"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  outlined
                  color="#3d5afe"
                  :label="$t('ChangePassword.NewPassword')"
                  type="password"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  v-model="password_repeat"
                  outlined
                  color="#3d5afe"
                  :label="$t('ChangePassword.Password_Repeat')"
                  type="password"
                  autocomplete="off"
                ></v-text-field>
                <v-btn
                  color="#00E676"
                  depressed
                  class="white--text"
                  large
                  block
                  @click="update"
                >{{ $t("ChangePassword.Save") }}</v-btn>

                <v-alert
                  v-if="msg === true"
                  text
                  prominent
                  color="#00E676"
                >{{ $t("ChangePassword.UpdateSuccess") }}</v-alert>
                <v-alert
                  v-if="msg === false"
                  text
                  prominent
                  color="red"
                >{{ $t("ChangePassword.UpdateError") }}</v-alert>
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
Vue.use(VueAxios, axios);
import AuthService from "@/services/AuthService.js";
export default {
  data: () => ({
    username: "",
    password: "",
    password_repeat: "",

    msg: "",
    timeout: 2000
  }),
  async created() {
    let res = await axios.get(
      "/api/user/users_id/" + this.$route.query.users_id
    );
    this.users_id = res.data.users.users_id || "";
    this.username = res.data.users.username || "";
  },
  methods: {
    async update() {
      try {
        const credentials = {
          users_id: this.users_id,
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat
        };
        const response = await AuthService.updatePassword(credentials);
        if (response) {
          this.msg = response.msg;
        }
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>

<template>
  <div id="login">
    <v-app-bar flat app color="#f9faff" class="grey--text text--lighten-5" dark>
     
    </v-app-bar>
    <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" xl="3" lg="4" md="5" sm="6">
            <v-card flat>
              <v-card-title>
                <v-row><v-col cols="12" align="center"><v-icon size="80" color="#3d5afe">mdi-account</v-icon></v-col></v-row>
              </v-card-title>
              <v-card-text>
                <v-row class="pr-6 pl-5 pb-6">
                  <v-col cols="12">
                    <v-text-field
                      label="Username"
                      v-model="username"
                      color="#3D5AFE"
                      type="text"
                      autocomplete="off"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye'"
                      :type="showPassword ? 'text' : 'password'"
                      name="input-10-1"
                      color="#3D5AFE"
                      autocomplete="off"
                      label="Password"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="#3D5AFE"
                      depressed
                      block
                      class="white--text mr-2 text-capitalize"
                      @click="login"
                    >Login</v-btn> 
                    <v-spacer />
                    <v-alert dense text v-if="msg">{{ msg }}</v-alert>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
      showPassword: false
    };
  },

  methods: {
    async reset() {
      (this.username = ""), (this.password = "");
    },
    async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("`/${$i18n.locale}/Login`");
    }
  },
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;

        const token = response.token;
        const user = response.user;
        this.$store.dispatch("login", {
          token,
          user
        });
        this.$router.push("Started");
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>

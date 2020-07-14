<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Management System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" text to="/">Home</v-btn>
      <v-btn class="ma-2" text to="/sign-up">Register</v-btn>
       <h1>{{ username }}</h1>
            <p>{{ secretMessage }}</p>
      <v-btn class="ma-2" text @click="logout">Logout</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js';
export default {
  data() {
    return {
      secretMessage: '',
      username: ''
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }
    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
};
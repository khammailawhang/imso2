<template>
    <div id="about">
        <h2>About</h2>
    </div>
</template>
<script>
import AuthService from '@/services/AuthService.js';
export default {
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }
    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
  }
};
</script>
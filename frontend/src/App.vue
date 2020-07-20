<template>
  <v-app id="keep" class="fontsize">
    <div id="nav" class="pt-12 mt-8">
      <Navbar/>
    </div>
     <router-view></router-view>
  </v-app>
</template>
<script>
import AuthService from "@/services/AuthService.js";
import Navbar from './views/Navbar.vue'

export default {
  components:{
    Navbar
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("");
    }
    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
  }
};
</script> 

<style>
#keep{
  font-family: 'Arial','Roboto','Vision','boonhome','Noto Sans Lao','Phetsarath OT','Saysettha OT',Roboto, Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background-color: #fafafa;
}

.li{
  font-family: 'Vision','Noto Sans Lao','Phetsarath OT','Saysettha OT',Roboto, Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
}
.indigo--text{
  font-size: 16px;
}
.white--text{
  font-size: 14px;
}
</style>

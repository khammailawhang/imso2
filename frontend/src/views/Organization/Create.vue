<template>
  <div class="create">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" scrollable>
        <v-card flat>
          <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="white"
            flat
            dark
          >
            <v-icon color="indigo">mdi-xing</v-icon>
            <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
              <h5 class="indigo--text">
                {{ $t("Organization.Create_Title") }}
              </h5>
            </v-toolbar-title>
            <v-spacer />
            <v-tooltip bottom color="indigo">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="ma-2 hidden-xl-only"
                  href="../Organization"
                  icon
                  color="indigo"
                  dark
                  v-on="on"
                >
                  <v-icon>mdi-undo-variant</v-icon>
                </v-btn>
              </template>
              <span>{{ $t("Fee.Back") }}</span>
            </v-tooltip>
          </v-app-bar>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ຊື່ົອົງກອນ"
                    v-model="organization_name"
                    type="text"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ເລກທີ"
                    v-model="no_organization"
                    type="text"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ເບີໂທລະສັບ"
                    v-model="phone"
                    type="number"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ມືຖື"
                    v-model="mobile"
                    type="number"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ອີເມວ"
                    v-model="email"
                    maxlength="255"
                    type="email"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ເຟສບຸກ"
                    v-model="facebook"
                    type="text"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ເວບໄຊ"
                    v-model="website"
                    type="text"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ຢູທູບ"
                    v-model="youtube"
                    type="text"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="ທີ່ຢູ່"
                    v-model="address"
                    type="text"
                    autocomplete="off"
                /></v-col>
                <v-col cols="12" md="6">
                  <input type="file" ref="logo" @change="onSelect" />
                </v-col>
                <v-col cols="12" md="6">
                  <div
                    class="base-image-input"
                    :style="{ 'background-image': `url(${imageData})` }"
                    @click="chooseImage"
                  >
                    <span v-if="!imageData" class="placeholder">
                      Choose an Image
                    </span>
                    <input
                      class="file-input"
                      ref="logo"
                      type="file"
                      @change="onSelect"
                      @input="onSelectFile"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="6"
                  ><v-switch
                    v-model="status"
                    label="ສະຖານະ"
                    value="Active"
                  ></v-switch
                ></v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="grey" @click="reset" class="white--text"
              >ຍົກເລີກ</v-btn
            >
            <v-btn text color="indigo" class="white--text" @click="save" v-if="company_information_create === '1'"
              ><v-icon>mdi-plus</v-icon> {{ $t("Organization.Save") }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import console from "console.log";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AuthService from "@/services/AuthService.js";
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    orgaization_name: "",
    no_organization: "",
    phone: "",
    mobile: "",
    email: "",
    facebook: "",
    website: "",
    youtube: "",
    address: "",
    logo: "",
    status: true,
    imageData: null
  }),
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("login");
    }
    else if(this.$store.getters.getUser.company_information_create === '1'){
      this.getModel();
      this.company_information_create = this.$store.getters.getUser.company_information_create;
      this.secretMessage = await AuthService.getSecretContent();
    }else{
      this.$store.dispatch("logout");
      this.$router.push("../login");
    }
  },
  methods: {
    chooseImage() {
      this.$refs.logo.click();
    },
    onSelectFile() {
      const input = this.$refs.logo;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const logo = this.$refs.logo.files[0];
      this.logo = logo;
      if (!allowedTypes.includes(logo.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (logo.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
    },
    async save() {
      const formData = new FormData();
      formData.append("organization_name", this.organization_name);
      formData.append("no_organization", this.no_organization);
      formData.append("phone", this.phone);
      formData.append("mobile", this.mobile);
      formData.append("email", this.email);
      formData.append("facebook", this.facebook);
      formData.append("website", this.website);
      formData.append("youtube", this.youtube);
      formData.append("address", this.address);
      formData.append("logo", this.logo);
      formData.append("status", this.status);
      try {
        await axios.post("/api/organization1/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.message = "Uploaded!!";
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
    },
    async reset() {
      (this.form.orgaization_name = ""),
        (this.form.no_organization = ""),
        (this.form.phone = ""),
        (this.form.mobile = ""),
        (this.form.email = ""),
        (this.form.facebook = ""),
        (this.form.website = ""),
        (this.form.youtube = ""),
        (this.form.address = ""),
        (this.form.status = false);
    }
  }
};
</script>
<style scoped>
.base-image-input {
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #e0e0e0;
}
.file-input {
  display: none;
}
</style>

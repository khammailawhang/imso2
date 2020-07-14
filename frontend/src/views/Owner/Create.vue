<template>
  <div class="create">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-breadcrumbs :items="items" large></v-breadcrumbs>
        <v-card class="elevation-12">
          <v-toolbar color="grey lighten-5" class="grey--text" dark flat>
            <v-toolbar-title>ລົງທະບຽນເຈົ້າຂອງລົດ</v-toolbar-title>
            <v-spacer />
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon color="grey" href="../Owner">
                  <v-icon small>mdi-arrow-left</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="ຊື່ ແລະ ນາມສະຸນ"
                  v-model="form.full_name"
                  type="text"
                  autocomplete="off"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="genders"
                  label="ເພດ"
                  v-model="form.gender"
                  item-text="name"
                  item-value="model_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="ເບີໂທລະສັບ"
                  v-model="form.phone"
                  type="text"
                  autocomplete="off"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="villages"
                  label="ບ້ານ"
                  v-model="form.village_id"
                  item-text="name"
                  item-value="village_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="districts"
                  label="ເມືອງ"
                  v-model="form.district_id"
                  item-text="name"
                  item-value="district_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="provinces"
                  label="ແຂວງ"
                  v-model="form.province_id"
                  item-text="name"
                  item-value="province_id"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="12">
                <v-textarea v-model="form.address" label="ທີ່ຢູ່" value></v-textarea>
              </v-col>
              <v-col cols="12" md="12">
                <v-switch v-model="form.status" label="ສະຖານະ" value="Active"></v-switch>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="grey" @click="reset" class="white--text">ຍົກເລີກ</v-btn>
            <v-btn text color="primary" @click="save">ບັນທຶກ</v-btn>
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
  data: () => ({
    items: [
      {
        text: "ໜ້າຫຼັກ",
        disabled: false,
        href: "/Dashboard"
      },
      {
        text: "ລົງທະບຽນ",
        disabled: false,
        href: "../Register"
      },
      {
        text: "ລົງທະບຽນເຈົ້າຂອງລົດ",
        disabled: true
      }
    ],
    status: false,
    form: {
      full_name: "",
      gender: "",
      phone: "",
      village_id: "",
      district_id: "",
      province_id: "",
      address: "",
      status: ""
    },
    villages: [],
    districts: [],
    provinces: [],
    genders: ["ຍິງ", "ຊາຍ", "ອື່ນໆ"]
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  created() {
    this.getVillage();
    this.getDistrict();
    this.getProvince();
  },
  methods: {
    async save() {
      let res = await this.axios.post("/api/owner/create", this.form);
      if (res) {
        this.$router.replace("../Owner");
      }
    },
    async reset() {
      (this.form.full_name = ""),
        (this.gender = ""),
        (this.phone = ""),
        (this.address = ""),
        (this.form.model_id = ""),
        (this.form.type_id = ""),
        (this.form.status = false);
    },
    getVillage() {
      this.axios.get("/api/village").then(response1 => {
        this.villages = response1.data.villages;
      });
    },
    getDistrict() {
      this.axios.get("/api/district").then(response => {
        this.districts = response.data.districts;
      });
    },
    getProvince() {
      this.axios.get("/api/province").then(response => {
        this.provinces = response.data.provinces;
      });
    }
  }
};
</script>
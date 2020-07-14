<template>
  <div class="edit">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-breadcrumbs :items="items" large></v-breadcrumbs>
        <v-card class="elevation-12">
          <v-toolbar color="grey lighten-5" class="grey--text" dark flat>
            <v-toolbar-title>ແກ້ໄຂຄ່າທຳນຽມ</v-toolbar-title>
            <v-spacer />
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon color="grey" v-on="on" href="../Owner">
                  <v-icon small>mdi-arrow-left</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6"
                ><v-text-field
                  label="ຊື່ ແລະ ນາມສະຸນ"
                  v-model="full_name"
                  type="text"
                  autocomplete="off"
              /></v-col>
              <v-col cols="12" md="6"
                ><v-select
                  :items="genders"
                  label="ເພດ"
                  v-model="gender"
                  item-text="gender"
                  item-value="model_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" md="6"
                ><v-text-field
                  label="້ເບີໂທລະສັບ"
                  v-model="phone"
                  type="text"
                  autocomplete="off"
              /></v-col>
              <v-col cols="12" md="6"
                ><v-select
                  :items="villages"
                  label="ບ້ານ"
                  v-model="village_id"
                  item-text="name"
                  item-value="village_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" md="6"
                ><v-select
                  :items="districts"
                  label="ເມືອງ"
                  v-model="district_id"
                  item-text="name"
                  item-value="district_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" md="6"
                ><v-select
                  :items="provinces"
                  label="ແຂວງ"
                  v-model="province_id"
                  item-text="name"
                  item-value="province_id"
                  required
                ></v-select
              ></v-col>
              <v-col cols="12" md="12"
                ><v-textarea
                  v-model="address"
                  label="ທີ່ຢູ່"
                  value=""
                ></v-textarea
              ></v-col>
              <v-col cols="12" md="12"
                ><v-switch
                  v-model="status"
                  label="ສະຖານະ"
                  value="Active"
                ></v-switch
              ></v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="primary" @click="update">ແກ້ໄຂ</v-btn>
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
      items: [
        {
          text: "ໜ້າຫຼັກ",
          disabled: false,
          href: "/Dashboard"
        },
        {
          text: "ຕັ້ງຄ່າ",
          disabled: false,
          href: "/user"
        },
        {
          text: "ກຳນົດຄ່າທຳນຽມ",
          disabled: false,
          href: "../FeeSetting"
        },
        {
          text: "ແກ້ໄຂຂໍ້ມູນເຈົ້າຂອງລົດ",
          disabled: true
        }
      ],
      full_name: "",
      gender: "",
      phone: "",
      address: "",
      village_id: "",
      district_id: "",
      province_id: "",
      status: "",
      genders: ["ຍິງ", "ຊາຍ", "ອື່ນໆ"],
      villages: [],
      districts: [],
      provinces: []
    };
  },
  async created() {
    let res = await axios.get(
      "/api/owner/owner_id/" + this.$route.query.owner_id
    );
    this.full_name = res.data.owners.full_name || "";
    this.gender = res.data.owners.gender || "";
    this.phone = res.data.owners.phone || "";
    this.address = res.data.owners.address || "";
    this.village_id = res.data.owners.village_id || "";
    this.district_id = res.data.owners.district_id || "";
    this.province_id = res.data.owners.province_id || "";
    this.status = res.data.owners.status || "";
    this.getVillage();
    this.getDistrict();
    this.getProvince();
  },
  methods: {
    async update() {
      let res = await this.axios.put("/api/owner/update", {
        owner_id: this.$route.query.owner_id,
        full_name: this.full_name,
        gender: this.gender,
        phone: this.phone,
        address: this.address,
        village_id: this.village_id,
        district_id: this.district_id,
        province_id: this.province_id,
        status: this.status
      });

      if (res) {
        this.$router.replace("../Owner");
      }
    },
    getVillage() {
      this.axios.get("/api/village").then(response => {
        this.villages = response.data.villages;
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

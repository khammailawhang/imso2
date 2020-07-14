<template>
  <div class="create">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Village.Create_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-autocomplete
                      outlined
                      dense
                      color="#3d5afe"
                      :items="districts"
                      v-model="form.district_id"
                      item-text="DName"
                      item-value="district_id"
                      required
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("District.Name") }}
                          <v
                            style="color:red"
                            v-for="(error, district_id) in errors"
                            :key="district_id"
                          >
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-autocomplete>
                  </ValidationProvider>
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-text-field
                      outlined
                      dense
                      color="#3d5afe"
                      v-model="form.name"
                      type="text"
                      autocomplete="off"
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("Village.Name") }}
                          <v style="color:red" v-for="(error, name) in errors" :key="name">
                            <b>*</b>
                          </v>
                        </span>
                      </template>
                    </v-text-field>
                  </ValidationProvider>
                </v-card-text>
                <v-card-actions class="pr-4 pb-4">
                  <v-spacer />
                  <v-btn-toggle dense>
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="save">
                      <v-icon color="white">check</v-icon>
                      {{$t("Type.Save")}}
                    </v-btn>
                    <v-btn
                      color="#B0BEC5"
                      depressed
                      :to="`/${$i18n.locale}/Village`"
                      class="white--text"
                    >{{$t("Type.Back")}}</v-btn>
                  </v-btn-toggle>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </ValidationObserver>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import { ValidationObserver } from "vee-validate/dist/vee-validate.full";

Vue.use(VueAxios, axios);
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    items: [
      // {
      //     text: "ໜ້າຫຼັກ",
      //     disabled: false,
      //     href: "/Dashboard"
      // },
      // {
      //     text: "ຕັ້ງຄ່າ",
      //     disabled: false,
      //     href: "/Village"
      // },
      // {
      //     text: "ບ້ານ",
      //     disabled: false,
      //     href: "../Village"
      // },
      // {
      //     text: "ເພີ່ມບ້ານ",
      //     disabled: true
      // }
    ],
    headers: [
      {
        text: "ຊື່ຍີ່ຫໍ້",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "ສະຖານະ",
        value: "status"
      },
      {
        text: "ຈັດການ",
        value: "action",
        sortable: false
      }
    ],
    snackbar: false,
    snackbarText: "",
    status: true,
    form: {
      name: "",
      status: "",
      district_id: ""
    },
    districts: []
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  mounted() {
    this.getDistrict();
  },
  methods: {
    async save() {
      const isValid = await this.$refs.observer.validate(
        this.form.name != false &&
          this.axios.post("/api/Village/create", this.form).then(response => {
            this.form.name = response.data.form.name;
          })
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Village");
      }
    },

    // async save() {
    //     let res = await this.axios.post("/api/village/create", this.form);
    //     if (res) {
    //         this.$router.replace("./Village");
    //     }
    // },
    async reset() {
      (this.form.name = ""), (this.form.status = false);
    },
    getDistrict() {
      this.axios.get("/api/district").then(response => {
        this.districts = response.data.districts;
      });
    }
  }
};
</script>

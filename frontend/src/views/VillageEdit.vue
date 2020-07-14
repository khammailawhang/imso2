<template>
  <div class="edit">
    <v-content>
      <v-container>
        <ValidationObserver ref="observer">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" xl="4" lg="5" md="6" sm="12">
              <v-card flat color="white">
                <v-card-title>{{ $t("Village.Edit_Title") }}</v-card-title>
                <v-card-text class="pt-7">
                  <ValidationProvider rules="required" v-slot="{ errors }" :bails="false">
                    <v-autocomplete
                      outlined
                      dense
                      color="#3d5afe"
                      :items="districts"
                      v-model="district_id"
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
                      v-model="name"
                      type="text"
                      autocomplete="off"
                    >
                      <template slot="label">
                        <span class="pt-2">
                          {{ $t("Village.Name") }}
                          <v
                            style="color:red"
                            v-for="(error, district_id) in errors"
                            :key="district_id"
                          >
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
                    <v-btn color="#3d5afe" depressed v-on="on" class="white--text" @click="update">
                      <v-icon color="white">check</v-icon>
                      {{$t("Village.Update")}}
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
  data() {
    return {
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
        //     text: "ແກ້ໄຂບ້ານ",
        //     disabled: true
        // }
      ],
      name: "",
      district_id: "",
      status: "",
      districts: []
    };
  },
  async created() {
    let res = await axios.get(
      "/api/village/village_id/" + this.$route.query.village_id
    );
    this.name = res.data.villages.VName || "";
    this.district_id = res.data.villages.district_id || "";
    this.status = res.data.villages.status || "";
  },
  mounted() {
    this.getDistrict();
  },
  methods: {
    async update() {
      const isValid = await this.$refs.observer.validate(
        this.name != false &&
          this.district_id != false &&
          (await this.axios.put("/api/village/update", {
            village_id: this.$route.query.village_id,
            name: this.name,
            district_id: this.district_id,
            status: this.status
          }))
      );
      if (!isValid) {
        // alert("Please Save");
      } else {
        this.$router.replace("./Village");
      }
    },
    // async update() {
    //     let res = await this.axios.put("/api/village/update", {
    //         village_id: this.$route.query.village_id,
    //         name: this.name,
    //         district_id: this.district_id,
    //         status: this.status
    //     });
    //     if (res) {
    //         this.$router.replace("./Village");
    //     }
    // },

    getDistrict() {
      this.axios
        .get("/api/district", {
          params: {
            district_id: 1
          }
        })
        .then(response => {
          this.districts = response.data.districts;
        });
    }
  }
};
</script>

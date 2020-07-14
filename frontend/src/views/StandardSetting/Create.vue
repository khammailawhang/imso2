<template>
  <div class="create">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-breadcrumbs :items="items"></v-breadcrumbs>
        <v-expansion-panels class="mb-6">
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ຄວັນດຳ</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ CO</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content
            >
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ HC</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ຄວັນດຳ</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ CO</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content
            >
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ HC</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ຄວັນດຳ</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ CO</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content
            >
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ HC</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down"
              >ກາດ HC</v-expansion-panel-header
            >
            <v-expansion-panel-content
              >
              <v-text-field
                label="ຫົວຂໍ້"
                v-model="form.title"
                type="text"
                autocomplete="off"
              />
              <v-text-field
                label="ຄ່າມາດຕາຖານ"
                v-model="form.value"
                type="text"
                autocomplete="off"
              />
              <v-textarea
                v-model="form.detail"
                label="ລາຍລະອຽດ"
                value=""
              ></v-textarea>
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-center d-flex pb-4 py-4">
          <v-switch
            v-model="form.status"
            label="ສະຖານະ"
            value="Active"
          ></v-switch>
          <v-spacer></v-spacer>
          <v-btn @click="reset" text color="grey" class="white--text"
            >ຍົກເລີກ</v-btn
          >
          <v-btn @click="save" text color="indigo" class="white--text"
            ><v-icon small>mdi-check-bold</v-icon> ບັນທຶກ</v-btn
          >
        </div>
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
    status: false,
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
        text: "ຕັ້ງຄ່າມາດຕະຖານ",
        disabled: false,
        href: "../StandardSetting"
      },
      {
        text: "ເພີ່ມຄ່າມາດຕະຖານ",
        disabled: true
      }
    ],
    form: {
      title: "",
      value: "",
      detail: "",
      status: ""
    }
  }),

  watch: {
    variant(val) {
      if (val.includes("filter")) {
        this.value = true;
      }
    }
  },
  methods: {
    async save() {
      let res = await this.axios.post("/api/standardsetting/create", this.form);
      if (res) {
        this.$router.replace("../StandardSetting");
      }
    },
    async reset() {
      (this.form.title = ""),
        (this.form.value = ""),
        (this.form.detail = ""),
        (this.form.status = false);
    }
  }
};
</script>

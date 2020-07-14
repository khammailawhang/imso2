<template>
  <div>
    <v-card class="d-flex pa-1" outlined tile>
      <div>
        <v-breadcrumbs :items="items"></v-breadcrumbs>
        <v-row align="start" justify="center">
          <v-col cols="12" md="6">
            <v-breadcrumbs :items="items" large></v-breadcrumbs>
            <v-card outlined>
              <v-toolbar color="white" class="grey--text" dark flat>
                <h4>{{ $t("FeeSetting.Create_Title") }}</h4>
                <v-spacer />
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="grey" href="../FeeSetting">
                      <v-icon small>mdi-arrow-left</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-row>
                  <v-col cols="12" lg="6" md="6" sm="4"
                    ><v-select
                      :items="models"
                      :label="$t('Model.Name')"
                      v-model="form.model_id"
                      item-text="name"
                      item-value="model_id"
                      required
                    ></v-select
                  ></v-col>
                  <v-col cols="12" lg="6" md="6" sm="4"
                    ><v-select
                      :items="types"
                      :label="$t('Type.Name')"
                      v-model="form.type_id"
                      item-text="name"
                      item-value="type_id"
                      required
                    ></v-select
                  ></v-col>
                  <v-col cols="12" lg="12" md="6" sm="4"
                    ><v-text-field
                      :label="$t('FeeSetting.Price')"
                      v-model="form.price"
                      type="text"
                      autocomplete="off"
                  /></v-col>
                  <v-col cols="12" lg="12" md="6" sm="4"
                    ><v-switch
                      v-model="form.status"
                      :label="$t('FeeSetting.Status')"
                      value="Active"
                    ></v-switch
                  ></v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text color="grey" @click="reset" class="white--text">{{
                  $t("FeeSetting.Cancel")
                }}</v-btn>
                <v-btn text color="indigo" class="white" @click="save">{{
                  $t("FeeSetting.Save")
                }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
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
        disabled: true
      }
    ],
    form: {
      name: "",
      price: "",
      model_id: "",
      type_id: "",
      status: ""
    },
    models: [],
    types: []
  }),
  created() {
    this.getType();
    this.getModel();
  },
  methods: {
    getType() {
      this.axios.get("/api/type").then(response1 => {
        this.types = response1.data.types;
      });
    },
    getModel() {
      this.axios.get("/api/model").then(response => {
        this.models = response.data.models;
      });
    }
  }
};
</script>

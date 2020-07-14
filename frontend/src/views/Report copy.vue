<template>
  <div id="app">
    <v-row align="start" justify="left">
      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
        <h1>Report information</h1>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-select
          label="Owner"
        ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-select
          label="Province"
        ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-select
          label="Type platc no"
        ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-text-field
          label="Platc no"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-select
          label="Model"
        ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-select
          label="Type"
        ></v-select>
      </v-col>
       <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-select
          label="Color"
          class="p"
        ></v-select>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-text-field
          label="Engine no"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-text-field
          label="Chassis no"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-menu
            v-model="menu_start"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="start"
                label="Start"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="start" @input="menu_start = false"></v-date-picker>
          </v-menu>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4">
        <v-menu
            v-model="menu_end"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="end"
                label="End"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="end" @input="menu_end = false"></v-date-picker>
          </v-menu>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="3" sm="4" class="pt-6">
        <v-btn color="red" class="white--text" block>Search</v-btn>
      </v-col>
      <v-col cols="12" xl="12" lg="12" md="12" sm="12">
        <Bar />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";

export default {
  name: "App",
  components: {
    Bar
  },
  data: () => ({
    chartData: {
      Books: 54,
      Magazine: 30,
      Newspapers: 10
    },
    start: new Date().toISOString().substr(0, 10),
    end: new Date().toISOString().substr(0, 10),
    menu_start: false,
    menu_end: false
  })
};
</script>

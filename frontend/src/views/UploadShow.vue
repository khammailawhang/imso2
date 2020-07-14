<template>
  <div>
    <v-content>
      <v-container>
        <v-row align="start" justify="center" no-gutters>
          <v-col cols="12" xl="4" lg="4" md="6" sm="6" align="left">
            <v-app-bar
              :clipped-left="$vuetify.breakpoint.lgAndUp"
              color="white"
              flat
              dark
            >
              <v-icon color="indigo">mdi-xing</v-icon>
              <v-toolbar-title style="width: 380px" class="ml-0 pl-4">
                <h5 class="indigo--text">{{ $t("Register.Create_Title") }}</h5>
              </v-toolbar-title>
              <v-spacer />
              <v-tooltip bottom color="indigo">
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="ma-2 hidden-xl-only"
                    href="../Register"
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
          </v-col>
        </v-row>
        <v-row align="center" justify="center" no-gutters class="pt-3">
          <v-col cols="12" xl="4" lg="4" md="6" sm="6">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <span>Prefix</span><span class="red--text pl-2">*</span>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" xl="4" lg="4" md="6" sm="6">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <span>Prefix</span><span class="red--text  pl-2">*</span>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>


        <v-row align="start" justify="center" no-gutters>
          <v-col cols="12" xl="8" lg="8" md="8" sm="8" align-center>
            <v-toolbar-title>Create car & owner information</v-toolbar-title>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="pt-3">
          <v-col cols="4" xl="4" lg="4" md="4" sm="4">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <span>Prefix</span><span class="red--text pl-2">*</span>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" xl="4" lg="4" md="4" sm="4">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <span>Prefix</span><span class="red--text pl-2">*</span>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4" xl="4" lg="4" md="4" sm="4">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <span>Prefix</span><span class="red--text  pl-2">*</span>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" xl="4" lg="4" md="4" sm="4">
            <v-row no-gutters>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <span>Prefix</span><span class="red--text pl-2">*</span>
              </v-col>
              <v-col cols="12" xl="12" lg="12" md="12" sm="12">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>


      </v-container>
    </v-content>
  </div>
</template>

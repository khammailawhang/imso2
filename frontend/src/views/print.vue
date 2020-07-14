<template>
  <v-row>
    <v-col cols="12" sm="12" align="right"  class="hidden-xl-and-down hidden-lg-and-down">
      <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="indigo"
          dark
          icon
          v-on="on"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card tile>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="n in 16"
              :key="n"
              class="d-flex child-flex"
              cols="2"
            >
              <v-card  class="d-flex" to="a">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <span class="orange--text">Dashboard</span>
                    </v-row>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-menu>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),
  }
</script>
<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" color="red">
              <v-card-title class="title white--text">
                <v-row class="fill-height flex-column" justify="space-between">
                  <div class="align-self-center">
                    <v-btn :class="{ 'show-btns': hover }" class="red--text" color="transparent" depressed>
                      test
                    </v-btn>
                  </div>
                </v-row>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    
  })
};
</script>


<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
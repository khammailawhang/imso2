<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      app
      left
      class="indigo"
    >
      <v-list dense align="left">
        <v-card-subtitle align="center">
          <v-avatar color="white" size="60"><v-icon color="indigo" size="40">mdi-account</v-icon></v-avatar>
        </v-card-subtitle>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon color="white">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">About us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon color="white">mdi-contacts</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Contact us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group color="white">
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon color="white">mdi-plus</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text">Settings</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  Title
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon color="white">mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Sign out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon color="white">mdi-translate</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">En</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      class="indigo--text"
      flat
      dark
    >
      <v-toolbar-title>System Name</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="indigo--text" @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>


    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
    }),
  }
</script>
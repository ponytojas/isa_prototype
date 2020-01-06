<template>
  <v-content style="margin: 20px">
    <v-app-bar color="success" dark elevate-on-scroll="True" fixed >
      <v-toolbar-title>Sistema Integral de Gestión del Arbitraje</v-toolbar-title>
      <v-spacer />
      <v-menu
        center
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-circle </v-icon>
          </v-btn>
        </template>

        <v-list two-line subheader>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Usuario:  {{ this.username }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item @click="logOut">
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Cerrar Sesión</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-content>
</template>

<script>
export default {
  props: {
    username: String,
    level: Number,
  },
  methods: {
    logOut() {
      this.$store.dispatch('userLogout');
    },
  },
};
</script>

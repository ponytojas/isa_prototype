<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="success" dark flat>
                <v-toolbar-title>Inicio de sesión</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <template>
                    <v-icon>mdi-soccer</v-icon>
                  </template>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" @keyup.native.enter="submit">
                  <v-text-field
                    label="Usuario"
                    color="success"
                    name="login"
                    v-model="username"
                    type="username"
                    prepend-icon="person"
                    flat
                  />

                  <v-text-field
                    id="password"
                    label="Contraseña"
                    name="password"
                    v-model="password"
                    color="success"
                    prepend-icon="lock"
                    type="password"
                    flat
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="success" rounded @click="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
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
  data() {
    return {
      valid: false,
      username: '',
      password: '',
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

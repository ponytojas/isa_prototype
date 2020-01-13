<template>
  <v-container class='fill-height' grid-list-md text-xs-center align-center>
    <v-layout row wrap align-center>
      <v-flex xs11 align-center align-content-center>
        <v-card align-center align='center' justify='center'>
          <v-card-title>Redactar Acta</v-card-title>
          <v-data-table
            :headers='headers1'
            :items='matchArray'
            class='elevation-1'
            hide-default-footer
          />
            <v-dialog v-model='dialog' width='500'>
              <template v-slot:activator='{ on }'>
                <v-btn color='primary' style='margin-top: 20px; margin-bottom: 20px' dark v-on='on'>
                  Añadir Datos
                </v-btn>
              </template>

              <v-card>
                <v-card-title class='headline grey lighten-2' primary-title>
                  Datos del partido
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols='12' sm='6' md='4'>
                          <v-select  v-model="matchInfo.local" :items="teams" label="Local" />
                      </v-col>
                      <v-col cols='12' sm='6' md='4'>
                        <v-select  v-model="matchInfo.visitante" :items="teams" label="Visitante" />
                      </v-col>
                      <v-col cols='12' sm='6' md='4'>
                        <v-select  v-model="matchInfo.arbitro" :items="referees"
                        label="Arbitro" />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color='primary' text @click='closeDialog'>
                    Añadir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Teams from '../assets/data/teams.json';
import Referees from '../assets/data/referees.json';

export default {
  data() {
    return {
      teams: Teams,
      referees: Referees,
      dialog: false,
      matchArray: [],
      matchInfo: {
        local: '',
        visitante: '',
        arbitro: '',
      },
      headers1: [
        {
          text: 'Local',
          value: 'local',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Visitante',
          value: 'visitante',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Arbitro',
          value: 'arbitro',
          align: 'center',
          sortable: false,
        },
      ],
    };
  },
  beforeMount() {
    this.referees = Object.keys(Referees).map((i) => Referees[i].nombre);
  },
  mounted() {},
  methods: {
    closeDialog() {
      this.dialog = false;
      this.matchArray.push(this.matchInfo);
    },
  },
};
</script>

<style scoped></style>

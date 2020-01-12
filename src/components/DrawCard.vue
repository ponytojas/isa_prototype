<template>
  <v-container class="fill-height" grid-list-md text-xs-center align-center>
    <v-layout row wrap align-center>
      <v-flex xs11 align-center align-content-center>
        <v-card align-center align="center" justify="center">
          <v-dialog v-model="dialog" hide-overlay persistent width="300">
            <v-card color="primary" dark>
              <v-card-text>Por favor espera
                <v-progress-linear indeterminate color="white" class="mb-0" />
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-card-title>Realizar Sorteo</v-card-title>
          <v-expansion-panels v-model='close'>
            <v-expansion-panel v-for="(value, index) in this.matchesArray" :key="index">
              <v-expansion-panel-header>Jornada {{ index + 1 }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-data-table justify='center'  align="center" disable-pagination
                hide-default-footer :headers='headers' :items='value' />
                <v-spacer />
                <v-btn @click="assignation"  color="#FA7268" dark>
                Realizar asignación
                </v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar"> Asignación realizada con exito
      <v-btn color="pink" text @click="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
import Matches from '../assets/data/matches.json';
import Referees from '../assets/data/referees.json';

export default {
  data() {
    return {
      data: Matches,
      matchesArray: [],
      referees: [],
      panel: [],
      amount: 38,
      dialog: false,
      close: false,
      snackbar: false,
      headers: [
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
      fixtures: [],
    };
  },
  beforeMount() {
    this.matchesArray = Object.keys(this.data).map((i) => this.data[i]);
    this.referees = Object.keys(Referees).map((i) => Referees[i]);
  },
  mounted() {},
  methods: {
    assignation() {
      this.dialog = true;
      this.close = true;
      for (let index = 0; index < this.amount; index += 1) {
        const temp = this.referees.slice();
        temp.sort(() => 0.5 - Math.random());
        for (let indexFixture = 0; indexFixture < 10; indexFixture += 1) {
          const referee = temp.pop(Math.floor(Math.random() * temp.length));
          this.matchesArray[index][indexFixture].arbitro = null;
          this.matchesArray[index][indexFixture].arbitro = referee.nombre;
        }
      }
      this.dialog = false;
      this.$forceUpdate();
      this.close = false;
      this.snackbar = true;
    },
  },
};
</script>

<style scoped></style>

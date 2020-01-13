<template>
  <v-container class="fill-height" grid-list-md text-xs-center align-center>
    <v-layout row wrap align-center>
      <v-flex xs11 align-center align-content-center>
        <v-card align-center align="center" justify="center">
            <v-card-title>Redactar Acta</v-card-title>
            <v-textarea name="input-7-4" label="Acta" style="padding: 20px"
            outlined flat clear-icon auto-grow/>
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

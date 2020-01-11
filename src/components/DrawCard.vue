<template>
  <v-container class="fill-height" grid-list-md text-xs-center align-center>
    <v-layout row wrap align-center>
      <v-flex xs11 align-center align-content-center>
        <v-card align-center align="center" justify="center">
          <v-card-title>Realizar Sorteo</v-card-title>
          <v-expansion-panels>
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
      amount: 38,
      assigned: false,
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
      for (let index = 0; index < this.amount; index += 1) {
        const temp = [];
        for (let indexFixture = 0; indexFixture < 10; indexFixture += 1) {
          let referee = this.referees[Math.floor(Math.random() * this.referees.length)].nombre;
          console.log(referee);
          console.log(this.matchesArray[index][indexFixture]);
          while (temp.includes(referee)) {
            referee = this.referees[Math.floor(Math.random() * this.referees.length)].nombre;
          }
          console.log(this.matchesArray[index][indexFixture]);
          this.matchesArray[index][indexFixture].arbitro = referee;
          temp.push(referee);
        }
      }
    },
  },
};
</script>

<style scoped></style>

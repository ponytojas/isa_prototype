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
                <v-data-table disable-pagination :headers='headers' :items='value' />
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

export default {
  data() {
    return {
      data: Matches,
      matchesArray: [],
      amount: 38,
      headers: [
        {
          text: 'Local',
          align: 'center',
          sortable: false,
          value: 'local',
        },
        {
          text: 'Visitante',
          value: 'visitante',
        },
      ],
    };
  },
  beforeMount() {
    this.matchesArray = Object.keys(this.data).map((i) => this.data[i]);
  },
  mounted() {},
};
</script>

<style scoped></style>

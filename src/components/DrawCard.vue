<template>
  <v-container class="fill-height" grid-list-md text-xs-center align-center>
    <v-layout row wrap align-center>
      <v-flex xs11 align-center align-content-center>
        <v-card align-center align="center" justify="center">
          <v-card-title>Realizar Sorteo</v-card-title>
          <v-expansion-panels>
            <v-expansion-panel v-for="(item,i) in this.matchesArray" :key="i">
              <v-expansion-panel-header>Jornada {{ i + 1}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    };
  },
  beforeMount() {
    this.matchesArray = Object.keys(this.data).map((i) => this.data[i]);
  },
  mounted() {
    console.log(this.matchesArray);
  },
};
</script>

<style scoped></style>

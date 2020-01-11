<template>
  <v-container class="fill-height" grid-list-md text-xs-center align-center>
    <v-layout row wrap align-center>
      <v-flex xs11 align-center align-content-center>
        <v-card align-center align="center" justify="center">
          <v-card-title> {{ this.title }} </v-card-title>
          <v-expansion-panels v-if="Object.values(route).includes('teams')">
            <v-expansion-panel v-for="(item,i) in this.arrayData" :key="i">
              <v-expansion-panel-header><b>{{ teamArray[i] }}</b></v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-btn block color="secondary" dark>Ver Partidos</v-btn>
                <v-divider/>
                <v-divider/>
                <br/>
                <b>Entrenador</b> : {{ arrayManager[i] }}
                <v-divider/>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-for="(player,k) in item" :key="k">
                {{ player }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels v-if="Object.values(route).includes('players')">
            <v-expansion-panel v-for="(item,i) in this.arrayData" :key="i">
              <v-expansion-panel-header><b>{{ teamArray[i] }}</b></v-expansion-panel-header>
              <v-expansion-panel-content>
                <h3>Jugadores</h3>
                <v-divider/>
              </v-expansion-panel-content>
              <v-expansion-panel-content v-for="(player,k) in item" :key="k">
                {{ player }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels v-if="Object.values(route).includes('referees')">
            <v-expansion-panel v-for="(item,i) in this.arrayData" :key="i">
              <v-expansion-panel-header><b>{{ item.nombre }}</b></v-expansion-panel-header>
              <v-expansion-panel-content>
                <h3>Datos Personales</h3>
                <v-divider/>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <b>DNI:</b> {{ item.dni }}
                <br/>
                <b>Telefono:</b> {{ item.telefono }}
                <br/>
                <b>Partido:</b> {{ item.partido }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Players from '../assets/data/players.json';
import Managers from '../assets/data/managers.json';
import Referees from '../assets/data/referees.json';

export default {
  data() {
    const route = this.$route.params;
    const manager = Managers;
    let actualData = Object.values(route);
    let actualTitle;

    if (actualData.includes('teams')) {
      actualTitle = 'Equipos';
      actualData = Players;
    } else if (actualData.includes('players')) {
      actualTitle = 'Players';
      actualData = Players;
    } else if (actualData.includes('referees')) {
      actualTitle = 'Referees';
      actualData = Referees;
    }
    return {
      data: actualData,
      manager,
      title: actualTitle,
      route,
      amount: 38,
    };
  },
  beforeMount() {
    this.arrayData = Object.keys(this.data).map((i) => this.data[i]);
    this.arrayManager = Object.keys(this.manager).map((i) => this.manager[i].Entrenador);
    this.teamArray = Object.keys(this.manager).map((i) => this.manager[i].Equipo);
  },
  mounted() {
    console.log(this.teamsArray);
  },
};
</script>

<style scoped></style>

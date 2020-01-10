<template>
  <v-container class='fill-height' fluid>
    <v-row align='center' justify='center'>
      <v-col v-for='card in cards' :key='card.title' :cols='12' sm='6' md='4'>
        <v-card>
          <v-img
            :src='card.src'
            class='white--text align-end'
            gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'
            height='200px'
          >
            <v-card-title v-text='card.title'></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer />
            <v-btn :color='card.color' :dark='card.dark'
            @click='$router.push({name: card.path, params:{toSearch: card.info}})'>
              Entrar
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    level: Number,
  },
  data() {
    return {
      cards: [
        {
          src:
            'https://images.unsplash.com/photo-1500061228850-950b0dc792c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          title: 'Realizar sorteo',
          color: '#E20D36',
          level: 4,
          dark: true,
          path: 'draw',
        },
        {
          src:
            'https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          title: 'Datos de equipos',
          color: '#FFB300',
          dark: false,
          level: 1,
          path: 'data',
          info: 'teams',
        },
        {
          src:
            'https://images.unsplash.com/photo-1483861911361-57d334ad765b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3304&q=80',
          title: 'Datos de jugador',
          color: '#FFDB30',
          level: 1,
          dark: false,
          path: 'data',
          info: 'players',
        },
        {
          src:
            'https://images.unsplash.com/photo-1568495262088-4289581907ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          title: 'Datos árbitros',
          color: '#005744',
          level: 1,
          dark: true,
          path: 'data',
          info: 'referees',
        },
        {
          src:
            'https://images.unsplash.com/photo-1473976345543-9ffc928e648d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3370&q=80',
          title: 'Datos partido',
          color: '#813BF6',
          level: 1,
          dark: true,
          path: 'data',
          info: 'matches',
        },
        {
          src:
            'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80',
          title: 'Sancionar equipo',
          color: '#1B97AD',
          level: 4,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1510936470381-68e4c0a5e24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80',
          title: 'Sancionar jugador',
          color: '#FFAFA2',
          level: 4,
          dark: false,
        },
        {
          src:
            'https://images.unsplash.com/photo-1536353284924-9220c464e262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
          title: 'Sancionar arbitro',
          color: '#EABD7D',
          level: 4,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          title: 'Sanciones activas e históricas',
          color: '#0D2481',
          level: 1,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3321&q=80',
          title: 'Revisar histórico de temporadras',
          color: '#A5D620',
          level: 1,
          dark: false,
        },
        {
          src:
            'https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80',
          title: 'Notificar ausencia',
          color: '#FF0509',
          level: 1,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1527345931282-806d3b11967f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80',
          title: 'Subir acta',
          color: '#F1B0F2',
          level: 1,
          dark: false,
        },
        {
          src:
            'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80',
          title: 'Modificar y cerrar actas',
          color: '#484855',
          level: 1,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2653&q=80',
          title: 'Revisar histórico de actas',
          color: '#E79723',
          level: 1,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1575312751568-e65bb1f7e927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2172&q=80',
          title: 'Finalizar temporada y reiniciar datos',
          color: '#000000',
          level: 5,
          dark: true,
        },
      ],
    };
  },
  beforeMount() {
    const level = this.$store.getters.getLevel;
    this.cards = this.cards.filter((el) => el.level <= level);
  },
};
</script>

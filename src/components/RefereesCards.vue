<template>
  <v-container class='fill-height' fluid>
    <v-row align='center' justify='center'>
      <v-expansion-panels :accordion="Accordion">
        <v-expansion-panel v-for='card in cards' :key='card.title' :cols='12' sm='6' md='4'>
          <v-expansion-panel-header v-text="card.title"></v-expansion-panel-header>
            <v-expansion-panel-content>
                    [Aqui irian los datos del Arbitro]
                    <v-col/>
                    • Datos
                    <v-col/>
                    • Datos
                    <v-col/>
                    • Datos
                    <v-col/>
                    • Datos
            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
            'https://images.unsplash.com/photo-1483861911361-57d334ad765b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3304&q=80',
          title: 'Arbitro 1',
          color: '#FFDB30',
          level: 1,
          dark: false,
        },
        {
          src:
            'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80',
          title: 'Arbitro 2',
          color: '#1B97AD',
          level: 4,
          dark: true,
        },
        {
          src:
            'https://images.unsplash.com/photo-1510936470381-68e4c0a5e24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80',
          title: 'Arbitro 3',
          color: '#FFAFA2',
          level: 4,
          dark: false,
        },
        {
          src:
            'https://images.unsplash.com/photo-1536353284924-9220c464e262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
          title: 'Arbitro 4',
          color: '#EABD7D',
          level: 4,
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

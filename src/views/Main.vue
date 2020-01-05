<template>
    <v-content>
      <TopBar />
      <v-spacer />
      <Cards />
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';
import Cards from '../components/MainCards.vue';

export default {
  name: 'Main',

  components: {
    TopBar,
    Cards,
  },
};
</script>

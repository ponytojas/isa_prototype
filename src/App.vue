<template>
  <v-app>
    <v-content>
      <TopBar />
      <CenterCard />
    </v-content>
  </v-app>
</template>

<script>
import CenterCard from './components/CenterCard.vue';
import TopBar from './components/MainBar.vue';

export default {
  name: 'App',

  components: {
    CenterCard,
    TopBar,
  },

  data: () => ({
    //
  }),
};
</script>

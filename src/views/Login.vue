<template>
    <v-content>
      <TopBar />
      <CenterCard />
    </v-content>
</template>

<script>
import CenterCard from '../components/CenterCard.vue';
import TopBar from '../components/LoginBar.vue';

export default {
  name: 'Login',

  components: {
    CenterCard,
    TopBar,
  },
};
</script>

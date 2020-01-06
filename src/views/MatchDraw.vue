<template>
    <v-content>
      <TopBar :username="this.username" :level="this.level" />
      <v-spacer />
      <DrawCard />
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';
import DrawCard from '../components/DrawCard.vue';

export default {
  name: 'Draw',

  components: {
    TopBar,
    DrawCard,
  },
  data() {
    return {
      level: 0,
      username: '',
    };
  },
  mounted() {
    this.username = this.$store.getters.getUsername;
    this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1);
    this.level = this.$store.getters.getLevel;
  },
};
</script>

<template>
    <v-content>
      <TopBar :username="this.username" :level="this.level" />
      <v-spacer />
      <MatchCard />
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';
import MatchCard from '../components/MatchesCards.vue';

export default {
  name: 'Matches',

  components: {
    TopBar,
    MatchCard,
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

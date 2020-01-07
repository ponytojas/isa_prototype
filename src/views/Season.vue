<template>
    <v-content>
      <TopBar :username="this.username" :level="this.level" />
      <v-spacer />
      <Cards :levelProp="this.level" />
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';
import Cards from '../components/SeasonCards.vue';

export default {
  name: 'Season',

  components: {
    TopBar,
    Cards,
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

<template>
    <v-content>
      <TopBar :username="this.username" :level="this.level" />
      <v-spacer />
      <v-spacer />
      <v-btn
                color="pink"
                dark
                fixed
                bottom
                right
                fab
              >
                <v-icon>edit</v-icon>
              </v-btn>
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';

export default {
  name: 'Main',

  props: {
    toSearch: String,
  },

  components: {
    TopBar,
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

<template>
    <v-content>
      <TopBar :username="this.username" :level="this.level" />
      <v-spacer />
      <DocWriter />
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';
import DocWriter from '../components/DodWriter.vue';

export default {
  name: 'Main',

  components: {
    TopBar,
    DocWriter,
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

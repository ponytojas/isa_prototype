<template>
    <v-content>
      <TopBar :username="this.username" :level="this.level" />
      <v-spacer />
    </v-content>
</template>

<script>
import TopBar from '../components/MainBar.vue';

export default {
  name: 'Main',

  props: {
    level: Number,
    username: String,
    toSearch: String,
  },

  components: {
    TopBar,
  },
  data() {
    return {};
  },
  mounted() {
  },
};
</script>

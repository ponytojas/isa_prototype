import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: '',
    userLevel: 0,
  },
  mutations: {
    setUser(state, username, userLevel) {
      state.user = username;
      state.userLevel = userLevel;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    userLogin({ commit }, { username, password }) {
      if (username === 'admin' && password === 'admin') {
        commit('setUser', username, 5);
        commit('setIsAuthenticated', true);
      } else if (username === 'arbitro' && password === 'arbitro') {
        commit('setUser', username, 2);
        commit('setIsAuthenticated', true);
      } else if (username === 'federacion' && password === 'federacion') {
        commit('setUser', username, 3);
        commit('setIsAuthenticated', true);
      } else if (username === 'liga' && password === 'liga') {
        commit('setUser', username, 4);
        commit('setIsAuthenticated', true);
      }
      if (this.state.user !== null && this.state.user !== undefined && this.state.user !== '') {
        router.push('/about');
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
  },
});

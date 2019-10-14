import axios from 'axios';
import Vue from 'vue';

export default {
  namespaced: true,

  state() {
    return {
      list: [],
      $requested: false,
    };
  },

  actions: {
    request({ commit, state }) {
      if (state.$requested) return;
      commit('SET_REQUESTED');
      axios('http://localhost:3000/products')
        .then((response) => {
          commit('SET_LIST', response.data);
        });
    },
  },

  mutations: {
    SET_LIST(state, theList) {
      Vue.set(state, 'list', theList);
    },

    SET_REQUESTED(state) {
      Vue.set(state, '$requested', true);
    },
  },
};

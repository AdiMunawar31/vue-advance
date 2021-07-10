import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLike: 0,
      credential: {},
    };
  },
  mutations: {
    increment(state) {
      state.totalLike++;
    },
    setCredential(state, payload) {
      state.credential = payload;
    },
  },
  actions: {
    async getCredential({ commit }) {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();

      commit("setCredential", results[0]);
    },
  },
});

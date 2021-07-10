import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLike: 0,
    };
  },
  mutations: {
    increment(state) {
      state.totalLike++;
    },
  },
});

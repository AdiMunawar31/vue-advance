import { createStore } from "vuex";
import { useRoute } from "vue-router";

export const store = createStore({
  state() {
    return {
      totalLike: 0,
      credential: {},
      title: "",
      posts: {},
      // postDetail: {},
    };
  },
  mutations: {
    increment(state) {
      state.totalLike++;
    },
    setCredential(state, payload) {
      state.credential = payload;
    },
    setTitle(state, payload) {
      state.title = payload;
    },
    setPosts(state, payload) {
      state.posts = payload;
    },
    // setPostDetail(state, payload) {
    //   state.postDetail = payload;
    // },
  },
  actions: {
    async getCredential({ commit }) {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();

      commit("setCredential", results[0]);
    },
    async getTitle({ commit }) {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts/42"
      );
      const { title } = await result.json();

      commit("setTitle", title);
    },
    async getPosts({ commit }) {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await result.json();

      commit("setPosts", posts);
    },
    // async getPostDetail({ commit }) {
    //   const url = useRoute();
    //   console.log(url);
    //   const id = url.params.id;

    //   const result = await fetch(
    //     `https://jsonplaceholder.typicode.com/posts/${id}`
    //   );
    //   const postDetail = await result.json();

    //   commit("setPostDetail", postDetail);
    // },
  },
});

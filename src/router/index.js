import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Post from "../pages/Post.vue";
import PostDetail from "../pages/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Post from "../pages/Post.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import PostDetail from "../pages/PostDetail.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "post",
        name: "Post",
        component: Post,
      },
      {
        path: "post/:id",
        name: "PostDetail",
        component: PostDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem("LOGIN"));

  if (to.name !== "Login" && !isLogin) next({ name: "Login" });
  if (to.name === "Login" && isLogin) next({ name: "Home" });
  else next();
});

export default router;

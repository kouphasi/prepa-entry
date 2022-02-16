import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue";
import CheackPage from "../views/CheackPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cp",
    name: "checkpage",
    component: CheackPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue";
import CheackPage from "../views/CheackPage.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: "/cp",
    name: "checkpage",
    component: CheackPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  base: "/subdir/",
  routes,
});

export default router;

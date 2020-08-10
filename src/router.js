import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../src/pages/AppHome.vue";
import Create from "../src/pages/Create.vue";

const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: AppHome,
    },
    {
      path: "/create",
      component: Create,
    },
  ],
});

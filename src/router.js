import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../src/views/AppHome.vue";
import Category from "../src/views/Category.vue";
import Create from "../src/views/Create.vue";

const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: AppHome,
    },
    {
      path: "/category/:category",
      component: Category,
      name: "category",
    },
    {
      path: "/create/:id/:path",
      component: Create,
    },
  ],
});

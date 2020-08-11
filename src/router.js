import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../src/views/AppHome.vue";
import Create from "../src/views/Create.vue";

import CardFront from "../src/components/card/CardFront.vue";
import CardInsideLeft from "../src/components/card/CardInsideLeft.vue";

const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: AppHome,
    },
    {
      path: "/create/:id",
      component: Create,
      children: [
        { path: "front", name: "front", component: CardFront },
        {
          path: "inside-left",
          name: "inside-left",
          component: CardInsideLeft,
        },
      ],
    },
  ],
});

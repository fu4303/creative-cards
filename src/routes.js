import CardWrapper from "../src/components/card/CardWrapper.vue";

// import OrderingGuide from "./components/OrderingGuide.vue";

export const routes = [
  {
    path: "/",
    components: CardWrapper,
  },
  { path: "*", redirect: "/" },
];

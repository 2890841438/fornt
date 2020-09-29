import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home/index")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;

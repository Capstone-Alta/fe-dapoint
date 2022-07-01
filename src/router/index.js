import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Voucher from "../views/Voucher.vue";
import Pulsa from "../views/Pulsa.vue";
<<<<<<< HEAD
import ListPulsa from "../views/ListPulsa.vue";
=======
import EMoney from "../views/EMoney.vue";
import CashOut from "../views/CashOut.vue";
>>>>>>> 2982fc314ae2e40ac86b1e2ccd03f74e5c68328b

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/voucher",
    name: "voucher",
    component: Voucher,
  },
  {
    path: "/pulsa",
    name: "pulsa",
    component: Pulsa,
  },
  {
    path: "/listpulsa",
    name: "listpulsa",
    component: ListPulsa,
  },
  {
    path: "/emoney",
    name: "emoney",
    component: EMoney,
  },
  {
    path: "/cashout",
    name: "cashout",
    component: CashOut,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Voucher from "../views/Voucher.vue";
import Pulsa from "../views/Pulsa.vue";
import Data from "../views/Data.vue";
import EMoney from "../views/EMoney.vue";
import CashOut from "../views/CashOut.vue";
import ListVoucher from "../views/ListVoucher.vue";
import DataUser from "../views/DataUser.vue";
import LoginAdmin from "../views/LoginAdmin.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/datauser",
    name: "datauser",
    component: DataUser,
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
    path: "/data",
    name: "data",
    component: Data,
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
    path: "/listvoucher/:voucher_type",
    name: "listvoucher",
    component: ListVoucher,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/logins",
    name: "logins",
    component: LoginAdmin,
  },
  {
    path: "/regis",
    name: "regis",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import voucher from "./voucher";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    snackbar: false,
  },
  getters: {},
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    openDrawer(state) {
      state.drawer = true;
    },
    closeDrawer(state) {
      state.drawer = false;
    },
    openSnackbar(state) {
      state.snackbar = true;
    },
    closeSnackbar(state) {
      state.snackbar = false;
    },
  },
  actions: {},
  modules: {
    voucher: {
      namespaced: true,
      ...voucher,
    },
    user: {
      namespaced: true,
      ...user,
    },
  },
});

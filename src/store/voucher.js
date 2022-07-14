import axios from "axios";

export default {
  state: {
    vouchers: [],
    voucher: [],
    info: "",
    statsReed: [],
  },
  mutations: {
    setVouchers(state, param) {
      state.vouchers = param;
    },
    setStatsReed(state, param) {
      state.statReed = param;
    },
    setVoucherDetail(state, param) {
      state.voucher = param;
    },
    setError(state, param) {
      state.info = param;
    },
  },
  actions: {
    fetchVoucher(store, { query }) {
      const url = `http://159.223.81.185:5011/admin/voucher/${query}`;
      axios.get(url).then((response) => {
        // console.log("vouchers : ", response.data);
        store.commit("setVouchers", response.data);
      });
    },
    fetchStatsReed(store) {
      const url = `http://159.223.81.185:5011/admin/user_transaction/getalluserpoint`;
      axios.get(url).then((response) => {
        console.log("stat : ", response.data);
        store.commit("setStatsReed", response.data);
      });
    },
    updateVoucher(store, { id, vou_name, stock, harga_point }) {
      console.log("update store", vou_name);
      axios.put(
        `http://159.223.81.185:5011/admin/voucher/${id}`,
        {
          name: vou_name,
          stock,
          harga_point,
        },
        {
          // Config
        }
      );
    },
  },
};

import axios from "axios";

export default {
  state: {
    vouchers: [],
    voucher: [],
    info: "",
  },
  mutations: {
    setVouchers(state, param) {
      state.vouchers = param;
    },
    setVoucherDetail(state, param) {
      state.voucher = param;
    },
    setError(state, param) {
      state.info = param;
    },
  },
  actions: {
    fetchVouchers(store) {
      const url = `http://159.223.81.185:5011/admin/voucher/getall`;
      axios.get(url).then((response) => {
        console.log("vouchers : ", response.data.data);
        store.commit("setVouchers", response.data.data);
      });
    },
    voucherDetail(store, { id }) {
      const url = `http://159.223.81.185:5011/admin/voucher/${id}`;
      axios.get(url).then((response) => {
        console.log("voucher detail : ", response.data.data);
        store.commit("setVoucherDetail", response.data.data);
      });
    },
  },
};

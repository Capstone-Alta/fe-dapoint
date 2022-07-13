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
    fetchVoucher(store, { query }) {
      const url = `http://159.223.81.185:5011/admin/voucher/${query}`;
      axios.get(url).then((response) => {
        console.log("vouchers : ", response.data);
        store.commit("setVouchers", response.data);
      });
    },
    updateVoucher(store, { id, nama, stock, harga_point }) {
      axios.put(
        `http://159.223.81.185:5011/admin/voucher/${id}`,
        {
          nama,
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

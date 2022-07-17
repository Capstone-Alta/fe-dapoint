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
      state.statsReed = param;
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
      const url = `https://dapoint-api.herokuapp.com/admin/voucher/${query}`;
      axios.get(url).then((response) => {
        // console.log("vouchers : ", response.data);
        store.commit("setVouchers", response.data);
      });
    },
    // async fetchVoucher(store, { query }) {
    //   const url = `https://dapoint-api.herokuapp.com/admin/voucher/${query}`;
    //   const response = await axios.get(url);
    //   // console.log("vouchers : ", response.data);
    //   store.commit("setVouchers", response.data);
    // },
    async fetchStatsReed(store) {
      const url = `https://dapoint-api.herokuapp.com/admin/user_transaction/getalluserpoint`;
      const response = await axios.get(url);
      console.log("stat : ", response.data);
      store.commit("setStatsReed", response.data);
    },
    // updateVoucher(store, { id, vou_name, stock, harga_point, nominal }) {
    //   console.log("update store", vou_name);
    //   // const url = `https://dapoint-api.herokuapp.com/admin/voucher/${id}`;
    //   axios.put(
    //     `https://dapoint-api.herokuapp.com/admin/voucher/${id}`,
    //     {
    //       name: vou_name,
    //       stock,
    //       harga_point,
    //       nominal,
    //     },
    //     {
    //       // Config
    //     }
    //   );
    // },
    async updateVoucher(store, { id, vou_name, stock, harga_point, nominal }) {
      console.log("update store", vou_name);
      const url = `https://dapoint-api.herokuapp.com/admin/voucher/${id}`;
      const response = await axios.put(
        url,
        {
          name: vou_name,
          stock,
          harga_point,
          nominal,
        },
        {
          // Config
        }
      );
      console.log(response);
      // store.commit("setStatusUpdate", response);
      return response.status;
    },
  },
};

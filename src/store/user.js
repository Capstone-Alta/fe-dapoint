import axios from "axios";

export default {
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, param) {
      state.users = param;
    },
  },
  actions: {
    fetchUser(store, { query }) {
      const url = `https://dapoint-api.herokuapp.com/admin/user/${query}`;
      axios.get(url).then((response) => {
        console.log("users : ", response.data);
        store.commit("setUsers", response.data);
      });
    },
  },
};

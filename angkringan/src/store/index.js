import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: "http://localhost:3000/toko",
    data: [],
  },

  getters: {
    allProducts: (state) => state.data,
    allDetailsProduct: (state) => state.details,
  },
  actions: {
    getProduct({ commit }) {
      commit("getProduct");
    },
    detailsProduct({ commit }) {
      commit("detailsProduct");
    },
  },
  mutations: {
    async getProduct(state) {
      const response = await Axios.get(state.api);
      state.data = response.data;
      console.log(response.data);
    },
  },
  modules: {},
});

import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: "http://localhost:3000/toko",
    data: [],
    iniCart: [
    ],

  },

  getters: {
    allProducts: (state) => state.data,
    allDetailsProduct: (state) => state.details,
    getDataCart: (state) => state.iniCart,
  },
  actions: {
    getProduct({ commit }) {
      commit("getProduct");
    },
    detailsProduct({ commit }) {
      commit("detailsProduct");
    },

    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  },
  mutations: {
    async getProduct(state) {
      const response = await Axios.get(state.api);
      state.data = response.data;
      console.log(response.data);
    },
    ADD_Item(state, id) {
      state.iniCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.iniCart.splice(index, 1);
  },
  },
  modules: {},
});

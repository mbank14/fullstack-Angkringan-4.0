import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },

  getters: {
    allProducts: (state) => state.data,
  },
  actions: {
    getProduct({ commit }) {
      commit("getProduct");
    },
  },
  mutations: {
    async getProduct(state) {
      const response = await axios.get("http://localhost:3000/data");
      state.data = response.data;
      console.log(response.data);
    },
  },
  modules: {},
});

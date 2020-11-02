import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import VueToast from "vue-toast-notification";

Vue.use(VueToast);

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        datum: [],
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
            const response = await axios.get("http://localhost:3000/toko");
            state.data = response.data;
            console.log(response.data);
        },
        async getProdukPenjual(state ){
            const response = await axios.get("http://localhhihsi");
            state.datum = response.data;
            console.log(response.data)
        },
    },
    modules: {},
});
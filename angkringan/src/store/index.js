import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: "http://localhost:3000/toko",
    data: [],
    iniCart:[],
    iniCarts: [
      {
        id: "313131",
        items: [
          {
            id: "12121",
            nama: "kooko"
          },
          {
            id: "12121",
            nama: "kooko"
          },
          {
            id: "12121",
            nama: "kooko"
          },
        ]
      },
      {
        id: "313131",
        items: [
          {
            id: "12121",
            nama: "kooko"
          },
          {
            id: "12121",
            nama: "kooko"
          },
          {
            id: "12121",
            nama: "kooko"
          },
        ]
      }
    ],

  },

  getters: {
    allProducts: (state) => state.data,
    allDetailsProduct: (state) => state.details,
    getDataCarts: (state) => state.iniCart,
  },
  actions: {
    getProduct({ commit }) {
      commit("getProduct");
    },
    detailsProduct({ commit }) {
      commit("detailsProduct");
    },

    addItem({commit}, item) {
      commit("addItemCart", item);
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
    addItemCart(state, item) {
      const addItems = state.iniCart.find((barang) => barang.id === item.id);
      if (addItems) {
        addItems;
        console.log(state.iniCart)
      } else {
        this.state.iniCart.push({ ...item });
        console.log(state.iniCart)
      }
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

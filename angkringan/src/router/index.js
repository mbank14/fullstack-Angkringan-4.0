import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/makanan",
    name: " Makanan",
    component: () =>
      import(/* webpackChunkName: "makanan" */ "../views/Makanan.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Cart.vue"),
  },
  {
    path: "/transaction_success",
    name: "Transaction_Success",
    component: () =>
      import(
        /* webpackChunkName: "snack" */ "../components/FinishedTransaction.vue"
      ),
  },
  {
    path: "/transaksi",
    name: "Transaksi",
    component: () =>
      import(/* webpackChunkName: "snack" */ "../views/Transaksi.vue"),
  },
  {
    path: "/toko",
    name: "Toko",
    component: () =>
      import(/* webpackChunkName: "toko" */ "../views/Toko.vue"),
  },
  //ini admin
  {
    path:"/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/dasbor/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

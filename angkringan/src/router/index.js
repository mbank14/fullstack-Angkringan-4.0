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
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Cart.vue"),
  },

  {
    path: "/transaksi",
    name: "Transaksi",
    component: () =>
      import(/* webpackChunkName: "snack" */ "../views/Transaksi.vue"),
  },
  {
    path: "/details/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "snack" */ "../views/details.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "snack" */ "../views/Login.vue"),
  },
  {
    path: "/daftar",
    name: "Registrasi",
    component: () => import("../views/RegistrasiView.vue"),
  },

  //ini admin
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/dasbor/Login.vue"),
  },
  {
    path: "/dasbor",
    name: "Dasbor",
    component: () =>
      import(/* webpackChunkName: "dasbor" */ "../views/dasbor/Dasbor.vue"),
  },
  {
    path: "/tambahmenu",
    name: "AddProduk",
    component: () =>
      import(
        /* webpackChunkName: "tambahmenu" */ "../components/AddProduct.vue"
      ),
  },
  {
    path: "/editproduk/:id",
    name: "EditProduk",
    component: () =>
      import(
        /* webpackChunkName: "tambahmenu" */ "../components/ComEditBarang.vue"
      ),
  },
  {
    path: "/registrasi",
    name: "Registrasi",
    component: () =>
      import(
        /* webpackChunkName: "registrasi" */ "../views/dasbor/Registrasi.vue"
      ),
  },
  {
    path: "/produk",
    name: "Produk",
    component: () => 
      import(/* webpackChunkName: "produk" */ "../views/dasbor/Produk.vue")
  },
 
  {
    path: "/transaksion",
    name: "Transaksion",
    component: () => 
      import(/* webpackChunkName: "transaksion" */ "../views/dasbor/Transaksion.vue")
  },
  {
    path: "/transaksion-masuk",
    name: "Transaksion Masuk",
    component: () => 
      import(/* webpackChunkName: "transaksion-masuk" */ "../components/transaksi/ComTransaksiMasuk.vue")
  },
  {
    path: "/transaksimasuk",
    name: "TransaksiMasuk",
    component: () =>
      import(/* webpackChunkName: "transaksimasuk" */ "../components/ComTransaksiMasuk.vue")
  },
  {
    path: "/transaksimasukdetail",
    name: "TransaksiMasukDetail",
    component: () =>
      import(/* webpackChunkName: "transaksimasukdetail" */ "../components/transaksi/ComDetailTransaksi.vue")
  },
  {
    path: "/transaksiuser",
    name: "TransaksiUser",
    component: () =>
      import(/* webpackChunkName: "transaksiuser" */ "../components/transaksi/user/ComTransaksi")
  },
  {
    path: "/cartcoba",
    name: "CartCoba",
    component: () =>
      import(/* webpackChunkName: "cartcoba" */ "../views/user/CartShopping.vue")
  },
  {
    path: "/cartcobas/:id",
    name: "CartDetails",
    component: () =>
      import(/* webpackChunkName: "cartcoba/:id" */ "../views/user/DetailCartShopping.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

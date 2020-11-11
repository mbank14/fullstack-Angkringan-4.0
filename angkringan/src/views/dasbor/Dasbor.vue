<template>
  <div>
    <v-toolbar flat app class="white--text" color="#734046">
      <v-toolbar-title>Produk</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="logout white--text my-4" @click="logout()">
        Logout?
      </span>
    </v-toolbar>
    <div>
      <!-- <Toko /> -->
      <produk></produk>
      <router-view></router-view>

      <!-- <v-btn class="text-capitalize" outlined @click="logout()">Logout</v-btn> -->
    </div>
    <BottomNav />
  </div>
</template>

<script>
// import Toko from "./toko/DetailToko";
import Produk from "./Produk";
import BottomNav from "@/components/BottomNav";
export default {
  data() {
    return {
      fixed: true,
      value: "recent",
    };
  },
  components: {
    BottomNav,
    Produk,
    // Toko,
  },
  methods: {
    logout() {
      console.log("klik");
      localStorage.removeItem("Bearer");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.logout {
  cursor: pointer;
}
</style>

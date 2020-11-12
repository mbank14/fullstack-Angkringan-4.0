<template>
  <div>
    <v-toolbar flat class="black--text">
      <v-toolbar-title>Produk</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="logout black--text my-4" @click="logout()">
        Logout?
      </span>
    </v-toolbar>
    <div>
      <!-- <Toko /> -->
      <produk></produk>
      <router-view></router-view>
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

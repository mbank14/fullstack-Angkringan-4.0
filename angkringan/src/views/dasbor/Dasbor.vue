<template>
  <div>
    <v-toolbar flat app color="pink">
      <v-toolbar-title>Produk</v-toolbar-title>
    </v-toolbar>
    <div>
      <produk></produk>
      <router-view></router-view>
      <span class="logout grey--text my-4" @click="logout()">
        Logout
      </span>
      <!-- <v-btn class="text-capitalize" outlined @click="logout()">Logout</v-btn> -->
    </div>
    <BottomNav />
  </div>
</template>

<script>
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

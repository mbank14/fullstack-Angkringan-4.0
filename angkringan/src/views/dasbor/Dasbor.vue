<template>
  <div>
    <div>
      <produk></produk>
      <router-view></router-view>
    </div>
    <BottomNav />
    <v-btn @click="logout()">Logout</v-btn>
  </div>
</template>

<script>
import Produk from "./Produk";
import BottomNav from "@/components/BottomNav";
export default {
  data() {
    return {
      fixed: true,
      value: "recent"
    };
  },
  components: {
    BottomNav,
    Produk
  },
  methods: {
    logout() {
      console.log("klik");
      localStorage.removeItem("Bearer");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style></style>

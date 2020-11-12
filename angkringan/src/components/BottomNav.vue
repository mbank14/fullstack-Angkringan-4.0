<template>
  <div>
    <div
      style="
        width: 100%;
        height: 70px;
    "
    >
      <v-bottom-navigation
        :value="value"
        color="white"
        background-color="#5c6e91"
        fixed
      >
        <v-btn>
          <span><router-link to="/produk">Produk</router-link></span>
          <v-icon color="#dd9866">mdi-clipboard-list-outline</v-icon>
        </v-btn>

        <v-btn>
          <span><router-link to="#">Diskon</router-link></span>
          <v-icon color="#dd9866">mdi-sale</v-icon>
        </v-btn>

        <v-btn>
          <span><router-link to="#">Transaksi</router-link></span>
          <v-icon color="#dd9866">mdi-cart-variant</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: true,
      value: "recent",
    };
  },
};
</script>

<style scoped>
.v-application a {
  color: white;
}
</style>

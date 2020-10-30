<template>
  <div>
       <div style="
        width: 100%;
        height: 70px;
    ">
    <v-bottom-navigation :value="value" color="pink" fixed >
      <v-btn>
        <span><router-link to="/produk">produk</router-link></span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Diskon</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Transaksi</span>

        <v-icon>mdi-map-marker</v-icon>
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
            value: 'recent'
    }
  },
}
</script>

<style>

</style>
<template>
  <div>
    <v-toolbar flat app color="pink">
      <v-toolbar-title>Produk</v-toolbar-title>
    </v-toolbar>
    <div>
        <produk></produk>
        <router-view></router-view>
    </div>
   <BottomNav />
  </div>
</template>

<script>
import Produk from './Produk'
import BottomNav from '@/components/BottomNav'
export default {
    data() {
        return {
            fixed: true,
            value: 'recent'
        }
    },
    components:{
      BottomNav,
      Produk
    }
};
</script>

<style></style>

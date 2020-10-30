<template>
  <div>
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

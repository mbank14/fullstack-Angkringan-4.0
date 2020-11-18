<template>
  <div>
     <v-row>
         <v-col v-for="c in cart" :key="c.id" 
            cols="12">
            <!-- <router-link :to="{ name: 'CartDetail', params: { id: c.id } }"> -->
             <v-card>
                <v-card-text>
                    <h3>{{ c.id }}</h3>
                    <h4>{{ c.date }}</h4>
                </v-card-text>
             </v-card>
             <!-- </router-link> -->
         </v-col>

         <!-- ini coba yang baru  -->
         <v-col v-for="dta in getDataCarts" :key="dta.id" cols="12">
             <v-card>
                 <h1>{{ dta.id }} </h1>
                 <v-card-text>
                     <div v-for="dt in dta.items" :key="dt.id">
                         {{dt.nama}}
                     </div>
                 </v-card-text>
             </v-card>
         </v-col>
     </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            api: "http://192.168.1.15:8000/",
            cart: []
        }
    },
    methods: {
        async getDataCart() {
          const response = await axios.get(`${this.api}sales/`);
          this.cart = response.data.data;
          console.log(this.cart);
        },
    },
    mounted() {
        this.getDataCart();
    },
    computed: {
        ...mapGetters(["getDataCarts"])
    },

}
</script>

<style>

</style>
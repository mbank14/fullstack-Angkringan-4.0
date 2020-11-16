<template>
  <div>
     <v-row>
         <v-col>
             <v-card>
                 {{ cart }}
             </v-card>
         </v-col>
     </v-row>
  </div>
</template>

<script>
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

}
</script>

<style>

</style>
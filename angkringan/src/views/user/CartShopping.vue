<template>
  <div>
      <h4>{{ cart }}</h4>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            api: "http://192.168.1.15:8000/",
            cart: []
        }
    },
    methods: {
        async getDataCart() {
          const response = await axios.get(
              `${this.api}/sales/`
          );
          this.cart = this.response.data.data;
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
<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            api: "192.168.1.17:8000/",
            detailCart: []
        }
    },
    methods: {
        async getDetailCart(){
            const respone = await axios.get(`${this.api}sales/${this.$route.params.id}`);
            this.detailCart = respone.data.data;
            console.log(this.detailCart);
        }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>
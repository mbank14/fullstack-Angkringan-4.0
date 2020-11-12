<template>
  <div>
    <v-card v-for="tokos in toko" :key="tokos.id">
      <v-img :src="tokos.gambar" height="250"> </v-img>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      toko: [],
      api: "http://192.168.137.8:8000/",
    };
  },

  methods: {
    async detailToko() {
      const response = await axios.get(
        `${this.api}toko/${this.$route.params.id}`
      );
      this.toko = response.data.toko;
      console.log(this.toko);
    },
  },
  mounted() {
    this.detailToko();
  },
};
</script>

<style></style>

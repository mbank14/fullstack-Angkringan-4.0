<template>
  <v-container>
    <!-- <Search class="d-flex justify-end" /> -->
    <p class="text-right grey--text my-4">
      Ingin berdagang? <router-link to="/login">Login/Daftar</router-link>
    </p>
    <v-row>
      <v-col v-for="items in toko" :key="items.id" cols="12" md="3" sm="6">
        <v-card class="pa-2 card-hover" outlined>
          <v-card-title class="text-title">{{ items.nama }}</v-card-title>
          <v-img
            :src="items.gambar"
            class="white--text align-end rounded-lg"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="180px"
          >
          </v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
          <router-link :to="`/details/${items.id}`">
            <v-btn
              class="white--text text-capitalize text-btn"
              color="#394867"
              width="100%"
            >
              Kunjungi Toko</v-btn
            >
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
// import Search from "@/components/Search";

export default {
  name: "Home",
  data() {
    return {
      api: "http://192.168.137.8:8000/",
      toko: [],
    };
  },
  components: {},

  methods: {
    async getToko() {
      const response = await axios.get(`${this.api}toko/`);
      this.toko = response.data.toko;
      console.log(this.toko);
    },
  },
  async mounted() {
    this.getToko();
    if (localStorage.getItem("Bearer")) {
      this.$router.push({ name: "Dasbor" });
    } else {
      scrollTo(0, 0);
    }
  },
};
</script>
<style scoped>
.v-application p {
  font-size: 12px;
}
</style>

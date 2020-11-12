<template>
  <div>
    <v-card
      v-for="item in toko"
      :key="item.id"
      class="mx-left"
      max-width="450"
      flat
      cols="12"
      sm="6"
    >
      <v-list-item three-line>
        <v-list-item-avatar tile size="140" color="grey">
          <v-img
            :src="item.gambar"
            class="white--text align-end rounded-lg"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ item.nama }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.alamat }}</v-list-item-subtitle>
          <div class="overline mb-4"></div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      api: "http://192.168.43.149:8000/",
      toko: [],
    };
  },
  methods: {
    async getDetailToko() {
      try {
        const response = await axios.get(
          `${this.api}toko/${this.$route.params.id}`
        );
        this.toko = response.data.toko;
        console.log(this.toko);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getDetailToko();
  },
};
</script>

<style></style>

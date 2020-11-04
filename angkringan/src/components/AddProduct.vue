<template>
  <div>
    <v-container class="fluid">
      <v-card app flat class="mx-auto my-12" max-width="544">
        <v-card-title class="px-1 py-1 ">Tambah Menu</v-card-title>
        <v-text-field label="Nama Item" dense outlined></v-text-field>
        <v-text-field label="Harga" dense outlined></v-text-field>
        <v-text-field label="Gambar" dense outlined></v-text-field>
          <v-select :items="items" label="Category" dense outlined></v-select>
        <v-card-actions class="px-1 py-1">
          <v-btn color="white--text green darken-1">
            Tambah
          </v-btn>
          <v-btn outlined to="/dasbor">Batal</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getCategory(){
      const token = localStorage.getItem("Bearer")
      console.log(token)
      const response = await axios.get("http://192.168.1.25:8000/products/category/", { headers: {"Authorization" :  token}});
      this.items = response.data.data.map(item => item.name_c)
      console.log(response.data.data)
    },
    // async addData(){
    //   const response = await axios.post("http://192.168.1.25:8000/products/input_products/", )
    // }
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style>
</style>
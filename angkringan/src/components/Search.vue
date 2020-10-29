<template>
  <v-container>
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      input="text"
      placeholder="Cari barang"
      dense
      outlined
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // const response = await axios.get("http://localhost:3000/toko");
    // this.data = response.data;
  }
};
</script>

<style scoped>
.v-input {
  max-width: 20em;
  height: 20%;
  font-size: 14px;
}
</style>
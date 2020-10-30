<template>
  <div>
      <h1>ini form tambah</h1>
      <div>
          <v-text-field
            label="Nama Item"
            outlined
          ></v-text-field>
          <v-text-field
            label="Harga"
            outlined
          ></v-text-field>
          <v-text-field
            label="Jumlah Qyt"
            outlined
          ></v-text-field>
          <v-text-field
            label="Nama Item"
            outlined
          ></v-text-field>

      </div>
      <div>
        <v-btn>
          <router-link to="/dasbor">
            save
          </router-link>
        </v-btn>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
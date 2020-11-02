<template>
  <div>
    <v-toolbar flat app color="blue">
      <v-btn flat color="pink">
        <v-icon>mdi-right</v-icon>
        <span>back</span>
      </v-btn>
      
      <v-toolbar-title>
        Tambah Item
      </v-toolbar-title>
    </v-toolbar>
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
            label="Keterangan"
            outlined
          ></v-text-field>
          <v-file-input
      small-chips
      multiple
      label="Upload foto"
    ></v-file-input>
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